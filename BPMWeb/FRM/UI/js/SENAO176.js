var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var Invalid_BGCOLOR = "#FFFF00";
var Grid1 = document.getElementById("Grid1");
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao176m002 = document.getElementById("senao176m002"); //表單單號
var is_manager_0 = document.getElementById("is_manager_0"); //是否為主管 是
var is_manager_1 = document.getElementById("is_manager_1"); //是否為主管 否
var labor_type_0 = document.getElementById("labor_type_0"); //直間接員工 直接
var labor_type_1 = document.getElementById("labor_type_1"); //直間接員工 間接
var Label179 = document.getElementById("Label179"); //離職問捲填寫
var HiddenCheckLink = document.getElementById("HiddenCheckLink"); //隱藏欄位用來記錄是否點選離職問捲連結
var Link90 = document.getElementById("Link90"); // 離職問卷超連結
var HiddenUserId = document.getElementById("HiddenUserId"); // 隱藏欄位用來記錄HR03Leader的ID
var Link92 = document.getElementById("Link92"); // 離職面談問卷超連結 20250107 Eason 
var HiddenCheckLink92 = document.getElementById("HiddenCheckLink92"); //隱藏欄位用來記錄是否點選離職面談問捲連結 20250107 Eason 
var hdn_bp_group = document.getElementById("hdn_bp_group"); //hdn_bp_group  
var Confirm_Handover_completed_0 = document.getElementById("Confirm_Handover_completed_0");//確認同仁完成交接
var hdn_EmployeeJobCName = document.getElementById("hdn_EmployeeJobCName");//新增隱藏欄位存職稱代號 //20251117 Dillna add
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title");//根據組織賦予表單代碼 20260114 Dillan add
//DataSoruce
var databaseCfgId_EFGP = "EFGP";
var databaseCfgId_ERP = "ERPSNO";
//單身grid1 元件欄位名稱
var GridBinding = [
  ["gno","ASSET_NUMBER","ASSET_DESCRIPTION","FA_CATEGORIES","Custody_Quantity","Location"]
];
//單身grid1 欄位顯示名稱=>creat grid產生
var Grid1Columns = [];
//單身grid1 欄位id名稱=>creat grid產生
var Grid1ColumnIds = [];
/*-----------------------Grid變數----------------------------*/
var frmGridList = [{
  caption: '',
  gid: 'Grid1',
  pager: '#Grid1_pager',
  shrinkToFit: false,
  fixedColFDb: true, //set db
  rownumbers: false,
  colAPI: 'BPM_SENAO176_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO176_GRID1_LIST',
  gridDefPostData: {
  },
  search: true,
  refresh: true,
  xls: true,
  onSelectRow: function (rowid, status, e) {  //行選取
    let row = $(this).jqGrid('getRowData', rowid);
    console.log('rowid', rowid);
    console.log('row', row);
    for (const [key, value] of Object.entries(row)) {
      let element = ('#g' + key).toLowerCase();
      if ($(element).attr('type') === 'date') {
        // 將 yyyy/MM/dd 轉成 yyyy-MM-dd 以符合 HTML <input type="date">
        let dateStr = value.replace(/\//g, '-'); // 轉成 "2024-10-22"
        $(element).val(dateStr);
      } else {
        $(element).val(value);
      }
/*
      if ($(element).exists != undefined) {
        $(element).val(value);
      }*/
      console.log('element:', element);
      console.log(key, value);
    }
  },
  loadComplete: function (ids) {
  }
}];
/***************************GRID********************** */
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
  
  $('#labor_type').val("IDL");
  activityId = "Applicant";/*
  ProcessPackageId='SENAO176';//vivian 抓不到單號暫時定義
  formId='SENAO176';//vivian 抓不到單號暫時定義
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
  //每個關卡欄位控卡
  setActivityFieldControl();
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //設定申請人*/
  /*$('#userid').val(userId);
  $('#user_name').val(user_Name);*/
  $('#userid').attr('disabled', 'true');
  $('#user_name').attr('disabled', 'true');
  //設定所屬部門*/
  /*$('#Department').val(Department);
  $('#Department_name').val(Department_Name);*/
  $('#Department').attr('disabled', 'true');
  $('#Department_name').attr('disabled', 'true');
	/*applicant = $('#userid').val();//發起流程時參數 申請人ID
  applicantDept = $('#Department').val();//發起流程時參數 申請人部門ID*/

  $('#senao176m002').attr('disabled', 'true');//單號
  
	SetInputDisabled();
  
	/*
	if (typeof (Grid1Obj) != "undefined") {
    var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料
        if (tGrid1.length > 1) {  //判斷Grid1是否有資料  
            Grid1Obj.reload(eval(tGrid1));  //若Grid1有資料則將存於隱藏中的值載入Grid中  
    }
  }*/
	loadSavedGridData() ;//載入已存檔的Grid資料

  if (activityId == "Requester"){	//HR+Kim(主管級由Kim發起)
    hdn_formnumber_title.value = form_ou.value.toUpperCase()+"176"; //20260114 Dillan add
    if (formInstOID == "") {
			if (checkIsGroupUser(userId, "SN176_01") == true){	//HR人員群組開單時預設是否為主管欄位為否
				$("#is_manager").val("N");
			}
			if (checkIsGroupUser(userId, "SN176_02") == true){	//HR主管群組預設是否為主管欄位為是
				$("#is_manager").val("Y");
    	}
    }
  }
  //if (activityId == "GeneralAffairs01"){	//總務01 //20260114 Dillan marked
  if (activityId == "GeneralAffairs01" || activityId == "SVNGeneralAffairs01" ){	//總務01 //20260114 Dillan add
		if ($('img[title="繼續派送"]', window.parent.document).is(':visible')){	//簽核狀態
			var strTransfer_of_fixed_assets_NO = queryProcessserialnumber("BPM_SENAO176_02", $("#userid").val());
			var strDisposal_of_fixed_assets_NO = queryProcessserialnumber("BPM_SENAO176_03", $("#userid").val());
			$("#Transfer_of_fixed_assets_NO").val(strTransfer_of_fixed_assets_NO);	//取離職申請人未結案的資產移轉單
			$("#Disposal_of_fixed_assets_NO").val(strDisposal_of_fixed_assets_NO);	//取離職申請人未結案的資產處分單
			PersonalAssets($("#userid").val());	//抓離職人員在Oracle ERP的資產帶到Grid1
    }
  }
  //if (activityId == "HR01"){	//HR01 //20260114 Dillan marked
  if (activityId == "HR01" || activityId == "SVNHR01"){	//HR01 //20260114 Dillan add
		if ($('img[title="繼續派送"]', window.parent.document).is(':visible')){	//簽核狀態
			var strTraining_of_PaymentForm_NO = queryProcessserialnumber("BPM_SENAO176_04", $("#userid").val());
			$("#Training_of_PaymentForm_NO").val(strTraining_of_PaymentForm_NO);	//取離職申請人申請過訓練費的表單
    }
  }
  //if (activityId == "HR02"){	//HR02 //20260114 Dillan marked
  if (activityId == "HR02" || activityId == "SVNHR02"){	//HR02 //20260114 Dillan marked
		if ($('img[title="繼續派送"]', window.parent.document).is(':visible')){	//簽核狀態
			var strCancel_Modify_Attendance_NO = queryProcessserialnumber("BPM_SENAO176_05", $("#userid").val());
			$("#Cancel_Modify_Attendance_NO").val(strCancel_Modify_Attendance_NO);	//取未結案的人事結案註銷修改通知單
    }
  }
  if (activityId == "MIS01"){	//MIS01
		if ($('img[title="繼續派送"]', window.parent.document).is(':visible')){	//簽核狀態
			var strClosed_System_Privileges_NO = queryProcessserialnumber("BPM_SENAO176_06", $("#userid").val());
			$("#Closed_System_Privileges_NO").val(strClosed_System_Privileges_NO);	//取申請過的關閉系統權限申請單
    }
  }
  // 20250107 Eason (S)
  var startDate = new Date($("#Date_of_Reported").val());
  var endDate = new Date($("#last_date").val());

  if(activityId == "Applicant"){
		//離職人員問卷判斷6個月以上，6個月以下分別不同連結  
		if(monthsBetweenDates(startDate, endDate) >= 6){
			Link90.href= 'https://forms.office.com/r/baMB77X7nx';
		}else{
			Link90.href= 'https://forms.office.com/r/kgJEKhEZgu';
		}

		//彈窗
		$("#Link90").on("click", function (event) {
			//當如果有點連結在不在跳錯誤訊息
			HiddenCheckLink.value = "Y"; // 點擊後設置 value 為 "Y"
			event.preventDefault(); // 阻止默認行為，避免鏈結自動跳轉
			window.open(Link90.href, '_blank'); // 在新標籤頁打開連結
		});
  }
  //if(activityId == "HR03BP" || activityId == "HR03Leader2" || activityId == "HR04" || activityId=="HR03Leader"){ //20260114 Dillan marked
  if(activityId == "HR03BP" || activityId == "HR03Leader2" || activityId == "HR04" || activityId=="HR03Leader" || activityId == "SVNHR03BP" || activityId == "SVNHR03Leader2" || activityId == "SVNHR04" || activityId=="SVNHR03Leader"){ //20260114 Dillan add
		//離職面談問卷判斷6個月以上，6個月以下分別不同連結  
		if(monthsBetweenDates(startDate, endDate) >= 6){
			Link92.href= 'https://senao0.sharepoint.com/sites/HR/Lists/List/AllItems.aspx';
		}else{
			Link92.href= 'https://senao0.sharepoint.com/sites/HR/Lists/6/AllItems.aspx';
		}
		//彈窗
		$("#Link92").on("click", function (event) {
			//當如果有點連結在不在跳錯誤訊息
			HiddenCheckLink92.value = "Y"; // 點擊後設置 value 為 "Y"
				$("#Exit_interviews").css({
					"pointer-events": "auto",  // 恢復可交互
					"opacity": "1"             // 恢復正常透明度
					});
			event.preventDefault(); // 阻止默認行為，避免鏈結自動跳轉
			window.open(Link92.href, '_blank'); // 在新標籤頁打開連結
		});
  }
  // 20250107 Eason (E)
  if (activityId == "DepartmentManager2"){	//Department Manager2	
		var Confirm_Handover_completed = document.getElementById("Confirm_Handover_completed");//確認同仁完成交接
    Confirm_Handover_completed.style.backgroundColor = '#FBF1C0';
  }
  createFrmGrid(0);
  return true;
}
function frmEvent() { 
  $('#userid').on('change', function () { //申請人
    userid_onchange();
  });
  $('#Transfer_of_fixed_assets_NO_b1').on('click', function () { //不動產、廠房及設備移轉申請單單號
    Transfer_of_fixed_assets_NO_b1_onclick();
  });
  $('#Disposal_of_fixed_assets_NO_b1').on('click', function () { //不動產、廠房及設備處分申請單單號
    Disposal_of_fixed_assets_NO_b1_onclick();
  });
  $('#Training_of_PaymentForm_NO_b1').on('click', function () { //訓練費請款單記錄
    Training_of_PaymentForm_NO_b1_onclick();
  });
  $('#Cancel_Modify_Attendance_NO_b1').on('click', function () { //人事結案註銷申請記錄
    Cancel_Modify_Attendance_NO_b1_onclick();
  });
  $('#Closed_System_Privileges_NO_b1').on('click', function () {//關閉系統權限申請單單號
    Closed_System_Privileges_NO_b1_onclick();
  });
  $('#last_date').on('change', function () { //最後工作日
    last_date_onchange();
  });
  $('#Is_custody_seal').on('change', function () { //是否有保管印信
    Is_custody_seal_onchange();
  });
}
function formSave(){
	var errstr = "";
  var strAttachmentCnt = 0;
  var tGrid1Data = getGridData(0); 
  var temp_errMsg = "";
	//FRM_COL_CHECK is_manager 是否為主管 Date_of_Reported 到職日 job_level 職等 job_title 職稱 labor_type 直間接員工 application_date 申請日期 last_date 最後工作日
	if (activityId == "Requester"){	//HR+Kim(主管級由Kim發起)
		if ($("#userid").val() == "" || $("#user_name").val() == ""){
			errstr += "[" + $("#lbl_userid").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[Applicant]不可空白!
    }
		if ($("#Department").val() == "" || $("#Department_name").val() == ""){
			errstr += "[" + $("#lbl_Department").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[Applicant]不可空白!
    }
		if ($("#Effective_Released_Date").val() == ""){
			errstr += "[" + $("#lbl_Effective_Released_Date").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[Effective Released Date]不可空白!
    }
  }
	if (activityId == "DepartmentManager1"){	//單位主管
		if ($("[id*=Confirm_last_date] input:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_last_date").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm last date of work]尚未選取!
    }
		if ($("#abor_type").val() == "IDL"){	//間接員工才須指派交接人
			if ($("#Successor_id").val() == "" || $("#Successor_name").val() == ""){
				errstr += "[" + $("#lbl_Successor_id").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[Successor]不可空白!
      }
    }
  }
	if (activityId == "Applicant" || activityId == "MFGAsst" || activityId == "SVNMFGAsst"){	//離職申請人 / 製造助理 //20260114 Dillan add
		if ($("#Is_custody_seal").val() == ""){
			errstr += "[" + $("#lbl_Is_custody_seal").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n"; //[Is custody seal]尚未選取!
    }
		if ($("#Is_custody_seal").val() == "Y"){	//[Is custody seal] = Y
			if ($("#Person_in_custody_id").val() == "" || $("#Person_in_custody_name").val() == ""){
				errstr += "[" + $("#lbl_Person_in_custody_id").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[Person in custody]不可空白!
      }
    }
		if ($("input[name='Is_no_unclaimed']:checked").length == 0){
			errstr += "[" + $("#lbl_Is_no_unclaimed").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Is no unclaimed items]尚未選取!
    }
		 // 20240909 Eason 是否有填寫離職問卷
		// if($$("[id*=check_form] input:checked").length == 0){
		// 	errstr += "[" + $$("#lbl_check_form").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[check_form]尚未選取!
    // } 20240909 Eason Marked
 
    
    if (HiddenCheckLink.value !== "Y") { // 檢查 HiddenCheckLink 的 value 屬性
      errstr +=
        "[" +
        $("#Label179").html() +
        "]" +
        "未填寫離職問卷" +
        "\n"; 
    }

		if ($("#labor_type").val() == "IDL"){	//間接員工才須上傳附件
      var strAttachName1 = querySNSI009(formId, "001", locale, "", "", "");
      var strAttachName2 = querySNSI009(formId, "002", locale, "", "", "");
      var ary_Attach = [];
			ary_Attach = strAttachName1.split("$");	//$$表示以$$分隔error code		
			if (!checFileWithFileName(ary_Attach[0], "Applicant")){
        temp_errMsg = querySNSI009(formId, "003", locale, "", "", "");
        temp_errMsg = temp_errMsg.replace("@@1", ary_Attach[0]);
				errstr += temp_errMsg + "\n";	//[請附檔]，檔名規則: @@1	strAttachName1
      }
      // ary_Attach = strAttachName2.split("$$");	//$$表示以$$分隔error code
      // if (!checFileWithFileName(ary_Attach[0], "Applicant")){
      // 	temp_errMsg = querySNSI009(formId, "003", locale, "", "", "");
      // 	temp_errMsg = temp_errMsg.replace("@@1", ary_Attach[0]);
      // 	errstr += temp_errMsg + "\n";	//[請附檔]，檔名規則: @@1	strAttachName2
      // }
    }
  }
	if (activityId == "Successor"){	//交接人
    if ($("input[name='Completion_of_handover']:checked").length == 0){
			errstr += "[" + $("#lbl_Completion_of_handover").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Completion of Handover]尚未選取!
    }
  }
	if (activityId == "DCC1"){	//DCC
    if ($("input[name='Confirm_RD_log']:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_RD_log").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm RD log]尚未選取!
    }
  }
	//if (activityId == "GeneralAffairs01"){	//總務01 //20260114 Dillan marked
	if (activityId == "GeneralAffairs01" || activityId == "SVNGeneralAffairs01"){	//總務01 //20260114 Dillan add
		if ($("input[name='Confirm_fixed_assets']:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_fixed_assets").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm Fixed Assets]尚未選取!
    }
  }
	//if (activityId == "GeneralAffairs02"){	//總務02 //20260114 Dillan marked
	if (activityId == "GeneralAffairs02" || activityId == "SVNGeneralAffairs02"){	//總務02 //20260114 Dillan add
		if ($("#Receive_Parking_Permit").val() == ""){
			errstr += "[" + $("#lbl_Receive_Parking_Permit").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Receive Parking Permit]尚未選取!
    }
  }
	//if (activityId == "Finance01"){	//財務 //20260114 Dillan marked
	if (activityId == "Finance01" || activityId == "SVNFinance01"){	//財務 //20260114 Dillan add
		if ($("#Seal").val() == ""){
			errstr += "[" + $("#lbl_Seal").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Seal]尚未選取!
    }
		if ($("#Petty_Cash_Custodian").val() == ""){
			errstr += "[" + $("#lbl_Petty_Cash_Custodian").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Petty Cash Custodian]尚未選取!
    }
  }
	//if (activityId == "HR01"){	//HR01 //20260114 Dillan marked
	if (activityId == "HR01" || activityId == "SVNHR01"){	//HR01 //20260114 Dillan add
		if ($("input[name='Confirm_training_expats_fee']:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_training_expats_fee").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm Training for expats fee]尚未選取!
    }
  }
	//if (activityId == "HR02"){	//HR02 //20260114 Dillan marked
	if (activityId == "HR02" || activityId == "SVNHR02"){	//HR02 //20260114 Dillan add
		if ($("input[name='IsConfirm_HRPortal']:checked").length == 0){
			errstr += "[" + $("#lbl_IsConfirm_HRPortal").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm HR Portal application form and attendance]尚未選取!
    }
  }
	if (activityId == "HR03BP" || activityId == "HR03Leader2" || activityId == "SVNHR03BP" || activityId == "SVNHR03Leader2"){	//HR03 //20260114 Dillan add
		if ($("input[name='Exit_interviews']:checked").length == 0){
			errstr += "[" + $("#lbl_Exit_interviews").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Exit interviews]尚未選取!
    }
	  //20250107 Eason (S)
    if (HiddenCheckLink92.value !== "Y") { // 檢查 HiddenCheckLink 的 value 屬性
      errstr +=
        "[" +
        '填寫離職面談問卷'+
        "]" +
        "未填寫離職面談問卷" +
        "\n"; 
    }
	  //20250107 Eason (E)
  }

	//if (activityId == "HR04"){	//HR04 //20260114 Dillan marked
	if (activityId == "HR04" || activityId == "SVNHR04"){	//HR04 //20260114 Dillan add
		if ($("input[name='CFM_Maternity_Child_allowance']:checked").length == 0){
			errstr += "[" + $("#lbl_CFM_Maternity_Child_allowance").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm Maternity and childcare allowance]尚未選取!
    }
		if ($("input[name='Confirm_Uniform_fee']:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_Uniform_fee").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm Uniform fee(MFG)]尚未選取!
    }
		if ($("input[name='Confirm_Group_meals']:checked").length == 0){
			errstr += "[" + $("#lbl_Confirm_Group_meals").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm Group meals fee(Deductible)]尚未選取!
    }
		if ($("#Confirm_Cards").val() == ""){
			errstr += "[" + $("#lbl_Confirm_Cards").html() + "]" + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";	//[Confirm ID Card/Access Card/Desk Card/Elevator Card]尚未選取!
    }
  }
	if (activityId == "MIS01"){	//MIS01
		if ($("#Closed_System_Privileges_NO").val() == ""){
      errstr += querySNSI009(formId, "004", locale, "", "", "") + "\n"; //請先開立[關閉系統權限申請單]，再簽核
    }
  }

	//assign表單單號到流程變數formserialnumber去，給呼叫JSP用
  if (senao176m002.innerHTML != "undefined") {
    var TempString = new String(senao176m002.innerHTML);
		//ajax_ProcessAccessor.assignRelevantData(processInstOID, "formserialnumber", TempString);
  } else {
		errorMsg += '取得流程變數-單號有誤，請洽MIS!!\n';
    alert(errorMsg);
    return false;
  }

  if(form_ou.value == 'senao'){
	  hdn_bp_group.value = getHRBPGroupMain();
  }else{
	  hdn_bp_group.value = "[" + form_ou.value + "]SN006_03_HR第一關經辦"; //20241014 Neil
  }

  if (activityId == 'DepartmentManager2' && !Confirm_Handover_completed_0.checked){	//Department Manager2
    errstr += "請確認確認同仁完成交接是否完成";
  }
	
	if (errstr == ""){
		if (activityId == "Requester") {	//填單人	
			if (workItemSource !== '1' && workItemSource !== '2'){
        prepareForFlow();
        genSubject();
      }
    }
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
  //form_ou.disabled = true;//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );

  //表單代號
  $('#senao176m001').val(type);
  $('#senao176m001').attr('disabled', 'true');

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
/**
 * 設定各關卡的欄位Disabled
 */
function SetInputDisabled(){
  $("#Exit_interviews_remark").hide(); // 20240312 SENAO10100004180 Jimbo 新增離職面談備註(僅面談主管可見)
  
  disableAttachment_shell(activityname);
  if (("Requester;Applicant;MFGAsst;HR03Leader;HR03Leader2;HR04".indexOf(activityId) <= -1) && (activityId.indexOf("DepartmentManager") <= -1) && (activityId.indexOf("Decision") <= -1)){
    $("#Supervisor_opinion").hide();
    $("#Resignation_reason").hide();
  }
  if (activityId == "Requester"){	//HR+Kim(主管級由Kim發起)
		$("#userid").css({"background-color": EDIT_BGCOLOR});
		$("#user_name").css({"background-color": EDIT_BGCOLOR});
		$("#is_manager").css({"background-color": EDIT_BGCOLOR});
		$("#application_date").css({"background-color": EDIT_BGCOLOR});
		$("#last_date").css({"background-color": EDIT_BGCOLOR});
		$("#Is_Approve_MFG_Asst").css({"background-color": EDIT_BGCOLOR});
  }
  if (activityId == "DepartmentManager1"){	//單位主管
		$("#Confirm_last_date").css({"background-color": EDIT_BGCOLOR});
		$("#Successor_id").css({"background-color": EDIT_BGCOLOR});
		$("#Successor_name").css({"background-color": EDIT_BGCOLOR});
		if ($("#labor_type").val()=="IDL"){	//間接員工才須指派交接人
			$("#Successor_id").css({"background-color": EDIT_BGCOLOR});
			$("#Successor_name").css({"background-color": EDIT_BGCOLOR});
    }
  }
	//if (activityId == "Applicant" || activityId == "MFGAsst"){	//離職申請人 / 製造助理 //20260114 Dillan marked
  if (activityId == "Applicant" || activityId == "MFGAsst" || activityId == "SVNMFGAsst"){	//離職申請人 / 製造助理 //20260114 Dillan add
		$("#Is_custody_seal").css({"background-color": EDIT_BGCOLOR});
		$("#Is_no_unclaimed").css({"background-color": EDIT_BGCOLOR});
		$("#check_form").css({"background-color": EDIT_BGCOLOR});

		if ($("#Is_custody_seal").val()=="Y"){	//[Is custody seal] = Y
			$("#Person_in_custody_id").css({"background-color": EDIT_BGCOLOR});
			$("#Person_in_custody_name").css({"background-color": EDIT_BGCOLOR});
			$("#Person_in_custody_id_b1").attr("disabled", false);
		}
		if ($("#Is_custody_seal").val()=="N"){	//[Is custody seal] = N
			$("#Person_in_custody_id").css({"background-color": DEFAULT_BGCOLOR});
			$("#Person_in_custody_name").css({"background-color": DEFAULT_BGCOLOR});
			$("#Person_in_custody_id_b1").attr("disabled", true);
		}

    $("#Supervisor_opinion").hide();
  }
  if (activityId == "Successor"){	//交接人
		$("#Completion_of_handover").css({"background-color": EDIT_BGCOLOR});
  }
  if (activityId == "DCC1") {
    //DCC
    $("#Confirm_RD_log").css({ "background-color": EDIT_BGCOLOR });
  }
  //if (activityId == "GeneralAffairs01") { //20260114 Dillan marked
  if (activityId == "GeneralAffairs01" || activityId == "SVNGeneralAffairs01") { //20260114 Dillan add
    //總務01
    $("#Confirm_fixed_assets").css({ "background-color": EDIT_BGCOLOR });
  }
  //if (activityId == "GeneralAffairs02") { //20260114 Dillan marked
  if (activityId == "GeneralAffairs02" || activityId == "SVNGeneralAffairs02") { //20260114 Dillan add
    //總務02
    $("#Receive_Parking_Permit").css({ "background-color": EDIT_BGCOLOR });
  }
  //if (activityId == "Finance01") { //20260114 Dillan marked
  if (activityId == "Finance01" || activityId == "SVNFinance01") { //20260114 Dillan add
    //財務
    $("#Seal").css({ "background-color": EDIT_BGCOLOR });
    $("#Petty_Cash_Custodian").css({ "background-color": EDIT_BGCOLOR });
  }
  //if (activityId == "HR01") {//20260114 Dillan marked
  if (activityId == "HR01" || activityId == "SVNHR01") {//20260114 Dillan add
    //HR01
    $("#Confirm_training_expats_fee").css({"background-color": EDIT_BGCOLOR});
  }
  //if (activityId == "HR02") {//20260114 Dillan marked
  if (activityId == "HR02" || activityId == "SVNHR02") {//20260114 Dillan add
    //HR02
    $("#IsConfirm_HRPortal").css({ "background-color": EDIT_BGCOLOR });
  }

   // 20240909 Eason  因H03Leader關卡會分6個月以上以下，分別簽核到不同人，所以先用隱藏藍未來紀錄當前的userId只限寫人及HR04可回看
  if(userId === HiddenUserId.value || checkIsUnitPriceViewer(userId )==='Y'){
    $("#Exit_interviews_remark").attr("readonly", true).prop("disabled", true);
    $("#Exit_interviews_remark").show();
  }

  //if (activityId == "HR03BP" || activityId == "HR03Leader2" || activityId == "HR04" || activityId=="HR03Leader") { //20260114 Dillan marked
  if (activityId == "HR03BP" || activityId == "HR03Leader2" || activityId == "HR04" || activityId=="HR03Leader" || activityId == "SVNHR03BP" || activityId == "SVNHR03Leader2" || activityId == "SVNHR04" || activityId=="SVNHR03Leader") { //20260114 Dillan marked
		// 20250107 Eason (S)
		if(HiddenCheckLink92.value !== "Y"){
			$("#Exit_interviews").css({ "background-color": EDIT_BGCOLOR });
			$("#Exit_interviews").css({
				"pointer-events": "none",   // 禁止所有指針事件（點擊、滑鼠移動等）
				"opacity": "0.5",           // 使元素透明，看起來像禁用狀態
				"user-select": "none"       // 禁止選擇文本
			});
		}
		// 20250107	Eason (E)   
				
			// 20240312 SENAO10100004180 Jimbo 新增離職面談備註(僅面談主管可見)
		$("#Exit_interviews_remark").attr("readonly", false).prop("disabled", false);
		$("#Exit_interviews_remark").css({"background-color": EDIT_BGCOLOR});
		$("#Exit_interviews_remark").show();
		HiddenUserId.value =userId;
		//20250107 Eaons (S)
		$("#Link92").css("display", "block");
  }else{
		$("#Link92").css("display", "none");
		//20250107 Eaons (E)
  }
	//if (activityId == "HR04"){	//HR04 //20260114 Dillan marked
	if (activityId == "HR04" || activityId == "SVNHR04"){	//HR04 //20260114 Dillan add
		$("#CFM_Maternity_Child_allowance").css({"background-color": EDIT_BGCOLOR});
		$("#Confirm_Uniform_fee").css({"background-color": EDIT_BGCOLOR});
		$("#Confirm_Group_meals").css({"background-color": EDIT_BGCOLOR});
		$("#Confirm_Cards").css({"background-color": EDIT_BGCOLOR});
  }
	if (activityId == "MIS01"){	//MIS01
		$("#Closed_System_Privileges_NO").css({"background-color": EDIT_BGCOLOR});
  }
    //20240812 Eason
	if (activityId == "Applicant") {
		$("#Link90").css("display", "block");
		$("#check_form").css("display", "block");
		$("#lbl_check_form").css("display", "block");
		$("#Label179").css("display", "block");
	}else{
		$("#Link90").css("display", "none");
		$("#check_form").css("display", "none");
		$("#lbl_check_form").css("display", "none");
		$("#Label179").css("display", "none");
  }
}
/**
 *開放/關閉點選非自己上傳的附件
 *disableAttachment_shell
 *@param activity: 關卡
 */
function disableAttachment_shell(activity) {
	var tAS = document.getElementById('Attachment_shell');
  var strAttachName1 = querySNSI009(formId, "001", locale, "", "", "");
  var strAttachName2 = querySNSI009(formId, "002", locale, "", "", "");
  var ary_Attach = [];
	ary_Attach = strAttachName1.split("$$");	//$$表示以$$分隔error code	
  strAttachName1 = ary_Attach[0];
	ary_Attach = strAttachName2.split("$$");	//$$表示以$$分隔error code	
  strAttachName2 = ary_Attach[0];
	if (document.getElementById("Attachment_shell") != null){
    for (var i = 1; i < tAS.rows.length; i++) {
      var activity_AS = tAS.rows[i].cells[6].innerHTML;
      var OrigFileName = tAS.rows[i].cells[1].innerHTML;
      var Desc = tAS.rows[i].cells[2].innerHTML;
			var FileName = '';
			FileName = OrigFileName.replace(/href="(.*?)"/ig,'');
			if (FileName.indexOf(strAttachName1) > -1){
      	//20230704 Calvin
				if (((activity_AS != activity) && (activity.indexOf("Department Manager") <= -1) && ((activityId.indexOf("Decision1") <= -1) && (activityId.indexOf("SVNDecision1") <= -1)) //20260114 Dillan add
					&& ((activity.indexOf("HR04") <= -1) && (activity.indexOf("SVNHR04") <= -1))) && (activityId.indexOf("Requester") <= -1)//20260114 Dillan add
					&& (activity.indexOf("HR03BP") <= -1) && (activity.indexOf("SVNHR03BP") <= -1) //20260114 Dillab add
					&& activity.indexOf("Successor") <= -1 && activity.indexOf("HR03Leader") <= -1 && activity.indexOf("SVNHR03Leader") <= -1){	//工作交接清冊 開放 單位主管、Decision1、最後一關的人資開放下載 //20240514 Steve [SENAO10100005829] 開放填單人無論關卡皆可下載文件 //20260114 Dillan add
						tAS.rows[i].cells[1].innerHTML = FileName;
        }
      }
			if (FileName.indexOf(strAttachName2) > -1){
				if (((activity_AS != activity) && (activity.indexOf("HR03Leader") <= -1) && (activity.indexOf("HR03Leader2") <= -1) && (activity.indexOf("HR04") <= -1) && (activity.indexOf("SVNHR03Leader") <= -1) && (activity.indexOf("SVNHR03Leader2") <= -1) && (activity.indexOf("SVNHR04") <= -1)) || (activityId.indexOf("Requester") <= -1)){	//離職人員問卷 開放 面談人資及最後一關的人資開放下載 //20260114 Dillan add
          //20240514 Steve [SENAO10100005829] 開放填單人無論關卡皆可下載文件
          tAS.rows[i].cells[1].innerHTML = FileName;
        }
      }
    }
  }
}
/**
 * 檢查是否擁有權限可看到單價欄位，依下列判斷
 * (1)SalesRep群組參數 (2)可看訂單單價人員Group (3)業務關卡
 * @param {string} empId 登入者
 * @returns isViewer true or false
 */
function checkIsUnitPriceViewer(empId) {
  var result = "N";
  var multiUserId = "";
  var userInfoArray = [];
  var userIdArray = [];
  var groupId ="SN176_18"
      userInfoArray = queryStdGroupById(groupId);
      userIdArray = getUserIdArray(userInfoArray);
      multiUserId = userIdArray.join();
      if (multiUserId.search(empId) > -1) {
          result = "Y";
      }
  
  return result;
}
/**
 * 將UserInfoArray取出UserId，並放入新陣列
 * @param {object} userInfoArray
 * @returns userIdArray
 */
function getUserIdArray(userInfoArray) {
  var userInfo = {};
  var userIdArray = [];
  var i;
  if (userInfoArray != null) {
		for (i = 0 ; i < userInfoArray.length ; i++) {
      userInfo = userInfoArray[i];
      userIdArray.push(userInfo.userId);
    }
  }
  return userIdArray;
}

/**
 * 檢查人員是否為群組使用者
 * @param {string} empId
 * @param {string} groupId
 * @returns result true or false
 */
function checkIsGroupUser(empId, groupId) {
  var result = false;
  var multiUserId = "";
  var userInfoArray = [];
  var userIdArray = [];
  if (empId != "" && groupId != "") {
    userInfoArray = queryStdGroupById(groupId);
    userIdArray = getUserIdArray(userInfoArray);
    multiUserId = userIdArray.join();
    if (multiUserId.search(empId) > -1) {
      result = true;
    }
  }
  return result;
}
/**
 * 準備流程所需變數
 */
function prepareForFlow() {
  var strDecision = "";
  var DeptInfo = {};
  //20250911 Dillan marked(s)
  //DIV-處級; BU-事業部; GM-總經理; CEO-董事長
	// if ($$("input[name=is_manager][value='Y']").is(':checked')){	//主管職皆須簽核到董事長
  //   strDecision = "CEO";
  // }
	// if ($$("input[name=is_manager][value='N']").is(':checked')){	//非主管職
	// 	if (($$("#job_level").val().indexOf("W") >= 0) || ($$("#job_level").val().indexOf("A") >= 0)){	//W, A級簽核到處級
  //     strDecision = "DIV";
  //   }
	// 	if ($$("#job_level").val().indexOf("S") >= 0){	//S級有事業部則簽到事業部主管, 無事業部則簽到總經理
  //     DeptInfo = {};
  //     DeptInfo = queryDeptInfoById($$("#Department").val());
  //     if (!$$.isEmptyObject(DeptInfo)) {
	// 			for (var i = 0; i <= 5; i++){
	// 				if (i > 0){				
  //           DeptInfo = queryDeptInfoById(DeptInfo.upperdeptid);
  //         }
	// 				if (parseInt(DeptInfo.upperdeptlevel) <= 2){	//上階部門在事業部(含)以上
	// 					if (parseInt(DeptInfo.upperdeptlevel) == 2){	//上階部門在事業部
  //             strDecision = "BU";
  //           }
	// 					if (parseInt(DeptInfo.upperdeptlevel) == 1){	//上階部門在總經理
  //             strDecision = "GM";
  //           }
	// 					if (parseInt(DeptInfo.upperdeptlevel) == 0){	//上階部門在董事長
  //             strDecision = "CEO";
  //           }
  //           break;
  //         }
  //       }
  //     }
  //   }
	// 	if (($$("#job_level").val().indexOf("P") >= 0) || ($$("#job_level").val().indexOf("M") >= 0)){	//P級以上須簽核到董事長
  //     strDecision = "CEO";
  //   }
  // }
  //20250911 Dillan marked(e)
  //20250911 Dillan add(s) 新核決層級
  //SEC-課級; DIV-處級; BU-事業部; GM-總經理; CEO-董事長
  if ($("#is_manager").val()=="Y"){	//主管職皆須簽核到董事長
     strDecision = "CEO";
  }
  if ($("#is_manager").val()=="N"){	//非主管職
    if (($("#hdn_EmployeeJobCName").val().indexOf("M") >= 0)){	//先判斷是否為M級
   	 	let num = parseInt($("#hdn_EmployeeJobCName").val().replace(/\D/g, ''), 10); //
      if (num>= 5){ //M-副總級(含以上)
        strDecision = "CEO";
      }
      else if (num>= 2){ //M-處級、協理級(含以上)
        strDecision = "GM";
      }
      else {  //M理級(含)以下
        strDecision = "BU";
      }
    }
    else if (($("#hdn_EmployeeJobCName").val().indexOf("P") >= 0)){	//P級
      strDecision = "BU";
    }
    else if (($("#hdn_EmployeeJobCName").val().indexOf("A") >= 0) || ($("#hdn_EmployeeJobCName").val().indexOf("S") >= 0)){	//S級(含)以下	
      strDecision = "DIV";
    }
    else{//W 直接人員 課級
      strDecision = "SEC";
    }
  }  
  //20250911 Dillan add(e) 新核決層級
  $("#hdn_decision").val(strDecision);

  var Direct_Manager = queryManagerByEmpId($("#userid").val());
  $("#hdn_manager").val(Direct_Manager);

  //設定行動簽核顥示的值 Radio
	if ($("#is_manager").val() == "Y") {
		$("#hdn_m_is_manager").val($("#is_manager option[value='Y']").text());  // "是"
	} else if ($("#is_manager").val() == "N") {
		$("#hdn_m_is_manager").val($("#is_manager option[value='N']").text());  // "否"
	}

	if ($("#labor_type").val()== "Y"){
		$("#hdn_m_labor_type").val($("#labor_type option[value='Y']").text());	//直間接員工 直接
	}else if ($("#labor_type").val()== "N"){
		$("#hdn_m_labor_type").val($("#labor_type option[value='N']").text());	//直間接員工 間接
  }

  // 20240312 SENAO10100004180 Jimbo 計算在職月數
  var startDate = new Date($("#Date_of_Reported").val());
  var endDate = new Date($("#last_date").val());
  monthsBetweenDates(startDate, endDate) >= 6
	  ? $("#hdn_is_onboard_longer_or_equal_to_6_months").val('Y')
	  : $("#hdn_is_onboard_longer_or_equal_to_6_months").val('N');
}
// 20240312 SENAO10100004180 Jimbo 計算在職月數
function monthsBetweenDates(startDate, endDate) {
  var startYear = startDate.getFullYear();
  var startMonth = startDate.getMonth();
  var endYear = endDate.getFullYear();
  var endMonth = endDate.getMonth();

  return (endYear - startYear) * 12 + (endMonth - startMonth);
}
/**
 * 搜尋設定檔是否在某值當中
 * @param {string} value
 * @param {string} snsiId
 * @returns result "Y" or "N"
 */
function isSNSI003InValue(value, snsiId) {
  var result = "N";
  if (value !== "" && snsiId !== "") {
    if (value.search(querySNSI003_Org(snsiId)) > -1) {
      result = "Y";
    }
  }
  return result;
}
/**
 * 搜尋某值是否在設定檔當中
 * @param {string} snsiId
 * @param {string} value
 * @returns result "Y" or "N"
 */
function isValueInSNSI003(snsiId, value) {
  var result = "N";
  if (value !== "" && snsiId !== "") {
    if (querySNSI003_Org(snsiId).search(value) > -1) {
      result = "Y";
    }
  }
  return result;
}
/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    const prefixSubject = "[" + $("#last_date").val() + "]" +  $("#Department_name").val() + "_" + $("#userid").val() + "-" + $("#user_name").val() + "_" + $("#senao176m001").val();

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
 *檢查附件與附件名稱
 *checFileWithFileName(檢查的字元)
 *@param strContainChar: 檔名中所需包含的字串,若不需限定檔名,則傳入空字串即不檢查檔名
 */
function checFileWithFileName(strContainChar, activity) {
  var CheckFileName = false;
  var strSTDFileName = "";
  //strContainChar = strContainChar.toUpperCase();
	var tAS = document.getElementById('_cuzfileChooser_selectedItems');
	if (document.getElementById("_cuzfileChooser_selectedItems") != null){
    for (var i = 0; i < tAS.rows.length; i++) {
      var strFileName = tAS.rows[i].cells[1].innerText;
      var activity_AS = tAS.rows[i].cells[5].innerText;
			if (strContainChar != "" && activity_AS == activity){
				if (strFileName.indexOf(strContainChar) > -1){
          CheckFileName = true;
          break;
        }
      }
    }
  }
  return CheckFileName;
}
function sleep(ms){
	var starttime= new Date().getTime();
	do{
	}	while((new Date().getTime() - starttime) < ms);
}
/*放到共用BPMglobal.js
function setActivityFieldControl(){//根據關卡開放欄位
  var sqlId = "BPM_GetActivityEditableFields";
	var tParams = [];
	var data = [];    
	tParams.push(formId);
	tParams.push(activityId);
	data = ajaxGetData(invokeURL + sqlId, {
		formId:tParams[0],
		activityId:tParams[1]
	})
	if(data[0].result == undefined){
		if (data.length > 0) {
      // 1. 先全部鎖住
      $("input, select, textarea, button").prop("disabled", true);
			for (var i = 0; i < data.length; i++) {
        var fieldId = data[i].FIELD_ID;
        $("#" + fieldId).prop("disabled", false) ;
        $("input[name='" + fieldId + "'], select[name='" + fieldId + "'], textarea[name='" + fieldId + "']").prop("disabled", false);
      }       
		}
	}
}*/
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function loadSavedGridData() {
  const grid1Data = $("#Grid1").val();
  
  // 檢查隱藏欄位是否有資料
  if (grid1Data && grid1Data.length > 1) {
    try {
      // 解析 JSON 資料
      const gridData = JSON.parse(grid1Data);
      
      // 檢查是否有資料
      if (Array.isArray(gridData) && gridData.length > 0) {
        // 使用您現有的 setGridData 函數載入資料
        setGridData(0, gridData);  // 0 是 Grid1 的 id
        console.log(`載入 ${gridData.length} 筆 Grid 資料`);
      }
    } catch (error) {
      console.error("Grid 資料解析失敗:", error);
    }
  }
}
function createFrmGrid(id) { //create jagrid
  let options = {};
  let $grid;
  let gridCol = {};
  $grid = $('#' + frmGridList[id].gid);
  //$.jgrid.gridUnload(frmGridList[id].gid);
  options = frmGridList[id];
  switch (id) {
    case 0:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao176m002').val()//表單單號
      };
      $grid.createJqGrid(options);
      getGridColModel(id);
      break;
    case 1:
      break;
  }
  gridCol = getGridColModel(id);
  if (gridCol.label.length > 0) {
    Grid1Columns.push(gridCol.label);
    Grid1ColumnIds.push(gridCol.name);
  }
}
/**
 * 取得Grid內的數據
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridData(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridData = [];
  if ($grid.length > 0) {
    gridData = $grid.getGridParam("data");
  }

  return gridData;
}
/**
 * 替換Grid內的數據
 * @param {*} id:編號 
 * @param {*} dataSrc:數據
 * @returns true
 */
function setGridData(id, dataSrc) {

  let $grid = $("#" + frmGridList[id].gid);
  if ($grid.length > 0) {
    $grid.jqGrid("clearGridData")
      .jqGrid("setGridParam", {
        data: dataSrc // 要替換的資料 dataSrc
      })
      .trigger("reloadGrid");  // reload顯示新資料
  }
  return true;
}
/**
 * 取得Grid內的數據colmodel
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridColModel(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridcolModel = [];
  let gridcolLabel = [];
  let gridcolName = [];
  if ($grid.length > 0 && $grid[0].grid) {
    gridcolModel = $grid.getGridParam("colModel")|| [];
    for (let i = 0; i < gridcolModel.length; i++) {
      gridcolLabel.push(gridcolModel[i].label);
      gridcolName.push(gridcolModel[i].name);
    }
  }

  return { colModel: gridcolModel, label: gridcolLabel, name: gridcolName };
}
/**
 * [Grid] 取得單身GRID要新增資料
 */
function getRowData(id, rowid) {
  let data = {};
  let binding = GridBinding[id];
  let columnIds = Grid1ColumnIds[id];
  for (let i = 0; i < binding.length; i++) {
    let value = "";
    if (binding[i] != "") {
      value = $("*[name='" + binding[i] + "']").val();
      if (value == undefined) {
        value = "";
      }
    } else { //項次
      value = rowid;
    }
    data[columnIds[i]] = value;
  }
  return data;
}
/**
 * [Grid] 新增單身GRID資料
 
function gridaddRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}*/
/**
 * [Grid] 修改單身GRID資料
 */
function grideditRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  data = getRowData(id, rowid);
  $grid.jqGrid('setRowData', rowid, data);
}
/**
 * [Grid] 刪除單身GRID資料
 */
function griddeleteRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  if (confirm('確認刪除?')) {
    $grid.jqGrid('delRowData', rowid);
  }

}
/**
 * [Grid] 重新計算單身Grid項次
 */
function refreshRowNo(id, key) {
  let data = getGridData(id);
  for (let i = 0; i < data.length; i++) {
    data[i][key] = i + 1;
  }
  setGridData(id, data);
}
/**
 * [Grid] 取的Grid的位置
 */
function getGridSelectRow(id) {

  let rowId = $("#" + frmGridList[id].gid).jqGrid('getGridParam', 'selrow');
  console.log(rowId);
  return rowId;
}
/**
 * [Grid] 清除單身對應欄位資料
 */
function clearBinding(id) {
  let binding = GridBinding[id];
  for (let i = 0; i < binding.length; i++) {
    if (binding[i].length > 0) {
      $("*[name='" + binding[i] + "']").val('');
    }
  }
}
//檢查grid欄位
function chkGrid1Value(){
	var errstr="";
	return errstr;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {
}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#userid_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('userid','user_name','Department','Department_name');//回傳元件參數
  let tReturnFunction = new Array("userid_onchange()"); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#Successor_b1').on('click', function () { //指派交接人開窗
  // sessionStorage 存入數據
  let tTitle = "交接人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('Successor_id','Successor_name');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#Person_in_custody_id_b1').on('click', function () { //移交保管人開窗
  // sessionStorage 存入數據
  let tTitle = "保管人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('Person_in_custody_id','Person_in_custody_name');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/**
 * 以Group ID查Group內員工資料
 * @param {string} groupId
 * @returns userInfoArray 員工相關資料陣列
 */
function queryStdGroupById(groupId) {
  var userInfoArray = [];
  var userInfo = {};
  var sqlId = "BPM_getGroupUserIDbyOrg";
  var tParams = [];
  if (groupId != "") {
    tParams.push(groupId);
    tParams.push($("#form_ou").val());
		var pData = [];    
		pData = ajaxGetData(invokeURL + sqlId, {
			GID:tParams[0],
			CID:tParams[1]
		})
		if(pData[0].result == undefined){
			if(pData.length > 0 ){
				var i;
				for (i = 0 ; i < pData.length ; i++) {
          userInfo = {};
          userInfo.userId = pData[i].USERID; //員工ID
          userInfo.userName = pData[i].USER_NAME; //員工名稱
          userInfoArray.push(userInfo);
        }
			}
		}
  }
  return userInfoArray;
}
/**
 *	抓離職人員在Oracle ERP的資產帶到Grid1
 * @param {ApplicantId} userid
 */
function PersonalAssets(ApplicantId){
  var sqlId = "BPM_ERP_SENAO021_01";
  var tGrid1Data = getGridData(0); 
  var tParams = [];
  tParams.push("S" + ApplicantId);
  tParams.push($("#form_ou").val().toUpperCase());
	var pData = [];    
	pData = ajaxGetData(invokeURL + sqlId, {
		EMPLOYEE_NUMBER:tParams[0],
		BOOK_TYPE_CODE:tParams[1]
	})
	if(pData[0].result == undefined){
		if(pData.length > 0 ){
			var tmpGridAry = new Array();
			for (var i = 0; i < pData.length; i++){				
          var addAry = new Array();
          tmpGridAry.push(addAry);
          tmpGridAry[i][0] = i + 1; //SN
          tmpGridAry[i][1] = pData[i].TAG_NUMBER; //財產編號
          tmpGridAry[i][2] = pData[i].DESCRIPITION; //財產名稱
          tmpGridAry[i][3] = pData[i].DESCRIPITION1; //資產類別
          tmpGridAry[i][4] = pData[i].UNITS_ASSIGNED; //原保管數量
          tmpGridAry[i][5] = pData[i].CONCATENATED_SEGMENTS1; //Location
        }
        /*Grid1Obj.reload(tmpGridAry);
        Grid1.value = Grid1Obj.toArrayString();*/

				// 1. 載入資料到 Grid (使用您現有的 setGridData 函數)
				setGridData(0, tmpGridAry);
				// 2. 將 Grid 資料轉成 JSON 字串存到隱藏欄位
				$("#Grid1").val(JSON.stringify(tGrid1Data));
		}
	}
}
/**
 * 查詢表單的Processserialnumber並回傳
 * @param {string} sqlId
 * @param {string} ApplicantId
 * @returns StringArray Processserialnumber字串陣列
 */
function queryProcessserialnumber(sqlId, ApplicantId) {
  var result = "";
  var strArray = [];
  var tParams = [];
  var tTypes = [];
  if (sqlId != "" && ApplicantId != "") {
    tParams.push(ApplicantId);
    var pData = [];    
		pData = ajaxGetData(invokeURL + sqlId, {
			ApplicantId:tParams[0]
		})
		if(pData[0].result == undefined){
			if(pData.length > 0 ){
				for (var i = 0 ; i < pData.length ; i++) {
          strArray.push(pData[i].PROCESSSERIALNUMBER);
        }
			}
		}
		if (strArray.length > 0){
      result = strArray.join();
    }
  }
  return result;
}
function getHRBPGroupMain(){
  var bp_group = "";
  var chkDeptArray = "";
  //向上取得5層單位
  var sqlId = "BPM_SENAO006_02";
  var tParams = [];
  var data = [];  
	if ($("#Department").val().trim() != "") {
		tParams.push(form_ou.value);
		tParams.push($("#Department").val());
		data = ajaxGetData(invokeURL + sqlId, {
			form_ou:tParams[0],
			dept_id:tParams[1]
		})
		if(data[0].result == undefined){
			if (data.length > 0) {          
				chkDeptArray = data[0].FIVELAYER_DEPTID.split(";");
				for(var i=0;i<chkDeptArray.length;i++){
					if(bp_group.trim() == "" && chkDeptArray[i] != null)bp_group = getHRBPGroup(chkDeptArray[i]);
				}  
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
		form_ou:tParams[0],
		dept_id:tParams[1]
	})
	if(data[0].result == undefined){
		if (data.length > 0) {
			if(chkDeptid == data[0].SNSI003003)bp_group_detail = data[0].GRPNAME;              
		}
	}
  return bp_group_detail;
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
	取得人員資料相關資訊
*/
function userid_onchange(){
	applicant = $('#userid').val();//發起流程時參數 申請人ID
  applicantDept = $('#Department').val();//發起流程時參數 申請人部門
	if ($("#userid").val() != ""){
		//20260114 Dillan add(s)
		if(form_ou.value == "svn"){
			$("#job_level").prop("readonly", false);
			$("#job_title").prop("readonly", false);
			$("#Date_of_Reported").prop("readonly", false);
			$("#labor_type :input").prop("disabled", false);
		}else{
			var sqlid = "BPM_HR_SENAO176_01";
			var tParams = new Array();
			tParams.push($("#userid").val());
			tParams.push($("#form_ou").val());
			var dataArray = [];    
			dataArray = ajaxGetData(invokeURL + sqlid, {
				USERID:tParams[0],
				FORM_OU:tParams[1]
			})
			if(dataArray[0].result == undefined){
				if(dataArray.length > 0 ){
					$("#userid").val(dataArray[0].userid);
					$("#user_name").val(dataArray[0].user_name);
					$("#Department").val(dataArray[0].Department);
					$("#Department_name").val(dataArray[0].Department_name);
					$("#job_level").val(dataArray[0].job_level);
					$("#job_title").val(dataArray[0].job_title);
					$("#Date_of_Reported").val(dataArray[0].Date_of_Reported);
					$("#labor_type").val(dataArray[0].labor_type);
					$("#hdn_EmployeeJobCName").val(dataArray[0].JobCName);//20251117 Dillan add //用來核決層級判斷
					$("input[name=labor_type][value='" + dataArray[0].labor_type + "']").attr('checked',true); 
					if (dataArray[0].labor_type == "DL") {  // 直接員工預設為是
						$("#Is_Approve_MFG_Asst").val("Y");
					} else if (dataArray[0].labor_type == "IDL") {  // 間接員工預設為否
						$("#Is_Approve_MFG_Asst").val("N");
					}
				}else{
					alert("No data.");
					$("#userid").val("");
				}
			}else{
				alert("No data.");
				$("#userid").val("");
			}
		}

 	}
  	return true;
}
/**
	Last date of work
*/
function last_date_onchange(){
	if ($("#last_date").val() == ""){
    $("#Effective_Released_Date").val("");
	}else{
    var datelast_date = new Date($("#last_date").val());
    var dateEffective_Released_Date = datelast_date.addDays(1);
		var strEffective_Released_Date = dateEffective_Released_Date.yyyymmdd().substr(0, 4) + "/" + dateEffective_Released_Date.yyyymmdd().substr(4, 2) + "/" + dateEffective_Released_Date.yyyymmdd().substr(6, 2);
    $("#Effective_Released_Date").val(strEffective_Released_Date);
  }
}
/**
 * 開啟資產移轉單
 * Transfer_of_fixed_assets_NO_b1_onclick
 */
function Transfer_of_fixed_assets_NO_b1_onclick(){
	if ($("#Transfer_of_fixed_assets_NO").val() != ""){		
		var aryTransfer_of_fixed_assets_NO = $("#Transfer_of_fixed_assets_NO").val().split(",");
		if (aryTransfer_of_fixed_assets_NO.length > 0){
			for (var i = 0; i < aryTransfer_of_fixed_assets_NO.length; i++){
				var strOID = "";
				var sqlId = "BPM_getProcessInstanceOID";
				var tParams = [];
				tParams.push(aryTransfer_of_fixed_assets_NO[i]);
				var dataArray = [];    
				dataArray = ajaxGetData(invokeURL + sqlId, {
					p:tParams[0]
				})
				if(dataArray[0].result == undefined){
					if (dataArray.length > 0) {
						strOID = dataArray[0].OID;
					}
				}else{
					alert("No data.");
				}
				if (strOID != ""){
					window.open("https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnCurrentUserId=" + userId + "&hdnFormDefId=SENAO021&hdnProcessInstOID=" + strOID, "", "width=600,height=800");
        }
      }
    }
  }
}
/**
 * 開啟資產處分單
 * Disposal_of_fixed_assets_NO_b1_onclick
 */
function Disposal_of_fixed_assets_NO_b1_onclick(){
	if ($("#Disposal_of_fixed_assets_NO").val() != ""){		
		var aryDisposal_of_fixed_assets_NO = $("#Disposal_of_fixed_assets_NO").val().split(",");
		if (aryDisposal_of_fixed_assets_NO.length > 0){
			for (var i = 0; i < aryDisposal_of_fixed_assets_NO.length; i++){
        var strOID = "";
        var sqlId = "BPM_getProcessInstanceOID";
        var tParams = [];
        tParams.push(aryDisposal_of_fixed_assets_NO[i]);
        var dataArray = [];    
				dataArray = ajaxGetData(invokeURL + sqlId, {
					p:tParams[0]
				})
				if(dataArray[0].result == undefined){
					if (dataArray.length > 0) {
						strOID = dataArray[0].OID;
					}
				}else{
					alert("No data.");
				}
				if (strOID != ""){
					window.open("https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnCurrentUserId=" + userId + "&hdnFormDefId=SENAO020&hdnProcessInstOID=" + strOID, "", "width=600,height=800");
        }
      }
    }
  }
}
/**
 * 開啟申請過訓練請款單
 * Training_of_PaymentForm_NO_b1_onclick
 */
function Training_of_PaymentForm_NO_b1_onclick(){
	if ($("#Training_of_PaymentForm_NO").val() != ""){		
		var aryTraining_of_PaymentForm_NO = $("#Training_of_PaymentForm_NO").val().split(",");
		if (aryTraining_of_PaymentForm_NO.length > 0){
			for (var i = 0; i < aryTraining_of_PaymentForm_NO.length; i++){
        var strOID = "";
        var sqlId = "BPM_getProcessInstanceOID";
        var tParams = [];
        tParams.push(aryTraining_of_PaymentForm_NO[i]);
        var dataArray = [];    
				dataArray = ajaxGetData(invokeURL + sqlId, {
					p:tParams[0]
				})
				if(dataArray[0].result == undefined){
					if (dataArray.length > 0) {
						strOID = dataArray[0].OID;
					}
				}else{
					alert("No data.");
				}
				if (strOID != ""){
					window.open("https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnCurrentUserId=" + userId + "&hdnFormDefId=SENAO014&hdnProcessInstOID=" + strOID, "", "width=600,height=800");
        }
      }
    }
  }
}
/**
 * 開啟人事結案註銷申請單紀錄申請單
 * Cancel_Modify_Attendance_NO_b1_onclick
 */
function Cancel_Modify_Attendance_NO_b1_onclick(){
	if ($("#Cancel_Modify_Attendance_NO").val() != ""){		
		var aryCancel_Modify_Attendance_NO = $("#Cancel_Modify_Attendance_NO").val().split(",");
		if (aryCancel_Modify_Attendance_NO.length > 0){
			for (var i = 0; i < aryCancel_Modify_Attendance_NO.length; i++){
        var strOID = "";
        var sqlId = "BPM_getProcessInstanceOID";
        var tParams = [];
        tParams.push(aryCancel_Modify_Attendance_NO[i]);
        var dataArray = [];    
				dataArray = ajaxGetData(invokeURL + sqlId, {
					p:tParams[0]
				})
				if(dataArray[0].result == undefined){
					if (dataArray.length > 0) {
						strOID = dataArray[0].OID;
					}
				}else{
					alert("No data.");
				}
				if (strOID != ""){
					window.open("https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnCurrentUserId=" + userId + "&hdnFormDefId=SENAO077&hdnProcessInstOID=" + strOID, "", "width=600,height=800");
        }
      }
    }
  }
}
/**
 * 開啟關閉系統權限申請單
 * Closed_System_Privileges_NO_b1_onclick
 */
function Closed_System_Privileges_NO_b1_onclick(){
	if ($("#Closed_System_Privileges_NO").val() != ""){		
		var aryClosed_System_Privileges_NO = $("#Closed_System_Privileges_NO").val().split(",");
		if (aryClosed_System_Privileges_NO.length > 0){
			for (var i = 0; i < aryClosed_System_Privileges_NO.length; i++){
        var strOID = "";
        var sqlId = "BPM_getProcessInstanceOID";
        var tParams = [];
        tParams.push(aryClosed_System_Privileges_NO[i]);
        var dataArray = [];    
				dataArray = ajaxGetData(invokeURL + sqlId, {
					p:tParams[0]
				})
				if(dataArray[0].result == undefined){
					if (dataArray.length > 0) {
						strOID = dataArray[0].OID;
					}
				}else{
					alert("No data.");
				}
				if (strOID != ""){
					window.open("https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnCurrentUserId=" + userId + "&hdnFormDefId=SENAO119&hdnProcessInstOID=" + strOID, "", "width=600,height=800");
        }
      }
    }
  }
}
/**
	Is custody seal
*/
function Is_custody_seal_onchange(){
	if ($("#Is_custody_seal").val() == "Y"){	//[Is custody seal] = Y
		$("#Person_in_custody_id").css({"background-color": EDIT_BGCOLOR});
		$("#Person_in_custody_name").css({"background-color": EDIT_BGCOLOR});
    $("#Person_in_custody_id_b1").attr("disabled", false);
  }
	if ($("#Is_custody_seal").val() == "N"){	//[Is custody seal] = N
		$("#Person_in_custody_id").css({"background-color": DEFAULT_BGCOLOR});
		$("#Person_in_custody_name").css({"background-color": DEFAULT_BGCOLOR});
    $("#Person_in_custody_id").val("");
    $("#Person_in_custody_name").val("");
    $("#Person_in_custody_id_b1").attr("disabled", true);
  }
}
/*---------------------欄位onChange、onClick Function Start--------------*/