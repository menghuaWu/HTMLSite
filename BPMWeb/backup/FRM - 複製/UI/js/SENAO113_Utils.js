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
  if (!display) {
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
  //let oracleOrderNo = getMsgInfo(invokeURL, formId, "002", locale);
  let oracleOrderNo = getMsgInfo(invokeURL, 'SENAO113', "002", locale);
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
      gsenao113d004.val(gridData[0][Grid1ColumnIds[2]]); //料號
      gsenao113d004_ORA.val(gridData[0][Grid1ColumnIds[22]]); //[Oracle] Inventory Item Id
      //gsenao113d005.value = gridData[0][2]; //品名規格
      gsenao113d005.val(gridData[0][Grid1ColumnIds[3]]); //品名規格
      //gsenao113d012_txt.value = gridData[0][5]; //交期
      gsenao113d012.val(gridData[0][Grid1ColumnIds[6]]); //交期
      gsenao113d020.val(gridData[0][Grid1ColumnIds[13]]); //ITEM STATUS
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
    overCredit.val(
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
  let conversionRate = "1";
 
  if (fromCurrency && toCurrency && conversionType && conversionDate) {
    let result = ajaxGetData(invokeURL + "BPM_ERP_OracleConversionRate", {
      FROM_CURRENCY: fromCurrency,
      TO_CURRENCY: toCurrency,
      CONVERSION_TYPE: conversionType,
      CONVERSION_DATE: conversionDate,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        conversionRate=result[0].CONVERSION_RATE; //SENAO113M018
      }
    }
  }
  return conversionRate;
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
    if (querySNSI003_Org(invokeURL, snsiId).search(value) > -1) {
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
/**
* 取得公司編號及廠區
* @
* @param {string} input
* @returns result
*/
function frmGetOU(ou, org) {
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
/**
* 單頭Tax Code
* senao113m016_onchange
*/
function senao113m016_onchange() {
  gsenao113d026.val(senao113m016.val()); //預帶單頭的稅別
  if (form_ou.val() == "senao" || form_ou.val() == "stw") {
    if (checkIsIncludeNoGoodsForm(senao113m004_ORA.val()) == "Y" && senao113m016.val().search("0%") > -1) { //代收付 且為0%稅率
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
 * 訂單總金額(未稅)-幣別欄位，資料異動時，若不是台幣則會讀取新的CONVERSION TYPE下拉選單
 */
function senao113m018_onchange() {
  let currency = senao113m018.val();
  let conversionTypeList = [];
  let i;
  let tOption = {};
  if (currency == "TWD" || currency == "") {
    senao113m020.val("1"); //Conversion Rate
    senao113m025.attr("disabled", true);  //Conversion Type
    senao113m025.val("");
  } else {
    senao113m025.val("");
    senao113m025.attr("disabled", false); //Conversion Type

    setSelectDefalut(  //參數傳"海關(A/P)"是因為訂單不取海關a/p的匯率type
      "senao113m025",
      invokeURL + "BPM_ERP_SENAO113_31",
      { USER_CONVERSION_TYPE: "海關(A/P)" },
      ""
    );

  }
}
/**
 * CONVERSION TYPE下拉選單，資料異動時更新CONVERSION RATE、CONVERSION DATE欄位
 */
function senao113m025_onchange() {
  let userConversionType = senao113m025.val();
  let conversionType = queryConversionType(userConversionType);
  let currency = senao113m018.val(); //訂單總金額(未稅)-幣別;
  let orderDate = senao113m008.val(); //Date Ordered
  let conversionRate = "";
  let $grid = $("#" + gridList[0].gid);
  let gridData = $grid.getGridParam("data");
  if (conversionType != "") {
    senao113m025_ORA.val(conversionType);
    if (conversionType == "User") {
      senao113m020.attr("readonly", false);
      senao113m020.css("background-color", EDIT_BGCOLOR);
      senao113m020.attr("disabled", false);
      senao113m026.style.backgroundColor = EDIT_BGCOLOR;
      senao113m026.css("background-color", EDIT_BGCOLOR);
      senao113m026_b1.attr("disabled", false);
    } else {
      senao113m020.val("");
      senao113m020.attr("readonly", true);
      senao113m020.css("background-color", DEFAULT_BGCOLOR);
      senao113m026.val("");
      senao113m026.css("background-color", DEFAULT_BGCOLOR);
      senao113m026.attr("disabled", true);
      senao113m026_b1.attr("disabled", true);
      conversionRate = queryConversionRate(currency, "TWD", conversionType, orderDate);
      if (conversionType == "1001") { //海關(A/P)
        senao113m020.val() = (conversionRate !== "") ? conversionRate : "";
      }

      if (gridData.length > 0) {
        for (i = 0; i < gridData.length; i++) {
          gridData[i][10] = conversionRate;
        }
      }
      $grid.trigger('reloadGrid');

    }
  } else {
    senao113m025.val("");
    senao113m025_ORA.val("");
    senao113m020.val("");
    senao113m020.attr("readonly", true);
    senao113m020.css("background-color", DEFAULT_BGCOLOR);
    senao113m026.val("");
    senao113m026.css("background-color", DEFAULT_BGCOLOR);
    senao113m026.attr("disabled", true);
    senao113m026_b1.attr("disabled", true);
  }

  if (currency == "TWD") {
    senao113m020.val("1");
    senao113m025.attr("disabled", true);
  }
}
/**
 * 查詢Conversion Type
 * @param {string} userConversionType
 * @returns conversionType
 */
function queryConversionType(userConversionType) {

  let conversionType = "";
  let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_07", {
    USER_CONVERSION_TYPE: userConversionType
  });
  if (result[0].result == undefined) {
    if (result.length > 0) {
      conversionType = result[0].CONVERSION_TYPE;
    }

  }
  return conversionType;
}

/**
 * 更新Grid資料(生管異動交期、匯率、材料成本、材料成本率)
 */
function updateGridData() {
  let i;
  let currency = ""; //幣別
  let unitPrice = ""; //單價
  let exchangeRate = ""; //匯率
  let itemNo = ""; //料號
  let aItemNo = ""; //A料號(由Y料號置換)
  let inventoryItemId = "";
  let itemCost = ""; //材料成本
  let decimalDigits = "0"; //小數位數
  let $grid = $("#" + gridList[0].gid);
  let gridData = $grid.getGridParam("data");
  if (gridData.length > 0) {
    currency = senao113m022.val().substr(0, 3);
    if (senao113m022.val() != "") { //匯率資料 ex:USD-Senao
      if (senao113m025.val() == "User") {
        exchangeRate = senao113m020.val();
      } else {
        exchangeRate = queryConversionRate(currency, "TWD", "1001", systemDateTime);
      }
    }
    for (i = 0; i < gridData.length; i++) {
      //20230511 調整順序 for 越南生產地需求
      //生管異動交期
      //gridData[i][6] = "";
      //gridData[i][7] = "";
      gridData[i][Grid1ColumnIds[7]] = "";
      //匯率
      //gridData[i][10] = exchangeRate;
      gridData[i][Grid1ColumnIds[10]]= exchangeRate;
      //材料成本
      //itemNo = gridData[i][1];
     // itemNo = gridData[i][2];
     itemNo=gridData[i][Grid1ColumnIds[2]];
     // inventoryItemId = gridData[i][22];
     inventoryItemId=gridData[i][Grid1ColumnIds[22]];
      //unitPrice = gridData[i][4];
      //unitPrice = gridData[i][5];
      unitPrice=gridData[i][Grid1ColumnIds[5]];
      itemCost = calculateItemCost(inventoryItemId, itemNo, currency, exchangeRate, unitPrice);
      //gridData[i][11] = itemCost;
      gridData[i][Grid1ColumnIds[11]]= itemCost;
      //材料成本率
      if (itemCost != "" && unitPrice != "") {
       // gridData[i][12] = roundNumber(roundNumber((Number(itemCost) / Number(unitPrice)), 2) * 100, 2) + "%";
       gridData[i][Grid1ColumnIds[12]] = roundNumber(roundNumber((Number(itemCost) / Number(unitPrice)), 2) * 100, 2) + "%";
      }
    }
  }
  $grid.trigger('reloadGrid');

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
  let itemCost = "";
  let aItemNo = "";
  let decimalDigits = "";
  let inventoryItemIdResult = "";
  let inventoryItemId = pInventoryItemId;
  if (inventoryItemId != "" && itemNo != "" && currency != "" && exchangeRate != "") {
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
  if (senao113m024.val().substr(0, 3) == "材料款") {
    itemCost = '';
  }
  return itemCost;
}
/**
 * 檢查下單A料號是否已有Y料號、取得匯率、計算材料成本、計算材料成本率、檢核Order Type對應說明
 */
function item_process() {
  let itemNo = gsenao113d004.val();
  let priceList = "";
  let currency = "";
  let yItemNo = ""; //Y料號(由A料號置換)
  let orderType = senao113m024.val();
  let itemInfo = {};
  let exchangeRate = "";
  let explanation = "";
  let unitPrice = "";
  let decimalDigits = "0"; //小數位數
  let itemCost = "";
  let inventoryItemId = "";
  //生產地 註解原因:生產地判斷邏輯不正確且未拋轉至Oracle，因此不處理
  // if (gsenao113d004.value.substr(4, 1) === "W") {
  // 	gsenao113d019.value = "MIC";
  // } else {
  // 	gsenao113d019.value = "MIT";
  // }
  //ITEM STATUS
  gsenao113d020.val(queryItemStatusCode(gsenao113d004.val()));
  //下A料號時，檢查是否有Y料號，若有Y料號則提示是否要下Y料號/Phoebe.20110929
  itemNo = gsenao113d004.val();
  if (itemNo != "" && itemNo.substr(4, 1) == "A") {
    yItemNo = itemNo.replace("A", "Y");
    itemInfo = queryItemInfoByCode(yItemNo);
    if (!$.isEmptyObject(itemInfo)) {
      if (confirm("您現在下的是A料號，請確認是否要修改為Y料號(" + yItemNo + ")")) {
        gsenao113d004.val(""); //料號
        gsenao113d005.val(""); //品名規格
        gsenao113d015.val(""); //材料成本
        gsenao113d016.val(""); //材料成本率
      }
    }
  }
  //匯率
  priceList = senao113m022.val();
  if (priceList != "") {
    currency = priceList.substr(0, 3);
    if (senao113m025.val() == "User") {
      exchangeRate = senao113m020.val();
    } else {
      exchangeRate = queryConversionRate(currency, "TWD", "1001", systemDateTime);
    }
  }
  gsenao113d017.val(exchangeRate);
  //材料成本
  inventoryItemId = gsenao113d004_ORA.val();
  unitPrice = gsenao113d008.val();
  itemCost = calculateItemCost(inventoryItemId, itemNo, currency, exchangeRate, unitPrice);
  if (itemCost != "" && itemCost != null) {
    gsenao113d015.val(fixNull(itemCost)) ;
  } else {
    gsenao113d015.val("");
    gsenao113d016.val("");
  }
  //材料成本率
  calculateItemCostRatio();
  //20210604 Milla 恩睿 簡文彬 提出業務訂單申請單的單價要自動帶入Oracle業務報價資料
  if (form_ou.val() == "enr" || form_ou.val() == "stw") {
    if (senao113m004.val().indexOf("91000") < 0) { //排除網通事業部總經理室
      if (orderType.indexOf("代收付") <= 0) { //非代收付的訂單自動帶入單價
        gsenao113d008.val( GetUnitPrice(senao113m010_ORA.val(), inventoryItemId, currency));
        if (form_ou.val() == "enr") {
          gsenao113d008.attr('readOnly', true);
        }
      }
    }
  }
  //新增提醒字眼：若Order Typr為代收付-銷貨/Joyce.20170711
  explanation = gsenao113d011.val();
  if (orderType.substr(0, 3) == "代收付") {
    if ("W/O#".search(itemNo) > -1 && explanation == "") {
      //alert("[說明]欄位請填入工單或領料單!!");
      alert(getMsgInfo(invokeURL, formId, "007", locale));
    } else if ("PVT".search(itemNo) > -1 && explanation == "") {
      //alert("[說明]欄位請填入領料單!!");
      alert(getMsgInfo(invokeURL, formId, "009", locale));
    } else if ("Material".search(itemNo) > -1 && explanation == "") {
      //20190618 Milla 資訊服務申請單#8467 會計怡儒請GIGI將代收付料號Idle Stock更名為Material
      //alert("[說明]欄位請填入簽呈!!");
      alert(getMsgInfo(invokeURL, formId, "011", locale));
    } else if ("NRE".search(itemNo) > -1) {
      //alert("請確認訂單是否全額轉收入?");
      alert(getMsgInfo(invokeURL, formId, "013", locale));
    } else if (explanation == "") {
      //alert("代收付時,請輸入[說明]!!");
      alert(getMsgInfo(invokeURL, formId, "016", locale));
    }
  }
}
/**
* 計算材料成本率，材料成本/單價
*/
function calculateItemCostRatio() {
  let itemCost = gsenao113d015.val();
  let unitPrice = gsenao113d008.val();
  if (itemCost != "" && unitPrice != "" && unitPrice != "0") {
    gsenao113d016.val(roundNumber(roundNumber((Number(itemCost) / Number(unitPrice)), 2) * 100, 2) + "%");
  } else {
    gsenao113d016.val("0%");
  }
  //2015/01/13 MIS Mark PVT 材料沒有成本。
  if (gsenao113d017.val()=="PVT") {
    gsenao113d015.val("");
    gsenao113d016.val("0%");
  }
}
/**
 * 依料號找INVENTORY_ITEM_ID(Y料號轉A料號用)
 * @param {string} itemNo
 * @returns inverntoryItemId
 */
function queryInventoryItemId(itemNo) {

  let inverntoryItemId = "";
  if (form_org.val() == "") {
    //alert('請先選擇【廠區】!!!');
    alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale));
    return false;
  }
  let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_17_Org", {
    segment1: itemNo,
    organization_id: ORG_ID
  });

  if (result[0].result == undefined) {
    if (result.length > 0) {
      inverntoryItemId = result[0].INVENTORY_ITEM_ID;
    }

  }
  return inverntoryItemId;
}
/**
 * 查詢材料成本(分為美金、非美金計價)
 * @param {string} inventoryItemId
 * @param {string} currency
 * @returns itemCost
 */
function queryItemCost(inventoryItemId, currency) {
  let itemCost = "";
  let apiId = ""
  if (form_org.val() == "") {
    //alert('請先選擇【廠區】!!!');
    alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale));
    return false;
  }

  if (inventoryItemId != "" && currency != "") {
    if (currency === "USD") {
      apiId = "BPM_ERP_SENAO113_22_Org";
    } else {
      apiId = "BPM_ERP_SENAO113_28_Org"; //合併SENAO113_12及SENAO113_11
    }

    let result = ajaxGetData(invokeURL + apiId, {
      INVENTORY_ITEM_ID: inventoryItemId,
      ORGANIZATION_ID: ORG_ID
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
/*
20220928 add by calvin 指定以下客戶代碼顯示提示
1.申請時客戶選取後
2.審核時開啟表單
 */
function isReminderCustomer(pCustomerId) {
  let rmdCustArray = ["5693", "5694", "7433"];
  /* var alertMsg = "資訊部提醒：\n"+
  "1.請確認您有權限登入此系統。\n"+
  "2.您正在登入的系統有包含客戶的機密資料，請謹慎使用並勿外流。\n"+
  "3.系統會記錄您登出入以及操作程式等相關資訊。\n"; */
  let alertMsg = getMsgInfo(invokeURL, formId, "040", locale);
  for (let i = 0; i < rmdCustArray.length; i++) {
    if (pCustomerId.trim() == rmdCustArray[i]) {
      alert(alertMsg);
      break;
    }
  }
}

function senao113m010_reset() {
  senao113m010.val(""); //客戶代號
  senao113m010_ORA.val("");
  senao113m010_ORA2.val("");
  senao113m010_ORA3.val("");
  senao113m010_t1.val("");
  senao113m014_ORA.val("");
  senao113m014.val("");
  senao113m015.val("");
  senao113m018.val("");
  senao113m022.val("");
  senao113m022_ORA.val("");
  // senao113m016_0.checked = false;
  // senao113m016_1.checked = false;
  senao113m016.val("");
}
/**
 * 查詢Price相關資訊
 * @param {string} priceName
 * @returns priceInfo Price相關資料物件
 */
function queryPriceInfo(priceName) {
  let priceInfo = {};
  let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_30", {
    NAME: priceName,
    LIST_HEADER_ID: null
  });
  if (result[0].result == undefined) {
    if (result.length > 0) {

      priceInfo.listHeaderId = result[0].LIST_HEADER_ID; //LIST_HEADER_ID
      priceInfo.name = result[0].NAME; //NAME
      priceInfo.currencyCode = result[0].CURRENCY_CODE; //CURRENCY_CODE
    }

  }
  return priceInfo;
}
/**
 * 料號相關欄位 reset
 */
function gsenao113d004_reset() {
  gsenao113d004.val(""); //料號CODE
  gsenao113d004_ORA.val(""); //Inventory Item Id
  gsenao113d005.val(""); //品名規格
  gsenao113d020.val(""); //Item Status
}

/**
 * 依料號查詢INVENTORY_ITEM_STATUS_CODE
 * @param {string} itemNo
 * @returns itemStatusCode
 */
function queryItemStatusCode(itemNo) {
  let itemStatusCode = "";
  if (form_org.val() == "") {
    //alert('請先選擇【廠區】!!!');
    alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale));
    return false;
  }
  if (itemNo != "") {

    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_17_Org", {
      segment1: itemNo,
      organization_id: ORG_ID
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        itemStatusCode = result[0].INVENTORY_ITEM_STATUS_CODE;
      }

    }
  }
  return itemStatusCode;
}
//依料號第5碼自動帶入生產地
function queryItemSite(itemNo) {
  let defaultSite = {};
  if (itemNo != "") {

    let result = ajaxGetData(invokeURL + "BPM_SENAO113_51", {
      BAS_COMPANY: form_ou.val(), //公司別
      BAS_LANG: locale, //語系,zh_TW
      BAS_UD001: itemNo.substr(4, 1) //料號第5碼
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        defaultSite.BAS_CODE = result[0].BAS_OPT_CODE; //BAS_CODE
        defaultSite.BAS_NAME = result[0].BAS_OPT_NAME; //BAS_NAME
      }

    }
  }
  return defaultSite;
}
/**
 * 依料號查詢料號相關資訊
 * @param {string} itemNo
 * @returns itemInfo 料號相關資料物件 (
 * 		1.productSpec 2.orderEnabledFlag 3.inventoryItemId	)
 */
function queryItemInfoByCode(itemNo) {
  let itemInfo = {};

  if (form_org.val() == "") {
    //alert('請先選擇【廠區】!!!');
    alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, form_ou.val().toUpperCase(), "003", locale));
    return false;
  }
  if (itemNo != "") {

    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_03_Org", {
      segment1: itemNo,
      organization_id: ORG_ID
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        itemInfo.productSpec = result[0].DESCRIPTION; //DESCRIPTION
        itemInfo.orderEnabledFlag = result[0].CUSTOMER_ORDER_ENABLED_FLAG; //CUSTOMER_ORDER_ENABLED_FLAG
        itemInfo.inventoryItemId = result[0].INVENTORY_ITEM_ID;//INVENTORY_ITEM_ID
      }

    }
  }


  return itemInfo;
}
/**
 *  抓Oracle業務報價資料的單價
 */
function GetUnitPrice(customer_id, inventory_item_id, currency) {
  let UnitPrice = "0";
  let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_48", {
    org_id: OU_ID,
    customer_id: customer_id,
    item_id: inventory_item_id,
    currency: currency
  });
  if (result[0].result == undefined) {
    if (result.length > 0) {
      UnitPrice = result[0].PRICE; //PRICE
    }

  }
  return UnitPrice;
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
  let itemCost = "";
  let aItemNo = "";
  let decimalDigits = "";
  let inventoryItemIdResult = "";
  let inventoryItemId = pInventoryItemId;
  if (inventoryItemId != "" && itemNo != "" && currency != "" && exchangeRate != "") {
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
  if (senao113m024.val().substr(0, 3) == "材料款") {
    itemCost = '';
  }
  return itemCost;
}

/**
 * 計算總金額(未稅)及稅額，加總GRID內所有小計欄位，並四捨五入取至小數兩位
 * 20200814 Milla 將計算稅額的部份移至單身計算
 */
function calculateTotalAmount_TotalTax() {
  let totalAmount = 0;
  let totalAmount_orig = 0;//20230914 Calvin 原幣(TWD)
  let totalTax = 0;
  let totalAmount_needtax = 0;
  let taxRate = 0;
  let $grid = $("#" + gridList[0].gid);
  let gridData = $grid.getGridParam("data");
  for (i = 0; i < gridData.length; i++) {
    
    totalAmount += Number(gridData[i][Grid1ColumnIds[19]]); //gsenao113d010 小計
    //console.log(Grid1ColumnIds[23],gridData[i][Grid1ColumnIds[23]])
    if (gridData[i][Grid1ColumnIds[23]].search("5%") > -1) {
      totalAmount_needtax += Number(gridData[i][Grid1ColumnIds[19]]); //gsenao113d010 小計
    }
    totalAmount_orig += Number(gridData[i][Grid1ColumnIds[4]]) * Number(gridData[i][Grid1ColumnIds[5]]) * Number(gridData[i][Grid1ColumnIds[10]]);//20230914 Calvin 原幣(TWD)=數量*單價*匯率
  }
  if (totalAmount_needtax > 0) {
    taxRate = 0.05;
    totalTax = roundNumber((Number(totalAmount_needtax) * taxRate), 2);
  }
  totalAmount = roundNumber(totalAmount, 2);
  senao113m019.val( totalAmount);
  senao113m017.val(totalTax);
  senao113m021.val(roundNumber(totalAmount_orig, 0));//20230914 Calvin 寫入隱藏欄位，訂單總金額(未稅)-折合台幣
}
/**
 * 查詢客戶相關資料 payment term、trade term
 * @param {string} customerId
 * @returns customerInfo 客戶相關資料物件 (
 *      1.customerId 2.customerName 3.currencyCode 4.taxCode 5.paymentTermId
 *      6.paymentTerm 7.fobPoint 8.priceListId 9.priceList 10.attribute13
 *      11.attribute14 12.status 13.orderType )
 */
function queryCustomerRelatedInfo(customerId) {
  let customerInfo = {};

  if (customerId != "") {
    let result = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_05_Org", {
      OU_ID: OU_ID,
      CUSTOMER_NUMBER: customerId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        customerInfo.customerId = fixNull(result[0].CUSTOMER_ID);
        customerInfo.customerName = fixNull(result[0].CUSTOMER_NAME);
        customerInfo.currencyCode = fixNull(result[0].CURRENCY_CODE);
        customerInfo.taxCode = fixNull(result[0].TAX_CODE);
        customerInfo.paymentTermId = fixNull(result[0].PAYMENT_TERM_ID);
        customerInfo.paymentTerm = fixNull(result[0].PAYMENT_TERM);
        customerInfo.fobPoint = fixNull(result[0].FOB_POINT);
        customerInfo.priceListId = fixNull(result[0].PRICE_LIST_ID);
        customerInfo.priceList = fixNull(result[0].PRICE_LIST);
        customerInfo.attribute13 = fixNull(result[0].ATTRIBUTE13);
        customerInfo.attribute14 = fixNull(result[0].ATTRIBUTE14);
        customerInfo.status = fixNull(result[0].STATUS);
        customerInfo.orderType = fixNull(result[0].ORDER_TYPE);
      }
    }

  }
  return customerInfo;
}

function gridClearBinding() {
  for (let i = 0; i < Grid1Binding.lengtrh; i++) {
    let value = $('#' + Grid1Binding[i]).val();
    if (value != undefined)
      data[Grid1ColumnIds[i]] = "";
  }
}