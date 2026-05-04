/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;

var senao113m001 = $("#senao113m001");//表單代號
var senao113m031_Y = $("#senao113m031_Y"); //送簽至總經理
var senao113m032_Y = $("#senao113m032_Y"); //送簽至董事長
var lbl_senao113m027 = $("#lbl_senao113m027"); //授信額度Label
var senao113m027 = $("#senao113m027"); //授信額度
var lbl_senao113m028 = $("#lbl_senao113m028"); //已使用信用額度Label
var senao113m028 = $("#senao113m028"); //已使用信用額度
var lbl_totalIncludeTax = $("#lbl_TotalIncludeTax"); //訂單總金額(含稅)Label
var totalIncludeTax = $("#TotalIncludeTax"); //訂單總金額(含稅)
var lbl_overCredit = $("#lbl_OverCredit"); //超過授信額度Label
var overCredit = $("#OverCredit"); //(計算後)授信額度
var greenCheckImage = $("#EfCheckMark"); //綠色勾選圖示

var form_ou = $("#form_ou"); //公司別
var form_org = $("#form_org"); //廠區別
var senao113m002 = $("#senao113m002"); //表單單號
var senao113m043 = $("#senao113m043"); //隱藏欄位，拋轉狀態?
var senao113m029 = $("#senao113m029"); //加簽PM人員
var senao113m029_hdn = $("#senao113m029_hdn"); //隱藏欄位，加簽PM人員原始格式
var clearPM = $("#ClearPM"); //清空加簽人員
var emplus030015 = $("#emplus030015"); //填表人id
var emplus030005 = $("#emplus030005"); //填表人名稱
var senao113m003 = $("#senao113m003"); //申請人id
var senao113m003_ORA = $("#senao113m003_ORA"); //[Oracle] sales rep id
var senao113m005 = $("#senao113m005"); //申請人名稱
var senao113m004 = $("#senao113m004"); //部門id
var senao113m006 = $("#senao113m006"); //部門名稱
var emplus030007 = $("#emplus030007"); //申請時間
var senao113m037 = $("#senao113m037"); //負責業務id
var senao113m037_ORA = $("#senao113m037_ORA"); //[Oracle] sales id
var senao113m038 = $("#senao113m038"); //負責業務
var senao113m007 = $("#senao113m007"); //Order No
var senao113m007_ORA = $("#senao113m007_ORA"); //[Oracle] Header Id
var senao113m008 = $("#senao113m008"); //date ordered
var senao113m010 = $("#senao113m010"); //Customer number
var senao113m010_t1 = $("#senao113m010_t1"); //Customer Name
var senao113m010_ORA = $("#senao113m010_ORA"); //隱藏欄位，[Oracle] Customer Id
var senao113m010_ORA2 = $("#senao113m010_ORA2"); //隱藏欄位，[Oracle] ATTRIBUTE13
var senao113m010_ORA3 = $("#senao113m010_ORA3"); //隱藏欄位，[Oracle] ATTRIBUTE14
var senao113m030 = $("#senao113m030"); //MAC ADDRESS下拉選單
var senao113m041 = $("#senao113m041"); //簽呈新品 保固重出?
var senao113m041_Y = $("#senao113m041_Y"); //簽呈新品 保固重出? 是
var senao113m041_N = $("#senao113m041_N"); //簽呈新品 保固重出? 否
var senao113m039 = $("#senao113m039"); //業務部門代號
var senao113m039_b1 = $("#senao113m039_b1"); //業務部門開窗
var senao113m040 = $("#senao113m040"); //業務部門名稱
var senao113m023 = $("#senao113m023"); //Customer PO
var senao113m011 = $("#senao113m011"); //隱藏欄位，聯絡人
var senao113m024 = $("#senao113m024"); //Order Type
var senao113m024_b1 = $("#senao113m024_b1"); //Order Type開窗
var senao113m022 = $("#senao113m022"); //Price List
var senao113m022_ORA = $("#senao113m022_ORA"); //[Oracle] List Header Id
var senao113m015 = $("#senao113m015"); //FOB(Trade Term)
var senao113m025 = $("#senao113m025"); //(User) Conversion Type下拉選單
var senao113m025_ORA = $("#senao113m025_ORA"); //(User) Conversion Type ORA
var senao113m020 = $("#senao113m020"); //Conversion Rate
var senao113m026 = $("#senao113m026"); //Conversion Date
var senao113m026_b1 = $("#senao113m026_btn"); //Conversion Date 開窗
var senao113m016 = $("#senao113m016"); //Tax Code 下拉選單
// var senao113m016_0 =$("#senao113m016_0"); //5%稅率
// var senao113m016_1 =$("#senao113m016_1"); //0%稅率
var senao113m017 = $("#senao113m017"); //Amount 稅金
var senao113m014 = $("#senao113m014"); //Payment Term
var senao113m014_ORA = $("#senao113m014_ORA"); //Payment Term ORA
var senao113m018 = $("#senao113m018"); //訂單總金額(未稅)-幣別
var senao113m019 = $("#senao113m019"); //訂單總金額(未稅)-總金額
var senao113m021 = $("#senao113m021"); //隱藏欄位，訂單總金額(未稅)-折合台幣
var senao113m044 = $("#senao113m044"); //INV. NO
var senao113m004_ORA = $("#senao113m004_ORA"); //隱藏欄位，Order Type ID
var senao113m045 = $("#senao113m045"); //GV發票號碼
var isInUpdateERPActivity = $("#isInUpdateERPActivity"); //隱藏欄位，是否已在UpdateERP的關卡，則不可撤銷流程
var totalIncludeTax_TWD = $("#totalIncludeTax_TWD"); //隱藏欄位，台幣訂單總金額(含稅)
var lbl_Subject = $("#lbl_Subject"); //顥示主旨內容
var senao113m046 = $("input[name='senao113m046']"); //是否併正貨出口
var senao113m046_Y = $("#senao113m046_Y"); //是否併正貨出口
var senao113m046_N = $("#senao113m046_N"); //是否併正貨出口
var senao113m047 = $("#senao113m047"); //Ship To Mail for LICENSE 使用
var senao113m048 = $("#senao113m048"); //Note for LICENSE 使用
var lbl_senao113m047 = $("#lbl_senao113m047"); //Ship To Mail for LICENSE 使用
var lbl_senao113m048 = $("#lbl_senao113m048"); //Note for LICENSE 使用
var senao113m049_Y = $("#senao113m049_Y"); //庫存出貨

//==================以下為單身資料=================
var gsenao113d004 = $("#gsenao113d004"); //料號 [2]
var gsenao113d005 = $("#gsenao113d005"); //品名規格 [3]
var gsenao113d006 = $("#gsenao113d006"); //數量 [4]
var gsenao113d008 = $("#gsenao113d008"); //單價 [5] 有權限才會顯示
var gsenao113d012 = $("#gsenao113d012"); //交期 [6]
var gsenao113d018 = $("#gsenao113d018"); //生管異動交期 [7]
var gsenao113d019 = $("#gsenao113d019"); //生產地 [1]
var gsenao113d019_val = $("#gsenao113d019_val"); //生產方式選單，記錄實際值
var gsenao113d013 = $("#gsenao113d013"); //SO [8]
var gsenao113d011 = $("#gsenao113d011"); //說明 [9]
var gsenao113d017 = $("#gsenao113d017"); //匯率(A/P) [10]
var gsenao113d015 = $("#gsenao113d015"); //材料成本 [11]
var gsenao113d016 = $("#gsenao113d016"); //材料成本率 [12]
var gsenao113d020 = $("#gsenao113d020"); //ITEM STATUS [13]
var gsenao113d021 = $("#gsenao113d021"); //工單單號 [14]
var gsenao113d022 = $("#gsenao113d022"); //Customer PO Line [15]
var gsenao113d023 = $("#gsenao113d023"); //品名備註 [16]
var gsenao113d024 = $("#gsenao113d024"); //Project Code [17]
var gsenao113d025 = $("#gsenao113d025"); //Project Name [18]
var gsenao113d010 = $("#gsenao113d010"); //隱藏欄位，小計 [19]
var gsenao113d007 = $("#gsenao113d007"); //隱藏欄位，單位 [20]
var gsenao113d009 = $("#gsenao113d009"); //隱藏欄位，幣別 [21]
var gsenao113d004_ORA = $("#gsenao113d004_ORA"); //[22] 隱藏欄位，[Oracle] Inventory Item Id
var gsenao113d024_b1 = $("#gsenao113d024_b1"); //Project Code開窗
var gsenao113d026 = $("#gsenao113d026"); //Tax Code 下拉選單[23]
var gsenao113d027 = $("#gsenao113d027"); //Customer PO[24]
//20231101 Steve 流程序號:SENAO10100004693 新增以下欄位
var gsenao113d028 = $("#gsenao113d028"); //訂單申請日之收款情形[26]
var gsenao113d029 = $("#gsenao113d029"); //001 呆滯處理方式[27]
var gsenao113d030 = $("#gsenao113d030"); //002 延單處理方式[28]
var gsenao113d031 = $("#gsenao113d031"); //呆滯料處理備註[29]

var Grid1 = $("#Grid1"); //Grid1
var btnAdd = $("#btnAdd"); //新增
var btnEdit = $("#btnEdit"); //修改
var btnDel = $("#btnDel"); //刪除
var btnImport = $("#btnImport"); //匯入
var link1 = $("#link1"); //一般銷貨格式下載連結
var link2 = $("#link2"); //維修收入格式下載連結
var link3 = $("#Link3"); //Excecl格式下載連結
var btnExportXls = $("#btnExportXls"); //匯出
var isSysAdmin = $("#isSysAdmin"); //隱藏欄位，填單人是否為系統管理者
var hdn_isMaintenanceIncome = $("hdn_isMaintenanceIncome"); //20230914 Calvin OrderType=維修收入
var isMaintenanceIncome = "N"; //Order Type是否為維修收入
var isMerakiCompany = "N"; //是否為Meraki公司
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
var isImportExcelUser = "N"; //是否為匯入EXCEL使用者

//以下供流程設計師使用
var isDiffSales = $("#isDiffSales"); //隱藏欄位，填單人是否不同於負責業務
var isSalesManager = $("#isSalesManager"); //隱藏欄位，負責業務是否為業務主管
var isMaintenanceIncomeForMeraki = $("isMaintenanceIncomeForMeraki"); //隱藏欄位，//Meraki維修收入
var businessManagerId = $("#businessManagerId"); //隱藏欄位，業務主管
var isInsteadOfTransaction = $("#isInsteadOfTransaction"); //隱藏欄位，Order Type是否為代收付
var isProductUnit = $("#isProductUnit"); //隱藏欄位，申請單位是否為生管單位
var applicantManagerId = $("#applicantManagerId"); //隱藏欄位，申請人主管ID
var isSpecificItem = $("#isSpecificItem"); //隱藏欄位，是否為特定料號(需簽核至董事長)
var isPVTItemStatus = $("#isPVTItemStatus"); //隱藏欄位，ITEM STATUS是否為PVT
var isOverItemCost = $("#isOverItemCost"); //隱藏欄位，是否超過材料成本
var isIncludeNoGoodsForm = $("#isIncludeNoGoodsForm"); //隱藏欄位，是否其他收入無實物
var addApprovalPMList = $("#addApprovalPMList"); //隱藏欄位，加簽PM清單
var isSpecificCustomer = $("#isSpecificCustomer"); //隱藏欄位，是否為特定顧客(Order Type ID = 1482)
var isSpecificBiz = $("#isSpecificBiz"); //隱藏欄位，申請單位是否為業一、六、七、八、九課
var isNormalItemNo = $("#isNormalItemNo"); //隱藏欄位，是否為一般料號(去除W料號)
var isBizDivisionII = $("#isBizDivisionII"); //隱藏欄位，是否為業務二處
var isOverseasBizDept = $("#isOverseasBizDept"); //隱藏欄位，是否為海外事業部
var isBizSectionI = $("#isBizSectionI"); //隱藏欄位，是否為業務一課
var isBizSectionV = $("#isBizSectionV"); //隱藏欄位，是否為業務五課
var isBizSectionVI = $("#isBizSectionVI"); //隱藏欄位，是否為業務六課
var isBizSectionVII = $("#isBizSectionVII"); //隱藏欄位，是否為業務七課
var isBizSectionVIII = $("#isBizSectionVIII"); //隱藏欄位，是否為業務八課
var isBizSectionIX = $("#isBizSectionIX"); //隱藏欄位，是否為業務九課
var isBrandSales = $("#isBrandSales"); //隱藏欄位，是否為品牌銷售課
var isPMSectionV = $("#isPMSectionV"); //隱藏欄位，是否為產品行銷五課
var isPMSection_ENR = $("#isPMSection_ENR"); //隱藏欄位，是否為恩睿網通事業部
var isBizDivisionV = $("#isBizDivisionV"); //隱藏欄位，是否為業務五處
var isComNetDivision = $("#isComNetDivision"); //隱藏欄位，運算網路業務處
var isComNetSectionI = $("#isComNetSectionI"); //隱藏欄位，運算業務一課
var isStrategicBusSectionI = $("#isStrategicBusSectionI"); //隱藏欄位，策略業務一課
var isStrategicBusSectionII = $("isStrategicBusSectionII"); //隱藏欄位，策略業務二課
var isPowerBussSection = $("#isPowerBussSection"); //隱藏欄位，電源業務課
var isPropertySection = $("#isPropertySection"); //隱藏欄位，物管課
var isMaterCtrlSection = $("#isMaterCtrlSection"); //隱藏欄位，物料控制課
var isNotCheck_Credit_Cost = $("#isNotCheck_Credit_Cost"); //樣品訂單不卡Credit及Cost
var Sales8_NotApproveDivision = $("Sales8_NotApproveDivision"); //業務八課不經過處級主管
var hdn_OverCredit = $("#hdn_OverCredit"); //隱藏欄位(計算後)授信額度
var hdn_IsHold = $("#hdn_IsHold"); //隱藏欄位，訂單狀態是否HOLD
var hdn_IsTT = $("#hdn_IsTT"); //隱藏欄位，客戶是否為TT客戶
var hdn_IsCreditCheck = $("#hdn_IsCreditCheck"); //隱藏欄位，是否要CreditCheck
//20240102 Steve 新增欄位:check_IsMaterial 紀錄是否為呆滯料以利流程使用
var check_IsMaterial = $("#check_IsMaterial"); //隱藏欄位，是否為呆滯料
var attribute1 = $("#attribute1"); //隱藏欄位，紀錄生管負責人員 20241101 Neil

//行動簽核
var senao113m031_m = $("#senao113m031_m"); //隱藏欄位，是否送簽至總經理 (checkbox)
var senao113m032_m = $("#senao113m032_m"); //隱藏欄位，是否送簽至董事長 (checkbox)
var senao113m030_m = $("#senao113m030_m"); //隱藏欄位，MAC Address (dropdown)
var senao113m041_m = $("#senao113m041_m"); //隱藏欄位，簽呈新品是否保固重出 (radio)
var senao113m025_m = $("#senao113m025_m"); //隱藏欄位，Conversion Type (dropdown)
var senao113m016_m = $("#senao113m016_m"); //隱藏欄位，Tax Code (radio)
var systemDateTime = showCurrentDate(); //今天日期
//GRID
var Grid1Binding = ["", "gsenao113d019", "gsenao113d004", "gsenao113d005", "gsenao113d006", "gsenao113d008", "gsenao113d012", "gsenao113d018", "gsenao113d013", "gsenao113d011", "gsenao113d017", "gsenao113d015", "gsenao113d016", "gsenao113d020", "gsenao113d021", "gsenao113d022", "gsenao113d023", "gsenao113d024", "gsenao113d025", "gsenao113d010", "gsenao113d007", "gsenao113d009", "gsenao113d004_ORA", "gsenao113d026", "gsenao113d027", "gsenao113d019_val", "gsenao113d028", "gsenao113d029", "gsenao113d031", "gsenao113d030", "excelErrorMsg"];
var Grid1Columns = ["項次", "生產地", "料號", "品名規格", "數量", "單價", "交期", "生管異動交期", "SO", "說明", "匯率(A/P)", "材料成本", "材料成本率", "Item Status", "工單單號", "Customer PO(PI) Line", "品名備註", "Project Code", "Project Name", "小計(hidden)", "單位(hidden)", "幣別(hidden)", "Inventory Item Id(hidden)", "稅別", "Customer PO(PI)", "生產地val", "訂單申請日之收款情形", "呆滯處理方式", "呆滯料處理備註", "延單處理方式", "錯誤訊息"];
var Grid1ColumnIds = ["gno", "senao113d019", "senao113d004", "senao113d005", "senao113d006", "senao113d008", "senao113d012", "senao113d018", "senao113d013", "senao113d011", "senao113d017", "senao113d015", "senao113d016", "senao113d020", "senao113d021", "senao113d022", "senao113d023", "senao113d024", "senao113d025", "senao113d010", "senao113d007", "senao113d009", "senao113d004_ORA", "senao113d026", "senao113d027", "senao113d019_val", "senao113d028", "senao113d029", "senao113d031", "senao113d030", "excelErrorMsg"];

var gridList = [
  {
    //grid初始化參數
    caption: "",
    gid: "Grid1",
    pager: "#Grid1_pager",
    datatype: "local",
    colNames: [
      "項次",
      "生產地",
      "料號",
      "品名規格",
      "數量",
      "單價",
      "交期",
      "生管異動交期",
      "SO",
      "說明",
      "匯率(A/P)",
      "材料成本",
      "材料成本率",
      "Item Status",
      "工單單號",
      "Customer PO(PI) Line",
      "品名備註",
      "Project Code",
      "Project Name",
      "小計(hidden)",
      "單位(hidden)",
      "幣別(hidden)",
      "Inventory Item Id(hidden)",
      "稅別",
      "Customer PO(PI)",
      "生產地val",
      "訂單申請日之收款情形",
      "呆滯處理方式",
      "呆滯料處理備註",
      "延單處理方式",
      "錯誤訊息",
    ],
    colModel: [
      {
        name: "gno",
        index: "gno",
        editable: true,
        sorttype: "text",
        hidden: false
      },
      {
        name: "senao113d019",
        index: "senao113d019",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d004",
        index: "senao113d004",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d005",
        index: "senao113d005",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d006",
        index: "senao113d006",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d008",
        index: "senao113d008",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d012",
        index: "senao113d012",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d018",
        index: "senao113d018",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d013",
        index: "senao113d013",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d011",
        index: "senao113d011",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d017",
        index: "senao113d017",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d015",
        index: "senao113d015",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d016",
        index: "senao113d016",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d020",
        index: "senao113d020",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d021",
        index: "senao113d021",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d022",
        index: "senao113d022",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d023",
        index: "senao113d023",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d024",
        index: "senao113d024",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d025",
        index: "senao113d025",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d010",
        index: "senao113d010",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d007",
        index: "senao113d007",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d009",
        index: "senao113d009",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d004_ORA",
        index: "senao113d004_ORA",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d026",
        index: "senao113d026",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d027",
        index: "senao113d027",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d019_val",
        index: "senao113d019_val",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d028",
        index: "senao113d028",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d029",
        index: "senao113d029",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d031",
        index: "senao113d031",
        editable: true,
        sorttype: "text",
      },
      {
        name: "senao113d030",
        index: "senao113d030",
        editable: true,
        sorttype: "text",
      },
      {
        name: "excelErrorMsg",
        index: "excelErrorMsg",
        editable: true,
        sorttype: "text",
      },
    ],
    rowNum: 10,
    rowList: [10, 20, 30],
    sortname: "gno",
    viewrecords: true,
    sortorder: "asc",
    onSelectRow: function (rowid, status, e) {  //行選取
      let row = $(this).jqGrid('getRowData', rowid);
      if (status) { //選取
        for (let i = 0; i < Grid1ColumnIds.length; i++) {
          if ($('#' + Grid1ColumnIds[i])) {
            $('#' + Grid1ColumnIds[i]).val(row[Grid1ColumnIds[i]]);
          }
        }
      }


    }
  },
];
/*---------------------公用變數 End--------------*/
/*---------------------Form Load Function Start--------------*/

function frmGeneralLoad() {
  //通用需要載入的資料
  //設定公司別
  setSelectDefalut("form_ou", invokeURL + "BPM_COMPANY_INFO_LIST", {}, "");
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    invokeURL + "BPM_getFactory",
    { COMPANY: form_ou.val() },
    ""
  );
  //表單代號
  senao113m001.val(frmType);
  senao113m001.attr('disabled', 'true');
  
  //設定申請時間
  emplus030007.val(Today);
  emplus030007.attr('disabled', 'true');
  return true;
}
function frmGetOU(ou, org) {
  //設定填表人
  emplus030015.val(userId);
  emplus030005.val(user_Name);
  emplus030005.attr('disabled', 'true');
  emplus030015.attr('disabled', 'true');
  //設定申請人
  senao113m004.val(Department);
  senao113m006.val(Department_Name);
  senao113m003.val(userId);
  senao113m005.val(user_Name);
  let data = { OUID: null, ORGID: null };
  let result = ajaxGetData(invokeURL + "BPM_COMPANY_ID_GET", {
    BAS_COMPANY: ou,
    BAS_FACTORY: org,
  });
  if (result[0].result == undefined) {
    data.OUID = result[0].ORACLE_OU;
    data.ORGID = result[0].ORACLE_ORG;
  }
  return data;
}
function frmUIlLoad() {
  //每張表單需要資入的資料
  OU_ID = frmGetOU(form_ou.val(), 'ALL').OUID;
  //生產地選項
  setSelectDefalut(
    "gsenao113d019_val",
    invokeURL + "BPM_SENAO113_50",
    { BAS_COMPANY: form_ou.val(), BAS_LANG: locale },
    ""
  );
  //Conversion Type選項
  setSelectDefalut("senao113m025", invokeURL + "BPM_ERP_SENAO113_36", {}, "");
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
  //檢查開啟表單的使用者是否有權限看到單價
  isUnitPriceUser = checkIsUnitPriceViewer(userId, activityId);
  //NPI 樣品出貨表單填寫注意事項，印度神準因稅率操作不同故不適用 20240919 Neil
  if (
    form_ou.val() != "senao" &&
    !form_ou.val() != "stw" &&
    form_ou.val() != "enr"
  ) {
    $("#Link149").addClass("d-none");
  }
  //檢查是否可以使用匯入EXCEL
  isImportExcelUser = checkIsGroupUser(userId, "SN113_21");
  if (isImportExcelUser == "Y") {
    btnImport.removeClass("d-none");
    link1.removeClass("d-none");
    link2.removeClass("d-none");
  } else {
    btnImport.addClass("d-none");
    link1.addClass("d-none");
    link2.addClass("d-none");
  }

  loadData(formInstOID);
  //已在updateERP關卡，隱藏"退回流程"按鈕
  if (isInUpdateERPActivity.val() == "Y") {
    $('#returnBtn').addClass("d-none");

  }


  //20211013 Milla 神準沒有導入LICENSE 交易，故隱藏Ship To Mail、Note欄位
  if (form_ou.val() == "senao") {
    senao113m047.addClass("d-none");
    senao113m048.addClass("d-none");
    lbl_senao113m047.addClass("d-none");
    lbl_senao113m048.addClass("d-none");
  }

  let updateDB = false;
  let subMsg = getMsgInfo(invokeURL, frmType, "002", locale);
  if (
    senao113m007.val() == "表單結案後由ORACLE傳回" ||
    senao113m007.val() == subMsg ||
    (senao113m016.val() == "5%" && isIncludeNoGoodsForm.val() == "Y")
  ) {
    updateDB = true;
  }
  senao113m007.val(queryOracleOrderNo(senao113m002.val()));
  senao113m007_ORA.val(queryOracleHeaderId(senao113m002.val()));
  if (senao113m016.val() == "5%" && isIncludeNoGoodsForm.val() == "Y") {
    senao113m045.val(querySENAO113_44(senao113m007_ORA.val()));
  }
  if (updateDB) {
    let result = ajaxGetData(invokeURL + "BPM_senao113_UPDATE", {
      senao113m007: senao113m007.val(),
      senao113m007_ora: senao113m007_ORA.val(),
      senao113m045: senao113m045.val(),
      formserialnumber: senao113m002.val(),
    });
    if (result[0].result == "OK") {
      console.log("BPM_senao113_UPDATE Err:", result[0].result);
    }
  }
  if (activityId == "UserTask_3") {
    //開單
    //form_ou.attr('disabled', true);
    form_org.attr('disabled', false);
    gsenao113d019_val.attr("disabled", true);
    displayCreditInfo(false);
    initGridRow();
    gsenao113d021.attr("readonly", true); //工單單號

    //複製表單時，下方欄位Reset
    if (formInstOID == "") {
      if (IsInvaildDept(invokeURL, $("#senao113m004").val())) {
        //判斷是否為失效部門
        $("#senao113m004").val(""); //清空部門
        $("#senao113m006").val(""); //清空部門
      }

      if (IsInvaildDept(invokeURL, $("#senao113m039").val())) {
        //判斷是否為失效部門
        $("#senao113m039").val(""); //清空部門
        $("#senao113m040").val(""); //清空部門
      }
      senao113m031_Y.prop("checked", false); //送簽至總經理
      senao113m031_Y.attr("disabled", false);
      senao113m032_Y.prop("checked", false); //送簽至董事長
      senao113m032_Y.attr("disabled", false);
      senao113m044.val(""); //INV. NO
      senao113m008.val(systemDateTime); //ordered date
      isInUpdateERPActivity.val(""); //是否已在UpdateERP的關卡，則不可撤銷流程
      hdn_IsHold.val("");
      hdn_IsTT.val("");
      hdn_IsCreditCheck.val("");
      if (senao113m024.val().substring(0, 1) == "S" && form_ou.val() != "stw") {
        //為避免使用舊Order Type，ex:S13310-銷貨
        senao113m024.val(""); //Order Type
      }
      senao113m024_process(); //Order Type可開放的欄位
      if (form_ou.val() == "senao" || form_ou.val() == "stw") {
        if (
          checkIsIncludeNoGoodsForm(senao113m004_ORA.val()) == "Y" &&
          senao113m016.val().search("0%") > -1
        ) {
          //代收付 且為0%稅率
          senao113m044.attr("readonly", false); //INV. NO
          senao113m046_Y.attr("disabled", false); //是否併正貨出口-是
          senao113m046_Y.attr("readonly", false); //是否併正貨出口-是
          senao113m046_N.attr("disabled", false); //是否併正貨出口-否
          senao113m046_N.attr("readonly", false); //是否併正貨出口-否
        } else {
          if (checkIsIncludeNoGoodsForm(senao113m004_ORA.val()) == "Y") {
            senao113m044.attr("readonly", false); //INV. NO
          } else {
            senao113m044.attr("readonly", true); //INV. NO
          }
          senao113m046_Y.attr("disabled", true); //是否併正貨出口-是
          senao113m046_Y.attr("readonly", true); //是否併正貨出口-是
          senao113m046_N.attr("disabled", true); //是否併正貨出口-否
          senao113m046_N.attr("readonly", true); //是否併正貨出口-否
        }
      }

      //資訊服務申請單SENAO10100001312新增勾選欄位”庫存出貨”並綁定客別為杜拜分公司(客代:4982)&新加坡分公司(客代:1021&3951)，當這2個RBU勾選此欄位代表互挪庫存出貨，並跑新的簽核流程
      if (isValueInSNSI003("SN113_S29", senao113m010.val()) == "Y") {
        senao113m049_Y.attr("disabled", false) = false; //庫存出貨
      } else {
        senao113m049_Y.prop("checked", false);;
        senao113m049_Y.attr("readonly", true); //庫存出貨
      }
    }
  } else {
    //開單以外關卡處理
  }
  return true;
}
/*---------------------Form Load Function End--------------*/
/*---------------------Form Function Start--------------*/

$(document).ready(function () {
  loginCheck(); //登入檢查
  initFrm();

});
function initFrm() {
  //init form
  createGrid(0);
  frmGeneralLoad();
  frmUIlLoad();
  frmEvent();
}

/*---------------------Form Function End--------------*/

/*---------------------UI event Function Start--------------*/
function frmEvent() {
  //form event function

  $('#form_ou').on('change', function () { //廠區
    OU_ID = frmGetOU(form_ou.val(), 'ALL').OUID;
    //設定廠區
    setSelectDefalut(
      "form_org",
      invokeURL + "BPM_getFactory",
      { COMPANY: form_ou.val() },
      ""
    );
  });
  $('#form_org').on('change', function () { //廠區
    ORG_ID = frmGetOU(form_ou.val(), $('#form_org').val()).ORGID;
    console.log('ORG_ID:',ORG_ID);
  });
  $('#senao113m003_b1').on('click', function () { //申請人

    // sessionStorage 存入數據
    let tTitle = "申請人";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m003_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: form_ou.val(), mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#senao113m029_b1').on('click', function () { //加簽人員

    // sessionStorage 存入數據
    let tTitle = "加簽人員";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m029_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: 'senao', mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
    let tReturnId = new Array("senao113m039","senao113m040");
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnId", tReturnId);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  /**
   * 清空加簽PM人員
   */
  $('#ClearPM').on('click', function () {
    senao113m029.val("");
    addApprovalPMList.val();
  });
  $('#senao113m037_b1').on('click', function () { //業務人員


    if (form_org.val() == "") {
      //alert('請先選擇【廠區】!!!');
      alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale));
      return false;
    }
    // sessionStorage 存入數據
    let tTitle = "負責業務";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m037_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SALESREP_Org2";
    let tAPI = invokeURL + 'BPM_ERP_SALESREP_Org2';
    let tParameter = { OU_ID: OU_ID, ORG_ID: ORG_ID, SALESREP_NUMBER: 'ALL', LAST_NAME: 'ALL' };
    let tQBEField = { SALESREP_NUMBER: 'SALESREP_NUMBER', LAST_NAME: 'LAST_NAME' }; //查詢欄位 {參數欄位:table欄位};	
    console.log('tParameter', tParameter);
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });

  $('#senao113m039_b1').on('click', function () { //業務部門



    // sessionStorage 存入數據
    let tTitle = "業務部門";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m039_process()"); //回傳函數
    let tColAPi = "BPM_getUnit_Org";
    let tAPI = invokeURL + 'BPM_getUnit_Org';
    let tParameter = { form_ou: form_ou.val(), mainOrgId: form_ou.val(), UNID: null, ORGNAME: null };
    let tQBEField = { UNID: 'ID', ORGNAME: 'ORGANIZATIONUNITNAME' }; //查詢欄位 {參數欄位:table欄位};	
    console.log('tParameter', tParameter);
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#senao113m010_b1').on('click', function () { //客戶
    // sessionStorage 存入數據
    let tTitle = "客戶";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m010_process()"); //回傳函數
    let tColAPi = "BPM_ERP_OracleCustomer_Org";
    let tAPI = invokeURL + 'BPM_ERP_OracleCustomer_Org';
    let tParameter = { OU_ID: OU_ID, CNAME: null, CID: null };
    let tQBEField = { CNAME: 'CUSTOMER_NAME', CID: 'CUSTOMER_NUMBER' }; //查詢欄位 {參數欄位:table欄位};	
    console.log('tParameter', tParameter);
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#senao113m024_b1').on('click', function () { //Order Type
    // sessionStorage 存入數據
    let tTitle = "Order Type";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m024_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO113_32";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_32';
    let tParameter = { OU_ID: OU_ID, NAME: null, TRANSACTION_TYPE_ID: null };
    let tQBEField = { NAME: 'NAME', TRANSACTION_TYPE_ID: 'TRANSACTION_TYPE_ID' }; //查詢欄位 {參數欄位:table欄位};	
    console.log('tParameter', tParameter);
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#senao113m022_b1').on('click', function () { //Price List
    // sessionStorage 存入數據
    let tTitle = "Price List";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m022_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO113_30";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_30';
    let tParameter = { NAME: null, LIST_HEADER_ID: null };
    let tQBEField = { NAME: 'NAME', LIST_HEADER_ID: 'LIST_HEADER_ID' }; //查詢欄位 {參數欄位:table欄位};	
    console.log('tParameter', tParameter);
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#senao113m015_b1').on('click', function () { //FOB

    // sessionStorage 存入數據
    let tTitle = "FOB";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m015_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO113_33";
    let tAPI = invokeURL + 'BPM_ERP_SENAO113_33';
    let tParameter = { LOOKUP_CODE: null, MEANING: null };
    let tQBEField = { LOOKUP_CODE: 'LOOKUP_CODE', MEANING: 'MEANING' }; //查詢欄位 {參數欄位:table欄位};	
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });
  $('#gsenao113d004_b1').on('click', function () { //料號
    let orderType = senao113m024.val();
    if ($("#form_org").val() == "") {
      //alert('請先選擇【廠區】!!!');
      alert(
        "[" +
        $("#lbl_form_org").html() +
        "] " +
        getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale)
      );
      return false;
    }
    if (orderType == "") {
      //alert('請先選擇【廠區】!!!');
      alert(
        "[" +
        $("#lbl_senao113m024").html() +
        "] " +
        getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale)
      );
      return false;
    }
    let apiId = "";
    let colId = "BPM_ERP_SYS_LW_Material2";
    let tParameter = { organization_id: ORG_ID, SEGMENT1: null, DESCRIPTION: null, SEGMENT: null };
    if (orderType && form_ou.val() != "sin") {
      if ((orderType.substr(0, 1) == "S" || isNotCheck_Credit_Cost.val() == "Y") && form_ou.val() != "stw") { //20241022 Neil
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
      } else if (orderType.substr(0, 4) == "維修收入" || (orderType.toUpperCase().indexOf('維修收入') > -1 && form_ou.val() == "stw")) { //20241022 Neil
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'Maintain%';
      } else if (orderType.substr(0, 3) == "代收付" || (orderType.toUpperCase().indexOf('代收付') > -1 && form_ou.val() == "stw")) {    //20241022 Neil
        //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
        //20231027 Steve [SENAO10100004693] 代收付-銷貨 新增 Material-001 Material-002
        //appendSql += " AND (segment1 like 'W%' or segment1 in ('PVT','Material','Expenses','NRE','Tooling Fee','Cer. Fee','Rework Fee')) "; 
        apiId = "BPM_ERP_SYS_LW_Material2_Collection";
      } else if (orderType.substr(0, 3) == "NRE") {
        apiId = "BPM_ERP_SYS_LW_Material2_SEGMENT";
        tParameter.SEGMENT = 'NRE Fee%';
      } else if ((senao113m024.val().toUpperCase().indexOf("LICENSE") >= 0) && (form_ou.val() == "enr" || form_ou.val() == "stw")) {
        apiId = "BPM_ERP_SYS_LW_Material2_LICENSE";
      }
      //20250205 Neil
      if (isNotCheck_Credit_Cost.val() == "Y" && orderType.toUpperCase().indexOf('材料款') == -1) { //樣品訂單不卡Credit及Cost
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

    let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION' }; //查詢欄位 {參數欄位:table欄位};	
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("FRM/DataChooser.html", "", "width=" + 720 + ",height=" + 430 + ",resizable=1");
    //window.open("FRM/DataChooser.html");
  });


  $('#gsenao113d019_val').on('change', function () { //生產地onclick
    gsenao113d019.val($("#gsenao113d019_val").find(":selected").text());
  });
  $('#senao113m025').on('change', function () { //生產地onclick
    senao113m025_onchange(); //Conversion Type下拉選單
  });

  /**
   * [Grid] 新增資料
   */
  /*
      20231101 Steve 流程序號:SENAO10100004693 
      新增欄位
      (1)訂單申請日之收款情形 料號為 Material-001 or Material-002 [未選卡傳送]
      (2) 001 呆滯處理方式    料號為 Material-001 [未選卡傳送]
      (3) 呆滯料處理備註      料號為 Material-001 [未選卡傳送]
      (4) 002 延單處理方式    料號為 Material-002 [未選卡傳送]
  */
  $('#btnAdd').on('click', function () {
    let errMsg = "";
    let itemNo = gsenao113d004.val();
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-001' || senao113m024.val() == '材料款-呆滯') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {

        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[001 呆滯處理方式] 不可空白";
      if (gsenao113d029.val().trim() == '' || gsenao113d029 == null) {
        errMsg += "[" + $("#lbl_gsenao113d029").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[呆滯料處理備註] 不可空白";
      if (gsenao113d031.val().trim() == '' || gsenao113d031 == null) {
        errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[呆滯料處理備註] 長度超出限制";
      if (gsenao113d031.val().length > 200) {
        errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + "exceed the length limit" + "\n";
      }

    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-002' || senao113m024.val() == '材料款-延單') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {
        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
      // errMsg += "[002 延單處理方式] 不可空白";
      if (gsenao113d030.val().trim() == '' || gsenao113d030 == null) {
        errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-002' || senao113m024.val() == '材料款-延單') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {
        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
      // errMsg += "[002 延單處理方式] 不可空白";
      if (gsenao113d030.val().trim() == '' || gsenao113d030 == null) {
        errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
    }
    if (form_org.val() == "") {
      //errMsg +="請先選擇【廠區】!";
      errMsg += "[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale) + "\n";
    }
    if (errMsg != "") {
      alert(errMsg);
      return false;
    } else {

      calculateItemCost(gsenao113d004_ORA.val(), gsenao113d004.val(), senao113m022.val().substr(0, 3), gsenao113d017.val(), gsenao113d008.val());
      calculateItemCostRatio();
      //  tGrid.addRow(); //將Binding欄位的資料填入Grid中
      let $grid = $("#" + gridList[0].gid);
      // let gridData = $grid.getGridParam("data");
      let gridData = $grid.jqGrid('getRowData');
      let data = {};
      let rowid = gridData.length + 1;
      for (let i = 0; i < Grid1ColumnIds.length; i++) {
        if (Grid1Binding[i] != "") {
         // console.log(Grid1Binding[i]);
          let value = "";
          if ($('#' + Grid1Binding[i])) {
            value = $('#' + Grid1Binding[i]).val();
          }
          //console.log(value);
          if (value != undefined)
            data[Grid1ColumnIds[i]] = value;
          else if (Grid1ColumnIds[i] == 'gno')
            data[Grid1ColumnIds[i]] = rowid;
        }

      }
     // console.log('data', data);

      $grid.jqGrid('addRowData', rowid, data, 'last');
      gridClearBinding();
      // tGrid.clearBinding(); //新增後清除Binding欄位資料
      //20231101 Steve 新增欄位 在add grid成功後更改背景顏色
      gsenao113d028.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d029.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d030.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d031.css({
        "background-color": DEFAULT_BGCOLOR,
      });

      // document.getElementById(tGridId).value = tGrid.toArrayString(); //將新的資料存入Grid隱藏欄位中
      calculateTotalAmount_TotalTax();
      queryAllCreditItems(senao113m010_ORA.val(), senao113m018.val(), true);
      initGridRow();
      if (gridData.length > 0) {
        form_org.attr('disabled', true);
      } else {
        form_org.attr('disabled', false);
      }
    }
  });
  /**
   * [Grid] 修改資料
   */
  /*
      20231101 Steve 流程序號:SENAO10100004693 
      新增欄位
      (1)訂單申請日之收款情形 料號為 Material-001 or Material-002 [未選卡傳送]
      (2) 001 呆滯處理方式    料號為 Material-001 [未選卡傳送]
      (3) 呆滯料處理備註      料號為 Material-001 [未選卡傳送]
      (4) 002 延單處理方式    料號為 Material-002 [未選卡傳送]
  */
  $('#btnEdit').on('click', function () {
    //  tGrid.addRow(); //將Binding欄位的資料填入Grid中
    let $grid = $("#" + gridList[0].gid);
    // let gridData = $grid.getGridParam("data");
    let rowIds = $grid.jqGrid("getGridParam", "selarrrow");
    let gridData = $grid.jqGrid('getRowData');
    let data = {};
    let errMsg = "";
    let itemNo = gsenao113d004.val();
    if (rowIds < 1) {
      //alert("請先選擇下方一筆資料再做編輯");
      alert(getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "027", locale));
      return false;
    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-001' || senao113m024.val() == '材料款-呆滯') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {

        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[001 呆滯處理方式] 不可空白";
      if (gsenao113d029.val().trim() == '' || gsenao113d029 == null) {
        errMsg += "[" + $("#lbl_gsenao113d029").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[呆滯料處理備註] 不可空白";
      if (gsenao113d031.val().trim() == '' || gsenao113d031 == null) {
        errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + getMsgInfo(invokeURL, 'senao', "004", locale) + "\n";
      }
      // errMsg += "[呆滯料處理備註] 長度超出限制";
      if (gsenao113d031.val().length > 200) {
        errMsg += "[" + $("#lbl_gsenao113d031").html() + "] " + "exceed the length limit" + "\n";
      }

    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-002' || senao113m024.val() == '材料款-延單') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {
        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
      // errMsg += "[002 延單處理方式] 不可空白";
      if (gsenao113d030.val().trim() == '' || gsenao113d030 == null) {
        errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-002' || senao113m024.val() == '材料款-延單') {
      // errMsg += "[訂單申請日之收款情形] 不可空白";
      if (gsenao113d028.val().trim() == '' || gsenao113d028 == null) {
        errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
      // errMsg += "[002 延單處理方式] 不可空白";
      if (gsenao113d030.val().trim() == '' || gsenao113d030 == null) {
        errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "004", locale) + "\n";
      }
    }
    if (form_org.val() == "") {
      //errMsg +="請先選擇【廠區】!";
      errMsg += "[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale) + "\n";
    }
    if (errMsg != "") {
      alert(errMsg);
      return false;
    } else {

      calculateItemCost(gsenao113d004_ORA.val(), gsenao113d004.val(), senao113m022.val().substr(0, 3), gsenao113d017.val(), gsenao113d008.val());
      calculateItemCostRatio();



      for (let i = 0; i < Grid1ColumnIds.lengtrh; i++) {
        let value = $('#' + Grid1ColumnIds[i]).val();
        if (value != undefined)
          data[Grid1ColumnIds[i]] = value;
      }
      $grid.jqGrid('setRowData', rowIds[0], data);
      gridClearBinding();
      // tGrid.clearBinding(); //新增後清除Binding欄位資料
      //20231101 Steve 新增欄位 在add grid成功後更改背景顏色
      gsenao113d028.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d029.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d030.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d031.css({
        "background-color": DEFAULT_BGCOLOR,
      });

      //document.getElementById(tGridId).value = tGrid.toArrayString(); //將新的資料存入Grid隱藏欄位中
      calculateTotalAmount_TotalTax();
      queryAllCreditItems(senao113m010_ORA.val(), senao113m018.val(), true);
      initGridRow();
      if (gridData.length > 0) {
        form_org.attr('disabled', true);
      } else {
        form_org.attr('disabled', false);
      }
    }
  });
  /**
 * [Grid] 刪除資料
 */
  $('#btnDel').on('click', function () {
    let $grid = $("#" + gridList[0].gid);
    let rowIds = $grid.jqGrid("getGridParam", "selarrrow");
    if (rowIds[0] > 0) {
      $grid.jqGrid("delRowData", rowIds[0]);
      gridClearBinding();; //清除Binding欄位資料
      //document.getElementById(tGridId).value = tGrid.toArrayString(); //將新的資料存入Grid隱藏欄位中
      senao113m017.val(""); //稅
      senao113m019.val(""); //訂單總金額
      //20231101 Steve 流程序號:SENAO10100004693 因新增欄位,在grid 刪除資料時作disable
      gsenao113d028.attr('disabled', true);
      gsenao113d029.attr('disabled', true);
      gsenao113d030.attr('disabled', true);
      gsenao113d031.attr('disabled', true);
      gsenao113d031.attr('readOnly', true);
      gsenao113d028.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d029.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d030.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      gsenao113d031.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      calculateTotalAmount_TotalTax();
      queryAllCreditItems(senao113m010_ORA.val(), senao113m018.val(), true);
      initGridRow();
      if (gridData.length > 0) {
        form_org.attr('disabled', true);
      } else {
        form_org.attr('disabled', false);
      }
    } else {
      //alert("請先在下方選擇一筆資料，再做刪除!!\n");
      alert(getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "028", locale));
      return false;
    }
  });
}


/*-----------------子視窗回傳 Start-------------------------------*/
//chindReturnData =.回傳的資料,宣告在efgpDetails.js
/**
 * 員開窗後呼叫，處理選後的員工資料
 * @description
 *   原始資料:{"ID": "105130","USERNAME": "張道筵","OUID": "22620","ORGANIZATIONUNITNAME": "工業工程處"
}
 *   顯示格式: 
 *   流程使用格式: 
 */
function senao113m003_process() {
  //console.log('cdata', chindReturnData);
  senao113m003.val(chindReturnData[0].ID);
  senao113m005.val(chindReturnData[0].USERNAME);
  senao113m004.val(chindReturnData[0].OUID);
  senao113m006.val(chindReturnData[0].ORGANIZATIONUNITNAME);
}
/**
 * 加簽PM人員開窗後呼叫，處理複選後的員工資料，包括欄位顯示PM人員、簽核流程使用PM人員
 * @description
 *   原始資料:[['1','101993','陳怡穎','11306','產品規劃一課'],['2','101869','張芮熏','11306','產品規劃一課']]
 *   顯示格式:100593-蔡明嶧;100703-蔡居晏
 *   流程使用格式:100593,100703
 */
function senao113m029_process() {
  var originPmList = [];
  var displayPmList = [];
  var i;
  if (chindReturnData != "") {
    originPmList = eval(chindReturnData);
    for (i = 0; i < originPmList.length; i++) {
      displayPmList.push(originPmList[i][1] + "-" + originPmList[i][2]);
    }
    senao113m029.val(displayPmList.join(";"));
    addApprovalPMList.val(splitBySymbol(senao113m029.val()));
  }
  return true;
}
/**
* 提供負責業務開窗後呼叫，查詢對應所屬部門
*/
function senao113m037_process() {
  //console.log('cdata', chindReturnData);
  senao113m037.val(chindReturnData[0].SALESREP_NUMBER);
  senao113m038.val(chindReturnData[0].LAST_NAME);
  if (senao113m037.val()) {
    let userInfo = queryUserByEmpId(invokeURL, senao113m037.val());
    if (!$.isEmptyObject(userInfo)) {
      senao113m039.val(userInfo.unitId);
      senao113m040.val(userInfo.unitName);
    } else {
      //alert("該負責業務查無對應所屬部門!");
      alert(getMsgInfo(invokeURL, frmType, "037", locale));
    }
  }
  return true;
}
/**
* 提供負責業務部門開窗後呼叫，查詢對應所屬部門
*/
function senao113m039_process() {
 // console.log('cdata', chindReturnData);
  senao113m039.val(chindReturnData[0].ID);
  senao113m040.val(chindReturnData[0].ORGANIZATIONUNITNAME);

  return true;
}
/**
 * 提供客戶欄位開窗後呼叫、手動輸入代碼後呼叫，查詢客戶相關資料、
 * 更新CONVERSION TYPE下拉選單、顯示信用額度資料
 */
function senao113m010_process() {

  //console.log('cdata', chindReturnData);
  let customerId = "";
  let customerName = "";
  if (chindReturnData.length > 0) {
    customerId = chindReturnData[0].CUSTOMER_NUMBER;
    customerName = chindReturnData[0].CUSTOMER_NAME;
    senao113m010.val(customerId);
    senao113m010_t1.val(customerName);
  }else{
    customerId=senao113m010.val();
    customerName=senao113m010_t1.val();
  }


  let customerInfo = queryCustomerRelatedInfo(customerId);
  if (Object.keys(customerInfo).length !== 0) {
    senao113m010_ORA.val(customerInfo.customerId);
    senao113m010_ORA2.val(customerInfo.attribute13);
    if (customerInfo.attribute14 === "Y" && customerInfo.status === "A") {
      senao113m010_ORA3.val("Y");
    } else {
      senao113m010_ORA3.val("");
    }
    senao113m014_ORA.val(customerInfo.paymentTermId);
    senao113m014.val(customerInfo.paymentTerm);
    senao113m015.val(customerInfo.fobPoint);
    senao113m018.val(customerInfo.currencyCode);
    senao113m022.val(customerInfo.priceList);
    senao113m022_ORA.val(customerInfo.priceListId);
    senao113m016.val(customerInfo.taxCode);
    senao113m016_onchange();
    displayCreditInfo(true);
    queryAllCreditItems(senao113m010_ORA.val(), senao113m018.val(), true);
    senao113m018_onchange(); //訂單總金額(未稅)-幣別欄位
    senao113m025_onchange(); //Conversion Type下拉選單
    updateGridData();
    isReminderCustomer(customerId); //20220928 add by calvin 指定客戶提醒通知


  } else {
    //alert("客戶代碼有誤, 請重新輸入客戶代碼");
    alert(getMsgInfo(invokeURL, frmType, "039", locale));
    senao113m010_reset();
  }
  return true;
}



/**
 * 提供Order Type開窗後呼叫，判斷Order Type、若為特殊料號則清空Grid資料
 */
function senao113m024_process() {
  let itemNo = "";
  let $grid = $("#" + gridList[0].gid);
  //console.log('cdata', chindReturnData);
  if (chindReturnData.length > 0) {
    senao113m024.val(chindReturnData[0].NAME);
  }

  if (senao113m004_ORA.val() == "1474" || senao113m004_ORA.val() == "2561") {
    //1474 => 維修收入-銷貨 2561=>STW-M-維修收入
    gsenao113d021.attr("readonly", false); //工單單號
  } else {
    gsenao113d021.attr("readonly", true); //工單單號
  }

  if (querySENAO113_45(senao113m004_ORA.val())) {
    //取OrderType是否不需卡控Credit和材料成本率(Order TypeID)
    isNotCheck_Credit_Cost.val("Y");
  } else {
    isNotCheck_Credit_Cost.val("N");
  }

  if (form_ou.val() == "senao" || form_ou.val() == "stw") {
    if (
      checkIsIncludeNoGoodsForm(senao113m004_ORA.val()) == "Y" &&
      senao113m016.val().search("0%") > -1
    ) {
      //代收付 且為0%稅率
      senao113m044.attr("readonly", false); //INV. NO
      senao113m046_Y.attr("disabled", false); //是否併正貨出口-是
      senao113m046_Y.attr("readonly", false); //是否併正貨出口-是
      senao113m046_N.attr("disabled", false); //是否併正貨出口-否
      senao113m046_N.attr("readonly", false); //是否併正貨出口-否
    } else {
      if (checkIsIncludeNoGoodsForm(senao113m004_ORA.val()) == "Y") {
        senao113m044.attr("readonly", false); //INV. NO
      } else {
        senao113m044.attr("readonly", true); //INV. NO
        senao113m044.val("");
      }
      senao113m046_Y.attr("checked", false);
      senao113m046_N.attr("checked", false);
      senao113m046_Y.attr("disabled", true); //是否併正貨出口-是
      senao113m046_N.attr("readonly", true); //是否併正貨出口-是
      senao113m046_Y.attr("disabled", true); //是否併正貨出口-否
      senao113m046_Y.attr("readonly", true); //是否併正貨出口-否
    }
  } else if (form_ou.val() == "enr" || form_ou.val() == "stw") {
    //20211013 Milla 恩睿導入LICENSE 交易，若選擇order type = LICENSE 開放Ship To Mail、Note欄位
    if (senao113m024.val().toUpperCase().indexOf("LICENSE") >= 0) {
      senao113m047.attr("disabled", false); //Ship To Mail
      senao113m047.attr("readonly", false); //Ship To Mail
      senao113m047.css({
        "background-color": EDIT_BGCOLOR,
      });
      senao113m048.attr("disabled", false); //Note
      senao113m048.attr("readonly", false); //Note
      senao113m048.css({
        "background-color": DEFAULT_BGCOLOR,
      });
    } else {
      senao113m047.val("");
      senao113m048.val("");
      senao113m047.attr("disabled", true); //Ship To Mail
      senao113m047.attr("readonly", true); //Ship To Mail
      senao113m047.css({
        "background-color": DEFAULT_BGCOLOR,
      });
      senao113m048.attr("disabled", true); //Note
      senao113m048.attr("readonly", true); //Note
      senao113m048.css({
        "background-color": DEFAULT_BGCOLOR,
      });
    }
  }

  //OrderType改變後，若一般有選到其他收入-無實物,出口運費,維修收入者，將所有Grid清空
  if (senao113m024.val().substr(0, 1) != "S") {
    $grid.jqGrid("clearGridData"); //清空Grid資料
  } else {
    let gridData = $grid.getGridParam("data");
    //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
    //20231003 Steve 因新增維修料號Maintain001~004 進行js修改(因user要求,先行新增Maintain-004)
    //20231013 Steve 流程序號:SENAO10100004636 因會計反映新設定的權利金-銷貨/Royalty也有材料成本必填寫問題 因此不卡控
    //20231102 Steve 代收付-銷貨 新增 Material-001 、 Material-002
    //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee";
    //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;";
    //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;Royalty;";
    let specificItemNo =
      "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;Royalty;Material-001;Material-002;";
    for (i = 0; i < gridData.length; i++) {
      itemNo = gridData[i][1].trim(); //料號
      if (itemNo != "" && specificItemNo.search(itemNo) > 0) {
        $grid.jqGrid("clearGridData"); //清空Grid資料
        break;
      }
    }
  }
  //檢查是否可以使用匯入EXCEL
  if (
    isImportExcelUser == "Y" ||
    senao113m024.val() == "材料款-呆滯" ||
    senao113m024.val() == "材料款-延單" ||
    senao113m024.val() == "銷貨" ||
    senao113m024.val() == "銷貨HUB"
  ) {
    btnImport.removeClass("d-none");
    link3.removeClass("d-none");
  } else {
    btnImport.addClass("d-none");
    link3.addClass("d-none");
  }

  return true;
}

/**
 * Price List欄位，資料異動時更新List Header Id、更新CONVERSION TYPE、
 * CONVERSION RATE、CONVERSION DATE、Grid相關資料
 */
function senao113m022_process() {
  let priceInfo = {};
  //console.log('cdata', chindReturnData);
  senao113m022.val(chindReturnData[0].NAME);
  priceInfo = queryPriceInfo(senao113m022.val());
  senao113m022_ORA.val(priceInfo.listHeaderId);
  senao113m018.val(priceInfo.currencyCode);
  senao113m018_onchange(); //訂單總金額(未稅)-幣別欄位
  senao113m025_onchange(); //Conversion Type下拉選單
  updateGridData();
  return true;
}
/**
 * FOB欄位，資料異動時更新
 * 
 */
function senao113m015_process() {
  //console.log('cdata', chindReturnData);
  senao113m015.val(chindReturnData[0].LOOKUP_CODE);

  return true;
}
/**
 * 提供料號開窗後呼叫，檢查料號是否符合
 */
/*
    20231101 Steve 流程序號:SENAO10100004693 
    料號為 Material-001 or Material-002時需選擇 訂單申請日之收款情形
    料號為 Material-001時需選擇 001 呆滯處理方式、呆滯料處理備註
    料號為 Material-002時需選擇 002 延單處理方式
*/
function gsenao113d004_process() {
 // console.log('cdata', chindReturnData);
  let itemNoForRBU = "0210A0010000,091200090000,1101A0028300,1102A0015300,1102A0115300,1102A1033300,1102A1033303,1103A0003300,1103A0021300,1104A0009300";
  let inventoryItemStatusCode = chindReturnData[0].INVENTORY_ITEM_STATUS_CODE;
  let itemNo = chindReturnData[0].SEGMENT1;
  gsenao113d005.val(chindReturnData[0].DESCRIPTION);
  gsenao113d004_ORA.val(chindReturnData[0].INVENTORY_ITEM_ID);
  gsenao113d020.val(inventoryItemStatusCode);
  gsenao113d004.val(itemNo);
 
  /*
      20231101 Steve 流程序號:SENAO10100004693 新增欄位
      先將欄位disable,BGcolor設default
  */
  gsenao113d028.attr("disabled", true);
  gsenao113d029.attr("disabled", true);
  gsenao113d030.attr("disabled", true);
  gsenao113d031.attr("readOnly", true);
  gsenao113d028.css("background-color", DEFAULT_BGCOLOR);
  gsenao113d029.css("background-color", DEFAULT_BGCOLOR);
  gsenao113d030.css("background-color", DEFAULT_BGCOLOR);
  gsenao113d031.css("background-color", DEFAULT_BGCOLOR);
  /*end of 先將欄位disable,BGcolor設default*/
  //20231101 Steve 料號為 Material-001時需選擇 訂單申請日之收款情形 、 001 呆滯處理方式、呆滯料處理備註 
  if (itemNo.trim() == 'Material-001' || senao113m024.val() == '材料款-呆滯') {
    gsenao113d030.val('');
    gsenao113d028.attr("disabled", false);
    gsenao113d029.attr("disabled", false);
    gsenao113d031.attr("disabled", false);
    gsenao113d031.attr("readOnly", false);
    gsenao113d028.css("background-color", EDIT_BGCOLOR);
    gsenao113d029.css("background-color", EDIT_BGCOLOR);
    gsenao113d031.css("background-color", EDIT_BGCOLOR);
  }
  //20231101 Steve 料號為 Material-002時需選擇 訂單申請日之收款情形 、 002 延單處理方式
  if (itemNo.trim() == 'Material-002' || senao113m024.val() == '材料款-延單') {
    gsenao113d029.val('');
    gsenao113d031.val('');
    gsenao113d028.attr("disabled", false);
    gsenao113d030.attr("disabled", false);
    gsenao113d028.css("background-color", EDIT_BGCOLOR);
    gsenao113d030.css("background-color", EDIT_BGCOLOR);

  }
  //料號狀態為Active、C、PVT
  if ((inventoryItemStatusCode == "Active" || inventoryItemStatusCode == "C" ||
    inventoryItemStatusCode == "PVT") && senao113m024.val().indexOf("材料款") < 0) {
    if (isNotCheck_Credit_Cost.val() == "Y") {
      if (inventoryItemStatusCode != "C") {
        //alert("該料號不允許下訂單，請與PM單位聯絡!!");

        alert(getMsgInfo(invokeURL, frmType, "041", locale));
        gsenao113d004_reset();
      }
      item_process();
    } else {
      //若使用RBU料號，不允許下單
      if (itemNoForRBU.search(itemNo) > -1) {
        //alert("該料號為RBU使用，不允許下訂單，請與PM單位聯絡!!");
        alert(getMsgInfo(invokeURL, frmType, "042", locale));
        gsenao113d004_reset();
      }
      item_process();
    }
    //20230530 依料號第5碼預設生產地
    let defaultSite = queryItemSite(itemNo);
    if (defaultSite != {}) {
      $('#gsenao113d019_val option[value="' + defaultSite.BAS_CODE + '"]').prop("selected", true);
      gsenao113d019_val.trigger("change");
    }
    else {
      //查詢不到預設TW-HWAYA
      $('#gsenao113d019_val option:contains(" ")').prop("selected", true);

      gsenao113d019_val.trigger("change");
    }
  } else {
    if (isNotCheck_Credit_Cost.val() != "Y" && form_ou.val() != "sin") {
      //alert("該料號不允許下訂單，請與PM單位聯絡!!");
      alert(getMsgInfo(invokeURL, frmType, "041", locale));
      gsenao113d004_reset();
    }
  }
  return true;
}

/*-----------------子視窗回傳 End-------------------------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
  let options = {};
  let $grid;
  $grid = $('#' + gridList[id].gid);
  $.jgrid.gridUnload(gridList[id].gid);
  options = gridList[id];
  switch (id) {
    case 0:
      $grid.createJqGrid(options);
      $grid.jqGrid('navGrid', options.pager, {
        edit: false,
        add: false,
        del: false,
        search: true,
        refresh: true,
        view: true
      }, {}, {}, {}, {}, {});
      addXls('#' + gridList[id].gid, options.pager);
      break;
  }

}
/**
 *設定grid資料
 *
 * @param {*} grid
 * @param {*} pager
 */
function setDataToGrid(gid, result) { //set data to jggrid
  let $self = $('#' + gid);
  $self.jqGrid('clearGridData');

  // show loading message
  $self[0].grid.beginReq();

  $self.jqGrid('setGridParam', {
    data: result
  });
  // $self[0].addJSONData(result);
  // hide the show message

  $self[0].grid.endReq();
  // refresh the grid

  $self.trigger('reloadGrid');


}
/**
 *pager輸出excel函數
 *
 * @param {*} grid
 * @param {*} pager
 */
function addXls(grid, pager) {
  $(grid).navButtonAdd(pager, {
    caption: "",
    title: 'DownLoad Excel ',
    id: "btnXls",
    //buttonicon: "fas fa-file-download",
    buttonicon: "fas fa-download",
    onClickButton: function () {
      $(grid).jqGrid("exportToExcel", {
        includeLabels: true,
        includeGroupHeader: true,
        includeFooter: true,
        fileName: $(grid).jqGrid('getGridParam').caption + new Date().format("yyyyMMddhhmmss") + ".xlsx",
        maxlength: 80 // maxlength for visible string data 
      });
    },
    position: "last",
    sepclass: "ui-separator",
    sepcontent: "&nbsp;&nbsp;"
  });
}
/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/
