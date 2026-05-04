/**
 * 提供客戶欄位開窗後呼叫、手動輸入代碼後呼叫，查詢客戶相關資料、
 * 更新CONVERSION TYPE下拉選單、顯示信用額度資料
 */
function senao113m010_process() {
    var customerId = senao113m010.value;
    var customerName = senao113m010_t1.value;
    var customerInfo = {};
    if (customerName != "") {
        customerInfo = queryCustomerRelatedInfo(customerId);

        //20241204 Neil (S)
        var hasProperties = false;
        for (var key in customerInfo) {
            if (customerInfo.hasOwnProperty(key)) {
                hasProperties = true;
                break;
            }
        }
        //20241204 Neil (E)
        //if (!$.isEmptyObject(customerInfo)) {  //20240913 marked
        // if (Object.keys(customerInfo).length !== 0) {  //20240913 ADD 
        if (hasProperties) { //20241204 Neil add，因為Object.keys IE模式無法使用因此改寫
            senao113m010_ORA.value = customerInfo.customerId;
            senao113m010_ORA2.value = customerInfo.attribute13;

            //senao113m010_ORA3.value = (customerInfo.attribute14 === "Y" && customerInfo.status === "A") ? "Y" : ""; //20240913 marked
            //20240913 改寫上面的程式 (S)
            if (customerInfo.attribute14 === "Y" && customerInfo.status === "A") {
                senao113m010_ORA3.value = "Y";
            } else {
                senao113m010_ORA3.value = "";
            }
            //20240913 改寫上面的程式 (E)

            senao113m014_ORA.value = customerInfo.paymentTermId;
            senao113m014.value = customerInfo.paymentTerm;
            senao113m015.value = customerInfo.fobPoint;
            senao113m018.value = customerInfo.currencyCode;
            senao113m022.value = customerInfo.priceList;
            senao113m022_ORA.value = customerInfo.priceListId;
            // if (customerInfo.taxCode === "5%") {
            // 	senao113m016_0.checked = true;
            // 	senao113m016_1.checked = false;
            // } else if (customerInfo.taxCode === "0%") {
            // 	senao113m016_0.checked = false;
            // 	senao113m016_1.checked = true;
            // }
            senao113m016.value = customerInfo.taxCode;
            senao113m016_onchange();
            displayCreditInfo(true);
            queryAllCreditItems(senao113m010_ORA.value, senao113m018.value, true);
            senao113m018_onchange(); //訂單總金額(未稅)-幣別欄位
            senao113m025_onchange(); //Conversion Type下拉選單
            updateGridData();
            isReminderCustomer(customerId); //20220928 add by calvin 指定客戶提醒通知
        } else {
            //alert("該客戶代碼，無符合的客戶資料。");
            alert(querySNSI009(formId, "038", locale, "", "", ""));
            senao113m010_reset();
            return false;
        }
    } else {
        //alert("客戶代碼有誤, 請重新輸入客戶代碼");
        alert(querySNSI009(formId, "039", locale, "", "", ""));
        senao113m010_reset();
        return false;
    }
    //資訊服務申請單SENAO10100001312新增勾選欄位”庫存出貨”並綁定客別為杜拜分公司(客代:4982)&新加坡分公司(客代:1021&3951)，當這2個RBU勾選此欄位代表互挪庫存出貨，並跑新的簽核流程
    if (isValueInSNSI003("SN113_S29", senao113m010.value) == "Y") {
        senao113m049_0.disabled = false; //庫存出貨
    } else {
        senao113m049_0.checked = false;
        senao113m049_0.disabled = true; //庫存出貨
    }
    return true;
}
/**
 * 提供開啟表單時、申請人開窗後、手動輸入代碼後呼叫，查詢相關資料
 * @description
 * 1.銷售代表ID(senao113m003_ORA) 2.Order Type ID(senao113m004_ORA) 3.Order Type Name(senao113m024)
 * 4.Payment Term(senao113m014) 5.客戶相關資料(senao113m010_onchange()) 6.Grid資料
 */
function senao113m003_process() {
    senao113m003_ORA.value = querySalesRepId(senao113m003.value);
    senao113m014.value = ""; //Payment Term
    if (senao113m010.value != "") { //Customer Number
        return senao113m010_onchange();
    }
    return true;
}
/**
 * 提供Order Type開窗後呼叫，判斷Order Type、若為特殊料號則清空Grid資料
 */
function senao113m024_process() {
    var itemNo = "";
    if (senao113m004_ORA.value == "1474" || senao113m004_ORA.value == "2561") { //1474 => 維修收入-銷貨 2561=>STW-M-維修收入
        gsenao113d021.readOnly = false; //工單單號
    } else {
        gsenao113d021.readOnly = true; //工單單號
    }
    if (querySENAO113_45(senao113m004_ORA.value)) { //取OrderType是否不需卡控Credit和材料成本率(Order TypeID)
        isNotCheck_Credit_Cost.value = "Y";
    } else {
        isNotCheck_Credit_Cost.value = "N";
    }
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
                senao113m044.value = "";
            }
            $("#senao113m046_0").attr("checked", false);
            $("#senao113m046_1").attr("checked", false);
            $("#senao113m046_0").attr("disabled", true); //是否併正貨出口-是
            $("#senao113m046_0").attr("readonly", true); //是否併正貨出口-是
            $("#senao113m046_1").attr("disabled", true); //是否併正貨出口-否
            $("#senao113m046_1").attr("readonly", true); //是否併正貨出口-否
        }
    } else if (form_ou.value == "enr" || form_ou.value == "stw") { //20211013 Milla 恩睿導入LICENSE 交易，若選擇order type = LICENSE 開放Ship To Mail、Note欄位
        if (senao113m024.value.toUpperCase().indexOf("LICENSE") >= 0) {
            $("#senao113m047").attr("disabled", false); //Ship To Mail
            $("#senao113m047").attr("readonly", false); //Ship To Mail
            $('#senao113m047').css({
                "background-color": EDIT_BGCOLOR
            });
            $("#senao113m048").attr("disabled", false); //Note
            $("#senao113m048").attr("readonly", false); //Note
            $('#senao113m048').css({
                "background-color": DEFAULT_BGCOLOR
            });
        } else {
            $("#senao113m047").val('');
            $("#senao113m048").val('');
            $("#senao113m047").attr("disabled", true); //Ship To Mail
            $("#senao113m047").attr("readonly", true); //Ship To Mail
            $('#senao113m047').css({
                "background-color": DEFAULT_BGCOLOR
            });
            $("#senao113m048").attr("disabled", true); //Note
            $("#senao113m048").attr("readonly", true); //Note
            $('#senao113m048').css({
                "background-color": DEFAULT_BGCOLOR
            });
        }
    }
    //OrderType改變後，若一般有選到其他收入-無實物,出口運費,維修收入者，將所有Grid清空
    if (senao113m024.value.substr(0, 1) != "S") {
        setGridData(0, []); //清空Grid資料
    } else {
        var gridData = getGridData(0);
        //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
        //20231003 Steve 因新增維修料號Maintain001~004 進行js修改(因user要求,先行新增Maintain-004)
        //20231013 Steve 流程序號:SENAO10100004636 因會計反映新設定的權利金-銷貨/Royalty也有材料成本必填寫問題 因此不卡控
        //20231102 Steve 代收付-銷貨 新增 Material-001 、 Material-002
        //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee"; 
        //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;"; 
        //var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;Royalty;"; 
        var specificItemNo = "NO GOODS;EXPORT FEE;MAINTAIN;TEMPORARY;NRE FEE;NRE;W/O#;PVT;Material;Expenses;NRE;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain;Maintain-004;Royalty;Material-001;Material-002;";
        for (i = 0; i < gridData.length; i++) {
            itemNo = gridData[i].senao113d019.trim(); //料號
            if (itemNo != "" && specificItemNo.search(itemNo) > 0) {
                setGridData(0, []);  //清空Grid資料
                break;
            }
        }
    }
    //檢查是否可以使用匯入EXCEL
    if (isImportExcelUser == "Y" || senao113m024.value == '材料款-呆滯' || senao113m024.value == '材料款-延單' || senao113m024.value == '銷貨' || senao113m024.value == '銷貨HUB') {
        btnImport.style.display = "block";
        link3.style.display = "block";
    } else {
        btnImport.style.display = "none";
        link3.style.display = "none";
    }
    return true;
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
    if (senao113m029_hdn.value != "") {
        originPmList = eval(senao113m029_hdn.value);
        for (i = 0; i < originPmList.length; i++) {
            displayPmList.push(originPmList[i][1] + "-" + originPmList[i][2]);
        }
        senao113m029.value = displayPmList.join(";");
        addApprovalPMList.value = splitBySymbol(senao113m029.value);
    }
    return true;
}
/**
 * 提供負責業務開窗後呼叫，查詢對應所屬部門
 */
function senao113m037_process() {
    if (senao113m037.value) {
        var userInfo = queryUserByEmpId(senao113m037.value);
        if (!$.isEmptyObject(userInfo)) {
            senao113m039.value = userInfo.unitId;
            senao113m040.value = userInfo.unitName;
        } else {
            //alert("該負責業務查無對應所屬部門!");
            alert(querySNSI009(formId, "037", locale, "", "", ""));
        }
    }
    return true;
}
/**
 * Price List欄位，資料異動時更新List Header Id、更新CONVERSION TYPE、
 * CONVERSION RATE、CONVERSION DATE、Grid相關資料
 */
function senao113m022_process() {
    var priceInfo = {};
    priceInfo = queryPriceInfo(senao113m022.value);
    senao113m022_ORA.value = priceInfo.listHeaderId;
    senao113m018.value = priceInfo.currencyCode;
    senao113m018_onchange(); //訂單總金額(未稅)-幣別欄位
    senao113m025_onchange(); //Conversion Type下拉選單
    updateGridData();
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
    var inventoryItemStatusCode = gsenao113d020.value;
    var itemNo = gsenao113d004.value;
    var itemNoForRBU = "0210A0010000,091200090000,1101A0028300,1102A0015300,1102A0115300,1102A1033300,1102A1033303,1103A0003300,1103A0021300,1104A0009300";
    /*
        20231101 Steve 流程序號:SENAO10100004693 新增欄位
        先將欄位disable,BGcolor設default
    */
    gsenao113d028.disabled = true;
    gsenao113d029.disabled = true;
    gsenao113d030.disabled = true;
    gsenao113d031.readOnly = true;
    gsenao113d028.style.backgroundColor = DEFAULT_BGCOLOR;
    gsenao113d029.style.backgroundColor = DEFAULT_BGCOLOR;
    gsenao113d030.style.backgroundColor = DEFAULT_BGCOLOR;
    gsenao113d031.style.backgroundColor = DEFAULT_BGCOLOR;
    /*end of 先將欄位disable,BGcolor設default*/
    //20231101 Steve 料號為 Material-001時需選擇 訂單申請日之收款情形 、 001 呆滯處理方式、呆滯料處理備註 
    if (itemNo.trim() == 'Material-001' || senao113m024.value == '材料款-呆滯') {
        gsenao113d030.value = '';
        gsenao113d028.disabled = false;
        gsenao113d029.disabled = false;
        gsenao113d031.disabled = false;
        gsenao113d031.readOnly = false;
        gsenao113d028.style.backgroundColor = EDIT_BGCOLOR;
        gsenao113d029.style.backgroundColor = EDIT_BGCOLOR;
        gsenao113d031.style.backgroundColor = EDIT_BGCOLOR;
    }
    //20231101 Steve 料號為 Material-002時需選擇 訂單申請日之收款情形 、 002 延單處理方式
    if (itemNo.trim() == 'Material-002' || senao113m024.value == '材料款-延單') {
        gsenao113d029.value = '';
        gsenao113d031.value = '';
        gsenao113d028.disabled = false;
        gsenao113d030.disabled = false;
        gsenao113d028.style.backgroundColor = EDIT_BGCOLOR;
        gsenao113d030.style.backgroundColor = EDIT_BGCOLOR;
    }
    //料號狀態為Active、C、PVT
    if ((inventoryItemStatusCode == "Active" || inventoryItemStatusCode == "C" ||
        inventoryItemStatusCode == "PVT") && senao113m024.value.indexOf("材料款") < 0) {
        console.log('isNotCheck_Credit_Cost',isNotCheck_Credit_Cost.value);
        console.log('inventoryItemStatusCode',inventoryItemStatusCode);
        if (isNotCheck_Credit_Cost.value == "Y") {
            if (inventoryItemStatusCode != "C") {
                //alert("該料號不允許下訂單，請與PM單位聯絡!!");
                alert('['+itemNo+']'+querySNSI009(formId, "041", locale, "", "", ""));
                gsenao113d004_reset();
                return false;
            }
            if (!item_process()) {
                return false;
            }
        } else {
            //若使用RBU料號，不允許下單
            if (itemNoForRBU.search(itemNo) > -1) {
                //alert("該料號為RBU使用，不允許下訂單，請與PM單位聯絡!!");
                alert('['+itemNo+']'+querySNSI009(formId, "042", locale, "", "", ""));
                gsenao113d004_reset();
                return false;
            }
            if (!item_process()) {
                return false;
            }
        }
        //20230530 依料號第5碼預設生產地
        var defaultSite = queryItemSite(itemNo);
        if (!$.isEmptyObject(defaultSite)) {
            $('#gsenao113d019_val option[value="' + defaultSite.BAS_CODE + '"]').prop("selected", true);
            $('#gsenao113d019_val').trigger("change");
        }
        else {
            //查詢不到預設TW-HWAYA
            $('#gsenao113d019_val option:contains(" ")').prop("selected", true);
            $('#gsenao113d019_val').trigger("change");
        }
    } else {
        if (isNotCheck_Credit_Cost.value != "Y" && form_ou.value != "sin") {
            //alert("該料號不允許下訂單，請與PM單位聯絡!!");
            alert('['+itemNo+']'+querySNSI009(formId, "041", locale, "", "", ""));
            gsenao113d004_reset();
            return false;
        }
    }
    return true;
}