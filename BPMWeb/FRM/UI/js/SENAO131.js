var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var Invalid_BGCOLOR = "#FFFF00";

var hdn_alertHour = document.getElementById("hdn_alertHour"); //逾時警示
var note_subject = document.getElementById("note_subject"); //主旨備註欄
var writer_id = document.getElementById("writer_id"); //填單人
var writer_name = document.getElementById("writer_name"); //填單人名字
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區
var hdn_ou = document.getElementById("hdn_ou");
var hdn_org = document.getElementById("hdn_org");
var hdn_rd6 = document.getElementById("hdn_rd6"); //[研發六處]送出需通知EC助理群組/Joyce Hsu.20160926
var hdn_rd9 = document.getElementById("hdn_rd9"); //[研發九處、16350-2、16330-1]送出需通知EC助理群組/Joyce Hsu.20160725#6605
var hdn_dcc2 = document.getElementById("hdn_dcc2"); //判斷是否有替代料同時變更為主料
var hdn_me_mtl = document.getElementById("hdn_me_mtl"); //電子機構料件判斷

var senao131_1001 = document.getElementById("senao131_1001"); //表單代號
var senao131_1002 = document.getElementById("senao131_1002"); //表單單號
var senao131_1004 = document.getElementById("senao131_1004"); //部門id
var senao131_1004_1 = document.getElementById("senao131_1004_1"); //部門名稱
var senao131_1003 = document.getElementById("senao131_1003"); //申請人id
var senao131_1003_1 = document.getElementById("senao131_1003_1"); //申請人名稱
var senao131_1007 = document.getElementById("senao131_1007"); //Date Application
var senao131_1008 = document.getElementById("senao131_1008_txt"); //Effective Date
var senao131_1013 = document.getElementById("senao131_1013"); //Model id
var senao131_1014 = document.getElementById("senao131_1014"); //Model Name
var senao131_1017 = document.getElementById("senao131_1017_0"); //重拋 EBOM
var senao131_1006 = document.getElementById("senao131_1006"); //other Model Name
var senao131_1009 = document.getElementById("senao131_1009"); //變更說明
var senao131_1019 = document.getElementById("senao131_1019"); //select Method of change
var senao131_1023 = document.getElementById("senao131_1023_txt"); //date
var senao131_1024 = document.getElementById("senao131_1024"); //Production Order
var senao131_1025_0 = document.getElementById("senao131_1025_0"); //新增重拋EBOM -新增
var senao131_1025_1 = document.getElementById("senao131_1025_1"); //新增重拋EBOM -重拋
var senao131_1020 = document.getElementById("senao131_1020"); //**Select Modify / Don't Modify Finished Goods
var senao131_1021 = document.getElementById("senao131_1021"); //**Select Modify / Don't Modify Semi-Finished Goods
var senao131_1022 = document.getElementById("senao131_1022"); //** OK to Mix Parts in Production
var senao131_1018 = document.getElementById("senao131_1018"); //其他備註提醒
var senao131_1010 = document.getElementById("senao131_1010_0"); //Attachment Verified
var senao131_1015 = document.getElementById("senao131_1015_0"); //BOM Modified
var senao131_1011 = document.getElementById("senao131_1011"); //ECR NUMBER C/R
var senao131_1012 = document.getElementById("senao131_1012"); //ECR NUMBER C/N
//Grid1
var gsenao131_2016 = document.getElementById("gsenao131_2016"); //異常顯示 --隱藏欄位
var gsenao131_2004 = document.getElementById("gsenao131_2004"); //Assembly Level Part Number
var gsenao131_2005 = document.getElementById("gsenao131_2005"); //Assembly Part's Name
var gsenao131_2006 = document.getElementById("gsenao131_2006"); //Part Number
var hdn_r_2006 = document.getElementById("hdn_r_2006"); //開窗2006 returnValue的隱藏欄位
var gsenao131_2007 = document.getElementById("gsenao131_2007"); //Part's Name
var gsenao131_2017 = document.getElementById("gsenao131_2017"); //處理
var gsenao131_2019 = document.getElementById("gsenao131_2019"); //版本
var gsenao131_2008 = document.getElementById("gsenao131_2008"); //add quantity
var gsenao131_2009 = document.getElementById("gsenao131_2009"); //del quantity
var gsenao131_2010 = document.getElementById("gsenao131_2010"); //total quantity before change
var gsenao131_2011 = document.getElementById("gsenao131_2011"); //total quantity after change
var gsenao131_2012 = document.getElementById("gsenao131_2012"); //add reference
var hdn_add_ref = document.getElementById("hdn_add_ref"); //開窗add_ref回傳隱藏 add reference
var gsenao131_2013 = document.getElementById("gsenao131_2013"); //Delete reference
var hdn_del_ref = document.getElementById("hdn_del_ref"); //開窗del_ref回傳隱藏 del reference
var gsenao131_2014 = document.getElementById("gsenao131_2014"); //OP Code *注意下面一行敘述(此行非下拉,而是TEXTBOX)
var gsenao131_2014_b = document.getElementById("gsenao131_2014_b"); //OP Code 下拉選單 給DCC/DCC主管關卡用
var gsenao131_2015 = document.getElementById("gsenao131_2015"); //Comment
var gsenao131_2018 = document.getElementById("gsenao131_2018"); //id
var gsenao131_2020 = document.getElementById("gsenao131_2020"); //BILLid
var gsenao131_2021 = document.getElementById("gsenao131_2021"); //庫存數
var gsenao131_2022 = document.getElementById("gsenao131_2022"); //在途PR數
var gsenao131_2023 = document.getElementById("gsenao131_2023"); //在途PO數
var gsenao131_2024 = document.getElementById("gsenao131_2024"); //待驗數
var gsenao131_2025 = document.getElementById("gsenao131_2025"); //廠商先行備料
var gsenao131_2026 = document.getElementById("gsenao131_2026"); //使用機種
var gsenao131_2027 = document.getElementById("gsenao131_2027"); //ECO_Number
var Grid1 = document.getElementById("Grid1"); //Grid1
var org = "senao"; //固定;或由系統組織變數動態取得mainOrgId
var isNeedEC = true;
var strD012 = "";
var hdn_Boss_isSign = document.getElementById("hdn_Boss_isSign"); //直屬主管已簽flag
var inform_group = document.getElementById("inform_group"); //通知業助群組
var lbl_urgentExplanation = document.getElementById('lbl_urgentExplanation'); //急件說明填寫欄位
var urgentExplanation = document.getElementById('urgentExplanation'); //急件說明

var hdn_formnumber_title = document.getElementById("hdn_formnumber_title"); //20251008 Dex Add 新增hdn_formnumber_title欄位判斷單號
var isUnderFactor = document.getElementById("isUnderFactor"); //20251008 Dex Add 新增欄位，判斷是否隸屬廠長室(未來SVN會用到)
var forSVN = document.getElementsByName('ForSVN'); //20251124 Dex Add 新增ForSVN欄位
//DataSoruce
var DbCfgId_EFGP = "EFGP";
var DbCfgId_R12 = "ERPSNO";

var ec_number_flag = "G"; //20251124 Dex 預設台灣神準的EC_NUMBER(CR)開頭是G開頭

//DataSoruce
var DbCfgId_EFGP = "EFGP";
//單身grid1 元件欄位名稱
var GridBinding = [
  ["","gsenao131_2016","gsenao131_2004","gsenao131_2005","gsenao131_2006","gsenao131_2007","gsenao131_2017","gsenao131_2019","gsenao131_2008","gsenao131_2009","gsenao131_2010","gsenao131_2011","gsenao131_2012","gsenao131_2013","gsenao131_2014","gsenao131_2015","gsenao131_2018","gsenao131_2020","gsenao131_2021","gsenao131_2022","gsenao131_2023","gsenao131_2024","gsenao131_2025","gsenao131_2026","gsenao131_2027"]
];
//單身grid1 欄位顯示名稱=>creat grid產生
var Grid1Columns = [];
//單身grid1 欄位id名稱=>creat grid產生
var Grid1ColumnIds = [];
/*-----------------------Grid變數----------------------------*/
var frmGridList = [{
  caption: '',
  gid: 'Grid1',
  pager: '#Grid1_pager',
  shrinkToFit: false,
  fixedColFDb: true, //set db
  rownumbers: false,
  colAPI: 'BPM_SENAO131_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO131_GRID1_LIST',
  gridDefPostData: {
  },
  search: true,
  refresh: true,
  xls: false,
  onSelectRow: function (rowid, status, e) {  //行選取
    let row = $(this).jqGrid('getRowData', rowid);
    console.log('rowid', rowid);
    console.log('row', row);
    for (const [key, value] of Object.entries(row)) {
      let element = ('#g' + key).toLowerCase();
      if ($(element).attr('type') === 'date') {
        // 將 yyyy/MM/dd 轉成 yyyy-MM-dd 以符合 HTML <input type="date">
        let dateStr = value.replace(/\//g, '-'); // 轉成 "2024-10-22"
        $(element).val(dateStr);
      } else {
        $(element).val(value);
      }
/*
      if ($(element).exists != undefined) {
        $(element).val(value);
      }*/
      console.log('element:', element);
      console.log(key, value);
    }
    gridRowClick(frmGridList[0].gid);  // 傳入 Grid1 的 gid
  },
  loadComplete: function (ids) {
  }
}];
/***************************GRID********************** */
/*---------------------公用變數 End--------------*/
/*---------------------Form Load Function Start--------------*/
$(document).ready(function () {
  //Load menu
  loginCheck(); //登入檢查
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
  //vivian 暫時定義 start

  activityId = "UserTask_3";
  ProcessPackageId='SENAO131';//vivian 抓不到單號暫時定義
  formId='SENAO131';//vivian 抓不到單號暫時定義
  //vivian 暫時定義 end*/
  systemDateTime = showCurrentDate(); //今天日期
  formCreate();
  formOpen();
  frmEvent();
});
function formCreate(){
  writer_id.value = userId;
  writer_name.value = user_Name;
	return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  setActivityFieldControl();
  //設定公司、廠區、表單單號
  frmGeneralLoad(ProcessPackageId, systemDateTime);
  //設定申請人*/
  $('#senao131_1003').val(userId);
  $('#senao131_1003_1').val(user_Name);
  //$('#senao131_1003').attr('disabled', 'true');
 // $('#senao131_1003_1').attr('disabled', 'true');
  //設定所屬部門*/
  $('#senao131_1004').val(Department);
  $('#senao131_1004_1').val(Department_Name);
//  $('#senao131_1004').attr('disabled', 'true');
  //$('#senao131_1004_1').attr('disabled', 'true');
	applicant = $('#senao131_1003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao131_1004').val();//發起流程時參數 申請人部門ID

  $('#senao131_1002').attr('disabled', 'true');//單號
  createFrmGrid(0);
  /*測試用
  let initRow = [{
    SENAO131_2003: "1",
    SENAO131_2004: "0912A0293302",
    SENAO131_2005: "EAA65A-24 PRODUCT LFP",
    SENAO131_2006: "6710A1529010",
    SENAO131_2007: "LABEL BLANK 10cm*7.5 cm (PP SYNTHETIC PAPER) LFP",
    SENAO131_2008: "0",
    SENAO131_2009: "0",
    SENAO131_2010: ".1",
    SENAO131_2011: ".1",
    SENAO131_2012: "5722A0214300-CABLE GB1.37LL 285GRAY 1/1/3 IPEX ASSEM LFP,5722A0213300-CABLE GB1.37LL 180WHITE 1/1/3 IPEX ASSEM LFP,",
    SENAO131_2013: "",
    SENAO131_2014: "80",
    SENAO131_2015: "外箱標籤",
    SENAO131_2016: "",
    SENAO131_2017: "替代料",
    SENAO131_2018: "3318745",
    SENAO131_2019: "",
    SENAO131_2020: "3073003",
    SENAO131_2021: "",
    SENAO131_2022: "",
    SENAO131_2023: "",
    SENAO131_2024: "",
    SENAO131_2025: "",
    SENAO131_2026: "",
    SENAO131_2027: "",
    id: "1"
  },{
    SENAO131_2003: "2",
    SENAO131_2004: "0912A0293302",
    SENAO131_2005: "EAA65A-24 PRODUCT LFP",
    SENAO131_2006: "6710A1529010",
    SENAO131_2007: "LABEL BLANK 10cm*7.5 cm (PP SYNTHETIC PAPER) LFP",
    SENAO131_2008: "0",
    SENAO131_2009: "0",
    SENAO131_2010: ".1",
    SENAO131_2011: ".1",
    SENAO131_2012: "5722A0214300-CABLE GB1.37LL 285GRAY 1/1/3 IPEX ASSEM LFP,5722A0213300-CABLE GB1.37LL 180WHITE 1/1/3 IPEX ASSEM LFP,",
    SENAO131_2013: "",
    SENAO131_2014: "80",
    SENAO131_2015: "外箱標籤",
    SENAO131_2016: "",
    SENAO131_2017: "替代料",
    SENAO131_2018: "3318745",
    SENAO131_2019: "",
    SENAO131_2020: "3073003",
    SENAO131_2021: "",
    SENAO131_2022: "",
    SENAO131_2023: "",
    SENAO131_2024: "",
    SENAO131_2025: "",
    SENAO131_2026: "",
    SENAO131_2027: "",
    id: "1"
  }];
*/
  // 塞進 Grid
  //setGridData(0, initRow);
  /*測試用*/
  var tGrid1 = loadSavedGridData() ;//載入已存檔的Grid資料
  //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
  //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
  document.getElementById("gsenao131_2013_b1").style.display = "none";
  document.getElementById("gsenao131_2013_b2").style.display = "none";
  document.getElementById("senao131_1025").disabled = true; //新增/重拋 radio 預設disabled
  document.getElementById("btnPrint").disabled = false;

  form_org.style.backgroundColor = '#f7d9e4';
  $('#form_ou').attr('disabled', 'true');
  form_ou.style.backgroundColor = '#f7d9e4';
  if (form_ou.value == '') {
    alert("取得公司別對應有問題，請重新開單一次!!");
    window.history.go(-1);
  } else {
    hdn_ou.value = _OU[form_ou.value];
    hdn_org.value = _ORG[form_ou.value];
  }
  var tGrid1Data = getGridData(0); 
  if (typeof(tGrid1Data) != "undefined") { //判斷grid物件是否存在表單中
    if (tGrid1Data.length > 1) { //判斷Grid是否有資料
      loadSavedGridData() ; //若Grid有資料則將存於隱藏中的值載入Grid中
    }
  }
  //檢查是否可撤簽 DCC關卡簽過後，不可取回
  chkRegainable();

  iniField();
  //=====================20251008 Dex Add 預加，未來SVN會用到 START ===============================
  //20251125 Dex Add hdn_formnumber_title要注意賦值的時機點，要等CWO判斷完OU與ORG再賦值，避免表單序號對應錯誤
  hdn_formnumber_title.value = form_ou.value.toUpperCase() + "131"; //20251008 Dex 新增表單號判斷(預加，未來SVN會用到)
  //20251008 Dex Add 判斷是否隸屬廠長室 (s)
  if (form_ou.value == "svn") {
    if (isValueInSNSI003("Query_isUnderFact", $("#senao131_1004").val()) == "Y") {
      isUnderFactor.value = "Y";
    } else {
      isUnderFactor.value = "N";
    }
  }
  //20251008 Dex Add 判斷是否隸屬廠長室 (s)

  //=====================20251008  Dex Add 預加，未來SVN會用到 END ===============================

  if (formInstOID != "") { //完整顯示流程主旨
    if (document.getElementById("hdnMethod") != null) {
      if (document.getElementById("hdnMethod").value == "handleForm") {
        $("a:contains('流程主旨:')", parent.document).text("流程主旨: EBOM申請單(" + senao131_1002.innerText + ")_" + senao131_1003_1.value + "_機種:" + senao131_1014.value + ":" + note_subject.value.trim());
      }
    }
  }

  //申請直屬主管關卡後顯示不可抽單的Label
  if (activityId == "UserTask_25" || activityId == "UserTask_28" || activityId == "UserTask_59" || activityId == "UserTask_71" || activityId == "UserTask_21" || activityId == "UserTask_49" || activityId == "UserTask_23" || activityId == "UserTask_147" || activityId == "UserTask_100" || activityId == "UserTask_35" || activityId == "UserTask_87") {
      setInterval('go()', 300);
  } else {
    document.getElementById("Label89").style.display = "none";
    document.getElementById("Label90").style.display = "none";
  }

  //if(activityId=="UserTask_3" && workItemSource!="0" && workItemSource!="1" && workItemSource!="2"){
  if (workItemSource != "0" && workItemSource != "1" && workItemSource != "2") { //拿掉判斷是否為第一關
    if (hdn_Boss_isSign.value == 'Y') {
      document.getElementById("Label89").style.display = "block";
      document.getElementById("Label90").style.display = "block";
      setInterval('go()', 300);
    }
  }

  if (activityId == "UserTask_66" || activityId == "UserTask_194") { //直屬主管關卡後，不可撤銷
    hdn_Boss_isSign.value = "N"; //直屬主管已簽flag
  }

  //if(activityId == "UserTask_3"){
  $('#btnExport').prop("disabled", false);
  //}
  document.getElementById("btnImport").style.display = "none";
  document.getElementById("Link62").style.display = "none";

  if (activityId == "UserTask_3") { // 填單人關卡
    if (formInstOID != "" ) { //退回填單人時，取消勾選
    //20260106 Dex marked 暫時先marked，不然相關人員會一直反映看不到值，初步判斷不影響功能
    //senao131_1010.checked = false;
    //senao131_1015.checked = false;
    //senao131_1011.value = '';
    //senao131_1012.value = '';

    }
    $('#form_org').prop("disabled", false);
    senao131_1017_onchange();
  } else { //非填單人關卡
    if (senao131_1018.value != "") {
      alert(senao131_1018.value);
    }
    $('#senao131_1019').prop("disabled", true);
  }

  if (activityId == "UserTask_59") {
    $("#senao131_1024").prop("readOnly", false);
  }
  //update第2次拋轉資料BILLid and id	/Phoebe.20131029
  //FlowNo= 0102 二次拋轉DCC
  if (activityId == "UserTask_49") {
    alert("此次為EC第二次拋轉簽核。");
    if (tGrid1Data.length > 1) { //判斷Grid是否有資料
      AddMultiRows("I");
    }
  }
  if ((activityId == "UserTask_21" || activityId == "UserTask_71")) { //71關卡是4H-重拋EBOM
    var aryEC = senao131_1002.innerHTML.split("-");
    //var ec = "E" + right(aryEC[1],4) + "-" + aryEC[2];
    //var ec = "G" + right(serialNumber,5); //改用流程序號後5碼 //20251124 Dex marked
    //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是V(越南)
    var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
    if (tGrid1Data.length > 1) { //判斷Grid是否有資料
      AddMultiRows("V");
      AddMultiRows("GetOpcode");
      var strItemErr = ChkItemError();
      if (strItemErr != "") {
        alert(strItemErr);
      }

      if(senao131_1011.value.trim()==''){
        if(UPDATE_ECO_NUMBER()){
          senao131_1011.value = ec + "-1";
        }else{
          senao131_1011.value = ec;
        }
      }

    }
    if (workItemSource == "2") { //DCC關卡取回----不勾選attch verfied----在取回重辦情況下
      senao131_1010.checked = false;
      senao131_1015.checked = false;
      senao131_1012.value = '';
    }

  }
  if (activityId == "UserTask_23" || activityId == "UserTask_147") { //DCC主管
    //確認在Oracle中 是否有Detail的資料產生err Msg
    //利用重新reload資料將 異常欄位清空。
    if (tGrid1Data.length > 1) { //判斷Grid是否有資料
      AddMultiRows("D");
    }
    var aryEC = senao131_1002.innerHTML.split("-");
    var strEcrNo = "";
    //var strEcrNo = "E" + right(aryEC[1],4) + "-" + aryEC[2];
    if(senao131_1011.value.indexOf("-1") > -1){
      strEcrNo = senao131_1011.value;
    } else {
      //strEcrNo = "E" + right(aryEC[1],4) + "-" + aryEC[2];
      //20251224 Dex Add 配合SVN取EC號碼調整邏輯(s)
      var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
      //20251224 Dex Add 配合SVN取EC號碼調整邏輯(e)
      //strEcrNo = "G" + right(serialNumber, 5); //改用流程序號後5碼
      strEcrNo = ec; //20251224 Dex Add 新邏輯取出的EC號賦值給變數
    }
    ChkError(strEcrNo);

  }

  if (activityId != "UserTask_3") {
    getID_BillID();
  }

  $('img[title="重發新流程"]', window.parent.parent.document).hide();

  return true;
}
function frmEvent() { 
  $('#btnAdd').on('click', function () { //grid 新增
    btnAdd_onclick();
  });
  $('#btnEdit').on('click', function () { //grid 修改
    btnEdit_onclick();
  });
  $('#btnDel').on('click', function () { //grid 刪除
    btnDel_onclick();
  });
  $('#btnExport').on('click', function () { //Grid匯出Excel
    btnExport_onclick();
  });
  $('#btnPrint').on('click', function () { //列印
    btnPrint_onclick();
  });
  $('input[name="senao131_1017"]').on('change', function () { //新增/重拋 EBOM
    senao131_1017_onchange();
  });
  $('#gsenao131_2004').on('change', function () { //Assembly Level Part Number
    gsenao131_2004_onchange();
  });
  $('#gsenao131_2012').on('change', function () { //Add_Reference
    gsenao131_2012_onchange();
  });
  $('#gsenao131_2013').on('change', function () { //Delete_Reference
    gsenao131_2013_onchange();
  });
  $('#gsenao131_2013').on('blur', function () { //Delete_Reference
    gsenao131_2013_onblur();
  });
  $('#senao131_1019').on('change', function () { //**Select Method of Change
    senao131_1019_onchange();
  });
  $('#senao131_1013').on('change', function () { //Model Name
    senao131_1013_onchange();
  });
  $('#gsenao131_2006').on('change', function () { //Part Number
    gsenao131_2006_onchange();
  });
  $('#gsenao131_2012').on('blur', function () { //Add_Reference
    gsenao131_2012_onblur();
  });
  $('#gsenao131_2017').on('change', function () { //處理
    gsenao131_2017_onchange();
  });
  $('#senao131_1003').on('change', function () { //Applicant
    senao131_1003_onchange();
  });
  $('#gsenao131_2014_b').on('change', function () { //OP Code
    gsenao131_2014_b_onchange();
  });
}
function formSave(){
  var errstr = "";
  var tData = Grid1.value;
  var tGrid1Data = getGridData(0); 
  var strErrPhaseOut = "";
  var go_errstr = "";
  //inform_group.value="";//20230309 Calvin 移至下方填單人關卡
  //======================以下填單人關卡======================
  if (activityId == "UserTask_3") {
    //避免存在草稿過久，造成日期誤差
    if (formInstOID == "") {
        senao131_1007.value = systemDateTime;
    }

    if ($("#form_ou").val() == 'senao' || $("#form_ou").val() == 'svn') { //20240411 Neil //20260130 Dex Add 增加越南協助表單也要卡控急件說明
        //重要性
      if (window.parent.document.forms[0].ddlAllPrsinsLevel != null) {
        if (window.parent.document.forms[0].ddlAllPrsinsLevel.value == "DEFAULT_INS_LEVEL0000000LEVEL001") {
          if (urgentExplanation.value == "") {
            errstr += "[急件說明]不得空白\n";
          }
          if(urgentExplanation.value.substring(0, 1) == '.' || urgentExplanation.value.substring(0, 1) == ' '){
            errstr += "[急件說明]開頭不能.或空格\n";
          }
        }
      }
    }

    // if(querySNSI003_Org("SN111_S39").indexOf(senao131_1004.value) > -1){
    //     hdn_rd9.value = 'Y'; //[研發九處、16350-2、16330-1]送出需通知EC助理群組/Joyce Hsu.20160725#6605
    // }else{
    //     hdn_rd9.value = 'N';
    // }
    // if(querySNSI003_Org("SN111_S41").indexOf(senao131_1004.value) > -1){
    //     hdn_rd6.value = 'Y'; //[研發六處]送出需通知EC助理群組/Joyce Hsu.20160926
    // }else{
    //     hdn_rd6.value = 'N';
    // }
    inform_group.value = "";
    //20230209 Calvin 調整通知為疊加方式，申請單位有可能會通知多個群組
    if (querySNSI003_Org("SN111_S39").indexOf(senao131_1004.value) > -1) {
      inform_group.value += '[' + form_ou.value + ']' + 'SN111_66_EC助理通知群組(SN111S39)' + ";";
      //}else if(querySNSI003_Org("SN111_S41").indexOf(senao131_1004.value) > -1){
    }
    if (querySNSI003_Org("SN111_S41").indexOf(senao131_1004.value) > -1) {
      inform_group.value += '[' + form_ou.value + ']' + 'SN111_68_EC助理通知群組(SN111S41)' + ";";
      //}else if(querySNSI003_Org("SN111_S48").indexOf(senao131_1004.value) > -1){
    }
    if (querySNSI003_Org("SN111_S48").indexOf(senao131_1004.value) > -1) {
      inform_group.value += '[' + form_ou.value + ']' + 'SN111_77_EC助理通知群組(SN111S48)' + ";";
      //}else if(querySNSI003_Org("SN111_S49").indexOf(senao131_1004.value) > -1){
    }
    if (querySNSI003_Org("SN111_S49").indexOf(senao131_1004.value) > -1) {
      inform_group.value += '[' + form_ou.value + ']' + 'SN111_78_EC助理通知群組(SN111S49)' + ";";
    }
    // inform_group.value += "[senao]SN111_78_EC助理通知群組(SN111S49);"
    // alert(inform_group.value);

    if (senao131_1013.value.trim() == '') {
      errstr += "[ Model Name ] 不能為空!! \r\n";
    } else if (senao131_1013.value.trim() == '00') {
      if (senao131_1006.value.trim() == '') {
        errstr += "[ Other Model Name ] 不能為空!! \r\n";
      }
    }
    if (senao131_1007.value.trim() == '') {
      errstr += "[ Date of Application ] 不能為空!! \r\n";
    }
    if (senao131_1009.value.trim() == '') {
      errstr += "請填寫變更說明!! \r\n";
    }
    if (senao131_1019.value.trim() == '') {
      errstr += "請選擇 [ Select Method of Change ]!! \r\n";
    } else {
      if (senao131_1020.value.trim() == '') {
        errstr += "請選擇 < Select Modify / Don't Modify Finished Goods >!! \r\n";
      }
      if (senao131_1021.value.trim() == '') {
        errstr += "請選擇 < Select Modify / Don't Modify Semi-Finished Goods >!! \r\n";
      }
      if (senao131_1022.value.trim() == '') {
        errstr += "請選擇 < Select Do Not / OK Mix Parts in Production >!! \r\n";
      }
    }
    if (document.getElementById("Attachment_shell") == null) {
      if (senao131_1017.checked) {
        errstr += "< 重拋 EBOM 必須上傳附件 >!!!!\r\n";
      }
    }
    if (senao131_1017.checked) {
      if (senao131_1025.value.trim() == '') {
        errstr += "請選擇「新增」或「重拋」EBOM!!\r\n";
      }
    }
    if (tGrid1Data.length < 1) { //判斷Grid是否有資料
      errstr += "< 明細資料 > 不得空白!!，請確認!! \r\n";
    } else {
      errstr += IsReplicateSubItem();
    }
    var strASSM_NO = "";
    var strCOMP_NO = "";
    var strTransItemNo = "";
    if (check_needec()) {
      if (tGrid1Data.length > 0) {
        for (var i = 0; i < tGrid1Data.length; i++) {
          strASSM_NO = tGrid1Data[i]['SENAO131_2004']; //上階料號
          strCOMP_NO = tGrid1Data[i]['SENAO131_2006']; //本階料號
          if (strASSM_NO == "") {
            errstr += "< 明細資料 >-[Assembly Level Part Number]不可為空白! \r\n";
            break;
          } else {
            var tmp_str = "< 明細資料 >-[Assembly Level Part Number] : " + strASSM_NO;
            if (strCOMP_NO == "") {
              errstr += tmp_str + "的[Part Number]不可為空白! \r\n";
              break;
            } else {
              //#7096_恩嘉料號也須卡控Comment當料號前2碼01-51不可為空值/Modify by Joyce.20170505
              strTransItemNo = ItemNo_EpsToSenao(strASSM_NO);
              var tmp_snsi003_1 = "";
              var tmp_snsi003_2 = "";
              var tmp_strTransItem = strTransItemNo.substring(0, 2);
              tmp_snsi003_1 = querySNSI003_Org("SN111_S03");
              tmp_snsi003_2 = querySNSI003_Org("SN111_S04");

              if (tmp_strTransItem * 1 >= tmp_snsi003_1 * 1 && tmp_strTransItem * 1 <= tmp_snsi003_2 * 1) {
                if (tGrid1Data[i]['SENAO131_2015'] == "") {
                  errstr += "前2碼為" + tmp_snsi003_1 + "~" + tmp_snsi003_2 + "的[Comment]不可為空白! \r\n";
                }
              }
              //判斷料號是否為PhaseOut料件
              var strPhaseOut = ChkPhaseOut(tGrid1Data[i]['SENAO131_2006']);
              if (tGrid1Data[i]['SENAO131_2008'] * 1 != 0 && tGrid1Data[i]['SENAO131_2010'] * 1 == 0) {
                if (strPhaseOut != "" && (left(strPhaseOut, 1) == "D" || left(strPhaseOut, 1) == "L") || left(strPhaseOut, 1) == "O") {
                  strErrPhaseOut = strErrPhaseOut + "  " + tGrid1Data[i]['SENAO131_2006'] + "\r\n";
                }
              }
              if (left(tGrid1Data[i]['SENAO131_2012'], 1) != "*") {
                var strPhaseOut1 = ChkPhaseOut(tGrid1Data[i]['SENAO131_2012']);
                if (strPhaseOut1 != "" && (left(strPhaseOut1, 1) == "D" || left(strPhaseOut1, 1) == "L" || left(strPhaseOut1, 1) == "O")) {
                  strErrPhaseOut = strErrPhaseOut + "  " + tGrid1Data[i]['SENAO131_2012'] + "\r\n";
                }
              }
            }
              if ("0;1".indexOf(left(tGrid1Data[i]['SENAO131_2004'], 1)) <= -1 && left(tGrid1Data[i]['SENAO131_2004'], 2) != "51" && left(tGrid1Data[i]['SENAO131_2004'], 2) != "BB" && left(tGrid1Data[i]['SENAO131_2004'], 2) != "BE" && left(tGrid1Data[i]['SENAO131_2004'], 2) != "BH" && left(tGrid1Data[i]['SENAO131_2004'], 2) != "ML" && left(tGrid1Data[i]['SENAO131_2004'], 2) != "GB" && tGrid1Data[i]['SENAO131_2006'] != "替代料") {
                if (tGrid1Data[i]['SENAO131_2012'] != "" && tGrid1Data[i]['SENAO131_2008'] * 1 == 0) {
                  errstr += tmp_str + " 的[Add Quantity]不可為0! \r\n";
                  break;
                }
                if (tGrid1Data[i]['SENAO131_2013'] != "" && tGrid1Data[i]['SENAO131_2009'] * 1 == 0) {
                  errstr += tmp_str + " 的[Delete Quantity]不可為0! \r\n";
                  break;
                }
              }
              if (tGrid1Data[i]['SENAO131_2017'] == "Disable" && tGrid1Data[i]['SENAO131_2010'] * 1 == 0) {
                errstr += tmp_str + " 沒有 " + tGrid1Data[i]['SENAO131_2006'] + "這顆料件，因此不需申請刪除! \r\n";
                break;
              }
              var strType = tGrid1Data[i]['SENAO131_2017']; //處理
              var strADD = tGrid1Data[i]['SENAO131_2012']; //add reference
              var strDEL = tGrid1Data[i]['SENAO131_2013']; //delete reference
              var strID = tGrid1Data[i]['SENAO131_2018'];
              if (strType == "") {
                errstr += tmp_str + "的[處理]不可為空白! \r\n";
                break;
              } else {
                if (strADD == "" && strDEL == "") {
                  //comment 為「替代料」時，可不用輸入增刪值。
                  if (strType != "Disable") {
                    errstr += tmp_str + "的[Add Reference]、[Delete Reference]不可都是空白! \r\n";
                    break;
                  }
                } else {
                  if (strType == "替代料") {
                    if (strADD != "") {
                      //check替代料在Oracle料號主檔是否存在
                      var aryRtn = IsNotOracleItem(strADD, strASSM_NO, strCOMP_NO);
                      //alert("IsNotOracleItem Function回傳值驗證 : "+aryRtn);
                      if (aryRtn[0]) {
                        errstr += tmp_str + "的Oracle[替代料]" + aryRtn[1] + "在Oracle不存在 \r\n";
                        break;
                      } else {
                        //已存在主BOM下的料，不可申請為替代料
                        if (IsExistBom(strADD, strASSM_NO, tGrid1Data[i]['SENAO131_2027'], i)) { //(11)Add Reference (2)Assembly Level Part Number
                          errstr += tmp_str + "的Oracle[替代料]" + strADD + "已存在BOM表中，不允許申請為替代料! \r\n";
                          break;
                        } else {
                          //料號存在 check 不可重覆申請替代料
                          var aryResult = IsExistStituteItem(strADD, strID);
                          if (aryResult[0] == true) {
                            errstr += tmp_str + "的Oracle[替代料]" + aryResult[1] + "不可重覆申請!! \r\n";
                          }
                        }
                      }
                    }
                    //check刪除的替代料在oracle中是否存在
                    if (strDEL != "") {
                      var aryResult = IsExistStituteItem(strDEL, strID);
                      if (aryResult[0] == false) {
                        errstr += tmp_str + "的Oracle[替代料]" + aryResult[1] + ",在Oracle不存在!!\r\n";
                      }
                    }
                    //若為替代料，替代數不可超過9個。
                    var EfCntSubStitute = GetChangeQty(strADD) - GetChangeQty(strDEL);
                    var OracleCntSubStitute = GetOracleCntSubStitute(strID);
                    if ((OracleCntSubStitute * 1 + EfCntSubStitute * 1) > 9) {
                      errstr += tmp_str + "的Oracle[替代料]已存在(" + OracleCntSubStitute + ")個! \r\n";
                      errstr += "　　EasyFlow申請新增的[替代料]不可超過(" + 9 - OracleCntSubStitute + ")個! \r\n";
                    }
                  }
                }
              }
              if (tGrid1Data[i]['SENAO131_2010'] * 1 < 0) {
                errstr += tmp_str + "的[Total Quantity After Change]不得小於0 !! \r\n";
              }
              if (CHK_ECO_DATE_ERR()) {
                errstr += "ECO主替代料資料異常，請重新輸入新增主料資料!! \r\n";
              }
          }
          //比對目前簽核中的單身資料 -- 不可重覆申請
          errstr += ChkProcessingData(strASSM_NO, strCOMP_NO);
          //傳送表單判斷不可重複申請2相同的上階 + 本階 資料
          errstr += ChkDuplicateData(strASSM_NO, strCOMP_NO, strType, i);
          //判斷Billid為空時，新增插件位置是否在表單中有重複
          if (strADD != "" && left(strADD, 1) != "*" && strType == "非替代料") {
            errstr += ChkDuplicateAddRefData(strASSM_NO, strADD, strType, i);
          }
          if (tGrid1Data[i]['SENAO131_2027'] == "ECO-2") {
            var strDeleted = bln_COMP_Deleted(strASSM_NO, strCOMP_NO);
            if (strDeleted.length > 2) {
              if (left(strDeleted, 1) == "N") {
                errstr += tGrid1Data[i]['SENAO131_2004'] + "-" + tGrid1Data[i]['SENAO131_2006'] + " : 替代料變更為主料前，請申請將原主料(" + strDeleted.substr(2, strDeleted.length - 2) + ")刪除!!\r\n";
              }
              //新增替代料時,判斷是否申請新增主料/Phoebe.20131024
              if (tGrid1Data[i]['SENAO131_2017'] == "替代料") {
                var blnCOMPONENT = bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, "");
                if (!blnCOMPONENT) {
                  errstr += tGrid1Data[i]['SENAO131_2004'] + "-" + tGrid1Data[i]['SENAO131_2006'] + " : 替代料新增之前，請申請新增主料!!\r\n";
                }
              }
            } else if (strDeleted.length == 2) {
              var ary = strADD.split(",");
              for (var k = 0; k < ary.length - 1; k++) {
                strDeleted = bln_BOM_COMP_Deleted(strASSM_NO, left(ary[k], 12), i);
                if (left(strDeleted, 1) == "N") {
                  errstr += tGrid1Data[i]['SENAO131_2004'] + "-" + tGrid1Data[i]['SENAO131_2006'] + " : 替代料變更為主料前，請申請將原主料(" + left(ary[k], 12) + ")刪除!!\r\n";
                }
              }
              //新增替代料時,判斷是否申請新增主料/Phoebe.20131230
              if (tGrid1Data[i]['SENAO131_2017'] == "替代料") {
                var blnCOMPONENT = bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, "NEWBOM");
                if (!blnCOMPONENT) {
                  errstr += tGrid1Data[i]['SENAO131_2004'] + "-" + tGrid1Data[i]['SENAO131_2006'] + " : 替代料新增之前，請申請新增主料!!\r\n";
                }
              }
            }
          }
        }
      }
    } else {
      if (tGrid1Data.length > 0) {
        for (var i = 0; i < tGrid1Data.length; i++) {
          strASSM_NO = tGrid1Data[i]['SENAO131_2004']; //上階料號
          if (strASSM_NO == "") {
            errstr += "[明細資料]-[Assembly Level Part Number]不可為空白!\r\n";
          }
          if (isWIPRelease(strASSM_NO)) {
            //errstr += "此EC內之上階料號 "+strASSM_NO+ " 已試作發料，請提供差異表!!\r\n";
            go_errstr += "此EC內之上階料號 " + strASSM_NO + " 已試作發料，請提供差異表!!\r\n";
          }
        }
      }
    }
    //重拋 EBOM不需填寫表單附件資料/Phoebe.20100923
    if (check_needec()) {
      if (strErrPhaseOut != "") {
        errstr += "以下料件不可使用，請改用其他替代料：\r\n" + strErrPhaseOut;
      }
      if (tGrid1Data.length > 0) {
        AddMultiRows("C");
      }
    }
    //提醒是否有X,W料號需做EC/Phoebe.20111012
    MsgboxEC_XItem();
    if (senao131_1018.value != "") {
      alert(senao131_1018.value);
    }
    //if(senao131_1004.value!='15332' && senao131_1004.value!='15333' && senao131_1004.value!='15335'){
    if (querySNSI003_Org("SN111_S18").indexOf(senao131_1004.value) == -1) { //機構一二三課申請，不需簽ME關卡
      if (tGrid1Data.length > 0) {
        for (var i = 0; i < tGrid1Data.length; i++) {
          if (IS_ME_MTL(tGrid1Data[i]['SENAO131_2006'])) {
            hdn_me_mtl.value = 'Y';
            break;
          } else {
            hdn_me_mtl.value = 'N';
          }
        }
      }
    }
    //填單人關卡選填重要性
    //DEFAULT_INS_LEVEL0000000LEVEL001 : 緊急
    //DEFAULT_INS_LEVEL0000000LEVEL002 : 一般
    //DEFAULT_INS_LEVEL0000000LEVEL003 : 低
    if (typeof(window.parent.document.forms[0].ddlAllPrsinsLevel) != "undefined") {
      if (window.parent.document.forms[0].ddlAllPrsinsLevel.value == "DEFAULT_INS_LEVEL0000000LEVEL001") { //重要性:緊急
        hdn_alertHour.value = "2";
      } else {
        hdn_alertHour.value = "4";
      }
    }
    //20231206 Steve [SENAO10100004946] 當填單人員為16C00 運算網路研發部時,針對附件進行卡控
    if (senao131_1004.value == '16C00') {
      if (checFileWithFileName('')) {}
      else {
        errstr += ('填單人為運算網路研發部時必須上傳線路圖和change list:\r\n' +
          '1. Stage_Project Name_Board Name_SCH File.pdf\r\n' +
          '2. Stage_Project Name_ Board Name _Change List.xlsx\r\n' +
          '--Stage: S2/S3/S5\r\n' +
          '--Project Name: 專案名稱\r\n' +
          '--Board Name: MB/LED Board/Power Board/Fan Board/…');
      }
    }

  }
  //======================以上填單人關卡======================
  //任一關卡

  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2004'] == "") {
        errstr += "第" + (i + 1) + "筆Assembly Level Part Number，空白，請退回填單人重新填寫!!\r\n";
      }
      if (tGrid1Data[i]['SENAO131_2005'] == "") {
        errstr += "第" + (i + 1) + "筆Assembly Level Part's Name，空白，請退回填單人重新填寫!!\r\n";
      }
      if (!senao131_1017.checked) {
        if (tGrid1Data[i]['SENAO131_2006'] == "") {
          errstr += "第" + (i + 1) + "筆Part Number，空白，請退回填單人重新填寫!!\r\n";
        }
        if (tGrid1Data[i]['SENAO131_2007'] == "") {
          errstr += "第" + (i + 1) + "筆Part's Name，空白，請退回填單人重新填寫!!\r\n";
        }
      }
    }
  }
  //======================PMC簽核人員關卡======================
  if (activityId == "UserTask_59") {
    if (senao131_1019.value == '2' && senao131_1023.value == "") { //用盡變更
      errstr += "物管人員請選擇用盡日[Date]!!\r\n";
    }
    if (senao131_1019.value == '6') {
      if (senao131_1024.value == "") { //By 工單變更
        errstr += "物管人員請輸入[Production Order]!!\r\n";
      } else {
        if (senao131_1024.value.trim().length < 12 && senao131_1024.value != "NA") {
          errstr += "[Production Order]欄位需大於12碼，若無工單請填 NA !!! \r\n";
        }
      }
    }
  }
  //======================PMC簽核人員關卡======================

  //======================DCC_1人員關卡======================
  if (activityId == "UserTask_21" || activityId == "UserTask_71") { //71關卡是4H-重拋EBOM
    //判斷新增插件位置或刪除插件位置是否重複
    var strChkSNENG = IsReplicateSubItem();
    if (strChkSNENG != "") {
      errstr += strChkSNENG;
    }
    var strSheetNoByVerion = "";
    var aryGetCOMPID = new Array();
    if (check_needec()) {
      if (tGrid1Data.length > 0) {
        for (var i = 0; i < tGrid1Data.length; i++) {
          if (tGrid1Data[i]['SENAO131_2014'] == "") {
            errstr += "[明細資料] - [Assembly Level Part Number]:" + tGrid1Data[i]['SENAO131_2004'] + "請填寫[OP_CODE]! \r\n";
          }
          strSheetNoByVerion = GetSheetNoByVerion(tGrid1Data[i]['SENAO131_2004']);
          if (strSheetNoByVerion != "") {
            errstr += "[明細資料] - [Assembly Level Part Number]:" + tGrid1Data[i]['SENAO131_2004'] + " 尚有表單(" + strSheetNoByVerion + ")在DCC主管關號處理，不允申簽核。\r\n";
          }
          aryGetCOMPID = GET_COMPONENT_ID_QTY(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
          if ((tGrid1Data[i]['SENAO131_2018'] != aryGetCOMPID[0]) || (tGrid1Data[i]['SENAO131_2010'] != aryGetCOMPID[1])) {
            errstr += "[明細資料] - [Assembly Level Part Number]:" + tGrid1Data[i]['SENAO131_2004'] + "的" + tGrid1Data[i]['SENAO131_2006'] + " 與BOM資料不符,請確認!!\r\n";
          }
        }
      }
    }
    if (!senao131_1010.checked) {
      errstr += "請確認 [Attachment Verified]。並勾選。\r\n";
    }
    var strItemErr = "";
    strItemErr = ChkItemError();
    if (strItemErr != "") {
      errstr += strItemErr;
    }
    //檢查單號，是不是存在Oracle中，若是的話，就不可送簽出去
    //因為撤簽時，Oracle的程式會先將要撤簽的資料移除
    //若沒有等待資料移除就再把新的資料送過來，會造成資料異常問題。
    var tParm = new Array();
    tParm.push(senao131_1011.value);
    var pData = ajaxGetData(invokeURL + "BPM_ERP_SENAO131_14", {
      senao131_1011:tParm[0]
    }) 
    if(pData[0].result == undefined){
      if (pData.length > 0){
        if (pData[0].CNT * 1 > 0) {
          errstr += "Oracle中已有資料，請稍後再簽核。\r\n";
        }
      }
    }else{
      console.log("function:"+"formSave" + " API:" + "BPM_ERP_SENAO131_14 "+pData[0].result);
    }
    var tParm2 = new Array();
    tParm2.push(senao131_1011.value);
    var pData2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO131_15", {
      senao131_1011:tParm[0]
    }) 
    if(pData2[0].result == undefined){
      if (pData2.length > 0){
        if (pData2[0].CNT * 1 > 0) {
          errstr += "Oracle中已有資料，請稍後再簽核。\r\n";
        }
      }
    }else{
      console.log("function:"+"formSave" + " API:" + "BPM_ERP_SENAO131_15 "+pData2[0].result);
    }

    if (!check_needec()) {
      if (document.getElementById("Attachment_shell") == null) {
        if (senao131_1017.checked) {
          errstr += "< 重拋 EBOM 必須上傳附件 >!!!!\r\n";
        }
      }
    }
    //判斷是否有替代料同時變更為主料/Phoebe.20131029 簽第二次DCC
    hdn_dcc2.value = isNeedDCC2();

    //errstr += checkOPEN_ECO(); 未啟用
    if (!senao131_1017.checked) {
      errstr += checkOP_Code();
    }
  }
  //======================以上為DCC_1關卡============================
  if (activityId == "UserTask_71") {
    hasDoneAttached();
    if (!doAtt) {
      errstr += "< 重拋 EBOM 必須上傳附件 >!!!!\r\n";
    }
  }

  var strECNumber = "";
  //===========================DCC_2關卡(hdn_dcc2.value=='Y')=======
  if (activityId == "UserTask_49") {
    if (!check_needec()) {}
    else {
      strECNumber = senao131_1011.value;
      if (IsImplementSuccess(strECNumber)) {}
      else {
        errstr += "Oracle (ECO Number:" + strECNumber + ")尚未Implement 成功，請確定Implement 成功再做簽核動作，謝謝! \r\n";
      }
    }
  }
  //======================以上為DCC_2關卡============================

  //======================DCC主管關卡================================
  if (activityId == "UserTask_23" || activityId == "UserTask_147") {
    if (!senao131_1015.checked) {
      errstr += "請確認 [BOM Modified] 並勾選。\r\n";
    }
    if (check_needec()) {
      var aryEC = senao131_1002.innerHTML.split("-");
      //var ec = "E" + right(aryEC[1],4) + "-" + aryEC[2];
      //20251124 Dex Add 前面已經使用OU判斷ec_number_flag，不再需要用OU判斷一次，新增ec_number_flag判斷是G(台灣)還是N(越南)、抑或是S恩睿
      var ec = "";
      var lastnum = "";
      ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
      //20251125 Dex marked(s)
      //if(form_ou.value=='senao'){ //神準
      //    ec = "G" + lastnum; //改用流程序號後5碼
      //}else if(form_ou.value=='enr'){ //恩睿
      //    ec = "S" + lastnum; //改用流程序號後5碼
      //}else{
      //    errstr += '無法辨識ECO Number，請與MIS聯絡!!\r\n';
      //}
      //20251125 Dex marked(e)
      if(senao131_1011.value.indexOf("-1") > -1){
        strECNumber = ec + "-2";
      } else {
        strECNumber = ec;
      }
      if (IsImplementSuccess(strECNumber)) {}
      else {
        errstr += "Oracle (ECO Number:" + strECNumber + ")尚未Implement 成功，請確定Implement 成功再做簽核動作，謝謝! \r\n";
      }

    }
  }
  //======================以上DCC主管關卡============================

  //最後關卡結案時系統帶入Effective Date
  if (activityId == "UserTask_35" || activityId == "UserTask_87") {
    senao131_1008.value = systemDateTime;
  }

  //塞入流程變數formserialnumber
  if (errstr == '') {
    //[ DCC ] ,[ DCC 4H ] , [ DCC2 ], [ DCC Manager ] 4個關卡 + [主管關卡]
    if (activityId == "UserTask_21" || activityId == "UserTask_71" || activityId == "UserTask_29" || activityId == "UserTask_23" || activityId == "UserTask_147" || activityId == "UserTask_66" || activityId == "UserTask_194") {
      //assign表單單號到流程變數formserialnumber去，給呼叫JSP用
      if (senao131_1002.innerHTML != "undefined") {
        TempString = new String(senao131_1002.innerHTML);
        /*DWREngine.setAsync(false);
        ajax_ProcessAccessor.assignRelevantData(processInstOID, "formserialnumber", TempString);
        DWREngine.setAsync(true);*/
      } else {
        errstr += '取得流程變數-單號有誤，請洽MIS!!\n';
      }
    }
  }
  if (activityId == "UserTask_66" || activityId == "UserTask_194") { //主管關卡後，不可撤銷
    if (errstr == '') {
      var sqlid = "BPM_UpdateProcessAbortable";
      var tParams = new Array();
      tParams.push(SERIALNUMBER);
      var pData = ajaxGetData(invokeURL + sqlid, {
        SERIALNUMBER:tParams[0]
      }) 
      if(pData[0].result == 'ok'){
      }else{
        console.log("function:"+"formsave" + " API:" + sqlid +pData[0].result);
        return false;
      }
      hdn_Boss_isSign.value = "Y";
    }
  }

  if (activityId == "UserTask_3") {
    if (errstr == '') {
      if (go_errstr != '') {
        alert(go_errstr);
        if (confirm("是否要繼續送出?")) {}
        else {
          return false;
        }
      }
    }
  }
  
  if (errstr == '') {
    if (typeof(Grid1Obj) != "undefined") { //判斷grid物件是否存在表單中
      document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
      clearBinding(0); 
      if (Grid1.value == "" || Grid1.value == "[]") {
        alert("單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請退回填單人重新填寫, 謝謝!");
        return false;
      }
    }
    return true;
  } else {
    alert(errstr);
    return false;
  }
  /*
  if (errstr == '') {
  if (typeof (Grid1Obj) != "undefined") {  //判斷grid物件是否存在表單中
  document.getElementById("Grid1").value = Grid1Obj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中
  Grid1Obj.clearBinding();
  }
  return true;
  } else {
  alert(errstr);
  return false;
  }*/
  //return true;
}
function formClose() {
	return true;
}
/*---------------------Form Load Function End--------------*/
/*---------------------公用Function Start--------------*/
function frmGeneralLoad(type, today) {
  //通用需要載入的資料
  //設定公司 OU ORG 
  setCompanyObject();
  //設定公司別
  setSelectDefalut("form_ou", apiInvoke + "BPM_COMPANY_INFO_LIST", {}, "");
  //form_ou.disabled = true;//公司別鎖定下拉選項
  $('#form_ou').val('senao');
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  senao131_1007.value = today; //填表日期
  //表單代號
  $('#senao131_1001').val(type);
  $('#senao131_1001').attr('disabled', 'true');

  console.log($("#form_ou").val());
  OU_ID = _OU[$("#form_ou").val()];
  ORG_ID = _ORG[$("#form_org").val()];
  return true;
}
function showCurrentDate() {//取得今天日期
  var result = "";
  var d = new Date();
  result = d.getUTCFullYear() + '/' + pad(d.getUTCMonth() + 1) + '/' + pad(d.getUTCDate());
  //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
  return result;
}
function pad(number) {//日期補0
  let r = String(number);
  if (r.length == 1) {
      r = "0" + r;
  }
  return r;
}
//20251118 Dillan 調整，再新增前先清空
//20251124 Dex fix
/**
 * 20251124 重新設定OU、ORG
 */
function getFacInfo_CW() {
  document.getElementById("form_org").innerHTML = "";//刪除目前ORG選項
  form_ou.value = "svn"; //因為勾選，所以設為SVN的OU
  getFacInfo(form_ou.value); //重新抓ORG
  setCompanyObject(); //設定ORG值
  hdn_org.value = _ORG[form_org.value];
  hdn_ou.value = _OU[form_ou.value];
}
function iniField() {
  //20251124 Dex Add 新增流程ID判斷，判斷CW流程要設定的邏輯 (s)
  var isCWO048Process = (typeof processId !== "undefined" && processId == "CWO131");
  if (isCWO048Process) {
    // 只要為 CW048 流程就顯示 ForSVN，並鎖定為 Y、不可被操作
    $("input[name='ForSVN']").css('display', "");
    $("label[for='ForSVN_0'], label[for='ForSVN']").css('display', "");
    $("input[name='ForSVN']").attr('disabled', true);
    $("input[name='ForSVN']").attr('checked', true);
    forSVN[0].value = "Y";
    getFacInfo_CW();
    //ec_number_flag = "N"; //20260327 Dex marked
    ec_number_flag = "Y"; //20260327 [SENAO10100012142]唐珍要求改以"Y"開頭避免於Oracle ECO恩睿的MBOM EC編號開頭"N"重疊
  } else {
    // 其他流程一律隱藏 ForSVN，並維持預設 N
    $("input[name='ForSVN']").css('display', "none");
    $("label[for='ForSVN_0'], label[for='ForSVN']").css('display', "none");
    $("input[name='ForSVN']").attr('disabled', true);
    $("input[name='ForSVN']").attr('checked', false);
    forSVN[0].value = "N";
    if (form_ou.value == "senao") {
      ec_number_flag = "G";
    } else if (form_ou.value == "enr") {
      ec_number_flag = "S";
    }
  }
  //20251124 Dex Add 新增流程ID判斷，判斷CW流程要設定的邏輯 (e)
  $("#gsenao131_2005").prop("readOnly", true);
  $("#gsenao131_2006").prop("readOnly", false);
  document.getElementById("gsenao131_2006_b1").disabled = false;
  $("#gsenao131_2007").prop("readOnly", true); //d
  $('#gsenao131_2017').prop("disabled", false);
  $("#gsenao131_2019").prop("readOnly", true);//d
  $("#gsenao131_2008").prop("readOnly", true); // add qty
  $("#gsenao131_2009").prop("readOnly", true); // del qty
  $("#gsenao131_2010").prop("readOnly", true);//d
  $("#gsenao131_2011").prop("readOnly", true);//d
  $("#gsenao131_2012").prop("readOnly", false);
  document.getElementById("gsenao131_2012_b1").disabled = false;
  $("#gsenao131_2013").prop("readOnly", false);
  document.getElementById("gsenao131_2013_b1").disabled = false;
  document.getElementById("gsenao131_2013_b2").disabled = false;
  $("#gsenao131_2014").prop("readOnly", true);//d
  document.getElementById("gsenao131_2014_b").disabled = false;
  $("#gsenao131_2015").prop("readOnly", true);//d
  $("#gsenao131_2021").prop("readOnly", true);//d
  $("#gsenao131_2022").prop("readOnly", true);//d
  $("#gsenao131_2023").prop("readOnly", true);//d
  $("#gsenao131_2024").prop("readOnly", true);//d
  $("#gsenao131_2026").prop("readOnly", true);//d
  $("#gsenao131_2027").prop("readOnly", true);//d
  if (activityId != 'UserTask_3') {
    $("#gsenao131_2005").prop("readOnly", true); //d
    $("#gsenao131_2006").prop("readOnly", true);
    document.getElementById("gsenao131_2006_b1").disabled = true;
    $("#gsenao131_2007").prop("readOnly", true); //d
    $('#gsenao131_2017').prop("disabled", true);
    $("#gsenao131_2019").prop("readOnly", true);//d
    $("#gsenao131_2008").prop("readOnly", true);
    $("#gsenao131_2009").prop("readOnly", true);
    $("#gsenao131_2010").prop("readOnly", true); //d
    $("#gsenao131_2011").prop("readOnly", true); //d
    $("#gsenao131_2011").prop("readOnly", true);
    $("#gsenao131_2012").prop("readOnly", true);
    document.getElementById("gsenao131_2012_b1").disabled = true;
    $("#gsenao131_2013").prop("readOnly", true);
    $('#gsenao131_2013').prop("disabled", true);
    document.getElementById("gsenao131_2013_b1").disabled = true;
    document.getElementById("gsenao131_2013_b2").disabled = true;
    $("#gsenao131_2014").prop("readOnly", true); //d
    $("#gsenao131_2015").prop("readOnly", true); //d
    $("#gsenao131_2021").prop("readOnly", true); //d
    $("#gsenao131_2022").prop("readOnly", true); //d
    $("#gsenao131_2023").prop("readOnly", true); //d
    $("#gsenao131_2024").prop("readOnly", true); //d
    $("#gsenao131_2026").prop("readOnly", true); //d
    $("#gsenao131_2027").prop("readOnly", true); //d
    //DCC跟DCC主管關卡，只有下拉OP CODE可以使用
    if (activityId == "UserTask_21" || activityId == "UserTask_71" || activityId == "UserTask_49" || activityId == "UserTask_23" || activityId == "UserTask_147") { //71關卡是4H-重拋EBOM
      document.getElementById("gsenao131_2014_b").disabled = false;
    } else {
      document.getElementById("gsenao131_2014_b").disabled = true;
    }
  }
}
/** 20251008 Dex Add
 * 搜尋某值是否在設定檔當中
 * @param {string} snsiId
 * @param {string} value
 * @returns result "Y" or "N"
 */
function isValueInSNSI003(snsiId, value) {
  var result = "N";
  if (value !== "" && snsiId !== "") {
    if (querySNSI003_Org(snsiId).search(value) > -1) {
      result = "Y";
    }
  }
  return result;
}
//*********************************************************************
// 程序: AddMultiRows(RtnType)
// 說明: 更新版本資料 (不包含Excel上傳，Excel上傳獨立)
//*********************************************************************
function AddMultiRows(RtnType) {
  var tGrid1Data = getGridData(0); 
  if (tGrid1Data.length > 0) {
    if (RtnType == "D") { //DCC
      for (var i = 0; i < tGrid1Data.length; i++) {
        tGrid1Data[i]['SENAO131_2016'] = ""; //將異常設為default-->""
        tGrid1Data[i]['SENAO131_2019'] = GetVerion(tGrid1Data[i]['SENAO131_2004']); //取得版本
      }
      setGridData(0, tGrid1Data);
    } else if (RtnType == "C") { //Copy
      for (var i = 0; i < tGrid1Data.length; i++) {
        //異常
        tGrid1Data[i]['SENAO131_2016'] = ""; //將異常設為default-->""
        //版本
        tGrid1Data[i]['SENAO131_2019'] = "";
        //變更前數量
        tGrid1Data[i]['SENAO131_2010'] = GetCOMPQty(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
        //變更後數量
        tGrid1Data[i]['SENAO131_2011'] = (tGrid1Data[i]['SENAO131_2010'] * 1 + (tGrid1Data[i]['SENAO131_2008'] * 1 - tGrid1Data[i]['SENAO131_2009'] * 1)).toFixed(6);
        //OP_VALUE
        tGrid1Data[i]['SENAO131_2014'] = GetOP_CODE(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
        if (tGrid1Data[i]['SENAO131_2014'] == "") {
          var tParm3 = new Array();
          tParm3.push(tGrid1Data[i]['SENAO131_2004']);
          tParm3.push(hdn_org.value);
          var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_37_Org", {
            SENAO131_2004 : tParm3[0],
            hdn_org : tParm3[1]
          });
          if(dataArray[0].result == undefined){
            if(dataArray.length>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
              tGrid1Data[i]['SENAO131_2014'] = pData3[0].OP_CODE; //OP_CODE
            } else {
              tGrid1Data[i]['SENAO131_2014'] = "1";
            }
          }else{
            console.log("function:"+"AddMultiRows" + " API:" + "BPM_ERP_SENAO131_37_Org "+ dataArray[0].result);
            return false;
          }
        }
        //ID
        tGrid1Data[i]['SENAO131_2018'] = GetID(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
        //BILLid
        tGrid1Data[i]['SENAO131_2020'] = GetBILLID(tGrid1Data[i]['SENAO131_2004']);
        //庫存數
        if (tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
          tGrid1Data[i]['SENAO131_2021'] = onhand_QTY(tGrid1Data[i]['SENAO131_2006']);
        } else {
          tGrid1Data[i]['SENAO131_2021'] = "";
        }
        //在途PR數
        if (tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
          tGrid1Data[i]['SENAO131_2022'] = REQ_QTY(tGrid1Data[i]['SENAO131_2006']);
        } else {
          tGrid1Data[i]['SENAO131_2022'] = "";
        }
        //在途PO數
        if (tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
          tGrid1Data[i]['SENAO131_2023'] = PO_QTY(tGrid1Data[i]['SENAO131_2006']);
        } else {
          tGrid1Data[i]['SENAO131_2023'] = "";
        }
        //待驗數
        if (tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
          tGrid1Data[i]['SENAO131_2024'] = RECEIVING_QTY(tGrid1Data[i]['SENAO131_2006']);
        } else {
          tGrid1Data[i]['SENAO131_2024'] = "";
        }
        //使用機種
        if (tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
          tGrid1Data[i]['SENAO131_2026'] = BOM_COMP_QUANTITIES(tGrid1Data[i]['SENAO131_2006'], tGrid1Data[i]['SENAO131_2004']);
        } else {
          tGrid1Data[i]['SENAO131_2026'] = "";
        }
      }
      setGridData(0, tGrid1Data);
    } else if (RtnType == "V") { //Version
      for (var i = 0; i < tGrid1Data.length; i++) {
        tGrid1Data[i]['SENAO131_2019'] = GetVerion(tGrid1Data[i]['SENAO131_2004']); //取得版本
      }
      setGridData(0, tGrid1Data);
    } else if (RtnType == "I") { //UPDATE Bill_ID and Component_ID/Phoebe.20131029
      for (var i = 0; i < tGrid1Data.length; i++) {
        if (tGrid1Data[i]['SENAO131_2027'] != "") {
          tGrid1Data[i]['SENAO131_2018'] = GetID(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
          tGrid1Data[i]['SENAO131_2017'] = GetBILLID(tGrid1Data[i]['SENAO131_2004']);
        }
      }
      setGridData(0, tGrid1Data);
    } else if (RtnType == "GetOpcode") { ////重抓OPCode
      for (var i = 0; i < tGrid1Data.length; i++) {
        tGrid1Data[i]['SENAO131_2014'] = GetOP_CODE(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
      }
      setGridData(0, tGrid1Data);
    }
    document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
    //Grid1Obj.reload(eval(tGrid1Data));
  }
}
/** 20251224 Dex Add
 * 產生ECR/ECN Number，SVN與SENAO邏輯不同，所以用共用function判斷
 * SENAO	->G+流程序號末5碼
 * SVN		->V+50續編
 */
function genCR_CN_No(){
	var lastnum = "";
	var ec = "";
	if (ec_number_flag == "G" || ec_number_flag == "S" || ec_number_flag == "Y") {
    lastnum = right(SERIALNUMBER, 5); //台灣神準與ENR直接取process後五碼就好 //20260306 Dex Add 與唐珍確認越南一樣取末五碼
    ec = ec_number_flag + lastnum; 
  } else {
    errstr += '無法辨識ECO Number，請與MIS聯絡!!\r\n';
    ec = errstr; 
  }
	return ec;
}
function check_needec() {
  if (senao131_1017.checked) {
    isNeedEC = false;
  } else {
    isNeedEC = true;
  }
  return isNeedEC;
}
function after_senao131_1013_b1() {
  if (senao131_1013.value == "NA") {
    senao131_1013.value = "00";
    $('#senao131_1006').prop("disabled", false);
  } else {
    senao131_1006.value = "";
    $('#senao131_1006').prop("disabled", true);
  }
  return true;
}
function after_gsenao131_2004_b1() {
  gsenao131_2004_onchange();
  return true;
}
function ReplaceSQM(str) {
  str = str.trim().replace(/\'/g, "''");
  str = str.replace(/\t/g, ""); //tab
  str = str.replace(/\r/g, ""); //換行
  str = str.replace(/\n/g, ""); //換行
  return str;
}
function ClearGridActionRowData(strYesNO) {
  //不需新增本階時，才把上階也清掉
  if (strYesNO == "006") {
    gsenao131_2006.value = "";
  }
  if (strYesNO != "012") {
    gsenao131_2007.value = "";
    gsenao131_2010.value = 0;
    gsenao131_2013.value = ""; //刪
    gsenao131_2014.value = ""; //OP_CODE
    gsenao131_2015.value = ""; //COMMENT
    gsenao131_2018.value = ""; //id
  }
  gsenao131_2012.value = ""; //增
}
function CalculateTotalQty() {
  //替代料 & 不需EC
  if (gsenao131_2017.value != "非替代料") {
    //將增加數/刪除數/歸0
    gsenao131_2008.value = 0;
    gsenao131_2009.value = 0;
    gsenao131_2011.value = gsenao131_2010.value;
    //Disabled 的料號需將變更後設為0, 刪除數 = 變更前數
    if (gsenao131_2017.value.toUpperCase() == "DISABLE") {
      gsenao131_2009.value = gsenao131_2010.value;
      gsenao131_2011.value = 0;
      //組出所有的插件資料帶入 senao131_2013
      gsenao131_2013.value = GetDisableRef(gsenao131_2004.value, gsenao131_2006.value);
    }
  } else {
    setGridInitData();
    if (!isNaN(gsenao131_2008.value) && !isNaN(gsenao131_2009.value) && !isNaN(gsenao131_2010.value)) {
      //gsenao131_2011.value = ((gsenao131_2010.value*1 + gsenao131_2008.value*1) - gsenao131_2009.value*1).toFixed(6);
      gsenao131_2011.value = FloatSubtraction((FloatAdd((gsenao131_2010.value * 1), (gsenao131_2008.value * 1))), (gsenao131_2009.value * 1));
      if (gsenao131_2011.value * 1 < 0) {
        alert("[Total Quantity After Change]不得小於0, 請重新輸入[Add Reference]、[Delete Reference]!! \r\n");
        gsenao131_2008.value = 0;
        gsenao131_2009.value = 0;
        CalculateTotalQty();
      }
    }
    GetONHOLD_QTY();
  }
}
function after_gsenao131_2006_b1() {
  if (gsenao131_2006.value != "") {
    gsenao131_2027.value = "";
    var aryTmp = hdn_r_2006.value.split("@@");
    if (aryTmp.length > 1) {
      gsenao131_2006.value = aryTmp[0]; //下階料號
      gsenao131_2007.value = aryTmp[1].replace(/\""/g, "'"); //下階品名
      gsenao131_2010.value = aryTmp[2]; //變更前數量
      gsenao131_2014.value = aryTmp[3]; //OP_Code
      gsenao131_2015.value = aryTmp[4].replace(/\""/g, "'"); //COMMENT
      gsenao131_2018.value = aryTmp[5]; //component_sequence_id
      if ((gsenao131_2010.value == "0" || gsenao131_2010.value == "0.0" || gsenao131_2010.value == "0.000000") && gsenao131_2018.value != "") {
        gsenao131_2027.value = "ECO-2";
        //20201216 Milla 因最近常發生新增替代料,但替代料沒有在BOM裡又寫入strComp_Seq_Id，導致Oracle的序號有誤，故增加判斷ECO_NUMBER有-2則strComp_Seq_Id拋入空值，待觀察試試
        gsenao131_2018.value = "";
        //return false;
      }
    } else {
      FindBOMData();
    }
  } else {
    ClearGridActionRowData("");
  }
  gsenao131_2012.value = "";
  gsenao131_2013.value = "";
  //gsenao131_2027.value = "";
  CalculateTotalQty(); //將總數歸0
  GetONHOLD_QTY();
  getItemWhereUsed(gsenao131_2006.value);
  return true;
}
/*
 * 20231215 Neil 顯示相同Project、PartNumber(本階料號)
 * tPartnumber:gsenao131_2006
 */
function getItemWhereUsed(tPartnumber) {
  var index = senao131_1013.value.trim().indexOf('-');
  var project = senao131_1013.value.trim().substring(0, index);
  if (project.trim() != "" && tPartnumber.trim() != "" && hdn_org.value != "") {
    window.open("/NaNaWeb/CustomSNO/jsp/SENAO131/SENAO131_ItemWhereUsed.jsp?project=" + project + "&partnumber=" + tPartnumber + "&org_id=" + hdn_org.value, "", "width=850,height=600,menubar=yes,scrollbars=yes,location=no,resizable=yes");
  }

}
//*********************************************************************
// 程序: setGridInitData()
// 說明: initial Grid Value . 設定增加數 = 0 ; 刪減數 = 0 ; 變更前 = 0 ; 變更後 = 0
//*********************************************************************
function setGridInitData() {
  if (gsenao131_2008.value == "" || gsenao131_2012.value == "") {
    gsenao131_2008.value = "0";
  }
  if (gsenao131_2009.value == "" || gsenao131_2013.value == "") {
    gsenao131_2009.value = "0";
  }
  if (gsenao131_2010.value == "") {
    gsenao131_2010.value = "0";
  }
  if (gsenao131_2011.value == "") {
    gsenao131_2011.value = "0";
  }
}
function GetONHOLD_QTY() {
  //disable料號須帶出在途PO,PR,待驗,庫存數量
  if (gsenao131_2011.value == 0 || gsenao131_2011.value * 1 == 0.000000) {
    gsenao131_2026.value = BOM_COMP_QUANTITIES(gsenao131_2006.value, gsenao131_2004.value);
    gsenao131_2023.value = PO_QTY(gsenao131_2006.value);
    gsenao131_2022.value = REQ_QTY(gsenao131_2006.value);
    gsenao131_2024.value = RECEIVING_QTY(gsenao131_2006.value);
    gsenao131_2021.value = onhand_QTY(gsenao131_2006.value);
  } else {
    gsenao131_2023.value = "";
    gsenao131_2022.value = "";
    gsenao131_2024.value = "";
    gsenao131_2021.value = "";
    gsenao131_2026.value = "";
  }
}
//判斷字串長度是否超過欄位型態/Phoebe.20100819
function IsOverChrCnt(strChr, intCnt) {
  var retVal = "";
  var aryChr = strChr.split(",");
  var aryChrCount = aryChr.length;
  var intString;
  for (var i = 0; i < aryChrCount; i++) {
    intString = 0;
    var subChrLen = aryChr[i].length;
    for (var j = 0; j < subChrLen; j++) {
      if (aryChr[i].charCodeAt(j) >= 32 && aryChr[i].charCodeAt(j) <= 126) {
        intString = intString + 1;
      } else {
        intString = intString + 3;
      }
    }
    if (intString > intCnt) {
      retVal = aryChr[i];
      return retVal;
    }
  }
  return retVal;
}
function chkFieldValueErr(strValue) {
  var r_value = false;
  if (right(strValue, 1) != ",") {
    strValue = strValue + ",";
  }
  //var aryValue = strValue.split(",");
  var aryValue = new Array();
  aryValue = strValue.split(",");
  if ($.isArray(aryValue)) {
    //因為最後一個字元為 " , " , split後的最後一個不能計，因為是空值，故length-1
    for (var i = 0; i < aryValue.length - 1; i++) {
      if (aryValue[i] == "") {
        r_value = true;
        break;
      }
    }
  }
  return r_value;
}
//*********************************************************************
// 程序: GetChangeQty(strChange)
// 說明: 根據 傳入的字串計算增刪數
// 參數: strChange - aryStatement(i) 如 "刪j01,j02"
//*********************************************************************
function GetChangeQty(strChange) {
  var r_value = "";
  var charSplit = "";
  //將半形空白與全形空白取代為空值
  strChange = strChange.replace(/\"　"/g, "").trim();
  //若最右邊的第1個字元為, 不取最後一字元, 直到最右邊的字元不為 , 即可
  charSplit = ",";
  for (var i = 0; i < strChange.length; i++) {
    if (right(strChange, 1) == charSplit) {
      strChange = left(strChange, strChange.length - charSplit.length);
      break;
    }
  }
  //alert("GetChangeQty function TEST!!"+strChange);
  //---------------- 計算依, 字元分隔開的資料數量 ----------------
  var nOtherCount = 0.0;
  var nCount = 0;
  var aryChange = strChange.split(",");
  var charOperator = "*";
  if ($.isArray(aryChange)) {
    for (var j = 0; j < aryChange.length; j++) {
      var nStart = aryChange[j].trim().indexOf("*");
      if (nStart == 0) { //第一個字元
        var num = aryChange[j].trim().substr(nStart + 1, aryChange[j].length - (nStart + 1));
        if (!isNaN(num)) {
          nOtherCount = (nOtherCount * 1) + parseFloat(num);
        }
      } else {
        nCount = (nCount * 1) + 1;
      }
    }
  }
  r_value = nCount + nOtherCount;
  return r_value;
}
function after_gsenao131_2013_pick() {
  if (hdn_del_ref.value != "") {
    var tmpAryRef = eval(hdn_del_ref.value);
    var tmp_213 = "";
    if (tmpAryRef.length > 0) {
      for (var i = 0; i < tmpAryRef.length; i++) {
        tmp_213 += tmpAryRef[i][1] + ",";
      }
      gsenao131_2013.value = tmp_213.trim();
    }
  } 
  hdn_del_ref.value = "";
  gsenao131_2013_onchange();
  gsenao131_2013_onblur();
  return true;
}
//*********************************************************************
//IsExistStituteItem 該替代料已存在
//*********************************************************************
function IsExistStituteItem(strAdd, strId) {
  var aryRtn = new Array();
  aryRtn[0] = false;
  aryRtn[1] = "";
  var ary = strAdd.split(",");
  var j = 0;
  var bln = false;
  while (j < ary.length - 1 && bln == false) {
    if (ary[j] != "") {
      var strSubs = left(ary[j], 12).trim();
      bln = IsSubStituteItem(strSubs, strId);
      aryRtn[1] = strSubs;
      if (bln) {
        aryRtn[0] = true;
      }
    }
    j = j + 1;
  }
  return aryRtn;
}
//#7096_恩嘉轉換成神準料號.joyce20170505
function ItemNo_EpsToSenao(strItemNo) {
  var rValue = strItemNo;
  if ("B,C,D,E,G,H,J,K,L,M,S,W".indexOf(strItemNo.substring(0, 1)) > -1) {
    var strTemp = "";
    for (var i = 0; i <= 1; i++) {
      //alert("ItemNo_EpsToSenao : "+strItemNo.substring(i,i+1));
      if (strItemNo.substring(i, 1) == "M") {
        strTemp = strTemp + "0";
      } else if (strItemNo.substring(i, 1) == "B") {
        strTemp = strTemp + "1";
      } else if (strItemNo.substring(i, 1) == "C") {
        strTemp = strTemp + "2";
      } else if (strItemNo.substring(i, 1) == "D") {
        strTemp = strTemp + "3";
      } else if (strItemNo.substring(i, 1) == "E") {
        strTemp = strTemp + "4";
      } else if (strItemNo.substring(i, 1) == "G") {
        strTemp = strTemp + "5";
      } else if (strItemNo.substring(i, 1) == "H") {
        strTemp = strTemp + "6";
      } else if (strItemNo.substring(i, 1) == "J") {
        strTemp = strTemp + "7";
      } else if (strItemNo.substring(i, 1) == "K") {
        strTemp = strTemp + "8";
      } else if (strItemNo.substring(i, 1) == "L") {
        strTemp = strTemp + "9";
      }
    }
    rValue = strTemp + strItemNo.substring(2, strItemNo.length);
  }
  return rValue;
}
/**
 * DCC/DCC主管關卡可以使用下拉選單 gsenao131_2014_b
 * 產生OP_CODE List Box
 * @param {any} strASSY_ITEM_NO
 * @param {any} strCOMP_ITEM_NO
 * @param {any} strOP_CODE
 */
function gsenao131_2014_trans(strASSY_ITEM_NO, strCOMP_ITEM_NO, strOP_CODE) {
  //先移除在重新載入
  document.getElementById("gsenao131_2014_b").innerHTML = "";
  var tOption = document.createElement('option'); //建立option選項
  tOption.value = ""; //放入內容值
  tOption.text = ""; //放入表面值
  gsenao131_2014_b.add(tOption);
  var tParm = new Array();
  tParm.push(hdn_org.value);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_42_Org", {
    hdn_org : tParm[0],
    strASSY_ITEM_NO : strASSY_ITEM_NO
  });
  if(pData[0].result == undefined){
    if (pData.length > 0) {
      for (var i = 0; i < pData.length; i++) {
        var tOption = document.createElement('option'); //建立option選項
        tOption.value = pData[i].OP_CODE; //放入內容值
        tOption.text = pData[i].OP_CODE; //放入表面值

        gsenao131_2014_b.add(tOption);
      }
    }
  }else{
    console.log("function:"+"gsenao131_2014_trans" + " API:" + "BPM_ERP_SENAO131_42_Org"+ pData[0].result);
  }
  if (gsenao131_2014.value != "") {
    gsenao131_2014_b.value = gsenao131_2014.value;
  } else {
    gsenao131_2014_b.value = "";
  }
}
function hasDoneAttached() {
  DWREngine.setAsync(false);
  ajax_FormAccessor.findFormInstance(formInstOID, loadFormInstance);
}
// 處理 Ajax - find form instance 的 回傳value
var doAtt = false;
function loadFormInstance(data) {
  // for 判斷本關卡有沒有上傳檔案了 (預設 false)
  var attach_result = false;

  // 取得 db 的附件 list 長度
  var ffi_length = data.attachments.length;

  // 取得目前表單上的附件物件長度
  var as_length = 0;
  var objAttachment = new Array(document.getElementById("Attachment_shell"));
  as_length = objAttachment.length;

  // 如果 ffi_length 大於等於 as_length 表示本關卡有上傳過附件
  if (ffi_length >= as_length) {
    for (var i = 0; i < data.attachments.length; i++) {
      // 再次判斷
      if (activityName == data.attachments[i].activityName) {
        attach_result = true;
        doAtt = true;
        i = data.attachments.length;
      }
    }
  }

  if (!attach_result) {
    doAtt = false;
    //alert("你還沒上傳附件喔 !");
    //return false;
  }
}
//20231206 Steve [SENAO10100004946] 當填單人員為16C00 運算網路研發部時,針對附件進行卡控
function checFileWithFileName() {
  var CheckPDF = false;
  var CheckXLSX = false;
  var tAS = document.getElementById('_cuzfileChooser_selectedItems');

  if (tAS != null) {
    for (var i = 1; i < tAS.rows.length; i++) {
      var strFileName = tAS.rows[i].cells[1].innerHTML;
      var matchPDF = strFileName.match(/S(\d)_(\S+_\S+)_SCH File\.pdf/);
      var matchXLSX = strFileName.match(/S(\d)_(\S+_\S+)_change list\.xlsx/);

      if (matchPDF) {
        CheckPDF = true;
      }

      if (matchXLSX) {
        CheckXLSX = true;
      }

      if (CheckPDF && CheckXLSX) {
        break;
      }
    }
  }
  return CheckPDF && CheckXLSX;
}
//閃爍
var intTemp = 0;
var arrColor = new Array("red", "orange", "blue", "green", "purple", "yellow");
var arrColor2 = new Array("red", "blue", "red", "blue", "red", "blue");
var arrSize = new Array(8, 12, 16, 20);

function go() {
  intTemp = intTemp + 1;
  var intMod = intTemp % 6;
  document.getElementById("Label89").style.color = arrColor2[intMod];
  document.getElementById("Label90").style.color = arrColor2[intMod];
  //document.getElementById("Label130").style.background = arrColor2[intMod];
}
/** 20251204 Dex Add
 * Override function
 * IE瀏覽器兼容性函數：將str用ch補滿len位數
 * @param {string} str - 字串
 * @param {int} len - 補幾位
 * @param {string} ch - 要補的字元
 */
function padLeft(str, len, ch) {
  str = String(str);
  while (str.length < len) {
    str = ch + str;
  }
  return str;
}
/*---------------------公用Function End--------------*/
/*---------------------多筆匯入 Start--------------*/
/**
 * SENAO111 多筆 Excel 匯入
 */
function excelInPutUI(rawData) {
  let head = rawData.head;
  let detail = rawData.detail;
  let formSN = head.FORMSERIALNUMBER_1 || 'Unknown';
  let errorLog = [];
  let status = true;

  // Step 1: 填寫單頭
  status = fillHeadFields_111(head, formSN, errorLog);
  if (!status) {
    alert(errorLog.join('\n'));
    return false;
  }

  // Step 2: 逐筆填寫單身並加入 Grid
  let rowArray = [];
  if(detail.length === 0) {
    alert(`[${formSN}] [表單附件]資料筆數不得為 0 筆!`);
    return false;     
  }else{
    for (let i = 0; i < detail.length; i++) {
      let detailitems = detail[i];
      for (let j = 0; j < detailitems.length; j++) {
        let item = detailitems[j];
        status = gridRowChk_111(j, item, formSN, errorLog);
        if (!status) break;

        let chkResult = chkInsGridData('');
        if (chkResult === false) {
          errorLog.push(`[${formSN}] 第 ${j + 1} 筆單身驗證失敗`);
          status = false;
          break;
        }

        rowArray.push(getRowData(i, j + 1));
        clearBinding(0);
      }
    }

    if (rowArray.length > 0) {
      setGridData(0, rowArray);
      document.getElementById('Grid1').value = JSON.stringify(getGridData(0));
    }
  }
  // Step 3: formSave 驗證
  if (status) {
    let saveResult = formSaveForBatch();
    if (saveResult !== "") {
      errorLog.push(`[${formSN}] formSave() 驗證失敗 ${saveResult}`);
      status = false;
    }
  }

  // Step 4: 統一顯示錯誤
  if (errorLog.length > 0) {
    alert(errorLog.join('\n'));
  }

  return status;
}

// ─────────────────────────────────────────────
// 填寫單頭欄位
// ─────────────────────────────────────────────
function fillHeadFields_111(head, formSN, errorLog) {
  let status = true;

  $.each(head, function (key, value) {
    if (value === null || value === undefined) value = '';

    switch (key) {

      // ── 主旨 ──────────────────────────────────────────
      case 'TXT_SUBJECT_REMARK':
        $('#txt_Subject_Remark').val(value);
        break;

      // ── 公司別 ───────────────────────────────────────
      case 'FORM_OU':
        if (value === '') {
          errorLog.push(`[${formSN}] [FORM_OU] 公司別不可為空`);
          status = false;
        }
        if (changeOptionMethod('form_ou', value)) {
          $('#form_ou').trigger('change');
        } else {
          errorLog.push(`[${formSN}] [FORM_OU] 找不到公司別值: ${value}`);
          status = false;
        }
        break;

      // ── 廠區 ─────────────────────────────────────────
      case 'FORM_ORG':
        if (value === '') {
          errorLog.push(`[${formSN}] [FORM_ORG] 廠區不可為空`);
          status = false;
        }
        if (changeOptionMethod('form_org', value)) {
          $('#form_org').trigger('change');
        } else {
          errorLog.push(`[${formSN}] [FORM_ORG] 找不到廠區值: ${value}`);
          status = false;
        }
        break;

      // ── 申請人 ───────────────────────────────────────
      case 'SENAO111003':
        if (value === '') {
          errorLog.push(`[${formSN}] [Applicant] 申請人不可為空`);
          status = false;
        }
        $('#senao111003').val(value);
        senao111003_onchange(); // 自動帶入申請人姓名與部門
        if ($('#senao111003_t1').val() === '') {
          errorLog.push(`[${formSN}] [Applicant] 工號 ${value} 查無此人`);
          status = false;
        }
        break;

      // ── 重要性 ───────────────────────────────────────
      case 'SENAO111007':
        if (value === '') {
          errorLog.push(`[${formSN}] [Importance] 不可為空`);
          status = false;
        }else {
          if (changeOptionMethod('senao111007', value)) {
            $('#senao111007').trigger('change');
            senao111007_onclick(); // 控制急件說明顯示/隱藏
          } else {
            errorLog.push(`[${formSN}] [Importance] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── 急件說明 (Importance=0 時必填) ───────────────
      case 'URGENTEXPLANATION':
        var reason = ($('#senao111007').val() || '').toUpperCase();
        if (reason === '0') {
          if (value === '') {
            errorLog.push(`[${formSN}] [urgentExplanation] 急件說明不可為空`);
            status = false;
          }else{
            if(urgentExplanation.value.substring(0, 1) == '.' || urgentExplanation.value.substring(0, 1) == ' '){
              errorLog.push(`[急件說明]開頭不能.或空格`);
            }
          }
          $('#urgentExplanation').val(value);
        }
        break;

      // ── Project Code ─────────────────────────────────
      case 'SENAO111071':
        if (value === '') {
          errorLog.push(`[${formSN}] [Project Code] 不可為空`);
          status = false;
        } else{
          $('#senao111071').val(value);
          senao111071_onchange(); // 自動帶入 Project 描述，並預帶 Model
          if ($('#senao111071_t1').val() === '') {
            errorLog.push(`[${formSN}] [Project Code] ${value} 查無此專案`);
            status = false;
          }
        }
        break;

      // ── Model ID ─────────────────────────────────────
      case 'SENAO111014':
        if (value === '') {
          if($('#senao111071').val() == '') {
            errorLog.push(`[${formSN}] [Model Name] 不可為空`);
            status = false;
          }
        } else{
          $('#senao111014').val(value);
          senao111014_onchange(); // 查 Oracle 帶入 Model Name、客戶等
        }
        break;

      // ── 機種類別 (Model=00 時必填) ───────────────────
      case 'SENAO111014_T3':
        if ($('#senao111014').val() === '00' ){
          if ( value === '') {
            errorLog.push(`[${formSN}] [機種類別] Model 為 00 時不可為空`);
            status = false;
          }else {
            if (changeOptionMethod('senao111014_t3', value)) {
              if (value !== '') $('#senao111014_t3').trigger('change');
            } else {
              errorLog.push(`[${formSN}] [機種類別] 無效的值: ${value}`);
              status = false;
            }
          }
        }
        break;

      // ── Other Model Name (Model=00 時必填) ───────────
      case 'SENAO111014_T2':
        if ($('#senao111014').val() === '00' && value === '') {
          errorLog.push(`[${formSN}] [Other Model Name] Model 為 00 時不可為空`);
          status = false;
        }
        if (value !== '') {
          $('#senao111014_t2').val(value);
          senao111014_t2_onchange();
        }
        break;

      // ── 是否需修改生產規格書 ─────────────────────────
      case 'SENAO111081':
        if (value === '') {
          errorLog.push(`[${formSN}] [EC內容是否需修改生產規格書] 不可為空 (Y/N)`);
          status = false;
        } else {
          if (changeOptionMethod('senao111081', value)) {
            $('#senao111081').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [EC內容是否需修改生產規格書] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Brand ────────────────────────────────────────
      case 'SENAO111015':
        if (value === '') {
          errorLog.push(`[${formSN}] [Brand] 不可為空 (0=Own Brand / 1=Custom Made)`);
          status = false;
        }else {
          if (changeOptionMethod('senao111015', value)) {
            $('#senao111015').trigger('change');
            senao111015_onclick(); // 自動控制 Sales Section checkbox
          } else {
            errorLog.push(`[${formSN}] [Brand] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Reason of Change ─────────────────────────────
      case 'SENAO111016':
        if (value === '') {
          errorLog.push(`[${formSN}] [Reason of Change] 不可為空`);
          status = false;
        } else {
          if (changeOptionMethod('senao111016', value)) {
            $('#senao111016').trigger('change');
            senao111016_onchange();
          } else {
            errorLog.push(`[${formSN}] [Reason of Change] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Reason of Change 說明 (Others 時必填) ────────
      case 'SENAO111018':
        var reason = ($('#senao111016').val() || '').toUpperCase();
        if (reason  === 'OTHERS' && value === '') {
          errorLog.push(`[${formSN}] [Reason of Change 說明] Reason 為 Others 時不可為空`);
          status = false;
        }
        if (value !== '') $('#senao111018').val(value);
        break;

      // ── Remark ───────────────────────────────────────
      case 'SENAO111017':
        if (value === '') {
          errorLog.push(`[${formSN}] [Remark] 不可為空`);
          status = false;
        }
        $('#senao111017').val(value.substring(0, 1000)); // 上限 1000 字
        break;

      // ── Method of Change ─────────────────────────────
      case 'SENAO111019':
        if (value === '') {
          errorLog.push(`[${formSN}] [Method of Change] 不可為空`);
          status = false;
        }else {
          if (changeOptionMethod('senao111019', value)) {
            $('#senao111019').trigger('change');
            senao111019_onchange(); // 控制日期/工單欄位顯示
          } else {
            errorLog.push(`[${formSN}] [Method of Change] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Modify Finished Goods ────────────────────────
      case 'SENAO111020':
        if (value === '') {
          if ($('#senao111019').val() =='') { 
            errorLog.push(`[${formSN}] [Modify Finished Goods] 不可為空 (0/1)`);
            status = false;
          }
        }else {
          if (changeOptionMethod('senao111020', value)) {
            $('#senao111020').trigger('change');
            senao111020_onchange(); // 若=0 自動帶 Semi-FG=0
          } else {
            errorLog.push(`[${formSN}] [Modify Finished Goods] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Modify Semi-Finished Goods ───────────────────
      case 'SENAO111021':
        if (value === '') {
          if ($('#senao111019').val() =='') { 
            errorLog.push(`[${formSN}] [Modify Semi-Finished Goods] 不可為空 (0/1)`);
            status = false;
          }
        }else {
          if (changeOptionMethod('senao111021', value)) {
            $('#senao111021').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [Modify Finished Goods] 無效的值: ${value}`);
            status = false;
          }
        }
        break;

      // ── Mix Parts in Production ──────────────────────
      case 'SENAO111024':
        if (value === '') {
          errorLog.push(`[${formSN}] [Mix Parts in Production] 不可為空 (0/1)`);
          status = false;
        }else {
          if (changeOptionMethod('senao111024', value)) {
            $('#senao111024').trigger('change');
          } else {
            errorLog.push(`[${formSN}] [Mix Parts in Production] 無效的值: ${value}`);
            status = false;
          }
        }
        break;
    }
  });

  return status;
}

// ─────────────────────────────────────────────
// 填寫單身欄位
// ─────────────────────────────────────────────
function gridRowChk_111(index, row, formSN, errorLog) {
  /*
   * index  : 0-based 單身索引
   * row    : 單筆單身資料物件
   * formSN : 所屬表單識別碼 (用於錯誤訊息)
   * errorLog: 錯誤訊息陣列 (傳址修改)
   */
  let status = true;

  $.each(row, function (key, value) {
    if (value === null || value === undefined) value = '';

    switch (key) {

      // ── Assembly Level Part Number ───────────────────
      case 'SENAO111D004':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Assembly Level 不可為空`);
          status = false;
        }
        $('#gsenao111d004').val(value);
        // 觸發：查BOM品名、PhaseOut、Common BOM 判斷
        if (gsenao111d004_onchange() === false) {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Assembly Level [${value}] 驗證失敗`);
          status = false;
        }
        break;

      // ── Part Number ──────────────────────────────────
      case 'SENAO111D006':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Part Number 不可為空`);
          status = false;
        }
        $('#gsenao111d006').val(value);
        // 觸發：FindBOMData、新料確認、ECO-2 判斷
        if (gsenao111d006_onchange() === false) {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Part Number [${value}] 驗證失敗`);
          status = false;
        }
        break;

      // ── 處理 ─────────────────────────────────────────
      case 'SENAO111D017':
        if (value === '') {
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：處理 不可為空 (非替代料/替代料/Disable)`);
          status = false;
        }else{
          $('#senao111d017').val(value);
          // 觸發：依處理類型決定後續計算路徑
          gsenao111d017_onchange();
        }
        break;

      // ── Add Reference ────────────────────────────────
      case 'SENAO111D012':
        if (value !== '') {
          $('#gsenao111d012').val(value);
          // blur 先做重覆插件位置檢查
          if (gsenao111d012_onblur() === false) {
            errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Add Reference [${value}] 重覆或不存在`);
            status = false;
          }
          // onchange：帶品名描述(替代料)或計算 Add Qty(非替代料)
          gsenao111d012_onchange();
        }
        break;

      // ── Delete Reference ─────────────────────────────
      case 'SENAO111D013':
        if (value !== '') {
          $('#gsenao111d013').val(value);
          // 計算 Del Qty、CalculateTotalQty、setd029Status
          gsenao111d013_onchange();
        }else{
          errorLog.push(`[${formSN}] 第 ${index + 1} 筆：Delete Reference 不可為空`);
          status = false;
        }
        break;

      // ── COMMENT ──────────────────────────────────────
      case 'SENAO111D015':
        // 01~51 前置碼的上階料號必填，由 chkInsGridData 驗證
        if (value !== '') {
          $('#gsenao111d015').val(String(value).replace(/\n/g, '').replace(/"/g, "'"));
        }
        break;
      
      // ── 管制料號 ──────────────────────────────────────
      case 'SENAO111D029':
        if (value === '') {
          if (($('#senao111d017').val() == "替代料" || $('#senao111d017').val() == "非替代料") && gsenao111d029.value == ""){
            errorLog.push(`[${formSN}] 第 ${index + 1} 筆：必須選擇是否為管制料號`);
            status = false;
          }
        }else {
           $('#gsenao111d029').val(value);
        }
    }
  });

  return status;
}
function formSaveForBatch() {
  var strOtherCustList = querySNSI003_Org("SN111_S50");	//ODM客戶
  var tGrid1Data = getGridData(0); 
  var errorMsg = "";
  workitemownerid = getUserIDByOID(workItemOwnerOID);  //請注意若轉單(非代簽)需一併修改會辦表人員
  if ($("#form_ou").val() == 'senao' || $("#form_ou").val() == 'svn'){ //20240411 Neil //20260223 Dex Add 需求[SENAO10100003802]，開啟急件說明卡控
    //重要性
    if(senao111007.value=="0" && urgentExplanation.value==''){
      //alert("[急件說明]不得空白");
      errorMsg += "[急件說明]不得空白"
    }
  }
  if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){	//電子工程課申請
    isEEApply.value = "Y";
  }else{
    isEEApply.value = "N";
  }
  
  if (querySNSI003_Org("SN111_S52").indexOf(senao111004.value) > -1){	//技術資料管制課申請
    isDCCApply.value = "Y";
  }else{
    isDCCApply.value = "N";
  }
  
  if (IsRdDept_Utils(senao111004.value) && querySNSI003_Org("SN111_S52").indexOf(senao111004.value) < 0){
    isRDDept1516.value = "Y";	//部門代號為15, 16開頭, 排除15312(DCC)
  }else{
    isRDDept1516.value = "N";
  }
  if (senao111007.value == "0"){
    hdn_senao111007_subj.value = "[急]";
  }else{
    hdn_senao111007_subj.value = "";
  }    
  if (senao111071.value.trim() == ""){	//Project Code
    errorMsg += "請填寫[Project Code]!\n";
  }else{
    var otherModelName = ""; //Model ID CheckFieldData.asp:177
    var strCust = senao111087.value;	//客戶名稱
    var strEmpNo = senao111003.value;	//申請人
      
    if (senao111014.value == ""){	//Model ID
      errorMsg += "請填寫[Model Name]!\n";
    }else if (senao111014.value == "00"){
      if (senao111014_t3.value == ""){
        errorMsg += "請選擇下拉選單Model Name[請選擇類別(其它、DCM、VCM)]!\n";
      }
      if (senao111014_t2.value == ""){
        errorMsg += "請填寫[Other Model Name]!\n";
      }else{
        otherModelName = senao111014_t2.value;
      }				
    }else{
      otherModelName = senao111014.value; //Model ID CheckFieldData.asp:177
      if (senao111014.value.indexOf(senao111071.value) < 0){
        errorMsg += "[Model Name]需為[ProjectCode]底下的洐生機種!\n";
      }
    } //end of if(senao111014.value=="")
      
    if (IsOdmModel(otherModelName, strCust)){	//是否為 odm 客戶的機種
      if (strCust == "SNWL"){
        if (IsSNWL_ECO_TO_SN() == false && (IsOdmApplicant(strCust, strEmpNo) || IsRMAApply())){	//非SonicWALL要求 Senao 做出的的變更 && (為ODM 申請人員||為RMA單位申請)
          var strPrompt = "若為SonicWALL指定變更,請務必註明[SonicWALL ECO Number].\n";
          strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
          strPrompt += "表單需通知客戶，請不要直接傳送，請按[取消]";
          if(confirm(strPrompt) == false){
            return false;
          }
        }
      }else if (strOtherCustList.indexOf(strCust) >= 0){	//是ODM客戶
        if (IsSNWL_ECO_TO_SN() == false){	//非SonicWALL要求 Senao 做出的的變更
          var strPrompt = "若為" + strCust + "指定變更,請務必註明[" + strCust + " ECO Number].\n";
          strPrompt += "若該表單不需通知客戶,要直接傳送,請按[確定]\n";
          strPrompt += "表單需通知客戶，不要直接傳送，請按[取消]";
          if (confirm(strPrompt) == false){
            return false;
          }
        }
      }
    }
  } //end of if(senao111071.value.trim()=="")

  strchkErrMN = chkErrModelName(senao111014.value); //確認機種是否存在 CheckFieldData.asp:251
  if (strchkErrMN != ""){	//無此機種
    alert(strchkErrMN);
    return false;
  }
  /*20260409 vivian 多筆匯入是否就不用上傳附件
  //Ruckus&Meraki EC需routing時，填表人須上傳附件/Phoebe.20120413
  //Ruckus EC需routing時，填表人須上傳附件/Phoebe.20111111
  if (strOtherCustList.indexOf(senao111087.value) >= 0 && senao111014_t4.value != ""){ //是ODM客戶 && ECO Number CheckFieldData.asp:258
    if (chkAttFileExists() == false){
      errorMsg += "請上傳" + senao111087.value + " ECO附件!\n";
    }
  }else{
    if (chkAttFileExists() == false){
      if (confirm("※申請【電子料號EC】 請務必附上'PM/業務同意MAIL'及'測試報告'(or新舊規格比對表)。\n※申請【軟體FW EC】請附上單位已簽核之'軟體程式發行管制表' or 'PM/業務同意MAIL'。\n未附上則以退件處理！\n若需上傳檔案請按「確定」, 若無需附檔請選「取消」") == true){
        alert("請上傳附件!");
        return false;
      }
    } 
  }*/
  
  if (IsRMAApply() && senao111087.value == "SNWL"){	//為RMA單位申請 && 客戶是SNWL
    if (senao111014_t4.value == ""){	//ECO Number
      errorMsg += "[SonicWALL ECO Number]不得空白!\n";
    }
    if (senao111019.value == "6" && (senao111019_t4.value == "" || senao111019_t2.value.trim() == "")){	//6. By OE/工單變更 && (Method of Change: Order Type  || Method of Change: Order Number)
      errorMsg += "[依OE變更],請詳細填寫Order Type and Order Number!\n";
    }
  }
  if (senao111010.value == ""){	//Type: ECR Change / ECN Change
    errorMsg += "[Type]不得空白!\n";
  }
  //EE 需選擇RD SECTION 或 EE SECTION 人員
  if (querySNSI003_Org("SN111_S02").indexOf(senao111004.value) > -1){
    if (senao111036.value == ""){
      errorMsg += "EE部門人員，請選擇[RD Section]!\n";
    }
  }
  if((senao111078.value != "" && senao111078.value != "N") || senao111014_t4.value != ""){	//是否routing to SonicWALL && ECO Number
    isOdmEco.value = "Y";	//是否為配合snwl eco的單據-是
  }else{
    isOdmEco.value = "N";	//是否為配合snwl eco的單據-否
  }
  //*******************************************************************
  //單身規則：CheckFieldData.asp:348
  //附件表單化, 單身必需有資料
  //同一階且同一料在同一張單只能申請一次
  //*******************************************************************
  //以上單頭無誤(strErr = "" )，再做單身的防呆判斷        
  if (errorMsg == ""){
    if (senao111019.value != "5"){ //Method of change =5: No EC Needed                   
      if (tGrid1Data.length <= 0){  //CheckFieldData.asp line:357
        errorMsg += "[表單附件]資料筆數不得為 0 筆!\n";
      }            
    }
  }
  // alert('before CheckGrid_onFormSave');	
  errorMsg += CheckGrid_onFormSave();
  // alert('after CheckGrid_onFormSave');
  // todo check below function 
  CheckNeedToInfo22110Dept();
  InsertSourcer_Flow();
  makeMgrSourcerSign();
  var getSNSI003_str = "";

  getSNSI003_str = querySNSI003_Org("SN111_S39");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //硬體研發九處與工業電腦研發處發起之表單
      isSN111_S39.value = "Y";
    }else{
      isSN111_S39.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S41");	//[研發六處]所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //研發六處部門發起之表單
      isSN111_S41.value = "Y";
    }else{
      isSN111_S41.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S48");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //網路安全研發單位與機構發起之表單
      isSN111_S48.value = "Y";
    }else{
      isSN111_S48.value = "N";
    }
  }

  getSNSI003_str = querySNSI003_Org("SN111_S49");	//此部門所填寫之EBOM ECN(SENAO131)與MBOM ECN(SENAO111)，送單後，即通知助理
  if (getSNSI003_str != ""){
    if (getSNSI003_str.indexOf(senao111004.value) >= 0){ //語音通訊研發單位與機構發起之表單
      isSN111_S49.value = "Y";
    }else{
      isSN111_S49.value = "N";
    }
  }

  NSGCheck(); //20240523 Neil 

	//儲存Grid1資料
  if (tGrid1Data.length > 0) {  //判斷grid物件是否存在表單中       
		document.getElementById("Grid1").value = JSON.stringify(tGrid1Data); //將Grid裡的資料儲存至隱藏欄位中  
		clearBinding(0); 	
		for (i = 0; i < tGrid1Data.length; i++){
			if (tGrid1Data[i]['SENAO111D004'] == "" || tGrid1Data[i]['SENAO111D006'] == "" || tGrid1Data[i]['SENAO111D017'] == ""){
				alert("第" + tGrid1Data[i]['SENAO111D003'] + "筆單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return errorMsg;
			}
		}
		if(senao111019.value != "5"){
			if (Grid1.value == "" || Grid1.value == "[]"){
				alert("單身資料為空! 請重新開啟表單再繼續派送!若問題持續發生, 請洽MIS, 謝謝!");
				return errorMsg;
			}
		}
	}
	return errorMsg;
}
/*---------------------多筆匯入 End--------------*/
/*---------------------JqGrid Function Start--------------*/
function loadSavedGridData() {
  const grid1Data = $("#Grid1").val();
  
  // 檢查隱藏欄位是否有資料
  if (grid1Data && grid1Data.length > 1) {
    try {
      // 解析 JSON 資料
      const gridData = JSON.parse(grid1Data);
      
      // 檢查是否有資料
      if (Array.isArray(gridData) && gridData.length > 0) {
        // 使用您現有的 setGridData 函數載入資料
        setGridData(0, gridData);  // 0 是 Grid1 的 id
        console.log(`載入 ${gridData.length} 筆 Grid 資料`);
      }
    } catch (error) {
      console.error("Grid 資料解析失敗:", error);
    }
  }
}
function createFrmGrid(id) { //create jagrid
  let options = {};
  let $grid;
  let gridCol = {};
  $grid = $('#' + frmGridList[id].gid);
  //$.jgrid.gridUnload(frmGridList[id].gid);
  options = frmGridList[id];
  switch (id) {
    case 0:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao131_1002').val()//表單單號
      };
      $grid.createJqGrid(options);
      getGridColModel(id);
      break;
    case 1:
      break;
  }
  gridCol = getGridColModel(id);
  if (gridCol.label.length > 0) {
    Grid1Columns.push(gridCol.label);
    Grid1ColumnIds.push(gridCol.name);
  }
}
/**
 * 取得Grid內的數據
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridData(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridData = [];
  if ($grid.length > 0) {
    gridData = $grid.getGridParam("data");
  }

  return gridData;
}
/**
 * 替換Grid內的數據
 * @param {*} id:編號 
 * @param {*} dataSrc:數據
 * @returns true
 */
function setGridData(id, dataSrc) {

  let $grid = $("#" + frmGridList[id].gid);
  if ($grid.length > 0) {
    $grid.jqGrid("clearGridData")
      .jqGrid("setGridParam", {
        data: dataSrc // 要替換的資料 dataSrc
      })
      .trigger("reloadGrid");  // reload顯示新資料
  }
  return true;
}
/**
 * 取得Grid內的數據colmodel
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridColModel(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridcolModel = [];
  let gridcolLabel = [];
  let gridcolName = [];
  if ($grid.length > 0 && $grid[0].grid) {
    gridcolModel = $grid.getGridParam("colModel")|| [];
    for (let i = 0; i < gridcolModel.length; i++) {
      gridcolLabel.push(gridcolModel[i].label);
      gridcolName.push(gridcolModel[i].name);
    }
  }

  return { colModel: gridcolModel, label: gridcolLabel, name: gridcolName };
}
/**
 * [Grid] 取得單身GRID要新增資料
 */
function getRowData(id, rowid) {
  let data = {};
  let binding = GridBinding[id];
  let columnIds = Grid1ColumnIds[id];
  for (let i = 0; i < binding.length; i++) {
    let value = "";
    if (binding[i] != "") {
      value = $("*[name='" + binding[i] + "']").val();
      if (value == undefined) {
        value = "";
      }
    } else { //項次
      value = rowid;
    }
    data[columnIds[i]] = value;
  }
  return data;
}
/**
 * [Grid] 新增單身GRID資料
 */
function gridaddRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}
/**
 * [Grid] 修改單身GRID資料
 */
function grideditRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  data = getRowData(id, rowid);
  $grid.jqGrid('setRowData', rowid, data);
}
/**
 * [Grid] 刪除單身GRID資料
 */
function griddeleteRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  if (confirm('確認刪除?')) {
    $grid.jqGrid('delRowData', rowid);
  }

}
/**
 * [Grid] 重新計算單身Grid項次
 */
function refreshRowNo(id, key) {
  let data = getGridData(id);
  for (let i = 0; i < data.length; i++) {
    data[i][key] = i + 1;
  }
  setGridData(id, data);
}
/**
 * [Grid] 取的Grid的位置
 */
function getGridSelectRow(id) {

  let rowId = $("#" + frmGridList[id].gid).jqGrid('getGridParam', 'selrow');
  console.log(rowId);
  return rowId;
}
/**
 * [Grid] 清除單身對應欄位資料
 */
function clearBinding(id) {
  let binding = GridBinding[id];
  for (let i = 0; i < binding.length; i++) {
    if (binding[i].length > 0) {
      $("*[name='" + binding[i] + "']").val('');
    }
  }
}

/**
 * Grid輸入欄位初始化
 */
function initGridRow() {
}
/**
 * 檢查料號長度是否符合規則
 * @returns errstr
 */
function ChkItemError() {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  if (check_needec()) {
    if (tGrid1Data.length > 0) {
      for (var i = 0; i < tGrid1Data.length; i++) {
        if (tGrid1Data[i]['SENAO131_2004'].length != 12) {
          errstr += "[明細資料]-第" + tGrid1Data[i]['SENAO131_2003'] + "筆資料異常，上階料號(" + tGrid1Data[i]['SENAO131_2004'] + ")字元長度非12碼!!\r\n";
        }
        if (tGrid1Data[i]['SENAO131_2006'].length != 12) {
          errstr += "[明細資料]-第" + tGrid1Data[i]['SENAO131_2003'] + "筆資料異常，本階料號(" + tGrid1Data[i]['SENAO131_2006'] + ")字元長度非12碼!!\r\n";
        }
      }
    }
  }
  return errstr;
}
function UPDATE_ECO_NUMBER() {
  var r_value = false;
  var tGrid1Data = getGridData(0);
  var aryEC = senao131_1002.innerHTML.split("-");
  //var ec = "E" + right(aryEC[1],4) + "-" + aryEC[2];
  //var ec = "G" + right(serialNumber,5); //改用流程序號後5碼
  var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2027'] == "ECO-2") {
        tGrid1Data[i]['SENAO131_2027'] = ec + "-2";
        r_value = true;
      }
    }
    setGridData(0, eval(tGrid1Data));
  }
  return r_value;
}
function getID_BillID() {
  var tGrid1Data = getGridData(0);
  for (var i = 0; i < tGrid1Data.length; i++) {
    if (fixNull(tGrid1Data[i]['SENAO131_2018']) == '') {
      //ID
      tGrid1Data[i]['SENAO131_2018'] = GetID(tGrid1Data[i]['SENAO131_2004'], tGrid1Data[i]['SENAO131_2006']);
    }
    if (fixNull(tGrid1Data[i]['SENAO131_2020']) == '') {
      //BILLid
      tGrid1Data[i]['SENAO131_2020'] = GetBILLID(tGrid1Data[i]['SENAO131_2004']);
    }
  }
  setGridData(0, eval(tGrid1Data));
}
function isNeedDCC2() {
  var r_value = "N";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2027'] != "") {
        r_value = "Y";
        break;
      }
    }
  }
  return r_value;
}
/**
 * 判斷刪除插件位置或新增插件位置於同筆ITEM中是否有重複資料
 * @returns errstr
 */
function IsReplicateSubItem() {
  var r_value = "";
  var strAddData = "";
  var strDelData = "";
  var tGrid1Data = getGridData(0);
  var aryAddSI = new Array();
  var aryDelSI = new Array();
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      //判斷新增插件位置是否重複
      if (tGrid1Data[i]['SENAO131_2012'].indexOf(",") > -1) {
        if (right(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
          strAddData = tGrid1Data[i]['SENAO131_2012'] + ",";
        } else {
          strAddData = tGrid1Data[i]['SENAO131_2012'];
        }
        aryAddSI = strAddData.split(",");
        if ($.isArray(aryAddSI)) {
          for (var k = 0; k < aryAddSI.length - 1; k++) {
            for (var n = k + 1; n < aryAddSI.length; n++) {
              if (aryAddSI[k] == aryAddSI[n]) {
                r_value += "明細資料第" + (i + 1) + "筆，新增插件位置重複:" + aryAddSI[k] + "!!\r\n";
                //return r_value;
              }
            }
          }
        }
      }
      //判斷刪除插件位置是否重複
      if (tGrid1Data[i]['SENAO131_2013'].indexOf(",") > -1) {
        if (right(tGrid1Data[i]['SENAO131_2013'], 1) != ",") {
          strDelData = tGrid1Data[i]['SENAO131_2013'] + ",";
        } else {
          strDelData = tGrid1Data[i]['SENAO131_2013'];
        }
        aryDelSI = strDelData.split(",");
        if ($.isArray(aryDelSI)) {
          for (var k = 0; k < aryDelSI.length - 1; k++) {
            for (var n = k + 1; n < aryDelSI.length; n++) {
              if (aryDelSI[k] == aryDelSI[n]) {
                r_value += "明細資料第" + (i + 1) + "筆，刪除插件位置重複:" + aryDelSI[k] + "!!\r\n";
                //return r_value;
              }
            }
          }
        }
      }
    }
  }
  return r_value;
}
function ChkApplyXItem(strAssm_No, strComp_No) {
  var r_value = false;
  var tGrid1Data = getGridData(0);

  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2004'] == strAssm_No && tGrid1Data[i]['SENAO131_2006'] == strComp_No) {
        r_value = true;
        break;
      }
    }
  }
  return r_value;
}
//主替代料替換時，當新增替代料時，判斷是否也申請新增主料/Phoebe.20131024
function bln_ADD_COMPONENT(strASSM_NO, strCOMP_NO, strFlag) {
  var r_value = false;
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (strFlag == "") {
        if (tGrid1Data[i]['SENAO131_2027'] == "ECO-2" && tGrid1Data[i]['SENAO131_2004'] == strASSM_NO && tGrid1Data[i]['SENAO131_2006'] == strCOMP_NO && tGrid1Data[i]['SENAO131_2017'] == "非替代料" && tGrid1Data[i]['SENAO131_2011'] * 1 > 0) {
          r_value = true;
          break;
        }
      } else {
        if (tGrid1Data[i]['SENAO131_2004'] == strASSM_NO && tGrid1Data[i]['SENAO131_2006'] == strCOMP_NO && tGrid1Data[i]['SENAO131_2017'] == "非替代料" && tGrid1Data[i]['SENAO131_2011'] * 1 > 0 && tGrid1Data[i]['SENAO131_2018'] == "") {
          r_value = true;
          break;
        }
      }
    }
  }
  return r_value;
}
//*********************************************************************
//CHECK 同一筆申請單中是否有重覆新增的插件位置(當 Billid為空時)
//*********************************************************************
function ChkDuplicateAddRefData(strAssm_No, strAddRefr, strType, index) {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  var tmpGrid12 = "";
  if (tGrid1Data.length > 0) {
    for (var i = index + 1; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2012'] != "" && left(tGrid1Data[i]['SENAO131_2012'], 1) != "*" && tGrid1Data[i]['SENAO131_2017'] == "非替代料") {
        tmpGrid12 = tGrid1Data[i]['SENAO131_2012'];
        if (strAssm_No == tGrid1Data[i]['SENAO131_2004'] && tGrid1Data[i]['SENAO131_2020'] == "") {
          if (right(strAddRefr, 1) != ",") {
            strAddRefr = strAddRefr + ",";
          }
          var aryAR = strAddRefr.split(",");
          if ($.isArray(aryAR)) {
            for (var m = 0; m < aryAR.length - 1; m++) {
              if (right(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
                tmpGrid12 = tmpGrid12 + ",";
              }
              var strCMPValue = aryAR[m] + ",";
              if (tmpGrid12.indexOf(strCMPValue) > -1) {
                errstr += "同一階層料號" + "[" + strAssm_No + "]" + "中有重覆的插件位置 [" + aryAR[m] + "]。\r\n";
              }
            }
          }
        }
      }
    }
  }
  return errstr;
}
function single_ChkDuplicateAddRefData(strAssm_No, strAddRefr, strType) {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  var tmpGrid12 = "";
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2012'] != "" && left(tGrid1Data[i]['SENAO131_2012'] != "*") && tGrid1Data[i]['SENAO131_2017'] == "非替代料") {
        tmpGrid12 = tGrid1Data[i]['SENAO131_2012'];
        if (strAssm_No == tGrid1Data[i]['SENAO131_2004'] && tGrid1Data[i]['SENAO131_2020'] == "") {
          if (right(strAddRefr, 1) != ",") {
            strAddRefr = strAddRefr + ",";
          }
          var aryAR = strAddRefr.split(",");
          if ($.isArray(aryAR)) {
            for (var m = 0; m < aryAR.length - 1; m++) {
              if (right(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
                tmpGrid12 = tmpGrid12 + ",";
              }
              var strCMPValue = aryAR[m] + ",";
              if (tmpGrid12.indexOf(strCMPValue) > -1) {
                errstr += "同一階層料號" + "[" + strAssm_No + "]" + "中有重覆的插件位置 [" + aryAR[m] + "]。\r\n";
              }
            }
          }
        }
      }
    }
  }
  return errstr;
}
//*********************************************************************
//CHECK 同一筆申請單中是否有重覆申請的項目
//*********************************************************************
function ChkDuplicateData(strAssm_No, strComp_No, strType, index) {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = index + 1; i < tGrid1Data.length; i++) {
      if (strAssm_No == tGrid1Data[i]['SENAO131_2004'] && strComp_No == tGrid1Data[i]['SENAO131_2006']) {
        if (strType == "替代料") {
          if (strType == tGrid1Data[i]['SENAO131_2017']) {
            errstr += "不可同時申請2筆[" + strAssm_No + "-" + strComp_No + "]的資料!!\r\n";
            break;
          } else {
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if (tGrid1Data[i]['SENAO131_2010'] * 1 != 0) {
              errstr += "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\r\n";
              break;
            }
          }
        } else {
          if (tGrid1Data[i]['SENAO131_2017'] == "非替代料" || tGrid1Data[i]['SENAO131_2017'].toUpperCase() == "DISABLE") {
            errstr += "不可同時申請2筆[" + strAssm_No + "-" + strComp_No + "]的資料!!\r\n";
            break;
          } else {
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if (tGrid1Data[i]['SENAO131_2010'] * 1 != 0) {
              errstr += "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\r\n";
              break;
            }
          }
        }
      }
    }
  }
  return errstr;
}
function single_ChkDuplicateData(strAssm_No, strComp_No, strType) {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (strAssm_No == tGrid1Data[i]['SENAO131_2004'] && strComp_No == tGrid1Data[i]['SENAO131_2006']) {
        if (strType == "替代料") {
          if (strType == tGrid1Data[i]['SENAO131_2017']) {
            errstr += "不可同時申請2筆[" + strAssm_No + "-" + strComp_No + "]的資料!!\r\n";
            break;
          } else {
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if (tGrid1Data[i]['SENAO131_2010'] * 1 != 0) {
              errstr += "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\r\n";
              break;
            }
          }
        } else {
          if (tGrid1Data[i]['SENAO131_2017'] == "非替代料" || tGrid1Data[i]['SENAO131_2017'].toUpperCase() == "DISABLE") {
            errstr += "不可同時申請2筆[" + +strAssm_No + "-" + strComp_No + "]的資料!!\r\n";
            break;
          } else {
            //變更前數量不為0，表示change，當change時，不允許同表單作替代料異動
            if (tGrid1Data[i]['SENAO131_2010'] * 1 != 0) {
              errstr += "同一階層中之相同主料件[" + strAssm_No + "-" + strComp_No + "]，不可同時變更用量又新增或刪除替代料!!\r\n";
              break;
            }
          }
        }
      }
    }
  }
  return errstr;
}
//ECO主替代料chk資料
function CHK_ECO_DATE_ERR() {
  var r_value = false;
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2027'] != "" && tGrid1Data[i]['SENAO131_2027'] != "ECO-2") {
        r_value = true; ;
        break;
      }
    }
  }
  return r_value;
}
//因應主料刪除與替代料變更為主料可於同張表單申請，因此於表單傳送前檢核是否已將主料刪除/Phoebe.20131029
function bln_COMP_Deleted(strASSEMBLY, strNewCOMPONENT) {
  var r_value = "";
  var tGrid1Data = getGridData(0);
  var strCOM_ITEM_NO = GetCOMPONENT(strASSEMBLY, strNewCOMPONENT);
  var r_value = "N;" + strCOM_ITEM_NO;
  if (tGrid1Data.length > 0) { //已更
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2004'] == strASSEMBLY && tGrid1Data[i]['SENAO131_2006'] == strCOM_ITEM_NO && tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
        r_value = "Y";
        break;
      }
    }
  }
  return r_value;
}
//判斷COMPONENT是否被刪除
function bln_COMPONENT_DELETED(strASSM_NO, strCOMP_NO) {
  var r_value = false;
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) { //已更
    for (var i = 0; i < tGrid1Data.length; i++) {
      if (tGrid1Data[i]['SENAO131_2004'] == strASSM_NO && tGrid1Data[i]['SENAO131_2006'] == "非替代料" && tGrid1Data[i]['SENAO131_2011'] * 1 == 0) {
        r_value = true;
        break;
      }
    }
  }
  return r_value;
}
function update_ECO_REMARK(strSNO) {
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
      tGrid1Data[strSNO]['SENAO131_2027'] = "ECO-2";
      setGridData(0, eval(tGrid1Data));
  }
}
function FindGridAddRepeat(strAssNo, strPNNo, strAddRefData) {
  var r_value = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) { //已更
    for (var i = 0; i < tGrid1Data.length; i++) {
      var tmpGridValue = "";
      if (tGrid1Data[i]['SENAO131_2004'] == strAssNo && strPNNo != tGrid1Data[i]['SENAO131_2006']) {
        //同一階層料號插件位置是否重複新增
        if (tGrid1Data[i]['SENAO131_2012'] != "") {
          if (left(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
            tmpGridValue = "," + tGrid1Data[i]['SENAO131_2012'];
          }
          if (right(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
            tmpGridValue = tGrid1Data[i]['SENAO131_2012'] + ",";
          }
          if (right(strAddRefData, 1) != ",") {
            strAddRefData = strAddRefData + ",";
          }
          var aryAddRefData = strAddRefData.split(",");
          if ($.isArray(aryAddRefData)) {
            for (var j = 0; j < aryAddRefData.length - 1; j++) {
              if (tmpGridValue.indexOf("," + aryAddRefData[j] + ",") > -1) {
                r_value = aryAddRefData[j];
                break;
              }
            }
          }
        }
      }
    }
  }
  return r_value;
}
function CHKAddData(strAssNo, strCompNo, strAddData) {
  var r_value = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) { //已更
    for (var i = 0; i < tGrid1Data.length; i++) {
      var tmpGridValue = "";
      if (tGrid1Data[i]['SENAO131_2004'] == strAssNo && tGrid1Data[i]['SENAO131_2006'] != strCompNo && tGrid1Data[i]['SENAO131_2012'] != "") {
        if (right(tGrid1Data[i]['SENAO131_2012'], 1) != ",") {
          tmpGridValue = tGrid1Data[i]['SENAO131_2012'] + ",";
        }
        if (right(strAddData, 1) != ",") {
          strAddData = strAddData + ",";
        }
        var aryData = strAddData.split(",");
        if ($.isArray(aryData)) {
          for (var j = 0; j < aryData.length - 1; j++) {
            var tmpGrid = "," + tmpGridValue;
            var tmpArray = "," + aryData[j] + ",";
            if (tmpGrid.indexOf(tmpArray) > -1) {
              r_value = r_value + strCompNo + "與" + tGrid1Data[i]['SENAO131_2006'] + "的Add Reference(" + aryData[j] + ")有重覆,請重新確認填寫!!";
            }
          }
        }
      }
    }
  }
  return r_value;
}
function checkAdd() {
  var errstr = '';
  var strTransItemNo = "";
  var strASSM_NO = gsenao131_2004.value; //上階料號
  var strCOMP_NO = gsenao131_2006.value; //本階料號

  if (gsenao131_2008.value.trim() != "" && !isNaN(gsenao131_2008.value)) {
    gsenao131_2008.value = (gsenao131_2008.value * 1).toFixed(6);
  }
  if (gsenao131_2009.value.trim() != "" && !isNaN(gsenao131_2009.value)) {
    gsenao131_2009.value = (gsenao131_2009.value * 1).toFixed(6);
  }
  if (gsenao131_2012.value.trim() != "" && !isNaN(gsenao131_2012.value)) {
    gsenao131_2012.value = (gsenao131_2012.value * 1).toFixed(6);
  }
  if (gsenao131_2013.value.trim() != "" && !isNaN(gsenao131_2013.value)) {
    gsenao131_2013.value = (gsenao131_2013.value * 1).toFixed(6);
  }

  if (gsenao131_2004.value == "") {
    errstr += "Assembly Level Part Number]不可為空白!!\r\n";
  } else {
    if (!senao131_1017.checked) {
      if (gsenao131_2006.value == "") {
        errstr += "Part Number]不可為空白!!\r\n";
      } else {
        strTransItemNo = ItemNo_EpsToSenao(gsenao131_2004.value);
        var tmp_strTransItem = strTransItemNo.substring(0, 2);
        var tmp_snsi003_1 = querySNSI003_Org("SN111_S03");
        var tmp_snsi003_2 = querySNSI003_Org("SN111_S04");

        if (tmp_strTransItem * 1 >= tmp_snsi003_1 * 1 && tmp_strTransItem * 1 <= tmp_snsi003_2 * 1) {
          if (gsenao131_2015.value == "") {
            errstr += "前2碼為" + tmp_snsi003_1 + "~" + tmp_snsi003_2 + "的[Comment]不可為空白! \r\n";
          }
        }
        var strPhaseOut = ChkPhaseOut(gsenao131_2006.value);
        if (gsenao131_2008.value * 1 != 0 && gsenao131_2010 * 1 == 0) {
          if (strPhaseOut != "" && (left(strPhaseOut, 1) == "D" || left(strPhaseOut, 1) == "L") || left(strPhaseOut, 1) == "O") {
            strErrPhaseOut = strErrPhaseOut + "  " + gsenao131_2006.value + "\r\n";
          }
        }
        if (left(gsenao131_2012.value, 1) != "*") {
          var strPhaseOut1 = ChkPhaseOut(gsenao131_2012.value);
          if (strPhaseOut1 != "" && (left(strPhaseOut1, 1) == "D" || left(strPhaseOut1, 1) == "L" || left(strPhaseOut1, 1) == "O")) {
            strErrPhaseOut = strErrPhaseOut + "  " + gsenao131_2012.value + "\r\n";
          }
        }
        //alert(left(gsenao131_2004.value,1));
        //alert("0;1".indexOf(left(gsenao131_2004.value,1)));
        if ("0;1".indexOf(left(gsenao131_2004.value, 1)) <= -1 && left(gsenao131_2004.value, 2) != "51" && left(gsenao131_2004.value, 2) != "BB" && left(gsenao131_2004.value, 2) != "BE" && left(gsenao131_2004.value, 2) != "BH" && left(gsenao131_2004.value, 2) != "ML" && left(gsenao131_2004.value, 2) != "GB" && gsenao131_2017.value != "替代料") {
          if (gsenao131_2012.value != "" && gsenao131_2008.value * 1 == 0) {
            errstr += "[Add Quantity]不可為0! \r\n";
          } else {
            if (isNaN(gsenao131_2008.value)) {
              errstr += "[Add Quantity]須為數字!!\r\n";
            }
          }
          if (gsenao131_2013.value != "" && gsenao131_2009.value * 1 == 0) {
            errstr += "[Delete Quantity]不可為0! \r\n";
          } else {
            if (isNaN(gsenao131_2009.value)) {
              errstr += "[Delete Quantity]須為數字!!\r\n";
            }
          }
        }
        if (gsenao131_2017.value == "Disable" && gsenao131_2010.value * 1 == 0) {
          errstr += " 沒有 " + gsenao131_2006.value + "這顆料件，因此不需申請刪除! \r\n";
        }
        var strType = gsenao131_2017.value; //處理
        var strADD = gsenao131_2012.value; //add reference
        var strDEL = gsenao131_2013.value //delete reference
        var strID = gsenao131_2018.value //id
        if (strType == "") {
          errstr += "[處理]不可為空白! \r\n";
        } else {
          if (strADD == "" && strDEL == "") {
            //comment 為「替代料」時，可不用輸入增刪值。
            if (strType != "Disable") {
              errstr += "[Add Reference]、[Delete Reference]不可都是空白! \r\n";
            }
          } else {
            if (strType == "替代料") {
              if (strADD != "") {
                //check替代料在Oracle料號主檔是否存在
                var aryRtn = IsNotOracleItem(strADD, strASSM_NO, strCOMP_NO);
                //alert("IsNotOracleItem Function回傳值驗證 : "+aryRtn);
                if (aryRtn[0]) {
                  errstr += strASSM_NO + " 的Oracle[替代料]" + aryRtn[1] + "在Oracle不存在 \r\n";
                }
              }
              //check刪除的替代料在oracle中是否存在
              if (strDEL != "") {
                var aryResult = IsExistStituteItem(strDEL, strID);
                //alert(aryResult);
                if (aryResult[0] == false) {
                  errstr += strASSM_NO + "的Oracle[替代料]" + aryResult[1] + ",在Oracle不存在!!\r\n";
                }
              }
              //若為替代料，替代數不可超過9個。
              var EfCntSubStitute = GetChangeQty(strADD) - GetChangeQty(strDEL);
              var OracleCntSubStitute = GetOracleCntSubStitute(strID);
              if ((OracleCntSubStitute * 1 + EfCntSubStitute * 1) > 9) {
                errstr += strASSM_NO + "的Oracle[替代料]已存在(" + OracleCntSubStitute + ")個! \r\n";
                errstr += "　　EasyFlow申請新增的[替代料]不可超過(" + 9 - OracleCntSubStitute + ")個! \r\n";
              }
              //替代料判斷
              //20210726 TinYu
              //Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
              var tmpAdd = new Array();
              if (strADD.indexOf("-") > -1) {
                var tmpAdd = strADD.split("-");
              } else {
                var tmpAdd = strADD.split(",");
              }
              var bool_IsDupItem_In_ComponentAndAddreference = false;
              bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strType, strASSM_NO, tmpAdd[0].trim());
              if (bool_IsDupItem_In_ComponentAndAddreference) {
                errstr += "[Assembly Level]:(" + strASSM_NO + ")此新增替代料:" + strADD + "中" + tmpAdd[0].trim() + "有重覆在非替代料的主料中";
                //break;
              }
            } else if (strType == "非替代料") {
              //20210726 TinYu
              //Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
              var bool_IsDupItem_In_ComponentAndAddreference = false;
              bool_IsDupItem_In_ComponentAndAddreference = IsDupItem_In_ComponentAndAddreference(strType, strASSM_NO, strCOMP_NO);
              if (bool_IsDupItem_In_ComponentAndAddreference) {
                errstr += "[Assembly Level]:(" + strASSM_NO + ")此新增主料:" + strCOMP_NO + "（處理：非替代料）" + "有重覆在替代料的Add Reference中";
              }
            }
          }
        }
        if (gsenao131_2010.value * 1 < 0 || gsenao131_2010.value == "") {
          errstr += strASSM_NO + "的[Total Quantity After Change]不得小於0!!\r\n ";
        }
      }
    } else {
      gsenao131_2008.value = 0;
      gsenao131_2009.value = 0;
      gsenao131_2010.value = 0;
      gsenao131_2011.value = 0;
      gsenao131_2017.value = "非替代料";
    }
  }
  return errstr;
}
/**
 * 滑鼠點選Grid的動作
 *
 * @param {any} pGridId
 */
function gridRowClick(pGridId) {
  //clearBinding();
  //if (Grid1Obj.getId() == pGridId) {
  if (pGridId === "Grid1") {
    var rowId = getGridSelectRow(0);
    var tGrid1Index = $("#" + frmGridList[0].gid).jqGrid('getRowData', rowId); //可知道點選哪一筆
    var Grid1Data = getGridData(0); 
    if (Grid1Data.length > 0 && tGrid1Index != -1) {
      gsenao131_2014_trans(tGrid1Index['SENAO131_2004'], tGrid1Index['SENAO131_2006'], tGrid1Index['SENAO131_2014']);
      gsenao131_2012_onchange();
      if (gsenao131_2017.value == "替代料") {
        document.getElementById("gsenao131_2012_b1").disabled = false;
        document.getElementById("gsenao131_2013_b1").disabled = false;
        document.getElementById("gsenao131_2013_b2").disabled = false;
        document.getElementById("gsenao131_2013_b1").style.display = "";
        //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
        document.getElementById("gsenao131_2013_b2").style.display = "none";
      } else if (gsenao131_2017.value == "非替代料") {
        document.getElementById("gsenao131_2012_b1").disabled = false;
        document.getElementById("gsenao131_2013_b1").disabled = false;
        document.getElementById("gsenao131_2013_b2").disabled = false;
        //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
        document.getElementById("gsenao131_2013_b1").style.display = "none";
        document.getElementById("gsenao131_2013_b2").style.display = "";
      } else if (gsenao131_2017.value == "Disable") {
        document.getElementById("gsenao131_2012_b1").disabled = true;
        document.getElementById("gsenao131_2013_b1").disabled = true;
        document.getElementById("gsenao131_2013_b2").disabled = true;
        //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
        //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
        document.getElementById("gsenao131_2013_b1").style.display = "none"; 
        document.getElementById("gsenao131_2013_b1").style.display = "none";
      }
      gsenao131_2017_onchange_r();
      if (senao131_1017.checked) {
        document.getElementById("senao131_1025").disabled = false;

        $("#gsenao131_2005").prop("readOnly", true);//d
        $("#gsenao131_2006").prop("readOnly", true);
        document.getElementById("gsenao131_2006_b1").disabled = true;
        $("#gsenao131_2007").prop("readOnly", true);//d
        $('#gsenao131_2017').prop("disabled", true);
        $("#gsenao131_2019").prop("readOnly", true);//d
        $("#gsenao131_2008").prop("readOnly", true);
        $("#gsenao131_2009").prop("readOnly", true);
        $("#gsenao131_2010").prop("readOnly", true);//d
        $("#gsenao131_2011").prop("readOnly", true); //d
        $("#gsenao131_2012").prop("readOnly", true);
        document.getElementById("gsenao131_2012_b1").disabled = true;
        $("#gsenao131_2013").prop("readOnly", true);
        $('#gsenao131_2013').prop("disabled", true);
        document.getElementById("gsenao131_2013_b1").disabled = true;
        document.getElementById("gsenao131_2013_b2").disabled = true;
        $("#gsenao131_2014").prop("readOnly", true);//d
        document.getElementById("gsenao131_2014_b").disabled = true;
        $("#gsenao131_2015").prop("readOnly", true);
        $("#gsenao131_2021").prop("readOnly", true);
        $("#gsenao131_2022").prop("readOnly", true);
        $("#gsenao131_2023").prop("readOnly", true);
        $("#gsenao131_2024").prop("readOnly", true);
        $("#gsenao131_2026").prop("readOnly", true);
        $("#gsenao131_2027").prop("readOnly", true);
      } else {
        document.getElementById("senao131_1025").value = "";
        document.getElementById("senao131_1025").disabled = true;

        $("#gsenao131_2005").prop("readOnly", true);//d
        $("#gsenao131_2006").prop("readOnly", false);
        document.getElementById("gsenao131_2006_b1").disabled = false;
        $("#gsenao131_2007").prop("readOnly", true); //d
        $('#gsenao131_2017').prop("disabled", false);
        $("#gsenao131_2019").prop("readOnly", true);//d
        $("#gsenao131_2008").prop("readOnly", true);
        $("#gsenao131_2009").prop("readOnly", true);
        $("#gsenao131_2010").prop("readOnly", true);//d
        $("#gsenao131_2011").prop("readOnly", true);//d
        $("#gsenao131_2012").prop("readOnly", false);
        $('#gsenao131_2012').prop("disabled", false);
        document.getElementById("gsenao131_2012_b1").disabled = false;
        $("#gsenao131_2013").prop("readOnly", false);
        $('#gsenao131_2013').prop("disabled", false);
        document.getElementById("gsenao131_2013_b1").disabled = false;
        document.getElementById("gsenao131_2013_b2").disabled = false;
        $("#gsenao131_2014").prop("readOnly", true); //d
        document.getElementById("gsenao131_2014_b").disabled = false;
        $("#gsenao131_2015").prop("readOnly", false); //d
        $("#gsenao131_2021").prop("readOnly", true); //d
        $("#gsenao131_2022").prop("readOnly", true); //d
        $("#gsenao131_2023").prop("readOnly", true); //d
        $("#gsenao131_2024").prop("readOnly", true); //d
        $("#gsenao131_2026").prop("readOnly", true); //d
        $("#gsenao131_2027").prop("readOnly", true); //d
      }

      if (activityId != 'UserTask_3') {
        $("#gsenao131_2005").prop("readOnly", true);//d
        $("#gsenao131_2006").prop("readOnly", true);
        document.getElementById("gsenao131_2006_b1").disabled = true;
        $("#gsenao131_2007").prop("readOnly", true);//d
        $('#gsenao131_2017').prop("disabled", true);
        $("#gsenao131_2019").prop("readOnly", true);//d
        $("#gsenao131_2008").prop("readOnly", true);
        $("#gsenao131_2009").prop("readOnly", true);
        $("#gsenao131_2010").prop("readOnly", true);//d
        $("#gsenao131_2011").prop("readOnly", true); //d
        $("#gsenao131_2012").prop("readOnly", true);
        //gsenao131_2012.disabled = true;
        document.getElementById("gsenao131_2012_b1").disabled = true;
        $("#gsenao131_2013").prop("readOnly", true);
        //gsenao131_2013.disabled = true;
        document.getElementById("gsenao131_2013_b1").disabled = true;
        document.getElementById("gsenao131_2013_b2").disabled = true;
        $("#gsenao131_2014").prop("readOnly", true);//d
        $("#gsenao131_2015").prop("readOnly", true);//d
        $("#gsenao131_2021").prop("readOnly", true);//d
        $("#gsenao131_2022").prop("readOnly", true);//d
        $("#gsenao131_2023").prop("readOnly", true);//d
        $("#gsenao131_2024").prop("readOnly", true);//d
        $("#gsenao131_2026").prop("readOnly", true);//d
        $("#gsenao131_2027").prop("readOnly", true);//d
        //DCC跟DCC主管關卡，只有下拉OP CODE可以使用
        if (activityId == "UserTask_21" || activityId == "UserTask_71" || activityId == "UserTask_49" || activityId == "UserTask_23" || activityId == "UserTask_147") { //71關卡是4H-重拋EBOM
          document.getElementById("gsenao131_2014_b").disabled = false;
        } else {
          document.getElementById("gsenao131_2014_b").disabled = true;
        }
      }
      gsenao131_2012.value = tGrid1Index['SENAO131_2012'];
      gsenao131_2013.value = tGrid1Index['SENAO131_2013'];
    }
  }
}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao131_1003_b1').on('click', function () { //Applicant開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao131_1003','senao131_1003_1','senao131_1004','senao131_1004_1');//回傳元件參數
  let tReturnFunction = new Array(""); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao131_1013_b1').on('click', function () { //Model Name開窗
  // sessionStorage 存入數據
  let tTitle = "Model Name";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao131_1013','senao131_1014');//回傳元件參數
  let tReturnFunction = new Array("after_senao131_1013_b1()"); //回傳函數
  let tColAPi = "BPM_ERP_SYS_LW_OracleItemModel_3";
  let tAPI = invokeURL + 'BPM_ERP_SYS_LW_OracleItemModel_3';
  let tParameter = { SEGMENT1: 'ALL', DESCRIPTION: 'ALL', ATTRIBUTE1: 'ALL' };
  let tQBEField = {  SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION', ATTRIBUTE1: 'ATTRIBUTE1'  }; //查詢欄位 {參數欄位:table欄位};
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao131_2004_b1').on('click', function () { //Assembly Level Part Number開窗
  // sessionStorage 存入數據
  let tTitle = "Assembly";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('gsenao131_2004','gsenao131_2005','hdn_r_2004');//回傳元件參數
  let tReturnFunction = new Array("after_gsenao131_2004_b1()"); //回傳函數
  let tColAPi = "BPM_ERP_SYS_LW_EBOMCOMP_Org";
  let tAPI = invokeURL + 'BPM_ERP_SYS_LW_EBOMCOMP_Org';
  let tParameter = { hdn_org: hdn_org.value, ASSY_ITEM_NO: 'ALL', ASSY_ITEM_DESC: 'ALL'};
  let tQBEField = { ASSY_ITEM_NO: 'ASSY_ITEM_NO', ASSY_ITEM_DESC: 'ASSY_ITEM_DESC' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao131_2006_b1').on('click', function () { //Part Number開窗
  hdn_r_2006.value = "";
  if (gsenao131_2004.value == "") {
      alert("請先選取[Assembly Level Part Number]!");
      return false;
  } else {
    // sessionStorage 存入數據
    let tTitle = "PartNumber";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('gsenao131_2006','gsenao131_2007','hdn_r_2006');//回傳元件參數
    let tReturnFunction = new Array("after_gsenao131_2006_b1()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO131_39_Org";
    let tAPI = invokeURL + 'BPM_ERP_SENAO131_39_Org';
    let tParameter = {gsenao131_2004: gsenao131_2004.value, hdn_org:hdn_org.value,COMP_ITEM_NO: 'ALL', COMP_ITEM_DESC: 'ALL'};
    let tQBEField = { COMP_ITEM_NO: 'COMP_ITEM_NO',COMP_ITEM_DESC:'COMP_ITEM_DESC'}; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$('#gsenao131_2012_b1').on('click', function () { //Add_Reference開窗
  // sessionStorage 存入數據
  let tTitle = "Add Reference";  //子視窗抬頭
  let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('hdn_add_ref');//回傳元件參數
  let tReturnFunction = new Array("gsenao131_2012_onchange()"); //回傳函數
  let tColAPi = "BPM_ERP_SYS_MLW_Material_Org1";
  let tAPI = invokeURL + 'BPM_ERP_SYS_MLW_Material_Org1';
  let tParameter = { hdn_org: hdn_org.value, SEGMENT1: 'ALL', DESCRIPTION: 'ALL'};
  let tQBEField = { SEGMENT1: 'SEGMENT1', DESCRIPTION: 'DESCRIPTION'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao131_2013_b2').on('click', function () { //Delete_Reference開窗
  // sessionStorage 存入數據
  let tTitle = "Del_Ref";  //子視窗抬頭
  let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('hdn_del_ref');//回傳元件參數
  let tReturnFunction = new Array("after_gsenao131_2013_pick()"); //回傳函數
  let tColAPi = "BPM_ERP_SENAO131_45_Org";
  let tAPI = invokeURL + 'BPM_ERP_SENAO131_45_Org';
  let tParameter = {gsenao131_2004: gsenao131_2004.value,gsenao131_2006: gsenao131_2006.value,hdn_org: hdn_org.value, COMPONENT_REFERENCE_DESIGNATOR: 'ALL'};
  let tQBEField = { COMPONENT_REFERENCE_DESIGNATOR: 'COMPONENT_REFERENCE_DESIGNATOR'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#gsenao131_2013_b1').on('click', function () { //Delete_Reference開窗
  // sessionStorage 存入數據
  let tTitle = "Del_Ref";  //子視窗抬頭
  let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('hdn_del_ref');//回傳元件參數
  let tReturnFunction = new Array("after_gsenao131_2013_pick()"); //回傳函數
  let tColAPi = "BPM_ERP_sys_MLW_Substitute_Org";
  let tAPI = invokeURL + 'BPM_ERP_sys_MLW_Substitute_Org';
  let tParameter = {gsenao131_2018: gsenao131_2018.value,hdn_org: hdn_org.value, SUB_COMP: 'ALL'};
  let tQBEField = { SUB_COMP: 'SUB_COMP'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
//檢查是否可撤簽 DCC關卡簽過後，不可取回
function chkRegainable() {
  var chk_flag = "Y";
  var dataArray = ajaxGetData(invokeURL +"BPM_SENAO131_001", {
    senao131_1002 : senao131_1002.innerHTML
	});
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      chk_flag = "N";       
    }
  }else{
    console.log("function:"+"chkRegainable" + " API:" + "BPM_SENAO131_001 "+ dataArray[0].result);
    return false;
  }
  if (window.parent.parent.document.getElementById("btnRollback") != null) {
    if (chk_flag == "N") {
      window.parent.parent.document.getElementById("btnRollback").style.display = "none";
    }
  }
}
//*********************************************************************
// 程序: GetID(strASSY_ITEM_NO, strCOMP_ITEM_NO)
// 說明: 根據上階、本階料號 取得 COMPONENT_SEQUENCE_ID
// 參數: strASSY_ITEM_NO 上階料號
//       strCOMP_ITEM_NO 本階料號
//*********************************************************************
function GetID(strASSY_ITEM_NO, strCOMP_ITEM_NO) {
  var r_value = ""; //COMPONENT_SEQUENCE_ID
  var tParm3 = new Array();
  tParm3.push(strASSY_ITEM_NO);
  tParm3.push(strCOMP_ITEM_NO);
  tParm3.push(hdn_org.value);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_02_Org", {
    strASSY_ITEM_NO : tParm3[0],
    strCOMP_ITEM_NO : tParm3[1],
    hdn_org : tParm3[2]
	});
  if(dataArray[0].result == undefined){
    if(dataArray.length>0){
      r_value = dataArray[0].COMPONENT_SEQUENCE_ID; //COMPONENT_SEQUENCE_ID       
    }
  }else{
    console.log("function:"+"GetID" + " API:" + "BPM_ERP_SENAO131_02_Org "+ dataArray[0].result);
  }
  return r_value;
}
//*********************************************************************
// 程序: GetBILLID(strASSY_ITEM_NO, strCOMP_ITEM_NO)
// 說明: 根據上階、本階料號 取得 COMPONENT_SEQUENCE_ID
// 參數: strASSY_ITEM_NO 上階料號
//       strCOMP_ITEM_NO 本階料號
//*********************************************************************
function GetBILLID(strASSY_ITEM_NO) {
  var r_value = ""; //BILL_SEQUENCE_ID
  var tParm3 = new Array();
  tParm3.push(strASSY_ITEM_NO);
  tParm3.push(hdn_org.value);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_23_Org", {
    strASSY_ITEM_NO : tParm3[0],
    hdn_org : tParm3[1]
	});
  if(dataArray[0].result == undefined){
    if(dataArray.length>0  && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
      r_value = dataArray[0].BILL_SEQUENCE_ID; //BILL_SEQUENCE_ID
    }
  }else{
    console.log("function:"+"GetBILLID" + " API:" + "BPM_ERP_SENAO131_23_Org "+ dataArray[0].result);
  }
  return r_value;
}
//庫存數量
function onhand_QTY(strComp_ItemNo) {
  var r_value = "0";
  var tParm = new Array();
  tParm.push(hdn_org.value);
  tParm.push(strComp_ItemNo);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_27_Org", {
    hdn_org : tParm[0],
    strComp_ItemNo : tParm[1]
	});
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = dataArray[0].QTY;
    }
  }else{
    console.log("function:"+"onhand_QTY" + " API:" + "BPM_ERP_SENAO131_27_Org "+ dataArray[0].result);
  }
  return r_value;
}
//在途PR數量
function REQ_QTY(strComp_ItemNo) {
  var r_value = "0";
  var tParm = new Array();
  tParm.push(hdn_org.value);
  tParm.push(strComp_ItemNo);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_25_Org", {
    hdn_org : tParm[0],
    strComp_ItemNo : tParm[1]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = dataArray[0].PO_QTY;
    }
  }else{
    console.log("function:"+"REQ_QTY" + " API:" + "BPM_ERP_SENAO131_25_Org "+ dataArray[0].result);
  }
  return r_value;
}
//在途PO
function PO_QTY(strComp_ItemNo) {
  var r_value = "0";
  var tParm = new Array();
  tParm.push(hdn_org.value);
  tParm.push(strComp_ItemNo);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_24_Org", {
    hdn_org : tParm[0],
    strComp_ItemNo : tParm[1]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = dataArray[0].PO_QTY;
    }
  }else{
    console.log("function:"+"PO_QTY" + " API:" + "BPM_ERP_SENAO131_24_Org "+ dataArray[0].result);
  }
  return r_value;
}
//待驗數數量
function RECEIVING_QTY(strComp_ItemNo) {
  var r_value = "0";
  var tParm = new Array();
  tParm.push(hdn_org.value);
  tParm.push(strComp_ItemNo);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_26_Org", {
    hdn_org : tParm[0],
    strComp_ItemNo : tParm[1]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = dataArray[0].PO_QTY;
    }
  }else{
    console.log("function:"+"RECEIVING_QTY" + " API:" + "BPM_ERP_SENAO131_26_Org "+ dataArray[0].result);
  }
  return r_value;
}
//使用機種
function BOM_COMP_QUANTITIES(strComp_ItemNo, strAssbly_ItemNo) {
  var r_value = "";
  var tParm = new Array();
  tParm.push(strComp_ItemNo);
  tParm.push(strAssbly_ItemNo);
  tParm.push(hdn_org.value);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_28_Org", {
    strComp_ItemNo : tParm[0],
    strAssbly_ItemNo : tParm[1],
    hdn_org : tParm[2]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = "系列機種使用";
    }
  }else{
    console.log("function:"+"BOM_COMP_QUANTITIES" + " API:" + "BPM_ERP_SENAO131_28_Org "+ dataArray[0].result);
  }
  return r_value;
}
//*********************************************************************
// 程序: GetVerion(strASSM_NO)
// 說明: 取得目前版本
// 參數: strASSY_ITEM_NO 上階料號
//       strCOMP_ITEM_NO 本階料號
//*********************************************************************
function GetVerion(strASSM_NO) {
  var r_value = ""; //version
  var tParm3 = new Array();
  tParm3.push(hdn_org.value);
  tParm3.push(strASSM_NO);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_46", {
    hdn_org : tParm3[0],
    strASSM_NO : tParm3[1]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length>0 ){
      r_value = dataArray[0].CURRENT_REVISION;
    }
  }else{
    console.log("function:"+"GetVerion" + " API:" + "BPM_ERP_SENAO131_46 "+ dataArray[0].result);
  }
  return r_value;
}
//*********************************************************************
// 程序: GetOP_CODE(strASSY_ITEM_NO, strCOMP_ITEM_NO)
// 說明: 根據上階、本階料號 取得 op_value
// 參數: strASSY_ITEM_NO 上階料號
//       strCOMP_ITEM_NO 本階料號
//*********************************************************************
function GetOP_CODE(strASSY_ITEM_NO, strCOMP_ITEM_NO) {
  var getOP_Code = "";
  var tParm = new Array();
  tParm.push(strASSY_ITEM_NO);
  tParm.push(strCOMP_ITEM_NO);
  tParm.push(hdn_org.value);
  var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_06_Org", {
    strASSY_ITEM_NO : tParm[0],
    strCOMP_ITEM_NO : tParm[1],
    hdn_org : tParm[2]
  });
  if(dataArray[0].result == undefined){
    if(dataArray.length==1 ){
      getOP_Code = dataArray[0].OP_CODE; //OP_CODE
    }else {
      var tParm2 = new Array();
      tParm2.push(strASSY_ITEM_NO);
      tParm2.push(hdn_org.value);
      var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_47", {
        strASSY_ITEM_NO : tParm2[0],
        hdn_org : tParm2[1]
      });
      if(pData2[0].result == undefined){
        if(pData2.length>0 ){
          getOP_Code = pData2[0].OP_CODE;
        } else {
          getOP_Code = "1";
        }
      }else{
        console.log("function:"+"GetOP_CODE" + " API:" + "BPM_ERP_SENAO131_47 "+ pData2[0].result);
      }
    }
  }else{
    console.log("function:"+"GetOP_CODE" + " API:" + "BPM_ERP_SENAO131_06_Org "+ dataArray[0].result);
  }
  return getOP_Code;
}
/**
 * 先Check Oracle ECO號碼是不是已經產生，整張沒有產生--> 所有產生狀態顯示為 N
 * 該張ECN 有產生--> 判斷單身是否有產生 --> 未產生的單身資料 狀態顯示為 N
 * strEcrNo - ezflow SheetNo 後4碼 (如easyflow no :  000000097 --> strEcrNo
 * @param {any} strEcrNo
 */
function ChkError(strEcrNo) {
  var tGrid1Data = getGridData(0); 
  if (check_needec()) {
    var tParm = new Array();
    tParm.push(hdn_org.value);
    tParm.push(strEcrNo);
    var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_12_Org", {
      hdn_org : tParm[0],
      strEcrNo : tParm[1]
    });
    if(pData[0].result == undefined){
      if(pData.length>0 ){
        if (pData[0].COUNT * 1 <= 0) {
          senao131_1012.value = senao131_1012.value.replace(/[整張單未寫入]/g, "") + "[整張單未寫入]";
          senao131_1012.style.backgroundColor = "red";
          if (tGrid1Data.length > 0) {
            for (var i = 0; i < tGrid1Data.length; i++) {
              tGrid1Data[i]['SENAO131_2016'] = "N";
            }
            document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
            setGridData(0, eval(tGrid1Data));
          }
        } else {
          var intCnt = 0;
          var aryEC = senao131_1002.innerHTML.split("-");
          if (senao131_1011.value.indexOf("-1") > -1) {
            strEcrNo = senao131_1011.value;
            intCnt = 2;
          } else {
            //strEcrNo = "E" + right(aryEC[1],4) + "-" + aryEC[2];
            var lastnum = "";
            var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
            //strEcrNo = "G" + right(serialNumber, 5); //改用流程序號後5碼
            strEcrNo = ec; //20251224 Dex Add 新邏輯取出的EC號賦值給變數
            intCnt = 1;
          }
          for (var m = 1; m <= intCnt; m++) {
            //senao131_1012.value = "E" + right(aryEC[1],4) + "-" + aryEC[2];
            //senao131_1012.value = "G" + right(serialNumber, 5); //改用流程序號後5碼
            var lastnum = "";
            var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
            //strEcrNo = "G" + right(serialNumber, 5); //改用流程序號後5碼
            senao131_1012.value = ec; //20251224 Dex Add 新邏輯取出的EC號賦值給變數
            if (m == 2) {
              //strEcrNo = "E" + right(aryEC[1],4) + "-" + aryEC[2] + "-2";
              //strEcrNo = "G" + right(serialNumber, 5) + "-2"; //改用流程序號後5碼
              var lastnum = "";
              var ec = genCR_CN_No(); //20251124 Dex Add 新增ec_number_flag判斷是G(台灣)還是N(越南)
              //strEcrNo = "G" + right(serialNumber, 5); //改用流程序號後5碼
              strEcrNo = ec + "-2"; //20251224 Dex Add 新邏輯取出的EC號賦值給變數
            }
            var tParm2 = new Array();
            tParm2.push(strEcrNo);
            tParm2.push(hdn_org.value);
            var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_13_Org", {
              strEcrNo : tParm2[0],
              hdn_org : tParm2[1]
            });
            if(pData2[0].result == undefined){
              if(pData2.length>0 ){
                var nCount = 0;
                for (var j = 0; j < tGrid1Data.length; j++) {
                  var tParm3 = new Array();
                  tParm3.push(strEcrNo);
                  tParm3.push(hdn_org.value);
                  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_13_Org1", {
                    hdn_org : tParm3[0],
                    strASSM_NO : tParm3[1],
                    ASSEMBLY_ITEM_NUMBER : tGrid1Data[j]['SENAO131_2004'],
                    COMPONENT_ITEM_NUMBER : tGrid1Data[j]['SENAO131_2006']
                  });
                  if(pData3[0].result == undefined){
                    if(pData3.length>0 ){
                      tGrid1Data[j]['SENAO131_2016'] = "N";
                      nCount = nCount + 1;
                    }
                  }else{
                    console.log("function:"+"GetVerion" + " API:" + "BPM_ERP_SENAO131_13_Org1 "+ pData3[0].result);
                  }
                }
                setGridData(0, eval(tGrid1Data));
                senao131_1012.value = "[" + nCount + "筆單身資料未寫入]";
                senao131_1012.style.backgroundColor = "red";
              }
            }else{
              console.log("function:"+"ChkError" + " API:" + "BPM_ERP_SENAO131_13_Org "+ pData2[0].result);
            }
          }
        }
      }
    }else{
      console.log("function:"+"ChkError" + " API:" + "BPM_ERP_SENAO131_12_Org "+ pData[0].result);
    }
  } else {
    //senao131_1012.value = "No Need EC";
    senao131_1012.value = 'No Need EC';
    senao131_1012.style.backgroundColor = "red";
  }
  document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
}
/** 20260114 Dillan Add
 * 判斷是否存在Common Bom
 * @param {string} assem_level_part_num - 字串
 */
function check_is_com_bom(assem_level_part_num){
	var inComm = false;
	var sqlId = "BPM_ERP_Check_COM_BOM";
  var params = [];
  var data = "";
  var appendSQL = "";

  params.push(assem_level_part_num);

  data = ajaxGetData(invokeURL + sqlId, {
    p:params[0]
  });
  if(data[0].result == undefined){
    if ((data[0].COUNT !=0 ||data[0].COUNT == undefined ) ) {
      if(data.length > 0){
        inComm = true;
      }
    }
  }else{
    console.log("function:"+"check_is_com_bom" + " API:" + "BPM_ERP_Check_COM_BOM " + data[0].result);
    return false;
  }
	return inComm;
}
function FindItemStatus(strItemNo) {
  var r_value = "";
  var tParm = new Array();
  tParm.push(strItemNo);
  tParm.push(hdn_org.value);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_30_Org", {
    SEGMENT1 : tParm[0],
    hdn_org : tParm[1]
  });
  if(pData[0].result == undefined){
    if(pData.length>0 ){
      r_value = pData[0].INVENTORY_ITEM_STATUS_CODE;
    }
  }else{
    console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_30_Org "+ pData[0].result);
  }
  return r_value;
}
//*********************************************************************
// 程序:  ChkPhaseOut(strPN)
// 說明: 新增PHASE OUT 料件時，需警示申請人
//*********************************************************************
function ChkPhaseOut(strPN) {
  var chkPhaseOut = "";
  var strRtnPhaseOut = "";
  var strRtnBOMSub = "";
  var strEOLType = "";
  var tmp_pn = strPN;
  tmp_pn = ReplaceSQM(strPN);
  var tParm = new Array();
  tParm.push(hdn_org.value);
  tParm.push(tmp_pn);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_21_Org", {
    hdn_org : tParm[0],
    tmp_pn : tParm[1]
  });
  if(pData[0].result == undefined){
    if(pData.length>0 ){
      if (pData[0].EOL_DATA != "") {
        if (pData[0].EOL_DATA.substring(0, 1) == "H") {
            //EOL欄位(attribute1)維護 H-XXXX時，需顯示XXXX建議原因
            if (!isNaN(pData[0].EOL_DATA.substring(2, 10))) {
              //H-日期
              strEOLType = "0";
              strRtnPhaseOut = "O;此料號已設Phase out Date，請先至「商品物料編號表」將Phase out Date欄位資料刪除，才可申請EC!! \r\n";
            } else {
              strEOLType = "H";
              strRtnPhaseOut = "H;";
            }
        } else if (pData[0].EOL_DATA.substring(0, 1) == "L") {
          strEOLType = "L";
          strRtnPhaseOut = "L;[ " + tmp_pn + " ]此料為管制用料，不可使用!!\r\n";
        } else if (!isNaN(Date.parse(pData[0].EOL_DATA))) {
          //EOL欄位(attribute1)維護 日期時，表示Phase out(EOL停產)
          strEOLType = "D";
          strRtnBOMSub = GetBOMSub(pData[0].GROUPING_ID, tmp_pn, strEOLType);
          strRtnPhaseOut = "D;[ " + tmp_pn + " ] 已EOL!!\r\n";
        }
      }
    }
  }else{
    console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_21_Org "+ pData[0].result);
  }
  chkPhaseOut = strRtnPhaseOut + strRtnBOMSub;
  return chkPhaseOut;
}
function FindBOMData() {
  var tParm = new Array();
  tParm.push(gsenao131_2004.value);
  tParm.push(gsenao131_2006.value);
  tParm.push(hdn_org.value);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_02_Org", {
    strASSY_ITEM_NO : tParm[0],
    strCOMP_ITEM_NO : tParm[1],
    hdn_org : tParm[2]
  });
  if(pData[0].result == undefined){
    if(pData.length >0 ){
      gsenao131_2007.value = pData[0].COMP_ITEM_DESC.replace(/\""/g, "'"); //comp_item_desc
      gsenao131_2010.value = pData[0].COMPONENT_QUANTITY; //component_quantity
      gsenao131_2014.value = pData[0].OP_CODE; //op_code
      if (fixNull(pData[0].COMPONENT_REMARKS) == "") {
        gsenao131_2015.value = "";
      } else {
        gsenao131_2015.value = pData[0].COMPONENT_REMARKS.replace(/\""/g, "'"); //COMPONENT_REMARKS
      }
      gsenao131_2018.value = pData[0].COMPONENT_SEQUENCE_ID; //COMPONENT_SEQUENCE_ID
      gsenao131_2027.value = "";

      if ((gsenao131_2010.value == "0" || gsenao131_2010.value == "0.0" || gsenao131_2010.value == "0.000000") && gsenao131_2018.value != "") {
        //開放替代料與主料可同時申請/Phoebe.20131029
        gsenao131_2027.value = "ECO-2";
        //20201216 Milla 因最近常發生新增替代料,但替代料沒有在BOM裡又寫入strComp_Seq_Id，導致Oracle的序號有誤，故增加判斷ECO_NUMBER有-2則strComp_Seq_Id拋入空值，待觀察試試
        gsenao131_2018.value = "";
        //return false;
      }
    } else {
      //上階料號+本階料號找不到資料時，提醒是否要新增本階料號(Part Number)
      //新增本階料號時，Add Quantity,Delete Quantity,TotalQuantity Before Change皆預設為0
      var tParm2 = new Array();
      tParm2.push(hdn_org.value);
      tParm2.push(gsenao131_2006.value);
      tParm2.push(gsenao131_2004.value);
      var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_03_Org", {
        hdn_org : tParm2[0],
        gsenao131_2006 : tParm2[1],
        gsenao131_2004 : tParm2[2]
      });
      if(pData2[0].result == undefined){
        if (pData2.length > 0) {
          gsenao131_2008.value = "0"; //Add Quantity
          gsenao131_2009.value = "0"; //Delete Quantity
          gsenao131_2010.value = "0"; //TotalQuantity Before Change
          gsenao131_2012.value = ""; //Add Reference
          gsenao131_2013.value = ""; //Delete Reference
          gsenao131_2018.value = "";
          var tParm3 = new Array();
          tParm3.push(gsenao131_2004.value);
          tParm3.push(hdn_org.value);
          var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_37_Org", {
            SENAO131_2004 : tParm3[0],
            hdn_org : tParm3[1]
          });
          if(pData3[0].result == undefined){
            if(pData3.length>0 && (pData3[0].COUNT !=0 ||pData3[0].COUNT == undefined )){
              gsenao131_2014.value = pData3[0].OP_CODE; //OP_CODE
            } else {
              gsenao131_2014.value = GetOP_CODE(gsenao131_2004.value, gsenao131_2006.value);
            }
          }else{
            console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_37_Org "+ pData3[0].result);
            return false;
          }
          if (confirm("是否要新增此[Part Number]?")) {
            gsenao131_2007.value = pData2[0].COMP_ITEM_DESC.replace(/\""/g, "'");
            var strItemSts = FindItemStatus(gsenao131_2006.value.substring(0, 12));
            if ("H;P".indexOf(strItemSts) > -1) {
              if (strItemSts == "H") {
                alert("此料號已設Hold,請先用「商品物料編號表」恢復料號後,才可申請EC!!");
              } else if (strItemSts == "P") {
                alert("此料號已設P,請先用「商品物料編號表」恢復料號後,才可申請EC!!");
              }
              gsenao131_2006.value = "";
              gsenao131_2007.value = "";
              gsenao131_2008.value = "";
              gsenao131_2009.value = "";
              gsenao131_2010.value = "";
              gsenao131_2011.value = "";
              return false;
            }
          } else {
            gsenao131_2006.value = "";
            gsenao131_2007.value = "";
            return false;
          }
          var str = ChkPhaseOut(gsenao131_2006.value); //本階
          if (str != "") {
            if (str.substring(0, 2) == "D;" || str.substring(0, 1) == "0" || str.substring(0, 1) == "L") {
              alert(right(str, str.length - 2));
              ClearGridActionRowData("006");
            }
          } else {
            gsenao131_2007.value = pData2[0].COMP_ITEM_DESC.replace(/\""/g, "'");
          }
        } else {
          alert("[Part Number]輸入錯誤，請重新輸入!! \r\n");
          ClearGridActionRowData("");
        }
      }else{
        console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_03_Org "+ pData2[0].result);
      }
    }
  }else{
    console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_02_Org "+ pData[0].result);
  }
}
function GetDisableRef(assy_Item, comp_Item) {
  var r_value = "";
  var tParm = new Array();
  tParm.push(assy_Item);
  tParm.push(comp_Item);
  tParm.push(hdn_org.value);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_16_Org", {
    assy_Item : tParm[0],
    comp_Item : tParm[1],
    hdn_org : tParm[2]
  });
  if(pData[0].result == undefined){
    if(pData.length>0 ){
      for (var i = 0; i < pData.length; i++) {
        r_value = r_value + pData[i].REF + ",";
      }
    }
  }else{
    console.log("function:"+"FindItemStatus" + " API:" + "BPM_ERP_SENAO131_16_Org "+ pData[0].result);
  }
  return r_value;
}
//*********************************************************************
// 程序: GetSubsDesc(strAssmNo, strComp_no, strSubsNo)
// 說明: 計算[變更後數量]; 若為替代料且不需EC --> 不需計算數量*/
//*********************************************************************
function GetSubsDesc(strAssmNo, strComp_no, strSubsNo, strFields) {
  var ary = strSubsNo.split(",");
  var sql_id = "";
  var strDesc = "";
  var strSubsDesc = "";
  var break_flag = false;
  if ($.isArray(ary) && strSubsNo != "") {
    for (var i = 0; i < ary.length; i++) {
      var tParm = new Array();
      if (fixNull(ary[i]) != "") {
        var strSubsTemp = left(ary[i], 12);
        tParm.push(hdn_org.value);
        tParm.push(strSubsTemp);
        tParm.push(strAssmNo);
        tParm.push(strComp_no);
        if (strFields == "DEL") {
          sql_id = "BPM_ERP_SENAO131_33_Org";
        } else {
          sql_id = "BPM_ERP_SENAO131_05_Org";
        }
        strDesc = "";
        var pData = ajaxGetData(invokeURL +sql_id, {
          hdn_org : tParm[0],
          strSubsTemp : tParm[1],
          strAssmNo : tParm[2],
          strComp_no : tParm[3]
        });
        if(pData[0].result == undefined){
          if(pData.length>0 ){
            strDesc = "-" + pData[0].DESCRIPTION.replace(",", " ");
          } else {
            strSubsDesc = strSubsNo + "-ERR";
            alert("無此替代料號: " + strSubsTemp);
            break_flag = true;
          }
        }else{
          console.log("function:"+"GetSubsDesc" + " API:" + sql_id + pData[0].result);
        }
        if (break_flag) {
          break;
        }
        strSubsDesc = strSubsDesc + strSubsTemp + strDesc + ",";
      }
    }
  }
  return strSubsDesc;
}
//20210427 TinYu Add檢查是否有open的eco，避免相同上階料號拋ERP時會失敗
function checkOPEN_ECO() {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      var sqlId = "BPM_ERP_SENAO131_50";
      var params = [];
      var data = "";

      params.push(hdn_org.value);
      params.push(tGrid1Data[i]['SENAO131_2004']);

      data = ajaxGetData(invokeURL +sqlId, {
        hdn_org : params[0],
        SEGMENT1 : params[1]
      });
      if(data[0].result == undefined){
        if (data.length > 0 && (data[0].COUNT !=0 ||data[0].COUNT == undefined )) {
          errstr += "上階料號:" + data[0].SEGMENT1 + "尚有OPEN ECO  :" + data[0].CHANGE_NOTICE + "請確認!!\r\n";
        }
      }else{
        console.log("function:"+"checkOPEN_ECO" + " API:" + sqlId + data[0].result);
      }
    }
  }

  return errstr;
}
//20210428 TinYu Add檢查上階料號OP CODE(Routeing)是否有建立
function checkOP_Code() {
  var errstr = "";
  var tGrid1Data = getGridData(0);
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      var sqlId = "BPM_ERP_SENAO131_51";
      var params = [];
      var data = "";

      params.push(tGrid1Data[i]['SENAO131_2004']); //Assembly PartNumber
      params.push(hdn_org.value);
      params.push(tGrid1Data[i]['SENAO131_2014']); //opcode

      data = ajaxGetData(invokeURL +sqlId, {
        assembly : params[0],
        hdn_org : params[1],
        opcode : params[2]
      });
      if(data[0].result == undefined){
        if (data.length > 0 && (data[0].COUNT !=0 ||data[0].COUNT == undefined )) {
          if (data[0].L_COUNT * 1 <= 0) {
            errstr += "第" + (i + 1) + "筆上階料號:" + tGrid1Data[i]['SENAO131_2004'] + "的OP_Code:" + tGrid1Data[i]['SENAO131_2014'] + "尚未建立，請確認!!\r\n";
          }
        }
      }else{
        console.log("function:"+"checkOPEN_ECO" + " API:" + sqlId + data[0].result);
      }
    }
  }

  return errstr;
}
/**
 * 是否為電子機構料件判斷
 *
 * @param {any} partno
 * @returns boolean
 */
function IS_ME_MTL(partno) {
  var IS_ME_MTL = false;
  var tmppartno = left(partno, 5);
  //alert("partno:"+tmppartno);

  var sqlid = "BPM_SENAO108_03";
  var tParams = new Array();
  tParams.push(tmppartno);
  var pData = ajaxGetData(invokeURL +sqlid, {
    pnini5 : tParams[0]
  });
  if(pData[0].result == undefined){
    if(pData.length>0 && (pData[0].COUNT !=0 ||pData[0].COUNT == undefined )){
      IS_ME_MTL = true;
    }
  }else{
    console.log("function:"+"IS_ME_MTL" + " API:" + sqlid + pData[0].result);
  }
  return IS_ME_MTL;
}
function IsImplementSuccess(strEcnNo) {
  var r_value = false;
  var tParm3 = new Array();
  tParm3.push(strEcnNo);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_20", {
    strEcnNo : tParm3[0]
  });
  if(pData3[0].result == undefined){
    if(pData3.length>0){
      if (pData3[0].CNT * 1 > 0) {
        r_value = true;
      }
    }
  }else{
    console.log("function:"+"IsImplementSuccess" + " API:" + "BPM_ERP_SENAO131_20" + pData3[0].result);
  }
  return r_value;
}
/**
 * GET_COMPONENT_ID_QTY 傳回一個長度為二的陣列。
 * 參數一：上階料號
 * 參數二：本階料號
 * 執行 SNSI005 SENAO131 : "02" ，取得Oracle 中，該料號的相關資料。
 * 其中，回傳 Oracle的 COMPONENT_SEQUENCE_ID 與 COMPONENT_QUANTITY
 * @param {any} strASSM_NO
 * @param {any} strCOMP_NO
 */
function GET_COMPONENT_ID_QTY(strASSM_NO, strCOMP_NO) {
  var r_value = new Array();
  var tParm3 = new Array();
  tParm3.push(strASSM_NO);
  tParm3.push(strCOMP_NO);
  tParm3.push(hdn_org.value);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_02_Org", {
    strASSY_ITEM_NO : tParm3[0],
    strCOMP_ITEM_NO : tParm3[1],
    hdn_org : tParm3[2]
	});
  if(pData3[0].result == undefined){
    if(pData3.length>0){
      r_value[0] = pData3[0].COMPONENT_SEQUENCE_ID; //component_sequence_id
      r_value[1] = pData3[0].COMPONENT_QUANTITY; //COMPONENT_QUANTITY
    } else {
      r_value[0] = "";
      r_value[1] = "0";
    }
  }else{
    console.log("function:"+"GET_COMPONENT_ID_QTY" + " API:" + "BPM_ERP_SENAO131_02_Org "+ pData3[0].result);
  }
  return r_value;
}
/**
 * 同一筆申請單中是否有重覆申請的項目
 *
 * @param {any} strAssmNo
 * @returns 單號
 */
function GetSheetNoByVerion(strAssmNo) {
  var r_value = "";
  var sqlid = "BPM_SENAO131_41_Org";
  var tParams = new Array();
  tParams.push(strAssmNo);
  tParams.push(form_ou.value);
  var pData = ajaxGetData(invokeURL +sqlid, {
    strAssmNo : tParams[0],
    form_ou : tParams[1]
	});
  if(pData[0].result == undefined){
    if(pData.length>0 && (pData[0].COUNT !=0 ||pData[0].COUNT == undefined )){
      r_value = pData[0].FORMSERIALNUMBER;
    }
  }else{
    console.log("function:"+"GetSheetNoByVerion" + " API:" + sqlid+ pData[0].result);
  }
  return r_value;
}
/**
 * 程序: GetCOMPQty(strASSY, strCOMP )
 * 說明: 利用上階+本階取得erp中的數量，ERP無資料時,傳回0
 * @param {any} strASSY
 * @param {any} strCOMP
 */
function GetCOMPQty(strASSY, strCOMP) {
  var r_value = "0"; //BILL_SEQUENCE_ID
  var tParm3 = new Array();
  tParm3.push(strASSY);
  tParm3.push(strCOMP);
  tParm3.push(hdn_org.value);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_19_Org", {
    strASSY : tParm3[0],
    strCOMP : tParm3[1],
    hdn_org : tParm3[2]
	});
  if(pData3[0].result == undefined){
    if(pData3.length>0){
      r_value = pData3[0].COMPONENT_QUANTITY; //BILL_SEQUENCE_ID
    }
  }else{
    console.log("function:"+"GetCOMPQty" + " API:" + "BPM_ERP_SENAO131_19_Org "+ pData3[0].result);
  }
  return r_value;
}
function MsgboxEC_XItem() {

  senao131_1018.value = "";

  var intK = 0;
  var tGrid1Data = getGridData(0); 
  if (tGrid1Data.length > 0) {
    for (var i = 0; i < tGrid1Data.length; i++) {
      //11XXAXXXXXXX(11成品料號)若有X料號，則提示是否EC X料號，系統不自動EC
      if (left(tGrid1Data[i]['SENAO131_2004'], 2) == "11" && tGrid1Data[i]['SENAO131_2004'].substr(4, 1) == "A") {
        var strXWItemErr = "";
        var strWItem = tGrid1Data[i]['SENAO131_2004'].replace("A", "W"); //將A料號置換成W料號
        var tParm = new Array();
        tParm.push(strWItem);
        tParm.push(tGrid1Data[i]['SENAO131_2006']);
        tParm.push(hdn_org.value);
        var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_02_Org", {
          strASSY_ITEM_NO : tParm3[0],
          strCOMP_ITEM_NO : tParm3[1],
          hdn_org : tParm3[2]
        });
        if(pData[0].result == undefined){
          if(pData.length>0){
            var tParm2 = new Array();
            tParm2.push(strWItem);
            tParm2.push(hdn_org.value);
            var blnAppXItem = ChkApplyXItem(strWItem, tGrid1Data[i]['SENAO131_2006']);
            var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_30_Org", {
              SEGMENT1 : tParm3[0],
              hdn_org : tParm3[1]
            });
            if(pData2[0].result == undefined){
              if (pData2.length > 0 && !blnAppXItem) {
                strXWItemErr = strWItem;
              }
              if (strXWItemErr != "" && senao131_1018.value.indexOf(strXWItemErr) <= -1) {
                intK = intK + 1;
                senao131_1018.value = senao131_1018.value + intK + ". " + "料號" + tGrid1Data[i]['SENAO131_2004'] + "申請EC，查有" + strXWItemErr + "料號，請確認是否有需EC !!\r\n";
              }
            }else{
              console.log("function:"+"MsgboxEC_XItem" + " API:" + "BPM_ERP_SENAO131_30_Org "+ pData2[0].result);
            }
          } else {
            if (tGrid1Data[i]['SENAO131_2012'] != "" && tGrid1Data[i]['SENAO131_2013'] == "") {
              var tParm3 = new Array();
              tParm3.push(strWItem);
              tParm3.push(hdn_org.value);
              var blnAppXItem = ChkApplyXItem(strWItem, tGrid1Data[i]['SENAO131_2006']);
              var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_32_Org", {
                strWItem : tParm3[0],
                hdn_org : tParm3[1]
              });
              if(pData3[0].result == undefined){
                if (pData3.length > 0 && !blnAppXItem) {
                  strXWItemErr = strWItem;
                }
                if (strXWItemErr != "" && senao131_1018.value.indexOf(strXWItemErr) <= -1) {
                  intK = intK + 1;
                  senao131_1018.value = senao131_1018.value + intK + ". " + "料號" + tGrid1Data[i]['SENAO131_2004'] + "申請EC，查有" + strXWItemErr + "料號，請確認是否有需EC !!\r\n";
                }
              }else{
                console.log("function:"+"MsgboxEC_XItem" + " API:" + "BPM_ERP_SENAO131_32_Org "+ pData3[0].result);
              }
            }
          }
        }else{
          console.log("function:"+"MsgboxEC_XItem" + " API:" + "BPM_ERP_SENAO131_02_Org "+ pData[0].result);
        }
      }
    }
  }
}
//Phoebe.20110707
//重拋BOM時，檢查是否已發料，因產線已發料但還未打件，而RD在此時重拋EBOM，
//將會造成發出的料件會與系統BOM list不符問題
function isWIPRelease(strItemNo) {
  var r_value = false;
  var tParm3 = new Array();
  tParm3.push(hdn_org.value);
  tParm3.push(strItemNo);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_29_Org", {
    hdn_org : tParm3[0],
    strItemNo : tParm3[1]
  });
  if(pData3[0].result == undefined){
    if (pData3.length > 0 && !blnAppXItem) {
      if (pData3[0].CNT * 1 > 0) {
        r_value = true;
      }
    }
  }else{
    console.log("function:"+"isWIPRelease" + " API:" + "BPM_ERP_SENAO131_29_Org "+ pData3[0].result);
  }
  return r_value;
}
//*********************************************************************
//CHECK 簽核中申請單中是否有和該表單重覆申請的項目 senao131_2004,senao131_2006
//*********************************************************************
function ChkProcessingData(strASSM_NO, strCOMP_NO) {
  var errstr = "";
  var sqlid = "BPM_SENAO131_40";
  var tParams = new Array();
  tParams.push(strASSM_NO);
  tParams.push(strCOMP_NO);
  var tTypes = new Array();
  tTypes.push(12);
  tTypes.push(12);
  var pData = ajaxGetData(invokeURL +sqlid, {
    strASSM_NO : tParams[0],
    strCOMP_NO : tParams[1]
  });
  if(pData[0].result == undefined){
    if (pData.length > 0 ) {
      //20210321 TinYu Add 若是進行中的表單在最後PMC會辦/生管會辦 就不卡
      errstr += ChkProcessingData2(strASSM_NO, strCOMP_NO);
      if (errstr != "") {
        errstr = ""; //進來後在清掉
        if (senao131_1002.innerHTML != "undefined") {
          if (senao131_1002.innerHTML != pData[0].FORMSERIALNUMBER) {
            errstr += "已有同仁:" + pData[0].SENAO131_1003 + "-" + pData[0].SENAO131_1003_1 + "申請處理中!!\r\n不允許申請變更以下申請資料:\r\n，Assembly Level P/N[" + strASSM_NO + "] - P/N[" + strCOMP_NO + "]";
          }
        } else {
          errstr += "已有同仁:" + pData[0].SENAO131_1003 + "-" + pData[0].SENAO131_1003_1 + "申請處理中!!\r\n不允許申請變更以下申請資料:\r\n，Assembly Level P/N[" + strASSM_NO + "] - P/N[" + strCOMP_NO + "]";
        }
      }
    }
  }else{
    console.log("function:"+"ChkProcessingData" + " API:" + sqlid+ pData[0].result);
  }
  return errstr.trim();
}
//*********************************************************************
//20210321 TinYu Add
//CHECK 簽核中申請單中是否有和該表單重覆申請的項目 senao131_2004,senao131_2006
//若簽核中的表單在最後一大關 PMC會辦/生管會辦 就不卡
//*********************************************************************
function ChkProcessingData2(strASSM_NO, strCOMP_NO) {
  var errstr = "";
  var sqlid = "BPM_SENAO131_48";
  var tParams = new Array();
  tParams.push(strASSM_NO);
  tParams.push(strCOMP_NO);
  var pData = ajaxGetData(invokeURL +sqlid, {
    strASSM_NO : tParams[0],
    strCOMP_NO : tParams[1]
  });
  if(pData[0].result == undefined){
    if (pData.length > 0 ) {
      //alert(pData.recordValues[0][3]);
      if (pData[0].ID == 'UserTask_35' || pData[0].ID == 'UserTask_87') {
        errstr = "";
      } else {
        errstr = "ing";
      }
    }
  }else{
    console.log("function:"+"ChkProcessingData" + " API:" + sqlid+ pData[0].result);
  }
  return errstr.trim();
}
//*********************************************************************
//依 Component_Sequence_Id 取得oracle中已存在的替代料數量。
//*********************************************************************
function GetOracleCntSubStitute(strComponent_Sequence_Id) {
  var r_value = false;
  var tParm3 = new Array();
  tParm3.push(strComponent_Sequence_Id);
  tParm3.push(hdn_org.value);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_07_Org", {
    strComponent_Sequence_Id : tParm3[0],
    hdn_org : tParm3[1]
  });
  if(pData3[0].result == undefined){
    if (pData3.length > 0 ) {
      r_value = pData3[0].CNT * 1;
    }
  }else{
    console.log("function:"+"GetOracleCntSubStitute" + " API:" + "BPM_ERP_SENAO131_07_Org"+ pData3[0].result);
  }
  return r_value;
}
//IsSubStituteItem - 替代料資料重覆
//IsSubStituteItem = true 表示 已存在此替代料
function IsSubStituteItem(strItem, strid) {
  var r_value = false;
  var tParm3 = new Array();
  tParm3.push(strid);
  tParm3.push(hdn_org.value);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_44_Org", {
    strid : tParm3[0],
    hdn_org : tParm3[1]
  });
  if(pData3[0].result == undefined){
    if (pData3.length > 0 ) {
      for (var i = 0; i < pData3.length; i++) {
        if (pData3[i].SUB_COMP == strItem) {
          r_value = true;
          break;
        }
      }
    } else {
      r_value = false;
    }
  }else{
    console.log("function:"+"IsSubStituteItem" + " API:" + "BPM_ERP_SENAO131_44_Org"+ pData3[0].result);
  }
  return r_value;
}
//*********************************************************************
//程序:IsExistBom(strSubsData , strASSM_NO)
//說明:是否存在BOM表中
//*********************************************************************
function IsExistBom(strSubsData, strASSM_NO, strFlag, strSNO) {
  var r_value = false;
  var ary = strSubsData.split(",");
  var i = 0;
  var exitFlag = false;
  var tParm = new Array();
  tParm[0] = "";
  tParm[1] = "";
  tParm[2] = hdn_org.value;
  if ($.isArray(ary)) {
    tParm[0] = strASSM_NO;
    while (!exitFlag && i < ary.length) {
      if (fixNull(ary[i]) != "") {
        var strSubs = left(ary[i], 12).trim();
        tParm[1] = strSubs;
        var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_06_Org", {
          strASSY_ITEM_NO : tParm[0],
          strCOMP_ITEM_NO : tParm[1],
          hdn_org : tParm[2]
        });
        if(pData[0].result == undefined){
          if (pData.length == 0) {
            r_value = false;
          } else {
            if (strFlag == "ECO-2") {
              var strDeleted = bln_COMP_Deleted(strASSM_NO, strSubs);
              if (left(strDeleted, 1) == "N") {
                if (strDeleted.length == 2) {
                  //為主料
                  if (!bln_COMPONENT_DELETED(strASSM_NO, strSubs)) {
                    r_value = false;
                  } else {
                    r_value = true;
                  }
                } else {
                  r_value = true;
                  exitFlag = true;
                }
              } else {
                r_value = false;
              }
            } else {
              if (bln_BOM_COMP_Deleted(strASSM_NO, strSubs, strSNO) == "Y") {
                r_value = false;
              } else {
                r_value = true;
              }
              exitFlag = true;
            }
          }
        }else{
          console.log("function:"+"IsExistBom" + " API:" + "BPM_ERP_SENAO131_06_Org "+ pData[0].result);
        }
      }
      i = i + 1;
    }
  }
  return r_value;
}
//取得替代料的主料
function GetCOMPONENT(strASSEMBLY, strNewCOMPONENT) {
  var r_value = "";
  var tParm3 = new Array();
  tParm3.push(strASSEMBLY);
  tParm3.push(strNewCOMPONENT);
  tParm3.push(hdn_org.value);
  var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_34_Org", {
    strASSEMBLY : tParm3[0],
    strNewCOMPONENT : tParm3[1],
    hdn_org : tParm3[2]
  });
  if(pData3[0].result == undefined){
    if (pData3.length > 0 ) {
      r_value = pData3[0].COMPONENT;
    }
  }else{
    console.log("function:"+"GetCOMPONENT" + " API:" + "BPM_ERP_SENAO131_34_Org"+ pData3[0].result);
  }
  return r_value;
}
//'*********************************************************************
//'IsDisabledItem -- 為系統不存在 的item
//'*********************************************************************
function IsNotOracleItem(strdata, strASSY_ITEM_NO, strCOMP_ITEM_NO) {
  var aryRtn = new Array();
  aryRtn.push(false);
  aryRtn.push("");
  var ary = strdata.split(",");
  var tDefaultAppendSQL = "";

  var i = 0;
  if ($.isArray(ary)) {
    while (aryRtn[0] == false && i < ary.length - 1) {
      if (fixNull(ary[i]) != "" && typeof(ary[i]) != "undefined") {
        var strRPL = ary[i].trim().replace(" ", "@@@");
        if (((ary[i].length == 12 && strRPL.indexOf("@@@") <= -1)) || ary[i].substr(12, 1) == "-") {
          var strSubsNo = left(ary[i], 12).trim();
          var tParm = new Array();
          tParm.push(hdn_org.value);
          tParm.push(strSubsNo);
          tParm.push(strASSY_ITEM_NO);
          tParm.push(strCOMP_ITEM_NO);
          var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_05_Org", {
            hdn_org : tParm[0],
            strSubsTemp : tParm[1],
            strAssmNo : tParm[2],
            strComp_no : tParm[3]
          });
          if(pData[0].result == undefined){
            if (pData.length == 0) {
              aryRtn[0] = true;
              aryRtn[1] = strSubsNo;
            }
          }else{
            console.log("function:"+"IsNotOracleItem" + " API:" + "BPM_ERP_SENAO131_05_Org"+ pData[0].result);
          }
        }
      }
      i = i + 1;
    }
  }
  return aryRtn;
}
//*********************************************************************
// 程序:  GetBOMSub(strAtt15, strPN, strEOLType)
// 說明: '/判斷是否有其他可用替代料
// /strEOLType:PhaseOut=D; H-XXXX=H
//*********************************************************************
function GetBOMSub(strAtt15, strPN, strEOLType) {
  var strBSValue = "";
  var tParm = new Array();
  tParm.push(strAtt15);
  tParm.push(hdn_org.value);
  tParm.push(strPN);
  var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_22_Org", {
    strAtt15 : tParm[0],
    hdn_org : tParm[1],
    strPN : tParm[2]
  });
  if(pData[0].result == undefined){
    if (pData.length > 0) {
      if (strEOLType == "D") {
        strBSValue = strBSValue + ",請改用替代料：\r\n";
      } else if (strEOLType == "H") {
        strBSValue = strBSValue + ",建議改用替代料：\r\n";
      }
      var k = 0;
      for (var i = 0; i < pData.length; i++) {
        if ((pData[i].DESCRIPTION.trim() + "") == "") {
          k = k + 1;
          strBSValue = strBSValue + "(" + k + ")" + pData[i].SEGMENT1 + "\r\n";
        } else if (pData[i].DESCRIPTION.substring(0, 1) == "H") {
          k = k + 1;
          strBSValue = strBSValue + "(" + k + ")" + pData[i].SEGMENT1 + "(但此料被建議不好用-因" + right(pData[i].DESCRIPTION, pData[i].DESCRIPTION.length - 2) + ",最好能另尋新料) \r\n";
        }
      }
    }
  }else{
    console.log("function:"+"GetBOMSub" + " API:" + "BPM_ERP_SENAO131_22_Org"+ pData[0].result);
  }
  return strBSValue;
}
/**
 *Part Number新增主料（處理：非替代料）及Add Reference新增替代料（處理：替代料）同一料號時，在送出表單時系統提示卡傳送
 *IsDupItem_In_ComponentAndAddreference
 *@param strType 處理
 *@param strItemNo 料號
 *@return retVal true/false
 */
function IsDupItem_In_ComponentAndAddreference(strType, strAssembly, strItemNo) {
  var retVal = false;
  var tGrid1Data = getGridData(0); 
  var tGrid1DataCount = tGrid1Data.length;
  var tParams = [strAssembly, strItemNo, hdn_org.value];
  var dataArray = ajaxGetData(invokeURL + "BPM_ERP_SENAO111_05", {//查詢BOM本階資料
    gsenao111d004:tParams[0],
    gsenao111d006:tParams[1],
    orgno:tParams[2]
  })
  if(dataArray[0].result == undefined){
    if (dataArray.length == 0) { //料號不在BOM裡
      for (var i = 0; i < tGrid1DataCount; i++) {
        if (strType == "替代料") {
          if (tGrid1Data[i]['SENAO131_2017'] == "非替代料" && tGrid1Data[i]['SENAO131_2004'] == strAssembly && tGrid1Data[i]['SENAO131_2006'] == strItemNo) {
            retVal = true;
          }
        }
        if (strType == "非替代料") {
          if (tGrid1Data[i]['SENAO131_2017'] == "替代料" && tGrid1Data[i]['SENAO131_2004'] == strAssembly && tGrid1Data[i]['SENAO131_2012'].indexOf(strItemNo) > -1) {
            retVal = true;
          }
        }
      }
    }
  }else{
    console.log("function:"+"IsDupItem_In_ComponentAndAddreference" + " API:" + "BPM_ERP_SENAO111_05 "+ dataArray[0].result);
  } 
  return retVal;
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * [Grid] 新增資料
 */
function btnAdd_onclick() {
  var errstr = '';
  var strTransItemNo = "";
  var strASSM_NO = gsenao131_2004.value; //上階料號
  var strCOMP_NO = gsenao131_2006.value; //本階料號

  errstr += checkAdd();
  if (errstr != '') {
    alert(errstr);
    return false;
  } else {
    gridaddRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    initGridRow();
    document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
  }
  return true;
}
/**
 * [Grid] 修改資料
 */
function btnEdit_onclick() {
  var errstr = '';
  var strTransItemNo = "";
  var strASSM_NO = gsenao131_2004.value; //上階料號
  var strCOMP_NO = gsenao131_2006.value; //本階料號
  var tData = Grid1.value;
  var tGrid1Index = getGridSelectRow(0); //可知道點選哪一筆
  if (tGrid1Index != -1) {
    //DCC/DCC主管關卡
    if (activityId == "UserTask_21" || activityId == "UserTask_71" || activityId == "UserTask_23" || activityId == "UserTask_147") {
      gsenao131_2014.value = gsenao131_2014_b.value;
    }

    errstr += checkAdd();
  } else {
    alert("請先在下方選擇一筆資料，再做編輯!!\n");
    return false;
  }

  if (errstr != '') {
    alert(errstr);
    return false;
  } else {
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    refreshRowNo(0, 'SENAO131_2003');//重新計算單身Grid項次
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
    document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
  }
}
/**
 * [Grid] 刪除資料
 */
function btnDel_onclick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  var errstr = "";
  if (tGridIndex != -1) {
    griddeleteRow(0); //將Grid某筆資料刪除
    clearBinding(0);
    refreshRowNo(0, 'SENAO131_2003');//重新計算單身Grid項次
    initGridRow();
    document.getElementById("Grid1").value = JSON.stringify(getGridData(0)); //將新的資料存入Grid隱藏欄位中
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
    return true;
  } else {
    alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
    return false;
  }
}
/**
  *Excel匯入
  *btnUploadXls_onclick
*/
function btnUploadXls_onclick(){

}	//end of btnUploadXls_onclick Excel匯入
function excelUp_onclick(){//確定按鈕

}
/**
 *匯出EXCEL
 *btnExport_onclick
*/
function btnExport_onclick(){
  var tGrid1Data = getGridData(0); 
  if (tGrid1Data.length === 0) {
    alert("查無資料!!");
    return;
  }
  var colModel = $("#" + frmGridList[0].gid).jqGrid("getGridParam", "colModel");
  var indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 24];
  var selectedCols = indexArray.map(function (i) {
    return colModel[i];
  }).filter(Boolean);

  // 組成匯出資料
  var exportData = tGrid1Data.map(function (row) {
    var newRow = {};
    selectedCols.forEach(function (col) {
      newRow[col.label] = row[col.name];
    });
    return newRow;
  });
  // SheetJS 產生 Excel 並下載
  var ws = XLSX.utils.json_to_sheet(exportData);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, "SENAO131_export.xlsx");
  /*if (tGrid1Data.length > 0) {
    var tLabel = "序號,異常,Assembly Level Part Number,Assembly Level Part's Name,Part Number,Part's Name,處理,版本,";
    tLabel += "Add Quantity,Delete Quantity,Total Quantity Before Change,Total Quantity After Change,Add Reference,";
    tLabel += "Delete Reference,OP CODE,COMMENT,id,BILLid,庫存數,在途PR數,在途PO數,待驗數,廠商先行備料,使用機種,ECO_Number"; //Grid欄位名稱
    //tLabel=encodeURIComponent(tLabel);
    tLabel = encodeURI(tLabel);
    tFunction = 'Grid1'; //Grid代號
    var tForm = document.forms[0];
    var tNaNaAction = document.forms[0].action;
    tForm.action = " /CustomWeb/ExportExcelServlet.excel?hdnFunction=" + tFunction + "&hdnLabel=" + tLabel;
    tForm.method = "post";
    tForm.submit();
    tForm.action = tNaNaAction;
  }
  else {
    alert("查無資料!!");
  }*/
}
/**
 *列印按鈕
 *btn_Print_onclick
*/
function btnPrint_onclick(){
  //20260409 Dex marked
  //window.open('/NaNaWeb/CustomSNO/jsp/SENAO131/SENAO131_Print.jsp?formserialnumber=' + senao131_1002.innerHTML, '', 'left=550,top=20,width=850,height=800,help=no,status=no,scrollbars=yes,resizable=yes');
	//20260409 Dex Add 新增processID帶入參數
  window.open('/NaNaWeb/CustomSNO/jsp/SENAO131/SENAO131_Print.jsp?processID='+ senao131_1001.value +'&formserialnumber=' + senao131_1002.innerHTML, '', 'left=550,top=20,width=850,height=800,help=no,status=no,scrollbars=yes,resizable=yes');
  //alert("功能尚未完成!!");
}
function senao131_1017_onchange() {
  clearBinding(0); 
  if (senao131_1017.checked) {
    document.getElementById("senao131_1025").disabled = false;

    $("#gsenao131_2005").prop("readOnly", true); //d
    $("#gsenao131_2006").prop("readOnly", true);
    document.getElementById("gsenao131_2006_b1").disabled = true;
    $("#gsenao131_2007").prop("readOnly", true);//d
    $('#gsenao131_2017').prop("disabled", false);
    $("#gsenao131_2019").prop("readOnly", true);//d
    $("#gsenao131_2008").prop("readOnly", true);
    $("#gsenao131_2009").prop("readOnly", true);
    $("#gsenao131_2010").prop("readOnly", true); //d
    $("#gsenao131_2011").prop("readOnly", true);//d
    $("#gsenao131_2012").prop("readOnly", true);
    document.getElementById("gsenao131_2012_b1").disabled = true;
    $("#gsenao131_2013").prop("readOnly", true);
    document.getElementById("gsenao131_2013_b1").disabled = true;
    document.getElementById("gsenao131_2013_b2").disabled = true;
    $("#gsenao131_2014").prop("readOnly", true);//d
    document.getElementById("gsenao131_2014_b").disabled = true;
    $("#gsenao131_2015").prop("readOnly", true);//d
    $("#gsenao131_2021").prop("readOnly", true);//d
    $("#gsenao131_2022").prop("readOnly", true);//d
    $("#gsenao131_2023").prop("readOnly", true);//d
    $("#gsenao131_2024").prop("readOnly", true);//d
    $("#gsenao131_2026").prop("readOnly", true);//d
    $("#gsenao131_2027").prop("readOnly", true);//d
  } else {
    document.getElementById("senao131_1025").disabled = true;

    $("#gsenao131_2005").prop("readOnly", true);//d
    $("#gsenao131_2006").prop("readOnly", false);
    document.getElementById("gsenao131_2006_b1").disabled = false;
    $("#gsenao131_2007").prop("readOnly", true); //d
    $('#gsenao131_2017').prop("disabled", false);
    $("#gsenao131_2019").prop("readOnly", true);//d
    $("#gsenao131_2008").prop("readOnly", true);
    $("#gsenao131_2009").prop("readOnly", true);
    $("#gsenao131_2010").prop("readOnly", true);//d
    $("#gsenao131_2011").prop("readOnly", true);//d
    $("#gsenao131_2012").prop("readOnly", false);
    document.getElementById("gsenao131_2012_b1").disabled = false;
    $("#gsenao131_2013").prop("readOnly", false);
    document.getElementById("gsenao131_2013_b1").disabled = false;
    document.getElementById("gsenao131_2013_b2").disabled = false;
    $("#gsenao131_2014").prop("readOnly", true);//d
    document.getElementById("gsenao131_2014_b").disabled = false;
    $("#gsenao131_2015").prop("readOnly", false); //d
    $("#gsenao131_2021").prop("readOnly", true); //d
    $("#gsenao131_2022").prop("readOnly", true); //d
    $("#gsenao131_2023").prop("readOnly", true); //d
    $("#gsenao131_2024").prop("readOnly", true); //d
    $("#gsenao131_2026").prop("readOnly", true); //d
    $("#gsenao131_2027").prop("readOnly", true); //d
  }
}
function gsenao131_2004_onchange() {
  if (gsenao131_2004.value.trim() != "") {
    //20260107 Dex Add SVN新增判斷是否有Common Bom，有則不能繼續填單，跳出提示訊息(s)
    if(form_ou.value == "svn"){
      if(check_is_com_bom(gsenao131_2004.value)){
        gsenao131_2004.value = '';
        alert(gsenao131_2004.value + "屬Common Bom，ORG僅限IC BU，請至SENAO131 (EBOM ECR/ECN Form)填單");
        return;
      }
    }
    //20260107 Dex Add SVN新增判斷是否有Common Bom，有則不能繼續填單，跳出提示訊息(e)
    var tParm = new Array();
    tParm.push(hdn_org.value);
    tParm.push(gsenao131_2004.value.trim());
    var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_01_Org", {
      hdn_org : tParm[0],
      gsenao131_2004 : tParm[1]
    });
    if(pData[0].result == undefined){
      if(pData.length>0 && (pData[0].COUNT !=0 ||pData[0].COUNT == undefined )){
        gsenao131_2005.value = pData[0].ASSY_ITEM_DESC;
      } else {
        alert("上階料號 [ " + gsenao131_2004.value + " ]輸入錯誤，錯誤原因:\r\n1) E-BOM查無此上階料號 \r\n2) 請確認是否為 M-BOM狀態");
        gsenao131_2004.value = "";
        gsenao131_2005.value = "";
        return false;
      }
    }else{
      console.log("function:"+"gsenao131_2004_onchange" + " API:" + "BPM_ERP_SENAO131_01_Org "+ pData[0].result);
    }
    var tParm2 = new Array();
    tParm2.push(gsenao131_2004.value.trim());
    tParm2.push(hdn_org.value);
    var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_23_Org", {
      strASSY_ITEM_NO : tParm2[0],
      hdn_org : tParm2[1]
    });
    if(pData2[0].result == undefined){
      if(pData2.length>0 && (pData2[0].COUNT !=0 ||pData2[0].COUNT == undefined )){
        gsenao131_2020.value = pData2[0].BILL_SEQUENCE_ID;
      } else {
        gsenao131_2020.value = "";
      }
    }else{
      console.log("function:"+"gsenao131_2004_onchange" + " API:" + "BPM_ERP_SENAO131_23_Org "+ pData2[0].result);
    }
  } else {
    gsenao131_2004.value = "";
    gsenao131_2005.value = "";
    gsenao131_2020.value = "";
  }
  //alert(gsenao131_2020.value);
  var strItemSts = FindItemStatus(gsenao131_2004.value.substring(0, 12));
  if ("H;P".indexOf(strItemSts) > -1) {
    if (strItemSts == "H") {
      alert("此料號已設Hold,請先用「商品物料編號表」恢復料號後,才可申請EC!!");
    } else if (strItemSts == "P") {
      alert("此料號已設P,請先用「商品物料編號表」恢復料號後,才可申請EC!!");
    }
    gsenao131_2004.value = "";
    gsenao131_2005.value = "";
    gsenao131_2011.value = "";
    gsenao131_2012.value = "";
    gsenao131_2013.value = "";
    return false;
  } else {
    var str = ChkPhaseOut(gsenao131_2004.value.substring(0, 12));
    if (str != "") {
      if (str.substring(0, 2) == "D;" || str.substring(0, 1) == "0" || str.substring(0, 1) == "L") {
        alert(right(str, str.length - 2));
        gsenao131_2004.value = "";
        gsenao131_2005.value = "";
        gsenao131_2011.value = "";
        gsenao131_2012.value = "";
        gsenao131_2013.value = "";
        gsenao131_2015.value = "";
        return false;
      }
    }
  }
  gsenao131_2011.value = "";
  gsenao131_2012.value = "";
  gsenao131_2013.value = "";
  gsenao131_2015.value = "";
  if (gsenao131_2004.value != "" && gsenao131_2006.value != "") {
    FindBOMData();
    CalculateTotalQty();
    gsenao131_2026.value = BOM_COMP_QUANTITIES(gsenao131_2006.value, gsenao131_2004.value);
  }
  //11XXAXXXXXXX(11成品料號)若有W料號，則提示是否EC W料號，系統不自動EC
  if (gsenao131_2004.value.substring(0, 2) == "11" && gsenao131_2004.value.substring(4, 5) == "A") {
    var strWItem = gsenao131_2004.value.replace("A", "W");
    var tParm3 = new Array();
    tParm3.push(strWItem);
    tParm3.push(hdn_org.value);
    var pData3 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_30_Org", {
      SEGMENT1 : tParm3[0],
      hdn_org : tParm3[1]
    });
    if(pData3[0].result == undefined){
      if(pData3.length>0 ){
        alert("料號" + gsenao131_2004.value + "申請EC，查有" + strWItem + "料號，請確認是否有需EC!!，請確認\r\n");
      }
    }else{
      console.log("function:"+"gsenao131_2004_onchange" + " API:" + "BPM_ERP_SENAO131_30_Org "+ pData3[0].result);
    }
  }
}
//*********************************************************************
// 程序: senao131_2012_onChange(senao131_2012)
// 說明: 根據[增]計算數量;
//*********************************************************************
function gsenao131_2012_onchange(strsenao131_2012) {

  if (strsenao131_2012 != "" && typeof(strsenao131_2012) != "undefined") {}
  else {
    strsenao131_2012 = gsenao131_2012.value;
  }

  //把多選隱藏欄位處理在放至2012欄位
  //if(activityId == "UserTask_3"){
  if (hdn_add_ref.value != '') {
    var tmpAryRef = eval(hdn_add_ref.value);
    var tmp_212 = "";
    if (typeof(tmpAryRef) != "undefined") {
      if (tmpAryRef.length > 0) {
        for (var i = 0; i < tmpAryRef.length; i++) {
          tmp_212 += tmpAryRef[i][1] + ",";
        }
        gsenao131_2012.value = tmp_212;
      }
    }
  }
  hdn_add_ref.value = '';
    //}
    //return false;

  var strErrFlag = false;
  if (gsenao131_2017.value == "非替代料") {
    var strOCC = IsOverChrCnt(gsenao131_2012.value, 15);
    if (strOCC != "") {
      alert("插件位置 [" + strOCC + "] 不得超過15Bytes資料(中文字3Bytes;其餘皆為1Bytes)!!");
      gsenao131_2012.value = "";
      return false;
    }
  }
  if (gsenao131_2012.value != "" && left(gsenao131_2012.value, 1) != "*" && gsenao131_2017.value == "非替代料") {
    var strFormatErr = chkFieldValueErr(gsenao131_2012.value);
    if (strFormatErr) {
      alert("您輸入的插件位置有錯 [ " + gsenao131_2012.value + " ]，請再次確認。");
      gsenao131_2012.value = "";
      hdn_add_ref.value = ""; //清除開窗隱藏欄位
      CalculateTotalQty();
      return false;
    }
  }
  if (strsenao131_2012 != "" && typeof(strsenao131_2012) != "undefined") {
    gsenao131_2012.value = strsenao131_2012.replace(/\n/g, ""); //換行
    gsenao131_2012.value = strsenao131_2012.replace(/\r/g, ""); //換行
  }
  if (gsenao131_2017.value == "替代料") {
    strsenao131_2012 = gsenao131_2012.value.trim(); //20210521 TinYu 因替代料輸入料號會抓到品名造成下方判斷料件是否phaseoUT會錯誤，改將未抓品名輸入的料號
    gsenao131_2012.value = GetSubsDesc(gsenao131_2004.value, gsenao131_2006.value, gsenao131_2012.value, "ADD");
    if (gsenao131_2012.value.indexOf("-ERR") > -1) {
      gsenao131_2012.value = "";
      return false;
    }
  } else {
    gsenao131_2008.value = GetChangeQty(strsenao131_2012);
    gsenao131_2008.value = (gsenao131_2008.value * 1).toFixed(6);
    CalculateTotalQty();
  }
  //判斷料件是否即將PhaseOut
  //var aryAddRef = gsenao131_2012.value.split(",");
  var aryAddRef = strsenao131_2012.trim().split(",");
  var strRef = "";
  var strErrFlag = false;
  if ($.isArray(aryAddRef) && gsenao131_2017.value == "替代料") {
    for (var i = 0; i < aryAddRef.length - 1; i++) {
      var strmsg = "";
      var strItemSts = FindItemStatus(left(aryAddRef[i], 12));
      if ("H;P".indexOf(strItemSts) > -1) {
        if (strItemSts == "H") {
          strmsg = "Hold";
        } else if (strItemSts == "P") {
          strmsg = "P";
        }
        strRef = strRef + "料號(" + aryAddRef[i] + ")已設" + strmsg + ",請先用「商品物料編號表」恢復料號後,才可申請EC !!\r\n";
        strErrFlag = true;
      } else {
        var str = ChkPhaseOut(left(aryAddRef[i], 12));
        if (str != "") {
          if (left(str, 1) == "D" || left(str, 1) == "L" || left(str, 1) == "O") {
            strRef = strRef + right(str, str.length - 2);
            strErrFlag = true;
          }
        }
      }
    }
    if (strRef != "") {
      alert(strRef);
      if (strErrFlag) {
        ClearGridActionRowData("012");
        //strD012 = strsenao131_2012;
        strD012 = '';
        hdn_add_ref.value = '';
      }
    }
  }
  return true;
}
function gsenao131_2013_onchange() {
  //alert("13_onchanger");
  //把多選隱藏欄位處理在放至2013欄位
  //if(hdn_del_ref.value!=""){
  //var tmpAryRef = eval(hdn_del_ref.value);
  //var tmp_213 = "";
  //if(tmpAryRef.length > 0){
  //for(var i=0; i<tmpAryRef.length; i++){
  //tmp_213 += tmpAryRef[i][1] + ",";
  //}
  //gsenao131_2013.value = tmp_213.trim();
  //}

  if (gsenao131_2017.value == "非替代料") {
    var strOCC = IsOverChrCnt(gsenao131_2013.value, 15);
    if (strOCC != "") {
      alert("插件位置 [" + strOCC + "] 不得超過15Bytes資料(中文字3Bytes;其餘皆為1Bytes)!!");
      gsenao131_2013.value.value = "";
      return false;
    }
  }
  if (gsenao131_2013.value != "" && left(gsenao131_2013.value, 1) != "*" && gsenao131_2017.value != "非替代料") {
    var strFormatErr = chkFieldValueErr(gsenao131_2013.value);
    if (strFormatErr) {
      alert("您輸入的插件位置有錯 [ " + gsenao131_2013.value + " ]，請再次確認。");
      gsenao131_2013.value = "";
      hdn_del_ref.value = ""; //刪除開窗隱藏欄位
      CalculateTotalQty();
      return false;
    }
  }
  //需將特殊字元(斷行)取代掉
  gsenao131_2013.value = gsenao131_2013.value.replace(/\r/g, "");
  gsenao131_2013.value = gsenao131_2013.value.replace(/\n/g, "").trim();
  if (gsenao131_2017.value == "替代料") {
    gsenao131_2013.value = GetSubsDesc(gsenao131_2004.value, gsenao131_2006.value, gsenao131_2013.value, "DEL");
  } else {
    gsenao131_2009.value = GetChangeQty(gsenao131_2013.value);
    gsenao131_2009.value = (gsenao131_2009.value * 1).toFixed(6);
    CalculateTotalQty();
  }
  //}
  return true;
}
function gsenao131_2013_onblur() {
  var strDel = "";
  //alert("13_onblur");
  //判斷要刪除的零件是否存在
  if (gsenao131_2013.value.trim() != "" && left(gsenao131_2013.value, 1) != "*" && gsenao131_2017.value == "非替代料") {
    if (right(gsenao131_2013.value, 1) != ",") {
      gsenao131_2013.value = gsenao131_2013.value + ",";
    }

    //是否重覆輸入一樣的插件位置
    var tmpAryDel = gsenao131_2013.value.split(",");
    for (var i = 0; i < tmpAryDel.length - 1; i++) {
      var bas_chk_del = tmpAryDel[i];
      for (var j = 0; j < tmpAryDel.length - 1; j++) {
        if (j != i) {
          if (bas_chk_del == tmpAryDel[j]) {
            alert("刪除插件位置重覆!!");
            gsenao131_2013.focus();
            return false;
          }
        }
      }
    }

    strDel = (gsenao131_2013.value || '').trim();
    strDel = strDel.replace(/\s+/g, '');

    var aryEFDel = gsenao131_2013.value.split(",");
    var strErrDel = "";
    var isMatch = false;
    var dataArray = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_18_1", {
      gsenao131_2018 : gsenao131_2018.value,
      strDel: strDel
    });
    if(dataArray[0].result == undefined){
      if(dataArray.length>0 && (dataArray[0].COUNT !=0 ||dataArray[0].COUNT == undefined )){
        for (var j = 0; j < aryEFDel.length - 1; j++) {
          for (var i = 0; i < dataArray.length; i++) {
            if (aryEFDel[j] == dataArray[i].COMPONENT_REFERENCE_DESIGNATOR) {
              isMatch = true;
              break;
            } else {
              isMatch = false;
            }
          }
          if (!isMatch) {
            strErrDel = strErrDel + aryEFDel[j] + ",";
          }
        }
      }
    }else{
      console.log("function:"+"gsenao131_2013_onblur" + " API:" + "BPM_ERP_SENAO131_18_1 "+ dataArray[0].result);
    }
    if (strErrDel != "") {
      alert("同一階層料號中查無此插件位置 [" + left(strErrDel, strErrDel.length - 1) + " ]。");
      gsenao131_2013.value = "";
      gsenao131_2013.select();
    }
    if (!isMatch && strErrDel == '') { //表示只有輸入一個插件位置且也查不到該DB資料
      alert("同一階層料號中查無此插件位置 [" + left(gsenao131_2013.value, gsenao131_2013.value.length - 1) + " ]。");
      gsenao131_2013.value = "";
      gsenao131_2013.select();
    }
  }
}
function senao131_1019_onchange() {
  if (senao131_1019.value == "2" || senao131_1019.value == "6") {
    senao131_1020.value == "1";
    senao131_1021.value == "1";
  } else {
    senao131_1020.value == "";
    senao131_1021.value == "";
  }
}
function senao131_1013_onchange() {
  if (senao131_1013.value.trim() != "") {
    //alert(senao131_1013.value.trim());
    var tParm = new Array();
    tParm.push(senao131_1013.value.trim());
    var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_43", {
      segment1 : tParm[0]
    });
    if(pData[0].result == undefined){
      if(pData.length>0 ){
        if (pData[0].DESCRIPTION.trim() == "NA") {
          senao131_1013.value = "00"; //機種代碼
          $('#senao131_1006').prop("disabled", false);
        } else {
          senao131_1006.value = "";
          $('#senao131_1006').prop("disabled", true);
        }
        senao131_1014.value = pData[0].DESCRIPTION; //機種名稱
      } else {
        alert("無此機種代碼，請確認!!");
        senao131_1013.value = "";
        senao131_1014.value = "";
        senao131_1006.value = "";
        $('#senao131_1006').prop("disabled", true);
        return false;
      }
    }else{
      console.log("function:"+"senao131_1013_onchange" + " API:" + "BPM_ERP_SENAO131_43 "+ pData[0].result);
    }
  }
}
function gsenao131_2006_onchange() {
  //if(hdn_r_2006.value != ""){
  if (gsenao131_2006.value != "") {
    gsenao131_2027.value = "";
    var sqlId = "BPM_ERP_SENAO131_49";
    var params = [];
    var data = "";
    var r_value = "";
    params.push(gsenao131_2004.value);
    params.push(gsenao131_2006.value);
    params.push(hdn_org.value);
    //alert("hdn_org.value =" + hdn_org.value);

    data = ajaxGetData(invokeURL +sqlId, {
      gsenao131_2004 : params[0],
      gsenao131_2006 : params[1],
      hdn_org : params[2]
    });
    if(data[0].result == undefined){
      if (data.length > 0) {
        r_value = data[0].RSFIELDS;
      }
    }else{
      console.log("function:"+"gsenao131_2006_onchange" + " API:" + sqlId+ data[0].result);
    }
    //alert("r_value :"+ r_value);

    var aryTmp = r_value.split("@@");
    if (aryTmp.length > 1) {
      gsenao131_2006.value = aryTmp[0]; //下階料號
      gsenao131_2007.value = aryTmp[1].replace(/\""/g, "'"); //下階品名
      gsenao131_2010.value = aryTmp[2]; //變更前數量
      gsenao131_2014.value = aryTmp[3]; //OP_Code
      gsenao131_2015.value = aryTmp[4].replace(/\""/g, "'"); //COMMENT
      gsenao131_2018.value = aryTmp[5]; //component_sequence_id
      if ((gsenao131_2010.value == "0" || gsenao131_2010.value == "0.0" || gsenao131_2010.value == "0.000000") && gsenao131_2018.value != "") {
        gsenao131_2027.value = "ECO-2";
        //20201216 Milla 因最近常發生新增替代料,但替代料沒有在BOM裡又寫入strComp_Seq_Id，導致Oracle的序號有誤，故增加判斷ECO_NUMBER有-2則strComp_Seq_Id拋入空值，待觀察試試
        gsenao131_2018.value = "";
      }
    } else {
      FindBOMData();
    }
  } else {
    ClearGridActionRowData("");
  }
  gsenao131_2012.value = "";
  gsenao131_2013.value = "";
  //gsenao131_2027.value = "";
  //gsenao131_2017.value="";
  document.getElementById("gsenao131_2012_b1").disabled = true;
  document.getElementById("gsenao131_2013_b1").disabled = true;
  document.getElementById("gsenao131_2013_b2").disabled = true;
  //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
  //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
  document.getElementById("gsenao131_2013_b1").style.display = "none";
  document.getElementById("gsenao131_2013_b2").style.display = "none";

  CalculateTotalQty(); //將總數歸0
  GetONHOLD_QTY();
  getItemWhereUsed(gsenao131_2006.value);
  return true;
}
function gsenao131_2012_onblur() {
  //if(gsenao131_2012.value == strD012 && strD012 != ""){
  gsenao131_2012_onchange(strD012);
  //strD012 = "";
  //}
  //判斷要新增的零件是否已存在
  if (gsenao131_2012.value != "" && gsenao131_2012.value.substring(0, 1) != "*" && (gsenao131_2017.value == "非替代料" || gsenao131_2017.value == "替代料")) {
    var strAdd = "";
    var strErrAdd = "";
    var strErrAdd1 = "";
    if (gsenao131_2017.value == "非替代料") {
      // 把 "R1,R2,R3," 處理成乾淨的陣列，過濾空值
      var aryEFAdd = gsenao131_2012.value.split(",").map(function(s) { return s.trim(); }).filter(function(s) { return s !== ''; });
      var strAdd = aryEFAdd.join(","); // "R1,R2,R3"

      var tParm = new Array();
      //alert(gsenao131_2020.value);
      //alert(strAdd);
      tParm.push(gsenao131_2020.value); //bill_sequence_id
      tParm.push(hdn_org.value);
      var pData = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_17_Org1", {
        gsenao131_2020 : tParm[0],
        hdn_org: tParm[1],
        strAdd: strAdd
      });
      if(pData[0].result == undefined){
        if(pData.length>0 && (pData[0].COUNT !=0 ||pData[0].COUNT == undefined )){
          for (var i = 0; i < pData.length; i++) {
            if (strErrAdd.indexOf(fixNull(pData[i].COMPONENT_REFERENCE_DESIGNATOR) + ",") < 0) {
              strErrAdd = strErrAdd + fixNull(pData[i].COMPONENT_REFERENCE_DESIGNATOR) + ",";
            }
            //strErrAdd = strErrAdd + pData[i][0] + ","; //component_reference_designator
          }
        }
      }else{
        console.log("function:"+"gsenao131_2012_onblur" + " API:" + "BPM_ERP_SENAO131_17_Org1 "+ pData[0].result);
      }
    } else if (gsenao131_2017.value == "替代料") {
      strAdd = "";
      if (right(gsenao131_2012.value, 1) != ",") {
          gsenao131_2012.value = gsenao131_2012.value + ",";
      }
      var aryItem = gsenao131_2012.value.split(",");
      var aryItemNo = "";
      if (aryItem.length > 1) {
        for (var j = 0; j < aryItem.length - 1; j++) {
          aryItemNo = aryItem[j].split("-");
          if (aryItemNo.length > 1) {
            strAdd = strAdd + "'" + aryItemNo[0] + "',";
          }
        }
      }
      strAdd = strAdd.substr(1, 12);
      strErrAdd = "";
      var tParm2 = new Array();
      tParm2.push(gsenao131_2018.value); //sequence_id
      tParm2.push(strAdd);
      tParm2.push(hdn_org.value);
      var pData2 = ajaxGetData(invokeURL +"BPM_ERP_SENAO131_36_Org", {
        gsenao131_2018 : tParm2[0],
        strAdd: tParm2[1],
        hdn_org: tParm2[2]
      });
      if(pData2[0].result == undefined){
        if (pData2.length > 0 && (pData2[0].COUNT !=0 ||pData2[0].COUNT == undefined )) {
          for (var i = 0; i < pData2.length; i++) {
            if (strErrAdd.indexOf(pData2[i].SUB_COMP + ",") <= -1) {
              strErrAdd = strErrAdd + pData2[i].SUB_COMP + ","; //sub_comp
            }
          }
        }
      }else{
        console.log("function:"+"gsenao131_2012_onblur" + " API:" + "BPM_ERP_SENAO131_36_Org "+ pData2[0].result);
      }
    }
    strErrAdd = FindGridAdd(gsenao131_2004.value, strErrAdd);
    if (strErrAdd.trim() != "") {
      alert("同一階層料號中有重覆的插件位置 [" + left(strErrAdd, strErrAdd.length - 1) + " ]。");
      //gsenao131_2012.onfocus();
      gsenao131_2012.select();
      return false;
    }
    //判斷是否有同一階層新增插件位置重複輸入於Grid中
    strErrAdd1 += FindGridAddRepeat(gsenao131_2004.value, gsenao131_2006.value, gsenao131_2012.value);
    if (strErrAdd1 != "") {
      alert("同一階層料號中有重覆的插件位置 [ " + strErrAdd1 + " ]");
      gsenao131_2012.select();
      return false;
    }
    //檢核新增/刪除插件位置是否重複/Phoebe.20140108
    if (gsenao131_2013.value != "") {
      if (right(gsenao131_2012.value, 1) != ",") {
        gsenao131_2012.value = gsenao131_2012.value + ",";
      }
      if (right(gsenao131_2013.value, 1) != ",") {
        gsenao131_2013.value = gsenao131_2013.value + ",";
      }
      var aryAdd = gsenao131_2012.value.split(",");
      if (aryAdd.length > 1) {
        for (var i = 0; i < aryAdd.length - 1; i++) {
          if (gsenao131_2013.value.indexOf("," + aryAdd[i] + ",") > -1) {
            alert("插件位置(" + aryAdd[i] + ")重覆,請重新確認填寫!!");
            gsenao131_2012.select();
            return false;
          }
        }
      }
    }
    ////判斷同階層新增不同本階料號的插件位置有重覆/Phoebe.20140108
    var strAddDateErr = CHKAddData(gsenao131_2004.value, gsenao131_2006.value, gsenao131_2012.value);
    if (strAddDateErr != "") {
      alert(strAddDateErr);
      gsenao131_2012.select();
      return false;
    }
  }
}
//*********************************************************************
//senao131_2017_onChange
//"單身欄位[處理] onChange
//'"非替代料" --> 重新計算[增加數]、[刪減數]
//'"替代料"  --> 重新依上階+本階取得[變更前]
//'"Disable" --> 重新依上階+本階取得[變更前],
//'[增]、[刪]Disable不允許填寫。"
//*********************************************************************
function gsenao131_2017_onchange() {

  gsenao131_2012.value = "";
  gsenao131_2013.value = "";
  //gsenao131_2027.value="";
  $('#gsenao131_2012').prop("disabled", false);
  $('#gsenao131_2013').prop("disabled", false);
  $('#gsenao131_2015').prop("disabled", false);
  gsenao131_2012.style.background = "f7f7bc";
  gsenao131_2013.style.background = "f7f7bc";
  gsenao131_2015.style.background = "f7f7bc";
  document.getElementById("gsenao131_2012_b1").disabled = true;
  document.getElementById("gsenao131_2013_b1").disabled = true;
  document.getElementById("gsenao131_2013_b2").disabled = true;

  if (gsenao131_2017.value == "替代料") {
    // 重新依上階+本階取得[變更前]
    gsenao131_2006_onchange();
    CalculateTotalQty();
    document.getElementById("gsenao131_2012_b1").disabled = false;
    document.getElementById("gsenao131_2013_b1").disabled = false;
    document.getElementById("gsenao131_2013_b2").disabled = false;
    document.getElementById("gsenao131_2013_b1").style.display = "";
    //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b2").style.display = "none";
  } else if (gsenao131_2017.value == "非替代料") {
    //重新計算增刪
    gsenao131_2012_onchange(gsenao131_2012.value.trim());
    gsenao131_2013_onchange();
    document.getElementById("gsenao131_2013_b1").disabled = false;
    document.getElementById("gsenao131_2013_b2").disabled = false;
    GetONHOLD_QTY();
    //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b1").style.display = "none";
    document.getElementById("gsenao131_2013_b2").style.display = "";
  } else if (gsenao131_2017.value == "Disable") {
    gsenao131_2006_onchange();
    CalculateTotalQty();
    $('#gsenao131_2012').prop("disabled", true);
    $('#gsenao131_2013').prop("disabled", true);
    $('#gsenao131_2015').prop("disabled", true);
    gsenao131_2012.style.background = "white";
    gsenao131_2013.style.background = "white";
    gsenao131_2015.style.background = "white";
    document.getElementById("gsenao131_2012_b1").disabled = true;
    document.getElementById("gsenao131_2013_b1").disabled = true;
    document.getElementById("gsenao131_2013_b2").disabled = true;
    //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
    //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b1").style.display = "none";
    document.getElementById("gsenao131_2013_b2").style.display = "none";
  }
}
//*********************************************************************
//單獨給rowClick用，才不會把2012,2013清除
//*********************************************************************
function gsenao131_2017_onchange_r() {

  $('#gsenao131_2012').prop("disabled", false);
  $('#gsenao131_2013').prop("disabled", false);
  $('#gsenao131_2015').prop("disabled", false);
  gsenao131_2012.style.background = "f7f7bc";
  gsenao131_2013.style.background = "f7f7bc";
  gsenao131_2015.style.background = "f7f7bc";
  document.getElementById("gsenao131_2012_b1").disabled = true;
  document.getElementById("gsenao131_2013_b1").disabled = true;
  document.getElementById("gsenao131_2013_b2").disabled = true;

  if (gsenao131_2017.value == "替代料") {
    // 重新依上階+本階取得[變更前]
    gsenao131_2006_onchange();
    CalculateTotalQty();
    document.getElementById("gsenao131_2012_b1").disabled = false;
    document.getElementById("gsenao131_2013_b1").disabled = false;
    document.getElementById("gsenao131_2013_b2").disabled = false;
    document.getElementById("gsenao131_2013_b1").style.display = "";
    //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b2").style.display = "none";
  } else if (gsenao131_2017.value == "非替代料") {
    //重新計算增刪
    gsenao131_2012_onchange(gsenao131_2012.value.trim());
    gsenao131_2013_onchange();
    document.getElementById("gsenao131_2013_b1").disabled = false;
    document.getElementById("gsenao131_2013_b2").disabled = false;
    GetONHOLD_QTY();
    //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b1").style.display = "none";
    document.getElementById("gsenao131_2013_b2").style.display = "";
  } else if (gsenao131_2017.value == "Disable") {
    gsenao131_2006_onchange();
    CalculateTotalQty();
    $('#gsenao131_2012').prop("disabled", true);
    $('#gsenao131_2013').prop("disabled", true);
    $('#gsenao131_2015').prop("disabled", true);
    gsenao131_2012.style.background = "white";
    gsenao131_2013.style.background = "white";
    gsenao131_2015.style.background = "white";
    document.getElementById("gsenao131_2012_b1").disabled = true;
    document.getElementById("gsenao131_2013_b1").disabled = true;
    document.getElementById("gsenao131_2013_b2").disabled = true;
    //document.getElementById("gsenao131_2013_b1").style.visibility = "hidden";
    //document.getElementById("gsenao131_2013_b2").style.visibility = "hidden";
    document.getElementById("gsenao131_2013_b1").style.display = "none";
    document.getElementById("gsenao131_2013_b2").style.display = "none";
  }
}
/**
 * 申請人id onchange
 *
 */
function senao131_1003_onchange() {
  var tParams = new Array();
  tParams.push(senao131_1003.value);
  var pData = ajaxGetData(invokeURL +"BPM_getUser2", {
    ID : tParams[0]
  });
  if(pData[0].result == undefined){
    if (pData.length >= 1){
      senao131_1003.value = pData[0].ID;
      senao131_1003_1.value = pData[0].USERNAME;
      senao131_1004.value = pData[0].DEPTID;
      senao131_1004_1.value = pData[0].ORGANIZATIONUNITNAME;
   } else {
      alert("輸入的工號:" + senao131_1003.value + "有誤，請確認!!\n");
      senao131_1003.value = '';
      senao131_1003_1.value = '';
      senao131_1004.value = '';
      senao131_1004_1.value = '';
    }
  }else{
    console.log("function:"+"senao131_1003_onchange" + " API:" + "BPM_getUser2 "+ pData[0].result);
    return false;
  }
}
/**
 * DCC/DCC主管關卡下拉選擇OP_CODE時，替換原本OP_CODE欄位值
 *
 */
function gsenao131_2014_b_onchange() {
  gsenao131_2014.value = gsenao131_2014_b.value;
}
/**
/*---------------------欄位onChange、onClick Function Start--------------*/