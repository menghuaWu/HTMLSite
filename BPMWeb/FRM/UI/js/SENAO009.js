var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

//以下供流程設計師使用
var form_ou = document.getElementById("form_ou");//公司別
var form_org = document.getElementById("form_org");//廠區
var senao009001 = document.getElementById("senao009001");
var senao009002 = document.getElementById("senao009002"); 
var senao009009 = document.getElementById("senao009009");       //訓練心得(針對師資、教材內容、上課方式)
var senao009010 = document.getElementById("senao009010");       //單位主管意見回饋
var senao009007 = document.getElementById("senao009007");       //獲得之專業知識、觀念及技能
var senao009008 = document.getElementById("senao009008");       //工作應用或改善計畫
var senao009003 = document.getElementById("senao009003");       //受訓者ID
var senao009003_t1 = document.getElementById("senao009003_t1");    //受訓者名
var senao009016 = document.getElementById("senao009016");       //截止繳交期限(前)
var senao009015 = document.getElementById("senao009015");       //受訓者部門Name
var senao009014 = document.getElementById("senao009014");       //受訓者部門ID
var senao009005 = document.getElementById("senao009005");       //課程名稱
var senao009011 = document.getElementById("senao009011");//(Radio)//預定課後目標達成 0:達成,1:未達成
var senao009006 = document.getElementById("senao009006");       //上課時間(起)
var senao009012 = document.getElementById("senao009012");       //上課時間(迄)

var senao009005_t1 = document.getElementById("senao009005_t1"); //(hidden)課程開窗暫存欄位
var senao009013 = document.getElementById("senao009013");//(hidden) 外派訓練申請單單號
var senao009900 = document.getElementById("senao009900");//(hidden)
var senao009901 = document.getElementById("senao009901");//(hidden)
var senao009902 = document.getElementById("senao009902");//(hidden)
var senao009903 = document.getElementById("senao009903");//(hidden)
var senao009904 = document.getElementById("senao009904");//(hidden)
var senao009905 = document.getElementById("senao009905");//(hidden)
var sysParserRoleIDManagerID = document.getElementById("sysParserRoleIDManagerID");//(hidden)表單關係人(申請人)主管
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
  $('#senao009005').val("ISO課程");
  $('#senao009006').val("2023/05/26");
  $('#senao009012').val("2023/05/26");
  $('#senao009016').val("2023/6/9");
  activityId = "Manager";
  ProcessPackageId='SENAO009';//vivian 抓不到單號暫時定義
  formId='SENAO009';//vivian 抓不到單號暫時定義
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
  form_org.style.backgroundColor = '#f7d9e4';
	form_ou.disabled = true;
	form_ou.style.backgroundColor = '#f7d9e4';
  //設定申請人*/
  $('#senao009003').val(userId);
  $('#senao009003_t1').val(user_Name);
  //設定所屬部門*/
  $('#senao009014').val(Department);
  $('#senao009015').val(Department_Name);

  $('#senao009002').attr('disabled', 'true');//單號
  applicant = $('#senao009003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao009014').val();//發起流程時參數 申請人部門ID
  if(form_ou.value==''){
		// alert("取得公司對應有問題，請重新開單一次!!");
		alert(querySNSI009(form_ou.value, "019", locale,"","",""));
		window.history.go(-1);
	}
	
	if (activityId == "Applicant"){
		form_org.disabled = false;
		if (formInstOID == ""){//複製表單時，下方欄位Reset
			if (IsInvaildDept(senao009014.value)){	//判斷是否為失效部門
				senao009014.value = "";	//清空部門
				senao009015.value = "";	//清空部門
			}
		}
	}
  return true;
}
function frmEvent() { 
  $('#senao009005_t1').on('change', function () { 
    senao009005_t1_onchange();
  });
}
function formSave(){
	var errMsg='';
  if (activityId == "Applicant") {   //第一關填單人
    //FRM_COL_CHECK 檢查欄位senao009003 受訓者 、 senao009005 課程名稱 、senao009007 獲得之專業知識、觀念及技能 、 senao009008 工作應用 或 改善計畫 、 senao009009 訓練心得(針對師資、教材內容、上課方式)
		if (systemDateTime > senao009016.value){
			var tMsg_tmp = "";
			var ary_errMsg = [];
			tMsg_tmp = querySNSI009(formId, "001", locale, "", "", "");	//心得報告必須在【截止繳交日期】@@1前繳交!\n請儘早在主管訂立的繳交日期內傳送!
			tMsg_tmp = tMsg_tmp.replace("@@1", senao009016.value.trim());
			ary_errMsg = tMsg_tmp.split("$$");	////$$表示以$$分隔error code
			alert(ary_errMsg[0]);			
		}

		if (senao009014.value.trim() == "" || senao009015.value.trim() == "") {
			errMsg += "[" + $("#lbl_senao009014").html() + "] " + querySNSI009(form_ou.value,"004",locale,"","","") + "\n";	//[受訓者部門]不可空白!
		}
		if (senao009006.value.trim() == "" || senao009006.value.trim() == "") {
			errMsg += "[" + $("#lbl_senao009006").html() + "]-Start " + querySNSI009(form_ou.value,"004",locale,"","","") + "\n";	//[上課時間]-Start 不可空白!
		}
		if (senao009012.value.trim() == "" || senao009012.value.trim() == "") {
			errMsg += "[" + $("#lbl_senao009006").html() + "]-End " + querySNSI009(form_ou.value,"004",locale,"","","") + "\n";	//[上課時間]-End 不可空白!
		}

		if (errMsg === "") {            
			genSubject();		   
			//alert("senao009003.value:"+senao009003.value+","+ queryManagerByEmpId(senao009003.value));
			sysParserRoleIDManagerID.value= queryManagerByEmpId(senao009003.value);        
		}

	//簽核關卡
	} else if (activityId == "Manager") {		
		//ajax_ProcessAccessor.assignRelevantData(processInstOID, "formserialnumber", senao009002.innerHTML );           	        
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
  $('#senao009001').val(type);
  $('#senao009001').attr('disabled', 'true');

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
    const prefixSubject = senao009003_t1.value.trim()+ "－" + $("#Label1").html() + "(" + senao009005.value.trim() + ")_";

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
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao009005_b1').on('click', function () { //請點選課程
  // sessionStorage 存入數據
  let tTitle = "選擇課程";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','','','','','','senao009005_t1');//回傳元件參數
  let tReturnFunction = new Array("senao009005_t1_onchange()"); //回傳函數
  let tColAPi = "BPM_SYS_LW_Class";
  let tAPI = invokeURL + 'BPM_SYS_LW_Class';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', SENAO008003: 'ALL', USERNAME: 'ALL', SENAO008007: 'ALL', SENAO008011: 'ALL', SENAO008012: 'ALL', SENAO008032: 'ALL' };
  let tQBEField = { SENAO008003: 'SENAO008003', USERNAME: 'USERNAME', SENAO008007: 'SENAO008007', SENAO008011: 'SENAO008011', SENAO008012: 'SENAO008012', SENAO008032: 'SENAO008032' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
function senao009005_t1_onchange(){
	//alert("senao009005_t1.value:\n"+senao009005_t1.value);
	if (senao009005_t1.value != ""){
		var aryStr = senao009005_t1.value.split(";");  
		senao009013.value = aryStr[0];
		senao009003.value = aryStr[1];
		senao009003_t1.value = aryStr[2];
		senao009014.value = aryStr[3];
		senao009015.value = aryStr[4];
		senao009005.value = aryStr[5];
		senao009006.value = aryStr[6];
		senao009012.value = aryStr[7];
		senao009016.value = aryStr[8];    
		senao009005_t1.value ="";
	}
	return true;  
}
/*---------------------欄位onChange、onClick Function Start--------------*/