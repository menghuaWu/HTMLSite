/*---------------------公用變數 Start--------------*/
var ItemTitle = { filetype: '', filename: '', describe: '', filesize: 0, uploader: '', activityname: '', att_OID: '' }; //FILE欄位
var loginuser;
var csm001;
var fname;
var AMAZONSUS204 = 'N';
var filelist = []; //上傳檔案列表
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
    if (AMAZONSUS204 == 'Y') {
      $('#updateTitle').html('<h5> Amazon Batch upload</h5>');
    } else {
      $('#updateTitle').html("<h5 >Batch upload</h5>");
    }
    $("#excel-file").val("");
    $("#qryModal").modal("show");
  }

}

/*---------------------Form Function End--------------*/
/*---------------------Sub Form Function START--------------*/
function initSubFrm() {
  //載入子表單及初始表單數據 
  if (getUrlVars()["frm"] != "" && getUrlVars()["frm"] != undefined) {
    formId = getUrlVars()["frm"];
    ProcessPackageId = getUrlVars()["frm"];
  }
  if (getUrlVars()["type"] != "" && getUrlVars()["type"] != undefined) {
    actionType = getUrlVars()["type"];
  }
  if (getUrlVars()["SERIALNUMBER"] != "" && getUrlVars()["SERIALNUMBER"] != undefined) {
    SERIALNUMBER = getUrlVars()["SERIALNUMBER"];
  }
  if (getUrlVars()["FORMSERIALNUMBER"] != "" && getUrlVars()["FORMSERIALNUMBER"] != undefined) {
    FORMSERIALNUMBER = getUrlVars()["FORMSERIALNUMBER"];
  }
  if (getUrlVars()["ITEMOID"] != "" && getUrlVars()["ITEMOID"] != undefined) {
    ITEMOID = getUrlVars()["ITEMOID"];
  }
  if (getUrlVars()["AMAZONSUS204"] != "" && getUrlVars()["AMAZONSUS204"] != undefined) {
    AMAZONSUS204 = getUrlVars()["AMAZONSUS204"];
  }

  let frm = loadSubFrm(formId, actionType);
  btnStyle(actionType);
  if (frm.length > 0) {
    $.get(frm, function (data) {
      $("#Details").html(data);
      SubfrmEvent();

    });
  }
  //有表單單號取得附件資料
  if (SERIALNUMBER != '') {

    let pData = ajaxGetData(invokeURL + 'BPM_FORM_ATTACHMENT_QUERY', {
      SERIALNUMBER: SERIALNUMBER
    });
    if (pData[0].result == undefined) {
      pData.forEach(item => {
        ItemTitle.filetype = item.EXTENTIONNAME;
        ItemTitle.filename = item.LOGICALNAME;
        ItemTitle.filesize = '';
        ItemTitle.describe = item.DESCRIPTION;
        ItemTitle.att_OID = item.OID;
        ItemTitle.PHYSICALNAME = item.PHYSICALNAME; //路徑
        ItemTitle.ID = item.ID; //存檔名稱
        ItemTitle.uploader = ''; //上傳人員
        ItemTitle.activityname = ''; //上傳人員身分 
        filelist.push({}); //紀錄檔案內容
        addSelectedRow(ItemTitle);
      });

    }

  }
}

function loadSubFrm(frmid, action) {
  //載入子表單內容
  let frm = "";
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
    mainOrgUnitIds = data.data.DEP_ID;
    mainOrgUnitNames = data.data.DEP_NAME;

  }
  if (action == "imPortExcel") imPortExcel = true;
  switch (frmid) {
    case "SENAO188": {
      frm = "FRM/SENAO188.html";
      break;
    }
    case "SENAO113":
    case "ENR113":
      formId = "SENAO113";
      {
        frm = "FRM/SENAO113.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO035":
      formId = "SENAO035";
      {
        frm = "FRM/SENAO035.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO020":
      formId = "SENAO020";
      {
        frm = "FRM/SENAO020.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO021":
      formId = "SENAO021";
      {
        frm = "FRM/SENAO021.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO041":
      formId = "SENAO041";
      {
        frm = "FRM/SENAO041.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO062":
      formId = "SENAO062";
      {
        frm = "FRM/SENAO062.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_2"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO121":
      formId = "SENAO121";
      {
        frm = "FRM/SENAO121.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO177":
      formId = "SENAO177";
      {
        frm = "FRM/SENAO177.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO178":
      formId = "SENAO178";
      {
        frm = "FRM/SENAO178.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_2"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SUS204":
      formId = "SUS204";
      {
        frm = "FRM/SUS204.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO005":
      formId = "SENAO005";
      {
        frm = "FRM/SENAO005.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_2"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO006":
      formId = "SENAO006";
      {
        frm = "FRM/SENAO006.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO045"://人事 新人報到需求表
      formId = "SENAO045";
      {
        frm = "FRM/SENAO045.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "0001"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO176"://人事 離職申請單
      formId = "SENAO176";
      {
        frm = "FRM/SENAO176.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO007"://人事 人員調動申請單
      formId = "SENAO007";
      {
        frm = "FRM/SENAO007.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_2"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO008"://人事 外派訓練申請單
      formId = "SENAO008";
      {
        frm = "FRM/SENAO008.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO009"://人事 外派訓練心得報告書
      formId = "SENAO009";
      {
        frm = "FRM/SENAO009.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO053"://人事 留職停薪申請單
      formId = "SENAO053";
      {
        frm = "FRM/SENAO053.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO054"://人事 復職申請單
      formId = "SENAO054";
      {
        frm = "FRM/SENAO054.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "Applicant"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO077"://人事 人事結案註銷/修改通知單
      formId = "SENAO077";
      {
        frm = "FRM/SENAO077.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO111"://DCC ECR/ECN Application Form
      formId = "SENAO111";
      {
        frm = "FRM/SENAO111.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "0001"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    case "SENAO131"://DCC EBOM ECR/ECN Form
      formId = "SENAO131";
      {
        frm = "FRM/SENAO131.html";
        if (action == "Create" || action == "imPortExcel") {
          activityId = "UserTask_3"; //第一關填單人
          activityname = '填單人';
          workItemSource = '0';//0代表 新工作
        }
        break;
      }
    default: {
      break;
    }
  }
  let oid = findFormOIDsOfProcess(ProcessPackageId);
  if (oid.status == "OK") {
    formOID = oid.data;

  }

  return frm;
}
/*---------------------Sub Form Function END--------------*/
/*---------------------UI event Function Start--------------*/
function SubfrmEvent() { //子表單事件
  //建立事件
  window.addEventListener('message', reciveMessage); //建立子視窗監聽程序
  $("#Attachment").on("click", function () { //附件上傳
    let childWindow = window.open("/BPMWeb/Attachment.html", "", "width=" + pWidth + ",height=" + pHeight + ",resizable=1");
    childWindow.onload = function () {
      //childWindow.someData = { id: 456, status: 'active' }; // 直接赋值给子窗口的全局变量
      childWindow.postMessage({ uploader: user_Name, activityname: activityname }, document.location.origin);
      // 或者调用子窗口的函数
      // childWindow.initData(someData);
    };

  });
}
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
        let rowrange = 2;
        // 遍歷每張表讀取
        //20260205 JC Add AMAZONSUS204多筆匯入轉換
        if (AMAZONSUS204 == 'Y') {
          rowrange = 0;
        }
        for (var sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            fromTo = workbook.Sheets[sheet]["!ref"];
            //console.log("fromTo", fromTo);
            persons = persons.concat(
              XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {
                blankRows: false,
                defval: null,
                range: rowrange,
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
          console.log('update excel:', persons);
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
      //上傳檔案

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
  // Amazon data
  if (AMAZONSUS204 == 'Y') {
    if (exceldata.some(item => item["Amazon Order Id"]
      === undefined || item["Amazon Order Id"] === null || item["Amazon Order Id"] === '')) {
      alert('Incorrect file format');
      return false;
    }
    exceldata = ChangeAmazonData(exceldata);
  }
  console.log(exceldata);
  //拆解Excel
  console.time('Excel');
  let nexcel = splitExcelData(exceldata, "__EMPTY");
  console.timeEnd('Excel');
  //if ($.inArray("head", nexcel) == -1) {
  if (nexcel.some(item => item.head.FORM_OU === undefined || item.head.FORM_OU === null || item.head.FORM_OU === '')) {
    alert('Incorrect file format');
    return false;
  }
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
  return true;
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
  //Frm檢查
  //FrmSave
  if (!formSave()) {
    // 如果表單檢查失敗（有 errstr），直接結束，不執行後續流程
    return;
  }
  let pSubject = $("#subject").val();
  //附件上傳
  let Upload = fileUpload(filelist);
  if (!Upload.status) {
    alert('附件上傳失敗')
    return;
  }
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
        Upload.attachments,
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
function reciveMessage(event) { //讀取子視窗訊息 

  if (event.origin !== document.location.origin) return;
  if (event.data.length > 0) {
    event.data.forEach(item => {
      ItemTitle.filetype = item.file.type;
      ItemTitle.filename = item.file.name;
      ItemTitle.filesize = item.file.size;
      ItemTitle.describe = item.desc;
      ItemTitle.att_OID = '';
      ItemTitle.PHYSICALNAME = ''; //路徑
      ItemTitle.ID = ''; //存檔名稱
      ItemTitle.uploader = item.uploader; //上傳人員
      ItemTitle.activityname = item.activityname; //上傳人員身分 
      filelist.push(item); //紀錄檔案內容
      addSelectedRow(ItemTitle);
    });
    $('#_cuzfileChooserData_selectedItemTable').removeClass('d-none');

  }
}
function addSelectedRow(row) { //新增

  let selectedItemRow = $("#_cuzfileChooser_selectedItems");
  let id = selectedItemRow.children("tr").length;
  id = id == undefined ? 1 : ++id;
  let color = id % 2 == 1 ? "#FCFFFF" : "#DEECF5";
  let tMunuHtml = '<tr> ';

  // $.each(ItemTitle, function (key, value) {
  $.each(row, function (key, value) {
    switch (key) {
      case 'filesize':
        value = formatBytes(value);
        break;
      case 'filetype':

        value = '<img src="' + fileTypeImg(value) + '"  align="middle" width="40" height="40">';
        break;
    }

    tMunuHtml += '<td style="background-color:' + color + '; class="text-center" >'

      + value
      + '</td>';
  });
  tMunuHtml += '</tr>';
  selectedItemRow.append(tMunuHtml);

}
function fileUpload(filelist) {
  let status = true;
  let attachments = [];

  filelist.forEach(item => {
    if (item.att_OID == '' || item.att_OID == undefined) {


      let result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
        reserveNoCmDocument: {
          pOriginalFullFileName: item.file.name

        }
      });
      let str = result[0]["soapenv:Envelope"]["soapenv:Body"]["reserveNoCmDocumentResponse"]["reserveNoCmDocumentReturn"]["content"];
      if (str != undefined) {
        let docServerId = str.substring(str.indexOf('<docServerId>') + '<docServerId>'.length, str.indexOf('</docServerId>'));
        //存檔路徑
        let DirectoryPath = str.substring(str.indexOf('<filePathToSave>') + '<filePathToSave>'.length, str.indexOf('</filePathToSave>'));
        //DirectoryPath='C:'+DirectoryPath.replaceAll("/", "\\");
        //console.log(DirectoryPath);
        //檔案OID
        let att_OID = str.substring(str.indexOf('<OID>') + '<OID>'.length, str.indexOf('</OID>'));
        //檔案名稱
        let uniqueName = str.substring(str.indexOf('<physicalName>') + '<physicalName>'.length, str.indexOf('</physicalName>'));
        //附檔名
        let file_extension = getFileExtension1(item.file.name);
        let attachment = {
          att_OID: att_OID,
          att_id: uniqueName + '.' + file_extension,
          att_name: uniqueName + '.' + file_extension,
          att_originalFileName: item.file.name,
          att_fileType: file_extension,
          att_fileSize: item.file.size,
          att_uploadTime: Date.now(),
          att_creatorOID: userOid,
          att_creatorName: user_Name,
          att_activityName: activityname,
          att_description: item.desc, //說明
          att_isConvertPDF: "",
          userOID: userOid,
          restriction: ""
        };


        //存檔路徑
        let formData = new FormData();
        formData.append('FILE_LOCATION', DirectoryPath); //存檔路徑
        formData.append('FILE_NAME', encodeURIComponent(uniqueName + '.' + file_extension)); //檔案名稱
        formData.append('fileToUpload', item.file);//檔案
        try {
          if (!UploadFile(formData)) {
            status = false;
            alert('上傳檔案失敗' + item.file.name);
            throw new Error('上傳檔案失敗' + item.file.name); //滿足條件，跳出循環

          }
        } catch (e) {
          if (e.message !== "LoopInterrupt") throw e
        }
        attachments.push(attachment);
      } else {
        status = false;
      }
    }
    else {
      /*let attachment = {
        att_OID: item.att_OID,
        att_id: item.att_id,
        att_name: item.att_id,
        att_originalFileName: item.file.name,
        att_fileType: file_extension,
        att_fileSize: item.file.size,
        att_uploadTime: Date.now(),
        att_creatorOID: userOid,
        att_creatorName: user_Name,
        att_activityName: activityname,
        att_description: item.desc, //說明
        att_isConvertPDF: "",
        userOID: userOid,
        restriction: ""
      };
      attachments.push(attachment);*/
    }
  });

  return { status: status, attachments: attachments };
}
function getFileExtension1(filename) { //取得副檔名
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}
//上傳檔案
function UploadFile(formData) {
  let status = true;
  $.ajax({
    url: 'Service_Upload.jsp',
    cache: false,
    type: "POST",
    contentType: false,
    processData: false,
    data: formData,
    async: false,
    success: function (data) {
      console.log(data);
      if (data.indexOf('fieldName') != -1) { //上傳檔案成功，寫入

      } else {
        console.log(data);
        alert(data);
        status = false;

      }
    },
    error: function (data) {
      console.log(data);
      status = false;
    }
  });

  return status;
}
/*---------------------Other Function End--------------*/

