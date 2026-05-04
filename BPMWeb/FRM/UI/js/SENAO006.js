var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別

var SerialNumber = document.getElementById("SerialNumber"); //表單單號
var senao_f070 = document.getElementById("senao_f070"); //需求單位id
var senao_f071 = document.getElementById("senao_f071"); //需求單位名稱
var senao_f003 = document.getElementById("senao_f003"); //需求主管id
var senao_f003_t1 = document.getElementById("senao_f003_t1"); //需求主管名稱
var senao_f005 = document.getElementById("senao_f005"); //申請日期
var senao_f067 = document.getElementById("senao_f067"); //需求天數
var senao_f007_t1 = document.getElementById("senao_f007_t1"); //需求人才職稱
var senao_f061 = document.getElementById("senao_f061"); //刊登職缺名稱
var senao_f010 = document.getElementById("senao_f010"); //現有人數
var senao_f062 = document.getElementById("senao_f062"); //已核准待補人數
var senao_f078 = document.getElementById("senao_f078"); //待報到人數
var senao_f011 = document.getElementById("senao_f011"); //本次需求人數
var senao_f009 = document.getElementById("senao_f009"); //總共人數
var senao_f104 = document.getElementById("senao_f104"); //現有人數 2
var senao_f105 = document.getElementById("senao_f105"); //本次需求人數 2
var senao_f106_0 = document.getElementById("senao_f106_0"); //CheckBox 外部招募
var senao_f106_1 = document.getElementById("senao_f106_1"); //CheckBox 內部輪調
var senao_f106_2 = document.getElementById("senao_f106_2"); //CheckBox 付費中高階
var senao_f014 = document.getElementById("senao_f014"); //學歷要求
var senao_f008 = document.getElementById("senao_f008"); //工作地點
var senao_f101 = document.getElementById("senao_f101"); //科系要求一
var senao_f102 = document.getElementById("senao_f102"); //科系要求二
var senao_f103 = document.getElementById("senao_f103"); //科系要求三
var senao_f015_0 = document.getElementById("senao_f015_0"); //RdoButton 新增職缺
var senao_f015_1 = document.getElementById("senao_f015_1"); //RdoButton 補缺
var senao_f063_0 = document.getElementById("senao_f063_0"); //RdoButton 補缺---內部調動
var senao_f076 = document.getElementById("senao_f076"); //RdoButton 補缺---內部調動人員姓名
var senao_f063B_0 = document.getElementById("senao_f063B_0"); //RdoButton 補缺---離職遞補
var senao_f060 = document.getElementById("senao_f060"); //RdoButton 補缺---遞補離職 離職人員姓名
var senao_f015C_0 = document.getElementById("senao_f015C_0"); //RdoButton 其他
var senao_f016 = document.getElementById("senao_f016"); //RdoButton 其他---之說明
var senao_f107 = document.getElementById("senao_f107"); //人員增補效益評估
var senao_f017 = document.getElementById("senao_f017"); //工作內容
var senao_f018 = document.getElementById("senao_f018"); //工作經驗
var senao_f077 = document.getElementById("senao_f077"); //其他條件

var senao_f019_0 = document.getElementById("senao_f019_0"); //CheckBox 英文
var senao_f020_0 = document.getElementById("senao_f020_0"); //CheckBox 聽
var senao_f021 = document.getElementById("senao_f021"); //List 精通, 良好, 普通, 差
var senao_f022_0 = document.getElementById("senao_f022_0"); //CheckBox 說
var senao_f023 = document.getElementById("senao_f023"); //List 精通, 良好, 普通, 差
var senao_f024_0 = document.getElementById("senao_f024_0"); //CheckBox 讀
var senao_f025 = document.getElementById("senao_f025"); //List 精通, 良好, 普通, 差
var senao_f026_0 = document.getElementById("senao_f026_0"); //CheckBox 寫
var senao_f027 = document.getElementById("senao_f027"); //List 精通, 良好, 普通, 差

var senao_f028_0 = document.getElementById("senao_f028_0"); //CheckBox 日文
var senao_f029_0 = document.getElementById("senao_f029_0"); //CheckBox 聽
var senao_f030 = document.getElementById("senao_f030"); //List 精通, 良好, 普通, 差
var senao_f031_0 = document.getElementById("senao_f031_0"); //CheckBox 說
var senao_f032 = document.getElementById("senao_f032"); //List 精通, 良好, 普通, 差
var senao_f033_0 = document.getElementById("senao_f033_0"); //CheckBox 讀
var senao_f034 = document.getElementById("senao_f034"); //List 精通, 良好, 普通, 差
var senao_f035_0 = document.getElementById("senao_f035_0"); //CheckBox 寫
var senao_f036 = document.getElementById("senao_f036"); //List 精通, 良好, 普通, 差

var senao_f037_0 = document.getElementById("senao_f037_0"); //CheckBox 台語
var senao_f038_0 = document.getElementById("senao_f038_0"); //CheckBox 聽
var senao_f039 = document.getElementById("senao_f039"); //List 精通, 良好, 普通, 差
var senao_f040_0 = document.getElementById("senao_f040_0"); //CheckBox 說
var senao_f041 = document.getElementById("senao_f041"); //List 精通, 良好, 普通, 差
var senao_f042_0 = document.getElementById("senao_f042_0"); //CheckBox 讀
var senao_f043 = document.getElementById("senao_f043"); //List 精通, 良好, 普通, 差
var senao_f044_0 = document.getElementById("senao_f044_0"); //CheckBox 寫
var senao_f045 = document.getElementById("senao_f045"); //List 精通, 良好, 普通, 差

var senao_f046_0 = document.getElementById("senao_f046_0"); //CheckBox 其他
var senao_f047 = document.getElementById("senao_f047"); //Textbox 其他--說明
var senao_f048_0 = document.getElementById("senao_f048_0"); //CheckBox 聽
var senao_f049 = document.getElementById("senao_f049"); //List 精通, 良好, 普通, 差
var senao_f050_0 = document.getElementById("senao_f050_0"); //CheckBox 說
var senao_f051 = document.getElementById("senao_f051"); //List 精通, 良好, 普通, 差
var senao_f052_0 = document.getElementById("senao_f052_0"); //CheckBox 讀
var senao_f053 = document.getElementById("senao_f053"); //List 精通, 良好, 普通, 差
var senao_f054_0 = document.getElementById("senao_f054_0"); //CheckBox 寫
var senao_f055 = document.getElementById("senao_f055"); //List 精通, 良好, 普通, 差

var senao_f083_0 = document.getElementById("senao_f083_0"); //作業系統 Windows
var senao_f083_1 = document.getElementById("senao_f083_1"); //作業系統 WinCE
var senao_f083_2 = document.getElementById("senao_f083_2"); //作業系統 Linux
var senao_f083_3 = document.getElementById("senao_f083_3"); //作業系統 Unix
var senao_f079_0 = document.getElementById("senao_f079_0"); //辦公室應用 Excel
var senao_f079_1 = document.getElementById("senao_f079_1"); //辦公室應用 Word
var senao_f079_2 = document.getElementById("senao_f079_2"); //辦公室應用 PowerPoint
var senao_f079_3 = document.getElementById("senao_f079_3"); //辦公室應用 Outlook
var senao_f087_0 = document.getElementById("senao_f087_0"); //程式設計 ASP
var senao_f087_1 = document.getElementById("senao_f087_1"); //程式設計 C/C++
var senao_f087_2 = document.getElementById("senao_f087_2"); //程式設計 JAVA
var senao_f087_3 = document.getElementById("senao_f087_3"); //程式設計 VB
var senao_f087_4 = document.getElementById("senao_f087_4"); //程式設計 Assembly
var senao_f092_0 = document.getElementById("senao_f092_0"); //資料庫 Oracle
var senao_f092_1 = document.getElementById("senao_f092_1"); //資料庫 MySQL
var senao_f092_2 = document.getElementById("senao_f092_2"); //資料庫 Access
var senao_f095_0 = document.getElementById("senao_f095_0"); //繪圖軟體 AutoCAD
var senao_f095_1 = document.getElementById("senao_f095_1"); //繪圖軟體 Pro-E
var senao_f095_2 = document.getElementById("senao_f095_2"); //繪圖軟體 PhotoShop
var senao_f095_3 = document.getElementById("senao_f095_3"); //繪圖軟體 Corel Draw
var senao_f056 = document.getElementById("senao_f056"); //其他條件
var senao_f057 = document.getElementById("senao_f057"); //專業認證
var senao_f058 = document.getElementById("senao_f058"); //駕照
var senao_f059 = document.getElementById("senao_f059"); //其他

var senao_f099 = document.getElementById("senao_f099"); //職級

var hdn_senao_f064 = document.getElementById("hdn_senao_f064"); //已招募人數
var hdn_senao_f072 = document.getElementById("hdn_senao_f072"); //是否作廢
var hdn_senao_f073 = document.getElementById("hdn_senao_f073"); //作廢原因
var hdn_senao_f007 = document.getElementById("hdn_senao_f007"); //需求人才職稱代碼

var hdn_orgid = document.getElementById("hdn_orgid"); //orgid
var hdn_orgoid = document.getElementById("hdn_orgoid"); //orgoid
var hdn_hr_group = document.getElementById("hdn_hr_group"); //hdn_hr_group
var hdn_bp_group = document.getElementById("hdn_bp_group"); //hdn_bp_group
var hdn_sign_flag = document.getElementById("hdn_sign_flag"); //層級判斷
var hdn_spec_manager = document.getElementById("hdn_spec_manager"); //指定單位主管
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title"); //新增hdn_formnumber_title欄位來建立表單單號
//For Mobile Use
var s_senao_f067 = document.getElementById("s_senao_f067"); //需求天數
var s_senao_f010 = document.getElementById("s_senao_f010"); //部門現有人力總數說明
var s_senao_f104 = document.getElementById("s_senao_f104"); //此次人力職缺概況
var s_senao_f101 = document.getElementById("s_senao_f101"); //科系要求
var s_senao_f015 = document.getElementById("s_senao_f015"); //申請理由
var s_senao_f008 = document.getElementById("s_senao_f008"); //工作地點
var s_senao_f019 = document.getElementById("s_senao_f019"); //英文語文要求
var s_senao_f028 = document.getElementById("s_senao_f028"); //日文語文要求
var s_senao_f037 = document.getElementById("s_senao_f037"); //台語語文要求
var s_senao_f046 = document.getElementById("s_senao_f046"); //其他語文要求
var s_senao_f083 = document.getElementById("s_senao_f083"); //電腦能力--作業系統
var s_senao_f079 = document.getElementById("s_senao_f079"); //電腦能力--辦公室應用
var s_senao_f087 = document.getElementById("s_senao_f087"); //電腦能力--程式設計
var s_senao_f092 = document.getElementById("s_senao_f092"); //電腦能力--資料庫
var s_senao_f095 = document.getElementById("s_senao_f095"); //電腦能力--繪圖軟體
var s_senao_f099 = document.getElementById("s_senao_f099"); //職級
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
    mainOrgUnitIds = data.data.DEP_ID;
    mainOrgUnitNames = data.data.DEP_NAME;
  }
  //vivian 暫時定義 start
  /*
  activityId = "UserTask_3";
  ProcessPackageId='SENAO006';//vivian 抓不到單號暫時定義
  formId='SENAO006';//vivian 抓不到單號暫時定義
  //vivian 暫時定義 end*/
  systemDateTime = showCurrentDate(); //今天日期
  formCreate();
  formOpen();
  frmEvent();
});
function formCreate(){
  senao_f003.value = userId;
  senao_f003_t1.value = user_Name;    
  //20240215 Steve 修改formCreate時帶出的senao_f070.value
  //senao_f070.value = "[senao]"+mainOrgUnitIds;
  senao_f070.value = mainOrgUnitIds;
  senao_f071.value = mainOrgUnitNames;  
  hdn_orgid.value = mainOrgId;
  hdn_orgoid.value = mainOrgOID;
	return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  setActivityFieldControl();
  $("#Label141").hide();
	$("#Label142").hide();
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //設定申請人*/
  //$('#senao_f003').val(userId);
  //$('#senao_f003_t1').val(user_Name);
  //$('#senao_f003').attr('disabled', 'true');
  $('#senao_f003_t1').attr('disabled', 'true');
  //設定所屬部門*/
  //$('#senao_f070').val(Department);
  //$('#senao_f071').val(Department_Name);
  $('#senao_f070').attr('disabled', 'true');
  $('#senao_f071').attr('disabled', 'true');
  //設定工作地點下拉選單
  setSelectDefalut("senao_f008", apiInvoke + "BPM_OFFICE_INFO_LIST", {COMPANY: $('#form_ou').val()}, "");
  $('#SerialNumber').attr('disabled', 'true');//單號
  applicant = $('#senao_f003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao_f070').val();//發起流程時參數 申請人部門ID

  hdn_formnumber_title.value = form_ou.value.toUpperCase()+"006";
  form_org.style.backgroundColor = '#f7d9e4';
	form_ou.disabled=true;
	form_ou.style.backgroundColor = '#f7d9e4';
  
  if(form_ou.value==''){
		//alert("取得公司對應有問題，請重新開單一次!!");
		alert(querySNSI009("senao","019",locale,"","",""));
		//window.history.go(-1);
	}else{
		org = form_ou.value; 
	}
  openDisable();  
  if (activityId == "UserTask_3") { //申請人
    /*
		if(workItemOwnerOID != ""){
			IsBossno(userId);    
		}else{
			//沒有工作處理者表示為追蹤流程或是管理流程裡面的管理表單
			document.getElementById("Label113").style.display = "none";
		}*/
		IsBossno(userId);    
		//複製表單時，下方欄位Reset	
		if (formInstOID == "") {
			$('#senao_e011').css({"background-color": EDIT_BGCOLOR});
			if (IsInvaildDept($('#senao_f070').val())){	//判斷是否為失效部門
				$('#senao_f070').val('');	//清空部門
				$('#senao_f071').val('');	//清空部門
			}
		}
	}else{
		//非第一關後，就直接不顯示上方中間標題列 [拒絕申請!!您沒有權限填寫人力需求申請單!]      
		document.getElementById("Label113").style.display = "none"; 
  }
  //必填欄位顏色改變
  $('#senao_f067').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f007_t1').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f061').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f010').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f062').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f078').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f011').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f104').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f014').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f008').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f101').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f102').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f103').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f107').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f017').css({"background-color": EDIT_BGCOLOR});
  $('#senao_f018').css({"background-color": EDIT_BGCOLOR});

  return true;
}
function frmEvent() { 
  $('#senao_f010').on('blur', function () { //現有人數
    senao_f010_onblur();
  });
  $('#senao_f062').on('blur', function () { //已核准待補人數
    senao_f062_onblur();
  });
  $('#senao_f078').on('blur', function () { //待報到人數
    senao_f078_onblur();
  });
  $('#senao_f011').on('blur', function () { //本次需求人數
    senao_f011_onblur();
  });
  $('#senao_f015').on('change', function () { //申請理由下拉選單(radio改為下拉選單click改change)
    senao_f015_onchange();
  });
  $('#senao_f106_2').on('change', function () {//增補方式欄位
    senao_f106_onclick();
  });
  $('#senao_f063').on('change', function () { //申請理由補缺下拉選單(radio改為下拉選單click改change)
    senao_f063_onchange();
  });
  /*$('#senao_f063B').on('click', function () { //申請理由補缺中的遞補離職 已經改為下拉選單選項
    senao_f063B_onclick();
  });*/
  $('input[name="senao_f019"]').on('change', function () { //語言要求 英文
    senao_f019_onclick();
  });
  $('input[name="senao_f020"]').on('change', function () {  //語言要求 英文 聽
    senao_f020_onclick();
  });
  $('input[name="senao_f022"]').on('change', function () {  //語言要求 英文 說
    senao_f022_onclick();
  });
  $('input[name="senao_f024"]').on('change', function () {  //語言要求 英文 讀
    senao_f024_onclick();
  });
  $('input[name="senao_f026"]').on('change', function () {  //語言要求 英文 寫
    senao_f026_onclick();
  });
  $('input[name="senao_f028"]').on('change', function () {  //語言要求 日文
    senao_f028_onclick();
  });
  $('input[name="senao_f029"]').on('change', function () {  //語言要求 日文 聽
    senao_f029_onclick();
  });
  $('input[name="senao_f031"]').on('change', function () {  //語言要求 日文 說
    senao_f031_onclick();
  });
  $('input[name="senao_f033"]').on('change', function () {  //語言要求 日文 讀
    senao_f033_onclick();
  });
  $('input[name="senao_f035"]').on('change', function () {  //語言要求 日文 寫
    senao_f035_onclick();
  });
  $('input[name="senao_f037"]').on('change', function () {  //語言要求 台語
    senao_f037_onclick();
  });
  $('input[name="senao_f038"]').on('change', function () {  //語言要求 台語 聽
    senao_f038_onclick();
  });
  $('input[name="senao_f040"]').on('change', function () {  //語言要求 台語 說
    senao_f040_onclick();
  });
  $('input[name="senao_f042"]').on('change', function () {  //語言要求 台語 讀
    senao_f042_onclick();
  });
  $('input[name="senao_f044"]').on('change', function () {  //語言要求 台語 寫
    senao_f044_onclick();
  });
  $('input[name="senao_f046"]').on('change', function () {  //語言要求 其他
    senao_f046_onclick();
  });
  $('input[name="senao_f048"]').on('change', function () {  //語言要求 其他 聽
    senao_f048_onclick();
  });
  $('input[name="senao_f050"]').on('change', function () {  //語言要求 其他 說
    senao_f050_onclick();
  });
  $('input[name="senao_f052"]').on('change', function () {  //語言要求 其他 讀
    senao_f052_onclick();
  });
  $('input[name="senao_f054"]').on('change', function () {  //語言要求 其他 寫
    senao_f054_onclick();
  });
  $('#senao_f067').on('change', function () { //需求天數
    senao_f067_onchange();
  });
}
function formSave(){
	var errstr='';
  if (activityId === 'UserTask_3'){ //填單人
    //組織判斷 需要通知的HR_Group
    hdn_hr_group.value="[" + form_ou.value + "]SN006_02_HR通知人員"; //20241014 Neil   
    //FRM_COL_CHECK 檢查欄位senao_f067、senao_f007_t1、senao_f061、senao_f008、senao_f014、senao_f107、senao_f017、senao_f018
    if(org=="enr"){
      if(senao_f099.value==""){
        //errstr += "請選擇[職級]!!! \r";
        errstr += "[" + $("#lbl_senao_f099").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
      }else{
        s_senao_f099.value=senao_f099.value;
      }        
    } 
    if(senao_f070.value=="" || senao_f071.value==""){
      //errstr += "請確認是否有選擇需求單位 \r";
		  errstr += "[" + $("#lbl_senao_f070").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
    }
    if(senao_f003.value=="" || senao_f003_t1.value==""){
      //errstr += "請確認是否有選擇需求主管 \r";
		  errstr += "[" + $("#lbl_senao_f003").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
    }
    /*
    if(senao_f067.value=="請選擇"){
      //errstr += "請選擇需求天數 \r";
		  errstr += "[" + $("#lbl_senao_f067").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
    }
    if(senao_f007_t1.value==""){
      //errstr += "需求人才職稱不能為空白 \r";
		  errstr += "[" + $("#lbl_senao_f007_t1").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";
    }
    if(senao_f061.value==""){
      //errstr += "刊登職缺名稱不能為空白 \r";
		  errstr += "[" + $("#lbl_senao_f061").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";
    }*/
    if(senao_f010.value==""){
      //errstr += "【部門現有人力總數】--【現有人數】 不得空白 \r";
		  errstr += querySNSI009(formId,"006",locale,"","","") + "\n";
    }else{
      if(isNaN(senao_f010.value)) {
        //errstr = errstr + "【部門現有人力總數】--【現有人數】 需為數字\n";
        errstr += querySNSI009(formId,"007",locale,"","","") + "\n";
      }
    }
    if(senao_f062.value==""){
      //errstr += "【部門現有人力總數】--【已核准待補人數】 不得空白 \r";
		  errstr += querySNSI009(formId,"008",locale,"","","") + "\n";
    }else{
      if(isNaN(senao_f062.value)) {
        //errstr = errstr + "【部門現有人力總數】--【已核准待補人數】 需為數字\n";
        errstr += querySNSI009(formId,"009",locale,"","","") + "\n";
      }
    }
    if(senao_f078.value==""){
      //errstr += "【部門現有人力總數】--【待報到人數】 不得空白 \r";
		  errstr += querySNSI009(formId,"010",locale,"","","") + "\n";
    }else{
      if(isNaN(senao_f078.value)) {
        //errstr = errstr + "【部門現有人力總數】--【待報到人數】 需為數字\n";
			  errstr += querySNSI009(formId,"011",locale,"","","") + "\n";
      }
    }
    if(senao_f011.value==""){
	    //errstr += "【部門現有人力總數】--【本次需求人數】 不得空白 \r";
		  errstr += querySNSI009(formId,"012",locale,"","","") + "\n";
    }else{
      if(isNaN(senao_f011.value)) {
        //errstr = errstr + "【部門現有人力總數】--【本次需求人數】 需為數字\n";
        errstr += querySNSI009(formId,"013",locale,"","","") + "\n";
      }
    }
    if(senao_f104.value==""){
      //errstr += "【此次職缺人力概況】--【現有人數】 不得空白 \r";
		  errstr += querySNSI009(formId,"014",locale,"","","") + "\n";
    }else{
      if(isNaN(senao_f104.value)) {
        //errstr = errstr + "【此次職缺人力概況】--【現有人數】 需為數字\n";
        errstr += querySNSI009(formId,"015",locale,"","","") + "\n";
      }
    }
    if(senao_f106_0.checked==false && senao_f106_1.checked==false && senao_f106_2.checked==false){
      //errstr = errstr + "請選擇增補方式\n";
		  errstr += "[" + $("#lbl_senao_f106").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
    }
    /*
    if(senao_f008.value==""){
      //errstr = errstr + "請選擇工作地點\n";
		  errstr += "[" + $("#lbl_senao_f008").html() + "] " + querySNSI009("senao","003",locale,"","","") + "\n";
    }
    if(senao_f014.value==""){
      //errstr = errstr + "學歷要求不能為空白\n";
		  errstr += "[" + $("#lbl_senao_f014").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";		
    }*/
    if(jQuery.trim(senao_f101.value)=="" && jQuery.trim(senao_f102.value)=="" && jQuery.trim(senao_f103.value)==""){
      //errstr = errstr + "科系要求至少要有一項\n";	
		  errstr += "[" + $("#lbl_senao_f101").html() + "] " + querySNSI009("senao","016",locale,"","","") + "\n";
    }
    if(senao_f015.value == ""){
    //if(senao_f015_0.checked==false && senao_f015_1.checked==false && senao_f015C_0.checked==false){
      //errstr = errstr + "【申請理由】，請選擇【新增職缺】或【補缺】或【其他】\n";
		  errstr += querySNSI009(formId,"016",locale,"","","") + "\n";		
    }
    if(senao_f015.value == "Fill"){
    //if(senao_f015_1.checked){
      if(senao_f063.value==""){
      //if(senao_f063_0.checked==false && senao_f063B_0.checked==false){
        //errstr = errstr + "【申請理由為補缺】，請選擇【內部調動】或【遞補離職】\n";
       errstr += querySNSI009(formId,"017",locale,"","","") + "\n";		  
      }
      else if(senao_f063.value=="內部調動"){
        if(jQuery.trim(senao_f076.value)==""){
          //errstr = errstr + "【申請理由為補缺-內部調動】，請在旁邊空白欄位處填寫調動人員姓名\n";
          errstr += querySNSI009(formId,"018",locale,"","","") + "\n";
        }else{
          if(!isNaN(senao_f076.value)){
            //errstr = errstr + "【申請理由為補缺-內部調動】，請輸入「內部調動」人員姓名\n";
            errstr += querySNSI009(formId,"019",locale,"","","") + "\n";
            senao_f076.value="";
          }
        }
      }else if(senao_f063.value=="遞補離職"){
        if(jQuery.trim(senao_f060.value)==""){
          //errstr = errstr + "【申請理由為補缺-遞補離職】，請在旁邊空白欄位處填寫離職人員姓名\n";
          errstr += querySNSI009(formId,"020",locale,"","","") + "\n";
        }else{
          if(!isNaN(senao_f060.value)){
            //errstr = errstr + "【申請理由為補缺-遞補離職】，請輸入「離職人員」姓名\n";
            errstr += querySNSI009(formId,"021",locale,"","","") + "\n";
            senao_f060.value="";
          }
        }
      }
    }  
    /*if(senao_f063_0.checked){
      if(jQuery.trim(senao_f076.value)==""){
        //errstr = errstr + "【申請理由為補缺-內部調動】，請在旁邊空白欄位處填寫調動人員姓名\n";
			  errstr += querySNSI009(formId,"018",locale,"","","") + "\n";
      }else{
        if(!isNaN(senao_f076.value)){
          //errstr = errstr + "【申請理由為補缺-內部調動】，請輸入「內部調動」人員姓名\n";
			    errstr += querySNSI009(formId,"019",locale,"","","") + "\n";
          senao_f076.value="";
        }
      }
    }
    if(senao_f063B_0.checked){
      if(jQuery.trim(senao_f060.value)==""){
        //errstr = errstr + "【申請理由為補缺-遞補離職】，請在旁邊空白欄位處填寫離職人員姓名\n";
			  errstr += querySNSI009(formId,"020",locale,"","","") + "\n";
      }else{
        if(!isNaN(senao_f060.value)){
          //errstr = errstr + "【申請理由為補缺-遞補離職】，請輸入「離職人員」姓名\n";
          errstr += querySNSI009(formId,"021",locale,"","","") + "\n";
			    senao_f060.value="";
        }
      }
    }*/
    if(senao_f015.value == "其他" && jQuery.trim(senao_f016.value)==""){
    //if(senao_f015C_0.checked && jQuery.trim(senao_f016.value)==""){
      //errstr = errstr + "【申請理由為其他】，請在旁邊空白欄位處輸入說明\n";
		  errstr += querySNSI009(formId,"022",locale,"","","") + "\n";
    }
    /*
    if(jQuery.trim(senao_f107.value)==""){
      //errstr = errstr + "人員增補效益評估不能為空白\n";
		  errstr += "[" + $("#lbl_senao_f107").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";
    }
    if(jQuery.trim(senao_f017.value)==""){
      //errstr = errstr + "工作內容不能為空白\n";
		  errstr += "[" + $("#lbl_senao_f017").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";		
    }
    if(jQuery.trim(senao_f018.value)==""){
      //errstr = errstr + "工作經驗不能為空白\n";
		  errstr += "[" + $("#lbl_senao_f018").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";		
    }*/
    /*if (document.getElementById("Attachment_shell") == null) {
      //errstr +="請附職位說明書\n";
		  errstr += querySNSI009(formId,"023",locale,"","","") + "\n";
    }*/
    if(senao_f019_0.checked){ //語言 英文勾選
      if(senao_f020_0.checked==false && senao_f022_0.checked==false && senao_f024_0.checked==false && senao_f026_0.checked==false){
        //errstr +="【英文】--聽、說、讀、寫不能為空白\n";
        errstr += querySNSI009(formId,"024",locale,"","","") + "\n";
      }
      if(senao_f020_0.checked){
        if(senao_f021.value=="Blank"){
          //errstr +="【英文】--聽的能力不能為空白\n";
          errstr += querySNSI009(formId,"025",locale,"","","") + "\n";
        }
      }
      if(senao_f022_0.checked){
        if(senao_f023.value=="Blank"){
          //errstr +="【英文】--說的能力不能為空白\n";
          errstr += querySNSI009(formId,"026",locale,"","","") + "\n";
        }
      }
      if(senao_f024_0.checked){
        if(senao_f025.value=="Blank"){
          //errstr +="【英文】--讀的能力不能為空白\n";
          errstr += querySNSI009(formId,"027",locale,"","","") + "\n";
        }
      }
      if(senao_f026_0.checked){
        if(senao_f027.value=="Blank"){
          //errstr +="【英文】--寫的能力不能為空白\n";
          errstr += querySNSI009(formId,"028",locale,"","","") + "\n";
        }
      }
    }
    if(senao_f028_0.checked){ //語言 日文勾選
      if(senao_f029_0.checked==false && senao_f031_0.checked==false && senao_f033_0.checked==false && senao_f035_0.checked==false){
        //errstr +="【日文】--聽、說、讀、寫不能為空白\n";
        errstr += querySNSI009(formId,"029",locale,"","","") + "\n";
      }
      if(senao_f029_0.checked){
        if(senao_f030.value=="Blank"){
            //errstr +="【日文】--聽的能力不能為空白\n";
          errstr += querySNSI009(formId,"030",locale,"","","") + "\n";
        }
      }
      if(senao_f031_0.checked){
        if(senao_f032.value=="Blank"){
            //errstr +="【日文】--說的能力不能為空白\n";
          errstr += querySNSI009(formId,"031",locale,"","","") + "\n";
        }
      }
      if(senao_f033_0.checked){
        if(senao_f034.value=="Blank"){
            //errstr +="【日文】--讀的能力不能為空白\n";
          errstr += querySNSI009(formId,"032",locale,"","","") + "\n";
        }
      }
      if(senao_f035_0.checked){
        if(senao_f036.value=="Blank"){
            //errstr +="【日文】--寫的能力不能為空白\n";
          errstr += querySNSI009(formId,"033",locale,"","","") + "\n";
        }
      }
    }
    if(senao_f037_0.checked){ //語言 台語勾選
      if(senao_f038_0.checked==false && senao_f040_0.checked==false && senao_f042_0.checked==false && senao_f044_0.checked==false){
        //errstr +="【台語】--聽、說、讀、寫不能為空白\n";
        errstr += querySNSI009(formId,"034",locale,"","","") + "\n";
      }
      if(senao_f038_0.checked){
        if(senao_f039.value=="Blank"){
            //errstr +="【台語】--聽的能力不能為空白\n";
          errstr += querySNSI009(formId,"035",locale,"","","") + "\n";
        }
      }
      if(senao_f040_0.checked){
        if(senao_f041.value=="Blank"){
            //errstr +="【台語】--說的能力不能為空白\n";
          errstr += querySNSI009(formId,"036",locale,"","","") + "\n";
        }
      }
      if(senao_f042_0.checked){
        if(senao_f043.value=="Blank"){
            //errstr +="【台語】--讀的能力不能為空白\n";
          errstr += querySNSI009(formId,"037",locale,"","","") + "\n";
        }
      }
      if(senao_f044_0.checked){
        if(senao_f045.value=="Blank"){
            //errstr +="【台語】--寫的能力不能為空白\n";
          errstr += querySNSI009(formId,"038",locale,"","","") + "\n";
        }
      }
    }
    if(senao_f046_0.checked){ //語言 其他勾選
      if(jQuery.trim(senao_f047.value)==""){
        //errstr+="語文要求勾選【其他】，請在下方空白欄位處填寫要求語文\n"
        errstr += querySNSI009(formId,"039",locale,"","","") + "\n";
      }
      if(senao_f048_0.checked==false && senao_f050_0.checked==false && senao_f052_0.checked==false && senao_f054_0.checked==false){
        //errstr +="【其他語言】--聽、說、讀、寫不能為空白\n";
        errstr += querySNSI009(formId,"040",locale,"","","") + "\n";
      }
      if(senao_f048_0.checked){
        if(senao_f049.value=="Blank"){
            //errstr +="【其他語言】--聽的能力不能為空白\n";
          errstr += querySNSI009(formId,"041",locale,"","","") + "\n";
        }
      }
      if(senao_f050_0.checked){
        if(senao_f051.value=="Blank"){
            //errstr +="【其他語言】--說的能力不能為空白\n";
          errstr += querySNSI009(formId,"042",locale,"","","") + "\n";
        }
      }
      if(senao_f052_0.checked){
        if(senao_f053.value=="Blank"){
            //errstr +="【其他語言】--讀的能力不能為空白\n";
          errstr += querySNSI009(formId,"043",locale,"","","") + "\n";
        }
      }
      if(senao_f054_0.checked){
        if(senao_f055.value=="Blank"){
            //errstr +="【其他語言】--寫的能力不能為空白\n";
          errstr += querySNSI009(formId,"044",locale,"","","") + "\n";
        }
      }
    } 
    if (errstr === "") {
      s_senao_f067.value = senao_f067.value//需求天數
      //部門現有人力總數說明
      //s_senao_f010.value = "現有"+senao_f010.value+"人，已核准待補"+senao_f062.value+"人，待報到"+senao_f078.value+"人，本次需求"+senao_f011.value+"人，共"+senao_f009.value+"人";
      s_senao_f104.value = $("#Label141").html().replace("@@1",senao_f010.value).replace("@@2",senao_f062.value).replace("@@3",senao_f078.value).replace("@@4",senao_f011.value).replace("@@5",senao_f009.value);
      if(senao_f106_0.checked){
        //此次人力職缺概況
        //s_senao_f104.value =   "增補方式:[ 外部招募 ] ；現有"+senao_f104.value+"人，本次需求"+senao_f105.value+"人";
        s_senao_f104.value = $("#lbl_senao_f106").html() + ":[" + $("#senao_f106_0").attr("text") + "] ；" + $("#Label142").html().replace("@@1",senao_f104.value).replace("@@2",senao_f105.value);
      }
      if(senao_f106_1.checked){
        //此次人力職缺概況
        //s_senao_f104.value =   "增補方式:[ 內部輪調 ] ；現有"+senao_f104.value+"人，本次需求"+senao_f105.value+"人";
        s_senao_f104.value = $("#lbl_senao_f106").html() + ":[" + $("#senao_f106_1").attr("text") + "] ；" + $("#Label142").html().replace("@@1",senao_f104.value).replace("@@2",senao_f105.value);
      }
      if(senao_f106_2.checked){
        //此次人力職缺概況
        //s_senao_f104.value =   "增補方式:[ 使用付費之中高階人才招募管道 ] ；現有"+senao_f104.value+"人，本次需求"+senao_f105.value+"人";
        s_senao_f104.value = $("#lbl_senao_f106").html() + ":[" + $("#senao_f106_2").attr("text") + "] ；" + $("#Label142").html().replace("@@1",senao_f104.value).replace("@@2",senao_f105.value);
      }
      s_senao_f101.value = senao_f101.value+"、"+senao_f102.value+"、"+senao_f103.value; //科系要求
      if(senao_f015.value !== ""){
      //if(senao_f015_0.checked){ //申請理由 : 新增職缺
          //s_senao_f015.value = "新增職缺"; 
        s_senao_f015.value = $("#senao_f015 option:selected").text();
        if(senao_f063.value =="內部調動"){
          s_senao_f015.value = $("#senao_f063 option:selected").text() + "：" + senao_f076.value;
        }
        if(senao_f063.value =="遞補離職"){
          s_senao_f015.value = $("#senao_f063 option:selected").text() + "：" + senao_f060.value;
        }
        if(senao_f015.value == "其他"){
          s_senao_f015.value = $("#senao_f015 option:selected").text();
        }
      }
      s_senao_f008.value =  senao_f008.value;//工作地點
      //英文語文要求
      if(senao_f019_0.checked){
        //s_senao_f019.value =  "(英文)";//語文要求
        if(senao_f020_0.checked){                
            //s_senao_f019.value += "(聽)－"+senao_f021.value+"、";
          s_senao_f046.value += "(" + $("#senao_f020_0").attr("text") + ")－" + senao_f021.value+"、";
        }
        if(senao_f022_0.checked){                
            //s_senao_f019.value += "(說)－"+senao_f023.value+"、";
          s_senao_f046.value += "(" + $("#senao_f022_0").attr("text") + ")－" + senao_f023.value+"、";
        }
        if(senao_f024_0.checked){                
            //s_senao_f019.value += "(讀)－"+senao_f025.value+"、";
          s_senao_f046.value += "(" + $("#senao_f024_0").attr("text") + ")－" + senao_f025.value+"、";
        }
        if(senao_f026_0.checked){                
            //s_senao_f019.value += "(寫)－"+senao_f027.value+"、";
          s_senao_f046.value += "(" + $("#senao_f026_0").attr("text") + ")－" + senao_f027.value+"、";
        }
        s_senao_f019.value = left(s_senao_f019.value,s_senao_f019.value.length-1);
      }
      //日文要求
      if(senao_f028_0.checked){
        if(senao_f029_0.checked){                
            //s_senao_f028.value += "(聽)－"+senao_f030.value+"、";
          s_senao_f046.value += "(" + $("#senao_f029_0").attr("text") + ")－" + senao_f030.value+"、";
        }
        if(senao_f031_0.checked){                
            //s_senao_f028.value += "(說)－"+senao_f032.value+"、";
          s_senao_f046.value += "(" + $("#senao_f031_0").attr("text") + ")－" + senao_f032.value+"、";
        }
        if(senao_f033_0.checked){                
            //s_senao_f028.value += "(讀)－"+senao_f034.value+"、";
          s_senao_f046.value += "(" + $("#senao_f033_0").attr("text") + ")－" + senao_f034.value+"、";
        }
        if(senao_f035_0.checked){                
            //s_senao_f028.value += "(寫)－"+senao_f036.value+"、";				
          s_senao_f046.value += "(" + $("#senao_f035_0").attr("text") + ")－" + senao_f036.value+"、";
        }
        s_senao_f028.value = left(s_senao_f028.value,s_senao_f028.value.length-1);
      }        
      //台語要求
      if(senao_f037_0.checked){
        if(senao_f038_0.checked){                
            //s_senao_f037.value += "(聽)－"+senao_f039.value+"、";
          s_senao_f046.value += "(" + $("#senao_f038_0").attr("text") + ")－" + senao_f039.value+"、";
        }
        if(senao_f040_0.checked){                
            //s_senao_f037.value += "(說)－"+senao_f041.value+"、";
          s_senao_f046.value += "(" + $("#senao_f040_0").attr("text") + ")－" + senao_f041.value+"、";
        }
        if(senao_f042_0.checked){                
            //s_senao_f037.value += "(讀)－"+senao_f043.value+"、";
          s_senao_f046.value += "(" + $("#senao_f042_0").attr("text") + ")－" + senao_f043.value+"、";
        }
        if(senao_f044_0.checked){                
            //s_senao_f037.value += "(寫)－"+senao_f045.value+"、";				
          s_senao_f046.value += "(" + $("#senao_f044_0").attr("text") + ")－" + senao_f045.value+"、";
        }
        s_senao_f037.value = left(s_senao_f037.value,s_senao_f037.value.length-1);
      }
      //其他語文要求
      if(senao_f046_0.checked){
        s_senao_f046.value = senao_f047.value;
        if(senao_f048_0.checked){                
            //s_senao_f046.value += "(聽)－"+senao_f049.value+"、";
          s_senao_f046.value += "(" + $("#senao_f048_0").attr("text") + ")－" + senao_f049.value+"、";
        }
        if(senao_f050_0.checked){                
            //s_senao_f046.value += "(說)－"+senao_f051.value+"、";
          s_senao_f046.value += "(" + $("#senao_f050_0").attr("text") + ")－" + senao_f051.value+"、";
        }
        if(senao_f052_0.checked){                
            //s_senao_f046.value += "(讀)－"+senao_f053.value+"、";
          s_senao_f046.value += "(" + $("#senao_f052_0").attr("text") + ")－" + senao_f053.value+"、";
        }
        if(senao_f054_0.checked){                
            //s_senao_f046.value += "(寫)－"+senao_f055.value+"、";
          s_senao_f046.value += "(" + $("#senao_f054_0").attr("text") + ")－" + senao_f055.value+"、";
        }
        s_senao_f046.value = left(s_senao_f046.value,s_senao_f046.value.length-1);
      }
      //電腦能力--作業系統
      if(senao_f083_0.checked){
          //s_senao_f083.value += "Windows系列、";
        s_senao_f083.value += $("#senao_f083_0").attr("text") + "、";
      }
      if(senao_f083_1.checked){
        s_senao_f083.value += "WinCE、";
      }
      if(senao_f083_2.checked){
        s_senao_f083.value += "Linux、";
      }
      if(senao_f083_3.checked){
        s_senao_f083.value += "Unix、";
      }
      s_senao_f083.value = left(s_senao_f083.value,s_senao_f083.value.length-1);
      //電腦能力--辦公室應用
      if(senao_f079_0.checked){
        s_senao_f079.value += "Excel、";
      }
      if(senao_f079_1.checked){
        s_senao_f079.value += "Word、";
      }
      if(senao_f079_2.checked){
        s_senao_f079.value += "PowerPoint、";
      }
      if(senao_f079_3.checked){
        s_senao_f079.value += "Outlook、";
      }
      s_senao_f079.value = left(s_senao_f079.value,s_senao_f079.value.length-1);
      //電腦能力--程式設計
      if(senao_f087_0.checked){
        s_senao_f087.value += "ASP、";
      }
      if(senao_f087_1.checked){
        s_senao_f087.value += "C/C++、";
      }
      if(senao_f087_2.checked){
        s_senao_f087.value += "JAVA、";
      }
      if(senao_f087_3.checked){
        s_senao_f087.value += "VB、";
      }
      if(senao_f087_4.checked){
        s_senao_f087.value += "Assembly、";
      }
      s_senao_f087.value = left(s_senao_f087.value,s_senao_f087.value.length-1);
      //電腦能力--資料庫
      if(senao_f092_0.checked){
        s_senao_f092.value += "Oracle、";
      }
      if(senao_f092_1.checked){
        s_senao_f092.value += "MySQL、";
      }
      if(senao_f092_2.checked){
        s_senao_f092.value += "Access、";
      }                
      s_senao_f092.value = left(s_senao_f092.value,s_senao_f092.value.length-1); 
      //電腦能力--繪圖軟體
      if(senao_f095_0.checked){
        s_senao_f095.value += "AutoCAD、";
      }
      if(senao_f095_1.checked){
        s_senao_f095.value += "Pro-E、";
      }
      if(senao_f095_2.checked){
        s_senao_f095.value += "Photoshop、";
      } 
      if(senao_f095_3.checked){
        s_senao_f095.value += "Corel Draw、";
      }                
      s_senao_f095.value = left(s_senao_f095.value,s_senao_f095.value.length-1);           
    }
    //20230719 Calvin 取得承辦人員
    if(form_ou.value == 'senao'){
      hdn_bp_group.value = getHRBPGroupMain();
    }else{
      hdn_bp_group.value = "[" + form_ou.value + "]SN006_03_HR第一關經辦"; //20241014 Neil
    }
    if(hdn_bp_group.value.trim() == ""){
      errstr += querySNSI009(formId,"045",locale,"","","") + "\n";
    }
    //20230719 End
    /*
      * 20230727 Calvin 判斷層級   
      * BU/運籌->事業部/運籌管理部為事業部，其他單位為分部沒有事業部會往上到總經理室，故僅需判斷作業人員(JT046開頭)即可
      * 
      * 20260106 Dillan 越南先沿用此條件
      * W、IW --> 廠長室
      * A、S、P、M --> 越南廠總經理
    */
    if(hdn_senao_f007.value.indexOf("JT046") != -1 || hdn_senao_f007.value.indexOf("JT049") != -1 || hdn_senao_f007.value.indexOf("JT050") != -1){
      hdn_sign_flag.value = "3";//分部
    }
    else {
    hdn_sign_flag.value = "2";//事業部 or 總經理室
    }
  } 
  //人資經辦單位重新指定審核層級的參考單位為申請單位，(預設為填單人單位，如填單人與申請單位隸屬不同單位樹系下層級審批的主管會取錯，故須重新指定)
  if(activityId == "UserTask_10"){
    ajax_ProcessAccessor.setReferOUOIDIntoProcessInstance(processInstOID , form_ou.value, senao_f070.value);    
  }
  if(errstr==""){
    return true;  
  }else{
    alert(errstr);
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
  senao_f005.value = today; //填表日期
  senao_f005.readOnly = true;//填表日期不可修改
  //表單代號
  $('#senao_f001').val(type);
  $('#senao_f001').attr('disabled', 'true');

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
function openDisable(){
  /*
  setDisable(senao_f063,true);
  //setDisable(document.getElementById("senao_f063B"),true);
  setDisable(senao_f076,true);
  setDisable(senao_f060,true);
  setDisable(senao_f016,true);*/
  
   // 申請理由相關欄位
  setDisable(document.getElementById("senao_f063"), true); // 補缺類型下拉選單
  setDisable(document.getElementById("senao_f076"), true); // 內部調動輸入框
  setDisable(document.getElementById("senao_f060"), true); // 遞補離職輸入框
  setDisable(document.getElementById("senao_f016"), true); // 其他輸入框
  
  // 英文相關 (senao_f019 是 checkbox,不需要 disable)
  setDisable(document.getElementById("senao_f020_0"), true); // 英文-聽 checkbox
  setDisable(document.getElementById("senao_f021"), true);   // 英文-聽程度 select
  setDisable(document.getElementById("senao_f022_0"), true); // 英文-說 checkbox
  setDisable(document.getElementById("senao_f023"), true);   // 英文-說程度 select
  setDisable(document.getElementById("senao_f024_0"), true); // 英文-讀 checkbox
  setDisable(document.getElementById("senao_f025"), true);   // 英文-讀程度 select
  setDisable(document.getElementById("senao_f026_0"), true); // 英文-寫 checkbox
  setDisable(document.getElementById("senao_f027"), true);   // 英文-寫程度 select
  
  // 日文相關 (senao_f028 是 checkbox,不需要 disable)
  setDisable(document.getElementById("senao_f029_0"), true); // 日文-聽 checkbox
  setDisable(document.getElementById("senao_f030"), true);   // 日文-聽程度 select
  setDisable(document.getElementById("senao_f031_0"), true); // 日文-說 checkbox
  setDisable(document.getElementById("senao_f032"), true);   // 日文-說程度 select
  setDisable(document.getElementById("senao_f033_0"), true); // 日文-讀 checkbox
  setDisable(document.getElementById("senao_f034"), true);   // 日文-讀程度 select
  setDisable(document.getElementById("senao_f035_0"), true); // 日文-寫 checkbox
  setDisable(document.getElementById("senao_f036"), true);   // 日文-寫程度 select
  
  // 台語相關 (senao_f037 是 checkbox,不需要 disable)
  setDisable(document.getElementById("senao_f038_0"), true); // 台語-聽 checkbox
  setDisable(document.getElementById("senao_f039"), true);   // 台語-聽程度 select
  setDisable(document.getElementById("senao_f040_0"), true); // 台語-說 checkbox
  setDisable(document.getElementById("senao_f041"), true);   // 台語-說程度 select
  setDisable(document.getElementById("senao_f042_0"), true); // 台語-讀 checkbox
  setDisable(document.getElementById("senao_f043"), true);   // 台語-讀程度 select
  setDisable(document.getElementById("senao_f044_0"), true); // 台語-寫 checkbox
  setDisable(document.getElementById("senao_f045"), true);   // 台語-寫程度 select
  
  // 其他語言相關 (senao_f046 是 checkbox,不需要 disable)
  setDisable(document.getElementById("senao_f047"), true);   // 其他語言名稱 input
  setDisable(document.getElementById("senao_f048_0"), true); // 其他-聽 checkbox
  setDisable(document.getElementById("senao_f049"), true);   // 其他-聽程度 select
  setDisable(document.getElementById("senao_f050_0"), true); // 其他-說 checkbox
  setDisable(document.getElementById("senao_f051"), true);   // 其他-說程度 select
  setDisable(document.getElementById("senao_f052_0"), true); // 其他-讀 checkbox
  setDisable(document.getElementById("senao_f053"), true);   // 其他-讀程度 select
  setDisable(document.getElementById("senao_f054_0"), true); // 其他-寫 checkbox
  setDisable(document.getElementById("senao_f055"), true);   // 其他-寫程度 select
}
function setDisable(pValue, pIsDisable) {
  pValue.disabled = pIsDisable;
  //ebe7e7
  //bfbfbf
  pValue.style.backgroundColor = pIsDisable ? '#ebe7e7' : '#ffffff';
}
//計算總共人力
function getHumanAmount(){
	var tmp_010 = parseFloat(0);
  var tmp_062 = parseFloat(0);
  var tmp_078 = parseFloat(0);
  var tmp_011 = parseFloat(0);
  var tmp_009 = parseFloat(0);
  if(senao_f010.value !=""){        
    tmp_010 = parseFloat(document.getElementById("senao_f010").value);
  }
  if(senao_f062.value != ""){
    tmp_062 = parseFloat(document.getElementById("senao_f062").value);
  }
  if(senao_f078.value != ""){
    tmp_078 = parseFloat(document.getElementById("senao_f078").value);
  }
  if(senao_f011.value != ""){
    tmp_011 = parseFloat(document.getElementById("senao_f011").value);
  }
  if(senao_f009.value != ""){
    tmp_009 = parseFloat(document.getElementById("senao_f009").value);
  }   	
  var tmpAll = toFixedNumber(tmp_010+tmp_062+tmp_078+tmp_011,0); //四捨五入 from senao_utils  	
  senao_f009.value = tmpAll;  	
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao_f003_b1').on('click', function () { //需求主管開窗
  // sessionStorage 存入數據
  let tTitle = "人員開窗";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f003','senao_f003_t1','senao_f070','senao_f071');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_f007_b1').on('click', function () { //需求人才職稱開窗
  // sessionStorage 存入數據
  let tTitle = "職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f007_t1','hdn_senao_f007');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_HR_DeptTitle";
  let tAPI = invokeURL + 'BPM_HR_DeptTitle';
  let tParameter = { RESAB002: 'ALL', RESAB001: 'ALL'};
  let tQBEField = {  RESAB002: 'RESAB002',RESAB001: 'RESAB001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_f014_b1').on('click', function () { //學歷要求開窗
  // sessionStorage 存入數據
  let tTitle = "學歷";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f014','hdn_senao_f014');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ezflowDB_Diploma";
  let tAPI = invokeURL + 'BPM_ezflowDB_Diploma';
  let tParameter = { SENAO_FA002: 'ALL', SENAO_FA001: 'ALL'};
  let tQBEField = { SENAO_FA002: 'SENAO_FA002', SENAO_FA001: 'SENAO_FA001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_f101_b1').on('click', function () { //科系要求開窗
  // sessionStorage 存入數據
  let tTitle = "科系(一)";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f101','hdn_senao_f101');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ezflowDB_Faculty";
  let tAPI = invokeURL + 'BPM_ezflowDB_Faculty';
  let tParameter = { SENAO_FB002: 'ALL', SENAO_FB001: 'ALL'};
  let tQBEField = { SENAO_FB002: 'SENAO_FB002', SENAO_FB001: 'SENAO_FB001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_f102_b1').on('click', function () { //科系要求開窗
  // sessionStorage 存入數據
  let tTitle = "科系(二)";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f102','hdn_senao_f102');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ezflowDB_Faculty";
  let tAPI = invokeURL + 'BPM_ezflowDB_Faculty';
  let tParameter = { SENAO_FB002: 'ALL', SENAO_FB001: 'ALL'};
  let tQBEField = { SENAO_FB002: 'SENAO_FB002', SENAO_FB001: 'SENAO_FB001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_f103_b1').on('click', function () { //科系要求開窗
  // sessionStorage 存入數據
  let tTitle = "科系(三)";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_f103','hdn_senao_f103');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ezflowDB_Faculty";
  let tAPI = invokeURL + 'BPM_ezflowDB_Faculty';
  let tParameter = { SENAO_FB002: 'ALL', SENAO_FB001: 'ALL'};
  let tQBEField = { SENAO_FB002: 'SENAO_FB002', SENAO_FB001: 'SENAO_FB001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
//是否為主管
function IsBossno(urid){
	var sqlId = "BPM_SENAO006_01";
	var tParams = [];
  var data = [];    
  if (urid != "") {
    tParams.push(urid);
    data = ajaxGetData(invokeURL + sqlId, {
      p: tParams[0]
    });
    if (data[0].result == undefined) {
      //if (data[0].COUNT > 0) {
      //測試用
      if (data.length > 0) {
        document.getElementById("Label113").style.display = "none"; //不顯示
      }else{
        //alert("拒絕申請!!您沒有權限填寫人力需求申請單!\n即使填寫表單也無法送出\n");
        alert(querySNSI009(formId,"001",locale,"","",""));
        senao_f070.value="";
        senao_f071.value="";
        setDisable(senao_f070,true);
        setDisable(senao_f071,true);
        senao_f003.value= "";
        senao_f003_t1.value="";
        setDisable(senao_f003,true);
        setDisable(senao_f003_t1,true);
        setDisable(document.getElementById("senao_f004_b1"),true);
        setDisable(document.getElementById("senao_f003_b1"),true);
        document.getElementById("Label113").style.display = "block"; //顯示
      }
    }   
  }
}
//20230719 Calvin
function getHRBPGroupMain(){
  var bp_group = "";
  var chkDeptArray = "";
  //向上取得5層單位
  var sqlId = "BPM_SENAO006_02";
  var tParams = [];
  var data = [];  
  hdn_spec_manager.value="";//判斷前需清空，避免重送時不會重新取得主管
  if (senao_f070.value.trim() != "") {
    tParams.push(form_ou.value);
    tParams.push(senao_f070.value);
    data = ajaxGetData(invokeURL + sqlId, {
      form_ou: tParams[0],
      dept_id: tParams[1]
    });
    if (data.length > 0) {			
      chkDeptArray = data[0].FIVELAYER_DEPTID.split(";");
      for(var i=0;i<chkDeptArray.length;i++) {
        if(bp_group.trim() == "" && chkDeptArray[i] != null)bp_group = getHRBPGroup(chkDeptArray[i]);
        if(chkDeptArray[i] != null && hdn_sign_flag.value == "3")chkSpecManager(chkDeptArray[i]);//檢查是作業員且申請單位是否有在指定單位主管設定內
      }  
    }
    //部門代碼無HR對應承辦人員時統一取Others的承辦人員
    if(bp_group.trim() == ""){
      bp_group = getHRBPGroup("Others");
    }
  }
  return bp_group;
}
//取得SNSI003設定的HR承辦人員
function getHRBPGroup(chkDeptid){
	var bp_group_detail = "";  
  var sqlId = "BPM_SENAO006_03";
  var tParams = [];
  var data = [];    
  tParams.push(form_ou.value);
	tParams.push(chkDeptid);
  data = ajaxGetData(invokeURL + sqlId, {
    form_ou: tParams[0],
    dept_id: tParams[1]
  });
  if (data.length > 0) {
		if(chkDeptid == data[0].SNSI003003)bp_group_detail = data[0].GRPNAME;	          
  }  
  return bp_group_detail;
}
//20230719 End
//20230727 Calvin 取得特定單位主管
//檢查有再SNSI003設定檔內
function chkSpecManager(chkspecDeptid){  	
  var sqlId = "BPM_SENAO006_04";
  var tParams = [];
  var data = [];    
  tParams.push(form_ou.value);
	tParams.push(chkspecDeptid);
  data = ajaxGetData(invokeURL + sqlId, {
    form_ou: tParams[0],
    dept_id: tParams[1]
  });
  if (data.length > 0) {
		getSpecManager(chkspecDeptid);	          
  }  
} 
function getSpecManager(pDeptid){  
  var spceManager = ""; 
  if(hdn_spec_manager.value == "")
  {       
    var sqlId = "BPM_FindUnitManager_Org";
    var tParams = [];
    var data = [];    
    tParams.push(pDeptid);
    tParams.push(form_ou.value);
    data = ajaxGetData(invokeURL + sqlId, {
      pDeptid: tParams[0],
      form_ou: tParams[1]
    });
    if (data.length > 0) {
      spceManager = data[0].ID;	          
    }
    if(spceManager !="")hdn_spec_manager.value=spceManager;
  }  	
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/

function senao_f010_onblur(){ 
  if(isNaN(senao_f010.value)) {
    //alert("現有人數請填入數字");
  alert("[" + $("#lbl_senao_f010").html() + "] " + querySNSI009("senao","021",locale,"","",""));
  senao_f010.value="";
  }else{
    getHumanAmount(); //計算總共人力
  }  	
}
function senao_f062_onblur(){ 
  if(isNaN(senao_f062.value)) {
    //alert("已核准待補人數請填入數字");
    alert("[" + $("#lbl_senao_f062").html() + "] " + querySNSI009("senao","021",locale,"","",""));
    senao_f062.value="";
  }else{
    getHumanAmount(); //計算總共人力		
  }  	
}
function senao_f078_onblur(){ 
  if(isNaN(senao_f078.value)) {
    //alert("待報到人數請填入數字");
    alert("[" + $("#lbl_senao_f078").html() + "] " + querySNSI009("senao","021",locale,"","",""));
    senao_f078.value="";
  }else{
    getHumanAmount(); //計算總共人力		
  }  	
}
function senao_f011_onblur(){ 
  if(isNaN(senao_f011.value)) {
    //alert("需求人數請填入數字");
    alert("[" + $("#lbl_senao_f011").html() + "] " + querySNSI009("senao","021",locale,"","",""));
    senao_f011.value="";
  }else{
    getHumanAmount(); //計算總共人力
    senao_f105.value = senao_f011.value;    	
  }  	
}
//申請理由下拉選單(radio改為下拉選單click改change)
function senao_f015_onchange(){
  /*
  if($("#senao_f063").val =='其他'){
    setDisable(document.getElementById("senao_f016"),true);//其他輸入欄位
    senao_f016.value="";
  }
  if($("#senao_f015").val =='Fill'){//補缺
    //alert("請選擇補缺[內部調動]人員 或 [遞補離職人員]並檢附職位說明書 !!");
    alert(querySNSI009(formId,"002",locale,"","",""));
    setDisable(document.getElementById("senao_f063"),false);//開放下拉選單
    setDisable(senao_f076,false);
    setDisable(senao_f060,false);
  }else{
  //alert("增設新職務時，請檢附職位說明書 !!");
    alert(querySNSI009(formId,"003",locale,"","",""));
    setDisable(document.getElementById("senao_f063"), true); 
    senao_f063_0.checked=false;
    senao_f076.value="";
    senao_f060.value="";
    setDisable(senao_f076,true);
    setDisable(senao_f060,true);
  }*/
 //清空欄位
    senao_f016.value="";
    senao_f076.value="";
    senao_f060.value="";
  if(senao_f015.value =='其他'){
    //隱藏欄位
    document.getElementById("senao_f076").classList.add('d-none');
    document.getElementById("senao_f060").classList.add('d-none');
    //隱藏下拉選單
    document.getElementById("senao_f063").classList.add('d-none');
    //顯示&開放其他輸入欄位
    document.getElementById("senao_f016").classList.remove('d-none');
    setDisable(document.getElementById("senao_f016"),false);
  }
  else if(senao_f015.value=='Fill'){//補缺
    //alert("請選擇補缺[內部調動]人員 或 [遞補離職人員]並檢附職位說明書 !!");
    alert(querySNSI009(formId,"002",locale,"","",""));
    //顯示&開放下拉選單
    document.getElementById("senao_f063").classList.remove('d-none');
    setDisable(document.getElementById("senao_f063"),false);
    // 隱藏其他輸入欄位
    document.getElementById("senao_f016").classList.add('d-none');
  } else if(senao_f015.value =='New'){//新職位
  //alert("增設新職務時，請檢附職位說明書 !!");
    alert(querySNSI009(formId,"003",locale,"","",""));
    setDisable(document.getElementById("senao_f063"), true); //禁止下拉選單
    // 隱藏欄位
    document.getElementById("senao_f076").classList.add('d-none');
    document.getElementById("senao_f060").classList.add('d-none');
    //隱藏下拉選單
    document.getElementById("senao_f063").classList.add('d-none');
    // 隱藏其他輸入欄位
    document.getElementById("senao_f016").classList.add('d-none');
  }
}
/*
function senao_f015C_onclick(){
  	setDisable(document.getElementById("senao_f016"),false);
	  senao_f015_0.checked=false;
  	senao_f015_1.checked=false;
  	setDisable(document.getElementById("senao_f063"),true);
  	setDisable(document.getElementById("senao_f063B"),true);
    senao_f063_0.checked=false;
    senao_f063B_0.checked=false;
    senao_f076.value="";
    senao_f060.value="";
  	setDisable(senao_f076,true);
  	setDisable(senao_f060,true);
}*/
//增補方式欄位
function senao_f106_onclick(){
	if(senao_f106_2.checked){
		//alert("選擇 [使用付費之中高階人才招募管道] 時，請檢附職位說明需求 !!");
		alert(querySNSI009(formId,"004",locale,"","",""));
	}
}
//申請理由補缺下拉選單(radio改為下拉選單click改change)
function senao_f063_onchange(){
  /*
  senao_f063B_0.checked=false;
  senao_f060.value="";*/
  if(senao_f063.value=='內部調動'){
    // 顯示&開放欄位
    document.getElementById("senao_f076").classList.remove('d-none');
    setDisable(document.getElementById("senao_f076"),false);
    // 隱藏&鎖定&清空欄位
    document.getElementById("senao_f060").classList.add('d-none');
    setDisable(document.getElementById("senao_f060"), true); 
    senao_f060.value="";
  }else{
    // 顯示&開放欄位
    document.getElementById("senao_f060").classList.remove('d-none');
    setDisable(document.getElementById("senao_f060"),false);
    // 隱藏&鎖定&清空欄位
    document.getElementById("senao_f076").classList.add('d-none');
    setDisable(document.getElementById("senao_f076"), true); 
    senao_f076.value="";
  }
}
/*
function senao_f063B_onclick(){
  senao_f063_0.checked=false;
  senao_f076.value="";
}*/
//語文 英文勾選onclick
function senao_f019_onclick(){ 
  if(senao_f019_0.checked){
    setDisable(document.getElementById("senao_f020_0"),false);
    setDisable(document.getElementById("senao_f022_0"),false);
    setDisable(document.getElementById("senao_f024_0"),false);
    setDisable(document.getElementById("senao_f026_0"),false);
  }else{
    senao_f020_0.checked=false;
    setDisable(document.getElementById("senao_f020_0"),true);
    setDisable(document.getElementById("senao_f021"),true);
    senao_f021.value="Blank";
    senao_f022_0.checked=false;
    setDisable(document.getElementById("senao_f022_0"),true);
    setDisable(document.getElementById("senao_f023"),true);
    senao_f023.value="Blank";
    senao_f024_0.checked=false;
    setDisable(document.getElementById("senao_f024_0"),true);
    setDisable(document.getElementById("senao_f025"),true);
    senao_f025.value="Blank";
    senao_f026_0.checked=false;
    setDisable(document.getElementById("senao_f026_0"),true);
    setDisable(document.getElementById("senao_f027"),true);
    senao_f027.value="Blank";
  }
}
//英文勾選 聽
function senao_f020_onclick(){
  if(senao_f020_0.checked){
  	setDisable(document.getElementById("senao_f021"),false);
  }else{
    setDisable(document.getElementById("senao_f021"),true);
    senao_f021.value="Blank";
  }
}
//英文勾選 說
function senao_f022_onclick(){
  if(senao_f022_0.checked){
  	setDisable(document.getElementById("senao_f023"),false);
  }else{
    setDisable(document.getElementById("senao_f023"),true);
    senao_f023.value="Blank";
  }
}
//英文勾選 讀
function senao_f024_onclick(){
  if(senao_f024_0.checked){
  	setDisable(document.getElementById("senao_f025"),false);
  }else{
    setDisable(document.getElementById("senao_f025"),true);
    senao_f025.value="Blank";
  }
}
//英文勾選 寫
function senao_f026_onclick(){
  if(senao_f026_0.checked){
  	setDisable(document.getElementById("senao_f027"),false);
  }else{
    setDisable(document.getElementById("senao_f027"),true);
    senao_f027.value="Blank";
  }
}
//語文勾選 日文
function senao_f028_onclick(){
  if(senao_f028_0.checked){
    setDisable(document.getElementById("senao_f029_0"),false);
    setDisable(document.getElementById("senao_f031_0"),false);
    setDisable(document.getElementById("senao_f033_0"),false);
    setDisable(document.getElementById("senao_f035_0"),false);
  }else{
    senao_f029_0.checked=false;
  	setDisable(document.getElementById("senao_f029_0"),true);
    setDisable(document.getElementById("senao_f030"),true);
    senao_f030.value="Blank";
    
    senao_f031_0.checked=false;
  	setDisable(document.getElementById("senao_f031_0"),true);
    setDisable(document.getElementById("senao_f032"),true);
    senao_f032.value="Blank";
    
    senao_f033_0.checked=false;    
  	setDisable(document.getElementById("senao_f033_0"),true);
    setDisable(document.getElementById("senao_f034"),true);
    senao_f034.value="Blank";
    
    senao_f035_0.checked=false;
  	setDisable(document.getElementById("senao_f035_0"),true);
    setDisable(document.getElementById("senao_f036"),true);
    senao_f036.value="Blank";
  }
}
//日文勾選 聽
function senao_f029_onclick(){
  if(senao_f029_0.checked){
  	setDisable(document.getElementById("senao_f030"),false);
  }else{
    setDisable(document.getElementById("senao_f030"),true);
    senao_f030.value="Blank";
  }
}
//日文勾選 說
function senao_f031_onclick(){
  if(senao_f031_0.checked){
  	setDisable(document.getElementById("senao_f032"),false);
  }else{
    setDisable(document.getElementById("senao_f032"),true);
    senao_f032.value="Blank";
  }
}
//日文勾選 讀
function senao_f033_onclick(){
  if(senao_f033_0.checked){
  	setDisable(document.getElementById("senao_f034"),false);
  }else{
    setDisable(document.getElementById("senao_f034"),true);
    senao_f034.value="Blank";
  }
}
//日文勾選 寫
function senao_f035_onclick(){
  if(senao_f035_0.checked){
  	setDisable(document.getElementById("senao_f036"),false);
  }else{
    setDisable(document.getElementById("senao_f036"),true);
    senao_f036.value="Blank";
  }
}
//語言要求 台語
function senao_f037_onclick(){
  if(senao_f037_0.checked){
    setDisable(document.getElementById("senao_f038_0"),false);
    setDisable(document.getElementById("senao_f040_0"),false);
    setDisable(document.getElementById("senao_f042_0"),false);
    setDisable(document.getElementById("senao_f044_0"),false);
  }else{
    senao_f038_0.checked=false;
  	setDisable(document.getElementById("senao_f038_0"),true);
    setDisable(document.getElementById("senao_f039"),true);
    senao_f039.value="Blank";
    
    senao_f040_0.checked=false;
  	setDisable(document.getElementById("senao_f040_0"),true);
    setDisable(document.getElementById("senao_f041"),true);
    senao_f041.value="Blank";
    
    senao_f042_0.checked=false;
  	setDisable(document.getElementById("senao_f042_0"),true);
    setDisable(document.getElementById("senao_f043"),true);
    senao_f043.value="Blank";
    
    senao_f044_0.checked=false;
  	setDisable(document.getElementById("senao_f044_0"),true);
    setDisable(document.getElementById("senao_f045"),true);
    senao_f045.value="Blank";
  }
}
//台語勾選 聽
function senao_f038_onclick(){
  if(senao_f038_0.checked){
  	setDisable(document.getElementById("senao_f039"),false);
  }else{
    setDisable(document.getElementById("senao_f039"),true);
    senao_f039.value="Blank";
  }
}
//台語勾選 說
function senao_f040_onclick(){
  if(senao_f040_0.checked){
  	setDisable(document.getElementById("senao_f041"),false);
  }else{
    setDisable(document.getElementById("senao_f041"),true);
    senao_f041.value="Blank";
  }
}
//台語勾選 讀
function senao_f042_onclick(){
  if(senao_f042_0.checked){
  	setDisable(document.getElementById("senao_f043"),false);
  }else{
    setDisable(document.getElementById("senao_f043"),true);
    senao_f043.value="Blank";
  }
}
//台語勾選 寫
function senao_f044_onclick(){
  if(senao_f044_0.checked){
  	setDisable(document.getElementById("senao_f045"),false);
  }else{
    setDisable(document.getElementById("senao_f045"),true);
    senao_f045.value="Blank";
  }
}
//語文勾選 其他
function senao_f046_onclick(){
  if(senao_f046_0.checked){
    setDisable(document.getElementById("senao_f047"),false);
    setDisable(document.getElementById("senao_f048_0"),false);
    setDisable(document.getElementById("senao_f050_0"),false);
    setDisable(document.getElementById("senao_f052_0"),false);
    setDisable(document.getElementById("senao_f054_0"),false);
  }else{
    senao_f047.value="";
    setDisable(document.getElementById("senao_f047"),true);
    senao_f048_0.checked=false;
  	setDisable(document.getElementById("senao_f048_0"),true);
    setDisable(document.getElementById("senao_f049"),true);
    senao_f049.value="Blank";
    
    senao_f050_0.checked=false;
  	setDisable(document.getElementById("senao_f050_0"),true);
    setDisable(document.getElementById("senao_f051"),true);
    senao_f051.value="Blank";
    
    senao_f052_0.checked=false;
  	setDisable(document.getElementById("senao_f052_0"),true);
    setDisable(document.getElementById("senao_f053"),true);
    senao_f053.value="Blank";
    
    senao_f054_0.checked=false;
  	setDisable(document.getElementById("senao_f054_0"),true);
    setDisable(document.getElementById("senao_f055"),true);
    senao_f055.value="Blank";
  }
}
//語文其他勾選 聽
function senao_f048_onclick(){
  if(senao_f048_0.checked){
  	setDisable(document.getElementById("senao_f049"),false);
  }else{
    setDisable(document.getElementById("senao_f049"),true);
    senao_f049.value="Blank";
  }
}
//語文其他勾選 說
function senao_f050_onclick(){
  if(senao_f050_0.checked){
  	setDisable(document.getElementById("senao_f051"),false);
  }else{
    setDisable(document.getElementById("senao_f051"),true);
    senao_f051.value="Blank";
  }
}
//語文其他勾選 讀
function senao_f052_onclick(){
  if(senao_f052_0.checked){
  	setDisable(document.getElementById("senao_f053"),false);
  }else{
    setDisable(document.getElementById("senao_f053"),true);
    senao_f053.value="Blank";
  }
}
//語文其他勾選 寫
function senao_f054_onclick(){
  if(senao_f054_0.checked){
  	setDisable(document.getElementById("senao_f055"),false);
  }else{
    setDisable(document.getElementById("senao_f055"),true);
    senao_f055.value="Blank";
  }
}

function senao_f067_onchange(){
	//alert("需求天數是指「核准日」起 至指定天數找到合適人!!");
	alert(querySNSI009(formId,"005",locale,"","",""));
}
/*---------------------欄位onChange、onClick Function Start--------------*/