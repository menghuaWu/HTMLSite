var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別

var senao_e005 = document.getElementById("senao_e005"); //用途說明
var senao_e005_0 = document.getElementById("senao_e005_0"); //辦理簽證
var senao_e005_1 = document.getElementById("senao_e005_1"); //考試
var senao_e005_2 = document.getElementById("senao_e005_2"); //辦理貸款
var senao_e005_3 = document.getElementById("senao_e005_3"); //其它
var senao_e009 = document.getElementById("senao_e009"); //申請份數
var senao_e009_0 = document.getElementById("senao_e009_0"); //1
var senao_e009_1 = document.getElementById("senao_e009_1"); //2
var senao_e009_2 = document.getElementById("senao_e009_2"); //3
var senao_e009_3 = document.getElementById("senao_e009_3"); //其它
var senao_e007 = document.getElementById("senao_e007"); //申請版本
var senao_e007_0 = document.getElementById("senao_e007_0"); //中文版
var senao_e007_1 = document.getElementById("senao_e007_1"); //英文版( 請填寫英文姓名 )
var senao_e012 = document.getElementById("senao_e012"); //項目
var senao_e012_0 = document.getElementById("senao_e012_0"); //在職證明
var senao_e012_1 = document.getElementById("senao_e012_1"); //扣繳憑單
var senao_e012_2 = document.getElementById("senao_e012_2"); //其它
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
  ProcessPackageId='SENAO005';//vivian 抓不到單號暫時定義
  formId='SENAO005';//vivian 抓不到單號暫時定義
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
  //設定申請人*/
  $('#senao_e003').val(userId);
  $('#senao_e003_t1').val(user_Name);
  //$('#senao177005').attr('disabled', 'true');
  $('#senao_e003_t1').attr('disabled', 'true');
  //設定所屬部門*/
  $('#senao_e014').val(Department);
  $('#senao_e015').val(Department_Name);
  $('#senao_e014').attr('disabled', 'true');
  $('#senao_e015').attr('disabled', 'true');

  $('#senao_e002').attr('disabled', 'true');//單號
  applicant = $('#senao_e003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao_e014').val();//發起流程時參數 申請人部門ID
  if (activityId == "UserTask_2") { //申請人
		$('#senao_e011').css({"background-color": EDIT_BGCOLOR});
		senao_e005_onchange();
		senao_e007_onchange();
		senao_e009_onchange();
		senao_e012_onchange();
		
		//複製表單時，下方欄位Reset	
    
		if (formInstOID == "") {
			$('#senao_e011').css({"background-color": EDIT_BGCOLOR});
			if (IsInvaildDept($('#senao_e014').val())){	//判斷是否為失效部門
				$('#senao_e014').val('');	//清空部門
				$('#senao_e015').val('');	//清空部門
			}
			senao_e003_onchange();
		}
	}
  return true;
}
function frmEvent() { 
  $('#senao_e003').on('change', function () { //申請人
    senao_e003_onchange();
  });
  $('#senao_e005').on('change', function () { //用途說明
    senao_e005_onchange();
  });
  $('#senao_e007').on('change', function () { //申請版本
    senao_e007_onchange();
  });
  $('#senao_e009').on('change', function () { //申請份數
    senao_e009_onchange();
  });
  $('#senao_e012').on('change', function () { //項目
    senao_e012_onchange();
  });
}
function formSave(){
	var errMsg='';
  if (activityId === 'UserTask_2'){ //填單人
    //FRM_COL_CHECK 檢查欄位senao_e003、senao_e014、senao_e011
    if ($("#senao_e005").val() === '') {
			errMsg += "[" + $("#lbl_senao_e005").html() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n"; //[用途說明]尚未選取!
		}else{
			if ($("#senao_e005").val() == '3' && $("#senao_e006").val() == ''){
				errMsg += "[" + $("#lbl_senao_e005").html() + "]" + "[" + $("#senao_e005 option:selected").text() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[用途說明][其他]不可空白!
			}
		}
    if ($("#senao_e007").val() === ''){
			errMsg += "[" + $("#lbl_senao_e007").html() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n"; //[申請版本]尚未選取!
		}else{
			if ($("#senao_e007").val() == '1' && $("#senao_e008").val() == ''){
				errMsg += "[" + $("#senao_e007 option:selected").text() + "]" + "[" + $("#lbl_senao_e008").html() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[英文版( 請填寫英文姓名 )][護照英文名稱]不可空白!
			}
		}
    if ($("#senao_e009").val() === ''){
			errMsg += "[" + $("#lbl_senao_e009").html() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n"; //[申請份數]尚未選取!
		}else{
			if ($("#senao_e009").val() == '3' && $("#senao_e010").val() == ''){
				errMsg += "[" + $("#lbl_senao_e009").html() + "]" + "[" + $("#senao_e009 option:selected").text() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[申請份數][其他]不可空白!
			}
		}
    if ($("#senao_e012").val() === ''){
			errMsg += "[" + $("#lbl_senao_e012").html() + "]" + querySNSI009($("#form_ou").val(), "003", locale, "", "", "") + "\n"; //[項目]尚未選取!
		}else{
			if ($("#senao_e012").val() == '3' && $("#senao_e013").val() == ''){
				errMsg += "[" + $("#lbl_senao_e012").html() + "]" + "[" + $("#senao_e012 option:selected").text() + "]" + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n"; //[項目][其他]不可空白!
			}
		}
  }
  if (errMsg === "") {
      if (activityId === "UserTask_2") {
        prepareForMobile();
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
  $('#senao_e001').val(type);
  $('#senao_e001').attr('disabled', 'true');

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
    var apply = "";
    if ($("#senao_e012").val() == '3'){
      apply = $("#senao_e012 option:selected").text() + '-' + $$("#senao_e013").val();
    } else{
      apply = $("#senao_e012 option:selected").text();
    }
    const prefixSubject = $("#senao_e003_t1").val() + $("#Label1").html() + '(' + apply +  ')';

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
* 準備行動簽核變數(TextArea,dropdown,Date) 
*/
function prepareForMobile() {
	// 取得下拉選單選中的文字
	$("#senao_e005_m").val($("#senao_e005 option:selected").text()); //用途說明
	$("#senao_e007_m").val($("#senao_e007 option:selected").text()); //申請版本
	$("#senao_e009_m").val($("#senao_e009 option:selected").text()); //申請份數
	$("#senao_e012_m").val($("#senao_e012 option:selected").text()); //項目
	$("#senao_e011_m").val($("#senao_e011").val()); //領取地點及備註
	var ManagerID = queryManagerByEmpId($("#senao_e003").val());
	$("#applicantManagerId").val(ManagerID);
}

/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao_e003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_e003','senao_e003_t1','senao_e014','senao_e015');//回傳元件參數
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
* 申請人工號senao_e003_onchange
*/
function senao_e003_onchange(){
	var userInfo = {};
	if ($("#senao_e003").val() !== "") {    
		userInfo = queryUserByEmpId($("#senao_e003").val());
		if (typeof userInfo.userId !== "undefined") {
			$("#senao_e003").val(userInfo.userId); //申請人ID
			$("#senao_e003_t1").val(userInfo.userName); //申請人名稱
			$("#senao_e014").val(userInfo.unitId); //申請單位ID
			$("#senao_e015").val(userInfo.unitName); //申請單位名稱
		} else {
			alert("No Data. \n");
			$("#senao_e003").val(''); 
			$("#senao_e003_t1").val('');
			$("#senao_e014").val(''); 
			$("#senao_e015").val('');
		}
	} else {
		$("#senao_e003").val(''); 
		$("#senao_e003_t1").val('');
		$("#senao_e014").val(''); 
		$("#senao_e015").val('');
	}
	return true;
}
/**
* 用途說明senao_e005_onchange
*/
function senao_e005_onchange(){	
	if ($('#senao_e005').val() === '3'){
		$('#senao_e006').attr("disabled", false);	
		$('#senao_e006').css({"background-color": EDIT_BGCOLOR});
	}else{
    $("#senao_e006").val(''); //用途說明敘述
		$('#senao_e006').attr("disabled", true);	
		$('#senao_e006').css({"background-color": DEFAULT_BGCOLOR});
	}
}
/**
* 申請版本senao_e007_onchange
*/
function senao_e007_onchange(){
	if ($('#senao_e007').val() === '1'){
		$('#senao_e008').attr("disabled", 'false');	
		$('#senao_e008').css({"background-color": EDIT_BGCOLOR});
	}else{
    $("#senao_e008").val(''); //護照英文名稱
		$('#senao_e008').attr("disabled", 'true');	
		$('#senao_e008').css({"background-color": DEFAULT_BGCOLOR});
	}
}
/**
* 申請份數senao_e009_onchange
*/
function senao_e009_onchange(){
	if ($('#senao_e009').val() === '3'){
		$('#senao_e010').attr("disabled", false);	
		$('#senao_e010').css({"background-color": EDIT_BGCOLOR});
	}else{
    $("#senao_e010").val(''); //申請份數敘述
		$('#senao_e010').attr("disabled", true);	
		$('#senao_e010').css({"background-color": DEFAULT_BGCOLOR});
	}
}
/**
* 項目senao_e012_onchange
*/
function senao_e012_onchange(){	
	if ($('#senao_e012').val() == '3'){
		$('#senao_e013').attr("disabled", false);	
		$('#senao_e013').css({"background-color": EDIT_BGCOLOR});
	}else{
    $("#senao_e013").val(''); //[項目]其它敘述
		$('#senao_e013').attr("disabled", true);	
		$('#senao_e013').css({"background-color": DEFAULT_BGCOLOR});
	}
}
/*---------------------欄位onChange、onClick Function Start--------------*/