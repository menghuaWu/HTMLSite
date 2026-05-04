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
      let pSubject = $("#subject").val();
      //Frm檢查
      //FrmSave
      //發起流程
      let oid = findFormOIDsOfProcess(formId);
      if (oid.status == "OK") {
        let template = getFormFieldTemplate(oid.data);
        if (template.status == "OK") {
          let Process = invokeProcess(
            formId,
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
  //拆解Excel
  console.time('Excel');
  let nexcel = splitExcelData(exceldata, "__EMPTY");
  console.timeEnd('Excel');
  //console.log('nexcel', nexcel);
  nexcel.forEach((item, index, arr) => { //將Excel導入到UI
    console.time('upExcel'+index);
    excelInPutUI(item);
    console.timeEnd('upExcel'+index);
    console.time('initiateBtn'+index);
    $('#initiateBtn').trigger('click');
    console.timeEnd('initiateBtn'+index);
  });
}


function excelInPutUI(data) {
  let head = data.head;
  let detail = data.detail;
  $.each(head, function (key, value) { //設定Head
    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    switch (key) {
      case 'FORM_OU': //公司別
        if (changeOptionMethod('form_ou', value)) {//設定公司別
          $('#form_ou').trigger('change');
        } else {
          alert("[" + $("#lbl_form_ou").html() + "] " + getMsgInfo(invokeURL, 'senao'.toUpperCase(), "003", locale));
        }
        break;
      case 'FORM_ORG': //廠區別
        if (changeOptionMethod('form_org', value)) {
          $('#form_org').trigger('change');  
        }
          else{
          alert("[" + $("#lbl_form_org").html() + "] " + getMsgInfo(invokeURL, 'senao'.toUpperCase(), "003", locale));
        }

        break;
      case 'SENAO113M003': //申請人id
        senao113m003.val(value);
        applicant=value;
        break;
      case 'SENAO113M004': //部門id
        senao113m004.val(value);
        applicantDept=value;
        break;
      case 'SENAO113M005': //申請人名稱
        senao113m005.val(value);
        break;
      case 'SENAO113M006': //部門名稱
        senao113m006.val(value);
        break;
      case 'SENAO113M037': //負責業務id
        senao113m037.val(value);
        break;
      case 'SENAO113M038': //負責業務
        senao113m038.val(value);
        break;
      case 'SENAO113M039': //業務部門代號
        senao113m039.val(value);
        break;
      case 'SENAO113M040': //業務部門名稱
        senao113m040.val(value);
        break;
      case 'SENAO113M010': //Customernumber
        senao113m010.val(value);
        break;
      case 'SENAO113M010_T1': //CustomerName
        senao113m010_t1.val(value);
        senao113m010_process();
        break;
      case 'SENAO113M024': //OrderType

        senao113m024.val(value);
        senao113m024_process();
        break;
      case 'SENAO113M014': //PaymentTerm
        senao113m014.val(value);
        break;
      case 'SENAO113M015': //FOB(TradeTerm)
        senao113m015.val(value);
      case 'SENAO113M030': //MAC Address
        changeOptionMethod('senao113m030', value);
        break;
      case 'SENAO113M041': //簽呈新品
        if (value == 'Y') {
          senao113m041_Y.attr('checked', 'true');
        } else if (value == 'N') {
          senao113m041_N.attr('checked', 'true');
        }
        break;
      case 'SENAO113M022': //PriceList
        senao113m022.val(value);
        break;
      case 'SENAO113M016': //TaxCode
        senao113m016.val((value * 100) + '%');
        // changeOptionMethod('senao113m016', value);
        break;
      case 'SENAO113M025': //Conversion Type
        changeOptionMethod('senao113m025', value);
        break;
      case 'SENAO113M020': //Conversion Rate

        senao113m020.val(value);
        break;
      case 'SENAO113M026': //Conversion Date
        senao113m026.val(value);
        break;
      case 'SENAO113M023': //CustomerPO
        senao113m023.val(value);
        break;
    }
  });

  for (let i = 0; i < detail.length; i++) {
    let detailitems = detail[i];
    for (let j = 0; j < detailitems.length; j++) {
      let item = detailitems[j];
      gridRowAdd(i, item);
    }


  }
}
function gridRowAdd(index, row) {
  $.each(row, function (key, value) { //設定Head
    //display the key and value pair
    if (value == null || value == undefined) {
      value = "";
    }
    switch (key) {
      case 'SENAO113D004': //料號
        gsenao113d004.val(value);
        break;
      case 'SENAO113D005': //品名規格
        gsenao113d005.val(value);
        break;
      case 'SENAO113D006': //數量

        gsenao113d006.val(value);
        break;
      case 'SENAO113D008': //單價

        gsenao113d008.val(value);
        break;
      case 'SENAO113D012': //交期
        gsenao113d012.val(value);
        break;
      case 'SENAO113D026': //稅別
        gsenao113d026.val((value * 100) + '%');
        break;
      case 'SENAO113D027': //Customer PO(PI)
        gsenao113d027.val(value);

        break;
      case 'SENAO113D022': //Customer PO(PI)_Line

        gsenao113d022.val(value);
        break;
    }
  });
  $('#btnAdd').trigger('click');

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

/*---------------------Other Function End--------------*/

