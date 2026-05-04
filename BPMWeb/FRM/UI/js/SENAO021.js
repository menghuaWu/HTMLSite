var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

//基本資料
var form_ou = document.getElementById("form_ou");	//公司別
var form_org = document.getElementById("form_org");	//廠區別
var note_subject = document.getElementById("note_subject");//主旨備註
var writer_id = document.getElementById("writer_id");//填單人
var senao_um002 = document.getElementById("senao_um002");//表單單號
var senao_um004_oid = document.getElementById("senao_um004_oid");//轉出單位id    
var senao_um004_t1 = document.getElementById("senao_um004_t1");//轉出單位
var senao_um004 = document.getElementById("senao_um004");//隱藏欄位--轉出單位id
var senao_um003 = document.getElementById("senao_um003");//轉出人員id
var senao_um003_t1 = document.getElementById("senao_um003_t1");//轉出人員
var senao_um007 = document.getElementById("senao_um007");//轉出原因
var m_senao_um007 = document.getElementById("m_senao_um007");//行動簽核用顯示---轉出原因
var senao_um009 = document.getElementById("senao_um009");//轉出日期
var senao_um005_oid = document.getElementById("senao_um005_oid");//轉[入]單位id
var senao_um005_t1 = document.getElementById("senao_um005_t1");//轉[入]單位
var senao_um005 = document.getElementById("senao_um005");//隱藏欄位--轉[入]單位id
var senao_um006 = document.getElementById("senao_um006");//轉[入]人員id
var senao_um006_t1 = document.getElementById("senao_um006_t1");//轉[入]人員
var senao_um012 = document.getElementById("senao_um012");//備註說明
var hdn_show_fa = document.getElementById("hdn_show_fa");//資產開窗回傳欄位
var hdn_eq_sign = document.getElementById("hdn_eq_sign");//儀器類資產簽核判斷
var hdn_apply_date = document.getElementById("hdn_apply_date");//隱藏填單日期

//明細資料
var senao_ud003 = document.getElementById("gsenao_ud003");//財產編號
var senao_ud004 = document.getElementById("gsenao_ud004");//財產名稱
var senao_ud005 = document.getElementById("gsenao_ud005");//資產類別
var senao_ud006 = document.getElementById("gsenao_ud006");//原保管數量
var senao_ud007 = document.getElementById("gsenao_ud007");//移轉數量
var senao_ud008 = document.getElementById("gsenao_ud008");//轉入地址
var senao_ud009 = document.getElementById("gsenao_ud009");//地址其他說明
var senao_ud010 = document.getElementById("gsenao_ud010");//折舊,攤提科目
var senao_ud011 = document.getElementById("gsenao_ud011");//Location
var senao_ud012 = document.getElementById("gsenao_ud012");//Category_id
var senao_ud013 = document.getElementById("gsenao_ud013");//Location_id
var senao_ud014 = document.getElementById("gsenao_ud014");//Category
//Grid
var Grid1 = document.getElementById("Grid1");
//DataSoruce
var databaseCfgId_EFGP = "EFGP";
var databaseCfgId_ERP = "ERPSNO";
//單身grid1 元件欄位名稱
var GridBinding = [
  ["gsenao_ud003","gsenao_ud004","gsenao_ud005","gsenao_ud006","gsenao_ud007","gsenao_ud008","gsenao_ud009","gsenao_ud010","gsenao_ud011","gsenao_ud012","gsenao_ud013","gsenao_ud013"]
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
  colAPI: 'BPM_SENAO021_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO021_GRID1_LIST',
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
  }
  //vivian 暫時定義 start
  /*
  activityId = "UserTask_3";
  ProcessPackageId='SENAO021';//vivian 抓不到單號暫時定義
  formId='SENAO021';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  systemDateTime = showCurrentDate(); //今天日期
  formOpen();
  frmEvent();
  formCreate();

});
function formCreate(){
  writer_id = userId;
  hdn_apply_date.value = systemDateTime;
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  setActivityFieldControl();
  frmGeneralLoad(ProcessPackageId, systemDateTime);//設定公司、廠區、表單單號
  
  document.getElementById("btn_senao007").style.display = "none"; //隱藏人員調動單據按鈕
  $('#btn_senao007').prop("disabled", false);//反灰人員調動單據按鈕
  document.getElementById("senao_um005_b1").style.display = "none"; //隱藏轉入單位按鈕
  $('#senao_um005_b1').prop("disabled", true);//反灰轉入單位按鈕
  $('#senao_um006_b1').prop("disabled", true);//轉入人員按鈕反灰
  $('#senao_um003_b1').prop("disabled", true); //轉出單位按鈕反灰
  //設定申請人*/
  $('#senao_um003').val(userId);
  $('#senao_um003_t1').val(user_Name);

  //設定所屬部門*/
  $('#senao_um004_oid').val(Department);
  $('#senao_um004_t1').val(Department_Name);

  $('#senao_um002').attr('disabled', 'true');//單號欄位鎖定
  applicant = $('#senao_um003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao_um004_oid').val();//發起流程時參數 申請人部門ID
  if (activityId == 'UserTask_3'){
		$("#form_org").attr("disabled",false);//廠區別下拉選項可使用
  }
  createFrmGrid(0);
  fieldControl();
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
  $('#senao_um009').on('change', function () { //轉出日期OnChange
    senao_um009_onChange();
  });
  $('#gsenao_ud007').on('change', function () { //移轉數量OnChange
    gsenao_ud007_onChange();
  });
  $('#senao_um007').on('change', function () { //移轉說明OnChange
    senao_um007_onChange();
  });
  $('#senao_um003').on('change', function () { //轉出人員OnChange
    senao_um003_onChange();
  });
  $('#senao_um006').on('change', function () { //轉入人員OnChange
    senao_um006_onChange();
  });
}
function formSave(){
	var errstr='';
	//var tGrid1Data = Grid1Obj.getData(); 
  var tGrid1Data = getGridData(0); 
	if (activityId == "UserTask_3"){  
    if (senao_um007.value.trim() == ''){
			errstr += "[" + $("#lbl_senao_um007").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[移轉說明]不可空白!
    }else{
      m_senao_um007.value = senao_um007.value;  
    }   
		if (tGrid1Data.length <= 0){  //判斷Grid是否有資料 
			errstr += querySNSI009(form_ou.value, "033", locale, "", "", "") + "\n"; //單身明細至少要有新增一筆資料
		}else{
			for (var i = 0; i < tGrid1Data.length; i++) {    
        if (tGrid1Data[i]['SENAO_UD008'] == ''){
					errstr += querySNSI009(form_ou.value, "015", locale, (i+1), $("#lbl_gsenao_ud003").html() + ":" + tGrid1Data[i]['SENAO_UD003'], $("#lbl_gsenao_ud008").html()) + "\n"; //第i筆 財產編號:XXX[轉入地址]不可空白!
        }
        if (tGrid1Data[i]['SENAO_UD007'] == ''){
					errstr += querySNSI009(form_ou.value, "015", locale, (i+1), $("#lbl_gsenao_ud003").html() + ":" + tGrid1Data[i]['SENAO_UD003'], $("#lbl_gsenao_ud007").html()) + "\n"; //第i筆 財產編號:XXX[移轉數量]不可空白!
        }else if (tGrid1Data[i]['SENAO_UD007'] * 1 == 0){
					errstr += querySNSI009(form_ou.value, "025", locale, (i+1), $("#lbl_gsenao_ud003").html() + ":" + tGrid1Data[i]['SENAO_UD003'], $("#lbl_gsenao_ud007").html()) + "\n"; //第i筆 財產編號:XXX[移轉數量]請填寫大於0的數值!
				}
			}
		}
    errstr += IsCheckASSIGNED_TO();
	}
  if (errstr == ''){
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
  $('#form_ou').prop("disabled", true);//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
      "form_org",
      apiInvoke + "BPM_getFactory",
      { COMPANY: $('#form_ou').val() },
      ""
  );
  document.getElementById("senao_um009").value = today.replace(/\//g, '-');
  //表單代號
  $('#senao_um001').val(type);
  $('#senao_um001').attr('disabled', 'true');

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
function fieldControl(){
  //轉出人員不能修改
  $("#senao_um003").prop("readOnly", true);
  $("#senao_um003_t1").prop("readOnly", true);
  //轉出單位不能修改
  $("#senao_um004_oid").prop("readOnly", true);
  $("#senao_um004_t1").prop("readOnly", true);
  //轉入單位不能修改
  $("#senao_um005_oid").prop("readOnly", true);
  $("#senao_um005_t1").prop("readOnly", true);
  //轉入人員
  $("#senao_um006").prop("readOnly", true);
  $("#senao_um006_t1").prop("readOnly", true);
/*
  senao_ud003.readOnly = true;
  senao_ud004.readOnly = true;
  senao_ud005.readOnly = true;
  senao_ud006.readOnly = true;
  senao_ud008.readOnly = true;
  senao_ud009.readOnly = true;
  senao_ud010.readOnly = true;
  senao_ud011.readOnly = true;
  senao_ud012.readOnly = true;
  senao_ud013.readOnly = true;
  senao_ud014.readOnly = true;*/

  if (activityId != 'UserTask_3'){
    //按鈕反灰
    //document.getElementById("senao_um009").disabled = true; //轉出日期
    $('#senao_um007').prop("disabled", true);//移轉說明
    $('#ShowFA').prop("disabled", true);//移轉資產開窗
    $('#senao_um012').prop("disabled", true);//備註說明    
  }else{
    if (senao_um007.value != '' && senao_um005_oid.value != '' && senao_um005.value != '' && senao_um006.value != ''){
        $('#ShowFA').prop("disabled", false); //移轉資產開窗
        $('#senao_um006_b1').prop("disabled", false); //轉入人員開窗
    }   
    $("#senao_um003").prop("readOnly", false);
    //senao_um006.readOnly = false; 
  }
  if (activityId == '0045'){ //原本old code寫 0040 可是沒這關卡 但備註寫總務，所以新版改寫0045關卡使用
    $('#senao_um007').prop("disabled", false); //轉出原因
    $('#senao_um006_b1').prop("disabled", false); //轉入人員開窗
  }

}
function after_ShowFA(){ 
  if(hdn_show_fa.value!=''){
    var faAryData = eval(hdn_show_fa.value);//轉陣列
    var strCmdWhere = "";
    for (var i = 0; i < faAryData.length; i++) {
      strCmdWhere += faAryData[i][1] + "@@" + faAryData[i][4] + "@@" + faAryData[i][6];
      if (i < faAryData.length - 1) strCmdWhere += ",";
    }
    var tParm = new Array();
    //alert(tDefaultAppendSQL);
		tParm.push(form_ou.value.toUpperCase());//push進SN_EFGP_SQL中指令下的:p，若:p有多個需分
    let pData = ajaxGetData(invokeURL + "BPM_ERP_SENAO021_01_OU", { strCmdWhere: strCmdWhere, tParm:tParm[0] });//"ERP_SNO_C", "SENAO020_01_OU"
    if (pData[0].result == undefined) {
      if (pData.length > 0) {    
        for(var i=0; i<pData.length; i++){                         
          //組Grid1資料
          var tmpGridAry = new Array(); 
          var addAry = new Array(); 
          tmpGridAry.push(addAry);
          tGrid1Data = getGridData(0); 
          tmpGridAry[0][0] = fixNull(pData[i].TAG_NUMBER); //財產編號
          tmpGridAry[0][1] = fixNull(pData[i].DESCRIPTION); //財產名稱
          tmpGridAry[0][2] = fixNull(pData[i].DESCRIPTION1); //資產類型
          tmpGridAry[0][3] = fixNull(pData[i].UNITS_ASSIGNED); //原保管數量
          tmpGridAry[0][4] = '0'; //移轉數量
          tmpGridAry[0][5] = ''; //轉入地址
          tmpGridAry[0][6] = ''; //其他說明
          tmpGridAry[0][7] = fixNull(pData[i].CONCATENATED_SEGMENTS);  //攤提折舊項目
          tmpGridAry[0][8] = fixNull(pData[i].CONCATENATED_SEGMENTS1);//CONCATENATED_SEGMENTS1
          tmpGridAry[0][9] = fixNull(pData[i].CATEGORY_ID);//category_id
          tmpGridAry[0][10] = fixNull(pData[i].LOCATION_ID); //location_id
          tmpGridAry[0][11] = fixNull(pData[i].SEGMENT1); //category

          let $grid = $("#" + frmGridList[0].gid);
          let rowid = $grid.getGridParam("records") + 1;
          let data = {};

          // 依照 Grid1ColumnIds[0] 對應欄位，把 tmpGridAry[0] 轉成物件
          let colIds = Grid1ColumnIds[0];
          for (let j = 0; j < colIds.length; j++) {
              data[colIds[j]] = (tmpGridAry[0][j] === 0 || tmpGridAry[0][j]) ? String(tmpGridAry[0][j]) : "";
             // tmpGridAry[0][j] || "";
          }
          // 新增到 grid
          $grid.jqGrid('addRowData', rowid, data, 'last');
        }
      }
    }  
  }
  hdn_show_fa.value=''; //清空
  return true;
}
//人員調動單據開窗後
function after_senao_um006(){
  if(senao_um005_oid.value==''){
    $('#ShowFA').prop("disabled", true); //資產開窗停用
  }else{
    $('#ShowFA').prop("disabled", false);//資產開窗啟用
    senao_um005.value = senao_um005_oid.value;        
  }
  return true;
}
//轉入地址挑選後動作
function after_senao_ud008_b1(){
  if (senao_ud011.value != ''){
    senao_ud011.value = senao_ud011.value + '.' + senao_um005_oid.value;
  }
  if (senao_ud008.value == 'NA'){
    $("#senao_ud009").prop("readOnly", false);
  }else{
    $("#senao_ud009").prop("readOnly", true);
  }
  return true;
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
//檢查移轉設備是否為轉出人員保管的設備
function IsCheckASSIGNED_TO(){
  var r_value = '';
  var tData = Grid1.value;	
  var tGrid1Data = getGridData(0); 
  var strUserID = 'S' + senao_um003.value; //轉出人員工號
  for (var i = 0; i < tGrid1Data.length; i++) {
    var tParm = new Array();
    var tDefaultAppendSQL = "";
    tParm.push(strUserID); //push進SN_EFGP_SQL中指令下的:p，若:p有多個需分
    tParm.push(tGrid1Data[i].SENAO_UD003); //push進SN_EFGP_SQL中指令下的:p，若:p有多個需分
    let pData = ajaxGetData(invokeURL + "BPM_ERP_SENAO021_02", {UserID:tParm[0], AssetID:tParm[1]});
    if (pData[0].result == undefined) {
      if (pData.length > 0) {                                
      }else{
        r_value += tGrid1Data[i].SENAO_UD003 + '--' + tGrid1Data[i].SENAO_UD004 + '\r\n';
      }
    }       
  }
  if (r_value != ''){
   r_value += querySNSI009(formId, "002", locale, "", "", "") + "\n";	//以上不是您的保管項目，請刪除
  }
  
  return r_value;
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
        FORMSERIALNUMBER: $('#senao_um002').val()//表單單號
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
  if (isNaN(senao_ud007.value)){
		errstr += "[" + $("#lbl_gsenao_ud007").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[移轉數量]必須為數值!
  }else{
    if (senao_ud007.value * 1 <= 0){
      errstr += "[" + $("#lbl_gsenao_ud007").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[移轉數量]請填寫大於0的數值!
    }
    if (senao_ud007.value * 1 > senao_ud006.value * 1){
      errstr += querySNSI009(formId, "004", locale, "", "", "") + "\n";	//[移轉數量]不可大於[原保管數量]，請重新輸入!
    }
  }

  if (senao_ud008.value == ''){
    errstr += "[" + $("#lbl_gsenao_ud008").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[轉入地址]不可空白!
  }
	return errstr;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {

}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao_tm003_b1').on('click', function () { //填表人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_tm003','senao_tm003_t1','senao_tm004_Oid','senao_tm004_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#ShowFA').on('click', function () { //選擇需處分的資產 開窗
  var stdPowerUser = getGroupUser("SN021_02");
  var strUserID = "S"+senao_um003.value;
  var tSPValue = new Array();
  if(stdPowerUser.indexOf(senao_um003.value) > -1){
    let OU_ID = form_ou.value.toUpperCase();
    let tTitle = "移轉資產";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('hdn_show_fa');//回傳元件參數
    let tReturnFunction = new Array("after_ShowFA()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO021_03_OU";
    let tAPI = invokeURL + 'BPM_ERP_SENAO021_03_OU';
    let tParameter = {OU_ID: OU_ID,TAG_NUMBER:'ALL',ASSET_NUMBER:'ALL',DESCRIPTION:'ALL',UNITS_ASSIGNED:'ALL',DESCRIPTION1:'ALL'};
    let tQBEField = {TAG_NUMBER:'TAG_NUMBER',ASSET_NUMBER:'ASSET_NUMBER',DESCRIPTION:'DESCRIPTION',UNITS_ASSIGNED:'UNITS_ASSIGNED',DESCRIPTION1:'DESCRIPTION1',LOCATION_ID:'LOCATION_ID'}; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else{  
    //tSPValue.push('S'+senao_um003.value);
    let OU_ID = form_ou.value.toUpperCase();
    let tTitle = "移轉資產";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('hdn_show_fa');//回傳元件參數
    let tReturnFunction = new Array("after_ShowFA()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO021_04_OU";
    let tAPI = invokeURL + 'BPM_ERP_SENAO021_04_OU';
    let tParameter = {UserID: strUserID,OU_ID: OU_ID,TAG_NUMBER:'ALL',ASSET_NUMBER:'ALL',DESCRIPTION:'ALL',UNITS_ASSIGNED:'ALL',DESCRIPTION1:'ALL'};
    let tQBEField = {TAG_NUMBER:'TAG_NUMBER',ASSET_NUMBER:'ASSET_NUMBER',DESCRIPTION:'DESCRIPTION',UNITS_ASSIGNED:'UNITS_ASSIGNED',DESCRIPTION1:'DESCRIPTION1',LOCATION_ID:'LOCATION_ID'}; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$('#senao_um006_b1').on('click', function () { //轉入人員開窗
  // sessionStorage 存入數據
  let tTitle = "轉入人員";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_um006','senao_um006_t1','senao_um005_oid','senao_um005_t1');//回傳元件參數
  let tReturnFunction = new Array("after_senao_um006()"); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_um003_b1').on('click', function () { //轉出人員開窗
  // sessionStorage 存入數據
  let tTitle = "轉出人員";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_um003','senao_um003_t1','senao_um004_oid','senao_um004_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#btn_senao007').on('click', function () { //人員調動單據開窗
  // sessionStorage 存入數據
  let tTitle = "人員調動單";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','senao_um006','senao_um006_t1','senao_um005_oid','senao_um005_t1','');//回傳元件參數
  let tReturnFunction = new Array("after_senao_um006()"); //回傳函數
  let tColAPi = "BPM_SENAO021_BTNSENAO007";
  let tAPI = invokeURL + 'BPM_SENAO021_BTNSENAO007';
  let tParameter = { SENAO_G010_T1: null, SENAO_G002: null, SENAO_G003_T1:null, APPROVERESULT: null ,SENAO_UM003:senao_um003.value};
  let tQBEField = {SENAO_G002: 'SENAO_G002', SENAO_G003_T1: 'SENAO_G003_T1', SENAO_G010_T1: 'SENAO_G010_T1', APPROVERESULT: 'APPROVERESULT' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao_ud008_b1').on('click', function () { //轉入地址開窗
  // sessionStorage 存入數據
  let tTitle = "轉入地址";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('gsenao_ud011','gsenao_ud008');//回傳元件參數
  let tReturnFunction = new Array("after_senao_ud008_b1()"); //回傳函數
  let tColAPi = "BPM_ERP_SENAO021_05";
  let tAPI = invokeURL + 'BPM_ERP_SENAO021_05';
  let tParameter = { OU_ID:OU_ID,FLEX_VALUE: null, DESCRIPTION: null};
  let tQBEField = {FLEX_VALUE: 'FLEX_VALUE', DESCRIPTION: 'DESCRIPTION'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * [Grid] 修改資料
 */
function btnEdit_onClick(){
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
    alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
    return false;
  }
  var errorMsg="";
  errorMsg = chkGrid1Value();//檢查欄位是否有空
	if (errorMsg == ""){
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
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
//移轉說明OnChange
function senao_um007_onChange(){
  if (senao_um007.value != ''){
    if(senao_um007.value == '2'){	//轉換部門
      senao_um005.value='';
      senao_um005_oid.value='';//轉入單位
      senao_um005_t1.value='';//轉入單位
      senao_um006.value='';//轉入人員
      senao_um006_t1.value='';//轉入人員
      var tMsg_tmp = "";
      var ary_errMsg = [];
      tMsg_tmp = querySNSI009(formId, "001", locale, "", "", "");
      ary_errMsg = tMsg_tmp.split("$");	////$$表示以$$分隔error code
      alert(ary_errMsg[0]);	//請於右邊按鈕選擇先前申請之人員調動單據
      $('#btn_senao007').prop("disabled", false); //人員調動單據按鈕  
      document.getElementById("btn_senao007").style.display = "block"; //人員調動單據按鈕 
      $('#senao_um005_b1').prop("disabled", true); //轉入單位按鈕
      $('#senao_um006_b1').prop("disabled", true);//轉入人員
    }else{
      document.getElementById("btn_senao007").style.display = "none"; //人員調動單據按鈕 
      $('#btn_senao007').prop("disabled", true); //人員調動單據按鈕  
      $('#senao_um005_b1').prop("disabled", false);//轉入單位按鈕
      $('#senao_um006_b1').prop("disabled", false);//轉入人員
      $("#senao_um006").prop("readOnly", false);
    }
  }
}
//轉出日期OnChange
function senao_um009_onChange(){
  let formattedDate = senao_um009.value.replace(/-/g, '/');  
  if (formattedDate < systemDateTime) {
    alert(querySNSI009(formId, "003", locale, "", "", "")); // [轉出日期]不可小於[今天]
    senao_um009.value = '';
  }
}
//移轉數量OnChange
function gsenao_ud007_onChange(){
  if (isNaN(senao_ud007.value)){
    errstr += "[" + $("#lbl_gsenao_ud007").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[移轉數量]必須為數值!
  }else{
    if (senao_ud007.value * 1 <= 0){
      errstr += "[" + $("#lbl_gsenao_ud007").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[移轉數量]請填寫大於0的數值!
    }
    if (senao_ud007.value * 1 > senao_ud006.value * 1){
      errstr += querySNSI009(formId, "004", locale, "", "", "") + "\n";	//[移轉數量]不可大於[原保管數量]，請重新輸入!
    }
  }    
}
//轉出人員OnChange
function senao_um003_onChange(){
  var sqlId= "BPM_getUser2";
  var params = [];
  var data = [];
  params.push(senao_um003.value);
  data = ajaxGetData(invokeURL + sqlId, {
    ID : params[0],
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      senao_um003.value = data[0].ID;
			senao_um003_t1.value = data[0].USERNAME;
      //senao_um004.value = data.recordValues[0][2];
			senao_um004_oid.value = data[0].DEPTID;
			senao_um004_t1.value = data[0].ORGANIZATIONUNITNAME; 			          
		} else {
			alert("No data.");
			senao_um003.value = '';
			senao_um003_t1.value = '';
			//senao_um004.value = '';
			senao_um004_oid.value = '';
      senao_um004_t1.value = '';
		}
  }
}
//轉入人員onchange
function after_senao_um006(){
  if(senao_um005_oid.value==''){
    //document.getElementById("ShowFA").disabled = true; 
    $('#ShowFA').prop("disabled", true);//資產開窗
  }else{
    //document.getElementById("ShowFA").disabled = false; 
    $('#ShowFA').prop("disabled", false);//資產開窗
    senao_um005.value = senao_um005_oid.value;        
  }
  return true;
}
function senao_um006_onChange(){
  var sqlId= "BPM_getUser2";
  var params = [];
  var data = [];
  params.push(senao_um006.value);
  data = ajaxGetData(invokeURL + sqlId, {
    ID : params[0],
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      senao_um006.value = data[0].ID;
			senao_um006_t1.value = data[0].USERNAME;
      //senao_um005.value = data.recordValues[0][2];
			senao_um005_oid.value = data[0].DEPTID;
			senao_um005_t1.value = data[0].ORGANIZATIONUNITNAME;
		} else {
			alert("No data.");
			senao_um006.value = '';
			senao_um006_t1.value = '';
			//senao_um005.value = '';
			senao_um005_oid.value = '';
      senao_um005_t1.value = '';
		}
  }
  after_senao_um006();
}
/*---------------------欄位onChange、onClick Function Start--------------*/