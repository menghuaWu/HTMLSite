/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;
var senao113m001=$("#senao113m001");//表單代號
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
var senao113m041_0 = $("#senao113m041_0"); //簽呈新品 保固重出? 是
var senao113m041_1 = $("#senao113m041_1"); //簽呈新品 保固重出? 否
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
var senao113m026_txt = $("#senao113m026_txt"); //Conversion Date
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
var gsenao113d012_txt = $("#gsenao113d012_txt"); //交期 [6]
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
  senao113m001.attr('disabled','true');
  //設定填表人
  emplus030015.val(userId);
  emplus030005.val(user_Name);
  emplus030005.attr('disabled','true');
  emplus030015.attr('disabled','true');
  //設定申請人
  senao113m004.val(Department);
  senao113m006.val(Department_Name);
  senao113m003.val(userId);
  senao113m005.val(user_Name);
  //設定申請時間
  emplus030007.val(Today);
  emplus030007.attr('disabled','true');
  return true;
}
function frmGetOU(ou,org) {
  let data={OUID:null,ORGID:null};
  let result = ajaxGetData(invokeURL + "BPM_COMPANY_ID_GET", {
    BAS_COMPANY: ou,
	BAS_FACTORY: org,
  });
  if (result[0].result == undefined) {
    data.OUID=result[0].ORACLE_OU;
	data.ORGID=result[0].ORACLE_ORG;
  }
  return data;
}
function frmUIlLoad() {
  //每張表單需要資入的資料
   OU_ID = frmGetOU(form_ou.val(),'ALL').OUID;
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
  displayCreditInfo(true);
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
    gsenao113d019_val.attr("disabled", true);
    initGridRow();
    if (senao113m010.val() != "") {
      displayCreditInfo(true);
      queryAllCreditItems(senao113m010_ORA.val(), senao113m018.val(), false);
    } else {
      displayCreditInfo(false);
    }
    if (senao113m004_ORA.val() == "1474" || senao113m004_ORA.val() == "2561") {
      //1474 => 維修收入-銷貨
      gsenao113d021.attr("readonly", false); //工單單號
    } else {
      gsenao113d021.attr("readonly", true); //工單單號
    }
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
          senao113m016.value.search("0%") > -1
        ) {
          //代收付 且為0%稅率
          senao113m044.attr("readonly", false); //INV. NO
          senao113m046_Y.attr("disabled", false); //是否併正貨出口-是
          senao113m046_Y.attr("readonly", false); //是否併正貨出口-是
          senao113m046_N.attr("disabled", false); //是否併正貨出口-否
          senao113m046_N.attr("readonly", false); //是否併正貨出口-否
        } else {
          if (checkIsIncludeNoGoodsForm(senao113m004_ORA.value) == "Y") {
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
        senao113m049_Y.attr("disabled", false)= false; //庫存出貨
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

  $('#senao113m003_b1').on('change', function () { //廠區
	ORG_ID = frmGetOU(form_ou.val(),$('#senao113m003_b1').val()).ORGID;
  });
  $('#senao113m003_b1').on('click', function () { //申請人
	
	// sessionStorage 存入數據
	let tTitle = "申請人";  //子視窗抬頭
	let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
	let tReturnFunction = new Array("senao113m003_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
	let tAPI = invokeURL + 'BPM_getUser';
	let tParameter = { form_ou: 'senao', mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };		
	sessionStorage.setItem("tTitle", tTitle); 
	sessionStorage.setItem("tFileName", tFileName); 
	sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
	sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
	sessionStorage.setItem("tAPI", tAPI); //子視窗 api
	sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
	window.open("FRM/DataChooser.html", "", "width="+720+",height="+430+",resizable=1");
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
	sessionStorage.setItem("tTitle", tTitle); 
	sessionStorage.setItem("tFileName", tFileName); 
	sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
	sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
	sessionStorage.setItem("tAPI", tAPI); //子視窗 api
	sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
	window.open("FRM/DataChooser.html", "", "width="+720+",height="+430+",resizable=1");
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
	
	console.log('form_org',form_org.val());
	if (form_org.val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_org.val(), "002", locale));
        return false;
    }
	// sessionStorage 存入數據
	let tTitle = "負責業務";  //子視窗抬頭
	let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
	let tReturnFunction = new Array("senao113m037_process()"); //回傳函數
    let tColAPi = "BPM_ERP_SALESREP_Org2";
	let tAPI = invokeURL + 'BPM_ERP_SALESREP_Org2';
	let tParameter = { OU_ID: OU_ID, ORG_ID: ORG_ID, SALESREP_NUMBER: 'ALL', LAST_NAME: 'ALL'};	
	sessionStorage.setItem("tTitle", tTitle); 
	sessionStorage.setItem("tFileName", tFileName); 
	sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
	sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
	sessionStorage.setItem("tAPI", tAPI); //子視窗 api
	sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數

	window.open("FRM/DataChooser.html", "", "width="+720+",height="+430+",resizable=1");
	//window.open("FRM/DataChooser.html");
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
function senao113m003_process(){ 
	console.log('cdata',chindReturnData);
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
/**
 * 檢查是否擁有權限可看到單價欄位，依下列判斷
 * (1)SalesRep群組參數 (2)可看訂單單價人員Group (3)業務關卡
 * @param {string} id 登入者
 * @param {string} actId 關卡
 * @returns isViewer true or false
 */
function checkIsUnitPriceViewer(id, actId) {
  let isViewer = false;
  if (
    actId == "UserTask_6" || //業務關卡
    checkIsGroupUser(id, "SN113_04") === "Y" || //可看訂單單價人員
    checkIsSalesRep(id)
  ) {
    isViewer = true;
  }
  return isViewer;
}
/**
 * 查詢是否屬於RA_SALESREPS群組
 */
function checkIsSalesRep(id) {
  let isSalesRep = false;
  let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_41_Org", {
    p: id,
  });
  if (result[0].result == undefined) {
    isSalesRep = true;
  }
  return isSalesRep;
}
/**
 * 檢查填寫人是否為群組使用者
 * @param {string} empId
 * @param {string} groupId
 * @returns result "Y" or "N"
 */
function checkIsGroupUser(empId, groupId) {
  let result = "N";
  let multiUserId = "";
  let userInfoArray = [];
  let userIdArray = [];
  if (empId != "" && groupId != "") {
    userInfoArray = queryStdGroupById(groupId);
    userIdArray = getUserIdArray(userInfoArray);
    multiUserId = userIdArray.join();
    if (multiUserId.search(empId) > -1) {
      result = "Y";
    }
  }
  return result;
}
/**
 * 以Group ID查Group內員工資料
 * @param {string} groupId
 * @returns userInfoArray 員工相關資料陣列
 */
function queryStdGroupById(groupId) {
  let userInfoArray = [];
  let userInfo = {};
  let result = ajaxGetData(invokeURL + "BPM_getGroupUserIDbyOrg", {
    GID: groupId,
    CID: form_ou.val(),
  });
  if (result[0].result == undefined) {
    for (let i = 0; i < result.length; i++) {
      userInfo = {};
      userInfo.userId = result[i].USERID; //員工ID
      userInfo.userName = result[i].USERNAME; //員工名稱
      userInfoArray.push(userInfo);
    }
  }

  return userInfoArray;
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
    for (i = 0; i < userInfoArray.length; i++) {
      userInfo = userInfoArray[i];
      userIdArray.push(userInfo.userId);
    }
  }
  return userIdArray;
}
/**
 * 讀取特定欄位資料 (isInUpdateERPActivity)
 * @param {string} oid
 */
function loadData(oid) {
  let result = ajaxGetData(invokeURL + "BPM_SENAO113_42", {
    oid: oid,
  });
  if (result[0].result == undefined) {
    isInUpdateERPActivity = result[0].isInUpdateERPActivity;
  }
}
/**
 * 顯示/隱藏信用額度資料
 * @param {boolean} display
 */
function displayCreditInfo(display) {
  greenCheckImage.attr("src", "images/green_check.gif");
  if (display) {
    greenCheckImage.addClass("d-none");
    lbl_senao113m027.addClass("d-none");
    senao113m027.addClass("d-none");
    lbl_senao113m028.addClass("d-none");
    senao113m028.addClass("d-none");
    lbl_totalIncludeTax.addClass("d-none");
    totalIncludeTax.addClass("d-none");
    lbl_overCredit.addClass("d-none");
    overCredit.addClass("d-none");
  } else {
    greenCheckImage.removeClass("d-none");
    lbl_senao113m027.removeClass("d-none");
    senao113m027.removeClass("d-none");
    lbl_senao113m028.removeClass("d-none");
    senao113m028.removeClass("d-none");
    lbl_totalIncludeTax.removeClass("d-none");
    totalIncludeTax.removeClass("d-none");
    lbl_overCredit.removeClass("d-none");
    overCredit.removeClass("d-none");
  }
}
/**
 * 查詢Oracle Order No
 * @param {string} formSerialNumber  單號+O(大寫英文O => 訂單、R => 銷退單)
 * @returns oracleOrderNo
 */
function queryOracleOrderNo(formSerialNumber) {
  //var oracleOrderNo = "表單簽核後由ORACLE傳回";
  let oracleOrderNo = getMsgInfo(invokeURL, frmType, "002", locale);
  if (formSerialNumber != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_38", {
      p: formSerialNumber + "O",
    });
    if (result[0].result == undefined) {
      oracleOrderNo = result[0].ORDER_NUMBER;
    }
  }

  return oracleOrderNo;
}
/**
 * 查詢Oracle Header Id
 * @param {string} formSerialNumber
 * @returns oracleHeaderId
 */
function queryOracleHeaderId(formSerialNumber) {
  let oracleHeaderId = "";
  if (formSerialNumber != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_37", {
      p: formSerialNumber + "O",
    });
    if (result[0].result == undefined) {
      oracleOrderNo = result[0].HEADER_ID;
    }
  }
  return oracleHeaderId;
}
/**20200219 Added by Chandler
 * 於表單開啟時,若為"無實物"出貨且Tax Code 5%時,需從ERP GV查詢發票號碼回表單
 * @param {string} headerId
 */
function querySENAO113_44(headerId) {
  var retrueValue = "";
  if (headerId != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_44", {
      p: headerId,
    });
    if (result[0].result == undefined) {
      retrueValue = fixNull(result[0].attribute1); //GV發票號碼
    }
  }
  return retrueValue;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {
  let $grid = $("#" + gridList[0].gid);
  let gridData = $grid.getGridParam("data");
  gsenao113d021.attr("readonly", true); //工單單號
  //維修收入-銷貨:品名規格(從第二筆資料後，自動複製上一列資料)  * /Chandler.20140303
  if (senao113m004_ORA.val() == "1474" || senao113m004_ORA.val() == "2561") {
    //Order Type Id
    if (gridData.length > 1) {
      //20230511 調整順序 for 越南生產地需求
      gsenao113d004.val(gridData[0][2]); //料號
      gsenao113d004_ORA.val(gridData[0][22]); //[Oracle] Inventory Item Id
      //gsenao113d005.value = gridData[0][2]; //品名規格
      gsenao113d005.val(gridData[0][3]); //品名規格
      //gsenao113d012_txt.value = gridData[0][5]; //交期
      gsenao113d012_txt.val(gridData[0][6]); //交期
      gsenao113d020.val(gridData[0][13]); //ITEM STATUS
    } else if (gridData.length == 1) {
      if ($("#form_org").val() == "") {
        alert(
          "[" +
            $$("#lbl_form_org").html() +
            "] " +
            getMsgInfo(invokeURL, $("#form_org").val(), "003", locale)
        );
        return false;
      }

      if (senao113m024.val() != "") {
        gsenao113d005.val(queryOnlyOneProductSpec(senao113m024.val()));
        //gsenao113d005_onchange(); //------
      }
    }
    gsenao113d021.attr("readonly", true); //工單單號
  }
  gsenao113d007.val("PCS"); //單位
  gsenao113d009.val(senao113m018.val()); //幣別
  gsenao113d006.val("0"); //數量
  gsenao113d008.val("0"); //單價
  gsenao113d010.val("0"); //小計
  //20230509 Calvin 調整生產地
  $('#gsenao113d019_val option:contains(" ")').prop("selected", true);
  //gsenao113d019_val.onchange(); //------
  gsenao113d026.val(senao113m016.val()); //稅別
  gsenao113d027.val(senao113m023.val()); //Customer PO
}
/**
 * 查詢品名規格(唯一單筆)
 * @param {string} orderType
 * @returns productSpec
 */
function queryOnlyOneProductSpec(orderType) {
  let productSpec = "";
  let data = [];

  if ($("#form_org").val() == "") {
    //alert('請先選擇【廠區】!!!');
    alert(
      "[" +
        $$("#lbl_form_org").html() +
        "] " +
        getMsgInfo(invokeURL, form_ou.val(), "003", locale)
    );
    return false;
  }

  if (orderType != "") {
    data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_38", {
      p: formSerialNumber + "O",
    });

    if (orderType.substr(0, 1) == "S") {
      data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_35_Org_S", {
        p: $("#form_org").val(),
      });
    } else if (orderType.substr(0, 4) == "其他收入") {
      data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_35_Org_S", {
        p: $("#form_org").val(),
        income: "No Goods%",
      });
    } else if (orderType.substr(0, 4) == "運費收入") {
      data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_35_Org_S", {
        p: $("#form_org").val(),
        income: "Export Fee%",
      });
    } else if (orderType.substr(0, 4) == "維修收入") {
      data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_35_Org_S", {
        p: $("#form_org").val(),
        income: "Maintain%",
      });
    } else if (orderType.substr(0, 3) == "代收付") {
      data = ajaxGetData(
        invokeURL + "BPM_ERP_SENAO113_35_Org_Collection_payment",
        {
          p: $("#form_org").val(),
        }
      );
    } else if (orderType.substr(0, 3) == "NRE") {
      data = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_35_Org_S", {
        p: $("#form_org").val(),
        income: "NRE Fee%",
      });
    }
    if (data[0].result == undefined) {
      if (data.length > 0) {
        productSpec = data[0].PRODUCT_SPEC; //PRODUCT_SPEC (INVENTORY_ITEM_ID||'@@'||SEGMENT1||'@@'||DESCRIPTION);
      }
    }
  }
  return productSpec;
}
/**
 * 查詢&計算所有信用額度資訊項目 (授信額度、已使用信用額度、訂單總金額(含稅)、超過授信額度)
 * @param {string} customerId
 * @param {string} currency
 * @param {boolean} isCalcCreditAgain 重新取得授信金額
 */
function queryAllCreditItems(customerId, currency, isCalcCreditAgain) {
  let conversionRate = 1;
  if (customerId != "" && currency != "") {
    if (isCalcCreditAgain) {
      senao113m027.val(queryTotalCreditLimit(customerId, currency));
      senao113m028.val(queryUsedCreditAmount(customerId, currency));
    }
    conversionRate = queryConversionRate(
      currency,
      "USD",
      "1001",
      showCurrentDate()
    );
    totalIncludeTax.val(
      floatAdd(senao113m019.val(), senao113m017.val()) * conversionRate
    ); //訂單總金額 + 稅 (轉換成美金)
    totalIncludeTax.val(Number(totalIncludeTax.val()).toFixed(2)); //四捨五入取小數N位
    //overCredit.value = calculateOverCredit(senao113m027.value, senao113m028.value, senao113m017.value, senao113m019.value);
    overCredit.va(
      calculateOverCredit(
        senao113m027.val(),
        senao113m028.val(),
        totalIncludeTax.val()
      )
    );
    hdn_OverCredit.val(overCredit.val());
    conversionRate = queryConversionRate(
      currency,
      "TWD",
      "1001",
      showCurrentDate()
    );
    totalIncludeTax_TWD.val(
      (Number(totalIncludeTax.val()) * Number(conversionRate)).toFixed(0)
    ); //轉成台幣
  }
}
/**
 * 查詢客戶所有信用額度 (信用額度 + OE信用額度)
 * @description 以美金計價，在queryCreditLimit(...)雖然有傳幣別，但Oracle那邊會一律回傳USD計價，這端無須在轉換匯率
 * @param {string} customerId
 * @param {string} currency
 * @returns totalCreditLimit
 */
function queryTotalCreditLimit(customerId, currency) {
  var totalCreditLimit = 0;
  var oeCurrency = "";
  if (currency == "USD") {
    oeCurrency = "OO1"; //注意:是英文的O
  } else if (currency == "TWD") {
    oeCurrency = "OO2"; //注意:是英文的O
  }
  totalCreditLimit += queryCreditLimit(customerId, currency);
  totalCreditLimit += queryCreditLimit(customerId, oeCurrency);
  totalCreditLimit = totalCreditLimit.toFixed(2);
  return totalCreditLimit;
}
/**
 * 查詢客戶在Oracel系統設定的信用額度
 * @param {string} customerId
 * @param {string} currency
 * @returns creditLimit
 */
function queryCreditLimit(customerId, currency) {
  let creditLimit = 0;
  if (customerId !== "" && currency != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_23_Org", {
      currency: currency,
      OU_ID: OU_ID,
      customerId: customerId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        creditLimit = Number(fixNull(result[0].CREDIT_LIMIT)); //CREDIT_LIMIT
      }
    }
  }
  return creditLimit;
}
/**
 * 查詢客戶所有已使用信用額度 (已使用信用額度 + 未結案訂單的總訂單額度(含稅))
 * @description 未結案訂單一律轉換成USD計算
 * @param {string} customerId
 * @param {string} currency
 * @returns totalUsedCreditAmount
 */
function queryUsedCreditAmount(customerId, currency) {
  let totalUsedCreditAmount = 0;
  let usedCreditAmount = 0;
  let notFinishTotalOrderAmount = 0;
  let currencyArray = [];
  let conversionRate = 1; //兌換美金匯率
  usedCreditAmount = Number(querySENAO113_24(customerId, currency));
  // console.log("已使用信用額度 = " + usedCreditAmount);

  //查詢未結案訂單中的幣別，轉換成美金
  currencyArray = querySENAO113_26(customerId);
  if (currencyArray.length > 0) {
    for (let i = 0; i < currencyArray.length; i++) {
      notFinishTotalOrderAmount = Number(
        querySENAO113_25(customerId, currencyArray[i])
      );
      conversionRate = Number(
        queryConversionRate(currencyArray[i], "USD", "1001", systemDateTime)
      ); //兌換成美金
      notFinishTotalOrderAmount = notFinishTotalOrderAmount * conversionRate;
      // console.log("未結案訂單(原幣別:" + currencyArray[i] + ",兌美金匯率:" + conversionRate + ")的總訂單額度(含稅) = " + notFinishTotalOrderAmount);
    }
  }

  totalUsedCreditAmount = usedCreditAmount + notFinishTotalOrderAmount;

  totalUsedCreditAmount = totalUsedCreditAmount.toFixed(2);

  return totalUsedCreditAmount;
}
/**
 * 查詢客戶已使用信用額度
 * @param {string} customerId
 * @param {string} currency
 * @returns creditAmount
 */
function querySENAO113_24(customerId, currency) {
  var creditAmount = 0;
  if (customerId != "" && currency != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_24_Org", {
      currency: currency,
      OU_ID: OU_ID,
      customerId: customerId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        creditAmount = Number(fixNull(result[0].CREDIT_AMOUNT)); //CREDIT_AMOUNT
      }
    }
  }
  return creditAmount;
}
/**
 * 查詢客戶目前在未結案訂單申請單所使用幣別種類
 * @param {string} customerId
 * @returns {object} currencyArray
 */
function querySENAO113_26(customerId) {
  var currencyArray = [];
  if (customerId) {
    let result = ajaxGetData(invokeURL + "BPM_SENAO113_26", {
      SENAO113M010_ORA: customerId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        currencyArray.push(result[0].SENAO113M018); //SENAO113M018
      }
    }
  }
  return currencyArray;
}
/**
 * 查詢客戶尚未結案訂單的總訂單額度(含稅)
 * @param {string} customerId
 * @param {string} currency
 * @returns notFinishOrderAmount
 */
function querySENAO113_25(customerId, currency) {
  let notFinishOrderAmount = 0;
  if (customerId != "" && currency != "") {
    let result = ajaxGetData(invokeURL + "BPM_SENAO113_26", {
      senao113m010_ORA: customerId,
      senao113m018: currency,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          notFinishOrderAmount +=
            Number(fixNull(result[i].TAX)) + Number(fixNull(result[i].AMOUNT)); //稅 + 小計
        }
      }
    }
  }
  return notFinishOrderAmount;
}
/**
 * 查詢匯率
 * @param {string} fromCurrency
 * @param {string} toCurrency
 * @param {string} conversionType ex:1000(三旬)、1001、Corporate、Spot ...
 * @param {string} conversionDate ex:2018/08/02
 * @returns conversionRate
 */
function queryConversionRate(
  fromCurrency,
  toCurrency,
  conversionType,
  conversionDate
) {
  var conversionRate = "1";
  var sqlId = "BPM_ERP_OracleConversionRate";
  var params = [];
  var appendSQL = "";
  var data = [];
  if (fromCurrency && toCurrency && conversionType && conversionDate) {
    let result = ajaxGetData(invokeURL + "BPM_ERP_OracleConversionRate", {
      FROM_CURRENCY: fromCurrency,
      TO_CURRENCY: toCurrency,
      CONVERSION_TYPE: conversionType,
      CONVERSION_DATE: conversionDate,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        conversionRate.push(result[0].CONVERSION_RATE); //SENAO113M018
      }
    }
  }
  return conversionRate;
}
/**
 * 查詢現在日期，GP使用格式 yyyy/mm/dd ex: 2018/05/05
 * @returns result
 */
function showCurrentDate() {
  let result = "";
  let d = new Date();
  result =
    d.getUTCFullYear() +
    "/" +
    pad(d.getUTCMonth() + 1) +
    "/" +
    pad(d.getUTCDate());
  //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
  return result;
}
function pad(number) {
    let r = String(number);
    if (r.length == 1) {
        r = '0' + r;
    }
    return r;
}
/**
 * 小數相加
 * @description
 * 參考:https://xyz.cinc.biz/2017/01/javascript-float-add.html
 *   (1)「先乘上剛剛好能剛好將該小數最大位數變成整數的10倍數」
 *   (2)「進行相加」
 *   (3)「round處理確保為整數」
 *   (4)「再轉回小數」
 *   補充:能適用於大部分場景。遇到科學計數法如2.3e+1（當數字精度大於21時，
 *        數字會強制轉為科學計數法形式顯示）時還需要特別處理一下
 * @param {string} arg1
 * @param {string} arg2
 */
function floatAdd(arg1, arg2) {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return Math.round(arg1 * m + arg2 * m) / m;
}
/**
 * 計算超過授信額度 (授信額度 - 已使用授信額度 - 訂單總金額(含稅))
 * @description 美金計價
 * @param {string} creditLimit 授信額度
 * @param {string} usedCreditLimit 已使用授信額度
 * @param {string} orderAmountWithTax 訂單總金額(含稅)
 * @returns overCredit
 */
function calculateOverCredit(creditLimit, usedCreditLimit, orderAmountWithTax) {
  let overCredit = 0;
  overCredit =
    Number(fixNull(creditLimit)) -
    Number(fixNull(usedCreditLimit)) -
    Number(fixNull(orderAmountWithTax));
  overCredit = overCredit < 0 ? Math.abs(overCredit) : 0;
  return overCredit;
}
/**
 * 提供Order Type開窗後呼叫，判斷Order Type、若為特殊料號則清空Grid資料
 */
function senao113m024_process() {
  let itemNo = "";
  let $grid = $("#" + gridList[0].gid);
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
/**20200820 Milla
 * 取OrderType是否不需卡控Credit和材料成本率
 * @param {string} OrderTypeID
 */
function querySENAO113_45(OrderTypeID) {
  let retrueValue = false;
  if (OrderTypeID != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_45", {
      TRANSACTION_TYPE_ID: OrderTypeID,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        retrueValue = true;
      }
    }
  }
  return retrueValue;
}
/**
 * 查詢是否含有申請無實物的表單
 * @param {string} orderTypeId
 * @returns result "Y" or "N"
 */
function checkIsIncludeNoGoodsForm(orderTypeId) {
  let result = "N";
  if (orderTypeId != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_21", {
      order_type_id: orderTypeId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        result = "Y";
      }
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
    let result = "N";
    if (value != "" && snsiId != "") {
        if (querySNSI003_Org(snsiId).search(value) > -1) {
            result = "Y";
        }
    }
    return result;
}
/**
 * 將原以符號隔開的字串，取出工號後，改用新符號隔開
 * @example  102163-呂淑君;101037-李玉堂  ->   102163,101037
 * @param {string} input
 * @returns result
 */
function splitBySymbol(input) {
    var result = "";
    var inputArray = [];
    var idArray = [];
    if (input != "") {
        //1.依分號分割轉成陣列
        inputArray = input.split(";");
        //2.每個項目在依hyphen符號分割轉成陣列
        for (var i = 0; i < inputArray.length; i++) {
            //3.取第一位(工號)，並存至新陣列
            idArray.push(inputArray[i].split("-")[0]);
        }
        //4.新陣列以逗號隔開
        result = idArray.join(";");
    }
    return result;
}
/*---------------------Other Function End--------------*/
