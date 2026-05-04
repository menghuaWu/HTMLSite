var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var tMsg_tmp = "";

var isUnderChairman = document.getElementById("isUnderChairman"); //20251002 Dex Add 

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
  $('#senao053005').val("38");
  $('#senao053006').val("A");
  $('#senao053010').val("2025/07/28");
  */
  
  activityId = "UserTask_3";
  ProcessPackageId='SENAO053';//vivian 抓不到單號暫時定義
  formId='SENAO053';//vivian 抓不到單號暫時定義
  //vivian 暫時定義 end*/
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
  //將原本的填寫區塊Lable設定底色^:開頭,$:結尾,*:包含
	$("[name^='lbl_'],[name='Label35'],[name='Label29']:not(:hidden):not([name*='_hdn'],[name$='53001'],[name$='53002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
	$("#form_org").css("background-color", "#f7d9e4");
	$('#form_ou').attr("disabled", true);
	$("#form_ou").css("background-color", "#f7d9e4");
  //設定申請人*/
  $('#senao053003').val(userId);
  $('#senao053003_t1').val(user_Name);
  $('#senao053003').attr('disabled', 'true');//申請人鎖定
  $('#senao053003_t1').attr('disabled', 'true');//申請人姓名鎖定
  //設定所屬部門*/
  $('#senao053004').val(Department);
  $('#senao053004_t1').val(Department_Name);
  $('#senao053004').attr('disabled', 'true');//所屬部門鎖定
  $('#senao053004_t1').attr('disabled', 'true');//所屬部門名稱鎖定

  $('#senao053002').attr('disabled', 'true');//單號
  applicant = $('#senao053003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao053004').val();//發起流程時參數 申請人部門ID
  if(form_ou.value==''){
		// alert("取得公司對應有問題，請重新開單一次!!");
		alert(querySNSI009($("#form_ou").val(), "019", locale,"","",""));
		window.history.go(-1);
	}
	
	//20251002 Dex Add 新增判斷是否為董事長直屬單位 (s)
	if (isValueInSNSI003("SN053_S01", $("#senao053004").val()) == "Y") {
		isUnderChairman.value = "Y";
	}else{
		isUnderChairman.value = "N";
	}
	//20251002 Dex Add 新增判斷是否為董事長直屬單位 (e)
	
	if(activityId == "UserTask_3"){ //申請人
		senao053003_onchange();
		senao053013_init();
		senao053013_onchange();
		
		if(formInstOID == ""){ //複製表單時，下方欄位Reset
			$("#senao053015").val(""); //建議事項清空
			$("#senao053007").val(systemDateTime);
			if(IsInvaildDept($("#senao053004").val())){ //判斷是否為失效部門
				$("#senao053004").val("");	//清空部門
				$("#senao053004_t1").val(""); //清空部門
				senao053003_onchange();
			}
		}
	}
	
	if(activityId == "UserTask_6"){ //0010 HR負責考勤人員
		if(document.getElementById("hdnMethod") != null){
			if(document.getElementById("hdnMethod").value == "handleForm"){
				alert(querySNSI009(formId, "001", locale, "", "", "")); //在HR主管簽核前，先確認留停條件!
			}
		}
	}
	
	if(activityId == "UserTask_9"){ //0010 留停負責HR
		if(document.getElementById("hdnMethod") != null){
			if(document.getElementById("hdnMethod").value == "handleForm"){
				alert(querySNSI009(formId, "002", locale, "", "", "")); //考勤人員請審訂資料!
			}
		}
	}
  return true;
}
function frmEvent() { 
  $('#senao053003').on('change', function () { //申請人
    senao053003_onchange();
  });
  $('#senao053013').on('change', function () { //申請原因
    senao053013_onchange();
  });
  $('#senao053011_Date').on('change', function () { //留職停薪起
    senao053011_Date_onchange();
  });
  $('#senao053012_Date').on('change', function () { //留職停薪迄
    senao053012_Date_onchange();
  });
}
function formSave(){
	var errMsg='';
  if(activityId == "UserTask_3"){ //填單人
    //FRM_COL_CHECK senao053003 申請人
		if($("#senao053003").val() !== ""){
			$("#hdnSupervisor").val(queryManagerByEmpId($("#senao053003").val())); //申請人直屬主管
		}
		
		if($("#senao053004").val() == "" || $("#senao053004_t1").val() == ""){
			errMsg += "[" + $("#lbl_senao053004").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[所屬部門]不可空白!
		}
		
		if($("#senao053011_Date").val() == "" || $("#senao053012_Date").val() == ""){
			errMsg += "[" + $("#Label29").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[留職停薪]不可空白!
		}
		
		if($("#senao053013").val() == ""){
			errMsg += "[" + $("#Label35").html().trim() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n"; //[申請原因]尚未選取!
		}else{
			if($("#senao053011_Date").val() != "" && $("#senao053012_Date").val() != ""){
				var sDate = new Date($("#senao053011_Date").val());
				var eDate = new Date($("#senao053012_Date").val());
				var DiffDays = diff_days(sDate, eDate);
				
				if($("#senao053013").val() == "1"){ //重大事故
					if(DiffDays > 180){
						tMsg_tmp = querySNSI009(formId, "003", locale, "", "", ""); //[@@1]申請留職停薪天數不得超過@@2個月!
						tMsg_tmp = tMsg_tmp.replace("@@1", $("#senao053013 option:selected").text());
						tMsg_tmp = tMsg_tmp.replace("@@2", "6");
						errMsg += tMsg_tmp + "\n"; //[重大事故]申請留職停薪天數不得超過6個月!
					}
				}else if($("#senao053013").val() == "2"){ //私事出國
					if(DiffDays > 180){
						tMsg_tmp = querySNSI009(formId, "003", locale, "", "", ""); //[@@1]申請留職停薪天數不得超過@@2個月!
						tMsg_tmp = tMsg_tmp.replace("@@1", $("#senao053013 option:selected").text());
						tMsg_tmp = tMsg_tmp.replace("@@2", "6");
						errMsg += tMsg_tmp + "\n"; //[私事出國]申請留職停薪天數不得超過6個月!
					}
				}else if($("#senao053013").val() == "4"){ //傷病
					if(DiffDays > 365){
						tMsg_tmp = querySNSI009(formId, "004", locale, "", "", ""); //[@@1]申請留職停薪天數不得超過@@2年!
						tMsg_tmp = tMsg_tmp.replace("@@1", $("#senao053013 option:selected").text());
						tMsg_tmp = tMsg_tmp.replace("@@2", "1");
						errMsg += tMsg_tmp + "\n"; //[傷病]申請留職停薪天數不得超過1年!
					}
				}else if($("#senao053013").val() == "5"){ //育嬰
					if(DiffDays > 730){
						tMsg_tmp = querySNSI009(formId, "004", locale, "", "", ""); //[@@1]申請留職停薪天數不得超過@@2年!
						tMsg_tmp = tMsg_tmp.replace("@@1", $("#senao053013 option:selected").text());
						tMsg_tmp = tMsg_tmp.replace("@@2", "2");
						errMsg += tMsg_tmp + "\n"; //[育嬰]申請留職停薪天數不得超過2年!
					}
				}
			}
		}
	}else if($("#form_ou").val() == "senao" && activityId == "UserTask_6"){ //HR負責考勤人員(0010)
		if($("#senao053017").val() == ""){
			errMsg += "[" + $("#lbl_senao053017").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n"; //[審核條件]尚未選取!
		}
	}

  if(errMsg == ""){
		if(activityId == "UserTask_3"){
			prepareForMobile();
      if(workItemSource != "1" && workItemSource != "2"){
				genSubject();
      }
		}
		return true;
	}else{
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
  senao053007.value = today; //填表日期
  //表單代號
  $('#senao053001').val(type);
  $('#senao053001').attr('disabled', 'true');

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
 * 產生表單主旨
 */
function genSubject() {
  try {
    const prefixSubject = $("#senao053003_t1").val() + '_' + $("#Label1").html();

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
    /*
    let finalSubject = '';
    if (applySubject) {
      finalSubject = applySubject.includes(prefixSubject)
        ? applySubject
        : `${prefixSubject}(${applySubject})`;
    } else {
      finalSubject = prefixSubject;
    }*/
    let finalSubject = '';
    if (applySubject=='') {
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
/**
* 20251002 Dex Add
* 確認設定值是否包含
*/
function isValueInSNSI003(snsiId, value) {
    var result = "N";
    if (value != "" && snsiId != "") {
        if (querySNSI003_Org(snsiId).search(value) > -1) {
            result = "Y";
        }
    }
    return result;
}
/**
* 2個日期相差天數
*/
function diff_days(date1, date2){
	var date1_time = date1.getTime();
	var date2_time = date2.getTime();
	var diff_sec = Math.abs(date2_time - date1_time)/1000;
	var diff_d = Math.round(diff_sec/60/60/24);
	return diff_d;
}
/**
* 準備行動簽核變數(TextArea,dropdown,Date)
*/
function prepareForMobile(){
	$("#senao053014_m").val($("#senao053014").val()); //敍述申請原因
	$("#senao053015_m").val($("#senao053015").val()); //建議事項
	$("#senao053016_m").val($("#senao053016").val()); //備註
	
	if($("#senao053013").prop('selectedIndex') > 0){
		$("#senao053013_m").val($("#senao053013").val()); //申請原因下拉選項
	}
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao053004_b1').on('click', function () { //所屬部門
  // sessionStorage 存入數據
  let tTitle = "所屬部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao053004','senao053004_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', UNID: 'ALL',  ORGNAME: 'ALL'};
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao053003_b1').on('click', function () { //人員
  // sessionStorage 存入數據
  let tTitle = "人員";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao053003','senao053003_t1','senao053004','senao053004_t1');//回傳元件參數
  let tReturnFunction = new Array("senao053003_onchange()"); //回傳函數
  let tColAPi = "BPM_SENAO053_02_Org";
  let tAPI = invokeURL + 'BPM_SENAO053_02_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao',senao053004: $("#senao053004").val(),  ID: 'ALL', USERNAME:'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME: 'ALL'};
  let tQBEField = { ID: 'ID',USERNAME: 'USERNAME',ID_1: 'ID_1', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
* 申請人工號senao053003_onchange
*/
function senao053003_onchange(){
	var sqlid = "BPM_HR_SENAO053_01";
	var tParams = new Array();
	tParams.push($("#senao053003").val());
  var pData = [];    
  pData = ajaxGetData(invokeURL + sqlid, {
    senao053003:tParams[0]
  })
  if(pData[0].result == undefined){
		if(pData.length > 0 ){
      $("#senao053010").val(pData[0].EmployeeHireDate); //到職日
			$("#hidsex").val(pData[0].EmployeeSex); //性別
			$("#senao053005").val(pData[0].EmployeeJobNO); //職級
			$("#senao053006").val(pData[0].EmployeeJobCName); //職級
    }
  }
}
/**
* 申請原因下拉選項senao053013_init
* 留職停薪相關規定參考eportal/神準作業程序書(SOP)/人力資源HR/工作規則S1-SOP-HR-001
*/
function senao053013_init(){
	var EmployeeHireDate = new Date($("#senao053010").val());
	var EmployeeHireDay = 0;
	EmployeeHireDay = diff_days(EmployeeHireDate, new Date());
	if(EmployeeHireDay < 180){ //未滿半年
		$("#senao053013 option[value='1']").remove(); //重大事故
		$("#senao053013 option[value='2']").remove(); //私事出國
		$("#senao053013 option[value='5']").remove(); //育嬰
	}else if(EmployeeHireDay < 730){ //未滿2年	
		$("#senao053013 option[value='1']").remove(); //重大事故
		$("#senao053013 option[value='2']").remove(); //私事出國
	}
	
	if($("#hidsex").val() == "F"){
		$("#senao053013 option[value='3']").remove(); //兵役
	}
}
/**
* 申請原因下拉選項senao053013_onchange
*/
function senao053013_onchange(){
	if($("#senao053013").val() == "99"){ //其他
		$('#senao053014').attr("disabled", false);
		$('#senao053014').css({"background-color": EDIT_BGCOLOR});
	}else{
    $("#senao053014").val(""); //申請原因敘述
		$('#senao053014').attr("disabled", true);
		$('#senao053014').css({"background-color": DEFAULT_BGCOLOR});
	}
}
/**
* 留職停薪起senao053011_Date_onchange
*/
function senao053011_Date_onchange(){
	$("#senao053011").val($("#senao053011_Date").val());
}
/**
* 留職停薪迄senao053012_Date_onchange
*/
function senao053012_Date_onchange(){
	$("#senao053012").val($("#senao053012_Date").val());
}
/*---------------------欄位onChange、onClick Function Start--------------*/