/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var fname;
var chindReturnData = []; //子視窗回傳
var lineData = new Array();
var gridRows = new Array();
var gridList = [
  {
    //grid初始化參數
    caption: "Excel File UpLoad OK of Message",
    gid: "jqGridOKMsg",
    pager: "#jqGridOKMsgPager",
    shrinkToFit: true,
    gridDefPostData: {},
    colNames: ["FORMSERIALNUMBER", "FORM_ORG", "FORM_OU", "MSG"],
    colModel: [
      {
        Label: "FORMSERIALNUMBER",
        name: "FORMSERIALNUMBER",
        index: "FORMSERIALNUMBER",
        align: "center",
      },
      {
        Label: "FORM_ORG",
        name: "FORM_ORG",
        align: "center",
      },
      {
        Label: "FORM_OU",
        name: "FORM_OU",
        align: "center",
      },
      {
        Label: "MSG",
        name: "MSG",
        align: "center",
      },
    ],
    datatype: "jsonstring",
    search: true,
    refresh: true,
    xls: false,
  },
  {
    //grid初始化參數
    caption: "Excel File UpLoad NG of Message",
    gid: "jqGridOKMsg",
    pager: "#jqGridOKMsgPager",
    shrinkToFit: true,
    gridDefPostData: {},
    colNames: ["FORMSERIALNUMBER", "FORM_ORG", "FORM_OU", "MSG"],
    colModel: [
      {
        Label: "FORMSERIALNUMBER",
        name: "FORMSERIALNUMBER",
        index: "FORMSERIALNUMBER",
        align: "center",
      },
      {
        Label: "FORM_ORG",
        name: "FORM_ORG",
        align: "center",
      },
      {
        Label: "FORM_OU",
        name: "FORM_OU",
        align: "center",
      },
      {
        Label: "MSG",
        name: "MSG",
        align: "center",
      },
    ],
    datatype: "jsonstring",
    search: true,
    refresh: true,
    xls: false,
  },
];

/*---------------------公用變數 End--------------*/
/*---------------------Form Function Start--------------*/

$(document).ready(function () {

  loginCheck(); //登入檢查
  //Load menu
  $.get("Top.html", function (data) {
    $("#menu").html(data);
  });
  //Load Bottom
  $.get("Bottom.html", function (data) {
    $("#bottom").html(data);
  });

  initFrm();
});
function initFrm() {
  //init form
  initSubFrm();
  frmEvent();

  if (imPortExcel) {
    $("#excel-file").val("");
    $("#qryModal").modal("show");
  }

}

/*---------------------Form Function End--------------*/
/*---------------------UI event Function Start--------------*/
function frmEvent() {

  //form event function
  $("#excelUp").on("click", function () {
    if ($("#excel-file").val() == "") {
      if ($("#filelist").text() == "") {
        alert("Please choose to upload the attachment file!");
      }
    } else {
      var files = $("#excel-file")[0].files;
      $("#qryModal").modal("hide");
      var fileReader = new FileReader();
      fileReader.onload = function (ev) {
        try {
          var data = ev.target.result;
          var workbook = XLSX.read(data, {
            type: "binary",
            cellDates: true,
            cellText: false
          }); // 以二進位制流方式讀取得到整份excel表格物件
          var persons = []; // 儲存獲取到的資料
        } catch (e) {
          alert("File type is incorrect");
          return;
        }
        // 表格的表格範圍，可用於判斷表頭是否數量是否正確
        var fromTo = "";
        // 遍歷每張表讀取
        for (var sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            fromTo = workbook.Sheets[sheet]["!ref"];
            //console.log("fromTo", fromTo);
            persons = persons.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
                blankRows: false,
                defval: null,
                range: 2,
              })
            ); //range:開始行數
            break; // 如果只取第一張表，就取消註釋這行
          }
        }
        //在控制檯打印出來表格中的資料
        //console.log(persons);

        $("body").loading({
          message: "Working...",
          theme: "dark",
        });
        setTimeout(function () {
          upExcel(persons);
          $("body").loading("stop");
        }, 500);
      };
      // 以二進位制方式開啟檔案
      fileReader.readAsBinaryString(files[0]);
      $("#qryModal").modal("hide");
    }
  });

  $(".js-fullheight").css("height", $(window).height());
  $(window).resize(function () {
    $(".js-fullheight").css("height", $(window).height());
  });

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
  $("#forwardBtn").on("click", function () {
    $("#userModal").modal("show");
    initUserModel();
  });
  $("#initiateBtn").on("click", function (e) {
    //發起

    //表單檢查
    let errMsg = chkBPMFrmData(formId, activityId);
    if (!errMsg ? false : errMsg.trim().length > 0) {
      alert(errMsg);
      return;
    }
    if (errMsg)
      $("body").loading({
        message: "Working...",
        theme: "dark",
      });
    setTimeout(function () {
      initiate();
      $("body").loading("stop"); // 停止
      //window.location.href = "index.html";
    }, 100);
  });
  $("#agreeBtn").on("click", function (e) {
    //繼續派送
    let msg = "簽核失敗";
    $("body").loading({
      message: "Working...",
      theme: "dark",
    });
    setTimeout(function () {
      let result = ajaxGetData(invokeURL + "BPM_FLOW_STATUS", {
        UID: userId,
        ITEMOID: ITEMOID,
      });
      if (result[0].result == undefined) {
        if (result[0].WORKITEM_CURRENTSTATE == 0) {
          result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
            acceptWorkItem: {
              pWorkItemOID: ITEMOID,
              pUserId: userId,
            },
          });
          if (result[0].result == undefined) {
            result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
              completeWorkItem: {
                pWorkItemOID: ITEMOID,
                pUserId: userId,
                pComment: $("#subject").val(),
              },
            });
            if (result[0].result == undefined) {
              msg = "簽核完成";
            } else {
              //completeWorkItem簽核失敗
              msg = "completeWorkItem:簽核失敗";
            }
          } else {
            //acceptWorkItem接收失敗
            msg = "acceptWorkItem:簽核失敗";
          }
        } else {
          result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
            completeWorkItem: {
              pWorkItemOID: ITEMOID,
              pUserId: userId,
              pComment: $("#subject").val(),
            },
          });
          if (result[0].result == undefined) {
            //completeWorkItem簽核完成
            msg = "簽核完成";
            alert(msg);
            window.location.href = "index.html";
          } else {
            //completeWorkItem簽核失敗
            msg = "completeWorkItem:簽核失敗";
          }
        }
      } else {
        //completeWorkItem
        msg = "completeWorkItem:簽核失敗";
      }
      alert(msg);
      $("body").loading("stop"); // 停止
      window.location.href = "index.html";
    }, 100);
  });
  $("#returnBtn").on("click", function (e) {
    //退回重瓣
    let msg = "簽核失敗";
    $("body").loading({
      message: "Working...",
      theme: "dark",
    });
    setTimeout(function () {
      let result = ajaxGetData(invokeURL + "BPM_FORM_RETURN_DATA", {
        formserialnumber: FORMSERIALNUMBER,
        uid: userId,
      });
      if (result[0].result == undefined) {
        result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
          reexecuteActivity: {
            pProcessSerialNo: result[0].PPROCESSSERIALNO,
            pAskReexecuteUserId: result[0].PASKREEXECUTEUSERID,
            pReexecuteActivityId: result[0].PREEXECUTEACTIVITYID,
            pReexecuteComment: $("#subject").val(),
          },
        });
        if (result[0].result == undefined) {
          //reexecuteActivity簽核完成
          msg = "簽核完成";
          alert(msg);
          window.location.href = "index.html";
        } else {
          //reexecuteActivity簽核失敗
          msg = "reexecuteActivity:簽核失敗";
        }
        alert(msg);
      } else {
        msg = "簽核失敗";
        alert(msg);
      }
      $("body").loading("stop"); // 停止
      window.location.href = "index.html";
    }, 100);
  });
  $("#backBtn").on("click", function (e) {
    //回工作清單
    //history.go(-1);
    window.location.href = "index.html";
  });
}

/*---------------------JqGrid Function Start--------------*/
function showGrid(id, msg) {
  //create jagrid
  let options = {};
  let $grid;
  $grid = $("#" + gridList[id].gid);
  $.jgrid.gridUnload(gridList[id].gid);
  options = gridList[id];
  switch (id) {
    case 0:
    case 1:
      if (msg.length > 0) {
        options.datastr = msg;
      }
      $grid.createJqGrid(options);
      break;
  }
}

/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function initUserModel() {
  //取得轉派人員
  let seachdata = {
    ID: "ALL",
    LDAP: "ALL",
    NAME: "ALL",
    DEP: "ALL",
    COMPAY: "ALL",
    DEPNAME: "ALL",
  };
  //搜尋設定
  let result = ajaxGetData(invokeURL + "BPM_COMPANY_LIST", {});
  if (result[0].result == undefined) {
    $.map(result, function (item) {
      $("#userModalCompany").append(
        $("<option></option>")
          .attr("value", item.COMPANY_ID)
          .text(item.COMPANY_NAME)
      );
    });
  }
  UserModelGrid(seachdata);
  $("#userModalQtyBtn").on("click", function () {
    //查詢
    let seach = {
      ID: "ALL",
      LDAP: "ALL",
      NAME: "ALL",
      DEP: "ALL",
      COMPAY: "ALL",
      DEPNAME: "ALL",
    };
    let qty = $("#userModalQtyTxt").val();
    if (qty == undefined || qty == "") {
      qty = "ALL";
    }
    seach.COMPAY = $("#userModalCompany").val();
    switch ($("#userModalType").val()) {
      case "userName":
        seach.NAME = qty;
        break;
      case "userId":
        seach.ID = qty;
        break;
      case "orgUnitName":
        seach.DEPNAME = qty;
        break;
      case "orgUnitId":
        seach.DEP = qty;
        break;
      case "ldapid":
        seach.LDAP = qty;
        break;
    }
    UserModelGrid(seach);
  });
  $("#userModalOKBtn").on("click", function () {
    //轉派
    let $grid = $("#jqGridUser");
    let id = $grid.jqGrid("getGridParam", "selrow");
    if (id > 0) {
      let row = $grid.jqGrid("getRowData", id);

      let data = {
        pRequesterOID: userOid,
        pAcceptorOID: row.USER_OID,
        pWorkItemOID: ITEMOID,
        pReassignComment: "",
      };
      let result = assigneeReassignWorkItem(data);
      if (result.status == "OK") {
        alert("轉派成功");
        $("#userModal").modal("hide");
      } else {
        alert("轉派失敗");
      }
    } else {
      alert("沒有選擇轉派人員");
    }
  });
  $("#userModalQtyTxt").on("keypress", function (event) {
    let key = window.event ? event.keyCode : event.which;
    if (key == 13) {
      $("#userModalQtyBtn").trigger("click");
    }
  });
}

function UserModelGrid(seachdata) {
  //顯示轉派人員Grid
  //grid 設定
  let gid = "jqGridUser";
  let gridParam = {
    //grid初始化參數
    //caption: 'RMA MODEL SUM',
    gid: gid,
    pager: "#jqGridUserPager",
    shrinkToFit: true,
    colAPI: "BPM_USER_QUERY", //set colModel index
    fixedColFDb: false, //set db
    gridDefinitionUrl: invokeURL + "BPM_USER_QUERY",
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {
      ID: seachdata.ID, //工號
      LDAP: seachdata.LDAP, //LDAP ID
      NAME: seachdata.NAME, //員工姓名
      DEP: seachdata.DEP, //部門
      COMPAY: seachdata.COMPAY, //公司
      DEPNAME: seachdata.DEPNAME,
    },
    search: false,
    refresh: false,
    xls: false,
  };
  let $grid = $("#" + gid);
  $.jgrid.gridUnload(gid);
  options = gridParam;
  $grid.createJqGrid(options);
}
function upExcel(exceldata) {
  //Excel多筆上傳
  let OKMsg = [];
  let NGMsg = [];
  let pSubject = $("#subject").val();
  let status = true;
  //拆解Excel
  console.time('Excel');
  let nexcel = splitExcelData(exceldata, "__EMPTY");
  console.timeEnd('Excel');
  //console.log('nexcel', nexcel);
  nexcel.forEach((item, index, arr) => { //將Excel導入到UI
    console.time('upExcel' + index);
    console.log('item:', item);
    status = excelInPutUI(item);
    console.timeEnd('upExcel' + index);
    console.time('initiateBtn' + index);
    //$('#initiateBtn').trigger('click');
    if (status) {
      initiate();
    } else {
      alert(item.head.FORMSERIALNUMBER_1 + '發起失敗');
    }

    console.timeEnd('initiateBtn' + index);
  });
}


function excelInPutUI(data) {
  let head = data.head;
  let detail = data.detail;
  let status = true; //是否有錯誤
  $.each(head, function (key, value) { //設定Head
    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    
   $('#jcimp_flag').val('Y'); //設定多筆匯入標示
    switch (key) {
      case 'FORM_OU': //公司別
        if (changeOptionMethod('form_ou', value)) {//設定公司別
          $('#form_ou').trigger('change');
        } else {
          alert("[" + $("#lbl_form_ou").html() + "] " + querySNSI009('senao', "003", locale, "", "", ""));
          status = false;
          return status;
        }
        break;
      case 'FORM_ORG': //廠區別
        if (changeOptionMethod('form_org', value)) {
          $('#form_org').trigger('change');
        }
        else {
          alert("[" + $("#lbl_form_org").html() + "] " + querySNSI009('senao', "003", locale, "", "", ""));
          status = false;
          return status;
        }

        break;
      case 'SENAO113M003': //申請人id
        $('#senao113m003').val(value);

        applicant = $('#senao113m003').val();
        break;
      case 'SENAO113M004': //部門id
        $('#senao113m004').val(value);
        applicantDept = value;
        break;
      case 'SENAO113M005': //申請人名稱
        $('#senao113m005').val(value);

        break;
      case 'SENAO113M006': //部門名稱
        $('#senao113m006').val(value);
        if (!senao113m003_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M037': //負責業務id
        $('#senao113m037').val(value);
        if (!senao113m037_onblur()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M038': //負責業務
        $('#senao113m038').val(value);

        break;
      case 'SENAO113M039': //業務部門代號
        $('#senao113m039').val(value);
        break;
      case 'SENAO113M040': //業務部門名稱
        $('#senao113m040').val(value);
        if (!senao113m039_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M010': //Customernumber
        $('#senao113m010').val(value);

        break;
      case 'SENAO113M010_T1': //CustomerName
        $('#senao113m010_t1').val(value);
        if (!senao113m010_process()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113M024': //OrderType
        $('#senao113m024').val(value);
        $('#senao113m004_ORA').val(queryOrderTypeId(value));
        senao113m024_process();
        break;
      case 'SENAO113M014': //PaymentTerm
        $('#senao113m014').val(value);
        break;
      case 'SENAO113M015': //FOB(TradeTerm)
        $('#senao113m015').val(value);
      case 'SENAO113M030': //MAC Address
        changeOptionMethod('senao113m030', value);
        break;
      case 'SENAO113M041': //簽呈新品
        if (value == 'Y') {
          $('#senao113m041_Y').attr('checked', 'true');
          senao113m041_onclick();
        } else if (value == 'N') {
          $('#senao113m041_N').attr('checked', 'true');
        }
        break;
      case 'SENAO113M022': //PriceList
        $('#senao113m022').val(value);
        senao113m022_process();
        break;
      case 'SENAO113M016': //TaxCode
        let v1 = value;
        if ($.isNumeric(value)) {
          v1 = (value * 100) + '%';
        }
        //$('#senao113m016').val((value * 100) + '%');
        if (!changeOptionMethod('senao113m016', v1)) {
          //errMsg += "請點選「Tax Code」!! \n";
          alert("[" + $("#lbl_senao113m016").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n");
          status = false;
          return status;
        }
        break;
      case 'SENAO113M025': //Conversion Type
        changeOptionMethod('senao113m025', value);
        break;
      case 'SENAO113M020': //Conversion Rate

        $('#senao113m020').val(value);
        break;
      case 'SENAO113M026': //Conversion Date
        $('#senao113m026').val(value);
        break;
      case 'SENAO113M023': //CustomerPO
        $('#senao113m023').val(value);
        break;
    }
  });

  if (status) {
    //訂單申請單_填表人_客戶_PO號 EX 訂單申請單_林慧雯_神準_PO454551
    $("#subject").val('訂單申請單_'+$('#senao113m005').val()+'_'+$('#senao113m010_t1').val()+'_'+$('#senao113m023').val()); 

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
          break;
        }
        console.time('calculateItemCostRatio');
        calculateItemCostRatio();
        console.timeEnd('calculateItemCostRatio');
        rowArray.push(getRowData(i, j + 1)); //新增欄位到grid data
        console.time('clearBinding');
        clearBinding(0); //新增後清除Binding欄位資料
        console.timeEnd('clearBinding');
      }
      setGridData(i, rowArray);
      //檢查資料
      console.time('calculateTotalAmount_TotalTax');
      calculateTotalAmount_TotalTax();//計算總金額
      console.timeEnd('calculateTotalAmount_TotalTax');
      console.time('queryAllCreditItems');
      queryAllCreditItems(); //重新取得授信金額
      console.timeEnd('queryAllCreditItems');

    }
  }
  
  return status;
}


function gridRowChk(index, row) {
  let status = true; //是否有錯誤
  let UnitPrice = 0;
  $.each(row, function (key, value) { //設定Head

    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    switch (key) {

      case 'SENAO113D004': //料號
        $('#gsenao113d004').val(value);

        break;
      case 'SENAO113D005': //品名規格
        $('#gsenao113d005').val(value);
        let iteminfo = queryItemInfoByCodeInput($('#gsenao113d004').val());
        if (!$.isEmptyObject(iteminfo)) {
          $("#gsenao113d005").val(iteminfo.productSpec)
          $("#gsenao113d020").val(iteminfo.inventory_item_status_code)
          $("#gsenao113d004_ORA").val(iteminfo.inventoryItemId);
        }
        if (!gsenao113d004_process()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113D006': //數量
        $('#gsenao113d006').val(value);
        if (!gsenao113d006_onchange()) {
          status = false;
          return status;
        }

        break;
      case 'SENAO113D008': //單價

        $('#gsenao113d008').val(value);
        if (!gsenao113d008_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113D012': //交期

        $('#gsenao113d012').val(value.format('yyyy-MM-dd'));
        if (!gsenao113d012_onchange()) {
          status = false;
          return status;
        }
        break;
      case 'SENAO113D026': //稅別
        let v1 = value;
        if ($.isNumeric(value)) {
          v1 = (value * 100) + '%';
        }
        //$('#gsenao113d026').val(v1);
        if (!changeOptionMethod('gsenao113d026', v1)) {
          //errMsg += "請點選「Tax Code」!! \n";
          alert("[" + $("#lbl_gsenao113d026").html() + "] " + querySNSI009(form_ou.value, "003", locale, "", "", "") + "\n");
          status = false;
          return status;
        }
        break;
      case 'SENAO113D027': //Customer PO(PI)
        $('#gsenao113d027').val(value);

        break;
      case 'SENAO113D022': //Customer PO(PI)_Line
        $('#gsenao113d022').val(value);
        break;
      case 'SENAO113D024': //Project Code
        $('#gsenao113d024').val(value);
        if ($('#gsenao113d024').val().length > 0) {//prjoct code
          //新增prjoct name
          let pData = ajaxGetData(invokeURL + 'BPM_ERP_OracleItemModel', {
            DESCRIPTION: null,
            ORG_ID: ORG_ID,
            SEGMENT1: $('#gsenao113d024').val()
          });
          if (pData[0].result == undefined) {
            $('#gsenao113d025').val(pData[0].DESCRIPTION);
          }
        }
        break;
      case 'SENAO113D011': //說明
        $('#gsenao113d011').val(value);
        if ($('#gsenao113d011').val().length > 0) {//說明
          if (!gsenao113d011_onblur()) {
            status = false;
            return status;
          }
        }

        break;
    }
  });




  $('#gsenao113d019_val').trigger('change');

  let errMsg = "";
  let itemNo = gsenao113d004.value;
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
    status = false;
    return status;
  }
  $('#gsenao113d009').val($('#senao113m018').val()); //隱藏欄位，幣別
  $('#gsenao113d007').val("PCS"); //隱藏欄位，單位

  return status;
}

function getFrmModelData() {
  $("#FRMModal").modal("show");
}

function checkPointOnClose(ReturnFunction, tReturnData) { //子視窗回傳參數
  let funlist = ReturnFunction.split(',');
  chindReturnData = tReturnData;
  for (let i = 0; i < funlist.length; i++) {

    eval(funlist[i]);
  }

}
function initiate() { //發起
  let pSubject = $("#subject").val();
  //Frm檢查
  //FrmSave
  //發起流程
  let oid = findFormOIDsOfProcess(ProcessPackageId);
  if (oid.status == "OK") {
    let template = getFormFieldTemplate(oid.data);
    if (template.status == "OK") {
      let Process = invokeProcess(
        formId,
        ProcessPackageId,
        applicant,
        applicantDept,
        oid.data,
        pSubject,
        template.data,
        1
      );
      if (Process.status == "OK") {
        alert("已產生" + Process.data + "單號");
      } else {
        alert(Process.msg);
      }
    } else {
      alert(template.msg);
    }
  } else {
    alert(oid.msg);
  }
}
/*---------------------Other Function End--------------*/

