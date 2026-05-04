var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var _ORG = {};//儲存所有廠區的Json
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var senao204m002 = document.getElementById("senao204m002"); //表單單號
var senao204m003 = document.getElementById("senao204m003"); //Sales Person ID
var senao204m003_ORA = document.getElementById("senao204m003_ORA"); //[Oracle] sales rep id
var senao204m003_b1 = document.getElementById("senao204m003_b1"); //Sales Person ID
var senao204m004 = document.getElementById("senao204m004"); //Sales Person Name
var senao204m008 = document.getElementById("senao204m008"); //Customer Number
var senao204m008_b1 = document.getElementById("senao204m008_b1"); //Customer Number
var senao204m008_ORA = document.getElementById("senao204m008_ORA"); //[Oracle] Customer ID
var senao204m009 = document.getElementById("senao204m009"); //Customer Name
var senao204m005 = document.getElementById("senao204m005"); //部門 ID
var senao204m006 = document.getElementById("senao204m006"); //部門名稱
var senao204m010 = document.getElementById("senao204m010"); //Order NO
var senao204m010_ORA = document.getElementById("senao204m010_ORA"); //隱藏欄位，[Oracle]Order Header ID
var senao204m011 = document.getElementById("senao204m011"); //Order Type
var senao204m011_b1 = document.getElementById("senao204m011_b1"); //Order Type開窗
var senao204m011_ORA = document.getElementById("senao204m011_ORA"); //隱藏欄位，[Oracle]Order Type ID
var senao204m011_Entity = document.getElementById("senao204m011_Entity"); //隱藏欄位，Order Type is Entity Y/N 20210930 Ann Add
var senao204m011_License = document.getElementById("senao204m011_License"); //隱藏欄位，Order Type is License Y/N 20211027 Ann Add
var senao204m007 = document.getElementById("senao204m007"); //Date Ordered
var senao204m012 = document.getElementById("senao204m012"); //Customer PO
var senao204m049 = document.getElementById("senao204m049"); //RMA Type
var HoldYN = document.getElementById("HoldYN"); //隱藏欄位，[關卡.CheckHold]執行後回傳Hold情況
var Price_List = document.getElementById("Price_List");//price list價格表 //20251127 Dillan add
var Price_List_ORA = document.getElementById("Price_List_ORA");//price list id //20251127 Dillan add 
var CompanyCurrency; //公司的本幣別 TWD/VND/USDA   //20251205 Dillan add
var Currency = document.getElementById("Currency");//幣別//20251205 Dillan add
//Bill-To Information
var senao204m052 = document.getElementById("senao204m052"); //Company Name
var senao204m013 = document.getElementById("senao204m013"); //Attention
var senao204m014 = document.getElementById("senao204m014"); //Bill-To Address
var senao204m014_ORA = document.getElementById("senao204m014_ORA"); //[Oracle]Bill-To Address ID
var senao204m043 = document.getElementById("senao204m043"); //Bill-To Address: Road
var senao204m044 = document.getElementById("senao204m044"); //Bill-To Address: City
var senao204m045 = document.getElementById("senao204m045"); //Bill-To Address: State
var senao204m046 = document.getElementById("senao204m046"); //Bill-To Address: Post
var senao204m047 = document.getElementById("senao204m047"); //Bill-To Address: Country
var senao204m015 = document.getElementById("senao204m015"); //Contact
var senao204m050 = document.getElementById("senao204m050"); //TEL
var senao204m039 = document.getElementById("senao204m039"); //EMAIL
//Ship-To Information
var senao204m016 = document.getElementById("senao204m016"); //Company Name
var senao204m017 = document.getElementById("senao204m017"); //Attention
var senao204m020 = document.getElementById("senao204m020"); //Ship-To Address
var senao204m020_ORA = document.getElementById("senao204m020_ORA"); //[Oracle]Ship-To Address ID
var senao204m018 = document.getElementById("senao204m018"); //Ship-To Address: Road
var senao204m019 = document.getElementById("senao204m019"); //Ship-To Address: City
var senao204m021 = document.getElementById("senao204m021"); //Ship-To Address: State
var senao204m022 = document.getElementById("senao204m022"); //Ship-To Address: Post
var senao204m023 = document.getElementById("senao204m023"); //Ship-To Address: Country
var senao204m024 = document.getElementById("senao204m024"); //Ship-To Hidden?
var senao204m051 = document.getElementById("senao204m051"); //Ship-To TEL
var senao204m025 = document.getElementById("senao204m025"); //Ship-To EMAIL
//Payments & Credit Card Info
var senao204m026 = document.getElementById("senao204m026"); //FOB
var senao204m026_b1 = document.getElementById("senao204m026_b1"); //FOB 開窗
var senao204m027 = document.getElementById("senao204m027"); //Payment Term
var senao204m027_b1 = document.getElementById("senao204m027_b1"); //Payment Term 開窗
var senao204m027_ORA = document.getElementById("senao204m027_ORA"); //Original Payment Term ORA
var senao204m027_NEW = document.getElementById("senao204m027_NEW"); //New Payment Term ORA
var senao204m048 = document.getElementById("senao204m048"); //Freight Term
var senao204m048_b1 = document.getElementById("senao204m048_b1"); //Freight Term 開窗
var senao204m048_ORA = document.getElementById("senao204m048_ORA"); //Freight Term ORA
var senao204m029 = document.getElementById("senao204m029"); //Credit Card Type
var senao204m029_b1 = document.getElementById("senao204m029_b1"); //Credit Card Type 開窗
var senao204m029_ORA = document.getElementById("senao204m029_ORA"); //隱藏欄位 Credit Card Type ORA
var senao204m029_ACC = document.getElementById("senao204m029_ACC"); //隱藏欄位 Credit Card
var senao204m031_ACC = document.getElementById("senao204m031_ACC"); //隱藏欄位 Credit Card
var senao204m033_ACC = document.getElementById("senao204m033_ACC"); //隱藏欄位 Credit Card
var senao204m034_ACC = document.getElementById("senao204m034_ACC"); //隱藏欄位 Credit Card
var senao204m036_ACC = document.getElementById("senao204m036_ACC"); //隱藏欄位 Credit Card
var senao204m038_ACC = document.getElementById("senao204m038_ACC"); //隱藏欄位 Credit Card
var senao204m031 = document.getElementById("senao204m031"); //Credit Card: Card Number
var senao204m033 = document.getElementById("senao204m033"); //Credit Card: Expiration Date
var senao204m034 = document.getElementById("senao204m034"); //Credit Card: (yyyy)
var senao204m036 = document.getElementById("senao204m036"); //Card Holder Name
var senao204m038 = document.getElementById("senao204m038"); //Authorization Code
var senao204m030 = document.getElementById("senao204m030"); //Customer Shipping Account
var senao204m041 = document.getElementById("senao204m041"); //Freight Costs
var senao204m028 = document.getElementById("senao204m028"); //Ship Via
var senao204m028_b1 = document.getElementById("senao204m028_b1"); //Ship Via 開窗
var senao204m032 = document.getElementById("senao204m032"); //Item Total Amount(wo/vat)
var senao204m035 = document.getElementById("senao204m035"); //Sales Tax Rate
var senao204m035_b1 = document.getElementById("senao204m035_b1"); //Sales Tax Rate 開窗
var senao204m042 = document.getElementById("senao204m042"); //Reseller Permit No
var senao204m037 = document.getElementById("senao204m037"); //Total Amount(w/vat)
var senao204m040 = document.getElementById("senao204m040"); //Note
var senao204m032_c = document.getElementById("senao204m032_c"); //ConvertItem Total Amount(wo/vat) //20251205 Dillan add
var senao204m037_c = document.getElementById("senao204m037_c"); //Convert Total Amount(w/vat)  //20251205 Dillan add
//==================以下為單身資料=================
var gsenao204d003 = document.getElementById("gsenao204d003"); //NO[0]
var gsenao204d004 = document.getElementById("gsenao204d004"); //料號 [1]
var gsenao204d004_ORA = document.getElementById("gsenao204d004_ORA"); //料號 [1]
var gsenao204d005 = document.getElementById("gsenao204d005"); //品名規格 [2]
var gsenao204d014 = document.getElementById("gsenao204d014"); //US ITEM [3]
var gsenao204d015 = document.getElementById("gsenao204d015"); //US ITEM DESC.[4]
var gsenao204d006 = document.getElementById("gsenao204d006"); //QTY[5]
var gsenao204d007 = document.getElementById("gsenao204d007"); //UNIT [6]
var gsenao204d008 = document.getElementById("gsenao204d008"); //U/P[7]
var gsenao204d009 = document.getElementById("gsenao204d009"); //SUB_TOTAL [8]
var gsenao204d010 = document.getElementById("gsenao204d010"); //REQUEST_DATE [9]
var gsenao204d011 = document.getElementById("gsenao204d011"); //SCHEDULE_SHIP_DATE [10]
var gsenao204d012 = document.getElementById("gsenao204d012"); //NOTE [11]
var gsenao204d013 = document.getElementById("gsenao204d013"); //ITEM_PRICE_LIST [12]
var gsenao204d016 = document.getElementById("gsenao204d016"); //TAX CODE [13]
var gsenao204d017 = document.getElementById("gsenao204d017");  //Price_List [14] //20251127 Dillan add
var gsenao204d004_b1 = document.getElementById("gsenao204d004_b1"); //ITEM NO
var gsenao204d016_b1 = document.getElementById("gsenao204d016_b1"); //TAX CODE

var Grid1 = document.getElementById("Grid1"); //Grid1
var btnAdd = document.getElementById("btnAdd"); //新增
var btnEdit = document.getElementById("btnEdit"); //修改
var btnDel = document.getElementById("btnDel"); //刪除
var btnImport = document.getElementById("btnImport"); //匯入
var Link128 = document.getElementById("Link128"); //Download the uploaded file format
var btnExportXls = document.getElementById("btnExportXls"); //匯出
var systemDateTime = ""; //今天日期
//==================以下為Credit Chk資料=================
var Label111 = document.getElementById("Label111"); //Credit Chk
var Label112 = document.getElementById("Label112"); //Credit
var lbl_senao204m053 = document.getElementById("lbl_senao204m053"); //標題_Limit
var senao204m053 = document.getElementById("senao204m053"); //Limit
var lbl_senao204m054 = document.getElementById("lbl_senao204m054"); //標題_Available
var senao204m054 = document.getElementById("senao204m054"); //Available
var lbl_senao204m055 = document.getElementById("lbl_senao204m055"); //標題_Avg Days to Pay
var senao204m055 = document.getElementById("senao204m055"); //Avg Days to Pay
var lbl_senao204m056 = document.getElementById("lbl_senao204m056"); //標題_Payment Term
var senao204m056 = document.getElementById("senao204m056"); //Payment Term

var Label113 = document.getElementById("Label113"); //Balance
var lbl_senao204m057 = document.getElementById("lbl_senao204m057"); //標題_Open Invoice
var senao204m057 = document.getElementById("senao204m057"); //Open Invoice
var lbl_senao204m058 = document.getElementById("lbl_senao204m058"); //標題_Open Credit
var senao204m058 = document.getElementById("senao204m058"); //Open Credit
var lbl_senao204m059 = document.getElementById("lbl_senao204m059"); //標題_Open Order
var senao204m059 = document.getElementById("senao204m059"); //Open Order
var lbl_senao204m060 = document.getElementById("lbl_senao204m060"); //標題_Pre-Payments
var senao204m060 = document.getElementById("senao204m060"); //Pre-Payments
var lbl_senao204m061 = document.getElementById("lbl_senao204m061"); //標題_Past Due
var senao204m061 = document.getElementById("senao204m061"); //Past Due

var Label125 = document.getElementById("Label125"); //灰色線
var lbl_senao204m062 = document.getElementById("lbl_senao204m062"); //標題_Hold Reason
var senao204m062 = document.getElementById("senao204m062"); //Hold Reason
var lbl_senao204m063 = document.getElementById("lbl_senao204m063"); //標題_Description
var senao204m063 = document.getElementById("senao204m063"); //Description
var lbl_senao204m064 = document.getElementById("lbl_senao204m064"); //標題_Note
var senao204m064 = document.getElementById("senao204m064"); //Note
//DataSoruce
var DbCfgId_EFGP = "EFGP";

var IsUP_Less_PriceList = document.getElementById("IsUP_Less_PriceList");
var IsPaymentTermModified = document.getElementById("IsPaymentTermModified");
/***************************GRID***********************/
var Grid1 = document.getElementById("Grid1"); //Grid1
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者
//單身grid1 元件欄位名稱
var GridBinding = [
  ["", "gsenao204d004", "gsenao204d004_ORA", "gsenao204d005", "gsenao204d014", "gsenao204d015", "gsenao204d006", "gsenao204d007", "gsenao204d008", "gsenao204d009", "gsenao204d010", "gsenao204d011", "gsenao204d012", "gsenao204d013", "gsenao204d016", "gsenao204d017"]
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
  colAPI: 'BPM_SUS204_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SUS204_GRID1_LIST',
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
  activityId = "Applicant";
  ProcessPackageId='SUS204';//vivian 抓不到單號暫時定義
  formId='SUS204';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  frmEvent();
  formOpen();
  formCreate();


});
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //先暫時隱藏(匯入、Download the uploaded file format)，待功能確認再行處理
  btnImport.style.display = "none";
  //將原本的填寫區塊Lable設定底色^:開頭,$:結尾,*:包含
  $("[name^='lbl_']:not(:hidden):not([name*='_hdn'],[name='lbl_hdn_chkfile'],[name*='Grid'],[name$='m001'],[name$='m002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
  systemDateTime = showCurrentDate(); //今天日期
  //每個關卡欄位控卡
  setActivityFieldControl();
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //DWREngine.setAsync(true);
  $('#senao204m002').attr('disabled', 'true');//單號
  applicant = userId;//發起流程時參數 申請人ID
  applicantDept = Department;//發起流程時參數 申請人部門ID
  if (SERIALNUMBER != "") {
    chkRegainable(); //檢查是否可撤簽
  }
  prepareCustomerAddressDropLists();
  createFrmGrid(0);
  //For 複製表單的前置處理
  if (activityId == "Applicant") {
    resetGridHelpColsProperty();
    //複製表單時，下方欄位Reset
    if (formInstOID == "") {
      //申請時間
      senao204m007.value = systemDateTime;
      senao204m007.readOnly = true;
      senao204m010.value = "AutoNumber";
      HoldYN.value = "";
      senao204m010_ORA.value = "";
    }
  } else {
    if (activityId == "Supervisor") { }
    else if (activityId === "Applicant2") {
      GetOracle_OrderNO();
    }
  }
  //20251128 Dillan add(s)填單人關卡
  if (activityId == "Applicant" || activityId == "UserTask_226") {
    Price_List_b1.disabled = false;//20251128 Dillan add
    SetCompanyCurrencyL();//20251205 Dillan add
  }
  //var tGrid1 = document.getElementById("Grid1").value;

  // 檢查 Grid 是否存在
  /*
  var $grid = $("#" + frmGridList[0].gid);
  if ($grid.length > 0 && tGrid1 !== "" && tGrid1 !== null && typeof tGrid1 !== "undefined") {
    if (tGrid1.length > 2) {  // "[]" 的長度是 2，有資料會 > 2
      try {
        var gridData = JSON.parse(tGrid1);
        $grid.jqGrid('setGridParam', { data: gridData }).trigger('reloadGrid');
      } catch (e) {
        console.error('解析 Grid 資料失敗:', e);
      }
    }
  }*/
  Credit_Chk();
  var gridData = getGridData(0);
  var hiddenValue = document.getElementById("Grid1").value;
  if (typeof hiddenValue !== "undefined") {
    if (gridData.length > 0 || hiddenValue.length > 2) {
      form_org.disabled = true;
    } else {
      form_org.disabled = false;
    }
  } else {
    form_org.disabled = false;
  }

  //showBackGroundColor();
  //必填欄位處理
  $('#senao204m008').css("background-color", "#FBF1C0"); //Customer Number
  $('#senao204m003').css("background-color", "#FBF1C0"); //Sales Person
  $('#senao204m012').css("background-color", "#FBF1C0"); //Customer PO
  $('#senao204m052').css("background-color", "#FBF1C0"); //Bill-To Company Name
  $('#senao204m043').css("background-color", "#FBF1C0"); //Bill-To Address
  $('#senao204m044').css("background-color", "#FBF1C0"); //Bill-To Address
  $('#senao204m046').css("background-color", "#FBF1C0"); //Bill-To Address
  $('#senao204m015').css("background-color", "#FBF1C0"); //Contact
  $('#senao204m050').css("background-color", "#FBF1C0"); //TEL
  $('#senao204m039').css("background-color", "#FBF1C0"); //E-mail
  $('#senao204m016').css("background-color", "#FBF1C0"); //Company Name
  $('#senao204m018').css("background-color", "#FBF1C0"); //Ship-To Address
  $('#senao204m019').css("background-color", "#FBF1C0"); //Ship-To Address
  $('#senao204m022').css("background-color", "#FBF1C0"); //Ship-To Address
  $('#senao204m025').css("background-color", "#FBF1C0"); //E-mail
  $('#senao204m051').css("background-color", "#FBF1C0"); //TEL
  $('#senao204m030').css("background-color", "#FBF1C0"); //Customer Shipping Account:
  $('#senao204m041').css("background-color", "#FBF1C0"); //Freight Costs
  $('#senao204m042').css("background-color", "#FBF1C0"); //Reseller Permit No
  $('#senao204m031').css("background-color", "#FBF1C0"); //Card Number
  $('#senao204m034').css("background-color", "#FBF1C0"); //Expiration Date
  $('#senao204m036').css("background-color", "#FBF1C0"); //Card Holder Name
  $('#senao204m038').css("background-color", "#FBF1C0"); //Authorization Code
  $('#gsenao204d004').css("background-color", "#FBF1C0"); //ITEM NO
  $('#gsenao204d006').css("background-color", "#FBF1C0"); //QTY
  $('#gsenao204d008').css("background-color", "#FBF1C0"); //U/P
  $('#gsenao204d012').css("background-color", "#FBF1C0"); //NOTE
  //20251128 Dillan add(e)填單人關卡
  return true;
}
function formCreate() {
  //senao204m003_process();
  senao204m011_Entity.value = "N";
  return true;
}
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
    console.log(OU_ID);
  });
  $('#form_org').on('change', function () { //廠區
    ORG_ID = _ORG[$('#form_org').val()];
  });
  $('#btnAdd').on('click', function () { //新增
    btnAdd_onClick();
  });
  $('#btnEdit').on('click', function () { //修改
    btnEdit_onClick();
  });
  $('#btnDel').on('click', function () { //刪除
    btnDel_onClick();
  });
  $('#btnImport').on('click', function () { //刪除
    btnImport_onClick();
  });
  $('#senao204m047').on('change', function () {
    senao204m047_onChange();
  });
  $('#senao204m014').on('change', function () {
    senao204m014_onChange();
  });
  $('#senao204m020').on('change', function () {
    senao204m020_onChange();
  });
  $('#senao204m021').on('change', function () {
    senao204m021_onChange();
  });
  $('#senao204m023').on('change', function () {
    senao204m023_onChange()
  });
  $('#senao204m003').on('change', function () {
    senao204m003_onChange();
  });
  $('#senao204m030').on('change', function () {
    senao204m030_onChange();
  });
  $('#senao204m035').on('change', function () {
    senao204m035_onChange();
  });
  $('#senao204m027').on('change', function () {
    senao204m027_onChange();
  });
  $('#senao204m008').on('change', function () {
    senao204m008_onChange();
  });
  $('#gsenao204d004').on('change', function () {
    gsenao204d004_onChange();
  });
  $('#gsenao204d006').on('blur', function () { //qty
    gsenao204d006_onBlur();
  });
  $('#gsenao204d008').on('blur', function () { //U/P
    gsenao204d008_onBlur();
  });
  $('#senao204m042').on('change', function () {
    senao204m042_onChange();
  });
  $('#senao204m012').on('change', function () {
    senao204m012_onChange();
  });
  $('#senao204d016').on('change', function () {
    senao204d016_onChange();
  });
  $('#senao204m011').on('change', function () {
    senao204m011_onChange();
  });
}
function formSave() {
  //errString = "[" + $("#lbl_gsenao035d003").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[領用人]不可空白!	
  var errMsg = '';
  if (activityId == "Applicant" || activityId == "UserTask_226") { //第一關填單人  //20251112 add Applicat Modify -> UserTask_226 也要卡關
    IsUP_Less_PriceList.value = "N";   //20251112 Michael add 匯入訂單時，預設。
    if ($("#form_org").val() == "") { errMsg += "[Factory]Can't be blank!!\n"; }
    if (senao204m003.value.trim() == "") { errMsg += "[Sales Person ID]Can't be blank!!\n"; }
    if (senao204m003_ORA.value.trim() == "") { errMsg += "Can't find Ship TO Default ORACLE SALES ID !!!\n"; }

    //20210202 TinYu add
    var fileInput = document.getElementById("Attachment");
    if (!fileInput || !fileInput.value) {
      errMsg += "Must Upload Attachment!!!\r\n";
    }
    senao204m030.value = senao204m030.value.trim();
    senao204m041.value = senao204m041.value.trim();
    if (senao204m030.value == "") {
      if (senao204m041.value == "") {
        errMsg += "[Freight Costs]Can't be blank!!\n";
      } else if (!isNumeric(senao204m041.value)) {
        errMsg += "[Freight Costs]Must be Numeric!!\n";
      }
    }

    if (senao204m012.value.trim() == "") {
      errMsg += "[Customer PO]Can't be blank!!\n";
    } else {
      var strDuplicateEFNO = checkCustomerPoCount();
      if (strDuplicateEFNO != "") {
        if (SERIALNUMBER != "") {
          if (SERIALNUMBER != strDuplicateEFNO) {
            errMsg += "[Customer PO]This number(" + senao204m012.value + ") already have been in use(EF-" + strDuplicateEFNO + ")!!\n";
          }
        } else {
          errMsg += "[Customer PO]This number(" + senao204m012.value + ") already have been in use(EF-" + strDuplicateEFNO + ")!!\n";
        }
      }
    }

    if (senao204m028.value == "" && senao204m011.value.indexOf("License") == -1) { //當Order Type不為License時必填
      errMsg += "[Ship Via]Can't be blank!!!\n";
    }

    if (senao204m043.value.trim() == "" || senao204m044.value.trim() == "") {
      errMsg += "[Bill-To Address]is not complete!!\n";
    }
    if (senao204m018.value.trim() == "" || senao204m019.value.trim() == "") {
      errMsg += "[Ship-To Address]is not complete!!\n";
    }
    var selectedValue14 = senao204m014[senao204m014.selectedIndex].text;
    var selectedValue20 = senao204m020[senao204m020.selectedIndex].text;

    if (senao204m027.value == "") {
      errMsg += "[Payment Term]Can't be blank!!\n";
    } else if (senao204m027.value == "Credit Card") {
      if (selectedValue20.indexOf("User Defined") > -1 && selectedValue20.indexOf("Credit Card") > -1) {
        if (senao204m029.value == "") {
          errMsg += "[Credit Card Type]Can't be blank!!\n";
        }
      } else {
        errMsg += "[Payment Term]\"Credit Card\"  Need [SHIP-To] be \"User Defined - Credit Card\"\n !!";
      }
    } else if (senao204m027.value.indexOf("Secured") > -1) {
      if (senao204m029.value == "") {
        errMsg += "[Credit Card Type]Can't be blank!!\n";
      }
    } else {
      if (senao204m029.value != "" || senao204m031.value != "" || senao204m033.value != "" || senao204m034.value != "" || senao204m036.value != "" || senao204m038.value != "") {
        errMsg += "[Credit Card]Current Payment Term Can't key any Credit Card data, Please confirm your Payment Term!!\n";
        senao204m029.value = "";
        senao204m031.value = "";
        senao204m033.value = "";
        senao204m034.value = "";
        senao204m036.value = "";
        senao204m038.value = "";
      }
    }
    if (selectedValue20.indexOf("User Defined") > -1 && selectedValue20.indexOf("Credit Card") > -1) {
      if (senao204m027.value != "" && senao204m027.value != "Credit Card") {
        errMsg += "[Payment Term]must be \"Credit Card\"(User Defined - Credit Card)!!\n";
      }
      if (selectedValue14.indexOf("User Defined") > -1 && selectedValue14.indexOf("Credit Card") > -1) { }
      else {
        errMsg += "[Bill-To Address]must be (User Defined - Credit Card)!!\n";
      }
    }
    //20230919 Calvin add states
    // 20250123 Eason Change states
    if (senao204m021.value == "CA" || senao204m021.value == "VA" || senao204m021.value == "MI" || senao204m021.value == "FL" || senao204m021.value == "IL" || senao204m021.value == "NY" || senao204m021.value == "TX") { // 20250701 Dex 增加TX
      if (senao204m042.value == "" && senao204m035.value == "0%" && senao204m008.value != "10950") {
        // 20250123 Eason Change states
        errMsg += "[Ship to Address- State in (CA,VA,MI,FL,IL,NY,TX)]No Reseller Permit No,  Sales Tax can't be 0%!!\n"; //20250701 Dex 增加TX
      }
    }
    if (senao204m029.value != "") {
      if (senao204m031.value.trim() == "") {
        errMsg += "[Card Number]Can't be blank!!\n";
      }
      if (senao204m036.value.trim() == "") {
        errMsg += "[Card Holder Name]Can't be blank!!\n";
      }
      if (senao204m038.value.trim() == "") {
        errMsg += "[Authorization Code]Can't be blank!!\n";
      }
    }
    var m040str = senao204m040.value.trim();
    senao204m040.value = m040str;
    var n040LenghORA = CountOracleCHT(m040str);
    if (n040LenghORA > 240) {
      errMsg += "[Note]can't be more than 240 characters(Actual:" + n040LenghORA + ")!!\n";
    }

    //20210930 Ann Add for Entity
    if (senao204m011.value == "") { //Order Type
      errMsg += "[Order Type]Can't be blank!!\n";
    } else {
      senao204m011_onChange();
    }

    //20210930 Ann Add for License
    if (senao204m011.value.indexOf("License") > -1) { //Order Type is License
      if (senao204m012.value == "") {
        errMsg += "[Customer PO]Can't be blank!!\n";
      }
      if (senao204m025.value == "") {
        errMsg += "Ship-To [E-mail]Can't be blank!!\n";
      } else {
        var senao204m025_split = senao204m025.value.split(',');
        var senao204m025_format = "Y";
        for (i = 0; i < senao204m025_split.length; i++) {
          if (senao204m025_split[i].indexOf("@") > -1) { //email has @
          } else {
            senao204m025_format = "N";
          }
        }
        if (senao204m025_format == "N") {
          errMsg += "Please check Ship-To [E-mail] format!!\n";
        }
      }
      senao204m011_License.value = "Y"; //Order Type is License，for流程判斷需不需Check Credit用
    } else {
      senao204m011_License.value = "N";
    }

    var gridData = getGridData(0);
    if (gridData.length == 0) {
      errMsg += "[Detail Data]Can't be blank!! \n";
    } else {
      for (i = 0; i < gridData.length; i++) {
        var row = i + 1;
        if (gridData[i].SENAO204D005.trim() == "") {
          errMsg += "NO." + row + " Data[DESCRIPTION] Must have value !!\n";
        }

        if (gridData[i].SENAO204D006.trim() == "") {
          errMsg += "NO." + row + " Data[QTY] Must have value !!\n";
        } else {
          if (isNumeric(gridData[i].SENAO204D006.trim())) {
            if (gridData[i].SENAO204D006.trim() == "0") {
              errMsg += "NO." + row + " Data[QTY] Can't be ZERO !!\n";
            }
            if (gridData[i].SENAO204D006.trim().indexOf(".") > -1) {
              errMsg += "NO." + row + " Data[QTY] Can't be Float !!\n";
            }
          } else {
            errMsg += "NO." + row + " Data[QTY] Must be Numeric !!\n";
          }
        }

        if (gridData[i].SENAO204D008.trim() == "") {
          errMsg += "NO." + row + " Data[U/P]Must have value !!\n";
          break;
        } else if (!isNumeric(gridData[i].SENAO204D008.trim())) {
          errMsg += "NO." + row + " Data[U/P]Must be Numeric !!\n";
          break;
        } else { //20211012 Ann Add for 單價比標準PriceList還高,增加GM關卡
          if ((parseFloat(gridData[i].SENAO204D008) + 0.1 < parseFloat(gridData[i].SENAO204D013) + 0.1) || gridData[i].SENAO204D013.trim() == "") {
            IsUP_Less_PriceList.value = "Y";
            break;
          } else {
            IsUP_Less_PriceList.value = "N";
          }
        }

        //20211022 Ann Add for Confirm ITEM NO can be selected
        var sqlId2 = "BPM_ERP_SENAO204_12";
        var params2 = [];
        var data2 = "";
        params2.push(gridData[i].SENAO204D004.trim()); //ITEM NO
        data2 = ajaxGetData(invokeURL + sqlId2, { p: params2[0] });
        if (data2[0].result == undefined) {
          if (data2.length > 0 && senao204m011.value.indexOf("License") == -1) { //選擇到Liense專用ITEM，且Order Type不為License
            errMsg += "NO." + row + " When [Order Type] isn't License, can't choose this [ITEM NO](" + gridData[i].SENAO204D004.trim() + ")!!\n";
          } else if (data2.length == 0 && senao204m011.value.indexOf("License") > -1) { //沒選到Liense專用ITEM，且Order Type為License
            errMsg += "NO." + row + " When Order Type is License, can't choose this ITEM NO(" + gridData[i].SENAO204D004.trim() + ")!!\n";
          } else { }
        }
      } //End of for..
    } //End of if (gridData.length == 0) ..

    //20211012 Ann Add for Payment term有更改,增加GM關卡
    if (senao204m027_NEW.value != senao204m027_ORA.value) {
      IsPaymentTermModified.value = "Y";
    } else {
      IsPaymentTermModified.value = "N";
    }

    getBillTo_ShipTo_site_use_id();
    if (senao204m014_ORA.value == "") { //
      errMsg += "[Bill-To Address ID]Can't be blank!! Please contact MIS!!\n";
    }

    if (senao204m020_ORA.value == "") {
      errMsg += "[Ship-To Address ID]Can't be blank!! Please contact MIS!!\n";
    }

    if (errMsg == "") {
      //var msg = "";
      Calc_Grid_Total();
      clearBinding(0);
      /*
      if (typeof(Grid1Obj) != "undefined") { //判斷grid物件是否存在表單中
          document.getElementById("Grid1").value = Grid1Obj.toArrayString(); //將Grid裡的資料儲存至隱藏欄位中
          Grid1Obj.clearBinding();
      }*/
      genSubject();
      prepareForMobile();
    }
  } else if (activityId == "Applicant2") {
    if (senao204m010.value.trim() == "" || senao204m010.value.trim() == "AutoNumber" || senao204m010.value.trim() == "Order No is not generated yet") {
      errMsg += "Order No is not generated yet!\n";
    }
    if (senao204m011.value.indexOf("License") > -1) { //20210930 Ann Add for Entity
      if (senao204m012.value == "") {
        errMsg += "[Customer PO]Can't be blank!!\n";
      }
      if (senao204m025.value == "") {
        errMsg += "Ship-To [E-mail]Can't be blank!!\n";
      } else {
        var senao204m025_split = senao204m025.value.split(',');
        var senao204m025_format = "Y";
        for (i = 0; i < senao204m025_split.length; i++) {
          if (senao204m025_split[i].indexOf("@") > -1) { //email has @
          } else {
            senao204m025_format = "N";
          }
        }
        if (senao204m025_format == "N") {
          errMsg += "Please check Ship-To [E-mail] format!!\n";
        }
      }
    }
  }

  clearBinding(0);

  if (errMsg == "") {
    return true;
  } else {
    alert(errMsg);
    resetGridHelpColsProperty();
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
  //form_ou.disabled = true;//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  /*if (form_ou.value == ''){
    alert(querySNSI009("senao","019",locale,"","",""));	//取得公司對應有問題，請重新開單一次
    window.history.go(-1);
  }else{
    OU_ID = _OU[$$("#form_ou").val()] + "";
    ORG_ID = _ORG[$$("#form_ou").val()] + "";//預設用senao取86
  }  */
  //表單代號
  $('#senao204m001').val(type);//vivian註解:網址格式不對導致ProcessPackageId抓不到代號
  $('#senao204m001').attr('disabled', 'true');

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
//XXX //TODO
function prepareCustomerAddressDropLists() {
  //test
  //senao204m008.value = "1021";
  if (senao204m008.value.trim() != "") {//Customer Number

    //1.prepare senao204m014,senao204m045
    //2.prepare senao204m020,senao204m021
    var data = queryCustomer_204_01A(senao204m008.value);
    if (data.length > 0) {
      var customer_name = "";
      var customer_id = "";
      senao204m009.value = data[0].CUSTOMER_NAME;
      senao204m008_ORA.value = data[0].CUSTOMER_ID;
      if (senao204m016.value == "") {//Ship-To Information- Company Name
        senao204m016.value = senao204m009.value;
      }
      if (senao204m052.value == "") {//Bill-To Information- Company Name
        senao204m052.value = senao204m009.value;
      }

      for (var i = 0; i < data.length; i++) {
        var site_use_id = fixNull(data[i].SITE_USE_ID);
        var site_use_code = fixNull(data[i].SITE_USE_CODE);
        var address2 = fixNull(data[i].ADDRESS2);
        var location = fixNull(data[i].LOCATION_1);
        var jsonVariable = {};
        jsonVariable[site_use_id] = address2;
        switch (site_use_code) {
          case "BILL_TO":
            var select = document.getElementById("senao204m014");
            for (var key in jsonVariable) {
              var option = document.createElement("option");
              option.value = key;
              option.text = jsonVariable[key];
              select.appendChild(option);
            }
            break;
          case "SHIP_TO":
            var shipToAddress = "[" + location + "]-" + address2;
            var select = document.getElementById("senao204m020");
            for (var key in jsonVariable) {
              var option = document.createElement("option");
              option.value = key;
              option.text = jsonVariable[key];
              select.appendChild(option);
            }
            break;
        }
      } //end of for(var i = 0; i < data.length; i++){

      var tDropdownHdn014 = document.getElementById("senao204m014_hdn");
      var selectElement = document.getElementById("senao204m014");
      if (tDropdownHdn014 && tDropdownHdn014.value) {
        selectElement.value = tDropdownHdn014.value;
      }
      //DWRUtil.setValue("senao204m014", eval(tDropdownHdn014.value));

      var tDropdownHdn020 = document.getElementById("senao204m020_hdn");
      var selectElement = document.getElementById("senao204m020");
      if (tDropdownHdn020 && tDropdownHdn020.value) {
        selectElement.value = tDropdownHdn020.value;
      }
      //DWRUtil.setValue("senao204m020", eval(tDropdownHdn020.value));

      var tDropdownHdn047 = document.getElementById("senao204m047_hdn");
      var selectElement = document.getElementById("senao204m047");
      if (tDropdownHdn047 && tDropdownHdn047.value) {
        selectElement.value = tDropdownHdn047.value;
      }
      //DWRUtil.setValue("senao204m047", eval(tDropdownHdn047.value));
      senao204m047_onChange();

      var tDropdownHdn023 = document.getElementById("senao204m023_hdn");
      var selectElement = document.getElementById("senao204m023");
      if (tDropdownHdn023 && tDropdownHdn023.value) {
        selectElement.value = tDropdownHdn023.value;
      }
      //DWRUtil.setValue("senao204m023", eval(tDropdownHdn023.value));
      senao204m023_onChange();

      var tDropdownHdn045 = document.getElementById("senao204m045_hdn");
      var selectElement = document.getElementById("senao204m045");
      if (tDropdownHdn045 && tDropdownHdn045.value) {
        selectElement.value = tDropdownHdn045.value;
      }
      //DWRUtil.setValue("senao204m045", eval(tDropdownHdn045.value));

      var tDropdownHdn021 = document.getElementById("senao204m021_hdn");
      var selectElement = document.getElementById("senao204m021");
      if (tDropdownHdn021 && tDropdownHdn021.value) {
        selectElement.value = tDropdownHdn021.value;
      }
      //DWRUtil.setValue("senao204m021", eval(tDropdownHdn021.value));
    }
  }
}
function queryCustomer_204_01A(customerNumber) {
  var sqlId = "BPM_ERP_SENAO204_01A";
  var params = [];
  params.push(customerNumber);
  params.push(OU_ID); //已在SQL中寫死OU_ID為224，不須傳入 20211008 Ann Edit 20241016 Eason 因導入日本所以改帶參數
  let result = ajaxGetData(invokeURL + sqlId, {
    CN: customerNumber,
    OU_ID: params[1]
  });

  return result;
}
function queryCustomer_204_01B(customerNumber) {
  var sqlId = "BPM_ERP_SENAO204_01B";
  var params = [];
  params.push(senao204m020.value);
  params.push(customerNumber);
  params.push(OU_ID); //已在SQL中寫死OU_ID為224，不須傳入 20211008 Ann Edit 20241016 Eason 因導入日本所以改帶參數
  let result = ajaxGetData(invokeURL + sqlId, {
    senao204m008: params[0],
    CN: customerNumber,
    OU_ID: params[2]
  });

  return result;
}
function Calc_Grid_Total() {
  var gridData = getGridData(0);
  //var gridData = Grid1Obj.getData();
  if (gridData.length > 0) {
    var Total = 0;
    var Total_include_Tax = 0;
    for (var i = 0; i < gridData.length; i++) {
      var subTotal = gridData[i]['SENAO204D008'];
      var TaxRate = gridData[i]['SENAO204D017'];
      if (isNumeric(subTotal)) {
        //alert("toFixedNumber(subTotal,2): " + toFixedNumber(subTotal,2));
        Total = FloatAdd(Total, toFixedNumber(subTotal, 2)); //小計先取2位,
        if (TaxRate != "" && TaxRate.length > 1) {
          if (isNumeric(left(TaxRate, TaxRate.length - 1))) {
            TaxRate = left(TaxRate, TaxRate.length - 1);
            TaxRate = Number(parseFloat(TaxRate) / parseFloat(100));
            Total_include_Tax = FloatAdd(Total_include_Tax, (FloatAdd(1, TaxRate) * subTotal));
          }
        }
      }
    }
    Total = toFixedNumber(Total, 2); //小計先取2位,
    Total_include_Tax = toFixedNumber(Total_include_Tax, 2); //小計先取2位,
    senao204m032.value = Total; //明細檔小計(senao113m019)的加總 ，總計取 3位
    senao204m037.value = Total_include_Tax; //明細檔小計(senao113m019)的加總 ，總計取 3位
    currency_convert();//20251205 Dillan add
    //20251205 Dillan add(s) btn delete後若無grid資料欄位也一併歸0
  } else {
    senao204m032.value = '0.00';
    senao204m032_c.value = '0.00';
    senao204m037.value = '0';
    senao204m037_c.value = '0';
  }
  //20251205 Dillan add(s)
  return true;
}
function currency_convert() {
  var sqlId = "BPM_SUS204_buildExchangeRate";
  var tParams = [];
  tParams.push(Currency.value);
  tParams.push(Local_currency.value);
  tParams.push(systemDateTime);
  let data = ajaxGetData(invokeURL + sqlId, {
    fromCurrency: tParams[0],
    toCurrency: tParams[1],
    conversionDate: tParams[2]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      Convert_Rate.value = data.recordValues[0].CONVERSION_RATE; //匯率
    } else {
      if (Local_currency.value != Currency.value) {
        alert("在ERP系統中無法取得指定幣別的匯率，請聯絡 ERP 團隊。\nUnable to retrieve the specified currency exchange rate in the ERP system. Please contact the ERP team.");
      }
      Currency.value = Local_currency.value;
      Convert_Rate.value = "1";
    }
  }
}
/**
 *BillTo & ShipTo的ID(senao204m014_ORA、senao204m020_ORA)
 *20220214 Ann Add
 */
function getBillTo_ShipTo_site_use_id() {
  senao204m014_ORA.value = senao204m014[senao204m014.selectedIndex].value;
  senao204m020_ORA.value = senao204m020[senao204m020.selectedIndex].value;
}
function resetGridHelpColsProperty() {
  //單身異動後回復原值
  gsenao204d016.value = senao204m035.value;
  gsenao204d007.value = "PCS";
  gsenao204d010.value = systemDateTime.replace(/\//g, '-');
  gsenao204d011.value = systemDateTime.replace(/\//g, '-');
  gsenao204d006.value = "0"; //QTY
  gsenao204d008.value = "0"; //U/P
  gsenao204d009.value = "0"; //SubTotal
}
//XXX改成後端回寫
function GetOracle_OrderNO() {
  var sqlId = "BPM_ERP_SENAO204_10";
  var params = [];
  params.push(senao204m002.innerHTML + "LAS");
  let data = ajaxGetData(invokeURL + sqlId, {
    p: params[0]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      for (var i = 0; i < data.length; i++) {
        senao204m010_ORA.value = fixNull(data[0].HEADER_ID); //HeaderID
        senao204m010.value = fixNull(data[0].ORDER_NUMBER); //OrderNo
      }
    } else {
      senao204m010.value = "Order No is not generated yet";
      senao204m010_ORA.value = "";
    }
  }
  return true;
}
//20251205 Dillan add(s)
/**
* 抓取ERP中設定之公司幣別
*/
function SetCompanyCurrencyL() {
  CompanyCurrency = "---"; //預設公司的本幣別
  var sqlId = "BPM_ERP_SetCompanyCurrency";
  let data = ajaxGetData(invokeURL + sqlId, {
    OU_ID: OU_ID
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      CompanyCurrency = data[0].CURRENCY_CODE;//如果有抓到幣別，就設定上去
      Local_currency.value = CompanyCurrency;
    } else {
      alert("在ERP系統中無法取得公司本幣資訊，請聯絡 ERP 團隊。\nUnable to retrieve the Base currency in the ERP system. Please contact the ERP team.");
    }
  }
}
//計算單身金額小計
function Cal_Grid_SubTotal() {
  if (!(gsenao204d006.value == "" || gsenao204d008.value == "")) {
    gsenao204d009.value = parseFloat(gsenao204d006.value) * parseFloat(gsenao204d008.value);
    gsenao204d008.value = gsenao204d008.value.replace(/,/g, "");
    Calc_Grid_Total();
  } else {
    gsenao204d008.value = gsenao204d008.value.replace(/,/g, "");
  }
  return true;
}
/**
 * 檢查是否可撤簽
 */

function chkRegainable() {
  var chk_flag = "Y";
  var result = "";
  //EFGP
  var sqlId = "BPM_SUS204_chkRegainable";
  var tParams = [];
  tParams.push(SERIALNUMBER);
  let data = ajaxGetData(invokeURL + sqlId, {
    SERIALNUMBER: tParams[0]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      chk_flag = "N";
    }
  }
  if (chk_flag == "N") {
    if (window.parent.parent.document.getElementById("btnRollback") != null) { //取回重辦
      window.parent.parent.document.getElementById("btnRollback").style.display = "none";
    }
    if (window.parent.parent.document.getElementById("btnAbort") != null) { //撤銷流程
      window.parent.parent.document.getElementById("btnAbort").style.display = "none";
    }
    if (window.parent.document.getElementById("btnTerminateProcess") != null) { //終止流程
      if (activityId == 'Finance') {
        window.parent.document.getElementById("btnTerminateProcess").style.display = "";
      } else {
        window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
      }
    }
    if (window.parent.document.getElementById("btnReexecuteActivity") != null) { //退回重辦
      window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
    }
  }
}
/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const prefixSubject = "Order Request Form_" + senao204m005.value;

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
  /*
  if ($$("#senao204m031_0").is(":checked")){
  senao204m031_m.value = "是";
  }else{
  senao204m031_m.value = "否";
  }

  if($$("#senao204m032_0").is(":checked")){
  senao204m032_m.value = "是";
  }else{
  senao204m032_m.value = "否";
  }

  if(senao204m030.selectedIndex != -1){
  senao204m030_m.value = senao204m030[senao204m030.selectedIndex].text;
  }

  if($$("#senao204m041_0").is(":checked")){
  senao204m041_m.value = "是";
  }else if($$("#senao204m041_1").is(":checked")){
  senao204m041_m.value = "否";
  }

  if(senao204m025.selectedIndex != -1){
  senao204m025_m.value = senao204m025[senao204m025.selectedIndex].text;
  }

  //if($$("#senao204m016_0").is(":checked")){
  //senao204m016_m.value = senao204m016_0.text;
  //}else if($$("#senao204m016_1").is(":checked")){
  //senao204m016_m.value = senao204m016_1.text;
  //}

  senao204m016_m.value = senao204m016[senao204m016.selectedIndex].text;
   */
}
function checkCustomerPoCount() {
  var result = "";
  //EFGP
  var sqlId = "BPM_SENAO204_06";
  var tParams = [];
  tParams.push(senao204m012.value);
  tParams.push((senao204m002.innerHTML.length > 0) ? senao204m002.innerHTML : "NONE");
  let data = ajaxGetData(invokeURL + sqlId, {
    senao204m012: tParams[0],
    senao204m002: tParams[1]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      result = result + data[0].PROCESSSERIALNUMBER;
    }
  }

  //SP7
  //查詢EXFLOWDB 先註解掉
  /*
  var sqlId2 = "BPM_SENAO204_21";
  var tParams = [];
  tParams.push(senao204m012.value);
  tParams.push((senao204m002.innerHTML.length > 0) ? senao204m002.innerHTML : "NONE");
  let data2 = ajaxGetData(invokeURL + sqlId2, {
    senao204m012: tParams[0],
    senao204m002: tParams[1]
  });
  if (data2[0].result == undefined) {
    if (data2.length > 0) {
      result = result + data2[0].PROCESSSERIALNUMBER;
    }
  }*/

  return result;
}
function getStateOptions(domRef) {
  var sqlId = "BPM_SENAO204_04";
  let data = ajaxGetData(invokeURL + sqlId, {});
  if (data[0].result == undefined) {
    if (data.length > 0) {
      var dataObjectArray = [];
      for (var i = 0; i < data.length; i++) {
        var dataObject = {};
        dataObject.id = data[i].SENAO204A001;
        dataObject.name = data[i].SENAO204A002;
        dataObjectArray.push(dataObject);
      }
      //DWRUtil.addOptions(domRef, dataObjectArray, 'id', 'name');
      var select = document.getElementById(domRef);
      for (var key in dataObjectArray) {
        var option = document.createElement("option");
        option.value = dataObjectArray[key].id;
        option.text = dataObjectArray[key].name;
        select.appendChild(option);
      }
    }
  }
}
function Oracle_EBS() {
  var sqlId = "BPM_ERP_OracleEBS";
  let data = ajaxGetData(invokeURL + sqlId, { OU_ID: OU_ID });
  if (data[0].result == undefined) {
    
    alert("成功連接到Oracle EBS系統!!");
    return true;
  } else {
    alert("無法連接到Oracle EBS系統，請聯絡MIS人員處理!!");
  }
}
//Common Tools Section
function CountOracleCHT(strChr) {
  var intString = 0;
  strChr += "";
  for (var j = 0; j < strChr.length; j++) {
    if (strChr.charCodeAt(j) >= 32 && strChr.charCodeAt(j) <= 126) {
      intString = intString + 1;
    } else {
      intString = intString + 3;
    }
  }
  return intString;
}
/**
 *Credit Chk區塊
 *20211104 Ann Add
 *區塊內所有欄位的顯示、隱藏、取值、新發起與複製表單須清空
 */
function Credit_Chk() {
  if (activityId == "Finance") {
    // 顯示整個 Credit Chk 區塊
    var creditChkBlock = document.getElementById("Label111");
    if (creditChkBlock) {
      if (creditChkBlock.closest) {
        var parent = creditChkBlock.closest(".card-body");
        if (parent) parent.style.display = "";
      } else {
        creditChkBlock.parentElement.parentElement.parentElement.style.display = "";
      }
    }

    // 顯示整個 Credit 和 Balance 所在的 row
    var creditBlock = document.getElementById("Label112");
    if (creditBlock) {
      if (creditBlock.closest) {
        var parent = creditBlock.closest(".row");
        if (parent) parent.style.display = "";
      } else {
        var rowElement = creditBlock.parentElement.parentElement.parentElement.parentElement.parentElement;
        if (rowElement) rowElement.style.display = "";
      }
    }

    // 顯示 Label125 (灰色線)
    var label125 = document.getElementById("Label125");
    if (label125 && label125.parentElement) {
      label125.parentElement.style.display = "";
    }

    // 顯示 Hold Reason 的整個 row
    var holdReasonLabel = document.getElementById("lbl_senao204m062");
    if (holdReasonLabel) {
      if (holdReasonLabel.closest) {
        var parent = holdReasonLabel.closest(".row");
        if (parent) parent.style.display = "";
      } else {
        var holdReasonRow = holdReasonLabel.parentElement.parentElement.parentElement.parentElement;
        if (holdReasonRow) holdReasonRow.style.display = "";
      }
    }

    // 顯示 Description 的整個 row
    var descriptionLabel = document.getElementById("lbl_senao204m063");
    if (descriptionLabel) {
      if (descriptionLabel.closest) {
        var parent = descriptionLabel.closest(".row");
        if (parent) parent.style.display = "";
      } else {
        var descriptionRow = descriptionLabel.parentElement.parentElement.parentElement.parentElement;
        if (descriptionRow) descriptionRow.style.display = "";
      }
    }

    // 顯示 Note 的整個 row
    var noteLabel = document.getElementById("lbl_senao204m064");
    if (noteLabel) {
      if (noteLabel.closest) {
        var parent = noteLabel.closest(".row");
        if (parent) parent.style.display = "";
      } else {
        var noteRow = noteLabel.parentElement.parentElement.parentElement.parentElement;
        if (noteRow) noteRow.style.display = "";
      }
    }

    // 調整表單高度
    setTimeout(function () {
      var formContainer = document.getElementById(formId + "_shell");
      if (formContainer) {
        formContainer.style.height = "auto";
      }

      try {
        if (window.top !== window.self && typeof window.top.doResize === "function") {
          window.top.doResize();
        }
      } catch (e) {
        console.log("無法呼叫 doResize:", e);
      }
    }, 100);

    if (workItemSource == "0") { //Finance的新待辦事項
      //取值
      //Limit
      var sqlId1 = "BPM_ERP_SENAO204_13";
      var params1 = [];
      var appendSQL1 = "";
      var data1 = "";
      params1.push(senao204m008_ORA.value); //[Oracle] Customer ID
      data1 = ajaxGetData(invokeURL + sqlId1, {
        P: params1[0]
      });
      if (data1.length > 0) {
        senao204m053.value = data1[0].OVERALL_CREDIT_LIMIT;
      } else {
        senao204m053.value = 0;
      }

      //Avg Days to Pay
      var sqlId2 = "BPM_ERP_SENAO204_14";
      var params2 = [];
      var appendSQL2 = "";
      var data2 = "";
      params2.push(senao204m008_ORA.value); //[Oracle] Customer ID
      data2 = ajaxGetData(invokeURL + sqlId2, {
        P: params2[0]
      });
      if (data2.length > 0) {
        senao204m055.value = data2[0].AVG_DAYS;
      } else {
        senao204m055.value = 0;
      }

      //Payment Term
      senao204m056.value = senao204m027.value;

      //Open Invoice、Open Credit、Pre-Payments、Past Due
      var sqlId3 = "BPM_ERP_SENAO204_15";
      var params3 = [];
      var appendSQL3 = "";
      var data3 = "";
      params3.push(senao204m008_ORA.value); //[Oracle] Customer ID
      data3 = ajaxGetData(invokeURL + sqlId3, {
        P: params3[0]
      });
      if (data3.length > 0) {
        senao204m057.value = data3[0].AR_AMOUNT; //Open Invoice
        senao204m058.value = data3[0].CM_CREDIT; //Open Credit
        senao204m060.value = data3[0].PRE_AMOUNT; //Pre-Payments
        senao204m061.value = data3[0].DUE_AMOUNT; //Past Due
      } else {
        senao204m057.value = 0; //Open Invoice
        senao204m058.value = 0; //Open Credit
        senao204m060.value = 0; //Pre-Payments
        senao204m061.value = 0; //Past Due
      }

      //Open Order
      var sqlId4 = "BPM_ERP_SENAO204_16";
      var params4 = [];
      var appendSQL4 = "";
      var data4 = "";
      params4.push(senao204m008_ORA.value); //[Oracle] Customer ID
      data4 = ajaxGetData(invokeURL + sqlId4, {
        P: params4[0]
      });
      if (data4.length > 0) {
        senao204m059.value = data4[0].OPENSALESAMT;
      } else {
        senao204m059.value = 0;
      }

      //Hold Reason
      senao204m062.value = "Other";

      //查詢ezflowDB 先註解掉
      /*
      //Description
      var strAmt1 = 0; //Shipping Amount
      var strDetail1 = ""; //Shipping Detail
      var sqlId1 = "SENAO204_17"; //因Shipping Memo還保留在SP7，值暫時至SP7取得
      var tParams1 = [];
      var data1 = [];
      tParams1.push(senao204m008.value); //Customer Number
      data1 = ajax_EFGPSQLQuery(sqlId1, tParams1);
      if (data1.length > 0) {
          strAmt1 = data1[0][0];

          var sqlId2 = "SENAO204_18"; //因Shipping Memo還保留在SP7，值暫時至SP7取得
          var tParams2 = [];
          var data2 = [];
          tParams2.push(senao204m008.value); //Customer Number
          data2 = ajax_EFGPSQLQuery(sqlId2, tParams2);
          if (data2.length > 0) {
              for (i = 0; i < data2.length; i++) {
                  strDetail1 += "#" + data2[i][0] + "(DN: " + data2[i][1] + ",applying: " + data2[i][2] + ",status: " + data2[i][3] + ") \n";
                  //#'"+EF單號+"'(DN: '"+ERP單號(Delivery NO)+"',applying: '"+ApplyAmt+"',status: '"+最後的關號-支號:原審核者+"') \n
              }
          }
      }*/

      var strAmt2 = 0; //Order Request-License Amount
      var strDetail2 = ""; //Order Request-License Detail
      var sqlId3 = "BPM_SENAO204_19"; //因License不會產生Shipping Memo，故要到Order Request取值
      var tParams3 = [];
      var data3 = [];
      tParams3.push(senao204m008.value); //Customer Number
      data3 = ajaxGetData(invokeURL + sqlId3, {
        senao204m008: tParams3[0]
      });
      if (data3.length > 0) {
        strAmt2 = data3[0].SUM_SENAO204M037;

        var sqlId4 = "BPM_SENAO204_20"; //因License不會產生Shipping Memo，故要到Order Request取值
        var tParams4 = [];
        var data4 = [];
        tParams4.push(senao204m008.value); //Customer Number
        data4 = ajaxGetData(invokeURL + sqlId4, {
          senao204m008: tParams4[0]
        });
        if (data4.length > 0) {
          for (i = 0; i < data4.length; i++) {
            strDetail2 += "#" + data4[i].SENAO204M002 + "(DN: " + data4[i].DN + ",applying: " + data4[i].APPLYAMT + ",status: " + data4[i].STATUS + ") \n";
            //#'"+EF單號+"'(DN: '"+ERP單號(Order No)+"',applying: '"+ApplyAmt+"',status: '"+最後的關卡代號:原審核者+"') \n
          }
        }
      }

      var strAmt = ""; //Shipping Amount & Order Request-License Amount
      var strDetail = ""; //Shipping Detail & Order Request-License Amount
      strAmt = parseFloat(strAmt1) + parseFloat(strAmt2);
      strDetail = strDetail1 + strDetail2;
      senao204m063.value = "Total Applying Shipping amount:" + strAmt + "\n" + strDetail;

      //Available = senao204m053.value(Limit) - senao204m057.value(Open Invoice) - senao204m058.value(Open Credit) - senao204m060.value(Pre-Payments) - strAmt(Shipping Memo & Order Request-License)
      senao204m054.value = senao204m053.value - senao204m057.value - senao204m058.value - senao204m060.value - strAmt;

      //Note 由Finance填寫，且必填
      //senao204m064.value = "";
    }

    //document.getElementById(formId + "_shell").style.height = "2000"; //調整表單高度
    //window.top.doResize(); //調整高度後要重載
  } else {
    // 隱藏整個 Credit Chk 區塊（包含標題）
    var creditChkBlock = document.getElementById("Label111");
    if (creditChkBlock) {
      creditChkBlock.closest(".card-body").style.display = "none";
    }

    // 隱藏整個 Credit 和 Balance 所在的 row
    var creditBalanceRow = document.getElementById("Label112");
    if (creditBalanceRow) {
      creditBalanceRow.closest(".row").style.display = "none";
    }

    // 隱藏 Label125 (灰色線) 的容器
    var label125 = document.getElementById("Label125");
    if (label125 && label125.parentElement) {
      label125.parentElement.style.display = "none";
    }

    // 隱藏 Hold Reason, Description, Note 的 row
    var holdReasonRow = document.getElementById("lbl_senao204m062");
    if (holdReasonRow) {
      holdReasonRow.closest(".row").style.display = "none";
    }

    var descriptionRow = document.getElementById("lbl_senao204m063");
    if (descriptionRow) {
      descriptionRow.closest(".row").style.display = "none";
    }

    var noteRow = document.getElementById("lbl_senao204m064");
    if (noteRow) {
      noteRow.closest(".row").style.display = "none";
    }

    // 清空值（如果是新表單）
    if (senao204m002.value == "") {
      var fieldsToClear = [
        "senao204m053", "senao204m054", "senao204m055", "senao204m056",
        "senao204m057", "senao204m058", "senao204m059", "senao204m060",
        "senao204m061", "senao204m062", "senao204m063", "senao204m064"
      ];

      fieldsToClear.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
          element.value = "";
        }
      });
    }

    // 調整表單高度
    setTimeout(function () {
      var formContainer = document.getElementById(formId + "_shell");
      if (formContainer) {
        formContainer.style.height = "auto";
        formContainer.style.minHeight = "auto";
      }

      // 通知父視窗調整大小（如果在 iframe 中）
      try {
        if (window.top !== window.self && typeof window.top.doResize === "function") {
          window.top.doResize();
        }
      } catch (e) {
        console.log("無法呼叫 parent.doResize:", e);
      }
    }, 100);

  }
}
//XXX 應不需要
function CHK_Card_Number() {
  var CHK_ERR = false;
  var strCardNO = senao204m031.value.trim();
  if (strCardNO != "" && senao204m029_ORA.value != "") {
    switch (senao204m029_ORA.value) {
      case "VISA":
        if (strCardNO.length == "13" || strCardNO.length == "16") {
          if (left(strCardNO, 1) != "4") {
            CHK_ERR = true;
          }
        } else {
          CHK_ERR = true;
        }
      case "Master":
        if (strCardNO.length == "16") {
          if (left(strCardNO, 1) != "5") {
            CHK_ERR = true;
          }
        } else {
          CHK_ERR = true;
        }
      case "AE":
        if (strCardNO.length == "15") {
          if (left(strCardNO, 2) != "34" && left(strCardNO, 2) != "37") {
            CHK_ERR = true;
          }
        } else {
          CHK_ERR = true;
        }
      case "Discover":
        if (strCardNO.length == "16") {
          if (left(strCardNO, 4) != "6011") {
            CHK_ERR = true;
          }
        } else {
          CHK_ERR = true;
        }
      default:
    }
    if (CHK_ERR) {
      alert("Card Number is Invalid!!");
      senao204m031.value = "";
      senao204m031.focus();
    }
  }
  return true;
}
function ChangeAmazonData(data) { //Amazon多筆上傳
  //標準
  let headitems = [];
  let headdata = [];   //單頭
  let griddata = []; //單身
  let SUBJECT = '';
  let customerNumber = '10950';
  let FOB = '';
  let ORDER_TYPE_NAME = 'US-S-Sales';
  let rowid = 1;
  let msg = [];
  let headspace = {
    FORMSERIALNUMBER: '',
    SUBJECT: null,
    FORM_OU: null,
    FORM_ORG: null,
    SENAO204M008: null, //客戶別	
    SENAO204M003: null, //Sales Person_id
    SENAO204M011: null, //Order Type	
    SENAO204M012: null, //Customer PO	
    SENAO204M049: null, //RMA Type	
    PRICE_LIST: null, //Price_List 	
    SENAO204M013: null, //Bill-To Information Attention	
    SENAO204M015: null, //Bill-To Information Contact	
    SENAO204M050: null, //Bill-To Information TEL
    SENAO204M039: null, //Bill-To Information E-mail	
    SENAO204M017: null, //Ship-To Information Attention	 
    SENAO204M018: null, //Shipping Address 1
    SENAO204M019: null, //Shipping City
    SENAO204M020: null, //Ship-To Address=>User Defined – USA
    SENAO204M022: null, //Shipping Postal Code
    SENAO204M023: null, //Shipping Country Code
    SENAO204M021: null, //Shipping State
    SENAO204M025: null, //Ship-To Information E-mail(N)
    SENAO204M051: null, //Ship-To Information TEL
    SENAO204M026: null, //FOB
    SENAO204M048: null, //Freight Term
    SENAO204M030: null, //Customer Shipping Account:
    SENAO204M041: null, //Freight Costs
    SENAO204M028: null, //Ship Via
    SENAO204M042: null, //Reseller Permit No	
    SENAO204M027: null, //Payment Term
    SENAO204M029: null, //Credit Card Type
    SENAO204M031: null, //Card Number
    SENAO204M033: null, //Expiration Date	
    SENAO204M034: null, //Expiration Date(YYYY)	
    SENAO204M036: null, //Card Holder Name
    SENAO204M038: null, //Authorization Code
    SENAO204M040: null, //Note
    __EMPTY: null

  }
  let result = ajaxGetData(invokeURL + 'BPM_ERP_SENAO204_01A', {
    CN: customerNumber,
    OU_ID: '224' //SUS
  });
  if (result[0].result == undefined) {
    // ORDER_TYPE_NAME = result[0].ORDER_TYPE_NAME;
    FOB = result[0].FOB_POINT;
  }
  $.each(data, function (index, value) {
    //清空head
    let OrderId=value['Amazon Order Id']?String(value['Amazon Order Id']):null
    let head = {};
    //1.取Order Id
    if ($.inArray(OrderId, headitems) == -1) {
      //2.建立Head
      head = {
        FORMSERIALNUMBER: OrderId,
        SUBJECT: SUBJECT,
        FORM_OU: 'EnGenius Technologies',
        FORM_ORG: 'US RBU',
        SENAO204M008: customerNumber, //客戶別	
        SENAO204M003: userId, //Sales Person_id
        SENAO204M011: ORDER_TYPE_NAME, //Order Type	
        SENAO204M012:OrderId, //Customer PO	
        SENAO204M049: null, //RMA Type	
        PRICE_LIST: null, //Price_List 	
        SENAO204M013: null, //Bill-To Information Attention	
        SENAO204M015: null, //Bill-To Information Contact	
        SENAO204M050: null, //Bill-To Information TEL
        SENAO204M039: null, //Bill-To Information E-mail	
        SENAO204M017: null, //Ship-To Information Attention	 
        SENAO204M020: '14764', //Ship-To Address=>User Defined – USA
       // SENAO204M018: value['Shipping Address 1']?String(value['Shipping Address 1']):null, //Shipping Address 1
        SENAO204M018: '207 Boren Ave. N.', //Shipping Address 1
        SENAO204M019: value['Shipping City']?String(value['Shipping City']):null, //Shipping City
        SENAO204M022: value['Shipping Postal Code']?String(value['Shipping Postal Code']):null, //Shipping Postal Code
        SENAO204M023: value['Shipping Country Code']?String(value['Shipping Country Code']):null, //Shipping Country Code
        SENAO204M021: value['Shipping State']?String(value['Shipping State']):null, //Shipping State
        // SENAO204M025: String(value['Buyer Email']), //Ship-To Information E-mail(N)
        SENAO204M025: null, //Ship-To Information E-mail(N)
        SENAO204M051: null, //Ship-To Information TEL

        SENAO204M026: FOB, //FOB
        SENAO204M048: 'Charge', //Freight Term
        SENAO204M030: null, //Customer Shipping Account:
        SENAO204M041: '0', //Freight Costs
        SENAO204M028: value['Carrier']?String(value['Carrier']):null , //Ship Via
        SENAO204M042: null, //Reseller Permit No	
        SENAO204M027: null, //Payment Term
        SENAO204M029: null, //Credit Card Type
        SENAO204M031: null, //Card Number
        SENAO204M033: null, //Expiration Date	
        SENAO204M034: null, //Expiration Date(YYYY)	
        SENAO204M036: null, //Card Holder Name
        SENAO204M038: null, //Authorization Code
        SENAO204M040: value['Tracking Number']?String(value['Tracking Number']):null , //Note
        __EMPTY: null

      };
      headitems.push(OrderId);
      headdata.push(head);
      rowid = 1;
    } else {

    }
    let filtered = griddata.filter(function (key) {
      return key.FORMSERIALNUMBER_1 === OrderId;
    });
    rowid = filtered.length + 1;
    let percentage = value['Item Price'] > 0 ? Math.round((value['Item Tax'] / value['Item Price']) * 100) : 0;
    result = ajaxGetData(invokeURL + 'BPM_CUST_PN_QUERY', {
      customer_number: customerNumber,
      cust_pn: value['Merchant SKU']?String(value['Merchant SKU']):null
    });
    let SENAO204D004 = null;
    if (result[0].result == undefined) {
      SENAO204D004 = result[0].ITEM;
    }

    //3.建立Grid  
    let row = {
      FORMSERIALNUMBER_1: OrderId,
      SENAO204D003: rowid,	//NO.
      SENAO204D004: SENAO204D004,	//ITEM NO(R)
      SENAO204D006: value['Shipped Quantity']?String(value['Shipped Quantity']):null,	//QTY(T)
      SENAO204D008: value['Item Price'] / value['Shipped Quantity'],	//U/P(W)
      // SENAO204D010: value['Purchase Date'],	//REQUEST_DATE
      // SENAO204D011: value['Shipment Date'],	//SCHEDULE_SHIP_DATE(L)
      SENAO204D010: Today,	//REQUEST_DATE
      SENAO204D011: Today,	//SCHEDULE_SHIP_DATE(L)
      SENAO204D012: null,    //NOTE
      //SENAO204D016: percentage + '%'     //TAX CODE
      SENAO204D016: '0%'     //TAX CODE

    };

    griddata.push(row);
    rowid++;

  });
  console.log(headdata);
  console.log(griddata);
  let obj = {};
  for (let i = 0; i < griddata.length; i++) {
    if (i < headdata.length) {
      obj = $.extend({}, headdata[i], griddata[i]);

    } else {
      obj = $.extend({}, headspace, griddata[i])
    }

    msg.push(obj);
  }

  return msg;

}
function excelInPutUI(data) { //批次上傳匯入資料
  let head = data.head;
  let detail = data.detail;
  let status = true; //是否有錯誤
  let errorLog = []; // 收集錯誤訊息
  let formSerialNumber_1 = head.FORMSERIALNUMBER_1 || 'Unknown'; // 取得單號

  // 第一階段: 設定表頭值
  $.each(head, function (key, value) { //設定Head
    if (value == null || value == undefined) {
      value = "";
    }
    $('#jcimp_flag').prop("checked", true); //設定多筆匯入標示
    switch (key) {
      case 'SUBJECT': //主旨
        $("#subject").val(value);
        break;
      case 'FORM_OU': //公司別
        if (changeOptionMethod('form_ou', value)) {
          $('#form_ou').trigger('change');
        } else {
          console('FORM_OU', value);
          errorLog.push(`[${formSerialNumber_1}] [Company]Can't be blank!!`);
          status = false;
          return false;
        }
        break;
      case 'FORM_ORG': //廠區別
        if (changeOptionMethod('form_org', value)) {
          $('#form_org').trigger('change');
        } else {
          errorLog.push(`[${formSerialNumber_1}] [Factory]Can't be blank!!`);
          status = false;
          return false;
        }
        break;
      case 'SENAO204M008': //Customer Number_id 必填
        $('#senao204m008').val(value);
        if (!senao204m008_onChange()) {
          errorLog.push(`[${formSerialNumber_1}] senao204m008_onChange() return false!!`);
          status = false;
          return false;
        } else { //20260205 jC add for AMAZON.COM
          if (value == '10950') {
            console.log('設定Sales Tax Rate 0%')
            senao204m035.value = '0%';
          }
        }
        break;
      /* senao204m008_onChange會自動帶入
      case 'SENAO204M009': //Customer Number
        $('#senao204m009').val(value);
        if (!senao204m008_onChange()) {
          status = false;
          return status;
        }        
        break;
      */
      /* senao204m003_onChange()會帶入
      case 'SENAO204M005': //Department_id
        $('#senao204m005').val(value);
        applicantDept = value;
        break;
      case 'SENAO204M006': //Department
        $('#senao204m006').val(value);
        break;
      */
      case 'SENAO204M003': //Sales Person_id 必填
        //senao204m008_onChange可能會帶入
       
        if (senao204m003.value == "" || value !== senao204m003.value) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m003').val(value);
          if (!senao204m003_onChange()) {//避免onchange執行有錯誤
            errorLog.push(`[${formSerialNumber_1}] senao204m003_onChange() return false!!`);
            status = false;
            return false;
          }
        }
        applicant = $('#senao204m003').val();
        applicantDept = $('#senao204m005').val();
        break;
      /* senao204m003_onChange()會帶入
      case 'SENAO204M006': //Sales Person
        $('#senao204m006').val(value);
        break;
      */
      //senao204m008_onChange可能會帶入 必填
      case 'SENAO204M011': //Order Type
        $('#senao204m011').val(value);
        break;
      case 'SENAO204M012': //Customer PO 必填
        $('#senao204m012').val(value);
        break;
      case 'SENAO204M049': //RMA Type
        $('#senao204m049').val(value);
        break;
      case 'PRICE_LIST': //Price_List
        $('#Price_List').val(value);
        break;
      case 'SENAO204M013': //Bill-To Information Attention
        $('#senao204m013').val(value);
        break;
      // senao204m008_onChange 有可能會順便帶入
      case 'SENAO204M015': //Bill-To Information Contact
        if (senao204m015.value == "" || (value !== senao204m015.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m015').val(value);
        }
        break;
      // senao204m008_onChange 有可能會順便帶入
      case 'SENAO204M050': //Bill-To Information TEL
        if (senao204m050.value == "" || (value !== senao204m050.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m050').val(value);
        }
        break;
      // senao204m008_onChange 有可能會順便帶入
      case 'SENAO204M039': //Bill-To Information E-mail
        if (senao204m039.value == "" || (value !== senao204m039.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m039').val(value);
        }
        break;
      case 'SENAO204M017': //Ship-To Information Attention
        $('#senao204m017').val(value);
        break;
      //JC Add 20260225 Amazon多筆匯入新增 START
      case 'SENAO204M020': // Ship-To Address
        $('#senao204m020').val(value);
        senao204m020_onChange();
        break;
      case 'SENAO204M018': // Shipping Address 1
        if (value) {
          $('#senao204m018').val(value);
        }

        break;

      case 'SENAO204M023': //Shipping Country Code
        $('#senao204m023').val(value);
        senao204m023_onChange();
        break;

      case 'SENAO204M019': // Shipping City
        $('#senao204m019').val(value);
        break;

      case 'SENAO204M022': // Shipping Postal Code
        $('#senao204m022').val(value);
        break;
      case 'SENAO204M021': // Shipping State
         if (value) {
          $('#senao204m021').val(value);
        }
        break;
      //JC Add 20260225 Amazon多筆匯入新增 END
      // senao204m008_onChange 有可能會順便帶入 
      case 'SENAO204M051': //Ship-To Information TEL
        if (senao204m051.value == "" || (value !== senao204m051.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m051').val(value);
        }
        break;
      case 'SENAO204M026': //FOB 必填
        //senao204m008_onChange可能會帶入
        if (senao204m026.value == "" || (value !== senao204m026.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m026').val(value);
        }
        break;
      //senao204m008_onChange可能會帶入
      case 'SENAO204M048': //Freight Term 
        if (senao204m048.value == "" || (value !== senao204m048.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m048').val(value);
        }
        break;
      //senao204m008_onChange可能會帶入
      case 'SENAO204M030': //Customer Shipping Account: 必填
        if (senao204m030.value == "" || (value !== senao204m030.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m030').val(value);
        }
        break;
      case 'SENAO204M041': //Freight Costs 必填
        if (senao204m030.value == "") {
          $('#senao204m041').val(value);
        }
        break;
      //senao204m008_onChange會自動帶入
      case 'SENAO204M028': //Ship Via
        $('#senao204m028').val(value);
        break;
      /* senao204m008_onChange 中觸發senao204m021_onChange()會給值
     case 'SENAO204M035': //Sales Tax Rate
       $('#senao204m035').val(value);
       break;
     */
      case 'SENAO204M042': //Reseller Permit No 必填
        $('#senao204m042').val(value);
        break;
      // senao204m008_onChange會自動帶入
      case 'SENAO204M027': //Payment Term
        if (senao204m027.value == "" || (value !== senao204m027.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#senao204m027').val(value);
        }
        break;
      case 'SENAO204M029': //Credit Card Type
        $('#senao204m029').val(value);
        break;
      case 'SENAO204M031': //Card Number 必填
        $('#senao204m031').val(value);
        break;
      case 'SENAO204M033': //Expiration Date
        $('#senao204m033').val(value);
        break;
      case 'SENAO204M034': //Expiration Date(YYYY) 必填
        $('#senao204m034').val(value);
        break;
      case 'SENAO204M036': //Card Holder Name 必填
        $('#senao204m036').val(value);
        break;
      case 'SENAO204M038': //Authorization Code 必填
        $('#senao204m038').val(value);
        break;
      case 'SENAO204M040': //Note
        $('#senao204m040').val(value);
        break;
    }
  });
  // 第二階段: 處理明細資料
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
          errorLog.push(`[${formSerialNumber_1}] Detail row ${i + 1}, item ${j + 1} validation failed`);
          break;
        }
        var errorMsg = "";
        errorMsg = chkGrid1Value();//檢查欄位是否有空
        if (errorMsg != "") {
          //alert(errorMsg);
          errorLog.push(`[${formSerialNumber_1}] item ${j + 1}  errorMsg: ${errorMsg}`);
          //return false;
        } else {
          rowArray.push(getRowData(i, j + 1)); //新增欄位到grid data
          console.time('clearBinding');
          clearBinding(0); //新增後清除Binding欄位資料
          console.timeEnd('clearBinding');
          Calc_Grid_Total();
          resetGridHelpColsProperty();
        }
      }
      setGridData(i, rowArray);
      //檢查資料
      console.time('calculateTotalAmount_TotalTax');
    }
  }
  // 第三階段: 統一在 formSaveForBatch 中驗證所有欄位
  if (status) {
    status = formSaveForBatch(errorLog, formSerialNumber_1);
  }

  // 如果有錯誤,一次性顯示
  if (errorLog.length > 0) {
    //console.error('=== Excel Import Errors ===');
    //errorLog.forEach(msg => console.error(msg));
    alert(errorLog.join('\n'));
  }
  return status;
}
function gridRowChk(index, row) { //批次上傳單身
  let status = true; //是否有錯誤
  let dateStr = '';
  $.each(row, function (key, value) { //設定Head

    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    switch (key) {
      case 'SENAO204D004': //ITEM NO
        $('#gsenao204d004').val(value);
        if (!gsenao204d004_onChange()) {
          //Price_List給gsenao204d017(ITEM_PRICE_LIST)值
          //可能會帶入gsenao204d004_ORA、gsenao204d005(DESCRIPTION)、gsenao204d014(US ITEM)、gsenao204d015(US ITEM DESC) or 清空
          //觸發gsenao204d004_onChange2 帶出gsenao204d013(ITEM_PRICE_LIST)、gsenao204d008(U/P)
          errorLog.push(`[${formSerialNumber_1}] gsenao204d004_onChange() return false!!`);
          status = false;
          return status;
        }
        break;
      case 'SENAO204D006': //QTY 必填
        $('#gsenao204d006').val(value);
        break;
      //gsenao204d004_onChange中觸發gsenao204d004_onChange2可能會帶入 必填
      case 'SENAO204D008': //U/P
        if (gsenao204d008.value == "" || (value !== gsenao204d008.value && value !== "")) {//如果為空或者跟excel值不一樣才帶入
          $('#gsenao204d008').val(value);
        }
        break;
      case 'SENAO204D010': //REQUEST_DATE
        if (value instanceof Date) {
          let year = value.getFullYear();
          let month = String(value.getMonth() + 1).padStart(2, '0');
          let day = String(value.getDate()).padStart(2, '0');
          dateStr = year + '-' + month + '-' + day;
        } else {
          dateStr = value;  // 如果不是 Date 物件，直接使用
        }
        gsenao204d010.value = dateStr;
        break;
      case 'SENAO204D011': //SCHEDULE_SHIP_DATE
        if (value instanceof Date) {
          let year = value.getFullYear();
          let month = String(value.getMonth() + 1).padStart(2, '0');
          let day = String(value.getDate()).padStart(2, '0');
          dateStr = year + '-' + month + '-' + day;
        } else {
          dateStr = value;  // 如果不是 Date 物件，直接使用
        }
        gsenao204d011.value = dateStr;
        break;
      case 'SENAO204D012': //NOTE
        $('#gsenao204d012').val(value);
        break;
      case 'SENAO204D016': //TAX CODE
        $('#gsenao204d016').val(value);
        if (!Cal_Grid_SubTotal()) {
          errorLog.push(`[${formSerialNumber_1}] Cal_Grid_SubTotal() return false!!`);
          status = false;
          return status;
        }
        break;
    }
  });
  return status;
}
function formSaveForBatch(errorLog, formSerialNumber_1) {
  // 檢查必填欄位
  if ($("#form_org").val() == "") {
    errorLog.push(`[${formSerialNumber_1}] [Factory]Can't be blank!!`);
  }

  if (senao204m003.value.trim() == "") {
    errorLog.push(`[${formSerialNumber_1}] [Sales Person ID]Can't be blank!!`);
  }

  if (senao204m003_ORA.value.trim() == "") {
    errorLog.push(`[${formSerialNumber_1}] Can't find Ship TO Default ORACLE SALES ID !!!`);
  }

  // Freight Costs 檢查
  senao204m030.value = senao204m030.value.trim();
  senao204m041.value = senao204m041.value.trim();
  if (senao204m030.value == "") {
    if (senao204m041.value == "") {
      errorLog.push(`[${formSerialNumber_1}] [Freight Costs]Can't be blank!!`);
    } else if (!isNumeric(senao204m041.value)) {
      errorLog.push(`[${formSerialNumber_1}] [Freight Costs]Must be Numeric!!`);
    }
  }

  // Customer PO 檢查
  if (senao204m012.value.trim() == "") {
    errorLog.push(`[${formSerialNumber_1}] [Customer PO]Can't be blank!!`);
  } else {
    var strDuplicateEFNO = checkCustomerPoCount();
    if (strDuplicateEFNO != "") {
      if (SERIALNUMBER != "" && SERIALNUMBER != strDuplicateEFNO) {
        errorLog.push(`[${formSerialNumber_1}] [Customer PO]This number(${senao204m012.value}) already have been in use(EF-${strDuplicateEFNO})!!`);
      } else if (SERIALNUMBER == "") {
        errorLog.push(`[${formSerialNumber_1}] [Customer PO]This number(${senao204m012.value}) already have been in use(EF-${strDuplicateEFNO})!!`);
      }
    }
  }

  // Ship Via 檢查
  if (senao204m028.value == "" && senao204m011.value.indexOf("License") == -1) {
    errorLog.push(`[${formSerialNumber_1}] [Ship Via]Can't be blank!!!`);
  }

  if (senao204m035.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Sales Tax Rate]Can't be blank!!!`);
  }

  if (senao204m026.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [FOB]Can't be blank!!!`);
  }

  if (senao204m003.value == "" || senao204m004.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Sales Person]Can't be blank!!!`);
  }

  // Address 檢查
  if (senao204m043.value.trim() == "" || senao204m044.value.trim() == "") {
    errorLog.push(`[${formSerialNumber_1}] [Bill-To Address]is not complete!!`);
  }
  if (senao204m018.value.trim() == "" || senao204m019.value.trim() == "") {
    errorLog.push(`[${formSerialNumber_1}] [Ship-To Address]is not complete!!`);
  }

  var selectedValue14 = senao204m014[senao204m014.selectedIndex].text;
  var selectedValue20 = senao204m020[senao204m020.selectedIndex].text;

  // Payment Term 檢查
  if (senao204m027.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Payment Term]Can't be blank!!`);
  } else if (senao204m027.value == "Credit Card") {
    if (selectedValue20.indexOf("User Defined") > -1 && selectedValue20.indexOf("Credit Card") > -1) {
      if (senao204m029.value == "") {
        errorLog.push(`[${formSerialNumber_1}] [Credit Card Type]Can't be blank!!`);
      }
    } else {
      errorLog.push(`[${formSerialNumber_1}] [Payment Term]"Credit Card" Need [SHIP-To] be "User Defined - Credit Card"`);
    }
  } else if (senao204m027.value.indexOf("Secured") > -1) {
    if (senao204m029.value == "") {
      errorLog.push(`[${formSerialNumber_1}] [Credit Card Type]Can't be blank!!`);
    }
  } else {
    if (senao204m029.value != "" || senao204m031.value != "" || senao204m033.value != "" ||
      senao204m034.value != "" || senao204m036.value != "" || senao204m038.value != "") {
      errorLog.push(`[${formSerialNumber_1}] [Credit Card]Current Payment Term Can't key any Credit Card data, Please confirm your Payment Term!!`);
      senao204m029.value = "";
      senao204m031.value = "";
      senao204m033.value = "";
      senao204m034.value = "";
      senao204m036.value = "";
      senao204m038.value = "";
    }
  }

  if (selectedValue20.indexOf("User Defined") > -1 && selectedValue20.indexOf("Credit Card") > -1) {
    if (senao204m027.value != "" && senao204m027.value != "Credit Card") {
      errorLog.push(`[${formSerialNumber_1}] [Payment Term]must be "Credit Card"(User Defined - Credit Card)!!`);
    }
    if (selectedValue14.indexOf("User Defined") > -1 && selectedValue14.indexOf("Credit Card") > -1) {
    } else {
      errorLog.push(`[${formSerialNumber_1}] [Bill-To Address]must be (User Defined - Credit Card)!!`);
    }
  }

  // Reseller Permit 檢查
  if (senao204m021.value == "CA" || senao204m021.value == "VA" || senao204m021.value == "MI" ||
    senao204m021.value == "FL" || senao204m021.value == "IL" || senao204m021.value == "NY" ||
    senao204m021.value == "TX") {
    if (senao204m042.value == "" && senao204m035.value == "0%" && senao204m008.value != "10950") {
      errorLog.push(`[${formSerialNumber_1}] [Ship to Address- State in (CA,VA,MI,FL,IL,NY,TX)]No Reseller Permit No, Sales Tax can't be 0%!!`);
    }
  }

  // Credit Card 欄位檢查
  if (senao204m029.value != "") {
    if (senao204m031.value.trim() == "") {
      errorLog.push(`[${formSerialNumber_1}] [Card Number]Can't be blank!!`);
    }
    if (senao204m036.value.trim() == "") {
      errorLog.push(`[${formSerialNumber_1}] [Card Holder Name]Can't be blank!!`);
    }
    if (senao204m038.value.trim() == "") {
      errorLog.push(`[${formSerialNumber_1}] [Authorization Code]Can't be blank!!`);
    }
  }

  // Note 長度檢查
  var m040str = senao204m040.value.trim();
  senao204m040.value = m040str;
  var n040LenghORA = CountOracleCHT(m040str);
  if (n040LenghORA > 240) {
    errorLog.push(`[${formSerialNumber_1}] [Note]can't be more than 240 characters(Actual:${n040LenghORA})!!`);
  }

  // Order Type 檢查
  if (senao204m011.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Order Type]Can't be blank!!`);
  } else {
    senao204m011_onChange();
  }

  // License 相關檢查
  if (senao204m011.value.indexOf("License") > -1) {
    if (senao204m012.value == "") {
      errorLog.push(`[${formSerialNumber_1}] [Customer PO]Can't be blank!!`);
    }
    if (senao204m025.value == "") {
      errorLog.push(`[${formSerialNumber_1}] Ship-To [E-mail]Can't be blank!!`);
    } else {
      var senao204m025_split = senao204m025.value.split(',');
      var senao204m025_format = "Y";
      for (var i = 0; i < senao204m025_split.length; i++) {
        if (senao204m025_split[i].indexOf("@") == -1) {
          senao204m025_format = "N";
          break;
        }
      }
      if (senao204m025_format == "N") {
        errorLog.push(`[${formSerialNumber_1}] Please check Ship-To [E-mail] format!!`);
      }
    }
    senao204m011_License.value = "Y";
  } else {
    senao204m011_License.value = "N";
  }

  // Grid 資料檢查
  var gridData = getGridData(0);
  if (gridData.length == 0) {
    errorLog.push(`[${formSerialNumber_1}] [Detail Data]Can't be blank!!`);
  } else {
    for (var i = 0; i < gridData.length; i++) {
      var row = i + 1;

      if (gridData[i].SENAO204D005.trim() == "") {
        errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[DESCRIPTION] Must have value !!`);
      }

      if (gridData[i].SENAO204D006.trim() == "") {
        errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[QTY] Must have value !!`);
      } else {
        if (isNumeric(gridData[i].SENAO204D006.trim())) {
          if (gridData[i].SENAO204D006.trim() == "0") {
            errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[QTY] Can't be ZERO !!`);
          }
          if (gridData[i].SENAO204D006.trim().indexOf(".") > -1) {
            errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[QTY] Can't be Float !!`);
          }
        } else {
          errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[QTY] Must be Numeric !!`);
        }
      }

      if (gridData[i].SENAO204D008.trim() == "") {
        errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[U/P]Must have value !!`);
        break;
      } else if (!isNumeric(gridData[i].SENAO204D008.trim())) {
        errorLog.push(`[${formSerialNumber_1}] NO.${row} Data[U/P]Must be Numeric !!`);
        break;
      } else {
        if ((parseFloat(gridData[i].SENAO204D008) + 0.1 < parseFloat(gridData[i].SENAO204D013) + 0.1) ||
          gridData[i].SENAO204D013.trim() == "") {
          IsUP_Less_PriceList.value = "Y";
          break;
        } else {
          IsUP_Less_PriceList.value = "N";
        }
      }

      // 檢查 ITEM NO
      var sqlId2 = "BPM_ERP_SENAO204_12";
      var data2 = ajaxGetData(invokeURL + sqlId2, { p: gridData[i].SENAO204D004.trim() });
      if (data2[0].result == undefined) {
        if (data2.length > 0 && senao204m011.value.indexOf("License") == -1) {
          errorLog.push(`[${formSerialNumber_1}] NO.${row} When [Order Type] isn't License, can't choose this [ITEM NO](${gridData[i].SENAO204D004.trim()})!!`);
        } else if (data2.length == 0 && senao204m011.value.indexOf("License") > -1) {
          errorLog.push(`[${formSerialNumber_1}] NO.${row} When Order Type is License, can't choose this ITEM NO(${gridData[i].SENAO204D004.trim()})!!`);
        }
      }
    }
  }

  // Payment term 修改檢查
  if (senao204m027_NEW.value != senao204m027_ORA.value) {
    IsPaymentTermModified.value = "Y";
  } else {
    IsPaymentTermModified.value = "N";
  }

  // 取得 Bill-To 和 Ship-To ID
  getBillTo_ShipTo_site_use_id();
  if (senao204m014_ORA.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Bill-To Address ID]Can't be blank!! Please contact MIS!!`);
  }
  if (senao204m020_ORA.value == "") {
    errorLog.push(`[${formSerialNumber_1}] [Ship-To Address ID]Can't be blank!! Please contact MIS!!`);
  }

  // 如果沒有錯誤,執行最後處理
  if (errorLog.length == 0) {
    Calc_Grid_Total();
    clearBinding(0);
    //genSubject(); excel已經輸入主旨
    prepareForMobile();
    return true;
  } else {
    resetGridHelpColsProperty();
    return false;
  }
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
        FORMSERIALNUMBER: $('#senao204m002').val()
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
    gridcolModel = $grid.getGridParam("colModel") || [];
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
      let element = document.querySelector("*[name='" + binding[i] + "']");
      value = $("*[name='" + binding[i] + "']").val();

      if (value == undefined) {
        value = "";
      } else if (element && element.type === 'date' && value) {
        // 如果是 date 類型，轉換格式 yyyy-mm-dd → yyyy/mm/dd
        value = value.replace(/-/g, '/');
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
function chkGrid1Value() {
  var errMsg = "";
  if (senao204m035.value.trim() == "") {
    errMsg += "FORM[Sales Tax Rate]can't be blank!!\n";
  }

  if (gsenao204d004.value.trim() == "") {
    errMsg += "DATA[Item NO]can't be blank!!\n";
  }

  if (gsenao204d016.value.trim() == "") {
    errMsg += "DATA[Tax Code]can't be blank!!\n";
  }

  if (gsenao204d006.value.trim() == "") {
    errMsg += "DATA[QTY]Can't be ZERO!!\n";
  }
  return errMsg;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {

}
/*---------------------JqGrid Function End--------------*/
/*---------------------Button Function Start--------------*/
$('#senao204m008_b1').on('click', function () { //Customer Number開窗
  // sessionStorage 存入數據
  let tTitle = "Customer Number";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m008", "senao204m009", "senao204m008_ORA");//回傳元件參數
  let tReturnFunction = new Array("senao204m008_onChange()"); //回傳函數
  let tColAPi = "BPM_ERP_LA_SYS_LW_OracleCustomer";
  let tAPI = invokeURL + 'BPM_ERP_LA_SYS_LW_OracleCustomer';
  let tParameter = { OU_ID: OU_ID, CNUM: null, CNAME: null };
  let tQBEField = { CNUM: 'CUSTOMER_NUMBER', CNAME: 'CUSTOMER_NAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao204m003_b1').on('click', function () { //Sales Person開窗
  // sessionStorage 存入數據
  let tTitle = "負責業務";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m003", "senao204m004", "senao204m003_ORA");//回傳元件參數
  let tReturnFunction = new Array("senao204m003_onChange()"); //回傳函數
  let tColAPi = "BPM_ERP_SUS204_SALESREP_Org2";
  let tAPI = invokeURL + 'BPM_ERP_SUS204_SALESREP_Org2';
  let tParameter = { OU_ID: OU_ID, SALESREP_NUMBER: null, LAST_NAME: null };
  let tQBEField = { SALESREP_NUMBER: 'SALESREP_NUMBER', LAST_NAME: 'LAST_NAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao204m011_b1').on('click', function () { //Order Type開窗
  // sessionStorage 存入數據
  let tTitle = "Order Type";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m011", "senao204m011_ORA");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_OrderTypeS";
  let tAPI = invokeURL + 'BPM_ERP_OrderTypeS';
  let tParameter = { OU_ID: OU_ID, NAME: null, TRANSACTION_TYPE_ID: null, p_access_mode: 'S', p_org_id: OU_ID };
  let tQBEField = { NAME: 'NAME', TRANSACTION_TYPE_ID: 'TRANSACTION_TYPE_ID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#Price_List_b1').on('click', function () { //Price_List開窗
  // sessionStorage 存入數據
  let tTitle = "Price_List";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("Price_List", "Price_List_ORA");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_SENAO156_13";
  let tAPI = invokeURL + 'BPM_ERP_SENAO156_13';
  let tParameter = { NAME: null };
  let tQBEField = { NAME: 'NAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m026_b1').on('click', function () { //FOB開窗
  // sessionStorage 存入數據
  let tTitle = "FOB";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m026");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_TradeTerm2";
  let tAPI = invokeURL + 'BPM_ERP_TradeTerm2';
  let tParameter = { LOOKUP_CODE: null, MEANING: null };
  let tQBEField = { LOOKUP_CODE: 'LOOKUP_CODE', MEANING: 'MEANING' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m048_b1').on('click', function () { //FreightTerm開窗
  // sessionStorage 存入數據
  let tTitle = "FreightTerm";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m048", "senao204m048_ORA");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_FreightTerm";
  let tAPI = invokeURL + 'BPM_ERP_FreightTerm';
  let tParameter = { MEANING: null, LOOKUP_CODE: null };
  let tQBEField = { MEANING: 'MEANING', LOOKUP_CODE: 'LOOKUP_CODE' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m028_b1').on('click', function () { //ShipVia開窗
  // sessionStorage 存入數據
  let tTitle = "ShipVia";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m028", "senao204m028_Name");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_ShipVia";
  let tAPI = invokeURL + 'BPM_ERP_ShipVia';
  let tParameter = { SHIPPING_METHOD: null, DESCRIPTION: null };
  let tQBEField = { SHIPPING_METHOD: 'SHIPPING_METHOD', DESCRIPTION: 'DESCRIPTION' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m035_b1').on('click', function () { //TaxRate開窗
  // sessionStorage 存入數據
  let tTitle = "TaxRate";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m035");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_TaxRate";
  let tAPI = invokeURL + 'BPM_ERP_TaxRate';
  let tParameter = { OU_ID: OU_ID, TAX_CODE: null, TAX_RATE: null, p_access_mode: 'S', p_org_id: OU_ID };
  let tQBEField = { TAX_CODE: 'TAX_CODE', TAX_RATE: 'TAX_RATE' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m027_b1').on('click', function () { //Payment Term開窗
  // sessionStorage 存入數據
  let tTitle = "Payment Term";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m027", "", "senao204m027_NEW");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_SUS204_PaymentTerm_AR";
  let tAPI = invokeURL + 'BPM_ERP_SUS204_PaymentTerm_AR';
  let tParameter = { OU_ID: OU_ID, NAME: null, DESCRIPTION: null };
  let tQBEField = { NAME: 'NAME', DESCRIPTION: 'DESCRIPTION' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#senao204m029_b1').on('click', function () { //Credit Card Type開窗
  // sessionStorage 存入數據
  let tTitle = "Credit Card Type";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("senao204m029", "", "senao204m029_ORA");//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SUS204_PmtType";
  let tAPI = invokeURL + 'BPM_SUS204_PmtType';
  let tParameter = { SENAO201_PMT001: null };
  let tQBEField = { SENAO201_PMT001: 'SENAO201_PMT001' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#gsenao204d004_b1').on('click', function () { //ITEM NO開窗
  if ($("#form_org").val() == "") {
    alert("[Factory]Can't be blank!!\n");
    return false;
  }
  ORG_ID = _ORG[$("#form_org").val()];
  var tColAPi = "";
  let tAPI = invokeURL;
  if (form_ou.value == "sus") {
    tColAPi = "BPM_ERP_SUS204_Material_US";
    tAPI = invokeURL + 'BPM_ERP_SUS204_Material_US';
  } else {
    tColAPi = "BPM_ERP_SUS204_Material_RBU";
    tAPI = invokeURL + 'BPM_ERP_SUS204_Material_RBU';
  }
  // sessionStorage 存入數據
  let tTitle = "Item";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("gsenao204d004", "gsenao204d005", "gsenao204d014", "gsenao204d015", "", "gsenao204d004_ORA");//回傳元件參數
  let tReturnFunction = new Array("gsenao204d004_onChange()"); //回傳函數
  let tParameter = { ORG_ID: ORG_ID, ITEM: null, SPEC: null, ENGENIUS_ITEM: null, ENGENIUS_SPEC: null };
  let tQBEField = { ITEM: 'ITEM', SPEC: 'SPEC', ENGENIUS_ITEM: 'ENGENIUS_ITEM', ENGENIUS_SPEC: 'ENGENIUS_SPEC' }; //查詢欄位 {參數欄位:table欄位};	
  pWidth = 1000;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$('#gsenao204d016_b1').on('click', function () { //TAX CODE開窗
  // sessionStorage 存入數據
  let tTitle = "TaxRate";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array("gsenao204d016");//回傳元件參數
  let tReturnFunction = new Array("Cal_Grid_SubTotal()"); //回傳函數
  let tColAPi = "BPM_ERP_TaxRate";
  let tAPI = invokeURL + 'BPM_ERP_TaxRate';
  let tParameter = { OU_ID: OU_ID, TAX_CODE: null, TAX_RATE: null, p_access_mode: 'S', p_org_id: OU_ID };
  let tQBEField = { TAX_CODE: 'TAX_CODE', TAX_RATE: 'TAX_RATE' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);

});
$("#Attachment").on("click", function () { //附件上傳
  window.open("/BPMWeb/Attachment.html", "", "width=" + pWidth + ",height=" + pHeight + ",resizable=1");
});
/*---------------------Button Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
function senao204m047_onChange() {
  //DWRUtil.removeAllOptions("senao204m045");
  document.getElementById("senao204m045").innerHTML = "";
  if (senao204m047.value == "US") {
    getStateOptions("senao204m045");
  }
}
function senao204m023_onChange() {
  //DWRUtil.removeAllOptions("senao204m021");
  document.getElementById("senao204m021").innerHTML = "";
  if (senao204m023.value == "US") {
    getStateOptions("senao204m021");
  }
}
function senao204m008_onChange() {
  //DWRUtil.removeAllOptions("senao204m014"); //先移除[Bill TO]下拉式選單內容
  document.getElementById("senao204m014").innerHTML = "";
  //DWRUtil.removeAllOptions("senao204m020"); //先移除[Ship TO]下拉式選單內容
  document.getElementById("senao204m020").innerHTML = "";
  var data = queryCustomer_204_01A(senao204m008.value);
  console.log('data', data)

  if (data.length > 0) {
    var customer_name = "";
    var customer_id = "";
    senao204m009.value = fixNull(data[0].CUSTOMER_NAME);//Customer Number
    senao204m008_ORA.value = fixNull(data[0].CUSTOMER_ID);
    senao204m016.value = senao204m009.value;//Ship-To Company Name
    senao204m052.value = senao204m009.value;//Bill-To Company Name
    senao204m028.value = "";//Ship Via
    for (var i = 0; i < data.length; i++) {
      var primary_flag = fixNull(data[i].PRIMARY_FLAG);
      var site_use_id = fixNull(data[i].SITE_USE_ID);
      var site_use_code = fixNull(data[i].SITE_USE_CODE);
      var address2 = fixNull(data[i].ADDRESS2);
      var location = fixNull(data[i].LOCATION_1);
      var jsonVariable = {};
      jsonVariable[site_use_id] = address2;
      switch (site_use_code) {
        case "BILL_TO":
          // DWRUtil.addOptions("senao204m014", jsonVariable);
          var select = document.getElementById("senao204m014");
          for (var key in jsonVariable) {
            var option = document.createElement("option");
            option.value = key;
            option.text = jsonVariable[key];
            select.appendChild(option);
          }
          if (primary_flag == "Y") {
            senao204m011.value = fixNull(data[i].ORDER_TYPE_NAME); //order_type_name
            senao204m011_ORA.value = fixNull(data[i].ORDER_TYPE_ID); //order_type_id
            senao204m015.value = fixNull(data[i].LAST_NAME); //last_name
            senao204m039.value = fixNull(data[i].EMAIL_ADDRESS); //EMAIL_ADDRESS
            senao204m050.value = fixNull(data[i].PHONE_NUM); //phone_num
          }
          senao204m047.value = fixNull(data[i].COUNTRY); //country
          //取得下拉現有選項值
          var senao204m047_ExistVal = [];
          for (var j = 0; j < senao204m047.options.length; j++) {
            senao204m047_ExistVal.push(senao204m047.options[j].value);
          }
          if (!senao204m047_ExistVal.includes(data[i].COUNTRY)) {
            var jsonVariable_m047 = {};
            jsonVariable_m047[data[i].COUNTRY] = data[i].COUNTRY;
            //DWRUtil.addOptions("senao204m047", jsonVariable_m047);
            var select = document.getElementById("senao204m047");
            for (var key in jsonVariable_m047) {
              var option = document.createElement("option");
              option.value = key;
              option.text = jsonVariable_m047[key];
              select.appendChild(option);
            }
          }
          //DWRUtil.setValue("senao204m014", site_use_id);
          document.getElementById("senao204m014").value = site_use_id;
          break;
        case "SHIP_TO":
          var shipToAddress = "[" + location + "]-" + address2;
          //DWRUtil.addOptions("senao204m020", jsonVariable);
          var select = document.getElementById("senao204m020");
          for (var key in jsonVariable) {
            var option = document.createElement("option");
            option.value = key;
            option.text = jsonVariable[key];
            select.appendChild(option);
          }
          if (primary_flag == "Y") {
            //DWRUtil.setValue("senao204m020", site_use_id);
            document.getElementById("senao204m020").value = site_use_id;
          }
          senao204m023.value = fixNull(data[i].COUNTRY); //country
          //取得下拉現有選項值
          var senao204m023_ExistVal = [];
          for (var j = 0; j < senao204m023.options.length; j++) {
            senao204m023_ExistVal.push(senao204m023.options[j].value);
          }
          if (!senao204m023_ExistVal.includes(data[i].COUNTRY)) {
            var jsonVariable_m023 = {};
            jsonVariable_m023[data[i].COUNTRY] = data[i].COUNTRY;
            //DWRUtil.addOptions("senao204m023", jsonVariable_m023);
            var select = document.getElementById("senao204m023");
            for (var key in jsonVariable_m023) {
              var option = document.createElement("option");
              option.value = key;
              option.text = jsonVariable_m023[key];
              select.appendChild(option);
            }
          }
          break;
      }
      if (fixNull(data[i].SHIP_VIA) != "") {
        senao204m028.value = fixNull(data[i].SHIP_VIA); //ship via
      }
    } //end of for (var i = 0; i < data.length; i++) {

    //DWRUtil.setValue("senao204m014", primary_site_use_id_BillTo);
    //DWRUtil.setValue("senao204m020", primary_site_use_id_ShipTo);
    //senao204m014.value = primary_site_use_id_BillTo;
    //senao204m020.value=primary_site_use_id_ShipTo;
    senao204m014_onChange();//把Bill-To Address拆開到各個欄位senao204m043~senao204m046
    senao204m020_onChange();

    getBillTo_ShipTo_site_use_id();
  } else {
    alert("No Customer Data!!!");
    senao204m008.value = "";
    senao204m003.value = "";
    senao204m003_ORA.value = "";
    senao204m004.value = "";
    senao204m005.value = "";
    senao204m006.value = "";
    senao204m011.value = "";
    senao204m011_ORA.value = "";
    senao204m016.value = "";
    senao204m052.value = "";
    senao204m018.value = "";
    senao204m043.value = "";
    senao204m022.value = "";
    senao204m026.value = "";
    senao204m027.value = "";
    senao204m027_ORA.value = "";
    senao204m027_NEW.value = "";
    senao204m035.value = "0%";
    senao204m042.value = "";
    senao204m046.value = "";
    senao204m015.value = "";
    senao204m039.value = "";
    senao204m025.value = "";
    senao204m026.value = "";
    senao204m048.value = "";
    senao204m048_ORA.value = "";
    senao204m030.value = "";
    senao204m028.value = "";
    //DWRUtil.setValue("senao204m014", "");
    document.getElementById("senao204m014").value = "";
    //DWRUtil.setValue("senao204m020", "");
    document.getElementById("senao204m020").value = "";

    //DWRUtil.removeAllOptions("senao204m021");
    document.getElementById("senao204m021").innerHTML = "";
    //DWRUtil.addOptions("senao204m021", {"===== State =====": "===== State ====="});
    var select = document.getElementById("senao204m021");
    var option = document.createElement("option");
    option.value = "===== State =====";
    option.text = "===== State =====";
    select.appendChild(option);
    //DWRUtil.removeAllOptions("senao204m045");
    document.getElementById("senao204m045").innerHTML = "";
    //DWRUtil.addOptions("senao204m045", { "===== State =====": "===== State ====="});
    var select = document.getElementById("senao204m045");
    var option = document.createElement("option");
    option.value = "===== State =====";
    option.text = "===== State =====";
    select.appendChild(option);

    //DWRUtil.removeAllOptions("senao204m023");
    document.getElementById("senao204m023").innerHTML = "";
    //DWRUtil.addOptions("senao204m023", { "United States": "United States", "Taiwan": "Taiwan",	"US": "US","CA": "CA" });
    var options = {
      "United States": "United States",
      "Taiwan": "Taiwan",
      "US": "US",
      "CA": "CA"
    };

    var select = document.getElementById("senao204m023");

    for (var value in options) {
      if (options.hasOwnProperty(value)) {
        var option = document.createElement("option");
        option.value = value;
        option.text = options[value];
        select.appendChild(option);
      }
    }
    //DWRUtil.removeAllOptions("senao204m047");
    document.getElementById("senao204m047").innerHTML = "";
    //DWRUtil.addOptions("senao204m047", {"United States": "United States","Taiwan": "Taiwan","US": "US","CA": "CA" });
    var options = {
      "United States": "United States",
      "Taiwan": "Taiwan",
      "US": "US",
      "CA": "CA"
    };

    var select = document.getElementById("senao204m047");

    for (var value in options) {
      if (options.hasOwnProperty(value)) {
        var option = document.createElement("option");
        option.value = value;
        option.text = options[value];
        select.appendChild(option);
      }
    }

    senao204m030_onChange();
    // 清空 Grid
    var $grid = $("#" + frmGridList[0].gid);  // 或直接用 Grid ID
    $grid.jqGrid('clearGridData');  // 清空資料

    // 更新隱藏欄位
    var hiddenField = document.getElementById("Grid1");
    hiddenField.value = "[]";  // 空陣列字串
  } //end of else{
  return true;
}
//Bill To Address User Defined
function senao204m014_onChange() {
  var selectedValue0 = senao204m014[senao204m014.selectedIndex].text;
  if (selectedValue0.indexOf("User Defined") > -1) {
    senao204m043.readOnly = false;
    senao204m044.readOnly = false;
    senao204m045.disabled = false;
    senao204m046.readOnly = false;
    senao204m047.disabled = false;
  } else {
    senao204m043.readOnly = true;
    senao204m044.readOnly = true;
    senao204m045.disabled = true;
    senao204m046.readOnly = true;
    senao204m047.disabled = true;
  }

  var addStr = selectedValue0.split(",");
  //var tempCountry = "";
  var tempState = "";
  if (addStr.length == 5) {
    senao204m043.value = addStr[0].trim();
    senao204m044.value = addStr[1].trim();
    senao204m045.value = addStr[2].trim();
    senao204m046.value = addStr[3].trim();
    //senao204m047.value = addStr[4].trim();
    //tempCountry = addStr[4].trim();
    tempState = addStr[2].trim();
  } else if (addStr.length == 4) {
    senao204m043.value = addStr[0].trim();
    senao204m044.value = addStr[1].trim();
    senao204m045.value = addStr[2].trim();
    senao204m046.value = "";
    //senao204m047.value = addStr[3].trim();
    //tempCountry = addStr[3].trim();
    tempState = addStr[2].trim();
    // 20241018 Eason Marked 因為沒有宣告tempCountry這個參數，倒置報錯先註解起來
    // if (tempCountry != "US") {
    //     senao204m043.value = addStr[0].trim();
    //     senao204m044.value = addStr[1].trim();
    //     senao204m045.text = "";
    //     senao204m046.value = addStr[2].trim();
    //     //senao204m047.value = addStr[3].trim();
    // }
  } else if (addStr.length == 3) {
    senao204m043.value = addStr[0].trim();
    senao204m044.value = addStr[1].trim();
    senao204m045.value = "";
    senao204m046.value = "";
    //senao204m047.value = addStr[2].trim();
    //tempCountry = addStr[2].trim();
  } else if (addStr.length == 2) {
    senao204m043.value = addStr[0].trim();
    senao204m044.value = "";
    senao204m045.value = "";
    senao204m046.value = "";
    //senao204m047.value = addStr[1].trim();
    //tempCountry = addStr[1].trim();
  }

  /*if (senao204m047.value != tempCountry) {
      if (tempCountry != "United States") {
          var jsonVariable = {};
          jsonVariable[tempCountry] = tempCountry;
          DWRUtil.addOptions("senao204m047", jsonVariable);
      }
      senao204m047.value = tempCountry;
  }*/

  senao204m047_onChange();

  if (senao204m045.value != tempState) {
    var jsonVariable = {};
    jsonVariable[tempState] = tempState;
    //DWRUtil.addOptions("senao204m045", jsonVariable);
    var select = document.getElementById("senao204m045");
    for (var key in jsonVariable) {
      var option = document.createElement("option");
      option.value = key;
      option.text = jsonVariable[key];
      select.appendChild(option);
    }
    senao204m045.value = tempState;
  }
}
function senao204m020_onChange() {
  var selectedValue1 = senao204m020[senao204m020.selectedIndex].text;
  selectedValue1 = selectedValue1.substring(selectedValue1.indexOf("]-") + 1, selectedValue1.length);
  //Debug console(selectedValue1);
  //alert("selectedValue1:"+ selectedValue1);
  //alert("selectedValue1.indexOf(\"User Defined\"):"+ selectedValue1.indexOf("User Defined"));
  if (selectedValue1.indexOf("User Defined") > -1) {//User Defined Address
    senao204m018.readOnly = false;
    senao204m019.readOnly = false;
    senao204m021.disabled = false;
    senao204m022.readOnly = false;
    senao204m023.disabled = false;
    //Reset Sales Tax Rate and Permit No
    senao204m042.value = "";
    senao204m035.value = "0%";
    senao204m035_b1.disabled = false;
  } else {
    senao204m018.readOnly = true;
    senao204m019.readOnly = true;
    senao204m021.disabled = true;
    senao204m022.readOnly = true;
    senao204m023.disabled = true;
  }

  var addStr = selectedValue1.split(",");
  //var tempCountry = "";
  var tempState = "";
  senao204m018.value = addStr[0].trim();

  if (addStr.length == 5) {
    senao204m019.value = addStr[1].trim();
    senao204m021.value = addStr[2].trim();
    senao204m022.value = addStr[3].trim();
    //senao204m023.value = addStr[4].trim();
    //tempCountry = addStr[4].trim();
    tempState = addStr[2].trim();
  } else if (addStr.length == 4) {
    senao204m019.value = addStr[1].trim();
    senao204m021.value = addStr[2].trim();
    senao204m022.value = "";
    //senao204m023.value = addStr[3].trim();
    //tempCountry = addStr[3].trim();
    tempState = addStr[2].trim();
    // 20241018 Eason Marked 因為沒有宣告tempCountry這個參數，倒置報錯先註解起來
    // if (tempCountry != "US") {
    //     senao204m043.value = addStr[0].trim();
    //     senao204m044.value = addStr[1].trim();
    //     senao204m045.text = "";
    //     senao204m046.value = addStr[2].trim();
    //     //senao204m047.value = addStr[3].trim();
    // }
  } else if (addStr.length == 3) {
    senao204m019.value = addStr[1].trim();
    senao204m021.value = "";
    senao204m022.value = "";
    //senao204m023.value = addStr[2].trim();
    //tempCountry = addStr[2].trim();
  } else if (addStr.length == 2) {
    senao204m019.value = "";
    senao204m021.value = "";
    senao204m022.value = "";
    //senao204m023.value = addStr[1].trim();
    //tempCountry = addStr[1].trim();
  }

  /*if (senao204m023.value != tempCountry) {
      var jsonVariable = {};
      if (tempCountry != "United States") {
          jsonVariable[tempCountry] = tempCountry;
          DWRUtil.addOptions("senao204m023", jsonVariable);
      }
      senao204m023.value = tempCountry;
  }*/

  senao204m023_onChange();

  if (senao204m021.value != tempState) {
    var jsonVariable = {};
    jsonVariable[tempState] = tempState;
    //DWRUtil.addOptions("senao204m021", jsonVariable);
    var select = document.getElementById("senao204m021");
    for (var key in jsonVariable) {
      var option = document.createElement("option");
      option.value = key;
      option.text = jsonVariable[key];
      select.appendChild(option);
    }
    senao204m021.value = tempState;
  }

  senao204m021_onChange();

  //更新Sales Person(Department),E-mail,FOB,Payment Term,Tax code
  //alert(appendSQL);
  var data = queryCustomer_204_01B(senao204m008.value);
  //alert("data:"+ data);

  if (data.length > 0) {
    senao204m003.value = fixNull(data[0].SALESREP_NUMBER).substr(1, 6); //salesERP_Number
    senao204m003_ORA.value = fixNull(data[0].PRIMARY_SALESREP_ID); //primary_salesrep_id
    if (senao204m003.value != "") {
      senao204m003_onChange();//找出對應的名字及部門資訊
    } else {
      senao204m003.value = "";
      senao204m004.value = "";
      senao204m005.value = "";
      senao204m006.value = "";
    }
    senao204m026.value = fixNull(data[0].FOB_POINT);
    senao204m027.value = fixNull(data[0].PAYMENT_TERM_NAME);
    senao204m027_ORA.value = fixNull(data[0].PAYMENT_TERM_ID);
    senao204m027_NEW.value = fixNull(data[0].PAYMENT_TERM_ID);
    senao204m025.value = fixNull(data[0].EMAIL_ADDRESS);
    if (senao204m042.value == "") {
      senao204m035.value = fixNull(data[0].TAX_CODE);
    }
    senao204m048.value = fixNull(data[0].MEANING);
    senao204m048_ORA.value = fixNull(data[0].FREIGHT_TERM);
    senao204m030.value = fixNull(data[0].ATTRIBUTE19);
    senao204m051.value = fixNull(data[0].PHONE_NUM);
    senao204m030_onChange();
  }
  senao204m035_onChange();
  senao204m027_onChange();
}
function senao204m021_onChange() {
  var sqlId = "BPM_SUS204_03";
  var tParams = [];
  tParams.push(senao204m008.value);
  tParams.push(senao204m021.value);
  let data = ajaxGetData(invokeURL + sqlId, {
    SENAO204B001: tParams[0],
    SENAO204B002: tParams[1]
  });
  //alert("senao204m021_onchange():"+ data);
  if (data.length > 0) {
    senao204m042.value = data[0].PERMIT_NUM;
    senao204m035.value = "0%";
    senao204m035_b1.disabled = true;
  } else {
    senao204m042.value = "";
    senao204m035.value = "";
    senao204m035_b1.disabled = false;
  }
}
function senao204m003_onChange() {
  var userInfo = {};
  if ($("#senao204m003").val() != "") {
    userInfo = queryUserByEmpId($("#senao204m003").val());
    if (typeof userInfo.userId != "undefined") {
      $("#senao204m003").val(userInfo.userId); //申請人ID
      $("#senao204m004").val(userInfo.userName); //申請人名稱
      $("#senao204m005").val(userInfo.unitId); //申請單位ID
      $("#senao204m006").val(userInfo.unitName); //申請單位名稱
    } else {
      alert("Sales Person ID(:" + $("#senao204m003").val() + ") is not valid!!! \n");
      $("#senao204m003").val('');
      $("#senao204m004").val('');
      $("#senao204m005").val('');
      $("#senao204m006").val('');
    }
  } else {
    $("#senao204m003").val('');
    $("#senao204m004").val('');
    $("#senao204m005").val('');
    $("#senao204m006").val('');
  }

  var sqlId = "BPM_ERP_SUS204_SALESREP_Org1";
  var params = [];
  params.push(OU_ID);
  params.push(senao204m003.value); //Sales Person ID
  let data = ajaxGetData(invokeURL + sqlId, {
    OU_ID: params[0],
    senao204m003: params[1]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      //senao204m003_ORA.value = data[0].LAST_NAME; //jc 20260417 remark
      senao204m003_ORA.value = data[0].SALESREP_ID; //jc add 20260417
    } else {
      senao204m003_ORA.value = "";
    }
  }
  return true;
}
function senao204m030_onChange() {
  senao204m030.value = senao204m030.value.trim();
  if (senao204m030.value != "") {
    senao204m030.readOnly = false;
    senao204m041.readOnly = true;
    senao204m041.value = "";
  } else {
    senao204m041.readOnly = false;
  }
}
function senao204m035_onChange() {
  Calc_Grid_Total();
  if (senao204m035.value != "" && gsenao204d016.value != "") {
    gsenao204d016.value = senao204m035.value;
  }
}
function senao204m027_onChange() {
  var sqlId = "BPM_ERP_PaymentTerm_AR";
  var params = [];
  params.push(senao204m027_NEW.value);
  let data = ajaxGetData(invokeURL + sqlId, {
    p: params[0]
  });
  if (data[0].result == undefined) {
    if (data.length > 0) {
      senao204m027.value = data[0].NAME; //PaymentTerm Name
    } else {
      alert("Payment Term(" + senao204m027.value + ") is invalid!!!. Check the customer's Payment Term, Please!!!");
      senao204m027.value = "";
      senao204m027_NEW.value = "";
    }
  }
}
// gsenao204d004_b1 also Call this when it close;
function gsenao204d004_onChange() {
  if ($("#form_org").val() == "") {
    alert("[Factory]Can't be blank!!\n");
    gsenao204d004.value = ""; //ITEM NO
    return false;
  }
  ORG_ID = _ORG[$("#form_org").val()];
  gsenao204d017.value = Price_List.value;//20251128 Dillan add
  gsenao204d004.value = gsenao204d004.value.trim();
  if (gsenao204d004.value != "") {
    //20211022 Ann Add for Confirm ITEM NO can be selected
    var sqlId2 = "BPM_ERP_SENAO204_12";
    var params2 = [];
    params2.push(gsenao204d004.value); //ITEM NO
    let data2 = ajaxGetData(invokeURL + sqlId2, {
      p: params2[0]
    });
    if (data2[0].result == undefined) {
      if (data2.length > 0 && senao204m011.value.indexOf("License") == -1) { //選擇到Liense專用ITEM，且Order Type不為License
        alert("When Order Type isn't License, can't choose this ITEM NO(" + gsenao204d004.value + ")!");
        gsenao204d004.value = ""; //ITEM NO
        gsenao204d004_ORA.value = ""; //INVENTORY_ITEM_ID
        gsenao204d005.value = ""; //料號ITEM
        gsenao204d014.value = ""; //LA料號ITEM
        gsenao204d015.value = ""; //LA料號Desc
        return false;
      } else if (data2.length == 0 && senao204m011.value.indexOf("License") > -1) { //沒選到Liense專用ITEM，且Order Type為License
        alert("When Order Type is License, can't choose this ITEM NO(" + gsenao204d004.value + ")!");
        gsenao204d004.value = ""; //ITEM NO
        gsenao204d004_ORA.value = ""; //INVENTORY_ITEM_ID
        gsenao204d005.value = ""; //料號ITEM
        gsenao204d014.value = ""; //LA料號ITEM
        gsenao204d015.value = ""; //LA料號Desc
        return false;
      }
    }
    //get Item Info
    var sqlId = "BPM_ERP_SENAO204_08";
    var params = [];
    params.push(ORG_ID);
    params.push(gsenao204d004.value); //ITEM NO
    let data = ajaxGetData(invokeURL + sqlId, {
      ORG_ID: params[0],
      gsenao204d004: params[1]
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        var strINVENTORY_ITEM_STATUS_CODE = data[0].INVENTORY_ITEM_STATUS_CODE;
        if (strINVENTORY_ITEM_STATUS_CODE == "Active" || strINVENTORY_ITEM_STATUS_CODE == "PVT") {
          gsenao204d004_ORA.value = data[0].INVENTORY_ITEM_ID; //INVENTORY_ITEM_ID
          gsenao204d005.value = data[0].DESCRIPTION; //料號ITEM
          gsenao204d014.value = data[0].ATTRIBUTE5; //LA料號ITEM
          gsenao204d015.value = data[0].ATTRIBUTE13; //LA料號Desc
          gsenao204d004_onChange2();
        } else {
          alert("The Item NO is forbiden to order,contact PM please!");
          gsenao204d004.value = "";
          gsenao204d004_ORA.value = ""; //INVENTORY_ITEM_ID
          gsenao204d005.value = ""; //料號ITEM
          gsenao204d014.value = ""; //LA料號ITEM
          gsenao204d015.value = ""; //LA料號Desc
          return false;
        }
      } else {
        alert("Key in correct Item NO,Please.");
        gsenao204d004.value = "";
        gsenao204d004_ORA.value = ""; //INVENTORY_ITEM_ID
        gsenao204d005.value = ""; //料號ITEM
        gsenao204d014.value = ""; //LA料號ITEM
        gsenao204d015.value = ""; //LA料號Desc
        return false;
      }
    }
  }
  return true;
}
function gsenao204d004_onChange2() {
  if (gsenao204d004.value != "") {
    var sqlId = "BPM_ERP_SENAO204_09";
    var params = [];
    var customer_id = senao204m008_ORA.value;
    if (customer_id == "") {
      customer_id = 0;
    }
    params.push(customer_id);
    params.push(gsenao204d004_ORA.value);
    params.push(OU_ID);
    let data = ajaxGetData(invokeURL + sqlId, {
      customer_id: params[0],
      gsenao204d004_ORA: params[1],
      OU_ID: params[2]
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        gsenao204d013.value = fixNull(data[0].UNIT_PRICE);
        gsenao204d008.value = fixNull(data[0].UNIT_PRICE);
      } else {
        gsenao204d013.value = ""; //PRICE_LIST
        gsenao204d008.value = ""; //U/P
      }
    }
  }
  return true;
}
/**
 * [Grid] 新增資料
 */
function btnAdd_onClick() {
  if (senao204m008.value == "") {
    alert("Select Customer First,Please!!");
    return false;
  } else {
    var errorMsg = "";
    errorMsg = chkGrid1Value();//檢查欄位是否有空
    if (errorMsg != "") {
      alert(errorMsg);
      return false;
    } else {
      gridaddRow(0);
      clearBinding(0); //新增後清除Binding欄位資料

      initGridRow();
      if (getGridData(0).length > 0) {
        form_org.disabled = true;
      } else {
        form_org.disabled = false;
      }
      Calc_Grid_Total();
      resetGridHelpColsProperty();
    }

  }
  var gridData = getGridData(0);
  var hiddenValue = document.getElementById("Grid1").value;

  if (gridData.length > 0 || hiddenValue.length > 2) {
    form_org.disabled = true;
  } else {
    form_org.disabled = false;
  }
  return true;
}
/**
 * [Grid] 修改資料
 */
function btnEdit_onClick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
    alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
    return false;
  }
  var errorMsg = "";
  errorMsg = chkGrid1Value();//檢查欄位是否有空
  if (errorMsg == "") {
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    refreshRowNo(0, 'SENAO204D003');//重新計算單身Grid項次
    //document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
    Calc_Grid_Total();
    resetGridHelpColsProperty();
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
  } else {
    alert(errorMsg);
  }
  var gridData = getGridData(0);
  var hiddenValue = document.getElementById("Grid1").value;

  if (gridData.length > 0 || hiddenValue.length > 2) {
    form_org.disabled = true;
  } else {
    form_org.disabled = false;
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
  var errorMsg = "";
  errorMsg = chkGrid1Value();//檢查欄位是否有空
  if (errorMsg == "") {
    griddeleteRow(0); //將Grid某筆資料刪除
    clearBinding(0);
    refreshRowNo(0, 'SENAO204D003');//重新計算單身Grid項次
    resetGridHelpColsProperty();
    initGridRow();
    senao204m017.value = ""; //稅
    senao204m019.value = ""; //訂單總金額
    Calc_Grid_Total();
    /*if (getGridData(0).length > 0) {
        form_org.disabled = true;
    } else {
        form_org.disabled = false;
    }*/
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
  } else {
    alert("Please choose a record!!!");
    return false;
  }
  var gridData = getGridData(0);
  var hiddenValue = document.getElementById("Grid1").value;

  if (gridData.length > 0 || hiddenValue.length > 2) {
    form_org.disabled = true;
  } else {
    form_org.disabled = false;
  }
}
/**
 * [Grid] 匯入excel
 */
function btnImport_onClick() {

}
// 判斷單身-【數量】是否為數值欄位
function gsenao204d006_onBlur() {
  if (gsenao204d006.value != "") {
    if (isNumeric(gsenao204d006.value)) {
      if (Number(gsenao204d006.value) == 0) {
        alert("[QTY]can't be Zero!");
      }
    } else {
      alert("[QTY]Must be numeric。");
      gsenao204d006.value = "";
    }
  }
  Cal_Grid_SubTotal();
}
// 判斷單身-【單價】是否為數值欄位
function gsenao204d008_onBlur() {
  if (gsenao204d008.value != "") {
    if (isNumeric(gsenao204d008.value)) { }
    else {
      alert("[U/P]Must be numeric。");
      //XXX gsenao204d008.value = strSrcData;
      gsenao204d008.value = "";
    }
  }
  Cal_Grid_SubTotal();
}
function senao204m042_onChange() {
  senao204m042.value = senao204m042.value.trim();
  if (senao204m042.value == "") {
    senao204m035_b1.disabled = false;
  } else {
    senao204m035_b1.disabled = true;
    senao204m035.value = "0%";
  }
  showBackGroundColor();
}
function senao204m012_onChange() {
  senao204m012.value = senao204m012.value.trim();
  var strDuplicateEFNO = checkCustomerPoCount();
  if (strDuplicateEFNO != "") {
    if (SERIALNUMBER != "") {
      if (SERIALNUMBER != strDuplicateEFNO) {
        alert("[Customer PO]This number already have been in use(EF-" + strDuplicateEFNO + ")!!");
      }
    } else {
      alert("[Customer PO]This number already have been in use(EF-" + strDuplicateEFNO + ")!!");
    }
  }
  //senao204m012.value="";
}
function senao204d016_onChange() {
  Cal_Grid_SubTotal();
}
/**
 *Order Type
 *senao204m011_onchange
 *20210930 Ann Add for Entity
 *查詢是否為無實物的Order Type
 *暫無使用
 */
function senao204m011_onChange() {
  var sqlId = "BPM_ERP_SENAO204_11";
  var tParams = [];
  var tDefaultAppendSQL = "";
  if (senao204m011_ORA != "") {
    tParams.push(senao204m011_ORA.value);
    let data = ajaxGetData(invokeURL + sqlId, {
      senao204m011_ORA: tParams[0]
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        senao204m011_Entity.value = "Y";
      } else {
        senao204m011_Entity.value = "N";
      }
    }
  }

  if (senao204m011.value.indexOf("License") > -1) { //Order Type is License
    senao204m011_License.value = "Y"; //Order Type is License，for流程判斷需不需Check Credit用
  } else {
    senao204m011_License.value = "N";
  }
}
/*---------------------欄位onChange、onClick Function End--------------*/
