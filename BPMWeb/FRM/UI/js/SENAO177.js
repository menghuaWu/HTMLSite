var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao177016_0 = document.getElementById("senao177016_0"); //機車
var senao177016_1 = document.getElementById("senao177016_1"); //大型重型機車	
var senao177016_2 = document.getElementById("senao177016_2"); //汽車


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
  activityId = "UserTask_3";
  ProcessPackageId='SENAO177';//vivian 抓不到單號暫時定義
  formId='SENAO177';//vivian 抓不到單號暫時定義*/
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
  $('#senao177005').val(userId);
  $('#senao177006').val(user_Name);
  //設定所屬部門*/
  $('#senao177003').val(Department);
  $('#senao177004').val(Department_Name);

  $('#senao177002').attr('disabled', 'true');//單號
  applicant = $('#senao177005').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao177003').val();//發起流程時參數 申請人部門ID

  //複製表單時，下方欄位Reset
  
	if (formInstOID === "") {
		senao177008.value = systemDateTime; //申請日期
		if (IsInvaildDept($("#senao177003").val())) { //判斷是否為失效部門
			$("#senao177003").val("");	//清空部門
			$("#senao177004").val("");	//清空部門
			senao177005_onChange();
		}
	}
  if (activityId == "UserTask_3") {	//填單人
    senao177016_0.disabled = false;
    senao177016_1.disabled = false;
    senao177016_2.disabled = false;
  } 
  return true;
}
function frmEvent() { 
  $('#senao177005').on('change', function () { //申請人OnChange
    senao177005_onChange();
  });
}
function formSave(){
	var errMsg='';
	if ($("#senao177004").val() === '') {
        //申請單位
        errMsg += "[" + $("#lbl_senao177003").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
    }
    if ($("#senao177006").val() === '') {
        //申請人
        errMsg += "[" + $("#lbl_senao177005").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
    }
	if(senao177016_0.checked == false && senao177016_1.checked == false && senao177016_2.checked == false){
        var senao177016Txt0 = document.querySelector("label[for='senao177016_0']").innerText;
        var senao177016Txt1 = document.querySelector("label[for='senao177016_1']").innerText;
        var senao177016Txt2 = document.querySelector("label[for='senao177016_2']").innerText;
        var str = senao177016Txt0 + " 、 " + senao177016Txt1 + " 、 "  + senao177016Txt2 ;
        errMsg +=  str + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
    }
	if ($("#senao177013").val() === '') {
        //臨停時間
        errMsg += "[" + $("#lbl_senao177012").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
    } else {

        var start = $("#senao177012").val();
        var end = $("#senao177013").val();

        start = start.replace("T", " ").replace(/-/g, "/") + ":00";
		end = end.replace("T", " ").replace(/-/g, "/") + ":00";

        var startdate = new Date(start);
        var enddate = new Date(end);

        var time = enddate.getTime() - startdate.getTime();
        var days = parseInt(time / (1000 * 60 * 60 * 24));

        if (days > 7) {
            //申請期限 最多一週!!
            alert(querySNSI009(formId, "002", locale, "", "", ""));

            $("#senao177012").val('');
            $("#senao177013").val('');
            return false;
        }
    }
  	if (errMsg === "") {
        if (activityId === "UserTask_3") {
            //if (workItemSource !== '1' && workItemSource !== '2') {
                genSubject();
            //}
        }
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
  $('#senao177001').val(type);
  $('#senao177001').attr('disabled', 'true');

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
    // 取得標題與申請人
    const prefixSubject =  $("#Label1").html() + "_" + $("#senao177006").val();

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
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao177005_b01').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao177005','senao177006','senao177003','senao177004');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
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
/*---------------------欄位onChange、onClick Function Start--------------*/