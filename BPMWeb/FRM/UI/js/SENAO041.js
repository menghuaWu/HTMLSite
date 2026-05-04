var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

//基本資料
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別

var hdn_senao041046_m = document.getElementById("hdn_senao041046_m"); //申辦種類

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
  activityId = "Applicant";
  ProcessPackageId='SENAO041';//vivian 抓不到單號暫時定義
  formId='SENAO041';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  systemDateTime = showCurrentDate(); //今天日期
  frmEvent();
  formOpen();
  formCreate();

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
  $('#senao041003').val(userId);
  $('#senao041004').val(user_Name);
  //設定所屬部門*/
  $('#senao041005').val(Department);
  $('#senao041006').val(Department_Name);
  $('#senao041002').attr('disabled', 'true');//單號
  applicant = $('#senao041003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao041005').val();//發起流程時參數 申請人部門ID
/*
  $("#senao041046_0").parent().parent().css('height','40px');
	$("#senao041046_0").parent().parent().css('vertical-align','text-top');
	$("#senao041046_1").parent().parent().css('height','60px');
	$("#senao041046_1").parent().parent().css('vertical-align','text-top');
	$("#senao041046_2").parent().parent().css('height','40px');
	$("#senao041046_2").parent().parent().css('vertical-align','text-top');
	$("#senao041046_3").parent().parent().css('height','20px');
	$("#senao041046_3").parent().parent().css('vertical-align','text-top');*/

  //Label底色
	$("[name^='lbl_']:not([name$='_hdn'],[name*='Grid'],[name$='w001'],[name$='w002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
  
  if (activityId == "Applicant") {	//填單人
    form_org.disabled = false;
    senao041046_onChange();//初始化申請類型的顯示屬性	
    if (senao041002.value== ""){
      //日期
      senao041009.value = systemDateTime;
    }
	} else if (activityId == "GAD"){	//開立發票會計負責人員 0030-0010
		//showBackGroundColor();

	}

  //fieldControl();
	return true;
}
function frmEvent() { 
  $("input[name='senao041046']").on('change', function () { //申辦種類OnChange
    senao041046_onChange();
  });
}
function formSave(){
	var errstr='';
	if (activityId == "Applicant"){  
    if ($("#senao041045_0:checked").length == 0){
			errstr += "[" + $("#lbl_senao041045").text().trim() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n"; //[個資同意]尚未選取!
		}
    var aryApplyType = [];
    $("input[name='senao041046']:checked").each(function () {
      aryApplyType.push(this.value);
    });
    if (aryApplyType.length === 0) {
      errstr += "[" + $("#lbl_senao041046").text().trim() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n"; // [申辦種類]至少勾選一項!
    }
    for (var i = 0; i < aryApplyType.length; i++){        
			if (aryApplyType[i] == "1"){
				if ($("#senao041038").find('option:selected').text() == ""){
					errstr += querySNSI009(formId, "001", locale, "", "", "") + "\n"; //尚未選取[中華民國護照]申請項目
				}
			}else if (aryApplyType[i] == "2"){        
				if($("#senao041039").find('option:selected').text() == ""){
					errstr += querySNSI009(formId, "002", locale, "", "", "") + "\n"; //尚未選取[台胞證]申請項目
					
				}
			}else if (aryApplyType[i] == "99"){        
				if ($("#senao041021").val() == ""){
					errstr += querySNSI009(formId, "003", locale, "", "", "") + "\n"; //[其他項目]不可空白
				}
			}      
		}
	}
  if (errstr == ''){
    if (activityId == "Applicant") {
			prepareForMobile();
			//if (workItemSource != '1' && workItemSource != '2'){
				genSubject();
			//}
		}  
     return true;
  }
	else{
		alert(errstr);
		return false;
	}
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
  $('#senao041001').val(type);
  $('#senao041001').attr('disabled', 'true');

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
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile(){
	$("#hdn_senao041046_m").val("");
	var tmpStr = "";
	var aryApplyType = new Array();
	$('input:checkbox:checked[name="senao041046"]').each(function(i) { aryApplyType[i] = this.value; });  
	for (var i=0; i < aryApplyType.length; i++){    
		tmpStr += aryApplyType[i];
		if(aryApplyType[i] == "1"){	//中華民國護照
			tmpStr += " " + $("#senao041038").find('option:selected').text();
		}else if(aryApplyType[i] == "2"){	//台胞證
			tmpStr += " " + $("#senao041039").find('option:selected').text();    
		}else if(aryApplyType[i] == "99"){	//其它
			tmpStr += " " + $("#senao041021").val();
		}
		tmpStr += "\n";
	}
	$("#hdn_senao041046_m").val(tmpStr);  
}
/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const labelText = (document.getElementById('Label1')?.innerText || '').trim();
    const applicant = ($('#senao041004').val() || '').trim();
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

/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao041003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao041003','senao041004','senao041005','senao041006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao041024_b1').on('click', function () { //歸屬部門開窗
  // sessionStorage 存入數據
  let tTitle = "歸屬部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao041024','senao041025');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: form_ou.value, UNID: null, ORGNAME: null };
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
//申辦種類onchange
function senao041046_onChange(){
	if (document.getElementById("senao041046_0").checked){//中華民國護照
		document.getElementById("senao041038").disabled=false;
	}else{
		document.getElementById("senao041038").value="";
	}

	if (document.getElementById("senao041046_1").checked){//杜拜
		document.getElementById("senao041039").disabled=false;
	}else{
		document.getElementById("senao041039").value="";
	}

	if (document.getElementById("senao041046_3").checked){ //其他
		//document.getElementById("senao041021").disabled= false;
		document.getElementById("senao041021").readOnly= false;
	}else{
		//document.getElementById("senao041021").disabled= true;
		document.getElementById("senao041021").readOnly= true;    						   
		document.getElementById("senao041021").value="";
	} 
	//showBackGroundColor();
  
}
/*---------------------欄位onChange、onClick Function Start--------------*/