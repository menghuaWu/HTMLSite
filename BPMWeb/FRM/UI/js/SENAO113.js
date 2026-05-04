
//var formId = 'SENAO113'
var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var _ORG = {};//儲存所有廠區的Json
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;

var senao113m001 = document.getElementById("senao113m001");//表單代號
var senao113m031_0 = document.getElementById("senao113m031_0"); //送簽至總經理
var senao113m032_0 = document.getElementById("senao113m032_0"); //送簽至董事長
var lbl_senao113m027 = document.getElementById("lbl_senao113m027"); //授信額度Label
var senao113m027 = document.getElementById("senao113m027"); //授信額度
var lbl_senao113m028 = document.getElementById("lbl_senao113m028"); //已使用信用額度Label
var senao113m028 = document.getElementById("senao113m028"); //已使用信用額度
var lbl_totalIncludeTax = document.getElementById("lbl_totalIncludeTax"); //訂單總金額(含稅)Label
var totalIncludeTax = document.getElementById("totalIncludeTax"); //訂單總金額(含稅)
var lbl_overCredit = document.getElementById("lbl_OverCredit"); //超過授信額度Label
var overCredit = document.getElementById("OverCredit"); //(計算後)授信額度
var greenCheckImage = document.getElementById("EfCheckMark"); //綠色勾選圖示

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao113m002 = document.getElementById("senao113m002"); //表單單號
var senao113m043 = document.getElementById("senao113m043"); //隱藏欄位，拋轉狀態?
var senao113m029 = document.getElementById("senao113m029"); //加簽PM人員
var senao113m029_hdn = document.getElementById("senao113m029_hdn"); //隱藏欄位，加簽PM人員原始格式
var clearPM = document.getElementById("ClearPM"); //清空加簽人員
var emplus030015 = document.getElementById("emplus030015"); //填表人id
var emplus030005 = document.getElementById("emplus030005"); //填表人名稱
var senao113m003 =
  document.getElementById("senao113m003"); //申請人id
var senao113m003_ORA = document.getElementById("senao113m003_ORA"); //[Oracle] sales rep id
var senao113m005 = document.getElementById("senao113m005"); //申請人名稱
var senao113m004 = document.getElementById("senao113m004"); //部門id
var senao113m006 = document.getElementById("senao113m006"); //部門名稱
var emplus030007 = document.getElementById("emplus030007"); //申請時間
var senao113m037 = document.getElementById("senao113m037"); //負責業務id
var senao113m037_ORA = document.getElementById("senao113m037_ORA"); //[Oracle] sales id
var senao113m038 = document.getElementById("senao113m038"); //負責業務
var senao113m007 = document.getElementById("senao113m007"); //Order No
var senao113m007_ORA = document.getElementById("senao113m007_ORA"); //[Oracle] Header Id
var senao113m008 = document.getElementById("senao113m008"); //date ordered
var senao113m010 = document.getElementById("senao113m010"); //Customer number
var senao113m010_t1 = document.getElementById("senao113m010_t1"); //Customer Name
var senao113m010_ORA = document.getElementById("senao113m010_ORA"); //隱藏欄位，[Oracle] Customer Id
var senao113m010_ORA2 = document.getElementById("senao113m010_ORA2"); //隱藏欄位，[Oracle] ATTRIBUTE13
var senao113m010_ORA3 = document.getElementById("senao113m010_ORA3"); //隱藏欄位，[Oracle] ATTRIBUTE14
var senao113m030 = document.getElementById("senao113m030"); //MAC ADDRESS下拉選單
var senao113m041 = document.getElementById("senao113m041"); //簽呈新品 保固重出?
var senao113m041_0 = document.getElementById("senao113m041_0"); //簽呈新品 保固重出? 是
var senao113m041_1 = document.getElementById("senao113m041_1"); //簽呈新品 保固重出? 否
var senao113m039 = document.getElementById("senao113m039"); //業務部門代號
var senao113m039_b1 = document.getElementById("senao113m039_b1"); //業務部門開窗
var senao113m040 = document.getElementById("senao113m040"); //業務部門名稱
var senao113m023 = document.getElementById("senao113m023"); //Customer PO
var senao113m011 = document.getElementById("senao113m011"); //隱藏欄位，聯絡人
var senao113m024 = document.getElementById("senao113m024"); //Order Type
var senao113m024_b1 = document.getElementById("senao113m024_b1"); //Order Type開窗
var senao113m022 = document.getElementById("senao113m022"); //Price List
var senao113m022_ORA = document.getElementById("senao113m022_ORA"); //[Oracle] List Header Id
var senao113m015 = document.getElementById("senao113m015"); //FOB(Trade Term)
var senao113m025 = document.getElementById("senao113m025"); //(User) Conversion Type下拉選單
var senao113m025_ORA = document.getElementById("senao113m025_ORA"); //(User) Conversion Type ORA
var senao113m020 = document.getElementById("senao113m020"); //Conversion Rate
var senao113m026 = document.getElementById("senao113m026"); //Conversion Date
var senao113m016 = document.getElementById("senao113m016"); //Tax Code 下拉選單
// var senao113m016_0 =document.getElementById("senao113m016_0"); //5%稅率
// var senao113m016_1 =document.getElementById("senao113m016_1"); //0%稅率
var senao113m017 = document.getElementById("senao113m017"); //Amount 稅金
var senao113m014 = document.getElementById("senao113m014"); //Payment Term
var senao113m014_ORA = document.getElementById("senao113m014_ORA"); //Payment Term ORA
var senao113m018 = document.getElementById("senao113m018"); //訂單總金額(未稅)-幣別
var senao113m019 = document.getElementById("senao113m019"); //訂單總金額(未稅)-總金額
var senao113m021 = document.getElementById("senao113m021"); //隱藏欄位，訂單總金額(未稅)-折合台幣
var senao113m044 = document.getElementById("senao113m044"); //INV. NO
var senao113m004_ORA = document.getElementById("senao113m004_ORA"); //隱藏欄位，Order Type ID
var senao113m045 = document.getElementById("senao113m045"); //GV發票號碼
var isInUpdateERPActivity = document.getElementById("isInUpdateERPActivity"); //隱藏欄位，是否已在UpdateERP的關卡，則不可撤銷流程
var totalIncludeTax_TWD = document.getElementById("totalIncludeTax_TWD"); //隱藏欄位，台幣訂單總金額(含稅)
var lbl_Subject = document.getElementById("lbl_Subject"); //顥示主旨內容
var senao113m046 = document.getElementById("input[name='senao113m046']"); //是否併正貨出口
var senao113m046_0 = document.getElementById("senao113m046_0"); //是否併正貨出口
var senao113m046_1 = document.getElementById("senao113m046_1"); //是否併正貨出口
var senao113m047 = document.getElementById("senao113m047"); //Ship To Mail for LICENSE 使用
var senao113m048 = document.getElementById("senao113m048"); //Note for LICENSE 使用
var lbl_senao113m047 = document.getElementById("lbl_senao113m047"); //Ship To Mail for LICENSE 使用
var lbl_senao113m048 = document.getElementById("lbl_senao113m048"); //Note for LICENSE 使用
var senao113m049_0 = document.getElementById("senao113m049_0"); //庫存出貨

//==================以下為單身資料=================
var gsenao113d004 = document.getElementById("gsenao113d004"); //料號 [2]
var gsenao113d005 = document.getElementById("gsenao113d005"); //品名規格 [3]
var gsenao113d006 = document.getElementById("gsenao113d006"); //數量 [4]
var lbl_gsenao113d008 = document.getElementById("lbl_gsenao113d008"); //單價 [5] 標籤
var gsenao113d008 = document.getElementById("gsenao113d008"); //單價 [5] 有權限才會顯示
var gsenao113d012 = document.getElementById("gsenao113d012"); //交期 [6]
var gsenao113d018 = document.getElementById("gsenao113d018"); //生管異動交期 [7]
var gsenao113d019 = document.getElementById("gsenao113d019"); //生產地 [1]
var gsenao113d019_val = document.getElementById("gsenao113d019_val"); //生產方式選單，記錄實際值
var gsenao113d013 = document.getElementById("gsenao113d013"); //SO [8]
var gsenao113d011 = document.getElementById("gsenao113d011"); //說明 [9]
var gsenao113d017 = document.getElementById("gsenao113d017"); //匯率(A/P) [10]
var gsenao113d015 = document.getElementById("gsenao113d015"); //材料成本 [11]
var gsenao113d016 = document.getElementById("gsenao113d016"); //材料成本率 [12]
var gsenao113d020 = document.getElementById("gsenao113d020"); //ITEM STATUS [13]
var gsenao113d021 = document.getElementById("gsenao113d021"); //工單單號 [14]
var gsenao113d022 = document.getElementById("gsenao113d022"); //Customer PO Line [15]
var gsenao113d023 = document.getElementById("gsenao113d023"); //品名備註 [16]
var gsenao113d024 = document.getElementById("gsenao113d024"); //Project Code [17]
var gsenao113d025 = document.getElementById("gsenao113d025"); //Project Name [18]
var gsenao113d010 = document.getElementById("gsenao113d010"); //隱藏欄位，小計 [19]
var gsenao113d007 = document.getElementById("gsenao113d007"); //隱藏欄位，單位 [20]
var gsenao113d009 = document.getElementById("gsenao113d009"); //隱藏欄位，幣別 [21]
var gsenao113d004_ORA = document.getElementById("gsenao113d004_ORA"); //[22] 隱藏欄位，[Oracle] Inventory Item Id
var gsenao113d024_b1 = document.getElementById("gsenao113d024_b1"); //Project Code開窗
var gsenao113d026 = document.getElementById("gsenao113d026"); //Tax Code 下拉選單[23]
var gsenao113d027 = document.getElementById("gsenao113d027"); //Customer PO[24]
//20231101 Steve 流程序號:SENAO10100004693 新增以下欄位
var gsenao113d028 = document.getElementById("gsenao113d028"); //訂單申請日之收款情形[26]
var gsenao113d029 = document.getElementById("gsenao113d029"); //001 呆滯處理方式[27]
var gsenao113d030 = document.getElementById("gsenao113d030"); //002 延單處理方式[28]
var gsenao113d031 = document.getElementById("gsenao113d031"); //呆滯料處理備註[29]

var Grid1 = document.getElementById("Grid1"); //Grid1
var btnAdd = document.getElementById("btnAdd"); //新增
var btnEdit = document.getElementById("btnEdit"); //修改
var btnDel = document.getElementById("btnDel"); //刪除
var btnImport = document.getElementById("btnImport"); //匯入
var link1 = document.getElementById("link1"); //一般銷貨格式下載連結
var link2 = document.getElementById("link2"); //維修收入格式下載連結
var link3 = document.getElementById("Link3"); //Excecl格式下載連結
var btnExportXls = document.getElementById("btnExportXls"); //匯出
var isSysAdmin = document.getElementById("isSysAdmin"); //隱藏欄位，填單人是否為系統管理者
var hdn_isMaintenanceIncome = document.getElementById("hdn_isMaintenanceIncome"); //20230914 Calvin OrderType=維修收入
var isMaintenanceIncome = "N"; //Order Type是否為維修收入
var isMerakiCompany = "N"; //是否為Meraki公司
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
var isImportExcelUser = "N"; //是否為匯入EXCEL使用者

//以下供流程設計師使用
var isDiffSales = document.getElementById("isDiffSales"); //隱藏欄位，填單人是否不同於負責業務
var isSalesManager = document.getElementById("isSalesManager"); //隱藏欄位，負責業務是否為業務主管
var isMaintenanceIncomeForMeraki = document.getElementById("isMaintenanceIncomeForMeraki"); //隱藏欄位，//Meraki維修收入
var businessManagerId = document.getElementById("businessManagerId"); //隱藏欄位，業務主管
var isInsteadOfTransaction = document.getElementById("isInsteadOfTransaction"); //隱藏欄位，Order Type是否為代收付
var isProductUnit = document.getElementById("isProductUnit"); //隱藏欄位，申請單位是否為生管單位
var applicantManagerId = document.getElementById("applicantManagerId"); //隱藏欄位，申請人主管ID
var isSpecificItem = document.getElementById("isSpecificItem"); //隱藏欄位，是否為特定料號(需簽核至董事長)
var isPVTItemStatus = document.getElementById("isPVTItemStatus"); //隱藏欄位，ITEM STATUS是否為PVT
var isOverItemCost = document.getElementById("isOverItemCost"); //隱藏欄位，是否超過材料成本
var isIncludeNoGoodsForm = document.getElementById("isIncludeNoGoodsForm"); //隱藏欄位，是否其他收入無實物
var addApprovalPMList = document.getElementById("addApprovalPMList"); //隱藏欄位，加簽PM清單
var isSpecificCustomer = document.getElementById("isSpecificCustomer"); //隱藏欄位，是否為特定顧客(Order Type ID = 1482)
var isSpecificBiz = document.getElementById("isSpecificBiz"); //隱藏欄位，申請單位是否為業一、六、七、八、九課
var isNormalItemNo = document.getElementById("isNormalItemNo"); //隱藏欄位，是否為一般料號(去除W料號)
var isBizDivisionII = document.getElementById("isBizDivisionII"); //隱藏欄位，是否為業務二處
var isOverseasBizDept = document.getElementById("isOverseasBizDept"); //隱藏欄位，是否為海外事業部
var isBizSectionI = document.getElementById("isBizSectionI"); //隱藏欄位，是否為業務一課
var isBizSectionV = document.getElementById("isBizSectionV"); //隱藏欄位，是否為業務五課
var isBizSectionVI = document.getElementById("isBizSectionVI"); //隱藏欄位，是否為業務六課
var isBizSectionVII = document.getElementById("isBizSectionVII"); //隱藏欄位，是否為業務七課
var isBizSectionVIII = document.getElementById("isBizSectionVIII"); //隱藏欄位，是否為業務八課
var isBizSectionIX = document.getElementById("isBizSectionIX"); //隱藏欄位，是否為業務九課
var isBrandSales = document.getElementById("isBrandSales"); //隱藏欄位，是否為品牌銷售課
var isPMSectionV = document.getElementById("isPMSectionV"); //隱藏欄位，是否為產品行銷五課
var isPMSection_ENR = document.getElementById("isPMSection_ENR"); //隱藏欄位，是否為恩睿網通事業部
var isBizDivisionV = document.getElementById("isBizDivisionV"); //隱藏欄位，是否為業務五處
var isComNetDivision = document.getElementById("isComNetDivision"); //隱藏欄位，運算網路業務處
var isComNetSectionI = document.getElementById("isComNetSectionI"); //隱藏欄位，運算業務一課
var isStrategicBusSectionI = document.getElementById("isStrategicBusSectionI"); //隱藏欄位，策略業務一課
var isStrategicBusSectionII = document.getElementById("isStrategicBusSectionII"); //隱藏欄位，策略業務二課
var isPowerBussSection = document.getElementById("isPowerBussSection"); //隱藏欄位，電源業務課
var isPropertySection = document.getElementById("isPropertySection"); //隱藏欄位，物管課
var isMaterCtrlSection = document.getElementById("isMaterCtrlSection"); //隱藏欄位，物料控制課
var isNotCheck_Credit_Cost = document.getElementById("isNotCheck_Credit_Cost"); //樣品訂單不卡Credit及Cost
var Sales8_NotApproveDivision = document.getElementById("Sales8_NotApproveDivision"); //業務八課不經過處級主管
var hdn_OverCredit = document.getElementById("hdn_OverCredit"); //隱藏欄位(計算後)授信額度
var hdn_IsHold = document.getElementById("hdn_IsHold"); //隱藏欄位，訂單狀態是否HOLD
var hdn_IsTT = document.getElementById("hdn_IsTT"); //隱藏欄位，客戶是否為TT客戶
var hdn_IsCreditCheck = document.getElementById("hdn_IsCreditCheck"); //隱藏欄位，是否要CreditCheck
//20240102 Steve 新增欄位:check_IsMaterial 紀錄是否為呆滯料以利流程使用
var check_IsMaterial = document.getElementById("check_IsMaterial"); //隱藏欄位，是否為呆滯料
var attribute1 = document.getElementById("attribute1"); //隱藏欄位，紀錄生管負責人員 20241101 Neil

//行動簽核
var senao113m031_m = document.getElementById("senao113m031_m"); //隱藏欄位，是否送簽至總經理 (checkbox)
var senao113m032_m = document.getElementById("senao113m032_m"); //隱藏欄位，是否送簽至董事長 (checkbox)
var senao113m030_m = document.getElementById("senao113m030_m"); //隱藏欄位，MAC Address (dropdown)
var senao113m041_m = document.getElementById("senao113m041_m"); //隱藏欄位，簽呈新品是否保固重出 (radio)
var senao113m025_m = document.getElementById("senao113m025_m"); //隱藏欄位，Conversion Type (dropdown)
var senao113m016_m = document.getElementById("senao113m016_m"); //隱藏欄位，Tax Code (radio)
//var systemDateTime = showCurrentDate(); //今天日期
var systemDateTime = ""; //今天日期
//GRID
//單身grid1 元件欄位名稱
var GridBinding = [
  ["", "gsenao113d019", "gsenao113d004", "gsenao113d005", "gsenao113d006", "gsenao113d008", "gsenao113d012", "gsenao113d018", "gsenao113d013", "gsenao113d011", "gsenao113d017", "gsenao113d015", "gsenao113d016", "gsenao113d020", "gsenao113d021", "gsenao113d022", "gsenao113d023", "gsenao113d024", "gsenao113d025", "gsenao113d010", "gsenao113d007", "gsenao113d009", "gsenao113d004_ORA", "gsenao113d026", "gsenao113d027", "gsenao113d019_val", "gsenao113d028", "gsenao113d029", "gsenao113d031", "gsenao113d030", "excelErrorMsg"]
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
  colAPI: 'BPM_SENAO113_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO113_GRID1_LIST',
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
      console.log('element:', element);
      if ($(element).exists != undefined) {
        if (element == '#gsenao113d012') {
          if (IsDateValid(value)) {
            $(element).val(value.replace(/\//g, '-'));
          }
        } else {
          $(element).val(value);
        }



      }
      console.log(key, value);
    }
  },
  loadComplete: function (ids) {
  }
}];
/*---------------------公用變數 End--------------*/
/*---------------------Form Load Function Start--------------*/
$(document).ready(function () {
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
  activityId = "UserTask_3";
  formOpen();
  frmEvent();

});
/*------------------------------------------------------------------------------
[Function Name]frmGeneralLoad
[Function Descript]表單初始化必載入 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250508 By Senao-JC 
[Example]
[Show Codes=Y] 
[Parameter]  Type:表單類型,Today:今天日期
------------------------------------------------------------------------------*/
function frmGeneralLoad(type, today) {
  //通用需要載入的資料
  //設定公司 OU ORG 
  setCompanyObject();
  //設定公司別
  setSelectDefalut("form_ou", apiInvoke + "BPM_COMPANY_INFO_LIST", {}, "");
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  //表單代號
  $('#senao113m001').val(type);
  $('#senao113m001').attr('disabled', 'true');

  //設定申請時間
  $('#emplus030007').val(today);
  $('#emplus030007').attr('disabled', 'true');
  console.log($("#form_ou").val());
  OU_ID = _OU[$("#form_ou").val()];
  ORG_ID = _ORG[$("#form_org").val()];
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  systemDateTime = showCurrentDate(); //今天日期
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //formnumber title=>必設
    $('#hdn_formnumber_title').val(ProcessPackageId.toUpperCase());   //UPPer(form_ou)   ||'113",'
  //設定填表人
  $('#emplus030015').val(userId);
  $('#emplus030005').val(user_Name);
  $('#emplus030005').attr('disabled', 'true');
  $('#emplus030015').attr('disabled', 'true');
  //設定申請人
  $('#senao113m004').val(Department);
  $('#senao113m006').val(Department_Name);
  $('#senao113m003').val(userId);
  $('#senao113m005').val(user_Name);
  applicant = $('#senao113m003').val();
  applicantDept = $('#senao113m004').val();
  //生產地選項
  setSelectDefalut(
    "gsenao113d019_val",
    invokeURL + "BPM_SENAO113_50",
    { BAS_COMPANY: $('#form_ou').val(), BAS_LANG: locale },
    ""
  );
  //Conversion Type選項
  setSelectDefalut("senao113m025", invokeURL + "BPM_ERP_SENAO113_36", {}, "");
  $('#btnExportXls').attr('disabled', false);
  //檢查開啟表單的使用者是否有權限看到單價
  isUnitPriceUser = checkIsUnitPriceViewer(userId, activityId);

  //NPI 樣品出貨表單填寫注意事項，印度神準因稅率操作不同故不適用 20240919 Neil
  if ($('#form_ou').val() != "senao" && !$('#form_ou').val() != "stw" && $('#form_ou').val() != "enr") {
    var Link149 = document.getElementById("Link149"); //NPI 樣品出貨表單填寫注意事項
    // 移除 href 屬性
    Link149.removeAttribute("href");
    // 清除 Link149 元素中的所有文字
    Link149.textContent = '';
    // 阻止點擊行為    
    Link149.style.pointerEvents = "none";
  }
  //檢查是否可以使用匯入EXCEL
  isImportExcelUser = checkIsGroupUser(userId, "SN113_21");
  if (isImportExcelUser == "Y") {
    $('#btnImport').css('display', true);
    $('#link1').css('display', true);
    $('#link2').css('display', true);
  } else {
    $('#btnImport').css('display', false)
    $('#link1').css('display', false);
    $('#link2').css('display', false);
  }
  //20211013 Milla 神準沒有導入LICENSE 交易，故隱藏Ship To Mail、Note欄位
  if ($('#form_ou').val() == "senao") {
    $('#senao113m047').css('display', false)
    $('#senao113m048').css('display', false)
    $('#lbl_senao113m047').css('display', false)
    $('#lbl_senao113m048').css('display', false)
  }
  //Tax Code選項
  setSelectDefalut(
    "senao113m016",
    invokeURL + "BPM_ERP_SENAO113_43",
    { p: OU_ID },
    ""
  );
  setSelectDefalut(
    "gsenao113d026",
    invokeURL + "BPM_ERP_SENAO113_43",
    { p: OU_ID },
    ""
  );
  displayCreditInfo(true);
  $('#gsenao113d021')[0].readOnly = true; //工單單號
  $('#lbl_gsenao113d008')[0].style.display = (isUnitPriceUser === true ? "block" : "none");
  $('#gsenao113d008')[0].style.display = (isUnitPriceUser === true ? "block" : "none");
  $('#senao113m002')[0].value = FORMSERIALNUMBER;

  if (activityId == "UserTask_3") { //開新單START
    formAdd();
  } else {
    formEdit();
  }
  createFrmGrid(0);
  return true;
}
function formAdd() { //建立新表單會執行 
  senao113m003_process();
  $('#senao113m007')[0].value = queryOracleOrderNo($('#senao113m002')[0].value);
  $('#senao113m007_ORA')[0].value = queryOracleHeaderId($('#senao113m002')[0].value);
  $('#gsenao113d019_val')[0].disabled = false;
  $('#form_org')[0].disabled = false;
  initGridRow();
  displayCreditInfo(false);
  /********** */
  if (IsInvaildDept($("#senao113m004").val())) { //判斷是否為失效部門
    $("#senao113m004").val(''); //清空部門
    $("#senao113m006").val(''); //清空部門
  }

  if (IsInvaildDept($("#senao113m039").val())) { //判斷是否為失效部門
    $("#senao113m039").val(''); //清空部門
    $("#senao113m040").val(''); //清空部門
  }
  senao113m031_0.checked = false; //送簽至總經理
  senao113m031_0.disabled = false;
  senao113m032_0.checked = false; //送簽至董事長
  senao113m032_0.disabled = false;
  senao113m044.value = ""; //INV. NO
  senao113m008.value = systemDateTime; //ordered date
  isInUpdateERPActivity.value = ""; //是否已在UpdateERP的關卡，則不可撤銷流程
  hdn_IsHold.value = "";
  hdn_IsTT.value = "";
  hdn_IsCreditCheck.value = "";
  if (senao113m024.value.substring(0, 1) == "S" && form_ou.value != "stw") { //為避免使用舊Order Type，ex:S13310-銷貨
    senao113m024.value = ""; //Order Type
  }
  senao113m024_process(); //Order Type可開放的欄位
  if (form_ou.value == "senao" || form_ou.value == "stw") {
    if (checkIsIncludeNoGoodsForm(senao113m004_ORA.value) == "Y" && senao113m016.value.search("0%") > -1) { //代收付 且為0%稅率
      senao113m044.readOnly = false; //INV. NO
      $("#senao113m046_0").attr("disabled", false); //是否併正貨出口-是
      $("#senao113m046_0").attr("readonly", false); //是否併正貨出口-是
      $("#senao113m046_1").attr("disabled", false); //是否併正貨出口-否
      $("#senao113m046_1").attr("readonly", false); //是否併正貨出口-否
    } else {
      if (checkIsIncludeNoGoodsForm(senao113m004_ORA.value) == "Y") {
        senao113m044.readOnly = false; //INV. NO
      } else {
        senao113m044.readOnly = true; //INV. NO
      }
      $("#senao113m046_0").attr("disabled", true); //是否併正貨出口-是
      $("#senao113m046_0").attr("readonly", true); //是否併正貨出口-是
      $("#senao113m046_1").attr("disabled", true); //是否併正貨出口-否
      $("#senao113m046_1").attr("readonly", true); //是否併正貨出口-否
    }
  }

  //資訊服務申請單SENAO10100001312新增勾選欄位”庫存出貨”並綁定客別為杜拜分公司(客代:4982)&新加坡分公司(客代:1021&3951)，當這2個RBU勾選此欄位代表互挪庫存出貨，並跑新的簽核流程
  if (isValueInSNSI003("SN113_S29", senao113m010.value) == "Y") {
    senao113m049_0.disabled = false; //庫存出貨
  } else {
    senao113m049_0.checked = false;
    senao113m049_0.disabled = true; //庫存出貨
  }
  //20230112 add Calvin stw 沒有PM、Manager、CEO關卡
  if (form_ou.value == "stw") {
    senao113m031_0.disabled = true;
    senao113m032_0.disabled = true;
    senao113m029.disabled = true;
    $("#senao113m029_b1").attr("disabled", true);
    $("#ClearPM").attr("disabled", true);
  }
}
function formEdit() { //已經建立單據 
  //已在updateERP關卡，隱藏"撤銷流程"按鈕
  loadData(formInstOID);
  if (isInUpdateERPActivity.value == "Y") {
    if (window.parent.parent.document.getElementById("btnAbort")) { //撤銷流程
      window.parent.parent.document.getElementById("btnAbort").style.display = "none";
    }
    if (window.parent.parent.document.getElementById("btnRollback")) { //取回重辦
      window.parent.parent.document.getElementById("btnRollback").style.display = "none";
    }
    if (window.parent.document.getElementById("btnTerminateProcess") != null) { //終止流程
      window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
    }
    if (window.parent.document.getElementById("btnReexecuteActivity") != null) { //退回重辦
      window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
    }
  }
  //停用Conversion Date開窗
  if (senao113m025.value != "User") {
    senao113m026.disabled = true;
  }
  var updateDB = false;
  var subMsg = querySNSI009(formId, "002", locale, "", "", "").replace("(SENAO113002)", "");
  if (senao113m007.value == "表單結案後由ORACLE傳回" || senao113m007.value == subMsg || (senao113m016.value == "5%" && isIncludeNoGoodsForm.value == "Y")) {
    updateDB = true;
  }
  senao113m007.value = queryOracleOrderNo(senao113m002.value);
  senao113m007_ORA.value = queryOracleHeaderId(senao113m002.value);
  if (senao113m016.value == "5%" && isIncludeNoGoodsForm.value == "Y") {
    senao113m045.value = querySENAO113_44(senao113m007_ORA.value);
  }

  if (updateDB) {
    var strSQL = "update senao113 set senao113m007='" + senao113m007.value + "',senao113m007_ora='" + senao113m007_ORA.value + "',senao113m045='" + senao113m045.value + "' where formserialnumber='" + senao113m002.innerHTML + "'";
    DWREngine.setAsync(false);
    var databaseCfgId_EFGP = "EFGP";
    ajax_DatabaseAccessor.executeQuery(databaseCfgId_EFGP, strSQL, null, null, loadDsUpdate);
    DWREngine.setAsync(true);
  }
  //assign變數到流程設計師流程變數，讓JSP呼叫使用
  DWREngine.setAsync(false);
  ajax_ProcessAccessor.assignRelevantData(processInstOID, "formserialnumber", senao113m002.innerHTML);
  DWREngine.setAsync(true);
  if (senao113m010.value != "") {
    displayCreditInfo(true);
    queryAllCreditItems(senao113m010_ORA.value, senao113m018.value, false);
  } else {
    displayCreditInfo(false);
  }
}
function formSave(){ //表單送出檢查
	return true;
}
/*---------------------Form Load Function End--------------*/
/*---------------------Form Function Start--------------*/
/*---------------------Form Function End--------------*/
/*---------------------UI event Function Start--------------*/
function frmEvent() {
  //form event function
  $('#form_ou').on('change', function () { //公司
    OU_ID = _OU[$('#form_ou').val()];
    //設定廠區
    setSelectDefalut(
      "form_org",
      invokeURL + "BPM_getFactory",
      { COMPANY: $('#form_ou').val() },
      ""
    );
    //生產地選項
    setSelectDefalut(
      "gsenao113d019_val",
      invokeURL + "BPM_SENAO113_50",
      { BAS_COMPANY: $('#form_ou').val(), BAS_LANG: locale },
      ""
    );

    //Tax Code選項
    setSelectDefalut(
      "senao113m016",
      invokeURL + "BPM_ERP_SENAO113_43",
      { p: OU_ID },
      ""
    );
    setSelectDefalut(
      "gsenao113d026",
      invokeURL + "BPM_ERP_SENAO113_43",
      { p: OU_ID },
      ""
    );
    console.log(OU_ID);
  });
  $('#form_org').on('change', function () { //廠區
    ORG_ID = _ORG[$('#form_org').val()];
  });

  $('#senao113m003').on('change', function () { //申請人
    senao113m003_onchange();
  });
  $('#senao113m003_b1').on('click', function () { //申請人開窗

    // sessionStorage 存入數據
    let tTitle = "申請人";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao113m003", "senao113m005", "senao113m004", "senao113m006");//回傳元件參數
    let tReturnFunction = new Array("senao113m003_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  });
  $('#senao113m029_b1').on('click', function () { //加簽PM人員開窗
    let tTitle = "加簽人員";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao113m029_hdn");//回傳元件參數
    let tReturnFunction = new Array("senao113m029_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: 'senao', mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#ClearPM').on('click', function () { //清空加簽人員
    senao113m029.value = "";
  });
  $('#senao113m037').on('blur', function () { //負責業務
    senao113m037_onblur();
  });
  $('#senao113m037_b1').on('click', function () { //負責業務開窗
    if (form_org.value == "") {
      //alert('請先選擇【廠區】!!!');
      alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
      return false;
    }
    // sessionStorage 存入數據
    let tTitle = "負責業務";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao113m037");//回傳元件參數
    let tReturnFunction = new Array("senao113m037_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SALESREP_Org2";
    let tAPI = invokeURL + 'BPM_ERP_SALESREP_Org2';
    let tParameter = { OU_ID: OU_ID, ORG_ID: ORG_ID, SALESREP_NUMBER: 'ALL', LAST_NAME: 'ALL' };
    let tQBEField = { SALESREP_NUMBER: 'SALESREP_NUMBER', LAST_NAME: 'LAST_NAME' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#senao113m039').on('change', function () { //業務部門
    senao113m039_onchange();
  });
  $('#senao113m039_b1').on('click', function () { //業務部門開窗
    let tTitle = "業務部門";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array(); //回傳函數
    let tReturnId = new Array("senao113m039", "senao113m040");//回傳元件參數
    let tColAPi = "BPM_getUnit_Org";
    let tAPI = invokeURL + 'BPM_getUnit_Org';
    let tParameter = { form_ou: form_ou.value, mainOrgId: form_ou.value, UNID: null, ORGNAME: null };
    let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#senao113m010').on('change', function () { //Customer Number
    senao113m010_onchange();
  });
  $('#senao113m010_b1').on('click', function () { //Customer Number開窗
    let tTitle = "客戶";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao113m010", "senao113m010_t1");//回傳元件參數
    let tReturnFunction = new Array("senao113m010_process()"); //回傳函數
    let tColAPi = "BPM_ERP_OracleCustomer_Org";
    let tAPI = invokeURL + 'BPM_ERP_OracleCustomer_Org';
    let tParameter = { OU_ID: OU_ID, CNAME: null, CID: null };
    let tQBEField = { CNAME: 'CUSTOMER_NAME', CID: 'CUSTOMER_NUMBER' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });

  $("*[name='senao113m041']").on('click', function () { //簽呈新品
    senao113m041_onclick();

  });
  $('#senao113m023').on('change', function () { //Customer PO(PI)
    senao113m023_onchange();
  });
  $('#senao113m024_b1').on('click', function () { //Order Type開窗
    let tTitle = "Order Type";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m024_process()"); //回傳函數
    let tReturnId = new Array("senao113m024", "senao113m004_ORA");//回傳元件參數
    let tColAPi = "BPM_ERP_SENAO113_32";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_32';
    let tParameter = { OU_ID: OU_ID, NAME: null, TRANSACTION_TYPE_ID: null };
    let tQBEField = { NAME: 'NAME', TRANSACTION_TYPE_ID: 'TRANSACTION_TYPE_ID' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#senao113m022_b1').on('click', function () { //Price List開窗
    let tTitle = "Price List";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m022_process()"); //回傳函數
    let tReturnId = new Array("", "senao113m022", "");//回傳元件參數
    let tColAPi = "BPM_ERP_SENAO113_30";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_30';
    let tParameter = { NAME: null, LIST_HEADER_ID: null };
    let tQBEField = { NAME: 'NAME', LIST_HEADER_ID: 'LIST_HEADER_ID' }; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#senao113m015_b1').on('click', function () { //FOB開窗

    let tTitle = "FOB";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array(); //回傳函數
    let tReturnId = new Array("senao113m015");//回傳元件參數
    let tColAPi = "BPM_ERP_SENAO113_33";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_33';
    let tParameter = { LOOKUP_CODE: null, MEANING: null };
    let tQBEField = { LOOKUP_CODE: 'LOOKUP_CODE', MEANING: 'MEANING' }; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

  });
  $('#senao113m025').on('change', function () { //Conversion Type
    senao113m025_onchange();
  });
  $('#senao113m020').on('change', function () { //Conversion Rate
    senao113m020_onchange();
  });
  $('#senao113m018').on('change', function () { //訂單總金額(未稅)
    senao113m018_onchange();
  });
  $('#gsenao113d004_b1').on('click', function () { //料號開窗
    let orderType = senao113m024.value;
    if ($("#form_org").val() == "") {
      //alert('請先選擇【廠區】!!!');
      alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
      return false;
    }
    if (orderType == "") {
      //alert('請先選擇【Order Type】!!!');
      alert("[" + $("#lbl_senao113m024").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
      return false;
    }
    let apiId = "";
    let colId = "BPM_ERP_SYS_LW_Material2";
    let tParameter = { organization_id: ORG_ID, SEGMENT1: null, DESCRIPTION: null, SEGMENT: null };
    if (orderType && form_ou.value != "sin") {
      if ((orderType.substr(0, 1) == "S" || isNotCheck_Credit_Cost.value == "Y") && form_ou.value != "stw") { //20241022 Neil
        apiId = "BPM_ERP_SYS_LW_Material2_S";
        if (orderType != "S13000-PPV(價差)") { //只有S13000-PPV(價差)這項Order Type可以查得到PPV這筆料號
          apiId = "BPM_ERP_SYS_LW_Material2_S_N_PPV";
        }
      } else if (orderType.substr(0, 4) == "其他收入") {
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'No Goods%';
      } else if (orderType.substr(0, 4) == "運費收入") {
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'Export Fee%';
      } else if (orderType.substr(0, 4) == "維修收入" || (orderType.toUpperCase().indexOf('維修收入') > -1 && form_ou.value == "stw")) { //20241022 Neil
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'Maintain%';
      } else if (orderType.substr(0, 3) == "代收付" || (orderType.toUpperCase().indexOf('代收付') > -1 && form_ou.value == "stw")) {    //20241022 Neil
        //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
        //20231027 Steve [SENAO10100004693] 代收付-銷貨 新增 Material-001 Material-002
        //appendSql += " AND (segment1 like 'W%' or segment1 in ('PVT','Material','Expenses','NRE','Tooling Fee','Cer. Fee','Rework Fee')) "; 
        apiId = "BPM_ERP_SYS_LW_Material2_Collection";
      } else if (orderType.substr(0, 3) == "NRE") {
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'NRE Fee%';
      } else if ((senao113m024.value.toUpperCase().indexOf("LICENSE") >= 0) && (form_ou.value == "enr" || form_ou.value == "stw")) {
        apiId = "BPM_ERP_SYS_LW_Material2_LICENSE";
      }
      //20250205 Neil
      if (isNotCheck_Credit_Cost.value == "Y" && orderType.toUpperCase().indexOf('材料款') == -1) { //樣品訂單不卡Credit及Cost
        apiId = "BPM_ERP_SYS_LW_Material2_sample";
      } else {
        apiId = "BPM_ERP_SYS_LW_Material2_NOT_sample";
      }
    } else {
      apiId = "BPM_ERP_SYS_LW_Material2";
    }
    // sessionStorage 存入數據
    let tTitle = "料號";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("gsenao113d004_process()"); //回傳函數
    let tColAPi = colId;
    let tAPI = invokeURL + apiId;
    let tReturnId = new Array("gsenao113d004", "gsenao113d005", "gsenao113d020", "gsenao113d004_ORA");
    let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  });
  $('#gsenao113d005').on('change', function () { //品名規格
    gsenao113d005_onchange();
  });
  $('#gsenao113d006').on('change', function () { //數量
    gsenao113d006_onchange();
  });
  $('#gsenao113d012').on('change', function () { //交期
    gsenao113d012_onchange();
  });
  $('#gsenao113d019_val').on('change', function () { //生產地
    gsenao113d019.value = $("#gsenao113d019_val").find(":selected").text();
  });
  $('#gsenao113d011').on('blur', function () { //說明
    gsenao113d011_onblur();
  });
  $('#gsenao113d015').on('blur', function () { //材料成本
    gsenao113d015_onblur();
  });
  $('#gsenao113d024_b1').on('click', function () { //Project Code開窗
    if ($("#form_org").val() == "") {
      //alert('請先選擇【廠區】!!!');
      alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
      return false;
    }
    if (isNotCheck_Credit_Cost.value == "Y") { //樣品訂單不卡Credit及Cost
      oracleSqlId = "BPM_ERP_SENAO113_46";
      params.push(ORG_ID);
    } else {
      oracleSqlId = "BPM_ERP_OracleItemModel";
    }
    // sessionStorage 存入數據
    let tTitle = "Project";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array(""); //回傳函數
    let tColAPi = "BPM_ERP_SENAO113_46";
    let tParameter = { ORG_ID: ORG_ID, SEGMENT1: null, DESCRIPTION: null };
    let tAPI = invokeURL + oracleSqlId;
    let tReturnId = new Array("gsenao113d024", "gsenao113d025");
    let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  });
  $('#gsenao113d008').on('change', function () { //單價
    gsenao113d008_onchange();
  });
  /***************************GRID********************** */
  $('#btnAdd').on('click', function () { //新增
    btnAdd_onclick();
  });
  $('#btnEdit').on('click', function () { //修改
    btnEdit_onclick();
  });
  $('#btnDel').on('click', function () { //刪除
    btnDel_onclick();
  });
  $('#btnImport').on('click', function () { //Excel匯入

  });
  $('#btnExportXls').on('click', function () { //Excel匯出

  });
  //隱藏欄位 
  $('#senao113m031_0').click(function () {  //是否送簽至總經理 (checkbox)
    if ($('#senao113m031_0').is(":checked")) {
      // it is checked
      senao113m031_m.value = "是";
    } else {
      senao113m031_m.value = "否";
    }
  });
  $('#senao113m032_0').click(function () { //是否送簽至董事長 (checkbox)
    if ($('#senao113m032_0').is(":checked")) {
      // it is checked
      senao113m032_m.value = "是";
    } else {
      senao113m032_m.value = "否";
    }
  });
  $('input[name="senao113m041"]').on('change', function () {//簽呈新品是否保固重出 (radio)
    if ($("#senao113m041_0").is(":checked")) {
      senao113m041_m.value = "是";
    } else if ($("#senao113m041_1").is(":checked")) {
      senao113m041_m.value = "否";
    }
  });
  $('#senao113m030').on('change', function () { //MAC Address (dropdown)
    if (senao113m030.selectedIndex != -1) {
      senao113m030_m.value = senao113m030[senao113m030.selectedIndex].text;
    }
  });
  $('#senao113m025').on('change', function () { //Conversion Type (dropdown)
    if (senao113m025.selectedIndex != -1) {
      senao113m025_m.value = senao113m025[senao113m025.selectedIndex].text;
    }
  });
  $('#senao113m016').on('change', function () { //TAX code
    senao113m016_m.value = senao113m016[senao113m016.selectedIndex].text;
  });
}
/***************************GRID********************** */
/*--------------------------event-----------------------*/

/*---------------------UI event Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createFrmGrid(id) { //create jagrid
  let options = {};
  let $grid;
  let gridCol = {};
  $grid = $('#' + frmGridList[id].gid);
  $.jgrid.gridUnload(frmGridList[id].gid);
  options = frmGridList[id];
  switch (id) {
    case 0:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao113m002').val()
      };
      $grid.createJqGrid(options);
      setGridStyle(isUnitPriceUser);
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
  if ($grid.length > 0) {
    gridcolModel = $grid.getGridParam("colModel");
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
      if (binding[i] == "gsenao113d012") {
        if (IsDateValid(value)) {

          value = value.replace(/\-/g, '/');
        }
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
/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/



function excelInPutUI(data) { //批次上傳匯入資料
  let head = data.head;
  let detail = data.detail;
  let status = true; //是否有錯誤
  $.each(head, function (key, value) { //設定Head
    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    $('#jcimp_flag').prop("checked", true); //設定多筆匯入標示
    switch (key) {
      case 'SUBJECT': //主旨
        $("#subject").val(value);
        break;
      case 'FORM_OU': //公司別
        if (changeOptionMethod('form_ou', value)) {//設定公司別
          $('#form_ou').trigger('change');
        } else {
          alert("[" + $("#lbl_form_ou").html() + "] " + querySNSI009('senao', "003", locale, "", "", ""));
          status = false;
          return status;
        }
        break;
      case 'FORM_ORG': //廠區別
        if (changeOptionMethod('form_org', value)) {
          $('#form_org').trigger('change');
        }
        else {
          alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009('senao', "003", locale, "", "", ""));
          status = false;
          return status;
        }

        break;
      case 'SENAO113M003': //申請人id
        $('#senao113m003').val(value);

        applicant = $('#senao113m003').val();
        break;
      case 'SENAO113M004': //部門id
        $('#senao113m004').val(value);
        applicantDept = value;
        break;
      case 'SENAO113M005': //申請人名稱
        $('#senao113m005').val(value);

        break;
      case 'SENAO113M006': //部門名稱
        $('#senao113m006').val(value);
        if (!senao113m003_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M037': //負責業務id
        $('#senao113m037').val(value);
        if (!senao113m037_onblur()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M038': //負責業務
        $('#senao113m038').val(value);

        break;
      case 'SENAO113M039': //業務部門代號
        $('#senao113m039').val(value);
        break;
      case 'SENAO113M040': //業務部門名稱
        $('#senao113m040').val(value);
        if (!senao113m039_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M010': //Customernumber
        $('#senao113m010').val(value);

        break;
      case 'SENAO113M010_T1': //CustomerName
        $('#senao113m010_t1').val(value);
        if (!senao113m010_process()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M024': //OrderType
        $('#senao113m024').val(value);
        $('#senao113m004_ORA').val(queryOrderTypeId(value));
        senao113m024_process();
        break;
      case 'SENAO113M014': //PaymentTerm
        $('#senao113m014').val(value);
        break;
      case 'SENAO113M015': //FOB(TradeTerm)
        $('#senao113m015').val(value);
      case 'SENAO113M030': //MAC Address
        changeOptionMethod('senao113m030', value);
        break;
      case 'SENAO113M041': //簽呈新品
        if (value == 'Y') {
          $('#senao113m041_0').attr('checked', 'true');
          senao113m041_onclick();
        } else if (value == 'N') {
          $('#senao113m041_1').attr('checked', 'true');
        }
        break;
      case 'SENAO113M022': //PriceList
        $('#senao113m022').val(value);
        senao113m022_process();
        break;
      case 'SENAO113M016': //TaxCode
        let v1 = value;
        if ($.isNumeric(value)) {
          v1 = (value * 100) + '%';
        }
        //$('#senao113m016').val((value * 100) + '%');
        if (!changeOptionMethod('senao113m016', v1)) {
          //errMsg += "請點選「Tax Code」!! \n";
          alert("[" + $("#lbl_senao113m016").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n");
          status = false;
          return status;
        }
        break;
      case 'SENAO113M025': //Conversion Type
        changeOptionMethod('senao113m025', value);
        break;
      case 'SENAO113M020': //Conversion Rate

        $('#senao113m020').val(value);
        break;
      case 'SENAO113M026': //Conversion Date
        $('#senao113m026').val(value);
        break;
      case 'SENAO113M023': //CustomerPO
        $('#senao113m023').val(value);
        break;
    }
  });

  if (status) {
    //訂單申請單_填表人_客戶_PO號 EX 訂單申請單_林慧雯_神準_PO454551
    // $("#subject").val('訂單申請單_'+$('#senao113m005').val()+'_'+$('#senao113m010_t1').val()+'_'+$('#senao113m023').val()); 

    for (let i = 0; i < detail.length; i++) {
      let detailitems = detail[i];
      let rowArray = [];
      setGridData(i, []);
      for (let j = 0; j < detailitems.length; j++) {
        let item = detailitems[j];
        console.time('gridRowChk');
        status = gridRowChk(j, item);
        console.timeEnd('gridRowChk');
        if (!status) {
          break;
        }
        console.time('calculateItemCostRatio');
        calculateItemCostRatio();
        console.timeEnd('calculateItemCostRatio');
        rowArray.push(getRowData(i, j + 1)); //新增欄位到grid data
        console.time('clearBinding');
        clearBinding(0); //新增後清除Binding欄位資料
        console.timeEnd('clearBinding');
      }
      setGridData(i, rowArray);
      //檢查資料
      console.time('calculateTotalAmount_TotalTax');
      calculateTotalAmount_TotalTax();//計算總金額
      console.timeEnd('calculateTotalAmount_TotalTax');
      console.time('queryAllCreditItems');
      queryAllCreditItems(); //重新取得授信金額
      console.timeEnd('queryAllCreditItems');

    }
  }

  return status;
}


function gridRowChk(index, row) { //批次上傳單身
  let status = true; //是否有錯誤
  let UnitPrice = 0;
  $.each(row, function (key, value) { //設定Head

    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    switch (key) {

      case 'SENAO113D004': //料號
        $('#gsenao113d004').val(value);

        break;
      case 'SENAO113D005': //品名規格
        $('#gsenao113d005').val(value);
        let iteminfo = queryItemInfoByCodeInput($('#gsenao113d004').val());
        if (!$.isEmptyObject(iteminfo)) {
          $("#gsenao113d005").val(iteminfo.productSpec)
          $("#gsenao113d020").val(iteminfo.inventory_item_status_code)
          $("#gsenao113d004_ORA").val(iteminfo.inventoryItemId);
        }
        if (!gsenao113d004_process()) {
          status = false;
          return status;
        }else{
            if(!gsenao113d015_onblur()){
                  status = false;
                  return status; 
            }
        }
        break;
      case 'SENAO113D006': //數量
        $('#gsenao113d006').val(value);
        if (!gsenao113d006_onchange()) {
          status = false;
          return status;
        }

        break;
      case 'SENAO113D008': //單價

        $('#gsenao113d008').val(value);
        if (!gsenao113d008_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113D012': //交期
        let d = new Date(value);
        $('#gsenao113d012').val(d.format('yyyy-MM-dd'));
        if (!gsenao113d012_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113D026': //稅別
        let v1 = value;
        if ($.isNumeric(value)) {
          v1 = (value * 100) + '%';
        }
        //$('#gsenao113d026').val(v1);
        if (!changeOptionMethod('gsenao113d026', v1)) {
          //errMsg += "請點選「Tax Code」!! \n";
          alert("[" + $("#lbl_gsenao113d026").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n");
          status = false;
          return status;
        }
        break;
      case 'SENAO113D027': //Customer PO(PI)
        $('#gsenao113d027').val(value);

        break;
      case 'SENAO113D022': //Customer PO(PI)_Line
        $('#gsenao113d022').val(value);
        break;
      case 'SENAO113D024': //Project Code
        $('#gsenao113d024').val(value);
        if ($('#gsenao113d024').val().length > 0) {//prjoct code
          //新增prjoct name
          let pData = ajaxGetData(invokeURL + 'BPM_ERP_OracleItemModel', {
            DESCRIPTION: null,
            ORG_ID: ORG_ID,
            SEGMENT1: $('#gsenao113d024').val()
          });
          if (pData[0].result == undefined) {
            $('#gsenao113d025').val(pData[0].DESCRIPTION);
          }
        }
        break;
      case 'SENAO113D011': //說明
        $('#gsenao113d011').val(value);
        if ($('#gsenao113d011').val().length > 0) {//說明
          if (!gsenao113d011_onblur()) {
            status = false;
            return status;
          }
        }

        break;
    }
  });




  $('#gsenao113d019_val').trigger('change');

  let errMsg = "";
  let itemNo = gsenao113d004.value;
  //20231101 Steve 新增欄位
  if (itemNo == 'Material-001' || senao113m024.value == '材料款-呆滯') {
    // errMsg += "[訂單申請日之收款情形] 不可空白";
    if (gsenao113d028.value.trim() == '' || gsenao113d028 == null) {
      errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
    }
    // errMsg += "[001 呆滯處理方式] 不可空白";
    if (gsenao113d029.value.trim() == '' || gsenao113d029 == null) {
      errMsg += "[" + $("#lbl_gsenao113d029").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
    }
    // errMsg += "[呆滯料處理備註] 不可空白";
    if (gsenao113d031.value.trim() == '' || gsenao113d031 == null) {
      errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
    }
    // errMsg += "[呆滯料處理備註] 長度超出限制";
    if (gsenao113d031.value.length > 200) {
      errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + "exceed the length limit" + "\n";
    }
  }
  //20231101 Steve 新增欄位
  if (itemNo == 'Material-002' || senao113m024.value == '材料款-延單') {
    // errMsg += "[訂單申請日之收款情形] 不可空白";
    if (gsenao113d028.value.trim() == '' || gsenao113d028 == null) {
      errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
    }
    // errMsg += "[002 延單處理方式] 不可空白";
    if (gsenao113d030.value.trim() == '' || gsenao113d030 == null) {
      errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
    }
  }
  if (form_org.value == "") {
    //errMsg +="請先選擇【廠區】!";
    errMsg += "[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
  }
  if (errMsg != "") {
    alert(errMsg);
    status = false;
    return status;
  }
  $('#gsenao113d009').val($('#senao113m018').val()); //隱藏欄位，幣別
  $('#gsenao113d007').val("PCS"); //隱藏欄位，單位

  return status;
}
/*---------------------Other Function End--------------*/
