var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var _ORG = {};//儲存所有廠區的Json
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;
//var hdn_subject = document.getElementById("hdn_subject");//主旨--隱藏
var hdn_haveOtherType = document.getElementById("hdn_haveOtherType");//是否含有自定義其他類型的文具類型
var hdn_Total=document.getElementById("hdn_Total");//
var form_ou = document.getElementById("form_ou");//公司別
//var hdn_form_ou = document.getElementById("hdn_form_ou");//公司別id (ex :86/96)--隱藏
var form_org = document.getElementById("form_org");//廠區
//var hdn_form_org = document.getElementById("hdn_form_org");//廠區id--隱藏
var temp_col = document.getElementById("temp_col"); //Temp Column
var senao035m002 = document.getElementById("senao035m002");//表單單號
var senao035m003 = document.getElementById("senao035m003");//申請人ID
var senao035m003_t1 = document.getElementById("senao035m003_t1");//申請人姓名
var senao035m004 = document.getElementById("senao035m004");//所屬部門
var senao035m004_Oid = document.getElementById("senao035m004_Oid");//所屬部門
var senao035m004_t1 = document.getElementById("senao035m004_t1");//所屬部門
var senao035m005 = document.getElementById("senao035m005");//申請日期
var senao035m006 = document.getElementById("senao035m006");//分機號碼
var senao035m007 = document.getElementById("senao035m007");//交貨地址
var senao035m008 = document.getElementById("senao035m008");//請購原因
var senao035d004_b1 =  document.getElementById("senao035d004_b1");//[類別@品名]按鈕
//var gsenao035d014 = document.getElementById("gsenao035d014");//項次 
var gsenao035d011 = document.getElementById("gsenao035d011");//"歸屬部門"
var gsenao035d011_t1 = document.getElementById("gsenao035d011_t1");//"部門名稱"
var gsenao035d004 = document.getElementById("gsenao035d004");//"類別@品名"
var gsenao035d004_t1 = document.getElementById("gsenao035d004_t1");//"類別@品名"
var gsenao035d005 = document.getElementById("gsenao035d005");//"規格/型號"
var gsenao035d006 = document.getElementById("gsenao035d006");//"顏色
var gsenao035d007 = document.getElementById("gsenao035d007");//"數量"
var gsenao035d008 = document.getElementById("gsenao035d008");//"單位"
var gsenao035d003 = document.getElementById("gsenao035d003");// "領用人"
var gsenao035d009 = document.getElementById("gsenao035d009");// "備註"
var gsenao035d010 = document.getElementById("gsenao035d010");//"id"
var gsenao035d012 = document.getElementById("gsenao035d012");//"單價"
var gsenao035d013 = document.getElementById("gsenao035d013");//"金額"
var systemDateTime = ""; //今天日期
/***************************GRID***********************/
var Grid1 = document.getElementById("Grid1"); //Grid1
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
//單身grid1 元件欄位名稱
var GridBinding = [
  ["","gsenao035d011","gsenao035d011_t1","gsenao035d004","gsenao035d004_t1","gsenao035d005","gsenao035d006","gsenao035d007","gsenao035d008","gsenao035d003","gsenao035d009","gsenao035d010","gsenao035d012","gsenao035d013"]
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
  colAPI: 'BPM_SENAO035_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO035_GRID1_LIST',
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
  //activityId = "Applicant";
  //vivian 暫時定義 end
  formOpen();
  frmEvent();

});
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //DWREngine.setAsync(false);
  //每個關卡欄位控卡
  setActivityFieldControl();
  systemDateTime = showCurrentDate(); //今天日期
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //DWREngine.setAsync(true);
  //設定申請人*/
  $('#senao035m003').val(userId);
  $('#senao035m003_t1').val(user_Name);
  
  //設定所屬部門*/
  $('#senao035m004_Oid').val(Department);
  $('#senao035m004_t1').val(Department_Name);

  $('#senao035m002').attr('disabled', 'true');//單號
  applicant = $('#senao035m003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao035m004_Oid').val();//發起流程時參數 申請人部門ID
  createFrmGrid(0);
  var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料  
	if(typeof(Grid1Obj) != "undefined"){  //判斷grid物件是否存在表單中   
		if(tGrid1.length >= 1 ){  //判斷Grid是否有資料  
			Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中  
		}  
	} 
  //For 複製表單的前置處理
	if(activityId == "Applicant" &&  senao035m002.innerHTML == ""){
    //申請時間
		senao035m005.value = systemDateTime;   
    senao035m005.readOnly = true;    
		//複製表單時，下方欄位Reset
		if (formInstOID == ""){
			if (IsInvaildDept(senao035m004_Oid.value)){	//判斷是否為失效部門
				senao035m004_Oid.value = "";	//清空部門
				senao035m004_t1.value = "";	//清空部門
			}
		}
	}
	if(activityId == "Applicant" ){//申請者
		form_org.disabled = false;//廠區
		btnReset_onClick();
		//showBackGroundColor();  
	}else if(activityId == "Buyer1" ){//採購詢價1   
	}
  return true;
}
function frmEvent() {
  $('#btnAdd').on('click', function () { //新增
    btnAdd_onClick();
  });
  $('#btnEdit').on('click', function () { //修改
    btnEdit_onClick();
  });
  $('#btnDel').on('click', function () { //刪除
    btnDel_onClick();
  });
  $('#btnReset').on('click', function () { //重置
    btnReset_onClick();
  });
  $('#btnExport').on('click', function () { //匯出Excel
    btnExport_onClick();
  });
  $('#gsenao035d007').on('change', function () { //數量
    gsenao035d007_onChange();
  });
  $('#gsenao035d012').on('change', function () { //單價
    gsenao035d012_onChange();
  });
}
function formSave(){
//errString = "[" + $("#lbl_gsenao035d003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[領用人]不可空白!	
	var errstr='';
	//var tGrid1Data = Grid1Obj.getData(); 
  var tGrid1Data = getGridData(0); 
	if (activityId == "Applicant"){       
    //單頭檢查欄位使用 efgpDetails.js中的chkBPMFrmData檢查
		if (tGrid1Data.length <= 0){  //判斷Grid是否有資料 
			errstr += querySNSI009(form_ou.value, "033", locale, "", "", "") + "\n"; //單身明細至少要有新增一筆資料
		}else{
			for (var i = 0; i < tGrid1Data.length; i++) {        
				if (tGrid1Data[i]['id'].trim() == ""){//
					//errstr += querySNSI009(form_ou.value, "015", locale, (i+1), $$("#Label20").html(), "ID") + "\n"; //第i筆 明細資料[ID]不可空白!
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", "ID") + "\n";//第i筆 明細資料[ID]不可空白!
				}else if(tGrid1Data[i]['id'].trim()=="Z99"){//{
					hdn_haveOtherType.value="Y";
				}
				if (tGrid1Data[i]['SENAO035D011'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d011").html()) + "\n";//第i筆 明細資料[歸屬部門]不可空白!
				}
				if (tGrid1Data[i]['SENAO035D004'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d004").html()) + "\n";//第i筆 明細資料[類別]不可空白!
				}
				if (tGrid1Data[i]['SENAO035D004_T1'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "",$("#lbl_gsenao035d004_t1").html()) + "\n";//第i筆 明細資料[品名]不可空白!
				}
				if (tGrid1Data[i]['SENAO035D005'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d005").html()) + "\n"; //第i筆 明細資料[規格]不可空白!
				}
				if (tGrid1Data[i]['SENAO035D007'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "",$("#lbl_gsenao035d007").html()) + "\n"; //第i筆 明細資料[數量]不可空白!
				}
				if (tGrid1Data[i]['SENAO035D008'].trim() == ""){// 
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d008").html()) + "\n";    //第i筆 明細資料[單位]不可空白!  
				}
				if (tGrid1Data[i]['SENAO035D003'].trim() == ""){//
          errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d003").html()) + "\n";    //第i筆 明細資料[領用人]不可空白!   
				} 
			}
		}
	}else if (activityId == "Buyer1"){
		for (var i = 0; i < tGrid1Data.length; i++) {
			if (tGrid1Data[i][12].trim() == "" || tGrid1Data[i]['SENAO035D012'].trim() == "0"){//  
        errstr += "[" + $("#Label20").html() + "]" + querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao035d012").html()) + "\n";    //第i筆 明細資料[單價]不可空白!    
			}
		}
	}
	if(activityId=="Applicant" || activityId=="Buyer1" ){
		var total=0;
		for (var i = 0; i < tGrid1Data.length; i++) {
			if (activityId == "Applicant"&& tGrid1Data[i]['id'].trim() == "Z99"){
				tGrid1Data[i]['SENAO035D012'] = "0";
				tGrid1Data[i]['SENAO035D013'] = "0";
			}      
			if (isNumeric(tGrid1Data[i]['SENAO035D012'].trim())&&isNumeric(tGrid1Data[i]['SENAO035D007'].trim())){//單價*數量
				tGrid1Data[i]['SENAO035D013'] = Number(tGrid1Data[i]['SENAO035D012'].trim())*Number(tGrid1Data[i]['SENAO035D007'].trim());
				total += Number(tGrid1Data[i]['SENAO035D013']);
			}
		}
		//Grid1Obj.reload(eval(tGrid1Data));  //若Grid有資料則將存於隱藏中的值載入Grid中  
		//document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
		hdn_Total.value = total;
	}
	if (errstr == ''){
		/*//處理主旨
		if (activityId == "Applicant"){
			//document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中
			temp_col.value = "";//清空文具開窗暫存值
			if (window.parent.document.forms[0].txtSubject){
				var hdn_subject = window.parent.document.forms[0].txtSubject.value;        
				if (hdn_subject == ""|| hdn_subject.indexOf($("#Label1").html()) == -1){
					hdn_subject = senao035m003_t1.value + "_" + $("#Label1").html() + "_";  
					window.parent.document.forms[0].txtSubject.value=hdn_subject + window.parent.document.forms[0].txtSubject.value;
				}        
			}
		}*/
		return true;
	}else{
		alert(errstr);
		return false;
	}
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
  form_org.style.backgroundColor = '#f7d9e4';
  form_ou.style.backgroundColor = '#f7d9e4';
  /*if (form_ou.value == ''){
    alert(querySNSI009("senao","019",locale,"","",""));	//取得公司對應有問題，請重新開單一次
    window.history.go(-1);
  }else{
    OU_ID = _OU[$$("#form_ou").val()] + "";
    ORG_ID = _ORG[$$("#form_ou").val()] + "";//預設用senao取86
  }  */
  //表單代號
  $('#senao035m001').val(type);//vivian註解:網址格式不對導致ProcessPackageId抓不到代號
  $('#senao035m001').attr('disabled', 'true');

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
//計算金額
function CalTotalAmount(){
	if ( gsenao035d007.value !== "" && gsenao035d012.value !== ""){//數量不等於空 和 單價不為空
		gsenao035d013.value = Number(gsenao035d007.value) * Number(gsenao035d012.value);//金額=數量*單價
	}else{
		gsenao035d013.value = 0;
	}
}
//文具開窗回傳資料處理
function senao035d004_b1_process(){
  if (temp_col.value!=""){
		//var tmpPRSerial = "";    
		var aryData=eval(temp_col.value);
    var gsenao035d011 = $("#gsenao035d011").val();   // 歸屬部門
    var gsenao035d011_t1 = $("#gsenao035d011_t1").val(); // 部門名稱
    var gsenao035d003 = $("#gsenao035d003").val();   // 領用人
    let data = {};
    for (let i = 0; i < aryData.length; i++) {
      $grid = $("#" + frmGridList[0].gid);
      rowid = $grid.getGridParam("records") + 1;
      let binding = aryData[i];
      let columnIds = Grid1ColumnIds[0];
      let rowData = bindingToRow(rowid,binding, gsenao035d011, gsenao035d011_t1, gsenao035d003);
      for (let i = 0; i < rowData.length; i++) {
        let value = "";
        value = rowData[i];
        if (value == undefined) {
          value = "";
        }
        data[columnIds[i]] = value;
      }
      
      $grid.jqGrid('addRowData', rowid, data, 'last');

    }

	}
	return true; 
}
//整理文具開窗多選資料
function bindingToRow(rowid, binding, gsenao035d011, gsenao035d011_t1, gsenao035d003) {
  let rowData = [];
  rowData[0] = rowid;//項次
  rowData[1] = gsenao035d011;//歸屬部門
  rowData[2] = gsenao035d011_t1;//部門名稱
  rowData[3] = binding[2];//類別
  rowData[4] = binding[3];//品名
  rowData[5] = binding[4];//規格型號
  rowData[6] = binding[5];//顏色
  rowData[7] ="1";//數量
  rowData[8] = binding[6];//單位
  rowData[9] = gsenao035d003;//領用人
  rowData[10] = "";//備註
  rowData[11] = binding[1];//id
  rowData[12] = binding[7];//單價
  rowData[13] = binding[7];//金額
  return rowData;
}
//senao035d004_b1開窗前檢查
function senao035d004_b1_beforePick(){
	var errString = "";
	if (gsenao035d011.value == "")  {
		errString ="[" + $("#lbl_gsenao035d011").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[歸屬部門]不可空白!	
		alert(errString);
		return false;
	}
	if (gsenao035d003.value == "")  {
		errString = "[" + $("#lbl_gsenao035d003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[領用人]不可空白!	
		alert(errString);
		return false;
	}
	return true;
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createFrmGrid(id) {//建立單身Grid
  let options = {};
  let $grid;
  let gridCol = {};
  $grid = $('#' + frmGridList[id].gid);
  //$.jgrid.gridUnload(frmGridList[id].gid);
  options = frmGridList[id];
  switch (id) {
    case 0:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao035m002').val()
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
 */
function gridaddRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}
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
  let binding = GridBinding[id];
  for (let i = 0; i < binding.length; i++) {
    if (binding[i].length > 0) {
      $("*[name='" + binding[i] + "']").val('');
    }
  }
}
//檢查grid欄位
function chkGrid1Value(){
	var errString="";
	if (gsenao035d003.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[領用人]不可空白!			
	}
	if (gsenao035d011.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d011").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[歸屬部門]不可空白!	
	}
	if (gsenao035d004.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d004").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[類別]不可空白!	
	}
	if (gsenao035d004_t1.value.trim == ""){
		errString += "[" + $("#lbl_gsenao035d004_t1").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[品名]不可空白!			
	}
	if (gsenao035d005.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d005").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[規格型號]不可空白!	
	}
	if (gsenao035d006.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d006").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[顏色]不可空白!	
	}
	if (gsenao035d008.value.trim() == ""){
		errString += "[" + $("#lbl_gsenao035d008").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[單位]不可空白!	
	}  
	if (activityId == "Buyer1" ){            
		if (gsenao035d012.value.trim() == ""){
			errString += "[" + $("#lbl_gsenao035d012").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[單價]不可空白!	
		}  
	}
	return errString;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {

}
/*---------------------JqGrid Function End--------------*/
/*---------------------Button Function Start--------------*/
$('#senao035m007_b1').on('click', function () { //交貨地址開窗
    // sessionStorage 存入數據
    let tTitle = "交貨地址";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao035m007_t1","","senao035m007","","","");//回傳元件參數
    let tReturnFunction = new Array(); //回傳函數
    let tColAPi = "BPM_SENAO035_ADDRESS007";
    let tAPI = invokeURL + 'BPM_SENAO035_ADDRESS007';
    let tParameter = { form_ou: form_ou.value};
    let tQBEField = {}; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao035d003_b1').on('click', function () { //領用人開窗
  // sessionStorage 存入數據
  let tTitle = "領用人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("","gsenao035d003","gsenao035d011","gsenao035d011_t1","");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO035_PEOPLE011";
  let tAPI = invokeURL + 'BPM_SENAO035_PEOPLE011';
  let tParameter = { form_ou: form_ou.value , ID: null,USERNAME: null,ID_1: null,ORGANIZATIONUNITNAME:null};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1: 'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao035d011_b1_input').on('click', function () { //歸屬部門開窗
  // sessionStorage 存入數據
  let tTitle = "歸屬部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("gsenao035d011","gsenao035d011_t1");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SENAO035d011_b1_input";
  let tAPI = invokeURL + 'BPM_SENAO035d011_b1_input';
  let tParameter = { form_ou: form_ou.value, ID: null, ORGANIZATIONUNITNAME: null};
  let tQBEField = {  ID: 'ID', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao035d004_b1').on('click', function () { //類別@品名開窗
  var tIsPrevEventOK = false;
  if("senao035d004_b1_beforePick()" == ""){
    tIsPrevEventOK = true;
  }else{
    try {
      //execute prev event..
      tIsPrevEventOK = eval("senao035d004_b1_beforePick()");
    } catch(e) {
      alert("Error function : senao035d004_b1_beforePick() ");
    }
  }
  
  if(tIsPrevEventOK==undefined){
    alert("senao035d004_b1_beforePick(): Return value must be Boolean ");
  }
  
  if (tIsPrevEventOK) {
    // sessionStorage 存入數據
    let tTitle = "文具開窗";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("temp_col");//回傳元件參數
    let tReturnFunction = new Array("senao035d004_b1_process()"); //回傳函數
    let tColAPi = "BPM_SENAO035d004_b1";
    let tAPI = invokeURL + 'BPM_SENAO035d004_b1';
    let tParameter = {SENAO035A001:null ,SENAO035A002:null ,SENAO035A003:null ,SENAO035A004:null ,SENAO035A005:null ,SENAO035A006:null ,SENAO035A007:null };
    let tQBEField = {SENAO035A001:'SENAO035A001',SENAO035A002:'SENAO035A002',SENAO035A003:'SENAO035A003',SENAO035A004:'SENAO035A004',SENAO035A005:'SENAO035A005',SENAO035A006:'SENAO035A006',SENAO035A007:'SENAO035A007'}; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
/*---------------------Button Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
//數量
function gsenao035d007_onChange(){
	if(gsenao035d007.value != ""){
		if( !isNumeric(gsenao035d007.value)){				
			alert("[" + $("#lbl_gsenao035d007").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[數量]必須為數值!
			gsenao035d007.value = "";
		}else if( gsenao035d007.value == "0"){
			alert("[" + $("#lbl_gsenao035d007").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[數量]請填寫大於0的數值!
		}else{
			CalTotalAmount();    
		}
	}
}
//單價
function gsenao035d012_onChange(){
	if(gsenao035d012.value !== "" ){
		if(! isNumeric(gsenao035d012.value)){
			alert("[" + $("#lbl_gsenao035d012").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[單價]必須為數值!
			gsenao035d012.value = "";
		}
	}
	CalTotalAmount();
}
function btnReset_onClick(){
	//Grid1Obj.clearBinding();
  clearBinding(0);
	gsenao035d010.readOnly = true;//隱藏欄位
	gsenao035d010.value = "Z99";
	gsenao035d012.readOnly = true;//採購單價
	gsenao035d012.value = "0";
	gsenao035d013.readOnly = true;//採購金額
	gsenao035d013.value = "0";
	gsenao035d004.readOnly = false;//類別
	gsenao035d004_t1.readOnly = false;
	gsenao035d005.readOnly = false;//規格型號
	gsenao035d006.readOnly = false;//顏色
	gsenao035d008.readOnly = false;//單位      
	//showBackGroundColor();
}
/**
 * [Grid] 新增資料
 */
function btnAdd_onClick() {
    var errorMsg="";
	  errorMsg = chkGrid1Value();//檢查欄位是否有空
    //新增欄位
    if (gsenao035d010.value != "Z99"){
      errorMsg += "若要新增自定義明細,請先按下[重置]後再新增";	//若要新增自定義明細,請先按下[重置]後再新增
    }
    if (errorMsg != "") {
        alert(errorMsg);
        return false;
    } else {
        CalTotalAmount();//計算金額
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
    CalTotalAmount();
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    refreshRowNo(0, 'SENAO035D014');//重新計算單身Grid項次
		//document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
		btnReset_onClick();
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
    var errorMsg="";
    errorMsg = chkGrid1Value();//檢查欄位是否有空
    if (errorMsg == "") {
        griddeleteRow(0); //將Grid某筆資料刪除
        clearBinding(0);
        refreshRowNo(0, 'SENAO035D014');//重新計算單身Grid項次
        initGridRow();
        /*if (getGridData(0).length > 0) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }*/
        $("#" + frmGridList[0].gid).jqGrid("resetSelection");
    } else {
        alert(errorMsg);
    }
}
/**
 * [Grid] 匯出資料
 */
function btnExport_onClick(){

}
/*---------------------欄位onChange、onClick Function End--------------*/
