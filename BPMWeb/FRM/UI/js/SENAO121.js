var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao121002 = document.getElementById("senao121002"); //表單單號
var senao121003 = document.getElementById("senao121003"); //申請人代號
var senao121005 = document.getElementById("senao121005"); //申請人名稱
var senao121004 = document.getElementById("senao121004"); //申請單位代號
var senao121006 = document.getElementById("senao121006"); //申請單位名稱
var senao121008 = document.getElementById("senao121008"); //分機
var senao121007 = document.getElementById("senao121007"); //申請日期
var senao121009 = document.getElementById("senao121009"); //需求日期
var senao121016 = document.getElementById("senao121016"); //需求說明
var senao121018 = document.getElementById("senao121018"); //申請人門禁卡號
var hdn_sign_info = document.getElementById("hdn_sign_info"); //門禁位置負責人資料
var senao121011_b1 = document.getElementById("senao121011_b1"); //門禁位置按鈕

//==================以下為單身資料=================
var gsenao121d001 = document.getElementById("gsenao121d001"); //是否同意開放(同意:Y/不同意:N)
//var gsenao121d001_radio_0 = document.getElementById("gsenao121d001_radio_0"); //同意:Y
//var gsenao121d001_radio_1 = document.getElementById("gsenao121d001_radio_1"); //不同意:N
var gsenao121d001_radio = document.getElementById("gsenao121d001_radio"); //不同意:N
var gsenao121d002 = document.getElementById("gsenao121d002"); //門禁地點序號
var gsenao121d003 = document.getElementById("gsenao121d003"); //門禁地點
var gsenao121d004 = document.getElementById("gsenao121d004"); //負責單位代號
var gsenao121d005 = document.getElementById("gsenao121d005"); //負責單位名稱
var gsenao121d001_radio_hdn = document.getElementById("gsenao121d001_radio_hdn"); //是否同意開放隱藏欄位
//以下供流程設計師使用
var applicantManagerId = document.getElementById("applicantManagerId"); //隱藏欄位，申請人主管ID

//行動簽核
var senao121006_m = document.getElementById("senao121006_m"); //隱藏欄位，申請單位名稱(申請單位代號) 
var positions_m = document.getElementById("positions_m"); //隱藏欄位，開放門禁位置，若多個則以、符號隔開

//Grid
var Grid1 = document.getElementById("Grid1");
//DataSoruce
var databaseCfgId_EFGP = "EFGP";
var databaseCfgId_ERP = "ERPSNO";
//單身grid1 元件欄位名稱
var GridBinding = [
  ["","gsenao121d001","gsenao121d002","gsenao121d003","gsenao121d004","gsenao121d005"]
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
  colAPI: 'BPM_SENAO121_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO121_GRID1_LIST',
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
    $("#gsenao121d001_radio").attr("disabled", false);
    var signNotify = getSignRowNotify(row.SENAO121D004,"");
    //20230406 Calvin 若登入人員不在該群組可能為轉簽，需檢查是否為轉簽
    if(signNotify.trim() == "N")signNotify = chkReasign(row.SENAO121D004);
    if(signNotify == "Y" && activityId === "UserTask_91"){
      $("#gsenao121d001_radio").attr("disabled", false);       	
      $("#btnEdit").attr("disabled",false);
      if(row.SENAO121D001 == "") {
        $("#gsenao121d001_radio").attr("disabled", false);
      }                            	
    }              	
    else{
      $("#btnEdit").attr("disabled",true);
      $("#gsenao121d001_radio").attr("disabled", true);
    }
    if(row.SENAO121D001.trim() == "Y"){
      $("#gsenao121d001_radio").val("Y");
    }
    if(row.SENAO121D001.trim() == "N"){
      $("#gsenao121d001_radio").val("N");
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
  }
  //vivian 測試用 暫時定義 start
  /*
  activityId = "UserTask_3";
  ProcessPackageId='SENAO121';//vivian 抓不到單號暫時定義
  formId='SENAO121';//vivian 抓不到單號暫時定義
  */
  //vivian 暫時定義 end
  systemDateTime = showCurrentDate(); //今天日期
  formOpen();
  frmEvent();
  formCreate();

});
function formCreate(){
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  setActivityFieldControl();
  frmGeneralLoad(ProcessPackageId, systemDateTime);//設定公司、廠區、表單單號
  //設定申請人*/
  $('#senao121003').val(userId);
  $('#senao121005').val(user_Name);
  //設定所屬部門*/
  $('#senao121004').val(Department);
  $('#senao121006').val(Department_Name);
  $('#senao121002').attr('disabled', 'true');//單號欄位鎖定
  $("#Label33").hide();  //隱藏審核資訊
  applicant = $('#senao121003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao121004').val();//發起流程時參數 申請人部門ID
  //Label底色
	$("[name^='lbl_']:not([name$='_hdn'],[name='lbl_hdn_chkfile'],[name*='Grid'],[name$='001'],[name$='002'],[name$='006'])[class='formButtonClass']").css("background-color", formLabelBGColor);	
  createFrmGrid(0);
  //測試用 測試UserTask_91關卡
  /*
  document.getElementById('hdn_show_location').value = "[['1','L007','華亞一廠 5F 產線','SN121_28','華亞一廠 5F 產線']]";
  after_show_location();
  $('#senao121003').val('105197');
  $('#senao121005').val('陳森權');
  $('#senao121004').val('26230');
  $('#senao121006').val('FA1廠區');*/
  //測試用結束
  if (activityId === "UserTask_3") {
    getEmpCardNo();//20230522取得申請人門禁卡號 HRDB
    form_org.disabled = false;
    senao121011_b1.disabled = false;
    $("#btnDel").attr("disabled",false);			
    $("#btnExport").attr("disabled",false);
    senao121003.style.backgroundColor = EDIT_BGCOLOR;
    senao121008.style.backgroundColor = EDIT_BGCOLOR;
    senao121009.style.backgroundColor = EDIT_BGCOLOR;
    senao121016.style.backgroundColor = EDIT_BGCOLOR;
    gsenao121d003.style.backgroundColor = EDIT_BGCOLOR;
  
		//複製表單時，下方欄位Reset
			if (formInstOID === "") {
				senao121007.value = systemDateTime; //申請日期
				senao121009.value = ""; //需求日期
				if (IsInvaildDept(senao121004.value)){	//判斷是否為失效部門
					senao121004.value = '';	//清空部門
					senao121006.value = '';	//清空部門
					senao121003_onChange();
				}
			}
	}
  if (activityId === "UserTask_91") {          	
    var gridData = getGridData(0) || [];
    var signMsg = "";
    if (gridData.length > 0) {  
      //提示第幾筆可修改
      for (var i = 0 ; i < gridData.length ; i++) {	
        var signNotify = getSignRowNotify(gridData[i].SENAO121D004,"");
        //20230406 Calvin 若登入人員不在該群組可能為轉簽，需檢查是否為轉簽
        if(signNotify.trim() == "N")signNotify = chkReasign(gridData[i].SENAO121D004);
        if(signNotify.trim() == "Y"){
          //需先判斷沒有資料，避免第一次兩個條件都跑
          //if(signMsg!="")signMsg+="、"+gridData[i][0]+"筆\n"; 
          if(signMsg!="")signMsg+=querySNSI009(formId,"001",locale,"","","").replace("@@1",gridData[i].GNO).replace("(SENAO121001)","") + "\n";                                        
          if(signMsg=="")signMsg+=querySNSI009(formId,"002",locale,"","","").replace("@@1",gridData[i].GNO).replace("(SENAO121002)","") + "\n";
        }
      }
      if(signMsg != ""){ 
        document.getElementById("Label33").innerHTML = $("#Label33").text() +"<br>" + signMsg + "["+  $("#lbl_gsenao121d001_radio").html() + "]!";
        $("#Label33").show(); 
      }
    }
  }
 
  initGridRow();
	return true;
}
function frmEvent() {
  $('#btnEdit').on('click', function () { //修改
    btnEdit_onClick();
  });
  $('#btnDel').on('click', function () { //刪除
    btnDel_onClick();
  });
  $('#btnExport').on('click', function () { //匯出Excel
    btnExport_onClick();
  });
  $('#senao121003').on('change', function () { //申請人OnChange
    senao121003_onChange();
  });
}
function formSave(){
	var errMsg='';
	//var tGrid1Data = Grid1Obj.getData(); 
  var tGrid1Data = getGridData(0); 
	if (activityId == "UserTask_3"){     
		if (tGrid1Data.length <= 0){  //判斷Grid是否有資料 
			errMsg += querySNSI009(form_ou.value, "033", locale, "", "", "") + "\n"; //單身明細至少要有新增一筆資料
		}
    else{
			//取得開放門禁位置負責人員
			getSignInfo();			
			//errMsg+= $$("#hdn_sign_info").val();
		}
		if (tGrid1Data.length > 0 && hdn_sign_info.value.trim() == "") {
      //errMsg += "「門禁位置負責人資料」取得發生錯誤，請洽MIS人員!! \n";
			errMsg += querySNSI009(formId,"003",locale,"","","") + "\n";
    }
		if (errMsg === "") {
			genSubject();
			prepareForFlow();
			prepareForMobile();
			showVarForFlow(true);
		}
	}
  if (activityId === "UserTask_91") {
    for (var i = 0; i < tGrid1Data.length; i++){
      var signNotify = getSignRowNotify(tGrid1Data[i].SENAO121D004,"");
			//20230406 Calvin 若登入人員不在該群組可能為轉簽，需檢查是否為轉簽
			if(signNotify.trim() == "N")signNotify = chkReasign(tGrid1Data[i].SENAO121D004,"");
			if (signNotify == "Y" && tGrid1Data[i].SENAO121D001.trim() == ""){
				//errMsg += " [表單明細]:第 " + tGrid1Data[i][0] + " 筆 - 請選擇「是否同意開放」!! .\n";
				errMsg += querySNSI009(formId,"004",locale,"","","").replace("@@1",tGrid1Data[i].GNO) + "\n";
			}				
		}
    //清空radio，避免下一關開啟有預設
    $("#gsenao121d001_radio").attr("disabled", false);
  }
	if (errMsg === "") {
    /*
		if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中  
			document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中  
			Grid1Obj.clearBinding();
			if(Grid1.value=="" || Grid1.value=="[]"){
				//alert("單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				alert(querySNSI009("senao","036",locale,"","",""));
				return false;
			}			
		}*/
		return true;
	} 
  else{
		alert(errMsg);
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
  $('#senao121001').val(type);
  $('#senao121001').attr('disabled', 'true');

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
//門禁位置挑選後動作
function after_show_location(){
  var faAryData = eval($("#hdn_show_location").val());
  //Grid1Obj.reload([]); //清空Grid資料
	for(var i=0; i<faAryData.length; i++)
    {
		//組Grid1資料
		var tmpGridAry = new Array(); 
		var addAry = new Array(); 
		tmpGridAry.push(addAry);
		tGrid1Data = getGridData(0);
		tmpGridAry[0][0] = i+1;
    tmpGridAry[0][1] = "";
		tmpGridAry[0][2] = faAryData[i][1];
		tmpGridAry[0][3] = faAryData[i][2];
		tmpGridAry[0][4] = faAryData[i][3];
		tmpGridAry[0][5] = faAryData[i][4];
		
    let $grid = $("#" + frmGridList[0].gid);
    let rowid = $grid.getGridParam("records") + 1;
    let data = {};

    // 依照 Grid1ColumnIds[0] 對應欄位，把 tmpGridAry[0] 轉成物件
    let colIds = Grid1ColumnIds[0];
    for (let j = 0; j < colIds.length; j++) {
        data[colIds[j]] = tmpGridAry[0][j] || "";
    }
    // 新增到 grid
    $grid.jqGrid('addRowData', rowid, data, 'last');
	}
  	gsenao121d003.value = "";//清空門禁位置
    gsenao121d005.value = "";//清空負責單位名稱
  	$("#hdn_show_location").val("");//清空暫存資料，避免轉存關卡長度超過
}
function getGroupUser(groupid){
  var sqlId= "BPM_getGroupUserID";
  var params = [];
  var data = [];
  var r_value = "";
  params.push(groupid);
  data = ajaxGetData(invokeURL + sqlId, {
      id : params[0],
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      for(var i=0; i<data.length; i++){                
        r_value = r_value + data[i].GROUPNAME + ",";
      }
    }
  }
  return r_value;
}
//20230522 Calvin 取得申請人門禁卡號
function getEmpCardNo(){	
  var sqlId= "BPM_HR_SENAO121_04";
  var params = [];
  var data = [];
  var r_value = "";
  params.push($("#form_ou").val());
  params.push($("#senao121003").val());
  data = ajaxGetData(invokeURL + sqlId, {
      form_ou : params[0],
      senao121003 : params[1]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {              
      r_value = data[0].EmployeeCardNo;
    }
  }
  $("#senao121018").val(r_value);
}
/**
 * 開放門禁位置負責人員權限確認
 * 20230329 Calvin 調整轉簽、退回造成判斷不到原始簽核人員的問題
 * chkReasign:取得是否為轉簽人員
 * chkAllReasign:逐筆取得轉簽人員的資料判斷
 * getSignRowNotify:依照上述取得的人員判斷是否在門禁負責人員群組內
*/
function chkReasign(group_id){
	var result = "N";
	var assignId = "";
	var sqlid = "BPM_SENAO121_03";
  var params = [];
  var data = [];
  var tTypes = new Array();
	params.push(FORMSERIALNUMBER); //表單單號  
	params.push(userId);   
  data = ajaxGetData(invokeURL + sqlid, {
    FORMSERIALNUMBER : params[0],
    userId : params[1]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {              
      for(var i=0; i<data.length; i++){                         
        assignId = data[i].OLDASSIGNEEID;
        var checkFlag = getSignRowNotify(group_id,assignId);//先判斷轉簽人員是否為該群組
        if(checkFlag=="N")checkFlag = chkAllReasign(group_id,assignId);//判斷所有轉簽人員是否為該群組
			  if(checkFlag == "Y"){
          result = "Y";
          break;
        }	
      }
    }
  } 
	return result;
}
function chkAllReasign(group_id, assignId) {
  var result = "N";
  var isCheck = true;
  var chkassignid = "";
  var sqlid2 = "BPM_SENAO121_03";
  var maxLoopCount = 5; // 設定最大循環次數以避免無限循環
  var loopCount = 0;
  var data = [];

  while (isCheck && loopCount < maxLoopCount) {    
    var tParams2 = [serialNumber, chkassignid === "" ? assignId : chkassignid];
    data = ajaxGetData(invokeURL + sqlid, {
      serialNumber : tParams2[0],
      chkassignid : tParams2[1]
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {   
        for (var i = 0; i < data.length; i++) {                    
          chkassignid = data[i][0];
          var checkFlag = getSignRowNotify(group_id, chkassignid);
          if (checkFlag === "Y") {
            result = "Y";
            isCheck = false;
            break;
          }                
        }     
      } else {
        // 查無資料則跳出迴圈
        isCheck = false;
      } 
    }   
    loopCount++; // 增加循環計數
  }
  return result;
}
function getSignRowNotify(group_id,assignId){	
	//檢查人員是否在該群組
	var sqlid = "BPM_SENAO121_02";
  var params = [];
  var data = [];
  params.push($("#form_ou").val()); 
  params.push(group_id);
  //判斷是否有轉簽，有轉簽依原始人員判斷，沒有轉簽則以登入人員判斷
  if(userId != assignId && assignId.trim() != ""){
		params.push(assignId);     
	}
	else{
		params.push(userId);
	}
  var result = "";
  data = ajaxGetData(invokeURL + sqlid, {
    form_ou : params[0],
    group_id : params[1],
    id :params[2]  //測試用 '105197' 
  });
  if (data[0].result == undefined) {
    if (data.length > 0) { 
      result = data[0].DECODE;
    }
  }         
  return result;
}
/**
 * 取得開放門禁位置負責人員
 */
function getSignInfo(){
	var tGrid1Data = getGridData(0); 
	var company_name = $("#form_ou").val();
	var hdn_sign_info2 = "";
	$("#hdn_sign_info").val("");
	for (var i = 0; i < tGrid1Data.length; i++) {      
		if(tGrid1Data[i].SENAO121D004.trim() != "" ){
			if(i==0){
				hdn_sign_info2 = "[" + company_name + "]" + tGrid1Data[i].SENAO121D004.trim() + "_" + tGrid1Data[i].SENAO121D005.trim();
			}
			else{
				hdn_sign_info2 += ";[" + company_name + "]" + tGrid1Data[i].SENAO121D004.trim() + "_" + tGrid1Data[i].SENAO121D005.trim();
			}			
		}
  }
	$("#hdn_sign_info").val(hdn_sign_info2);
}
/**
 * 準備流程所需變數
 */
function prepareForFlow() {	
	applicantManagerId.value = queryManagerByEmpId(senao121003.value);	
}
/**
 * 於瀏覽器console顯示流程所需變數值
 * @param {boolean} isDebugMode 
 */
function showVarForFlow(isDebugMode) {
	var totalVar = [];
	if (isDebugMode) {
    totalVar.push("applicantManagerId.value = " + applicantManagerId.value);		
    if (window.console) {
      console.log("---- Variable Log ---- Start");
      console.log(totalVar.join("\n"));
      console.log("---- Variable Log ---- End");
    }
	}
}
/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const prefixSubject =$("#Label2").html() + "_" + senao121005.value;

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
/**
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile() {
	var postions = [];
	senao121006_m.value = senao121006.value + "(" + senao121004.value + ")";	
	positions_m.value = postions.join("、");
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
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
        FORMSERIALNUMBER: $('#senao121002').val()//表單單號
      };
      $grid.createJqGrid(options);
      //setGridStyle(isUnitPriceUser);
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
 * 設定Grid欄位，其中單價欄位有權限者才可顯示
 * @param {boolean} isAllowedUser 是否可看到單價欄位
 */
function setGridStyle(isAllowedUser) {
  let $grid = $("#" + frmGridList[0].gid);
  if ($grid.length > 0) {
    if (isAllowedUser) {
      $grid.jqGrid('showCol', ["senao113d008"]); //顯示單價
    }
  }
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
  $("#btnEdit").attr("disabled",true);
  $("#gsenao121d001_radio").val("");
	$("#gsenao121d001_radio").attr("disabled", true);
}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao121003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao121003','senao121005','senao121004','senao121006');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao121011_b1').on('click', function () { //門禁位置開窗
  let OU_ID = form_ou.value;
  let tTitle = "開放門禁位置";  //子視窗抬頭
  let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('hdn_show_location');//回傳元件參數
  let tReturnFunction = new Array("after_show_location()"); //回傳函數
  let tColAPi = "BPM_SENAO121_01";
  let tAPI = invokeURL + 'BPM_SENAO121_01';
  let tParameter = {OU_ID: OU_ID,mainOrgId: 'senao',SENAO121L002:'ALL',SENAO121L003:'ALL',SENAO121L004:'ALL',SENAO121L005:'ALL'};
  let tQBEField = {SENAO121L002:'SENAO121L002',SENAO121L003:'SENAO121L003',SENAO121L004:'SENAO121L004',SENAO121L005:'SENAO121L005'}; //查詢欄位 {參數欄位:table欄位};
  var pWidth2=1000;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth2, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * [Grid] 修改資料
 */
function btnEdit_onClick(){
  var errorMsg="";
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
    alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
    return false;
  }
  if($("#gsenao121d001_radio").val().trim() === ""){
		//errMsg += '請選擇[是否同意開放]!!\n';
		errorMsg += "[" + $("#lbl_gsenao121d001_radio").html() + "] " + querySNSI009("senao","003",locale,"","","");		
  }
  else{
    gsenao121d001.value = $("#gsenao121d001_radio").val().trim();  
  }
  
  errorMsg += chkGrid1Value();//檢查欄位是否有空
	if (errorMsg == ""){
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    initGridRow();
    refreshRowNo(0, 'GNO');//重新計算單身Grid項次
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
	}else{
		alert(errorMsg);
	}
}
/**
 * [Grid] 刪除資料
 */
function btnDel_onClick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
      alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
      return false;
  }
  griddeleteRow(0); //將Grid某筆資料刪除
  clearBinding(0);
  initGridRow();
  refreshRowNo(0, 'GNO');//重新計算單身Grid項次
  /*if (getGridData(0).length > 0) {
      form_org.disabled = true;
  } else {
      form_org.disabled = false;
  }*/
  $("#" + frmGridList[0].gid).jqGrid("resetSelection");
}
/**
 * [Grid] 匯出資料 未啟用
 */
function btnExport_onClick(){

}
/**
 * 申請人欄位，查詢申請人相關資料
 */
function senao121003_onChange() {
	var userInfo = {};
  if (senao121003.value !== "") {    
    userInfo = queryUserByEmpId(senao121003.value);
    if (typeof userInfo.userId !== "undefined") {
      senao121003.value = userInfo.userId; //申請人ID
      senao121005.value = userInfo.userName; //申請人名稱
      senao121004.value = userInfo.unitId; //申請單位ID
      senao121006.value = userInfo.unitName; //申請單位名稱
    } else {
      //alert("輸入的申請人代號:" + senao121003.value + " 查無資料，請重新輸入!! \n");
      alert(querySNSI009(formId,"005",locale,"","","").replace("@@1",senao121003.value));
      senao121003.value = ""; 
      senao121004.value = "";
      senao121005.value = ""; 
      senao121006.value = "";
    }
  } else {
    senao121003.value = ""; 
    senao121004.value = ""; 
    senao121005.value = "";
    senao121006.value = ""; 
  }	
  return true;
}
/*---------------------欄位onChange、onClick Function End--------------*/