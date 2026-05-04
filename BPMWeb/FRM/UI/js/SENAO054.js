var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別

var isUnderChairman = document.getElementById("isUnderChairman"); //20251003 Dex Add 

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
  $('#senao054016').val("test");
  $('#senao054017').val("工程師");
  activityId = "Applicant";
  ProcessPackageId='SENAO054';//vivian 抓不到單號暫時定義
  formId='SENAO054';//vivian 抓不到單號暫時定義
  //vivian 暫時定義 end*/
  systemDateTime = showCurrentDate(); //今天日期
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
  //Label底色
	$("[name^='lbl_']:not([name$='_hdn'],[name*='Grid'],[name$='w001'],[name$='w002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
  //設定申請人*/
  $('#senao054003').val(userId);
  $('#senao054003_t1').val(user_Name);
  //設定所屬部門*/
  $('#senao054004').val(Department);
  $('#senao054004_t1').val(Department_Name);

  $('#senao054002').attr('disabled', 'true');//單號
  applicant = $('#senao054003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao054004').val();//發起流程時參數 申請人部門ID
  //設定工作地點下拉選單
  setSelectDefalut("senao054023", apiInvoke + "BPM_OFFICE_INFO_LIST", {COMPANY: $('#form_ou').val()}, "");
  //20251003 Dex Add 新增判斷是否為董事長直屬單位 (s)
	if (isValueInSNSI003("SN053_S01", $("#senao054004").val()) == "Y") {
		isUnderChairman.value = "Y";
	}else{
		isUnderChairman.value = "N";
	}
	//20251003 Dex Add 新增判斷是否為董事長直屬單位 (e)
  
	if(activityId == "Applicant"){ //填單人
		if($("#senao054002").innerHTML == ""){
			$("#senao054012").val(systemDateTime); //申請日期
		}
		
		if(formInstOID == ""){ //複製表單時，下方欄位Reset
			$("#senao054012").val(systemDateTime); //申請日期
			
			if(IsInvaildDept($("#senao054004").val())){ //判斷是否為失效部門
				$("#senao054004").val("");	//清空部門
				$("#senao054004_t1").val(""); //清空部門
			}
			
			if(IsInvaildDept($("#senao054005").val())){ //判斷是否為失效部門
				$("#senao054005").val("");	//清空部門
				$("#senao054006").val("");	//清空部門
			}
			
			if(IsInvaildDept($("#senao054013").val())){ //判斷是否為失效部門
				$("#senao054013").val("");	//清空部門
				$("#senao054014").val("");	//清空部門
			}
		}
	}
	
	showBackGroundColor();
	return true;
}
function frmEvent() { 
}
function formSave(){
	var errMsg='';
  if(activityId == "Applicant"){ //第一關填單人
    //FRM_COL_CHECK senao054007 人員代號、senao054015 復職日期、senao054016 復職職稱、senao054018 說明事項、senao054023 復職工作地點
		if($("#senao054004").val() == "" || $("#senao054004_t1").val() == ""){
			errMsg += "[" + $("#lbl_senao054004").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[申請單位]不可空白!
		}
		
		if(IsInvaildDept($("#senao054005").val())){ //判斷是否為失效部門
			errMsg += "[" + $("#lbl_senao054005").html() + "]" + querySNSI009(formId, "001", locale, "", "", "") + "\n"; //[原單位]已失效，請重新選取有效的部門!
		}
		
		if($("#senao054005").val() == "" || $("#senao054006").val() == ""){
			errMsg += "[" + $("#lbl_senao054005").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[原單位名稱]不可空白!
		}
		
		if($("#senao054013").val() == "" || $("#senao054014").val() == ""){
			errMsg += "[" + $("#lbl_senao054013").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[復職單位]不可空白!
		}
	}else if(activityId == "HR"){ //HR
		//ajax_ProcessAccessor.assignRelevantData(processInstOID, "formserialnumber", $("#senao054002").innerHTML);
	}

  if(errMsg == ""){
		if(activityId == "Applicant"){
			prepareForFlow();
			
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
  senao054012.value = today; //填表日期
  //表單代號
  $('#senao054001').val(type);
  $('#senao054001').attr('disabled', 'true');
  
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
    const prefixSubject = $("#senao054008").val() + "-" + $("#Label1").html() + "(" + $("#senao054023").val() + ")"; 

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
 * 準備流程所需變數
 */
function prepareForFlow(){
	//以下供流程設計師使用
	if($("#senao054005").val() != ""){
		$("#hdn_senao054005").val('[' + $("#form_ou").val() + ']' + $("#senao054005").val());
	}
	
	if($("#senao054013").val() != ""){
		$("#hdn_senao054013").val('[' + $("#form_ou").val() + ']' + $("#senao054013").val());
	}
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#btnSenao053').on('click', function () { //留職停薪申請單資料
  // sessionStorage 存入數據
   let tTitle = "復職職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao054005','senao054006','senao054007','senao054008','senao054009');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO053";
  let tAPI = invokeURL + 'BPM_SENAO053';
  let tParameter = { SENAO053004: null, SENAO053004_T1: null, SENAO053003: null, SENAO053003_T1: null};
  let tQBEField = { SENAO053004: 'SENAO053004', SENAO053004_T1: 'SENAO053004_T1',SENAO053003:'SENAO053003',SENAO053003_T1:'SENAO053003_T1'}; //查詢欄位 {參數欄位:table欄位};		
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao054003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao054003','senao054004','senao054005','senao054006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao054004_b1').on('click', function () { //原單位名稱
  // sessionStorage 存入數據
  let tTitle = "申請單位";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao054005','senao054006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', UNID: 'ALL',  ORGNAME: 'ALL'};
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao054013_b1').on('click', function () { //復職單位
  // sessionStorage 存入數據
   let tTitle = "復職單位";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao054013','senao054014');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', UNID: 'ALL',  ORGNAME: 'ALL'};
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao054016_b1').on('click', function () { //復職單位
  // sessionStorage 存入數據
   let tTitle = "復職職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao054016','senao054017');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_HR_JobTitle";
  let tAPI = invokeURL + 'BPM_HR_JobTitle';
  let tParameter = { NAMECARD_JOB_CODE: null, NAMECARD_JOB_CNAME: null, NAMECARD_JOB_ENAME: null};
  let tQBEField = { NAMECARD_JOB_CODE: 'NAMECARD_JOB_CODE', NAMECARD_JOB_CNAME: 'NAMECARD_JOB_CNAME',NAMECARD_JOB_ENAME:'NAMECARD_JOB_ENAME'}; //查詢欄位 {參數欄位:table欄位};		
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/