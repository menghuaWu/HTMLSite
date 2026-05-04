var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var Invalid_BGCOLOR = "#FFFF00";

//基本資料
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區
var btn_Print = document.getElementById("btn_Print");//列印按鈕
var senao111001 = document.getElementById("senao111001"); //表單代號
var senao111002 = document.getElementById("senao111002"); //表單號碼
var senao111003 = document.getElementById("senao111003"); //申請人ID
var senao111003_b1 = document.getElementById("senao111003_b1"); //申請人按鈕
var senao111003_t1 = document.getElementById("senao111003_t1"); //申請人姓名
var senao111004 = document.getElementById("senao111004"); //申請單位代號
var senao111004_t1 = document.getElementById("senao111004_t1"); //申請單位名稱
var senao111005 = document.getElementById("senao111005"); //ECR No.
var senao111006 = document.getElementById("senao111006"); //ECN No.
var senao111007 = document.getElementById("senao111007"); //Importance
var senao111007_0 = document.getElementById("senao111007_0"); //Importance:Urgent
var senao111007_1 = document.getElementById("senao111007_1"); //Importance:Normal
var senao111008 = document.getElementById("senao111008"); //Effective Date 發行日期
var senao111008_txt = document.getElementById("senao111008_txt"); //Effective Date 發行日期實際元件
var senao111009 = document.getElementById("senao111009"); //Date of Application
var senao111010 = document.getElementById("senao111010"); //Type
var senao111010_0 = document.getElementById("senao111010_0"); //Type: ECR Change
var senao111010_1 = document.getElementById("senao111010_1"); //Type: ECN Change
var senao111012 = document.getElementById("senao111012"); //BOM Modified
var senao111012_0 = document.getElementById("senao111012_0"); //BOM Modified checkbox
var senao111013 = document.getElementById("senao111013"); //Attachment verified
var senao111013_0 = document.getElementById("senao111013_0"); //Attachment verified is checked
var senao111071 = document.getElementById("senao111071"); //Project Code
var senao111071_b1 = document.getElementById("senao111071_b1"); //Project Code按鈕
var senao111071_t1 = document.getElementById("senao111071_t1"); //Project Code description
var senao111014 = document.getElementById("senao111014"); //Model ID
var senao111014_b1 = document.getElementById("senao111014_b1"); //Model ID按鈕
var senao111014_t1 = document.getElementById("senao111014_t1"); //Model Name
var senao111087 = document.getElementById("senao111087"); //客戶名稱
var senao111014_t2 = document.getElementById("senao111014_t2"); //
var senao111014_t3 = document.getElementById("senao111014_t3"); //
var senao111014_t4 = document.getElementById("senao111014_t4"); //ECO Number
var senao111014_t5 = document.getElementById("senao111014_t5"); //
var senao111076 = document.getElementById("senao111076"); //Need to Modify Schematics?
var senao111077 = document.getElementById("senao111077"); //技術文件單號
var senao111081 = document.getElementById("senao111081"); //EC內容是否需修改生產規格書?
var senao111081_0 = document.getElementById("senao111081_0"); //EC內容是否需修改生產規格書?是
var senao111081_1 = document.getElementById("senao111081_1"); //EC內容是否需修改生產規格書?否
var senao111084  = document.getElementById("senao111081"); //EC內容是否需修改樣品機?
var senao111084_0  = document.getElementById("senao111084_0"); //EC內容是否需修改樣品機?是
var senao111084_1  = document.getElementById("senao111084_1"); //EC內容是否需修改樣品機?否
var senao111085  = document.getElementById("senao111085"); //EC內容是否需SQA單位簽核?
var senao111085_0  = document.getElementById("senao111085_0"); //EC內容是否需SQA單位簽核?是
var senao111085_1  = document.getElementById("senao111085_1"); //EC內容是否需SQA單位簽核?否
var senao111015 = document.getElementById("senao111015"); //Brand: 0 / 1
var senao111015_0 = document.getElementById("senao111015_0"); //Brand:Own Brand
var senao111015_1 = document.getElementById("senao111015_1"); //Brand:Custom Made
var senao111016 = document.getElementById("senao111016"); //Reason of Change type
var senao111018 = document.getElementById("senao111018"); //Reason of Change desc
var senao111017 = document.getElementById("senao111017"); //Change Cause Description & Remark : 加簽請於備註欄填寫
var senao111086 = document.getElementById("senao111086"); //其他備註提醒
var senao111019 = document.getElementById("senao111019"); //Method of Change
var senao111019_t1_btn = document.getElementById("senao111019_t1_btn"); //變更方式-依日期變更 按鈕
var senao111019_t1_txt = document.getElementById("senao111019_t1_txt"); //變更方式-依日期變更 文字框
var senao111019_t1 = document.getElementById("senao111019_t1"); //Method of Change: Date
var senao111019_t4 = document.getElementById("senao111019_t4"); //Method of Change: Order Type
var senao111019_b4 = document.getElementById("senao111019_b4"); //Method of Change: Order Type Button
var senao111019_t2 = document.getElementById("senao111019_t2"); //Method of Change: Order Number
var senao111019_t3 = document.getElementById("senao111019_t3"); //Method of Change: Production Order
var senao111020 = document.getElementById("senao111020"); //Method of Change: dropdownlist 1
var senao111021 = document.getElementById("senao111021"); //Method of Change: dropdownlist 2
var senao111024 = document.getElementById("senao111024"); //Method of Change: dropdownlist 3
var senao111078 = document.getElementById("senao111078"); //是否routing to SonicWALL

var senao111068 = document.getElementById("senao111068"); //EE Section Checkbox
var senao111068_0 = document.getElementById("senao111068_0"); //EE Section Checkbox
var senao111069 = document.getElementById("senao111069"); //EE Section 主辦人ID
var senao111069_b1 = document.getElementById("senao111069_b1"); //EE Section 主辦人按鈕
var senao111069_t1 = document.getElementById("senao111069_t1"); //EE Section 主辦人姓名
var senao111070 = document.getElementById("senao111070"); //EE Section 主管ID
var senao111070_t1 = document.getElementById("senao111070_t1"); //EE Section 主管姓名

var senao111035 = document.getElementById("senao111035"); //R&D Section Checkbox
var senao111035_0 = document.getElementById("senao111035_0"); //R&D Section Checkbox
var senao111036 = document.getElementById("senao111036"); //R&D Section 主辦人ID
var senao111036_b1 = document.getElementById("senao111036_b1"); //R&D Section 主辦人按鈕
var senao111036_t1 = document.getElementById("senao111036_t1"); //R&D Section 主辦人姓名
var senao111037 = document.getElementById("senao111037"); //R&D Section 主管ID
var senao111037_t1 = document.getElementById("senao111037_t1"); //R&D Section 主管姓名

var senao111038 = document.getElementById("senao111038"); //PE Section Checkbox
var senao111038_0 = document.getElementById("senao111038_0"); //PE Section Checkbox
var senao111039 = document.getElementById("senao111039"); //PE Section 主辦人ID
var senao111039_b1 = document.getElementById("senao111039_b1"); //PE Section 主辦人按鈕
var senao111039_t1 = document.getElementById("senao111039_t1"); //PE Section 主辦人姓名
var senao111040 = document.getElementById("senao111040"); //PE Section 主管ID
var senao111040_t1 = document.getElementById("senao111040_t1"); //PE Section 主管姓名

var senao111041 = document.getElementById("senao111041"); //PMC Section Checkbox
var senao111041_0 = document.getElementById("senao111041_0"); //PMC Section Checkbox
var senao111042 = document.getElementById("senao111042"); //PMC Section 主辦人ID
var senao111042_b1 = document.getElementById("senao111042_b1"); //PMC Section 主辦人按鈕
var senao111042_t1 = document.getElementById("senao111042_t1"); //PMC Section 主辦人姓名
var senao111043 = document.getElementById("senao111043"); //PMC Section 主管ID
var senao111043_t1 = document.getElementById("senao111043_t1"); //PMC Section 主管姓名

var senao111088 = document.getElementById("senao111088"); //PMC1 Section Checkbox
var senao111088_0 = document.getElementById("senao111088_0"); //PMC1 Section Checkbox
var senao111089 = document.getElementById("senao111089"); //PMC1 Section 主辦人ID
var senao111089_b1 = document.getElementById("senao111089_b1"); //PMC1 Section 主辦人按鈕
var senao111089_t1 = document.getElementById("senao111089_t1"); //PMC1 Section 主辦人姓名
var senao111090 = document.getElementById("senao111090"); //PMC1 Section 主管ID
var senao111090_t1 = document.getElementById("senao111090_t1"); //PMC1 Section 主管姓名

var senao111044 = document.getElementById("senao111044"); //QE Section Checkbox
var senao111044_0 = document.getElementById("senao111044_0"); //QE Section Checkbox
var senao111045 = document.getElementById("senao111045"); //QE Section 主辦人ID
var senao111045_b1 = document.getElementById("senao111045_b1"); //QE Section 主辦人按鈕
var senao111045_t1 = document.getElementById("senao111045_t1"); //QE Section 主辦人姓名
var senao111046 = document.getElementById("senao111046"); //QE Section 主管ID
var senao111046_t1 = document.getElementById("senao111046_t1"); //QE Section 主管姓名

var senao111056 = document.getElementById("senao111056"); //PM Section Checkbox
var senao111056_0 = document.getElementById("senao111056_0"); //PM Section Checkbox
var senao111057 = document.getElementById("senao111057"); //PM Section 主辦人ID
var senao111057_b1 = document.getElementById("senao111057_b1"); //PM Section 主辦人按鈕
var senao111057_t1 = document.getElementById("senao111057_t1"); //PM Section 主辦人姓名
var senao111058 = document.getElementById("senao111058"); //PM Section 主管ID
var senao111058_t1 = document.getElementById("senao111058_t1"); //PM Section 主管姓名

var senao111065 = document.getElementById("senao111065"); //Sales Section Checkbox
var senao111065_0 = document.getElementById("senao111065_0"); //Sales Section Checkbox
var senao111066 = document.getElementById("senao111066"); //Sales Section 主辦人ID
var senao111066_b1 = document.getElementById("senao111066_b1"); //Sales Section 主辦人按鈕
var senao111066_t1 = document.getElementById("senao111066_t1"); //Sales Section 主辦人姓名
var senao111067 = document.getElementById("senao111067"); //Sales Section 主管ID
var senao111067_t1 = document.getElementById("senao111067_t1"); //Sales Section 主管姓名

var senao111047 = document.getElementById("senao111047"); //OQC Section Checkbox
var senao111047_0 = document.getElementById("senao111047_0"); //OQC Section Checkbox
var senao111048 = document.getElementById("senao111048"); //OQC Section 主辦人ID
var senao111048_b1 = document.getElementById("senao111048_b1"); //OQC Section 主辦人按鈕
var senao111048_t1 = document.getElementById("senao111048_t1"); //OQC Section 主辦人姓名
var senao111049 = document.getElementById("senao111049"); //OQC Section 主管ID
var senao111049_t1 = document.getElementById("senao111049_t1"); //OQC Section 主管姓名

var senao111059 = document.getElementById("senao111059"); //Other Section Checkbox
var senao111059_0 = document.getElementById("senao111059_0"); //Other Section Checkbox
var senao111060 = document.getElementById("senao111060"); //Other Section 主辦人ID
var senao111060_b1 = document.getElementById("senao111060_b1"); //Other Section 主辦人按鈕
var senao111060_t1 = document.getElementById("senao111060_t1"); //Other Section 主辦人姓名
var senao111061 = document.getElementById("senao111061"); //Other Section 主管ID
var senao111061_t1 = document.getElementById("senao111061_t1"); //Other Section 主管姓名

var senao111062 = document.getElementById("senao111062"); //SQA Section Checkbox
var senao111062_0 = document.getElementById("senao111062_0"); //SQA Section Checkbox
var senao111063 = document.getElementById("senao111063"); //SQA Section 主辦人ID
var senao111063_b1 = document.getElementById("senao111063_b1"); //SQA Section 主辦人按鈕
var senao111063_t1 = document.getElementById("senao111063_t1"); //SQA Section 主辦人姓名
var senao111064 = document.getElementById("senao111064"); //SQA Section 主管ID
var senao111064_t1 = document.getElementById("senao111064_t1"); //SQA Section 主管姓名
var txt_Subject_Remark = document.getElementById("txt_Subject_Remark"); //使用者輸入主旨
var urgentExplanation = document.getElementById('urgentExplanation'); //急件說明
var senao111025 = document.getElementById("senao111025"); //Need to Modify Schematics 原因
var ForSVN_0 = document.getElementById("ForSVN_0");//20251008 Dillan add //代替越南發單

//hidden
var hdn_senao111007 =  document.getElementById("hdn_senao111007"); //Importance text
var hdn_senao111007_subj = document.getElementById("hdn_senao111007_subj"); //Importance text for subject
var hdn_senao111010 =  document.getElementById("hdn_senao111010"); //Type text: ECR Change/ECN Change
var hdn_senao111015 = document.getElementById("hdn_senao111015"); //Brand: Own Brand / Custom Made
var hdn_senao111016 = document.getElementById("hdn_senao111016"); //Reason of Change type text
var isSN111_S39 = document.getElementById("isSN111_S39"); //取SNSI003002 = SN111_S39 硬體研發九處與工業電腦研發處
var isSN111_S41 = document.getElementById("isSN111_S41"); //取SNSI003002 = SN111_S41 硬體研發六處
var isSN111_S48 = document.getElementById("isSN111_S48"); //取SNSI003002 = SN111_S48 網路安全研發單位與機構
var isSN111_S49 = document.getElementById("isSN111_S49"); //取SNSI003002 = SN111_S49 語音通訊研發單位與機構
var hdn_SourcerList = document.getElementById("hdn_SourcerList"); //Sourcer list
var hdn_PURList = document.getElementById("hdn_PURList"); //Buyer list
var isRMAApply = document.getElementById("isRMAApply"); //是否為RMA申請表單
var isNeedInformTesting = document.getElementById("isNeedInformTesting"); //是否需要通知測試技術課
var writer_id = document.getElementById("writer_id"); //填單人
var isBPPPM = document.getElementById("isBPPPM"); //PM主辦為品牌產品規劃一課or二課
var isOdmEco = document.getElementById("isOdmEco"); //是否為配合snwl eco的單據
var isSN111_S32 = document.getElementById("isSN111_S32"); //業二
var isSN111_S33 = document.getElementById("isSN111_S33"); //海外事業部
var isSN111_S47 = document.getElementById("isSN111_S47"); //品牌銷售管理課
var isSN111_S34 = document.getElementById("isSN111_S34"); //業務一課 +業務三課+業務六課
var isSN111_S43 = document.getElementById("isSN111_S43"); //業一
var isSN111_S44 = document.getElementById("isSN111_S44"); //業六
var isSN111_S45 = document.getElementById("isSN111_S45"); //業七
var isSN111_S46 = document.getElementById("isSN111_S46"); //業八
var isSN111_S35 = document.getElementById("isSN111_S35"); //業五
var isSN111_S40 = document.getElementById("isSN111_S40"); //專案管理課
var isSN111_S38 = document.getElementById("isSN111_S38"); //品牌產品規劃一課 的PM
var isDCC2Flow502 = document.getElementById("isDCC2Flow502"); //是否為EC第二次拋轉簽核
var isRDDept1516 = document.getElementById("isRDDept1516"); //部門代號為15, 16開頭, 排除15312(DCC)
var isMEMTL = document.getElementById("isMEMTL"); //是否為電子機構料件
var isNotNeedTryRun = document.getElementById("isNotNeedTryRun"); //是否不需試投
var hdn_ODM_APPLY = document.getElementById("hdn_ODM_APPLY"); //ODM_APPLY
var hdn_CHANGE_PER_OE_TYPE = document.getElementById("hdn_CHANGE_PER_OE_TYPE"); //ECR 為 OEM
var hdn_chkInsertIEUser = document.getElementById("hdn_chkInsertIEUser"); //是否需要IE簽核 Y/N
var hdn_PMCGroup = document.getElementById("hdn_PMCGroup"); //PMC主辦欄位是否為群組
var hdn_PMCMinOthM = document.getElementById("hdn_PMCMinOthM"); //PMC主管是否為Other_Section主管之一
var hdn_IsNeedEC = document.getElementById("hdn_IsNeedEC"); //是否寫入ERP 
var hdn_0010Sign = document.getElementById("hdn_0010Sign");
var hdn_0010MgrSign = document.getElementById("hdn_0010MgrSign");
var hdn_0110Sign = document.getElementById("hdn_0110Sign");
var hdn_0120Sign = document.getElementById("hdn_0120Sign");
var hdn_0110Mail = document.getElementById("hdn_0110Mail");
var hdn_0160Sign = document.getElementById("hdn_0160Sign");
var hdn_0170Sign = document.getElementById("hdn_0170Sign");
var hdn_0160Mail = document.getElementById("hdn_0160Mail");
var hdn_0180Sign = document.getElementById("hdn_0180Sign");
var hdn_0190Sign = document.getElementById("hdn_0190Sign");
var hdn_0200Sign = document.getElementById("hdn_0200Sign");
var hdn_0210Sign = document.getElementById("hdn_0210Sign");
var hdn_0200Mail = document.getElementById("hdn_0200Mail");
var hdn_0460Sign = document.getElementById("hdn_0460Sign");
var hdn_0460Mail = document.getElementById("hdn_0460Mail");
var hdn_0470Sign = document.getElementById("hdn_0470Sign");
var hdn_0480Sign = document.getElementById("hdn_0480Sign");
var hdn_0490Sign = document.getElementById("hdn_0490Sign");
var hdn_0480Mail = document.getElementById("hdn_0480Mail");
var hdn_0520MSign = document.getElementById("hdn_0520MSign"); //0520全部都要簽核
var hdn_0520SSign = document.getElementById("hdn_0520SSign"); //0520單一簽核
var hdn_IsCCL = document.getElementById("hdn_IsCCL"); //20180706 Milla 資訊服務申請單#7724 管制料號 CCL管控料件, 若為Y,則於申請者主管簽核後,加簽電子法規認證課主管
var hdn_gsenao111d013 = document.getElementById("hdn_gsenao111d013");
var isEEApply = document.getElementById("isEEApply");	//是否為電子工程課申請
var isDCCApply = document.getElementById("isDCCApply");	//是否為技術資料管制課申請
var NSG_check = document.getElementById("NSG_check"); //20240523 Neil ECO Number是否為NSG開頭
var NSGMail_check = document.getElementById("NSGMail_check"); //20240523 Neil Part Number是否有相對應的Mail Address
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title");//20251125 Dillan add


var Grid1 = document.getElementById("Grid1");
var gsenao111d004 = document.getElementById("gsenao111d004"); //Assembly Level Part Number
var gsenao111d005 = document.getElementById("gsenao111d005"); //Assembly Level Part's Name
var gsenao111d006 = document.getElementById("gsenao111d006"); //Part Number
var gsenao111d007 = document.getElementById("gsenao111d007"); //Part's Name
var gsenao111d017 = document.getElementById("gsenao111d017"); //處理
var gsenao111d019 = document.getElementById("gsenao111d019"); //版本
var gsenao111d008 = document.getElementById("gsenao111d008"); //Add Quantity
var gsenao111d009 = document.getElementById("gsenao111d009"); //Delete Quantity
var gsenao111d010 = document.getElementById("gsenao111d010"); //Total Quantity Before Change
var gsenao111d011 = document.getElementById("gsenao111d011"); //Total Quantity After Change
var gsenao111d012 = document.getElementById("gsenao111d012"); //Add Reference
var gsenao111d012_b1 = document.getElementById("gsenao111d012_b1");
var gsenao111d013 = document.getElementById("gsenao111d013"); //Delete Reference
var gsenao111d013_b1 = document.getElementById("gsenao111d013_b1");
var gsenao111d014 = document.getElementById("gsenao111d014");
var gsenao111d015 = document.getElementById("gsenao111d015");
var gsenao111d016 = document.getElementById("gsenao111d016");
var gsenao111d018 = document.getElementById("gsenao111d018");   //id	//依上階&本階料號取得元件seqence id
var gsenao111d020 = document.getElementById("gsenao111d020");   //BILLid
var gsenao111d021 = document.getElementById("gsenao111d021");   //庫存數
var gsenao111d022 = document.getElementById("gsenao111d022");   //在途PR數
var gsenao111d023 = document.getElementById("gsenao111d023");   //在途PO數
var gsenao111d024 = document.getElementById("gsenao111d024");   //待驗數
var gsenao111d025 = document.getElementById("gsenao111d025");   //廠商先行備料
var gsenao111d026 = document.getElementById("gsenao111d026");   //使用機種
var gsenao111d027 = document.getElementById("gsenao111d027");   //起始導入製令單號
var gsenao111d028 = document.getElementById("gsenao111d028");   //ECO Number
var gsenao111d029 = document.getElementById("gsenao111d029");   //是否為管制料
var errorMsg =  document.getElementById("errorMsg");   //錯誤訊息

var btnGrid1Add = document.getElementById("btnGrid1Add"); 
var btnGrid1Edit = document.getElementById("btnGrid1Edit"); 
var btnGrid1Del = document.getElementById("btnGrid1Del"); 
var btnUploadXls = document.getElementById("btnUploadXls");
var btnExportXls = document.getElementById("btnExportXls");
var Attachment = document.getElementById("Attachment");

var strBlur_senao111d013="";
var strD012="";
var databaseCfgId = "ERPSNO";
var FormNo="";
var workitemownerid = "";
var ouno = "";
var orgno = "";
var useExcel = false;
var excelIsOk = true;
var uuid = "";
var excelinput=false;//多筆匯入參數vivian add

//DataSoruce
var DbCfgId_EFGP = "EFGP";
//單身grid1 元件欄位名稱
var GridBinding = [
  ["","gsenao111d016","gsenao111d004","gsenao111d005","gsenao111d006","gsenao111d007","gsenao111d017","gsenao111d019","gsenao111d008","gsenao111d009","gsenao111d010","gsenao111d011","gsenao111d012","gsenao111d013","gsenao111d014","gsenao111d015","gsenao111d018","gsenao111d020","gsenao111d021","gsenao111d022","gsenao111d023","gsenao111d024","gsenao111d025","gsenao111d026","gsenao111d027","gsenao111d028","gsenao111d029","errorMsg"]
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
  colAPI: 'BPM_SENAO111_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO111_GRID1_LIST',
  gridDefPostData: {
  },
  search: true,
  refresh: true,
  xls: false,
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
    gridRowClick(frmGridList[0].gid);  // 傳入 Grid1 的 gid
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
  /*
  activityId = "0001";
  ProcessPackageId='SENAO111';//vivian 抓不到單號暫時定義
  formId='SENAO111';//vivian 抓不到單號暫時定義
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
  $('#senao111003').val(userId);
  $('#senao111003_t1').val(user_Name);
  //$('#senao111003').attr('disabled', 'true');
  $('#senao111003_t1').attr('disabled', 'true');
  //設定所屬部門*/
  $('#senao111004').val(Department);
  $('#senao111004_t1').val(Department_Name);
  $('#senao111004').attr('disabled', 'true');
  $('#senao111004_t1').attr('disabled', 'true');
	applicant = $('#senao111003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao111004').val();//發起流程時參數 申請人部門ID

  $('#senao111002').attr('disabled', 'true');//單號
  createFrmGrid(0);
  document.getElementById("txtPSN").innerText=SERIALNUMBER;
  $("[name^='lbl_']:not([name$='senao111001'],[name$='senao111002'])").each(function(){
    var originalBGColor = $(this).css("background-color"); 
    if(originalBGColor==''||originalBGColor=='#ffffff'){
      $(this).css("background-color", formLabelBGColor); 
    }
  });
  urgentExplanation.style.display = 'none';     //隱藏急件說明欄位
  $('img[title="重發新流程"]', window.parent.parent.document).hide();
  //0500-0010 DCC簽核之後, 結案簽核關卡不允許退回重辦及終止流程之功能
  //因資料若拋轉系統有問題時，DCC需取回或DCC主管需退回表單至DCC簽核0500-0010確定問題處理後再重送表單至系統拋轉,20190722
  if(activityId>"0510-0010"){
    if(window.parent.document.getElementById("btnTerminateProcess") != null){    //終止流程
      window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
    }
    if(window.parent.document.getElementById("btnReexecuteActivity") != null){    //退回重辦
      window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
    }
  }  
  //0500-0010 DCC簽核之後, 結案簽核時不允許取回重辦
  //因資料若拋轉系統有問題時，DCC需取回或DCC主管需退回表單至DCC簽核0500-0010確定問題處理後再重送表單至系統拋轉,20190722
  var dataArray0 =  ajaxGetData(invokeURL + "BPM_SENAO111_74", {
    SERIALNUMBER:SERIALNUMBER
  })
  //ajax_EFGPSQLQuery("BPM_SENAO111_74",[SERIALNUMBER]); //以流程序號查詢流程目前處理關卡代號
  if(dataArray0[0].result == undefined){
    if(dataArray0.length>0){
      if(fixNull(dataArray0[0].DEFINITIONID)>="0500-0010"){
        if(userId!="administrator" && querySNSI003_Org("SN111_S52").indexOf(mainOrgUnitIds) < 0){
          //$$(".docother",window.parent.parent.document).remove();//20190813,不讓使用者從流程內容頁面點選取回重瓣;20190813PM,已統一從BpmProcessInstanceTraceResult.jsp一律隱藏取回重辦按鈕
          if(window.parent.parent.document.getElementById("btnRollback") != null){    //取回重辦
            window.parent.parent.document.getElementById("btnRollback").style.display = "none";
          }
          if(window.parent.parent.document.getElementById("btnAbort") != null){    //撤銷流程
            window.parent.parent.document.getElementById("btnAbort").style.display = "none";
          }
        }
      }
    }
  }
  if (formInstOID != ""){
    if(document.getElementById("hdnMethod")!=null){
      if(document.getElementById("hdnMethod").value=="handleForm"){
        $("a:contains('流程主旨:')", parent.document).text("流程主旨: "+hdn_senao111007_subj.value+"ECR/ECN申請單_"+senao111003_t1.value+"_機種"+senao111014_t1.value+"_"+txt_Subject_Remark.value+"_單號:"+senao111002.innerText);
      }
    }
  }
  if (senao111002.innerHTML != "undefined") {
    TempString = new String(senao111002.innerText);
    FormNo = TempString.substr(TempString.indexOf("SENAO"));
  }
  iniField();//20251125 Dillan add
	ouno = _OU[form_ou.value]; //20260107 Dillan add
  orgno = _ORG[form_ou.value]; //20260107 Dillan add
  /*
  var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料  
  if (typeof (Grid1Obj) != "undefined") {  //判斷grid物件是否存在表單中   
      if (tGrid1.length > 1) {  //判斷Grid是否有資料  
          Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中  
      }
  }*/
  loadSavedGridData() ;//載入已存檔的Grid資料
  //workitemownerid = getUserIDByOID(workItemOwnerOID);  //請注意若轉單(非代簽)需一併修改會辦表人員
  if (formInstOID == ""){
    $("#senao111010").prop("disabled", true);
    senao111009.value = systemDateTime;
    isNotNeedTryRun.value = "Y";
    writer_id.value = userId;
    SetFieldStatus_by_activityId("Create");	//設定各關卡欄位狀態及初始值
    SetApproveDeptChkBox();	//設定會簽單位  
  }else{
    SetFieldStatus_by_activityId("Open");	//設定各關卡欄位狀態及初始值
    $("#btn_Print").prop("disabled", false);
  }
	
	if (activityId == "0001") {	//填表人
		//if ( getGridData(0).length > 0 || document.getElementById("Grid1").value.length > 2){
    if ( getGridData(0).length > 0 ){	
      $('#form_org').prop("disabled", true);
		}else{
      $('#form_org').prop("disabled", false);
		}
	}
  //20240124 Steve [SENAO10100005361] 
  //1.ECR/ECN 當使用"用盡變更"選項時，簽核到物管單位，需開啟表單附件上傳功能(強制上傳，並且備註須附上料件對應工單資訊)
  //2.檔名不限制
  //if (activityId == "0160") {	//物管關卡開放附件 //20251126 Dillan marked
	if (activityId == "0160"||activityId.indexOf("VN0160") == 0) {	//物管關卡開放附件	//20260304 Dillan mod VN0160條件改為包含即可
    $('#Attachment').prop("disabled", false);
	}
  // 20240812 Eason  調整維護ECO Number欄位,會辦單位簽核0110關卡,SPM需有維護ECO Number欄位之功能.

  //if(activityId == "0110"){	// 20260211 Dillan marked DCC Betty:越南流程不開放修改
	if(activityId == "0110" && processId != "CWO111"){	// 20260211 Dillan add DCC Betty:越南流程不開放修改
    $("#senao111014_t4").prop("readOnly", false);
    $("#senao111014_t4").css("background-color", "rgb(251, 241, 192)");
  }
  $("#btnExportXls").prop("disabled", false);
    
  DefineGrid();   
  setGridStyle();
	senao111016_prepare();	//產生Reason of Change選項
	
  //20180725, SQA要求取消SQA簽核, Milla   
  $("[id*='senao111062'],[id*='senao111063'],[id*='senao111064'],[id*=senao111085]").css("display","none");
  return true;
}
function frmEvent() { 
  $('#senao111003').on('change', function () { //Applicant
    senao111003_onchange();
  });
  $('#senao111076').on('change', function () { //Need to Modify Schematics?
    senao111076_onchange();
  });
  $('#senao111004').on('change', function () { //Department
    senao111004_onchange();
  });
  $('#senao111007').on('change', function () { //Importance
    senao111007_onclick();
  });
  $('#senao111010').on('change', function () { //Type
    senao111010_onclick();
  });
  $('input[name="senao111012"]').on('click', function () { //DCC BOM Modified
    senao111012_onclick();
  });
  $('input[name="senao111013"]').on('click', function () { //DCC Attachment verified
    senao111013_onclick();
  });
  $('#senao111071').on('change', function () { //Project Code
    senao111071_onchange();
  });
  $('#senao111014').on('change', function () { //Model Name
    senao111014_onchange();
  });
  $('#senao111014_t2').on('change', function () { //Other Model Name:
    senao111014_t2_onchange();
  });
  $('#senao111015').on('change', function () { //Brand
    senao111015_onclick();
  });
  $('#senao111016').on('change', function () { //Reason of Change
    senao111016_onchange();
  });
  $('#senao111020').on('change', function () { //**Select Modify / Don't Modify Finished Goods
    senao111020_onchange();
  });
  $('#senao111019').on('change', function () { //Method of Change
    senao111019_onchange();
  });
  $('#senao111019_t3').on('change', function () { //Production Order
    senao111019_t3_onchange();
  });
  $('#gsenao111d013').on('change', function () { //Delete Reference
    gsenao111d013_onchange();
  });
  $('#gsenao111d013').on('blur', function () { //Delete Reference
    gsenao111d013_blur();
  });
  $('#gsenao111d015').on('change', function () { //COMMENT
    gsenao111d015_onchange();
  });
  $('#gsenao111d025').on('change', function () { //廠商先行備料
    gsenao111d025_onchange();
  });
  $('#gsenao111d004').on('change', function () { //Assembly Level
    gsenao111d004_onchange();
  });
  $('#gsenao111d006').on('change', function () { //Part Number
    gsenao111d006_onchange();
  });
  $('#gsenao111d012').on('change', function () { //Add Reference
    gsenao111d012_onchange();
  });
  $('#gsenao111d017').on('change', function () { //處理
    gsenao111d017_onchange();
  });
  $('#gsenao111d012').on('blur', function () { //Add Reference
    gsenao111d012_onblur();
  });
  $('#gsenao111d013').on('blur', function () { //Delete Reference
    gsenao111d013_onblur();
  });
  $('#btnGrid1Add').on('click', function () { //新增
    btnGrid1Add_onclick();
  });
  $('#btnGrid1Edit').on('click', function () { //修改
    btnGrid1Edit_onclick();
  });
  $('#btnGrid1Del').on('click', function () { //刪除
    btnGrid1Del_onclick();
  });
  $('#btnUploadXls').on('click', function () { //Excel匯入
    btnUploadXls_onclick();
  });
  $('#btnExportXls').on('click', function () { //Excel匯出
    btnExportXls_onclick();
  });
  $('#btn_Print').on('click', function () { //列印表單
    btn_Print_onclick();
  });
}
function formSave(){
	var errorMsg = "";
  var strOtherCustList = querySNSI003_Org("SN111_S50");	//ODM客戶
  var tGrid1Data = getGridData(0); 
  workitemownerid = getUserIDByOID(workItemOwnerOID);  //請注意若轉單(非代簽)需一併修改會辦表人員
	//FRM_COL_CHECK is_manager 是否為主管 Date_of_Reported 到職日 job_level 職等 job_title 職稱 labor_type 直間接員工 application_date 申請日期 last_date 最後工作日
  if (activityId == "0001") {	//填表人

    if ($("#form_ou").val() == 'senao' || $("#form_ou").val() == 'svn'){ //20240411 Neil //20260223 Dex Add 需求[SENAO10100003802]，開啟急件說明卡控
      //重要性
      if(senao111007.value=="0" && urgentExplanation.value==''){
        //alert("[急件說明]不得空白");
        errorMsg += "[急件說明]不得空白"
      }else{
        if(urgentExplanation.value.substring(0, 1) == '.' || urgentExplanation.value.substring(0, 1) == ' '){
          errorMsg += "[急件說明]開頭不能.或空格\n";
        }
      }
    }
		if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){	//電子工程課申請
			isEEApply.value = "Y";
		}else{
			isEEApply.value = "N";
		}
		
		if (querySNSI003_Org("SN111_S52").indexOf(senao111004.value) > -1){	//技術資料管制課申請
			isDCCApply.value = "Y";
		}else{
			isDCCApply.value = "N";
		}
		
		if (IsRdDept_Utils(senao111004.value) && querySNSI003_Org("SN111_S52").indexOf(senao111004.value) < 0){
			isRDDept1516.value = "Y";	//部門代號為15, 16開頭, 排除15312(DCC)
		}else{
			isRDDept1516.value = "N";
		}
		if (txt_Subject_Remark.value.trim() == ""){
			if (confirm("主旨欄位目前為空白，是否確定要保持空白?")){
				// do nothing
			}else{
				return false;
			}
		}
		if (senao111007.value == ""){	//Importance:Urgent && Importance:Normal
			errorMsg += "[Importance：Urgent/Normal]不得空白!\n";
		}else{
			if (senao111007.value == "0"){
				if (window.parent.document.forms[0].ddlAllPrsinsLevel != null){
					window.parent.document.forms[0].ddlAllPrsinsLevel.value="DEFAULT_INS_LEVEL0000000LEVEL001";      
				}  
			}
		}
		if (senao111007.value == "0"){
			hdn_senao111007_subj.value = "[急]";
		}else{
			hdn_senao111007_subj.value = "";
		}    
		if (senao111003.value.trim() == ""){
			errorMsg += "請填寫[Applicant]!\n";
		}
		if (senao111081.value == ""){	//EC內容是否需修改生產規格書?是/否
			errorMsg += "請選擇[EC內容是否需修改生產規格書]!\n";
		}
		if (senao111084.value == ""){	//EC內容是否需修改樣品機?是/否
			errorMsg += "請選擇[EC內容是否需修改樣品機]!\n";
		}
		if (senao111071.value.trim() == ""){	//Project Code
			errorMsg += "請填寫[Project Code]!\n";
		}else{
			var otherModelName = ""; //Model ID CheckFieldData.asp:177
			var strCust = senao111087.value;	//客戶名稱
			var strEmpNo = senao111003.value;	//申請人
				
			if (senao111014.value == ""){	//Model ID
				errorMsg += "請填寫[Model Name]!\n";
			}else if (senao111014.value == "00"){
				if (senao111014_t3.value == ""){
					errorMsg += "請選擇下拉選單Model Name[請選擇類別(其它、DCM、VCM)]!\n";
				}
				if (senao111014_t2.value == ""){
					errorMsg += "請填寫[Other Model Name]!\n";
				}else{
					otherModelName = senao111014_t2.value;
				}				
			}else{
				otherModelName = senao111014.value; //Model ID CheckFieldData.asp:177
				if (senao111014.value.indexOf(senao111071.value) < 0){
					errorMsg += "[Model Name]需為[ProjectCode]底下的洐生機種!\n";
				}
			} //end of if(senao111014.value=="")
				
			if (IsOdmModel(otherModelName, strCust)){	//是否為 odm 客戶的機種
				if (strCust == "SNWL"){
					if (IsSNWL_ECO_TO_SN() == false && (IsOdmApplicant(strCust, strEmpNo) || IsRMAApply())){	//非SonicWALL要求 Senao 做出的的變更 && (為ODM 申請人員||為RMA單位申請)
						var strPrompt = "若為SonicWALL指定變更,請務必註明[SonicWALL ECO Number].\n";
						strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
						strPrompt += "表單需通知客戶，請不要直接傳送，請按[取消]";
						if(confirm(strPrompt) == false){
							return false;
						}
					}
				}else if (strOtherCustList.indexOf(strCust) >= 0){	//是ODM客戶
					if (IsSNWL_ECO_TO_SN() == false){	//非SonicWALL要求 Senao 做出的的變更
						var strPrompt = "若為" + strCust + "指定變更,請務必註明[" + strCust + " ECO Number].\n";
						strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
						strPrompt += "表單需通知客戶，不要直接傳送，請按[取消]";
						if (confirm(strPrompt) == false){
							return false;
						}
					}
				}
			}
		} //end of if(senao111071.value.trim()=="")

		strchkErrMN = chkErrModelName(senao111014.value); //確認機種是否存在 CheckFieldData.asp:251
		if (strchkErrMN != ""){	//無此機種
			alert(strchkErrMN);
			return false;
		}
		//Ruckus&Meraki EC需routing時，填表人須上傳附件/Phoebe.20120413
		//Ruckus EC需routing時，填表人須上傳附件/Phoebe.20111111
		if (strOtherCustList.indexOf(senao111087.value) >= 0 && senao111014_t4.value != ""){ //是ODM客戶 && ECO Number CheckFieldData.asp:258
			if (chkAttFileExists() == false){
				errorMsg += "請上傳" + senao111087.value + " ECO附件!\n";
			}
		}else{
			if (chkAttFileExists() == false){
				if (confirm("※申請【電子料號EC】 請務必附上'PM/業務同意MAIL'及'測試報告'(or新舊規格比對表)。\n※申請【軟體FW EC】請附上單位已簽核之'軟體程式發行管制表' or 'PM/業務同意MAIL'。\n未附上則以退件處理！\n若需上傳檔案請按「確定」, 若無需附檔請選「取消」") == true){
					alert("請上傳附件!");
					return false;
				}
			} 
		}
		
		if (IsRMAApply() && senao111087.value == "SNWL"){	//為RMA單位申請 && 客戶是SNWL
			if (senao111014_t4.value == ""){	//ECO Number
				errorMsg += "[SonicWALL ECO Number]不得空白!\n";
			}
			if (senao111019.value == "6" && (senao111019_t4.value == "" || senao111019_t2.value.trim() == "")){	//6. By OE/工單變更 && (Method of Change: Order Type  || Method of Change: Order Number)
				errorMsg += "[依OE變更],請詳細填寫Order Type and Order Number!\n";
			}
		}
		if (senao111015.value == ""){	//Brand:Own Brand / Custom Made
			errorMsg += "[Brand：Own Brand/Custom Made]不得空白!\n";
		}
		if (senao111010.value == ""){	//Type: ECR Change / ECN Change
			errorMsg += "[Type]不得空白!\n";
		}
		if (senao111016.value == ""){	//Reason of Change type
			errorMsg += "請選擇[Reason of Change]!\n";
		}else{
			if (senao111016.value.toUpperCase() == "OTHERS" ){
				if (senao111018.value.trim() == ""){	//Reason of Change desc
					errorMsg += "[Reason of Change]為[其它 Others]時,請說明[變更原因說明]!\n";
				}
			}
		}
		if (senao111017.value.trim() == ""){	//Change Cause Description & Remark : 加簽請於備註欄填寫
			errorMsg += "[Remark]不得空白!\n";
		}else{
			senao111017.value = left(senao111017.value, 1000);//此欄位資料庫長度為2000,中文字元長度為2
		}
		if (senao111019.value == ""){	//Method of Change
			errorMsg += "請選擇[Method Of Change]!\n";
		}
		//EE 需選擇RD SECTION 或 EE SECTION 人員
		if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){
			if (senao111036.value == ""){
				errorMsg += "EE部門人員，請選擇[RD Section]!\n";
			}
		}
		if (senao111020.value == ""){	//Method of Change: dropdownlist 1 (Modify Finished Goods--0 / Don't Modify Finished Goods--1)
			errorMsg += "[Select Modify / Don't Modify Finished Goods]!\n";
		}
		if (senao111021.value == ""){	//Method of Change: dropdownlist 2(Modify Semi-Finished Goods--0 / Don't Modify Semi-Finished Goods--1)
			errorMsg += "[Select Modify / Don't Modify Semi-Finished Goods]!\n";
		}
		if (senao111024.value == ""){	//Method of Change: dropdownlist 3(Do not Mix Parts in Production--0 / OK to Mix Parts in Production--1)
			errorMsg += "[Select Do Not / OK Mix Parts in Production]!\n";
		}

		if((senao111078.value != "" && senao111078.value != "N") || senao111014_t4.value != ""){	//是否routing to SonicWALL && ECO Number
			isOdmEco.value = "Y";	//是否為配合snwl eco的單據-是
		}else{
			isOdmEco.value = "N";	//是否為配合snwl eco的單據-否
		}
		//*******************************************************************
		//單身規則：CheckFieldData.asp:348
		//附件表單化, 單身必需有資料
		//同一階且同一料在同一張單只能申請一次
		//*******************************************************************
		//以上單頭無誤(strErr = "" )，再做單身的防呆判斷        
		if (errorMsg == ""){
			if (senao111019.value != "5"){ //Method of change =5: No EC Needed                   
				if (tGrid1Data.length <= 0){  //CheckFieldData.asp line:357
					errorMsg += "[表單附件]資料筆數不得為 0 筆!\n";
				}            
			}
		}
		// alert('before CheckGrid_onFormSave');	
		errorMsg += CheckGrid_onFormSave();
		// alert('after CheckGrid_onFormSave');
		// todo check below function 
		CheckNeedToInfo22110Dept();
		InsertSourcer_Flow();
		makeMgrSourcerSign();
		var getSNSI003_str = "";

		getSNSI003_str = querySNSI003_Org("SN111_S39");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
		if (getSNSI003_str != ""){
			if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //硬體研發九處與工業電腦研發處發起之表單
				isSN111_S39.value = "Y";
			}else{
				isSN111_S39.value = "N";
			}
		}

		getSNSI003_str = querySNSI003_Org("SN111_S41");	//[研發六處]所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)送單後，即通知助理
		if (getSNSI003_str != ""){
			if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //研發六處部門發起之表單
				isSN111_S41.value = "Y";
			}else{
				isSN111_S41.value = "N";
			}
		}

		getSNSI003_str = querySNSI003_Org("SN111_S48");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
		if (getSNSI003_str != ""){
			if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //網路安全研發單位與機構發起之表單
				isSN111_S48.value = "Y";
			}else{
				isSN111_S48.value = "N";
			}
		}

		getSNSI003_str = querySNSI003_Org("SN111_S49");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
		if (getSNSI003_str != ""){
			if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //語音通訊研發單位與機構發起之表單
				isSN111_S49.value = "Y";
			}else{
				isSN111_S49.value = "N";
			}
		}
  }else{//非填表人關卡
		if (senao111019.value == "5" || senao111014_t4.value != ""){

		}else{
			if (activityId == "0070-0010" || activityId == "0080-0010" || activityId == "0500-0010" || activityId == "0510-0010"){
				if (tGrid1Data.length <= 0){
					errorMsg =  "[表單附件]資料筆數不得為 0 筆!\n";
				}
			}
		}
		if (senao111014.value.trim() == ""){
			errorMsg += "[Model Name]不得空白!\n";
		}
		if (activityId.indexOf("0008-") == 0){
			if ((senao111078.value != "" && senao111078.value != "N") || senao111014_t4.value != ""){
				isOdmEco.value = "Y";
			}else{
				isOdmEco.value = "N";
			}
			
			if (activityId == "0008-Fortinet"){
				if (senao111016.value == "Design" || senao111016.value == "Key Part"){
					if (!chkUploadAttachment("Fortinet資料審核")){
						errorMsg =  "請附件上傳客戶信件!\n";
					}
				}
			}
		}
		if (activityId == "0009-01"){ //SNWL簽核人員_0009-01	資訊服務申請單#SENAO10100001979 若填單人選取by OE變更, SNWL簽核人員請協助開啟填寫production order之權限. 後續關卡生物管可維持可修改狀態
			if (senao111019.value == "6"){
				if (senao111019_t3.value.trim() == ""){
					errorMsg += "PM人員請輸入[Production Order]\n";
				}else{
					if (senao111019_t3.value.trim().length < 12 && senao111019_t3.value.trim() != "NA"){
						errorMsg += "[Production Order]欄位需大於12碼!";
					}
				}
			}
		}//[formsave]end of activityId == "0009-01" SNWL簽核人員_0009-01
		
		// [formsave]------------ DCC簽核關卡 ------------
		if (activityId == "0070-0010"){
			
			if (senao111005.value.trim() == "" && senao111010.value == ""){ //表單為ECR變更，請必填ECR單號(senao111005)
				errorMsg += "[(C/R)]不得空白!\n";
			}else if (senao111010.value == "1" && senao111006.value == ""){ //表單為ECN變更，請必填ECN單號(senao111006)
				senao111006.readOnly = false;
				errorMsg += "[(C/N)]不得空白!\n";
			}
			
			var unitArray = [["senao111035", "R&D"], ["senao111038", "PE"], ["senao111041", "PMC"], ["senao111044", "QE"],
						   ["senao111056", "PM"], ["senao111059", "Other"], ["senao111065", "Sales"], ["senao111088", "PMC1"]];
			if (IsRMAApply() == false){ //CheckFieldData.asp:652
				var Flag_Check_Approve = false;
				for (var u = 0; u < unitArray.length; u++){                  
					if (document.getElementById(unitArray[u][0] + "_0").checked){
						Flag_Check_Approve = true; //unitArray中的checkbox至少要勾一個
						break;
					}                  
				}
				if (Flag_Check_Approve == false){
					errorMsg += "請選擇[Additional_Approval]!\n";                
				}else{
					var strApproveUserField1;
					var strApproveUserField2;
					for (var u = 0; u < unitArray.length; u++){                    
						var intSignDOMID =  parseInt(unitArray[u][0].substr(unitArray[u][0].length - 2)) + 1;
						strApproveUserField1 = "00" + intSignDOMID;
						strApproveUserField2 = "00" + (intSignDOMID + 1);
						strApproveUserField1 = formId + strApproveUserField1.substr(strApproveUserField1.length - 3);
						strApproveUserField2 = formId + strApproveUserField2.substr(strApproveUserField2.length - 3);
						if (document.getElementById(unitArray[u][0] + "_0").checked){
							if (document.getElementById(strApproveUserField1.toLowerCase()).value == "" || document.getElementById(strApproveUserField2.toLowerCase()).value == ""){
								errorMsg += "請選擇[" + unitArray[u][1] + "之會審主辦]\n";
							}
						}
					}//end of for loop
				}              
			}
			
			errorMsg += CheckGrid_onFormSave();			
			var strItemErr = ChkItemNO_Length();
			if (strItemErr != ""){
				alert(strItemErr);
				return false;
			}
			if (querySNSI003_Org("SN111_S33").indexOf(getEmpDeptID(senao111057.value)) > -1){
				isBPPPM.value = "Y";
			}else{
				isBPPPM.value = "N";
			}          
			InsertPUR_Flow();
			//20230504 因業務單位組織異動 將InsertPMC_Flow判斷併入makeUnionSign內
			/*
			if (senao111020.value == "0" || senao111021.value == "0"){
				InsertPMC_Flow(senao111066.value, senao111057.value);
			}
			*/
			//判斷是否有替代料同時變更為主料/Phoebe.20131023
			if (InsertDCC2Flow() == true){
				isDCC2Flow502.value = "Y";
			}else{
				isDCC2Flow502.value = "N";  
			}          
			if (isME_MTL() == true && querySNSI003_Org("SN111_S18").indexOf(senao111004.value) < 0){
				isMEMTL.value = "Y";
			}          
			//todo BeforeApproveForm.asp:438 , 2011後再無此條件之關卡產生
			setODM_APPLY();
			//todo 531
			if (querySNSI003_Org("SN111_S38").indexOf(senao111057.value) >= 0){
				isSN111_S38.value = "Y";
			}
			setCHANGE_PER_OE_TYPE();
			if (chkInsertIEUser() == true){
				hdn_chkInsertIEUser.value = "Y";
			}
			if (left(senao111042.value, 6) == "SN111_"){
				hdn_PMCGroup.value = senao111042.value;
			}else{
				hdn_PMCGroup.value = "";  
			}
			if (senao111061.value != "" && senao111061.value.indexOf(senao111043.value) >= 0){
				hdn_PMCMinOthM.value = "Y";
			}
			makeUnionSign();
			//20230504 因業務單位組織異動 增加判斷如果有選PM or SALES 單位但hdn_0520SSign.value為空值卡傳送
			if ((senao111020.value == "0" || senao111021.value == "0")){
				if(!senao111056_0.checked && senao111057.value.trim() == "")
					errorMsg += "Method of Change 為 Modify FG or Semi-FG必須選取PM Section!\n";
				if(!senao111065_0.checked && senao111066.value.trim() == "")
					errorMsg += "Method of Change 為 Modify FG or Semi-FG必須選取Sales Section!\n";
				//if(senao111057.value.trim() != "" && senao111066.value.trim() != "" && hdn_0520SSign.value.trim() == "")//20250811 Dillan markef
					//errorMsg += "選擇的PM or Sales Section尚未設定生管會辦人員，請與業務、生管單位確認後提供給IT新增!\n";//20250811 Dillan marked
			}
		} //[formsave]end of activityId == "0070-0010" DCC簽核關卡
		else if (activityId == "0200"){  //CheckFieldData.asp:700
			//RMA關卡人員角色同PMC人員/Phoebe.20110809
			if (workitemownerid == senao111057.vlaue){
				if (IsRMAApply() == true){
					if (senao111019.value == "2"){
						if (senao111019_t1.value.trim() == ""){
							errorMsg += "生管人員請選擇用盡日[Date]\n";
						}
					}else if (senao111019.value == "3" || senao111019.value == "6"){
						if (senao111019_t3.value.trim() == ""){
							errorMsg += "生管人員請輸入[Production Order]\n";
						}else{
							if (senao111019_t3.value.trim().length < 12 && senao111019_t3.value.trim() != "NA"){
								errorMsg += "[Production Order]欄位需大於12碼!";
							}
						}
					}
				}
			}
		}//[formsave]end of activityId == "0200"
		//else if (activityId == "0160" || activityId == "0200" || activityId == "0480"){ //20260128 Dillan marked
		else if (activityId == "0160" || activityId == "0200" || activityId == "0480" || activityId.indexOf("VN0160") == 0){ //20260304 Dillan mod VN0160條件改為包含即可
      //20231121 Steve 因接收時workitemownerid不正確,導致卡控失效
      //if (workitemownerid == senao111042.value){
			//if(activityId == "0160" || activityId == "0200" || activityId == "0480"){ //20260128 Dillan marked
			if(activityId == "0160" || activityId == "0200" || activityId == "0480" || activityId.indexOf("VN0160") == 0){ //20260304 Dillan mod VN0160條件改為包含即可
				// ADD BY JOE START 2007/04/30
				// 若變更方式為【依製令變更】，請生管人員務必填製令號碼.
				// MODIFY BY JOE 2007/08/06 提出人:黃健利
				// 試投,PMC關號為 0160-0050; 不需試投, PMC關號為0200-0060
				if (senao111019.value == "2"){
					if (senao111019_t1.value.trim() == ""){
						errorMsg += "生管人員請選擇用盡日[Date]\n";
					}
				}else if (senao111019.value == "3" || senao111019.value == "6"){
					if (senao111019_t3.value.trim() == ""){
						errorMsg += "生管人員請輸入[Production Order]\n";
					}else{
						if (senao111019_t3.value.trim().length < 12 && senao111019_t3.value.trim() != "NA"){
							errorMsg += "[Production Order]欄位需大於12碼，若無工單請填 NA !!!";
						}
					}
				}
				//Meraki&Ruckus EC時，生管必填[起始導入製令單號]/Phoebe.20120413
				//Ruckus EC時，生管必填[起始導入製令單號]/Phoebe.20111107
				if (strOtherCustList.indexOf(senao111087.value) >= 0 && senao111014_t4.value != ""){
					var strPMCErr = chkProductionNumber();
					if (strPMCErr != ""){
						errorMsg += "請維護表單附件[" + strPMCErr + "]的[起始導入製令單號]!";
					}
				}
			}
		}    
		else if (activityId == "0110"){ //CheckFieldData.asp:764
			if (workitemownerid == senao111057.value || workitemownerid == senao111066.value){
				//業務 Need to Route to SonicWALL 必需附件                
				if (IsSN_ECR_TO_SNWL() == true){	//由senao 發出SonicWALL 相關機種的變更(是否routing to SonicWALL)
					if (document.getElementById("Attachment_shell") == null){
						if (window.parent.document.getElementById("txaExecutiveComment").value.trim() == ""){
							errorMsg += "[Need to Route to SonicWALL]業務人員請註明[簽核意見]客戶已確認!\n";
						}
					}
				}

				if (workitemownerid == senao111057.value){ //PM
					if (IsOBM()){	//OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更
						if (senao111019_t4.value.trim() == "" || senao111019_t2.value.trim() == ""){
							alert("[依OE變更],請詳細填寫Order Type and Order Number.");
							return false;
						}
					}
				}
				if (workitemownerid == senao111066.value){ //業務
					if (IsODM() == true){
						if (senao111019_t4.value.trim() == "" || senao111019_t2.value.trim() == ""){
							alert("[依OE變更],請詳細填寫Order Type and Order Number.");
							return false;
						}
					}
				}
			}
		}
		//[formsave]
		//else if (activityId.indexOf("0150") == 0 || activityId.indexOf("0475") == 0 ){ //CheckFieldData.asp:806 //20260128 Dillan marked
		else if (activityId.indexOf("0150") >= 0 || activityId.indexOf("0475") == 0 ){ //CheckFieldData.asp:806 //20260128 Dillan add 多了VN0150元條件須修正
			var strBuyerErr = ChkPrepareVendor();
			if (strBuyerErr != ""){
				errorMsg += strBuyerErr;
			}
		}
		else if (activityId == "0460" && workitemownerid == senao111057.value){
			if((IsOBM() || chkHaveSales() == false) && senao111019.value == "6"){ //todo:828  判斷是否有某一關卡, 已解析	//OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更
				 if(senao111019_t4.value.trim() == "" || senao111019_t2.value.trim() == ""){
					 errorMsg += "×[依OE變更],請詳細填寫Order Type and Order Number .\n";
				 }  
			}          
		}else if (activityId == "0460" && workitemownerid == senao111066.value){ //CheckFieldData.asp:833
			//senao 發出的ECR 請業務註明 客戶回覆的ECO NUMBER
			// modify by joe 20100324 原卡sales 0460-0040 改為 0460 -0020
			if (senao111078.value != ""){
				if (senao111014_t4.value.trim() == "" && senao111087.value == "SNWL"){
					errorMsg += "業務人員請註明[SonicWALL ECO Number]!\n";
				}
			}
			if (IsODM()){	//ODM ( Custom made ) and select method of Change is "6: By OE/工單變更
				if (senao111019_t4.value.trim() == "" || senao111019_t2.value.trim() == ""){
					errorMsg += "×[依OE變更],請詳細填寫Order Type and Order Number .\n";
				}
			}
		}else if (activityId.indexOf("0500-0010") == 0){           	
			if (senao111013_0.checked == false){
				errorMsg += "請確認 [Attachment Verified]。並勾選。\n";
			}
			errorMsg += CheckGrid_onFormSave();
			
			//檢查單號，是不是存在Oracle中，若是的話，就不可送簽出去
			//因為撤簽時，Oracle的程式會先將要撤簽的資料移除
			//若沒有等待資料移除就再把新的資料送過來，會造成資料異常問題 
      var tParams = [senao111005.value, orgno];  //CheckFieldData.asp:878
      //20251008 Dillan add(s) 檢查資料若為代替越南發單則抓369其他則不變
      if (ForSVN_0.checked == true){
        tParams = [senao111005.value, "369"]; 
      }
      //20251008 Dillan add(e)

			var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_11", {
        strEcrNo:tParams[0],
        orgno:tParams[1]
      }) 
      if(dataArray[0].result == undefined){
        if (dataArray.length > 0){
          if (fixNullTo0(dataArray[0].COUNT) > 0){
            alert("Oracle中已有資料，請稍後再簽核!");
            return false;
          }
        }
      }else{
        console.log("function:"+"formopen" + " API:" + "BPM_ERP_SENAO111_11 "+dataArray[0].result);
        return false;
      }

			var dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_26", {
        ECO_NUMBER:tParams[0],
        orgno:tParams[1]
      }) 
      if(dataArray2[0].result == undefined){
        if (dataArray2.length > 0){
          if (fixNullTo0(dataArray2[0].CNT) > 0){
            alert("Oracle中已有資料，請稍後再簽核!");
            return false;
          }
        }
      }else{
        console.log("function:"+"formopen" + " API:" + "BPM_ERP_SENAO111_26 "+ dataArray2[0].result);
        return false;
      }
			if (IsNeedEC() == true){
				hdn_IsNeedEC.value = "Y";
			}else{
				hdn_IsNeedEC.value = "N";
			}
			//20230724 Calvin 重新帶入OPCODE		
            //20231222 Neil 註解，因為oracle沒上正式				
			// if (tGrid1Data.length > 0){	
			// 	getErpOPCode();
			// }				
			//20230724 end
		}else if (activityId.indexOf("0502-0010") == 0){ //CheckFieldData.asp:893
			if (senao111019.value == "5"){
			}else{
				var strECNumber = senao111005.value;
				if (IsImplementSuccess(strECNumber) == true){
				}else{
					errorMsg += "Oracle (ECO Number:" + strECNumber + ")尚未Implement 成功,請確定Implement 成功再做動作,謝謝!\n";
				}
			}
		}else if (activityId.indexOf("0510-0010") == 0){  //CheckFieldData.asp:903
			var strECNumber;
			if (senao111012_0.checked == false){
				errorMsg += "請確認 [BOM Modified] 並勾選.\n";
			}
			if (senao111006.value == ""){
				errorMsg += "ECN Change請填寫[(C/N)].\n";
			}
			if (senao111008.value == ""){
				errorMsg += "請填寫[Effective Date].\n";
			}
			if (senao111019.value == "5"){

			}else{
				if (senao111005.value.indexOf("-1") >= 0){
					//strECNumber = senao111002.innerHTML + "-2";
					//strECNumber = right(serialNumber, 6) + "-2"; //20260304 Dillan marked
					//20260304 Dillan add(s)
					if (typeof processId !== "undefined" && processId == "CWO111"){
						var last5 = right(serialNumber, 5);
						var num = parseInt(last5, 10);
						var newNum = num + 49;
						// 依原格式補回 5 位（前置補零）
						var padded = ("00000" + String(newNum)).slice(-5); 
						strECNumber = "S" + padded;
					}else{
						strECNumber = right(serialNumber, 6);
					}
					strECNumber += "-2";
					//20260304 Dillan add(e)
				}else{
					//strECNumber = right(senao111002.innerHTML,9);
					//strECNumber = right(serialNumber, 6); //20260304 Dillan marked
					//20260304 Dillan add(s)
					if (typeof processId !== "undefined" && processId == "CWO111"){
						var last5 = right(serialNumber, 5);
						var num = parseInt(last5, 10);
						var newNum = num + 49;
						// 依原格式補回 5 位（前置補零）
						var padded = ("00000" + String(newNum)).slice(-5); 
						strECNumber = "S" + padded;
					}else{
						strECNumber = right(serialNumber, 6);
					}
					//20260304 Dillan add(e)
				}
				if (IsImplementSuccess(strECNumber)){

				}else{
					errorMsg += "Oracle (ECO Number:" + strECNumber + ")尚未Implement 成功，請確定Implement 成功再做簽核動作，謝謝!";
				}
			}
		}
		if (senao111019.value == ""){ //CheckFieldData.asp:931
			errorMsg += "[Method Of Change]空白,請聯絡MIS,謝謝 !!\n";
		}
    //20240124 Steve [SENAO10100005361] 
    //1.ECR/ECN 當使用"用盡變更"選項時，簽核到物管單位，需開啟表單附件上傳功能(強制上傳，並且備註須附上料件對應工單資訊)
    //2.檔名不限制
    //if(activityId == "0160" && senao111019.value == '2'){//20260128 Dillan marked
		if((activityId == "0160" || activityId.indexOf("VN0160") == 0) && senao111019.value == '2'){	//20260304 Dillan mod VN0160條件改為包含即可
      if(!checFileWithFileName()){
        errorMsg += '物管單位當選擇"用盡變更"選項時請上傳附件,檔名: 發料紀錄 ';
      }
    }

	} //end of else activityId=0001 668, 314
  NSGCheck(); //20240523 Neil 

  if (errorMsg != ""){
		alert(errorMsg);
		return false;
	}
	//[formsave]assign表單單號到流程變數formserialnumber去，給呼叫JSP用
	if (activityId != "0001"){
		if (senao111002.innerHTML != "undefined") {
			TempString = new String(senao111002.innerHTML);
			//TempString = TempString.substr(TempString.indexOf("SENAO"));//20260225 Dillan marked
      //20260225 Dillan add(s)
      if (typeof processId !== "undefined" && processId == "CWO111"){
        TempString = TempString.substr(TempString.indexOf("SVN"));
      }else{
        TempString = TempString.substr(TempString.indexOf("SENAO"));
      }
			//20260225 Dillan add(e)

			//ajax_ProcessAccessor.assignRelevantData(processInstOID, "formSerialNumber", TempString);
		} else {
			errorMsg += '取得流程變數-單號有誤，請洽MIS!!\n';
			alert(errorMsg);
			return false;
		}
	}
	//儲存Grid1資料
  if (tGrid1Data.length > 0) {  //判斷grid物件是否存在表單中       
		document.getElementById("Grid1").value = JSON.stringify(tGrid1Data); //將Grid裡的資料儲存至隱藏欄位中  
		clearBinding(0); 	
		for (i = 0; i < tGrid1Data.length; i++){
			if (tGrid1Data[i]['SENAO111D004'] == "" || tGrid1Data[i]['SENAO111D006'] == "" || tGrid1Data[i]['SENAO111D017'] == ""){
				alert("第" + tGrid1Data[i]['SENAO111D003'] + "筆單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return false;
			}
		}
		if(senao111019.value != "5"){
			if (Grid1.value == "" || Grid1.value == "[]"){
				alert("單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return false;
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
  //form_ou.disabled = true;//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  senao111009.value = today; //填表日期
  //表單代號
  /*$('#senao176m001').val(type);
  $('#senao176m001').attr('disabled', 'true');*/

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
//20251125 Dillan add(s)
function iniField(){
	var isCWO111Process = (typeof processId !== "undefined" && processId == "CWO111");
	if(isCWO111Process){
		// 只要為 CWO111 流程就顯示 ForSVN，並鎖定為 Y、不可被操作
		$("input[name='ForSVN']").css('display',"");
		$("label[for='ForSVN_0'], label[for='ForSVN']").css('display',"");
		$("input[name='ForSVN']").attr('disabled',true);
		$("input[name='ForSVN']").attr('checked',true);
		getFacInfo_CW();
    hdn_formnumber_title.value = "SVN111"; //20251125 Dillan 新增表單號判斷
	}else{
		// 其他流程一律隱藏 ForSVN，並維持預設 N
		$("input[name='ForSVN']").css('display',"none");
		$("label[for='ForSVN_0'], label[for='ForSVN']").css('display',"none");
		$("input[name='ForSVN']").attr('disabled',true);
		$("input[name='ForSVN']").attr('checked',false);
    hdn_formnumber_title.value = form_ou.value.toUpperCase()+"111"; //20251125 Dillan 新增表單號判斷
	}
}
/**
 * 20251124 重新設定OU、ORG
*/
function getFacInfo_CW(){
  //DWRUtil.removeAllOptions("form_org"); //刪除目前ORG選項
  document.getElementById("form_org").innerHTML = "";//刪除目前ORG選項
	form_ou.value = "svn"; //因為勾選，所以設為SVN的OU
  //設定公司 OU ORG 
  setCompanyObject();
  //設定公司別
  setSelectDefalut("form_ou", apiInvoke + "BPM_COMPANY_INFO_LIST", {}, "");
  //form_ou.disabled = true;//公司別鎖定下拉選項
  //setCompanyValueByUser();
}
/**
  *設定會簽單位
  *SetApproveDeptChkBox
*/
function SetApproveDeptChkBox(){ //UserFunc.asp:1569
	if (IsRMAApply() == false){ 	//為RMA單位申請
		senao111035_0.checked = true; //RD
		senao111056_0.checked = true; //PM
		senao111044_0.checked = true; //QE
		senao111041_0.checked = true; //PMC
		senao111038_0.checked = true; //PE
		if (senao111015.value == "1"){ //品牌為客製(OEM/ODM), 請會簽Sales
			senao111065_0.checked = true; //Sales Section
		}
	}
	if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) >= 0){ //senao111004.value==15313	//電子工程課需勾選[加簽單位]
		//可輸入RD Section主辦
    $("#senao111036").prop("readOnly", false);	//R&D Section 主辦人ID
		senao111036.style.backgroundColor = "#fbf1c0";
    $('#senao111036').prop("disabled", false);
    $('#senao111036_b1').prop("disabled", false);
	}
	//20260204 Dillan add(s)
  $("input[id$='_b1'], button[id$='_b1']").filter(function(){ 
    return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)_b1$/gi);
  }).prop("disabled", false);
  //20260204 Dillan add(e)
	//20260211 Dillan add(s)
	$("input[type=text]").filter(function(){ 
    return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)$/gi);
  }).prop("readOnly", false);
	//20260211 Dillan add(e)
	$("input[type=text]").filter(function(){ 
		//PMC1, OQC Section會辦單位(88,47), DCC已確認不再使用20180716,Chandler
		return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)$/gi);            
	}).change(function(){
    var strUserID = this.value.trim();            
    var strObjID = this.id;            
    var strOrigUserID = strUserID;
    var strObjID_Boss = left(strObjID, 9) + (parseInt(right(strObjID, 2) ) + 1);
    var tParams = [strOrigUserID, form_ou.value];
    var dataArray =  ajaxGetData(invokeURL + "BPM_SENAO111_75", {
      strOrigUserID:tParams[0],
      form_ou:tParams[1]
    })
    //以人員ID查詢人員ID,NAME,部門ID, NAME, 直屬主管ID, NAME
    if(dataArray[0].result == undefined){
      if (dataArray.length > 0){
        document.getElementById(strObjID + "_t1").value = fixNull(dataArray[0].USERNAME);
        document.getElementById(strObjID_Boss).value = fixNull(dataArray[0].BOSS_ID);
        document.getElementById(strObjID_Boss + "_t1").value = fixNull(dataArray[0].BOSS_NAME);
      /* //20260211 Dillan marked
      }else{
        alert("此工號" + strUserID + "不正確");
        document.getElementById(strObjID).value = "";
        document.getElementById(strObjID + "_t1").value = "";
        document.getElementById(strObjID_Boss).value = "";
        document.getElementById(strObjID_Boss + "_t1").value = "";
      }
      */
      //20260211 Dillan add(s) cwo流程會簽人員不只該ou也有senao的情況
      }else{
        tParams = [strOrigUserID, "senao"];
        var dataArray =  ajaxGetData(invokeURL + "BPM_SENAO111_75", {
          strOrigUserID:tParams[0],
          form_ou:tParams[1]
        })
        //以人員ID查詢人員ID,NAME,部門ID, NAME, 直屬主管ID, NAME
        if(dataArray[0].result == undefined){
          if (dataArray.length > 0){
            document.getElementById(strObjID + "_t1").value = fixNull(dataArray[0].USERNAME);
            document.getElementById(strObjID_Boss).value = fixNull(dataArray[0].BOSS_ID);
            document.getElementById(strObjID_Boss + "_t1").value = fixNull(dataArray[0].BOSS_NAME);
          }else{
            alert("此工號" + strUserID + "不正確");
            document.getElementById(strObjID).value = "";
            document.getElementById(strObjID + "_t1").value = "";
            document.getElementById(strObjID_Boss).value = "";
            document.getElementById(strObjID_Boss + "_t1").value = "";
          }
        }else{
          console.log("function:"+"SetApproveDeptChkBox" + " API:" + "BPM_SENAO111_75 "+ dataArray[0].result);
          return false;
        }
      }
      //20260211 Dillan add(e)
    }else{
      console.log("function:"+"SetApproveDeptChkBox" + " API:" + "BPM_SENAO111_75 "+ dataArray[0].result);
      return false;
    }
	});
}	//end of SetApproveDeptChkBox 設定會簽單位
/**
 * 設定必輸的欄位 - 目前只有設定開單狀態
 * setRequiredStyle
 *@param ftype 表單狀態
*/
function setRequiredStyle(ftype){
	if (ftype == "Create"){
    $('#senao111003_b1').prop("disabled", false);//申請人ID
    $("#senao111003").prop("readOnly", false);
    $("#senao111071").prop("readOnly", false);//機種Project Code
    $('#senao111071_b1').prop("disabled", false);
		senao111071.style.backgroundColor = "#fbf1c0"; //機種Project Code
		senao111003.style.backgroundColor = "#fbf1c0"; //申請人工號
		senao111003_t1.style.backgroundColor = "#fbf1c0"; //申請人姓名
    $("#senao111014").prop("readOnly", false);
		senao111014.style.backgroundColor = "#fbf1c0"; //Model Name
    $('#senao111014_b1').prop("disabled", false);
		senao111081.style.backgroundColor = "#fbf1c0"; //EC內容是否需修改生產規格書?
		senao111015.style.backgroundColor = "#fbf1c0"; //Brand
		senao111016.style.backgroundColor = "#fbf1c0"; //Reason of Change
		senao111017.style.backgroundColor = "#fbf1c0"; //Remark
    $("#senao111017").prop("readOnly", false); //Change Cause Description & Remark
		senao111019.style.backgroundColor = "#fbf1c0"; //Method of Change
		senao111020.style.backgroundColor = "#fbf1c0"; //Method of Change: dropdownlist 1
		senao111021.style.backgroundColor = "#fbf1c0"; //Method of Change: dropdownlist 2
		senao111024.style.backgroundColor = "#fbf1c0"; //Method of Change: dropdownlist 3
	}
}
/**
  *是否為RMA單位申請
  *IsRMAApply
  *@return retVal true/false
*/
function IsRMAApply(){
	var retVal= false;
	if(querySNSI003_Org("SN111_S20").indexOf(senao111004.value) >= 0){
		retVal = true;
	}
	return retVal;
}	//end of IsRMAApply 是否為RMA單位申請
/**
 * 設定各關卡欄位狀態及初始值
 * SetFieldStatus_by_activityId
 *@param ftype 表單狀態
*/
function SetFieldStatus_by_activityId(ftype){
	setRequiredStyle(ftype);	//設定必輸的欄位 - 目前只有設定開單狀態
  document.getElementById("Link213").target = "_blank";
  document.getElementById("Link213").href = "/BPMWeb/doc/SENAO111/ImportXls.xls";
  document.getElementById("Link236").target = "_blank";
  // document.getElementById("Link236").href = "../../CustomSNO/linkFile/SENAO111/MBOM ECR ECN 申請操作手冊20241106.pptx";  20241206 Eason Marked
  document.getElementById("Link236").href = "/BPMWeb/doc/SENAO111/MBOM ECR ECN 申請操作手冊20241106.pptx";     //20241206 Eason Add
  document.getElementById("Link237").target = "_blank";
  document.getElementById("Link237").href = "http://ezflow.senao.com/EF2KWeb/CHT/Forms/SENAO111/SENAO111.htm";
  document.getElementById("Link259").target = "_blank";
  document.getElementById("Link259").href = "/BPMWeb/doc/SENAO111/發料紀錄.xlsx";
	
	var resdb006 = "";
	var tGrid1Data = getGridData(0); 
	var tGrid1DataCount = tGrid1Data.length;
	var i = 0;
	var j = 0;
	
	var isDept15313 = false;
	if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){	//電子工程課需勾選[加簽單位]
		isDept15313 = true;
	}
    
  if (ftype == "Create"){
    senao111003_onchange();	//申請人_onchange
  }
	
	if (activityId == "0001"){ //填單人關卡 , For DCC俞素芬需求, 若退回填單人且有填ECO Number時, 會被要求上傳附件, 因此開放填單人於有填ECO Number時讓填單人可以刪除ECO Number
    if (senao111014_t4.value != ""){
      $("#senao111014_t4").prop("readOnly", false);
      $("#senao111014_t5").prop("readOnly", false);
    }
		
    //excel upload權限控制-可以使用批次上傳的權限,待上線穩定後再開放
    if (querySNSI003_Org("SN111_S31").indexOf(orgUnitIds) >= 0 || getGrpUsrIDStr("SN111_79").indexOf(userId) >= 0){
      $('#btnUploadXls').prop("disabled", false);
      // btnUploadXls.disabled = true;
    }else{
      $('#btnUploadXls').prop("disabled", true);
    }
  }
	
  if (senao111086.value != ""){ //UserFunc.asp:1323    //其他備註提醒    
    if (document.getElementById("hdnMethod") != null){
      if (document.getElementById("hdnMethod").value == "handleForm"){
        alert(senao111086.value);
      }
    }
  }
  if (activityId == "0460"){	//PM與SM會辦人員簽核0460
    if (isOdmEco.value == "Y"){	//是否為配合snwl eco的單據
      resdb006 = "3";
      if (hdn_ODM_APPLY.value != "SENAO" && hdn_ODM_APPLY.value != "SNWL"){	//ODM_APPLY
          resdb006 = "1";
      }
      if (resdb006 == "3"){ //簽核改會辦
        if (window.parent.document.getElementById("btnTerminateProcess") != null){    //終止流程
            window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
        }
        if (window.parent.document.getElementById("btnReexecuteActivity") != null){    //退回重辦
            window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
        }
      }
    }
    if (workitemownerid == senao111057.value){	//PM Section 主辦人ID
      if (isOdmEco.value == "Y"){	//是否為配合snwl eco的單據
        if (hdn_ODM_APPLY.value == "SENAO"){   	//ODM_APPLY             
          if (document.getElementById("hdnMethod") != null){
            if (document.getElementById("hdnMethod").value == "handleForm"){
              alert("[廠內申請SonicWALL相關ECR流程]相關人員請附上客戶ECO Number!");
            }
          }
        }else if (hdn_ODM_APPLY.value == "SNWL"){	//ODM_APPLY
          if (document.getElementById("hdnMethod") != null){
            if (document.getElementById("hdnMethod").value == "handleForm"){
              alert("[SonicWALL_ECO流程]相關人員請附上客戶確認附件!");
            }
          }
        }
      }
      // 20180706 Milla 資訊服務申請單#7599 在單位簽核流程之業務(主辦)關卡<關號0460>開放可修改ECO Number
      if (senao111087.value != ""){	//客戶名稱
          $("#senao111014_t4").prop("readOnly", false);	//ECO Number
          $("#senao111014_t5").prop("readOnly", false);
      }
      //20181109 Chandler for DCC request
      if (IsOBM()){	//OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更
        senao111019_t2.style.backgroundColor = "#fbf1c0";	//Method of Change: Order Number
        $("#senao111019_t2").prop("readOnly", false);
        $('#senao111019_t2').prop("disabled", false);
        senao111019_t4.style.backgroundColor = "#fbf1c0";	//Method of Change: Order Type
        $('#senao111019_b4').prop("disabled", false);
      }
      //20181109 Chandler for DCC request            
    }else{
      $('#Attachment').prop("disabled", true);           
    }
    // 20180706 Milla 資訊服務申請單#7599 在單位簽核流程之業務(主辦)關卡<關號0460>開放可修改ECO Number
    if (workitemownerid == senao111066.value){	//Sales Section 主辦人ID
      if (senao111078.value != "" && senao111078.value != "N"){	//是否routing to SonicWALL
        senao111014_t4.style.backgroundColor = "#fbf1c0";	//ECO Number
        $("#senao111014_t4").prop("readOnly", false);
      }
      if (IsODM()){	//ODM ( Custom made ) and select method of Change is "6: By OE/工單變更
        senao111019_t2.style.backgroundColor = "#fbf1c0"; //Order Number
        $("#senao111019_t2").prop("readOnly", false);
        senao111019_t4.style.backgroundColor = "#fbf1c0"; //Order Type
        $('#senao111019_b4').prop("disabled", false);
      }
      // 20180706 Milla 資訊服務申請單#7599 在單位簽核流程之業務(主辦)關卡<關號0460>開放可修改ECO Number
      if (senao111087.value != ""){	//客戶名稱
        $("#senao111014_t4").prop("readOnly", false);//ECO Number
        $("#senao111014_t5").prop("readOnly", false);
        senao111014_t4.style.backgroundColor = "#fbf1c0";
        senao111014_t5.style.backgroundColor = "#fbf1c0";
      }            
    }
  }
	else if (activityId == "0470"){	//PM與SM會辦單位主管簽核0470
		if (isOdmEco.value == "Y"){	//是否為配合snwl eco的單據
      resdb006 = "3";
      if (hdn_ODM_APPLY.value != "SENAO" && hdn_ODM_APPLY.value != "SNWL"){	//ODM_APPLY
          resdb006 = "1";
      }
      if (resdb006 == "3"){ //簽核改會辦
        if (window.parent.document.getElementById("btnTerminateProcess") != null){    //終止流程
            window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
        }
        if (window.parent.document.getElementById("btnReexecuteActivity") != null){    //退回重辦
            window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
        }
      }
    }
  }
	else if (activityId == "0490"){	//客戶ECO流程生物管工程會辦單位主管簽核0490
    if (workitemownerid == senao111043.value){	//PMC Section 主管ID
      //BeforeApproveForm.asp:928 簽核改會辦
      if (window.parent.document.getElementById("btnTerminateProcess") != null){    //終止流程
          window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
      }
      if (window.parent.document.getElementById("btnReexecuteActivity") != null){    //退回重辦
          window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
      }
    }
  }
  else if ((activityId == "0070-0010") || (activityId == "0001" && isDept15313 == true)){	//DCC簽核0070-0010 || (填單人關卡 && 為電子工程課)
    if (senao111010.value == "0"){	//Type: ECR Change
			var tempECR = "";//20251126 Dillan add
      if (senao111005.value.trim() == ""){	//ECR No.
        if (UPDATE_ECO_NUMBER() == true){	//同張主替代料Change EC 將ECO-2轉換成XXXXXX-2
          //senao111005.value = right(serialNumber,6) + "-1";	//在DCC第1次簽核，表單自動帶出表單序號後六碼(若為主/替料Change EC，序號6碼後加-1，例:000001-1)//20251126 Dillan marked
          tempECR = right(SERIALNUMBER,6) + "-1";	 //20251126 Dillan add
        }else{
          //senao111005.value = right(serialNumber,6);	//在DCC第1次簽核，表單自動帶出表單序號後六碼 //20251126 Dillan marked
          tempECR = right(SERIALNUMBER,6);//20251126 Dillan add
        }
				//20260204 Dillan add(s)
				if (typeof processId !== "undefined" && processId == "CWO111"){	   	
          // 1) 確保 tempECR 一定是字串，避免 match 直接掛掉
          tempECR = (tempECR == null) ? "" : String(tempECR);
          // 2) 如果 tempECR 可能是 "000007-1"，只取 - 前面的部分
          var baseStr = tempECR.split("-")[0];
          // 3) 只保留數字（以防前面混到 S、空白…）
          var numericPart = baseStr.replace(/[^\d]/g, "");   // e.g. "000007"
          // 4) suffixPart 若你還要保留原本 "-1" 這種尾巴
          var suffixPart = "";
          var mSuffix = tempECR.match(/-\d+$/);
          if (mSuffix) suffixPart = mSuffix[0];
          // 5) 轉數字並加 49（一定要防呆）
          var baseNum = parseInt(numericPart, 10);
          if (isNaN(baseNum)) {
          } else {
            var newNum = baseNum + 49;
            // 6) IE 友善補零到固定長度 (你要 5 位就 5，要 6 位就 6)
            var width = 5;  // <-- 你原本是 padStart(5)
            var numStr = String(newNum);
            while (numStr.length < width) numStr = "0" + numStr;
            // 7) 重組
            tempECR = "S" + numStr + suffixPart;
          }
        }
				senao111005.value = tempECR; // 若不需要自動帶入，可移除此行
				//20260204 Dillan add(e)
      }
    }
    tGrid1Data = getGridData(0); 
    tGrid1DataCount = tGrid1Data.length;
    for (i = 0; i < tGrid1DataCount; i++){
      if (IsRdApply()){	//為RD人員申請表單
        if (IsCircuitDiagram(tGrid1Data[i]['SENAO111D004'], tGrid1Data[i]['SENAO111D006'])){	//是否為線路圖 Assembly Level Part Number(senao111d004), Part Number(senao111d006)
          $('#senao111076').prop("disabled", false);//設定是否修改線路的欄位狀態,SetCircuitDiagramStatus()
          break;
        }
      }
    }
    // 不允許DCC人員挑選EE的人員
    $('#senao111068').prop("disabled", true);
				
		//DCC簽核時可維護會辦人員或電子工程課開單僅可維護RD會辦人員, CheckFieldData.asp:1327
		$("input[type=checkbox]").filter(function(){ //checkbox enable
			if (activityId == "0001" && isDept15313 == true){
				//return this.id.match(/^senao111035_0$/gi);
			}else{
				//PMC1, OQC Section會辦單位(88,47), DCC已確認不再使用20180716,Chandler
				return this.id.match(/^senao1110(68|35|38|41|44|56|65|59)_0$/gi);
			}
		}).prop("disabled", false);
		
		$("input[type=checkbox]").filter(function(){
			if(activityId == "0001" && isDept15313 == true){
				return this.id.match(/^senao111035_0$/gi);
			}else{
				//PMC1, OQC Section會辦單位(88,47), DCC已確認不再使用20180716,Chandler
				return this.id.match(/^senao1110(68|35|38|41|44|56|65|59)_0$/gi);
			}            
		}).click(function(){
			var getDocumentID_Chkbox = this.id;
			var getDocumentID = "senao1110" + (parseInt(right(getDocumentID_Chkbox.replace("_0", ""), 2)) + 1);
			var getDocumentID_Boss = "senao1110" + (parseInt(right(getDocumentID, 2)) + 1);
			//alert(getDocumentID+"\n"+getDocumentID_Boss);
			if (this.checked){                
        $("#" + getDocumentID + "_b1").prop("disabled", false);
				document.getElementById(getDocumentID).style.backgroundColor="#fbf1c0";
        $("#" + getDocumentID + "_b1").prop("readOnly", false);//20260119 Dillan add
			}else{
        $("#" + getDocumentID + "_b1").prop("disabled", true);
				document.getElementById(getDocumentID).value = "";
				document.getElementById(getDocumentID).style.backgroundColor="#ffffff";
			}
		});
		
		setApproveDeptStyle(isDept15313);	//設定已勾選的會辦單位欄位狀態
		
		$("input[type=text]").filter(function(){ 
			//PMC1, OQC Section會辦單位(88,47), DCC已確認不再使用20180716,Chandler
			return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)$/gi);            
		}).prop("readonly",false);
    //202602024 Dillan add(s)
    $("input[id$='_b1'], button[id$='_b1']").filter(function(){ 
      return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)_b1$/gi);
    }).prop("disabled", false);
    //202602024 Dillan add(e)

		$("input[type=text]").filter(function(){ 
			//PMC1, OQC Section會辦單位(88,47), DCC已確認不再使用20180716,Chandler
			return this.id.match(/^senao1110(69|36|39|42|45|57|66|60)$/gi);            
		}).change(function(){
			var strUserID = this.value.trim();            
			var strObjID = this.id;            
			var strOrigUserID = strUserID;
			var strObjID_Boss = left(strObjID, 9) + (parseInt(right(strObjID, 2) ) + 1);
			var tParams = [strOrigUserID, form_ou.value];
			var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_75", {
        strOrigUserID:tParams[0],
        form_ou:tParams[1]
      })
      if(dataArray[0].result == undefined){
        if (dataArray.length > 0){
          document.getElementById(strObjID + "_t1").value = fixNull(dataArray[0].USERNAME);
          document.getElementById(strObjID_Boss).value = fixNull(dataArray[0].BOSSID);
          document.getElementById(strObjID_Boss + "_t1").value = fixNull(dataArray[0].BOSSNAME);
          /*	//20260211 Dillan marked(s)
                }else{
            alert("此工號" + strUserID + "不正確");
            document.getElementById(strObjID).value = "";
            document.getElementById(strObjID + "_t1").value = "";
            document.getElementById(strObjID_Boss).value = "";
            document.getElementById(strObjID_Boss + "_t1").value = "";
          }
            */	//20260211 Dillan marked(e)
          //20260211 Dillan add(s)
        }else{
          tParams = [strOrigUserID, "senao"];
          dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_75", {
            strOrigUserID:tParams[0],
            form_ou:tParams[1]
          });	//以人員ID查詢人員ID,NAME,部門ID, NAME, 直屬主管ID, NAME
          if(dataArray[0].result == undefined){
            if (dataArray.length > 0){
              document.getElementById(strObjID + "_t1").value = fixNull(dataArray[0].USERNAME);
              document.getElementById(strObjID_Boss).value = fixNull(dataArray[0].BOSSID);
              document.getElementById(strObjID_Boss + "_t1").value = fixNull(dataArray[0].BOSSNAME);
            }else{
              alert("此工號" + strUserID + "不正確");
              document.getElementById(strObjID).value = "";
              document.getElementById(strObjID + "_t1").value = "";
              document.getElementById(strObjID_Boss).value = "";
              document.getElementById(strObjID_Boss + "_t1").value = "";
            }
          }else{
            console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_SENAO111_75 "+ dataArray[0].result);
            return false;
          }
        }
        //20260211 Dillan add(e)
      }else{
        console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_SENAO111_75 "+ dataArray[0].result);
        return false;
      }
		});
  }// end of 0070-0010
  else if (activityId.indexOf("0008-") == 0){	//Ruckus資料審核、Meraki資料審核、Fortinet資料審核、WatchGuard資料審核、Proxim資料審核、娜亞資料審核、Aerohive資料審核、Extreme資料審核、恩嘉資料審核
    $("#senao111010").prop("disabled", true);
    $("#senao111015").prop("disabled", true);
    $('#senao111016').prop("disabled", true);
    $('#senao111019').prop("disabled", true);
    $('#senao111020').prop("disabled", true);
    $('#senao111021').prop("disabled", true);
    $('#senao111024').prop("disabled", true);
    if (senao111087.value != ""){	//客戶名稱
      $('#senao111014_t4').prop("disabled", false);// ECO Number
      $('#senao111014_t5').prop("disabled", false);
      $("#senao111014_t4").prop("readOnly", false); // ECO Number
      $("#senao111014_t5").prop("readOnly", false);
      senao111014_t4.style.backgroundColor = "#fbf1c0";
      senao111014_t5.style.backgroundColor = "#fbf1c0";
    }
  }
	else if (activityId == "0009-01"){	//SNWL簽核人員_0009-01 資訊服務申請單#SENAO10100001979 若填單人選取by OE變更, SNWL簽核人員請協助開啟填寫production order之權限. 後續關卡生物管可維持可修改狀態
		if (senao111019.value == "6"){	//Method of Change - 6. By OE/工單變更(value = 6)
      $("#senao111019_t3").prop("readOnly", false);//Method of Change: Production Order
			senao111019_t3.style.backgroundColor = "#fbf1c0";
			if (document.getElementById("hdnMethod") != null){
				if (document.getElementById("hdnMethod").value == "handleForm"){
					alert("請填寫[Production Order], 且必需大於12碼!");
				}
			}
		}
		
	}//end of activityId == "0009-01" SNWL簽核人員_0009-01
  else if (activityId == "0080-0010" || activityId == "0001"){	//DCC主管簽核0080-0010 || 填表人
    //線路圖允許dcc人員與dcc主管可編輯
    tGrid1Data = getGridData(0); 
    tGrid1DataCount = tGrid1Data.length;
    if (IsRdApply()){	//為RD人員申請表單
      for (i = 0; i < tGrid1DataCount; i++){                
        if (IsCircuitDiagram(tGrid1Data[i]['SENAO111D004'], tGrid1Data[i]['SENAO111D006'])){	//是否為線路圖 Assembly Level Part Number(senao111d004), Part Number(senao111d006)
          $('#senao111076').prop("disabled", false);//設定是否修改線路的欄位狀態,SetCircuitDiagramStatus()
          break;
        }
      }
    }
  }
  //else if (activityId == "0160" || activityId == "0200" ||activityId == "0480"){	//生物管工程會辦單位簽核0160 || 試投產會辦單位人員簽核0200 || 客戶ECO流程生物管工程會辦人員簽核0480 //20260128 Dillan marked
	else if (activityId == "0160" || activityId == "0200" ||activityId == "0480" || activityId.indexOf("VN0160") == 0){	//生物管工程會辦單位簽核0160 || 試投產會辦單位人員簽核0200 || 客戶ECO流程生物管工程會辦人員簽核0480 //20260304 Dillan mod VN0160條件改為包含即可
    //20231121 Steve 因接收時workitemownerid不正確,導致卡控失效
    //if (workitemownerid == senao111042.value){	//PMC Section 主辦人ID
		//if(activityId == "0160" || activityId == "0200" || activityId == "0480") //20260128 Dillan marked
		if(activityId == "0160" || activityId == "0200" || activityId == "0480" || activityId.indexOf("VN0160") == 0) //20260304 Dillan mod VN0160條件改為包含即可
		{
      if (senao111019.value == "2"){	//Method of Change - 3. Change after Inventory Exhausted(value = 2)
        senao111019_t1.style.backgroundColor = "#fbf1c0";	//變更方式-依日期變更 文字框
        $('#senao111019_t1_btn').prop("disabled", false);//變更方式-依日期變更 按鈕
        if (senao111019_t1.value.trim() == ""){
          if (document.getElementById("hdnMethod") != null){
            if (document.getElementById("hdnMethod").value == "handleForm"){
              alert("請選擇用盡[Date]");
            }
          }
        }
      }else if (senao111019.value == "6"){	//Method of Change - 6. By OE/工單變更(value = 6)
        $("#senao111019_t3").prop("readOnly", false);//Method of Change: Production Order
        senao111019_t3.style.backgroundColor = "#fbf1c0";
        if (document.getElementById("hdnMethod") != null){
          if (document.getElementById("hdnMethod").value == "handleForm"){
            alert("請填寫[Production Order], 若無工單請填寫 NA !!");
          }
        }
      }
    }

		if (activityId == "0200"){	//試投產會辦單位人員簽核0200
			if (workitemownerid == senao111057.value){	//PM Section 主辦人ID
				//RMA關卡人員角色同PMC人員/Phoebe.20110809
				if (IsRdApply()){	//為RD人員申請表單
					if (senao111019.value == "2"){	//Method of Change - 3. Change after Inventory Exhausted(value = 2)
						senao111019_t1.style.backgroundColor = "#fbf1c0";	//變更方式-依日期變更 文字框
            $('#senao111019_t1_btn').prop("disabled", false);
						if (document.getElementById("hdnMethod") != null){
							if (document.getElementById("hdnMethod").value == "handleForm"){
								alert("請選擇用盡[Date]");
							}
						}
					}else if (senao111019.value == "6"){	//Method of Change - 6. By OE/工單變更(value = 6)
            $("#senao111019_t3").prop("readOnly", false);	//Method of Change: Production Order
						senao111019_t3.style.backgroundColor = "#fbf1c0";
						if (document.getElementById("hdnMethod") != null){
							if (document.getElementById("hdnMethod").value == "handleForm"){
								alert("請填寫[Production Order], 且必需大於12碼!");
							}
						}
					}
				}
			}
			
			if (workitemownerid == senao111057.value || workitemownerid == senao111066.value){	//PM Section 主辦人ID || Sales Section 主辦人ID
				if (IsSN_ECR_TO_SNWL()){	//由senao 發出SonicWALL 相關機種的變更(是否routing to SonicWALL)
					if (document.getElementById("hdnMethod") != null){
						if (document.getElementById("hdnMethod").value == "handleForm"){
							alert("[Need to Route to SonicWALL]業務人員請附上客戶確認附件!");
						}
					}
				}
			}
			
			if (workitemownerid != senao111057.value && workitemownerid != senao111066.value){	//PM Section 主辦人ID &&  Sales Section 主辦人ID
				Attachment.disabled = true;
        $('#Attachment').prop("disabled", true);

				if (getGrpUsrIDStr(hdn_PMCGroup.value).indexOf(workitemownerid) >= 0){	//PMC主辦欄位是否為群組
          $('#senao111019_t1_btn').prop("disabled", true);//變更方式-依日期變更 按鈕
				}
			}
		}
		
		//if (activityId == "0160" || activityId == "0480"){ //BeforeApproveForm.asp:854	//生物管工程會辦單位簽核0160 || 客戶ECO流程生物管工程會辦人員簽核0480 //20260128 Dillan marked
		if (activityId == "0160" || activityId == "0480" || activityId.indexOf("VN0160") == 0){ //BeforeApproveForm.asp:854	//生物管工程會辦單位簽核0160 || 客戶ECO流程生物管工程會辦人員簽核0480 //20260304 Dillan mod VN0160條件改為包含即可
			if (isNotNeedTryRun.value == "Y"){	//是否不需試投
        $('#Attachment').prop("disabled", true);
			}
            //20231121 Steve 因接收時workitemownerid不正確,導致卡控失效
			if (workitemownerid != senao111042.value){ //只有PMC主辦開放019_t1	//PMC Section 主辦人ID
         $('#senao111019_t1_btn').prop("disabled", true);//變更方式-依日期變更 按鈕
			} 
            //if(activityId == "0160" || activityId == "0480"){ //20260128 Dillan marked
			if(activityId == "0160" || activityId == "0480" || activityId.indexOf("VN0160") == 0){ //20260304 Dillan mod VN0160條件改為包含
        $('#senao111019_t1_btn').prop("disabled", false);
      }
			//20231207 Steve 0480起始導入製令單號卡控
			if (activityId == "0480"){  //客戶ECO流程生物管工程會辦人員簽核0480 [formOpen]0480, BeforeApproveForm.asp:903
				//if (workitemownerid == senao111042.value){	//PMC Section 主辦人ID
				if (workitemownerid == senao111042.value || activityId == "0480"){
					//BeforeApproveForm.asp:904 簽核改會辦
					if (window.parent.document.getElementById("btnTerminateProcess") != null){    //終止流程
						window.parent.document.getElementById("btnTerminateProcess").style.display = "none";
					}
					if (window.parent.document.getElementById("btnReexecuteActivity") != null){    //退回重辦
						window.parent.document.getElementById("btnReexecuteActivity").style.display = "none";
					}
					var noticeMsg = "";
					if (hdn_ODM_APPLY.value == "SNWL"){                
						noticeMsg = "[SonicWALL_ECO流程]PMC人員請會簽!";
					}else if (hdn_ODM_APPLY.value == "Ruckus"){
						noticeMsg = "[Ruckus_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "Meraki"){
						noticeMsg = "[Meraki_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "Fortinet"){                
						noticeMsg = "[Fortinet_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "WatchGuard"){                
						noticeMsg = "[WatchGuard_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "Proxim"){                
						noticeMsg = "[Proxim_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "娜亞"){                
						noticeMsg = "[娜亞_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "Aerohive"){                
						noticeMsg = "[Aerohive_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "Extreme"){                
						noticeMsg = "[Extreme_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "恩嘉"){                
						noticeMsg = "[恩嘉_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}else if (hdn_ODM_APPLY.value == "緯創資通"){                
						noticeMsg = "[緯創資通_ECO流程]PMC人員請維護【表單附件】之「起始導入製令單號」!";
					}
					
					if (noticeMsg != ""){
						if (document.getElementById("hdnMethod") != null){
							if (document.getElementById("hdnMethod").value == "handleForm"){
								alert(noticeMsg);                        
							}
						}
					}
				}else{
					//senao111019_t1.disabled = true;
          $('#senao111019_t1_btn').prop("disabled", true);//變更方式-依日期變更 按鈕
				}
			}
		}
  }
  else if (activityId == "0110"){	//會辦單位簽核0110
		if (workitemownerid == senao111057.value || workitemownerid == senao111066.value){	//(PM Section 主辦人ID || Sales Section 主辦人ID)
			if (IsSN_ECR_TO_SNWL()){	//由senao 發出SonicWALL 相關機種的變更(是否routing to SonicWALL)
				if (document.getElementById("hdnMethod") != null){
					if (document.getElementById("hdnMethod").value == "handleForm"){
						alert("[Need to Route to SonicWALL]業務人員請附上客戶確認附件!");
					}
				}
			}
			if (IsOBM() || IsODM()){	//OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更	//ODM ( Custom made ) and select method of Change is "6: By OE/工單變更
				senao111019_t2.style.backgroundColor = "#fbf1c0";	//Method of Change: Order Number	
        $("#senao111019_t2").prop("readOnly", false);
				senao111019_t4.style.backgroundColor = "#fbf1c0";	//Method of Change: Order Type
        $('#senao111019_b4').prop("disabled", false);
			}
		}
		
    if (workitemownerid == senao111036.value){ //RD主辦0110-0010 R&D Section 主辦人ID
      $('#Attachment').prop("disabled", false);
    }else if (workitemownerid == senao111057.value){ ////PM Section 主辦人ID 0110-0020時,BeforeApproveForm.asp:729
      if (isNotNeedTryRun.value == "Y"){	//是否不需試投
        $('#Attachment').prop("disabled", false);
      }else{
        if (hdn_CHANGE_PER_OE_TYPE.value == "OBM"){	//ECR 為 OEM
          $('#Attachment').prop("disabled", true);
        }
      }
      //$$("img[alt='刪除檔案']").removeAttr("onclick");
    }else if (workitemownerid == senao111066.value){ ////Sales Section 主辦人ID SM主辦0110-0040, BeforeApproveForm.asp:762
      $('#Attachment').prop("disabled", false);
      if (hdn_CHANGE_PER_OE_TYPE.value == "ODM"){	//ECR 為 OEM
          $('#Attachment').prop("disabled", true);
      }
    }else{
      $('#Attachment').prop("disabled", true);
    }
  }
	else if (activityId == "0180"){ 	//QE/QC會辦人員簽核0180
		if (isNotNeedTryRun.value == "Y"){	//是否不需試投
			if (workitemownerid == senao111045.value){ //0180-0030 QE主辦	//QE Section 主辦人ID
        $('#Attachment').prop("disabled", true);
			}else{
        $('#Attachment').prop("disabled", true);              
			}
		}else{
      $('#Attachment').prop("disabled", false);
		}
  }
  else if (activityId == "0500-0010"){ //DCC簽核0500-0010 DCC人員(2ND)簽核: 選擇附件已下載
    $("#senao111010").prop("disabled", true);
    $("#senao111013_0").prop("checked", false);//Attachment verified is checked
    $('#senao111013_0').prop("disabled", false);
  }
	else if (activityId == "0502-0010"){ //EC第二次拋轉DCC簽核0502-0010 [formOpen] EC第二次拋轉DCC簽核0502-0010
    if (document.getElementById("hdnMethod") != null){
      if (document.getElementById("hdnMethod").value == "handleForm"){
        var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_76", {
          FormNo:FORMSERIALNUMBER
        })
        if(dataArray[0].result == undefined){
          if (dataArray.length > 0){
            senao111077.value = fixNull(dataArray[0].FORMSERIALNUMBER);	//技術文件單號
          }
        }else{
          console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_SENAO111_76 "+ dataArray[0].result);
          return false;
        }
        alert("此次為EC第二次拋轉簽核");
      }
    }
  }
  else if (activityId == "0510-0010"){ //DCC主管簽核0510-0010 DCC主管(2ND)簽核: 選擇bom表已修改
    $("#senao111012_0").prop("checked", false);
    $('#senao111012_0').prop("disabled", false);//BOM Modified checkbox
  }
	else if (activityId == "0006"){	//電子法規認證課簽核
    if (document.getElementById("hdnMethod") != null){
      if (document.getElementById("hdnMethod").value == "handleForm"){
        alert("請確認管制料是否正確.");
        gsenao111d029.style.backgroundColor = "#fbf1c0";
      }
    }
	//}else if ((activityId == "0010") || (activityId == "0520-0030" && hdn_SourcerList.value.indexOf(userId) > -1 && senao111014_t4.value != "" && senao111087.value == "SNWL")){	//0010 Sourcer簽核0010 || 會辦單位0520-0030	資訊服務申請單SENAO10100000336 //20251126 Dillan marked
	}else if ((activityId == "0010") || ((activityId == "0520-0030" || activityId.indexOf("VN0520-0030") == 0) && hdn_SourcerList.value.indexOf(userId) > -1 && senao111014_t4.value != "" && senao111087.value == "SNWL")){	//0010 Sourcer簽核0010 || 會辦單位0520-0030	資訊服務申請單SENAO10100000336 //20260304 Dillan mod VN0520-0030條件改為包含就好
		tGrid1Data = getGridData(0); 
    tGrid1DataCount = tGrid1Data.length;
		var strASSM_NO = "";	//上階料號
		var strCOMP_NO = "";	//本階料號
		var strType = "";	//處理
		var strADD = "";	//add reference
		var strDEL = "";	//delete reference
		var tParams;
		var dataArray;
		var dataArray2;
		var noticeMsg = "";
		var AddAry;
		var AddAry2;
    for (i = 0; i < tGrid1DataCount; i++){
      strASSM_NO = tGrid1Data[i]['SENAO111D004'];
      strCOMP_NO = tGrid1Data[i]['SENAO111D006'];
      strType = tGrid1Data[i]['SENAO111D017'];
      strADD = tGrid1Data[i]['SENAO111D012'];
      strDEL = tGrid1Data[i]['SENAO111D013'];
      if (strType.indexOf("替代料") > -1){
        tParams = [strCOMP_NO, orgno];
        dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
          strCOMP_NO:tParams[0],
          orgno:tParams[1]
        })
        if(dataArray[0].result == undefined){
          if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
            tParams = [orgno, fixNull(dataArray[0].INVENTORY_ITEM_ID)];
            dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_79", {
              orgno:tParams[0],
              INVENTORY_ITEM_ID:tParams[1]
            })
            if(dataArray2[0].result == undefined){
              if (dataArray2.length > 0){
                if (Number(fixEmptyTo0(fixNull(dataArray2[0].A))) == 0){
                  noticeMsg += "[表單附件]上階料號:" + strASSM_NO + "的本階料號:" + strCOMP_NO + "未經決裁，請至系統完成決裁作業! \n";
                }
              }
            }else{
              console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_ERP_SENAO111_79 "+ dataArray2[0].result);
              return false;
            }
          }
        }else{
          console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
          return false;
        }
				if (strADD != "" && strType == "替代料"){
					AddAry = strADD.split(",");	//Add Reference				
					for (j = 0; j < AddAry.length - 1; j++){
						if (AddAry[j] != ""){
							AddAry2 = AddAry[j].split("-");
							if (AddAry2[0] != ""){
								tParams = [AddAry2[0], orgno];
								dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
                  strCOMP_NO:tParams[0],
                  orgno:tParams[1]
                })
                if(dataArray[0].result == undefined){
                  if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray.length > 0){
                    tParams = [orgno, fixNull(dataArray[0].INVENTORY_ITEM_ID)];
                    dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_79", {
                      orgno:tParams[0],
                      INVENTORY_ITEM_ID:tParams[1]
                    });
                    if(dataArray2[0].result == undefined){
                      if (dataArray2.length > 0){
                        if (Number(fixEmptyTo0(fixNull(dataArray2[0].A))) == 0){
                          noticeMsg += "[表單附件]上階料號:" + strASSM_NO + "的本階料號:" + strCOMP_NO + "的替代料號:" + AddAry2[0] + "未經決裁，請至系統完成決裁作業! \n";
                        }
                      }
                    }else{
                      console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_ERP_SENAO111_79 "+ dataArray2[0].result);
                      return false;
                    }
                  }
                }else{
                  console.log("function:"+"SetFieldStatus_by_activityId" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
                  return false;
                }
							}
						}
					}
				}
			}
		}
		
		if (noticeMsg != ""){
			if (document.getElementById("hdnMethod") != null){
				if (document.getElementById("hdnMethod").value == "handleForm"){
					alert(noticeMsg);                        
				}
			}
		}
	}
	    
  if (activityId.indexOf("0110-0050") == 0){	//0110-0050,0110-0050-2, 電子機構料件-加簽機構設計一課+機構設計二課+機構設計三課 訊息提示
    if (document.getElementById("hdnMethod") != null){
      if (document.getElementById("hdnMethod").value == "handleForm"){
        alert("電子機構料件-加簽機構設計一課+機構設計二課+機構設計三課");
      }
    }
  }
}
/**
  *帶出廠商與ECO Number欄位之編輯權限控制
  *setOdmFieldStatus
  *@param strModel Model ID
  *@param strEmpNo userId
  *@param strCustomer 客戶名稱
*/
function setOdmFieldStatus(strModel, strEmpNo, strCustomer){  //CheckFieldData.asp:4153
	senao111014_t4.style.backgroundColor = "#ffffff";	//ECO Number
  $("#senao111014_t4").prop("readOnly", true);
	senao111014_t5.style.backgroundColor = "#ffffff";	//ECO Number備註
  $("#senao111014_t5").prop("readOnly", true);
	senao111078.style.backgroundColor = "#ffffff";	//是否routing to SonicWALL
  $("#senao111078").prop("readOnly", true);
	senao111087[0].selected = true; //20190109 fixed
	//RMA申請時，開放填寫ECO NUMBER/Phoebe.20110808
	var isRMAApply = IsRMAApply();	//是否為RMA單位申請
	if (IsOdmModel(strModel, strCustomer) || isRMAApply ){	//為 odm 客戶的機種 || 為RMA單位申請
		if (IsOdmApplicant(strCustomer, strEmpNo) || isRMAApply ){ //為ODM 申請人員||為RMA單位申請
			senao111014_t4.style.backgroundColor = "#fbf1c0";
      $('#senao111014_t4').prop("readOnly", false);
			senao111014_t5.style.backgroundColor = "#fbf1c0";
      $('#senao111014_t5').prop("readOnly", false);
			if (isRMAApply){	//為RMA單位申請
				senao111087.value = "SNWL";
			}else{
				FindModelName_Customer();	//依 Model Name查客戶, 填入senao111087
			}
		}else{
			//20190816, reset eco no
			senao111014_t4.value="";
			senao111014_t5.value="";
		}
	}else{
		//20190816, reset eco no
		senao111014_t4.value="";
		senao111014_t5.value="";  
		FindModelName_Customer();	//依 Model Name查客戶, 填入senao111087
	}
}	//end of setOdmFieldStatus 帶出廠商與ECO Number欄位之編輯權限控制
/**
  *是否為RMA單位申請
  *IsRMAApply
  *@return retVal true/false
*/
function IsRMAApply(){
	var retVal= false;
	if(querySNSI003_Org("SN111_S20").indexOf(senao111004.value) >= 0){
		retVal = true;
	}
	return retVal;
}	//end of IsRMAApply 是否為RMA單位申請
/**
  *是否為 odm 客戶的機種
  *IsOdmModel
  *@param strModel Model Name ID/ Other Model Name
  *@param strCustomer 客戶名稱
  *@return retVal true/false
*/
function IsOdmModel(strModel, strCustomer){
	var retVal = false;
	if (strCustomer.trim() != ""){
		var tParams = new Array();
		var tDefaultAppendSQL = "";
		tParams.push(strCustomer);
		tParams.push(strModel);
    var dataArray =ajaxGetData(invokeURL + "BPM_ERP_SENAO111_16", {
      strCustomer:tParams[0],
      strModel:tParams[1],
    })
    if(dataArray[0].result == undefined){
      if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
        retVal = true;
      }    
    }else{
      console.log("function:"+"IsOdmModel" + " API:" + "BPM_ERP_SENAO111_16 "+ dataArray[0].result);
      return false;
    }
	}
	return retVal;
}	//end of IsOdmModel 是否為 odm 客戶的機種
/**
  *是否為ODM 申請人員
  *IsOdmApplicant
  *@param strCustomer 客戶名稱
  *@param strEmpNo 申請人
  *@return retVal true/false
*/
function IsOdmApplicant(strCustomer, strEmpNo){
	var retVal = false;
	var strCustomerList = querySNSI003_Org("SN111_S50");
	if (strCustomer == "SNWL"){            
		var dataArray = ajaxGetData(invokeURL + "BPM_getGroupUserIDbyOrg", {
      GID:"SN111_01",
      CID:form_ou.value
    })
    if(dataArray[0].result == undefined){        
      if (dataArray.length > 0) {
        var datalen = dataArray.length;
        for (var i=0; i < datalen; i++){
          if (dataArray[i].USERID == strEmpNo){
            retVal = true;
            break;
          }
        }
      }
    }else{
      console.log("function:"+"IsOdmApplicant" + " API:" + "BPM_getGroupUserIDbyOrg "+ dataArray[0].result);
      return false;
    }
	}else if (strCustomerList.indexOf(strCustomer) >= 0){
		retVal = true;
	}
	return retVal;
}	//end of IsOdmApplicant 是否為ODM 申請人員
/**
  *依 Model Name查客戶
  *FindModelName_Customer
*/
function FindModelName_Customer(){
	var tParams = new Array();
	var tDefaultAppendSQL = "";
	var Emplus_Flag = false;
  
	if (senao111014.value != ""){
		if (senao111014.value.indexOf("-") < 0){
			var dataArray1 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_38", {
        senao111014:"%" + senao111014.value + "%"
      })
      if(dataArray1[0].result == undefined){      
        var dataCount1 = dataArray1.length;
        for (var i=0; i < dataCount1; i++){
          if (fixNull(dataArray1[i].ATTRIBUTE1) == "恩嘉"){
            Emplus_Flag = true;
            break;
          }
        }
      }else{
        console.log("function:"+"FindModelName_Customer" + " API:" + "BPM_ERP_SENAO111_38 "+ dataArray[0].result);
        return false;
      }
		}
	}

	if (Emplus_Flag == true){
		senao111087.value = "恩嘉";	//客戶名稱
	}else{
		tParams.push(senao111014.value); //Model Name
		var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_38", {
      senao111014:tParams[0]
    })
    if(dataArray[0].result == undefined){  
      if (dataArray.length > 0){   
        senao111087.value = fixNull(dataArray[0].ATTRIBUTE1);	//客戶名稱
      }else {
        senao111087.value = "";	//客戶名稱
      }
    }else{
      console.log("function:"+"FindModelName_Customer" + " API:" + "BPM_ERP_SENAO111_38 "+ dataArray[0].result);
      return false;
    }
	}
	return true;
}	//end of FindModelName_Customer 依 Model Name查客戶
/**
 *抓取群組人員名單
 *getGrpUsrIDStr
 *@param strGrp 群組名稱
*/
function getGrpUsrIDStr(strGrp){
  var retVal = "";      
  var dataArray = ajaxGetData(invokeURL + "BPM_getGroupUserID", {
    id:strGrp
  })
  if(dataArray1[0].result == undefined){  
    var dataCount = dataArray.length;
    if (dataCount > 0){
      for (var i = 0; i < dataCount; i++){
        if (retVal != ""){
            retVal += ";";
        }
        retVal += fixNull(dataArray[i].USERID);
      }
    }
  }else{
    console.log("function:"+"getGrpUsrIDStr" + " API:" + "BPM_getGroupUserID "+ dataArray[0].result);
    return false;
  }
  return retVal; 
}
/**
  *OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更
  *IsOBM
  *@return retVal true/false
*/
function IsOBM(){ 
	var retVal = false;
	if (senao111019.value == "6" && senao111015.value == "0"){	//Method of Change-6. By OE/工單變更(value = 6) && Brand-Own Brand
		retVal = true;
	}
	return retVal;
}	//end of IsOBM OBM ( Own Brand ) and select method of Change is "6: By OE/工單變更
/**
 * 同張主替代料Change EC 將ECO-2轉換成XXXXXX-2
 * 針對同張主替代料Change EC，原主料改為替代料，或替代料改為主料時，Part Number料號填寫後，此欄會帶出ECO-2(指此料會在ECN 拋轉系統ECO時，採第2次拋轉)，在DCC第1次簽核系統會將ECO-2轉換成單號，例:000123-2
*/
function UPDATE_ECO_NUMBER(){	
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  
  for(var n = 0; n < tGrid1DataCount; n++){
    if(tGrid1Data[n]['SENAO111D028'] == "ECO-2"){	//ECO_Number(senao111d028)
      //tGrid1Data[n][25]= right(serialNumber, 6)+"-2";	//取後6碼-2 //20260204 Dillan marked
      //20260204 Dillan add(s)
      if (typeof processId !== "undefined" && processId == "CWO111"){	
        var tempECR = right(SERIALNUMBER,6);
        var baseNum = parseInt(tempECR, 10);
        if (isNaN(baseNum)) {
        } else {
          var newNum = baseNum + 49;
          // 6) IE 友善補零到固定長度 (你要 5 位就 5，要 6 位就 6)
          var width = 5;  // <-- 你原本是 padStart(5)
          var numStr = String(newNum);
          while (numStr.length < width) numStr = "0" + numStr;
          // 7) 重組
          tempECR = "S" + numStr;
          tGrid1Data[n]['SENAO111D028']= tempECR + "-2";	//取後6碼-2
        }
      }else{
        tGrid1Data[n]['SENAO111D028']= right(SERIALNUMBER, 6)+"-2";	//取後6碼-2
      }
      //20260204 Dillan add(e)
      retVal = true;
    }
  }
  setGridData(0, tGrid1Data);
  return retVal;
}
/**
  *依部門代號判斷是否為RD人員申請表單
  *IsRdApply
  *@return retVal true/false
*/
function IsRdApply(){
	var retVal = false;
	if (/^[16]/.test(senao111004.value) || querySNSI003_Org("SN111_S51").indexOf(senao111004.value) >= 0){  
		retVal = true;
	}
	return retVal;
}	//end of IsRdApply
/**
  *是否為線路圖
  *IsCircuitDiagram
  *@param strASSY_ITEM_NO 上階料號
  *@param strCOMP_ITEM_NO 本階料號
  *@return retVal true/false 
*/
function IsCircuitDiagram(strASSY_ITEM_NO, strCOMP_ITEM_NO){
	retVal = false;
  var strASSY = left(strASSY_ITEM_NO, 2);//取Assembly Level 前兩碼
  var strParttwo = left(strCOMP_ITEM_NO, 2);//取part Number前兩碼
  var strPartfour = left(strCOMP_ITEM_NO, 4);//取part Number前四碼

  var str = querySNSI003_Org("SN111_S58");
  var strArray = str.split("@@"); // 切割字串為陣列
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i] == strParttwo || strArray[i] == strPartfour || gsenao111d017.value == "替代料") {
      retVal = false;
      senao111076.value = "N";
      break;
    }else{
      if(strASSY =="52" || strASSY =="59"){ //Assembly Level為52,59階層料號
        retVal = true;
      }   
    }
  }
	return retVal;
}	//end of IsCircuitDiagram 是否為線路圖
/**
  *由senao 發出SonicWALL 相關機種的變更(是否routing to SonicWALL)
  *IsSN_ECR_TO_SNWL
  *@return retVal true/false
*/
function IsSN_ECR_TO_SNWL(){ 
	var retVal = false;
	if (senao111078.value == "Y" || senao111078.value != ""){	//是否routing to SonicWALL
		retVal = true;
	}
	return retVal;
}	//end of IsSN_ECR_TO_SNWL 由senao 發出SonicWALL 相關機種的變更(是否routing to SonicWALL)
/**
  *ODM ( Custom made ) and select method of Change is "6: By OE/工單變更
  *IsODM
  *@return retVal true/false
*/
function IsODM(){ 
	var retVal = false;
	if (senao111019.value == "6" && senao111015.value == "1"){	//Method of Change-6. By OE/工單變更(value = 6) && Brand-Custom Made
		retVal = true;
	}
	return retVal;   
}	//end of IsODM ODM ( Custom made ) and select method of Change is "6: By OE/工單變更
/**
  *由SonicWALL要求 Senao 做出的的變更
  *IsSNWL_ECO_TO_SN
  **@return retVal true/false
*/
function IsSNWL_ECO_TO_SN(){ 
	var retVal = false;	
	if (senao111014_t4.value != ""){	//ECO Number
		retVal = true;
	}
	return retVal;
}	//end of IsSNWL_ECO_TO_SN 由SonicWALL要求 Senao 做出的的變更
/**
 *設定合併簽核
 *makeUnionSign
*/
function makeUnionSign(){
  hdn_0110Mail.value = "";

  //QE主辦同申請人
  if (senao111044_0.checked == true && senao111045.value == senao111003.value){ 
      hdn_0110Mail.value += senao111045.value + ";";
      hdn_0110Mail.value += senao111046.value + ";";
  }

  //RD主辦同申請人或申請部門為15313電子工程課(CE)BeforeApproveForm.asp:466,strApplyID在申請部門為15313時=strRD
  if (senao111035_0.checked == true && (senao111036.value == senao111003.value || querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1)){ 
      hdn_0110Mail.value += senao111036.value + ";";
      hdn_0110Mail.value += senao111037.value + ";";
  }

  //需PM與SM簽核且不為SNWL ECO且PM=SM且為OEM且申請人為PM且不是OE/工單變更
  if (senao111056_0.checked == true	&& senao111065_0.checked == true	&& isOdmEco.value != "Y" 	&& senao111057.value == senao111066.value	
	&& hdn_CHANGE_PER_OE_TYPE.value == "OEM"	&& (senao111003.value == senao111057.value	&& senao111019.value != "6")){ 	
		hdn_0110Mail.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0110Mail.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0110Mail.value += senao111058.value + ";";
    }        
  }
	
  //需PM與SM簽核且不為SNWL ECO且PM=SM且為非OEM且(申請人為SM且不是OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value == senao111066.value && hdn_CHANGE_PER_OE_TYPE.value == "OEM" 
	&& (senao111003.value == senao111066.value && senao111019.value != "6")){ 
		hdn_0110Mail.value += senao111066.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0110Mail.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0110Mail.value += senao111067.value + ";"; //SM主管
    }        
  }

  //需PMSM簽核且非客戶ECO且PM<>SM且(申請人為PM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value != senao111066.value
	&& (senao111003.value == senao111057.value && senao111019.value != "6")){ 
		hdn_0110Mail.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0110Mail.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0110Mail.value += senao111058.value + ";"; //PM主管
    }        
  }
	
  //需PMSM簽核且非客戶ECO且PM<>SM且(申請人為SM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value != senao111066.value 
	&& (senao111003.value == senao111057.value && senao111019.value != "6")){ 
      hdn_0110Mail.value += senao111066.value + ";";
    if (senao111058.value == "SN111_02"){
      hdn_0110Mail.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
      hdn_0110Mail.value += senao111067.value + ";"; //SM主管
    }        
  }
	
  //需PMSM簽核且非客戶ECO且(PM<>SM或(PM=SM且為OEM))且PM為SN111_38
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" 
	&& (senao111057.value != senao111066.value || (senao111057.value == senao111066.value && hdn_CHANGE_PER_OE_TYPE.value == "OEM")) && (senao111057.value == "SN111_38")){ 
		hdn_0110Mail.value += getGrpUsrIDStr("SN111_38") + ";";        
  }
	
  //需PM簽核且不需SM簽核且非客戶ECO且(申請人=PM且不是OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == false && isOdmEco.value != "Y" && (senao111003.value == senao111057.value && senao111019.value != "6")){ 
  hdn_0110Mail.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0110Mail.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0110Mail.value += senao111058.value + ";"; //PM主管
    }        
  }
	
  //需PM簽核且不需SM簽核且非SNWL ECO且PM為品牌產品規劃一課
  if (senao111056_0.checked == true && senao111065_0.checked == false && isOdmEco.value != "Y" && isSN111_S38.value == "Y"){         
    hdn_0110Mail.value += getGrpUsrIDStr("SN111_63") + ";";                
  }
	
  //不需PM簽核且需SM簽核且非SNWL ECO且(申請人=SM且非OE/工單變更 )
  if (senao111056_0.checked == false && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111003.value == senao111066.value && senao111019.value != "6"){
    hdn_0110Mail.value += senao111066.value + ";";
  }
	
  //PMSM簽核且非SNWL ECO且PM<>SM且非(申請人為SM且非OE工單變更)且PM主管=SM主管
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value != senao111066.value 
  && senao111003.value == senao111066.value && senao111019.value != "6" && senao111058.value == senao111067.value){
    hdn_0110Mail.value += senao111067.value + ";"; //SM主管
  }

  //組0110-0120簽核人員名單
  hdn_0110Sign.value = "";
  hdn_0120Sign.value = "";
	
  //需QE單位簽核且申請人不為QE主辦且不需試投      
	if (senao111044_0.checked == true && senao111003.value != senao111045.value && isNotNeedTryRun.value == "Y"){
    hdn_0110Sign.value += senao111045.value + ";";
    hdn_0120Sign.value += senao111046.value + ";";
  }
	
  //需RD單位簽核且申請人不為RD主辦或申請部門不為15313電子工程課(CE)
  if (senao111035_0.checked == true && (senao111003.value != senao111036.value && querySNSI003_Org("SN111_S02").indexOf(senao111004.value) < 0)){
    hdn_0110Sign.value += senao111036.value + ";";
    hdn_0120Sign.value += senao111037.value + ";";
  }
	
  //需PM與SM簽核且非SNWL ECO且PM=SM且為OEM且非(申請人為PM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value == senao111066.value && hdn_CHANGE_PER_OE_TYPE.value == "OEM"
	&& !(senao111003.value == senao111057.value && senao111019.value != "6")){
    hdn_0110Sign.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0120Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0120Sign.value += senao111058.value + ";"; 
    }
          
  }
	
  //需PMSM簽核且非SNWL ECO且PM=SM且非OEM且非(申請人為SM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value == senao111066.value && hdn_CHANGE_PER_OE_TYPE.value != "OEM"
  && !(senao111003.value == senao111066.value && senao111019.value != "6")){
    hdn_0110Sign.value += senao111066.value + ";";    
    if (senao111066.value == "SN111_02"){
        hdn_0120Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0120Sign.value += senao111067.value + ";"; 
    }
  }
	
  //需PMSM簽核且非SNWL ECO且PM<>SM且非(申請人為PM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value != senao111066.value 
	&& !(senao111003.value == senao111057.value && senao111019.value != "6") ){
    hdn_0110Sign.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0120Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0120Sign.value += senao111058.value + ";"; 
    }
            
  }
	
  //需PMSM簽核且非SNWL ECO且PM<>SM且非(申請人為SM且非OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked == true && isOdmEco.value != "Y" && senao111057.value != senao111066.value 
	&& !(senao111003.value == senao111066.value && senao111019.value != "6")){
    hdn_0110Sign.value += senao111066.value + ";";
    if (senao111058.value != senao111067.value){
      hdn_0120Sign.value += senao111067.value + ";";
    }
  }
	
  //需PM簽核且不需SM簽核且非SNWL ECO且非(申請人=PM且不是OE/工單變更)
  if (senao111056_0.checked == true && senao111065_0.checked != true && isOdmEco.value != "Y" && !(senao111003.value == senao111057.value && senao111019.value != "Y")){
    hdn_0110Sign.value += senao111057.value + ";";
    if (senao111058.value == "SN111_02"){
        hdn_0120Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0120Sign.value += senao111058.value + ";"; 
    }   
  }

  //不需PM簽核且需SM簽核且非SNWL ECO且非(申請人=SM且非OE/工單變更 )
  if (senao111056_0.checked == false && senao111065_0.checked == true && isOdmEco.value != "Y" && !(senao111003.value == senao111066.value && senao111019.value != "6")){
    hdn_0110Sign.value += senao111066.value + ";"; 
    hdn_0120Sign.value += senao111067.value + ";";
  }

  //需其他部門主辦簽核 BeforeApproveForm.asp:1013
  if (senao111059_0.checked == true){
    hdn_0110Sign.value += senao111060.value;
    hdn_0120Sign.value += senao111061.value;
  }

  //組0160 Mail名單
  hdn_0160Mail.value = "";
  hdn_0160Mail.value += getGrpUsrIDStr("EC_IE") + ";";
  if (senao111038_0.checked == true){ //需PE簽核, BeforeApproveForm.asp:840
    hdn_0160Mail.value += getGrpUsrIDStr("SN111_09") + ";";
    hdn_0160Mail.value += getGrpUsrIDStr("SN111_10") + ";"; 
    if (senao111040.value == senao111046.value){ //PE主管=QE主管
        hdn_0160Mail.value += senao111040.value + ";";
    }
  }
  //需PMC簽核且非客戶ECO且PMC主辦不為群組且申請人=PMC主辦
  if (senao111041_0.checked == true && isOdmEco.value != "Y" && hdn_PMCGroup.value == "" && senao111003.value == senao111042.value){
    hdn_0160Mail.value += senao111042.value + ";";
    if (hdn_PMCMinOthM.value == "Y"){ //PMC主管為Other Section主管之一, BeforeApproveForm.asp:897
        hdn_0160Mail.value += senao111043.value + ";";
    }else{
        hdn_0160Mail.value += senao111043.value + ";";
    }
  }
  //需PMC簽核且非客戶ECO且PMC主辦為群組且申請人=PMC主辦
  if (senao111041_0.checked == true && isOdmEco.value != "Y" && hdn_PMCGroup.value != "" && senao111003.value == senao111042.value){
    hdn_0160Mail.value += getGrpUsrIDStr(hdn_PMCGroup.value) + ";";
    //PMC主管不為Other Section主管之一
    if (hdn_PMCMinOthM.value != "Y"){            
        hdn_0160Mail.value += getGrpUsrMgrStr(hdn_PMCGroup.value);
    }
  }
  //需PMC簽核且非客戶ECO且PMC主辦為群組且申請人<>PMC主辦 且PMC主管為Other Section主管之一, 896,897
  if (senao111041_0.checked == true && isOdmEco.value != "Y" && hdn_PMCGroup.value != "" && senao111003.value != senao111042.value && hdn_PMCMinOthM == "Y"){
    hdn_0160Mail.value += senao111043.value + ";";
  }

  //組0160 - 0170 簽核人員名單
  hdn_0160Sign.value = "";
  hdn_0170Sign.value = "";
  //依AssemblyPart判斷是否須IE簽核, BeforeApproveForm.asp:818
	//20210525 Milla 資訊服務申請單SENAO10100000904 楊玉玲提出原簽核流程有設定IE人員需簽核，
	//經與IE主管(旻峰)確認，現已有負責人員整理EC部份，故不需IE簽核，請協助刪除IE人員不需簽核，
	//但通知部份仍需保留，以利IE人員可抓取當週EC機種	
  // if (hdn_chkInsertIEUser.value == "Y" && isOdmEco.value != "Y"){
      // var IESign = getGrpUsrIDStr("SN111_48");
      // hdn_0160Sign.value += IESign + ";";
      // hdn_0170Sign.value += getGrpUsrMgrStr("SN111_48") + ";";        
  // }
  //需PE簽核, BeforeApproveForm.asp:839
  if (senao111038_0.checked == true && isOdmEco.value != "Y"){
    hdn_0160Sign.value += senao111039.value + ";"; //BeforeApproveForm.asp:851
    if (senao111040.value != senao111046.value){ //PE主管與QE主管同人時，第二次僅設為通知, 858
        hdn_0170Sign.value += senao111040.value + ";";
    }
  }
  //需PMC簽核且非客戶 ECO且PMC主辦非群組且申請人<>PMC主辦
  if (senao111041_0.checked == true && isOdmEco.value != "Y" && hdn_PMCGroup.value == "" && senao111003.value != senao111042.value){
    hdn_0160Sign.value += senao111042.value + ";";
    if (hdn_PMCMinOthM.value != "Y"){ //PMC主管不為Other Section主管之一
            hdn_0170Sign.value += senao111043.value + ";";
    }
  }
  //需PMC簽核且非客戶ECO且PMC主辦為群組且申請人<>PMC主辦
  if (senao111041_0.checked == true && isOdmEco.value != "Y" && hdn_PMCGroup.value != "" && senao111003.value != senao111042.value){
    hdn_0160Sign.value += senao111042.value + ";";
    if (hdn_PMCMinOthM != "Y"){
        hdn_0170Sign.value += senao111043.value + ";";
    }
  }
  //組0180Sign名單
  hdn_0180Sign.value = "";
  hdn_0190Sign.value = "";
  //需試投或申請人為QE主辦
  if (isNotNeedTryRun == "N" || senao111003.value == senao111045.value){
    hdn_0180Sign.value += senao111045.value + ";";
    hdn_0190Sign.value += senao111046.value + ";";
  }
  //需QC主辦簽核
  if (senao111047_0.checked == true){ // BeforeApproveForm.asp:969
    hdn_0180Sign.value += senao111048.value + ";";
    hdn_0190Sign.value += senao111049.value + ";";
  }

  //組0200Mail名單
  hdn_0200Mail.value="";
  //需PMC主辦簽核且需試投且非SNWL ECO且PMC不為群組且申請人同PMC
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y" && hdn_PMCGroup.value == "" && senao111003.value == senao111042.value){
    hdn_0200Mail.value += senao111042.value + ";";
  }
  //需PMC主辦簽核且需試投且非SNWL ECO且PMC為群組且申請人同PMC
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y" && hdn_PMCGroup.value != "" && senao111003.value == senao111042.value){
    hdn_0200Mail.value += getGrpUsrIDStr(hdn_PMCGroup.value) + ";";
  }
  //需PMC主辦簽核且需試投且非SNWL ECO
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y"){
    //PMC主辦主管不為Other_Section主管之一
    if (hdn_PMCMinOthM.value == "N"){
      if (senao111003.value == senao111042.value){ //申請人為PMC主辦
        hdn_0200Mail.value += senao111043.value + ";";
      }
    }else{
      hdn_0200Mail.value += senao111043.value + ";";
    }
  }
  //組0200/0210 簽核名單
  hdn_0200Sign.value = "";
  hdn_0210Sign.value = "";
  //需RD會簽且需試投
  if (senao111035_0.checked == true && isNotNeedTryRun.value == "N"){
    hdn_0200Sign.value += senao111036.value + ";";
    hdn_0210Sign.value += senao111037.value + ";";
  }
  //需PM與SM會簽且需試投
  if (senao111056_0.checked == true && senao111065_0.checked == true && isNotNeedTryRun.value == "N"){
    hdn_0200Sign.value += senao111057.value + ";"; //senao111019_t1, attachment enable
    hdn_0200Sign.value += senao111066.value + ";"; //attachment ebable
    if (senao111058.value == "SN111_02"){
        hdn_0210Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0210Sign.value += senao111058.value + ";";
    }
    hdn_0210Sign.value += senao111067.value + ";";
  }
  //需PM主辦簽核且不需SM主辦簽核且不為配合SNWL ECO的單據且需試投
  if (senao111056_0.checked == true && senao111065_0.checked == false && isOdmEco.value == "N" && isNotNeedTryRun.value == "N"){
    hdn_0200Sign.value += senao111057.value + ";";  //senao111019_t1, attachment enable
    if (senao111058.value == "SN111_02"){
        hdn_0210Sign.value += getGrpUsrIDStr("SN111_02") + ";";
    }else{
        hdn_0210Sign.value += senao111058.value + ";";
    }
  }
  //不須PM主辦簽核且須SM主辦簽核且不為配合SNWL ECO的單據且需試投
  if (senao111056_0.checked == false && senao111065_0.checked == true && isOdmEco.value == "N" && isNotNeedTryRun.value == "N"){
    hdn_0200Sign.value += senao111066.value + ";"; //attachment ebable
    hdn_0210Sign.value += senao111067.value + ";";
  }

  //需PMC主辦簽核且需試投且非SNWL ECO且PMC不為群組且申請人不為PMC
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y" && hdn_PMCGroup.value == "" && senao111003.value != senao111042.value){
    hdn_0200Sign.value += senao111042.value + ";"; //senao111019_t1 enable
  }
  //需PMC主辦簽核且需試投且非SNWL ECO且PMC為群組且申請人不為PMC
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y" && hdn_PMCGroup.value != "" && senao111003.value != senao111042.value){
    hdn_0200Sign.value += getGrpUsrIDStr(hdn_PMCGroup.value) + ";";  //senao111019_t1 enable
  }
  //需PMC主辦簽核且需試投且非SNWL ECO
  if (senao111041_0.checked == true && isNotNeedTryRun.value == "N" && isOdmEco.value != "Y"){
    //PMC主辦主管不為Other_Section主管之一
    if (hdn_PMCMinOthM.value == "N"){
      if (senao111003.value != senao111042.value){ //申請人為PMC主辦
        hdn_0210Sign.value += senao111043.value + ";";
      }
    }
  }

  //組0460 Mail名單與0460-0470簽核名單
  hdn_0460Mail.value = "";
  hdn_0460Sign.value = "";
  hdn_0470Sign.value = "";
  //PM=Y && SM=Y
  if (senao111056_0.checked == true && senao111065_0.checked == true){//BeforeApproveForm.asp:512
    if (isOdmEco.value == "Y"){
      hdn_0460Sign.value += senao111057.value + ";"; //PM會辦, 簽核型態判斷BeforeApproveForm.asp:527
      //PM主辦為品牌產品規劃一課PM
      if (isSN111_S38.value == "Y"){
          hdn_0460Mail.value += getGrpUsrIDStr("SN111_63") + ";";
      }
      hdn_0470Sign.value += senao111058.value + ";"; //PM主管, 簽核型態判斷BeforeApproveForm.asp:542
      hdn_0460Sign.value += senao111066.value + ";"; //SM會辦, 簽核型態判斷BeforeApproveForm.asp:549
      hdn_0470Sign.value += senao111067.value + ";"; //SM主管會辦, 簽核型態判斷BeforeApproveForm.asp:555
    }else{
        //0110
    }
  }else{
    if (senao111056_0.checked == true){
      if (isOdmEco.value == "Y"){
        hdn_0460Sign.value += senao111057.value + ";"; //PM會辦, 簽核型態判斷BeforeApproveForm.asp:680
        if (isSN111_S38.value == "Y"){
            hdn_0460Mail.value += getGrpUsrIDStr("SN111_63") + ";";
        }
        hdn_0470Sign.value += senao111058.value + ";"; //PM主管會辦
      }else{
          //0110,0200
      }
    }
    if (senao111065_0.checked == true){ //if SM=Y, BeforeApproveForm.asp:748
      if (isOdmEco.value == "Y"){
        hdn_0460Sign.value += senao111066.value + ";"; //SM會辦
        hdn_0470Sign.value += senao111067.value + ";"; //SM主管會辦
      }else{
          //0110,0200
      }

    }
  }
  //20161110, 依資訊服務申請單#6793(縮短EC流程) SNWL ECO 時, 將PM,SM,PM_M,SM_M 簽核改成通知
  if (senao111014_t4.value != "" && senao111087.value == "SNWL"){
    hdn_0460Mail.value += hdn_0460Sign.value;
    hdn_0460Mail.value += hdn_0470Sign.value;
    hdn_0460Sign.value = "";
    hdn_0470Sign.value = "";
  }


  //組0480Mail and 0480-0490簽核名單
  hdn_0480Mail.value = "";
  hdn_0480Sign.value = "";
  hdn_0490Sign.value = "";

  //依AssemblyPart判斷需IE簽核且為配合SNWL ECO的單據
	//20210525 Milla 資訊服務申請單SENAO10100000904 楊玉玲提出原簽核流程有設定IE人員需簽核，
	//經與IE主管(旻峰)確認，現已有負責人員整理EC部份，故不需IE簽核，請協助刪除IE人員不需簽核，
	//但通知部份仍需保留，以利IE人員可抓取當週EC機種
  // if (hdn_chkInsertIEUser.value == "Y" && isOdmEco.value == "Y"){
      // hdn_0480Sign.value += getGrpUsrIDStr("SN111_48") + ";"; //IE群組
      // hdn_0490Sign.value += getGrpUsrMgrStr("SN111_48") + ";"; //IE群組的主管        
  // }
  //需PE主辦簽核且為配合客戶 ECO的單據
  if (senao111038_0.checked == true && isOdmEco.value == "Y"){ //BeforeApproveForm.asp:846
    hdn_0480Sign.value += senao111039.value + ";";  //BeforeApproveForm.asp:851
    if (senao111040.value==senao111046.value){ //PE主管同QE主管
      hdn_0480Mail.value += senao111040.value + ";";
    }else{
      hdn_0490Sign.value += senao111040.value + ";";  //PE主管
    }
  }
  hdn_0480Mail.value += getGrpUsrIDStr("SN111_09") + ";";
  hdn_0480Mail.value += getGrpUsrIDStr("SN111_10") + ";";
    //需PMC主辦簽核且為客戶 ECO流程
  if (senao111041_0.checked == true && isOdmEco.value == "Y"){
    if (hdn_PMCGroup.value != ""){
      hdn_0480Sign.value += getGrpUsrIDStr(hdn_PMCGroup.value) + ";";
    }else{
      hdn_0480Sign.value += senao111042.value + ";";
    }
    if (hdn_PMCMinOthM.value == "Y"){
      hdn_0480Mail.value += senao111043.value + ";";
    }else{
      hdn_0490Sign.value += senao111043.value + ";"; //PMC主管
    }
  }
  hdn_0520MSign.value = "";
  hdn_0520SSign.value = "";
  //物管/PE/製造/QC/Sourcer
  hdn_0520MSign.value += getGrpUsrIDStr("SN111_54") + ";"; //物管
  hdn_0520MSign.value += getGrpUsrIDStr("SN111_16") + ";"; //PE
  hdn_0520MSign.value += getGrpUsrIDStr("SN111_17") + ";"; //製造
  hdn_0520MSign.value += getGrpUsrIDStr("SN111_18") + ";"; //QC
	
  if (isBPPPM.value == "Y"){
    hdn_0520MSign.value += getGrpUsrIDStr("SN111_84") + ";";
  } 
  //Sourcer
  if (hdn_SourcerList.value != "" && senao111014_t4.value != "" && senao111087.value == "SNWL"){
    hdn_0520MSign.value += hdn_SourcerList.value + ";";
  }
	
    //生管會辦(只要一個人處理)
	//20230504 因業務單位組織異動 將InsertPMC_Flow判斷併入makeUnionSign內
	/*
    if (isSN111_S32.value == "Y"){
        hdn_0520SSign.value = getGrpUsrIDStr("SN111_56") + ";"; //生管會辦 業II
    }else if (isSN111_S33.value == "Y"){ //PM or Sales主辦為RBU單位
        hdn_0520SSign.value = getGrpUsrIDStr("SN111_57") + ";"; //生管會辦RBU0520-0080-2
    }else if (isSN111_S47.value == "Y"){ //PM or Sales主辦為品牌銷售管理課
        hdn_0520SSign.value = getGrpUsrIDStr("SN111_75") + ";"; //生管會辦(品牌銷售)0520-0080-3
    }else if (isSN111_S34.value == "Y"){ //業務其他部門11300,11301,11303,11306,11307,11308,11309,11310
        if (isSN111_S43.value == "Y"){ //PM or Sales主辦為11301業務一課
            hdn_0520SSign.value = getGrpUsrIDStr("SN111_71") + ";"; //生管會辦(業一)0520-0080-4
        }else if (isSN111_S44.value == "Y"){ //PM or Sales主辦為11306業務六課
            hdn_0520SSign.value = getGrpUsrIDStr("SN111_72") + ";"; //生管會辦(業六)0520-0080-5
        }else if (isSN111_S45.value == "Y"){ //PM or Sales主辦為11307業務七課
            hdn_0520SSign.value = getGrpUsrIDStr("SN111_73") + ";"; //生管會辦(業七)
        }else if (isSN111_S46.value == "Y"){ //PM or Sales主辦為業務八課
            hdn_0520SSign.value = getGrpUsrIDStr("SN111_74") + ";"; //生管會辦(業八)
        }else{
            hdn_0520SSign.value = getGrpUsrIDStr("SN111_64") + ";"; //生管會辦(業一+業六)
        }
    }else if (isSN111_S35.value == "Y"){ //PM or Sales主辦為業務五課
        hdn_0520SSign.value = getGrpUsrIDStr("SN111_59") + ";"; //生管會辦(業五)0520-0080-9
    }
	*/
	//判斷有選PM或SALES需生管會辦單位審核
	if (senao111020.value == "0" || senao111021.value == "0"){		
		var strSales = senao111066.value != "" ? senao111066.value : senao111057.value;//有選SALES以SALES為主  
		var strBrandGroup = getEmpDeptID(strSales);//取得部門代碼		
		var strSignGroup = "";
		//取得群組代碼
		if(strBrandGroup!="") strSignGroup = getPMCGroupID(strBrandGroup);
		//取得群組內人員
		if (strSignGroup != ""){
			hdn_0520SSign.value = getGrpUsrIDStr(strSignGroup);
		}
	}
}// End of makeUnionSign
/**
 *
 *GetRemark
 *@param strSheetNo 表單單號
*/
function GetRemark(strSheetNo){
  return "ECR/ECN#" + strSheetNo;
}
function fixNullTo0(val){
  return val == null ? 0 : val;
}

function fixEmptyTo0(val){
  return val == "" ? 0 : val;
}
/*
 * 20230724 Calvin 重抓OPCode
*/
function getErpOPCode(){
  var tGrid1Data =  getGridData(0); 
	for (var i = 0; i < tGrid1Data.length; i++){
		var p_assembly_id = "";
		var p_component_id = "";
		if (tGrid1Data['SENAO111D004'].trim() != ""){
			p_assembly_id = getItemIdByItem(tGrid1Data[i]['SENAO111D004']);
		}
		if (tGrid1Data[i]['SENAO111D006'].trim() != ""){
			p_component_id = getItemIdByItem(tGrid1Data[i]['SENAO111D006']);
		}
		
		var data_opcode = ajaxGetData("BPM_ERP_SENAO111_81", {
      orgno : orgno,
      p_assembly_id:p_assembly_id,
      p_component_id:p_component_id
    });
    if(data_opcode[0].result == undefined){
      if (data_opcode.length > 0) {
        tGrid1Data[i]['SENAO111D014'] = data_opcode[0].OP_CODE; //OPCODE
      }else{
        tGrid1Data[i]['SENAO111D014'] = "1"; //OPCODE
      }
    }else{
      console.log("function:"+"getErpOPCode" + " API:" + "BPM_ERP_SENAO111_81 "+ dataArray[0].result);
      return false;
    }
	}
  // Grid1Obj.reload(tGrid1Data);
  setGridData(0, tGrid1Data);

  // Grid1.value = Grid1Obj.toArrayString();
  document.getElementById("Grid1").value = JSON.stringify(getGridData(0));
	/*Grid1Obj.reload(tGrid1Data);
	Grid1.value = Grid1Obj.toArrayString();*/
}
/*
 * 20240305 Steve [SENAO10100005361] 
 * 1.ECR/ECN 當使用"用盡變更"選項時，簽核到物管單位，需開啟表單附件上傳功能(強制上傳，並且備註須附上料件對應工單資訊)
 * 2.檔名'發料紀錄'
 */ 
function checFileWithFileName() {
  var tAS = document.getElementById('_cuzfileChooser_selectedItems');
  if (tAS != null) {
    for (var i = 1; i < tAS.rows.length; i++) {
      var strFileName = tAS.rows[i].cells[1].innerText.trim();
      if(strFileName.indexOf('發料紀錄')>-1){
        return true;
      }
    }
  }
  return false;
}
function formDispatch(){
  if(activityId.indexOf("0010") == 0){  // sourcer簽核
    if( hdn_SourcerList.value.indexOf(getUserIDByOID(workItemOwnerOID))>=0 ){
      if(window.parent.document.getElementById("txaExecutiveComment").value.trim()==""){
        alert("請填寫[簽核意見]");
        return false;
      }
    }
  }
  if(confirm("是否確定將填寫好的表單傳送出去?")){
      // do nothing to go on
  }else{
    return false;
  }
  return true;
}
/**
  *如果DCC人員同時勾選BOM表已修改(012), 與 附檔已下載(013)
  *senao111010的 ECN變更為 Checked
  *ControlStatus_010_1
*/
function ControlStatus_010_1(){
  if (senao111012_0.checked && senao111013_0.checked){ 
    //senao111010_1.checked = true;
    $("#senao111010").val("1");
    $('#senao111010').prop("disabled", false);
    $('#senao111008').prop("disabled", false);
    document.getElementById("senao111008").style.backgroundColor = "fbf1c0";
    document.getElementById("senao111008").value = systemDateTime.replace(/\//g, "-");
    if (senao111006.value == ""){
      //20251126 Dillan add(s)
      if (typeof processId !== "undefined" && processId == "CWO111"){
        var last5 = right(SERIALNUMBER, 5);
        var num = parseInt(last5, 10);
        var newNum = num + 49;
        // 依原格式補回 5 位（前置補零）
        //var padded = String(newNum).padStart(5, "0"); //20260226 Dillan marked
        var padded = ("00000" + String(newNum)).slice(-5); //20260226 Dillan marked
        senao111006.value = "S" + padded;
    
      }else{
          senao111006.value = right(SERIALNUMBER, 6);
      }
      //20251126 Dillan add(e)
      //senao111006.value = right(serialNumber, 6);//20251127 Dillan marked
  
    }
  }else{
    // 選取 ECR Change
    $("#senao111010").val("0");

    // 禁用 ECN Change 選項
    $("#senao111010 option[value='1']").prop("disabled", true);
  }
}
/**
  *品牌-客製(OEM/ODM) : PM與SM必簽
  *ChkApproveDept
*/
function ChkApproveDept() {
  if (document.getElementById("senao111015").value == "0") {  // Own Brand
    $("#senao111065_0").prop("checked", false);  // Sales Section 取消勾選
  } else if (document.getElementById("senao111015").value == "1") {  // Custom Made
    $("#senao111065_0").prop("checked", true);   // Sales Section 勾選
  }
}
//立即變更 or 依OE工單變更(6) or 用盡變更時，disable料號須帶出在途PO,PR,待驗,庫存數量
function GetONHOLD_QTY(){    
  if ((senao111019.value == "0" || senao111019.value == "6" || senao111019.value == "2")  //1. Immediate Change(value = 0); 6. By OE/工單變更(value = 6); 3. Change after Inventory Exhausted(value = 2)
  && (gsenao111d011.value == "0" || gsenao111d011.value == "0.000000") //Qty after change
  && gsenao111d017.value != "替代料"){
    gsenao111d023.value = PO_QTY(gsenao111d006.value);
    gsenao111d022.value = REQ_QTY(gsenao111d006.value);
    gsenao111d024.value = RECEIVING_QTY(gsenao111d006.value);
    gsenao111d021.value = onhand_QTY(gsenao111d006.value);
    gsenao111d026.value = BOM_COMP_QUANTITIES(gsenao111d006.value, gsenao111d004.value);
  }else{
    gsenao111d023.value = ""; //在途PO數
    gsenao111d022.value = ""; //在途PR數
    gsenao111d024.value = ""; //待驗數
    gsenao111d021.value = ""; //庫存數
    gsenao111d026.value = ""; //使用機種
  }
}
/**
 * 本階料號 Part Number
 * gsenao111d006_b1_onbeforeclick
*/
function gsenao111d006_b1_onbeforeclick(){
  if (gsenao111d004.value.trim() == ""){
    alert("請先選取[Assembly Level Part Number]");
    return false;
  }else{
    return true;
  }
}
/**
  *Delete Reference開窗選取後
  *gsenao111d013_b1_cb
*/
function gsenao111d013_b1_cb(){
	hdn_gsenao111d013.value = hdn_gsenao111d013.value.replace(/\n/g,"").trim();
	var tmpAry = [];
	var tmpd013Str = "";
	if (left(hdn_gsenao111d013.value, 1) == "[" && right(hdn_gsenao111d013.value, 1) == "]" ){
		tmpAry = eval(hdn_gsenao111d013.value);
		for (var i = 0; i < tmpAry.length; i++){           
			tmpd013Str = tmpd013Str + tmpAry[i][1] + ",";
		}
	}        
	gsenao111d013.value = tmpd013Str;
	gsenao111d013_onchange();
  gsenao111d013.value = gsenao111d013.value.slice(0, -1);
	return true;
}
/* 程序: CalculateTotalQty()
' 說明: 計算[變更後數量]; 若為替代料且不需EC --> 不需計算數量*/
function CalculateTotalQty(){
  if (senao111019.value == "4" || gsenao111d017.value != "非替代料"){ //版本=4, 處理=非替代料
    //將增加數/刪除數/歸0
    gsenao111d008.value = "0";
    gsenao111d009.value = "0";
    gsenao111d011.value = gsenao111d010.value;  //TotalQty After = TotalQty Before
    //Disabled 的料號需將變更後設為0, 刪除數 = 變更前數
    if (gsenao111d017.value.toUpperCase() == "DISABLE"){
      gsenao111d009.value = gsenao111d010.value;
      gsenao111d011.value = "0";
      //組出所有的插件資料帶入 senao111d013
      gsenao111d013.value = GetDisableRef(gsenao111d004.value, gsenao111d006.value); //CheckFieldData.asp:2743
    }
  }else{
    setGridInitData();
    if (isNumeric(gsenao111d008.value) && isNumeric(gsenao111d009.value) && isNumeric(gsenao111d010.value)){
      //Total Qty After = Total Qty Before + Add Qty
      gsenao111d011.value = (parseFloat(gsenao111d010.value) + parseFloat(gsenao111d008.value) - parseFloat(gsenao111d009.value)).toFixed(6);
      if (gsenao111d011.value < 0){
        // alert("[Total Quantity After Change]變更後用量為負數無法EC, 請重新輸入[Add Reference]、[Delete Reference]");
        showErrorMsg(useExcel,"[Total Quantity After Change]變更後用量為負數無法EC, 請重新輸入[Add Reference]、[Delete Reference]");//20241017 Neil
        gsenao111d008.value = 0;  //Add Qty
        gsenao111d009.value = 0;  //Del Qty
        gsenao111d012.value = ""; //Add Ref
        gsenao111d013.value = ""; //Del Ref
        strBlur_senao111d013 = "ERR";
        CalculateTotalQty();
      }
    }
    GetONHOLD_QTY();
  }
}
/**
 * 
 */
function showErrorMsg(useExl,msg){
  if(useExl){
      errorMsg.value+= msg;
  }else{
      alert(msg);
  }
}
/**
 * 是否需要通知 22110測試技術課(0510) 及判斷是否有管制料 while formsave
 * CheckNeedToInfo22110Dept
 */
function CheckNeedToInfo22110Dept(){
	var tGrid1Data = getGridData(0); 
	var tGrid1DataCount = tGrid1Data.length;
	var IsCCL = false;
	isNeedInformTesting.value = "N";
	hdn_IsCCL.value = "N";
	for (var i = 0; i < tGrid1DataCount; i++){
		strItemNo = tGrid1Data[i]['SENAO111D006'];
		if (strItemNo.substr(0,2) == "FA" || strItemNo.substr(0,4) == "5730"){
			isNeedInformTesting.value = "Y";
			break; 
		}
		if (tGrid1Data[i]['SENAO111D029'] == "Y"){
			hdn_IsCCL.value = "Y";
			break;
		}
	}
}	//end of CheckNeedToInfo22110Dept 是否需要通知 22110測試技術課(0510) 及判斷是否有管制料
//initial Grid Value . 設定增加數 = 0 ; 刪減數 = 0 ; 變更前 = 0 ; 變更後 = 0
function setGridInitData(){
  if (gsenao111d008.value == "" || gsenao111d012.value == ""){ //Add Quantity=="" or Add Reference==""
      gsenao111d008.value = "0"; 
  }
  if (gsenao111d009.value == "" || gsenao111d013.value == ""){ //Delete Quantity=="" or Delete Reference==""
      gsenao111d009.value = "0";
  }
  if (gsenao111d010.value == ""){  //Total Qty Before
      gsenao111d010.value = "0";
  }
  if (gsenao111d011.value == ""){  //Total Qty After
      gsenao111d011.value = "0";
  }
}
/**
  *由申請者自行選擇CCL(Y或N)
  *setd029Status
  *@param strd029
  *20180706 Milla 資訊服務申請單#7724 管制料號	
  *處理:"非替代料"(即新增), 且Add Quantity, Total Quantity After Change為大於0 且相等
*/
function setd029Status(strd029){
  var Add_Quantity = parseFloat(fixEmptyTo0(gsenao111d008.value)).toFixed(6);
  var Total_Quantity_After_Change = parseFloat(fixEmptyTo0(gsenao111d011.value)).toFixed(6);
  if (gsenao111d017.value == "非替代料" || gsenao111d017.value == "替代料"){
    var GetCCL = SetCCL(gsenao111d017.value, gsenao111d004.value, gsenao111d006.value, Add_Quantity, Total_Quantity_After_Change, strd029);
    gsenao111d029.value = GetCCL[0];
    $('#gsenao111d029').prop("disabled", GetCCL[1]);
  }else{
    $('#gsenao111d029').prop("disabled", true);
  }
}	//end of setd029Status 由申請者自行選擇CCL
/**
  *設定CCL
  *SetCCL  
  *@param strType  處理
  *@param strAssembly_Level_Part_Number  上階料號
  *@param strPart_Number 本階料號
  *@param Add_Quantity
  *@param Total_Quantity_After_Change
  *@param strCCL
  *@return arySetCCL  
  *20180706 Milla 資訊服務申請單#7724 管制料號
  *處理:"非替代料" 或 "替代料" 且Add Quantity, Total Quantity After Change為大於0 且相等 (即新增)
  *由申請者自行選擇CCL(Y或N)，若不符合條件則抓Oracle的管制資料，且不可更改
*/
function SetCCL(strType, strAssembly_Level_Part_Number, strPart_Number, Add_Quantity, Total_Quantity_After_Change, strCCL){
	var arySetCCL = new Array();
  arySetCCL = ["", false];
  if (strType == "非替代料" || strType == "替代料"){
    if (
      (((Add_Quantity > 0) && (Total_Quantity_After_Change > 0)) && (Add_Quantity == Total_Quantity_After_Change) && (strType == "非替代料")) || 
      (((Add_Quantity == 0) && (Total_Quantity_After_Change == 0)) && (Add_Quantity == Total_Quantity_After_Change) && (strType == "替代料"))
      ) {
      if (strCCL == ""){
        arySetCCL[0] = "";
      }else{
        arySetCCL[0] = strCCL;
      }
      arySetCCL[1] = false;  // 管制料senao111029 enable
    }else{
      var GetCCL = IsCCL(strAssembly_Level_Part_Number.trim(), strPart_Number.trim());
      if (strCCL == ""){
        arySetCCL[0] = GetCCL;
      }else{
        arySetCCL[0] = strCCL;
      }
      if (GetCCL != ""){
        arySetCCL[1] = true;  // 管制料senao111029 disable
      }
    }
  }
  return arySetCCL;
}	//end of SetCCL 設定CCL
/**  
  *判斷料號是否有被phaseout(H、O、L、D)
  *為減少再次執行SQL,故在SENAO111_44合併SENAO111_27
  *ChkPhaseOut
  *@param strPN 料號
  *@return retVal 訊息
*/
function ChkPhaseOut_1(strPN, eol_data, grouping_id){
	var retVal = "";
  var strRtnPhaseOut = "";
  var strEOLType = "";
  var strRtnBOMSub = "";
  if (eol_data != ""){
    if (eol_data.substr(0,1) == "H"){
      //EOL欄位(attribute1)維護 H-XXXX時，需顯示XXXX建議原因
      var re = /[0-9]{8}/; //8個字元都是數字
      if(re.test(eol_data.substr(2, 8)) == true){
        strEOLType = "O";
        strRtnPhaseOut = "O;此料號已設Hold，請先至「商品物料編號表」將Phase out Date資料刪除，才可申請EC";
      }else{
        strEOLType = "H";
        strRtnPhaseOut = "H;"          
      }
    }else if (eol_data.substr(0, 1) == "L"){
      strEOLType = "L";
      strRtnPhaseOut = "L;[ " + strPN + " ]此料為管制用料(" + eol_data + ")，不可使用";
    }else if (!isNaN(Date.parse(eol_data))){
      strEOLType = "D";
      strRtnBOMSub = GetBOMSub(fixNull(grouping_id), strPN, strEOLType);
      strRtnPhaseOut = "D;[ " + strPN + " ] 已EOL";
    }
  }
  retVal = strRtnPhaseOut + strRtnBOMSub;
  return retVal;
}	//end of ChkPhaseOut 判斷料號是否有被phaseout

/**
 * 判斷是否符合MBom上階料號的狀態及本階料號與替代料的狀態
 * 為提升速度,故此function 不再抓取料號狀態
 * chkIsMbom_ItemNoStatus_1
 *@param AsmItemNo 上階料號
 *@param AsmStatus 上階料號狀態
 *@param ItemNo 本階料號
 *@param ItemStatus 本階料號狀態
*/
function chkIsMbom_ItemNoStatus_1(AsmItemNo, AsmStatus, ItemNo, ItemStatus){
	var retVal = false;	
	if (AsmStatus == "Active"){
		//(2)上階層料號狀態為Active，新增本階料號(含替代料)所有料號之狀態皆為A。
		if (ItemStatus == "Active"){
			retVal = true;
		}else{
			retVal = false;
		}		
    }else if (AsmStatus == "PVT"){
		/*
		(1)上階層料號狀態為PVT，新增本階料號(含替代料)ID/ME(如料號明細)與5730料號之狀態需為S4、C、A ，其餘料號需C、A及階層料號PVT狀態。
		*/	
		if (chkIsID_ME_OtherItem(ItemNo) || "5730,GJ30".indexOf(left(ItemNo, 4)) > -1){	//判斷是否為ID/ME料號 或5730A 或GJ30A
			if ("Active,S4,C".indexOf(ItemStatus) > -1){
				retVal = true;
			}
		}else{
			if ("Active,C,PVT".indexOf(ItemStatus) > -1){
				retVal = true;
			}
		}
	}else{	//不檢查
		retVal = true;
	}
	return retVal;
}
/**
 * 判斷是否符合MBom上階料號的狀態及本階料號與替代料的狀態
*/
function chkIsMbom_ItemNoStatus(AsmItemNo, ItemNo){
	var retVal = false;
	var AsmStatus = "";
	var ItemStatus = "";
	AsmStatus = FindItemStatus(AsmItemNo);
	ItemStatus = FindItemStatus(ItemNo);	
	
	if (AsmStatus == "Active"){
		//(2)上階層料號狀態為Active，新增本階料號(含替代料)所有料號之狀態皆為A。
		if (ItemStatus == "Active"){
			retVal = true;
		}else{
			retVal = false;
		}		
    }else if (AsmStatus == "PVT"){
		/*
		(1)上階層料號狀態為PVT，新增本階料號(含替代料)ID/ME(如料號明細)與5730料號之狀態需為S4、C、A ，其餘料號需C、A及階層料號PVT狀態。
		*/	
		if (chkIsID_ME_OtherItem(ItemNo) || "5730,GJ30".indexOf(left(ItemNo, 4)) > -1){	//判斷是否為ID/ME料號 或5730A 或GJ30A			
			if ("Active,S4,C".indexOf(ItemStatus) > -1){				
				retVal = true;
			}
		}else{			
			if ("Active,C,PVT".indexOf(ItemStatus) > -1){				
				retVal = true;
			}
		}
	}else{	//不檢查
		retVal = true;
	}
	return retVal;
}
function ClearGridActionRowData(strYesNO){
  if (strYesNO == "006"){
    gsenao111d006.value = "";
  }
  if (strYesNO != "012"){
    gsenao111d007.value = "";
    gsenao111d010.value = "";
    gsenao111d013.value = "";     //刪
    gsenao111d014.value = "";     //OP_CODE  
    gsenao111d015.value = "";     //COMMENT 
    gsenao111d018.value = "";     //id
    gsenao111d021.value = "";     //庫存數
    gsenao111d022.value = "";     //在途PR數
    gsenao111d023.value = "";     //在途PO數
    gsenao111d024.value = "";     //待驗數
    gsenao111d025.value = "";     //廠商先行備料
    gsenao111d026.value = "";     //使用機種
    hdn_gsenao111d013.value = "[]";
  }
  gsenao111d012.value = "";         //增      
}
/*
 * 20231215 Calvin 顯示相同Project、PartNumber(本階料號)
 * tPartnumber:gsenao111d006
 */
function getItemWhereUsed(tPartnumber){
	var project = senao111071.value;
  if(project.trim() != "" && tPartnumber.trim() != "" && orgno !=""){
    window.open("/NaNaWeb/CustomSNO/jsp/SENAO111/SENAO111_ItemWhereUsed.jsp?project=" + project + "&partnumber=" + tPartnumber+"&org_id="+orgno, "", "width=850,height=600,menubar=yes,scrollbars=yes,location=no,resizable=yes");  
  }
	
}
//根據 傳入的字串計算增刪數
function GetChangeQty(strChange){
  var retVal = 0;
  //將半形空白與全形空白取代為空值
  strChange = strChange.replace(/　/g, "").trim();
  //若最右邊的第1個字元為, 不取最後一字元, 直到最右邊的字元不為 , 即可
  var charSplit = ",";
  while(strChange.substr(strChange.length-1)==charSplit){
    strChange = strChange.substr(0,strChange.length-1);
  }
  var aryChange = strChange.split(charSplit);
  var nOtherCount = 0;
  var nCount = 0;
  var charOperator = "*";
  var aryChangeCount = aryChange.length;
  var nSart;
  var Num;
  for(var i=0;i<aryChangeCount;i++){
    nSart = aryChange[i].trim().indexOf(charOperator);
    if(nSart==0){
      Num = aryChange[i].trim().substr(1);
      if($.isNumeric( Num )){
        nOtherCount = nOtherCount + parseFloat(Num);
      }
    }else{
      nCount++;
    }

  }
  retVal = nCount + nOtherCount; 
  return retVal;
}
function ReplaceSQM(str){  
	var tmpstr = str.trim().replace(/\'/g, "''");
	tmpstr = tmpstr.replace(/[\n\r]/g,""); //順便將換行符號也remark掉
	return tmpstr;  
}
/**
 *新增其他單位Other Section
 *afterOtherSection
*/
function afterOtherSection(){
  if (document.getElementById("senao111060").value != ""){
    var tmpAry = eval(document.getElementById("senao111060").value);
    var tmpStr060 = "";
    var tmpStr060_t1 = "";
    var tmpStr061 = "";
    var tmpStr061_t1 = "";
    for (var i = 0; i < tmpAry.length; i++){            
      tmpStr060 += tmpAry[i][1] + ";";
      tmpStr060_t1 += tmpAry[i][2] + ";";
      tmpStr061 += tmpAry[i][5] + ";";
      tmpStr061_t1 += tmpAry[i][6] + ";";
    }
    document.getElementById("senao111060").value = tmpStr060;
    document.getElementById("senao111060_t1").value = tmpStr060_t1;
    document.getElementById("senao111061").value = tmpStr061;
    document.getElementById("senao111061_t1").value = tmpStr061_t1;
  }
  return true;
}
//設定已勾選的會辦單位欄位狀態
function setApproveDeptStyle(isDept15313){
  $("input[type=checkbox]").filter(function(){
    if(activityId == "0001" && isDept15313 == true){	//(填單人關卡 && 為電子工程課)
      return this.id.match(/^senao111035_0$/gi);
    }else{
      return this.id.match(/^senao1110(68|35|38|41|88|44|56|65|47|59)_0$/gi);
    }
  }).each(function(){
    if(this.checked){
      var approverChkID = this.id;
      var approverID = "senao1110" + (parseInt(right(approverChkID.replace("_0", ""), 2)) + 1);
      document.getElementById(approverID).style.backgroundColor = "#fbf1c0";
      $("#" + approverID + "_b1").prop("disabled", false);  
      $("#" + approverID + "_b1").prop("readOnly", false);//20260119 Dillan add
    }
  });
}
/**
  *恩嘉料號轉神準料號
  *ItemNo_EpsToSenao
  *@param ItemNo 恩嘉料號
  *@return retVal 神準料號
*/
function ItemNo_EpsToSenao(ItemNo){
	var retVal = ItemNo;
	var chkStr = "B,C,D,E,G,H,J,K,L,M,S,W";
	var strTemp = "";
	if (chkStr.indexOf(left(ItemNo,1)) >= 0){
		for (var i = 0; i <= 1; i++){
			var chkItemChr = ItemNo.substr(i, 1);
			if (chkItemChr == "M"){
				strTemp = strTemp + "0";
			}else if (chkItemChr == "B"){
				strTemp = strTemp + "1";
			}else if (chkItemChr == "C"){
				strTemp = strTemp + "2";
			}else if (chkItemChr == "D"){
				strTemp = strTemp + "3";
			}else if (chkItemChr == "E"){
				strTemp = strTemp + "4";
			}else if (chkItemChr == "G"){
				strTemp = strTemp + "5";
			}else if (chkItemChr == "H"){
				strTemp = strTemp + "6";
			}else if (chkItemChr == "J"){
				strTemp = strTemp + "7";
			}else if (chkItemChr == "K"){
				strTemp = strTemp + "8";
			}else if (chkItemChr == "L"){
				strTemp = strTemp + "9";
			}
		}// END OF FOR
		retVal = strTemp + ItemNo.substr(2, ItemNo.length);    
	}
	return retVal;
}	//end of ItemNo_EpsToSenao 恩嘉料號轉神準料號
/**
  *check替代料在Oracle料號主檔是否存在
  *IsNotOracleItem
  *@param strdata 替代料
  *@param strASSY_ITEM_NO 上階料號
  *@param strCOMP_ITEM_NO 本階料號
  *@return aryRtn
*/
function IsNotOracleItem(strdata, strASSY_ITEM_NO, strCOMP_ITEM_NO){
  var aryRtn = [false, ""];
  var ary = strdata.split(",");
  var i = 0;
  var strRPL;
  while (aryRtn[0] == false && i < ary.length){
    if (ary[i] != ""){
      strRPL = ary[i].trim().replace(/\s/g, "@@@");
      if ((ary[i].length == 12 && strRPL.indexOf("@@@") < 0) || ary[i].substring(12, 13) == "-"){
        strSubsNo = ary[i].substr(0, 12).trim();
        var tParams = new Array();
        tParams.push(orgno);
        tParams.push(strSubsNo);
        tParams.push(strASSY_ITEM_NO);
        tParams.push(strCOMP_ITEM_NO);
        var dataArray =  ajaxGetData(invokeURL +"BPM_ERP_SENAO111_06", {
          orgno:tParams[0],
          SEGMENT1:tParams[1],
          strAssmNo:tParams[2],
          strComp_no:tParams[3]
        });
        if(dataArray[0].result == undefined){
          if (dataArray[0].COUNT == 0){
            aryRtn[0] = true;
            aryRtn[1] = strSubsNo;
          }
        }else{
          console.log("function:"+"IsNotOracleItem" + " API:" + "BPM_ERP_SENAO111_06 "+ dataArray[0].result);
          return false;
        }
      }
    }
    i++;
  }
  return aryRtn;
}	//end of IsNotOracleItem check替代料在Oracle料號主檔是否存在
/**
  *是否替代料之主料已在此次填寫表單中申請刪除
  *bln_COMP_Deleted
  *@param strASSEMBLY 上階料號
  *@param strNewCOMPONENT 替代料
  *@return retVal 
  *因應主料刪除與替代料變更為主料可於同張表單申請，因此於表單傳送前檢核是否已將主料刪除/Phoebe.20131023
  *查詢是否替代料之主料已在此次填寫表單中申請刪除
  *有申請刪除傳回"Y", 無申請則傳回N; OR N;主料號
*/
function bln_COMP_Deleted(strASSEMBLY, strNewCOMPONENT){
  var strCOM_ITEM_NO = GetCOMPONENT(strASSEMBLY, strNewCOMPONENT); //查詢料號是否為BOM內其他主料的替代料, if yes 傳回該主料
  var retVal = "N;" + strCOM_ITEM_NO;
  var tGrid1Data = getGridData(0);
  var gDataCount = tGrid1Data.length;
  for (var i=0; i < gDataCount; i++){  //查詢是否替代料之主料已在此次填寫表單中申請刪除
    if (tGrid1Data[i]['SENAO111D004'] == strASSEMBLY && tGrid1Data[i]['SENAO111D006'] == strCOM_ITEM_NO && tGrid1Data[i]['SENAO111D011'] == "0"){ //Total Qty after change
      retVal = "Y";            
      break;
    }
  }
  return retVal;
}	//end of bln_COMP_Deleted 是否替代料之主料已在此次填寫表單中申請刪除
function bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, strFlag){
  var retVal = false;
  var dataArray = getGridData(0); 
  var dataCount = dataArray.length;
  for(var n=0;n<dataCount;n++){
    if(strFlag==""){
      if(dataArray[n]['SENAO111D028']=="ECO-2" && dataArray[n]['SENAO111D004']==strASSM_NO && dataArray[n]['SENAO111D006']==strCOMP_NO && dataArray[n]['SENAO111D017']=="非替代料" && dataArray[n]['SENAO111D011']>0 ){
        retVal = true;
        break;
      }
    }else{
      if(dataArray[n]['SENAO111D004']==strASSM_NO && dataArray[n]['SENAO111D006']==strCOMP_NO && dataArray[n]['SENAO111D017'] =="非替代料" && dataArray[n]['SENAO111D011']>0 && dataArray[n]['SENAO111D018']==""){
        retVal = true;
        break;
      }
    }
  }
  return retVal;
}
/**
  *該替代料已存在
  *IsExistStituteItem
  *@param strADD 替代料
  *@param strID component_sequence_id
  *@return aryRtn[]
*/
function IsExistStituteItem(strADD, strID){
  var aryRtn = [false,""];
  var ary = strADD.split(",");
  var j = 0;
  var bln = false;
  while (j < ary.length && bln == false){
    if (ary[j] != ""){
      strSubs = ary[j].substr(0, 12).trim();
      bln = IsSubStituteItem(strSubs, strID);
      aryRtn[1] = strSubs;
      if (bln == true){
        aryRtn[0] = true;
      }
    }
    j = j + 1;
  }
  return aryRtn;
}
/**
  *是否已將替代料刪除
  *bln_BOM_COMP_Deleted
  *@param strNewCOMPONENT 上階料號
  *@param strASSEMBLY 替代料
  *@return retVal
  *因應主料刪除並新增新料為主料且同時新增替代料時，於表單傳送前檢核是否已將主料刪除/Phoebe.20131230
*/
function bln_BOM_COMP_Deleted(strASSEMBLY, strNewCOMPONENT){
  var retVal = "N;" + strNewCOMPONENT;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){        
    if (tGrid1Data[i]['SENAO111D004'] == strASSEMBLY && tGrid1Data[i]['SENAO111D006'] == strNewCOMPONENT && tGrid1Data[i]['SENAO111D011'] == "0"){	//Total Quantity After Change == 0
      retVal = "Y";
      gsenao111d028.value = "ECO-2";  //index:25 = ECO Number, gsenao111d028
      break;
    }
  }
  return retVal;
}	//end of bln_BOM_COMP_Deleted 是否已將主料刪除
function ChkDuplicateData(strAssm_No, strComp_No, strType, dataIndex){
  var retVal = "";
  var dataArray = getGridData(0); 
  var dataCount = dataArray.length;
  for(var j=0;j<dataCount;j++){
    if(j!=dataIndex){ //1. dataIndex=-1 add, 2. dataIndex=1,2,3... update: compare with other index data
      if(strAssm_No == dataArray[j]['SENAO111D004'] && strComp_No == dataArray[j]['SENAO111D006']){
        if(strType=="替代料"){
          if(strType == dataArray[j]['SENAO111D017']){
            retVal = "不可同時申請2筆[" + strAssm_No + "-" + strComp_No + "]的資料!!\n";
            break;
          }else{
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if(dataArray[j]['SENAO111D010']!=0){
              retVal = "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\n";
              break;
            }
          }
        }else{
          if(dataArray[j]['SENAO111D017']=="非替代料" || dataArray[j]['SENAO111D017'].toUpperCase()=="DISABLE"){
            retVal = "不可同時申請2筆[" + strAssm_No + "-" + strComp_No + "]的資料!!\n";
            break;
          }else{
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if(dataArray[j]['SENAO111D010']!=0){
              retVal = "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\n";
              break;
            }
          }
        }
      }
    }
  }
  return retVal;
}
function genUuid() {
	uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0,v=c=='x' ? r : r&0x3|0x8;
		return v.toString(16);}
	);
	return uuid;
}
/**
 * 取得系統根目錄
 * @returns {string} prePath
 */
function getRootPath() { 
	var strFullPath=window.document.location.href; 
  //alert("strFullPath = " + strFullPath);
	var strPath=window.document.location.pathname; 
  //alert("strPath = " + strPath);
	var pos=strFullPath.indexOf(strPath); 
  //alert("pos = " + pos);
	var prePath=strFullPath.substring(0,pos); 
  //alert("prePath = " + prePath);
	return prePath;
} 
/**
  *Load Excel檢查
  *loadExcelData
*/
function loadExcelData(formGridId,returnData){ //call back function    
	var excelList = eval(returnData); 
  console.time('AddMultiRows');
	AddMultiRows("U", excelList);        
  console.timeEnd('AddMultiRows'); 	
}	//end of loadExcelData Load Excel檢查
/**
 * 顯示Excel匯入資料
 */
function displayExcelImportData() {
	btnImportTemp_onclick();
}
/**
 *是否需要EC
 *IsNeedEC
*/
function IsNeedEC(){
  var retVal = true;
  if (senao111019.value == "5"){
    retVal = false;
  }
  return retVal;
}
/**
 * 取上層單位
 * @param {string} DeptId
 * @returns DeptInfo 部門相關資料物件 (
 * 		1.DeptID 2.DeptName 3.DeptLevel 4.UpperDeptID 5.UpperDeptName 6.UpperDeptLevel)
 */
function findDeptLevel(DeptId){
	var DeptInfo = {};
	var sqlid = "BPM_getUpperUnitByDeptId";
	var params = [];
	var data = [];
	params.push(DeptId);
	data = ajaxGetData(invokeURL + sqlid, {
    DeptId : params[0]
	});
	if (data[0].result == undefined) {
		if (data.length > 0) {
			DeptInfo.DeptID = fixNull(data[0].DEPTID);
			DeptInfo.DeptName = fixNull(data[0].DEPTNAME);
			DeptInfo.DeptLevel = fixNull(data[0].DEPTLEVEL);
			DeptInfo.UpperDeptID = fixNull(data[0].UPPERDEPTID);
			DeptInfo.UpperDeptName = fixNull(data[0].UPPERDEPTNAME);
			DeptInfo.UpperDeptLevel = fixNull(data[0].UPPERDEPTLEVEL);
		}else {
      return "";
    }
	}else {
    console.log("function:"+"findDeptLevel" + " API:" + "BPM_getUpperUnitByDeptId "+ dataArray[0].result);
    return false;
  }
  return DeptInfo;
}
//判斷字串長度是否超過欄位型態/Phoebe.20110816
function IsOverChrCnt(strChr,intCnt){
  var retVal = "";    
  var aryChr = strChr.split(",");
  var aryChrCount = aryChr.length;
  var intString;
  for(var i=0;i<aryChrCount;i++){
    intString = 0;
    var subChrLen = aryChr[i].length;
    for(var j=0;j<subChrLen;j++){
      if(aryChr[i].charCodeAt(j)>=32 && aryChr[i].charCodeAt(j)<=126){
        intString = intString + 1;
      }else{
        intString = intString + 3;
      }            
    }
    if(intString > intCnt){
      retVal = aryChr[i];
      return retVal;
    }
  }
  return retVal;
}
function chkInsertIEUser(){
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  if(tGrid1DataCount>0){
    for(var i=0;i<tGrid1DataCount;i++){
      strItemPre2 = left(tGrid1Data[i]['SENAO111D004'],2); //上階料號前2碼
      strItemPre1 = left(tGrid1Data[i]['SENAO111D004'],1); //上階料號前1碼
      if(isNumeric(strItemPre2)){
        if(parseInt(strItemPre2)<=52){  //前2碼小於等於52 => IE 簽核
          retVal = true;
          break;
        }
      }else{
        //Chandler.20170109 for emplus恩嘉料號,成品開頭對應 0(M),1(B)與51(GB),52(GC)階對應
        //前2碼等於GB, GC, 或前1碼為M, B => IE 簽核
        if(strItemPre2=="GB" || strItemPre2=="GC" || strItemPre1=="M" || strItemPre1=="B"){
          retVal = true;
          break;
        }
      }
    }
  }
  return retVal;
}
//檢核是否有廠商先行備料數量未填
function ChkPrepareVendor(){
  var retVal = "";
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){
    if (tGrid1Data[i]['SENAO111D017'] != "替代料" && tGrid1Data[i]['SENAO111D011'] == "0" && tGrid1Data[i]['SENAO111D025'] == ""){  //20210324 Milla 原本抓18:庫存數 !="", 22:廠商先行備料 != "", 改判斷Total Quantity After Change == "0"
      var strundo = FindItemBuyer(tGrid1Data[i]['SENAO111D006']);
      if (strundo == "Y"){
        retVal += "請確認表單附件[No." + ( i + 1) + "] " + tGrid1Data[i]['SENAO111D006'] + " 是否有廠商先行備料數量,若無數量請填0\n";
      }
    }
  }
  return retVal;
}
//檢查某一關卡是否有上傳附件
function chkUploadAttachment(strFlowName){
  var retVal = false;
  var tAS=document.getElementById('_cuzfileChooser_selectedItems');
  if (tAS != null){
    for (var i = 1; i < tAS.rows.length; i++){
      var strActivityName = tAS.rows[i].cells[6].innerText;
      if (strActivityName.indexOf(strFlowName) == 0){
        retVal = true;
      }
    }
  }
  return retVal;
}
/**
 *新增DCC二次簽核
 *InsertDCC2Flow
*/
function InsertDCC2Flow(){
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  if (tGrid1DataCount > 0){
    for (var i = 0; i < tGrid1DataCount; i++){
      if (tGrid1Data[i]['SENAO111D028'] != ""){	//ECO_Number
        retVal = true;
        break;
      }
    }
  }
  return retVal;
}
function setODM_APPLY(){ //define at BeforeApproveForm.asp:2458
  hdn_ODM_APPLY.value = "";
  if (senao111078.value != ""){
    hdn_ODM_APPLY.value = "SENAO";
  }else if (senao111014_t4.value != ""){
    hdn_ODM_APPLY.value = senao111087.value;
  }
}
function setCHANGE_PER_OE_TYPE(){
  var retVal = "";
  var strMethod = senao111019.value;
  var strBrand = senao111015.value;
  if (strMethod == "6"){
    retVal = "OBM";
  }else if (strBrand == "1"){
    retVal = "ODM";
  }
  hdn_CHANGE_PER_OE_TYPE.value = retVal;
}
/**
 *檢查附件 
 *chkAttFileExists
*/
function chkAttFileExists(){
	retVal = false;
	if (document.getElementById('_cuzfileChooser_selectedItems') != undefined){
		var tAS = document.getElementById('_cuzfileChooser_selectedItems');
		if (tAS.rows.length >= 2){
			retVal = true;
		}
	}
	return retVal;
}
/**
 *FormSave時check gridview 20200511
 *CheckGrid_onFormSave
*/
function CheckGrid_onFormSave(){
	var errorMsg = "";
	var strASSM_NO = "";	//上階料號
	var strCOMP_NO = "";	//本階料號	
	var strProcess = "";	//處理	
	var strComponent_sequence_id = "";	//component_sequence_id
	var strASSM_NO_INVENTORY_ITEM_STATUS_CODE = "";	//上階料號的狀態
	var strCOMP_NO_INVENTORY_ITEM_STATUS_CODE = "";	//本階料號的狀態
	var strADD_INVENTORY_ITEM_STATUS_CODE;	//替代料號狀態
	var strADD_BOM_INVENTORY_ITEM_STATUS_CODE;	//替代料號底下的BOM ITEM狀態
	var strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE;	//本階料號底下的BOM ITEM狀態
	//var ecoRemark = gsenao111d028.value; //20190222
	var getchkIsMbom_ItemNoStatus_COMP = false;	//本階料號是否符合狀態規則
	var getchkIsMbom_ItemNoStatus_Add = false;	//替代料號是否符合狀態規則
	var getchkIsMbom_ItemNoStatus_CompBOMList = false;	//本階料號的BOM ITEM是否符合狀態規則
	var getchkIsMbom_ItemNoStatus_AddBOMList = false;	//替代料在BOM ITEM是否符合狀態規則
	
	var ecoRemark;
	var tParams = [];
	var dataArray;
		
	var tmpStr = "";	//	第幾筆上階料號
	var tmpAry;	//字串陣列,for split
	var tmpAry2;	//字串陣列,for split
	var dupFlag = false;	//判斷是否重覆
	var ExistsFlag = false;	//判斷是否存在
	var re; //for 正規表示式 Regular expressions
	var i = 0;	//for loop
	var j = 0;	//for loop
	var k = 0;	//for loop
	var EfCntSubStitute = 0;	//EF替代料數量
	var OracleCntSubStitute = 0;	//Oracle替代料數量
	var ChkPhaseOut_str = "";	//是否有EOL
	var tGrid1Data = getGridData(0); 
	
	if (activityId == "0001") {	//填表人
		for (i = 0; i < tGrid1Data.length; i++){
			//RD人員填單需判斷是否同步修改線路圖
			strASSM_NO = tGrid1Data[i]['SENAO111D004'];	//上階料號
			strCOMP_NO = tGrid1Data[i]['SENAO111D006'];	//本階料號
			strProcess = tGrid1Data[i]['SENAO111D017'];	//處理
      gsenao111d017.value = strProcess;
			strComponent_sequence_id = tGrid1Data[i]['SENAO111D018'];	//component_sequence_id
			strASSM_NO_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(tGrid1Data[i]['SENAO111D004']);	//上階料號的狀態
			strCOMP_NO_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(strCOMP_NO);	//本階料號的狀態
			tmpStr = " [表單附件][" + (i + 1) + "]-[Assembly Level Part Number]:(" + strASSM_NO + ")";
			
			// alert('CheckGrid_onFormSave_a' + i.toString());
			if (IsRdApply()){	//為RD人員申請表單
				if (IsCircuitDiagram(strASSM_NO, strCOMP_NO) && senao111076.value == ""){	//是否為線路圖 Assembly Level Part Number(senao111d004), Part Number(senao111d006) && Need to Modify Schematics?為空
					errorMsg += tmpStr + "前2碼為52、59，請選擇是否修改線路圖! Need to Modify Schematics!\n";
					senao111076.disabled = false; //設定是否修改線路的欄位狀態,SetCircuitDiagramStatus()					
					break;
				}

        if(IsCircuitDiagram(strASSM_NO, strCOMP_NO) && senao111076.value == "N" && senao111025.value ==""){
          errorMsg +="Need to Modify Schematics為 No 時需填寫原因";
        }
			}
			
			// alert('CheckGrid_onFormSave_b' + i.toString());
			if ("H,P".indexOf(strASSM_NO_INVENTORY_ITEM_STATUS_CODE) >= 0){
				errorMsg += tmpStr + "此上階料號狀態已設" + strASSM_NO_INVENTORY_ITEM_STATUS_CODE + ",請先用「商品物料編號表」恢復料號後,才可申請EC\n";
				break;
			}
			
			// alert('CheckGrid_onFormSave_c' + i.toString());
			if (IsEBOMItem(strASSM_NO)){
				errorMsg += tmpStr + "此上階料號為EBOM狀態,需轉成MBOM才可申請EC\n";
				break;
			}
			
			if (strProcess == "替代料" || strProcess == "非替代料" ){	//替代料 或 非替代料 要判斷狀態
			
        /*
        填寫本階料號(含階層料號)，系統自動帶出品名。若為新增料號，填寫時會提示料號不在BOM裡是否要新增，並做以下判斷卡控
        狀態判斷:(1)上階層料號狀態為PVT，新增本階料號(含替代料)ID/ME(如料號明細)與5730A料號之狀態需為S4、C、A ，其餘料號需C、A及階層料號PVT狀態。
        (2)上階層料號狀態為Active，新增本階料號(含替代料)所有料號之狀態皆為A。
        (3)判斷新增本階料號(含替代料)Item Status&Phase out Date有EOL狀態不可EC(請參考工作表"EOL狀態明細")
        ※新增及刪除替代料號不允許在此欄位填寫，會提示卡填寫
        (5)新增5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM
        */
          /*
        getchkIsMbom_ItemNoStatus_COMP = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, strCOMP_NO, strCOMP_NO_INVENTORY_ITEM_STATUS_CODE);
        if (!getchkIsMbom_ItemNoStatus_COMP){
          if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
            errorMsg = tmpStr + "承認狀態為 : Active\n，展BOM，本階料號：" + strCOMP_NO + "要Active!\n";
            break;
          }
          if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
            errorMsg = tmpStr + " 承認狀態為 : PVT\n， 本階料號：" + strCOMP_NO + "，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
            break;
          }
        }*/
        
        //(5)新增 5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM
        // alert('CheckGrid_onFormSave_f' + i.toString());
        if (IsEBOMItem(strCOMP_NO)){
          if (("52,58".indexOf(left(strCOMP_NO, 2)) >= 0 || "5100Z".indexOf(left(strCOMP_NO, 5)) >= 0 || "5730,5718,5722,5626".indexOf(left(strCOMP_NO, 4)) >= 0) && chkItemTemplate("SA", strCOMP_NO)){
            errorMsg = tmpStr + "此本階料號:" + strCOMP_NO + " " + "為EBOM狀態,需轉成MBOM才可申請EC\n";
            break;
          }
          if(("51,59".indexOf(left(strCOMP_NO, 2)) >= 0 || "5730,5718,5722,5626".indexOf(left(strCOMP_NO, 4)) >= 0) && chkItemTemplate("PH", strCOMP_NO)){
            errorMsg = tmpStr + "此本階料號:" + strCOMP_NO + " " + "為EBOM狀態,需轉成MBOM才可申請EC\n";
            break;
          }
        }
          
        tParams = [strASSM_NO, strCOMP_NO, orgno];
        dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {
          gsenao111d004:tParams[0],
          gsenao111d006:tParams[1],
          orgno:tParams[2]
        })//查詢BOM本階資料
        if(dataArray[0].result == undefined){
          if (dataArray[0].COUNT <= 0){	//料號不在BOM裡				
            /*新增本階料號下的BOM LIST ITEM 狀態是否符合EC規則-Start*/
            var COMP_ItemID = ""; //本階料號ID
            var COMP_BOM_List_Err = "";
            var getchkIsMbom_ItemNoStatus_CompBOMList = false;	//本階料號在BOM LIST下的料號是否符合狀態規則
            
            tParams = [strCOMP_NO, orgno];				
            dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_36", {
              strCOMP_NO:tParams[0],
              orgno:tParams[1]
            });
            if(dataArray[0].result == undefined){
              if ( (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
                COMP_ItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
              }
            }else{
              console.log("function:"+"CheckGrid_onFormSave" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
              return false;
            }

            tParams = [orgno, COMP_ItemID];
            dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_44", {
              orgno:tParams[0],
              ItemID:tParams[1]
            })//取BOM List ITEM
            if(dataArray[0].result == undefined){
              if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
                for (j = 0; j < dataArray.length; j++){
                  strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE = fixNull(dataArray[j].INVENTORY_ITEM_STATUS_CODE);	//本階料號BOM LIST每個ITEM的狀態
                  getchkIsMbom_ItemNoStatus_CompBOMList = false;
                  ChkPhaseOut_str = "";
                  ChkPhaseOut_str = ChkPhaseOut_1(fixNull(dataArray[j].ITEM_NO), fixNull(dataArray[j].EOL_DATA), fixNull(dataArray[j].GROUPING_ID));
                  
                  if (ChkPhaseOut_str != ""){
                    if (left(ChkPhaseOut_str,1) == "L"){
                      COMP_BOM_List_Err = tmpStr + "本階料號(" + strCOMP_NO + ")的BOM LIST" + "料號(" + fixNull(dataArray[j].ITEM_NO) + ")為管制用料,不可使用\n";
                      break;
                      
                    }
                    if (left(ChkPhaseOut_str,2) == "D;"){
                      COMP_BOM_List_Err = tmpStr + "本階料號(" + strCOMP_NO + ")的BOM LIST" + "料號(" + fixNull(dataArray[j].ITEM_NO) + ")已EOL,請改用替代料\n";								
                      break;
                    }
                  }
                  
                  getchkIsMbom_ItemNoStatus_CompBOMList = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, fixNull(dataArray[j].ITEM_NO), strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE);
                  if (!getchkIsMbom_ItemNoStatus_CompBOMList){
                    if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
                      COMP_BOM_List_Err = tmpStr + "承認狀態為 : Active\n，本階料號(" + strCOMP_NO + ")的BOM LIST，全部都要是Active!\n";										
                      break;
                    }
                    if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
                      COMP_BOM_List_Err = tmpStr + "承認狀態為 : PVT\n，本階料號(" + strCOMP_NO + ")的BOM LIST，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
                      break;
                    }
                  }
                }
              }
            }else{
              console.log("function:"+"CheckGrid_onFormSave" + " API:" + "BPM_ERP_SENAO111_44 "+ dataArray[0].result);
              return false;
            }

            if (COMP_BOM_List_Err != ""){
              errorMsg = errorMsg + COMP_BOM_List_Err;
              break;
            } 
            /*新增本階料號下的BOM LIST 狀態是否符合EC規則-End*/
          }
        }else{
          console.log("function:"+"CheckGrid_onFormSave" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
          return false;
        }
			}
			
			/*
			※判斷:(1)系統無此料號
			(2)同階層有重覆插件位置(含替代料)
			(3)同筆及同張EC不同筆新增有相同插件位置(含替代料)
			(4)新增替代料料號未符合階層PCV及Active之料件狀態，以及有無EOL狀態(同Part Number狀態說明)
			(5)新增5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM
			*/
			
			// alert('CheckGrid_onFormSave_g' + i.toString());
			if (strProcess == "非替代料"){
				//(1)上階料號屬51、56、成品階層 且處理(senao111d017)非替代料(若為替代料則Add Reference 直接填寫替代料料號)->Add Reference及 Delete Reference 此欄位填寫數量，數量前需填*字，例:*1,			
				if ("51,56".indexOf(left(strASSM_NO, 2)) >= 0 || chkItemTemplate("PH", strASSM_NO) || chkItemTemplate("FG", strASSM_NO)){
					if (tGrid1Data[i]['SENAO111D012'] != ""){
						if (!isNaN(tGrid1Data[i]['SENAO111D012'].replace('*',''))){
							if (tGrid1Data[i]['SENAO111D012'].indexOf("*") < 0){  //Add Reference
								errorMsg += tmpStr + " 上階料號" + strASSM_NO + "屬51、56、成品階層，且處理非替代料，Add Reference填寫數量，數量前需填*字.\n";
								break;
							}
						}
					}
					
					if (tGrid1Data[i]['SENAO111D013'] != ""){
						if (!isNaN(tGrid1Data[i]['SENAO111D013'].replace('*',''))){
							if (tGrid1Data[i]['SENAO111D013'].indexOf("*") < 0){  //Delete Reference
								errorMsg += tmpStr + " 上階料號屬51、56、成品階層，且處理非替代料，Delete Reference填寫數量，數量前需填*字.\n";
								break;
							}
						}
					}
				}
				
				//(2)上階料號屬52、57、58、59階層->此欄位填寫插件位置，用量用小寫逗號區分。例:R1,R2,R3，共3個插件位置			
				re=/^[52|57|58|59]/; 
				if (re.test(strASSM_NO)){
					if (tGrid1Data[i]['SENAO111D012'].indexOf(",") >= 0){  //Add Reference 要判斷有無重覆插件位置
						tmpAry = tGrid1Data[i]['SENAO111D012'].split(",");                
						dupFlag = false;
						for (j = 0; j < tmpAry.length-1; j++){
							if (dupFlag != true){
								for (k = 0; k < tmpAry.length-1; k++){
									if(j != k && tmpAry[j] == tmpAry[k]){
										errorMsg += tmpStr + " 插件位置 (" + tmpAry[j] + ") 有重複.\n";
										dupFlag = true;
										break;                            
									}
								}
							}else{
								break;
							}
						}
					}
					
					if (tGrid1Data[i]['SENAO111D013'].indexOf(",") >= 0){  //Delete Reference 要判斷有無重覆插件位置
						tmpAry = tGrid1Data[i]['SENAO111D013'].split(",");                
						dupFlag = false;
						for (j = 0; j < tmpAry.length-1; j++){
							if (dupFlag != true){
								for (k = 0; k < tmpAry.length-1; k++){
									if (j != k && tmpAry[j] == tmpAry[k]){
										errorMsg += tmpStr + " 插件位置 (" + tmpAry[j] + ") 有重複.\n";
										dupFlag = true;
										break;                            
									}
								}
							}else{
								break;
							}
						}
					}
				}
				
				//20210709 Milla 
				//Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
				var bool_IsDupItem_In_ComponentAndAddreference = false;
				bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strProcess, strASSM_NO, strCOMP_NO);
				if (bool_IsDupItem_In_ComponentAndAddreference){
					errorMsg = tmpStr + "此新增主料:" + strCOMP_NO + "（處理：非替代料）" + "有重覆在替代料的Add Reference中";
					break;
				}
			}
			
			//(3)新增替代料號->此欄位直接填寫替代料料號，填寫完料號後會自動帶出品名，新增多個替代料用小寫逗號區別數量，最多能加至9個替代料
			// alert('CheckGrid_onFormSave_h' + i.toString());
			if (strProcess == "替代料"){
				tmpAry = tGrid1Data[i]['SENAO111D012'].split(",");	//Add Reference
				ExistsFlag = true;
				for (j = 0; j < tmpAry.length-1; j++){
					if (ExistsFlag){
						tmpAry2 = tmpAry[j].split("-");
						if (!ChkAddReference_Exists(tmpAry2[0])){	//判斷系統有無此料號
							errorMsg += tmpStr + " 此替代料(" + tmpAry2[0] + ") 不存在.\n";
							ExistsFlag = false;
							break;
						}
						strADD_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(tmpAry2[0]);	//替代料的狀態
						
						/*狀態判斷:(1)上階層料號狀態為PVT，新增本階料號(含替代料)ID/ME(如料號明細)與5730A料號之狀態需為S4、C、A ，其餘料號需C、A及階層料號PVT狀態。
						(2)上階層料號狀態為Active，新增本階料號(含替代料)所有料號之狀態皆為A。
						(3)判斷新增本階料號(含替代料)Item Status&Phase out Date有EOL狀態不可EC(請參考工作表"EOL狀態明細")
						※新增及刪除替代料號不允許在此欄位填寫，會提示卡填寫
						(5)新增5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM*/
						
						var getchkIsMbom_ItemNoStatus_Add = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, tmpAry2[0], strADD_INVENTORY_ITEM_STATUS_CODE);
						if (!getchkIsMbom_ItemNoStatus_Add){
							if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
								ExistsFlag = false;
								errorMsg = tmpStr + "承認狀態為 : Active\n， 此替代料(" + tmpAry2[0] + ")，全部都要是Active!";
								break;
							}
							if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
								ExistsFlag = false;
								errorMsg = tmpStr + "承認狀態為 : PVT\n， 此替代料(" + tmpAry2[0] + ")，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!";
								break;
							}
						}
												
						//(3)判斷新增本階料號(含替代料)Item Status&Phase out Date有EOL狀態不可EC(請參考工作表"EOL狀態明細")
						ChkPhaseOut_str = ChkPhaseOut(tmpAry2[0]);	//是否為EOL料號
						if (ChkPhaseOut_str != ""){
							if (left(ChkPhaseOut_str, 1) == "L"){
								errorMsg = tmpStr + "此替代料:" + tmpAry2[0] + " " + "為管制用料,不可使用\n";
								break;
							}
							if (left(ChkPhaseOut_str, 1) == "O"){
								errorMsg = tmpStr + "此替代料:" + tmpAry2[0] + " " + "已設Hold，請先至「商品物料編號表」將Phase out Date資料刪除，才可申請EC\n";
								break;
							}
							if (left(ChkPhaseOut_str, 2) == "D;"){
								errorMsg = tmpStr + "此替代料:" + tmpAry2[0] + " " + "已EOL,請改用替代料\n";
								break;
							}
						}
						
						//(5)新增 5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM
						if (IsEBOMItem(tmpAry2[0])){
							if (("52,58".indexOf(left(tmpAry2[0], 2)) >= 0 || "5100Z".indexOf(left(tmpAry2[0], 5)) >= 0 || "5730,5718,5722,5626".indexOf(left(tmpAry2[0], 4)) >= 0) && chkItemTemplate("SA", tmpAry2[0])){
								ExistsFlag = false;
								errorMsg = tmpStr + "此替代料:" + tmpAry2[0] + " " + "為EBOM狀態,需轉成MBOM才可申請EC\n";
								break;
							}
							if(("51,59".indexOf(left(tmpAry2[0], 2)) >= 0 || "5730,5718,5722,5626".indexOf(left(tmpAry2[0], 4)) >= 0) && chkItemTemplate("PH", tmpAry2[0])){
								ExistsFlag = false;
								errorMsg = tmpStr + "此替代料:" + tmpAry2[0] + " " + "為EBOM狀態,需轉成MBOM才可申請EC\n";
								break;
							}
						}
												
						/*判斷替代料在BOM LIST下的料號--Start*/
						var AddItemID = ""; //替代料號ID
						var ADD_BOM_List_Err = "";
						var getchkIsMbom_ItemNoStatus_AddBOMList = false;	//替代料在BOM LIST下的料號是否符合狀態規則
						tParams = [tmpAry2[0], orgno];
						
						dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_36", {
              strCOMP_NO:tParams[0],
              orgno:tParams[1]
            });//取替代料號的ITEM ID
            if(dataArray[0].result == undefined){
              if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray.length > 0){
                AddItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
						  }
            }else{
              console.log("function:"+"CheckGrid_onFormSave" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
              return false;
            }
						tParams = [orgno, AddItemID];
						dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_44", {
              orgno:tParams[0],
              ItemID:tParams[1]
            })	//取BOM List ITEM
            if(dataArray[0].result == undefined){
              if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
                for (k = 0; k < dataArray.length; k++){
                  strADD_BOM_INVENTORY_ITEM_STATUS_CODE = fixNull(dataArray[k].INVENTORY_ITEM_STATUS_CODE);	//替代料號BOM LIST每個ITEM的狀態
                  getchkIsMbom_ItemNoStatus_AddBOMList = false;
                  ChkPhaseOut_str = "";
                  ChkPhaseOut_str = ChkPhaseOut_1(fixNull(dataArray[k].ITEM_NO), fixNull(dataArray[k].EOL_DATA), fixNull(dataArray[k].GROUPING_ID));
                  
                  if (ChkPhaseOut_str != ""){
                    if (left(ChkPhaseOut_str,1) == "L"){
                      ExistsFlag = false;
                      ADD_BOM_List_Err = tmpStr + "此替代料(" + tmpAry2[0] + ")的BOM LIST" + "料號(" + fixNull(dataArray[k].ITEM_NO) + ")為管制用料,不可使用\n";
                      break;
                      
                    }
                    if (left(ChkPhaseOut_str,2) == "D;"){
                      ExistsFlag = false;
                      ADD_BOM_List_Err = tmpStr + "此替代料(" + tmpAry2[0] + ")的BOM LIST" + "料號(" + fixNull(dataArray[k].ITEM_NO) + ")已EOL,請改用替代料\n";								
                      break;
                    }
                  }
                  
                  getchkIsMbom_ItemNoStatus_AddBOMList = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, fixNull(dataArray[k].ITEM_NO), strADD_BOM_INVENTORY_ITEM_STATUS_CODE);
                  if (!getchkIsMbom_ItemNoStatus_AddBOMList){
                    if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
                      ExistsFlag = false;
                      ADD_BOM_List_Err = tmpStr + "承認狀態為 : Active\n，此替代料(" + tmpAry2[0] + ")的BOM LIST，全部都要是Active!\n";										
                      break;
                    }
                    if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
                      ExistsFlag = false;
                      ADD_BOM_List_Err = tmpStr + "承認狀態為 : PVT\n，此替代料(" + tmpAry2[0] + ")的BOM LIST，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
                      break;
                    }
                  }
                }
              }
						}else{
              console.log("function:"+"CheckGrid_onFormSave" + " API:" + "BPM_ERP_SENAO111_44 "+ dataArray[0].result);
              return false;
            }
						if (ADD_BOM_List_Err != ""){
							ExistsFlag = false;
							errorMsg = errorMsg + ADD_BOM_List_Err;
							break;
						}
						
						//20210709 Milla 
						//Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
						var bool_IsDupItem_In_ComponentAndAddreference = false;
						bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strProcess, strASSM_NO, tmpAry2[0].trim());
						if (bool_IsDupItem_In_ComponentAndAddreference){
							errorMsg = tmpStr + "此新增替代料:" + tmpAry2[0].trim() + "有重覆在非替代料的主料中";
							break;
						}
						
						/*判斷替代料在BOM LIST下的料號--End*/
					}else{
						break;
					}					
				}
				
				// alert('CheckGrid_onFormSave_i' + i.toString());
				tmpAry = tGrid1Data[i]['SENAO111D013'].split(",");	//Delete Reference
				ExistsFlag = true;
				for (j = 0; j < tmpAry.length - 1; j++){					
					if (ExistsFlag){
						tmpAry2 = tmpAry[j].split("-");
						if (!ChkDelReference_Exists(strProcess, strASSM_NO, strCOMP_NO, tmpAry2[0], strComponent_sequence_id)){	//判斷系統有無此料號
							errorMsg += tmpStr + " Delete Reference:料號 (" + tmpAry2[0] + ") 不存在.\n";
							ExistsFlag = false;
							break;
						}
					}else{
						break;
					}
				}
				
				//若為替代料，替代數不可超過9個/Phoebe.2010/05/31
				// alert('CheckGrid_onFormSave_j' + i.toString());
				EfCntSubStitute = GetChangeQty(tGrid1Data[i]['SENAO111D012']) - GetChangeQty(tGrid1Data[i]['SENAO111D013']);	//Add Reference數量 - Delete Reference 數量
				OracleCntSubStitute = GetOracleCntSubStitute(strComponent_sequence_id);
				if (OracleCntSubStitute + EfCntSubStitute > 9){
					errorMsg += tmpStr + "的Oracle[替代料]已存在(" + OracleCntSubStitute + ")個!\n";
					errorMsg += "　　EasyFlow申請新增的[替代料]不可超過(" + 9 - OracleCntSubStitute + ")個\n";
					break;
				}
			}
		}
	}
	
	if (activityId == "0070-0010"){	//DCC簽核0070-0010
		if (IsRdApply()){ //CheckFieldData.asp:682 //為RD人員申請表單
			for (i = 0; i < tGrid1Data.length; i++){
				tmpStr = " [表單附件]-[Assembly Level Part Number]:" + tGrid1Data[i]['SENAO111D004'];
				if (IsCircuitDiagram(tGrid1Data[i]['SENAO111D004'], tGrid1Data[i]['SENAO111D006']) && senao111076.value == ""){	//是否為線路圖 Assembly Level Part Number(senao111d004), Part Number(senao111d006) && Need to Modify Schematics?為空
					errorMsg += tmpStr + "前2碼為52、59，請選擇是否修改線路圖! Need to Modify Schematics!\n";
					senao111076.disabled = false;
					break;
				}    
			}
		}
	}
	
	if (activityId == "0500-0010"){	//DCC簽核0500-0010
		if (tGrid1Data.length > 0){              
			for (i = 0; i < tGrid1Data.length; i++){				
				if (tGrid1Data[i]['SENAO111D014'] == ""){
					errorMsg += "[表單附件]-[Assembly Level Part Number]:" + tGrid1Data[i]['SENAO111D004'] + " 請填寫[OP_CODE]!\n";
				}
				var strSheetNoByVerion = GetSheetNoByVerion(tGrid1Data[i]['SENAO111D004']);
				if (strSheetNoByVerion != ""){
					errorMsg += "[表單附件]-[Assembly Level Part Number]:" + tGrid1Data[i]['SENAO111D004'] + " 尚有表單(" + strSheetNoByVerion + ")在DCC主管關號處理，不允申簽核\n";
				}
				var aryGetCOMPID = GET_COMPONENT_ID_QTY(tGrid1Data[i]['SENAO111D004'], tGrid1Data[i]['SENAO111D006']);
				if (tGrid1Data[i]['SENAO111D028'] == ""){
					if(tGrid1Data[i]['SENAO111D018'] != aryGetCOMPID[0] || tGrid1Data[i]['SENAO111D010'] != aryGetCOMPID[1]){
						errorMsg += tGrid1Data[i]['SENAO111D004'] + "的" + tGrid1Data[i]['SENAO111D006'] + " 與BOM資料不符,請確認!!\n";
					}
				}else{
					if (tGrid1Data[i]['SENAO111D010'] != aryGetCOMPID[1]){
						errorMsg += tGrid1Data[i]['SENAO111D004'] + "的" + tGrid1Data[i]['SENAO111D006'] + " 與BOM資料不符,請確認!!\n";
					}
				}				
			}
		}
	}
	return errorMsg;
}
/*---------------------公用Function End--------------*/
/*---------------------多筆匯入 Start--------------*/
/**
 * SENAO111 多筆 Excel 匯入
 */
function excelInPutUI(rawData) {
  let head = rawData.head;
  let detail = rawData.detail;
  let formSN = head.FORMSERIALNUMBER_1 || 'Unknown';
  let errorLog = [];
  let status = true;
  excelinput=true;//多筆匯入參數

  // Step 1: 填寫單頭
  status = fillHeadFields_111(head, formSN, errorLog);
  if ($('#senao111019').val() =='') { 
    errorLog.push(`[${formSN}] [Method of Change]未填寫單身資料無法填寫!`);
    alert(errorLog.join('\n'));
    status = false;
    return status;
  }
  // Step 2: 逐筆填寫單身並加入 Grid
  let rowArray = [];
  if(detail.length === 0) {
    alert(`[${formSN}] [表單附件]資料筆數不得為 0 筆!`);
    return false;     
  }else{
    for (let i = 0; i < detail.length; i++) {
      let detailitems = detail[i];
      for (let j = 0; j < detailitems.length; j++) {
        let item = detailitems[j];
        status = gridRowChk_111(j, item, formSN, errorLog);
        if (!status) continue;

        let chkResult = chkInsGridData('');
        if (chkResult === false) {
          errorLog.push(`[${formSN}] 第 ${j + 1} 筆單身驗證失敗`);
          status = false;
          continue;
        }

        rowArray.push(getRowData(i, j + 1));
        clearBinding(0);
      }
    }

    if (rowArray.length > 0) {
      setGridData(0, rowArray);
      document.getElementById('Grid1').value = JSON.stringify(getGridData(0));
    }
  }
  // Step 3: formSave 驗證
  if (status) {
    let saveResult = formSaveForBatch();
    if (saveResult !== "") {
      errorLog.push(`[${formSN}] formSave() 驗證失敗 ${saveResult}`);
      status = false;
    }
  }

  // Step 4: 統一顯示錯誤
  if (errorLog.length > 0) {
    alert(errorLog.join('\n'));
  }

  return status;
}

// ─────────────────────────────────────────────
// 填寫單頭欄位
// ─────────────────────────────────────────────
function fillHeadFields_111(head, formSN, errorLog) {
  let status = true;

  $.each(head, function (key, value) {
    if (value === null || value === undefined) value = '';

    switch (key) {

      // ── 主旨 ──────────────────────────────────────────
      case 'TXT_SUBJECT_REMARK':
        $('#txt_Subject_Remark').val(value);
        break;

      // ── 公司別 ───────────────────────────────────────
      case 'FORM_OU':
        if (value === '') {
          errorLog.push(`[${formSN}] [FORM_OU] 公司別不可為空`);
          status = false;
        }
        if (changeOptionMethod('form_ou', value)) {
          $('#form_ou').trigger('change');
        } else {
          errorLog.push(`[${formSN}] [FORM_OU] 找不到公司別值: ${value}`);
          status = false;
        }
        break;

      // ── 廠區 ─────────────────────────────────────────
      case 'FORM_ORG':
        if (value === '') {
          //errorLog.push(`[${formSN}] [FORM_ORG] 廠區不可為空`);
          //status = false;
        }else{
          if (changeOptionMethod('form_org', value)) {
            $('#form_org').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [FORM_ORG] 找不到廠區值: ${value}`);
            status = false;
          }
        }
        
        break;

      // ── 申請人 ───────────────────────────────────────
      case 'SENAO111003':
        if (value === '') {
          errorLog.push(`[${formSN}] [Applicant] 申請人不可為空`);
          status = false;
        }
        $('#senao111003').val(value);
        senao111003_onchange(); // 自動帶入申請人姓名與部門
        if ($('#senao111003_t1').val() === '') {
          errorLog.push(`[${formSN}] [Applicant] 工號 ${value} 查無此人`);
          status = false;
        }
        break;

      // ── 重要性 ───────────────────────────────────────
      case 'SENAO111007':
        if (value === '') {
          errorLog.push(`[${formSN}] [Importance] 不可為空`);
          status = false;
        }else {
          if (changeOptionMethod('senao111007', value)) {
            $('#senao111007').trigger('change');
            senao111007_onclick(); // 控制急件說明顯示/隱藏
          } else {
            errorLog.push(`[${formSN}] [Importance] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── 急件說明 (Importance=0 時必填) ───────────────
      case 'URGENTEXPLANATION':
        var reason = ($('#senao111007').val() || '').toUpperCase();
        if (reason === '0') {
          if (value === '') {
            errorLog.push(`[${formSN}] [urgentExplanation] 急件說明不可為空`);
            status = false;
          }else{
            if(urgentExplanation.value.substring(0, 1) == '.' || urgentExplanation.value.substring(0, 1) == ' '){
              errorLog.push(`[急件說明]開頭不能.或空格`);
            }
          }
          $('#urgentExplanation').val(value);
        }
        break;

      // ── Project Code ─────────────────────────────────
      case 'SENAO111071':
        if (value === '') {
          errorLog.push(`[${formSN}] [Project Code] 不可為空`);
          status = false;
        } else{
          $('#senao111071').val(value);
          senao111071_onchange(); // 自動帶入 Project 描述，並預帶 Model
          if ($('#senao111071_t1').val() === '') {
            errorLog.push(`[${formSN}] [Project Code] ${value} 查無此專案`);
            status = false;
          }
        }
        break;

      // ── Model ID ─────────────────────────────────────
      case 'SENAO111014':
        if (value === '') {
          if($('#senao111071').val() == '') {
            errorLog.push(`[${formSN}] [Model Name] 不可為空`);
            status = false;
          }
        } else{
          $('#senao111014').val(value);
          senao111014_onchange(); // 查 Oracle 帶入 Model Name、客戶等
        }
        break;

      // ── 機種類別 (Model=00 時必填) ───────────────────
      case 'SENAO111014_T3':
        if ($('#senao111014').val() === '00' ){
          if ( value === '') {
            errorLog.push(`[${formSN}] [機種類別] Model 為 00 時不可為空`);
            status = false;
          }else {
            if (changeOptionMethod('senao111014_t3', value)) {
              if (value !== '') $('#senao111014_t3').trigger('change');
            } else {
              errorLog.push(`[${formSN}] [機種類別] 無效的值: ${value}`);
              status = false;
            }
          }
        }
        break;

      // ── Other Model Name (Model=00 時必填) ───────────
      case 'SENAO111014_T2':
        if ($('#senao111014').val() === '00' && value === '') {
          errorLog.push(`[${formSN}] [Other Model Name] Model 為 00 時不可為空`);
          status = false;
        }
        if (value !== '') {
          $('#senao111014_t2').val(value);
          senao111014_t2_onchange();
        }
        break;

      // ── 是否需修改生產規格書 ─────────────────────────
      case 'SENAO111081':
        if (value === '') {
          errorLog.push(`[${formSN}] [EC內容是否需修改生產規格書] 不可為空 (Y/N)`);
          status = false;
        } else {
          if (changeOptionMethod('senao111081', value)) {
            $('#senao111081').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [EC內容是否需修改生產規格書] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Brand ────────────────────────────────────────
      case 'SENAO111015':
        if (value === '') {
          errorLog.push(`[${formSN}] [Brand] 不可為空 (0=Own Brand / 1=Custom Made)`);
          status = false;
        }else {
          if (changeOptionMethod('senao111015', value)) {
            $('#senao111015').trigger('change');
            senao111015_onclick(); // 自動控制 Sales Section checkbox
          } else {
            errorLog.push(`[${formSN}] [Brand] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Reason of Change ─────────────────────────────
      case 'SENAO111016':
        if (value === '') {
          errorLog.push(`[${formSN}] [Reason of Change] 不可為空`);
          status = false;
        } else {
          if (changeOptionMethod('senao111016', value)) {
            $('#senao111016').trigger('change');
            senao111016_onchange();
          } else {
            errorLog.push(`[${formSN}] [Reason of Change] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Reason of Change 說明 (Others 時必填) ────────
      case 'SENAO111018':
        var reason = ($('#senao111016').val() || '').toUpperCase();
        if (reason  === 'OTHERS' && value === '') {
          errorLog.push(`[${formSN}] [Reason of Change 說明] Reason 為 Others 時不可為空`);
          status = false;
        }
        if (value !== '') $('#senao111018').val(value);
        break;

      // ── Remark ───────────────────────────────────────
      case 'SENAO111017':
        if (value === '') {
          errorLog.push(`[${formSN}] [備註欄] 不可為空`);
          status = false;
        }
        $('#senao111017').val(value.substring(0, 1000)); // 上限 1000 字
        break;

      // ── Method of Change ─────────────────────────────
      case 'SENAO111019':
        if (value === '') {
          errorLog.push(`[${formSN}] [Method of Change] 不可為空`);
          status = false;
        }else {
          if (changeOptionMethod('senao111019', value)) {
            $('#senao111019').trigger('change');
            senao111019_onchange(); // 控制日期/工單欄位顯示
          } else {
            errorLog.push(`[${formSN}] [Method of Change] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Modify Finished Goods ────────────────────────
      case 'SENAO111020':
        if (value === '') {
          if ($('#senao111019').val() =='') { 
            errorLog.push(`[${formSN}] [Modify Finished Goods] 不可為空 (0/1)`);
            status = false;
          }
        }else {
          if (changeOptionMethod('senao111020', value)) {
            $('#senao111020').trigger('change');
            senao111020_onchange(); // 若=0 自動帶 Semi-FG=0
          } else {
            errorLog.push(`[${formSN}] [Modify Finished Goods] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Modify Semi-Finished Goods ───────────────────
      case 'SENAO111021':
        if (value === '') {
          if ($('#senao111019').val() =='') { 
            errorLog.push(`[${formSN}] [Modify Semi-Finished Goods] 不可為空 (0/1)`);
            status = false;
          }
        }else {
          if (changeOptionMethod('senao111021', value)) {
            $('#senao111021').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [Modify Finished Goods] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Mix Parts in Production ──────────────────────
      case 'SENAO111024':
        if (value === '') {
          errorLog.push(`[${formSN}] [Mix Parts in Production] 不可為空 (0/1)`);
          status = false;
        }else {
          if (changeOptionMethod('senao111024', value)) {
            $('#senao111024').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [Mix Parts in Production] 無效的值: ${value}`);
            status = false;
          }
        }
        break;
    }
  });

  return status;
}

// ─────────────────────────────────────────────
// 填寫單身欄位
// ─────────────────────────────────────────────
function gridRowChk_111(index, row, formSN, errorLog) {
  /*
   * index  : 0-based 單身索引
   * row    : 單筆單身資料物件
   * formSN : 所屬表單識別碼 (用於錯誤訊息)
   * errorLog: 錯誤訊息陣列 (傳址修改)
   */
  let status = true;

  $.each(row, function (key, value) {
    if (value === null || value === undefined) value = '';

    switch (key) {

      // ── Assembly Level Part Number ───────────────────
      case 'SENAO111D004':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Assembly Level 不可為空`);
          status = false;
        }
        $('#gsenao111d004').val(value);
        // 觸發：查BOM品名、PhaseOut、Common BOM 判斷
        if (gsenao111d004_onchange() === false) {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Assembly Level [${value}] 驗證失敗`);
          status = false;
        }
        break;

      // ── Part Number ──────────────────────────────────
      case 'SENAO111D006':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Part Number 不可為空`);
          status = false;
        }
        $('#gsenao111d006').val(value);
        // 觸發：FindBOMData、新料確認、ECO-2 判斷
        if (gsenao111d006_onchange() === false) {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Part Number [${value}] 驗證失敗`);
          status = false;
        }
        break;

      // ── 處理 ─────────────────────────────────────────
      case 'SENAO111D017':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：處理 不可為空 (非替代料/替代料/Disable)`);
          status = false;
        }else{
          if (changeOptionMethod('gsenao111d017', value)) {
            $('#gsenao111d017').trigger('change');
            // 觸發：依處理類型決定後續計算路徑
            gsenao111d017_onchange();
          } else {
            errorLog.push(`[${formSN}] [筆：處理] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Add Reference ────────────────────────────────
      case 'SENAO111D012':
        if (value !== '') {
          $('#gsenao111d012').val(value);
          // blur 先做重覆插件位置檢查
          if (gsenao111d012_onblur() === false) {
            errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Add Reference [${value}] 重覆或不存在`);
            status = false;
          }
          // onchange：帶品名描述(替代料)或計算 Add Qty(非替代料)
          gsenao111d012_onchange();
        }else{
          //errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Add Reference 不可為空`);
          //status = false;
        }
        break;

      // ── Delete Reference ─────────────────────────────
      case 'SENAO111D013':
        if (value !== '') {
          $('#gsenao111d013').val(value);
          // 計算 Del Qty、CalculateTotalQty、setd029Status
          gsenao111d013_onchange();
        }else{
          //errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Delete Reference 不可為空`);
          //status = false;
        }
        break;

      // ── COMMENT ──────────────────────────────────────
      case 'SENAO111D015':
        // 01~51 前置碼的上階料號必填，由 chkInsGridData 驗證
        if (value !== '') {
          $('#gsenao111d015').val(String(value).replace(/\n/g, '').replace(/"/g, "'"));
        }
        break;
      
      // ── 管制料號 ──────────────────────────────────────
      case 'SENAO111D029':
        if (value === '') {
          if (($('#senao111d017').val() == "替代料" || $('#senao111d017').val() == "非替代料") && gsenao111d029.value == ""){
            errorLog.push(`[${formSN}] 第 ${index + 1} 筆：必須選擇是否為管制料號`);
            status = false;
          }
        }else {
           $('#gsenao111d029').val(value);
        }
    }
  });

  return status;
}
function formSaveForBatch() {
  var strOtherCustList = querySNSI003_Org("SN111_S50");	//ODM客戶
  var tGrid1Data = getGridData(0); 
  var errorMsg = "";
  workitemownerid = getUserIDByOID(workItemOwnerOID);  //請注意若轉單(非代簽)需一併修改會辦表人員
  if ($("#form_ou").val() == 'senao' || $("#form_ou").val() == 'svn'){ //20240411 Neil //20260223 Dex Add 需求[SENAO10100003802]，開啟急件說明卡控
    //重要性
    if(senao111007.value=="0" && urgentExplanation.value==''){
      //alert("[急件說明]不得空白");
      errorMsg += "[急件說明]不得空白"
    }
  }
  if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){	//電子工程課申請
    isEEApply.value = "Y";
  }else{
    isEEApply.value = "N";
  }
  
  if (querySNSI003_Org("SN111_S52").indexOf(senao111004.value) > -1){	//技術資料管制課申請
    isDCCApply.value = "Y";
  }else{
    isDCCApply.value = "N";
  }
  
  if (IsRdDept_Utils(senao111004.value) && querySNSI003_Org("SN111_S52").indexOf(senao111004.value) < 0){
    isRDDept1516.value = "Y";	//部門代號為15, 16開頭, 排除15312(DCC)
  }else{
    isRDDept1516.value = "N";
  }
  if (senao111007.value == "0"){
    hdn_senao111007_subj.value = "[急]";
  }else{
    hdn_senao111007_subj.value = "";
  }    
  if (senao111071.value.trim() == ""){	//Project Code
    errorMsg += "請填寫[Project Code]!\n";
  }else{
    var otherModelName = ""; //Model ID CheckFieldData.asp:177
    var strCust = senao111087.value;	//客戶名稱
    var strEmpNo = senao111003.value;	//申請人
      
    if (senao111014.value == ""){	//Model ID
      errorMsg += "請填寫[Model Name]!\n";
    }else if (senao111014.value == "00"){
      if (senao111014_t3.value == ""){
        errorMsg += "請選擇下拉選單Model Name[請選擇類別(其它、DCM、VCM)]!\n";
      }
      if (senao111014_t2.value == ""){
        errorMsg += "請填寫[Other Model Name]!\n";
      }else{
        otherModelName = senao111014_t2.value;
      }				
    }else{
      otherModelName = senao111014.value; //Model ID CheckFieldData.asp:177
      if (senao111014.value.indexOf(senao111071.value) < 0){
        errorMsg += "[Model Name]需為[ProjectCode]底下的洐生機種!\n";
      }
    } //end of if(senao111014.value=="")
      
    if (IsOdmModel(otherModelName, strCust)){	//是否為 odm 客戶的機種
      if (strCust == "SNWL"){
        if (IsSNWL_ECO_TO_SN() == false && (IsOdmApplicant(strCust, strEmpNo) || IsRMAApply())){	//非SonicWALL要求 Senao 做出的的變更 && (為ODM 申請人員||為RMA單位申請)
          var strPrompt = "若為SonicWALL指定變更,請務必註明[SonicWALL ECO Number].\n";
          strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
          strPrompt += "表單需通知客戶，請不要直接傳送，請按[取消]";
          if(confirm(strPrompt) == false){
            return false;
          }
        }
      }else if (strOtherCustList.indexOf(strCust) >= 0){	//是ODM客戶
        if (IsSNWL_ECO_TO_SN() == false){	//非SonicWALL要求 Senao 做出的的變更
          var strPrompt = "若為" + strCust + "指定變更,請務必註明[" + strCust + " ECO Number].\n";
          strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
          strPrompt += "表單需通知客戶，不要直接傳送，請按[取消]";
          if (confirm(strPrompt) == false){
            return false;
          }
        }
      }
    }
  } //end of if(senao111071.value.trim()=="")

  strchkErrMN = chkErrModelName(senao111014.value); //確認機種是否存在 CheckFieldData.asp:251
  if (strchkErrMN != ""){	//無此機種
    alert(strchkErrMN);
    return false;
  }
  /*20260409 vivian 多筆匯入是否就不用上傳附件
  //Ruckus&Meraki EC需routing時，填表人須上傳附件/Phoebe.20120413
  //Ruckus EC需routing時，填表人須上傳附件/Phoebe.20111111
  if (strOtherCustList.indexOf(senao111087.value) >= 0 && senao111014_t4.value != ""){ //是ODM客戶 && ECO Number CheckFieldData.asp:258
    if (chkAttFileExists() == false){
      errorMsg += "請上傳" + senao111087.value + " ECO附件!\n";
    }
  }else{
    if (chkAttFileExists() == false){
      if (confirm("※申請【電子料號EC】 請務必附上'PM/業務同意MAIL'及'測試報告'(or新舊規格比對表)。\n※申請【軟體FW EC】請附上單位已簽核之'軟體程式發行管制表' or 'PM/業務同意MAIL'。\n未附上則以退件處理！\n若需上傳檔案請按「確定」, 若無需附檔請選「取消」") == true){
        alert("請上傳附件!");
        return false;
      }
    } 
  }*/
  
  if (IsRMAApply() && senao111087.value == "SNWL"){	//為RMA單位申請 && 客戶是SNWL
    if (senao111014_t4.value == ""){	//ECO Number
      errorMsg += "[SonicWALL ECO Number]不得空白!\n";
    }
    if (senao111019.value == "6" && (senao111019_t4.value == "" || senao111019_t2.value.trim() == "")){	//6. By OE/工單變更 && (Method of Change: Order Type  || Method of Change: Order Number)
      errorMsg += "[依OE變更],請詳細填寫Order Type and Order Number!\n";
    }
  }
  if (senao111010.value == ""){	//Type: ECR Change / ECN Change
    errorMsg += "[Type]不得空白!\n";
  }
  //EE 需選擇RD SECTION 或 EE SECTION 人員
  if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){
    if (senao111036.value == ""){
      errorMsg += "EE部門人員，請選擇[RD Section]!\n";
    }
  }
  if((senao111078.value != "" && senao111078.value != "N") || senao111014_t4.value != ""){	//是否routing to SonicWALL && ECO Number
    isOdmEco.value = "Y";	//是否為配合snwl eco的單據-是
  }else{
    isOdmEco.value = "N";	//是否為配合snwl eco的單據-否
  }
  //*******************************************************************
  //單身規則：CheckFieldData.asp:348
  //附件表單化, 單身必需有資料
  //同一階且同一料在同一張單只能申請一次
  //*******************************************************************
  //以上單頭無誤(strErr = "" )，再做單身的防呆判斷        
  if (errorMsg == ""){
    if (senao111019.value != "5"){ //Method of change =5: No EC Needed                   
      if (tGrid1Data.length <= 0){  //CheckFieldData.asp line:357
        errorMsg += "[表單附件]資料筆數不得為 0 筆!\n";
      }            
    }
  }
  // alert('before CheckGrid_onFormSave');	
  errorMsg += CheckGrid_onFormSave();
  // alert('after CheckGrid_onFormSave');
  // todo check below function 
  CheckNeedToInfo22110Dept();
  InsertSourcer_Flow();
  makeMgrSourcerSign();
  var getSNSI003_str = "";

  getSNSI003_str = querySNSI003_Org("SN111_S39");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //硬體研發九處與工業電腦研發處發起之表單
      isSN111_S39.value = "Y";
    }else{
      isSN111_S39.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S41");	//[研發六處]所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //研發六處部門發起之表單
      isSN111_S41.value = "Y";
    }else{
      isSN111_S41.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S48");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //網路安全研發單位與機構發起之表單
      isSN111_S48.value = "Y";
    }else{
      isSN111_S48.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S49");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //語音通訊研發單位與機構發起之表單
      isSN111_S49.value = "Y";
    }else{
      isSN111_S49.value = "N";
    }
  }

  NSGCheck(); //20240523 Neil 

	//儲存Grid1資料
  if (tGrid1Data.length > 0) {  //判斷grid物件是否存在表單中       
		document.getElementById("Grid1").value = JSON.stringify(tGrid1Data); //將Grid裡的資料儲存至隱藏欄位中  
		clearBinding(0); 	
		for (i = 0; i < tGrid1Data.length; i++){
			if (tGrid1Data[i]['SENAO111D004'] == "" || tGrid1Data[i]['SENAO111D006'] == "" || tGrid1Data[i]['SENAO111D017'] == ""){
				alert("第" + tGrid1Data[i]['SENAO111D003'] + "筆單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return errorMsg;
			}
		}
		if(senao111019.value != "5"){
			if (Grid1.value == "" || Grid1.value == "[]"){
				alert("單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return errorMsg;
			}
		}
	}
	return errorMsg;
}
/*---------------------多筆匯入 End--------------*/
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
/**
  *檢查單身欄位資訊
  *chkInsGridData
  *@param dataIndex 修改的item index
*/
function chkInsGridData(dataIndex){
	var errorMsg = "";    
  if (senao111019.value == "5"){

  }else{
		var tGrid1Data = getGridData(0);                        
    var insIdx = tGrid1Data.length;
    var strASSM_NO;	//上階料號
    var strCOMP_NO;	//本階料號
    var tmpStr;
    var strTransItemNo;
    var strPhaseOut;
    var strPhaseOut1;
    var strPrefix1 = querySNSI003_Org("SN111_S03"); //value=01
    var strPrefix2 = querySNSI003_Org("SN111_S04"); //value=51
    var strErrPhaseOut = "";
    var strType;	//處理
    var strADD;	//add reference
    var strDEL;	//delete reference
    var strID;	//component_sequence_id
    var strOCC;
    var strDeleted;
    var blnCOMPONENT;
		var i = 0;
		var j = 0;
		var k = 0;
		var strASSM_NO_INVENTORY_ITEM_STATUS_CODE;	//上階料號狀態
		var strCOMP_NO_INVENTORY_ITEM_STATUS_CODE;	//本階料號狀態
		var strADD_INVENTORY_ITEM_STATUS_CODE;	//替代料號狀態
		var strADD_BOM_INVENTORY_ITEM_STATUS_CODE;	//替代料號底下的BOM ITEM狀態
		var strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE;	//本階料號底下的BOM ITEM狀態
		var ChkPhaseOut_str = "";	//是否為EOL料號
    //var ecoRemark = gsenao111d028.value; //20190222
    var ecoRemark;
		var tParams = [];
		var dataArray;
		
    if (dataIndex == ""){	//新增
      ecoRemark = gsenao111d028.value; //ecoRemark = ""; 20190715James
    }else{	//修改
      dataIndex=dataIndex-1
      ecoRemark = tGrid1Data[dataIndex]['SENAO111D028'];
    }
            
    strASSM_NO = gsenao111d004.value;	//上階料號
    strCOMP_NO = gsenao111d006.value;	//本階料號
		strType = gsenao111d017.value;  //處理
		strADD = gsenao111d012.value;    //add reference
		strDEL = gsenao111d013.value;    //delete reference
		strID = gsenao111d018.value;	//component_sequence_id
		
		if (strASSM_NO == "" || strCOMP_NO == "" || strType == ""){
			if (strASSM_NO == ""){
				errorMsg += "[表單附件]-[Assembly Level]不可為空白!\n";
			}
			if (strASSM_NO == ""){
				errorMsg += "[表單附件]-[Part Number]不可為空白!\n";
			}
			if (strType == ""){
        errorMsg += "[表單附件]-[處理]不可為空白!\n";
      }
			if (errorMsg != ""){
				alert(errorMsg);
				return false;
			}
		}else{			
      tmpStr = " [表單附件]-[Assembly Level]:(" + strASSM_NO + ")";
      
      strASSM_NO_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(strASSM_NO);	//上階料號的狀態
      strCOMP_NO_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(strCOMP_NO);	//本階料號的狀態
        
      // Disable時，不管控Comment是否空值，因Comment資料為自動帶出/Phoebe.20100930
      // #7096_恩嘉料號也須卡控Comment當料號前2碼01-51不可為空值/Modify by Joyce.20170505
      strTransItemNo = ItemNo_EpsToSenao(strASSM_NO);                          
      if ((strTransItemNo.substr(0, 2) >= strPrefix1 && strTransItemNo.substr(0, 2) <= strPrefix2) && strType != "Disable" ){
        if (gsenao111d015.value.trim() == ""){
          errorMsg = tmpStr + "前2碼為" + strPrefix1 + " ~ " + strPrefix2 + "的[Comment]不可為空白!\n";
          alert(errorMsg);
          return false;
        }
      }
			
      //判斷料號是否為PhaseOut料件/Phoebe.2010/05/04.Start
      strPhaseOut = ChkPhaseOut(strCOMP_NO);
      if (gsenao111d008.value != "0" && gsenao111d010.value == "0"){
        if (strPhaseOut != "" && /[DLO]/.test(strPhaseOut.substr(0, 1)) ){
          strErrPhaseOut = strErrPhaseOut + "  " + strPhaseOut.substr(2, strPhaseOut.length-2) + "\n";
        }
      }
      if (/^[^51|BB|BE|BH|ML|GB|0|1]/.test(strASSM_NO.substr(0, 2)) && strType != "替代料"){
        if (strADD != "" && gsenao111d008.value == "0"){
          errorMsg = tmpStr + " 的[Add Quantity]不可為0!\n";
          alert(errorMsg);
          return false;
        }
        if (strDEL != "" && gsenao111d009.value == "0"){
          errorMsg = tmpStr + " 的[Delete Quantity]不可為0!\n";
          alert(errorMsg);
          return false;
        }                
      }
      if (strType == "Disable" && gsenao111d010.value == "0"){
        errorMsg = tmpStr + " 沒有 " + strCOMP_NO + "這顆料件，因此不需申請刪除!\n";
        alert(errorMsg);
        return false;
      }			
        
      if (strType == "替代料" || strType == "非替代料" ){	//替代料 或 非替代料 要判斷狀態
        // var getchkIsMbom_ItemNoStatus_COMP = chkIsMbom_ItemNoStatus(strASSM_NO, strCOMP_NO);
        var getchkIsMbom_ItemNoStatus_COMP = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, strCOMP_NO, strCOMP_NO_INVENTORY_ITEM_STATUS_CODE);
        if (!getchkIsMbom_ItemNoStatus_COMP){
          if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
            errorMsg = tmpStr + "承認狀態為 : Active\n，展BOM，本階料號：" + strCOMP_NO + "要Active!\n";
            alert(errorMsg);
            return false;
          }
          if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
            errorMsg = tmpStr + " 承認狀態為 : PVT\n， 本階料號：" + strCOMP_NO + "，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
            alert(errorMsg);
            return false;
          }
        }
      }
			
      tParams = [strASSM_NO, strCOMP_NO, orgno];
      dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {
        gsenao111d004:tParams[0],
        gsenao111d006:tParams[1],
        orgno:tParams[2]
      })
      if(dataArray[0].result == undefined){
        if (dataArray[0].COUNT <= 0){	//料號不在BOM裡
          if (IsEBOMItem(gsenao111d006.value)){
            re = /^[52|58|5100Z|5730|5718|5722|5626]/;
            if (re.test(strCOMP_NO) && chkItemTemplate("SA", strCOMP_NO)){
              errorMsg = tmpStr + "，本階料號(" + strCOMP_NO + ")為EBOM狀態,需轉成MBOM才可申請EC\n";
              alert(errorMsg);
              return false;
            }
            if (("51,59".indexOf(left(strCOMP_NO, 2)) >= 0 || "5730,5718,5722,5626".indexOf(left(strCOMP_NO, 4)) >= 0) && chkItemTemplate("PH", strCOMP_NO)){
              errorMsg = tmpStr + "，本階料號(" + strCOMP_NO + ")為EBOM狀態,需轉成MBOM才可申請EC\n";
              alert(errorMsg);
              return false;
            }
          }
          if ("H;P".indexOf(strCOMP_NO_INVENTORY_ITEM_STATUS_CODE) >= 0 && strCOMP_NO_INVENTORY_ITEM_STATUS_CODE != ""){
            var strmsg = "";
            if (strCOMP_NO_INVENTORY_ITEM_STATUS_CODE == "H"){
              strmsg = "Hold";
            }else if (strCOMP_NO_INVENTORY_ITEM_STATUS_CODE == "P"){
              strmsg = "P";
            }
            errorMsg = tmpStr + "，本階料號(" + strCOMP_NO + ")已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC\n";
            alert(errorMsg);
            return false;
          }
            
          /*新增本階料號下的BOM LIST 狀態是否符合EC規則-Start*/
          var COMP_ItemID = ""; //本階料號ID
          var COMP_BOM_List_Err = "";
          var getchkIsMbom_ItemNoStatus_CompBOMList = false;	//本階料號在BOM LIST下的料號是否符合狀態規則
          
          tParams = [strCOMP_NO, orgno];				
          dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_36", {
            strCOMP_NO:tParams[0],
            orgno:tParams[1]
          });
          if(dataArray[0].result == undefined){
            if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
              COMP_ItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
            }
          }else{
            console.log("function:"+"chkInsGridData" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
            return false;
          }
  
          tParams = [orgno, COMP_ItemID];
          dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_44", {
            orgno:tParams[0],
            ItemID:tParams[1]
          })
          if(dataArray[0].result == undefined){
            if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
              for (i = 0; i < dataArray.length; i++){
                strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE = fixNull(dataArray[i].INVENTORY_ITEM_STATUS_CODE);	//本階料號BOM LIST每個ITEM的狀態
                getchkIsMbom_ItemNoStatus_CompBOMList = false;
                ChkPhaseOut_str = "";
                ChkPhaseOut_str = ChkPhaseOut_1(fixNull(dataArray[i].ITEM_NO), fixNull(dataArray[i].EOL_DATA), fixNull(dataArray[i].GROUPING_ID));
                
                if (ChkPhaseOut_str != ""){
                  if (left(ChkPhaseOut_str,1) == "L"){
                    COMP_BOM_List_Err = tmpStr + "本階料號(" + strCOMP_NO + ")的BOM LIST" + "料號(" + fixNull(dataArray[i].ITEM_NO) + ")為管制用料,不可使用\n";
                    break;
                    
                  }
                  if (left(ChkPhaseOut_str,2) == "D;"){
                    COMP_BOM_List_Err = tmpStr + "本階料號(" + strCOMP_NO + ")的BOM LIST" + "料號(" + fixNull(dataArray[i].ITEM_NO) + ")已EOL,請改用替代料\n";								
                    break;
                  }
                }
                
                getchkIsMbom_ItemNoStatus_CompBOMList = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, fixNull(dataArray[i].ITEM_NO), strCOMP_BOM_INVENTORY_ITEM_STATUS_CODE);
                if (!getchkIsMbom_ItemNoStatus_CompBOMList){
                  if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
                    COMP_BOM_List_Err = tmpStr + "承認狀態為 : Active\n，本階料號(" + strCOMP_NO + ")的BOM LIST，全部都要是Active!\n";										
                    break;
                  }
                  if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
                    COMP_BOM_List_Err = tmpStr + "承認狀態為 : PVT\n，本階料號(" + strCOMP_NO + ")的BOM LIST，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
                    break;
                  }
                }
              }
            }
          }else{
            console.log("function:"+"chkInsGridData" + " API:" + "BPM_ERP_SENAO111_44 "+ dataArray[0].result);
            return false;
          }  
          if (COMP_BOM_List_Err != ""){
            errorMsg = errorMsg + COMP_BOM_List_Err;
            alert(errorMsg);
            return false;
          }  
          /*新增本階料號下的BOM LIST 狀態是否符合EC規則-End*/
        }
      }else{
        console.log("function:"+"chkInsGridData" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
        return false;
      } 
      //Start Add Reference 及 Delete Reference判斷
      if (strADD == "" && strDEL == ""){	
        if (strType != "Disable"){
          errorMsg += tmpStr + "的[Add Reference]、[Delete Reference]不可都是空白!\n";
          alert(errorMsg);
          return false;
        }
      }else{
        var aryAdd = strADD.split(",");
        var aryAdd2;
        var aryDel = strDEL.split(",");
        var aryDel2;
        ChkPhaseOut_str = "";	//是否為EOL料號
        if (strType == "替代料"){
          var aryResult;
          if (strADD != ""){
            //check替代料在Oracle料號主檔是否存在
            var aryRtn = IsNotOracleItem(strADD, strASSM_NO, strCOMP_NO);
            if (aryRtn[0] == true){
              errorMsg = tmpStr + "的Oracle[替代料]" + aryRtn[1] + "在Oracle不存在.\n";
              alert(errorMsg);
              return false;
            }else{
              //已存在主BOM下的料，不可申請為替代料
              if (IsExistBom(strADD, strASSM_NO, ecoRemark) == true){ //CheckFieldData.asp:454
                errorMsg = tmpStr + "的Oracle[替代料]" + strADD + "已存在BOM表中，不允許申請為替代料!\n";
                alert(errorMsg);
                return false;
              }else{
                //料號存在 check 不可重覆申請替代料
                aryResult = IsExistStituteItem(strADD, strID);
                if (aryResult[0] == true){
                  errorMsg = tmpStr + "的Oracle[替代料]" + aryResult[1] + "不可重覆申請\n";
                  alert(errorMsg);
                  return false;
                }
              }
            }
              
              
            for (i = 0; i < aryAdd.length - 1; i++){	//判斷料號是否為PhaseOut料件/Phoebe.2010/05/04.End
              aryAdd2 = aryAdd[i].split("-");
              ChkPhaseOut_str = ChkPhaseOut(aryAdd2[0]);	//是否為EOL料號
              strADD_INVENTORY_ITEM_STATUS_CODE = FindItemStatus(aryAdd2[0]);	//替代料的狀態
              
              //判斷該筆替代料欄位的資料是否有重覆			
              for (j = 1; j < aryAdd.length; j++){
                var aryAdd3 = aryAdd[j].split("-");
                if (aryAdd2[0].trim() != "" && aryAdd3[0].trim() != "" && i != j){
                  if (aryAdd2[0].trim() == aryAdd3[0].trim()){
                    errorMsg = tmpStr + "此新增替代料:" + strADD + "中" + aryAdd2[0].trim() + "有重覆";
                    break;
                  }
                }
                
                //20210709 Milla 
                //Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
                var bool_IsDupItem_In_ComponentAndAddreference = false;
                bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strType, strASSM_NO, aryAdd2[0].trim());
                if (bool_IsDupItem_In_ComponentAndAddreference){
                  errorMsg = tmpStr + "此新增替代料:" + strADD + "中" + aryAdd2[0].trim() + "有重覆在非替代料的主料中";
                  break;
                }
              }
                
              if (ChkPhaseOut_str != ""){
                if (left(ChkPhaseOut_str, 1) == "L"){
                  errorMsg = tmpStr + "此替代料:" + aryAdd2[0] + " " + "為管制用料,不可使用\n";
                  break;
                }
                if (left(ChkPhaseOut_str, 1) == "O"){
                  errorMsg = tmpStr + "此替代料:" + aryAdd2[0] + " " + "已設Hold，請先至「商品物料編號表」將Phase out Date資料刪除，才可申請EC\n";
                  break;
                }
                if (left(ChkPhaseOut_str, 2) == "D;"){
                  errorMsg = tmpStr + "此替代料:" + aryAdd2[0] + " " + "已EOL,請改用其他替代料\n";
                  break;
                }
              }
                
              // var getchkIsMbom_ItemNoStatus_Add = chkIsMbom_ItemNoStatus(gsenao111d004.value, aryAdd2[0]);			
              var getchkIsMbom_ItemNoStatus_Add = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, aryAdd2[0], strADD_INVENTORY_ITEM_STATUS_CODE);
              if (!getchkIsMbom_ItemNoStatus_Add){
                if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
                  errorMsg = tmpStr + "承認狀態為 : Active\n， 新增替代料，全部都要是Active!";
                  break;
                }
                if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
                  errorMsg = tmpStr + "承認狀態為 : PVT\n， 新增替代料，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!";
                  break;
                }
              }
                
              /*判斷替代料在BOM LIST下的料號--Start*/
              var AddItemID = ""; //替代料號ID
              var ADD_BOM_List_Err = "";
              var getchkIsMbom_ItemNoStatus_AddBOMList = false;	//替代料在BOM LIST下的料號是否符合狀態規則
              tParams = [aryAdd2[0], orgno];
              
              dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_36", {
                strCOMP_NO:tParams[0],
                orgno:tParams[1]
              });//取替代料號的ITEM ID
              if(dataArray[0].result == undefined){
                if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray.length > 0){
                  AddItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
                }
              }else{
                console.log("function:"+"chkInsGridData" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
                return false;
              }
              
              tParams = [orgno, AddItemID];
              dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_44", {
                orgno:tParams[0],
                ItemID:tParams[1]
              })//取BOM List ITEM
              if(dataArray[0].result == undefined){
                if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
                  for (j = 0; j < dataArray.length; j++){
                    strADD_BOM_INVENTORY_ITEM_STATUS_CODE = fixNull(dataArray[j].INVENTORY_ITEM_STATUS_CODE);	//替代料號BOM LIST每個ITEM的狀態
                    getchkIsMbom_ItemNoStatus_AddBOMList = false;
                    ChkPhaseOut_str = "";
                    ChkPhaseOut_str = ChkPhaseOut_1(fixNull(dataArray[j].ITEM_NO), fixNull(dataArray[j].EOL_DATA), fixNull(dataArray[j].GROUPING_ID));
                    
                    if (ChkPhaseOut_str != ""){
                      if (left(ChkPhaseOut_str,1) == "L"){
                        ADD_BOM_List_Err = ADD_BOM_List_Err + "替代料(" + aryAdd2[0] + ")的BOM LIST" + "料號(" + fixNull(dataArray[j].ITEM_NO) + ")為管制用料,不可使用\n";										
                        
                      }
                      if (left(ChkPhaseOut_str,2) == "D;"){
                        ADD_BOM_List_Err = ADD_BOM_List_Err + "替代料(" + aryAdd2[0] + ")的BOM LIST" + "料號(" + fixNull(dataArray[j].ITEM_NO) + ")已EOL,請改用替代料\n";
                      }
                    }
                      
                    // getchkIsMbom_ItemNoStatus_AddBOMList = chkIsMbom_ItemNoStatus(gsenao111d004.value, aryAdd2[0]);
                    getchkIsMbom_ItemNoStatus_AddBOMList = chkIsMbom_ItemNoStatus_1(strASSM_NO, strASSM_NO_INVENTORY_ITEM_STATUS_CODE, fixNull(dataArray[j].ITEM_NO), strADD_BOM_INVENTORY_ITEM_STATUS_CODE);
                    if (!getchkIsMbom_ItemNoStatus_AddBOMList){
                      if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "Active"){
                        ADD_BOM_List_Err = ADD_BOM_List_Err + tmpStr + "承認狀態為 : Active\n，替代料(" + aryAdd2[0] + ")的BOM LIST，全部都要是Active!\n";
                      }
                      if (strASSM_NO_INVENTORY_ITEM_STATUS_CODE == "PVT"){
                        ADD_BOM_List_Err = ADD_BOM_List_Err + tmpStr + "承認狀態為 : PVT\n，替代料(" + aryAdd2[0] + ")的BOM LIST，除ID,ME,5730料號可為S4/A/C，其餘皆需 C/A/PVT!\n";
                      }
                    }
                  }
                }
              }else{
                console.log("function:"+"chkInsGridData" + " API:" + "BPM_ERP_SENAO111_44 "+ dataArray[0].result);
                return false;
              }  
              if (ADD_BOM_List_Err != ""){
                errorMsg = errorMsg + ADD_BOM_List_Err;
                break;
              }
                
              /*判斷替代料在BOM LIST下的料號--End*/
            }
            if (errorMsg != ""){
              alert(errorMsg);
              return false;
            }
          }
            
          //check刪除的替代料在oracle中是否存在
          if (strDEL != ""){
            aryResult = IsExistStituteItem(strDEL, strID);
            if (aryResult[0] == false){
              errorMsg = tmpStr + "的Oracle[替代料]" + aryResult[1] + ",在Oracle不存在\n";
            }
              
            //判斷該筆要刪除的替代料欄位的資料是否有重覆
            for (i = 0; i < aryDel.length - 1; i++){
              aryDel2 = aryDel[i].split("-");						
              for (j = 1; j < aryDel.length; j++){
                var aryDel3 = aryDel[j].split("-");								
                if (aryDel2[0].trim() != "" && aryDel3[0].trim() != "" && i != j){
                  if (aryDel2[0].trim() == aryDel3[0].trim()){
                    errorMsg = tmpStr + "此刪除替代料:" + strDEL + "中" + aryDel2[0].trim() + "有重覆";
                    break;
                  }
                }
              }
            }
          }
            
          //若為替代料，替代數不可超過9個/Phoebe.2010/05/31
          var EfCntSubStitute = GetChangeQty(strADD) - GetChangeQty(strDEL);
          var OracleCntSubStitute = GetOracleCntSubStitute(strID);
          if (OracleCntSubStitute + EfCntSubStitute > 9){
            errorMsg += tmpStr + "的Oracle[替代料]已存在(" + OracleCntSubStitute + ")個!\n";
            errorMsg += "　　EasyFlow申請新增的[替代料]不可超過(" + 9-OracleCntSubStitute + ")個\n";
            alert(errorMsg);
            return false;
          }
        }else if (strType == "非替代料"){
          for (i = 0; i < aryAdd.length; i++){
            for (j = 0; j < aryAdd.length; j++){
              if (aryAdd[i].trim() != "" && aryAdd[j].trim() != "" && i != j){
                if (aryAdd[i].trim() == aryAdd[j].trim()){
                  alert("新增插件位置重複: " + aryAdd[i]);
                  return false;
                }
              }							
            }
          }
            
          for (i = 0; i < aryDel.length; i++){
            for (j = 0; j < aryDel.length; j++){
              if (aryDel[i].trim() != "" && aryDel[j].trim() != "" && i != j){
                if (aryDel[i].trim() == aryDel[j].trim()){
                  alert("刪除插件位置重複: " + aryDel[i]);
                  return false;
                }
              }							
            }
          }
                      
          //新增插件位置管控不得超過15字元/Phoebe.20110816, CheckFieldData.asp:501
          strOCC = IsOverChrCnt(strADD, 15); 
          if (strOCC != ""){
            errorMsg += tmpStr + "的[Add Reference]限制輸入15Bytes資料(中文字3Bytes;其餘皆為1Bytes)!\n";
          }

          //(1)上階料號屬51、56、成品階層 且處理(senao111d017)非替代料(若為替代料則Add Reference 直接填寫替代料料號)->Add Reference及 Delete Reference 此欄位填寫數量，數量前需填*字，例:*1,			
          if ("51,56".indexOf(left(strASSM_NO, 2)) >= 0 || chkItemTemplate("PH", strASSM_NO) || chkItemTemplate("FG", strASSM_NO)){
            if (!isNaN(strADD.replace('*', '')) && strADD != ""){
              if (strADD.indexOf("*") < 0){  //Add Reference
                errorMsg += tmpStr + " 上階料號" + strASSM_NO + "屬51、56、成品階層，且處理非替代料，Add Reference填寫數量，數量前需填*字.\n";
              }
              if (!isNaN(strDEL.replace('*', '')) && strDEL != ""){
                if (strDEL.indexOf("*") < 0){  //Delete Reference
                  errorMsg += tmpStr + " 上階料號屬51、56、成品階層，且處理非替代料，Delete Reference填寫數量，數量前需填*字.\n";
                }
              }
            }
          }
          
          //20210709 Milla 
          //Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
          var bool_IsDupItem_In_ComponentAndAddreference = false;
          bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strType, strASSM_NO, strCOMP_NO);
          if (bool_IsDupItem_In_ComponentAndAddreference){
            errorMsg = tmpStr + "此新增主料:" + strCOMP_NO + "（處理：非替代料）" + "有重覆在替代料的Add Reference中";
          }
          
          if (errorMsg != ""){
            alert(errorMsg);
            return false;
          }
        }
                
        if (ecoRemark == "ECO-2"){ //CheckFieldData.asp:525
          strDeleted = bln_COMP_Deleted(strASSM_NO, strCOMP_NO);
          if (strDeleted.length > 2){
            if (strDeleted.substr(0, 1) == "N"){
              alert(strASSM_NO + "-" + strCOMP_NO + " : 替代料變更為主料前，請申請將原主料(" + strDeleted.substr(2) + ")刪除");
              return false;
            }
            //新增替代料時,判斷是否申請新增主料/Phoebe.20131024
            if (strType == "替代料"){
              blnCOMPONENT = bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, ""); 
              if (blnCOMPONENT == false){
                alert(strASSM_NO + "-" + strCOMP_NO + " : 替代料新增之前，請申請新增主料");
                return false;
              }
            }
          }else if (strDeleted.length == 2){
            var ary = strADD.split(",");
            var arylen = ary.length;
            for (var idx = 0; idx < arylen; idx++){
              if (ary[idx].trim() != ""){
                strDeleted = bln_BOM_COMP_Deleted(strASSM_NO, ary[idx].substr(0, 12)); //CheckFieldData.asp:542
                if (strDeleted.substr(0, 1) == "N"){
                  alert(strASSM_NO + "-" + strCOMP_NO + " : 替代料變更為主料前，請申請將原主料(" + ary[idx].substr(0, 12) + ")刪除");
                  return false;
                }
              }
            }
              
            //新增替代料時,判斷是否申請新增主料/Phoebe.20131230
            if (strType == "替代料"){
              blnCOMPONENT = bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, "NEWBOM");
              if (blnCOMPONENT == false){
                alert(strASSM_NO + "-" + strCOMP_NO + " : 替代料新增之前，請申請新增主料");
                return false;
              }
            }
          }
        }				
      }//End Add Reference 及 Delete Reference判斷
      
      if (parseFloat(gsenao111d011.value) < 0){
        errorMsg += tmpStr + "的[Total Quantity After Change]變更後用量為負數無法EC，請再確認\n";
      }
        
      //比對目前簽核中的單身資料 -- 不可重覆申請
      var errorMsg1 = ChkProcessingData(strASSM_NO, strCOMP_NO);
      if (errorMsg1.trim() != ""){
          alert(errorMsg1);
          return false;
      }
      if (tGrid1Data.length >= 1){
        if (dataIndex == ""){ // add
            errorMsg += ChkDuplicateData(strASSM_NO, strCOMP_NO, strType, -1);
        }else{ // update
          errorMsg += ChkDuplicateData(strASSM_NO, strCOMP_NO, strType, dataIndex);
        }
        if (errorMsg.trim() != ""){
          alert(errorMsg);
          return false;
        }
      }
            
      //20180706 Milla 資訊服務申請單#7724 管制料號
      if ((strType == "替代料" || strType == "非替代料") && gsenao111d029.value == ""){
        errorMsg += tmpStr + "[Part Number]:" + strCOMP_NO + "必須選擇是否為管制料號!\n";
      }
		}
	}
	if (errorMsg.trim() != ""){
		alert(errorMsg);
		return false;
	}else{
		return true;
	}	
} //end of chkInsGridData()

/**
 * Grid輸入欄位初始化
 */
function initGridRow() {
}
function setGridStyle() {
  let $grid = $("#" + frmGridList[0].gid);
  
  // 取得所有欄位的 name 陣列
  let colModel = $grid.jqGrid("getGridParam", "colModel");
  
  if (userId == "100004" || userId == "administrator") {
    // 顯示的欄位索引
    let showCols = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    colModel.forEach(function(col, index) {
        $grid.jqGrid("showCol", col.name); // 先全顯示
    });
    // 設定特定欄位寬度
    $grid.jqGrid("setColWidth", colModel[7].name, 60);
  } else {
    let hideCols = [7]; // 隱藏不在清單中的欄位
    hideCols.forEach(function(index) {
        $grid.jqGrid("hideCol", colModel[index].name);
    });
  }

  // 設定欄位寬度
  colModel[0].width = 40;  // 單身流水號
  colModel[2].width = 90;  // 專案別名稱
  colModel[3].width = 90;
  colModel[4].width = 90;
  colModel[5].width = 90;
  colModel[6].width = 70;
  $grid.jqGrid("setGridParam", { colModel: colModel }).trigger("reloadGrid");
}
/**
  *判斷同階層新增不同本階料號的插件位置有重覆
  *CHKAddData
  *@param strAssNo	上階料號
  *@param strCompNo	本階料號 
  *@param strAddData Add Reference
  *@return retVal
*/
function CHKAddData(strAssNo, strCompNo, strAddData){
  var retVal = "";
  var tGrid1Data = getGridData(0); 
  var dataCount = tGrid1Data.length;
  if (dataCount > 0){
    for(var i = 0; i < dataCount; i++){
      if (tGrid1Data[i]['SENAO111D004'] == strAssNo && tGrid1Data[i]['SENAO111D006'] != strCompNo && tGrid1Data[i]['SENAO111D012'] != ""){
        if (right(tGrid1Data[i]['SENAO111D012'].trim(), 1) != ","){
          tGrid1Data[i]['SENAO111D012'] += ",";
        }
        if (right(strAddData.trim(), 1) != ","){
            strAddData += ",";
        }
        var aryData = strAddData.split(",");
        for (var m = 0; m < aryData.length - 1; m++){
          if (("," + tGrid1Data[i]['SENAO111D012']).indexOf("," + aryData[m] + ",") >= 0){
            retVal = retVal + strCompNo + "與" + tGrid1Data[i]['SENAO111D006'] + "的Add Reference(" + aryData[m] + ")有重覆,請重新確認填寫\n";                        
          }
        }
      }
    }
  }
  return retVal;
}	//end of CHKAddData  判斷同階層新增不同本階料號的插件位置有重覆
function gridRowClick(pId) {
  if (frmGridList[0].gid == pId) {  // 取代 Grid1Obj.getId() == pId
    if (activityId == "0006") {
      setd029Status(gsenao111d029.value);
    }
    if (activityId == "0001") {
      setd029Status(gsenao111d029.value);
    } 
    if (activityId.indexOf("0150") >= 0 || activityId.indexOf("0475") >= 0) {
      $("#gsenao111d025").prop("readOnly", false);
      gsenao111d025.style.backgroundColor = "#fbf1c0";
      if (gsenao111d017.value != "替代料" && gsenao111d011.value == "0") {
        gsenao111d025.style.backgroundColor = "#fbf1c0";
        $('#gsenao111d017').prop("disabled", true);
      } else {
        $("#gsenao111d025").prop("readOnly", true);
        gsenao111d025.style.backgroundColor = "#ffffff";
      }
    }
  }
}
/**
 *匯入EXCEL時新增
 *AddMultiRows
 *@param RtnType
 *@param aryXls
*/
function AddMultiRows(RtnType, aryXls){
  if(RtnType=="U"){
    console.time('ALL');
    useExcel = true;
    //alert(aryXls.length+"\n"+aryXls[0][0]+"|"+aryXls[0][1]);
    var errstr='';
    setGridData(0, []);//每次loadExcel就清掉
    var aryXlsCount = aryXls.length;
    try{
      for (var i = 0; i < aryXlsCount; i++){
        errorMsg.value = "";
        gsenao111d004.value=fixNull(aryXls[i].VARCHAR001).trim(); //上階料號
        // if(gsenao111d004_onchange()==false){  // James
        //   showAddMultiErr(i,"");
        //   return false;
        // }
        gsenao111d004_onchange(); //20241017 Neil
        //gsenao111d005.value=fixNull(aryXls[i][1]).trim(); //上階品名, 20190724,EXCEL匯入時不從EXCEL內容帶入品名, 以避免使用者填錯
        gsenao111d006.value=fixNull(aryXls[i].VARCHAR002).trim(); //下階料號
                
        // if(gsenao111d006_onchange()==false){ // James
        //   showAddMultiErr(i,"");
        //   return false;
        // }
        gsenao111d006_onchange();//20241017 Neil

        //gsenao111d007.value=fixNull(aryXls[i][3]).trim(); //下階品名, 20190724,EXCEL匯入時不從EXCEL內容帶入品名, 以避免使用者填錯
        gsenao111d017.value=fixNull(aryXls[i].VARCHAR003).trim(); //處理
        gsenao111d019.value=""; //版本, 預設為空值
        gsenao111d017_onchange(); // James

        /* James
        if(gsenao111d017.value=="非替代料"){
          gsenao111d008.value=GetChangeQty(fixNull(aryXls[i][5]).trim());  //Add Qty
          gsenao111d009.value=GetChangeQty(fixNull(aryXls[i][6]).trim());  //Del Qty
        }else if(gsenao111d017.value=="Disable"){
          gsenao111d008.value = 0;
          gsenao111d009.value = GetChangeQty(fixNull(aryXls[i][6]).trim());  //Del Qty
        }else{
          gsenao111d008.value = 0;
          gsenao111d009.value = 0;
        }        
        gsenao111d010.value = GetCOMPQty(gsenao111d004.value, gsenao111d006.value);
        gsenao111d011.value = parseFloat(gsenao111d010.value) + parseFloat(gsenao111d008.value) - parseFloat(gsenao111d009.value); //變更後
        */
        gsenao111d012.value=aryXls[i].VARCHAR004; //Add Ref

        // if(gsenao111d012_onblur()==false){ // James
        //   showAddMultiErr(i,"");
        //   return false;
        // }    
        gsenao111d012_onblur(); //20241017 Neil

        gsenao111d012_onchange();//20241017 Neil

        // if(gsenao111d012_onchange()==false){ // James,以此取代下列被註解程式
        //   showAddMultiErr(i,"");
        //   return false;
        // }

        /* James
        if(gsenao111d017.value=="替代料"){
          if(right(gsenao111d012.value.trim(),1)!=","){
            gsenao111d012.value = gsenao111d012.value + ",";
          }
          gsenao111d012.value = GetSubsDesc(gsenao111d004.value,gsenao111d006.value,gsenao111d012.value);
        }else{
          gsenao111d012.value = gsenao111d012.value.replace(/\n/g,"");
        }
        */
        gsenao111d013.value = fixNull(aryXls[i].VARCHAR005).trim().replace(/\n/g,""); //Del Ref
        gsenao111d013_onchange();//20241017 Neil
        // if(gsenao111d013_onchange()==false){ // James
        // showAddMultiErr(i,"");                    
        // return false;
        // }

        gsenao111d014.value = GetOP_CODE(gsenao111d004.value, gsenao111d006.value); //OP CODE	根據上階、本階料號 取得 op_value
        gsenao111d015.value = fixNull(aryXls[i].VARCHAR006).trim().replace(/\n/g,""); //comment
        if (gsenao111d017.value == "Disable"){
          var tParams = [gsenao111d004.value, gsenao111d006.value, orgno];
          var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {
            gsenao111d004:tParams[0],
            gsenao111d006:tParams[1],
            orgno:tParams[2]
          })
          if(dataArray[0].result == undefined){
            if ((dataArray[0].COUNT >0 ||dataArray[0].COUNT == undefined ) ){
              gsenao111d015.value = fixNull(dataArray[0].COMPONENT_REMARKS).replace(/\"/g,"'");  //COMMENT
            }   
          }
        }else{
          console.log("function:"+"AddMultiRows" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
          return false;
        }
        gsenao111d018.value = GetCOMP_SEQ_ID(gsenao111d004.value, gsenao111d006.value)[0]; //id	//依上階&本階料號取得元件seqence id
        gsenao111d020.value = GetBILLID(gsenao111d004.value); //BILLid
        if( (senao111019.value=="0" || senao111019.value=="6" || senao111019.value=="2") && gsenao111d011.value=="0"){
          gsenao111d021.value = onhand_QTY(gsenao111d006.value);
          gsenao111d022.value = REQ_QTY(gsenao111d006.value);
          gsenao111d023.value = PO_QTY(gsenao111d006.value);
          gsenao111d024.value = RECEIVING_QTY(gsenao111d006.value);
          gsenao111d025.value = "";
          gsenao111d026.value = BOM_COMP_QUANTITIES(gsenao111d006.value, gsenao111d004.value);
        }else{
          gsenao111d021.value = "";
          gsenao111d022.value = "";
          gsenao111d023.value = "";
          gsenao111d024.value = "";
          gsenao111d025.value = "";
          gsenao111d026.value = "";
        }
        gsenao111d027.value = ""; //起始導入製令單號 24
        //gsenao111d028.value = ""; //ECO_Number      25
        if(gsenao111d029.disabled==false){
        gsenao111d029.value = fixNull(aryXls[i].VARCHAR007).trim().replace(/\n/g,"");  //是否為管制料號,2019/7/2 DCC需求加入, James
        }
        //2018/08/13 DCC表示上傳時暫不設定此欄位, Milla
        /*
        var Add_Quantity = parseFloat(fixEmptyTo0(gsenao111d008.value)).toFixed(6);
        var Total_Quantity_After_Change = parseFloat(fixEmptyTo0(gsenao111d011.value)).toFixed(6);
        if(gsenao111d017.value == "非替代料" || gsenao111d017.value == "替代料"){            
          GetCCL = SetCCL(gsenao111d017.value, gsenao111d004.value.trim(), gsenao111d006.value.trim(), Add_Quantity, Total_Quantity_After_Change, "");
          gsenao111d029.value = GetCCL[0];            
        }
        */
        /*
        var strErrRef = IsExistRef(true);
        if(strErrRef==""){
          Grid1Obj.addRow();  //將Binding欄位的資料填入Grid中
          Grid1Obj.clearBinding();  //新增後清除Binding欄位資料  		
          
        }else{
          alert(strErrRef + "重複插件位置錯誤");
        }
        */
        if(errorMsg.value !==""){
          excelIsOk = false;
        }  
        gridaddRow(0);
        clearBinding(0); 
        document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
      }// end of for

      if(!excelIsOk){
        btnExportXls_onclick(); //20241017 Neil 匯出Wxcel 
        setGridData(0, new Array());//每次loadExcel就清掉
        excelIsOk = true;
      }
    }catch(Exception){
      alert("匯入第"+(i+1)+"筆時發生錯誤, 錯誤原因: " + Exception.message);
    }
    useExcel = false;
  }// end of if(RtnType=="U")
  else if(RtnType == "D"){  // DCC
    var tGrid1Data = getGridData(0); 
    var tGrid1DataCount = tGrid1Data.length;
    for(var n=0;n<tGrid1DataCount;n++){
      tGrid1Data[n]['SENAO111D016'] = ""; //將異常設為default-->""
      tGrid1Data[n]['SENAO111D019'] = GetVerion(tGrid1Data[n]['SENAO111D004']); //取得Assembly Part的version
    }
    setGridData(0, tGrid1Data);
  }  else if(RtnType=="C"){ // Copy
    var tGrid1Data = getGridData(0); 
    var tGrid1DataCount = tGrid1Data.length;
    var aryNewData = new Array();
    for(var n=0;n<tGrid1DataCount;n++){
      aryNewData[n] = new Array(27);
      aryNewData[n][0] = n+1;
      aryNewData[n][1] = "";  //異常
      aryNewData[n][2] = tGrid1Data[n]['SENAO111D004'];  //上階料號
      aryNewData[n][3] = tGrid1Data[n]['SENAO111D005'];  //上階品名
      aryNewData[n][4] = tGrid1Data[n]['SENAO111D006'];  //下階料號
      aryNewData[n][5] = tGrid1Data[n]['SENAO111D007'];  //下階品名
      aryNewData[n][6] = tGrid1Data[n]['SENAO111D017'];  //處理
      aryNewData[n][7] = tGrid1Data[n]['SENAO111D019'];  //版本
      aryNewData[n][8] = tGrid1Data[n]['SENAO111D008'];  //Add Qty
      aryNewData[n][9] = tGrid1Data[n]['SENAO111D009'];  //Del Qty
      aryNewData[n][10] = GetCOMPQty(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006']); //變更前數量
      aryNewData[n][11] = parseFloat(tGrid1Data[n]['SENAO111D010']) + (parseFloat(tGrid1Data[n]['SENAO111D008'])-parseFloat(tGrid1Data[n]['SENAO111D009']));
      aryNewData[n][12] = tGrid1Data[n]['SENAO111D012'];  //Add Ref
      aryNewData[n][13] = tGrid1Data[n]['SENAO111D013'];  //Del Ref
      aryNewData[n][14] = GetOP_CODE(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006']);	//根據上階、本階料號 取得 op_value
      if(aryNewData[n][14]==""){
        var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_49", {
          gsenao111d004:tGrid1Data[n]['SENAO111D004'],
          orgno:orgno
        })
        if(dataArray[0].result == undefined){
          if(dataArray.length>1 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
            aryNewData[n][14] = fixNull(dataArray[0].OP_CODE);
          }else{
            aryNewData[n][14] = GetOP_CODE(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006']);	//根據上階、本階料號 取得 op_value
          }
        }else{
          console.log("function:"+"AddMultiRows" + " API:" + "BPM_ERP_SENAO111_49 "+ dataArray[0].result);
          return false;
        }
      }
      aryNewData[n][15] = tGrid1Data[n]['SENAO111D015']; //comment
      aryNewData[n][16] = GetCOMP_SEQ_ID(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006'])[0]; // id	//依上階&本階料號取得元件seqence id
      aryNewData[n][17] = GetBILLID(tGrid1Data[n]['SENAO111D004']); //BILLid
      if( (senao111019.value=="0" || senao111019.value=="6" || senao111019.value=="2") && parseFloat(aryNewData[n][11]).toFixed()==0){
        aryNewData[n][18] = onhand_QTY(aryNewData[n][4]);
        aryNewData[n][19] = REQ_QTY(aryNewData[n][4]);
        aryNewData[n][20] = PO_QTY(aryNewData[n][4]);
        aryNewData[n][21] = RECEIVING_QTY(aryNewData[n][2]);
        aryNewData[n][23] = BOM_COMP_QUANTITIES(tGrid1Data[n]['SENAO111D006'], tGrid1Data[n]['SENAO111D004']);
      }else{
        aryNewData[n][18] = "";
        aryNewData[n][19] = "";
        aryNewData[n][20] = "";
        aryNewData[n][21] = "";
        aryNewData[n][23] = "";
      }                        
      aryNewData[n][22] = ""; //廠商先行備料            
      aryNewData[n][24] = ""; //起始導入製令單號
      aryNewData[n][25] = ""; //ECO Number
      aryNewData[n][26] = tGrid1Data[n]['SENAO111D029'];
    }
    setGridData(0, aryNewData);
  }// end of if(RtnType=="C")
  else if(RtnType == "V"){  // Version
    var tGrid1Data = getGridData(0); 
    var tGrid1DataCount = tGrid1Data.length;
    for(var n=0;n<tGrid1DataCount;n++){
      tGrid1Data[n]['SENAO111D019'] = GetVerion(tGrid1Data[n]['SENAO111D004']);
    }
    setGridData(0, tGrid1Data);
  } else if(RtnType == "I"){ //UPDATE Bill_ID and Component_ID/Phoebe.20131029
    var tGrid1Data = getGridData(0); 
    var tGrid1DataCount = tGrid1Data.length;
    for(var n=0;n<tGrid1DataCount;n++){
      if(tGrid1Data[n]['SENAO111D028']!=""){
        tGrid1Data[n]['SENAO111D018'] = GetCOMP_SEQ_ID(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006'])[0];	//依上階&本階料號取得元件seqence id
        tGrid1Data[b]['SENAO111D020'] = GetBILLID(tGrid1Data[n]['SENAO111D004']);
      }
    }
    setGridData(0, tGrid1Data);
  } else if(RtnType == "GetOpcode"){ //重抓OPCode
    var tGrid1Data = getGridData(0);
    var tGrid1DataCount = tGrid1Data.length;
    for(var n=0;n<tGrid1DataCount;n++){            
        tGrid1Data[n]['SENAO111D014'] = GetOP_CODE(tGrid1Data[n]['SENAO111D004'], tGrid1Data[n]['SENAO111D006']);	//根據上階、本階料號 取得 op_value
    }
    setGridData(0, tGrid1Data);
  }
  document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中      
  useExcel = false;  
}
/**
 *formopen 時設定Grid 初始化
 *DefineGrid
*/
function DefineGrid(){
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  if (activityId == "0070-0010"){ //UserFunc.asp:1091,1143
    if (tGrid1DataCount > 0){
      AddMultiRows("GetOpcode", "");
    }
    if (tGrid1DataCount > 0){
      var strItemErr = ChkItemNO_Length();
      if (strItemErr != ""){
        alert(strItemErr);
      }
    }
  }else if(activityId == "0500-0010"){
    if (tGrid1DataCount > 0){
      AddMultiRows("GetOpcode",""); // update OP CODE
      AddMultiRows("V", "");  // update version
      $('#btnGrid1Edit').prop("disabled", false);
      $("#gsenao111d014").prop("readOnly", false);
    }
  }else if (activityId.indexOf("0502-0010") == 0){
    if (tGrid1Data > 0){
      //update第2次拋轉資料BILLid and id	/Phoebe.20131029
      AddMultiRows("I", "");
    }
  }else if (activityId.indexOf("0510-0010") == 0){ //確認在Oracle中 是否有Detail的資料產生err Msg, UserFunc.asp:1108
    if (tGrid1DataCount > 0){
      AddMultiRows("D", "");  // 利用重新reload資料將 異常欄位清空
    }
    var strEcrNo;
    if (senao111005.value.indexOf("-1") >= 0){
      strEcrNo = senao111005.value;
    }else{
      //strEcrNo = right(senao111002.innerHTML,9);
      //strEcrNo = right(serialNumber, 6);//20251127 Dillan marked
      //20251126 Dillan add(s)
      if (typeof processId !== "undefined" && processId == "CWO111"){
				var last5 = right(SERIALNUMBER, 5);
				var num = parseInt(last5, 10);
				var newNum = num + 49;
				// 依原格式補回 5 位（前置補零）
				//var padded = String(newNum).padStart(5, "0");//20260226 Dillan add
        var padded = ("00000" + String(newNum)).slice(-5);//20260226 Dillan add
				strEcrNo = "S" + padded;	
      }else{
          strEcrNo = right(SERIALNUMBER, 6);
      }
      //20251126 Dillan add(e)	
    }
    var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_76", {
      FormNo:FormNo
    })
    if(dataArray[0].result == undefined){
      if (dataArray.length > 0){
        senao111077.value = fixNull(dataArray[0].TRIGGER106PSN);
      }
    }else{
      console.log("function:"+"DefineGrid" + " API:" + "BPM_SENAO111_76 "+ dataArray[0].result);
      return false;
    }
    ChkError(strEcrNo, IsNeedEC());
    //}else if (activityId.indexOf("0480") == 0 || activityId.indexOf("0160") == 0){ //20260128 Dillan marked
	}else if (activityId.indexOf("0480") == 0 || activityId.indexOf("0160") >= 0){ //20260128 Dillan add 增加VN0160需要修改條件
    //PMC填寫[起始導入製令單號]
    //if (workitemownerid == senao111042.value){
    $('#btnGrid1Edit').prop("disabled", false);
    $("#gsenao111d027").prop("readOnly", false);
    gsenao111d027.style.backgroundColor = "#fbf1c0";
    //}
    //}else if (activityId.indexOf("0160") == 0 || activityId.indexOf("0200") == 0 || activityId.indexOf("0480-0060") == 0){ //20260128 Dillan marked
	}else if (activityId.indexOf("0160") >= 0 || activityId.indexOf("0200") == 0 || activityId.indexOf("0480-0060") == 0){ //20260128 Dillan add 增加關卡VN0160需要修改條件
    //生管暫不填[廠商先行備料數量]/Phoebe.20110425
    //btnGrid1Edit.disabled = false;
    //gsenao111d025.readOnly = false;
    //}else if (activityId.indexOf("0150") == 0 || activityId.indexOf("0475") == 0){//20260128 Dillan marked
	}else if (activityId.indexOf("0150") >= 0 || activityId.indexOf("0475") == 0){//20260128 Dillan add 多了VN0150原本判斷條件須修正
    //採購填寫[廠商先行備料數量]
    $('#btnGrid1Edit').prop("disabled", false);
    $("#gsenao111d025").prop("readOnly", false);
	}
} // end of DefineGrid()
/**
 * Check item no length, valid is 12
 */
function ChkItemNO_Length(){
  var retVal = "";
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){
    var strASSM_NO = tGrid1Data[i]['SENAO111D004'];
    var strCOMP_NO = tGrid1Data[i]['SENAO111D006'];
    if(strASSM_NO.length != 12){
      retVal = "[表單附件]-第" + tGrid1Data[i]['SENAO111D003'] + "筆資料異常，上階料號(" + strASSM_NO + ")字元長度非12碼";
      break;
    }
    if(strCOMP_NO.length != 12){
      retVal = "[表單附件]-第" + tGrid1Data[i]['SENAO111D003'] + "筆資料異常，本階料號(" + strCOMP_NO + ")字元長度非12碼";
      break;
    }
  }
  return retVal;
}
/**
  *判斷替代料是否被刪除
  *bln_COMPONENT_DELETED
  *@param strASSM_NO 上階料號
  *@param strCOMP_NO 替代料
  *@return retVal true/false
*/
function bln_COMPONENT_DELETED(strASSM_NO, strCOMP_NO){
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){
    if (tGrid1Data[i]['SENAO111D004'] == strASSM_NO && tGrid1Data[i]['SENAO111D006'] == strCOMP_NO && tGrid1Data[i]['SENAO111D017'] == "非替代料" && tGrid1Data[i]['SENAO111D011'] == "0"){
      retVal = true;
      break;
    }else if (tGrid1Data[i]['SENAO111D004'] == strASSM_NO && tGrid1Data[i]['SENAO111D017'] == "替代料" && tGrid1Data[i]['SENAO111D013'].indexOf(strCOMP_NO) >= 0){	//替代料的料號在Delete Reference
      retVal = true;            
      break;
    }else if (tGrid1Data[i]['SENAO111D004'] == strASSM_NO && tGrid1Data[i]['SENAO111D006'] == strCOMP_NO && tGrid1Data[i]['SENAO111D017'] == "Disable"){	//替代料的料號在本階料號中被Disable
      retVal = true;            
      break;
    }
  }
  return retVal;
}	//end of bln_COMPONENT_DELETED 判斷替代料是否被刪除
/**
  *判斷Grid中是否有同一階層料號插件位置已刪除，若已刪除則可再做新增
  *FindGridAdd  
  *@param strAssNo	上階料號
  *@param strErrAdd	插件位置 
  *@return   strErrAdd
*/
function FindGridAdd(strAssNo, strErrAdd){
  var tGrid1Data = getGridData(0); 
  if (tGrid1Data.length > 0){ //檢查Grid內的刪除插件
    var aryErrAdd = strErrAdd.split(",");
    var dataCount = tGrid1Data.length;
    for (var i = 0; i < dataCount; i++){
      if (tGrid1Data[i]['SENAO111D004'] == strAssNo){
        if (tGrid1Data[i]['SENAO111D013'].trim() != ""){  //刪除插件位置                    
          var aryGrid13 = tGrid1Data[i]['SENAO111D013'].split(",");
          for (var m = 0; m < aryGrid13.length; m++){                                                
            for (var n = 0; n < aryErrAdd.length; n++){
              if (aryGrid13[n].trim() != ""){
                if (aryErrAdd[n].trim() == aryGrid13[m].trim()){
                  aryErrAdd.splice(n, 1);
                }
              }
            }
          }
        }
      }
    }
    strErrAdd = aryErrAdd.join();
  }
  var aryErrAdd = strErrAdd.split(",");
  if (gsenao111d004.value == strAssNo){ //檢查編輯區的刪除插件
    if (gsenao111d013.value.trim() != ""){
      var aryd013 = gsenao111d013.value.split(",");
      for (var m = 0; m < aryd013.length; m++){                
        for (var n = 0; n < aryErrAdd.length; n++){
          if (aryd013[m].trim() != ""){
            if (aryErrAdd[n].trim() == aryd013[m].trim()){
              aryErrAdd.splice(n, 1);
            }
          }
        }
      }
    }
    strErrAdd = aryErrAdd.join();
  }
  return strErrAdd;
}	//end of FindGridAdd  判斷Grid中是否有同一階層料號插件位置已刪除，若已刪除則可再做新增
/**
 *插件位置是否已存在
 *IsExistRef
 *@param strFlag
*/
function IsExistRef(strFlag){
  var retVal = "";
  var tGrid1Data = getGridData(0);
  var tGrid1DataCount = tGrid1Data.length;
  for (var k = 0; k < tGrid1DataCount; k++){
    var strASSM_NO = tGrid1Data[k]['SENAO111D004'];
    var strCOMP_NO = tGrid1Data[k]['SENAO111D006'];
    var strAddRefr = tGrid1Data[k]['SENAO111D012'];
    var strDelRefr = tGrid1Data[k]['SENAO111D013'];
    var strProcess = tGrid1Data[k]['SENAO111D017'];
    var strSeqID = tGrid1Data[k]['SENAO111D018'];
    var strBILLid =  tGrid1Data[k]['SENAO111D020'];
    //新增插件位置重複判斷
    if (strAddRefr != "" && left(strAddRefr, 1) != "*" && strProcess == "非替代料"){
      var strAdd = strAddRefr;            
      var arystrAdd = strAdd.split(",").map(s => s.trim()).filter(s => s != "").join(",");
      var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_23", {
        gsenao111d020:strBILLid,
        orgno:orgno,
        arystrAdd:arystrAdd
      })
      if(dataArray[0].result == undefined){
        strErrAdd = "";
        if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
          var dataCount = dataArray.length;
          for (var i = 0; i < dataCount; i++){
            strErrAdd = strErrAdd + fixNull(dataArray[i].COMPONENT_REFERENCE_DESIGNATOR) + ",";
          }
        }
        strErrAdd = FindGridAdd(strASSM_NO, strErrAdd);	//判斷Grid中是否有同一階層料號插件位置已刪除，若已刪除則可再做新增
        if (strErrAdd != ""){
          retVal = "新增插件位置錯誤 !\n" + "同一階層料號[ " + strASSM_NO + "-" + strCOMP_NO + " ]中有重覆的插件位置 [ " + left(strErrAdd, strErrAdd.length - 1) + " ].";
          break;            
        }
      }else{
        console.log("function:"+"IsExistRef" + " API:" + "BPM_ERP_SENAO111_23 "+ dataArray[0].result)
        break;
      }
    }
    if (strDelRefr != "" && left(strDelRefr, 1) != "*" && strProcess == "非替代料"){
      if (right(strDelRefr.trim(), 1) != ","){
        strDelRefr = strDelRefr + ",";
      }
      /*
      var strDel = strDelRefr.replace(/,/g,"','");
      if(right(strDel,3)=="','"){
          strDel = left(strDel, strDel.length-3);                
      }
      if(right(strDel,2)==",'"){
          strDel = left(strDel, strDel.length-2);                
      }
      */
      var tmpAry =gsenao111d013.value;
      arystrAdd = tmpAry.split(",").map(s => s.trim()).filter(s => s != "").join(",");
      var dataArray1 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_24", {
        gsenao111d018:strSeqID,
        arystrAdd:arystrAdd
      });
      if(dataArray1[0].result == undefined){
        var aryDelValue = new Array();
        if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ){
          var dataCount1 = dataArray1.length;   
          for (var m = 0; m < dataCount1; m++){
            aryDelValue.push(fixNull(dataArray1[m].CRD));
          }
        }
        var aryEFDel = strDelRefr.split(",");
        var strErrDel = "";
        for (var n = 0; n < aryEFDel.length - 1; n++){
          if (aryDelValue.length > 1){
            for (var intN = 0; intN < aryDelValue.length; intN++){
              if (aryDelValue[intN] == aryEFDel[n]){   //CheckFieldData.asp:3643
                break;
              }else{
                if (intN == aryDelValue.length - 1){
                  strErrDel = strErrDel + aryEFDel[n] + ",";
                  break;
                }
              }
            }
          }else{
              strErrDel = strErrDel + aryEFDel[n] + ",";
          }
        }
        if(strErrDel!=""){
          retVal = "刪除插件位置錯誤 !\n" + "同一階層料號[ " + strASSM_NO + "-" + strCOMP_NO + " ]中有重覆的插件位置 [ " + left(strErrDel, strErrDel.length - 1) + " ].";
          break;            
        }
      }else{
        console.log("function:"+"IsExistRef" + " API:" + "BPM_ERP_SENAO111_24 "+ dataArray[0].result);
        return false;
      }
    }
  }// end for tGrid1Data loop
  return retVal;
}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao111003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111003','senao111003_t1','senao111004','senao111004_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111071_b1').on('click', function () { //Project Code開窗
  // sessionStorage 存入數據
  var tSPValue = new Array();
  if (typeof processId !== "undefined" && processId == "CWO111"){
      tSPValue.push("86");
  }else{
      tSPValue.push(orgno);
  }
  let tTitle = "Project Code開窗";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111071','senao111071_t1');//回傳元件參數
  let tReturnFunction = new Array("senao111071_onchange()"); //回傳函數
  let tColAPi = "BPM_ERP_SENAO111_02_1";
  let tAPI = invokeURL + 'BPM_ERP_SENAO111_02_1';
  let tParameter = { ouno: tSPValue[0], FLEX_VALUE: 'ALL', DESCRIPTION: 'ALL'};
  let tQBEField = { FLEX_VALUE: 'FLEX_VALUE', DESCRIPTION: 'DESCRIPTION'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111014_b1').on('click', function () { //Model Name開窗
  
  // sessionStorage 存入數據
  let tTitle = "機種開窗";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111014','senao111014_t1');//回傳元件參數
  let tReturnFunction = new Array("senao111014_onchange()"); //回傳函數
  if (senao111071.value != ""){
    let tColAPi = "BPM_ERP_SYS_LW_OracleItemModel_1";
    let tAPI = invokeURL + 'BPM_ERP_SYS_LW_OracleItemModel_1';
    let tParameter = { senao111071: senao111071.value, SEGMENT1: 'ALL', DESCRIPTION: 'ALL', ATTRIBUTE1: 'ALL' };
    let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION', ATTRIBUTE1: 'ATTRIBUTE1' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
	}else{
    let tColAPi = "BPM_ERP_SYS_LW_OracleItemModel_2";
    let tAPI = invokeURL + 'BPM_ERP_SYS_LW_OracleItemModel_2';
    let tParameter = { SEGMENT1: 'ALL', DESCRIPTION: 'ALL', ATTRIBUTE1: 'ALL' };
    let tQBEField = {  SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION', ATTRIBUTE1: 'ATTRIBUTE1'  }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$('#senao111019_b4').on('click', function () { //Order Type開窗
  // sessionStorage 存入數據
  let tTitle = "Order Type";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111019_t4');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_ERP_SENAO111_68";
  let tAPI = invokeURL + 'BPM_ERP_SENAO111_68';
  let tParameter = { ouno: ouno, NAME: 'ALL'};
  let tQBEField = { NAME: 'NAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao111d004_b1').on('click', function () { //Assembly Level開窗
  // sessionStorage 存入數據
  let tTitle = "Assembly Level Partt";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('gsenao111d004','gsenao111d005');//回傳元件參數
  let tReturnFunction = new Array("gsenao111d004_onchange()"); //回傳函數
  let tColAPi = "BPM_ERP_SENAO111_72";
  let tAPI = invokeURL + 'BPM_ERP_SENAO111_72';
  let tParameter = { orgno: orgno, SEGMENT1: 'ALL', DESCRIPTION: 'ALL'};
  let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao111d006_b1').on('click', function () { //Part Number開窗
  if(gsenao111d006_b1_onbeforeclick()){
    // sessionStorage 存入數據
    let tTitle = "選擇料號";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('gsenao111d006','gsenao111d007','gsenao111d010','gsenao111d014','gsenao111d015','gsenao111d018');//回傳元件參數
    let tReturnFunction = new Array("gsenao111d006_onchange()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO111_43";
    let tAPI = invokeURL + 'BPM_ERP_SENAO111_43';
    let tParameter = {gsenao111d004: gsenao111d004.value,orgno: orgno, COMP_ITEM_NO: 'ALL', COMP_ITEM_DESC: 'ALL'};
    let tQBEField = { COMP_ITEM_NO: 'COMP_ITEM_NO', COMP_ITEM_DESC: 'COMP_ITEM_DESC'}; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$('#gsenao111d012_b1').on('click', function () { //Add Reference開窗
  // sessionStorage 存入數據
  let tTitle = "Add Reference";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('gsenao111d012');//回傳元件參數
  let tReturnFunction = new Array("gsenao111d012_onchange()"); //回傳函數
  let tColAPi = "BPM_ERP_SENAO111_40";
  let tAPI = invokeURL + 'BPM_ERP_SENAO111_40';
  let tParameter = {orgno: orgno,SEGMENT1: 'ALL', DESCRIPTION: 'ALL'};
  let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao111d013_b1').on('click', function () { //Delete Reference開窗
  // sessionStorage 存入數據
  let tTitle = "Delete Reference";  //子視窗抬頭
  let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('hdn_gsenao111d013');//回傳元件參數
  let tReturnFunction = new Array("gsenao111d013_b1_cb()"); //回傳函數
  if (gsenao111d017.value == "非替代料"){
    let tColAPi = "BPM_ERP_SENAO111_66";
    let tAPI = invokeURL + 'BPM_ERP_SENAO111_66';
    let tParameter = {gsenao111d004: gsenao111d004.value,gsenao111d006: gsenao111d006.value,orgno: orgno, VALUE: 'ALL'};
    let tQBEField = { VALUE: 'VALUE'}; //查詢欄位 {參數欄位:table欄位};	
    hdn_gsenao111d013.value = "";
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else if (gsenao111d017.value == "替代料"){
    let tColAPi = "BPM_ERP_SENAO111_09";
    let tAPI = invokeURL + 'BPM_ERP_SENAO111_09';
    let tParameter = {gsenao111d018: gsenao111d018.value,orgno: orgno,VALUE: 'ALL'};
    let tQBEField = { VALUE: 'VALUE'}; //查詢欄位 {參數欄位:table欄位};	
    hdn_gsenao111d013.value = "";
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else if(gsenao111d017.value==""){
    alert("請先選擇處理!");
    return false;
  }
});
$('#senao111069_b1').on('click', function () { //EE Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111069','senao111069_t1','','','senao111070','senao111070_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_59";
  let tAPI = invokeURL + 'BPM_SENAO111_59';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111036_b1').on('click', function () { //R&D Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111036','senao111036_t1','','','senao111037','senao111037_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_60";
  let tAPI = invokeURL + 'BPM_SENAO111_60';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111039_b1').on('click', function () { //PE Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111039','senao111039_t1','','','senao111040','senao111040_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_61";
  let tAPI = invokeURL + 'BPM_SENAO111_61';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111042_b1').on('click', function () { //PMC Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111042','senao111042_t1','','','senao111043','senao111043_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_62";
  let tAPI = invokeURL + 'BPM_SENAO111_62';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111089_b1').on('click', function () { //PMC1 Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111089','senao111089_t1','','','senao111090','senao111090_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser5";
  let tAPI = invokeURL + 'BPM_getUser5';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111045_b1').on('click', function () { //QE Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111045','senao111045_t1','','','senao111046','senao111046_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_63";
  let tAPI = invokeURL + 'BPM_SENAO111_63';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111057_b1').on('click', function () { //PM Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111057','senao111057_t1','','','senao111058','senao111058_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser5";
  let tAPI = invokeURL + 'BPM_getUser5';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111066_b1').on('click', function () { //Sales Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111066','senao111066_t1','','','senao111067','senao111067_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser5";
  let tAPI = invokeURL + 'BPM_getUser5';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111048_b1').on('click', function () { //OQC Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111048','senao111048_t1','','','senao111049','senao111049_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser5";
  let tAPI = invokeURL + 'BPM_getUser5';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111060_b1').on('click', function () { //Other Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111060');//回傳元件參數
  let tReturnFunction = new Array("afterOtherSection()"); //回傳函數
  let tColAPi = "BPM_getUser5";
  let tAPI = invokeURL + 'BPM_getUser5';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao111063_b1').on('click', function () { //SQA Section開窗
  // sessionStorage 存入數據
  let tTitle = "主辦人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao111063','senao111063_t1','','','senao111064','senao111064_t1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_SENAO111_65";
  let tAPI = invokeURL + 'BPM_SENAO111_65';
  let tParameter = {ID: 'ALL',USERNAME: 'ALL', ID_1: 'ALL',ORGANIZATIONUNITNAME:'ALL'};
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME',ID_1:'ID_1',ORGANIZATIONUNITNAME:'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/**
 *以USER OID查詢USER ID, USERNAME
 *getUserIDByOID
 *@param uoid 
*/
function getUserIDByOID(uoid){
  var retVal ="";
  var dataArray = ajaxGetData(invokeURL +"BPM_getUserByUserOID", {
    UOID : uoid
	});
  if(dataArray[0].result == undefined){
    if(dataArray.length>0){
        retVal = dataArray[0].ID;        
    }
    return retVal;
  }else{
    console.log("function:"+"getUserIDByOID" + " API:" + "BPM_getUserByUserOID "+ dataArray[0].result);
    return false;
  }
}
/**
 *設定上2階主管工號, 姓名
 *makeMgrSourcerSign
*/
function makeMgrSourcerSign(){
  var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_73", {
    senao111003 : senao111003.value
	});
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){//主管簽核
      if (querySNSI003_Org("SN111_S52").indexOf(senao111004.value) > -1){
        hdn_0010MgrSign.value = fixNull(dataArray[0].U2ID);
      }
    }else{
      hdn_0010MgrSign.value = fixNull(dataArray[0].U1ID);
    }
  }else{
    console.log("function:"+"makeMgrSourcerSign" + " API:" + "BPM_SENAO111_73 "+ dataArray[0].result);
    return false;
  }

  //Chandler modify.20161110 依資訊服務申請單#6793(縮短EC流程) 將Sourcer 關卡從0010-0020 -> 0520-0150
  if (senao111014_t4.value != "" && senao111087.value == "SNWL"){ //BeforeSendNewForm.asp:654
    //0520 Sign
    hdn_0010Sign.value = "";
  }else{
    hdn_0010Sign.value = hdn_SourcerList.value;
  }
}
/**
 *取得群組人員所對應的直屬主管
 *getGrpUsrMgrStr
 *@param grp 群組ID
*/
function getGrpUsrMgrStr(grp){
  var retVal = "";
  var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_77", {
    grp : grp
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
      for (var i = 0; i < dataArray.length; i++){
        if (retVal != ""){
          retVal += ";"
        }
        retVal += dataArray[i].ID;//直屬主管ID
      }        
    }
  }else{
    console.log("function:"+"getGrpUsrMgrStr" + " API:" + "BPM_SENAO111_77 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
 *取得人員部門ID
 *getEmpDeptID
*/
function getEmpDeptID(empid){
  var retVal = "NOTFOUND";
  var dataArray = ajaxGetData(invokeURL +"BPM_getUser2", {
    ID : empid
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length >= 1){
      retVal = fixNull(dataArray[0].DEPTID);
    }
  }else{
    console.log("function:"+"getEmpDeptID" + " API:" + "BPM_getUser2 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
 *取得PMC群組人員ID
 *getPMCGroupID
*/
function getPMCGroupID(deptid){
  var retVal = "";
  var dataArray =  ajaxGetData(invokeURL +"BPM_SENAO111_78", {
    form_ou : form_ou.value,
    deptid : deptid
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length >= 1){
      retVal = fixNull(dataArray[0].SNSI003002);
    }
  }
  return retVal;
}
/*
 * 20230724 Calvin 取得料號id
*/
function getItemIdByItem(pItem){
	var item_id = "";
	var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_36", {
    strCOMP_NO:pItem,
    orgno:orgno
  });
  if(dataArray[0].result == undefined){
    if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray.length > 0){
      item_id = fixNull(dataArray[0].INVENTORY_ITEM_ID);
    }
  }else{
    console.log("function:"+"getItemIdByItem" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
    return false;
  }
	return item_id;   
}
/**
 * 20240523 Neil 
 * 1.確認 ECO Number 欄位資料是否為 “NSG”開頭
 * 2.檢查料號是否都有Mail Address
 */
function NSGCheck(){
  if(senao111014_t4.value.substr(0, 3) == "NSG"){
    NSG_check.value = "Y";
    NSGMail_check.value = "";
    var errMsg = "";
    var tGrid1Data =  getGridData(0); 
    if(tGrid1Data.length >0){
      //用Assembly Level Part Number去Oracle查出成品階
      for(var i=0; i < tGrid1Data.length; i++){
        var tParams = [tGrid1Data[i]['SENAO111D004'], orgno, orgno];  
        var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_82", {
          strCOMP_NO:tParams[0],
          orgno:tParams[1],
          orgno2:tParams[2]
        });
        if(dataArray[0].result == undefined){
          if (dataArray.length > 0){
            var item = "";
            for(var j=0; j<dataArray.length;j++){
                item = dataArray.join(",");  
            }
            // 移除最後一個逗號
            item = item.slice(0, -1);
            var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_a", {
              form_ou:form_ou.value,
              locale:locale,
              item:item
            });
            if(dataArray[0].result == undefined){
              if (dataArray.length > 0){
                NSGMail_check.value = "Y";
              }else{
                NSGMail_check.value = "";
                errMsg += "第 "+ (i+1) +"Assembly Level Part Number 查無對應的NSG Mail Address";
              }
            }else{
              console.log("function:NSGCheck API:BPM_SENAO111_a"+ dataArray[0].result);
              return false;
            }
          }
        }else{
          console.log("function:"+"NSGCheck" + " API:" + "BPM_ERP_SENAO111_82 "+ dataArray[0].result);
          return false;
        }
      }
    }
    if(errMsg!="" && (activityId == "0001" || activityId=="UserTask_2371")){ 
      alert(errMsg);
    }
  }else{
    NSG_check.value = "";
  }
}
/** 20260114 Dillan Add
 * 判斷是否存在Common Bom
 * @param {string} assem_level_part_num - 字串
 */
function check_is_com_bom(assem_level_part_num){
	var inComm = false;
	var sqlId = "BPM_ERP_Check_COM_BOM";
  var params = [];
  var data = "";
  var appendSQL = "";

  params.push(assem_level_part_num);

  data = ajaxGetData(invokeURL + sqlId, {
    p:params[0]
  });
  if(data[0].result == undefined){
    if (data.length > 0){
      inComm = true;
    }
  }else{
    console.log("function:"+"check_is_com_bom" + " API:" + "BPM_ERP_Check_COM_BOM " + data[0].result);
  }
	return inComm;
}
/**
  *加入description
  *GetSubsDesc
  *@param strAssmNo 上階料號
  *@param strComp_no 本階料號
  *@param strSubsNo Add Reference/Delete Reference
  *@return strSubsDesc
*/
function GetSubsDesc(strAssmNo, strComp_no, strSubsNo){ //CheckFieldData.asp:3174
	var tParams = [orgno, "", strAssmNo, strComp_no];
  var ary = strSubsNo.split(",");
  var strSubsDesc = "";
  if (ary.length >= 1 && strSubsNo != ""){
    var strSubsTemp;
    for (var i = 0; i < ary.length; i++){
      if (ary[i] != ""){
        strSubsTemp = left(ary[i].trim(), 12);
        tParams[1] =  strSubsTemp;
        var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_06", {
          orgno:tParams[0],
          SEGMENT1:tParams[1],
          strAssmNo:tParams[2],
          strComp_no:tParams[3]
        });
        var strDesc = "";
        if(dataArray[0].result == undefined){
          if (dataArray.length > 0){
            strDesc = "-" + fixNull(dataArray[0].DESCRIPTION);
          }else{
            strSubsDesc = strSubsNo + "-ERR";
            alert("無此替代料號: " + strSubsTemp);
            break;
          }
        }else{
          console.log("function:"+"GetSubsDesc" + " API:" + "BPM_ERP_SENAO111_06 "+ dataArray[0].result);
          return false;
        }
        strSubsDesc = strSubsDesc + (strSubsTemp + strDesc) + ","
      }
    }        
  }
  return strSubsDesc.replace(/,$/, "");
}	//end of GetSubsDesc 加入description
function GetDisableRef(Assy_Item, Comp_Item){
  var tParams = [Assy_Item, Comp_Item, orgno];
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_19", {
    Assy_Item:tParams[0],
    Comp_Item:tParams[1],
    orgno:tParams[2]
  });
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    var tmpstr = "";    
    for (var i = 0; i < dataCount; i++){
        tmpstr = tmpstr + fixNull(dataArray[i].REF) + ", ";
    }
  }else{
    console.log("function:"+"GetDisableRef" + " API:" + "BPM_ERP_SENAO111_19 "+ dataArray[0].result);
    return false;
  }
  return tmpstr;
}

/**
  *根據上階、本階料號 取得 op_value
  *GetOP_CODE
  *@param strASSY_ITEM_NO 上階料號
  *@param strCOMP_ITEM_NO 本階料號
  *@return retVal OP_CODE
*/
function GetOP_CODE(strASSY_ITEM_NO, strCOMP_ITEM_NO){
  var tParams = [strASSY_ITEM_NO, strCOMP_ITEM_NO, orgno];
  var retVal ="";
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_10", {
    strASSY_ITEM_NO:tParams[0],
    strCOMP_ITEM_NO:tParams[1],
    orgno:tParams[2]
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length == 1){
      retVal = fixNull(dataArray[0].OP_CODE);
    }else{
      var rsAssembly = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_51", {
        strASSY_ITEM_NO:strASSY_ITEM_NO,
        orgno:orgno
      });
      if(rsAssembly[0].result == undefined){
        if (rsAssembly.length > 0){
          if (rsAssembly.length > 1){ //有多筆opcode
            retVal = fixNull(rsAssembly[0].OP_CODE);             
          }
        }else{
          retVal = "1";
        }
      }else{
        console.log("function:"+"GetOP_CODE" + " API:" + "BPM_ERP_SENAO111_51 "+ rsAssembly[0].result);
        return false;
      }
    }
  }else{
    console.log("function:"+"GetOP_CODE" + " API:" + "BPM_ERP_SENAO111_10 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}	//end of GetOP_CODE 根據上階、本階料號 取得 op_value
/**
  *判斷是否為管制料號
  *IsCCL
  *@param Assembly_Level_Part_Number 上階料號
  *@param Part_Number 本階料號
  *@return retVal Y/N
  *20180706 Milla 資訊服務申請單#7724 管制料號
*/
function IsCCL(Assembly_Level_Part_Number, Part_Number){
  var retVal = "";
  var Assembly_Level_Part_ID = "";
  var Part_ID = "";
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
    strCOMP_NO:Assembly_Level_Part_Number,
    orgno:orgno
  })
  if(dataArray[0].result == undefined){
    if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray.length > 0){
      Assembly_Level_Part_ID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
    }
  }else{
    console.log("function:"+"IsCCL" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
    return false;
  }
  var dataArray1 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
    strCOMP_NO:Part_Number,
    orgno:orgno
  })
  if(dataArray1[0].result == undefined){
    if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )  && dataArray1.length > 0){
      Part_ID = fixNull(dataArray1[0].INVENTORY_ITEM_ID);
    }
  }else{
    console.log("function:"+"IsCCL" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray1[0].result);
    return false;
  }
  if (Assembly_Level_Part_ID != "" && Part_ID != ""){
    var dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_70", {
      Assembly_Level_Part_ID:Assembly_Level_Part_ID,
      Part_ID:Part_ID,
      orgno:orgno
    })
    if(dataArray2[0].result == undefined){
      if (dataArray2.length > 0){
        retVal = fixNull(dataArray2[0].CCL);
      }
    }else{
      console.log("function:"+"IsCCL" + " API:" + "BPM_ERP_SENAO111_70 "+ dataArray2[0].result);
      return false;
    }
  }
  return retVal;
}	//end of IsCCL 判斷是否為管制料號
/**
  *判斷是否有其他可用替代料
  *GetBOMSub
  *@param strAtt15 grouping_id
  *@param strPN	料號
  *@param strEOLType EOLType(H、O、L、D)
  *@return strBSValue 訊息
*/
function GetBOMSub(strAtt15, strPN, strEOLType){
	var strBSValue = "";
  var tParams = new Array();
  tParams.push(strAtt15);
  tParams.push(orgno);
  tParams.push(strPN);
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_53", {
    strAtt15:tParams[0],
    orgno:tParams[1],
    strPN:tParams[2]
  })
  if(dataCount[0].result == undefined){
    var dataCount = dataArray.length;
    var eol_data = "";
    var item_no = "";
    if (dataCount > 0){
      if (strEOLType == "D"){
        strBSValue = strBSValue + ",請改用替代料：" + "\n\n";
      }else if (strEOLType == "H"){
        strBSValue = strBSValue + ",建議改用替代料：" + "\n\n";
      }
      var k = 0;
      for (var i = 0; i < dataCount; i++){
        item_no = fixNull(dataArray[i].ITEM_NO);
        eol_data = fixNull(dataArray[i].EOL_DATA).trim(); // index=2 : eol_data
        if (eol_data == ""){ 
          k++;
          strBSValue = strBSValue + "(" + k + ") " + item_no + "\n";
        }else if (eol_data.substr(0, 1) == "H" && /[^0-9]{10}/.test(eol_data.substr(2, 10))){
          k++;
          strBSValue = strBSValue + "(" + k + ") " + item_no + "(但此料被建議不好用-因" + eol_data.substr(2, eol_data.length - 2) + ",最好能另尋新料)" + "\n";
        }
      } // end of for
    }
  }else{
    console.log("function:"+"GetBOMSub" + " API:" + "BPM_ERP_SENAO111_53 "+ dataArray[0].result);
    return false;
  }
  return strBSValue;
}	//end of GetBOMSub 判斷是否有其他可用替代料
/**
  *判斷料號是否有被phaseout(H、O、L、D)
  *ChkPhaseOut
  *@param strPN 料號
  *@return retVal 訊息
*/
function ChkPhaseOut(strPN){
	var retVal = "";
  var strRtnPhaseOut = "";
  var strEOLType = "";
  var strRtnBOMSub = "";
  strPN = ReplaceSQM(strPN);
  var tParams = new Array();
  tParams.push(orgno);
  tParams.push(strPN);
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_27", {
    orgno:tParams[0],
    strPN:tParams[1]
  })
  if(dataArray[0].result == undefined){
    if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) ) {
      var eol_data = fixNull(dataArray[0].EOL_DATA);
      if (eol_data != ""){
        if (eol_data.substr(0,1) == "H"){
          //EOL欄位(attribute1)維護 H-XXXX時，需顯示XXXX建議原因
          var re = /[0-9]{8}/; //8個字元都是數字
          if(re.test(eol_data.substr(2, 8)) == true){
            strEOLType = "O";
            strRtnPhaseOut = "O;此料號已設Hold，請先至「商品物料編號表」將Phase out Date資料刪除，才可申請EC";
          }else{
            strEOLType = "H";
            strRtnPhaseOut = "H;"          
          }
        }else if (eol_data.substr(0, 1) == "L"){
          strEOLType = "L";
          strRtnPhaseOut = "L;[ " + strPN + " ]此料為管制用料(" + eol_data + ")，不可使用";
        }else if (!isNaN(Date.parse(eol_data))){
          strEOLType = "D";
          strRtnBOMSub = GetBOMSub(fixNull(dataArray[0].GROUPING_ID), strPN, strEOLType);
          strRtnPhaseOut = "D;[ " + strPN + " ] 已EOL";
        }
      }
    }
  }else{
    console.log("function:"+"ChkPhaseOut" + " API:" + "BPM_ERP_SENAO111_27 "+ dataArray[0].result);
    return false;
  }
  retVal = strRtnPhaseOut + strRtnBOMSub;
  return retVal;
}	//end of ChkPhaseOut 判斷料號是否有被phaseout
/**
 * 以上階料號+本階料號查詢本階在BOM的資訊
 * @param {String} gsenao111d004.value
 * @param {String} gsenao111d006.value
 */
function FindBOMData(){
  var tParams = [gsenao111d004.value, gsenao111d006.value, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {
    gsenao111d004:tParams[0],
    gsenao111d006:tParams[1],
    orgno:tParams[2]
  })
	var re; 
  if(dataArray[0].result == undefined){
    if ((dataArray[0].COUNT >0 ||dataArray[0].COUNT == undefined ) ){
      gsenao111d007.value = fixNull(dataArray[0].COMP_ITEM_DESC);  //COMP_ITEM_DESC
      gsenao111d007.value = gsenao111d007.value.replace(/\"/g,"'"); 
      gsenao111d010.value = fixNull(dataArray[0].COMPONENT_QUANTITY);  // 變更前數量
      gsenao111d014.value = fixNull(dataArray[0].OP_CODE);  // OP_CODE
      gsenao111d015.value = fixNull(dataArray[0].COMPONENT_REMARKS).replace(/\"/g,"'");  //COMMENT
      gsenao111d018.value = fixNull(dataArray[0].COMPONENT_SEQUENCE_ID);  //component_sequence_id
      gsenao111d020.value = fixNull(dataArray[0].BILL_SEQUENCE_ID);  //bill_sequence_id
      gsenao111d028.value = "";
      //判斷使用者是否將替代料輸入成主料/Phoebe20101202
      if( (gsenao111d010.value == "0" || gsenao111d010.value == "0.0") && gsenao111d018.value != "" ){ //010=TotalQtyB,018=id
        //開放替代料與主料可同時申請/Phoebe.20131023
        gsenao111d028.value = "ECO-2";
        gsenao111d018.value = "";     //20200131,Fix comp item seq error
      }
    } else{ //料號不在BOM裡
      var tParams2 = [orgno, gsenao111d006.value, gsenao111d004.value];
      var rsMaterial = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_13", {
        orgno:tParams2[0],
        gsenao111d006:tParams2[1],
        gsenao111d004:tParams2[2]
      })
      if(rsMaterial[0].result == undefined){
        if (rsMaterial.length > 0 && (rsMaterial[0].COUNT !=0 ||rsMaterial[0].COUNT == undefined ) ){
          gsenao111d008.value = "0";
          gsenao111d009.value = "0";
          gsenao111d010.value = "0";
          gsenao111d012.value = "";
          gsenao111d013.value = "";
          hdn_gsenao111d013.value = "[]";
          var tParams3 = [gsenao111d004.value, orgno];
          var rsAssembly = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_49", {
            gsenao111d004:tParams3[0],
            orgno:tParams3[1]
          })
          if(rsAssembly[0].result == undefined){
            if (rsAssembly.length > 0 && (rsAssembly[0].COUNT !=0 ||rsAssembly[0].COUNT == undefined )){
              gsenao111d014.value = fixNull(rsAssembly[0].OP_CODE);
            }else{
              gsenao111d014.value = "1";
            }
          }else{
            console.log("function:"+"FindBOMData" + " API:" + "BPM_ERP_SENAO111_49 "+ rsAssembly[0].result);
            return false;
          }
          gsenao111d018.value = "";
          //新增本階料號為5730階層料號-判斷樣版為自製半成品且為EBOM狀態卡傳送
          //新增本階料號為52或58階層料號-判斷樣版為自製半成品且為EBOM狀態卡傳送
          //新增本階料號51階層料號-判斷樣版為虛擬料件且為EBOM狀態卡傳送
          //新增本階料號5100Z階層料號-判斷樣版為自製半成品且為EBOM狀態卡傳送
          //新增5730A/5718A/5722A/5626A...等階，判斷BOM Type要為MBOM狀態
          //ITEM_TYPE:自製半成品(SA),自製性商品(FG),生產採購件(P),外購性商品(EP),客供料(CS),虛擬料件(PH)
          if (IsEBOMItem(gsenao111d006.value)){
            re = /^[52|58|5100Z|5730|5718|5722|5626]/;
            if (re.test(gsenao111d006.value) && chkItemTemplate("SA", gsenao111d006.value)){
              // alert("查此階層料號為EBOM狀態,需轉成MBOM才可申請EC");
              showErrorMsg(useExcel,"查此階層料號為EBOM狀態,需轉成MBOM才可申請EC");//20241017 Neil
              gsenao111d006.value = "";
              gsenao111d007.value = "";
              return false;
            }
            if (("51,59".indexOf(left(gsenao111d006.value, 2)) >= 0 || "5730,5718,5722,5626".indexOf(left(gsenao111d006.value, 4)) >= 0) && chkItemTemplate("PH", gsenao111d006.value)){
              // alert("查此階層料號為EBOM狀態,需轉成MBOM才可申請EC");
              showErrorMsg(useExcel,"查此階層料號為EBOM狀態,需轉成MBOM才可申請EC");//20241017 Neil
              gsenao111d006.value = "";
              gsenao111d007.value = "";
              return false;
            }
          }
          
          if (confirm("料號不在BOM裡,是否要新增此[Part Number]??")){
            var strItemSts = FindItemStatus(left(gsenao111d006.value, 12));
            if ("H;P".indexOf(strItemSts) >= 0 && strItemSts != ""){
              var strmsg = "";
              if (strItemSts == "H"){
                strmsg = "Hold";
              }else if (strItemSts == "P"){
                strmsg = "P";
              }
              // alert("此料號已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC");
              showErrorMsg(useExcel,"此料號已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC");//20241017 Neil
              gsenao111d006.value = "";
              gsenao111d007.value = "";
              gsenao111d008.value = "";
              gsenao111d009.value = "";
              gsenao111d010.value = "";
              gsenao111d011.value = "";
              return false;
            }
            gsenao111d007.value = rsMaterial[0].DESCRIPTION.replace(/\"/g,"\"\"");  //description
                    
            //新增本階料號下的BOM LIST 狀態是否符合EC規則
            var ItemID = ""; //本階料號ID
            var tParams = [gsenao111d006.value, orgno];
            var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
              strCOMP_NO:tParams[0],
              orgno:tParams[1]
            })
            if(dataArray[0].result == undefined){
              if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
                ItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
              }
            }else{
              console.log("function:"+"FindBOMData" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
              return false;
            }
            if (ItemID != ""){
              var AsmStatus = "";
              AsmStatus = FindItemStatus(gsenao111d004.value);	//上階料號狀態
              var tParams1 = [orgno, ItemID];
              var dataArray1 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_44", {
                orgno:tParams1[0],
                ItemID:tParams1[1]
              })
              if(dataArray1[0].result == undefined){
                if((dataArray1[0].COUNT !=0 ||dataArray1[0].COUNT == undefined )){
                  var dataCount1 = dataArray1.length;
                  var strErr_d004 = "";					
                  for (var i = 0; i < dataCount1; i++){						
                    var getchkIsMbom_ItemNoStatus_Bom = false;	//本階料號底下的BOMS LIST是否符合狀態規則												
                    // getchkIsMbom_ItemNoStatus_Bom = chkIsMbom_ItemNoStatus(gsenao111d004.value, fixNull(dataArray1[i][0]));					
                    getchkIsMbom_ItemNoStatus_Bom = chkIsMbom_ItemNoStatus_1(gsenao111d004.value, AsmStatus, fixNull(dataArray1[i].ITEM_NO), fixNull(dataArray1[i].INVENTORY_ITEM_STATUS_CODE));
                    if (!getchkIsMbom_ItemNoStatus_Bom){
                      if (AsmStatus == "Active"){
                        strErr_d004 = strErr_d004 + "上階料號(" + gsenao111d004.value + ")承認狀態為 : Active\n, 本階料號(" + gsenao111d006.value + ")底下的BOM LIST，全部都要是Active!\n";
                      }
                      if (AsmStatus == "PVT"){
                        strErr_d004 = strErr_d004 + "上階料號(" + gsenao111d004.value + ")承認狀態為 : PVT\n, 本階料號(" + gsenao111d006.value + ")底下的BOM LIST，除ID,ME,5730料號可為S4/A/C, 其餘皆需 C/A/PVT!\n";
                      }
                    }
              
                    var tmpstr = ChkPhaseOut_1(fixNull(dataArray1[i].ITEM_NO), fixNull(dataArray1[i].EOL_DATA), fixNull(dataArray1[i].GROUPING_ID));  //本階
                    if (tmpstr != ""){
                      if (left(tmpstr,1) == "L"){
                        strErr_d004 = strErr_d004 + "本階料號(" + gsenao111d006.value + ")底下的BOM LIST料號:" + fixNull(dataArray1[i].ITEM_NO) + " " + "為管制用料,不可使用\n";
                      }
                      if (left(tmpstr,2) == "D;"){
                        strErr_d004 = strErr_d004 + "本階料號(" + gsenao111d006.value + ")底下的BOM LIST料號:" + fixNull(dataArray1[i].ITEM_NO) + " " + "已EOL,請改用替代料\n";
                      }
                    }
                  }
                }
              }else{
                console.log("function:"+"FindBOMData" + " API:" + "BPM_ERP_SENAO111_44 "+ dataArray1[0].result);
                return false;
              }
              
              if (strErr_d004 != ""){
                // alert(strErr_d004);
                showErrorMsg(useExcel,strErr_d004); //20241017 Neil
                gsenao111d006.value = "";
                gsenao111d007.value = "";
                return false; //20190712James
              }
            }
          }else{
            gsenao111d006.value = "";
            gsenao111d007.value = "";
            return false;
          }

          var AsmStatus = "";
          AsmStatus = FindItemStatus(gsenao111d004.value);	//上階料號狀態
          var getchkIsMbom_ItemNoStatus = false;	//本階料號否符合EC狀態規則
          var ItemStatusErr = "";
          getchkIsMbom_ItemNoStatus = chkIsMbom_ItemNoStatus(gsenao111d004.value, gsenao111d006.value);
          if (!getchkIsMbom_ItemNoStatus){
            if (AsmStatus == "Active"){
              ItemStatusErr = "上階料號:" + gsenao111d004.value + "承認狀態為 : Active\n, 本階料號，全部都要是Active!\n";
            }
            if (AsmStatus == "PVT"){
              ItemStatusErr = "上階料號:" + gsenao111d004.value + "承認狀態為 : PVT\n, 本階料號，除ID,ME,5730料號可為S4/A/C, 其餘皆需 C/A/PVT!\n";
            }
          }
            
          var tmpstr = ChkPhaseOut(gsenao111d006.value);   //本階
          if (tmpstr != ""){
            if (left(tmpstr, 2) == "D;" || left(tmpstr, 1) == "O" || left(tmpstr, 1) == "L"){
              // alert(right(tmpstr, tmpstr.length - 2));
              showErrorMsg(useExcel,right(tmpstr, tmpstr.length - 2));//20241017 Neil
              ClearGridActionRowData("006");
              return false; //20190712James
            }
          }else if (!getchkIsMbom_ItemNoStatus){
            // alert(ItemStatusErr);
            showErrorMsg(useExcel,ItemStatusErr);//20241017 Neil
            ClearGridActionRowData("006");
            return false; //20190712James
          }else{
              gsenao111d007.value = fixNull(rsMaterial[0].DESCRIPTION).replace(/\"/g,"'");
          }
        }else{
          // alert("[Part Number]輸入錯誤,請重新輸入!!");
          showErrorMsg(useExcel,"[Part Number]輸入錯誤,請重新輸入!!");//20241017 Neil
          gsenao111d006.value = "";
          ClearGridActionRowData("");
          return false; //20190712James
        }
      }else{
        console.log("function:"+"FindBOMData" + " API:" + "BPM_ERP_SENAO111_13 "+ rsMaterial[0].result);
        return false;
      }
    } 
  }else{
    console.log("function:"+"FindBOMData" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
    return false;
  }
} // end of FindBOMData()
/**
 *判斷是否為EBOM狀態
 *IsEBOMItem
 *@param strItemNo
*/
function IsEBOMItem(strItemNo){
  var retVal = false;
  var tParams = [orgno, strItemNo];
  var rsEBOMItem = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_41", {
    orgno:tParams[0],
    strItemNo:tParams[1]
  })
  if(rsEBOMItem[0].result == undefined){
    if ((rsEBOMItem[0].COUNT !=0 ||rsEBOMItem[0].COUNT == undefined )) {
      if(rsEBOMItem.length > 0){
        retVal = true;
      }
    }
  }else{
    console.log("function:"+"IsEBOMItem" + " API:" + "BPM_ERP_SENAO111_41 "+ rsEBOMItem[0].result);
    return false;
  }
  return retVal;
}
/**
 *檢查料號樣版
 *chkItemTemplate
 *param strTemplate 樣版
 *param strItemNo 料號
*/
function chkItemTemplate(strTemplate, strItemNo){
  var retVal = false;
  var tParams = [strItemNo, orgno, strTemplate];
  var rsTemplate =  ajaxGetData(invokeURL + "BPM_ERP_SENAO111_42", {
    strItemNo:tParams[0],
    orgno:tParams[1],
    strTemplate:tParams[2]
  })
  if(rsTemplate[0].result == undefined){
    if (rsTemplate.length > 0 && (rsTemplate[0].COUNT !=0 ||rsTemplate[0].COUNT == undefined )){
      retVal = true;
    }
  }else{
    console.log("function:"+"chkItemTemplate" + " API:" + "BPM_ERP_SENAO111_42 "+ rsTemplate[0].result);
    return false;
  }
  return retVal;
}
/**
 *取出料號狀態
 *FindItemStatus
 *@param strItemNo 料號
*/
function FindItemStatus(strItemNo){
  var retVal = "";
  var tParams = [strItemNo, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
    strCOMP_NO:tParams[0],
    orgno:tParams[1]
  })
  if(dataArray[0].result == undefined){
    if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
      retVal = fixNull(dataArray[0].INVENTORY_ITEM_STATUS_CODE);
    }
  }else{
    console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
  *判斷是否為ID/ME料號
*/
function chkIsID_ME_OtherItem(ItemNo){
	var retVal = false;
	var getArraylist = ajaxGetData(invokeURL + "BPM_SENAO111_58", {
    ItemNo:tParams[0],
    orgno:tParams[1]
  })
  if(getArraylist[0].result == undefined){
    if (getArraylist.length > 0){
      retVal = true;		
    }	
  }else{
    console.log("function:"+"chkIsID_ME_OtherItem" + " API:" + "BPM_SENAO111_58 "+ getArraylist[0].result);
    return false;
  }
	return retVal;
}
//使用機種
function BOM_COMP_QUANTITIES(strComp_ItemNo, strAssbly_ItemNo){
  var tParams = [strComp_ItemNo, strAssbly_ItemNo, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_34", {
    strComp_ItemNo:tParams[0],
    strAssbly_ItemNo:tParams[1],
    orgno:tParams[2]
  })
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    var strBOM_COMP_QUANTITIES = "";
    if (dataCount > 0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      strBOM_COMP_QUANTITIES = "尚有其他機種使用，請確認是否EC";
    }
  }else{
    console.log("function:"+"BOM_COMP_QUANTITIES" + " API:" + "BPM_ERP_SENAO111_34 "+ dataArray[0].result);
    return false;
  }
  return strBOM_COMP_QUANTITIES;
}
/**
 * Reason of Change下拉選單資料準備
 * senao111016_onchange
 */
function senao111016_prepare() {
	var i, tOption;
	var sqlid = "BPM_ERP_SENAO111_80"; // SN_EFGP_SQL中定義的SQL代號
	var arrayData = ajaxGetData(invokeURL + sqlid, { })
	if(arrayData[0].result == undefined){
    if (arrayData.length > 0) {
      senao111016.length = 0;
      tOption = document.createElement("option");  //建立option選項
      tOption.text = "---- SELECT ----"; //放入表面值
      tOption.value = ""; //放入內容值
      senao111016.add(tOption);
      for (i = 0 ; i < arrayData.length; i++) {		
        tOption = document.createElement("option");  //建立option選項
        tOption.text = arrayData[i].ATTRIBUTE1; //放入表面值
        tOption.value = arrayData[i].ENG_CHANGE_REASON_CODE; //放入內容值
        senao111016.add(tOption);
      }

      //系統會將被選到的值存在一個由元件代號加上_hdn的隱藏欄位中   
      //因此每次資料載入完畢後需將被選到的值由隱藏欄位中取出並設定至下拉式選單中   
      var tDropdownHdn = document.getElementById("senao111016_hdn");   
      if (tDropdownHdn !== null) {       
       // var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);   
        //DWRUtil.setValue("senao111016", tSelectedSQLDropdown); 
        var tSelectedSQLDropdown = tDropdownHdn.value;  
        document.getElementById("senao111016").value = tSelectedSQLDropdown;  // 取代 DWRUtil.setValue
      }
    }else{
      alert("function:"+"senao111016_prepare" + " API:" +sqlid + arrayData[0].result);
      return false;
    }
  }	
	return true;
}
/**
  *是否已存在主BOM下的料
  *IsExistBom
  *@param strSubsData 替代料
  *@param strASSM_NO 上階料號
  *@param strFlag [單身]ECO Number
  *@return IsExistBom true/false
*/
function IsExistBom(strSubsData , strASSM_NO, strFlag){
  var retVal = false;
  var ary = strSubsData.split(",");
  var i = 0;
	if (ary.length >= 1){
    var ExitFlag = false;
    var tParams = ["", "", ""];
    tParams[0] = strASSM_NO;
    tParams[2] = orgno;
    while (ExitFlag == false && i < ary.length){
      if (ary[i] != ""){
        strSubs = ary[i].substr(0, 12).trim();
        tParams[1] = strSubs;
        var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_10", {
          strASSY_ITEM_NO:tParams[0],
          strCOMP_ITEM_NO:tParams[1],
          orgno:tParams[2]
        });//查詢欲新增之替代料是否已存在BOM中
        if(dataArray[0].result == undefined){
          if (dataArray.length == 0){
            retVal = false;  //回傳IsExistBom=false
          }else{
            if (strFlag == "ECO-2"){
              strDeleted = bln_COMP_Deleted(strASSM_NO, strSubs);
              if (strDeleted.substr(0, 1) == "N"){
                if (strDeleted.length == 2){  //N;  非此BOM的替代料
                  if (bln_COMPONENT_DELETED(strASSM_NO, strSubs) == true){	//判斷替代料、插件位置是否被刪除
                    retVal = false;
                  }else{
                    retVal = true;
                  }
                }else{
                  retVal = true;
                  ExitFlag = true;
                }
              }else{
                retVal = false;
              }
            }else{
              if (bln_BOM_COMP_Deleted(strASSM_NO, strSubs) == "Y"){ //CheckFieldData.asp:4088
                retVal = false;
              }else{
                retVal = true;
              }
              ExitFlag = true;
            }//end of if strFlag=="ECO-2"
          }
        }else{
          console.log("function:"+"IsExistBom" + " API:" + "BPM_ERP_SENAO111_10 "+ dataArray[0].result);
          return false;
        }
      }
      i++;
    }//end of while loop
  }
  return retVal;
}	//end of IsExistBom 是否已存在主BOM下的料

/**
  *取得新增替代料的主料
  *GetCOMPONENT
  *@param strASSEMBLY 上階料號
  *@param strNewCOMPONENT 替代料
  *@return retVal 若非替代料傳回"", 若是替代料傳回其主料
*/
function GetCOMPONENT(strASSEMBLY, strNewCOMPONENT){ //
  var retVal="";
  var tParams = [strASSEMBLY, strNewCOMPONENT, orgno];
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_45", {
    strASSEMBLY:tParams[0],
    strNewCOMPONENT:tParams[1],
    orgno:tParams[2]
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
      retVal = dataArray[0].COMPONENT;
    }
  }else{
    console.log("function:"+"GetCOMPONENT" + " API:" + "BPM_ERP_SENAO111_45 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}	//end of  GetCOMPONENT取得新增替代料的主料
function ChkProcessingData(strASSM_NO, strCOMP_NO){
	var tParams = new Array();
  tParams.push(strASSM_NO);
  tParams.push(strCOMP_NO);   
  if(SERIALNUMBER==""){
    tParams.push(" ");
  }else{
    tParams.push(SERIALNUMBER);
  }
  var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_18", {
    strASSM_NO:tParams[0],
    strCOMP_NO:tParams[1],
    serialNumber:tParams[2]
  });
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    if(dataCount>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      return "已有同仁[" + fixNull(dataArray[0].SENAO111003_T1) + "]等"+dataCount+"人尚在處理中!!\n" + "不允許申請變更以下申請資料\nAssembly Level P/N[" +strASSM_NO+ "] - P/N[" +strCOMP_NO+ "]";
    }else{
      return "";
    }
  }else{
    console.log("function:"+"ChkProcessingData" + " API:" + "BPM_SENAO111_18 "+ dataArray[0].result);
    return false;
  }
}
//依上階&本階料號取得元件seqence id
function GetCOMP_SEQ_ID(strASSY_ITEM_NO, strCOMP_ITEM_NO){    
  var tParams = [strASSY_ITEM_NO, strCOMP_ITEM_NO, orgno];
  var aryGetID = new Array();    
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_08", {
    strASSY_ITEM_NO:tParams[0],
    strCOMP_ITEM_NO:tParams[1],
    orgno:tParams[2]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0){
      aryGetID[0] = fixNull(dataArray[0].COMPONENT_SEQUENCE_ID);
      aryGetID[1] = fixNull(dataArray[0].BILL_SEQUENCE_ID);        
    }else{
      aryGetID[0]="";
    }
  }else{
    console.log("function:"+"GetCOMP_SEQ_ID" + " API:" + "BPM_ERP_SENAO111_08 "+ dataArray[0].result);
    return false;
  }
  return aryGetID;
}
/**
  *根據上階、本階料號 取得 COMPONENT_SEQUENCE_ID
  *GetBILLID
  *@param strASSY_ITEM_NO -上階料號  
  *@param strCOMP_ITEM_NO -本階料號
  *@return retVal - COMPONENT_SEQUENCE_ID
*/
function GetBILLID(strASSY_ITEM_NO, strCOMP_ITEM_NO){
  var retVal = "";
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_29", {
    gsenao111d004:strASSY_ITEM_NO,
    orgno:orgno
  })
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
      retVal = fixNull(dataArray[0].BILL_SEQUENCE_ID);
    }else{
      retVal = "";
    }
  }else{
    console.log("function:"+"GetBILLID" + " API:" + "BPM_ERP_SENAO111_29 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
//庫存數量
function onhand_QTY(strComp_ItemNo){
  var retVal;
  var tParams = [orgno, strComp_ItemNo];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_33", {
    orgno:tParams[0],
    strComp_ItemNo:tParams[1]
  })
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0 &&(dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      retVal = fixNullTo0(dataArray[0].QTY);
    }else{
      retVal = 0;
    }
  }else{
    console.log("function:"+"onhand_QTY" + " API:" + "BPM_ERP_SENAO111_33 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
//在途PR數量
function REQ_QTY(strComp_ItemNo){
  var retVal;
  var tParams = [orgno, strComp_ItemNo];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_31", {
    orgno:tParams[0],
    strComp_ItemNo:tParams[1]
  })
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      retVal = fixNullTo0(dataArray[0].PO_QTY);
    }else{
      retVal = 0;
    }
  }else{
    console.log("function:"+"REQ_QTY" + " API:" + "BPM_ERP_SENAO111_31 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
//在途PO數量
function PO_QTY(strComp_ItemNo){
  var retVal="";
  var tParams = [orgno, strComp_ItemNo];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_30", {
    orgno:tParams[0],
    strComp_ItemNo:tParams[1]
  }) 
  if(dataArray[0].result == undefined){
    if (dataArray.length>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      retVal = fixNullTo0(dataArray[0].PO_QTY);
    }else{
      retVal = 0;
    }
  }else{
    console.log("function:"+"PO_QTY" + " API:" + "BPM_ERP_SENAO111_30 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
//待驗數數量
function RECEIVING_QTY(strComp_ItemNo){
  var retVal;
  var tParams = [orgno, strComp_ItemNo];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_32", {
    orgno:tParams[0],
    strComp_ItemNo:tParams[1]
  }) 
  if(dataArray[0].result == undefined){
    if (dataArray.length>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      retVal = fixNullTo0(dataArray[0].PO_QTY);
    }else{
      retVal = 0;
    }
  }else{
    console.log("function:"+"RECEIVING_QTY" + " API:" + "BPM_ERP_SENAO111_32 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
 *檢查 Oracle ECO號碼是不是已經產生
 *ChkError
 *@param strEcrNo ezflow SheetNo 後4碼 (如easyflow no :  000000097 --> strEcrNo 為  0097 )
 *@param IsNeedEC 是否需要EC ，詳見 function IsNeedEC 
 *@return senao111006.value
 *整張沒有產生--> 所有產生狀態顯示為 N
 *該張ECN 有產生--> 判斷單身是否有產生 --> 未產生的單身資料 狀態顯示為 N
*/
function ChkError(strEcrNo, IsNeedEC){
	if (IsNeedEC == true){
    //20251008 Dillan add(s) 檢查資料若為代替越南發單則抓369其他則不變
    /*if (ForSVN_0.checked == false){
      var dataArray = ajax_ERPSQLQuery("SENAO111_11", [strEcrNo, orgno], "", ouno);
    }else{
      var dataArray = ajax_ERPSQLQuery("SENAO111_11", [strEcrNo, "369"], "", ouno);
    }*/
    //20251008 Dillan add(e)
    var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_11", {
      strEcrNo:strEcrNo,
      orgno:orgno
    }) //20251008 Dillan marked
    if(dataArray[0].result == undefined){
      var dataCount = dataArray.length;
      var tGrid1Data = getGridData(0); 
      var tGrid1DataCount = tGrid1Data.length;
      if (fixNullTo0(dataArray[0].COUNT) <= 0){
        senao111006.value = senao111006.value.replace(/\[整張單未寫入\]/g, "") + "[整張單未寫入]";
        senao111006.style.color = "red";
        for (var i = 0; i < tGrid1DataCount; i++){
          tGrid1Data[i]['SENAO111D016'] = "N";
        } 
        setGridData(0, tGrid1Data);
      }else{
        var intCnt;
        if (senao111005.value.indexOf("-1") >= 0){
          strEcrNo = senao111005.value;
          intCnt = 2;
        }else{
          //20251126 Dillan add(s)
          if (typeof processId !== "undefined" && processId == "CWO111"){
              var last5 = right(SERIALNUMBER, 5);
              var num = parseInt(last5, 10);
              var newNum = num + 49;
              // 依原格式補回 5 位（前置補零）
              //var padded = String(newNum).padStart(5, "0");//20260226 Dillan marked
              var padded = ("00000" + String(newNum)).slice(-5);//20260226 Dillan add
              senao111006.value = "S" + padded;

          }else{
              senao111006.value = right(SERIALNUMBER, 6);
          }
          //20251126 Dillan add(e)
          //strEcrNo = right(serialNumber, 6);//20251127 Dillan marked
          intCnt = 1;
        }
        for (var m = 1; m <= intCnt; m++){
          if (m == 2){
            strEcrNo = right(SERIALNUMBER,6) + "-2";
          }
          var rsEcrDetail = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_12", {
            strEcrNo:strEcrNo,
            orgno:orgno
          }) 
          if(rsEcrDetail[0].result == undefined){
            var rsEcrDetailCount = rsEcrDetail.length;
            if (rsEcrDetail.length > 0){ //CheckFieldData.asp:3293
              var nCount = 0;
              for (var i = 0; i < tGrid1DataCount; i++){
                for (var j = 0; j < rsEcrDetailCount; j++){
                  if (fixNull(rsEcrDetail[j].ASSEMBLY_ITEM_NUMBER) == tGrid1Data[i]['SENAO111D004'] && fixNull(rsEcrDetail[j].COMPONENT_ITEM_NUMBER) == tGrid1Data[i]['SENAO111D006']){
                    tGrid1Data[i]['SENAO111D016'] = "N";
                    nCount ++;
                  }
                }
              }
              setGridData(0, tGrid1Data);
              senao111006.value = "[" + nCount + "筆單身資料未寫入]";
              senao111006.style.color = "red";
            }
          }else{
            console.log("function:"+"ChkError" + " API:" + "BPM_ERP_SENAO111_12 "+ rsEcrDetail[0].result);
            return false;
          }
        }
      }
    }else{
      console.log("function:"+"ChkError" + " API:" + "BPM_ERP_SENAO111_11 "+ dataArray[0].result);
      return false;
    }

  }else{
    senao111006.value = "No Need EC";
    senao111006.style.color = "red";
  }
}
//IsSubStituteItem = true 表示 已存在此替代料
/**
  *是否存在此替代料
  *IsSubStituteItem
  *@param strItem 替代料
  *@param strid component_sequence_id
  *@return retVal true/false
*/
function IsSubStituteItem(strItem, strid){
  var retVal = false;
  var tParams = new Array();
  tParams.push(strid);
	tParams.push(orgno);
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_09", {
    gsenao111d018:tParams[0],
    orgno:tParams[1],
    VALUE: 'ALL'
  }) 
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    if (dataCount == 0){
        retVal = false;        
    }else{
      for (var j = 0; j < dataCount; j++){
        if (fixNull(dataArray[j].VALUE) == strItem){
          retVal = true;
          break;
        }
      }
    }
  }else{
    console.log("function:"+"IsSubStituteItem" + " API:" + "BPM_ERP_SENAO111_09 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
  *Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
  *IsDupItem_In_ComponentAndAddreference
  *@param strType 處理
  *@param strItemNo 料號
  *@return retVal true/false
*/
function IsDupItem_In_ComponentAndAddreference(strType, strAssembly, strItemNo){
	var retVal = false;
	var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
	var tParams = [strAssembly, strItemNo, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {
    gsenao111d004:tParams[0],
    gsenao111d006:tParams[1],
    orgno:tParams[2]
  })
  if(dataArray[0].result == undefined){
    if (dataArray[0].COUNT == 0){	//料號不在BOM裡
      for (var i = 0; i < tGrid1DataCount; i++){
        if (strType == "替代料"){
          if (tGrid1Data[i]['SENAO111D017'] == "非替代料" && tGrid1Data[i]['SENAO111D004'] == strAssembly && tGrid1Data[i]['SENAO111D006'] == strItemNo){
            retVal = true;
          }
        }
        if (strType == "非替代料"){
          if (tGrid1Data[i]['SENAO111D017'] == "替代料" && tGrid1Data[i]['SENAO111D004'] == strAssembly && tGrid1Data[i]['SENAO111D012'].indexOf(strItemNo) > -1){
            retVal = true;
          }
        }       
      }
    }
	}else{
    console.log("function:"+"IsDupItem_In_ComponentAndAddreference" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
    return false;
  } 
  return retVal;
}
//GetOracleCntSubStitute 依 Component_Sequence_Id 取得oracle中已存在的替代料數量。
function GetOracleCntSubStitute(strComponent_Sequence_Id){
  var retVal =0;
  var tParams = [strComponent_Sequence_Id, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_07", {
    component_sequence_id:tParams[0],
    orgno:tParams[1]
  })
  if(dataArray[0].result == undefined){
    retVal = dataArray[0].CNT;
  }else{
    console.log("function:"+"GetOracleCntSubStitute" + " API:" + "BPM_ERP_SENAO111_07 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/**
 * Check Add Reference Item Exists
 * 檢查Add Reference的料號是否存在
 * Add Reference 料號
*/
function ChkAddReference_Exists(itemNo){
	var retVal = false;
	var tParams = [itemNo, orgno];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_40_1", {
    itemNo:tParams[0],
    orgno:tParams[1]
  })
  if(dataArray[0].result == undefined){
    if(dataArray.length > 0){
		  retVal = true;
    }
  }else{
    console.log("function:"+"ChkAddReference_Exists" + " API:" + "BPM_ERP_SENAO111_40_1 "+ dataArray[0].result);
    return false;
  }  
  return retVal;
}
/**
 * Check Delete Reference Item Exists
 * Delete Reference的料號是否存在
 * process 處理, ASSY_ITEM_NO 上階料號, COMP_ITEM_NO 本階料號, DelItemNo Delete Reference 料號, component_sequence_id
*/
function ChkDelReference_Exists(process, ASSY_ITEM_NO, COMP_ITEM_NO , DelItemNo, component_sequence_id){
	var retVal = false;
	var tParams;
	var tDefaultAppendSQL = "";
	var SqlID = "";
	if (process == "非替代料"){
		SqlID = "BPM_ERP_SENAO111_66_1";
		tParams = [ASSY_ITEM_NO, COMP_ITEM_NO, DelItemNo, orgno];		
    var dataArray = ajaxGetData(invokeURL + SqlID, {
      ASSY_ITEM_NO:tParams[0],
      COMP_ITEM_NO:tParams[1],
      DelItemNo:tParams[2],
      orgno:tParams[3]
    })
	}else if (process == "替代料"){
		SqlID = "BPM_ERP_SENAO111_09_1";
		tParams = [component_sequence_id, DelItemNo, orgno];
    var dataArray = ajaxGetData(invokeURL + SqlID, {
      component_sequence_id:tParams[0],
      DelItemNo:tParams[1],
      orgno:tParams[2]
    })
	}
	if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
		retVal = true;
    }
  }else{
    console.log("function:"+"ChkDelReference_Exists" + " API:" + SqlID + dataArray[0].result);
    return false;
  }
	return retVal;
}
//檢查同階層料號是否都已維護起始工單
function chkProductionNumber(){
  var retVal = "";
  var formno = senao111002.innerHTML == undefined ? "" : senao111002.innerHTML;
  var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_39", {
    formno:formno
  })
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    var tGrid1Data = getGridData(0); 
    var tGrid1DataCount = tGrid1Data.length;
    for (var i = 0; i < dataCount; i++){
      var strPNErr = "";
      for (var j = 0; j < tGrid1DataCount; j++){
        var strASSM_NO = tGrid1Data[j]['SENAO111D004'];
        if (fixNull(dataArray[i].SENAO111D004) == strASSM_NO && tGrid1Data[j]['SENAO111D027'] != ""){
          strPNErr = strASSM_NO;
          break;
        }
      }
      if (strPNErr == ""){
        retVal = dataArray[i].SENAO111D004;
        break;
      }
  }
  }else{
    console.log("function:"+"chkProductionNumber" + " API:" + "BPM_SENAO111_39 "+ dataArray[0].result);
    return false;
  }

  return retVal;
}
//查詢料號對應之採購員
function FindItemBuyer(strPreItemNo){
  var retVal = "N";
  var unAprvUser = userId;
  //20260204 Dillan add(s) 越南目前沒有相關設定對應採購員先忽略掉
  if(form_ou.value == "svn"){
      retVal = "Y";
  }else{
    for (var i = 5; i > 0; i--){
      var strItemStr = strPreItemNo.substr(0, i);
      var tParams = [strItemStr, userId ];
      var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_55", {
        strItemStr:tParams[0],
        userId:tParams[1]
      })
      if(dataArray[0].result == undefined){
        if (dataArray.length > 0){
            retVal = "Y";
            break;
        }
      }else{
        console.log("function:"+"FindItemBuyer" + " API:" + "BPM_SENAO111_55 "+ dataArray[0].result);
        return false;
      }
    }
  }
  //20260204 Dillan add(e)
  /*20260204 Dillan marked
  for (var i = 5; i > 0; i--){
      var strItemStr = strPreItemNo.substr(0, i);
      var tParams = [strItemStr, userId ];
      var dataArray = ajax_EFGPSQLQuery("SENAO111_55", tParams);
      if (dataArray.length > 0){
          retVal = "Y";
          break;
      }
  }
  */
  return retVal;
}
function chkHaveSales(){
  var retVal = false;
  if (senao111019.value == "6"){
    var dataArray =  ajaxGetData(invokeURL + "BPM_SENAO111_69", {
      serialNumber:SERIALNUMBER,
      DEFINITIONID:"0460%"
    })
    if(dataArray[0].result == undefined){  
      if (dataArray.length > 1){	//業務和PM若不同人, 則會有2筆, 若同一人, 則只會有1筆
        retVal = true;
      }
    }else{
      console.log("function:"+"chkHaveSales" + " API:" + "BPM_SENAO111_69 "+ dataArray[0].result);
      return false;
    }
  }
  return retVal;
}
function GetSheetNoByVerion(strAssmNo){
  var retVal = "";
  var dataArray = ajaxGetData(invokeURL + "BPM_SENAO111_57", {
    strAssmNo:strAssmNo
  })
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    if (dataCount > 0){
      retVal = fixNull(dataArray[0].FORMSERIALNUMBER);        
    }
  }else{
    console.log("function:"+"GetSheetNoByVerion" + " API:" + "BPM_SENAO111_57 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
function IsImplementSuccess(strEcnNo){
  var retVal = false;
  var tParams = [strEcnNo];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_17", {
    strEcnNo:tParams[0]
  })
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
      if (fixNullTo0(dataArray[0].CNT) > 0){
        retVal = true;
      }
    }
  }else{
    console.log("function:"+"IsImplementSuccess" + " API:" + "BPM_ERP_SENAO111_17 "+ dataArray[0].result);
    return false;
  }

  return retVal;
}
function GET_COMPONENT_ID_QTY(strASSM_NO, strCOMP_NO){
  var tParm = new Array();
  var retArray = new Array();
  tParm.push(strASSM_NO);
  tParm.push(strCOMP_NO);
  tParm.push(orgno);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_08", {
    strASSY_ITEM_NO:tParm[0],
    strCOMP_ITEM_NO:tParm[1],
    orgno:tParm[2]
  });
  if(dataArray[0].result == undefined){
    var dataCount = dataArray.length;
    if(dataCount>0){
      retArray.push(fixNull(dataArray[0].COMPONENT_SEQUENCE_ID));//ID
      retArray.push(fixNullTo0(dataArray[0].COMPONENT_QUANTITY));//QTY
    }else{
      retArray.push("");
      retArray.push("0");
    }
  }else{
    console.log("function:"+"GET_COMPONENT_ID_QTY" + " API:" + "BPM_ERP_SENAO111_08 "+ dataArray[0].result);
    return false;
  }
  return retArray;
}
/**
 *新增Sourcer關卡
 *EC流程由sourcer簽核/Phoebe.20120524
 *InsertSourcer_Flow
*/
function InsertSourcer_Flow(){
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  var strItemList = "";
  var strSRCList = "";
  for (var i = 0; i < tGrid1DataCount; i++){
    if (strItemList.indexOf(left(tGrid1Data[i]['SENAO111D006'], 5)) < 0){
      strItemList += left(tGrid1Data[i]['SENAO111D006'], 5) + ",";
      var strPreItemNo = tGrid1Data[i]['SENAO111D006'];
      for (var k = 5; k > 0; k--){
        var strItemStr = left(strPreItemNo, k);
        var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_71", {
          strItemStr:strItemStr
        });
        var strFlag = false;
        if(dataArray[0].result == undefined){
          if((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
            for (var j = 0; j < dataArray.length; j++){
              if (strSRCList.indexOf(fixNull(dataArray[j].SENAO111I003)) < 0){
                strSRCList += fixNull(dataArray[j].SENAO111I003) + ";";
              }
              strFlag = true;
            }
          }
        }else{
          console.log("function:"+"InsertSourcer_Flow" + " API:" + "BPM_SENAO111_71 "+ dataArray[0].result);
          return false;
        }
      }// end of for loop
      if (strFlag == true){
          break;
      }
    }
  }
  hdn_SourcerList.value = strSRCList;
}
/**
 *Sourcer人員名單
 *InsertPUR_Flow
 *用盡變更時，會辦採購單位填寫廠商先行備料數量(0150-0010 or 0475-0010)/Phoebe.20110511
 *若庫存數(d021[18])不為空,依料號找到對應之採購, 放入hdn_PURList
*/
function InsertPUR_Flow(){
  var tGrid1Data = getGridData(0);
  var tGrid1DataCount = tGrid1Data.length;
  var strItemList = "";
  var strPURList = "";
  var strPreItemNo = "";
  for (var i = 0; i < tGrid1DataCount; i++){
    if (tGrid1Data[i]['SENAO111D017'] != "替代料" && tGrid1Data[i]['SENAO111D011'] == "0"){ //18:庫存數, BeforeApproveForm.asp:3433 //20210324 Milla 原本抓庫存數!= "" ,改抓Total Quantity After Change == "0"
      if (strItemList.indexOf(left(tGrid1Data[i]['SENAO111D006'], 5) < 0)){
        strItemList += left(tGrid1Data[i]['SENAO111D006'], 5) + ",";
        strItemStr = left(tGrid1Data[i]['SENAO111D006'], 5);
        var dataArray = ajaxGetData(invokeURL +"BPM_SENAO111_56", {
          strItemStr:strItemStr
        });
        if(dataArray[0].result == undefined){
          var dataCount = dataArray.length;
          var strFlag = false;
          for (var j=0; j < dataCount; j++){
            if (dataArray[j].SENAO111H001 == dataArray[0].SENAO111H001){
              if (strPURList.indexOf(fixNull(dataArray[j].SENAO111H002)) < 0 && dataArray[j].SENAO111H001 != "52"){
                if(strPURList != ""){
                  strPURList += ";" 
                }
                strPURList += fixNull(dataArray[j].SENAO111H002);
              }
            }
          }
        }else{
          console.log("function:"+"InsertPUR_Flow" + " API:" + "BPM_SENAO111_56 "+ dataArray[0].result);
          return false;
        }
      }
    }
  }
  hdn_PURList.value = strPURList;
    
}
/**
 *本階料是否為ME料號
 *isME_MTL
*/
function isME_MTL(){
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){
    if (tGrid1Data[i]['SENAO111D006'] != ""){ //料號
      var pnini5 = left(tGrid1Data[i]['SENAO111D006'], 5);
      var dataArray = ajaxGetData(invokeURL +"BPM_SENAO108_03", {
        pnini5:pnini5
      });
      if(dataArray[0].result == undefined){          
        if (dataArray.length > 0){
          retVal = true;
          break;
        }
      }else{
        console.log("function:"+"isME_MTL" + " API:" + "BPM_SENAO108_03 "+ dataArray[0].result);
        return false;
      }
    }
  }
  return retVal;
}
//確認機種是否存在
function chkErrModelName(strModelName){
	var retVal = "";
	var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_01", {
    senao111014:strModelName
  });
  if(dataArray[0].result == undefined){     
    if(dataArray[0].COUNT == 0){
      retVal = "無此機種代碼(" + strModelName + "),請重新輸入!";
      senao111014.value = "";
      senao111014_t1.value = "";
      senao111014_t2.value = "";
      $("#senao111014_t2").prop("readOnly", true);
      senao111014_t2.style.backgroundColor = "#ffffff";
      $('#senao111014_t3').prop("disabled", true);
    }
  }else{
    console.log("function:"+"chkErrModelName" + " API:" + "BPM_ERP_SENAO111_01 "+ dataArray[0].result);
    return false;
  }
	return retVal;
}
//利用上階+本階取得erp中的數量，ERP無資料時,傳回0
function GetCOMPQty(strASSY, strCOMP){
	var retVal = "0";
	var rsCOMP = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_14", {
    senstrASSYao111014:strASSY,
    strCOMP:strCOMP,
    orgno:orgno
  });
  if(rsCOMP[0].result == undefined){
    if ((rsCOMP[0].COUNT !=0 ||rsCOMP[0].COUNT == undefined )){
      retVal = fixNull(rsCOMP[0].COMPONENT_QUANTITY);
    }else{
      retVal = "0";
    }
  }else{
    console.log("function:"+"GetCOMPQty" + " API:" + "BPM_ERP_SENAO111_14 "+ rsCOMP[0].result);
    return false;
  }
	return retVal;
}
/**
 *取得上階料號的版次
 *GetVerion
 *@param strASSM_NO 上階料號
*/
function GetVerion(strASSM_NO){
  var retVal="";
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO111_20", {
    orgno:orgno,
    strASSM_NO:strASSM_NO
  });
  if(dataArray[0].result == undefined){
    if (dataArray.length > 0){
      retVal = fixNull(dataArray[0].CURRENT_REVISION);
    }
  }else{
    console.log("function:"+"GetVerion" + " API:" + "BPM_ERP_SENAO111_20 "+ dataArray[0].result);
    return false;
  }
  return retVal;
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
  *依申請人工號帶出申請人名稱
  *senao111003_onchange
*/
function senao111003_onchange(){  //CheckFieldData.asp:1205
	if (senao111003.value != ""){
		var userInfo = queryUserByEmpId(senao111003.value);
		var strModel = "";
		if (typeof userInfo.userId !== "undefined") {
			senao111003_t1.value = userInfo.userName;	//申請人名稱
			senao111004.value = userInfo.unitId;	//申請單位ID
			senao111004_t1.value = userInfo.unitName;	//申請單位名稱
			strModel = senao111014.value;   //Model ID 
			if(senao111014.value == "00"){
				strModel = senao111014_t2.value;  //Other Model Name:
        $('#senao111014_t3').prop("disabled", false);	//Model Name: 其他、DCM、VCM
        $("#senao111014_t2").prop("readOnly", false);	//Other Model Name:
				senao111014_t2.style.backgroundColor = "#fbf1c0";
			}
			FindModelName_Customer();	//依 Model Name查客戶, 填入senao111087
			setOdmFieldStatus(strModel, senao111003.value, senao111087.value);	//Model ID ,userId, 客戶名稱
			SetApproveDeptChkBox();	//設定會簽單位
			if(querySNSI003_Org("SN111_S15").indexOf(senao111004.value) >= 0){	//"RD五處部門代號需求:應許副總要求為研發五處之ECR，改為林文淵經理簽核"	//20200506 Milla 15280 這個部門已失效了
        $('#senao111068_0').prop("disabled", false);
			}else{ 
        $('#senao111068_0').prop("disabled", true);
			}
		}else{
			alert("無此工號, 請重新輸入.");
			senao111003.value="";
			senao111003_t1.value="";
			senao111004.value = "";	
			senao111004_t1.value = "";
		}
	}else{
		senao111003.value = "";
		senao111003_t1.value = "";
		senao111004.value = "";	
		senao111004_t1.value = "";
	}
}
/**
 * Need to Modify Schematics 異動
 */
function senao111076_onchange(){ 
  if(senao111076.value =="Y"){
    //senao111025.disabled = true;//20251022 Dillan marked
    //senao111025.readOnly = true;//20251022 Dillan add
    $("#senao111025").prop("readOnly", true);
    senao111025.style.backgroundColor = "#ffffff"; //Reset to white //20251022 Dillan add
    senao111025.value = "";
  }else{
    //senao111025.disabled = false;//20251022 Dillan marked
    //senao111025.readOnly = false;//20251022 Dillan add
    $("#senao111025").prop("readOnly", false);
    senao111025.style.backgroundColor = "#fbf1c0"; //Remark //20251022 Dillan add
  }
}
/**Department
  *senao111004_onchange
*/
function senao111004_onchange(){
	applyDeptL4.value = findDeptLevel(senao111004.value, 4000);
}
/**
  *Importance
  *senao111007_onclick
*/
function senao111007_onclick(){   
	hdn_senao111007.value = $("#senao111007 option:selected").text();
  if(senao111007.value == "0"){  //急件
    urgentExplanation.style.display = '';         //顯示急件說明欄位
    $('#urgentExplanation').prop("disabled", false);
    $("#urgentExplanation").prop("readOnly", false);
  }else{
    urgentExplanation.style.display = 'none';     //隱藏急件說明欄位
    $('#urgentExplanation').prop("disabled", true);
    urgentExplanation.value = "";
  }
}
/**
  *Type:(ECR Change-0; ECN Change-1)
  *senao111010_onclick
*/
function senao111010_onclick(){   
	hdn_senao111010.value = $("#senao111010 option:selected").text();
	if(senao111010.value == "1"){  //ECN變更
    $("#senao111005").prop("readOnly", true);
		senao111005.style.backgroundColor="#ffffff";
    $("#senao111006").prop("readOnly", false);
		senao111006.style.backgroundColor="#fbf1c0";
		alert("請填[(C/N)]!");
	}
}
/**
  *BOM Modified
  *senao111012_onclick
*/
function senao111012_onclick(){
  ControlStatus_010_1();
}

/**
  *Attachment verified
  *senao111013_onclick
*/
function senao111013_onclick(){
  ControlStatus_010_1();
}
/**
  *Project Code- 依專案別代號帶出機種名稱
  *senao111071_onchange
*/
function senao111071_onchange(){ // Project Code onchange
	if (senao111071.value != ""){
		var aryTmp = senao111071.value.split("@@");
    if(aryTmp.length >= 2){
      senao111071.value = aryTmp[0];
      senao111071_t1.value = aryTmp[1];
      senao111014.value = senao111071_t1.value;
      senao111014_onchange();
    }else{
      var sqlid = "BPM_ERP_SENAO111_02";
      var tParm = new Array();
      //tParm.push(orgno);//20260107 Dillan marked
      //20260107 Dillan add(s)
      var ouno_temp = "";
      if (typeof processId !== "undefined" && processId == "CWO111"){
          tParm.push("86");
          ouno_temp = "82";
      }else{
          tParm.push(orgno);
          ouno_temp = ouno;
      }
      //20260107 Dillan add(e)
      var pData = ajaxGetData(invokeURL + sqlid, {
        ouno:tParm[0],
        senao111071:senao111071.value
      });
      if(pData[0].result == undefined){
        if ((pData[0].COUNT !=0 ||pData[0].COUNT == undefined )){  
          senao111071_t1.value = pData[0].DESCRIPTION;
          if (senao111014.value == ""){
            senao111014.value = senao111071.value; //Model Name = Prjoect Code
            senao111014_onchange();
          }
        }else{
          alert("無此[Project Code]/或不得使用衍生機種之[Project Code]，請重新輸入!");
          senao111071.value = "";
          senao111071_t1.value = "";
        }
      }else{
        alert("function:"+"senao111071_onchange" + " API:" + sqlid + " " + pData[0].result);
        return false;
      }
    }
  }else{
  senao111071_t1.value="";
  }
   return true;
}
/**
  *Model ID
  *senao111014_onchange
*/
function senao111014_onchange(){ //CheckFieldData.asp:988
	var aryTmp = senao111014.value.split("@@"); 
	if (aryTmp.length >= 2){
		senao111014.value = aryTmp[0];
		senao111014_t1.value = aryTmp[1];
	}else{
		if (senao111014.value=="NA"){
			senao111014.value="00";
		}
		var sqlid = "BPM_ERP_SENAO111_01";
		var tParm = new Array();
		tParm.push(senao111014.value);
    //20260107 Dillan add(s)
    var ouno_temp = "";
    if (typeof processId !== "undefined" && processId == "CWO111"){   
      ouno_temp = "82";
    }else{
      ouno_temp = ouno;
    }
    var pData = ajaxGetData(invokeURL + sqlid, {
      senao111014:tParm[0]
    });
    if(pData[0].result == undefined){
      if (pData.length > 0){
        senao111014_t1.value = fixNull(pData[0].DESCRIPTION);
      }else{
        alert("無此機種代碼，請重新輸入!!");
        senao111014.value = "";
        senao111014_t1.value = "";
        senao111014_t2.value = "";
        $("#senao111014_t2").prop("readOnly", true);
        $('#senao111014_t3').prop("disabled", true);
      }
    }else{
      console.log("function:"+"senao111014_onchange" + " API:" + "BPM_ERP_SENAO111_01 "+ pData[0].result);
      return false;
    }
    //20260107 Dillan add(e)
	}   
	if(senao111014.value == "00"){ 
    $("#senao111014_t2").prop("readOnly", false);                  //Other Model Name
		senao111014_t2.style.backgroundColor = "#fbf1c0";      
    $('#senao111014_t3').prop("disabled", false);                   //機種類別
	}else{
    $("#senao111014_t2").prop("readOnly", true);
		senao111014_t2.style.backgroundColor = "#ffffff";
		senao111014_t2.value = ""; 
    $('#senao111014_t3').prop("disabled", true);                   //機種類別
	}

	FindModelName_Customer(); //依 Model Name查客戶, 填入senao111087
	setOdmFieldStatus(senao111014.value, senao111003.value, senao111087.value);
	return true;
}
//依輸入的其它機種判斷是否為SNWL 機種
/**
  *other model name
  *senao111014_t2_onchange
*/
function senao111014_t2_onchange(){ //if Session("FormStatus") = "Create"
  if (activityId == "0001"){	//申請人關卡
    setOdmFieldStatus(senao111014_t2.value, senao111003.value, senao111087.value);
  }
}
/**
  *品牌Brand: (Own Brand-0; Custom Made-1)
  *senao111015_onclick
*/
function senao111015_onclick(){   
	hdn_senao111015.value = $("#senao111015 option:selected").text();
	ChkApproveDept();
}
/**
  *Reason of Change type:(Cost; Customer; Design; Material; Operation; Others; Phase out; Quality; Second)
  *senao111016_onchange
*/
function senao111016_onchange(){ //當點[Reason of change]時所作做的動作  
	hdn_senao111016.value = $('#senao111016 option:selected').html();   
	var senao111016_val = document.getElementById("senao111016").value.toUpperCase();  
	if (senao111016_val == "OTHERS"){
    $("#senao111018").prop("readOnly", false);
		senao111018.style.backgroundColor="#fbf1c0";
	}else{
    $("#senao111018").prop("readOnly", true);
		senao111018.style.backgroundColor = "#ffffff";
		senao111018.value = "";
	}
}
/**
  *Select Modify / Don't Modify Finished Goods
  *senao111020_onchange
*/
function senao111020_onchange(){ //CheckFieldData.asp:1757
	if (senao111020.value == "0"){     //Modify Finished Goods           
		senao111021.value = "0";	//Modify Semi-Finished Goods
	}
}
//' 說明: 變更方式: 3. Change after Inventory Exhausted、5. No EC needed 、6. 依 OE/工單變更
//'		自動帶出成品/半成品不修改,但可作勾選不Disabled
function senao111019_onchange(){    
	var strMethod = senao111019.value;
  if (strMethod == "0"){ //變更方式-立即變更
    //重要性為急件
    // senao111007_0.checked = false;
    // senao111007_1.checked = false;
    $("#senao111019_t1").prop("readOnly", true);
    senao111019_t1.value = "";
    senao111019_t1.style.backgroundColor = "#ffffff";
    $('#senao111019_t1').prop("disabled", true);
  }else if (strMethod == "1"){ //變更方式-依日期變更
    // senao111007_0.checked = false;
    // senao111007_1.checked = false;
    senao111019_t1.style.backgroundColor = "#fbf1c0";
    $('#senao111019_t1').prop("disabled", false);
    senao111019_t3.style.backgroundColor = "#ffffff";
  }else if (strMethod == "3"){ //變更方式-依製令變更
    // senao111007_0.checked = false;
    // senao111007_1.checked = false;
    $("#senao111019_t1").prop("readOnly", true);
    senao111019_t1.value = "";
    senao111019_t1.style.backgroundColor = "#ffffff";
    $('#senao111019_t1').prop("disabled", true);
  }else{
    // senao111007_0.checked = false;  //重要性Urgent
    // senao111007_1.checked = false;  //重要性Normal
    $("#senao111019_t1").prop("readOnly", true);
    senao111019_t1.value = "";        
    senao111019_t1.style.backgroundColor = "#ffffff";                
    $('#senao111019_t1').prop("disabled", true);
    
    if (senao111019.value == "2" || senao111019.value == "5" || senao111019.value == "6"){
        senao111020.value = "1";            
        senao111021.value = "1";            
    }else{
        senao111020.value = "";            
        senao111021.value = "";            
    }        
  }
  //RMA申請，依OE工單變更時，開放填寫order type及order number
  if (IsRMAApply() == true){	//是否為RMA單位申請
    if (senao111019.value == "6"){
      senao111019_t4.style.backgroundColor = "#fbf1c0";
      $("#senao111019_t4").prop("readOnly", false);
      senao111019_t2.style.backgroundColor = "#fbf1c0";
      $("#senao111019_t2").prop("readOnly", false);
      $('#senao111019_t4').prop("disabled", false);
    }else{
      senao111019_t4.style.backgroundColor = "#ffffff";
      $("#senao111019_t4").prop("readOnly", true);
      senao111019_t2.style.backgroundColor = "#ffffff";            
      $("#senao111019_t2").prop("readOnly", true);
      $('#senao111019_t4').prop("disabled", true);
      senao111019_t4.value = "";
      senao111019_t2.value = "";
    }
  }
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  for (var i = 0; i < tGrid1DataCount; i++){ //CheckFieldData.asp:1706
    if ((senao111019.value == "0" || senao111019.value == "6" || senao111019.value == "2")  && tGrid1Data[i]['SENAO111D011'] == "0" && tGrid1Data[i]['SENAO111D017'] != "替代料"){
      tGrid1Data[i]['SENAO111D021'] = onhand_QTY(tGrid1Data[i]['SENAO111D006']);
      tGrid1Data[i]['SENAO111D022'] = REQ_QTY(tGrid1Data[i]['SENAO111D006']);
      tGrid1Data[i]['SENAO111D023'] = PO_QTY(tGrid1Data[i]['SENAO111D006']);
      tGrid1Data[i]['SENAO111D024'] = RECEIVING_QTY(tGrid1Data[i]['SENAO111D006']);
      tGrid1Data[i]['SENAO111D026'] = BOM_COMP_QUANTITIES(tGrid1Data[i]['SENAO111D006'], tGrid1Data[i]['SENAO111D004']);
    }else{
      tGrid1Data[i]['SENAO111D021'] = "";
      tGrid1Data[i]['SENAO111D022'] = "";
      tGrid1Data[i]['SENAO111D023'] = "";
      tGrid1Data[i]['SENAO111D024'] = "";
      tGrid1Data[i]['SENAO111D026'] = "";
    }
    setGridData(0, tGrid1Data);
  }
  GetONHOLD_QTY();
}// end of senao111019_onchange()
/**
  *Method of Change: Production Order
  *senao111019_t3_onchange
*/
function senao111019_t3_onchange(){
  if (senao111019_t3.value != "" && senao111019_t3.value != "NA"){
    if (right(senao111019_t3.value,1) == ","){
      senao111019_t3.value = left(senao111019_t3.value, senao111019_t3.value.length-1);            
    }
    var aryWIP = senao111019_t3.value.split(",");
    for (var m = 0; m < aryWIP.length; m++){
      var dataArray =  ajaxGetData(invokeURL + "BPM_ERP_SENAO111_47", {
        ouno:ouno,
        aryWIP:aryWIP[m]
      }); 
      if(dataArray[0].result == undefined){
        if(dataArray.length <= 0){
          alert("製令單號:" + aryWIP[m] + "不存在，請重新確認!!");
          senao111019_t3.value = "";                
          break;
        }
      }else{
        console.log("function:"+"senao111019_t3_onchange" + " API:" + "BPM_ERP_SENAO111_47 "+ dataArray[0].result);
        return false;
      }
    }
  }
}
/**
  *Delete Reference 根據[刪]計算數量
  *gsenao111d013_onchange
*/
function gsenao111d013_onchange(){
  if (gsenao111d017.value == "替代料"){
    gsenao111d013.value = GetSubsDesc(gsenao111d004.value, gsenao111d006.value, gsenao111d013.value);
  }else{
		//20210220 Milla 取小數點後6位
		if (left(gsenao111d013.value, 1) == "*"){			
			var str_senao111d013 = "";
			str_senao111d013 = gsenao111d013.value.replace("*", "");
			str_senao111d013 = (parseFloat(fixEmptyTo0(str_senao111d013)).toFixed(6)).toString();			
			str_senao111d013 = "*" + str_senao111d013;			
			gsenao111d013.value = str_senao111d013;
		}		
    gsenao111d009.value = GetChangeQty(gsenao111d013.value);
		
		//20210220 Milla 取小數點後6位
		gsenao111d009.value = parseFloat(fixEmptyTo0(gsenao111d009.value)).toFixed(6);
    CalculateTotalQty();
  }
    
  if (gsenao111d013_blur("chg") == false){ //20190712James
    return false;
  }

  //***20180706 Milla 資訊服務申請單#7724 管制料號	
  //處理:"非替代料"(即新增), 且Add Quantity, Total Quantity After Change為大於0 且相等
  //由申請者自行選擇CCL(Y或N)
  setd029Status("");
  
  var hdnd013ary = gsenao111d013.value.split(",");
  var tmphdnd013str = "";
  for (var i = 0; i < hdnd013ary.length - 1; i++){
    if (tmphdnd013str != ""){
      tmphdnd013str += ",";
    }
    tmphdnd013str += "['" + (i + 1) + "','" + hdnd013ary[i] + "','" + gsenao111d004.value + "','" + gsenao111d006.value + "']";
  }
  hdn_gsenao111d013.value = "[" + tmphdnd013str + "]";

  return true;
}	//end of gsenao111d013_onchange Delete Reference
/**
  *Delete Reference
  *gsenao111d013_blur
  *param vSRC 
*/
function gsenao111d013_blur(vSRC){
    //判斷要刪除的零件是否存在
	var tmpAry = gsenao111d013.value.split(",");
	var i = 0;
	var j = 0;
	if (gsenao111d013.value != "" && left(gsenao111d013.value,1) != "*" && gsenao111d017.value == "非替代料"){
		if (right(gsenao111d013.value.trim(), 1) != ","){
			gsenao111d013.value = gsenao111d013.value + ",";
    }       
    var strDel = ""; 
    strDel =gsenao111d013.value;
    arystrAdd = strDel.split(",").map(s => s.trim()).filter(s => s != "").join(",");
    var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_24", {
      gsenao111d018:gsenao111d018.value,
      arystrAdd:arystrAdd
    });
    if(dataArray[0].result == undefined){
      var aryDelValue = new Array();
      if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )) {
        var strOraDelCount = dataArray.length;
        for (i = 0; i < strOraDelCount; i++){
          aryDelValue.push(fixNull(dataArray[i].CRD)); // component_reference_designator
        }
      }
      var aryEFDel = gsenao111d013.value.split(",");
      var strErrDel = "";
      for (var n = 0; n < aryEFDel.length - 1; n++){
        if (aryDelValue.length > 0){
          for (var intN = 0; intN < aryDelValue.length; intN++){
            if (aryDelValue[intN] == aryEFDel[n]){
              break;
            }else{
              if (intN == aryDelValue.length - 1){
                strErrDel = strErrDel + aryEFDel[n] + ",";
                break;
              }
            }
          }
        }else{
          strErrDel = strErrDel + aryEFDel[n] + ",";
        }
      }
      if (strErrDel != ""){
        if (vSRC == ""){ //因onchange event觸發時, 也會觸發onblur(先onchange後onblur), 因此加入vSRC flag來辨識, 以避免兩次alert
          // alert("Delete Reference -\n同一階層料號中查無此插件位置 [ " + left(strErrDel, strErrDel.length - 1) + " ].\n請移除.");
          showErrorMsg(useExcel,"Delete Reference -\n同一階層料號中查無此插件位置 [ " + left(strErrDel, strErrDel.length - 1) + " ].\n請移除.");//20241017 Neil
        }           
        //gsenao111d013.focus();
        return false; //20190712James
      }
    }else{
      console.log("function:"+"gsenao111d013_blur" + " API:" + "BPM_ERP_SENAO111_24 "+ dataArray[0].result);
      return false;
    }
		
		for (i = 0; i < tmpAry.length; i++){
			for (j = 1; j < tmpAry.length; j++){
				if (tmpAry[i].trim() != "" && tmpAry[j].trim() != "" && i != j){
					if (tmpAry[i].trim() == tmpAry[j].trim()){
						if (vSRC == ""){ //因onchange event觸發時, 也會觸發onblur(先onchange後onblur), 因此加入vSRC flag來辨識, 以避免兩次alert
							// alert("此次刪除的插件位置" + gsenao111d013.value + "中" + tmpAry[i].trim() + "有重覆");
              showErrorMsg(useExcel,"此次刪除的插件位置" + gsenao111d013.value + "中" + tmpAry[i].trim() + "有重覆");//20241017 Neil
						}
						//gsenao111d013.focus();
						return false; //20190712James
					}
				}				
			}
		}
  }else if (gsenao111d013.value != "" && left(gsenao111d013.value,1) != "*" && gsenao111d017.value == "替代料"){
		for (i = 0; i < tmpAry.length; i++){
			for (j = 1; j < tmpAry.length1; j++){
				if (tmpAry[i].trim() != "" && tmpAry[j].trim() != "" && i != j){
					if (tmpAry[i].trim() == tmpAry[j].trim()){
						if (vSRC == ""){
							// alert("此次刪除的替代料" + gsenao111d013.value + "中" + tmpAry[i].trim() + "有重覆");
              showErrorMsg(useExcel,"此次刪除的替代料" + gsenao111d013.value + "中" + tmpAry[i].trim() + "有重覆");//20241017 Neil
						}					
						//gsenao111d013.focus();
						return false; //20190712James
					}
				}				
			}
		}
	}
  if (gsenao111d013.value != "" && strBlur_senao111d013 != ""){ //CheckFieldData.asp:2878
    strBlur_senao111d013 = "";
    gsenao111d013.value = gsenao111d013.value.replace(/\n/g,"").trim();
    if (gsenao111d017.value == "替代料"){
      gsenao111d013.value = GetSubsDesc(gsenao111d004.value, gsenao111d006.value, gsenao111d013.value);
    }else{
      //20210220 Milla 取小數點後6位
      if (left(gsenao111d013.value, 1) == "*"){			
        var str_senao111d013 = "";
        str_senao111d013 = gsenao111d013.value.replace("*", "");
        str_senao111d013 = (parseFloat(fixEmptyTo0(str_senao111d013)).toFixed(6)).toString();			
        str_senao111d013 = "*" + str_senao111d013;			
        gsenao111d013.value = str_senao111d013;
      }
      
      //20210220 Milla 取小數點後6位
      gsenao111d009.value = GetChangeQty(gsenao111d013.value);
      gsenao111d009.value = parseFloat(fixEmptyTo0(gsenao111d009.value)).toFixed(6);
      CalculateTotalQty();
    }
  }
  return true; //20190712James
}	//end of gsenao111d013_blur() Delete Reference
/**
  *comment欄位取代斷行字元, 雙引號換為單引號
  *gsenao111d015_onchange
*/
function gsenao111d015_onchange(){
	var comment = gsenao111d015.value;
  gsenao111d015.value = comment.replace(/\n/g, "").replace(/\"/g, "'");
}	//end of gsenao111d015_onchange comment欄位
/**
  *廠商先行備料
  *gsenao111d025_onchange
*/
function gsenao111d025_onchange(){
	var re = /^[0-9]+$/;
  if (re.test(gsenao111d025.value) == false){
  alert("請輸入半形數字!");
      gsenao111d025.value = "";
  }
}	//end of gsenao111d025_onchange	廠商先行備料
/**
 * 上階料號 Assembly Level Part Number
 * gsenao111d004_onchange
*/
function gsenao111d004_onchange(){
  if (senao111019.value == ""){
      gsenao111d004.value = "";
      gsenao111d005.value = "";
      alert("請先選擇 Method of Change!");
      return true;
  }
  if (gsenao111d004.value != ""){
    var aryTmp = gsenao111d004.value.split("@@");
    if (aryTmp.length >= 2){
      gsenao111d004.value = aryTmp[0];
      gsenao111d005.value = aryTmp[1];
    }else{
      var tParams = [orgno, gsenao111d004.value];
      var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_03", {
        orgno:tParams[0],
        gsenao111d004:tParams[1]
      });
      if(dataArray[0].result == undefined){
        if (dataArray.length > 0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
          gsenao111d005.value = fixNull(dataArray[0].DESCRIPTION);
        }else{
          // alert("上階料號 [" + gsenao111d004.value + "] 輸入錯誤，錯誤原因:\n1) M-BOM查無此上階料號\n2) 請確認是否為 E-BOM狀態");
          showErrorMsg(useExcel,"上階料號 [" + gsenao111d004.value + "] 輸入錯誤，錯誤原因:\n1) M-BOM查無此上階料號\n2) 請確認是否為 E-BOM狀態");//20241017 Neil
          gsenao111d004.value = "";
          gsenao111d005.value = "";
          return false;
        }
      }else{
        console.log("function:"+"gsenao111d004_onchange" + " API:" + "BPM_ERP_SENAO111_03 "+ dataArray[0].result);
        return false;
      }
    }
    //20260114 Dillan add(s)
    if (check_is_com_bom(gsenao111d004.value)&& processId == "CWO111"){
      var itemNo = gsenao111d004.value;  // 先存起來
      gsenao111d004.value = "";
      gsenao111d005.value = "";
      alert(itemNo+ "屬Common Bom，ORG僅限IC BU，請至SENAO131 (EBOM ECR/ECN Form)填單");
      return;
    }
    //20260114 Dillan add(e)
    var strItemSts = FindItemStatus(left(gsenao111d004.value, 12));
    if ("H;P".indexOf(strItemSts) >= 0){
      var strmsg = "";
      if (strItemSts == "H"){
          strmsg = "Hold";
      }else if (strItemSts == "P"){
          strmsg = "P";
      }
      // alert("此料號已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC");
      showErrorMsg(useExcel,"此料號已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC");//20241017 Neil
      gsenao111d004.value = "";
      gsenao111d005.value = "";
      gsenao111d011.value = "";
      gsenao111d012.value = "";
      gsenao111d013.value = "";
      gsenao111d015.value = "";
      hdn_gsenao111d013.value = "[]";
      return false;
    }else{
      var str = ChkPhaseOut(left(gsenao111d004.value, 12));    //本階, CheckFieldData.asp:1870
      if (str != ""){
        if (left(str, 2) == "D;" || left(str, 1) == "O" || left(str, 1)=="L"){
          // alert(right(str, str.length - 2));
          showErrorMsg(useExcel,right(str, str.length - 2));//20241017 Neil
          gsenao111d004.value = "";
          gsenao111d005.value = "";
          gsenao111d011.value = "";
          gsenao111d012.value = "";
          gsenao111d013.value = "";
          gsenao111d015.value = "";
          hdn_gsenao111d013.value = "[]";
          return false;
        }
      }
    }
    var tParams1 = [gsenao111d004.value, orgno];	
    var dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_29", {
    gsenao111d004:tParams1[0],
    orgno:tParams1[1]
    })
    if(dataArray2[0].result == undefined){
      if (dataArray2.length > 0){
          gsenao111d020.value = fixNull(dataArray2[0].BILL_SEQUENCE_ID);
      }else{
        gsenao111d020.value = "";
      }
    }else{
      console.log("function:"+"gsenao111d004_onchange" + " API:" + "BPM_ERP_SENAO111_29 "+ dataArray2[0].result);
      return false;
    }
  }else{
    gsenao111d004.value = "";
    gsenao111d005.value = "";
  }
  gsenao111d011.value = "";
  gsenao111d012.value = "";
  gsenao111d013.value = "";
  gsenao111d015.value = "";
  hdn_gsenao111d013.value = "[]";
  
  if (gsenao111d004.value != "" && gsenao111d006.value != ""){ //CheckFieldData.asp:1895
    FindBOMData(); //CheckFieldData.asp:1896
    CalculateTotalQty();
    if ((senao111019.value == "0" || senao111019.value == "6" || senao111019.value == "2") && gsenao111d011.value == "0"){
      gsenao111d026.value = BOM_COMP_QUANTITIES(gsenao111d006.value, gsenao111d004.value);
    }
  }
  //11XXAXXXXXXX(11成品料號)若有W料號，則提示是否EC W料號，系統不自動EC
  if (left(gsenao111d004.value, 2) == "11" && gsenao111d004.value.substr(4, 1) == "A"){
    var strWItem = gsenao111d004.value.replace("A", "W"); //CheckFieldData.asp:1905, 將A料號置換成W料號
    var tParams2 = [strWItem, orgno];
    var dataArray2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
      strCOMP_NO:tParams2[0],
      orgno:tParams2[1]
    })
    if(dataArray2[0].result == undefined){
      if ((dataArray2[0].COUNT !=0 ||dataArray2[0].COUNT == undefined ) && dataArray2.length > 0){
        alert("料號" + gsenao111d004.value + "申請EC，查有" + strWItem + "料號，請確認是否有需EC");
        return false;
      }
    }else{
      console.log("function:"+"gsenao111d004_onchange" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray2[0].result);
      return false;
    }
  }
  return true;
} // end of gsenao111d004_onchange() 上階料號
/**
  * Part Number 本階料號輸入後的資料配置
  * gsenao111d006_onchange
 */
function gsenao111d006_onchange(){//本階料號輸入後
	gsenao111d012.value = ""; //add ref
	gsenao111d013.value = ""; //del ref
	gsenao111d015.value = ""; //comment
	gsenao111d028.value = ""; //ECO Number

	gsenao111d017[0].selected = true;
	$("#gsenao111d012").prop("readOnly", false);
	$("#gsenao111d013").prop("readOnly", false);
	gsenao111d012.style.backgroundColor = "#fbf1c0";
	$('#gsenao111d012_b1').prop("disabled", false);
	gsenao111d013.style.backgroundColor = "#fbf1c0";
	$('#gsenao111d013_b1').prop("disabled", false);
	$('#gsenao111d029').prop("disabled", true);
	GetONHOLD_QTY();
	setd029Status("");

	hdn_gsenao111d013.value = "[]";
	if (gsenao111d006.value != ""){
		var aryTmp = gsenao111d006.value.split("@@");
		if (aryTmp.length >= 2){
			gsenao111d006.value = aryTmp[0];                    //下階料號          
			gsenao111d007.value = aryTmp[1].replace(/\"/g,"'"); //下階品名
			gsenao111d010.value = aryTmp[2];                    //變更前數量
			gsenao111d014.value = aryTmp[3];                    //OP_CODE          
			// gsenao111d015.value = aryTmp[4].replace(/\"/g,"'"); //COMMENT
			gsenao111d018.value = aryTmp[5];                    //component_sequence_id
			// gsenao111d020.value = aryTmp[6];                    //bill_sequence_id
			//判斷使用者是否將替代料輸入成主料/Phoebe20101202
			if ((gsenao111d010.value == "0" || gsenao111d010.value == "0.0") && gsenao111d018.valule != ""){
				//開放替代料與主料可同時申請/Phoebe.20131023
				gsenao111d028.value = "ECO-2";
				return true; //20190712James fixed, should be true
			}
		}else{
			if (FindBOMData() == false){
				return false;
			}
		}
	}else{
		ClearGridActionRowData("");
	}
	CalculateTotalQty();      //將總數歸0
	GetONHOLD_QTY();
  if(excelinput==false){
    getItemWhereUsed(gsenao111d006.value);//20231215 Calvin
  }
	
	return true;
}// end of gsenao111d006_onchange 本階料號
/**
  *Add Reference 根據[增]計算數量Add Ref onchange
  *gsenao111d012_onchange
*/
function gsenao111d012_onchange(){ //CheckFieldData.asp:3050  strSenao111d012
  var strSenao111d012 = gsenao111d012.value;
  var senao111d012PN;
  var strErrFlag = false;
  
  gsenao111d012.value = strSenao111d012.replace(/[\n\r]/g,"").trim();
  senao111d012PN = gsenao111d012.value;
  if (gsenao111d017.value == "替代料"){
    gsenao111d012.value = GetSubsDesc(gsenao111d004.value, gsenao111d006.value, gsenao111d012.value);//加入description
    if (gsenao111d012.value.indexOf("-ERR") >= 0){
      gsenao111d012.value = "";
      return false;
    }
  }else{		
    //20210220 Milla 取小數點後6位
    if (left(strSenao111d012, 1) == "*"){
      strSenao111d012 = strSenao111d012.replace("*", "");			
      strSenao111d012 = (parseFloat(fixEmptyTo0(strSenao111d012)).toFixed(6)).toString();
      strSenao111d012 = "*" + strSenao111d012;
      gsenao111d012.value = strSenao111d012;
    }
		
    gsenao111d008.value = GetChangeQty(strSenao111d012);
		
		//20210220 Milla 取小數點後6位
		gsenao111d008.value = parseFloat(fixEmptyTo0(gsenao111d008.value)).toFixed(6);
    CalculateTotalQty();
  }

  var aryAddRef = gsenao111d012.value.split(",");
  var strRef = "";
  if (aryAddRef.length >= 1 && gsenao111d017.value == "替代料"){ //CheckFieldData.asp:3163
    var AsmStatus = "";
    AsmStatus = FindItemStatus(gsenao111d004.value);	//上階料號狀態
    for (var m = 0; m < aryAddRef.length - 1; m++){
      var AddItemID = ""; //替代料號ID
      var tParams = [left(aryAddRef[m], 12), orgno];
      var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_36", {
        strCOMP_NO:tParams[0],
        orgno:tParams[1]
      })
      if(dataArray[0].result == undefined){
        if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined ) && dataArray.length > 0){
          AddItemID = fixNull(dataArray[0].INVENTORY_ITEM_ID);
        }
      }else{
        console.log("function:"+"gsenao111d012_onchange" + " API:" + "BPM_ERP_SENAO111_36 "+ dataArray[0].result);
        return false;
      }

      //檢查替代料是否已EOL
      var strItemSts = FindItemStatus(left(aryAddRef[m], 12));
      if ("H;P".indexOf(strItemSts) >= 0){
        var strmsg;
        if(strItemSts == "H"){
          strmsg = "Hold";
        }else if(strItemSts == "P"){
          strmsg = "P";
        }
        strRef = strRef + strmsg + "料號(" + left(aryAddRef[m], 12) + ")已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC\n";
        strErrFlag = true;
      }else{
        var str = ChkPhaseOut(left(aryAddRef[m], 12));
        if (str!=""){
          if (left(str, 1) == "D" || left(str, 1) == "L" || left(str, 1) == "O"){
            strRef = strRef + right(str, str.length - 2) + "\n";
            strErrFlag = true;
          }
        }
      }
        
      var getchkIsMbom_ItemNoStatus_Add = false;	//替代料號是否符合狀態規則			
      getchkIsMbom_ItemNoStatus_Add = chkIsMbom_ItemNoStatus(gsenao111d004.value, left(aryAddRef[m], 12));			
      if (!getchkIsMbom_ItemNoStatus_Add){
        if (AsmStatus == "Active"){
          strRef = strRef + "上階料號(" + gsenao111d004.value + ")承認狀態為 : Active\n, 新增替代料，全部都要是Active!";
          strErrFlag = true;
        }
        if (AsmStatus == "PVT"){
          strRef = strRef + "上階料號(" + gsenao111d004.value + ")承認狀態為 : PVT\n, 新增替代料，除ID,ME,5730料號可為S4/A/C, 其餘皆需 C/A/PVT!";
          strErrFlag = true;
        }
      }
    }
    if(strRef != ""){
      // alert(strRef);
      showErrorMsg(useExcel,strRef);
      if(strErrFlag == true){
        ClearGridActionRowData("012");
      }
      strD012 = strSenao111d012;
      return false; //James20190710
    }
  }

    //20180706 Milla 資訊服務申請單#7724 管制料號	
    //處理:"非替代料"(即新增), 且Add Quantity, Total Quantity After Change為大於0 且相等
    //由申請者自行選擇CCL(Y或N)
  setd029Status("");
  return true;
}	// end of gsenao111d012_onchange() Add Reference
/**
  *單身欄位[處理] onChange
  *非替代料" --> 重新計算[增加數]、[刪減數]
  *替代料"  --> 重新依上階+本階取得[變更前]
  *Disable" --> 重新依上階+本階取得[變更前],[增]、[刪]Disable不允許填寫。
  *gsenao111d017_onchange
*/
function gsenao111d017_onchange(){ //CheckFieldData.asp:3774    
  gsenao111d012.value = "";
  gsenao111d013.value = "";
  $("#gsenao111d012").prop("readOnly", false);
  $("#gsenao111d013").prop("readOnly", false);
  gsenao111d012.style.backgroundColor = "#fbf1c0";
  $('#gsenao111d012_b1').prop("disabled", true);
  gsenao111d013.style.backgroundColor = "#fbf1c0";
  $('#gsenao111d013_b1').prop("disabled", true);
  $('#gsenao111d029').prop("disabled", true); 
    
  if (gsenao111d017.value == "非替代料"){
    gsenao111d012_onchange();
    gsenao111d013_onchange();
    $('#gsenao111d012_b1').prop("disabled", false);
    $('#gsenao111d013_b1').prop("disabled", false);
    GetONHOLD_QTY();

  }else if (gsenao111d017.value == "替代料"){
    // 重新依上階+本階取得[變更前]
    var keep017Idx = gsenao111d017.selectedIndex;
    gsenao111d006_onchange();
    gsenao111d017[keep017Idx].selected = true;
    CalculateTotalQty();
    gsenao111d021.value = ""; //庫存數    
    gsenao111d022.value = ""; //在途PR數
    gsenao111d023.value = ""; //在途PO數
    gsenao111d024.value = ""; //待驗數    
    gsenao111d026.value = ""; //使用機種
    $('#gsenao111d012_b1').prop("disabled", false);
    $('#gsenao111d013_b1').prop("disabled", false);
  }else if (gsenao111d017.value == "Disable"){
    var keep017Idx = gsenao111d017.selectedIndex;
    gsenao111d006_onchange();
    gsenao111d017[keep017Idx].selected = true;
    CalculateTotalQty();
    GetONHOLD_QTY();
    $("#gsenao111d012").prop("readOnly", true);
    $("#gsenao111d013").prop("readOnly", true);
    gsenao111d012.style.backgroundColor = "#ffffff";
    gsenao111d013.style.backgroundColor = "#ffffff";
    $('#gsenao111d012_b1').prop("disabled", true);
    $('#gsenao111d013_b1').prop("disabled", true);
  }
  //20180706 Milla 資訊服務申請單#7724 管制料號	
  setd029Status("");
}	//end of  gsenao111d017_onchange 單身欄位[處理]
/**
  *Add Reference
  *gsenao111d012_onblur
*/
function gsenao111d012_onblur(){
    //alert("gsenao111d012_onblur");
	if (gsenao111d012.value == strD012 && strD012 != ""){
    gsenao111d012_onchange();
    strD012 = "";
  }
  var strAdd;
  var strErrAdd;
	var arystrAdd;
	var aryItemNo;
	var i, j;
  //判斷要新增的零件是否已存在
  if (gsenao111d012.value != "" && left(gsenao111d012.value, 1) != "*" && (gsenao111d017.value == "非替代料" || gsenao111d017.value == "替代料")){
    {	//區塊符號
			//1.以下是先判斷是否在MBOM裡有存在插件位置或替代料
			//2.再檢查是否有在此次申請中有刪除該插件位置或替代料，如果有刪除，則可以再新增
			if (gsenao111d017.value == "非替代料"){
				strAdd = gsenao111d012.value;            
				arystrAdd = strAdd.split(",").map(s => s.trim()).filter(s => s != "").join(",");
				var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_23", {
          gsenao111d020:gsenao111d020.value,
          orgno:orgno,
          arystrAdd:arystrAdd
        })
        if(dataArray[0].result == undefined){
          strErrAdd = "";
          if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )) {
            var dataCount = dataArray.length;
            for (i = 0; i < dataCount; i++){
              if(strErrAdd.indexOf(fixNull(dataArray[i].COMPONENT_REFERENCE_DESIGNATOR) + ",") < 0){
                strErrAdd = strErrAdd + fixNull(dataArray[i].COMPONENT_REFERENCE_DESIGNATOR) + ",";
              }
            }
          }
        }else{
          console.log("function:"+"gsenao111d012_onblur" + " API:" + "BPM_ERP_SENAO111_23 "+ dataArray[0].result);
          return false;
        }
			}else if (gsenao111d017.value == "替代料"){//判斷新增替代料是否重複
				// 組成逗號分隔字串
        var aryItem = gsenao111d012.value.trim().split(",")
            .map(s => s.split("-")[0].trim())  // 取 "-" 前面的部分
            .filter(s => s != "");             // 過濾空字串

        var strAdd = aryItem.join(",");  
        // 結果："72E057610400,72E057610401"
				var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_48", {
          gsenao111d018:gsenao111d018.value,
          orgno:orgno,
          strAdd:strAdd
        })
        if(dataArray[0].result == undefined){
          strErrAdd = "";
          if ((dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )) {
            var dataCount = dataArray.length;
            for (i = 0; i < dataCount; i++){
              if (strErrAdd.indexOf(fixNull(dataArray[i].SUB_COMP)) < 0){
                strErrAdd = strErrAdd + fixNull(dataArray[i].SUB_COMP);
              }
            }
          }
        }else{
          console.log("function:"+"gsenao111d012_onblur" + " API:" + "BPM_ERP_SENAO111_48 "+ dataArray[0].result);
          return false;
        }
			}
			strErrAdd = FindGridAdd(gsenao111d004.value, strErrAdd); 	//判斷Grid中是否有同一階層料號插件位置已刪除，若已刪除則可再做新增
			if (strErrAdd != ""){
				// alert("同一階層料號中有重覆的插件位置 [ " + left(strErrAdd,strErrAdd.length - 1) + " ]。");
        showErrorMsg(useExcel,"同一階層料號中有重覆的插件位置 [ " + left(strErrAdd,strErrAdd.length - 1) + " ]。"); //20241017 Neil
				gsenao111d012.value = "";
				gsenao111d012.focus();
				return false;
			}
		}//End of 區塊符號
		
    //檢核新增/刪除插件位置是否重複/Phoebe.20140108
    if (gsenao111d013.value != ""){
      if (right(gsenao111d012.value.trim(), 1) != ","){
        gsenao111d012.value = gsenao111d012.value + ",";
      }
      if (right(gsenao111d013.value.trim(), 1) != ","){
        gsenao111d013.value = gsenao111d013.value + ",";
      }
      var aryAdd = gsenao111d012.value.split(",");
      var aryDel = gsenao111d013.value.split(",");
      for (var m = 0; m < aryAdd.length - 1; m++){
        for (var n = 0; n < aryDel.length - 1; n++){
          if (aryAdd[m] == aryDel[n]){
            // alert("插件位置(" + aryAdd[m] + ")重覆,請重新確認填寫");
            showErrorMsg(useExcel,"插件位置(" + aryAdd[m] + ")重覆,請重新確認填寫");//20241017 Neil
            gsenao111d012.select();
            return false;
          }
        }
      }
    }
		
    //判斷同階層新增不同本階料號的插件位置有重覆/Phoebe.20140108
    var strAddDateErr = CHKAddData(gsenao111d004.value, gsenao111d006.value, gsenao111d012.value); 
    if (strAddDateErr != ""){
      // alert(strAddDateErr);
      showErrorMsg(useExcel,strAddDateErr);//20241017 Neil
      gsenao111d012.select();
      return false;
    }
		
		//判斷新增該欄位的插件/替代料有重覆
    if (gsenao111d017.value == "非替代料"){
			strAdd = gsenao111d012.value;
			arystrAdd = strAdd.split(",");
			for (i = 0; i < arystrAdd.length; i++){
				for (j = 1; j < arystrAdd.length; j++){
					if (arystrAdd[i].trim() != "" && arystrAdd[j].trim() != "" && i != j){
						if (arystrAdd[i].trim() == arystrAdd[j].trim()){
							// alert("此次新增的插件位置" + strAdd + "中" + arystrAdd[i].trim() + "有重覆");
              showErrorMsg(useExcel,"此次新增的插件位置" + strAdd + "中" + arystrAdd[i].trim() + "有重覆");//20241017 Neil
							gsenao111d012.select();//20241017 Neil
							return false;
						}
					}
				}
			}
		}
		if (gsenao111d017.value == "替代料"){
			strAdd = gsenao111d012.value;			
			arystrAdd = strAdd.split(",");
			var aryItemNo1,aryItemNo2;
			for (i = 0; i < arystrAdd.length; i++){
				for (j = 1; j < arystrAdd.length; j++){
					if (arystrAdd[i].trim() != "" && arystrAdd[j].trim() != "" && i != j){
						aryItemNo1 = arystrAdd[i].split("-");
						aryItemNo2 = arystrAdd[j].split("-");					
						if (aryItemNo1[0].trim() == aryItemNo2[0].trim()){
							// alert("此次新增的替代料" + strAdd + "中" + aryItemNo1[0].trim() + "有重覆");
              showErrorMsg(useExcel,"此次新增的替代料" + strAdd + "中" + aryItemNo1[0].trim() + "有重覆");//20241017 Neil
							gsenao111d012.select();
							return false;
						}
					}
				}
			}
		}
  }
  return true;
} // end of senao111d012_onblur()	Add Reference
/**
  *Delete Reference
  *gsenao111d013_onblur
*/
function gsenao111d013_onblur(){
  gsenao111d013_blur("");
}
/**
 * [Grid] 新增資料
 */
function btnGrid1Add_onclick() {
  var errorMsg = "";
  errorMsg = chkInsGridData("") ; //檢查欄位是否有空
  if (errorMsg == true){    
    gridaddRow(0);
    clearBinding(0); //新增後清除Binding欄位資料

    initGridRow();
    hdn_gsenao111d013.value = "[]";
    $('#form_org').prop("disabled", true);
  }
  return true;
}
/**
 * [Grid] 修改資料
 */
function btnGrid1Edit_onclick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
    alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
    return false;
  }
  if (gsenao111d004.value != "" && gsenao111d006.value != ""){
    if (activityId == "0001"){	//填單人關卡
      var errorMsg = "";
      errorMsg = chkInsGridData(tGridIndex);//檢查欄位是否有空
      if (errorMsg == true) {
        grideditRow(0);
        clearBinding(0); //新增後清除Binding欄位資料
        refreshRowNo(0, 'SENAO111D003');//重新計算單身Grid項次
        //document.getElementById("Grid1").value= Grid1Obj.toArrayString();  //將新的資料存入Grid隱藏欄位中  
        $("#" + frmGridList[0].gid).jqGrid("resetSelection");
        hdn_gsenao111d013.value = "[]";
      }
    }else{
      alert('請先選擇下方一筆資料再做編輯');
      return false;
    }
  }else{
    alert('Assembly Level OR Part Number不得為空');
    return false;
  }
  $('#form_org').prop("disabled", true);
}
/**
 * [Grid] 刪除資料
 */
function btnGrid1Del_onclick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
    alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
    return false;
  }
  griddeleteRow(0); //將Grid某筆資料刪除
  clearBinding(0);
  refreshRowNo(0, 'SENAO111D003');//重新計算單身Grid項次
  initGridRow();
  hdn_gsenao111d013.value = "[]";
  if (getGridData(0).length > 0) {
    $('#form_org').prop("disabled", true);
  } else {
      $('#form_org').prop("disabled", false);
  }
  $("#" + frmGridList[0].gid).jqGrid("resetSelection");
  return true;
}
/**
  *Excel匯入
  *btnUploadXls_onclick
*/
function btnUploadXls_onclick(){
  if (senao111019.value == ""){        
    alert("請先選擇 Method of Change!");
    return true;
  }
  // //表單Grid名稱 
  var tFormGridName = "Grid1";   
	//檢查表單是否有Grid,若沒有的話不讓匯入Excel資料   	  	
	if (tFormGridName != "") {
    if (uuid == ""){
      uuid = genUuid();//產生UUID	
      console.log(uuid);
    }
    // 開啟自製 Modal，取代原本 openDialog(batchUploaderString,...)
    resetExcelModal();
    $("#excelUploadModal").modal("show");
    /*
    var rootPath = getRootPath();
    var batchUploaderString = encodeURI(rootPath + '/NaNaWeb/CustomSNO/jsp/FileUpload.jsp?uuid=' + uuid +'&processserialnumber=&formserialnumber=');
    openDialog(batchUploaderString, '480', '250', 'titlebar,scrollbars,status,resizable');    	*/
	} else {      	
		alert("沒有Grid資料無法匯入！");
  }
}	//end of btnUploadXls_onclick Excel匯入
function excelUp_onclick(){//確定按鈕
  if ($("#excelfile").val() == "") {
    alert("請先選擇 Excel 檔案！");
    return;
  }
  // 檢查副檔名是否為 Excel
  var fileName = $("#excelfile")[0].files[0].name;
  var fileExt = fileName.split('.').pop().toLowerCase();
  if (fileExt !== "xlsx" && fileExt !== "xls") {
    alert("檔案格式錯誤，請選擇 Excel 檔案（.xlsx 或 .xls）！");
    return;
  }
  var files = $("#excelfile")[0].files;
  $("#excelUploadModal").modal("hide");
  var fileReader = new FileReader();
  fileReader.onload = function (ev) {
    var persons = [];
    try {
      var data = ev.target.result;
      var workbook = XLSX.read(data, {
        type: "binary",
        cellDates: true,
        cellText: false
      });
      var rowrange = 2;
      // 若有 AMAZONSUS204 旗標，從第 0 行開始
      if (typeof AMAZONSUS204 !== "undefined" && AMAZONSUS204 == "Y") {
        rowrange = 0;
      }
      for (var sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          persons = persons.concat(
            XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
              blankRows: false,
              defval: null,
              range: rowrange,
            })
          );
          break; // 只取第一張工作表
        }
      }
    } catch (e) {
      alert("檔案格式錯誤，請選擇正確的 Excel 檔案！");
      return;
    }

   // $("body").loading({ message: "Working...", theme: "dark" });

    setTimeout(function () {
      console.log("uuid:", uuid);
      console.log("excel data:", persons);

      // ↓↓↓ 在此補上你的資料處理邏輯 ↓↓↓
      //upExcel(persons);
      // ↑↑↑─────────────────────────────
      displayExcelImportData();
      //$("body").loading("stop");
    }, 500);
  };

  fileReader.readAsBinaryString(files[0]);
}
//抓取匯入excel或抓外部寫入的資料
function btnImportTemp_onclick() {
  var sqlId = "BPM_SENAO111_80";
  var tParams = [];
  var data = [];    
  tParams.push(uuid);
  data = ajaxGetData(invokeURL + sqlId, {
    uuid:tParams[0]
  })
  console.log(data);
  if(data[0].result == undefined){
    if (data.length > 0) {
      loadExcelData("Grid1", data);        
    }  
  }else{
    alert("function:"+"btnImportTemp_onclick" + " API:" + sqlId+" "+ dataArray[0].result);
    return false;
  }
}
function resetExcelModal() {
  $("#excelfile").val("");
  $('#excelfile').prop("disabled", false);
  $('#excelUp').prop("disabled", false);
  $('#excelUploadCancel').prop("disabled", false);
}
/**
 *匯出EXCEL
 *btnExportXls_onclick
*/
function btnExportXls_onclick(){
  var tGrid1Data = getGridData(0); 
  if (tGrid1Data.length > 0) {
    /*
    var tLabel = "序號,異常,Assembly Level Part Number,Assembly Level Part's Name,Part Number,Part's Name,"+
                  "處理,版本,Add Qty,Del Qty,Total Qty Before Change,Total Qty After Change,Add Ref.,Del Ref,"+
                  "OP CODE,COMMENT,id,BILLid,庫存數,在途PR數,在途PO數,待驗數,廠商先行備料,使用機種,起始導入製令單號,"+
                  "ECO_Number,管制料號,錯誤訊息";  //Grid欄位名稱  
    */
    var tLabel = "";
    /*
    var tLabelCount = Grid1Obj._headerText1.length;
    for (var i = 0; i < tLabelCount; i++){
      if (tLabel != ""){
        tLabel += ",";
      }
      tLabel += Grid1Obj._headerText1[i];
    }      */
    let colModel = $("#" + frmGridList[0].gid).jqGrid("getGridParam", "colModel");
    for (var i = 0; i < colModel.length; i++) {
      if (tLabel != "") {
        tLabel += ",";
      }
      tLabel += colModel[i].label;  // 取得欄位標題
    }
    //tLabel=encodeURIComponent(tLabel);      	
    //tLabel = encodeURI(tLabel);
    //var tLabelIdx = encodeURI("0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26");		
    if(!excelIsOk){
      var indexArray = [2, 4, 6, 12, 13, 15, 26, 27];
    }else{
      var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    }
    /*
    var tLabelIdx = indexArray.join(",");
    tFunction = 'Grid1';   //Grid代號
    var tForm = document.forms[0];
    var tNaNaAction = document.forms[0].action;
    //tForm.action = " /CustomWeb/ExportExcelServlet.excel?hdnFunction=" + tFunction + "&hdnLabel=" + tLabel;
    //tForm.action = " /NaNaWeb/CustomSNO/jsp/SENAO111/exportXLS.jsp?hdnFunction=" + tFunction + "&hdnLabel=" + tLabel + "&hdnLabelIdx=" + tLabelIdx;
    var rURL = "/NaNaWeb/CustomSNO/jsp/SENAO111/exportXLS.jsp?hdnFunction=" + tFunction + "&hdnLabelIdx=" + tLabelIdx;
    tForm.action = rURL;		
    tForm.method = "post";
    var input = document.createElement('input');//prepare a new input DOM element
    input.setAttribute('name', 'hdnLabel');//set the param name
    input.setAttribute('value', tLabel);//set the value
    input.setAttribute('type', 'hidden');//set the type, like "hidden" or other
    tForm.appendChild(input); 

    tForm.submit();
    tForm.action = tNaNaAction;
    tForm.removeChild(input);*/
    // 只取 indexArray 對應的欄位定義
    var selectedCols = indexArray.map(function(i) {
      return colModel[i];
    }).filter(Boolean);

    // 組成匯出資料（用 label 當表頭，name 取值）
    var exportData = tGrid1Data.map(function(row) {
      var newRow = {};
      selectedCols.forEach(function(col) {
        newRow[col.label] = row[col.name];
      });
      return newRow;
    });

    // SheetJS 產生 Excel 並下載
    var ws = XLSX.utils.json_to_sheet(exportData);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "export.xlsx");
  }
  else {
    alert("查無資料!!");
  }
}
/**
 *列印按鈕
 *btn_Print_onclick
*/
function btn_Print_onclick(){
  window.open("/NaNaWeb/CustomSNO/jsp/SENAO111/SENAO111_Print.jsp?formserialnumber=" + FormNo, "", "width=1200,height=900,menubar=yes,scrollbars=yes,location=no,resizable=yes");
}

/*---------------------欄位onChange、onClick Function Start--------------*/