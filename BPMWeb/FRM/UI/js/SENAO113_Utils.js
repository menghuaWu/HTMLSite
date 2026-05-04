/**
 * Grid輸入欄位初始化
 */
function initGridRow() {
    var errArray = [];
    var gridData = getGridData(0);
    gsenao113d021.readOnly = true; //工單單號
    //維修收入-銷貨:品名規格(從第二筆資料後，自動複製上一列資料)  * /Chandler.20140303
    if (senao113m004_ORA.value == "1474" || senao113m004_ORA.value == "2561") { //Order Type Id
        if (gridData.length > 1) {
            //20230511 調整順序 for 越南生產地需求
            //gsenao113d004.value = gridData[0][1]; //料號
            gsenao113d004.value = gridData[0].senao113d004; //料號
            gsenao113d004_ORA.value = gridData[0].senao113d004; //[Oracle] Inventory Item Id
            //gsenao113d005.value = gridData[0][2]; //品名規格
            gsenao113d005.value = gridData[0].senao113d005; //品名規格
            //gsenao113d012_txt.value = gridData[0][5]; //交期
            gsenao113d012.value = gridData[0].senao113d012; //交期
            gsenao113d020.value = gridData[0].senao113d020; //ITEM STATUS
        } else if (gridData.length == 1) {
            if ($("#form_org").val() == "") {
                //alert('請先選擇【廠區】!!!');
                errArray.push("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
                return errArray.join('\n');
            }
            if (senao113m024.value != "") {
                gsenao113d005.value = queryOnlyOneProductSpec(senao113m024.value);
                gsenao113d005_onchange();
            }
        }
        gsenao113d021.readOnly = false; //工單單號
    }
    gsenao113d007.value = "PCS"; //單位
    gsenao113d009.value = senao113m018.value; //幣別
    gsenao113d006.value = "0"; //數量
    gsenao113d008.value = "0"; //單價
    gsenao113d010.value = "0"; //小計
    //20230509 Calvin 調整生產地
    $('#gsenao113d019_val option:contains(" ")').prop("selected", true);
    $('#gsenao113d019_val').trigger('change');
    gsenao113d026.value = senao113m016.value; //稅別
    gsenao113d027.value = senao113m023.value; //Customer PO
}




/**
 * 檢核數量欄位是否為大於0整數
 * @param {string} input
 * @return result true or false
 */
function checkIsQtyFieldLegal(input) {
    var re = /^(?!0(?:\.0*?)?$)([1-9]\d*|0)(\.\d{1,9})?$/;
    var result = true;
    if (input != "") {
        if (!re.test(input)) {
            result = false;
        }
    }
    return result;
}
/**
 * 計算小計(數量*單價)
 */
function calculateSubtotal() {
    if (gsenao113d006.value != "" && gsenao113d008.value != "") {
        gsenao113d010.value = Number(gsenao113d006.value) * Number(gsenao113d008.value);
    }
    
}

/**
 * 檢查是否為周末
 * @param {object} inputDate
 * @returns isWeekend false or true
 */
function checkIsWeekend(inputDate) {
    var isWeekend = false;
    if (typeof inputDate == "object") {
        if (inputDate.getDay() == 6 || inputDate.getDay() == 0) {
            isWeekend = true;
        }
    }
    return isWeekend;
}
/**
 * convert characters to ascii
 * @param {sting} char
 * @returns isLetter
 */
function isLetter(char) {
    var isLetter = false;
    var asciiCode = "";
    if (char != "") {
        asciiCode = char.charCodeAt(0);
        if (asciiCode >= 32 && asciiCode <= 126) {
            isLetter = true;
        }
    }
    return isLetter;
}
/**
 * 計算材料成本率，材料成本/單價
 */
function calculateItemCostRatio() {
    var itemCost = gsenao113d015.value;
    var unitPrice = gsenao113d008.value;
    if (itemCost != "" && unitPrice != "" && unitPrice != "0") {
        gsenao113d016.value = roundNumber(roundNumber((Number(itemCost) / Number(unitPrice)), 2) * 100, 2) + "%";
    } else {
        gsenao113d016.value = "0%";
    }
    //2015/01/13 MIS Mark PVT 材料沒有成本。
    if (gsenao113d017.value == "PVT") {
        gsenao113d015.value = "";
        gsenao113d016.value = "0%";
    }
}

/**
 * 四捨五入
 * @description 參考:https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary/12830454#12830454
 * @param {string} num  數字
 * @param {string} scale 至小數幾位數
 * @returns {number}
 */
function roundNumber(num, scale) {
    //if(!("" + num).includes("e")) {
    if (("" + num).indexOf("e") == -1) { //IE not support String.prototype.includes, instead of "indexOf"
        return + (Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = "";
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return + (Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
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
 * 顯示/隱藏信用額度資料
 * @param {boolean} display
 */
function displayCreditInfo(display) {
    var view = (display === true ? "block" : "none");
    // greenCheckImage.src = "../../images/green_check.gif";
    //  greenCheckImage.style.display = view;
    $('#lbl_senao113m027')[0].style.display = view;
    $('#senao113m027')[0].style.display = view;
    $('#lbl_senao113m028')[0].style.display = view;
    $('#senao113m028')[0].style.display = view;
    $('#lbl_totalIncludeTax')[0].style.display = view;
    $('#totalIncludeTax')[0].style.display = view;
    $('#lbl_overCredit')[0].style.display = view;
    $('#OverCredit')[0].style.display = view;
}
/**
 * 查詢&計算所有信用額度資訊項目 (授信額度、已使用信用額度、訂單總金額(含稅)、超過授信額度)
 * @param {string} customerId
 * @param {string} currency
 * @param {boolean} isCalcCreditAgain 重新取得授信金額
 */
function queryAllCreditItems(customerId, currency, isCalcCreditAgain) {
    var conversionRate = 1;
    if (customerId != "" && currency != "") {
        if (isCalcCreditAgain) {
            // console.time('queryTotalCreditLimit');
            senao113m027.value = queryTotalCreditLimit(customerId, currency);
           // console.timeEnd('queryTotalCreditLimit');
           // console.time('queryUsedCreditAmount');
            senao113m028.value = queryUsedCreditAmount(customerId, currency);
          //  console.timeEnd('queryUsedCreditAmount');
        }
        //console.time('queryConversionRate');
        conversionRate = queryConversionRate(currency, "USD", "1001", showCurrentDate());
        //console.timeEnd('queryConversionRate');
        totalIncludeTax.value = floatAdd(senao113m019.value, senao113m017.value) * conversionRate; //訂單總金額 + 稅 (轉換成美金)
        totalIncludeTax.value = Number(totalIncludeTax.value).toFixed(2); //四捨五入取小數N位
        //overCredit.value = calculateOverCredit(senao113m027.value, senao113m028.value, senao113m017.value, senao113m019.value);
        //  console.time('calculateOverCredit');
        overCredit.value = calculateOverCredit(senao113m027.value, senao113m028.value, totalIncludeTax.value);
      //   console.timeEnd('calculateOverCredit');
        hdn_OverCredit.value = overCredit.value;
       //    console.time('queryConversionRate');
        conversionRate = queryConversionRate(currency, "TWD", "1001", showCurrentDate());
      //  console.timeEnd('queryConversionRate');
        totalIncludeTax_TWD.value = (Number(totalIncludeTax.value) * Number(conversionRate)).toFixed(0); //轉成台幣
    }
}
/**
 * 搜尋某值是否在設定檔當中
 * @param {string} snsiId
 * @param {string} value
 * @returns result "Y" or "N"
 */
function isValueInSNSI003(snsiId, value) {
    var result = "N";
    if (value != "" && snsiId != "") {
        if (querySNSI003_Org(snsiId).search(value) > -1) {
            result = "Y";
        }
    }
    return result;
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
function pad(number) {
    let r = String(number);
    if (r.length == 1) {
        r = "0" + r;
    }
    return r;
}
/**
 * 檢查是否擁有權限可看到單價欄位，依下列判斷
 * (1)SalesRep群組參數 (2)可看訂單單價人員Group (3)業務關卡
 * @param {string} id 登入者
 * @param {string} actId 關卡
 * @returns isViewer true or false
 */
function checkIsUnitPriceViewer(id, actId) {
    var isViewer = false;
    if (actId == "UserTask_6" || //業務關卡
        checkIsGroupUser(id, "SN113_04") === "Y" || //可看訂單單價人員
        checkIsSalesRep(id)) {
        isViewer = true;
    }
    return isViewer;
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
/**
 * 更新Grid資料(生管異動交期、匯率、材料成本、材料成本率)
 */
function updateGridData() {
    var i;
    var currency = ""; //幣別
    var unitPrice = ""; //單價
    var exchangeRate = ""; //匯率
    var itemNo = ""; //料號
    var aItemNo = ""; //A料號(由Y料號置換)
    var inventoryItemId = "";
    var itemCost = ""; //材料成本
    var decimalDigits = "0"; //小數位數
    var gridData = getGridData(0);

    if (gridData.length > 0) {
        currency = senao113m022.value.substr(0, 3);
        if (senao113m022.value != "") { //匯率資料 ex:USD-Senao
            if (senao113m025.value == "User") {
                exchangeRate = senao113m020.value;
            } else {
                exchangeRate = queryConversionRate(currency, "TWD", "1001", systemDateTime);
            }
        }
        for (i = 0; i < gridData.length; i++) {
            //20230511 調整順序 for 越南生產地需求
            //生管異動交期
            //gridData[i][6] = "";
            gridData[i].senao113d018 = "";
            //匯率
            gridData[i].senao113d017 = exchangeRate;
            //材料成本
            //itemNo = gridData[i][1];
            itemNo = gridData[i].senao113d004;
            inventoryItemId = gridData[i].senao113d004_ORA;
            //unitPrice = gridData[i][4];
            unitPrice = gridData[i].senao113d008;
            itemCost = calculateItemCost(inventoryItemId, itemNo, currency, exchangeRate, unitPrice);
            gridData[i].senao113d015 = itemCost;
            //材料成本率
            if (itemCost != "" && unitPrice != "") {
                gridData[i].senao113d016 = roundNumber(roundNumber((Number(itemCost) / Number(unitPrice)), 2) * 100, 2) + "%";
            }
        }
    }
    setGridData(0, gridData);

}
/*
20220928 add by calvin 指定以下客戶代碼顯示提示
1.申請時客戶選取後
2.審核時開啟表單
 */
function isReminderCustomer(pCustomerId) {
    var rmdCustArray = ["5693", "5694", "7433"];
    /* var alertMsg = "資訊部提醒：\n"+
    "1.請確認您有權限登入此系統。\n"+
    "2.您正在登入的系統有包含客戶的機密資料，請謹慎使用並勿外流。\n"+
    "3.系統會記錄您登出入以及操作程式等相關資訊。\n"; */
    var alertMsg = querySNSI009(formId, "040", locale, "", "", "");
    for (var i = 0; i < rmdCustArray.length; i++) {
        if (pCustomerId.trim() == rmdCustArray[i]) {
            alert(alertMsg);
            break;
        }
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
 * 檢查下單A料號是否已有Y料號、取得匯率、計算材料成本、計算材料成本率、檢核Order Type對應說明
 */
function item_process() {
    var itemNo = gsenao113d004.value;
    var priceList = "";
    var currency = "";
    var yItemNo = ""; //Y料號(由A料號置換)
    var orderType = senao113m024.value;
    var itemInfo = {};
    var exchangeRate = "";
    var explanation = "";
    var unitPrice = "";
    var decimalDigits = "0"; //小數位數
    var itemCost = "";
    var inventoryItemId = "";
    //生產地 註解原因:生產地判斷邏輯不正確且未拋轉至Oracle，因此不處理
    // if (gsenao113d004.value.substr(4, 1) === "W") {
    // 	gsenao113d019.value = "MIC";
    // } else {
    // 	gsenao113d019.value = "MIT";
    // }
    //ITEM STATUS
    gsenao113d020.value = queryItemStatusCode(gsenao113d004.value);
    //下A料號時，檢查是否有Y料號，若有Y料號則提示是否要下Y料號/Phoebe.20110929
    itemNo = gsenao113d004.value;
    if (itemNo != "" && itemNo.substr(4, 1) == "A") {
        yItemNo = itemNo.replace("A", "Y");
        itemInfo = queryItemInfoByCode(yItemNo);
        if (!$.isEmptyObject(itemInfo)) {
            if (confirm("您現在下的是A料號，請確認是否要修改為Y料號(" + yItemNo + ")")) {
                gsenao113d004.value = ""; //料號
                gsenao113d005.value = ""; //品名規格
                gsenao113d015.value = ""; //材料成本
                gsenao113d016.value = ""; //材料成本率
            }
        }
    }
    //匯率
    priceList = senao113m022.value;
    if (priceList != "") {
        currency = priceList.substr(0, 3);
        if (senao113m025.value == "User") {
            exchangeRate = senao113m020.value;
        } else {
            exchangeRate = queryConversionRate(currency, "TWD", "1001", systemDateTime);
        }
    }
    gsenao113d017.value = exchangeRate;
    //材料成本
    inventoryItemId = gsenao113d004_ORA.value;
    unitPrice = gsenao113d008.value;
    itemCost = calculateItemCost(inventoryItemId, itemNo, currency, exchangeRate, unitPrice);
    if (itemCost != "" && itemCost != null) {
        gsenao113d015.value = fixNull(itemCost);
    } else {
        gsenao113d015.value = "";
        gsenao113d016.value = "";
    }
    //材料成本率
    calculateItemCostRatio();
    //20210604 Milla 恩睿 簡文彬 提出業務訂單申請單的單價要自動帶入Oracle業務報價資料
    if (form_ou.value == "enr" || form_ou.value == "stw") {
        if (senao113m004.value.indexOf("91000") < 0) { //排除網通事業部總經理室
            if (orderType.indexOf("代收付") <= 0) { //非代收付的訂單自動帶入單價
                gsenao113d008.value = GetUnitPrice(senao113m010_ORA.value, inventoryItemId, currency);
                if (form_ou.value == "enr") {
                    gsenao113d008.readOnly = true;
                }
            }
        }
    }
    //新增提醒字眼：若Order Typr為代收付-銷貨/Joyce.20170711
    explanation = gsenao113d011.value;
    if (orderType.substr(0, 3) == "代收付") {
        if ("W/O#".search(itemNo) > -1 && explanation == "") {
            //alert("[說明]欄位請填入工單或領料單!!");
            alert('['+itemNo+']'+querySNSI009(formId, "007", locale, "", "", ""));
            return false;
        } else if ("PVT".search(itemNo) > -1 && explanation == "") {
            //alert("[說明]欄位請填入領料單!!");
            alert('['+itemNo+']'+querySNSI009(formId, "009", locale, "", "", ""));
            return false;
        } else if ("Material".search(itemNo) > -1 && explanation == "") {
            //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
            //alert("[說明]欄位請填入簽呈!!");
            alert('['+itemNo+']'+querySNSI009(formId, "011", locale, "", "", ""));
            return false;
        } else if ("NRE".search(itemNo) > -1) {
            //alert("請確認訂單是否全額轉收入?");
            alert('['+itemNo+']'+querySNSI009(formId, "013", locale, "", "", ""));
            return false;
        } else if (explanation == "") {
            //alert("代收付時,請輸入[說明]!!");
            alert('['+itemNo+']'+querySNSI009(formId, "016", locale, "", "", ""));
            return false;
        }
    }
    return true;
}
/**
 * 依料號查詢INVENTORY_ITEM_STATUS_CODE
 * @param {string} itemNo
 * @returns itemStatusCode
 */
function queryItemStatusCode(itemNo) {
    var itemStatusCode = "";
    var sqlId = "BPM_ERP_SENAO113_17_Org";
    var tParams = [];
    var tDefaultAppendSQL = "";
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }
    if (itemNo != "") {
        tParams.push(itemNo);
        tParams.push(ORG_ID);
        let pData = ajaxGetData(invokeURL + sqlId, {
            segment1: tParams[0],
            organization_id: tParams[1]
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                itemStatusCode = pData[0].INVENTORY_ITEM_STATUS_CODE;
            }

        }
    }
    return itemStatusCode;
}

/**
 * 查詢客戶所有已使用信用額度 (已使用信用額度 + 未結案訂單的總訂單額度(含稅))
 * @description 未結案訂單一律轉換成USD計算
 * @param {string} customerId
 * @param {string} currency
 * @returns totalUsedCreditAmount
 */
function queryUsedCreditAmount(customerId, currency) {
    var totalUsedCreditAmount = 0;
    var usedCreditAmount = 0;
    var notFinishTotalOrderAmount = 0;
    var currencyArray = [];
    var conversionRate = 1; //兌換美金匯率
   //  console.time('querySENAO113_24');
        

    usedCreditAmount = Number(querySENAO113_24(customerId, currency));
    //        console.timeEnd('querySENAO113_24');
    // console.log("已使用信用額度 = " + usedCreditAmount);
    //查詢未結案訂單中的幣別，轉換成美金
    currencyArray = querySENAO113_26(customerId);
    if (currencyArray.length > 0) {
        for (var i = 0; i < currencyArray.length; i++) {
            notFinishTotalOrderAmount = Number(querySENAO113_25(customerId, currencyArray[i]));
            conversionRate = Number(queryConversionRate(currencyArray[i], "USD", "1001", systemDateTime)); //兌換成美金
            notFinishTotalOrderAmount = notFinishTotalOrderAmount * conversionRate;
            // console.log("未結案訂單(原幣別:" + currencyArray[i] + ",兌美金匯率:" + conversionRate + ")的總訂單額度(含稅) = " + notFinishTotalOrderAmount);
        }
    }

    totalUsedCreditAmount = usedCreditAmount + notFinishTotalOrderAmount;

    totalUsedCreditAmount = totalUsedCreditAmount.toFixed(2);



    return totalUsedCreditAmount;
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
    var r1,
        r2,
        m;
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
    return Math.round((arg1 * m + arg2 * m)) / m;
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
    var overCredit = 0;
    overCredit = Number(fixNull(creditLimit)) - Number(fixNull(usedCreditLimit)) - Number(fixNull(orderAmountWithTax));
    overCredit = (overCredit < 0 ? Math.abs(overCredit) : 0);
    return overCredit;
}
/**
 * 計算材料成本
 * @description -
 *  1. 若料號屬Y料號時，須以A料號計算成本
 *  2. 若幣別為美金，則不用計算，直接取得美金決裁價格 ; 其他幣別則由匯率換算裁料成本
 * @param {string} pInventoryItemId <gsenao113d004_ORA>
 * @param {string} itemNo <gsenao113d004>
 * @param {string} currency <senao113m022>
 * @param {string} exchangeRate <gsenao113d017>
 * @param {string} unitPrice <gsenao113d008>
 * @returns itemCost
 */
function calculateItemCost(pInventoryItemId, itemNo, currency, exchangeRate, unitPrice) {
    var itemCost = "";
    var aItemNo = "";
    var decimalDigits = "";
    var inventoryItemIdResult = "";
    var inventoryItemId = pInventoryItemId;
    if (inventoryItemId != "" && itemNo != "" && itemNo != undefined &&  currency != "" && exchangeRate != "") {
          //  console.log('item:',itemNo);
        if (itemNo.substr(4, 1) == "Y") { //Y料號計算成本時，須以A料號計算成本
            aItemNo = itemNo.replace("Y", "A");
            inventoryItemIdResult = queryInventoryItemId(aItemNo);
            if (inventoryItemIdResult != "") {
                inventoryItemId = inventoryItemIdResult;
            }
        }
        itemCost = queryItemCost(inventoryItemId, currency);
        if (itemCost != "") {
            /*
            2018/01/30 Milla 如果是用美金幣別下單，就改抓美金材料決裁價格
            呂副總及LAURA提出新增Cost Type for USD轉拋決裁價（美金）試算材料成本，
            目的為排除因匯率轉換造成的成本影響~
             */
            if (currency != "USD") { //非美金
                decimalDigits = queryDecimalDigits(unitPrice);
                decimalDigits = (decimalDigits === "0") ? "3" : decimalDigits;
                itemCost = roundNumber((Number(itemCost) / Number(exchangeRate)), decimalDigits);
            }
        }
    }
    if (itemCost == 0) {
        itemCost = 0
    }
    if (senao113m024.value.substr(0, 3) == "材料款") {
        itemCost = '';
    }
    return itemCost;
}

/**
 * 查詢材料成本(分為美金、非美金計價)
 * @param {string} inventoryItemId
 * @param {string} currency
 * @returns itemCost
 */
function queryItemCost(inventoryItemId, currency) {
    var itemCost = "";
    var sqlId = "";
    var tParams = [];
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }
    if (inventoryItemId != "" && currency != "") {
        if (currency === "USD") {
            sqlId = "BPM_ERP_SENAO113_22_Org";
        } else {
            sqlId = "BPM_ERP_SENAO113_28_Org"; //合併SENAO113_12及SENAO113_11
        }
        tParams.push(ORG_ID);
        tParams.push(inventoryItemId);
        let result = ajaxGetData(invokeURL + sqlId, {
            ORGANIZATION_ID: tParams[0],
            INVENTORY_ITEM_ID: tParams[1]
        });
        if (result[0].result == undefined) {
            if (result.length > 0) {
                itemCost = result[0].MATERIAL_COST;
            }

        }
    }
    return itemCost;
}
/**
 * 查詢數值小數位數
 * @param {string} input
 * @returns decimalDigits
 */
function queryDecimalDigits(input) {
  var decimalDigits = 0;
  var array = input.split(".");
  if (array.length == 2) {
    decimalDigits = array[1].length;
  }
  decimalDigits = (decimalDigits < 2) ? 2 : decimalDigits;
  return decimalDigits;
}
/**
 * 四捨五入
 * @description 參考:https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary/12830454#12830454
 * @param {string} num  數字
 * @param {string} scale 至小數幾位數
 * @returns {number}
 */
function roundNumber(num, scale) {
  //if(!("" + num).includes("e")) {
  if (("" + num).indexOf("e") == -1) { //IE not support String.prototype.includes, instead of "indexOf"
    return + (Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return + (Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

