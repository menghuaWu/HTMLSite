var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var senao077002 = document.getElementById("senao077002"); //表單單號
var senao077003 = document.getElementById("senao077003"); //申請人代號
var senao077005 = document.getElementById("senao077005"); //申請人名稱
var senao077004 = document.getElementById("senao077004"); //申請單位代號
var senao077006 = document.getElementById("senao077006"); //申請單位名稱
var senao077007 = document.getElementById("senao077007"); //申請日期
var senao077008 = document.getElementById("senao077008"); //分機
var senao077009 = document.getElementById("senao077009"); //申請類別
var senao077009_0 = document.getElementById("senao077009_0"); //申請類別 0:註銷
var senao077009_1 = document.getElementById("senao077009_1"); //申請類別 1:修改
var senao077010 = document.getElementById("senao077010"); //表單名稱
var senao077010_b1 = document.getElementById("senao077010_b1"); //表單名稱開窗
var senao077011 = document.getElementById("senao077011"); //表單單號
var senao077012 = document.getElementById("senao077012"); //注意事項
var senao077013 = document.getElementById("senao077013"); //詳細說明

//以下供流程設計師使用
var senao077010_t1 = document.getElementById("senao077010_t1"); //隱藏欄位，表單代號
var hdnApplyType = document.getElementById("hdnApplyType"); //隱藏欄位，申請類別
var applicantManagerId = document.getElementById("applicantManagerId"); //隱藏欄位，申請人主管ID

//行動簽核
var senao077009_m = document.getElementById("senao077009_m"); //隱藏欄位，申請類別(radio)
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
  activityId = "UserTask_3";
  ProcessPackageId='SENAO077';//vivian 抓不到單號暫時定義
  formId='SENAO077';//vivian 抓不到單號暫時定義
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
	$("[name^='lbl_']:not([name$='_hdn'],[name='lbl_hdn_chkfile'],[name*='Grid'],[name$='m001'],[name$='m002'],[name$=''],[name$=''],[name$=''])[class='formButtonClass']").css("background-color", formLabelBGColor);

  //設定申請人*/
  $('#senao077003').val(userId);
  $('#senao077005').val(user_Name);
  //設定所屬部門*/
  $('#senao077004').val(Department);
  $('#senao077006').val(Department_Name);

  $('#senao077002').attr('disabled', 'true');//單號
  applicant = $('#senao077003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao077004').val();//發起流程時參數 申請人部門ID
  if(activityId == "UserTask_3"){
		senao077003.style.backgroundColor = EDIT_BGCOLOR;
		senao077008.style.backgroundColor = EDIT_BGCOLOR;
		senao077010.style.backgroundColor = EDIT_BGCOLOR;
		senao077011.style.backgroundColor = EDIT_BGCOLOR;
		senao077013.style.backgroundColor = EDIT_BGCOLOR;
		
		if(formInstOID == ""){ //複製表單時
			senao077007.value = systemDateTime; //申請日期
		}
	}  
	return true;
}
function frmEvent() { 
   $('#senao077003').on('change', function () { //申請人OnChange
    senao077003_onchange();
  });
  $('#senao077009').on('change', function () { //申請類別OnChange
    senao077009_onclick();
  });
}
function formSave(){
	var errMsg='';
  if(activityId == "UserTask_3"){ //第一關填單人
    //FRM_COL_CHECK senao077003 申請人、senao077008 分機、senao077009 申請類別、senao077010 表單名稱、senao077011 表單單號、senao077013 詳細說明
	
    genSubject();
    prepareForFlow();
    prepareForMobile();
    showVarForFlow(true);
	}
  
	if(activityId == "UserTask_11") {
    alert(querySNSI009(formId, "001", locale, "", "", ""));
  }

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
  $('#senao077001').val(type);
  $('#senao077001').attr('disabled', 'true');

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
    const prefixSubject = senao077005.value + "-" + $("#Label2").html();

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
 * 準備流程所需變數
 */
function prepareForFlow(){
	applicantManagerId.value = queryManagerByEmpId(senao077003.value);
}
/**
 * 提供表單名稱開窗前呼叫，檢查是否點選申請類別
 */
function senao077010_before_process(){

  if($("#senao077009").val() == ""){
		alert("[" + $("#lbl_senao077009").html() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "")); //[申請類別]尚未選取!
		return false;
	}
	
	return true;
}
/**
 * 於瀏覽器console顯示流程所需變數值
 * @param {boolean} isDebugMode
 */
function showVarForFlow(isDebugMode){
	var totalVar = [];
	
	if(isDebugMode){
		//totalVar.push("xxx.value = " + xxx.value);
		if(window.console){
            console.log("---- Variable Log ---- Start");
            console.log(totalVar.join("\n"));
            console.log("---- Variable Log ---- End");
        }
	}
}
/**
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile(){
	if($("#senao077009").val() !== ""){ //未選擇申請類別
		senao077009_m.value = $("#senao077009 option:selected").text();
	}
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao077003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao077003','senao077005','senao077004','senao077006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao077010_b1').on('click', function () { //表單名稱
  if(senao077010_before_process()){
    // sessionStorage 存入數據
    let tTitle = "表單名稱";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('senao077010_t1','senao077010','senao077012');//回傳元件參數
    let tReturnFunction = new Array(); //回傳函數
    let tColAPi = "BPM_SENAO077_02";
    let tAPI = invokeURL + 'BPM_SENAO077_02';
    let tParameter = { hdnApplyType: hdnApplyType.value, form_ou: form_ou.value, ITEMID: 'ALL',  ITEMNAME: 'ALL'};
    let tQBEField = { ITEMID: 'ID', ITEMNAME: 'ITEMNAME' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * 申請人欄位，查詢申請人相關資料
 */
function senao077003_onchange(){
	var userInfo = {};
	
  if(senao077003.value != ""){
    userInfo = queryUserByEmpId(senao077003.value);
    if(typeof userInfo.userId != "undefined"){
      senao077003.value = userInfo.userId; //申請人ID
      senao077005.value = userInfo.userName; //申請人名稱
      senao077004.value = userInfo.unitId; //申請單位ID
      senao077006.value = userInfo.unitName; //申請單位名稱
    }else{
      alert("[" + $("#lbl_senao077003").html() + ":" + senao077003.value + "]" + querySNSI009($("#form_ou").val(), "031", locale, "", "", "")); //[申請人:senao077003.value]查無資料，請重新輸入!
      senao077003.value = "";
      senao077004.value = "";
      senao077005.value = "";
      senao077006.value = "";
		}
	}else{
		senao077003.value = "";
    senao077004.value = "";
    senao077005.value = "";
		senao077006.value = "";
	}
	
  return true;
}
/**
 * 申請類別欄位
 */
function senao077009_onclick(){
	if($("#senao077009").val() !== ""){
    hdnApplyType.value = $("#senao077009 option:selected").text();
	}
	
	senao077010.value = "";
	senao077010_t1.value = "";
	senao077011.value = "";
	senao077012.value = "";
}
/*---------------------欄位onChange、onClick Function Start--------------*/