/**
 * 廠區_onchange
 * form_org_onchange()
 */
function form_org_onchange() {
    ORG_ID = _ORG[form_org.value];
    //清空單頭編輯欄位
    senao113m037.value = ""; //負責業務id
    senao113m038.value = ""; //負責業務
    senao113m037_ORA.value = ""; //[Oracle] sales id
    //清空單身編輯欄位
    gsenao113d004_reset(); //料號相關欄位 reset
    initGridRow(); //Grid輸入欄位初始化
    gsenao113d012_txt.value = ""; //交期
    gsenao113d018.value = ""; //生管異動交期	
    gsenao113d013.value = ""; //SO
    gsenao113d011.value = ""; //說明
    gsenao113d017.value = ""; //匯率(A/P)
    gsenao113d015.value = ""; //材料成本
    gsenao113d016.value = ""; //材料成本率
    gsenao113d020.value = ""; //Item Status
    gsenao113d021.value = ""; //工單單號
    gsenao113d023.value = ""; //品名備註
    gsenao113d024.value = ""; //Project Code
    gsenao113d025.value = ""; //Project Code Name
    gsenao113d022.value = ""; //Customer PO(PI)_Line
}
/**
 * 清空加簽PM人員
 */
function ClearPM_onclick() {
    senao113m029.value = "";
}
/**
 * 申請人欄位，查詢申請人相關資料，並且執行senao113m003_process()，後續連動多項資料
 */
function senao113m003_onchange() {
    var userInfo = {};
    if (senao113m003.value != "") {
        userInfo = queryUserByEmpId(senao113m003.value);
        if (typeof userInfo.userId != "undefined") {
            senao113m003.value = userInfo.userId; //申請人ID
            senao113m005.value = userInfo.userName; //申請人名稱
            senao113m004.value = userInfo.unitId; //申請單位ID
            senao113m006.value = userInfo.unitName; //申請單位名稱
            return senao113m003_process();
        } else {
            //alert("輸入的申請人代號:" + senao113m003.value + " 查無資料，請重新輸入!! \n");
            alert("[" + $("#lbl_senao113m003").html() + "] " + querySNSI009(form_ou.value, "031", locale, "", "", ""));
            senao113m003.value = "";
            senao113m004.value = "";
            senao113m005.value = "";
            senao113m006.value = "";
            return false;
        }
    } else {
        senao113m003.value = "";
        senao113m004.value = "";
        senao113m005.value = "";
        senao113m006.value = "";
    }
    return true;
}
/**
 * 負責業務欄位，
 */
function senao113m037_onblur() {
    var salesId = senao113m037.value;
    var userInfo = {};
    if (salesId != "") {
        senao113m037_ORA.value = querySalesRepId(salesId);
        if (senao113m037_ORA.value != "-1") {
            userInfo = queryUserByEmpId(salesId);
            if (!$.isEmptyObject(userInfo)) {
                senao113m037.value = userInfo.userId; //申請人ID
                senao113m038.value = userInfo.userName; //申請人名稱
                senao113m039.value = userInfo.unitId; //申請單位ID
                senao113m040.value = userInfo.unitName; //申請單位名稱
            } else {
                senao113m037.value = "";
                senao113m038.value = "";
                senao113m039.value = "";
                senao113m040.value = "";
            }
        } else {
            //alert("此工號(" + salesId + ")不是銷售代表!");
            alert(querySNSI009(formId, "046", locale, "", "", "").replace("@@1", salesId));
            senao113m037.value = "";
            return false;
        }
    }
    return true;
}
/**
 * 負責單位欄位
 */
function senao113m039_onchange() {
    var unitId = senao113m039.value;
    var unitInfo = {};
    if (unitId != "") {
        unitInfo = queryUnitByUnitId(unitId);
        if (!$.isEmptyObject(unitInfo)) {
            senao113m040.value = unitInfo.unitName;
        } else {
            //alert("輸入的負責單位代號:" + unitId + " 查無資料，請重新輸入!!");
            alert(querySNSI009(formId, "047", locale, "", "", "").replace("@@1", unitId));
            senao113m039.value = "";
            senao113m040.value = "";
            return false;
        }
    }
    return true;
}
/**
 * 客戶欄位，資料異動時更新客戶相關資料
 */
function senao113m010_onchange() {
    senao113m010_t1.value = queryCustomerNameById(senao113m010.value);
    return senao113m010_process();
}
/**
 * 簽呈新品保固重出?
 */
function senao113m041_onclick() {
    if ($("#senao113m041_0").is(":checked")) {
        senao113m024.value = "Accrued Warrant Cost"; //Order Type
        senao113m004_ORA.value = queryOrderTypeId(senao113m024.value); //Order Type Id
        senao113m024_b1.disabled = true; //Order Type 開窗
        senao113m041_m.value = "是";
        // senao113m039_b1.disabled = false; //負責單位開窗
        // senao113m039.readOnly = false; //負責單位代號
        // senao113m039.style.backgroundColor = EDIT_BGCOLOR;
        // senao113m040.readOnly = true; //負責單位名稱
        // senao113m040.style.backgroundColor = EDIT_BGCOLOR;
    } else if ($("#senao113m041_1").is(":checked")) {
        senao113m024.value = "";
        senao113m004_ORA.value = "";
        senao113m024_b1.disabled = false;
        senao113m041_m.value = "否";
        // senao113m039_b1.disabled = true;
        // senao113m039.readOnly = true;
        // senao113m039.style.backgroundColor = DEFAULT_BGCOLOR;
        // senao113m040.readOnly = true;
        // senao113m040.style.backgroundColor = DEFAULT_BGCOLOR;
        // senao113m039.value = "";
        // senao113m040.value = "";
    }
}
/**
 *Customer PO
 *senao113m023_onchange()
 *Customer PO預先帶到單身
 */
function senao113m023_onchange() {
    if (senao113m023.value != "") {
        gsenao113d027.value = senao113m023.value;
    } else {
        gsenao113d027.value = "";
    }
}
/**
 * CONVERSION TYPE下拉選單，資料異動時更新CONVERSION RATE、CONVERSION DATE欄位
 */
function senao113m025_onchange() {
    var userConversionType = senao113m025.value;
    var conversionType = queryConversionType(userConversionType);
    var currency = senao113m018.value; //訂單總金額(未稅)-幣別;
    var orderDate = senao113m008.value; //Date Ordered
    var conversionRate = "";
    var gridData;

    if (conversionType != "") {
        senao113m025_ORA.value = conversionType;
        if (conversionType == "User") {
            senao113m020.readOnly = false;
            senao113m020.style.backgroundColor = EDIT_BGCOLOR;
            senao113m026.disabled = false;
            senao113m026.style.backgroundColor = EDIT_BGCOLOR;
        } else {
            senao113m020.value = "";
            senao113m020.readOnly = true;
            senao113m020.style.backgroundColor = DEFAULT_BGCOLOR;
            senao113m026.value = "";
            senao113m026.style.backgroundColor = DEFAULT_BGCOLOR;
            senao113m026.disabled = true;
            conversionRate = queryConversionRate(currency, "TWD", conversionType, orderDate);
            if (conversionType == "1001") { //海關(A/P)
                senao113m020.value = (conversionRate !== "") ? conversionRate : "";
            }

            gridData = getGridData(0);
            if (gridData.length > 0) {
                for (i = 0; i < gridData.length; i++) {
                    gridData[i].senao113d017 = conversionRate;
                }
            }
            setGridData(0, gridData);

        }
    } else {
        senao113m025.value = "";
        senao113m025_ORA.value = "";
        senao113m020.value = "";
        senao113m020.readOnly = true;
        senao113m020.style.backgroundColor = DEFAULT_BGCOLOR;
        senao113m026.value = "";
        senao113m026.style.backgroundColor = DEFAULT_BGCOLOR;
        senao113m026.disabled = true;
    }
    if (currency == "TWD") {
        senao113m020.value = "1";
        senao113m025.disabled = true;
    }
    if (senao113m025.selectedIndex != -1) {
        senao113m025_m.value = senao113m025[senao113m025.selectedIndex].text;
    }
}
/**
 * 檢查匯率欄位，必須為數值型態;
 * 若Order Type為User，則將Grid中的匯率改成自訂匯率
 */
function senao113m020_onchange() {
    if (senao113m020.value != "") {
        if (isNaN(senao113m020.value)) {
            //alert("匯率必需為數值型態, 請重新輸入");
            alert("[" + $("#lbl_senao113m020").html() + "] " + querySNSI009(form_ou.value, "021", locale, "", "", ""));
            senao113m020.value = "";
        } else {
            var orderType = senao113m025.value;
            var conversionRate = senao113m020.value;
            var gridData;
            if (orderType == "User" && conversionRate != "") {

                gridData = getGridData(0);
                if (gridData.length > 0) {
                    for (i = 0; i < gridData.length; i++) {
                        gridData[i].senao113d017 = conversionRate;
                    }
                }
                setGridData(0, gridData);

            }
        }
    }
}

/**
 * 訂單總金額(未稅)-幣別欄位，資料異動時，若不是台幣則會讀取新的CONVERSION TYPE下拉選單
 */
function senao113m018_onchange() {
    var currency = senao113m018.value;
    if (currency == "TWD" || currency == "") {
        senao113m018.value = "TWD";
        senao113m020.value = "1"; //Conversion Rate
        senao113m025.disabled = true; //Conversion Type
        senao113m025.value = "";
    } else {
        senao113m025.value = "";
        senao113m025.disabled = false; //Conversion Type
        setSelectDefalut(  //參數傳"海關(A/P)"是因為訂單不取海關a/p的匯率type
            "senao113m025",
            invokeURL + "BPM_ERP_SENAO113_31",
            { USER_CONVERSION_TYPE: "海關(A/P)" },
            ""
        );
    }
}
/**
 * 品名規格欄位，資料變更後判斷是否可下單
 */
function gsenao113d005_onchange() {
    var productSpec = gsenao113d005.value;
    var productSpecArray = productSpec.split("@@");
    var orderType = senao113m024.value;
    var itemNo = gsenao113d004.value;
    var itemInfo = {};

    //console.log('productSpecArray',productSpecArray);
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        gsenao113d005.value = "";
        return false;
    }
    if (productSpec != "") {
        if (productSpecArray.length > 1) {
            console.log('productSpec:', productSpec);
            console.log('productSpecArray:', productSpecArray);
            gsenao113d004_ORA.value = productSpecArray[0];
            gsenao113d004.value = productSpecArray[1];
            gsenao113d005.value = productSpecArray[2];
        } else {
            //20231003 Steve 因新增維修料號Maintain001~004 進行js修改(因user要求,先行新增Maintain-004)
            //if ((orderType.substr(0, 1) == "S" && "No Goods;Export Fee;Maintain;Rent".search(itemNo) > -1) ||
            if ((orderType.substr(0, 1) == "S" && "No Goods;Export Fee;Maintain;Rent;Maintain-004;".search(itemNo) > -1) ||
                (orderType.substr(0, 4) == "其他收入" && "No Goods".search(itemNo) == -1) ||
                (orderType.substr(0, 4) == "運費收入" && "Export Fee".search(itemNo) == -1) ||
                //20231003 Steve 因新增維修料號Maintain001~004 進行js修改(因user要求,先行新增Maintain-004)
                //(orderType.substr(0, 4) == "維修收入" && "Maintain".search(itemNo) == -1) ||
                (orderType.substr(0, 4) == "維修收入" && "Maintain;Maintain-004;".search(itemNo) == -1) ||
                (orderType.substr(0, 4) == "租金收入" && "Rent".search(itemNo) == -1) ||
                //20231013 Steve 流程序號:SENAO10100004636 因會計反映新設定的權利金-銷貨/Royalty也有材料成本必填寫問題 因此不卡控
                (orderType.substr(0, 3) == "權利金" && "Royalty".search(itemNo) == -1)) {
                //alert("您輸入的品名規格不屬於【" + orderType + "】Order Type，請再次確認!!");
                alert('[' + itemNo + ']' + querySNSI009(formId, "043", locale, "", "", "").replace("@@1", orderType));
                gsenao113d005.value = "";
                return false;
            }
            itemInfo = queryItemInfoByName(productSpec);
            if (!$.isEmptyObject(itemInfo)) {
                if (itemInfo.orderEnabledFlag == "Y") {
                    gsenao113d004.value = itemInfo.itemNo; //料號CODE
                    gsenao113d004_ORA.value = itemInfo.inventoryItemId; //Item Id
                    gsenao113d020.value = itemInfo.inventoryItemStatusCode; //Item Status
                    if (!item_process()) {
                        return false;
                    }
                } else {
                    //alert("該[品名]不允許下訂單, 請與PM單位聯絡!!");
                    alert('[' + itemNo + ']' + querySNSI009(formId, "044", locale, "", "", ""));
                    gsenao113d004_reset();
                    return false;
                }
            } else {
                //alert("請重新輸入正確的[品名]!!");
                alert('[' + itemNo + ']' + querySNSI009(formId, "045", locale, "", "", ""));
                gsenao113d004_reset();
                return false;
            }
        }
    }
    return true;
}
/**
 * 數量欄位，檢查是否為正整數、計算此筆小計、計算總金額、計算稅金
 */
function gsenao113d006_onchange() {
    if (!checkIsQtyFieldLegal(gsenao113d006.value)) {
        //alert("「數量」欄位請填寫大於0數值!!");
        alert("[" + $("#lbl_gsenao113d006").html() + "] " + querySNSI009(form_ou.value, "020", locale, "", "", ""));
        gsenao113d006.value = "";
        return flase;
    } else {
        calculateSubtotal();
        calculateTotalAmount_TotalTax();
    }
    return true;
}
/**
 * 交期欄位，判斷交期是否為周末
 */
function gsenao113d012_onchange() {
    var deliveryDate = gsenao113d012.value;
    var yyyy,
        MM,
        dd;
    var d;
    if (deliveryDate != "" && deliveryDate.length == 10) {
        yyyy = deliveryDate.substr(0, 4);
        MM = deliveryDate.substr(5, 2) - 1;
        dd = deliveryDate.substr(8, 2);
        d = new Date(yyyy, MM, dd);
        if (checkIsWeekend(d)) {
            //alert("Schedule Ship Date 不可為Sat. 或 Sun.");
            alert(querySNSI009(formId, "048", locale, "", "", ""));
            gsenao113d012.value = "";
            return false;
        }
    }

    return true;
}
//生產地onclick
function gsenao113d019_val_onchange() {
    gsenao113d019.value = $("#gsenao113d019_val").find(":selected").text();
}
/**
 * 說明欄位，檢查字數
 */
function gsenao113d011_onblur() {
    var charQty = 0;
    var explanation = gsenao113d011.value;
    var i;
    var char;
    for (i = 0; i < explanation.length; i++) {
        char = explanation.substr(i, 1);
        if (!isNaN(char) || isLetter(char)) {
            charQty += 1;
        } else {
            charQty += 3;
        }
    }
    if (charQty > 4000) {
        //alert("「說明」欄位共 " + charQty + " 碼, 不可超過4000碼(中文字為3碼)!!");
        alert(querySNSI009(formId, "049", locale, "", "", "").replace("@@1", charQty));
        return false;
    }
    return true;
}
/**
 * 計算總金額(未稅)及稅額，加總GRID內所有小計欄位，並四捨五入取至小數兩位
 * 20200814 Milla 將計算稅額的部份移至單身計算
 */
function calculateTotalAmount_TotalTax() {
    var totalAmount = 0;
    var totalAmount_orig = 0;//20230914 Calvin 原幣(TWD)
    var totalTax = 0;
    var totalAmount_needtax = 0;
    var taxRate = 0;
    var gridData = getGridData(0);
    for (i = 0; i < gridData.length; i++) {
        totalAmount = totalAmount + Number(gridData[i].SENAO113D010); //gsenao113d010 小計
        if (gridData[i].SENAO113D026.search("5%") > -1) {
            totalAmount_needtax += Number(gridData[i].SENAO113D010); //gsenao113d010 小計
        }
        totalAmount_orig += Number(gridData[i].SENAO113D006) * Number(gridData[i].SENAO113D008) * Number(gridData[i].SENAO113D017);//20230914 Calvin 原幣(TWD)=數量*單價*匯率
    }
    if (totalAmount_needtax > 0) {
        taxRate = 0.05;
        totalTax = roundNumber((Number(totalAmount_needtax) * taxRate), 2);
    }
    totalAmount = roundNumber(totalAmount, 2);
    senao113m019.value = totalAmount;
    senao113m017.value = totalTax;
    senao113m021.value = roundNumber(totalAmount_orig, 0);//20230914 Calvin 寫入隱藏欄位，訂單總金額(未稅)-折合台幣
}
/**
 * 材料成本欄位，檢查格式
 */
function gsenao113d015_onblur() {
    var status=true;
    var itemNo = gsenao113d004.value;
    var itemCost = gsenao113d015.value;
    //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
    //20231003 Steve 因新增維修料號Maintain001~004 進行js修改(因user要求,先行新增Maintain-004)
    //20231013 Steve 流程序號:SENAO10100004636 因會計反映新設定的權利金-銷貨/Royalty也有材料成本必填寫問題 因此不卡控
    //20231102 Steve 代收付-銷貨 新增 Material-001 、 Material-002
    //var specificItemNo = "5720A0512300;7001A0017000;5720A0045367;Temporary;Maintain;Export Fee;NRE Fee;PVT;No Goods;Misc Item;NRE;W/O#;Material;Expenses;Tooling Fee;Cer. Fee;Rent;Rework Fee"; 
    //var specificItemNo = "5720A0512300;7001A0017000;5720A0045367;Temporary;Maintain;Export Fee;NRE Fee;PVT;No Goods;Misc Item;NRE;W/O#;Material;Expenses;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain-004;"; 
    //var specificItemNo = "5720A0512300;7001A0017000;5720A0045367;Temporary;Maintain;Export Fee;NRE Fee;PVT;No Goods;Misc Item;NRE;W/O#;Material;Expenses;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain-004;Royalty;"; 
    var specificItemNo = "5720A0512300;7001A0017000;5720A0045367;Temporary;Maintain;Export Fee;NRE Fee;PVT;No Goods;Misc Item;NRE;W/O#;Material;Expenses;Tooling Fee;Cer. Fee;Rent;Rework Fee;Maintain-004;Royalty;Material-001;Material-002;";
    if (specificItemNo.search(itemNo) === -1 && senao113m024.value.substr(0, 3) != "材料款") {
        if (itemCost == "") {
            //alert("物料成本沒有值!!");
            alert("[" + $("#lbl_gsenao113d015").html() + "] " + querySNSI009(form_ou.value, "004", locale, "", "", ""));
            status=false;
        } else if (itemCost == "0") {
            //alert("物料成本不正確!!");
            alert("[" + $("#lbl_gsenao113d015").html() + "] " + querySNSI009(form_ou.value, "022", locale, "", "", ""));
             status=false;
        } else if (isNaN(itemCost)) {
            //alert("物料成本數值不正確!!");
            alert("[" + $("#lbl_gsenao113d015").html() + "] " + querySNSI009(form_ou.value, "021", locale, "", "", ""));
             status=false;
        }
    }
    return status;
}
/**
 * 單價欄位，檢查是否為數值、計算材料成本、計算材料成本率、計算此筆小計、計算總金額、計算稅金
 */
function gsenao113d008_onchange() {
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        gsenao113d008.value = "0";
        return false;
    }
    if (gsenao113d008.value != "") {
        if (isNaN(gsenao113d008.value)) {
            //alert("「數量」欄位請填寫數值!!");
            //gsenao113d008為單價，上述提示有誤，順便修正
            alert("[" + $("#lbl_gsenao113d008").html() + "] " + querySNSI009(form_ou.value, "020", locale, "", "", ""));
            return false;
        }
        if (gsenao113d008.value == "0") {
            gsenao113d016.value = ""; //材料成本率
        }
        gsenao113d015.value = fixNull(calculateItemCost(gsenao113d004_ORA.value, gsenao113d004.value, senao113m022.value.substr(0, 3), gsenao113d017.value, gsenao113d008.value));
        calculateItemCostRatio();
        calculateSubtotal();
        calculateTotalAmount_TotalTax();
    }
    return true;
}

/**
 * 單頭Tax Code
 * senao113m016_onchange
 */
function senao113m016_onchange() {
    gsenao113d026.value = senao113m016.value; //預帶單頭的稅別
    if (form_ou.value == "senao" || form_ou.value == "stw") {
        if (checkIsIncludeNoGoodsForm(senao113m004_ORA.value) == "Y" && senao113m016.value.search("0%") > -1) { //代收付 且為0%稅率
            $("#senao113m046_0").attr("disabled", false); //是否併正貨出口-是
            $("#senao113m046_0").attr("readonly", false); //是否併正貨出口-是
            $("#senao113m046_1").attr("disabled", false); //是否併正貨出口-否
            $("#senao113m046_1").attr("readonly", false); //是否併正貨出口-否
        } else {
            $("#senao113m046_0").attr("checked", false);
            $("#senao113m046_1").attr("checked", false);
            $("#senao113m046_0").attr("disabled", true); //是否併正貨出口-是
            $("#senao113m046_0").attr("readonly", true); //是否併正貨出口-是
            $("#senao113m046_1").attr("disabled", true); //是否併正貨出口-否
            $("#senao113m046_1").attr("readonly", true); //是否併正貨出口-否
        }
    }
}
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
function btnAdd_onclick() {
    var errMsg = "";
    var itemNo = gsenao113d004.value;
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
        return false;
    } else {
        // console.time('calculateItemCost');
        calculateItemCost(gsenao113d004_ORA.value, gsenao113d004.value, senao113m022.value.substr(0, 3), gsenao113d017.value, gsenao113d008.value);
        //console.timeEnd('calculateItemCost');
        // console.time('calculateItemCostRatio');
        calculateItemCostRatio();
        // console.timeEnd('calculateItemCostRatio');
        //20231101 Steve 新增欄位 在add grid成功後更改背景顏色
        gsenao113d028.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d029.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d030.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d031.style.backgroundColor = DEFAULT_BGCOLOR;
        // console.time('calculateTotalAmount_TotalTax');
        calculateTotalAmount_TotalTax();
        // console.timeEnd('calculateTotalAmount_TotalTax');
        // console.time('queryAllCreditItems');
        queryAllCreditItems(senao113m010_ORA.value, senao113m018.value, true);
        // console.timeEnd('queryAllCreditItems');
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
/*
    20231101 Steve 流程序號:SENAO10100004693 
    新增欄位
    (1)訂單申請日之收款情形 料號為 Material-001 or Material-002 [未選卡傳送]
    (2) 001 呆滯處理方式    料號為 Material-001 [未選卡傳送]
    (3) 呆滯料處理備註      料號為 Material-001 [未選卡傳送]
    (4) 002 延單處理方式    料號為 Material-002 [未選卡傳送]
*/
function btnEdit_onclick() {

    var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
    var errMsg = "";
    var itemNo = gsenao113d004.value;
    if (tGridIndex != -1) { }
    else {
        //alert("請先選擇下方一筆資料再做編輯");
        alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));
        return false;
    }
    if (form_org.value == "") {
        //errMsg +="請先選擇【廠區】!";
        errMsg += "[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n";
    }
    //20231101 Steve 新增欄位
    if (itemNo == 'Material-001') {
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
    if (itemNo == 'Material-002') {
        // errMsg += "[訂單申請日之收款情形] 不可空白";
        if (gsenao113d028.value.trim() == '' || gsenao113d028 == null) {
            errMsg += "[" + $("#lbl_gsenao113d028").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
        }
        // errMsg += "[002 延單處理方式] 不可空白";
        if (gsenao113d030.value.trim() == '' || gsenao113d030 == null) {
            errMsg += "[" + $("#lbl_gsenao113d030").html() + "] " + querySNSI009('senao', "004", locale, "", "", "") + "\n";
        }
    }

    if (errMsg != "") {
        alert(errMsg);
        return false;
    } else {
        calculateItemCost(gsenao113d004_ORA.value, gsenao113d004.value, senao113m022.value.substr(0, 3), gsenao113d017.value, gsenao113d008.value);
        calculateItemCostRatio();
        grideditRow(0);
        clearBinding(0); //清除Binding欄位資料
        calculateTotalAmount_TotalTax();
        queryAllCreditItems(senao113m010_ORA.value, senao113m018.value, true);
        initGridRow();
        if (getGridData(0).length > 0) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }
    }
}
/**
 * [Grid] 刪除資料
 */
function btnDel_onclick() {

    var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
    var errMsg = "";
    if (tGridIndex != -1) {
        griddeleteRow(0); //將Grid某筆資料刪除
        clearBinding(0);
        refreshRowNo(0, 'GNO');
        senao113m017.value = ""; //稅
        senao113m019.value = ""; //訂單總金額
        //20231101 Steve 流程序號:SENAO10100004693 因新增欄位,在grid 刪除資料時作disable
        gsenao113d028.disabled = true;
        gsenao113d029.disabled = true;
        gsenao113d030.disabled = true;
        gsenao113d031.disabled = true;
        gsenao113d031.readOnly = true;
        gsenao113d028.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d029.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d030.style.backgroundColor = DEFAULT_BGCOLOR;
        gsenao113d031.style.backgroundColor = DEFAULT_BGCOLOR;
        calculateTotalAmount_TotalTax();
        queryAllCreditItems(senao113m010_ORA.value, senao113m018.value, true);
        initGridRow();
        if (getGridData(0).length > 0) {
            form_org.disabled = true;
        } else {
            form_org.disabled = false;
        }
    } else {
        //alert("請先在下方選擇一筆資料，再做刪除!!\n");
        alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));
        return false;
    }
}
//Excel匯入
function btnImport_onclick() {
    if (isImportExcelUser == 'Y' || senao113m024.value == '材料款-呆滯' || senao113m024.value == '材料款-延單' || senao113m024.value == '銷貨' || senao113m024.value == '銷貨HUB') { //一般銷貨、維修收入
        //表單Grid名稱
        var tFormGridName = "Grid1";
        //Excel對應的欄位名稱 (可以設空白)
        var tExcelFieldName = "";
        var tBatchUploaderString = encodeURI('/NaNaWeb/GP/WMS/PerformWorkItem/CallExcelImporter' + '?hdnMethod=initExcelImporter&excelFieldName=' + tExcelFieldName + '&formGridName=' + tFormGridName);
        if ($("#form_org").val() == "") {
            //alert('請先選擇【廠區】!!!');
            alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
            return false;
        }
        if (senao113m024.value == "") {
            //alert('請先選擇【order Type】!!!');
            alert("[" + $("#lbl_senao113m024").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
            return false; gsenao113d009.value = senao113m018.value; //隱藏欄位，幣別
        }
        if (excelList[i][5] != '') {
            gsenao113d012_txt.value = excelList[i][5]; //excelList[i][5]交期	
        }
        if (excelList[i][6] != '') {
            gsenao113d011.value = excelList[i][6]; //excelList[i][6]說明
        }
        if (excelList[i][7] != '') {
            gsenao113d023.value = excelList[i][7]; //excelList[i][7]品名備註	
        }
        if (excelList[i][8] != '') {
            var str = excelList[i][8]; //excelList[i][8]訂單申請日之收款情形
            var paymentDateVal = "";
            if (str == '已收') {
                paymentDateVal = "Received";
            } else if (str == "待收") {
                paymentDateVal = "Pending for payment";
            }
            $('#gsenao113d028 option[value="' + paymentDateVal + '"]').prop("selected", true); //訂單申請日之收款情形select
        }
        if (excelList[i][9] != '' && senao113m024.value == '材料款-呆滯') {
            var str1 = excelList[i][9];   //excelList[i][9]001 呆滯處理方式
            var sluggishHandlingVal = "";
            if (str1 == '報廢') {
                sluggishHandlingVal = "Discard as useless";
            } else if (str1 == "收貨轉費用倉") {
                sluggishHandlingVal = "Deposit to customers stock";
            }
            $('#gsenao113d029 option[value="' + sluggishHandlingVal + '"]').prop("selected", true); //001 呆滯處理方式select
        }
        if (excelList[i][10] != '' && senao113m024.value == '材料款-呆滯') {
            gsenao113d031.value = excelList[i][10];//excelList[i][10]呆滯料處理備註	
        }
        if (excelList[i][11] != '' && senao113m024.value == '材料款-延單') {
            var str2 = excelList[i][11];  //excelList[i][11]002 延單處理方式
            var delayedOrdersVal = "";
            if (str2 == '退款') {
                delayedOrdersVal = "Refund";
            } else if (str2 == "折讓") {
                delayedOrdersVal = "Credit back";
            }
            $('#gsenao113d030 option[value="' + delayedOrdersVal + '"]').prop("selected", true); //延單處理方式:select
        }
        if (excelList[i][12] != '') {
            gsenao113d024.value = excelList[i][12];//excelList[i][12]Project Code
            //撈Project Code、Name

            var sqlId = "OracleItemModel";
            var tParams = [];
            var tDefaultAppendSQL = "and SEGMENT1= :p";
            tParams.push(excelList[i][12]);
            DWREngine.setAsync(false);
            ajax_GetOracleData.CallProc("ERP_SNO_C", sqlId, tParams, tDefaultAppendSQL, OU_ID, function (pData) {
                console.log(pData);
                if (pData.length > 0) {
                    gsenao113d025.value = pData[0][1];  //Project Name 
                }
            });
            DWREngine.setAsync(true);
        }
        //檢查料號第5碼是否有設定產地
        var defaultSite = queryItemSite(excelList[i][0]);
        if (!$$.isEmptyObject(defaultSite)) {
            $('#gsenao113d019_val option[value="' + defaultSite.BAS_CODE + '"]').prop("selected", true);
            gsenao113d019_val.onchange();
        } else {
            //查詢不到預設TW-HWAYA				
            $('#gsenao113d019_val option:contains(" ")').prop("selected", true);
            gsenao113d019_val.onchange();
        }
        if (excelErrorMsg.value != '') {
            excelIsok = false;
        }

        Grid1Obj.addRow(); //將Binding欄位的資料填入Grid中
        Grid1Obj.clearBinding(); //新增後清除Binding欄位資料
        document.getElementById("Grid1").value = Grid1Obj.toArrayString(); //將新的資料存入Grid隱藏欄位中
    }
    //最後一筆
    if (i === (excelList.length - 1)) {
        calculateTotalAmount_TotalTax();
        senao113m003_onchange();
        senao113m025.value = tempConversionType; //因為執行senao113m003_onchange(),其中會將下拉選單更新,因此放在之後才會顯示選取項目
        if (!excelIsok) {
            btnExportXls_onclick();
            Grid1Obj.reload([]); //清掉Grid1
        }
        excelIsok = true;
    }
}
/**
 *Customer PO
 *senao113m023_onchange()
 *Customer PO預先帶到單身
 */
function senao113m023_onchange() {
    if (senao113m023.value != "") {
        gsenao113d027.value = senao113m023.value;
    } else {
        gsenao113d027.value = "";
    }
}


