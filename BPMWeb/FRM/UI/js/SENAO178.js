var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var _ORG = {};//儲存所有廠區的Json
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var visitproductionline = document.getElementById("visitproductionline"); //是否需加簽曾志華副總

var systemDateTime = ""; //今天日期
/***************************GRID***********************/
//grid1
var Grid1 = document.getElementById("Grid1"); //Grid1
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
//單身grid1 元件欄位名稱
var Grid1Binding = [
  ["gsenao178d001","gsenao178d002","gsenao178d003"]
];
//單身grid1 欄位顯示名稱=>creat grid產生
var Grid1Columns = [];
//單身grid1 欄位id名稱=>creat grid產生
var Grid1ColumnIds = [];
//grid2
var Grid2 = document.getElementById("Grid2"); //Grid2
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
//單身grid2元件欄位名稱
var Grid2Binding = [
  ["gsenao178e001","gsenao178e002","gsenao178e004","gsenao178e006"]
];
//單身grid2 欄位顯示名稱=>creat grid產生
var Grid2Columns = [];
//單身grid2 欄位id名稱=>creat grid產生
var Grid2ColumnIds = [];
/*-----------------------Grid變數----------------------------*/

//grid1
var frmGrid1List = [{
  caption: '',
  gid: 'Grid1',
  pager: '#Grid1_pager',
  shrinkToFit: false,
  fixedColFDb: true, //set db
  rownumbers: false,
  colAPI: 'BPM_SENAO178_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO178_GRID1_LIST',
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
      if ($(element).exists != undefined) {
        $(element).val(value);
      }
      console.log('element:', element);
      console.log(key, value);
    }
  },
  loadComplete: function (ids) {
  }
}];
//grid2
var frmGrid2List = [{
  caption: '',
  gid: 'Grid2',
  pager: '#Grid2_pager',
  shrinkToFit: false,
  fixedColFDb: true, //set db
  rownumbers: false,
  colAPI: 'BPM_SENAO178_GRID2_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO178_GRID2_LIST',
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
      if ($(element).exists != undefined) {
        $(element).val(value);
      }
      console.log('element:', element);
      console.log(key, value);
    }
  },
  loadComplete: function (ids) {
  }
}];
/***************************GRID***********************/
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
  ProcessPackageId='SENAO178';//vivian 抓不到單號暫時定義
  formId='SENAO178';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  formCreate();
  formOpen();
  frmEvent();

});
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //DWREngine.setAsync(false);
  systemDateTime = showCurrentDate(); //今天日期
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //DWREngine.setAsync(true);
  //設定申請人*/
  $('#senao178005').val(userId);
  $('#senao178006').val(user_Name);
  //$('#senao178005').attr('disabled', 'true');
  $('#senao178006').attr('disabled', 'true');
  
  //設定所屬部門*/
  $('#senao178003').val(Department);
  $('#senao178004').val(Department_Name);
  $('#senao178003').attr('disabled', 'true');
  $('#senao178004').attr('disabled', 'true');

  $('#senao178002').attr('disabled', 'true');//單號
  applicant = $('#senao178005').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao178003').val();//發起流程時參數 申請人部門ID
  createFrmGrid(0);//grid1
  createFrmGrid(1);//grid2
  //複製表單時，下方欄位Reset
  if (formInstOID === "") {
      $("#senao178009").val(systemDateTime); //申請日期
      if (IsInvaildDept($("#senao178003").val())) { //判斷是否為失效部門
    $("#senao178003").val("");	//清空部門
    $("#senao178004").val("");	//清空部門
        senao178005_onchange();
      }
  }
  //性質 其他欄位不可輸入
  $('#senao178016').attr('disabled', 'true');

  var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料
  if (typeof(Grid1Obj) !== "undefined") { //判斷grid物件是否存在表單中
      if (tGrid1.length > 1) { //判斷Grid是否有資料
          Grid1Obj.reload(eval(tGrid1)); //若Grid有資料則將存於隱藏中的值載入Grid中
      }
  }
  var tGrid2 = document.getElementById("Grid2").value; //取出儲存在隱藏欄位中的Grid資料
  if (typeof(Grid2Obj) !== "undefined") { //判斷grid物件是否存在表單中
      if (tGrid2.length > 1) { //判斷Grid是否有資料
          Grid2Obj.reload(eval(tGrid2)); //若Grid有資料則將存於隱藏中的值載入Grid中
      }
  }
  return true;
}
function frmEvent() {
  $('#btnAdd1').on('click', function () { //新增
    btnAdd1_onClick();
  });
  $('#btnEdit1').on('click', function () { //修改
    btnEdit1_onClick();
  });
  $('#btnDel1').on('click', function () { //刪除
    btnDel1_onClick();
  });
  $('#btnAdd2').on('click', function () { //新增
    btnAdd2_onClick();
  });
  $('#btnEdit2').on('click', function () { //修改
    btnEdit2_onClick();
  });
  $('#btnDel2').on('click', function () { //刪除
    btnDel2_onClick();
  });
  $('#senao178e030').on('change', function () { //人員姓名
    senao178e030_b01_onChange();
  });
  $('#senao178005').on('change', function () { //申請人
    senao178005_onChange();
  });
  $('#senao178015').on('change', function () { //性質
    senao178015_onChange();
  });
}
function formSave(){
//errString = "[" + $("#lbl_gsenao035d003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[領用人]不可空白!	
	var errMsg='';
	//var tGrid1Data = Grid1Obj.getData(); 
  var tGrid1Data = getGridData(0); 
  var tGrid2Data = getGridData(1); 
  //申請單位
  if ($("#senao178004").val() === '') {
    errMsg += "[" + $("#lbl_senao178003").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
  }
  //申請人
  if ($("#senao178006").val() === '') {
    errMsg += "[" + $("#lbl_senao178005").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
  }
  //來訪時間
  if ($("#senao178013").val() === '') {
      errMsg += "[" + $("#lbl_senao178012").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";
  } else {

    var start = $("#senao178012").val();
    var end = $("#senao178013").val();

    start = start.replace("T", " ").replace(/-/g, "/") + ":00";
    end = end.replace("T", " ").replace(/-/g, "/") + ":00";

    var startdate = new Date(start);
    var enddate = new Date(end);

    var time = enddate.getTime() - startdate.getTime();
    var days = parseInt(time / (1000 * 60 * 60 * 24));

    if (days > 7) {
      //申請期限 最多一週!!
      errMsg += "[" + $("#lbl_senao178012").html() + "] " + querySNSI009(formId, "002", locale, "", "", "") + "\n";
      $("#senao178012").val('');
      $("#senao178013").val('');
    }
  }
  //性質"其他"檢核
  if ($("#senao178015").val() === '99') {
      if ($("#senao178016").val().trim() === '') {
        errMsg += "[" + $("#lbl_senao178015").html() + "] -" + querySNSI009(formId, "003", locale, "", "", "") + "\n";
      }
  }
  //參觀區域"其他"檢核
  if (document.getElementById("senao178017_3").checked == true) {
    if ($("#senao178018").val().trim() === '') {
      errMsg += "[" + $("#lbl_senao178017").text().trim() + "] -" + querySNSI009(formId, "003", locale, "", "", "") + "\n";
    }
  }
  //臨時停車"車號"檢核
  if ($("#senao178022").val() === 'Y') {
    if ($("#senao178023").val().trim() === '') {
        errMsg += querySNSI009(formId, "004", locale, "", "", "") + "\n";
    }
  }
  //參觀目的"其他"檢核
  if (document.getElementById("senao178024_1").checked == true) {
    if ($("#senao178025").val().trim() === '') {
        errMsg += "[" + $("#lbl_senao178024").text().trim() + "] -" + querySNSI009(formId, "003", locale, "", "", "") + "\n";
    }
  }
  //判斷Grid是否有資料 
	if (tGrid1Data.length <= 0){  
			//參觀貴賓
      errMsg += "[" + $("#senao178026").html() + "] " + querySNSI009("senao", "004", locale, "", "", "") + "\n";
		} else {
      for (var i = 0; i < tGrid1Data.length; i++) {

        if (tGrid1Data[i]['SENAO178D002'] === '') {
          //errMsg += " [表單明細]:第 " + tGrid1Data[i][0] + " 筆 -「貴賓姓名」不可為空白!! .\n";
          errMsg += querySNSI009(formId, "005", locale, "", "", "").replace("@@1", tGrid1Data[i]['SENAO178D001']).replace("@@2", $("#lbl_senao178d002").html()) + "\n";
        }
        if (tGrid1Data[i]['SENAO178D003'] === '') {
          //errMsg += " [表單明細]:第 " + tGrid1Data[i][0] + " 筆 -「職稱」不可為空白!! .\n";
          errMsg += querySNSI009(formId, "005", locale, "", "", "").replace("@@1", tGrid1Data[i]['SENAO178D001']).replace("@@2", $$("#lbl_senao178d003").html()) + "\n";
        }
      }
    }
    //判斷Grid2是否有資料
    if (tGrid2Data.length <= 0) {
      //本公司陪同人員
      errMsg += "[" + $("#senao178027").html() + "] " + querySNSI009("senao", "004", locale, "", "", "") + "\n";
    } else {
      for (var i = 0; i < tGrid2Data.length; i++) {
        if (tGrid2Data[i]['SENAO178E002'] === '') {
          //errMsg += " [表單明細]:第 " + tGrid2Data[i][0] + " 筆 -「部門」不可為空白!! .\n";
          errMsg += querySNSI009(formId, "005", locale, "", "", "").replace("@@1", tGrid2Data[i]['SENAO178E001']).replace("@@2", $$("#lbl_senao178e002").html()) + "\n";
        }
        if (tGrid2Data[i]['SENAO178E004'] === '') {
          //errMsg += " [表單明細]:第 " + tGrid2Data[i][0] + " 筆 -「姓名」不可為空白!! .\n";
          errMsg += querySNSI009(formId, "005", locale, "", "", "").replace("@@1", tGrid2Data[i]['SENAO178E001']).replace("@@2", $$("#lbl_senao178e004").html()) + "\n";
        }
        if (tGrid2Data[i]['SENAO178E006'] === '') {
          //errMsg += " [表單明細]:第 " + tGrid2Data[i][0] + " 筆 -「職稱」不可為空白!! .\n";
          errMsg += querySNSI009(formId, "005", locale, "", "", "").replace("@@1", tGrid2Data[i]['SENAO178E001']).replace("@@2", $$("#lbl_gsenao178e006").html()) + "\n";
        }
      }
    }
    // 20231018 Neil 參觀生產流程
    if (document.getElementById("senao178024_0").checked == true){ 
      visitproductionline.value="Y";
    }else{
      visitproductionline.value="N";
    }

    if (errMsg === "") {
      if (activityId === "UserTask_2") {
          //if (workItemSource !== '1' && workItemSource !== '2') {
          genSubject();
          console.log("genSubject 完成");
          // }
      }
      return true;
    } else {
      alert(errMsg);
      return false;
    }
}
function formCreate() {
    return true;
}
function formClose() {
    return true;
}
/*---------------------Form Load Function End--------------*/
/*---------------------公用Function Start--------------*/
function frmGeneralLoad(type, today) {//通用需要載入的資料
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
  //form_org.style.backgroundColor = '#f7d9e4';
  //form_ou.style.backgroundColor = '#f7d9e4';
  /*if (form_ou.value == ''){
    alert(querySNSI009("senao","019",locale,"","",""));	//取得公司對應有問題，請重新開單一次
    window.history.go(-1);
  }else{
    OU_ID = _OU[$$("#form_ou").val()] + "";
    ORG_ID = _ORG[$$("#form_ou").val()] + "";//預設用senao取86
  }  */
  //表單代號
  $('#senao178001').val(type);//vivian註解:網址格式不對導致ProcessPackageId抓不到代號
  $('#senao178001').attr('disabled', 'true');

  console.log($("#form_ou").val());
  OU_ID = _OU[$("#form_ou").val()];
  ORG_ID = _ORG[$("#form_org").val()];
  return true;
}
function showCurrentDate() {//顯示今天日期
    var result = "";
    var d = new Date();
    result = d.getUTCFullYear() + '/' + pad(d.getUTCMonth() + 1) + '/' + pad(d.getUTCDate());
    //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
    return result;
}
function pad(number) {//補0
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
    const prefixSubject = $("#Label1").html() + "_" + $("#senao178011").val();

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
function loadDsUpdate(data) {
  alert("Update Successful!");
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createFrmGrid(id) {//建立單身Grid1
  let options = {};
  let $grid;
  let gridCol = {};
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      options = frmGrid1List[0];
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      options = frmGrid2List[0];
      break;
  }
  //$grid = $('#' + frmGrid1List[id].gid);
  //$.jgrid.gridUnload(frmGridList[id].gid);
  //options = frmGrid1List[id];
  switch (id) {
    case 0:
    case 1:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao178002').val()
      };
      $grid.createJqGrid(options);
      getGridColModel(id);
      break;
    case 2:
      break;
  }
  gridCol = getGridColModel(id);
  if (gridCol.label.length > 0) {
    switch (id) {
    case 0:
      Grid1Columns.push(gridCol.label);
      Grid1ColumnIds.push(gridCol.name);
      break;
    case 1:
      Grid2Columns.push(gridCol.label);
      Grid2ColumnIds.push(gridCol.name);
      break;
    }
    /*Grid1Columns.push(gridCol.label);
    Grid1ColumnIds.push(gridCol.name);*/
  }
}
/**
 * 取得Grid內的數據
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridData(id) {
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGridLists[id].gid);
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
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGridLists[id].gid);
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
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGrid1List[id].gid);
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
  let binding = [];
  let columnIds = [];
  switch (id) {
    case 0:
      binding = Grid1Binding[0];
      columnIds = Grid1ColumnIds[0];
      break;
    case 1:
      binding = Grid2Binding[0];
      columnIds = Grid2ColumnIds[0];
      break;
  }
  //let binding = GridBinding[id];
  //let columnIds = Grid1ColumnIds[id];
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
 */
function gridaddRow(id) {
  let data = {};
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}
/**
 * [Grid] 修改單身GRID資料
 */
function grideditRow(id) {
  let data = {};
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  data = getRowData(id, rowid);
  $grid.jqGrid('setRowData', rowid, data);
}
/**
 * [Grid] 刪除單身GRID資料
 */
function griddeleteRow(id) {
  let data = {};
  switch (id) {
    case 0:
      $grid = $('#' + frmGrid1List[0].gid);
      break;
    case 1:
      $grid = $('#' + frmGrid2List[0].gid);
      break;
  }
  //let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  if (confirm('確認刪除?')) {
    $grid.jqGrid('delRowData', rowid);
  }
}
/**
 * [Grid] 取的Grid的位置
 */
function getGridSelectRow(id) {
  let rowId = "";
  switch (id) {
    case 0:
      rowId = $("#" + frmGrid1List[0].gid).jqGrid('getGridParam', 'selrow');
      break;
    case 1:
      rowId = $("#" + frmGrid2List[0].gid).jqGrid('getGridParam', 'selrow');
      break;
  }
  //let rowId = $("#" + frmGridList[id].gid).jqGrid('getGridParam', 'selrow');
  console.log(rowId);
  return rowId;
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
 * [Grid] 清除單身對應欄位資料
 */
function clearBinding(id) {
  let binding = [];
  switch (id) {
    case 0:
      binding = Grid1Binding[0];
      break;
    case 1:
      binding = Grid2Binding[0];
      break;
  }
  //let binding = GridBinding[id];
  for (let i = 0; i < binding.length; i++) {
    if (binding[i].length > 0) {
      $("*[name='" + binding[i] + "']").val('');
    }
  }
}
//檢查grid欄位
function chkGrid1Value(){
  //console.log('CheckDetail1');
  var errstr = '';
  if ($("#gsenao178d002").val() === '') {
    errstr += "[" + $("#lbl_gsenao178d002").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[貴賓姓名]不可空白
  }
  if ($("#gsenao178d003").val() === '') {
    errstr += "[" + $("#lbl_gsenao178d003").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[職稱]不可空白
  }
  return errstr;
}
//檢查grid欄位
function chkGrid2Value(){
  var errstr = '';
  if ($("#gsenao178e002").val() === '' || $("#gsenao178e003").val() === '') {
    errstr += "[" + $("#lbl_gsenao178e002").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[部門]不可空白
  }
  if ($("#gsenao178e004").val() === '' || $("#gsenao178e005").val() === '') {
    errstr += "[" + $("#lbl_gsenao178e004").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[人員姓名]不可空白
  }
  if ($("#gsenao178e006").val() === '') {
    errstr += "[" + $("#lbl_gsenao178e006").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[職稱]不可空白
  }
  return errstr;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {

}
/*---------------------JqGrid Function End--------------*/
/*---------------------Button Function Start--------------*/
$('#senao178005_b01').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao178005','senao178006','senao178003','senao178004');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao178e030_b01').on('click', function () { //人員姓名開窗
  // sessionStorage 存入數據
  let tTitle = "陪同人員";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao178028','gsenao178e004','','gsenao178e002');//回傳元件參數
  let tReturnFunction = new Array("senao178e030_b01_onChange()"); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME: 'ALL'};
  let tQBEField = { ID: 'ID', ID_1: 'ID_1', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------Button Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * [Grid1] 新增資料
 */
function btnAdd1_onClick() {
  var errorMsg="";
  errorMsg = chkGrid1Value();//檢查欄位是否有空
  //新增欄位
  if (errorMsg != "") {
  alert(errorMsg);
  return false;
  } else {
    $grid = $('#' + frmGrid1List[0].gid);
    let rowid = $grid.getGridParam("records") + 1;
    gsenao178d001.value = rowid; //設定項次
    gridaddRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    
    initGridRow();
    if (getGridData(0).length > 0) {
      form_org.disabled = true;
    } else {
      form_org.disabled = false;
    }
  }
  return true;
}
/**
 * [Grid2] 新增資料
 */
function btnAdd2_onClick() {
  var errorMsg="";
  errorMsg = chkGrid2Value();//檢查欄位是否有空
  //新增欄位
  if (errorMsg != "") {
    alert(errorMsg);
    return false;
  } else {
    $grid = $('#' + frmGrid2List[0].gid);
    let rowid = $grid.getGridParam("records") + 1;
    gsenao178e001.value = rowid; //設定項次
    gridaddRow(1);
    clearBinding(1); //新增後清除Binding欄位資料
    
    initGridRow();
    if (getGridData(1).length > 0) {
        form_org.disabled = true;
    } else {
        form_org.disabled = false;
    }

  }
  return true;
}
/**
 * [Grid1] 修改資料
 */
function btnEdit1_onClick(){
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
    refreshRowNo(0, 'SENAO178D001');//重新計算單身Grid項次
		//document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
    $("#" + frmGrid1List[0].gid).jqGrid("resetSelection");
	}else{
		alert(errorMsg);
	}
}
/**
 * [Grid2] 修改資料
 */
function btnEdit2_onClick(){
  var tGridIndex = getGridSelectRow(1); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
      alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
      return false;
  }
  var errorMsg="";
  errorMsg = chkGrid2Value();//檢查欄位是否有空
	if (errorMsg == ""){
    grideditRow(1);
    clearBinding(1); //新增後清除Binding欄位資料
    refreshRowNo(1, 'SENAO178E001');//重新計算單身Grid項次
		//document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
    $("#" + frmGrid2List[0].gid).jqGrid("resetSelection");
	}else{
		alert(errorMsg);
	}
}
/**
 * [Grid1] 刪除資料
 */
function btnDel1_onClick() {
    var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
    if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
        alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
        return false;
    }
    var errorMsg="";
    errorMsg = chkGrid1Value();//檢查欄位是否有空
    if (errorMsg == "") {
        griddeleteRow(0); //將Grid某筆資料刪除
        clearBinding(0);
        refreshRowNo(0, 'SENAO178D001');//重新計算單身Grid項次
        initGridRow();
        /*if (getGridData(0).length > 0) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }*/
        $("#" + frmGrid1List[0].gid).jqGrid("resetSelection");
    } else {
        alert(errorMsg);
    }
}
/**
 * [Grid2] 刪除資料
 */
function btnDel2_onClick() {
    var tGridIndex = getGridSelectRow(1); //可知道點選哪一筆
    if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
        alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
        return false;
    }
    var errorMsg="";
    errorMsg = chkGrid2Value();//檢查欄位是否有空
    if (errorMsg == "") {
        griddeleteRow(1); //將Grid某筆資料刪除
        clearBinding(1);
        refreshRowNo(1, 'SENAO178E001');//重新計算單身Grid項次
        initGridRow();
        /*if (getGridData(0).length > 0) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }*/
        $("#" + frmGrid2List[0].gid).jqGrid("resetSelection");
    } else {
        alert(errorMsg);
    }
}
/**
 * 申請人欄位，查詢申請人相關資料
 */
function senao178005_onChange() {
  var userInfo = {};
  if ($("#senao178005").val() !== "") {
    userInfo = queryUserByEmpId($("#senao178005").val());
    if (typeof userInfo.userId !== "undefined") {
    $("#senao178003").val(userInfo.unitId);	//申請單位ID
    $("#senao178004").val(userInfo.unitName);	//申請單位名稱
    $("#senao178005").val(userInfo.userId);	//申請人ID
    $("#senao178006").val(userInfo.userName);	//申請人名稱
    } else {
      //alert("輸入的工號:@@1有誤，請確認!");
      alert(querySNSI009(formId, "001", locale, "", "", "").replace("@@1", $("#senao178005").val()));
			$("#senao178003").val("");	//申請單位ID
			$("#senao178004").val("");	//申請單位名稱
			$("#senao178005").val("");	//申請人ID
			$("#senao178006").val("");	//申請人名稱
    }
  } else {
    $("#senao178003").val("");	//申請單位ID
    $("#senao178004").val("");	//申請單位名稱
		$("#senao178005").val("");	//申請人ID
		$("#senao178006").val("");	//申請人名稱
  }
  return true;
}
/**
 * 依userid抓取職稱
 * senao178e030_b01_onChange()
 */
function senao178e030_b01_onChange() {
    var errstr = "";
    var sqlId = "BPM_SENAO178_01";
    var tParams = [];
    var data = [];
    if ($("#gsenao178e004").val() !== '') {//人員姓名
        var str = $("#senao178028").val();
        tParams.push(str); //表單OID
        data = ajaxGetData(invokeURL + sqlId, {
          NAME: tParams[0]
        });
        if (data[0].result == undefined) {
          if (data.length > 0) {
			      $("#gsenao178e006").val(data[0].FUNCTIONDEFINITIONNAME);
          }
        }
    } else {
        errstr += "[" + $("#lbl_gsenao178e004").html() + "] " + querySNSI009($("#form_ou").val(), "004", locale, "", "", "") + "\n";	//[人員姓名]不可空白
        alert(errstr);
    }
}
function senao178015_onChange() {
  if ($("#senao178015").val() == "99") {
    $('#senao178016').prop('disabled', false);
  }else{
    $('#senao178016').prop('disabled', true);
  }
}
/*---------------------欄位onChange、onClick Function End--------------*/
