//var formId = 'SENAO014'
var pWidth = 720;
var pHeight = 620;
/*---------------------公用變數 Start--------------*/
var Apply_Level2_Manager = document.getElementById("Apply_Level2_Manager");     //申請人二階主管
var ApplyType = document.getElementById("ApplyType"); //Apply Type
var AssignDeptNo = document.getElementById("AssignDeptNo");     //指派人員的部門
var BaseCurrency = document.getElementById("BaseCurrency"); //本幣別(顯示用) //20250715
var btn_Prepay = document.getElementById("btn_Prepay"); //查看採購單資料按鈕
var btn_Print = document.getElementById("btn_Print"); //列印請款單按鈕
var btn_Query = document.getElementById("btn_Query"); //查看採購單資料按鈕
var btn_Queryd = document.getElementById("btn_Queryd"); //查看公出單資料按鈕
var btnExportXls_Grid3 = document.getElementById("btnExportXls_Grid3"); //匯出
var buyer_id = document.getElementById("buyer_id"); //採購員ID
var CompanyCurrency;      //公司的本幣別 TWD/VND/USDA   //20250715
var databaseCfgId = "ERPSNO";   //20250715-3 Add
var databaseCfgId_EFGP = "EFGP";
var Dept = document.getElementById("Dept");     //部級
var Division = document.getElementById("Division");     //處級
var fastPass = document.getElementById("fastPass");//20250116 Neil 判斷是否快速通關
var form_org = document.getElementById("form_org");//廠區
var form_ou = document.getElementById("form_ou");//公司別
var formstates = document.getElementById("formstates");     //表單狀態
var Grid1 = document.getElementById("Grid1"); //明細Grid
var Grid1_div = document.getElementById("Grid1_div"); //列印模式的Grid1外層
var Grid2 = document.getElementById("Grid2"); //明細Grid2
var Grid3 = document.getElementById("Grid3"); //明細Grid3
var gsenao_nd1003 = document.getElementById("gsenao_nd1003"); //採購單號
var gsenao_nd1004 = document.getElementById("gsenao_nd1004"); //採購項編號
var gsenao_nd1005 = document.getElementById("gsenao_nd1005"); //會計科目1
var gsenao_nd1006 = document.getElementById("gsenao_nd1006"); //會計科目2
var gsenao_nd1007 = document.getElementById("gsenao_nd1007"); //會計科目3
var gsenao_nd1008 = document.getElementById("gsenao_nd1008"); //會計科目4
var gsenao_nd1010 = document.getElementById("gsenao_nd1010"); //採購總金額
var gsenao_nd1011 = document.getElementById("gsenao_nd1011"); //歸屬部門ID
var gsenao_nd1012 = document.getElementById("gsenao_nd1012"); //歸屬部門NAME
var gsenao_nd1013 = document.getElementById("gsenao_nd1013"); //請款金額
var gsenao_nd1014 = document.getElementById("gsenao_nd1014"); //費用預算控制金額
var gsenao_nd1015 = document.getElementById("gsenao_nd1015"); //Project Code
var gsenao_nd1016 = document.getElementById("gsenao_nd1016"); //Project Name
var gsenao_nd1020 = document.getElementById("gsenao_nd1020"); //費用類別1
var gsenao_nd1020_1 = document.getElementById("gsenao_nd1020_1"); //費用類別1_code  //20251217-001 Michael Add
var gsenao_nd1020_2 = document.getElementById("gsenao_nd1020_2"); //費用類別2_code  //20251217-001 Michael Add
var gsenao_nd1020_3 = document.getElementById("gsenao_nd1020_3"); //費用類別3_code  //20251217-001 Michael Add
var gsenao_nd1020_t1 = document.getElementById("gsenao_nd1020_t1"); //費用類別2
var gsenao_nd1020_t2 = document.getElementById("gsenao_nd1020_t2"); //費用類別3
var gsenao_nd1022 = document.getElementById("gsenao_nd1022"); //用途說明
var gsenao_nd1023 = document.getElementById("gsenao_nd1023"); //幣別
var gsenao_nd1023_b1 = document.getElementById("gsenao_nd1023_b1"); //幣別按鈕
var gsenao_nd1024 = document.getElementById("gsenao_nd1024"); //匯率
var gsenao_nd1025 = document.getElementById("gsenao_nd1025"); //金額小計(本幣)
var gsenao_nd1026 = document.getElementById("gsenao_nd1026"); //--不再使用
var gsenao_nd1027 = document.getElementById("gsenao_nd1027"); //--不再使用
var gsenao_nd1029 = document.getElementById("gsenao_nd1029"); //核決層級
var gsenao_nd1030 = document.getElementById("gsenao_nd1030"); //驗收單號
var gsenao_nd1031 = document.getElementById("gsenao_nd1031"); //試(完)模確認單號
var gsenao_nd1032 = document.getElementById("gsenao_nd1032"); //Model Code
var gsenao_nd1033 = document.getElementById("gsenao_nd1033"); //Model Name
var gsenao_nd1034 = document.getElementById("gsenao_nd1034"); //客戶代號
var gsenao_nd1034_b1 = document.getElementById("gsenao_nd1034_b1"); //客戶代號_按鈕
var gsenao_nd1035 = document.getElementById("gsenao_nd1035"); //客戶名稱
var gsenao_nd1036 = document.getElementById("gsenao_nd1036"); //Order No
var gsenao_nd1036_b1 = document.getElementById("gsenao_nd1036_b1"); //Order No_按鈕
var gsenao_nd1036_return = document.getElementById("gsenao_nd1036_return");     //Order No回傳
var gsenao_nd1037 = document.getElementById("gsenao_nd1037"); //Order Line No
var gsenao_nd1037_b1 = document.getElementById("gsenao_nd1037_b1"); //Order Line No_按鈕
var gsenao_nd1037_return = document.getElementById("gsenao_nd1037_return");     //Order Line No回傳
var gsenao_nd1038 = document.getElementById("gsenao_nd1038");     //Order ID
var gsenao_nd1039 = document.getElementById("gsenao_nd1039");     //Order Line ID
var gsenao_nd1040 = document.getElementById("gsenao_nd1040"); //原歸屬部門代號
var gsenao_nd1041 = document.getElementById("gsenao_nd1041"); //原歸屬部門名稱
var gsenao_nd1042 = document.getElementById("gsenao_nd1042"); //原客戶代號
var gsenao_nd1043 = document.getElementById("gsenao_nd1043"); //原客戶名稱
var gsenao_nd3002 = document.getElementById("gsenao_nd3002"); //憑證類別
var gsenao_nd3002_txt = document.getElementById("gsenao_nd3002_txt"); //憑證類別
var gsenao_nd3003 = document.getElementById("gsenao_nd3003"); //報單號碼(海關代徵)
var gsenao_nd3004 = document.getElementById("gsenao_nd3004"); //憑證(發票)號碼
var gsenao_nd3005 = document.getElementById("gsenao_nd3005"); //推貿費/進口稅(本)
var gsenao_nd3006 = document.getElementById("gsenao_nd3006"); //憑證日期
var gsenao_nd3006_btn = document.getElementById("gsenao_nd3006_btn"); //憑證日期
var gsenao_nd3006_txt = document.getElementById("gsenao_nd3006_txt"); //憑證日期
var gsenao_nd3007 = document.getElementById("gsenao_nd3007"); //統一編號
var gsenao_nd3008 = document.getElementById("gsenao_nd3008"); //憑證銷售額(原)
var gsenao_nd3009 = document.getElementById("gsenao_nd3009"); //憑證銷售額(本)
var gsenao_nd3010 = document.getElementById("gsenao_nd3010"); //憑證稅額(原)
var gsenao_nd3011 = document.getElementById("gsenao_nd3011"); //憑證稅額(本)
var gsenao_nd3012 = document.getElementById("gsenao_nd3012"); //憑證總額(原)
var gsenao_nd3013 = document.getElementById("gsenao_nd3013"); //憑證總額(本)
var gsenao_nd3014 = document.getElementById("gsenao_nd3014"); //幣別
var gsenao_nd3015 = document.getElementById("gsenao_nd3015"); //表單單號
var hdn_form_org = document.getElementById("hdn_form_org");//廠區id--隱藏
var hdn_form_ou = document.getElementById("hdn_form_ou");//公司別id (ex :86/96)--隱藏
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title"); //20231005 Calvin 表單單號開頭文字
var hdn_Is_Trigger = document.getElementById("hdn_Is_Trigger");//是否由驗收單觸發
var hdn_IsNeed_MF_Boss = document.getElementById("hdn_IsNeed_MF_Boss");//是否需要製造處主管簽核(Y/N)
var hdn_kim = document.getElementById("hdn_Kim"); //隱藏欄位判斷是否為人資類別
var hdn_overdue = document.getElementById("hdn_overdue"); //20240429 Neil 逾期加簽
var hdn_sintype = document.getElementById("hdn_sintype"); //20240429 Neil 逾期加簽
var hdn_SN014_04 = document.getElementById("hdn_SN014_04"); //20231005 Calvin HR薪資承辦人
var hdn_SN014_06 = document.getElementById("hdn_SN014_06"); //20231005 Calvin 費用請款帳款電子表單帳號
var hdn_SN014_07 = document.getElementById("hdn_SN014_07"); //20231005 Calvin Law Dept Manager
var hdn_SN014_08 = document.getElementById("hdn_SN014_08"); //20231005 Calvin GM
var hdn_SN014_09 = document.getElementById("hdn_SN014_09"); //20231005 Calvin CEO
var hdn_SN014_Ctr = document.getElementById("hdn_SN014_Ctr"); //20240115 Steve 用以控制歸屬部門變更
var hdn_subject = document.getElementById("hdn_subject");//主旨--隱藏
var Is_cash_advance_0 = document.getElementById("Is_cash_advance_0"); //有無借支旅費(Radio)有
var Is_cash_advance_1 = document.getElementById("Is_cash_advance_1"); //有無借支旅費(Radio)無
var IsApproveCEO = document.getElementById("IsApproveCEO");     //是否簽至董事長
var IsApproveGM = document.getElementById("IsApproveGM");     //是否簽至總經理
var IsApproveHQMM = document.getElementById("IsApproveHQMM");     //是否簽至HQ運籌管理部  //20251125 michael for SVN
var IsNeedOE = document.getElementById("IsNeedOE"); //需要填寫OE訂單
var IsPass_Direct_Manager = document.getElementById("IsPass_Direct_Manager");     //是否跳過直屬主管
var IsPurApply = document.getElementById("IsPurApply");     //是否請採驗請款 Y/N
var IsRD_fee = document.getElementById("IsRD_fee"); //是否為研發相關費用_for流程判斷用
var ORG_ID;                                                       //Inventory Organization SENAO:86 ENR:266
var OU_ID;                                                         //Operating Unit(OU) SENAO:82 ENR:263
var PayDeptID = document.getElementById("PayDeptID"); //PayDeptIDs
var senao_nd1_input = document.getElementById("senao_nd1_input"); //借支紀錄暫存
var senao_nm002 = document.getElementById("senao_nm002"); //表單單號
var senao_nm003 = document.getElementById("senao_nm003"); //申請人
var senao_nm003_t1 = document.getElementById("senao_nm003_t1"); //申請人名
var senao_nm005 = document.getElementById("senao_nm005"); //申請日期
var senao_nm006 = document.getElementById("senao_nm006"); //幣別
var senao_nm007 = document.getElementById("senao_nm007"); //請領金額(應無使用?)
var senao_nm009 = document.getElementById("senao_nm009"); //廠商/收款人
var senao_nm009_t1 = document.getElementById("senao_nm009_t1"); //廠商/收款人
var senao_nm010 = document.getElementById("senao_nm010"); //請款種類
var senao_nm011 = document.getElementById("senao_nm011"); //付款群組
var senao_nm012 = document.getElementById("senao_nm012"); //隱藏欄位
var senao_nm014 = document.getElementById("senao_nm014"); //付款條件
var senao_nm014_ORA = document.getElementById("senao_nm014_ORA"); //付款條件:Hidden
var senao_nm021 = document.getElementById("senao_nm021"); //應付憑單2
var senao_nm022 = document.getElementById("senao_nm022"); //未稅金額(本)
var senao_nm022_orig = document.getElementById("senao_nm022_orig"); //未稅金額(原)
var senao_nm023 = document.getElementById("senao_nm023"); //vendor_id:Hidden
var senao_nm024 = document.getElementById("senao_nm024"); //vendor_site_id:Hidden
var senao_nm029 = document.getElementById("senao_nm029"); //匯率
var senao_nm030 = document.getElementById("senao_nm030"); //稅額(本)
var senao_nm030_orig = document.getElementById("senao_nm030_orig"); //稅額(原)
var senao_nm031 = document.getElementById("senao_nm031"); //金額總計(本)
var senao_nm032 = document.getElementById("senao_nm032"); //應付憑單1
var senao_nm033 = document.getElementById("senao_nm033"); //公出單單號
var senao_nm033_b1 = document.getElementById("senao_nm033_b1"); //公出單單號按鈕
var senao_nm033_t1 = document.getElementById("senao_nm033_t1"); //公出單單號_t1:Hidden 疑似沒使用!?
var senao_nm034 = document.getElementById("senao_nm034"); //公出單單號:Hidden 疑似沒使用!?
var senao_nm035 = document.getElementById("senao_nm035"); //申請單位
var senao_nm035_t1 = document.getElementById("senao_nm035_t1"); //申請單位名
var senao_nm036 = document.getElementById("senao_nm036"); //放驗收單號:Hidden
var senao_nm038 = document.getElementById("senao_nm038"); //付款方式(Radio)
var senao_nm038_0 = document.getElementById("senao_nm038_0"); //付款方式(Radio)電匯
var senao_nm038_1 = document.getElementById("senao_nm038_1"); //付款方式(Radio)支票
var senao_nm043 = document.getElementById("senao_nm043"); //已借支旅費
var senao_nm043_t1 = document.getElementById("senao_nm043_t1"); //已借支旅費:Hidden
var senao_nm044 = document.getElementById("senao_nm044"); //公出類型
var senao_nm044_0 = document.getElementById("senao_nm044_0"); //公出類型0(國內出差)
var senao_nm044_1 = document.getElementById("senao_nm044_1"); //公出類型1(國外出差)
var senao_nm045 = document.getElementById("senao_nm045"); //帳戶名稱
var senao_nm046 = document.getElementById("senao_nm046"); //金額總計(原)
var senao_nm047 = document.getElementById("senao_nm047"); //Approve Level
var senao_nm048 = document.getElementById("senao_nm048"); //加簽人員
var senao_nm048_b1 = document.getElementById("senao_nm048_b1"); //加簽人員_按鈕
var senao_nm049 = document.getElementById("senao_nm049"); //加簽人員
var senao_nm050_0 = document.getElementById("senao_nm050_0"); //有無營業稅額(Radio)有
var senao_nm050_1 = document.getElementById("senao_nm050_1"); //有無營業稅額(Radio)無
var senao_nm900 = document.getElementById("senao_nm900"); //填表人
var senao_nm901 = document.getElementById("senao_nm901"); //申請人主管
var senao_taxcode = document.getElementById("senao_taxcode"); //發票稅率代碼   //20250804 add
var senao014011 = document.getElementById("senao014011"); //新台幣幣別          20250728 michael add
var senao014012 = document.getElementById("senao014012"); //新台幣幣別對本幣匯率  20250728 michael add
var senao014013 = document.getElementById("senao014013"); //折合台幣金額總計     20250728 michael add
var Sub_Dept = document.getElementById("Sub_Dept");     //分部級
var temp_col = document.getElementById("temp_col"); //Temp Column
var systemDateTime = ""; //今天日期
//GRID
//單身grid1 元件欄位名稱
var GridBinding = [
  ["gsenao_nd1011", "gsenao_nd1012", "gsenao_nd1022", "gsenao_nd1025", "gsenao_nd1020", "gsenao_nd1015", "gsenao_nd1016", "gsenao_nd1032", "gsenao_nd1033", "gsenao_nd1003", "gsenao_nd1004", "gsenao_nd1010", "gsenao_nd1005", "gsenao_nd1006", "gsenao_nd1007", "gsenao_nd1008", "gsenao_nd1014", "gsenao_nd1023", "gsenao_nd1024", "gsenao_nd1013", "gsenao_nd1020_t1", "gsenao_nd1020_t2", "gsenao_nd1029", "gsenao_nd1030", "gsenao_nd1031", "gsenao_nd1034", "gsenao_nd1035", "gsenao_nd1036", "gsenao_nd1037", "gsenao_nd1038", "gsenao_nd1039", "gsenao_nd1040", "gsenao_nd1041", "gsenao_nd1042", "gsenao_nd1043","gsenao_nd1020_1","gsenao_nd1020_2","gsenao_nd1020_3"]
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
  colAPI: 'BPM_SENAO014_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO014_GRID1_LIST',
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
        $(element).val(value);
        // if (element == '#gsenao113d012') {
        //   if (IsDateValid(value)) {
        //     $(element).val(value.replace(/\//g, '-'));
        //   }
        // } else {
        //   $(element).val(value);
        // }



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
    activityId = "Applicant";
    formOpen();
});
/*---------------------Form Load Function End--------------*/
/*------------------------------------------------------------------------------
[Function Name]frmGeneralCopyData
[Function Descript]複製表單的初始設定
[Parameter] NA
[Returns] NA
[Modify Log]
[Mo]
[Example]
[Show Codes=Y] 
[Parameter] 
------------------------------------------------------------------------------*/
function frmGeneralCopyData(){
    if (activityId == "Applicant") {
        senao_nm005.value = systemDateTime;
        if (formInstOID == "" && formstates.value == "") {
            senao_nm021.value             = "";
            IsRD_fee.value                = ""; //20200326 Milla 資訊服務申請單
            IsNeedOE.value                = ""; //需要填寫OE訂單
            senao_nm048.value             = "";    //加簽人員
            senao_nm049.value             = "";
            IsPurApply.value              = ""; //是否請採驗請款
            Division.value                = ""; //處級
            Dept.value                    = ""; //部級
            IsPass_Direct_Manager.value   = ""; //是否跳過直屬主管
            Apply_Level2_Manager.value    = ""; //申請人二階主管
            IsApproveGM.value             = ""; //是否簽至總經理
            IsApproveCEO.value            = ""; //是否簽至董事長
            senao_nm009.value             = "";
            senao_nm030_orig.value        = "0"; //稅額(原)
            senao_nm030.value             = "0"; //稅額(本)

            senao_nm009_onchange();    //20220318 資訊服務申請單#SENAO10100001859  為避免申請人copy表單造成付款條件錯誤，請將copy表單的供應商欄位清空，讓申請人重新選取

            if (IsInvaildDept(senao_nm035.value)) {   //判斷是否為失效部門
                senao_nm035.value = "";               //清空部門
                senao_nm035_t1.value = "";            //清空部門
            }

            // var tGrid1Data = Grid1Obj.getData();
            // if (tGrid1Data.length > 0) { //判斷Grid是否有資料
            //     for (var i = 0; i < tGrid1Data.length; i++) {
            //         //清空
            //         tGrid1Data[i][27] = "";    //Order No
            //         tGrid1Data[i][28] = "";    //Order Line No
            //         tGrid1Data[i][29] = "";    //Order ID
            //         tGrid1Data[i][30] = "";    //Order Line ID


            //         tGrid1Data[i][31] = tGrid1Data[i][0]; //原歸屬部門代號
            //         tGrid1Data[i][32] = tGrid1Data[i][1]; //原歸屬部門名稱

            //         tGrid1Data[i][25] = ""; //客戶代號
            //         tGrid1Data[i][26] = ""; //客戶名稱
            //         tGrid1Data[i][33] = ""; //原歸屬部門代號
            //         tGrid1Data[i][34] = ""; //原歸屬部門名稱

            //     }
            // }
            //USER使用複製表單功能時，發票資訊欄位需清空
            //Grid3Obj.reload(new Array());
            //Grid3Obj.clearBinding();                                             //新增後清除Binding欄位資料
            //document.getElementById("Grid3").value = Grid3Obj.toArrayString();   //將新的資料存入Grid隱藏欄位中
            formstates.value = "new";
        }
    }
}
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
    $('#hdn_formnumber_title').val($("#form_ou").val().toUpperCase());
    //設定廠區
    setSelectDefalut(
        "form_org",
        apiInvoke + "BPM_getFactory",
        { COMPANY: $('#form_ou').val() },
        ""
    );
    //流程代號
    $('#senao_nm001').val(type);
    $('#senao_nm001').attr('disabled', 'true');

    console.log($("#form_ou").val());
    OU_ID = _OU[$("#form_ou").val()];
    ORG_ID = _ORG[$("#form_org").val()];
    //form_org.style.backgroundColor = '#f7d9e4';
    form_ou.disabled = true;
    //form_ou.style.backgroundColor = '#f7d9e4';

    //設定填表人
    $('#emplus030015').val(userId);
    $('#emplus030005').val(user_Name);
    $('#emplus030005').attr('disabled', 'true');
    $('#emplus030015').attr('disabled', 'true');
    //設定申請人
    $('#senao_nm035').val(Department);
    $('#senao_nm035_t1').val(Department_Name);
    $('#senao_nm003').val(userId);
    $('#senao_nm003_t1').val(user_Name);
    applicant = $('#senao_nm003').val();
    applicantDept = $('#senao_nm035').val();
    //設定申請時間
    $('#senao_nm005').val(today);
    $('#senao_nm005').attr('disabled', 'true');
    frmGeneralCopyData(); //表單複製時的資料設定
    return true;
}
function formOpen() {
    apiInvoke = invokeURL;
    systemDateTime = showCurrentDate(); //今天日期
    frmGeneralLoad(ProcessPackageId, systemDateTime);
    if (form_ou.value == "enr" || form_ou.value == "stw") { //非關係人代收代付的OE相關卡控, 恩睿不需要顥示
        //$$("[id*='senao_nm048'],[id*='senao_nm048_b1'],[id*='senao_nm049']").css("display","none");
        $$("[id*=gsenao_nd1034],[id*=gsenao_nd1034_b1],[id*=gsenao_nd1035],[id*=gsenao_nd1036],[id*=gsenao_nd1036_b1],[id*=gsenao_nd1037],[id*=gsenao_nd1037_b1]").css("display", "none");
    }


}