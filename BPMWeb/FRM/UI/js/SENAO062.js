var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

//基本資料
var senao062002 = document.getElementById("senao062002"); //表單單號
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別

/*---------------------公用變數 End--------------*/
/*---------------------Form Load Function Start--------------*/
$(document).ready(function () {
  //Load menu
  loginCheck(); //登入檢查
  let post = {
    ID: userId, //工號
    LDAP: "ALL", //LDAP ID
    NAME: "ALL", //員工姓名
    DEP: "ALL", //部門
    COMPAY: "ALL", //公司
    DEPNAME: "ALL",
  };
  let data = getUserData(post);
  if (data.status == "OK") {

    COMPANYID = data.data.COMPANY_ID;
    COMPANY_NAME = data.data.COMPANY_NAME;
    Department = data.data.DEP_ID;
    Department_Name = data.data.DEP_NAME;
    user_Name = data.data.USER_NAME;
    userOid = data.data.USER_OID;
  }
  //vivian 暫時定義 start
  /*
  activityId = "UserTask_2";
  ProcessPackageId='SENAO062';//vivian 抓不到單號暫時定義
  formId='SENAO062';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  systemDateTime = showCurrentDate(); //今天日期
  //frmEvent();
  formOpen();
  formCreate();
  frmEvent();
});
function formCreate(){
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  //setActivityFieldControl();
  //Label底色
  $("[name^='lbl_'],[name^='Label39']:not([name$='_hdn'],[name$='001'],[name$='002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //設定申請人*/
  $('#senao062003').val(userId);
  $('#senao062005').val(user_Name);
  document.getElementById("senao062003_b1").disabled = true; //申請人按鈕反灰
  //設定所屬部門*/
  $('#senao062004').val(Department);
  $('#senao062006').val(Department_Name);
  $('#senao062002').attr('disabled', 'true');//單號
  applicant = $('#senao062003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao062004').val();//發起流程時參數 申請人部門ID
  //日期
  //測試用
  //$('#senao062007').val(0);
  /*
  $('#senao062011').val('資訊部');
  $('#senao062033').val('智能專案管理部');
  $('#senao062013').val('工程師');
  $('#senao062015').val(user_Name);
  $('#senao062021').val('Vivian33.Tsai@senao.com');*/
  //測試用結束
  senao062036.value = systemDateTime;
  if (activityId == "UserTask_2") {	//填單人
    $("#form_org").attr("disabled",false);
	$("#senao062027_b1").attr("disabled",false);
	$('#senao062004').css({"background-color": EDIT_BGCOLOR});	//申請單位
	$('#senao062006').css({"background-color": EDIT_BGCOLOR});	//申請單位
	$('#senao062003').css({"background-color": EDIT_BGCOLOR});	//申請人
	$('#senao062005').css({"background-color": EDIT_BGCOLOR});	//申請人
	$('#senao062038').css({"background-color": EDIT_BGCOLOR});	//送件別
	$('#senao062007').css({"background-color": EDIT_BGCOLOR});	//名片類別
	$('#senao062011').css({"background-color": EDIT_BGCOLOR});	//一階單位別(中)
	$('#senao062012').css({"background-color": EDIT_BGCOLOR});	//一階單位別(英)
	$('#senao062033').css({"background-color": EDIT_BGCOLOR});	//二階單位別(中)
	$('#senao062034').css({"background-color": EDIT_BGCOLOR});	//二階單位別(英)
	$('#senao062013').css({"background-color": EDIT_BGCOLOR});	//職稱(中)
	$('#senao062014').css({"background-color": EDIT_BGCOLOR});	//職稱(英)
	$('#senao062015').css({"background-color": EDIT_BGCOLOR});	//姓名(中)
	$('#senao062016').css({"background-color": EDIT_BGCOLOR});	//姓名(英)
	$('#senao062017').css({"background-color": EDIT_BGCOLOR});	//電話
    $('#senao062018').css({"background-color": EDIT_BGCOLOR});	//分機
	$('#senao062019').css({"background-color": EDIT_BGCOLOR});	//傳真		
	$('#senao062037').css({"background-color": EDIT_BGCOLOR});	//用途說明
	$('#senao062030').css({"background-color": EDIT_BGCOLOR});	//用途說明詳述
    //20221021 Calvin 因senao062019、senao062027從dropdownlist改為textbox，流程有針對該欄位開放，故改從表單鎖住
    $("#senao062019,#senao062027").attr("readOnly",true);
    //列印地址Info
    $("#senao062026,#senao062027,#senao062032").css({"background-color": EDIT_BGCOLOR});
	EmpInfoEmlementStatus();
    
	if (formInstOID === ""){//複製表單時，下方欄位Reset
		$("#senao062036").val(systemDateTime);
		$("#senao062031").val('');	//退件說明
		if (IsInvaildDept($("#senao062004").val())){	//判斷是否為失效部門
			$("#senao062004").val('');	//清空部門
			$("#senao062006").val('');	//清空部門
		}	  
	}
	} 
	if (activityId == "UserTask_4") { //0020 採購簽核
		$('#senao062031').css({"background-color": EDIT_BGCOLOR});	//退件說明
	}
	return true;
}
function frmEvent() { 
  $('#senao062003').on('change', function () { //申請人OnChange
    senao062003_onChange();
  });
  $('#senao062007').on('change', function () { //名片類別OnChange
    senao062007_onChange();
  });
  $('#senao062019').on('change', function () { //傳真下拉式OnChange
    senao062019_onChange();
  });
}
function formSave(){
	var errMsg='';
	if (activityId == "UserTask_2"){
		if ($("#senao062038").val()==""){
			errMsg += querySNSI009(formId, "001", locale, "", "", "") + "\n"; //請選擇[急件]或[一般件]
		} 
    	if ($("#senao062007").val() == "0" || $("#senao062007").val() == "1"){	//中文版 或中英文版
			if ($("#senao062011").val() == ""){
				errMsg += "[" + $("#lbl_senao062011").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[一階單位別(中)]不可空白!
			}
			if ($("#senao062013").val() == ""){
				errMsg += "[" + $("#lbl_senao062013").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[職稱(中)]不可空白!
			}
			if ($("#senao062015").val() == ""){
				errMsg += "[" + $("#lbl_senao062015").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[姓名(中)]不可空白!
			}
			if ($("#senao062021").val() == ""){
				errMsg += "[" + $("#lbl_senao062021").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[E-Mail]不可空白!
			}
			if ($("#senao062007").val() == "1"){	//中英文版
				if ($("#senao062012").val() == ""){
					errMsg += "[" + $("#lbl_senao062012").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[一階單位別(英)]不可空白!
				}
				if ($("#senao062014").val() == ""){
					errMsg += "[" + $("#lbl_senao062014").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[職稱(英)]不可空白!
				}
				
				if ($("#senao062016").val() == ""){
					errMsg += "[" + $("#lbl_senao062016").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[姓名(英)]不可空白!
				}
			}
		}
		if ($("#senao062037").val() == "2" && $("#senao062030").val() == ""){
			errMsg += querySNSI009(formId, "002", locale, "", "", "") + "\n"; //[用途說明]為[其它-請說明],請於下方輸入說明
		}
		if (errMsg == "") {
          	//if (workItemSource != '1' && workItemSource != '2'){
				genSubject();
            //}
            prepareForFlow();
            prepareForMobile();
		}
	}
  	if (errMsg === "") {		
		return true;
	} else {
		alert(errMsg);
		return false;
	}
}
function formClose() {
	return true;
}
/*---------------------Form Load Function End--------------*/
/*---------------------公用Function Start--------------*/
function frmGeneralLoad(type, today) {
  //通用需要載入的資料
  //設定公司 OU ORG 
  setCompanyObject();
  //設定公司別
  setSelectDefalut("form_ou", apiInvoke + "BPM_COMPANY_INFO_LIST", {}, "");
  form_ou.disabled = true;//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  
  //表單代號
  $('#senao062001').val(type);
  $('#senao062001').attr('disabled', 'true');

  console.log($("#form_ou").val());
  OU_ID = _OU[$("#form_ou").val()];
  ORG_ID = _ORG[$("#form_org").val()];
  return true;
}
function showCurrentDate() {//取得今天日期
  var result = "";
  var d = new Date();
  result = d.getUTCFullYear() + '/' + pad(d.getUTCMonth() + 1) + '/' + pad(d.getUTCDate());
  //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
  return result;
}
function pad(number) {//日期補0
  let r = String(number);
  if (r.length == 1) {
      r = "0" + r;
  }
  return r;
}
/**
 * 準備流程所需變數
 */
function prepareForFlow() {	
	var ManagerID = queryManagerByEmpId($("#senao062003").val());
	$("#applicantManagerId").val(ManagerID);	//申請人直屬主管
	return true;
}
/**
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile(){
	$("#senao062038_m").val($('input[name*=senao062038]:checked').parent('label').text());	//送件別
	$("#senao062007_m").val($("#senao062007").find('option:selected').text());	//名片類別
	$("#senao062008_m").val($("#senao062008").find('option:selected').text());	//盒數
	$("#senao062019_m").val($("#senao062019").val());	//傳真
	$("#senao062027_m").val($("#senao062027").val() + $("#senao062032").val() + $("#senao062026").val());	//印製地址
	$("#senao062037_m").val($("#senao062037").find('option:selected').text());	//用途說明
	$("#senao062030_m").val($("#senao062030").val());	//用途說明詳述
	$("#senao062031_m").val($("#senao062031").val());	//退件說明	
	return true; 
}
/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const labelText = (document.getElementById('Label1')?.innerText || '').trim();
    const applicant = ($('#senao062005').val() || '').trim();
    const prefixSubject = `${applicant}_${labelText}`;

    // 父視窗安全檢查
    const pdoc = window.parent?.document;
    if (!pdoc) return;

    // 嘗試取得父頁主旨欄位
    const selectors = [
      '#subject',
      'form[name="form1"] input[name="Subject"]',
      'form[name="form1"] input[name="txtSubject"]'
    ];

    let applySubject = '';
    for (const sel of selectors) {
      try {
        const val = window.parent.$(sel).val?.() || pdoc.querySelector(sel)?.value;
        if (val) { applySubject = val.toString(); break; }
      } catch (e) { /* ignore */ }
    }

    // 組合新主旨
    let finalSubject = '';
    if (applySubject) {
      finalSubject = applySubject.includes(prefixSubject)
        ? applySubject
        : `${prefixSubject}(${applySubject})`;
    } else {
      finalSubject = prefixSubject;
    }

    // 設定回父頁（依照可用選擇器）
    for (const sel of selectors) {
      try {
        const el = pdoc.querySelector(sel);
        if (el) { el.value = finalSubject; return; }
        if (window.parent.$(sel).length) { window.parent.$(sel).val(finalSubject); return; }
      } catch (e) { /* ignore */ }
    }
  } catch (err) {
    console.warn('genSubject error:', err);
  }
}
function EmpInfoEmlementStatus(){
	$('#senao062011').attr("disabled", true);	//一階單位別(中)
	$('#senao062012').attr("disabled", true);	//一階單位別(英)
	$('#senao062033').attr("disabled", true);	//二階單位別(中)
	$('#senao062034').attr("disabled", true);	//二階單位別(英)
	$('#senao062013').attr("disabled", true);	//職稱(中)
	//$('#senao062013_b1').attr("disabled", true);	//職稱(中)
	$('#senao062014').attr("disabled", true);	//職稱(英)
	$('#senao062015').attr("disabled", true);	//姓名(中)
	$('#senao062016').attr("disabled", true);	//姓名(英)
	switch ($("#senao062007").val()) {
		case "0":	//中文版			
			$('#senao062012').css({"background-color": DEFAULT_BGCOLOR});	//一階單位別(英)
			$('#senao062034').css({"background-color": DEFAULT_BGCOLOR});	//一階單位別(英)
			$('#senao062014').css({"background-color": DEFAULT_BGCOLOR});	//職稱(英)
			$('#senao062016').css({"background-color": DEFAULT_BGCOLOR});	//姓名(英)
			if (querySNSI003("SN062_S01").indexOf($("#senao062004").val()) > -1){
				$('#senao062013_b1').attr("disabled", false);	//職稱(中)
			}else{
				$('#senao062013_b1').attr("disabled", true);	//職稱(中)
			}
			break;
		case "1":	//中英文版
			$('#senao062012').css({"background-color": EDIT_BGCOLOR});	//一階單位別(英)
			$('#senao062034').css({"background-color": EDIT_BGCOLOR});	//一階單位別(英)
			$('#senao062014').css({"background-color": EDIT_BGCOLOR});	//職稱(英)
			$('#senao062016').css({"background-color": EDIT_BGCOLOR});	//姓名(英)
			$('#senao062013').css({"background-color": EDIT_BGCOLOR});	//職稱(中)
			$('#senao062015').css({"background-color": EDIT_BGCOLOR});	//姓名(中)
			if (querySNSI003("SN062_S01").indexOf($("#senao062004").val()) > -1){
				$('#senao062013_b1').attr("disabled", false);	//職稱(中)
			}else{
				$('#senao062013_b1').attr("disabled", true);	//職稱(中)
			}
			break;
			$('#senao062015').attr("disabled", false);	//姓名(中)
			$('#senao062016').attr("disabled", false);	//姓名(英)
		case "2":	//空白名片
			$('#senao062012').css({"background-color": DEFAULT_BGCOLOR});	//一階單位別(英)
			$('#senao062034').css({"background-color": DEFAULT_BGCOLOR});	//一階單位別(英)
			$('#senao062014').css({"background-color": DEFAULT_BGCOLOR});	//職稱(英)
			$('#senao062016').css({"background-color": DEFAULT_BGCOLOR});	//姓名(英)
			$('#senao062013').css({"background-color": DEFAULT_BGCOLOR});	//職稱(中)
			$('#senao062015').css({"background-color": DEFAULT_BGCOLOR});	//姓名(中)
			//Modify by Michelle 2006-02-14 敦怡提出開放修改
			$('#senao062015').attr("disabled", false);	//姓名(中)
			$('#senao062016').attr("disabled", false);	//姓名(英)
			break;
		default:
			$('#senao062011').css({"background-color": EDIT_BGCOLOR});	//一階單位別(中)
			$('#senao062012').css({"background-color": EDIT_BGCOLOR});	//一階單位別(英)
			$('#senao062033').css({"background-color": EDIT_BGCOLOR});	//二階單位別(中)
			$('#senao062034').css({"background-color": EDIT_BGCOLOR});	//二階單位別(英)
			$('#senao062013').css({"background-color": EDIT_BGCOLOR});	//職稱(中)
			$('#senao062014').css({"background-color": EDIT_BGCOLOR});	//職稱(英)
			$('#senao062015').css({"background-color": EDIT_BGCOLOR});	//姓名(中)
			$('#senao062016').css({"background-color": EDIT_BGCOLOR});	//姓名(英)
		}
		return true;
}
/** 
 * 取得人員資料相關資訊 HRDB
 */
function GetUserInfoByEmpId(EmpId){
	var obj_UserInfo = {};
	var GetDeptInfo = {};
	var sqlid = "BPM_HR_SENAO062_01";
	var params = [];
	var data = [];
	params.push(EmpId);
	data = ajaxGetData(invokeURL + sqlid, {
      EmpId : params[0]
	});
	if (data[0].result == undefined) {
		if (data.length > 0) {
			obj_UserInfo.EmployeeNO = data[0].EmployeeNO;
			obj_UserInfo.EmployeeCName = data[0].EmployeeCName;
			obj_UserInfo.EmployeeEName = data[0].EmployeeEName;
			obj_UserInfo.DepartmentCode = data[0].DepartmentCode;
			obj_UserInfo.DepartmentCName = data[0].DepartmentCName;			
			obj_UserInfo.EmployeeNameCardJobCName = data[0].EmployeeNameCardJobCName;
			obj_UserInfo.EmployeeNameCardJobEName = data[0].EmployeeNameCardJobEName;
			obj_UserInfo.EmployeeMail = data[0].EmployeeMail;
			if (querySNSI003("SN062_S02").indexOf(data[0].DepartmentCode) > -1){
				obj_UserInfo.DepartmentCName_1 = data[0].DepartmentCName;
				obj_UserInfo.DepartmentEName_1 = data[0].DepartmentEName;
				obj_UserInfo.DepartmentCName_2 = "";
				obj_UserInfo.DepartmentEName_2 = "";
			}else{				
				GetDeptInfo = findDeptInfo(data[0].DepartmentCode);
				obj_UserInfo.DepartmentCName_1 = GetDeptInfo.DeptName_1_CN;
				obj_UserInfo.DepartmentEName_1 = GetDeptInfo.DeptName_1_EN;
				obj_UserInfo.DepartmentCName_2 = GetDeptInfo.DeptName_2_CN;
				obj_UserInfo.DepartmentEName_2 = GetDeptInfo.DeptName_2_EN;
			}
		}
	}
	return obj_UserInfo;
}

/**
 * 取上層單位
 * @param {string} DeptId
 * @returns DeptInfo 部門相關資料物件 (
 * 		1.DeptID 2.DeptName 3.DeptLevel 4.UpperDeptID 5.UpperDeptName 6.UpperDeptLevel)
 */
function findDeptLevel(DeptId){
	var DeptInfo = {};
	var sqlid = "BPM_getUpperUnitByDeptId";
	var params = [];
	var data = [];
	params.push(DeptId);
	data = ajaxGetData(invokeURL + sqlid, {
      DeptId : params[0]
	});
	if (data[0].result == undefined) {
		if (data.length > 0) {
			DeptInfo.DeptID = fixNull(data[0].DEPTID);
			DeptInfo.DeptName = fixNull(data[0].DEPTNAME);
			DeptInfo.DeptLevel = fixNull(data[0].DEPTLEVEL);
			DeptInfo.UpperDeptID = fixNull(data[0].UPPERDEPTID);
			DeptInfo.UpperDeptName = fixNull(data[0].UPPERDEPTNAME);
			DeptInfo.UpperDeptLevel = fixNull(data[0].UPPERDEPTLEVEL);
		}else {
		  return "";
		}
	}
  	return DeptInfo;
}

/**
 * 取最上層一階及二階單位
 * @param {string} DeptId
 * @returns DeptInfo 部門相關資料物件 (
 * 		1.DeptName_1_CN 2.DeptName_1_EN 3.DeptName_2_CN 4.DeptName_2_EN)
 */
function findDeptInfo(DeptId){
	var DeptInfo = {};
	var getUpDeptLevel = {};
	var getODeptLevel = {};
	var O_DeptID = DeptId;
	var Special_1 = querySNSI003("SN062_S03");	//二階單位Show到處級
	var IsSpecialCase_1 = false;
	var Object_Special_1 = {};
	var IsBreak = false;
	for (var i = 0; i < 6; i++){
		if (i > 0){
			DeptId = getUpDeptLevel.UpperDeptID;
		}
		getUpDeptLevel = findDeptLevel(DeptId);
		if (getUpDeptLevel.DeptLevel > 2){	//本階為部級以下			
			if (getUpDeptLevel.UpperDeptLevel == 2){	//上階為部級
				DeptInfo.DeptName_1_CN = getUpDeptLevel.UpperDeptName;
				DeptInfo.DeptName_1_EN = findDeptName_EN(getUpDeptLevel.UpperDeptID);
				DeptInfo.DeptName_2_CN = getUpDeptLevel.DeptName;
				DeptInfo.DeptName_2_EN = findDeptName_EN(getUpDeptLevel.DeptID);
				
				IsBreak = true;
			}else if (getUpDeptLevel.UpperDeptLevel < 2 && getUpDeptLevel.DeptLevel > 3){	//上階為部級以上 且本階為 分部級以下
				DeptInfo.DeptName_1_CN = getUpDeptLevel.UpperDeptName;
				DeptInfo.DeptName_1_EN = findDeptName_EN(getUpDeptLevel.UpperDeptID);
				DeptInfo.DeptName_2_CN = getUpDeptLevel.DeptName;
				DeptInfo.DeptName_2_EN = findDeptName_EN(getUpDeptLevel.DeptID);
				
				IsBreak = true;
			}else if (getUpDeptLevel.UpperDeptLevel < 2 && getUpDeptLevel.DeptLevel == 3){	//上階為部級以上 且本階為 分部級
				getODeptLevel = findDeptLevel(O_DeptID);	//取申請人的部門
				if (getODeptLevel.DeptLevel > 3 && getODeptLevel.UpperDeptLevel == 3){	//申請人的部門在分部級以下 且 上階在分部級
					DeptInfo.DeptName_1_CN = getODeptLevel.UpperDeptName;
					DeptInfo.DeptName_1_EN = findDeptName_EN(getODeptLevel.UpperDeptID);
					DeptInfo.DeptName_2_CN = getODeptLevel.DeptName;
					DeptInfo.DeptName_2_EN = findDeptName_EN(getODeptLevel.DeptID);					
				}else{
					DeptInfo.DeptName_1_CN = getUpDeptLevel.DeptName;
					DeptInfo.DeptName_1_EN = findDeptName_EN(getUpDeptLevel.DeptID);
					DeptInfo.DeptName_2_CN = "";
					DeptInfo.DeptName_2_EN = "";
				}				
				
				IsBreak = true;
			}
			
			if (Special_1.indexOf(getUpDeptLevel.DeptID) >= 0){	//本階單位符合 二階單位Show到處級的設定
				IsSpecialCase_1 = true;
				Object_Special_1.DeptName_CN = getUpDeptLevel.DeptName;
				Object_Special_1.DeptName_EN = findDeptName_EN(getUpDeptLevel.DeptID);
			}
			
			if (IsSpecialCase_1 && !$$.isEmptyObject(Object_Special_1)){
				DeptInfo.DeptName_2_CN = Object_Special_1.DeptName_CN;
				DeptInfo.DeptName_2_EN = Object_Special_1.DeptName_EN;
			}
			
			if (IsBreak){
				break;
			}
			
		}else{
			DeptInfo.DeptName_1_CN = getUpDeptLevel.DeptName;
			DeptInfo.DeptName_1_EN = findDeptName_EN(getUpDeptLevel.DeptID);
			DeptInfo.DeptName_2_CN = "";
			DeptInfo.DeptName_2_EN = "";
			break;
		}
	}	
	return DeptInfo;
}

/**
 * 取單位英文名稱 HRDB
 * @param {string} DeptId
 * @returns {string} DeptName_EN
 */
function findDeptName_EN(DeptId){
	var DeptName_EN = "";
	var sqlid = "BPM_HR_SENAO062_04";
	var params = [];
	var data = [];
	params.push(DeptId);
	data = ajaxGetData(invokeURL + sqlid, {
      DeptId : params[0]
	});
	if (data[0].result == undefined) {
		if (data.length > 0) {
			DeptName_EN = fixNull(data[0].resal003);
		} else {
			return "";
		}
	}
	return DeptName_EN;
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao062003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao062003','senao062005','senao062004','senao062006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao062027_b1').on('click', function () { //印製地址開窗
  // sessionStorage 存入數據
  let tTitle = "印製地址";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao062027','senao062032','senao062026','senao062017','senao062019','senao062040');//回傳元件參數
  let tReturnFunction = new Array("senao062019_onChange()"); //回傳函數
  let tColAPi = "BPM_SENAO062_06";
  let tAPI = invokeURL + 'BPM_SENAO062_06';
  let tParameter = { form_ou: form_ou.value, mainOrgId: form_ou.value, UNID: null, ORGNAME: null };
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  var pWidth1 = 1300;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth1, pHeight);
});
$('#senao062013_b1').on('click', function () { //職稱開窗 HRDB
  // sessionStorage 存入數據
  let tTitle = "職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','senao062013','senao062014');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_HR_SENAO062_03";
  let tAPI = invokeURL + 'BPM_HR_SENAO062_03';
  let tParameter = { NAMECARD_JOB_CODE: null, NAMECARD_JOB_CNAME: null, NAMECARD_JOB_ENAME: null};
  let tQBEField = { NAMECARD_JOB_CODE: 'NAMECARD_JOB_CODE', NAMECARD_JOB_CNAME: 'NAMECARD_JOB_CNAME',NAMECARD_JOB_ENAME:'NAMECARD_JOB_ENAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/* 提供申請人工號輸入或選取後呼叫
*/
function senao062003_onChange(){
	var userInfo = {};
    if ($("#senao062003").val() !== "") {    
        userInfo = GetUserInfoByEmpId($("#senao062003").val());
		if (!$.isEmptyObject(userInfo)) {
			$("#senao062003").val(userInfo.EmployeeNO); //申請人ID
			$("#senao062005").val(userInfo.EmployeeCName); //申請人名稱
			$("#senao062004").val(userInfo.DepartmentCode); //申請單位ID
			$("#senao062006").val(userInfo.DepartmentCName); //申請單位名稱
			$("#senao062011").val(userInfo.DepartmentCName_1); //一階單位別(中)
			$("#senao062012").val(userInfo.DepartmentEName_1); //一階單位別(英)
			$("#senao062033").val(userInfo.DepartmentCName_2); //二階單位別(中)
			$("#senao062034").val(userInfo.DepartmentEName_2); //二階單位別(英)
			$("#senao062013").val(userInfo.EmployeeNameCardJobCName); //職稱(中)
			$("#senao062014").val(userInfo.EmployeeNameCardJobEName); //職稱(英)
			$("#senao062015").val(userInfo.EmployeeCName); //姓名(中)
			$("#senao062016").val(userInfo.EmployeeEName); //姓名(英)
			$("#senao062021").val(userInfo.EmployeeMail); //E-Mail
			
			if ($("#senao062007").val() === "0" || $("#senao062007").val() === "2"){	//中文版 或 空白名片
				$("#senao062012").val(''); //單位別(英)
				$("#senao062014").val(''); //職稱(英)
				$("#senao062016").val(''); //姓名(英)
				if ($("#senao062007").val() === "2"){	//空白名片
					$("#senao062012").val(''); //單位別(英)
					$("#senao062013").val(''); //職稱(中)
					$("#senao062015").val(''); //姓名(中)
				}
			}
			return true;
		}else{
			var msgstr = "No data. \n";
			alert(msgstr);
			$("#senao062003").val(''); //申請人ID
			$("#senao062005").val(''); //申請人名稱
			$("#senao062004").val(''); //申請單位ID
			$("#senao062006").val(''); //申請單位名稱
			$("#senao062011").val(''); //一階單位別(中)
			$("#senao062012").val(''); //一階單位別(英)
			$("#senao062033").val(''); //二階單位別(中)
			$("#senao062034").val(''); //二階單位別(英)
			$("#senao062013").val(''); //職稱(中)
			$("#senao062014").val(''); //職稱(英)
			$("#senao062015").val(''); //姓名(中)
			$("#senao062016").val(''); //姓名(英)
			$("#senao062021").val(''); //E-Mail
			return false;
		}
	} else {
		$("#senao062003").val(''); //申請人ID
		$("#senao062005").val(''); //申請人名稱
		$("#senao062004").val(''); //申請單位ID
		$("#senao062006").val(''); //申請單位名稱
		$("#senao062011").val(''); //一階單位別(中)
		$("#senao062012").val(''); //一階單位別(英)
		$("#senao062033").val(''); //二階單位別(中)
		$("#senao062034").val(''); //二階單位別(英)
		$("#senao062013").val(''); //職稱(中)
		$("#senao062014").val(''); //職稱(英)
		$("#senao062015").val(''); //姓名(中)
		$("#senao062016").val(''); //姓名(英)
		$("#senao062021").val(''); //E-Mail
		return false;
	}

}
/**
* 名片類別onchange
*/
function senao062007_onChange(){
	var errMsg = "";
	if ($("#senao062003").val() === ''){		
		errMsg = "[" + $("#lbl_senao062003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[申請人]不可空白!	
		alert(errMsg);
	} else {
		var ok = senao062003_onChange();
		if (ok === false) {
			return false; // 不要往下跑 EmpInfoEmlementStatus()
		}
		switch ($("#senao062007").val()) {
		case "0":	//中文版
			$("#senao062012").val(''); //一階單位別(英)
			$("#senao062034").val(''); //二階單位別(英)
			$("#senao062014").val(''); //職稱(英)
			$("#senao062016").val(''); //姓名(英)
			break;
		case "1":	//中英文版
			break;
		case "2":	//空白名片
			$("#senao062012").val(''); //一階單位別(英)
			$("#senao062034").val(''); //二階單位別(英)
			$("#senao062014").val(''); //職稱(英)
			$("#senao062016").val(''); //姓名(英)
			$("#senao062013").val(''); //職稱(中)
			$("#senao062015").val(''); //姓名(中)		
			break;
		default:
		}
		EmpInfoEmlementStatus();
	}
	return true;
}
/**
* 傳真下拉式onchange
*/
function senao062019_onChange(){

	if ($("#senao062040").val() === "other"){
		$("#senao062040").css({"background-color": EDIT_BGCOLOR});
		$("#senao062040").attr("disabled", false);
	} else {		
		$("#senao062040").css({"background-color": DEFAULT_BGCOLOR});
		$("#senao062040").attr("disabled", true);      	
	}
    $("#senao062040").val("");
	return true;
}
/*---------------------欄位onChange、onClick Function Start--------------*/