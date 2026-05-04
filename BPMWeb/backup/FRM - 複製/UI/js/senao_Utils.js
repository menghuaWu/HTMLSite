/*==============================================================================
[檔案名稱]senao_Utils.js
[撰 寫 人]JC
[修改紀錄]
[MMo]2025/04/20 By Senao-JC 調整程式架構與說明
==============================================================================*/
/*------------------------------------------------------------------------------
[Function Name]setSelectDefalut
[Function Descript]設定select element Lisst 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
[Parameter] id:元件名稱,api:Web APi name,pData:api參數,defaultValue:預設值
------------------------------------------------------------------------------*/
function setSelectDefalut(id, api, pData, defaultValue) {
  let status = false;
  let result = ajaxGetData(api, pData);
  $("#" + id + "  option").remove();
  $("#" + id).append($("<option></option>").attr("value", "").text(""));
  if (result[0].result == undefined) {
    let colName = Object.keys(result[0]);
    $.map(result, function (item) {
      if (item[0] == defaultValue) {
        $("#" + id).append(
          $("<option selected></option>")
            .attr("value", item[colName[0]])
            .text(item[colName[1]])
        );
      } else {
        $($("#" + id)).append(
          $("<option></option>")
            .attr("value", item[colName[0]])
            .text(item[colName[1]])
        );
      }
    });
    status = true;
  } else {
    alert(
      "setSelectDefalut function to" +
      $("#lbl_" + id).html() +
      " Error Msg:" +
      result[0].result
    );
  }
  return status;
}
/*------------------------------------------------------------------------------
[Function Name]getMsgInfo
[Function Descript]取得錯誤訊息
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 新增
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getMsgInfo(apiHost, PROGRAM_ID, MESSAGE_ID, BAS_LANG) {
  let msg = "";
  let msgresp = ajaxGetData(
    apiHost + "BPM_SENAO_SNSI009_QUERY",
    { PROGRAM_ID: PROGRAM_ID, MESSAGE_ID: MESSAGE_ID } //PROGRAM_ID:SENAO,MESSAGE_ID:002
  );

  if (msgresp[0].result == undefined) {
    msg = JSON.parse(msgresp[0].MESSAGE)[BAS_LANG];
  } else {
    msg = "API:BPM_SENAO_SNSI009_QUERY Unable to retrieve data";
  }
  return msg;
}

/*==============================================================================
[檔案名稱]senao_Utils.js
[撰 寫 人]JC
[修改紀錄]
[MMo]2025/04/18 By Senao-JC 調整程式架構與說明
==============================================================================*/
/*------------------------------------------------------------------------------
[Function Name]getCompanyInfo
[Function Descript]取得公司OU資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getCompanyInfo() {
  let result = ajaxGetData(invokeURL + "BPM_COMPANY_INFO_LIST", {});
  $("#form_ou option").remove();
  $("#form_ou").append($("<option></option>").attr("value", "").text(""));
  if (result[0].result == undefined) {
    $.map(result, function (item) {
      $("#form_ou").append(
        $("<option></option>")
          .attr("value", item.COMPANY)
          .text(item.COMPANY_NAME)
      );
    });
  }
  return true;
}
/*------------------------------------------------------------------------------
[Function Name]setCompanyValueByUser
[Function Descript]設定公司OU數值
[Parameter]pUserId、pDeptId
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setCompanyValueByUser(pUserId, pDeptId) {
  //取得人員隸屬的組織id
  let defCompanyVal = "";
  if (pUserId == undefined) pUserId = userId; //沒有pUserId用登入人員id:userId
  if (pDeptId == undefined) pDeptId = Department; ////沒有pDeptId用主部門id:mainOrgUnitIds
  let result = ajaxGetData(invokeURL + "BPM_getCompanyDefValByUser", {
    UUID: pUserId,
    OUID: pDeptId,
  });
  let tDropdownHdn = document.getElementById("form_ou_hdn");
  if (result[0].result == undefined) {
    defCompanyVal = result[0].ID;
  } else {
    defCompanyVal = "senao"; //取不到預設預設senao
  }
  if (tDropdownHdn != null && tDropdownHdn.value != "") {
    let tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);
    $("#form_ou").val(tSelectedSQLDropdown);
  } else {
    $("#form_ou").val(defCompanyVal);
  }
  //
  return true;
}
/*------------------------------------------------------------------------------
[Function Name]getFacInfo
[Function Descript]取得工廠Org資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getFacInfo(Com) {
  let result = ajaxGetData(invokeURL + "BPM_getFactory", { COMPANY: Com });
  $("#form_org option").remove();
  $("#form_org").append($("<option></option>").attr("value", "").text(""));
  if (result[0].result == undefined) {
    $.map(result, function (item) {
      $("#form_org").append(
        $("<option></option>")
          .attr("value", item.FACTORY)
          .text(item.FACTORY_NAME)
      );
    });
  }
  return true;
}
/*------------------------------------------------------------------------------
[Function Name]fixNull
[Function Descript]將Excel匯入、取得資料庫資料、選項...等的值為NULL時預設給空字串，避免後續使用到該值時程式錯誤
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]fixNull(dataArray3[i][20]); //CHG_MODE
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function fixNull(val) {
  if (val === undefined || val === null) {
    return "";
  }
  return val;
}
/*------------------------------------------------------------------------------
[Function Name]changeOptionMethod
[Function Descript]select option用text的值指定
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250508 By JC 新增說明
[Mo]Modify.....:20250508 By JC 新增說明
[Example]
[Ex]changeOptionMethod('form_ou','恩睿科技'); 
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function changeOptionMethod(eid, val) {
  let selected = ""
  $("select[name=" + eid + "] option").each(function () {
    if ($(this).text() == val) {    
      selected = $(this).val();
      return false; //跳出
    }
  });
  $("select[name=" + eid + "]").val(selected);
  if(selected==""){
    return false;
  }else{
     return true;
  }
}
/*------------------------------------------------------------------------------
[Function Name]IsInvaildDept
[Function Descript]判斷是否為失效部門
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]IsInvaildDept("11307") return true 失效
[Ex]IsInvaildDept("10532") return false 未失效
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function IsInvaildDept(apiHost, DeptNo) {
  let IsInvaild = false;

  let orgId = "senao";
  if ($("#form_ou").length > 0) {
    orgId = $("#form_ou").val();
  } else {
    orgId = "senao";
  }
  if (DeptNo != "") {
    let result = ajaxGetData(apiHost + "BPM_InvaildDept", {
      DEPT: DeptNo,
      ORG: orgId,
    });
    if (result[0].result == undefined) {
      if (result.length > 0) {
        IsInvaild = true;
      }
    }
  }
  return IsInvaild;
}
/*------------------------------------------------------------------------------
[Function Name]querySNSI003_Org
[Function Descript]查詢SNSI003參數設定 by Org
[Parameter]{string} param 
[Returns]{string} result 
[Modify Log]
[Mo]Modify.....:20190709 By Senao-TinYu
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]總經理工號:querySNSI003_Org("SN014_S08"),return 10100
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI003_Org(apiHost, param) {
  let result = "";
  let data = [];
  let orgId = "";

  if ($("#form_ou").length > 0) {
    orgId = $("#form_ou").val();
  } else {
    orgId = "senao";
  }
  if (param !== "") {
    data = ajaxGetData(apiHost + "BPM_SENAO_SNSI003_Org", {
      SNSI003002: param,
      SNSI003005: orgId,
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        result = data[0].SNSI003003; //SNSI003003
      }
    }
  }
  return result;
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
    r = "0" + r;
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
/*------------------------------------------------------------------------------
[Function Name]queryUserByEmpId
[Function Descript]以員工ID查詢員工相關資料
[Parameter]{string} empId 
[Returns]{object} userInfo 員工相關資料
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]queryUserByEmpId("103858"),return 該員工ID、名稱、單位ID、單位名稱、Email資料
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUserByEmpId(apiHost, empId) {
  let userInfo = {};
  let data = [];
  if (empId !== "") {
    data = ajaxGetData(apiHost + "BPM_getUser2", {
      ID: empId,
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        userInfo.userId = data[0].ID; //申請人ID
        userInfo.userName = data[0].USERNAME; //申請人名稱
        userInfo.unitId = data[0].DEPTID; //申請單位ID
        userInfo.unitName = data[0].ORGANIZATIONUNITNAME; //申請單位名稱
        userInfo.mailAddress = data[0].MAILADDRESS; //EMAIL
      }
    }
  }
  return userInfo;
}
