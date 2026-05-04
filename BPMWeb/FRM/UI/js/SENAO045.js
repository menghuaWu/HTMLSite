var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var btn_Print = document.getElementById("btn_Print");//列印按鈕
var btn_SENAO054 = document.getElementById("btn_SENAO054");//復職申請單資料按鈕
var btn_SENAO006 = document.getElementById("btn_SENAO006");//人力需求單資料按鈕
var form_ou = document.getElementById("form_ou");//公司別
var form_org = document.getElementById("form_org");//廠區
var senao045002 = document.getElementById("senao045002");//表單號碼
var senao045004 = document.getElementById("senao045004");//所屬部門代號
var senao045005 = document.getElementById("senao045005");//所屬部門名稱
var senao045003 = document.getElementById("senao045003");//申請人姓名
var senao045006 = document.getElementById("senao045006");//名片職稱代號
var senao045007 = document.getElementById("senao045007");//名片職稱
var senao045008 = document.getElementById("senao045008");//申請日期
var senao045009 = document.getElementById("senao045009");//報到編號
var senao045010_txt = document.getElementById("senao045010_txt");//報到日期
var senao045011 = document.getElementById("senao045011");//部門主管工號
var senao045011_b1 = document.getElementById("senao045011_b1");//部門主管工號按鈕
var senao045012 = document.getElementById("senao045012");//部門主管姓名
var senao045053 = document.getElementById("senao045053");//報到地點
var senao045013 = document.getElementById("senao045013");//車位申請
var senao045013_0 = document.getElementById("senao045013_0");//車位申請(有)
var senao045013_1 = document.getElementById("senao045013_1");//車位申請(無)
var senao045051 = document.getElementById("senao045051");//人力需求單/復職申請單號
var senao045051_b1 = document.getElementById("senao045051_b1");//人力需求單/復職申請單號按鈕
var senao045014 = document.getElementById("senao045014");//帳號(一)
var senao045015 = document.getElementById("senao045015");//帳號(二)
var senao045016 = document.getElementById("senao045016");//帳號(三)
var senao045017 = document.getElementById("senao045017");//帳號
var senao045017_0 = document.getElementById("senao045017_0");//帳號
var senao045017_1 = document.getElementById("senao045017_1");//帳號
var senao045017_2 = document.getElementById("senao045017_2");//帳號
var senao045052 = document.getElementById("senao045052");//備註
var senao045066 = document.getElementById("senao045066");//新人導師ID
var senao045067 = document.getElementById("senao045067");//新人導師姓名
var SN045_S03 = document.getElementById("SN045_S03");//預設密碼
var senao045057 = document.getElementById("senao045057");//帳號信箱需不需要
var senao045057_0 = document.getElementById("senao045057_0");//帳號信箱需要
var senao045057_1 = document.getElementById("senao045057_1");//帳號信箱不需要
var senao045055_0 = document.getElementById("senao045055_0");//AD帳號
var senao045056_0 = document.getElementById("senao045056_0");//E-mail信箱
var senao045062_0 = document.getElementById("senao045062_0");//影印機掃描設定
var senao045020_0 = document.getElementById("senao045020_0");//硬體PC
var senao045020_1 = document.getElementById("senao045020_1");//硬體NB
var senao045020_2 = document.getElementById("senao045020_2");//特規
var senao045063 = document.getElementById("senao045063");  //硬體PC規格
var senao045064 = document.getElementById("senao045064");  //硬體NB規格
var ddl_Role = document.getElementById("ddl_Role");  //員工類型
var ddl_Reason = document.getElementById("ddl_Reason");  //特殊規格需求原因
var txt_Reason = document.getElementById("txt_Reason");//其他說明
//var senao045020_3 = document.getElementById("senao045020_3");//硬體不需要  20210928 Ann Mark
var senao045065 = document.getElementById("senao045065");//特規說明
//var senao045060_0 = document.getElementById("senao045060_0");//硬體計算機 20210928 Ann Mark
//var senao045060_1 = document.getElementById("senao045060_1");//硬體計算機不需要 20210928 Ann Mark
var senao045068_0 = document.getElementById("senao045068_0");//硬體-無須採購 20210928 Ann 增加選項-採購新品否
var senao045068_1 = document.getElementById("senao045068_1");//硬體-採購新品 20210928 Ann 增加選項-採購新品否
var senao045058_0 = document.getElementById("senao045058_0");//軟體需要Y
var senao045058_1 = document.getElementById("senao045058_1");//軟體不需要N
var senao045059 = document.getElementById("senao045059");//OS
var senao045021 = document.getElementById("senao045021");//Office
var senao045022_0 = document.getElementById("senao045022_0");//軟體-其他需求
var senao045023 = document.getElementById("senao045023");//軟體-其他需求說明
var senao045026_0 = document.getElementById("senao045026_0");//電話-新增
var senao045026_1 = document.getElementById("senao045026_1");//電話-不需新增
var senao045024_0 = document.getElementById("senao045024_0");//電話-分機
var senao045025_0 = document.getElementById("senao045025_0");//電話-專線
var senao045042_0 = document.getElementById("senao045042_0");//電話-其他
var senao045043 = document.getElementById("senao045043");//電話-其他說明
var senao045031_0 = document.getElementById("senao045031_0");//辦公設備-新增
var senao045031_1 = document.getElementById("senao045031_1");//辦公設備-不需新增
var senao045027_0 = document.getElementById("senao045027_0");//辦公設備-座位
var senao045028_0 = document.getElementById("senao045028_0");//辦公設備-辦公桌
var senao045029_0 = document.getElementById("senao045029_0");//辦公設備-辦公椅
var senao045030_0 = document.getElementById("senao045030_0");//辦公設備-櫃子、側桌
var senao045061_0 = document.getElementById("senao045061_0");//辦公設備-垃圾桶
var senao045041 = document.getElementById("senao045041");//辦公設備-其他說明
var senao045034_0 = document.getElementById("senao045034_0");//車位-有
var senao045034_1 = document.getElementById("senao045034_1");//車位-無
var senao045036 = document.getElementById("senao045036");//新人員工工號
var senao045039 = document.getElementById("senao045039");//新人報到日期
var senao045035_0 = document.getElementById("senao045035_0");//新人報到-報到
var senao045035_1 = document.getElementById("senao045035_1");//新人報到-未報到
var senao045035_2 = document.getElementById("senao045035_2");//新人報到-延後報到
var senao045035_3 = document.getElementById("senao045035_3");//新人報到-提早報到
var senao045035_4 = document.getElementById("senao045035_4");//新人報到-試用期內離職
var senao045039_txt = document.getElementById("senao045039_txt"); //新人報到報到日期
var cb_IsRD = document.getElementById("cb_IsRD"); //研發單位
var cb_IsRD_0 = document.getElementById("cb_IsRD_0"); //研發單位

var senao045040_0 = document.getElementById("senao045040_0");//辦公設備-其他
var senao045041 = document.getElementById("senao045041");//辦公設備-其他說明
var senao045051_1 = document.getElementById("senao045051_1");
var senao045039_btn = document.getElementById("senao045039_btn");
var txt_Subject_Remark = document.getElementById("txt_Subject_Remark");
var hdn_Subject = document.getElementById("hdn_Subject");
var hdn_gademand = document.getElementById("hdn_gademand");
var hdn_0020Sign = document.getElementById("hdn_0020Sign"); 
var workitemownerid = "";
var hdn_ApproveResult002 = document.getElementById("hdn_ApproveResult002"); //人力需求單狀態
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title"); //20250825 Rebecca 新增hdn_formnumber_title欄位來建立表單單號
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
  
  /*activityId = "0028";
  ProcessPackageId='SENAO045';//vivian 抓不到單號暫時定義
  formId='SENAO045';//vivian 抓不到單號暫時定義
  //vivian 暫時定義 end*/
  systemDateTime = showCurrentDate(); //今天日期
  formCreate();
  formOpen();
  frmEvent();
});
function formCreate(){
	return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;

  document.getElementById("lbl_psn").innerText=SERIALNUMBER;
	$("[name^='lbl_']:not([name$='psn'],[name$='002']),[name^='Label']:not([name='Label1'],[name='Label39'],[name='Label7'],[name='Label34'],[name='Label35'],[name='Label36'],[name='lbl_senao045036'])").each(function(){
		var originalBGColor = $(this).css("background-color"); 
		if(originalBGColor==''||originalBGColor=='#ffffff'){
		  $(this).css("background-color", formLabelBGColor); 
		}
	});
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);

  //$('#SerialNumber').attr('disabled', 'true');//單號
  applicant = userId;//發起流程時參數 申請人ID
  applicantDept = Department;//發起流程時參數 申請人部門ID

  $('#senao045002').attr('disabled', 'true');//單號
  $('#lbl_psn').attr('disabled', 'true');//流程序號
  //設定工作地點下拉選單
  setSelectDefalut("senao045053", apiInvoke + "BPM_OFFICE_INFO_LIST", {COMPANY: $('#form_ou').val()}, "");
  hdn_formnumber_title.value = form_ou.value.toUpperCase()+"045"; //20250825 Rebecca 新增hdn_formnumber_title欄位來建立表單單號
  form_org.style.backgroundColor = '#f7d9e4';
	form_ou.disabled=true;
	form_ou.style.backgroundColor = '#f7d9e4';
  
 /* senao045053.options[3].disabled = true;
	senao045053.options[4].disabled = true;*/

  if(formInstOID!=""){
	document.getElementById("SN045_S03").innerHTML="1. Default: <font color=red>"+getSNSI003("SENAO045","SN045_S03")+"</font>";
	btn_Print.disabled=false;
  }
  if(senao045051.value.trim()!=""){
	senao045051_b1.disabled=false;
  }

  //senao045053_prepare();	//報到地點
	ddl_Role_prepare();     //20250409 change up
  senao045063_prepare();  //20250409 change down
	senao045064_prepare();
	ddl_Reason_prepare();
	senao045059_prepare();
	senao045021_prepare();

  if (activityId == "0001") { //填表人
    $("input[type=text][name=senao045004],[name=senao045003],[name=senao045006],[name=senao045009],[name=senao045010_txt],[name=senao045011],[name=senao045014],[name=senao045015],[name=senao045016],[name=senao045053]").each(function(){
			$(this).css("background-color", "#fbf1c0");
		});
		$("label[for^=senao045013]").css({backgroundColor: "#fbf1c0"});
		if (formInstOID == ""){	//複製表單時，下方欄位Reset
			senao045008.value = systemDateTime;
			if (IsInvaildDept(senao045004.value)){	//判斷是否為失效部門
				senao045004.value = "";	//清空部門
				senao045005.value = "";	//清空部門
			}
		}
	}
  if(activityId=="0010-0010"){ //部門主管
		senao045066.style.backgroundColor="#fbf1c0";
		senao045068.style.backgroundColor = "#fbf1c0";
		
		//20210928 Ann Add-Start
		senao045068_onclick();
		//20210928 Ann Add-End
	}

  if(activityId=="0020"){ //總務會辦
		workitemownerid = getUserIDByOID(workItemOwnerOID);
		if(document.getElementById("hdnMethod")!=null){
			if(document.getElementById("hdnMethod").value=="handleForm"){
				if(getGrpUsrIDStr("SN045_01").indexOf(workitemownerid)>=0){ //0020-0010
          senao045020_0.disabled=false;//硬體-PC
          senao045063.disabled=false;
          senao045020_1.disabled=false;//硬體-NB
          senao045020_2.disabled=false;//硬體-特規
          //senao045060_0.disabled=false;
          //senao045060_1.disabled=false;
          senao045058.disabled=false;//軟體-需要
          //senao045059.disabled=false;//OS  20250729 不能讓使用者選擇[OS作業系統]
          //senao045021.disabled=false;//Office版本  20250729 不能讓使用者選擇[Office版本]
          senao045022_0.disabled=false;//其他需求
          alert(querySNSI009(formId, "008", locale,"","",""));					
          // alert("請會辦處理軟硬體需求(電腦作業系統版本也需填寫至物品請購單上的備註說明)");					
				}

				if(getGrpUsrIDStr("SN045_02").indexOf(workitemownerid)>=0){  //0020-0020
					senao045031.disabled=false;
					alert(querySNSI009(formId, "009", locale,"","",""));	
					// alert("請會辦處理辦公設備需求");
				}

				if(getGrpUsrIDStr("SN045_03").indexOf(workitemownerid)>=0){  //0020-0030
					senao045034.disabled=false;
					alert(querySNSI009(formId, "010", locale,"","",""));
					// alert("請會辦處理車位需求");
				}

				if(getGrpUsrIDStr("SN045_08").indexOf(workitemownerid)>=0){  //0020-0040
					senao045026.disabled=false;
					alert(querySNSI009(formId, "011", locale,"","",""));
					// alert("請會辦處理電話需求");
				}
			}
		}
	} // end of 0020

  if(activityId=="UserTask_143"){ //軟硬體 0020-0010
    senao045020_0.disabled=false;//硬體-PC
    senao045063.disabled=false;
    senao045020_1.disabled=false;//硬體-NB
    senao045020_2.disabled=false;//硬體-特規
    senao045058.disabled=false;//軟體-需要
    senao045022_0.disabled=false;//其他需求
    alert(querySNSI009(formId, "008", locale,"","",""));					
    // alert("請會辦處理軟硬體需求(電腦作業系統版本也需填寫至物品請購單上的備註說明)");					
  }

  if(activityId=="UserTask_151"){ //辦公設備 0020-0020
    senao045031.disabled=false;
    alert(querySNSI009(formId, "009", locale,"","",""));	
    // alert("請會辦處理辦公設備需求");
  }

  if(activityId=="UserTask_158"){ //車位申請 0020-0030
    senao045034.disabled=false;
    alert(querySNSI009(formId, "010", locale,"","",""));
    // alert("請會辦處理車位需求");
  }

  if(activityId=="UserTask_165"){ //話機處理 0020-0040
    senao045026.disabled=false;
    alert(querySNSI009(formId, "011", locale,"","",""));
    // alert("請會辦處理電話需求");
  }

	if(activityId=="0028" || activityId=="UserTask_170"){ //HR新人報到處理人員
		document.getElementById("senao045039").disabled=true;

		if(document.getElementById("hdnMethod")!=null){
			if(document.getElementById("hdnMethod").value=="handleForm"){
				alert(querySNSI009(formId, "012", locale,"","",""));
				// alert("請建立新人基本資料");
			}
		}

		senao045035.disabled=false;
		cb_IsRD_0.disabled=false;
	}

	if(activityId=="0030" || activityId=="UserTask_179"){ //HR考勤人員
		if(document.getElementById("hdnMethod")!=null){
			if(document.getElementById("hdnMethod").value=="handleForm"){
				alert(querySNSI009(formId, "013", locale,"","",""));
				// alert("考勤人員請建立HR Portal帳號, 並將薪資帳號轉入ORACLE");
			}
		}
	}

	if(activityId=="0040-0010" || activityId=="UserTask_190"){ //MIS系統管理員
		senao045017_0.disabled = false;
		senao045017_1.disabled = false;
		senao045017_2.disabled = false;
	}
  return true;
}
function frmEvent() { 
  $('#senao045004').on('change', function () { //所屬部門
    senao045004_onchange();
  });
  $('#senao045009_b1').on('click', function () { //報到編號
    senao045009_b1_onclick();
  });
  $('#senao045051_b1').on('click', function () { //復職申請單/人力需求單
    senao045051_b1_onclick();
  });
  $('#senao045014').on('change', function () { ////帳號(ID)
    senao045014_onchange();
  });
  $('#senao045015').on('change', function () { //帳號(ID) 第二組
    senao045015_onchange();
  });
  $('#senao045016').on('change', function () {//帳號(ID) 第三組
    senao045016_onchange();
  });
  $('input[name="senao045020"]').on('click', function () { //電腦 radio
    senao045020_onclick();
  });
  $('#ddl_Role').on('change', function () { //員工類型
    ddl_Role_onchange();
  });
  $('#ddl_Reason').on('change', function () {  //特殊規格需求原因 onchange
    ddl_Reason_onchange();
  });
  $('#senao045057').on('change', function () {  //帳號信箱 (radio改為下拉選單click改change)
    senao045057_onclick();
  });
  $('#senao045058').on('change', function () {  //軟體(radio改為下拉選單click改change)
    senao045058_onclick();
  });
  $('input[name="senao045022"]').on('click', function () {  //軟體 其它需求 checkbox
    senao045022_onclick();
  });
  $('#senao045026').on('change', function () {  //電話 (radio改為下拉選單click改change)
    senao045026_onclick();
  });
  $('input[name="senao045042"]').on('change', function () {  //電話 其他 checkbox
    senao045042_onclick();
  });
  $('#senao045031').on('change', function () {  //辦公設備(radio改為下拉選單click改change)
    senao045031_onclick();
  });
  $('input[name="senao045040"]').on('change', function () {  //辦公設備 其他 checkbox
    senao045040_onclick();
  });
  $('#senao045035').on('change', function () {  //新人報到(radio改為下拉選單click改change)
    senao045035_onclick();
  });
  $('#btn_Print').on('click', function () {  //列印表單按鈕
    btn_Print_onclick();
  });
  $('input[name="senao045017"]').on('change', function () {  //帳號(ID) RADIO
    senao045017_onclick();
  });
  $('#senao045068').on('change', function () {  //電腦 (radio改為下拉選單click改change)
    senao045068_onclick();
  });
}
function formSave(){
  var errorMsg="";
  //FRM_COL_CHECK senao045003 姓名(中文) senao045008 申請日期 senao045009 報到編號 senao045010 報到日 senao045053 報到地點 senao045013 車位申請
	if(activityId=="0001"){ //填單人
		if(senao045004.value=="" || senao045005.value==""){
			errorMsg += "[" + $("#lbl_senao045004").html() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
			// errorMsg += "「所屬部門」不得空白!\n";
		}

		if(senao045006.value=="" || senao045007.value==""){
			errorMsg += "[" + $("#lbl_senao045006").html() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
			// errorMsg += "「職稱」不得空白!\n";
		}

		if(senao045011.value=="" || senao045012.value==""){
			errorMsg += "[" + $("#lbl_senao045011").html() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
			// errorMsg += "「需求單位之部門主管」不得空白!\n";
		}

		if(senao045014.value.trim()==""){
			errorMsg += querySNSI009(formId, "001", locale,"","","") + "\n";			
			// errorMsg += "「E-Mail帳號(ID)---第一優先」不得空白! 如為外包人員請填寫user!\n";
		}else{
			if(senao045014.value == senao045015.value){
				errorMsg += querySNSI009(formId, "014", locale,"","","") + "\n";			
				// errorMsg += "「E-Mail帳號(ID)---第一優先」不得與「E-Mail帳號(ID)---第二優先」一樣!\n";
			}

			if(senao045014.value==senao045016.value){
				errorMsg += querySNSI009(formId, "015", locale,"","","") + "\n";
				// errorMsg += "「E-Mail帳號(ID)---第一優先」不得與「E-Mail帳號(ID)---第三優先」一樣!\n";
			}
		}

		if(senao045015.value.trim()==""){
			errorMsg += querySNSI009(formId, "002", locale,"","","") + "\n";
			// errorMsg += "「E-Mail帳號(ID)---第二優先」不得空白! 如為外包人員請填寫user!\n";
		}else{
			if(senao045015.value==senao045016.value){
				errorMsg += querySNSI009(formId, "016", locale,"","","") + "\n";
				// errorMsg += "「E-Mail帳號(ID)---第二優先」不得與「E-Mail帳號(ID)---第三優先」一樣!\n";
			}
		}

		if(senao045016.value.trim()==""){
			errorMsg += querySNSI009(formId, "003", locale,"","","") + "\n";
			// errorMsg += "「E-Mail帳號(ID)---第三優先」不得空白! 如為外包人員請填寫user!\n";
		}

		if(errorMsg == "" && formInstOID == ""){			
			hdn_Subject.value = $("#Label1").html() + senao045010.value + "--" + senao045003.value + "[" + senao045007.value + "]--"+senao045005.value + "("+senao045053.value+")" + txt_Subject_Remark.value;
		}

		if(senao045013.value =="0"){
			senao045034.value =="0";
		}else if(senao045013.value =="1"){
			senao045034.value =="1";
		}
	}//activityId="0001"

  if(activityId=="0020" || activityId=="UserTask_143" || activityId=="UserTask_151" || activityId=="UserTask_158" || activityId=="UserTask_165"){ //總務會辦
		if(getGrpUsrIDStr("SN045_01").indexOf(workitemownerid)>=0 || activityId=='UserTask_143'){ //0020-0010
			if(senao045068.value == "1" && senao045020_0.checked==false && senao045020_1.checked==false && senao045020_2.checked==false){
				errorMsg += "[" + $("#lbl_senao045020").html().trim() + "---" +  $('label[for="senao045020_0"]').text().trim() + "," +  $('label[for="senao045020_1"]').text().trim() + "," +  $('label[for="senao045020_2"]').text().trim()+ "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";
				// errorMsg += "請點選「硬體---PC/NB/特規」【單選】!\n";
			}

			if(senao045058.value == ""){
				errorMsg += "[" + $("#lbl_senao045058").html().trim() + "---" +  $('#senao045058 option[value="0"]').text().trim()  + "," + $('#senao045058 option[value="1"]').text().trim()  + "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";
				// errorMsg += "請點選「是否需要請購軟體」【單選】!\n";
			}

			if(senao045022_0.checked==true){
				if(senao045023.value.trim()==""){
					errorMsg += "[" + $("#lbl_senao045058").html().trim() + "---" + $('label[for="senao045022_0"]').text().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
					// errorMsg += "「軟體---其他需求說明」不得空白!\n";
				}
			}

			//20180208 Milla 判斷硬體是否有選規格
			if(senao045020_0.checked==true){
				if(senao045063.selectedIndex == 0){
					errorMsg += "[" +$("#lbl_senao045020").html().trim() + "---" + $('label[for="senao045020_0"]').text().trim() + "]" + querySNSI009(form_ou.value, "003", locale,"","","") + "\n";
					// errorMsg += "請下拉點選「硬體---PC的規格」!\n";
				}
			}

			if(senao045020_1.checked == true){
				if(senao045064.selectedIndex == 0){
					errorMsg += "[" + $("#lbl_senao045020").html().trim() + "---" + $('label[for="senao045020_1"]').text().trim() + "]" + querySNSI009(form_ou.value, "003", locale,"","","") + "\n";
					// errorMsg += "請下拉點選「硬體---NB的規格」!\n";
				}
				
				if (ddl_Role.value == "4" && ddl_Reason.selectedIndex == 0){				
					errorMsg += "[" + $("#lbl_ddl_Role").html().trim() + "]-[" + ddl_Role.options[ddl_Role.selectedIndex].text + "]," +"[" + $$("#lbl_ddl_Reason").html().trim() + "]" + querySNSI009(form_ou.value, "003", locale,"","","") + "\n";
				}
				
				if (ddl_Reason.value == "99" && txt_Reason.value == ""){				
					errorMsg += "[" + $("#lbl_ddl_Reason").html().trim() + "]-[" + ddl_Reason.options[ddl_Reason.selectedIndex].text + "]," +"[" + $$("#lbl_txt_Reason").html().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
				}
			}

			if(senao045020_2.checked == true){
				if(senao045065.value == ""){
					errorMsg += "[" + $("#lbl_senao045020").html().trim() + "---" + $('label[for="senao045020_2"]').text().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
					// errorMsg += "請輸入「硬體---特規的規格」!\n";
				}
				var tAS=document.getElementById('Attachment_shell');
				var checkpoint=false;
				if(tAS.rows.length>=2){
					checkpoint = true;
				}

				if(checkpoint == false){
					errorMsg += "[" + $("#lbl_senao045020").html().trim() + "---" + $('label[for="senao045020_2"]').text().trim() + "]" + querySNSI009(form_ou.value, "017", locale,"","","") + "\n";
					// errorMsg += "若為「硬體---特規」，請附上簽呈!\n";
				}
			}
		}

    if(getGrpUsrIDStr("SN045_02").indexOf(workitemownerid)>=0 || activityId=='UserTask_151'){ //0020-0020
			if(senao045031.value ==""){
				errorMsg += "[" + $("#lbl_senao045031").html().trim() + "---" + $('#senao045031 option[value="0"]').text().trim()  + "," + $('#senao045031 option[value="1"]').text().trim() +"]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";
				// errorMsg += "請點選「辦公設備---新增/不需新增」【單選】!\n";
			}

			if(senao045031.value =="0"){
				if(senao045027_0.checked==false && senao045028_0.checked==false && senao045029_0.checked==false && senao045030_0.checked==false && senao045040_0.checked==false && senao045061_0.checked==false){
					errorMsg += "["+ $("#lbl_senao045031").html().trim() + "---" +  $('label[for="senao045027_0"]').text().trim()+ "," + $('label[for="senao045028_0"]').text().trim() + "," + $('label[for="senao045029_0"]').text().trim() + "," + $('label[for="senao045030_0"]').text().trim() + "," + $('label[for="senao045040_0"]').text().trim() + "," + $('label[for="senao045061_0"]').text().trim() + "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";		
					// errorMsg += "請勾選(座位、辦公桌、辦公椅、櫃子和側桌、垃圾桶、其他)【可複選】!\n";
				}
			}

			if(senao045040_0.checked==true){
				if(senao045041.value.trim()==""){
					errorMsg += "[" + $("#lbl_senao045031").html().trim() + "---" +  $('#senao045031 option[value="0"]').text().trim()+ "(" + $('label[for="senao045040_0"]').text().trim() + ")"+ "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
					// errorMsg += "「辦公設備---新增(其他需求說明)」不得空白!\n";
				}
			}
		}

		if(getGrpUsrIDStr("SN045_03").indexOf(workitemownerid)>=0 || activityId=='UserTask_158'){ //0020-0030
			if(senao045034.value ==""){
				errorMsg += "[" + $("#lbl_senao045034").html().trim() + "---" +  $('#senao045034 option[value="0"]').text().trim()  + "," + $('#senao045034 option[value="1"]').text().trim() +  "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";				
				// errorMsg += "請點選「車位---有/無」!\n";
			}
		}

		if(getGrpUsrIDStr("SN045_08").indexOf(workitemownerid)>=0 || activityId=='UserTask_165'){ //0020-0040 會辦處理電話需求
			if(senao045026.value==""){
				errorMsg += "[" + $("#lbl_senao045026").html().trim() + "---" +  $('#senao045026 option[value="0"]').text().trim() + "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";
				// errorMsg += "電話---新增/不需新增」【單選】!\n";
			}

			if(senao045026.value=="0"){
				if(senao045024_0.checked==false && senao045025_0.checked==false && senao045042_0.checked==false){
					errorMsg += "[" + $("#lbl_senao045026").html().trim() + "---" + $('label[for="senao045024_0"]').text().trim() + "," + "[" + $('label[for="senao045025_0"]').text().trim() + "," + $('label[for="senao045042_0"]').text().trim() + "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";
					// errorMsg += "請勾選(分機、專線、其他)【可複選】!\n";
				}
			}

			if(senao045042_0.checked==true){
				if(senao045043.value.trim()==""){
					errorMsg += "[" + $("#lbl_senao045026").html().trim() + "---" +$('label[for="senao045026_0"]').text().trim() + "(" + $('label[for="senao045042_0"]').text().trim() + ")"+ "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
					// errorMsg += "「電話---新增(其他需求說明)」不得空白!\n";
				}
			}
		}
	} // end of 0020
  if(activityId=="0028" || activityId=="UserTask_170"){ //HR新人報到處理人員
		if(senao045035.value=="" ){
			errorMsg += "[" + $("#Label74").html().trim() + "---" +  $('#senao045035 option[value="0"]').text().trim()  + "," + $('#senao045035 option[value="1"]').text().trim() + "," + $('#senao045035 option[value="2"]').text().trim()  + "," + $('#senao045035 option[value="3"]').text().trim() + "]" + querySNSI009(form_ou.value, "016", locale,"","","") + "\n";		
			// errorMsg += "請點選「新人報到---報到/未報到/延後報到/提早報到」【單選】!\n";
		}

		if(senao045035.value=="0"){
			if(senao045036.value.trim()==""){
				errorMsg += "[" + $("#lbl_senao045036").html().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
				// errorMsg += "當點選→新人報到，「員工工號」不得空白!\n";
			}
		}

		if(senao045035.value=="2"){
			if(senao045039.value.trim()==""){
				errorMsg += "[" + $("#lbl_senao045039").html().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
				// errorMsg += "當點選→延後報到，「預定報到日期」不得空白!\n";
			}
		}

		if(senao045035.value=="3"){
			if(senao045039.value.trim()==""){
				errorMsg += "[" + $("#lbl_senao045039").html().trim() + "]" + querySNSI009(form_ou.value, "004", locale,"","","") + "\n";
				// errorMsg += "當點選→提早報到，「預定報到日期」不得空白!\n";
			}
		}
	}
  if(activityId=="0040-0010" || activityId=="UserTask_190"){ //MIS系統管理員
		if(senao045017_0.checked==false && senao045017_1.checked==false && senao045017_2.checked==false){
			errorMsg += "[" + querySNSI009(formId, "005", locale,"","","") + "\n";
			// errorMsg += "MIS系統管理員請確認一組有效之「E-Mail帳號(ID)」！\n如User所填E-Mail帳號(ID)有錯，請直接更正後再簽核，謝謝！";
		}
	}

	if(errorMsg!=""){
		alert(errorMsg);
		return false;
	}else{
		if(formInstOID==""){
			if(txt_Subject_Remark.value==""){
				if(confirm(querySNSI009(form_ou.value, "018", locale,"","",""))){
					
				}else{
					return false;
				}
			}
		}
	}
	return true;
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
  senao045008.value = today; //填表日期
  senao045008.readOnly = true;//填表日期不可修改
  //表單代號
  $('#senao045001').val(type);
  $('#senao045001').attr('disabled', 'true');

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
function setDisable(pValue, pIsDisable) {
  pValue.disabled = pIsDisable;
  //ebe7e7
  //bfbfbf
  pValue.style.backgroundColor = pIsDisable ? '#ebe7e7' : '#ffffff';
}
function qry054btn(){
	if(senao045051.value!=""){
		senao045051_b1.disabled = false;
	}else{
		senao045051_b1.disabled = true;
	}
	
	senao045051_1.value="";
	senao045011_b1.disabled = false;
	document.getElementById("lbl_senao045051").innerHTML = "[" + $("#btn_SENAO054").val() + "]<br>" + $("#btn_SENAO006").val();
}
function qry006btn(){
	var confirmYN = "";
	if(hdn_ApproveResult002.value == "同意"){
		confirmYN = "Y";
	}else{
		var confirmMsg = confirm("No.[" + senao045051.value + "]" + querySNSI009(formId, "005", locale,"","",""));
		// var confirmMsg = confirm("單號「" + senao045051.value + "」人力需求單尚未結案，是否確定要先行處理新人報到需求表?");
		if(confirmMsg){
			confirmYN = "Y";
		}else{
			confirmYN = "N";
		}
	}

	if(confirmYN == "Y"){
		if(senao045051.value!=""){
			senao045051_b1.disabled = false;
		}else{
			senao045051_b1.disabled = true;
		}
		senao045051_1.value = senao045051.value;
		senao045011_b1.disabled = false;
		document.getElementById("lbl_senao045051").innerHTML = "[" + $("#btn_SENAO006").val() + "]<br>" + $("#btn_SENAO054").val();
	}else{
		senao045005.value = ""; //所屬部門名稱
		senao045012.value = ""; //部門主管姓名
		senao045007.value = ""; //名片職稱名稱
		senao045051.value = ""; //人力需求單號
		hdn_ApproveResult002.value = ""; //需求單結案狀態
		senao045011.value = ""; //部門主管代號
		senao045004.value = ""; //所屬部門代號
		senao045006.value = ""; //名片職稱代號
	}
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao045004_b1').on('click', function () { //所屬部門開窗
  // sessionStorage 存入數據
  let tTitle = "選擇部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao045004','senao045005');//回傳元件參數
  let tReturnFunction = new Array("senao045004_onchange()"); //回傳函數
  let tColAPi = "BPM_getUnit_Org";
  let tAPI = invokeURL + 'BPM_getUnit_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', UNID: 'ALL',  ORGNAME: 'ALL'};
  let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#btn_SENAO054').on('click', function () { //復職申請單資料按鈕
  // sessionStorage 存入數據
  let tTitle = "復職申請單資料";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao045003','','','','senao045005','senao045007','senao045051','senao045004','senao045006','senao045011','senao045012','senao045053','senao045014','senao045036');//回傳元件參數
  let tReturnFunction = new Array("qry054btn()"); //回傳函數
  let tColAPi = "BPM_SENAO045_02";
  let tAPI = invokeURL + 'BPM_SENAO045_02';
  let tParameter = { SENAO054008: 'ALL', SENAO054015: 'ALL', SENAO054009: 'ALL', SENAO054006: 'ALL', SENAO054014: 'ALL', SENAO054017: 'ALL'};
  let tQBEField = { SENAO054008: 'SENAO054008', SENAO054015: 'SENAO054015', SENAO054009: 'SENAO054009', SENAO054006: 'SENAO054006', SENAO054014: 'SENAO054014', SENAO054017: 'SENAO054017'}; //查詢欄位 {參數欄位:table欄位};	
  pWidth = 850;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#btn_SENAO006').on('click', function () { //人力需求單資料按鈕
  // sessionStorage 存入數據
  let tTitle = "人力需求單資料";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','senao045005','senao045012','','','senao045007','senao045051','hdn_ApproveResult002','','senao045011','senao045004','senao045006');//回傳元件參數
  let tReturnFunction = new Array("qry006btn()"); //回傳函數
  let tColAPi = "BPM_SENAO045_01";
  let tAPI = invokeURL + 'BPM_SENAO045_01';
  let tParameter = { form_ou: form_ou.value,SENAO_F005: null, RESAL002: null, RESAK002:null, SENAO_F011: null, QUOTA: null, RESAB003:null, PROCESSSERIALNUMBER:null, APPROVERESULT002:null, SENAO_F015:null};
  let tQBEField = {SENAO_F005: 'SENAO_F005', RESAL002: 'RESAL002', RESAK002: 'RESAK002', SENAO_F011: 'SENAO_F011', QUOTA: 'QUOTA', RESAB003: 'RESAB003', PROCESSSERIALNUMBER: 'PROCESSSERIALNUMBER', APPROVERESULT002: 'APPROVERESULT002', SENAO_F015: 'SENAO_F015'}; //查詢欄位 {參數欄位:table欄位};	
  pWidth = 1200;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao045006_b1').on('click', function () { //名片職稱開窗
  // sessionStorage 存入數據
  let tTitle = "選擇職稱";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao045007','senao045006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_HR_DeptTitle";
  let tAPI = invokeURL + 'BPM_HR_DeptTitle';
  let tParameter = { RESAB002: 'ALL', RESAB001: 'ALL'};
  let tQBEField = {  RESAB002: 'RESAB002',RESAB001: 'RESAB001'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao045011_b1').on('click', function () { //部門主管開窗
  // sessionStorage 存入數據
  let tTitle = "部門主管";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao045011','senao045012');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO045_06_Org";
  let tAPI = invokeURL + 'BPM_SENAO045_06_Org';
  let tParameter = { form_ou: form_ou.value , mainOrgId: 'senao' , ID:'ALL',USERNAME:'ALL',ID_1:'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID:'ID',USERNAME:'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao045066_b1').on('click', function () { //新人導師開窗
  // sessionStorage 存入數據
  let tTitle = "新人導師";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao045066','senao045067');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO045_05_Org";
  let tAPI = invokeURL + 'BPM_SENAO045_05_Org';
  let tParameter = {form_ou: form_ou.value , mainOrgId: 'senao' , senao045004:senao045004.value,ID: 'ALL', USERNAME: 'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/**
 * 報到地點 下拉選單資料準備
 * senao045053_prepare
 */
function senao045053_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_08"; // SN_EFGP_SQL中定義的SQL代號
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    form_ou: form_ou.value
  });
	//var dataArray = ajax_EFGPSQLQuery(sqlid,[form_ou.value]);
	//DWRUtil.removeAllOptions("senao045053");	//先清空所有選項
  document.getElementById("senao045053").innerHTML = "";

	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	senao045053.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].LOCATION); //放入表面值
			tOption.value = fixNull(dataArray[i].LOCATION); //放入內容值
			senao045053.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("senao045053_hdn");   
		if (tDropdownHdn !== null) {       
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("senao045053", tSelectedSQLDropdown); 
      var selectElement = document.getElementById("senao045053");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }  
		}
	}	
	return true;
}
/**
 * 員工類型 下拉選單資料準備
 * ddl_Role_prepare
 */
function ddl_Role_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "Role"
  });
	
	//DWRUtil.removeAllOptions("ddl_Role");	//先清空所有選項
	document.getElementById("ddl_Role").innerHTML = "";

	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	ddl_Role.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			ddl_Role.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("ddl_Role_hdn");
		if (tDropdownHdn != null) {
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("ddl_Role", tSelectedSQLDropdown);  
      var selectElement = document.getElementById("ddl_Role");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }   
			if (ddl_Role.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				ddl_Role.add(tOption);
				//DWRUtil.setValue("ddl_Role", tSelectedSQLDropdown);   
        var selectElement = document.getElementById("ddl_Role");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        } 
			}
		}
	}	
	return true;
}
/**
 * PC 下拉選單資料準備
 * senao045063_prepare
 */
function senao045063_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號
	var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "PC@@"+ ddl_Role.value
  });
	//DWRUtil.removeAllOptions("senao045063");	//先清空所有選項
  document.getElementById("senao045063").innerHTML = "";

	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	senao045063.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			senao045063.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("senao045063_hdn");   
		if (tDropdownHdn !== null) {       
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("senao045063", tSelectedSQLDropdown);
      var selectElement = document.getElementById("senao045063");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }
			if (senao045063.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				senao045063.add(tOption);
				//DWRUtil.setValue("senao045063", tSelectedSQLDropdown);   
        var selectElement = document.getElementById("senao045063");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        }
			}
		}
	}	
	return true;
}
/**
 * NB規格 下拉選單資料準備
 * senao045064_prepare
 */
function senao045064_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "NB@@"+ ddl_Role.value
  });

	//DWRUtil.removeAllOptions("senao045064");	//先清空所有選項
  document.getElementById("senao045064").innerHTML = "";
	
	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	senao045064.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			senao045064.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("senao045064_hdn");
		if (tDropdownHdn != null) {
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("senao045064", tSelectedSQLDropdown);   
      var selectElement = document.getElementById("senao045064");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }
			if (senao045064.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				senao045064.add(tOption);
				//DWRUtil.setValue("senao045064", tSelectedSQLDropdown);   
        var selectElement = document.getElementById("senao045064");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        }
			}
		}
	}	
	return true;
}
/**
 * 特殊規格需求原因 下拉選單資料準備
 * ddl_Reason_prepare
 */
function ddl_Reason_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號

  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "Reason"
  });
	
	//DWRUtil.removeAllOptions("ddl_Reason");	//先清空所有選項
	document.getElementById("ddl_Reason").innerHTML = "";
	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	ddl_Reason.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			ddl_Reason.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("ddl_Reason_hdn");
		if (tDropdownHdn != null) {
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("ddl_Reason", tSelectedSQLDropdown);   
      var selectElement = document.getElementById("ddl_Reason");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }
			if (ddl_Reason.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				ddl_Reason.add(tOption);
				//DWRUtil.setValue("ddl_Reason", tSelectedSQLDropdown); 
        var selectElement = document.getElementById("ddl_Reason");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        }  
			}
		}
	}	
	return true;
}
/**
 * OS 下拉選單資料準備
 * senao045059_prepare
 */
function senao045059_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "OS"
  })
	//DWRUtil.removeAllOptions("senao045059");	//先清空所有選項
	document.getElementById("senao045059").innerHTML = "";
	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	senao045059.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			senao045059.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("senao045059_hdn");   
		if (tDropdownHdn !== null) {       
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("senao045059", tSelectedSQLDropdown);
      var selectElement = document.getElementById("senao045059");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }
			if (senao045059.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				senao045059.add(tOption);
				//DWRUtil.setValue("senao045059", tSelectedSQLDropdown);   
        var selectElement = document.getElementById("senao045059");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        }
			}
		}
	}	
	return true;
}
/**
 * Office版本 下拉選單資料準備
 * senao045021_prepare
 */
function senao045021_prepare() {
	var i, tOption;
	var sqlid = "BPM_SENAO045_07"; // SN_EFGP_SQL中定義的SQL代號
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    type: "OfficeSoftware"
  })
	
	//DWRUtil.removeAllOptions("senao045021");	//先清空所有選項
  document.getElementById("senao045021").innerHTML = "";
	
	tOption = document.createElement("option");  //建立option選項
	tOption.text = "---"; //放入表面值
	tOption.value = ""; //放入內容值
	senao045021.add(tOption);
	if (dataArray.length > 0) {
		for (i = 0 ; i < dataArray.length; i++) {		
			tOption = document.createElement("option");  //建立option選項
			tOption.text = fixNull(dataArray[i].ITEM); //放入表面值
			tOption.value = fixNull(dataArray[i].VALUE); //放入內容值
			senao045021.add(tOption);
		}

		//系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
		//因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
		var tDropdownHdn = document.getElementById("senao045021_hdn");   
		if (tDropdownHdn !== null) {       
			var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
			//DWRUtil.setValue("senao045021", tSelectedSQLDropdown);
      var selectElement = document.getElementById("senao045021");
      if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
          selectElement.value = tSelectedSQLDropdown.value;
      }
			if (senao045021.value == "" && tSelectedSQLDropdown != undefined){	//20230321 Milla 若隱藏欄位的值在設定檔已失效‧，則新增隱藏欄位的值的選項
				tOption = document.createElement("option");  //建立option選項
				tOption.text = tSelectedSQLDropdown; //放入表面值
				tOption.value = tSelectedSQLDropdown; //放入內容值
				senao045021.add(tOption);
				//DWRUtil.setValue("senao045021", tSelectedSQLDropdown);   
        var selectElement = document.getElementById("senao045021");
        if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
            selectElement.value = tSelectedSQLDropdown.value;
        }
			}
		}
	}	
	return true;
}
function getProcessInstanceOID(){
	var retVal="";
  var sqlid = "BPM_getProcessInstanceOID"; 
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    p: senao045051.value
  })
	if(dataarray.length>0){
		retVal = dataarray[0].OID;
	}
	return retVal;
}
function getSNSI003(strSNSI003001, strSNSI003002){ //傳回SNSI003003的值
	var retVal="";  
	var tParams = new Array();  
	tParams.push(strSNSI003001);
	tParams.push(strSNSI003002);
  var sqlid = "BPM_SNSI003"; 
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    strSNSI003001:tParams[0],
    strSNSI003002:tParams[1]
  })
	if(dataArray.length > 0){
		retVal = fixNull(dataArray[0].SNSI003003); //SNSI003003
	}
	return retVal;
}
function getGrpUsrIDStr(strGrp){
	var retVal="";      
  var sqlid = "BPM_getGroupUserIDbyOrg"; 
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    GID:strGrp,
    CID:form_ou.value
  })
	var dataCount = dataArray.length;
	if(dataCount > 0){
		for(var i=0;i<dataCount;i++){
			if(retVal!=""){
				retVal += ";";
			}
			retVal += fixNull(dataArray[i].USERID);//User的Id
		}
	}
	return retVal; 
}
function getUserIDByOID(uoid){
	var retVal ="";
  var sqlid = "BPM_getUserByUserOID"; 
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {
    UOID:uoid
  })
  if(dataArray[0].result == undefined){
    if(dataArray.length>0){
      retVal = dataArray[0].ID;//User的Id
    }
  }
	return retVal;
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
function senao045004_onchange(){
	return true;
}
function senao045009_b1_onclick(){//報到編號按鈕
	var strDate = left(systemDateTime.replace("/",""),6);      
	var strno="1";
	//DWREngine.setAsync(false);
	//ajax_DatabaseAccessor.query("SENAO045_03", tParams, tTypes, function (data) {        
		//if(data.recordValues.length > 0) {
			//strno = fixNull(data.recordValues[0][0]);
		//}
	//});
	//DWREngine.setAsync(true);
  var sqlid = "BPM_SENAO045_03"; 
  var dataArray = [];    
  dataArray = ajaxGetData(invokeURL + sqlid, {})
	if(dataArray.length > 0 ){
		strno = fixNull(dataArray[0].SENAO045A002);
	}
	senao045009.value = strDate + "-" + strno;
  var sqlid1 = "BPM_SENAO045_04"; 
  var data = [];    
  data = ajaxGetData(invokeURL + sqlid1, {
    strno:strno
  })
}
//復職申請單/人力需求單 按鈕
function senao045051_b1_onclick(){
	if(senao045051.value!=""){
		if(senao045051.value.toUpperCase().indexOf("SENAO") <= -1){ //舊表單
			if(document.location.hostname.indexOf("efgptest") > -1){ //TEST
				if(senao045051_1.value!=""){ //人力需求單
					window.open ("http://ezflowtest.senao.com/EF2KWeb/CHT/Forms/SENAO045/ShowSENAO006Form.asp?FormID=SENAO006&SheetNo="+senao045051.value,"FormDataWindow","toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=650px,height=700px");
				}else{ //復職申請單
					window.open ("http://ezflowtest.senao.com/EF2KWeb/CHT/Forms/SENAO045/ShowSENAO054Form.asp?FormID=SENAO054&SheetNo="+senao045051.value,"FormDataWindow","toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=650px,height=700px");
				}
			}else{ //PROD
				if(senao045051_1.value!=""){ //人力需求單
					window.open ("http://ezflow.senao.com/EF2KWeb/CHT/Forms/SENAO045/ShowSENAO006Form.asp?FormID=SENAO006&SheetNo="+senao045051.value,"FormDataWindow","toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=650px,height=700px");
				}else{ //復職申請單
					window.open ("http://ezflow.senao.com/EF2KWeb/CHT/Forms/SENAO045/ShowSENAO054Form.asp?FormID=SENAO054&SheetNo="+senao045051.value,"FormDataWindow","toolbar=no,menubar=no,resizable=yes,scrollbars=yes,width=650px,height=700px");
				}
			}
		}else{  //新表單     
			var p_oid = getProcessInstanceOID();
			//window.open('/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchSingleFormDetail&hdnFormDefId=SENAO006&hdnProcessInstOID='+p_oid+'&hdnCurrentUserId='+userId, '', 'top=0,left=0,width=750px,resizable=yes,scrollbars=yes');
			window.open('/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchSingleFormDetail&hdnFormDefId='+senao045051.value.slice(0,8)+'&hdnProcessInstOID='+p_oid+'&hdnCurrentUserId='+userId, '', 'top=0,left=0,width=750px,resizable=yes,scrollbars=yes');
		
		}
	}
}
//帳號(ID)
function senao045014_onchange(){
	if(senao045014.value.trim()!=""){
		if(senao045014.value.indexOf("_")>=0){
			alert(querySNSI009(formId, "007", locale,"","",""));
			// alert("請檢查email帳號,不能輸入(_),請修正!");
			senao045014.value="";
			return false;
		}
	}
	return true;
}
//帳號(ID) 第二組
function senao045015_onchange(){
	if(senao045015.value.trim()!=""){
		if(senao045014.value.trim()==""){			
			alert(querySNSI009(formId, "004", locale,"","",""));
			// alert("請優先輸入第一組郵件帳號!");
			senao045015.value="";
			senao045014.focus();
			return false;
		}

		if(senao045015.value.indexOf("_")>=0){
			alert(querySNSI009(formId, "007", locale,"","",""));
			senao045015.value="";
			return false;
		}
	}
	return true;
}
//帳號(ID) 第三組
function senao045016_onchange(){
	if(senao045016.value.trim()!=""){
		if(senao045014.value.trim()==""){
			alert(querySNSI009(formId, "004", locale,"","",""));
			// alert("請優先輸入第一組郵件帳號!");
			senao045016.value="";
			senao045014.focus();
			return false;
		}

		if(senao045016.value.indexOf("_")>=0){
			alert(querySNSI009(formId, "007", locale,"","",""));
			senao045016.value="";
			return false;
		}
	}
	return true;
}
//電腦radio
function senao045020_onclick(){ //硬體
	senao045063.disabled=true;
	senao045063.style.backgroundColor="#ffffff";
	senao045063.selectedIndex=0;
	senao045064.disabled=true;
	senao045064.style.backgroundColor="#ffffff";
	senao045064.selectedIndex=0;
	ddl_Role.disabled=true;
	ddl_Role.style.backgroundColor="#ffffff";
	ddl_Role.selectedIndex=0;
	ddl_Reason.disabled=true;
	ddl_Reason.style.backgroundColor="#ffffff";
	ddl_Reason.selectedIndex=0;
	txt_Reason.value = "";
	txt_Reason.disabled = true;
	txt_Reason.readOnly = true;
	txt_Reason.style.backgroundColor="#ffffff";	
	senao045065.style.backgroundColor="#ffffff";
	senao045065.readOnly=true;
	

	if(senao045020_0.checked==true){ //PC
		ddl_Role.disabled=false;
		ddl_Role.style.backgroundColor="#fbf1c0";	

		// 20250219 Eason Add (S)  如果選PC就要選螢幕
		sc.disabled=false;
		sc.style.backgroundColor="#fbf1c0";
		// 20250219 Eason Add (E)

	}else if(senao045020_1.checked==true){ //NB
		ddl_Role.disabled=false;
		ddl_Role.style.backgroundColor="#fbf1c0";	
		
		// 20250219 Eason Add (S)  如果選PC就要選螢幕
		sc.disabled = true;
		sc.style.backgroundColor = "#ffffff";
		// 20250219 Eason Add (E)
	}else if(senao045020_2.checked==true){ //特規
		senao045065.style.backgroundColor="#fbf1c0";
		senao045065.readOnly=false;
	}
}
/*
* 員工類型 onchange
*/
function ddl_Role_onchange(){ 	
	senao045064_prepare();
	senao045063_prepare(); //20250219 Eason Add
	if (senao045020_0.checked == true){
		senao045064.value = "";
		senao045064.disabled=true;
		senao045064.style.backgroundColor="#ffffff";
	}else{
		senao045064.disabled=false;
		senao045064.style.backgroundColor="#fbf1c0";
	}

	if (senao045020_1.checked == true){
		senao045063.value = "";
		senao045063.disabled=true;
		senao045063.style.backgroundColor="#ffffff";

		ddl_Reason_prepare();
		ddl_Reason.disabled=false;
		ddl_Reason.style.backgroundColor="#fbf1c0";
	}else{
		senao045063.disabled=false;
		senao045063.style.backgroundColor="#fbf1c0";
		ddl_Reason.value = "";
		ddl_Reason.disabled=true;
		ddl_Reason.style.backgroundColor="#ffffff";
		txt_Reason.value = "";
		txt_Reason.disabled=true;
		txt_Reason.readOnly = true;
		txt_Reason.style.backgroundColor="#ffffff";
	}
	if (ddl_Role.value == "4"){
		ddl_Reason_prepare();
		ddl_Reason.disabled=false;
		ddl_Reason.style.backgroundColor="#fbf1c0";
	}else{
		ddl_Reason.value = "";
		ddl_Reason.disabled=true;
		ddl_Reason.style.backgroundColor="#ffffff";
		txt_Reason.value = "";
		txt_Reason.disabled=true;
		txt_Reason.readOnly = true;
		txt_Reason.style.backgroundColor="#ffffff";
	}
}
/*
* 特殊規格需求原因 onchange
*/
function ddl_Reason_onchange(){
	if (ddl_Reason.value == "99"){
		txt_Reason.disabled = false;
		txt_Reason.readOnly = false;
		txt_Reason.style.backgroundColor = "#fbf1c0";
	}else{
		txt_Reason.value = "";
		txt_Reason.disabled = true;
		txt_Reason.readOnly = true;
		txt_Reason.style.backgroundColor = "#ffffff";
	}
}
//帳號信箱 (radio改為下拉選單click改change)
function senao045057_onclick(){
	senao045055_0.disabled=true;
	senao045056_0.disabled=true;
	senao045062_0.disabled=true;
	senao045055_0.checked=false;
	senao045056_0.checked=false;
	senao045062_0.checked=false;
	if(senao045057.value=='0'){
		senao045055_0.disabled=false;
		senao045056_0.disabled=false;
		senao045062_0.disabled=false;
	}
}
//軟體(radio改為下拉選單click改change)
function senao045058_onclick(){ //軟體
	senao045059.disabled=true;
	senao045021.disabled=true;
	senao045022_0.disabled=true;
	senao045059.checked=false;
	senao045021.checked=false;
	senao045022_0.checked=false;
	senao045022_onclick();
	if(senao045058.value=='0'){
		//senao045059.disabled=false;  20250729 不能讓使用者選擇[OS作業系統]
		//senao045021.disabled=false;  20250729 不能讓使用者選擇[Office版本]
		senao045022_0.disabled=false;
	}else{
		//senao045059.value = "";  20250729
		//senao045021.value = "";  20250729
		senao045022_0.checked = false;
		senao045023.value = "";
	}
}
//軟體 其它需求
function senao045022_onclick(){
	senao045023.readOnly=true;
	senao045023.style.backgroundColor="#ffffff";
	senao045023.value="";
	if(senao045022_0.checked==true){
		senao045023.readOnly=false;
		senao045023.style.backgroundColor="#fbf1c0";
	}
}
//電話 (radio改為下拉選單click改change)
function senao045026_onclick(){ //電話
	senao045024_0.disabled=true;
	senao045025_0.disabled=true;
	senao045042_0.disabled=true;
	senao045024_0.checked=false;
	senao045025_0.checked=false;
	senao045042_0.checked=false;
	senao045042_onclick();
	if(senao045026.value=='0'){
		senao045024_0.disabled=false;
		senao045025_0.disabled=false;
		senao045042_0.disabled=false;
	}
}
//電話 其他
function senao045042_onclick(){
	senao045043.readOnly=true;
	senao045043.style.backgroundColor="#ffffff";
	senao045043.value="";
	if(senao045042_0.checked==true){
		senao045043.readOnly=false;
		senao045043.style.backgroundColor="#fbf1c0";
	}
}
//辦公設備(radio改為下拉選單click改change)
function senao045031_onclick(){ //辦公設備
	senao045027_0.disabled=true;
	senao045028_0.disabled=true;
	senao045029_0.disabled=true;
	senao045030_0.disabled=true;
	senao045061_0.disabled=true;
	senao045040_0.disabled=true;
	senao045027_0.checked=false;
	senao045028_0.checked=false;
	senao045029_0.checked=false;
	senao045030_0.checked=false;
	senao045061_0.checked=false;
	senao045040_0.checked=false;
	senao045040_onclick();
	if(senao045031.value=='0'){
		senao045027_0.disabled=false;
		senao045028_0.disabled=false;
		senao045029_0.disabled=false;
		senao045030_0.disabled=false;
		senao045061_0.disabled=false;
		senao045040_0.disabled=false;
	}
}
//辦公設備 其他
function senao045040_onclick(){
	senao045041.readOnly=true;
	senao045041.style.backgroundColor="#ffffff";
	senao045041.value="";
	if(senao045040_0.checked==true){
		senao045041.readOnly=false;
		senao045041.style.backgroundColor="#fbf1c0";
	}
}
//新人報到(radio改為下拉選單click改change)
function senao045035_onclick(){
	if(senao045035.value=='2' || senao045035.value=='3'){
		document.getElementById('senao045039').disabled = false;  // 啟用日期選擇
    senao045036.readOnly = false;
    document.getElementById('senao045039').style.backgroundColor = "#fbf1c0";
    senao045036.style.backgroundColor = "#fbf1c0";           
	}else{
		document.getElementById('senao045039').disabled = true;   // 停用日期選擇
    senao045036.readOnly = true;
    document.getElementById('senao045039').style.backgroundColor = "#ffffff";
    senao045036.style.backgroundColor = "#ffffff";
    senao045036.value = "";
    document.getElementById('senao045039').value = "";  // 清空日期
	}
}
//列印表單按鈕
function btn_Print_onclick(){
	var myWindow = window.open("/NaNaWeb/CustomSNO/jsp/SENAO045/SENAO045_Print.jsp?processSN="+SERIALNUMBER, "", "width=900,height=650,menubar=yes,scrollbars=yes,location=no",false);
}
//帳號(ID) RADIO
function senao045017_onclick(){
	senao045014.readOnly=true;
	senao045015.readOnly=true;
	senao045016.readOnly=true;
	if(senao045017_0.checked==true){
		senao045014.readOnly=false;
	}else if(senao045017_1.checked==true){
		senao045015.readOnly=false;
	}else if(senao045017_2.checked==true){
		senao045016.readOnly=false;
	}
}
/**
 *硬體-採購新品否
 *senao045068_onclick
 *20210928 Ann增加
  //電腦 (radio改為下拉選單click改change)
*/
function senao045068_onclick(){
  if(senao045068.value== '1'){ //採購新品
		senao045020_0.disabled=false;//啟用硬體-PC
		senao045020_0.style.backgroundColor = "#fbf1c0";
		if(senao045020_0.checked == true){// 如果 PC 已被勾選
			senao045063.disabled=false;// 啟用 PC 規格下拉選單
			senao045063.style.backgroundColor = "#fbf1c0";
		}
		senao045020_1.disabled=false;// 啟用 NB checkbox
		senao045020_1.style.backgroundColor = "#fbf1c0";
		if(senao045020_1.checked == true){// 如果 NB 已被勾選
			senao045064.disabled=false; // 啟用 NB 規格下拉選單
			senao045064.style.backgroundColor = "#fbf1c0";
		}
		senao045020_2.disabled=false;//硬體-特規 啟用特規 checkbox
		senao045020_2.style.backgroundColor = "#fbf1c0";
		if(senao045020_2.checked == true){// 如果特規已被勾選
			senao045065.disabled=false; // 啟用特規輸入框
			senao045065.style.backgroundColor = "#fbf1c0";
		}
	}else{
		senao045020_0.disabled=true;// 停用 PC checkbox
		senao045020_0.style.backgroundColor = "#ffffff";
		senao045020_0.checked = false; // 取消勾選
		senao045063.disabled=true;  // 停用 PC 規格下拉選單
		senao045063.style.backgroundColor = "#ffffff";
		document.getElementById("senao045063_hdn").value = ""; // 清空隱藏欄位
		//DWRUtil.setValue("senao045063", eval(document.getElementById("senao045063_hdn").value, 1, 0));
    // 嘗試重置下拉選單的值
    var tSelectedSQLDropdown=eval(document.getElementById("senao045063_hdn").value, 1, 0);
    var selectElement = document.getElementById("senao045063");
    if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
        selectElement.value = tSelectedSQLDropdown.value;
    } 

		senao045020_1.disabled=true;//硬體-NB // 停用 NB checkbox
		senao045020_1.style.backgroundColor = "#ffffff";
		senao045020_1.checked = false;// 取消勾選
		senao045064.disabled=true;  // 停用 NB 規格下拉選單
		senao045064.style.backgroundColor = "#ffffff";  
		document.getElementById("senao045064_hdn").value = "";// 清空隱藏欄位
		//DWRUtil.setValue("senao045064", eval(document.getElementById("senao045064_hdn").value, 1, 0));
    var tSelectedSQLDropdown=eval(document.getElementById("senao045064_hdn").value, 1, 0);
    var selectElement = document.getElementById("senao045064");
    if (tSelectedSQLDropdown && tSelectedSQLDropdown.value) {
        selectElement.value = tSelectedSQLDropdown.value;
    } 

		senao045020_2.disabled=true;//硬體-特規  // 停用特規 checkbox
		senao045020_2.style.backgroundColor = "#ffffff";
		senao045020_2.checked = false;// 取消勾選
		senao045065.readOnly=true;// 特規輸入框設為唯讀
		senao045065.style.backgroundColor = "#ffffff";
		senao045065.value = "";  // 清空內容
	}
}
/*---------------------欄位onChange、onClick Function Start--------------*/