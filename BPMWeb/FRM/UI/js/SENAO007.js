var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
//基本資料
var senao_g002 = document.getElementById("senao_g002"); //表單單號
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao_g016 = document.getElementById("senao_g016"); //所屬部門
var senao_g004_b1 = document.getElementById("senao_g004_b1"); //所屬部門按鈕
var senao_g017 = document.getElementById("senao_g017"); //所屬部門名稱
var senao_g003 = document.getElementById("senao_g003"); //申請人
var senao_g003_t1= document.getElementById("senao_g003_t1"); //申請人姓名
var senao_g006 = document.getElementById("senao_g006"); //到職日期
var senao_g020 = document.getElementById("senao_g020"); //職稱
var senao_g021 = document.getElementById("senao_g021"); //職稱
var senao_g019 = document.getElementById("senao_g019"); //調動工作地點
var senao_g007 = document.getElementById("senao_g007"); //申請日期
//說明事項
var senao_g008 = document.getElementById("senao_g008"); //調動方式
var senao_g008_0 = document.getElementById("senao_g008_0"); //調動職位
var senao_g008_1 = document.getElementById("senao_g008_1"); //調動部門
var senao_g018 = document.getElementById("senao_g018"); //人力需求單號
var btn_QuerySenao006 = document.getElementById("btn_QuerySenao006"); //人力需求單號按鈕
var senao_g009 = document.getElementById("senao_g009"); //說明事項
var senao_g010 = document.getElementById("senao_g010"); //調動部門
var senao_g010_t1 = document.getElementById("senao_g010_t1"); //調動部門名稱
var senao_g010_b1 = document.getElementById("senao_g010_b1"); //調動部門按鈕
var senao_g010_c1 = document.getElementById("senao_g010_c1"); //同意依調動部門之班別時間出勤
var senao_g010_c1_0 = document.getElementById("senao_g010_c1_0"); //同意依調動部門之班別時間出勤 check box
var senao_g011 = document.getElementById("senao_g011"); //調動職稱
var senao_g011_t1 = document.getElementById("senao_g011_t1"); //調動職稱名稱
var senao_g011_b1 = document.getElementById("senao_g011_b1"); //調動職稱按鈕
//隱藏欄位
var senao_g004 = document.getElementById("senao_g004"); //所屬部門--舊系統隱藏
var senao_g004_t1 = document.getElementById("senao_g004_t1"); //所屬部門名稱--舊系統隱藏
var senao_g010_t3 = document.getElementById("senao_g010_t3"); //調動部門--舊系統隱藏
var senao_g012 = document.getElementById("senao_g012"); //生效日期-年--舊系統隱藏
var senao_g013 = document.getElementById("senao_g013"); //生效日期-月--舊系統隱藏
var senao_g014 = document.getElementById("senao_g014"); //生效日期-日--舊系統隱藏
var senao_g005 = document.getElementById("senao_g005"); //職稱--舊系統隱藏
var senao_g005_t1 = document.getElementById("senao_g005_t1"); //職稱名稱--舊系統隱藏
var senao_g008_m = document.getElementById("senao_g008_m"); //調動類別-隱藏
var senao_g019_m = document.getElementById("senao_g019_m"); //調動工作地點-隱藏
var hdn_senao_g010 = document.getElementById("hdn_senao_g010"); //調動部門
var hdn_senao_g021_M = document.getElementById("hdn_senao_g021_M"); //職稱:M級為處級or理級。0為處級，1為理級
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title");//根據組織賦予表單代碼 20260112 Dillan add
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
  $('#senao_g006').val("2025/7/28");
  activityId = "UserTask_2";
  ProcessPackageId='SENAO007';//vivian 抓不到單號暫時定義
  formId='SENAO007';//vivian 抓不到單號暫時定義*/
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
  setActivityFieldControl();
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  
  //設定申請人*/
  $('#senao_g003').val(userId);
  $('#senao_g003_t1').val(user_Name);
  //設定所屬部門*/
  $('#senao_g016').val(Department);
  $('#senao_g017').val(Department_Name);

  applicant = $('#senao_g003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao_g016').val();//發起流程時參數 申請人部門ID
  //設定工作地點下拉選單
  setSelectDefalut("senao_g019", apiInvoke + "BPM_OFFICE_INFO_LIST", {COMPANY: $('#form_ou').val()}, "");
  //將原本的填寫區塊Lable設定底色^:開頭,$:結尾,*:包含
	$("[name^='lbl_'],[name='Label30']:not(:hidden):not([name*='_hdn'],[name$='g001'],[name$='g002'])[class='formButtonClass']").css("background-color", formLabelBGColor); 
  senao_g003_onchange();
  //20260112 Dillan add(s)
  hdn_formnumber_title.value = form_ou.value.toUpperCase()+"007"; //新增hdn_formnumber_title欄位來建立表單單號
  if (form_ou.value === "svn"){
    senao_g019.value = "Foreign RBU"; //越南表單強選取RBU
    senao_g019.disabled = true;
  }
  //20260112 Dillan add(e)
  if(activityId == "UserTask_2"){
		senao_g003.style.backgroundColor = "#f7f7bc";
		senao_g016.style.backgroundColor = "#f7f7bc";
		senao_g019.style.backgroundColor = "#f7f7bc";
		senao_g008.style.backgroundColor = "#f7f7bc";
		senao_g009.style.backgroundColor = "#f7f7bc";
		senao_g011.style.backgroundColor = "#f7f7bc";
		senao_g003.disabled = true;
		senao_g003_t1.disabled = true;
		senao_g016.disabled = true;
		senao_g017.disabled = true;
		senao_g004_b1.disabled = true;
		senao_g007.disabled = true;
		senao_g006.disabled = true;
		senao_g018.disabled = true;
		btn_QuerySenao006.disabled = true;
		senao_g018.style.backgroundColor = "#ffffff";
		senao_g010.disabled = true;
		senao_g010.disabled = true;
		senao_g010_t1.disabled = true;
		senao_g010_b1.disabled = true;
    senao_g010_c1_0.disabled = true;
		senao_g011.disabled = true;
		senao_g011_t1.disabled = true;
		
		if(formInstOID == ""){ //複製表單時，下方欄位Reset
			$("#senao_g007").val(systemDateTime);
			$("#senao_g018").val("");
		}
	}
  return true;
}
function frmEvent() { 
  $('#senao_g003').on('change', function () { //申請人OnChange
    senao_g003_onchange();
  });
  $('#senao_g008').on('change', function () { //調動原因OnChange
    senao_g008_onclick();
  });
  $('#senao_g011').on('change', function () { //調動職稱OnChange
    senao_g011_onchange();
  });
}
function formSave(){
	var errMsg='';
  //FRM_COL_CHECK senao_g016 所屬部門、senao_g003 申請人、senao_g006 到職日期、senao_g007 申請日期、senao_g019 調動工作地點 
	if(activityId == "UserTask_2"){
		if (senao_g008.value == "") {
      var optionTexts = [];
      $("#senao_g008 option").each(function() {
          if ($(this).val() !== "") {
              optionTexts.push($(this).text());
          }
      });
      errMsg += "[" + optionTexts.join(" / ") + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n";
    }
		
		if((senao_g008.value == "0") && (senao_g018.value == "")){
			errMsg += "[" + $("#lbl_senao_g018").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[人力需求單號]不可空白!
		}
		
		if(senao_g009.value == ""){
			errMsg += "[" + $("#Label30").html().trim() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[調動原因]不可空白!
		}
		
		if((senao_g008.value == "0") && (senao_g010.value == "")){
			errMsg += "[" + $("#lbl_senao_g010").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[調動部門]不可空白!
		}

		if((senao_g008.value == "0") && (senao_g010_c1_0.checked == false)){
			errMsg += "[" + $("label[for='senao_g010_c1_0']").text().trim() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[同意依調動部門之班別時間出勤]不可空白!
		}
		
    if(senao_g011.value == ""){
			errMsg += "[" + $("#lbl_senao_g011").html() + "]" + querySNSI009(formId, "001", locale, "", "", "") + "\n"; //[調動職稱]不可空白!如果沒有調動職稱，請點選原職稱!
		}

		if(senao_g021.value.indexOf("M") >= 0 && hdn_senao_g021_M.value == ""){ //M級，但未能取得對應的職稱判斷處級or理級
			errMsg += "[" + $("#lbl_senao_g020").html() + ":" + $("#senao_g021").val() + "]" + querySNSI009($("#form_ou").val(), "029", locale, "", "", "") + "\n"; //[職稱:$$("#senao_g021").val()]資料取得錯誤，請聯絡MIS人員!
		}
		
    if (!chkUploadAttachment()){
      errMsg +=  "請附上職務說明書\n";
    }
		prepareForMobile();
	}
	formDispatch();
	if(errMsg == ""){
		return true;
	}else{
		alert(errMsg);
		return false;
	}
}
function formClose() {
	return true;
}
function formDispatch(){
	if(activityId == "UserTask_2"){
		if(workItemSource != '1' && workItemSource != '2'){
      genSubject();
      /*
			if(window.parent.document.forms[0].txtSubject){
				window.parent.document.forms[0].txtSubject.value = senao_g003_t1.value + "-" + $$("#Label1").html() + "(" + senao_g019.value + ")" + window.parent.document.forms[0].txtSubject.value;
			}*/
		}
	}
	
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
  senao_g007.value = today; //填表日期
  //表單代號
  $('#senao_g001').val(type);

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
//準備行動簽核變數(radio、checkbox、dropdown)
function prepareForMobile(){
	senao_g008_m.value = getRadioText("senao_g008");
	
	if(senao_g019.selectedIndex != -1){
		senao_g019_m.value = senao_g019[senao_g019.selectedIndex].text;
	}

  if(senao_g010.value != ""){
    hdn_senao_g010.value = '[' + form_ou.value + ']' + senao_g010.value;
  }
}

/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const prefixSubject =  senao_g003_t1.value + "-" + $("#Label1").html() + "(" + senao_g019.value + ")";

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
//檢查某一關卡是否有上傳附件
function chkUploadAttachment() {
  var tAS = document.getElementById('_cuzfileChooser_selectedItems');
  return tAS && tAS.rows.length > 1;
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao_g003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_g003','senao_g003_t1','senao_g016','senao_g017');//回傳元件參數
  let tReturnFunction = new Array("senao_g003_onchange()"); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#btn_QuerySenao006').on('click', function () { //人力需求單
  // sessionStorage 存入數據
  let tTitle = "人力需求單";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','','','','','','senao_g018','');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO007_02";
  let tAPI = invokeURL + 'BPM_SENAO007_02';
  let tParameter = { form_ou: form_ou.value, SENAO_F005: null, SENAO_F071: null, SENAO_F003_T1: null, SENAO_F011: null, QUOTA: null, SENAO_F007_T1: null, SERIALNUMBER: null, SENAO_F015: null };
  let tQBEField = { SENAO_F005: 'SENAO_F005', SENAO_F071: 'SENAO_F071', SENAO_F003_T1: 'SENAO_F003_T1', SENAO_F011: 'SENAO_F011' , QUOTA: 'QUOTA', SENAO_F007_T1: 'SENAO_F007_T1', SERIALNUMBER: 'SERIALNUMBER', SENAO_F015: 'SENAO_F015' }; //查詢欄位 {參數欄位:table欄位};	
  pWidth = 1500;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_g010_b1').on('click', function () { //調動部門
  // sessionStorage 存入數據
  let tTitle = "調動部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_g010','senao_g010_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', UNID: null, ORGNAME: null};
  let tQBEField = { UNID: 'UNID', ORGNAME: 'ORGNAME'}; //查詢欄位 {參數欄位:table欄位};	
  pWidth = 750;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_g011_b1').on('click', function () { //調動職稱
  // sessionStorage 存入數據
  let tTitle = "調動職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_g011_t1','senao_g011');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_HR_DeptTitle";
  let tAPI = invokeURL + 'BPM_HR_DeptTitle';
  let tParameter = { RESAB002: 'ALL', RESAB001: 'ALL'};
  let tQBEField = {  RESAB002: 'RESAB002',RESAB001: 'RESAB001'}; //查詢欄位 {參數欄位:table欄位};
  pWidth = 750;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*
 * 職稱:M級為處級or理級
 * 0為處級，1為理級
*/
function check_hdn_senao_g021_M(){
	var arrTmp = querySNSI003("SN007_S02").split("!!");
	
	if(senao_g021.value.indexOf("M") >= 0 && senao_g011_t1.value != ""){
		for(var i = 0; i < arrTmp.length; i++){
			if(arrTmp[i].split("~~")[1].indexOf(senao_g011_t1.value) >= 0){
				hdn_senao_g021_M.value = arrTmp[i].split("~~")[0];
				break;
			}else{
				hdn_senao_g021_M.value = "";
			}
		}
	}else{
		hdn_senao_g021_M.value = "";
	}
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * 申請人欄位，查詢申請人相關資料
 */
function senao177005_onChange() {
  var userInfo = {};
  if ($("#senao177005").val() !== "") {
    userInfo = queryUserByEmpId($("#senao177005").val());
    if (typeof userInfo.userId !== "undefined") {
      $("#senao177003").val(userInfo.unitId);	//申請單位ID
      $("#senao177004").val(userInfo.unitName);	//申請單位名稱
      $("#senao177005").val(userInfo.userId);	//申請人ID
      $("#senao177006").val(userInfo.userName);	//申請人名稱
    } else {
      //alert("輸入的工號:@@1有誤，請確認!");
      alert(querySNSI009(formId, "001", locale, "", "", ""));
      $("#senao177003").val("");	//申請單位ID
      $("#senao177004").val("");	//申請單位名稱
      $("#senao177005").val("");	//申請人ID
      $("#senao177006").val("");	//申請人名稱
    }
  } else {
    $("#senao177003").val("");	//申請單位ID
    $("#senao177004").val("");	//申請單位名稱
    $("#senao177005").val("");	//申請人ID
    $("#senao177006").val("");	//申請人名稱
  }
  return true;
}
function senao_g003_onchange(){
  var sqlid = "BPM_HR_SENAO007_01";
	var tParams = new Array();
	tParams.push(senao_g003.value);
  var pData = [];    
  pData = ajaxGetData(invokeURL + sqlid, {
    senao_g003:tParams[0]
  })
  if(pData[0].result == undefined){
		if(pData.length > 0 ){
      senao_g006.value = pData[0].EmployeeHireDate; //到職日期
			//alert(pData.recordValues[0][0]);
			$("#senao_g020").val(pData[0].EmployeeJobNO); //職稱
			$("#senao_g021").val(pData[0].EmployeeJobCName); //職稱
    }
  }
	check_hdn_senao_g021_M(); //職稱:M級為處級or理級
}
function senao_g008_onclick() {
  var value = $("#senao_g008").val();
  
  if (value == "1") {
    // 清空並停用欄位
    $("#senao_g018").val("").prop("disabled", true).css("background-color", "#ffffff");
    $("#btn_QuerySenao006").prop("disabled", true);
    
    $("#senao_g010").val("").prop("disabled", true).css("background-color", "#ffffff");
    $("#senao_g010_t1").val("").prop("disabled", true);
    $("#senao_g010_b1").prop("disabled", true);
    $("#senao_g010_c1_0").prop("disabled", true).prop("checked", false);
    $("#senao_g010_c1").css("background-color", "#ffffff");
    
  } else if (value == "0") {
    // 啟用欄位並設定背景色
    $("#senao_g018").prop("disabled", false).css("background-color", "#f7f7bc");
    $("#btn_QuerySenao006").prop("disabled", false);
    
    $("#senao_g010").prop("disabled", false).css("background-color", "#f7f7bc");
    $("#senao_g010_t1").prop("disabled", false);
    $("#senao_g010_b1").prop("disabled", false);
    $("#senao_g010_c1_0").prop("disabled", false);
    $("#senao_g010_c1").css("background-color", "#f7f7bc");
  }
}
function senao_g011_onchange(){//調動職稱OnChange
	check_hdn_senao_g021_M(); //職稱:M級為處級or理級
}
/*---------------------欄位onChange、onClick Function Start--------------*/