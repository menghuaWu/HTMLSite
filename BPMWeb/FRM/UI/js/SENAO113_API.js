/**
 * 查詢Conversion Type
 * @param {string} userConversionType
 * @returns conversionType
 */
function queryConversionType(userConversionType) {
    var conversionType = "";
    var sqlId = "BPM_ERP_SENAO113_07";
    var tParams = [];
    if (userConversionType != "") {
        tParams.push(userConversionType);
        let result = ajaxGetData(apiInvoke + sqlId, { USER_CONVERSION_TYPE: tParams[0] });
        if (result[0].result == undefined) {
            if (result.length > 0) {
                conversionType = result[0].CONVERSION_TYPE;
            }
        }

    }
    return conversionType;
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
    var sqlId = "BPM_ERP_OracleConversionRate";
    var params = [];
    var data = [];
    if (fromCurrency && toCurrency && conversionType && conversionDate) {
        params.push(fromCurrency);
        params.push(toCurrency);
        params.push(conversionType);
        params.push(conversionDate);
        data = ajaxGetData(invokeURL + sqlId, {
            FROM_CURRENCY: params[0],
            TO_CURRENCY: params[1],
            CONVERSION_TYPE: params[2],
            CONVERSION_DATE: params[3],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                conversionRate = data[0].CONVERSION_RATE; //CONVERSION_RATE
            }
        }
    }
    return conversionRate;
}
/**
 * 查詢Conversion Type清單
 * @param {string} excludeConversionType 排除類型
 * @returns conversionTypeList
 */
function queryConversionTypeList(excludeConversionType) {
    var conversionTypeList = [];
    var sqlId = "BPM_ERP_SENAO113_31";
    var tParams = [];
    var i;
    if (excludeConversionType != "") {
        tParams.push(excludeConversionType);
        let pData = ajaxGetData(invokeURL + sqlId, {
            USER_CONVERSION_TYPE: tParams[0],

        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                for (i = 0; i < pData.length; i++) {
                    conversionTypeList.push(pData[i].TEXT); //USER_CONVERSION_TYPE
                }
            }
        }
    }
    return conversionTypeList;
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
 * 查詢Order Type Id
 * @param {string} typeName
 * @returns orderTypeId
 */
function queryOrderTypeId(typeName) {
    var orderTypeId = "";
    var sqlId = "SENAO113_20_Org";
    var params = [];
    var appendSQL = "";
    var data = [];
    if (typeName != "") {
        params.push(typeName);
        data = callAjaxGetOracleData(sqlId, params, appendSQL, OU_ID);
        if (data.length > 0) {
            orderTypeId = data[0][0]; //TRANSACTION_TYPE_ID
        }
    }
    return orderTypeId;
}
/**
 * 以Group ID查Group內員工資料
 * @param {string} groupId
 * @returns userInfoArray 員工相關資料陣列
 */
function queryStdGroupById(groupId) {
    var userInfoArray = [];
    var userInfo = {};
    var sqlId = "BPM_getGroupUserIDbyOrg";
    var tParams = [];
    var tTypes = [];
    if (groupId != "") {
        tParams.push(groupId);
        tParams.push($("#form_ou").val());
        let result = ajaxGetData(invokeURL + sqlId, {
            GID: tParams[0],
            CID: tParams[1],
        });
        if (result[0].result == undefined) {
            for (let i = 0; i < result.length; i++) {
                userInfo = {};
                userInfo.userId = result[i].USERID; //員工ID
                userInfo.userName = result[i].USERNAME; //員工名稱
                userInfoArray.push(userInfo);
            }
        }
    }
    return userInfoArray;
}
/**
 * 讀取特定欄位資料 (isInUpdateERPActivity)
 * @param {string} oid
 */
function loadData(oid) {
    var sqlId = "BPM_SENAO113_42";
    var tParams = [];
    var data = [];
    tParams.push(oid); //表單OID
    data = ajaxGetData(invokeURL + sqlId, {
        oid: tParams[0],

    });
    if (data[0].result == undefined) {
        if (data.length > 0) {
            isInUpdateERPActivity.value = data[0].isInUpdateERPActivity;
        }
    }

}
/**
 * 查詢是否含有申請無實物的表單
 * @param {string} orderTypeId
 * @returns result "Y" or "N"
 */
function checkIsIncludeNoGoodsForm(orderTypeId) {
    var result = "N";
    var sqlId = "BPM_ERP_SENAO113_21";
    var tParams = [];
    if (orderTypeId != "") {
        tParams.push(orderTypeId);
        let pData = ajaxGetData(invokeURL + sqlId, {
            order_type_id: tParams[0],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                result = "Y";
            }

        }
    }
    return result;
}

/**
 * 查詢是否屬於RA_SALESREPS群組
 */
function checkIsSalesRep(id) {
    var isSalesRep = false;
    var sqlId = "BPM_ERP_SENAO113_41_Org";
    var params = [];
    if (id != "") {
        params.push(id);
        let result = ajaxGetData(invokeURL + sqlId, {
            p: params[0],
        });
        if (result[0].result == undefined) {
            if (result.length > 0) {
                isSalesRep = true;
            }
        }
    }
    return isSalesRep;
}
/**
 * 以工號查詢銷售代表ID
 * @param {string} userId
 * @returns salesRepId
 */
function querySalesRepId(userId) {
    var salesRepId = "";
    var sqlId = "BPM_ERP_SALESREP_Org2";
    var tParams = [];
    if (userId != "") {
        tParams.push(OU_ID);
        tParams.push(ORG_ID);
        tParams.push(userId);
        tParams.push('ALL');
        let pData = ajaxGetData(invokeURL + sqlId, {
            OU_ID: tParams[0],
            ORG_ID: tParams[1],
            SALESREP_NUMBER: tParams[2],
            LAST_NAME: tParams[3]
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                salesRepId = pData[0].SALESREP_ID; //SALESREP_ID
            } else {
                salesRepId = "-1";
            }
        }
    }
    return salesRepId;
}
/**
 * 查詢Oracle Order No
 * @param {string} formSerialNumber  單號+O(大寫英文O => 訂單、R => 銷退單)
 * @returns oracleOrderNo
 */
function queryOracleOrderNo(formSerialNumber) {
    //var oracleOrderNo = "表單簽核後由ORACLE傳回";
    var oracleOrderNo = querySNSI009(formId, "002", locale, "", "", "").replace("(SENAO113002)", "");
    var sqlId = "BPM_ERP_SENAO113_38";
    var params = [];
    var data = [];
    if (formSerialNumber != "") {
        params.push(formSerialNumber + "O");
        data = ajaxGetData(invokeURL + sqlId, {
            p: params[0],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                oracleOrderNo = data[0].ORDER_NUMBER; //ORDER_NUMBER
            }
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
    var oracleHeaderId = "";
    var sqlId = "BPM_ERP_SENAO113_37";
    var params = [];
    var data = [];
    if (formSerialNumber != "") {
        params.push(formSerialNumber + "O");
        data = ajaxGetData(invokeURL + sqlId, {
            p: params[0],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                oracleHeaderId = data[0].HEADER_ID; //HEADER_ID
            }
        }
    }
    return oracleHeaderId;
}
//依料號第5碼自動帶入生產地
function queryItemSite(itemNo) {
    var defaultSite = {};
    var sqlid = "BPM_SENAO113_51";
    var tParams = new Array();
    tParams.push(form_ou.value);//公司別
    tParams.push(locale);//語系,zh_TW
    tParams.push(itemNo.substr(4, 1));//料號第5碼
    if (itemNo != "") {

        let pData = ajaxGetData(invokeURL + sqlid, {
            BAS_COMPANY: tParams[0], //公司別
            BAS_LANG: tParams[1], //語系,zh_TW
            BAS_UD001: tParams[2] //料號第5碼
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                defaultSite.BAS_CODE = pData[0].BAS_OPT_CODE; //BAS_CODE
                defaultSite.BAS_NAME = pData[0].BAS_OPT_NAME; //BAS_NAME
            }

        }
    }
    return defaultSite;
}
/**20200820 Milla
 * 取OrderType是否不需卡控Credit和材料成本率
 * @param {string} OrderTypeID
 */
function querySENAO113_45(OrderTypeID) {
    var sqlId = "BPM_ERP_SENAO113_45";
    var tParams = [];
    var retrueValue = false;
    if (OrderTypeID != "") {
        tParams.push(OrderTypeID);
        let pData = ajaxGetData(invokeURL + sqlId, {
            TRANSACTION_TYPE_ID: tParams[0],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                retrueValue = true;
            }
        }
    }
    return retrueValue;
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
    var customerInfo = {};
    var sqlId = "BPM_ERP_SENAO113_05_Org";
    var tParams = [];

    if (customerId != "") {
        tParams.push(OU_ID);
        tParams.push(customerId);
        let pData = ajaxGetData(invokeURL + sqlId, {
            OU_ID: tParams[0],
            CUSTOMER_NUMBER: tParams[1],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                customerInfo.customerId = fixNull(pData[0].CUSTOMER_ID);
                customerInfo.customerName = fixNull(pData[0].CUSTOMER_NAME);
                customerInfo.currencyCode = fixNull(pData[0].CURRENCY_CODE);
                customerInfo.taxCode = fixNull(pData[0].TAX_CODE);
                customerInfo.paymentTermId = fixNull(pData[0].PAYMENT_TERM_ID);
                customerInfo.paymentTerm = fixNull(pData[0].PAYMENT_TERM);
                customerInfo.fobPoint = fixNull(pData[0].FOB_POINT);
                customerInfo.priceListId = fixNull(pData[0].PRICE_LIST_ID);
                customerInfo.priceList = fixNull(pData[0].PRICE_LIST);
                customerInfo.attribute13 = fixNull(pData[0].ATTRIBUTE13);
                customerInfo.attribute14 = fixNull(pData[0].ATTRIBUTE14);
                customerInfo.status = fixNull(pData[0].STATUS);
                customerInfo.orderType = fixNull(pData[0].ORDER_TYPE);
            }
        }

    }
    return customerInfo;
}
/**
 * 查詢客戶在Oracel系統設定的信用額度
 * @param {string} customerId
 * @param {string} currency
 * @returns creditLimit
 */
function queryCreditLimit(customerId, currency) {
    var creditLimit = 0;
    var sqlId = "BPM_ERP_SENAO113_23_Org";
    var tParams = [];
    var tDefaultAppendSQL = "";
    if (customerId !== "" && currency != "") {
        tParams.push(currency);
        tParams.push(OU_ID);
        tParams.push(customerId);
        let pData = ajaxGetData(invokeURL + "BPM_ERP_SENAO113_23_Org", {
            currency: tParams[0],
            OU_ID: tParams[1],
            customerId: tParams[2],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                creditLimit = Number(fixNull(pData[0].CREDIT_LIMIT)); //CREDIT_LIMIT
            }
        };

    }
    return creditLimit;
}
/**
 * 查詢Price相關資訊
 * @param {string} priceName
 * @returns priceInfo Price相關資料物件
 */
function queryPriceInfo(priceName) {
    var priceInfo = {listHeaderId:'',name:'',currencyCode:''};
    var sqlId = "BPM_ERP_SENAO113_30";
    var tParams = [];
    if (priceName != "") {
        tParams.push(priceName);
        let pData = ajaxGetData(apiInvoke + sqlId, {
            NAME: tParams[0],
            LIST_HEADER_ID: null
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                priceInfo.listHeaderId = pData[0].LIST_HEADER_ID; //LIST_HEADER_ID
                priceInfo.name = pData[0].NAME; //NAME
                priceInfo.currencyCode = pData[0].CURRENCY_CODE; //CURRENCY_CODE
            }
        };
    }
    return priceInfo;
}
function querySENAO113_24(customerId, currency) {
    var creditAmount = 0;
    var sqlId = "BPM_ERP_SENAO113_24_Org";
    var tParams = [];
    if (customerId != "" && currency != "") {
        tParams.push(currency);
        tParams.push(OU_ID);
        tParams.push(customerId);
        //20240913-----------------------------------------------------
        var starttime1 = new Date().getTime();   //20240913 -------------------------------------------------------------------
        var time1 = new Date().getTime();   //20240913 -------------------------------------------------------------------
        let pData = ajaxGetData(invokeURL + sqlId, {
            currency: tParams[0],
            OU_ID: tParams[1],
            customerId: tParams[2],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                creditAmount = Number(fixNull(pData[0].CREDIT_AMOUNT)); //CREDIT_AMOUNT
            }
        }
        var time2 = new Date().getTime();   //20240913 -------------------------------------------------------------------
        var time3 = new Date().getTime();   //20240913 -------------------------------------------------------------------

        // var tmpmsg = ""; //20240913 -------------------------------------------------------------------  
        // tmpmsg = tParams.toString()+"\n" ; //20240913 -------------------------------------------------------------------
        // tmpmsg = tmpmsg + "執行time1 - starttime1資料時間差:" + (time1 - starttime1) / 1000 + "sec \n"; //20240913 -------------------------------------------------------------------
        // tmpmsg = tmpmsg + "執行time2 - time1資料時間差:" + (time2 - time1) / 1000 + "sec \n"; //20240913 -------------------------------------------------------------------
        // tmpmsg = tmpmsg + "執行time3 - time2資料時間差:" + (time3 - time2) / 1000 + "sec \n"; //20240913 -------------------------------------------------------------------
        // tmpmsg = tmpmsg + "資料時間差:" + (time3 - starttime1) / 1000 + "sec \n"; //20240913 -------------------------------------------------------------------
        // alert(tmpmsg); //20240913 -------------------------------------------------------------------  
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
    var sqlId = "BPM_SENAO113_26";
    var tParams = [];
    if (customerId) {
        tParams.push(customerId);
        let pData = ajaxGetData(invokeURL + sqlId, {
            SENAO113M010_ORA: tParams[0],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                currencyArray.push(pData[0].SENAO113M018); //SENAO113M018
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
    var notFinishOrderAmount = 0;
    var sqlId = "BPM_SENAO113_25";
    var tParams = [];
    var tTypes = [];
    if (customerId != "" && currency != "") {
        tParams.push(customerId);
        tParams.push(currency);
        let pData = ajaxGetData(invokeURL + sqlId, {
            senao113m010_ORA: tParams[0],
            senao113m018: tParams[1],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                var i;
                for (i = 0; i < pData.length; i++) {
                    notFinishOrderAmount += (Number(fixNull(pData[i].Tax)) +
                        Number(fixNull(pData[i].Amount))); //稅 + 小計
                }
            }
        }

    }
    return notFinishOrderAmount;
}
/**
 * 依料號查詢料號相關資訊
 * @param {string} itemNo
 * @returns itemInfo 料號相關資料物件 (
 * 		1.productSpec 2.orderEnabledFlag 3.inventoryItemId	)
 */
function queryItemInfoByCode(itemNo) {
    var itemInfo = {};
    var sqlId = "BPM_ERP_SENAO113_03_Org";
    var tParams = [];
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
                itemInfo.productSpec = pData[0].DESCRIPTION; //DESCRIPTION
                itemInfo.orderEnabledFlag = pData[0].CUSTOMER_ORDER_ENABLED_FLAG; //CUSTOMER_ORDER_ENABLED_FLAG
                itemInfo.inventoryItemId = pData[0].INVENTORY_ITEM_ID;//INVENTORY_ITEM_ID
            }

        }

    }
    return itemInfo;
}
/**
 * 依料號查詢料號相關資訊(匯入相關) 
 * @param {string} itemNo
 * @returns itemInfo 料號相關資料物件 (
 * 		1.segment1,2.description, inventory_item_status_code, INVENTORY_ITEM_ID, CUSTOMER_ORDER_ENABLED_FLAG, item_type 	)
 */
function queryItemInfoByCodeInput(itemNo) {
    var itemInfo = {};
    var sqlId = "BPM_ERP_SENAO113_ITEM_01_Org";
    var tParams = [];
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }
    if (itemNo != "") {
        tParams.push(itemNo);
        tParams.push(ORG_ID);
        let pData = ajaxGetData(invokeURL + sqlId, {
            SEGMENT1: tParams[0],
            organization_id: tParams[1],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                itemInfo.itemNo=pData[0].SEGMENT1; //SEGMENT1
                itemInfo.productSpec = pData[0].DESCRIPTION; //DESCRIPTION
                itemInfo.inventory_item_status_code= pData[0].INVENTORY_ITEM_STATUS_CODE; //INVENTORY_ITEM_STATUS_CODE
                itemInfo.orderEnabledFlag = pData[0].CUSTOMER_ORDER_ENABLED_FLAG; //CUSTOMER_ORDER_ENABLED_FLAG
                itemInfo.inventoryItemId = pData[0].INVENTORY_ITEM_ID;//INVENTORY_ITEM_ID
                 itemInfo.item_type = pData[0].ITEM_TYPE;//INVENTORY_ITEM_ID
            }

        }

    }
    return itemInfo;
}
/**
 * 依品名規格查詢料號相關資訊
 * @param {string} productSpec
 * @returns itemInfo 料號相關資料物件 (
 *  	1.itemNo 2.orderEnabledFlag 3.inventoryItemId
 * 		4.inventoryItemStatusCode )
 */
function queryItemInfoByName(productSpec) {
    var itemInfo = {};
    var sqlId = "BPM_ERP_SENAO113_02_Org";
    var tParams = [];
    var tDefaultAppendSQL = "";
    if ($("#form_org").val() == "") {
        //alert('請先選擇【廠區】!!!');
        alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", ""));
        return false;
    }
    if (productSpec != "") {
        tParams.push(ORG_ID);
        tParams.push(productSpec);
        let pData = ajaxGetData(invokeURL + sqlId, {
            ORG_ID: tParams[0],
            productSpec: tParams[1]
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                itemInfo.itemNo = pData[0].SEGMENT1; //SEGMENT1
                itemInfo.orderEnabledFlag = pData[0].CUSTOMER_ORDER_ENABLED_FLAG; //CUSTOMER_ORDER_ENABLED_FLAG
                itemInfo.inventoryItemId = pData[0].INVENTORY_ITEM_ID; //INVENTORY_ITEM_ID
                itemInfo.inventoryItemStatusCode = pData[0].INVENTORY_ITEM_STATUS_CODE; //INVENTORY_ITEM_STATUS_CODE
            }

        }

    }
    return itemInfo;
}
/**
 *  抓Oracle業務報價資料的單價
 */
function GetUnitPrice(customer_id, inventory_item_id, currency) {
    var UnitPrice = "0";
    var sqlId = "BPM_ERP_SENAO113_48";
    var params = [];
    var data = [];
    params.push(OU_ID);
    params.push(customer_id);
    params.push(inventory_item_id);
    params.push(currency);
    data = ajaxGetData(invokeURL + sqlId, {
        org_id: params[0],
        customer_id: params[1],
        item_id: params[2],
        currency: params[3]
    });
    if (data[0].result == undefined) {
        if (data.length > 0) {
            UnitPrice = data[0].PRICE;
        }
    }
    return UnitPrice;
}
/**
 * 依料號找INVENTORY_ITEM_ID(Y料號轉A料號用)
 * @param {string} itemNo
 * @returns inverntoryItemId
 */
function queryInventoryItemId(itemNo) {
    var inverntoryItemId = "";
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
        pData = ajaxGetData(invokeURL + sqlId, {
            segment1: tParams[0],
            organization_id: tParams[1],
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                inverntoryItemId = pData[0].INVENTORY_ITEM_ID; //INVENTORY_ITEM_ID
            }
        }
    }
    return inverntoryItemId;
}
/**
 * 依order type找order type id
 * @param {string} OrderType
 * @returns OrderTypeId
 */
function queryOrderTypeId(OrderType) {
    var OrderTypeId = "";
    var sqlId = "BPM_ERP_SENAO113_32";
    var tParams = [];

    if (OrderType != "") {
        tParams.push(OU_ID);
        tParams.push(OrderType);
        pData = ajaxGetData(invokeURL + sqlId, {
            OU_ID: tParams[0],
            NAME: tParams[1],
            TRANSACTION_TYPE_ID:null
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                OrderTypeId = pData[0].TRANSACTION_TYPE_ID; //TRANSACTION_TYPE_ID
            }
        }
    }
    return OrderTypeId;
}