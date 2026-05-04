//SENAO117 Shipping Memo
//20231109 Steve  資料含有<導致xml組成異常,故置換
//20241112 Neil  Fix 備註太多行會讓ireport異常進而導致log檔案過大AP異常使用者無法登入
//20250812 JC  新增SHOPIFY會呼叫API開啟工單
document.write('<script type="text/javascript" src="../../dwrDefault/interface/ajax_OrgAccessor.js"></script>');
document.write('<script type="text/javascript" src="../../dwrDefault/interface/ajax_DatabaseAccessor.js"></script>');
document.write('<script type="text/javascript" src="../../dwrDefault/interface/ajax_ProcessAccessor.js"></script>');
document.write('<script type="text/javascript" src="../../js/common_util.js" ></script>');
document.write('<script type="text/javascript" src="../../CustomSNO/js/senao_Utils.js"></script>');
document.write('<script type="text/javascript" src="../../js/jquery-1.8.3.js" ></script>');
document.write('<script type="text/javascript" src="../../CustomJsLib/ds_j.js"></script>');
document.write('<script type="text/javascript" src="../../js/Senao_CustomDataChooser.js"></script>');
document.write('<script type="text/javascript" src="/zWARforSenao/dwrCustom/interface/ajax_GetOracleData.js"></script>');
document.write('<script type="text/javascript" src="../../js/Senao_CustomDataChooser.js"></script>');
document.write('<script type="text/javascript" src="../../api-1.0.js"></script>'); //JC 20250812 SHOPIFY
var ORG = "senao"; //Organizationalert
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0

var isWarehouseApproved = document.getElementById("isWarehouseApproved"); //撤簽是否鎖定
var showWithdrawNotice = document.getElementById("showWithdrawNotice"); //顯示：Oracle倉管已入帳，不允許抽單
var form_ou = document.getElementById("form_ou");//公司別
var form_org = document.getElementById("form_org");//廠區
var senao117m002 = document.getElementById("senao117m002"); //表單單號
var senao117m999 = document.getElementById("senao117m999"); //流程序號
var senao117m025 = document.getElementById("senao117m025"); //Shipping Type 下拉選單
var senao117m004 = document.getElementById("senao117m004"); //申請單位代號
var senao117m004_t1 = document.getElementById("senao117m004_t1"); //申請單位名稱
var senao117m003 = document.getElementById("senao117m003"); //申請人代號 
var senao117m003_b1 = document.getElementById("senao117m003_b1"); //申請人代號開窗
var senao117m003_t1 = document.getElementById("senao117m003_t1"); //申請人名稱
var senao117m028 = document.getElementById("senao117m028"); //負責業務代號
var senao117m028_b1 = document.getElementById("senao117m028_b1"); //負責業務代號開窗
var senao117m029 = document.getElementById("senao117m029"); //負責業務名稱
var senao117m005 = document.getElementById("senao117m005"); //目前此版本
var showLastVersion = document.getElementById("showLastVersion"); //最新版本
var senao117m006 = document.getElementById("senao117m006"); //申請日期
var senao117m020 = document.getElementById("senao117m020"); //出口/內銷 radio  Shipping種類
var senao117m020_0 = document.getElementById("senao117m020_0"); //出口
var senao117m020_1 = document.getElementById("senao117m020_1"); //內銷 
var senao117m020_2 = document.getElementById("senao117m020_2"); //NRE
var senao117m020_3 = document.getElementById("senao117m020_3"); //國外銷退調整
var senao117m020_4 = document.getElementById("senao117m020_4"); //國內銷退調整
var senao117m030 = document.getElementById("senao117m030"); //支付運費 下拉選單
var senao117m007 = document.getElementById("senao117m007"); //Delivery NO
var senao117m007_b1 = document.getElementById("senao117m007_b1"); //Delivery NO開窗
var senao117m024 = document.getElementById("senao117m024"); //隱藏欄位，客戶代號
var senao117m021 = document.getElementById("senao117m021"); //Invoice NO
var senao117m009 = document.getElementById("senao117m009"); //Accountee
var senao117m009_ID = document.getElementById("senao117m009_ID"); //Accountee (ACT_ID)
var senao117m009_b1 = document.getElementById("senao117m009_b1"); //Accountee開窗
var senao117m010 = document.getElementById("senao117m010"); //Consignee 第一格
var senao117m010_ID = document.getElementById("senao117m010_ID"); //Consignee 第一格 (CSN_ID_1)
var senao117m010_b1 = document.getElementById("senao117m010_b1"); //Consignee 第一格開窗
var senao117m010_t1 = document.getElementById("senao117m010_t1"); //Consignee 第二格
var senao117m010_t1_ID = document.getElementById("senao117m010_t1_ID"); //Consignee 第二格 (CSN_ID_2)
var senao117m010_t1_b1 = document.getElementById("senao117m010_t1_b1"); //Consignee 第二格開窗
var senao117m011 = document.getElementById("senao117m011"); //Notify 第一格
var senao117m011_ID = document.getElementById("senao117m011_ID"); //Notify 第一格 (NTF_ID_1)
var senao117m011_b1 = document.getElementById("senao117m011_b1"); //Notify 第一格開窗
var senao117m011_t1 = document.getElementById("senao117m011_t1"); //Notify 第二格
var senao117m011_t1_ID = document.getElementById("senao117m011_t1_ID"); //Notify 第二格 (NTF_ID_2)
var senao117m011_t1_b1 = document.getElementById("senao117m011_t1_b1"); //Notify 第二格開窗
var senao117m008 = document.getElementById("senao117m008"); //Shipping Mark 
var senao117m012 = document.getElementById("senao117m012"); //Shipping Way
var senao117m012_b1 = document.getElementById("senao117m012_b1"); //Shipping Way開窗
var senao117m013 = document.getElementById("senao117m013_txt"); //預計出貨日
var senao117m014 = document.getElementById("senao117m014_txt"); //可出貨日(生管填寫)
var senao117m014_b1 = document.getElementById("senao117m014_btn"); //可出貨日開窗(生管填寫)
var senao117m015 = document.getElementById("senao117m015"); //聯絡人
var senao117m016 = document.getElementById("senao117m016"); //聯絡電話
var senao117m017 = document.getElementById("senao117m017"); //送貨地址
var senao117m018 = document.getElementById("senao117m018"); //備註
var senao117m019 = document.getElementById("senao117m019"); //生管會辦意見
var showDeliveryNO = document.getElementById("showDeliveryNO"); //在Grid上方顯示Delivery NO
var senao117m027 = document.getElementById("senao117m027"); //隱藏欄位，解訂單(SENAO103) ProcessSerialNumber
var senao117m031 = document.getElementById("senao117m031");	//業務部門
var senao117m031_t1 = document.getElementById("senao117m031_t1");	//業務部門
var lbl_Subject = document.getElementById("lbl_Subject");	//顥示主旨內容
var senao117m023_0 = document.getElementById("senao117m023_0");	//線上領料
var senao117m033 = document.getElementById("senao117m033");	//Order Type
var senao117m032 = document.getElementById("senao117m032");	//簡易報關
var senao117m032_0 = document.getElementById("senao117m032_0");	//是簡易報關
var senao117m032_1 = document.getElementById("senao117m032_1");	//不是簡易報關

//==================以下為單身資料=================
var gsenao117d004 = document.getElementById("gsenao117d004"); //訂單狀態 [1]
var gsenao117d018 = document.getElementById("gsenao117d018"); //TAX_CODE [2]
//變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
/*
var gsenao117d005 = document.getElementById("gsenao117d005"); //料號 [3]
var gsenao117d006 = document.getElementById("gsenao117d006"); //品名 [4]
var gsenao117d007 = document.getElementById("gsenao117d007"); //訂單號碼 [5]
var gsenao117d013 = document.getElementById("gsenao117d013"); //Customer_PO [6]
var gsenao117d008 = document.getElementById("gsenao117d008"); //幣別 [7]
var gsenao117d009 = document.getElementById("gsenao117d009"); //單價 [8]
var gsenao117d010 = document.getElementById("gsenao117d010"); //預計出貨數 [9]
var gsenao117d011 = document.getElementById("gsenao117d011"); //確認可出貨數 [10]
var gsenao117d012 = document.getElementById("gsenao117d012"); //說明 [11]
var gsenao117d003 = document.getElementById("gsenao117d003"); //line_no [12]
var gsenao117d015 = document.getElementById("gsenao117d015"); //隱藏欄位，DELIVERY_DETAIL_ID [13]
var gsenao117d016 = document.getElementById("gsenao117d016"); //隱藏欄位，CUSTOMER_NO [14]
var gsenao117d017 = document.getElementById("gsenao117d017"); //隱藏欄位，ORDER_TYPE_ID [15]
var gsenao117d019 = document.getElementById("gsenao117d019"); //隱藏欄位，前次確認可出貨數 [16]
var gsenao117d020 = document.getElementById("gsenao117d020"); //隱藏欄位，LINE_ID [17]
var gsenao117d021 = document.getElementById("gsenao117d021"); //隱藏欄位，HEADER_ID [18]
var gsenao117d022 = document.getElementById("gsenao117d022"); //ON_HAND [19]
*/
var gsenao117d005 = document.getElementById("gsenao117d005"); //料號 [4]
var gsenao117d006 = document.getElementById("gsenao117d006"); //品名 [5]
var gsenao117d007 = document.getElementById("gsenao117d007"); //訂單號碼 [6]
var gsenao117d013 = document.getElementById("gsenao117d013"); //Customer_PO [7]
var gsenao117d008 = document.getElementById("gsenao117d008"); //幣別 [8]
var gsenao117d009 = document.getElementById("gsenao117d009"); //單價 [9]
var gsenao117d010 = document.getElementById("gsenao117d010"); //預計出貨數 [10]
var gsenao117d011 = document.getElementById("gsenao117d011"); //確認可出貨數 [11]
var gsenao117d012 = document.getElementById("gsenao117d012"); //說明 [12]
var gsenao117d003 = document.getElementById("gsenao117d003"); //line_no [13]
var gsenao117d015 = document.getElementById("gsenao117d015"); //隱藏欄位，DELIVERY_DETAIL_ID [14]
var gsenao117d016 = document.getElementById("gsenao117d016"); //隱藏欄位，CUSTOMER_NO [15]
var gsenao117d017 = document.getElementById("gsenao117d017"); //隱藏欄位，ORDER_TYPE_ID [16]
var gsenao117d019 = document.getElementById("gsenao117d019"); //隱藏欄位，前次確認可出貨數 [17]
var gsenao117d020 = document.getElementById("gsenao117d020"); //隱藏欄位，LINE_ID [18]
var gsenao117d021 = document.getElementById("gsenao117d021"); //隱藏欄位，HEADER_ID [19]
var gsenao117d022 = document.getElementById("gsenao117d022"); //ON_HAND [20]
var gsenao117d023 = document.getElementById("gsenao117d023"); //生產地顯示值 [3]

//行動簽核
var senao117m025_m = document.getElementById("senao117m025_m"); //隱藏欄位，Shipping Type (dropdown)
var senao117m020_m = document.getElementById("senao117m020_m"); //隱藏欄位，Shipping種類 (radio)
var senao117m030_m = document.getElementById("senao117m030_m"); //隱藏欄位，支付運費方式

var Grid1 = document.getElementById("Grid1"); //Grid1
var btnAdd = document.getElementById("btnAdd"); //新增
var btnEdit = document.getElementById("btnEdit"); //修改
var btnDel = document.getElementById("btnDel"); //刪除

//以下供流程設計師使用
var isDiffApplicant = document.getElementById("isDiffApplicant"); //隱藏欄位，填單人是否不同於申請人
var isDiffSalesMan = document.getElementById("isDiffSalesMan"); //隱藏欄位，填單人是否不同於負責業務
var isMaterialUnit = document.getElementById("isMaterialUnit"); //隱藏欄位，申請單位是否為物管單位
var isExportAndSellerPay = document.getElementById("isExportAndSellerPay"); //隱藏欄位，是否出口為AIR或DHL並賣方自付運費
var isUnderDeptLevel = document.getElementById("isUnderDeptLevel"); //隱藏欄位，申請人直屬主管為部級以下(不包含部級)層級
var isBrandMarketUnit = document.getElementById("isBrandMarketUnit"); //隱藏欄位，申請單位是否為品牌銷售管理課(13301)
var isSN117_10_User = "N"; //是否為SN117_10(PM_II_助理)群組人員
var applicantMgrId = document.getElementById("applicantMgrId"); //隱藏欄位，申請人主管
var tmpUserInfoArray = []; //UserInfo物件陣列
var sn117_10_UserIds = document.getElementById("sn117_10_UserIds"); //隱藏欄位，SN117_10(PM_II_助理群組)
var sn117_02_UserIds = document.getElementById("sn117_02_UserIds"); //隱藏欄位，SN117_02(SonicWALL PM群組)
var mailContent = document.getElementById("mailContent"); //隱藏欄位，寄信內容，提供寄信使用(SendTask_179關卡，通知申請人、進出口人員、業務、倉管人員)
var formSubject = document.getElementById("formSubject"); //隱藏欄位，表單主旨，提供寄信使用(SendTask_179關卡，通知申請人、進出口人員、業務、倉管人員)
var brandSalesMailBox = document.getElementById("brandSalesMailBox"); //隱藏欄位，品牌銷售管理課群組信箱
var isGenNewFormAvailable = document.getElementById("isGenNewFormAvailable"); //隱藏欄位，是否可已觸發解訂單
var triggerData = document.getElementById("triggerData"); //隱藏欄位，觸發表單所需變數
var prodMgmtApprover = document.getElementById("prodMgmtApprover"); //隱藏欄位，生管關卡簽核者ID
var ENRprodMgmtApprover = document.getElementById("ENRprodMgmtApprover"); //隱藏欄位，生管關卡簽核者ID
var isNotCheck_Credit_Cost = document.getElementById("isNotCheck_Credit_Cost");	//不需卡控Credit和材料成本率
var Sales8_NotApproveDivision = document.getElementById("Sales8_NotApproveDivision"); //業務八課不經過處級主管
var formserialnumber = "";

function formCreate() {
    return true;
}

function formOpen() {
    $$ = jQuery.noConflict();
    //---以下為測試碼-----------------------	
    // callPKG_SN_OM_RELEASE_SO_LINE('26058', '32678', 'DN#16417_EF-(申請中出貨總金額:0)');	
    // callPKG_SN_OM_HOLD_SO_LINE('26058', '32678', 'DN#16417_EF-(申請中出貨總金額:0)');
    // isSN117_10_User = checkIsGroupUser(senao117m003.value, "SN117_10");
    // applicantMgrId.value = (isSN117_10_User === "Y") ? queryManagerByEmpId(senao117m003.value) : "";
    // return false;
    //---以上為測試碼-----------------------

    getCompanyInfo();  //取得公司list
    setCompanyValue(); //set公司        
    getFacInfo(form_ou.value); //取得廠區
    OU_ID = _OU[$$("#form_ou").val()] + "";
    set_form_org_hdn();
    ORG_ID = _ORG[$$("#form_org").val()] + "";

    if (form_ou.value == '') {
        //alert("取得公司對應有問題，請重新開單一次!!");
        alert(querySNSI009(form_ou.value, "019", locale, "", "", ""));
        window.history.go(-1);
    } else {
        ORG = form_ou.value;
    }

    if (!$$.isEmptyObject(senao117m014)) {
        senao117m014.disabled = true;
    }
    if (!$$.isEmptyObject(senao117m014_b1)) {
        senao117m014_b1.disabled = true;
    }


    //隱藏"取回重辦"按鈕
    if (window.parent.parent.document.getElementById("btnRollback")) {
        if (activityId != "UserTask_79" && activityId != "ENR_BU_PMC") { //出貨生管人員可取回重辦
            window.parent.parent.document.getElementById("btnRollback").style.display = "none";
        }
    }


    //倉管人員已簽核，顯示不可撤簽警語、隱藏"撤銷流程"按鈕
    if (isWarehouseApproved.value == "Y") {
        //showWithdrawNotice.innerText = "Oracle倉管已入帳，不允許抽單";
        showWithdrawNotice.innerText = querySNSI009(formId, "019", locale, "", "", "");
        if (window.parent.parent.document.getElementById("btnAbort")) {
            window.parent.parent.document.getElementById("btnAbort").style.display = "none";
        }
    }

    //因進出口可能會頻繁因出貨時間變更而異動InviceNo，因此每個關卡都要查詢
    if ($$("#senao117m020_0").is(":checked")) {
        senao117m020.value = senao117m020_0.value;
    } else if ($$("#senao117m020_1").is(":checked")) {
        senao117m020.value = senao117m020_1.value;
    } else if ($$("#senao117m020_2").is(":checked")) {
        senao117m020.value = senao117m020_2.value;
    } else if ($$("#senao117m020_3").is(":checked")) {
        senao117m020.value = senao117m020_3.value;
    } else if ($$("#senao117m020_4").is(":checked")) {
        senao117m020.value = senao117m020_4.value;
    }

    if (senao117m007.value != "") {
        if (isNotCheck_Credit_Cost.value == "Y") { //樣品訂單
            if (!$$("#senao117m020_0").is(":checked") || ($$("#senao117m020_0").is(":checked") && $$("#senao117m032_1").is(":checked"))) { //非選擇「出口」或 選擇「出口」且非簡易報關 取Oracle Invoice NO
                senao117m021.value = queryInvoiceNo(senao117m020.value, senao117m007.value);
            }
        } else { //非樣品訂單
            senao117m021.value = queryInvoiceNo(senao117m020.value, senao117m007.value); //取Oracle Invoice NO
        }

        showLastVersion.value = queryLastVersion(senao117m007.value);
        showDeliveryNO.innerText = senao117m007.value;
    }

    if ($$.isEmptyObject(senao117m999.value)) {
        senao117m999.innerHTML = serialNumber; //For列印表單顯示
    } else if (senao117m999.value === "") {
        senao117m999.value = serialNumber;
    }

    //Label底色
    $$("[name^='lbl_'],[name^='Label272']:not([name$='_hdn'],[name='lbl_hdn_chkfile'],[name='lbl_Subject'],[name*='Grid'],[name$='m001'],[name$='m002'],[name$='m999'],[name$='m004_t1'],[name$='m003_t1'],[name$='m029'],[name$='applicantManagerId'],[name$='isSalesManager'],[name$='businessManagerId'],[name$='isSysAdmin'],[name$='isInsteadOfTransaction'],[name$='isProductUnit'],[name$='isSpecificItem'],[name$='isPVTItemStatus'],[name$='isOverItemCost'],[name$='isIncludeNoGoodsForm'],[name$='addApprovalPMList'],[name$='isSpecificBiz'],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''],[name$=''])[class='formButtonClass']").css("background-color", formLabelBGColor);

    //example $$("[name='Label29'],[name='Label110'],[name='Label120']").css("background-color", formLabelBGColor);

    $$("#lbl_isDiffSales").css('visibility', 'hidden');
    $$("#lbl_isSalesManager").css('visibility', 'hidden');
    $$("#lbl_isMaintenanceIncomeForMeraki").css('visibility', 'hidden');
    $$("#lbl_businessManagerId").css('visibility', 'hidden');
    $$("#lbl_isInsteadOfTransaction").css('visibility', 'hidden');
    $$("#lbl_isProductUnit").css('visibility', 'hidden');
    $$("#lbl_applicantManagerId").css('visibility', 'hidden');
    $$("#lbl_isSpecificItem").css('visibility', 'hidden');
    $$("#lbl_isPVTItemStatus").css('visibility', 'hidden');
    $$("#lbl_isOverItemCost").css('visibility', 'hidden');
    $$("#lbl_isIncludeNoGoodsForm").css('visibility', 'hidden');
    $$("#lbl_addApprovalPMList").css('visibility', 'hidden');
    $$("#lbl_isSpecificCustomer").css('visibility', 'hidden');
    $$("#lbl_isSpecificBiz").css('visibility', 'hidden');
    $$("#lbl_isNormalItemNo").css('visibility', 'hidden');
    $$("#lbl_isBizDivisionII").css('visibility', 'hidden');
    $$("#lbl_isOverseasBizDept").css('visibility', 'hidden');
    $$("#lbl_isBizSectionI").css('visibility', 'hidden');
    $$("#lbl_isBizSectionV").css('visibility', 'hidden');
    $$("#lbl_isBizSectionVI").css('visibility', 'hidden');
    $$("#lbl_isBizSectionVII").css('visibility', 'hidden');
    $$("#lbl_isBizSectionVIII").css('visibility', 'hidden');
    $$("#lbl_isBizSectionIX").css('visibility', 'hidden');
    $$("#lbl_isBrandSales").css('visibility', 'hidden');

    $$("#lbl_isDiffApplicant").css('visibility', 'hidden');
    $$("#lbl_isDiffSalesMan").css('visibility', 'hidden');
    $$("#lbl_isMaterialUnit").css('visibility', 'hidden');
    $$("#lbl_isExportAndSellerPay").css('visibility', 'hidden');
    $$("#lbl_isUnderDeptLevel").css('visibility', 'hidden');
    $$("#lbl_isBrandMarketUnit").css('visibility', 'hidden');
    $$("#lbl_isSN117_10_User").css('visibility', 'hidden');
    $$("#lbl_applicantMgrId").css('visibility', 'hidden');
    $$("#lbl_tmpUserInfoArray").css('visibility', 'hidden');
    $$("#lbl_sn117_10_UserIds").css('visibility', 'hidden');
    $$("#lbl_sn117_02_UserIds").css('visibility', 'hidden');
    $$("#lbl_mailContent").css('visibility', 'hidden');
    $$("#lbl_formSubject").css('visibility', 'hidden');
    $$("#lbl_brandSalesMailBox").css('visibility', 'hidden');
    $$("#lbl_isGenNewFormAvailable").css('visibility', 'hidden');
    $$("#lbl_triggerData").css('visibility', 'hidden');
    $$("#lbl_prodMgmtApprover").css('visibility', 'hidden');

    $$("#lbl_gsenao117d004").css('visibility', 'hidden');
    $$("#lbl_gsenao117d018").css('visibility', 'hidden');
    $$("#lbl_gsenao117d006").css('visibility', 'hidden');
    $$("#lbl_gsenao117d007").css('visibility', 'hidden');
    $$("#lbl_gsenao117d013").css('visibility', 'hidden');
    $$("#lbl_gsenao117d008").css('visibility', 'hidden');
    $$("#lbl_gsenao117d009").css('visibility', 'hidden');
    $$("#lbl_gsenao117d010").css('visibility', 'hidden');
    $$("#lbl_gsenao117d012").css('visibility', 'hidden');
    $$("#lbl_gsenao117d003").css('visibility', 'hidden');
    $$("#lbl_gsenao117d015").css('visibility', 'hidden');
    $$("#lbl_gsenao117d016").css('visibility', 'hidden');
    $$("#lbl_gsenao117d017").css('visibility', 'hidden');
    $$("#lbl_gsenao117d019").css('visibility', 'hidden');
    $$("#lbl_gsenao117d020").css('visibility', 'hidden');
    $$("#lbl_gsenao117d021").css('visibility', 'hidden');
    $$("#lbl_gsenao117d022").css('visibility', 'hidden');

    $$("#lbl_senao117m025_m").css('visibility', 'hidden');
    $$("#lbl_senao117m020_m").css('visibility', 'hidden');
    $$("#lbl_senao117m030_m").css('visibility', 'hidden');

    $$("#lbl_senao117m024").css('visibility', 'hidden');
    $$("#lbl_senao117m027").css('visibility', 'hidden');
    $$("#lbl_senao117m009_ID").css('visibility', 'hidden');
    $$("#lbl_senao117m010_ID").css('visibility', 'hidden');
    $$("#lbl_senao117m010_t1_ID").css('visibility', 'hidden');
    $$("#lbl_senao117m011_ID").css('visibility', 'hidden');
    $$("#lbl_senao117m011_t1_ID").css('visibility', 'hidden');
    $$("#lbl_isWarehouseApproved").css('visibility', 'hidden');

    $$("#lbl_gsenao113d004_ORA").css('visibility', 'hidden');
    $$("#lbl_gsenao113d007").css('visibility', 'hidden');
    $$("#lbl_gsenao113d009").css('visibility', 'hidden');
    $$("#lbl_gsenao113d010").css('visibility', 'hidden');

    //20230629 Calvin 解決解Hold，重抓DN資料判斷
    var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料
    if (typeof (Grid1Obj) !== "undefined") {  //判斷grid物件是否存在表單中   
        if (tGrid1.length > 1) {  //判斷Grid是否有資料
            Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中
        }
    }
    //20230629 End

    if (activityId == "UserTask_3") {
        //---以下為測試碼-----------------------
        if (userId == "102451") { //Jeff
            if (typeof (Grid1Obj) != "undefined") { //以此欄位判斷，若是undefined表示是列印表單狀態
                senao117m025.value = "WIRELESS LAN PRODUCT";
                senao117m003.value = "102065";
                senao117m003_t1.value = "謝書瑜";
                senao117m004.value = "11308";
                senao117m004_t1.value = "業務八課";
                senao117m028.value = "100689";
                senao117m029.value = "陳意雯";
                senao117m006.value = "2018/07/19";
                senao117m020.value = "0"; //出口
                senao117m020_0.checked = true;
                senao117m030.value = "DDP(Delivered Duty Paid，輸入國稅訖交貨)";
                senao117m007.value = "16417";
                senao117m009.value = "Extreme Networks.";
                senao117m009_ID.value = "3821";
                senao117m010.value = "Extreme Networks";
                senao117m010_ID.value = "5165";
                senao117m011.value = "Extreme Networks";
                senao117m011_ID.value = "3362";
                senao117m008.value = "Extreme";
                senao117m012.value = "Air";
                senao117m013.value = "2018/07/20";
                senao117m014.value = "2018/07/20";
                senao117m015.value = "Joel Gomez";
                senao117m016.value = "+1-915-858-1800 ext.110";
                senao117m017.value = "Extreme Networks.C/o JUSDA Supply Chain Mgmt,1240 Don Haskins Dr.,Suite C, B1, Docks 25-31,El Paso, TX 79936,USA";
                //senao117m018.value = "Jeff測試----@TO BMC倉 with 新規棧板 and 尺寸(請參照mail,一個model 只能一個棧板)";
                senao117m018.value = "Jeff Test";
                senao117m007_process();
                window.parent.document.forms[0].txtSubject.value = "[Jeff Test]";
            }
        }
        //---以上為測試碼-----------------------

        //複製表單時，下方欄位Reset
        if (formInstOID == "") {
            isWarehouseApproved.value = ""; //倉管人員已簽核
            showWithdrawNotice.innerText = ""; //顯示：Oracle倉管已入帳，不允許抽單
            prodMgmtApprover.value = ""; //生管關卡簽核者
            senao117m014.value = ""; //可出貨日
            senao117m005.value = ""; //此版本
            senao117m019.value = ""; //生管會辦意見
            senao117m021.value = ""; //Invoice No
            senao117m006.value = systemDateTime; //申請日期
            triggerData.value = "";
            isGenNewFormAvailable.value = "";
            senao117m999.value = "";
            mailContent.value = "";
            if (senao117m007.value != "") {
                senao117m007_onblur();//Add by Chandler20200618
            }
            senao117m023_0.checked = false; //線上領料
            senao117m032_0.checked = false;	//簡易報關-是
            senao117m032_1.checked = false;	//簡易報關-否	
            isNotCheck_Credit_Cost.value = "";	//清空樣品訂單Flag

            if ($$("#senao117m020_0").is(":checked")) {
                senao117m030.disabled = false; //開放支付運費下拉選單
                if (isNotCheck_Credit_Cost.value == "Y") {
                    senao117m021.readOnly = false; //Invoice No欄位
                    senao117m032_0.disabled = false;	//簡易報關-是
                    senao117m032_1.disabled = false;	//簡易報關-否					
                } else {
                    senao117m021.readOnly = true; //Invoice No欄位
                    senao117m032_0.disabled = true;	//簡易報關-是
                    senao117m032_1.disabled = true;	//簡易報關-否
                }
            } else {
                senao117m030.disabled = true; //停用支付運費下拉選單
                senao117m021.readOnly = true; //Invoice No欄位
                senao117m032_0.disabled = true;	//簡易報關-是
                senao117m032_1.disabled = true;	//簡易報關-否
            }

            if (IsInvaildDept(senao117m004.value)) {	//判斷是否為失效部門
                senao117m004.value = "";	//清空部門
                senao117m004_t1.value = "";	//清空部門
            }

            if (IsInvaildDept(senao117m031.value)) {	//判斷是否為失效部門
                senao117m031.value = "";	//清空部門
                senao117m031_t1.value = "";	//清空部門
            }
        }

        if (workItemSource == "1" || workItemSource == "2") {	//取回重辦
            if ($$("#senao117m020_0").is(":checked")) {
                senao117m030.disabled = false; //開放支付運費下拉選單
                if (isNotCheck_Credit_Cost.value == "Y") {
                    senao117m021.readOnly = false; //Invoice No欄位
                    senao117m032_0.disabled = false;	//簡易報關-是
                    senao117m032_1.disabled = false;	//簡易報關-否					
                } else {
                    senao117m021.readOnly = true; //Invoice No欄位
                    senao117m032_0.disabled = true;	//簡易報關-是
                    senao117m032_1.disabled = true;	//簡易報關-否
                }
            } else {
                senao117m030.disabled = true; //停用支付運費下拉選單
                senao117m021.readOnly = true; //Invoice No欄位
                senao117m032_0.disabled = true;	//簡易報關-是
                senao117m032_1.disabled = true;	//簡易報關-否
            }
        }

        if (Grid1Obj.getData().length > 0 || document.getElementById("Grid1").value.length > 2) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }
        //填單人以外關卡處理	
    } else {
        formserialnumber = senao117m002.innerHTML;
        var deliveryInfoArray = [];
        var deliveryInfo = {};
        var gridData = Grid1Obj.getData();

        //20200922 Milla 因生管-李芝穎 常常反應恩嘉的shipping 修改可出貨數量後，送出後都沒有改到資料，故將grid.reload 部份拆開為填單人及非填單人
        //更新Grid中的訂單狀態
        for (i = 0; i < gridData.length; i++) {
            //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
            //deliveryInfoArray = queryDeliveryDetail(senao117m007.value, gridData[i][3]);
            deliveryInfoArray = queryDeliveryDetail(senao117m007.value, gridData[i][4]);//料號
            deliveryInfo = deliveryInfoArray[0];
            gridData[i][1] = queryOrderStatus(deliveryInfo.headerId, deliveryInfo.sourceLineId); //訂單狀態
        }
        Grid1Obj.reload([]); //清空Group Grid資料
        Grid1Obj.reload(eval(gridData)); //存入更新後的Grid資料

        //申請人關卡(原0010-0010)	
        if (activityId === "UserTask_206") {
            senao117m014.value = ""; //清空，避免重發表單將值帶入

            //出貨生管人員關卡(原0010-0010)	|| 申請人(修改數量)→樣品訂單	
        } else if (activityId == "UserTask_79" || activityId == "UserTask_297" || activityId == "ENR_BU_PMC") {
            // confirm("請編輯單身的「確認可出貨數」");
            senao117m014.disabled = false;
            senao117m014_b1.disabled = false;
            prodMgmtApprover.value = userId;
            if (serialNumber == "STW11700000004" || serialNumber == "STW11700000005") {
                btnEdit.disabled = false;
                senao117m014.readOnly = false;
                senao117m019.readOnly = false;
                gsenao117d011.readOnly = false;
            }

            if (activityId == "UserTask_297") {	//申請人(修改數量)→樣品訂單
                if (senao117m023_0.checked == true) {	//線上領料
                    var IsStock_In = CheckStock_In(formserialnumber);
                    if (IsStock_In != true) {
                        //alert("線上領料作業未完成，請勿簽核!!");
                        alert(querySNSI009(formId, "001", locale, "", "", ""));
                    } else {
                        //alert("線上領料作業已完成，請簽核!!\n如數量不符, 請修改確認可出貨數， 謝謝!!");
                        alert(querySNSI009(formId, "002", locale, "", "", ""));
                    }
                }
            }

            //出貨會計人員關卡(原0040-0030)		
        } else if (activityId === "UserTask_157") {
            senao117m021.readOnly = false; //啟用Invoice No欄位
        }

        if (activityId == "UserTask_261") {    //20190923 恩睿網通事業部 Warehouse 關卡
            $$("#senao137m032").css({ "background-color": EDIT_BGCOLOR });
        }
    }
    //20230629 Calvin 修正解Hold放在此處沒有重抓DN資料，改到上方
    /*
    var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料
    if (typeof (Grid1Obj) !== "undefined") {  //判斷grid物件是否存在表單中   
        if (tGrid1.length > 1) {  //判斷Grid是否有資料
            Grid1Obj.reload(eval(tGrid1));  //若Grid有資料則將存於隱藏中的值載入Grid中
        }
    }
    */
    setGridStyle();

    //20200330 Milla 資訊服務申請單#0000008043
    if (formserialnumber !== "") {
        lbl_Subject.innerText = "主旨：" + getSubject(serialNumber);
    }
    return true;
}

function formSave() {
    var errMsg = "";
    var taxCode = "";
    var availableQty = "";
    var gridData = Grid1Obj.getData();
    var i = 0;

    if (activityId == "UserTask_3") {   //第一關填單人
        if ($$("#form_org").val() == "") {
            //errMsg += "請先選擇【廠區】!!\n";
            errMsg += "[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
        }
        if (senao117m003.value.trim() == "") {
            //errMsg += "「申請人」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m003").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        } else {
            //確認人員是否在職
            var sqlId = "getUser_NotLeave";
            var tParams = [];
            var data = [];
            tParams.push(senao117m003.value.trim());
            tParams.push(systemDateTime);
            data = ajax_EFGPSQLQuery(sqlId, tParams);
            if (data.length > 0) {

            } else {
                //errMsg += "「申請人」已離職!! \n";
                errMsg += "[" + $$("#lbl_senao117m003").html() + "]" + querySNSI009(form_ou.value, "034", locale, "", "", "") + "\n";
            }
        }
        if (senao117m004.value.trim() == "" || senao117m004_t1.value.trim() == "") {
            //errMsg += "「申請單位」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m004").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m025.value.trim() == "") {
            //errMsg += "請選擇「Shipping Type」!! \n";
            errMsg += "[" + $$("#lbl_senao117m025").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
        }
        if (senao117m007.value.trim() == "") {
            //errMsg += "「Delivery NO」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m007").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        } else {
            if (checkIsDeliveryNoClose(senao117m007.value)) {
                if (userId != "102451") { //Jeff，開發人員測試用
                    //errMsg += "Delivery No :" + senao117m007.value + " 已Close，不允許申請傳送!! \n";
                    errMsg += querySNSI009(formId, "006", locale, "", "", "").replace("@@1", senao117m007.value) + "\n";
                }
            }
        }
        if (senao117m028.value.trim() == "") {
            //errMsg += "「負責業務」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m028").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        } else {
            //確認人員是否在職
            var sqlId = "getUser_NotLeave";
            var tParams = [];
            var data = [];
            tParams.push(senao117m028.value.trim());
            tParams.push(systemDateTime);
            data = ajax_EFGPSQLQuery(sqlId, tParams);
            if (data.length > 0) {

            } else {
                //errMsg += "「負責業務」已離職!! \n";
                errMsg += "[" + $$("#lbl_senao117m028").html() + "]" + querySNSI009(form_ou.value, "034", locale, "", "", "") + "\n";
            }
        }

        if (senao117m031.value.trim() == "" || senao117m031_t1.value.trim() === "") {
            //errMsg += "「業務部門」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m031").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }

        if (senao117m008.value.trim() == "") {
            //errMsg += "「Shipping Mark」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m008").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m009.value.trim() == "") {
            //errMsg += "「Accountee」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m009").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m010.value.trim() == "") {
            //errMsg += "「Consignee」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m010").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m011.value.trim() == "") {
            //errMsg += "「Notify」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m011").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m012.value.trim() == "") {
            //errMsg += "「Shipping Way」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m012").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m013.value.trim() == "") {
            //errMsg += "「預計出貨日」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m013").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }

        if (!$$("input[name='senao117m020']:checked").val()) {
            //errMsg += "請選擇「Shipping 種類」!! \n";
            errMsg += "[" + $$("#lbl_senao117m020").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
        } else {
            //出口 radio
            if ($$("#senao117m020_0").is(":checked")) {
                if (senao117m030.value == "") {
                    //errMsg += "請選擇「支付運費」方式!! \n";
                    errMsg += "[" + $$("#lbl_senao117m030").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
                }

                //選擇出口時，Grid中的稅率應為0%稅率				
                for (i = 0; i < gridData.length; i++) {
                    taxCode = gridData[i][2]; //TAX_CODE
                    if (taxCode.indexOf('0%') <= -1) {
                        //errMsg += "選擇「出口」時，稅率應為零稅率!! \n";
                        errMsg += querySNSI009(formId, "007", locale, "", "", "") + "\n";
                        break;
                    }
                }
            }

            //內銷 radio
            if ($$("#senao117m020_1").is(":checked")) {
                if (senao117m015.value === "") {
                    //errMsg += "「聯絡人」請勿空白!! \n";
                    errMsg += "[" + $$("#lbl_senao117m015").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
                }
                if (senao117m016.value === "") {
                    //errMsg += "「聯絡電話」請勿空白!! \n";
                    errMsg += "[" + $$("#lbl_senao117m016").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
                }
                if (senao117m017.value === "") {
                    //errMsg += "「送貨地址」請勿空白!! \n";
                    errMsg += "[" + $$("#lbl_senao117m017").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
                }

                //選擇內銷時，Grid中的稅率不得為0%稅率				
                for (i = 0; i < gridData.length; i++) {
                    taxCode = gridData[i][2]; //TAX_CODE
                    if (taxCode.indexOf('0%') > -1) {
                        //errMsg += "選擇「內銷」時，稅率不得為零稅率!! \n";
                        errMsg += querySNSI009(formId, "008", locale, "", "", "") + "\n";
                        break;
                    }
                }
            }
        }
        if (senao117m018.value.trim() === "") {
            //errMsg += "「備註」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m018").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        } else {
            var charQty = countCharacter(senao117m018.value.trim());
            if (charQty > 1000) {
                //errMsg += "「備註」欄位共 " + charQty + " 碼, 不可超過1000碼(中文字為3碼)!! \n";
                errMsg += querySNSI009(formId, "009", locale, "", "", "").replace("@@1", charQty) + "\n";
            }
            //20241112 Neil(S)
            var checkcrlf = senao117m018.value.split(/\r?\n|\r/);
            var nonEmptyLineCount = 0;
            // 遍歷每一行，計算非空白行
            for (var i = 0; i < checkcrlf.length; i++) {
                nonEmptyLineCount++;
            }
            console.log("非空白行數: ", nonEmptyLineCount);
            console.log("checkcrlf.length: ", checkcrlf.length);

            if (nonEmptyLineCount > 26) {
                errMsg += "因備註行數超過 26 行會造成報表匯出異常，請修正後再送出。";
            }
            //20241112 Neil(E)
        }
        if (gridData.length === 0) {
            //errMsg += "「出貨明細」請勿空白!! \n";
            errMsg += "[" + $$("#Label63").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }

        var resultInfo = [];
        var orderNo = "";
        var lineNo = "";
        var orderTypeId = "";
        var Customer_PO = "";
        var IsCheck_Customer_PO = false;
        var IsDiff_Customer_PO = false;

        deliveryInfoArray = queryDeliveryDetail(senao117m007.value, "");
        if (deliveryInfoArray.length > 0) {
            deliveryInfo = deliveryInfoArray[0]; //查詢出來可能不只一筆資料，但只取第一筆中的資料即可
            if (!$$.isEmptyObject(deliveryInfo)) {
                senao117m024.value = deliveryInfo.customerNumber;	//取DN的客戶代號
            }
        }

        if (isValueInSNSI003("SN117_S14", senao117m024.value) == "Y") { //若客戶為Sophos
            IsCheck_Customer_PO = true;
        }
        for (i = 0; i < gridData.length; i++) {

            //20211118 Milla 資訊服務申請單SENAO10100001485 依Sophos規範, 1張PO只能配1張invoice number，為避免人工誤將不同PO key同筆DN, 請在ezflow shipping memo就先跳出提醒，但不卡死
            if (IsCheck_Customer_PO) {
                if (i == 0) {
                    //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                    //Customer_PO = gridData[i][6]; //Customer_PO
                    Customer_PO = gridData[i][7]; //Customer_PO
                } else {
                    //if (Customer_PO != fixNull(gridData[i][6]).trim()){
                    if (Customer_PO != fixNull(gridData[i][7]).trim()) {
                        IsDiff_Customer_PO = true;
                    }
                }
            }
            //變更後生產地(20230518 Calvin 新增此欄位，原欄位順序往後挪一位)
            /*
            orderNo = gridData[i][5]; //訂單號碼
            lineNo = gridData[i][12]; //line_no
            orderTypeId = gridData[i][15]; //ORDER_TYPE_ID
            */
            orderNo = gridData[i][6]; //訂單號碼
            lineNo = gridData[i][13]; //line_no
            orderTypeId = gridData[i][16]; //ORDER_TYPE_ID
            resultInfo = checkIsApplyOEModify(orderNo, lineNo, orderTypeId);
            if (!$$.isEmptyObject(resultInfo)) {
                if (resultInfo.isApplyOEModify) {
                    //errMsg += "目前 " + resultInfo.applicantName +" 申請訂單異動中(" + resultInfo.serialNo + ")!! \n";
                    errMsg += querySNSI009(formId, "010", locale, "", "", "").replace("@@1", resultInfo.applicantName).replace("@@2", resultInfo.serialNo) + "\n";
                }
                break;
            }
            if (querySENAO113_45(orderTypeId)) {	// 取OrderType是否不需卡控Credit和材料成本率
                isNotCheck_Credit_Cost.value = "Y";

            } else {
                isNotCheck_Credit_Cost.value = "";
            }
        }

        //20211118 Milla 資訊服務申請單SENAO10100001485 依Sophos規範, 1張PO只能配1張invoice number，為避免人工誤將不同PO key同筆DN, 請在ezflow shipping memo就先跳出提醒，但不卡死
        if (IsDiff_Customer_PO) {
            //alert("此張Shipping Memo含不同 " + senao117m009.value + " PO, 是否仍要傳送?");
            alert(querySNSI009(formId, "003", locale, "", "", "").replace("@@1", senao117m009.value));
        }


        if (isNotCheck_Credit_Cost.value == "Y") {	//樣品訂單
            if ($$("#senao117m020_0").is(":checked")) {	//出口
                if (!$$("#senao117m032_0").is(":checked") && !$$("#senao117m032_1").is(":checked")) {
                    //errMsg += "請選擇是否為「簡易報關」!! \n";
                    errMsg += "[" + $$("#lbl_senao117m032").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
                }
                if ($$("#senao117m032_0").is(":checked")) {	//簡易報關 業務要自行填Invoice NO
                    if (senao117m021.value == "") {
                        //errMsg += "「Invoice NO」請勿空白!! \n";
                        errMsg += "[" + $$("#lbl_senao117m021").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
                    }
                }
            }
        }


        if (errMsg == "") {
            senao117m005.value = genVersion(senao117m007.value); //產生新版本
            genSubject();
            prepareForFlow();
            prepareForMobile();

            //genNewForm(); //觸發解訂單XML　改成增加以下恩睿不須解訂單的判斷 Chandler.20200226
            if ((form_ou.value == "enr" || form_ou.value == "stw") && senao117m021.value.trim() != "") {
                //alert("【恩睿訂單】已開立Invoice, 不需做觸發『解訂單』之檢查!.");
                alert(querySNSI009(formId, "004", locale, "", "", ""));
                for (i = 0; i < gridData.length; i++) {
                    //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                    /*
                    var headerId = gridData[i][18]; //訂單號碼
                    var lineId = gridData[i][17]; //line_no   
                    */
                    var headerId = gridData[i][19]; //訂單號碼
                    var lineId = gridData[i][18]; //line_no					
                    callPKG_SN_OM_RELEASE_SO_LINE(headerId, lineId, "已開立Invoice, 不需做觸發『解訂單』之檢查");
                    //alert("headerId: "+headerId+", lineId:"+ lineId );
                    gridData[i][1] = "OPEN";
                }
            } else if (isNotCheck_Credit_Cost.value != "Y") {	//isNotCheck_Credit_Cost為樣品訂單不卡信用額度及成本，此條件為除了樣品訂單外其他要卡控信用額度
                genNewForm(); //觸發解訂單XML
            }

            /*20191113 Milla 林美儀反應訂單有被hold住, 但沒有觸發解訂單，
            後來發現資料上有XML資料, 但isGenNewFormAvailable的值是N，
            流程設定是判斷isGenNewFormAvailable才會執行SENAO117_trigger103.jsp, 
            故在此再判斷若有XML資料則設定isGenNewFormAvailable = Y*/
            if (triggerData.value !== '') {
                isGenNewFormAvailable.value = 'Y';
            }

            showVarForFlow(true);

            if (typeof (Grid1Obj) !== "undefined") {  //判斷grid物件是否存在表單中  
                document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中  
                Grid1Obj.clearBinding();
            }
        }

        //出貨生管人員關卡(原0010-0010)	|| 申請人(修改數量)→樣品訂單
    } else if (activityId == "UserTask_79" || activityId == "UserTask_297" || activityId == "ENR_BU_PMC") {
        if (senao117m014.value === "") {
            //errMsg += "「可出貨日」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m014").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (senao117m019.value === "") {
            //errMsg += "「生管/申請人(修改數量)關卡 會辦意見」請勿空白!! \n";
            errMsg += "[" + $$("#Label272").html() + " " + $$("#lbl_senao117m019").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }

        if (activityId == "UserTask_297") {	//申請人(修改數量)→樣品訂單
            if (senao117m023_0.checked == true) {	//線上領料
                if ($$("#senao117m020_0").is(":checked") && $$("#senao117m032_1").is(":checked")) {	//有勾選線上領料且選擇「出口」時且為非簡易報關(即正式報關)時 業務要上傳重量資料
                    if (checFileCount("申請人(修改數量)") < 1) {
                        //errMsg += '請上傳重量資料!!!\n';
                        errMsg += querySNSI009(formId, "011", locale, "", "", "") + "\n";
                    }
                }

                /*20211118 Milla 資訊服務申請單#SENAO10100001176  線上領料方式出貨新增檢查Shopfloor是否有申請入庫表單，
                若有表單才可簽核(同一般線上領料檢查方式)。
                若否，此表單無法簽核並顯示『入庫作業未完成，請確認~』字樣之錯誤訊息。*/

                var IsStock_In = CheckStock_In(formserialnumber);
                if (IsStock_In != true) {
                    //errMsg += "線上領料作業未完成，請勿簽核!!";
                    errMsg += querySNSI009(formId, "001", locale, "", "", "");
                } else {
                    var Item_Qty_Array = Stock_In_Qty(formserialnumber);
                    var Item_Qty_Object = {};
                    var ItemList = "";
                    if (Item_Qty_Array.length > 0) {
                        for (i = 0; i < Item_Qty_Array.length; i++) {
                            Item_Qty_Object = Item_Qty_Array[i];
                            ItemList += Item_Qty_Object.ItemNo + ",";
                            // errMsg += "料號:" + Item_Qty_Object.ItemNo;
                            // errMsg += "數量:" + Item_Qty_Object.Qty;
                            var grid_item_totqty = 0;
                            for (var j = 0; j < gridData.length; j++) {
                                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                                //if (gridData[j][3] == Item_Qty_Object.ItemNo){
                                if (gridData[j][4] == Item_Qty_Object.ItemNo) {
                                    //if (gridData[j][10] != ""){
                                    if (gridData[j][11] != "") {
                                        //grid_item_totqty += Number(gridData[j][10]);
                                        grid_item_totqty += Number(gridData[j][11]);
                                    }
                                }
                            }
                            if (Number(Item_Qty_Object.Qty) != Number(grid_item_totqty)) {
                                //errMsg += "料號:" + Item_Qty_Object.ItemNo + "的可出貨數總數與入庫數不符，請再確認!!\n";
                                errMsg += querySNSI009(formId, "012", locale, "", "", "").replace("@@1", Item_Qty_Object.ItemNo) + "\n";
                            }
                        }

                        //20211118 Milla 因之前有發生其中有幾筆item未開立入庫單，但已簽核，所以再增加判斷表單的Item是否都有開入庫單
                        if (ItemList != "") {
                            for (var a = 0; a < gridData.length; a++) {
                                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                                //if ((ItemList.indexOf(gridData[a][3]) < 0) && (Number(gridData[a][10]) > 0)){
                                if ((ItemList.indexOf(gridData[a][4]) < 0) && (Number(gridData[a][11]) > 0)) {
                                    //errMsg += "料號:" + gridData[a][3] + "未申請入庫單，請再確認!!\n";
                                    //errMsg += querySNSI009(formId,"013",locale,"","","").replace("@@1", gridData[a][3]) + "\n";
                                    errMsg += querySNSI009(formId, "013", locale, "", "", "").replace("@@1", gridData[a][4]) + "\n";
                                }
                            }
                        }
                    }
                }
            }

        }

        var apply_tot_qty = 0;
        var real_tot_qty = 0;
        for (i = 0; i < gridData.length; i++) {
            //變更後生產地(20230518 Calvin 新增此欄位，原欄位順序往後挪一位)
            /*
            availableQty = gridData[i][10]; //確認可出貨數
            apply_tot_qty += Number(gridData[i][9]);	//預計出貨數
            real_tot_qty += Number(gridData[i][10]);	//確認可出貨數
            */
            availableQty = gridData[i][11]; //確認可出貨數
            apply_tot_qty += Number(gridData[i][10]);	//預計出貨數
            real_tot_qty += Number(gridData[i][11]);	//確認可出貨數
            if (availableQty == "") {
                //errMsg += "第" + (i+1) +"筆資料請輸入「確認可出貨數」!! \n";
                errMsg += querySNSI009(form_ou.value, "015", locale, (i + 1), "", $$("#lbl_gsenao117d011").html()) + "\n";
            }
        }

        //20200924 Milla 因生管李芝穎 反應恩嘉的shipping memo 只要有修改數量送出後，都沒有實際修改成功，故在此先加上判斷點
        if ((senao117m009.value.indexOf("恩嘉") > -1) && (form_ou.value == "senao")) {
            if (apply_tot_qty == real_tot_qty) {
                //msg = "此筆恩嘉Shipping Memo 申請數 = 可出貨數";
                msg = querySNSI009(formId, "014", locale, "", "", "");
                if (!confirm(msg)) {
                    return false;
                }
            } else {
                //msg = "此筆恩嘉Shipping Memo 申請數 > 可出貨數";
                msg = querySNSI009(formId, "015", locale, "", "", "");
                if (!confirm(msg)) {
                    return false;
                }
            }
        }
        if (activityId == "UserTask_79") { //生管出貨
            errMsg += SHOPIFY_CREATE_WORKORDER(); //開立工單  
        }
        //準備發信內容
        if (errMsg == "") {
            var expectShipDate = senao117m013.value;
            var actualShipDate = senao117m014.value;
            var deliveryNo = senao117m007.value;
            var expectShipQty = "";
            var lastAcutalShipQty = "";
            var actualShipQty = "";
            var orderNo = "";
            var lineNo = "";
            var itemNo = "";
            var productSpec = "";
            mailContent.value = "";
            var isSameShipDate = true; //預計出貨日與確認可出貨日是否相同
            var diffShipQtyRow = 0; //預計出貨數與確認出貨數不同的筆數

            updateActualShipDate(actualShipDate, deliveryNo);

            if (actualShipDate != expectShipDate) {
                isSameShipDate = false;
                mailContent.value += "生管確認可出貨日<font color='red'><b>[" + actualShipDate + "]</b></font> （原預計出貨日[" + expectShipDate + "]）<br>";
            }
            for (i = 0; i < gridData.length; i++) {
                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                /*
                expectShipQty = gridData[i][9]; //預計出貨數
                actualShipQty = gridData[i][10]; //確認可出貨數
                lastAcutalShipQty = gridData[i][16]; //前次確認可出貨數
                orderNo = gridData[i][5]; //訂單號碼
                lineNo = gridData[i][12]; //line_no
                itemNo = gridData[i][3]; //料號
                productSpec = gridData[i][4]; //品名
                */
                expectShipQty = gridData[i][10]; //預計出貨數
                actualShipQty = gridData[i][11]; //確認可出貨數
                lastAcutalShipQty = gridData[i][17]; //前次確認可出貨數
                orderNo = gridData[i][6]; //訂單號碼
                lineNo = gridData[i][13]; //line_no
                itemNo = gridData[i][4]; //料號
                productSpec = gridData[i][5]; //品名
                //前次確認可出貨數沒值
                if (lastAcutalShipQty == "") {
                    if (actualShipQty != expectShipQty) {
                        mailContent.value += "訂單號碼[" + orderNo + "-" + lineNo + "];料號[" + itemNo + "];品名[" + productSpec +
                            "] 生管確認可出貨數改為: <font color='red'><b>" + actualShipQty + "</b></font>　（原預計出貨數[" + expectShipQty + "]）<br>";
                        diffShipQtyRow++;
                    }
                    //前次確認可出貨數有值	
                } else {
                    //[可出貨數]與[預計出貨數]不同、[可出貨數]與[前次確認可出貨數]不同
                    if ((actualShipQty != expectShipQty) || (actualShipQty != lastAcutalShipQty)) {
                        mailContent.value += "訂單號碼[" + orderNo + "-" + lineNo + "];料號[" + itemNo + "];品名[" + productSpec +
                            "] 生管確認可出貨數改為: <font color='red'><b>" + actualShipQty + "</b></font>　（原預計出貨數[" + expectShipQty + "]）<br>";
                        diffShipQtyRow++;
                    }
                }
            }
            if (isSameShipDate && diffShipQtyRow == 0) {
                mailContent.value += "確認如期且足數出貨 <br>";
            }
            if (mailContent.value != "") {
                mailContent.value = "EasyFlow單號[" + senao117m002.innerHTML + "]<br>生管人員修改EasyFlow [SHIPPING MEMO] Delivery NO:<font color=red><b>[" + deliveryNo + "]</b></font> 紀錄如下: <BR>" + mailContent.value;
            }
        }

        //出貨倉管人員關卡(原0030-0010)	
    } else if (activityId === "UserTask_111") {
        isWarehouseApproved.value = "Y"; //倉管人員已簽核，不可撤簽

        /*20211118 Milla 資訊服務申請單#SENAO10100001176  "出貨倉管人員關卡" 簽核時，新增以下2點檢查: 1.新增檢查 Delivery NO 在 Oracle狀態是否為『Closed』，若是表單才可簽核(線上領料方式出貨除外)，若否，此表單無法簽核並顯示『此DN狀態不是Closed，請確認~』字樣之錯誤訊息。*/

        if (senao117m023_0.checked == false) {	//非線上領料
            if (!checkDNClosed()) {
                //errMsg += '此[DN]狀態不是Closed，請確認!\n';
                errMsg += querySNSI009(formId, "016", locale, "", "", "") + "\n";
            }
        }


        //進出口人員[簽核]關卡(原0040-0040)	
    } else if (activityId === "UserTask_145") {
        if (senao117m021.value === "") {
            //errMsg += "「Invoice NO」請勿空白!! \n";
            errMsg += "[" + $$("#lbl_senao117m021").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
    } else if (activityId == "UserTask_261") {    //20190923 恩睿網通事業部 Warehouse 關卡
        if ($$("#senao137m032").val() === '') {
            //errMsg += '[Tracking Number]不得空白\n';
            errMsg += "[" + $$("#lbl_senao117m032").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n";
        }
        if (!checkDNClosed()) {
            //errMsg += '[DN]尚未Closed, 請確認是否完成Oracle的出貨作業!!!\n';
            errMsg += querySNSI009(formId, "017", locale, "", "", "") + "\n";
        }
    } else if (activityId == "UserTask_359") {    //填單人(夾附件) 樣品訂單或不須卡控Credit Check的訂單且總額<5萬
        if (checFileCount("填單人(夾附件)") < 3) {
            //errMsg += '請上傳(1) Invoice; (2) PO(或PI); (3) 簡易報單資料上傳!!!\n';
            errMsg += querySNSI009(formId, "018", locale, "", "", "") + "\n";
        }
    }


    if (errMsg == "") {
        return true;
    } else {
        alert(errMsg);
        return false;
    }
    return true;

}
/*
    SFIS開立工單
*/
function SHOPIFY_CREATE_WORKORDER() {
    var errMsg = '';
    var ShopifySku = ''
    var gridData = Grid1Obj.getData();
    var postArr = [];
    for (var i = 0; i < gridData.length; i++) {
        var row = i + 1;
        /* if (gridData[i][4].trim() == ShopifySku) {
             var post = {
                 CREATOR: 'EFGP',
                 SHIPPING_MEMO_NO: senao117m002.innerHTML,
                 TOTAL_QTY: row,
                 PART_NUM: gridData[i][4].trim(), //料號
                 ORDER_NO: gridData[i][6].trim(), //訂單號碼
                 ORDER_QTY: gridData[i][10].trim()
             };
             postArr.push(post);
         }*/
        var post = {
            CREATOR: 'EFGP',
            EFGP_NUM: senao117m002.innerHTML,
            TOTAL_QTY: row,
            PART_NUM: gridData[i][4].trim(), //料號
            PO_NUM: gridData[i][6].trim(), //訂單號碼
            QTY: gridData[i][10].trim()
        };
        var result = execAPIOther('BPM_SHOPIFY_CREATE_WORKORDER', post);
        if (result.status.result == 'NG') {
            errMsg += result.status.MSG;
        }
    }
    /* var result = execAPIOther('BPM_SHOPIFY_CREATE_WORKORDER', postArr);
     if (result.status.result == 'NG') {
         errMsg = result.status.MSG;
     }*/
     return errMsg;
}
/**
 * 產生表單主旨
 */
function genSubject() {
    if (window.parent.document.forms[0].txtSubject !== undefined) {
        var version = senao117m005.value;
        var finalSubject = "";
        var prefixSubject = "Shipping Memo_" + senao117m003_t1.value + "_出貨單" + senao117m007.value + "_第" + version.substring(version.length - 2, version.length) + "版";
        var applySubject = window.parent.document.forms[0].txtSubject.value;
        if (applySubject !== "") {
            if (applySubject.search(prefixSubject) === -1) {
                finalSubject = prefixSubject + "_" + applySubject;
            } else {
                finalSubject = applySubject;
            }
        } else {
            finalSubject = prefixSubject;
        }
        window.parent.document.forms[0].txtSubject.value = finalSubject;
    }
}

/**
 * 準備流程所需變數
 */
function prepareForFlow() {
    isDiffApplicant.value = senao117m003.value !== userId ? 'Y' : 'N';
    isDiffSalesMan.value = (senao117m028.value !== senao117m003.value) ? "Y" : "N";
    isMaterialUnit.value = isValueInSNSI003("SN117_S07", senao117m004.value);
    //isExportAndSellerPay.value = ((senao117m012.value === "AIR" || senao117m012.value === "DHL" ) && senao117m022.value === "1" ) ? "Y" : "N"; //因為沒有senao117m012，因此mark此段
    isExportAndSellerPay.value = "N";
    isUnderDeptLevel.value = checkIsApplicantMgrUnderDeptLevel();
    isBrandMarketUnit.value = isValueInSNSI003("SN117_S13", senao117m004.value);
    isSN117_10_User = checkIsGroupUser(senao117m003.value, "SN117_10");
    //applicantMgrId.value = (isSN117_10_User === "Y") ? queryManagerByEmpId(senao117m003.value) : "";
    applicantMgrId.value = queryManagerByEmpId(senao117m003.value);
    tmpUserInfoArray = queryStdGroupById("SN117_10");
    sn117_10_UserIds.value = (isSN117_10_User === "Y") ? getUserIdArray(tmpUserInfoArray).join(";") : "";
    if (isValueInSNSI003("SN117_S13", senao117m024.value) == "Y") { //若客戶為sonicWALL
        tmpUserInfoArray = queryStdGroupById("SN117_02");
        sn117_02_UserIds.value = getUserIdArray(tmpUserInfoArray).join(";");
    }
    if (window.parent.document.forms[0].txtSubject !== undefined) {
        formSubject.value = window.parent.document.forms[0].txtSubject.value;
    }

    if (isValueInSNSI003("SN117_S13", senao117m004.value) == "Y") {
        tmpUserInfoArray = queryStdGroupById("SN117_24");
        brandSalesMailBox.value = getUserIdArray(tmpUserInfoArray).join(";");
    } else {
        brandSalesMailBox.value = "";
    }


    isGenNewFormAvailable.value = "N";

    //20190923 Milla 增加原恩睿ENI117的流程	
    if (($$("#form_ou").val() == 'enr' || $$("#form_ou").val() == 'stw') && isValueInSNSI003("SN117_S10", senao117m004.value) == 'Y') {
        $$("#ENRprodMgmtApprover").val('Y');
    }

    if (isValueInSNSI003("SN117_S11", senao117m031.value) == "Y" && isValueInSNSI003("SN117_S12", senao117m024) == "N") {
        //20201013 Milla Laura.Chen(陳意雯)於20200901 Mail 提出業務八課非Fortinet客戶的業務事項直接route到Eddie副總
        Sales8_NotApproveDivision.value = "Y";
    } else {
        Sales8_NotApproveDivision.value = "N";
    }
}

/**
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile() {
    senao117m025_m.value = senao117m025[senao117m025.selectedIndex].text;
    if ($$("#senao117m020_0").is(":checked")) {
        senao117m020_m.value = senao117m020_0.text;
    } else if ($$("#senao117m020_1").is(":checked")) {
        senao117m020_m.value = senao117m020_1.text;
    } else if ($$("#senao117m020_2").is(":checked")) {
        senao117m020_m.value = senao117m020_2.text;
    } else if ($$("#senao117m020_3").is(":checked")) {
        senao117m020_m.value = senao117m020_3.text;
    } else if ($$("#senao117m020_4").is(":checked")) {
        senao117m020_m.value = senao117m020_4.text;
    }
    senao117m030_m.value = senao117m030[senao117m030.selectedIndex].text;
}

/**
 * 於瀏覽器console顯示流程所需變數值
 * @param {boolean} isDebugMode 
 */
function showVarForFlow(isDebugMode) {
    var totalVar = [];
    if (isDebugMode) {
        totalVar.push("  isDiffSalesMan.value = " + isDiffSalesMan.value);
        totalVar.push("  isMaterialUnit.value = " + isMaterialUnit.value);
        totalVar.push("  isExportAndSellerPay.value = " + isExportAndSellerPay.value);
        totalVar.push("  isUnderDeptLevel.value = " + isUnderDeptLevel.value);
        totalVar.push("  isBrandMarketUnit.value = " + isBrandMarketUnit.value);
        totalVar.push("  applicantMgrId.value = " + applicantMgrId.value);
        totalVar.push("  sn117_10_UserIds.value = " + sn117_10_UserIds.value);
        totalVar.push("  sn117_02_UserIds.value = " + sn117_02_UserIds.value);
        totalVar.push("  brandSalesMailBox.value = " + brandSalesMailBox.value);
        totalVar.push("  isGenNewFormAvailable.value = " + isGenNewFormAvailable.value);
        // console.log("---- Variable Log ---- Start");
        // console.log(totalVar.join("\n"));
        // console.log("---- Variable Log ---- End");
    }
}

/**
 * [Grid] 新增資料
 */
function btnAdd_onclick() {
    var tGrid = Grid1Obj; //Grid物件
    var tGridId = "Grid1"; //表單element id
    var errMsg = "";
    if (errMsg !== "") {
        alert(errMsg);
        return false;
    } else {
        tGrid.addRow();  //將Binding欄位的資料填入Grid中
        tGrid.clearBinding();  //新增後清除Binding欄位資料  
        document.getElementById(tGridId).value = tGrid.toArrayString();  //將新的資料存入Grid隱藏欄位中
    }
}

/**
 * [Grid] 修改資料
 */
function btnEdit_onclick() {
    var tGrid = Grid1Obj; //Grid物件
    var tGridId = "Grid1"; //表單element id
    var tData = tGrid.value;
    var tGridData = tGrid.getData();
    var tGridIndex = tGrid.getSelectionProperty("index"); //可知道點選哪一筆
    var errMsg = "";
    if (tGridIndex !== -1) {
    } else {
        //alert("請先選擇下方一筆資料再做編輯");
        alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));
        return false;
    }

    if (form_org.value == "") {
        //errMsg +="請先選擇【廠區】!";
        errMsg += "[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
    }

    if (errMsg !== "") {
        alert(errMsg);
        return false;
    } else {
        tGrid.editRow();  //將Binding欄位的資料填入Grid中
        tGrid.clearBinding();  //新增後清除Binding欄位資料  
        document.getElementById(tGridId).value = tGrid.toArrayString();  //將新的資料存入Grid隱藏欄位中
        form_org.disabled = true;
    }
}

/**
 * [Grid] 刪除資料
 */
function btnDel_onclick() {
    var tGrid = Grid1Obj; //Grid物件
    var tGridId = "Grid1"; //表單element id
    var tGridData = tGrid.getData();
    var tGridIndex = tGrid.getSelectionProperty("index"); //可知道點選哪一筆
    var errMsg = "";
    if (tGridIndex !== -1) {
        tGrid.deleteRow();  //將Grid某筆資料刪除  
        tGrid.clearBinding();  //清除Binding欄位資料  
        document.getElementById(tGridId).value = tGrid.toArrayString();  //將新的資料存入Grid隱藏欄位中  
    } else {
        //alert("請先在下方選擇一筆資料，再做刪除!!\n");
        alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));
        return false;
    }
}

/**
 * 表單列印
 */
function formPrint_onclick() {
    var myWindow = window.open("/NaNaWeb/CustomSNO/jsp/SENAO117/SENAO117_print.jsp?formserialnumber=" + senao117m002.innerHTML, "", "width=900,height=650,menubar=yes,scrollbars=yes,location=no", false);
}

/** 
 * 負責業務開窗
*/
function senao117m028_b1_openDataChooser() {
    var params = [];

    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }

    params.push(OU_ID);
    params.push(ORG_ID);
    callSenaoCustomDataChooser("senao117m028_b1", "SALESREP_Org2", params, "");
}

/**
 * Delivery NO開窗
 */
function senao117m007_b1_openDataChooser() {
    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }

    var params = [];
    params.push(ORG_ID);
    callSenaoCustomDataChooser("senao117m007_b1", "SENAO117_23_O", params, "");
}

/**
 * Accountee開窗
 */
function senao117m009_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m009_b1", "SYS_LW_ACT", [], "");
}

/**
 * Consignee開窗
 */
function senao117m010_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m010_b1", "SYS_LW_CSN", [], "");
}

/**
 * Consignee欄位
 */
function senao117m010_onchange() {
    if ($$("#senao117m010").val() !== '') {
        $$("#senao117m010_t1_b1").attr("disabled", false);
        $$("#senao117m010_t1").css({ "background-color": EDIT_BGCOLOR });
    }
    return true;
}

/**
 * Consignee開窗(第二個)
 */
function senao117m010_t1_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m010_t1_b1", "SYS_LW_CSN", [], "");
}

/**
 * Notify開窗
 */
function senao117m011_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m011_b1", "SYS_LW_NTF", [], "");
}

/**
 * Notify欄位
 */
function senao117m011_onchange() {
    if ($$("#senao117m011").val() !== '') {
        $$("#senao117m011_t1_b1").attr("disabled", false);
        $$("#senao117m011_t1").css({ "background-color": EDIT_BGCOLOR });
    }
    return true;
}

/**
 * Notify開窗(第二個)
 */
function senao117m011_t1_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m011_t1_b1", "SYS_LW_NTF", [], "");
}

/**
 * Shipway開窗
 */
function senao117m012_b1_openDataChooser() {
    callSenaoCustomDataChooser("senao117m012_b1", "SYS_LW_SHIPWAY", [], "");
}

/**
 * Shipping 種類
 */
function senao117m020_onclick() {
    senao117m012.value = ""; //清空Shipping Way
    senao117m012_b1.disabled = false;
    //出口
    if ($$("#senao117m020_0").is(":checked")) {
        senao117m030.disabled = false; //開放支付運費下拉選單
        if (isNotCheck_Credit_Cost.value == "Y") {
            senao117m021.readOnly = false; //Invoice No欄位
            senao117m032_0.disabled = false;	//簡易報關-是
            senao117m032_1.disabled = false;	//簡易報關-否
        } else {
            senao117m021.readOnly = true; //Invoice No欄位
            senao117m032_0.disabled = true;	//簡易報關-是
            senao117m032_1.disabled = true;	//簡易報關-否
            senao117m032_0.checked = false;
            senao117m032_1.checked = false;
        }
    } else {
        senao117m030.disabled = true; //停用支付運費下拉選單
        senao117m021.readOnly = true; //Invoice No欄位
        senao117m032_0.disabled = true;	//簡易報關-是
        senao117m032_1.disabled = true;	//簡易報關-否
        senao117m032_0.checked = false;
        senao117m032_1.checked = false;
        senao117m030.value = "";

    }
}

/**
 * 申請人欄位，查詢申請人相關資料
 */
function senao117m003_onchange() {
    var userInfo = {};
    if (senao117m003.value !== "") {
        userInfo = queryUserByEmpId(senao117m003.value);
        if (!$$.isEmptyObject(userInfo)) {
            senao117m003.value = userInfo.userId; //申請人ID
            senao117m003_t1.value = userInfo.userName; //申請人名稱
            senao117m004.value = userInfo.unitId; //申請單位ID
            senao117m004_t1.value = userInfo.unitName; //申請單位名稱
        } else {
            //alert("輸入的申請人代號:" + senao117m003.value + " 查無資料，請重新輸入!! \n");
            alert("[" + $$("#lbl_senao117m003").html() + "] " + querySNSI009(form_ou.value, "031", locale, "", "", ""));
            senao117m003.value = "";
            senao117m003_t1.value = "";
            senao117m005.value = "";
            senao117m004_t1.value = "";
        }
    } else {
        senao117m003.value = "";
        senao117m003_t1.value = "";
        senao117m005.value = "";
        senao117m004_t1.value = "";
    }
    return true;
}

/**
 * Delivery NO欄位，資料異動時直接呼叫senao117m007_process()
 */
function senao117m007_onblur() {
    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        senao117m007.value = "";
        return false;
    }

    senao117m007_process();
}

/**
 * 提供Delivery NO開窗後、手動輸入後呼叫，重新查詢Invoice No、查詢出貨資料
 */
function senao117m007_process() {
    var deliveryInfoArray = [];
    var deliveryInfo = {};
    var OrderType = "";
    showDeliveryNO.innerText = senao117m007.value;

    if ($$("#senao117m020_0").is(":checked")) {
        senao117m020.value = senao117m020_0.value;
    } else if ($$("#senao117m020_1").is(":checked")) {
        senao117m020.value = senao117m020_1.value;
    } else if ($$("#senao117m020_2").is(":checked")) {
        senao117m020.value = senao117m020_2.value;
    } else if ($$("#senao117m020_3").is(":checked")) {
        senao117m020.value = senao117m020_3.value;
    } else if ($$("#senao117m020_4").is(":checked")) {
        senao117m020.value = senao117m020_4.value;
    }
    senao117m021.value = queryInvoiceNo(senao117m020.value, senao117m007.value);

    deliveryInfoArray = queryDeliveryDetail(senao117m007.value, "");
    if (deliveryInfoArray.length > 0) {
        if (typeof (Grid1Obj) != "undefined") {
            //1.清除Grid資料、初始資料
            Grid1Obj.reload([]);
            gsenao117d005.value = "";
            gsenao117d011.value = "";
            //2.新增Grid資料
            var gridData = [];
            var perGridData = [];

            for (var i = 0; i < deliveryInfoArray.length; i++) {
                deliveryInfo = {};
                deliveryInfo = deliveryInfoArray[i];
                perGridData = [];
                perGridData[0] = i + 1; //項次
                perGridData[1] = queryOrderStatus(deliveryInfo.sourceHeaderId, deliveryInfo.sourceLineId); //訂單狀態
                perGridData[2] = deliveryInfo.taxCode; //TAX_CODE
                //20230519 生產地
                if (deliveryInfo.siteval == "TW" || deliveryInfo.siteval == "TW-HWAYA") {
                    perGridData[3] = "";
                }
                else {
                    perGridData[3] = deliveryInfo.siteval;
                }
                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                /*
                perGridData[3] = deliveryInfo.segment1; //料號
                perGridData[4] = deliveryInfo.description; //品名
                perGridData[5] = deliveryInfo.orderNumber; //訂單號碼
                perGridData[6] = deliveryInfo.custPoNumber; //Customer_PO
                perGridData[7] = deliveryInfo.currencyCode; //幣別
                perGridData[8] = deliveryInfo.unitSellingPrice; //單價
                perGridData[9] = deliveryInfo.requestedQuantity; //預計出貨數
                perGridData[10] = deliveryInfo.requestedQuantity; //確認可出貨數
                perGridData[11] = ""; //說明
                perGridData[12] = deliveryInfo.lineNo; //line_no
                perGridData[13] = deliveryInfo.deliveryDetailId; //DELIVERY_DETAIL_ID
                perGridData[14] = deliveryInfo.customerNumber; //CUSTOMER_NO
                perGridData[15] = deliveryInfo.orderTypeId; //ORDER_TYPE_ID
                perGridData[16] = ""; //前次確認可出貨數
                perGridData[17] = deliveryInfo.sourceLineId; //LINE_ID
                perGridData[18] = deliveryInfo.headerId; //HEADER_ID
                perGridData[19] = queryOnHand(deliveryInfo.segment1); //ON_HAND
                */
                perGridData[4] = deliveryInfo.segment1; //料號
                perGridData[5] = deliveryInfo.description; //品名
                perGridData[6] = deliveryInfo.orderNumber; //訂單號碼
                perGridData[7] = deliveryInfo.custPoNumber; //Customer_PO
                perGridData[8] = deliveryInfo.currencyCode; //幣別
                perGridData[9] = deliveryInfo.unitSellingPrice; //單價
                perGridData[10] = deliveryInfo.requestedQuantity; //預計出貨數
                perGridData[11] = deliveryInfo.requestedQuantity; //確認可出貨數
                perGridData[12] = ""; //說明
                perGridData[13] = deliveryInfo.lineNo; //line_no
                perGridData[14] = deliveryInfo.deliveryDetailId; //DELIVERY_DETAIL_ID
                perGridData[15] = deliveryInfo.customerNumber; //CUSTOMER_NO
                perGridData[16] = deliveryInfo.orderTypeId; //ORDER_TYPE_ID
                perGridData[17] = ""; //前次確認可出貨數
                perGridData[18] = deliveryInfo.sourceLineId; //LINE_ID
                perGridData[19] = deliveryInfo.headerId; //HEADER_ID
                perGridData[20] = queryOnHand(deliveryInfo.segment1); //ON_HAND
                if (querySENAO113_45(deliveryInfo.orderTypeId)) {	// 取OrderType是否不需卡控Credit和材料成本率
                    isNotCheck_Credit_Cost.value = "Y";
                    senao117m023_0.disabled = false;	//線上領料
                    if ($$("#senao117m020_0").is(":checked")) {	//出口
                        senao117m021.readOnly = false; //Invoice No欄位
                        senao117m032_0.disabled = false;	//簡易報關-是
                        senao117m032_1.disabled = false;	//簡易報關-否
                    } else {
                        senao117m021.readOnly = true; //Invoice No欄位
                        senao117m032_0.disabled = true;	//簡易報關-是
                        senao117m032_1.disabled = true;	//簡易報關-否
                        senao117m032_0.checked = false;
                        senao117m032_1.checked = false;
                    }
                } else {
                    senao117m023_0.disabled = true;	//線上領料
                    senao117m021.readOnly = true; //Invoice No欄位
                }
                OrderType = queryOrderTypeName(deliveryInfo.orderTypeId);
                gridData.push(perGridData);
            }
            Grid1Obj.reload(eval(gridData)); //載入Grid中

            //if (typeof (Grid1Obj) !== "undefined") {  //判斷grid物件是否存在表單中  
            document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中  
            Grid1Obj.clearBinding();
            //}
            senao117m033.value = OrderType;
        }
    } else {
        //alert("該出貨單沒有任何出貨資料, 請重新輸入出貨單號!!");
        alert(querySNSI009(formId, "005", locale, "", "", ""));
        senao117m007.value = "";
        showDeliveryNO.innerText = "";
        Grid1Obj.reload([]);
    }

    if (Grid1Obj.getData().length > 0 || document.getElementById("Grid1").value.length > 2) {
        form_org.disabled = true;
    } else {
        form_org.disabled = false;
    }

    return true;
}

/**
 * 確認可出貨數欄位
 */
function gsenao117d011_onchange() {
    if (gsenao117d011.value !== "") {
        if (!checkIsQtyFieldLegal(gsenao117d011.value)) {
            //alert("「確認可出貨數」欄位請填寫數值!! ");
            alert("[" + $$("#lbl_gsenao117d011").html() + "] " + querySNSI009(form_ou.value, "020", locale, "", "", ""));
            gsenao117d011.value = "";
        }
    }
}

/**
 * 搜尋設定檔是否在某值當中
 * @param {string} value 
 * @param {string} snsiId
 * @returns result "Y" or "N"
 */
function isSNSI003InValue(value, snsiId) {
    var result = "N";
    if (value !== "" && snsiId !== "") {
        if (value.search(querySNSI003_Org(snsiId)) > -1) {
            result = "Y";
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
    var result = "N";
    if (value !== "" && snsiId !== "") {
        if (querySNSI003_Org(snsiId).search(value) > -1) {
            result = "Y";
        }
    }
    return result;
}

/**
 * 檢核數量欄位是否為大於等於0整數
 * @param {string} input 
 * @return result true or false
 */
function checkIsQtyFieldLegal(input) {
    var re = /^[0-9]\d*$/;
    var result = true;
    if (input !== "") {
        if (!re.test(input)) {
            result = false;
        }
    }
    return result;
}

/**
 * 計算字串的字元數
 * @param {string} input 
 * @return {number} charQty
 */
function countCharacter(input) {
    var charQty = 0;
    if (input !== "") {
        for (i = 0; i < input.length; i++) {
            char = input.substr(i, 1);
            if (!isNaN(char) || isLetter(char)) {
                charQty += 1;
            } else {
                charQty += 3;
            }
        }
    }
    return charQty;
}

function pad(number) {
    var r = String(number);
    if (r.length === 1) {
        r = '0' + r;
    }
    return r;
}

/**
 * convert characters to ascii
 * @param {sting} char 
 * @returns isLetter
 */
function isLetter(char) {
    var isLetter = false;
    var asciiCode = "";
    if (char !== "") {
        asciiCode = char.charCodeAt(0);
        if (asciiCode >= 32 && asciiCode <= 126) {
            isLetter = true;
        }
    }
    return isLetter;
}

/**
 * 轉換成Oracle日期格式
 * @example 2018/05/17 -> 17-MAY-18
 * @param {string} originDate 
 * @return oracleDate
 */
function convertToOracleDate(originDate) {
    var oracleDate = "";
    var yyyy, MM, dd;
    var monthRef = {
        "1": "JAN", "2": "FEB", "3": "MAR", "4": "APR", "5": "MAY", "6": "JUN",
        "7": "JUL", "8": "AUG", "9": "SEP", "10": "OCT", "11": "NOV", "12": "DEC"
    };
    if (originDate !== "" && originDate !== undefined && originDate.length === 10) {
        yyyy = originDate.substr(0, 4);
        MM = Number(originDate.substr(5, 2)); //ex: "05" -> 5
        dd = originDate.substr(8, 2);
        oracleDate = dd + "-" + (monthRef[MM]) + "-" + yyyy.substr(2, 2);
    }
    return oracleDate;
}

/**
 * 查詢現在日期，GP使用格式 yyyy/mm/dd ex: 2018/05/05
 * @returns result
 */
function showCurrentDate() {
    var result = "";
    var d = new Date();
    result = d.getUTCFullYear() + '/' + pad(d.getUTCMonth() + 1) + '/' + pad(d.getUTCDate());
    //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
    return result;
}

/**
 * 檢查申請單位主管LEVEL是否在部級以下(不包含部級)
 * @description 1000-董 2000-總 3000-部 4000-處 5000-課
 * @param {string} deptId 
 * @returns result "Y" or "N"
 */
function checkIsApplicantMgrUnderDeptLevel(deptId) {
    var result = "N";
    var applicantMgrLevel = ""; //申請人主管Level
    var managerInfo = {};
    if (deptId !== "") {
        //20230111 Calvin 多公司修正，避免取到相同的部門代碼但主管不同
        //managerInfo = queryUnitManagerByUnitId(deptId);
        managerInfo = queryUnitManagerByOuAndUnitId(OU_ID, deptId);
        if (!$$.isEmptyObject(managerInfo)) {
            applicantMgrLevel = managerInfo.level;
            if (applicantMgrLevel > 3000) {
                result = "Y";
            }
        }
    }
    return result;
}

/**
 * 以工號查詢員工姓名
 * @param {string} empId 
 * @returns empName
 */
function queryEmpNameByEmpId(empId) {
    var empName = "";
    var userInfo = {};
    if (empId !== "") {
        userInfo = queryUserByEmpId(empId);
        if (!$$.isEmptyObject(userInfo)) {
            empName = userInfo.userName;
        }
    }
    return empName;
}

/**
 * 檢查填寫人是否為群組使用者
 * @param {string} empId 
 * @param {string} groupId
 * @returns result "Y" or "N"
 */
function checkIsGroupUser(empId, groupId) {
    var result = "N";
    var multiUserId = "";
    var userInfoArray = [];
    var userIdArray = [];
    if (empId !== "" && groupId !== "") {
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
 * 查詢多位員工其主管
 * @param {object} empIds 工號陣列
 * @returns {string} managerList 
 */
function queryManagersByEmpIds(empIds) {
    var managers = "";
    var managerList = [];
    if (empIds.length > 0) {
        for (var i = 0; i < empIds.length; i++) {
            managerList.push(queryManagerByEmpId(empIds[i]));
        }
        managers = managerList.join(",");
    }
    return managers;
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
    if (userInfoArray !== null) {
        for (i = 0; i < userInfoArray.length; i++) {
            userInfo = userInfoArray[i];
            userIdArray.push(userInfo.userId);
        }
    }
    return userIdArray;
}

/**
 * 以Group ID查Group內員工資料
 * @param {string} groupId 
 * @returns userInfoArray 員工相關資料陣列
 */
function queryStdGroupById(groupId) {
    var userInfoArray = [];
    var userInfo = {};
    var sqlId = "getGroupUserIDbyOrg";
    var tParams = [];
    var tTypes = [];
    if (groupId !== "") {
        tParams.push(groupId);
        tParams.push(ORG);
        tTypes.push(12);
        tTypes.push(12);
        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.query(sqlId, tParams, tTypes, function (pData) {
            if (pData.recordValues.length > 0) {
                var i;
                for (i = 0; i < pData.recordValues.length; i++) {
                    userInfo = {};
                    userInfo.userId = pData.recordValues[i][2]; //員工ID
                    userInfo.userName = pData.recordValues[i][3]; //員工名稱
                    userInfoArray.push(userInfo);
                }
            }
        });
        DWREngine.setAsync(true);
    }
    return userInfoArray;
}

/**
 * 查詢客戶目前在未結案訂單申請單所使用幣別種類
 * @param {string} customerId
 * @returns {object} currencyArray
 */
function queryNotFinishCurrencyType(customerId) {
    var currencyArray = [];
    var sqlId = "SENAO117_22_O";
    var tParams = [];
    var data = [];
    var customerId_ary;
    var customerId_str = "";
    var currency_str = "";
    if (customerId != "") {
        if (customerId.indexOf(",") > -1) {
            customerId_ary = customerId.split(",");
            for (var i = 0; i < customerId_ary.length; i++) {
                tParams = [];
                tParams.push(customerId_ary[i]);
                tParams.push(ORG);
                data = ajax_EFGPSQLQuery(sqlId, tParams);
                if (data.length > 0) {
                    if (currency_str.indexOf(data[0][0]) <= -1) {
                        currencyArray.push(data[0][0]); //SENAO117D008
                    }
                    currency_str += data[0][0] + ",";
                }
            }
        } else {
            tParams.push(customerId);
            tParams.push(ORG);
            data = ajax_EFGPSQLQuery(sqlId, tParams);
            if (data.length > 0) {
                currencyArray.push(data[0][0]); //SENAO117D008
            }
        }
    }
    return currencyArray;
}

/**
 * 判斷是否申請訂單異動申請單(SENAO118)
 * @param {string} orderNo
 * @param {string} lineNo 
 * @param {string} orderTypeId 
 * @returns {object} resultInfo
 */
function checkIsApplyOEModify(orderNo, lineNo, orderTypeId) {
    var resultInfo = {};
    var sqlId = "SENAO117_05_O";
    var tParams = [];
    var data = [];
    if (orderNo !== "" && lineNo !== "" && orderTypeId !== "") {
        tParams.push(orderNo + "-" + lineNo);
        tParams.push(orderTypeId);
        tParams.push(ORG);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            resultInfo.isApplyOEModify = true;
            resultInfo.serialNo = data[0][0]; //senao118d002
            resultInfo.applicantName = data[0][1]; //senao118m005 
        }
    }
    return resultInfo;
}

/**
 * 產生版本
 * @example  "V 02"
 * @param {string} deliveryNo
 * @returns {string} version
 */
function genVersion(deliveryNo) {
    var version = "";
    var row = 0;
    var sqlId = "SENAO117_12";
    var tParams = [];
    var data = [];
    if (deliveryNo !== "") {
        tParams.push(deliveryNo);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            row = Number(data[0][0]); //COUNT
            row += 1;
            version = "00" + row;
            version = version.substring(version.length - 2, version.length); //取後兩位字串
            version = "V " + version;
        }
    }
    return version;
}

/**
 * 查詢目前最新版本
 * @param {string} deliveryNo 
 * @returns {string} lastVersion
 */
function queryLastVersion(deliveryNo) {
    var lastVersion = "";
    var sqlId = "SENAO117_13";
    var tParams = [];
    var data = [];
    if (deliveryNo !== "") {
        tParams.push(deliveryNo);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            lastVersion = data[0][0]; //senao117m005
        }
    }
    return lastVersion;
}

/**
 * 檢查Delivery NO的狀態是否已Close
 * @param {string} deliveryNo 
 * @return {boolean} result
 */
function checkIsDeliveryNoClose(deliveryNo) {
    var result = false;
    var sqlId = "SENAO117_08_O";
    var params = [];
    var appendSQL = "";
    var data = [];

    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }

    if (deliveryNo != "") {
        params.push(deliveryNo);
        params.push(ORG_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            result = true;
        }
    }
    return result;
}

/**
 * 依取運送種類、交貨編號取得Invoice No
 * @param {string} shippingType
 * @param {string} deliveryNo
 * @returns {string} invoiceNo
 */
function queryInvoiceNo(shippingType, deliveryNo) {
    var invoiceNo = "";
    var sqlId = "";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (shippingType != "" && deliveryNo != "") {
        //若為出口、NRE
        if (shippingType == "0" || shippingType == "2") {
            sqlId = "SENAO117_10";
            params.push(deliveryNo);
            //若為
        } else {
            sqlId = "SENAO117_11_O";
            params.push(deliveryNo);
            params.push(OU_ID);
        }
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            invoiceNo = data[0][0]; //INVOICENO
        }
    }
    return invoiceNo;
}

/**
 * 查詢On Hand數量
 * @param {string} itemNo
 * @returns {string} result
 */
function queryOnHand(itemNo) {
    var result = 0;
    var sqlId = "SENAO117_04_O";
    var params = [];
    var appendSQL = "";
    var data = [];

    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }

    if (itemNo != "") {
        params.push(ORG_ID);
        params.push(itemNo);
        params.push(ORG_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            result = data[0][0]; //on_hand
        }
    }
    return result;
}

/**
 * 查詢訂單狀態
 * 1.整筆訂單被HOLD的情形
 * 2.若同一筆訂單的 unrelesae 資料大於0筆，訂單狀態為HOLD; 反之為OPEN
 * @param {string} sourceHeaderId 
 * @param {string} sourceLineId 
 * @returns {string} status OPEN or HOLD
 */
function queryOrderStatus(sourceHeaderId, sourceLineId) {
    var status = "";
    var sqlId = "";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (sourceHeaderId !== "" && sourceLineId !== "") {
        sqlId = "SENAO117_06";
        params.push(sourceHeaderId);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            status = "HOLD";
        } else {
            params = [];
            data = [];
            sqlId = "SENAO117_07";
            params.push(sourceLineId);
            data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
            if (data.length > 0) {
                status = "HOLD";
            } else {
                status = "OPEN";
            }
        }
    }
    return status;
}

/**
 * 查詢出貨資料明細
 * @description 分兩種查詢，一種是只有deliveryNo，另一種是deliveryNo + itemNo
 * @param {string} deliveryNo 出貨號碼
 * @param {string} itemNo 料號 
 * @return {object} deliveryInfoArray
 */
function queryDeliveryDetail(deliveryNo, itemNo) {
    var deliveryInfoArray = [];
    var deliveryInfo = {};
    //20230518 Calvin 增加生產地選項
    //var sqlId = "SENAO117_01_O";
    var sqlId = "SENAO117_01_O2";
    var params = [];
    var appendSQL = "";
    var data = [];

    if ($$("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $$("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }

    if (deliveryNo != "") {
        params.push(ORG_ID);
        params.push(deliveryNo);
        params.push(OU_ID);
        if (itemNo != "") {
            params.push(itemNo);
            appendSQL = " AND MSI.segment1 = :p";
        }
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                deliveryInfo = {};
                deliveryInfo.headerId = fixNull(data[i][0]).toString(); //HEADER_ID
                deliveryInfo.sourceLineId = fixNull(data[i][1]).toString(); //SOURCE_LINE_ID
                deliveryInfo.customerId = fixNull(data[i][2]).toString(); //CUSTOMER_ID
                deliveryInfo.customerName = fixNull(data[i][3]); //CUSTOMER_NAME
                deliveryInfo.orderTypeId = fixNull(data[i][4]).toString(); //ORDER_TYPE_ID
                deliveryInfo.wipEntityName = fixNull(data[i][5]); //Attribute7(WIP_ENTITYNAME)
                deliveryInfo.segment1 = fixNull(data[i][6]); //segment1 [料號]
                deliveryInfo.description = fixNull(data[i][7]); //description [品名]
                deliveryInfo.orderNumber = fixNull(data[i][8]).toString(); //ORDER_NUMBER [訂單號碼]
                deliveryInfo.currencyCode = fixNull(data[i][9]); //CURRENCY_CODE [幣別]
                deliveryInfo.unitSellingPrice = fixNull(data[i][10]).toString(); //UNIT_SELLING_PRICE [單價]
                deliveryInfo.unitPrice = fixNull(data[i][11]).toString(); //UNIT_PRICE
                deliveryInfo.srcRequestedQuantity = fixNull(data[i][12]).toString(); //SRC_REQUESTED_QUANTITY
                deliveryInfo.custPoNumber = fixNull(data[i][13]); //CUST_PO_NUMBER [CUSTOMER_PO]
                deliveryInfo.requestedQuantity = fixNull(data[i][14]).toString(); //REQUESTED_QUANTITY [預計出貨數、確認可出貨數]
                deliveryInfo.deliveryDetailId = fixNull(data[i][15]).toString(); //DELIVERY_DETAIL_ID
                deliveryInfo.deliveryId = fixNull(data[i][16]).toString(); //DELIVERY_ID
                deliveryInfo.sourceHeaderId = fixNull(data[i][17]).toString(); //SOURCE_HEADER_ID
                deliveryInfo.customerNumber = fixNull(data[i][18]); //customer_number
                deliveryInfo.lineNo = fixNull(data[i][19]); //LINE_NO [line no]
                deliveryInfo.taxCode = fixNull(data[i][20]); //TAX_CODE
                deliveryInfo.planningMakeBuyCode = fixNull(data[i][21]).toString(); //PLANNING_MAKE_BUY_CODE
                deliveryInfo.siteval = fixNull(data[i][22]).toString(); //生產地實際值
                deliveryInfoArray.push(deliveryInfo);
            }
        }
    }
    return deliveryInfoArray;
}

/**
 * 在SENAO_SHIPPING_MEMO_TEMP資料更新實際出貨日
 * @param {string} actualShipDate 
 * @param {string} deliveryNo 
 */
function updateActualShipDate(actualShipDate, deliveryNo) {
    var sqlId = "SENAO117_09";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (actualShipDate != "" && deliveryNo != "") {
        params.push(actualShipDate);
        params.push(deliveryNo);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
    }
    return true;
}

/**
 * 查詢Customer Group Member
 * @param {string} customerNumber 
 * @returns {string} customerNumberList (以,隔開)
 */
function queryCustomerGroupMember(customerNumber) {
    var customerNumberList = [];
    var sqlId = "SENAO103_09";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerNumber !== "") {
        params.push(customerNumber);
        params.push(customerNumber);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                customerNumberList.push(data[i][0]);
            }
            //若沒有查到，則將customerNumber參數回傳
        } else {
            customerNumberList.push(customerNumber);
        }

    }
    return customerNumberList.join(",");
}

/**
 * 計算目前在未結案表單中，申請中的Shipping訂單總金額
 * @description 以美金計算
 * @param {string} customerNumberList 
 * @param {string} currencyCode 
 * @returns {string} amount
 */
function queryNotFinishApplyAmount(customerNumberList, currencyCode) {
    var amount = "";
    var sqlId = "SENAO117_14_O";
    var tParams = [];
    var data = [];
    var customerNumberList_ary;
    var customerNumberList_str = "";
    var cal_amount = 0.000000;
    if (customerNumberList !== "" && currencyCode !== "") {
        if (customerNumberList.indexOf(",") > -1) {
            customerNumberList_ary = customerNumberList.split(",");
            for (var i = 0; i < customerNumberList_ary.length; i++) {
                tParams = [];
                tParams.push(customerNumberList_ary[i]);
                tParams.push(currencyCode);
                tParams.push(ORG);
                data = ajax_EFGPSQLQuery(sqlId, tParams);
                if (data.length > 0) {
                    cal_amount += data[0][0]; //ApplyAmt
                }
            }
        } else {
            tParams.push(customerNumberList);
            tParams.push(currencyCode);
            tParams.push(ORG);
            data = ajax_EFGPSQLQuery(sqlId, tParams);
            if (data.length > 0) {
                cal_amount += data[0][0]; //ApplyAmt
            }
        }

    }
    amount = cal_amount;
    return amount;
}

/**
 * 檢查Customer信用狀況
 * @example "OVER CREDIT(USD 100)" or "PASS"
 * @param {string} customerId 
 * @param {string} currencyCode 
 * @param {string} amount 
 * @returns {string} creditStatus
 */
function queryCustomerCredit(customerId, currencyCode, amount) {
    var creditStatus = "";
    var sqlId = "SENAO117_15_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerId !== "" && currencyCode !== "" && amount !== "") {
        params.push(customerId);
        params.push(currencyCode);
        params.push(amount);
        params.push(OU_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            creditStatus = data[0][0]; //CREDIT_CHECK
        }
    }
    return creditStatus;
}

/**
 * 查詢Customer Credit Group
 * @param {string} customerId 
 * @returns {string} creditGroup
 */
function queryCustomerCreditGroup(customerId) {
    var creditGroup = "";
    var sqlId = "SENAO103_08";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerId !== "") {
        params.push(customerId);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            creditGroup = data[0][0]; //CREDIT_GROUP
        }
    }
    return creditGroup;
}

/**
 * 依customer_id查詢逾期帳款及應收帳款餘額
 * @param {string} customerId
 * @param {string} customerCreditGroup
 * @returns {object} dueAndArInfoArray
 */
function queryDueAndArAmount(customerId, customerCreditGroup) {
    var dueAndArInfoArray = [];
    var dueAndArInfo = {};
    var sqlId = "SENAO103_02_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerId != "") {
        params.push(OU_ID);
        params.push(customerCreditGroup);
        params.push(customerId);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                dueAndArInfo = {};
                dueAndArInfo.invoiceCurrencyCode = data[i][0]; //INVOICE_CURRENCY_CODE
                dueAndArInfo.dueAmount = data[i][1]; //DUE_AMOUNT
                dueAndArInfo.arAmount = data[i][2]; //AR_AMOUNT
                dueAndArInfoArray.push(dueAndArInfo);
            }
        }
    }
    return dueAndArInfoArray;
}

/**
 * 依幣別查詢Customer應收帳款
 * @param {string} customerId 
 * @param {string} currencyCode 
 * @param {string} customerCreditGroup 
 * @returns {string} arAmount
 */
function queryCustomerArAmount(customerId, currencyCode, customerCreditGroup) {
    var arAmount = "";
    var sqlId = "SENAO117_18_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    //if (customerId !== "" && currencyCode !== "" && customerCreditGroup !== "") {Bug fix:Chandler.20200421
    if (customerId !== "" && currencyCode !== "") {
        params.push(customerId);
        params.push(currencyCode);
        params.push(customerCreditGroup);
        params.push(OU_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            arAmount = data[0][0]; //CREDIT_GROUP
        }
    }
    return arAmount;
}

/**
 * 查詢匯率
 * @param {string} fromCurrency 
 * @param {string} toCurrency 
 * @param {string} conversionType ex:1000(三旬)、1001、Corporate、Spot ...
 * @param {string} conversionDate ex:2018/08/02
 * @returns conversionRate
 */
function queryConversionRate(fromCurrency, toCurrency, conversionType, conversionDate) {
    var conversionRate = "1";
    var sqlId = "OracleConversionRate";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (fromCurrency && toCurrency && conversionType && conversionDate) {
        params.push(fromCurrency);
        params.push(toCurrency);
        params.push(conversionType);
        params.push(conversionDate);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            conversionRate = data[0][0]; //CONVERSION_RATE
        }
    }
    return conversionRate;
}

/**
 * 查詢逾期美金明細(0-5天,6-15天,6-30天,30天以上)
 * @example 查出資料範例->0@@0@@0@@0@@0 index:1~4
 * @param {string} customerId 
 * @returns {object} usdDueDetailInfo
 */
function queryUsdDueDetail(customerId) {
    var usdDueDetailInfo = {};
    var dueDetailRawData = [];
    var sqlId = "SENAO117_19_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerId !== "") {
        params.push(customerId);
        params.push(OU_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            dueDetailRawData = data[0][0].split("@@"); //OVERDUE
            if (dueDetailRawData.length > 0) {
                for (var i = 0; i < dueDetailRawData.length; i++) {
                    usdDueDetailInfo.dueDetail0To5 = dueDetailRawData[1]; //逾期美金明細 0-5天
                    usdDueDetailInfo.dueDetail6To15 = dueDetailRawData[2]; //逾期美金明細 6-15天
                    usdDueDetailInfo.dueDetail16To30 = dueDetailRawData[3]; //逾期美金明細 16-30天
                    usdDueDetailInfo.dueDetailOver31 = dueDetailRawData[4]; //逾期美金明細 31天以上
                }
            }
        }
    }
    return usdDueDetailInfo;
}

/**
 * 查詢逾收款資訊
 * @example DB查出資料範例 -> 2016/03/11,22.36@@2016/05/09,5983.55@@2016/05/16,4301.7
 * @description 
 * 		step1: "2016/03/11,22.36@@2016/05/09,5983.55"
 * 		step2: ["2016/03/11,22.36", "2016/05/09,5983.55"]  以 @@ 分開
 * 		step3: [["2016/03/11", "22.36"], ["2016/05/09", "5983.55"]]  以 , 分開
 * 		step4: 2016/03/11 : $22.36  2016/05/09 : $5983.55 
 * 		step5: 2016/03/11 : $22.36    以 &#13; 換行符號隔開
 *             2016/05/09 : $5983.55 
 * @param {string} customerId 
 * @returns {string} dueArDetail
 */
function queryDueArDetail(customerId) {
    var dueArDetail = "";
    var dueArDetailRawDataArray = [];
    var dueArDetailArray = [];
    var dueArDetailFinalArray = [];
    var sqlId = "SENAO117_20_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (customerId !== "") {
        params.push(customerId);
        params.push(OU_ID);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            if (data[0][0]) {
                //step1、step2:DB取出資料，以@@符號分開	
                dueArDetailRawDataArray = data[0][0].split("@@"); //OVERDUE
                if (dueArDetailRawDataArray.length > 0) {
                    for (var i = 0; i < dueArDetailRawDataArray.length; i++) {
                        //step3:以,符號分開
                        dueArDetailArray = dueArDetailRawDataArray[i].split(",");
                        if (dueArDetailArray.length > 0) {
                            //step4:將日期、金額組合成所需格式字串
                            dueArDetailFinalArray.push(dueArDetailArray[0] + " : $" + dueArDetailArray[1]);
                            //step5:以 &#13; 換行符號隔開
                            dueArDetail = dueArDetailFinalArray.join("&#13;");
                        }
                    }
                }
            }
        }
    }
    return dueArDetail;
}

/**
 * 查詢Order Type
 * @param {string} orderTypeId 
 * @returns orderType
 */
function queryOrderType(orderTypeId) {
    var orderType = "";
    var sqlId = "SENAO117_21_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (orderTypeId !== "") {
        params.push(orderTypeId);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            orderType = data[0][0]; //TRANSACTION_TYPE_ID
        }
    }
    return orderType;
}

/**
 * 查詢Order Type Name 
 * @param {string} orderTypeId 
 * @returns orderType
 */
function queryOrderTypeName(orderTypeId) {
    var orderType = "";
    var sqlId = "SENAO117_21_O";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (orderTypeId !== "") {
        params.push(orderTypeId);
        data = ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            orderType = data[0][1]; //TRANSACTION_TYPE_ID
        }
    }
    return orderType;
}

/**
 * 呼叫SN_EZFLOW_UPI_PKG.SN_OM_HOLD_SO_LINE
 * @param {string} headerId 
 * @param {string} lineId 
 * @param {string} remark 
 */
function callPKG_SN_OM_HOLD_SO_LINE(headerId, lineId, remark) {
    var sqlId = "SENAO117_16_O";
    var params = [];
    var appendSQL = "";
    if (headerId != "" && lineId != "" && remark != "") {
        params.push(headerId);
        params.push(lineId);
        params.push(remark);
        params.push(OU_ID);
        ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
    }
}

/**
 * 呼叫SN_EZFLOW_UPI_PKG.SN_OM_RELEASE_SO_LINE
 * @param {string} headerId 
 * @param {string} lineId 
 * @param {string} remark 
 */
function callPKG_SN_OM_RELEASE_SO_LINE(headerId, lineId, remark) {
    var sqlId = "SENAO117_17_O";
    var params = [];
    var appendSQL = "";
    if (headerId != "" && lineId != "" && remark != "") {
        params.push(headerId);
        params.push(lineId);
        params.push(remark);
        params.push(OU_ID);
        ajax_ERPSQLQuery(sqlId, params, appendSQL, OU_ID);
    }
}

/**
 * 開窗公用程式
 * @param {string} btnId Button元件代號
 * @param {string} oracleSqlId SQL註冊器(ERP)中定義的SQL代號
 * @param {object} params push進SN_EFGP_SQL中指令下的:p，若:p有多個需分別push，若指令為like :p 需加入%(EX: tSPValue.push("%2%");)
 * @param {string} appendSQL 
 */
function callSenaoCustomDataChooser(btnId, oracleSqlId, params, appendSQL) {
    if (btnId !== "" && oracleSqlId !== "") {
        if (params.length === 0) {
            params.push("NO_WHERE");
        }
        //Senao_CustomDataChooser.openWinByParmater(formId, btnId, params, oracleSqlId, OU_ID, appendSQL);
        Senao_CustomDataChooser.openWinByParmaterByLocale(formId, btnId, params, oracleSqlId, OU_ID, appendSQL, locale);
    }
}

/**
 * 設定Grid欄位
 */
//2023073增加生產地欄位從第3個欄位開始往後移
function setGridStyle() {
    var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20];
    if (typeof (Grid1Obj) !== "undefined") {
        Grid1Obj.setColumnIndices(indexArray);
        document.write(
            "<style>#" + Grid1Obj.getId() +
            " .aw-column-0{width:40px;}" +    //項次 [0]
            " .aw-column-1{width:80px;}" +    //訂單狀態 [1]
            " .aw-column-2{width:60px;}" +    //TAX_CODE [2]
            " .aw-column-3{width:100px;}" +   //生產地 [3]
            " .aw-column-4{width:100px;}" +   //料號 [4]
            " .aw-column-5{width:160px;}" +   //品名 [5]
            " .aw-column-6{width:60px;}" +    //訂單號碼 [6]
            " .aw-column-7{width:100px;}" +   //Customer_PO [7]
            " .aw-column-8{width:60px;}" +    //幣別 [8]
            " .aw-column-9{width:60px;}" +    //單價 [9]
            " .aw-column-10{width:70px;}" +    //預計出貨數 [10]
            " .aw-column-11{width:80px;}" +   //確認可出貨數 [11]
            " .aw-column-12{width:110px;}" +  //說明 [12]
            " .aw-column-13{width:110px;}" +  //line_no [13]
            //" .aw-column-13{width:110px;}" +  //DELIVERY_DETAIL_ID [13]
            //" .aw-column-14{width:110px;}" +  //CUSTOMER_NO [14]
            //" .aw-column-15{width:110px;}" +  //ORDER_TYPE_ID [15]
            //" .aw-column-16{width:110px;}" +  //前次確認可出貨數 [16]
            //" .aw-column-17{width:110px;}" +  //LINE_ID [17]
            //" .aw-column-18{width:110px;}" +  //HEADER_ID [18]
            " .aw-column-20{width:110px;}" +  //ON_HAND [20]
            " </style>");
    }
}

/**
 * 觸發解訂單(SENAO103) XML
 */
function genNewForm() {
    var deliveryNo = senao117m007.value;
    var customerId = "";
    var customerNumber = "";
    var customerName = "";
    var twdDueAmount = "0"; //台幣逾期帳款 senao103m014
    var twdArAmount = "0"; //台幣應收帳款逾額 senao103m015
    var usdDueAmount = "0"; //美金逾期帳款 senao103m016
    var usdArAmount = "0"; //美金應收帳款逾額 senao103m017
    var customerCreditGroup = "";
    var dueAndArInfoArray = [];
    var dueAndArInfo = {};
    var arAmount = "";
    var deliveryInfoArray = [];
    var deliveryInfo = {};
    var currencyCode = "";
    var customerNumberList = "";
    var notFinishOrderAmount = 0;
    var totalNotFinishOrderAmountByUSD = 0; //未結案 = 已申請中訂單金額 + 此次申請訂單金額
    var creditStatus = "";
    var remark = "";
    var headerId = "";
    var lineId = "";
    var totalDeliveryAmountByUSD = 0; //預計出貨金額(以美金計價)
    var totalDeliveryAmountByTWD = 0; //預計出貨金額(以台幣計價)
    var totalDeliveryAmount = 0; //預計出貨金額(原匯率) = 預計出貨數 * 單價 
    var deliveryQty = 0;
    var unitPrice = 0;
    var conversionRate = 1; //兌換匯率
    var usdDueDetailInfo = {};
    var dueArDetail = "";
    var gridData = Grid1Obj.getData();
    var currencyArray = [];
    var Sales8_NotApproveDivision = "";	//業務八課不經過處級主管

    //console.log("--------- genNewForm start ---------");
    deliveryInfoArray = queryDeliveryDetail(deliveryNo, "");
    if (deliveryInfoArray.length > 0) {
        deliveryInfo = deliveryInfoArray[0]; //查詢出來可能不只一筆資料，但只取第一筆中的資料即可
        if (!$$.isEmptyObject(deliveryInfo)) {
            customerId = deliveryInfo.customerId;
            customerNumber = deliveryInfo.customerNumber;
            customerName = deliveryInfo.customerName;
            currencyCode = deliveryInfo.currencyCode;
            customerNumberList = queryCustomerGroupMember(customerNumber);
            currencyArray = queryNotFinishCurrencyType(customerNumberList);
            if (currencyArray.length > 0) {
                for (var n = 0; n < currencyArray.length; n++) {
                    notFinishOrderAmount = queryNotFinishApplyAmount(customerNumberList, currencyArray[n]);
                    conversionRate = Number(queryConversionRate(currencyArray[n], "USD", "1001", systemDateTime)); //兌換成美金的匯率
                    totalNotFinishOrderAmountByUSD += (notFinishOrderAmount * conversionRate);
                    //console.log("未結案訂單(原幣別:" + currencyArray[i] + ",兌美金匯率:" + conversionRate + ")的總訂單額度(含稅) = " + notFinishTotalOrderAmount);
                }
            }

            for (var p = 0; p < gridData.length; p++) {
                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                /*
                deliveryQty = Number(gridData[p][9]); //預計出貨數
                unitPrice = Number(gridData[p][8]); //單價
                */
                deliveryQty = Number(gridData[p][10]); //預計出貨數
                unitPrice = Number(gridData[p][9]); //單價
                totalDeliveryAmount += (deliveryQty * unitPrice); //預計出貨數 * 單價
                //console.log("    [#" + (p+1) + "]deliveryQty : " + deliveryQty);
                //console.log("    [#" + (p+1) + "]unitPrice : " + unitPrice);
                //console.log("    [#" + (p+1) + "]totalDeliveryAmount : " + totalDeliveryAmount);
            }
            conversionRate = queryConversionRate(currencyCode, "TWD", "1000", systemDateTime); //兌換成台幣的匯率
            totalDeliveryAmountByTWD = totalDeliveryAmount * conversionRate;
            conversionRate = queryConversionRate(currencyCode, "USD", "1000", systemDateTime); //兌換成美金的匯率
            totalDeliveryAmountByUSD = totalDeliveryAmount * conversionRate;

            totalNotFinishOrderAmountByUSD += totalDeliveryAmountByUSD;

            //SN_OM_CREDIT_CHECK統一回傳美金，所以傳入的幣別就傳USD
            creditStatus = queryCustomerCredit(customerId, "USD", totalNotFinishOrderAmountByUSD);
            //console.log("  customerId : " + customerId);
            //console.log("  customerNumber: " + customerNumber);
            //console.log("  customerNumberList : " + customerNumberList);
            //console.log("  totalNotFinishTotalOrderAmount : " + totalNotFinishTotalOrderAmount);
            //console.log("  creditStatus : " + creditStatus);

            //Customer信用狀態
            if (creditStatus != "") {
                remark = "DN#" + deliveryNo + "_EF-" + senao117m002.innerHTML + "(申請中出貨總金額[美金]:" + totalNotFinishOrderAmountByUSD.toFixed(2) + ")";
                for (var k = 0; k < gridData.length; k++) {
                    //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                    /*
                    headerId = gridData[k][18]; //HEADER_ID
                    lineId = gridData[k][17]; //LINE_ID
                    */
                    headerId = gridData[k][19]; //HEADER_ID
                    lineId = gridData[k][18]; //LINE_ID
                    if (creditStatus != "PASS") {
                        callPKG_SN_OM_HOLD_SO_LINE(headerId, lineId, remark);
                        //console.log("    [#" + (k+1) + "]callPKG_SN_OM_HOLD_SO_LINE _ headerId : " + headerId + ", lineId : " + lineId + ", remark : " + remark);
                    } else {
                        callPKG_SN_OM_RELEASE_SO_LINE(headerId, lineId, remark);
                        //console.log("    [#" + (k+1) + "]callPKG_SN_OM_RELEASE_SO_LINE _ headerId : " + headerId + ", lineId : " + lineId + ", remark : " + remark);
                    }
                }
                if (creditStatus != "PASS") {
                    isGenNewFormAvailable.value = "Y";
                }
            }
        }
    }

    if (userId === "102451") { //Jeff
        isGenNewFormAvailable.value = "Y"; //開發人員測試用
    }

    if (isGenNewFormAvailable.value === "Y") {
        customerCreditGroup = queryCustomerCreditGroup(customerId);
        dueAndArInfoArray = queryDueAndArAmount(customerId, customerCreditGroup);
        for (var m = 0; m < dueAndArInfoArray.length; m++) {
            dueAndArInfo = dueAndArInfoArray[m];
            if (dueAndArInfo.invoiceCurrencyCode === "TWD") {
                twdDueAmount = dueAndArInfo.dueAmount;
                arAmount = queryCustomerArAmount(customerId, dueAndArInfo.invoiceCurrencyCode, customerCreditGroup);
                if (arAmount !== "") {
                    twdArAmount = arAmount;
                } else {
                    twdArAmount = dueAndArInfo.arAmount;
                }
                usdArAmount = queryCustomerArAmount(customerId, "USD", customerCreditGroup);
            } else if (dueAndArInfo.invoiceCurrencyCode === "USD") {
                usdDueAmount = dueAndArInfo.dueAmount;
                arAmount = queryCustomerArAmount(customerId, dueAndArInfo.invoiceCurrencyCode, customerCreditGroup);
                if (arAmount !== "") {
                    usdArAmount = arAmount;
                } else {
                    usdArAmount = dueAndArInfo.arAmount;
                }
            }
        }
        usdDueDetailInfo = queryUsdDueDetail(customerId);
        dueArDetail = queryDueArDetail(customerId);

        if (querySNSI003_Org("SN103_S02").indexOf(senao117m031.value) > -1 && querySNSI003_Org("SN103_S03").indexOf(customerNumber) <= -1) {
            //20210416 Milla Laura.Chen(陳意雯)於20200901 Mail 提出業務八課非Fortinet客戶的業務事項直接route到業務部主管
            Sales8_NotApproveDivision = "Y";
        } else {
            Sales8_NotApproveDivision = "N";
        }

        var get_decision1 = Set_hdn_decision1(senao117m004.value);	//設定核決一
        var getIsTT = IsTT(customerNumber);

        var tSubject = senao117m003_t1.value + "－解訂單明細表(" + senao117m009.value + "_出貨日:" + senao117m013.value + ")";
        var tXML =
            "<SENAO103>" +
            '<form_ou id="form_ou" dataType="java.lang.String" perDataProId="">' + form_ou.value + '</form_ou>' +
            '<form_org id="form_org" dataType="java.lang.String" perDataProId="">' + form_org.value + '</form_org>' +
            '<senao103m001 id="senao103m001" dataType="java.lang.String" perDataProId="">' + form_ou.value.toUpperCase() + '103</senao103m001>' +
            '<senao103m002 id="senao103m002" dataType="java.lang.String" perDataProId=""></senao103m002>' + //加入表單編號欄位(空值)才可產生表單單號
            '<senao103m003 id="senao103m003" dataType="java.lang.String" perDataProId="">' + senao117m003.value + '</senao103m003>' +
            '<senao103m004 id="senao103m004" dataType="java.lang.String" perDataProId="">' + senao117m004.value + '</senao103m004>' +
            '<senao103m005 id="senao103m005" dataType="java.lang.String" perDataProId="">' + senao117m003_t1.value + '</senao103m005>' +
            '<senao103m006 id="senao103m006" dataType="java.lang.String" perDataProId="">' + senao117m004_t1.value + '</senao103m006>' +
            '<senao103m007 id="senao103m007" dataType="java.lang.String" perDataProId="">' + convertToOracleDate(showCurrentDate()) + '</senao103m007>' +
            '<senao103m008 id="senao103m008" dataType="java.lang.String" perDataProId=""></senao103m008>' +
            '<senao103m009 id="senao103m009" dataType="java.lang.String" perDataProId=""></senao103m009>' +
            '<senao103m010 id="senao103m010" dataType="java.lang.String" perDataProId=""></senao103m010>' +
            '<senao103m011 id="senao103m011" dataType="java.lang.String" perDataProId=""></senao103m011>' +
            '<senao103m012 id="senao103m012" dataType="java.lang.String" perDataProId="">' + customerNumber + '</senao103m012>' +
            '<senao103m013 id="senao103m013" dataType="java.lang.String" perDataProId="">' + customerName + '</senao103m013>' +
            '<senao103m014 id="senao103m014" dataType="java.lang.String" perDataProId="">' + twdDueAmount + '</senao103m014>' +
            '<senao103m015 id="senao103m015" dataType="java.lang.String" perDataProId="">' + twdArAmount + '</senao103m015>' +
            '<senao103m016 id="senao103m016" dataType="java.lang.String" perDataProId="">' + usdDueAmount + '</senao103m016>' +
            '<senao103m017 id="senao103m017" dataType="java.lang.String" perDataProId="">' + usdArAmount + '</senao103m017>' +
            '<senao103m018 id="senao103m018" dataType="java.lang.String" perDataProId="">其他</senao103m018>' +
            '<senao103m019 id="senao103m019" dataType="java.lang.String" perDataProId="">' + creditStatus.replace('&', '&amp;') + '</senao103m019>' +
            '<senao103m020 id="senao103m020" dataType="java.lang.String" perDataProId="">' + remark + '</senao103m020>' +
            '<senao103m036 id="senao103m036" dataType="java.lang.String" perDataProId="">N</senao103m036>' +
            '<senao103m021 id="senao103m021" dataType="java.lang.String" perDataProId="">' + totalDeliveryAmount.toFixed(2) + '</senao103m021>' +
            '<senao103m025 id="senao103m025" dataType="java.lang.String" perDataProId="">' + currencyCode + '</senao103m025>' +
            '<senao103m024 id="senao103m024" dataType="java.lang.String" perDataProId="">' + conversionRate + '</senao103m024>' +
            '<senao103m023 id="senao103m023" dataType="java.lang.String" perDataProId="">' + totalDeliveryAmountByTWD.toFixed(2) + '</senao103m023>' +
            '<senao103m101 id="senao103m101" dataType="java.lang.String" perDataProId="">' + usdDueDetailInfo.dueDetail0To5 + '</senao103m101>' +
            '<senao103m102 id="senao103m102" dataType="java.lang.String" perDataProId="">' + usdDueDetailInfo.dueDetail6To15 + '</senao103m102>' +
            '<senao103m103 id="senao103m103" dataType="java.lang.String" perDataProId="">' + usdDueDetailInfo.dueDetail16To30 + '</senao103m103>' +
            '<senao103m104 id="senao103m104" dataType="java.lang.String" perDataProId="">' + usdDueDetailInfo.dueDetailOver31 + '</senao103m104>' +
            '<senao103m105 id="senao103m105" dataType="java.lang.String" perDataProId="">' + dueArDetail + '</senao103m105>' +
            '<hdn_is_trigger id="hdn_is_trigger" dataType="java.lang.String" perDataProId="">Y</hdn_is_trigger>' +
            '<hdn_shippingmemo_fsn id="hdn_shippingmemo_fsn" dataType="java.lang.String" perDataProId=""></hdn_shippingmemo_fsn>' +
            '<ENRprodMgmtApprover id="ENRprodMgmtApprover" dataType="java.lang.String" perDataProId="">' + $$("#ENRprodMgmtApprover").val() + '</ENRprodMgmtApprover>' +
            '<Sales8_NotApproveDivision id="Sales8_NotApproveDivision" dataType="java.lang.String" perDataProId="">' + Sales8_NotApproveDivision + '</Sales8_NotApproveDivision>' +
            '<hdn_senao103m016 id="hdn_senao103m016" dataType="java.lang.Float" perDataProId="">' + usdDueAmount + '</hdn_senao103m016>' +
            '<hdn_decision1 id="hdn_decision1" dataType="java.lang.String" perDataProId="">' + get_decision1 + '</hdn_decision1>' +
            '<hdn_decision2 id="hdn_decision2" dataType="java.lang.String" perDataProId=""></hdn_decision2>' +
            '<hdn_isTT id="hdn_isTT" dataType="java.lang.String" perDataProId="">' + getIsTT + '</hdn_isTT>' +
            '<Grid1 id="Grid1">' +
            '<records>';
        if (!$$.isEmptyObject(gridData)) {
            for (var j = 0; j < gridData.length; j++) {
                //變更後生產地(20230519 Calvin 新增此欄位，原欄位順序往後挪一位)
                /*
                tXML += 
                    '<record id="Grid1_' + j + '">' +
                        '<item id="gno" dataType="java.lang.String" perDataProId="">' + (j+1) + '</item>' +                
                        '<item id="gsenao103d009" dataType="java.lang.String" perDataProId="">' + queryOrderType(gridData[j][15]) + '</item>' + //ORDER_TYPE_ID [15]
                        '<item id="gsenao103d009_ORA" dataType="java.lang.String" perDataProId="">' + gridData[j][15] + '</item>' + //ORDER_TYPE_ID [15]
                        '<item id="gsenao103d010" dataType="java.lang.String" perDataProId="">' + gridData[j][5] + '</item>' + //訂單號碼 [5]
                        '<item id="gsenao103d003" dataType="java.lang.String" perDataProId="">' + gridData[j][12] + '</item>' + //line_no [12]
                        '<item id="gsenao103d004" dataType="java.lang.String" perDataProId="">' + gridData[j][3] + '</item>' + //料號 [3]
                        '<item id="gsenao103d005" dataType="java.lang.String" perDataProId="">' + gridData[j][4] + '</item>' + //品名 [4]
                        '<item id="gsenao103d006" dataType="java.lang.String" perDataProId="">' + gridData[j][9] + '</item>' + //預計出貨數 [9]
                        '<item id="gsenao103d007" dataType="java.lang.String" perDataProId="">' + gridData[j][7] + '</item>' + //幣別 [7]
                        '<item id="gsenao103d008" dataType="java.lang.String" perDataProId="">' + gridData[j][8] + '</item>' + //單價 [8]
                        '<item id="gsenao103d011" dataType="java.lang.String" perDataProId="">' + gridData[j][18] + '</item>' + //HEADER_ID [18]
                        '<item id="gsenao103d012" dataType="java.lang.String" perDataProId="">' + gridData[j][17] + '</item>' + //LINE_ID [17]
                    '</record>' ;
                */
                //20231109 Steve  資料含有<導致xml組成異常,故置換
                tXML +=
                    '<record id="Grid1_' + j + '">' +
                    '<item id="gno" dataType="java.lang.String" perDataProId="">' + (j + 1) + '</item>' +
                    '<item id="gsenao103d009" dataType="java.lang.String" perDataProId="">' + queryOrderType(gridData[j][16]) + '</item>' + //ORDER_TYPE_ID [16]
                    '<item id="gsenao103d009_ORA" dataType="java.lang.String" perDataProId="">' + gridData[j][16] + '</item>' + //ORDER_TYPE_ID [16]
                    '<item id="gsenao103d010" dataType="java.lang.String" perDataProId="">' + gridData[j][6] + '</item>' + //訂單號碼 [6]
                    '<item id="gsenao103d003" dataType="java.lang.String" perDataProId="">' + gridData[j][13] + '</item>' + //line_no [13]
                    '<item id="gsenao103d004" dataType="java.lang.String" perDataProId="">' + gridData[j][4] + '</item>' + //料號 [4]
                    '<item id="gsenao103d005" dataType="java.lang.String" perDataProId="">' + gridData[j][5].replaceAll('<', '&lt;') + '</item>' + //品名 [5]
                    '<item id="gsenao103d006" dataType="java.lang.String" perDataProId="">' + gridData[j][10] + '</item>' + //預計出貨數 [10]
                    '<item id="gsenao103d007" dataType="java.lang.String" perDataProId="">' + gridData[j][8] + '</item>' + //幣別 [8]
                    '<item id="gsenao103d008" dataType="java.lang.String" perDataProId="">' + gridData[j][9] + '</item>' + //單價 [9]
                    '<item id="gsenao103d011" dataType="java.lang.String" perDataProId="">' + gridData[j][19] + '</item>' + //HEADER_ID [19]
                    '<item id="gsenao103d012" dataType="java.lang.String" perDataProId="">' + gridData[j][18] + '</item>' + //LINE_ID [18]
                    '</record>';
            }
        }
        tXML += '</records>' +
            '</Grid1>' +
            "</SENAO103>";

        //觸發解訂單是在表單申請後，而觸發關卡(invokeProcess)因為中間卡著轉存表單會抓不到assignRelevantData，
        //因此將所有觸發所需資料存在triggerData，並用透過SENAO117_trigger103.jsp觸發
        var temp = [];
        temp.push(senao117m003.value);
        temp.push(senao117m004.value);
        temp.push(tSubject);
        temp.push(tXML);
        triggerData.value = temp.join("@@");
    } else {
        //未達條件不需觸發解訂單
    }
    //console.log("--------- genNewForm end ---------");
}

/**
 * 轉換escape字元(<,>,",',&)
 */
String.prototype.escapeXml = function () {
    return this.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
};


function checkDNClosed() {
    var tSPValue = new Array();
    var isDNClosed = false;
    tSPValue.push(senao117m007.value);
    var tDefaultAppendSQL = ""; //自定義條件
    DWREngine.setAsync(false);
    ajax_GetOracleData.CallProc("ERP_SNO_C", "SENAO117_25", tSPValue, "", OU_ID, function (data) {
        var arrayData = eval(data);
        if (arrayData.length > 0) {
            isDNClosed = true;
        }
    });
    DWREngine.setAsync(true);
    return isDNClosed;
}

/**20200820 Milla
 * 取OrderType是否不需卡控Credit和材料成本率
 * @param {string} OrderTypeID    
 */
function querySENAO113_45(OrderTypeID) {
    var sqlId = "SENAO113_45";
    var tParams = [];
    var tDefaultAppendSQL = "";
    var retrueValue = false;
    if (OrderTypeID !== "") {
        tParams.push(OrderTypeID);
        DWREngine.setAsync(false);
        ajax_GetOracleData.CallProc("ERP_SNO_C", sqlId, tParams, tDefaultAppendSQL, OU_ID, function (pData) {
            if (pData.length > 0) {
                retrueValue = true;
            }
        });
        DWREngine.setAsync(true);
    }
    return retrueValue;
}

function formDispatch() {
    return true;
}

function formClose() {
    return true;
}

/**
  *檢查是否已開入庫單
  *@param FormNo 表單單號
  *@return tFlag 是否存在
*/
function CheckStock_In(FormNo) {
    var tFlag = false;
    var sqlid = "SENAO117_23";
    var tParams = new Array();
    var tTypes = new Array();
    tParams.push("EF-" + FormNo);
    tTypes.push(12);
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.query(sqlid, tParams, tTypes, function (data) {
        if (data.recordValues.length > 0) {
            for (var i = 0; i < data.recordValues.length; i++) {
                if (fixNull(data.recordValues[i][5]).trim() == "I") {
                    tFlag = false;
                    break;
                } else {
                    tFlag = true;
                }
            }
        } else {
            tFlag = false;
        }
    });
    DWREngine.setAsync(true);
    return tFlag;
}

/**
  *檢查是否已開入庫單
  *@param FormNo 表單單號
  *@return {Array} Item_Qty_Array
*/
function Stock_In_Qty(FormNo) {
    var Item_Qty_Array = [];
    var Item_Qty_Object = {};
    var sqlid = "SENAO117_24";
    var tParams = new Array();
    var tTypes = new Array();
    tParams.push("EF-" + FormNo);
    tTypes.push(12);
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.query(sqlid, tParams, tTypes, function (data) {
        if (data.recordValues.length > 0) {
            for (var i = 0; i < data.recordValues.length; i++) {
                Item_Qty_Object = {};
                Item_Qty_Object.ItemNo = fixNull(data.recordValues[i][1]).trim();
                Item_Qty_Object.Qty = fixNull(data.recordValues[i][2]);
                Item_Qty_Array.push(Item_Qty_Object);
            }
        }
    });
    DWREngine.setAsync(true);
    return Item_Qty_Array;
}

/**
* 付款條件是否為TT
* @param {String} strCusNo 客戶代碼 
 */
function IsTT(strCusNo) {
    var result = "N";
    var sqlId = "SENAO103_07_O";
    var dataArray = new Array();
    var params = [];
    params.push(OU_ID);
    params.push(strCusNo);
    dataArray = ajax_ERPSQLQuery(sqlId, params, "", OU_ID);
    if (dataArray.length > 0) {
        if (dataArray[0][5].indexOf('T/T') >= 0) {	////paymentterm
            result = "Y";
        } else {
            result = "N";
        }
    }
    return result;
}

/**
 * 以部門ID查詢本階及上一階主管資料
 * @param {string} DeptID 
 * @returns DeptInfoArray 員工相關資料陣列
 */
function queryDeptInfoById(DeptID) {
    var DeptInfo = {};
    var sqlId = "getUpperUnitManagerByDeptId";
    var tParams = [];
    var tTypes = [];
    if (DeptID !== "") {
        tParams.push($$("#form_ou").val());
        tParams.push($$("#form_ou").val());
        tParams.push(DeptID);
        tTypes.push(12);
        tTypes.push(12);
        tTypes.push(12);
        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.query(sqlId, tParams, tTypes, function (pData) {
            if (pData.recordValues.length > 0) {
                DeptInfo.deptid = pData.recordValues[0][0]; //deptid
                DeptInfo.deptname = pData.recordValues[0][1]; //deptname					
                DeptInfo.deptlevel = pData.recordValues[0][2]; //deptlevel
                DeptInfo.DeptManagerID = pData.recordValues[0][3]; //DeptManagerID
                DeptInfo.DeptManagerName = pData.recordValues[0][4]; //DeptManagerName
                DeptInfo.upperdeptid = pData.recordValues[0][5]; //upperdeptid
                DeptInfo.upperdeptname = pData.recordValues[0][6]; //upperdeptname
                DeptInfo.upperdeptlevel = pData.recordValues[0][7]; //upperdeptlevel
                DeptInfo.UpperManagerID = pData.recordValues[0][8]; //UpperManagerID
                DeptInfo.UpperManagerName = pData.recordValues[0][9]; //UpperManagerName
            }
        });
        DWREngine.setAsync(true);
    }
    return DeptInfo;
}

/**
 * 取事業部之前的部門層級
 * @param {string} DeptID 
 * @returns result 層級
 */
function Set_hdn_decision1(Dept) {
    var result = "";
    var DeptInfo = {};
    DeptInfo = queryDeptInfoById(Dept);
    if (!$$.isEmptyObject(DeptInfo)) {
        for (var i = 0; i <= 5; i++) {
            if (i > 0) {
                DeptInfo = queryDeptInfoById(DeptInfo.upperdeptid);
            }
            if (parseInt(DeptInfo.upperdeptlevel) <= 2) {
                break;
            }
        }
        result = DeptInfo.deptlevel;
    }
    return result;
}

/**
  *檢查附件與附件名稱
  *checFileWithFileName(檢查的字元)
  *@param strContainChar: 檔名中所需包含的字串,若不需限定檔名,則傳入空字串即不檢查檔名
  *@param activity 關卡名稱
*/
function checFileWithFileName(strContainChar, activity) {
    var CheckFileName = false;
    var strSTDFileName = "";
    //strContainChar = strContainChar.toUpperCase();
    var tAS = document.getElementById('Attachment_shell');
    if (document.getElementById("Attachment_shell") != null) {
        for (var i = 1; i < tAS.rows.length; i++) {
            var strFileName = tAS.rows[i].cells[1].innerHTML;
            var activity_AS = tAS.rows[i].cells[6].innerHTML;
            if (strContainChar != "" && activity_AS == activity) {
                if (strFileName.indexOf(strContainChar) > -1) {
                    CheckFileName = true;
                    break;
                }
            }
        }
    }
    return CheckFileName;
}

/**
  *檢查附件上傳數量
  *checFileCount
  *@param activity 關卡名稱
*/
function checFileCount(activity) {
    var Cnt = 0;
    var tAS = document.getElementById('Attachment_shell');
    if (document.getElementById("Attachment_shell") != null) {
        for (var i = 1; i < tAS.rows.length; i++) {
            var activity_AS = tAS.rows[i].cells[6].innerHTML;
            if (activity_AS == activity) {
                Cnt += 1;
            }
        }
    }
    return Cnt;
}

/**
 * 廠區_onchange
 * form_org_onchange()
*/
function form_org_onchange() {
    ORG_ID = _ORG[form_org.value];

    //清空單頭編輯欄位
    senao117m007.value = ""; //Delivery NO
    senao117m021.value = ""; //Invoice NO
    senao117m033.value = ""; //Order Type
    senao117m028.value = ""; //負責業務代號
    senao117m029.value = ""; //負責業務名稱
}

/**
 * 廠區
 * set_form_org_hdn()
*/
function set_form_org_hdn() {
    var tDropdownHdn = document.getElementById("form_org_hdn");
    if (tDropdownHdn != null) {
        var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);
        DWRUtil.setValue("form_org", tSelectedSQLDropdown);
    }
}
//$-----Auto generated script block, Please do not edit or modify script below this line.-----$//