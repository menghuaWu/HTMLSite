/*---------------------公用變數 Start--------------*/
var userId = getcooky("username");
//var userId = '104564';
var now = new Date();
var Today = now.getFullYear() + "-" + (now.getMonth() + 1).toString().padStart(2, '0') + "-" + now.getDate().toString().padStart(2, '0');
//var userId = "102584";
//var userId = "102759";
var user_Name; //姓名
var applicant = ""; //申請人工號
var applicantDept = ""; //申請人部門
var FORMSERIALNUMBER = ""; //表單單號:SENAO106-202109-0002
var SERIALNUMBER = ""; //表單編號:SENAO10600000002
var ITEMOID = "";
var formId = ""; //SENAO188
var ProcessPackageId = ""; //SENAO188
var actionType = ""; //CREATE
var Department; //部門代號
var Department_Name; //部門名稱
var COMPANYID; //公司代號
var COMPANY_NAME; //公司名稱
var userOid; // user oid
var imPortExcel = false; // EXcel匯入
var activityId; //關卡
var activityname;//關卡身份
var apiurl = invokeURL; //Api位置
var locale = "zh_TW";
var formOID = "";//表單OID
var formInstOID = "";
var tempLateArray = {};

var mainOrgUnitIds = "";//主部門ID
var mainOrgUnitNames = "";//主部門名稱
var mainOrgId = "";//主部門所在之組織ID
var mainOrgOID = "";//主部門所在之組織OID
var workItemOwnerOID = "";//工作項目處理者OID
var workItemSource = "";//工作項目來源 0:新工作 1:退回重辦 2:取回重辦
var orgUnitIds = "";//部門ID (包含多個集合)
var processId="";//流程模型ID
/*---------------------公用變數 End--------------*/
/*---------------------公用函數 Start--------------*/
/*------------------------------------------------------------------------------
[Function Name]getFrmJson
[Function Descript]取的表單資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250525 By Senao-JC 新增說明
[Mo]Modify.....:20250525 By Senao-JC 增加範例說明
[Example]
[Ex]getFrmJson()
[Show Codes=Y] 
------------------------------------------------------------------------------*/
/*---------------------公用函數 END--------------*/
function getFrmJson() {

  let Frmdata = {};
  //取得Head
  let result = ajaxGetData(invokeURL + "BPM_FRM_HEAD_LIST", {
    frmid: formId,
  });
  if (result[0].result == undefined) {
    for (let i = 0; i < result.length; i++) {
      let value = '';
      if (result[i].CHECKBOX == 'Y') { //CHECK BOX
        /*if ($('*[name=' + result[i].ID + ']').is(":checked")) {
          // it is checked
          value = $('*[name=' + result[i].ID + ']').val();
        } else {
          value = result[i].CHECKBOX_N_VAL
        }*/
        var checked = $('*[name=' + result[i].ID + ']:checked');
        if (checked.length > 0) {
          value = checked.map(function () { return this.value; }).get().join(',');
        } else {
          value = result[i].CHECKBOX_N_VAL;
        }
      } else {
        value = $('*[name=' + result[i].ID + ']').val();
      }
      if (result[i].RADIO == 'Y') { //Radio
        value = $('input[name=' + result[i].ID + ']:checked').val()
      }
      if (value != undefined) {
        Frmdata[result[i].ID] = value;
      }

    }
  }
  //取得GRID
  result = ajaxGetData(invokeURL + "BPM_FRM_GRID_INDEX_LIST", {
    frmid: formId,
  });
  if (result[0].result == undefined) {
    for (let i = 0; i < result.length; i++) {
      let $grid = $("#" + result[i].GID);
      if ($grid.length > 0) {
        let gridData = $grid.getGridParam("data");
        /*if (gridData.length > 0) {
          //Frmdata[result[i].GID] = jsonKeysToCase(gridData);
          let frmarrayData = [];
          let data = ajaxGetData(invokeURL + "BPM_FRM_GRID_LIST", {
            frmid: formId,
            GID: result[i].GID
          });
          if (data[0].result == undefined) {
            for (let j = 0; j < gridData.length; j++) {
              let jsonData = {};
              for (let k = 0; k < data.length; k++) {
                jsonData[data[k].ID] = gridData[j][data[k].ID.toUpperCase()]
                //gridData[j][data[]]
              }
              frmarrayData.push(jsonData);

            }
            Frmdata[result[i].GID] = frmarrayData;
          }
        }*/
        let frmarrayData = [];

        // 取得這個 Grid 的欄位定義
        let data = ajaxGetData(invokeURL + "BPM_FRM_GRID_LIST", {
          frmid: formId,
          GID: result[i].GID
        });

        if (data[0].result == undefined) {
          // 如果 Grid 有資料,就處理每一行
          if (gridData.length > 0) {
            for (let j = 0; j < gridData.length; j++) {
              let jsonData = {};
              for (let k = 0; k < data.length; k++) {
                jsonData[data[k].ID] = gridData[j][data[k].ID.toUpperCase()];
              }
              frmarrayData.push(jsonData);
            }
          } else {
            // 如果 Grid 沒資料,建立一筆空記錄(使用 defaultValue)
            let jsonData = {};
            for (let k = 0; k < data.length; k++) {
              jsonData[data[k].ID] = "defaultValue";  // 或 data[k].DEFAULTVALUE
            }
            frmarrayData.push(jsonData);
          }

          Frmdata[result[i].GID] = frmarrayData;
        }
      }
    }
  }

  return Frmdata;
}
/*---------------------EXCEL & Form拆解 Function START--------------*/
/*------------------------------------------------------------------------------
[Function Name]getElementId
[Function Descript]擷取要取得的字串資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250509 By Senao-JC 新增說明
[Mo]Modify.....:20250509 By Senao-JC 增加範例說明
[Example]
[Ex]getElementId(headitem, 'id=\"', '"'); //CHG_MODE
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getElementId(str, ssymbol, esymbol) {
  let value = ""
  let sindex = str.indexOf(ssymbol);
  if (sindex != -1) {
    let eindex = str.indexOf(esymbol, sindex + ssymbol.length);
    let id = str.substring(sindex + ssymbol.length, eindex);
    if (id.length > 0) {
      value = id;
    }
  }
  return value;
}
function splitFrmType(frmdata) {
  //拆解Form Template

  let gridStartsymbol = "<Grid";
  let gridEndsymbol = "</Grid";
  let frmarray = frmdata.split("\n");
  console.log(frmarray);
  let title = frmarray[0];
  let bottom = frmarray[frmarray.length - 1];
  frmarray = frmarray.slice(1, frmarray.length - 1);
  let gridStartindex = frmarray.findIndex((e) => e.match(gridStartsymbol));
  let gridEndindex = frmarray.findIndex((e) => e.match(gridEndsymbol));
  let grid = [];
  let griditem = [];
  let headlType = [];
  let gridType = [];
  let griditemlType = [];
  let headlData = [];
  if (gridStartindex > -1) { //有單身
    headlData = frmarray.slice(0, gridStartindex);
    headlData = headlData.concat(frmarray.slice(gridEndindex + 1, frmarray.length));
    griditem = frmarray.slice(gridStartindex, gridEndindex + 1);
    gridStartindex = headlData.findIndex((e) => e.match(gridStartsymbol));
    grid.push(griditem);
    while (gridStartindex > -1) { //
      let headlData1 = [];
      let headlData2 = [];
      gridStartindex = headlData.findIndex((e) => e.match(gridStartsymbol));
      if (gridStartindex > -1) {
        gridEndindex = headlData.findIndex((e) => e.match(gridEndsymbol));
        headlData1 = headlData.slice(0, gridStartindex);
        headlData2 = headlData.slice(gridEndindex + 1, headlData.length)
        griditem = headlData.slice(gridStartindex, gridEndindex + 1);
        headlData = headlData1.concat(headlData2);
        gridStartindex = headlData.findIndex((e) => e.match(gridStartsymbol));
        grid.push(griditem);
      }
    }

  } else {
    headlData = frmarray;
  }
  headlData.forEach((headitem, headindex, harr) => {
    let id = getElementId(headitem, 'id=\"', '"');
    if (id.length > 0) {
      let dataType = getElementId(headitem, 'dataType=\"', '"');
      if (dataType.length <= 0) {
        dataType = "java.lang.String";
      }
      headlType.push({ id: id, dataType: dataType })
    }

  });
  for (let i = 0; i < grid.length; i++) {
    grid[i].forEach((griditem, gridindex, garr) => {
      let id = getElementId(griditem, 'id=\"', '"');
      if (id.length > 0) {
        let dataType = getElementId(griditem, 'dataType=\"', '"');
        if (dataType.length <= 0) {
          dataType = "java.lang.String";
        }
        griditemlType.push({ id: id, dataType: dataType })
      }
    });
    gridType.push(griditemlType);
  }



  return { title: title, bottom: bottom, head: headlData, headlType: headlType, details: grid, gridType: gridType };

}
function splitFrm(frmdata) {
  //拆解Form Template
  let frm = {};
  let headlData = []; //單頭
  let detailsData = []; //單身
  let TheadlData = []; //單頭暫存
  let frmarray = frmdata.split("\n");
  let symbol = "Grid";
  let index = frmarray.findIndex((e) => e.match(symbol));
  if (index > -1) {
    //有單身
    headlData = frmarray.slice(0, index);
    TheadlData = frmarray.slice(index);
    while (index > -1) {
      let detail = [];
      index = TheadlData.findIndex((e) => e.match(symbol)); //找Grid開始
      detail = TheadlData.slice(index, index + 1); //移動抬頭
      if (index > 0) {
        //把中間加到Head
        headlData = headlData.concat(TheadlData.slice(0, index));
      }
      TheadlData = TheadlData.slice(index + 1);
      index = TheadlData.findIndex((e) => e.match(symbol)); //找結尾
      detail = detail.concat(TheadlData.slice(0, index + 1));
      TheadlData = TheadlData.slice(index + 1);
      index = TheadlData.findIndex((e) => e.match(symbol)); //找Grid開始
      detailsData.push(detail);
    }
    headlData = headlData.concat(TheadlData);
  } else {
    //單頭
    headlData = frmarray;
  }
  frm = {
    headlData: headlData,
    headCount: headlData.length,
    details: detailsData,
    detailsCount: detailsData.length,
  };
  return frm;
}
/**
 * 拆解excel組成
 * @param {jsonArray} data 
 * @param {string} split 
 * 20260205 JC edit 跳開沒有單號
 */
function splitExcelData(data, split) {
  //拆解Excel內容
  let nexcel = [];
  //多訂單拆解
  let headlData = []; //單頭
  let detailsData = []; //單身
  let colName = Object.keys(data[0]); //欄位名稱
  let gIndex = colName.findIndex((e) => e.match(split)); //單身位置
  //有單身拆解單身
  if (gIndex > -1) {
    let id = 1;
    let headColname = colName.slice(0, gIndex);
    let subColName = colName.slice(gIndex + 1);
    let mSubCloName = [];

    //取得單身所有Grid
    do {
      gIndex = subColName.findIndex((e) => e.match(split));
      gIndex = gIndex > -1 ? gIndex : subColName.length;
      mSubCloName.push({ id: id, subColName: subColName.slice(0, gIndex) });
      subColName = subColName.slice(gIndex + 1);
      id++;
    } while (subColName.findIndex((e) => e.match(split)) > -1);
    if (subColName.length > 0)
      mSubCloName.push({ id: id, subColName: subColName }); //最後一筆
    id = 1;
    data.forEach((item, index, arr) => {
      let head = {};
      let frmid = item[headColname[0]]; //取得單頭的編號
      detail = [];
      if (frmid == undefined || frmid == null || frmid == '' || frmid == "") {
        return;
      }
      //取得單頭資料
      headColname.forEach((headitem, headindex, harr) => {
        head[headitem] = item[headitem];
      });
      headlData.push(head); //訂單

      mSubCloName.forEach((subcolitem, subcolindex, scolarr) => {
        //取得所有單身資料存入subGrid
        let subGrid = [];
        arr.forEach((subitem, subindex, sarr) => {
          //取得單身資料
          let sub = {};
          let subfrmid = subitem[subcolitem.subColName[0]]; //取得單身的編號
          if (frmid == subfrmid) {
            //取得單身資料
            subcolitem.subColName.forEach((ssitem, ssindex, ssarr) => {
              //個別單身的欄位
              sub[ssitem] = subitem[ssitem];
            });
            subGrid.push(sub);
          }
        });
        if (subGrid.length > 0) {
          detail.push(subGrid);
        }
      });
      if (detail.length > 0) {
        detailsData.push({ id: id, detail: detail });
      }
      nexcel.push({ head: head, detail: detail });
      id++;
    });
  } else {
    nexcel.push({ head: data, detail: [] });
  }

  return nexcel;
}
function CombinefrmData(frmdata, gridData) {
  let Combinefrm = "";
  let headArray = [];
  let detailsArray = [];
  let head = frmdata.headlType;
  let details = frmdata.gridType;
  //組成Head
  for (let i = 0; i < head.length; i++) {
    let value = "";
    let item = "";
    let element = $("*[name='" + head[i].id + "']");
    if (element.length > 0) {
      // console.log('element:', head[i].id);
      /*if (element[0].type == "radio") {
        value = $("*[name='" + id + "']:checked").val();
      } else {
        value = element.val();
      }*/
      value = fixNull(element.val());
    }
    item = '<' + head[i].id + ' id=\"' + head[i].id + '\" ';
    if (value != "") {
      //   <isPMSectionV id=\"isPMSectionV\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</isPMSectionV>
      item += '   dataType=\"' + head[i].dataType + '\" perDataProId=\"\">' + value + '</' + head[i].id + '>';
    } else {
      //"  <senao113m025 id=\"senao113m025\"/>"
      item += '/>';
    }
    headArray.push(item);
  }
  //console.log('headArray:', headArray);
  //組成details 
  for (let i = 0; i < gridData.length; i++) {
    let detailsItemArray = []; //單1grid最後組成資料
    let rowdata = gridData[i]; //資料
    let detailsItem = details[i]; //template
    //Grid開始
    let item = '  <' + detailsItem[0].id + ' id=\"' + detailsItem[0].id + '\">';
    detailsItemArray.push(item);
    item = '   <records>';
    detailsItemArray.push(item);
    for (let k = 0; k < rowdata.length; k++) {
      //行開始
      //<record id="Grid1_35">
      item = '    <record id=\"' + detailsItem[0].id + '_' + k + '\">';
      detailsItemArray.push(item);
      //資料開始
      for (let j = 1; j < detailsItem.length; j++) {
        let value = "";
        // "     <item id=\"gno\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</item>",
        item = '    <item id=\"' + detailsItem[j].id + '\" dataType=\"' + detailsItem[i].dataType + '\" perDataProId=\"\"';
        value = rowdata[k][detailsItem[j].id.toUpperCase()];
        if (value == undefined || value == "") {
          item += '/>';
        } else {
          item += '>' + value + '</item>';
        }
        detailsItemArray.push(item);
      }
      //行結束
      item = '   </record>';
      detailsItemArray.push(item);
    }
    //Grid結束
    item = '   </records>';
    detailsItemArray.push(item);
    item = '   </' + detailsItem[0].id + '>';
    detailsItemArray.push(item);
    detailsArray.push(detailsItemArray);
  }
  //console.log(detailsArray);
  //單頭
  Combinefrm = headArray.join("\n");
  //單身
  for (let j = 0; j < detailsArray.length; j++) {
    Combinefrm += detailsArray[j].join("\n");
  }
  //組成完整
  Combinefrm = "\n" + frmdata.title + "\n" + Combinefrm + "\n" + frmdata.bottom + "\n";
  Combinefrm = "<![CDATA[" + Combinefrm + "]]>";
  return Combinefrm;

}

/*---------------------EXCEL & Form拆解 Function END--------------*/
/*---------------------Sub Form Function START--------------*/
/*function initSubFrm() {
  //表單初始化

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


  let frm = loadSubFrm(formId, actionType);
  btnStyle(actionType);
  if (frm.length > 0) {
    $.get(frm, function (data) {
      $("#Details").html(data);
    });
  }
}

function loadSubFrm(frmid, action) {
  //載入表單內容
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
        }
        break;
      }
    case "SENAO035":
      formId = "SENAO035";
      {
        frm = "FRM/SENAO035.html";
        if (action == "Create" || action == "imPortExcel") {
         // activityId = "UserTask_3"; //第一關填單人
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
    let template = getFormFieldTemplate(oid.data);
    if (template.status == "OK") {
      tempLateArray = splitFrmType(template.data);
    }
  }

  return frm;
}*/
function btnStyle(action) {
  //按鍵類型

  $(".wrapper a").each(function (btn) {
    if (action == "Create" || action == "imPortExcel") {
      //console.log(this.id);
      if (
        this.id == "initiateBtn" ||
        this.id == "saveTempBtn" ||
        this.id == "backBtn"
      ) {
        $(this).removeClass("d-none");
      } else {
        $(this).addClass("d-none");
      }
    } else {
      if (this.id == "initiateBtn") {
        $(this).addClass("d-none");
      } else {
        $(this).removeClass("d-none");
      }
    }
  });
}
/*---------------------Sub Form Function End--------------*/
/*---------------------PubLic Function Start--------------*/
function getUserData(seachdata) {
  //取得User基礎資料
  let status = { data: null, status: "NG", msg: null };
  let result = ajaxGetData(invokeURL + "BPM_USER_QUERY", {
    ID: seachdata.ID, //工號
    LDAP: seachdata.LDAP, //LDAP ID
    NAME: seachdata.NAME, //員工姓名
    DEP: seachdata.DEP, //部門
    COMPAY: seachdata.COMPAY, //公司
    DEPNAME: seachdata.DEPNAME,
  });
  if (result[0].result == undefined) {
    status.data = result[0];
    status.status = "OK";
  } else {
    status.msg = result[0].result;
  }
  return status;
}

function assigneeReassignWorkItem(data) {
  //轉派
  let status = { data: null, status: "NG", msg: null };
  let result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
    assigneeReassignWorkItem: {
      pRequesterOID: data.pRequesterOID,
      pAcceptorOID: data.pAcceptorOID,
      pWorkItemOID: data.pWorkItemOID,
      pReassignComment: data.pReassignComment,
    },
  });
  if (result[0].result == undefined) {
    if (
      result[0]["soapenv:Envelope"]["soapenv:Body"]["soapenv:Fault"] ==
      undefined
    ) {
      status.status = "OK";
    } else {
      status.msg = result[0].result;
    }
  } else {
    status.msg = result[0].result;
  }
  return status;
}
function findFormOIDsOfProcess(Processtype) {
  //取得OID
  let status = { data: null, status: "NG", msg: null };
  let result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
    findFormOIDsOfProcess: {
      findFormOIDsOfProcessReturn: Processtype,
    },
  });
  if (result[0].result == undefined) {
    if (
      result[0]["soapenv:Envelope"]["soapenv:Body"][
      "findFormOIDsOfProcessResponse"
      ]["findFormOIDsOfProcessReturn"]["content"]
    ) {
      status.data =
        result[0]["soapenv:Envelope"]["soapenv:Body"][
        "findFormOIDsOfProcessResponse"
        ]["findFormOIDsOfProcessReturn"]["content"];
      status.status = "OK";
    } else {
      status.msg = result[0].result;
    }
  } else {
    status.msg = result[0].result;
  }
  return status;
}
function getFormFieldTemplate(oid) {
  //取得Form Template
  let status = { data: null, status: "NG", msg: null };
  let result = ajaxGetData(invokeURL + "BPM_XMLWebServices", {
    getFormFieldTemplate: {
      getFormFieldTemplate: oid,
    },
  });
  if (result[0].result == undefined) {
    if (
      result[0]["soapenv:Envelope"]["soapenv:Body"][
      "getFormFieldTemplateResponse"
      ]["getFormFieldTemplateReturn"]["content"]
    ) {
      status.data =
        result[0]["soapenv:Envelope"]["soapenv:Body"][
        "getFormFieldTemplateResponse"
        ]["getFormFieldTemplateReturn"]["content"];
      status.status = "OK";
    } else {
      status.msg = result[0].result;
    }
  } else {
    status.msg = result[0].result;
  }
  return status;
}

function invokeProcess(
  pFormPackageId,
  pProcessPackageId,
  pRequesterId,
  pOrgUnitId,
  pFormDefOID,
  pSubject,
  frmdata,
  attachments,
  type
) {
  let status = { data: null, status: "NG", msg: null };
  let frm;
  let gridarray = [];
  if (type == 1) {


    frm = getFrmJson();
  } else {
    frm = frmdata;
  }
  frm.attachments = attachments;
  let postdata = frm;
  postdata.pFormPackageId = pFormPackageId;
  postdata.pProcessPackageId = pProcessPackageId;
  postdata.pRequesterId = pRequesterId;
  postdata.pOrgUnitId = pOrgUnitId;
  postdata.pFormDefOID = pFormDefOID;
  postdata.pSubject = pSubject;
  //因為json內字串有&,傳送到XML會有問題,把&轉成&amp;
  let jsonString = JSON.stringify(postdata, (key, value) => {
    if (typeof value === 'string') {
      return value.replaceAll("&", "&amp;"); // 將 & 統一換成 and
    }
    return value;
  });
    console.log('invokeProcess jsonString:', JSON.parse(jsonString));
  postdata = JSON.parse(jsonString);
  console.log('invokeProcess postdata:', postdata);
  let result = ajaxGetData(invokeURL + "BPM_JSONToFRMColumn",
    postdata
  );
  if (result[0].result == undefined) {
    if (
      result[0]["soapenv:Envelope"]["soapenv:Body"]["invokeProcessResponse"][
      "invokeProcessReturn"
      ]["content"]
    ) {
      status.data =
        result[0]["soapenv:Envelope"]["soapenv:Body"]["invokeProcessResponse"][
        "invokeProcessReturn"
        ]["content"];
      status.status = "OK";
      //更新附件資料
      for (let i = 0; i < attachments.length; i++) {
        result = ajaxGetData(invokeURL + "BPM_ATTACHMENT_FRMOID_UPDATE", {
          OID: attachments[i].att_OID,
          serialnumber: status.data
        }

        );
        if (result[0].result != 'ok') {
          alert(attachments[i].att_originalFileName + '檔案上傳失敗');
        }
      }

    } else {
      status.msg = result[0].result;
    }
  } else {
    status.msg = result[0].result;
  }
  return status;
}

function getFrm(frmdata) {
  //console.log('frmdata');
  //console.log(frmdata.split('\n'));
  let data = "";
  //let frmarray = frmdata.split("\n");
  let frmarray = frmdata;
  let ssymbol = 'id="';
  let esymbol = '"';
  let symbol = "defaultValue";
  for (let i = 0; i < frmarray.length; i++) {
    let sindex = frmarray[i].indexOf(ssymbol);
    if (sindex != -1) {
      let eindex = frmarray[i].indexOf(esymbol, sindex + ssymbol.length);
      let id = frmarray[i].substring(sindex + ssymbol.length, eindex);
      if (id.length > 0) {
        let index = frmarray[i].indexOf(symbol);
        //let element=$('#' + id);
        let element = $("*[name='" + id + "']");
        let values = "";
        console.log('element:', id);
        if (element) {
          if (element[0].type == "radio") {
            values = $("*[name='" + id + "']:checked").val();
          } else {
            values = element.val();
          }
        }


        console.log("values=" + values);
        console.log($("*[name='" + id + "']").attr("type"));

        let endindex = frmarray[i].indexOf("/>");
        let nindex = frmarray[i].indexOf(">");
        if (values) {
          //有值
          if (index != -1) {
            frmarray[i] = frmarray[i].replace(symbol, values);
          } else {
            frmarray[i] =
              frmarray[i].substring(0, endindex) +
              " >" +
              values +
              "</" +
              id +
              ">";
          }
        } else {
          //沒有值
          if (endindex == -1) {
            frmarray[i] = frmarray[i].substring(0, nindex) + " />";
          }
        }
        //檢查是否有DataType
        let typeindex = frmarray[i].indexOf("dataType");
        if (typeindex == -1) {
          //新增DataType
          frmarray[i] =
            frmarray[i].substring(0, eindex + esymbol.length) +
            ' dataType="java.lang.String" ' +
            frmarray[i].substring(eindex + esymbol.length);
        }
      }
    }
  }
  data = frmarray.join("\n");
  // data = "<![CDATA[" + data + "]]>";

  //data= "<![CDATA[ <FORM188><form188019_t1 id='form188019_t1' dataType='java.lang.String' perDataProId=''/><form188019 id='form188019' dataType='java.lang.String' perDataProId=''/><form_org id='form_org' dataType='java.lang.String'/><form_ou id='form_ou' dataType='java.lang.String'>senao</form_ou><form188002 id='form188002' dataType='java.lang.String'>SENAO188-202502-0006</form188002><form188001 id='form188001' dataType='java.lang.String' perDataProId=''>SENAO188</form188001><form188004_t1 id='form188004_t1' dataType='java.lang.String' perDataProId=''>運籌系統二課</form188004_t1><form188003_t1 id='form188003_t1' dataType='java.lang.String' perDataProId=''>EFGP林裕貴</form188003_t1><form188003 id='form188003' dataType='java.lang.String' perDataProId=''>104564</form188003><form188004 id='form188004' dataType='java.lang.String' perDataProId=''>10532</form188004><form188005 id='form188005' dataType='java.lang.String' perDataProId=''>2025/02/21</form188005><form188006 id='form188006' dataType='java.lang.String'>ADD</form188006><form188007 id='form188007' dataType='java.lang.String' perDataProId=''/><form188008_1 id='form188008_1' dataType='java.lang.String' perDataProId=''>90</form188008_1><form188008_2 id='form188008_2' dataType='java.lang.String' perDataProId=''>90</form188008_2><form188008_3 id='form188008_3' dataType='java.lang.String' perDataProId=''>90</form188008_3><form188008_4 id='form188008_4' dataType='java.lang.String' perDataProId=''>90</form188008_4><form188009 id='form188009' dataType='java.lang.String'>PUBLIC</form188009><form188010 id='form188010' dataType='java.lang.String'>3</form188010><form188011 id='form188011' dataType='java.lang.String' perDataProId=''/><form188012 id='form188012' dataType='java.lang.String' perDataProId=''>2</form188012><form188013 id='form188013' dataType='java.lang.String' perDataProId=''>2</form188013><form188016 id='form188016' dataType='java.lang.String' perDataProId=''/><form188017 id='form188017' dataType='java.lang.String'/><form188018 id='form188018' dataType='java.lang.String' perDataProId=''/><form188021 id='form188021' dataType='java.lang.String' perDataProId=''/><form188022 id='form188022' dataType='java.lang.String'/><form188020 id='form188020' dataType='java.lang.String' perDataProId=''/><form188014 id='form188014' dataType='java.lang.String' perDataProId=''/><form188015 id='form188015' dataType='java.lang.String' perDataProId=''/></FORM188>   ]]>";
  return data;
}

function insertStr(str, index, insertStr) {
  return str.substring(0, index) + insertStr + str.substring(index);
}
function chkBPMFrmData(fid, work_site_id) {
  //檢查表單內容

  //資料檢查

  let status = true;

  let msg = "";
  let msgarray = [];

  let result = ajaxGetData(invokeURL + "BPM_FRM_CHK_LIST", {
    FID: fid,
    WORK_SITE_ID: work_site_id,
  });
  if (result[0].result == undefined) {
    for (let i = 0; i < result.length; i++) {
      let item = result[i];
      let str = $("[name='" + item.CLASS_ID + "']").val();
      let status = false;
      let value;
      switch (item.CLASS.toLowerCase()) {
        case "input":
          let chkresult = chkBPMFrmDataType(item.CHKTYPE.toLowerCase(), str);
          if (chkresult.status) {
            //型態檢查通過
            if (item.CHKTYPE.toLowerCase() != "date") {
              value = item.VALUE;
              if (!(!value ? false : value.trim().length > 0)) {
                value = "";
              }
              status = chkBPMFrmLogic(item.LOGIC, chkresult.value, value);
            } else {
              status = chkresult.status;
            }
          }
          break;
        case "checkbox":
          let $checked = $("*[name='" + item.CLASS_ID + "']:checked");
          let vals = $checked.map(function () { return this.value; }).get(); // array of values
          // 若沒勾選，直接判 false
          if (vals.length === 0) {
            status = false;
            break;
          }
          // 若要以「數量」做比較，例如最少要勾選兩個 (item.LOGIC 為 >, <, >=, <=)
          if (["<", ">", "<=", ">="].includes(item.LOGIC)) {
            status = chkBPMFrmLogic(item.LOGIC, vals.length, Number(item.VALUE));
            break;
          }
          // 相等/不等：若 item.VALUE 為多值 (逗號分隔)，以「任一匹配」為 true
          if (item.LOGIC === "==" || item.LOGIC === "!=") {
            const targets = (item.VALUE || "").toString().split(",").map(s => s.trim()).filter(Boolean);
            const anyMatch = vals.some(v => targets.includes(v));
            status = (item.LOGIC === "==") ? anyMatch : !anyMatch;
            break;
          }
          // fallback：比較合併字串（保留原行為）
          status = chkBPMFrmLogic(item.LOGIC, vals.join(","), item.VALUE);
          break;
        case "grid":
          break;
      }
      if (!status) {
        //檢查不通過
        //錯誤訊息
        switch (item.MSG_API) {
          case "BPM_SENAO_SNSI009_QUERY":
            let msgpara = JSON.parse(item.MSG_PARAMETER);
            msgpara.PROGRAM_ID = $('#form_ou').val().toUpperCase();
            let msgresp = ajaxGetData(
              invokeURL + "BPM_SENAO_SNSI009_QUERY",
              msgpara
            );
            if (msgresp[0].result == undefined) {
              msg = JSON.parse(msgresp[0].MESSAGE)[locale];
            } else {
              msg = "API:BPM_SENAO_SNSI009_QUERY Unable to retrieve data";
            }
            break;
          default: //指定錯誤訊息
            msg = item.MSG;
            break;
        }
        msg = "[" + $("#lbl_" + item.CLASS_ID).text().trim() + "] " + msg;
        msgarray.push(msg);
      }
    }
  }
  return msgarray.join("\n");
}
function chkBPMFrmDataType(type, str) {
  let date_ymd1 = /^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/; //日期格式yyyy-mm-dd正規表示式
  let date_ymd2 = /^([0-9]{4})[./]{1}([0-9]{1,2})[./]{1}([0-9]{1,2})$/; //日期格式yyyy/mm/dd正規表示式
  let datetime_ymd_hm = /^(\d{4})-(0\d|1[0-2])-(0\d|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)$/; // yyyy-mm-ddThh:mm
  let response = { status: false, value: "" };
  let status = false;
  let value = str;
  switch (type) {
    case "str": //文字
      status = !str ? false : str.trim().length > 0;
      if (!status) value = "";
      break;
    case "number": //數字或浮點數
      status = checkRate(str);
      if (!status) value = 0;
      break;
    case "date": //日期
      status = date_ymd1.test(str);
      if (!status) {
        status = date_ymd2.test(str);
      }
      if (!status) value = "";
      break;
    case "datetime": //日期2
      status = datetime_ymd_hm.test(str);
      if (!status) value = "";
      break;
    default:
      status = !str ? false : str.trim().length > 0;
      if (!status) value = "";
      break;
  }
  response = { status: status, value: value };
  return response;
}
function chkBPMFrmLogic(logic, x, y) {
  let status = false;
  switch (logic) {
    case "==":
      status = x == y;
      break;
    case ">":
      status = x > y;
      break;
    case "<":
      status = x < y;
      break;
    case ">=":
      status = x >= y;
      break;
    case "<=":
      status = x <= y;
      break;
    case "!=":
      status = x != y;
      break;
  }
  return status;
}
function BPMFrmClear(fid, element_Id) {
  //清除表單內容

  let result = ajaxGetData(invokeURL + "BPM_FRM_CLEAR_LIST", {
    FID: fid,
    ELEMENT_ID: element_Id,
  });
  if (result[0].result == undefined) {
    //需要清除
    result.forEach((item, index, arr) => {
      let id = item.CLEAR_ID;
      let type = $("#" + id).getType();
      let api = item.CLEAR_API;
      let clear_type = item.CLEAR_TYPE; //動作類型
      let data = { TEXT: "", VALUE: "" };
      let values = [];
      let apiresult = [];
      if (!clear_type ? false : clear_type.trim().length > 0) {
        clear_type = "set"; //清空或指定
      }

      switch (clear_type) {
        case "set": //指定值
          if (!api || api.trim().length === 0) {
            //沒有API清空
            if (
              !item.CLAER_VALUE ? false : item.CLAER_VALUE.trim().length > 0
            ) {
              data.VALUE = ""; //清空或指定
            } else {
              data.VALUE = item.CLAER_VALUE;
            }
          } else {
            apiresult = ajaxGetData(invokeURL + api, {});
            if (apiresult[0].result == undefined) {
              data.VALUE = apiresult[0][item.CLAER_VALUE];
            } else {
              data.VALUE = ""; //清空或指定
            }
            values.push(data);
          }
          break;
        case "reload": //api重新載入
          apiresult = ajaxGetData(invokeURL + api, {});
          if (apiresult[0].result == undefined) {
            apiresult.forEach((apiitem, apiindex, apiarr) => {
              data.TEXT = apiitem[item.CLEAR_TEXT];
              data.VALUE = apiitem[item.CLAER_VALUE];
              values.push(data);
            });
          } else {
            values.push(data);
          }
          break;
      }
      switch (type) {
        case "text":
          $("#" + element_Id).val(values[0].VALUE);
          break;
        case "select":
          if (clear_type == "reload") {
            $("#" + element_Id + " option").remove();
            $.map(values, function (valuesitem) {
              $("#" + element_Id).append(
                $("<option></option>")
                  .attr("value", valuesitem.VALUE)
                  .text(valuesitem.TEXT)
              );
            });
          } else {
            $("#" + element_Id).val(values[0].VALUE);
          }
          break;
      }
    });
  }
}

$.fn.getType = function () {
  //取得元件類型
  return this[0].tagName == "INPUT"
    ? this[0].type.toLowerCase()
    : this[0].tagName.toLowerCase();
};
function checkRate(input) {
  //檢查是否為數字
  let re = /^[0-9]*[1-9][0-9]*$/; //判斷字串是否為數字//判斷正整數/[1−9] [0−9]∗]∗/
  return re.test(input);
}

/*------------------------------------------------------------------------------
[Function Name]exists
[Function Descript]檢查元件是否存在
[Parameter]

[Returns]{string} result 
[Modify Log]
[Mo]Modify.....:20221221 By Senao-Calvin 
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]$('div.test').exists(function() {
    this.append('<p>存在!</p>');
    });
[Show Codes=Y] */
$.fn.exists = function (callback) { //
  var args = [].slice.call(arguments, 1);

  if (this.length) {
    callback.call(this, args);
  }

  return this;
};
//檢查是否為日期
const IsDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

function formatBytes(bytes, decimals = 2) { //文件大小byte轉換K
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
function fileTypeImg(ftype) { //文件格式轉換圖片顯示
  let iconpath = 'images/theme/default/images/index_images/';
  switch (ftype) {
    case 'application/vnd.ms-excel': //xls
      iconpath += 'xlsx.png';
      break;
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': //xlsx
      iconpath += 'xls.png';
      break;
    /* case 'image/png': //png
         break;
     case 'image/jpg': //jpg
         break;
     case 'image/gif': //gif
         break;
         */
    case 'application/pdf': //pdf
      iconpath += 'pdf.png';
      break;
    case 'application/msword': //doc
      iconpath += 'doc.png';
      break;
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': //docx
      iconpath += 'docx.png';
      break;
    case 'application/vnd.ms-powerpoint': //ppt
      iconpath += 'ppt.png';
      break;
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation': //pptx
      iconpath += 'pptx.png';
      break;
    case 'application/x-zip-compressed': //zip
      iconpath += 'zip.png';
      break;
    case 'application/x-compressed': //rar
      iconpath += 'rar.png';
      break;
    case 'application/vnd.ms-project': //mpp
      iconpath += 'mpp.png';
      break;
    case 'application/vnd.visio': //vsd
    case 'application/x-vsd': //vsd
      iconpath += 'vsd.png';
      break;
    default:
      iconpath += 'unkonwn.gif';
  }
  return iconpath;
}
//根據db資料控制欄位是否可編輯
function setActivityFieldControl() {//根據關卡開放欄位
  var sqlId = "BPM_GetActivityEditableFields";
  var tParams = [];
  var data = [];
  tParams.push(formId);//表單ID
  tParams.push(activityId);//關卡ID
  data = ajaxGetData(invokeURL + sqlId, {
    formId: tParams[0],
    activityId: tParams[1]
  })
  if (data[0].result == undefined) {
    if (data.length > 0) {
      // 1. 先全部鎖住
      $("input, select, textarea, button").prop("disabled", true);
      for (var i = 0; i < data.length; i++) {
        var fieldId = data[i].FIELD_ID;
        $("#" + fieldId).prop("disabled", false);
        $("input[name='" + fieldId + "'], select[name='" + fieldId + "'], textarea[name='" + fieldId + "']").prop("disabled", false);
      }
      //強制開啟 modal 裡的所有按鈕 
      $('#subject').prop("disabled", false);
      $("#qryModal").find("button").prop("disabled", false);
      $("#qryModal").find("input, select, textarea").prop("disabled", false);
    }
  }
}
/*---------------------PubLic Function End--------------*/
