var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Inventory Organization SENAO:86 ENR:266
var _ORG = {};//儲存所有廠區的Json
var DEFAULT_BGCOLOR = "#FFFFFF"; //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var excelIsok = true;
//基本資料
var BaseCurrency = document.getElementById("BaseCurrency"); //本幣別(顯示用) //20250920 add
var TWDRate = document.getElementById("TWDRate"); //本幣別(顯示用) //20250920 add
var note_subject = document.getElementById("note_subject");//主旨備註
var form_ou = document.getElementById("form_ou"); //公司別
var form_org = document.getElementById("form_org"); //廠區別
var writer_id = document.getElementById("writer_id");//填單人
var senao_tm004_Oid = document.getElementById("senao_tm004_Oid");//所屬部門
var senao_tm004_t1 = document.getElementById("senao_tm004_t1");//所屬部門名稱
var senao_tm004 = document.getElementById("senao_tm004");//所屬部門id 隱藏欄位
var senao_tm003 = document.getElementById("senao_tm003");//填表人
var senao_tm003_t1 = document.getElementById("senao_tm003_t1");//填表人姓名
var senao_tm005 = document.getElementById("senao_tm005");//填表日期
var senao_tm006 = document.getElementById("senao_tm006");//申請處分種類
var m_senao_tm006 = document.getElementById("m_senao_tm006");//Mobile欄位 申請處分種類
var senao_tm008 = document.getElementById("senao_tm008");//處分原因
var senao_tm009 = document.getElementById("senao_tm009");//處分建議
var senao_tm010 = document.getElementById("senao_tm010");//出售對象
var senao_tm011 = document.getElementById("senao_tm011");//出售金額(未稅)
var senao_tm016 = document.getElementById("senao_tm016");//發票抬頭
var senao_tm017 = document.getElementById("senao_tm017");//統一編號/身分證字號
var senao_tm012 = document.getElementById("senao_tm012");//贈與對象
var senao_tm013 = document.getElementById("senao_tm013");//贈與原因
var senao_tm014 = document.getElementById("senao_tm014");//其他備註

//明細資料
var senao_td003 = document.getElementById("gsenao_td003");//資產編號
var senao_td004 = document.getElementById("gsenao_td004");//資產名稱
var senao_td005 = document.getElementById("gsenao_td005");//廠牌型式(號)
var senao_td006 = document.getElementById("gsenao_td006");//獲得日期
var senao_td007 = document.getElementById("gsenao_td007");//數量
var senao_td008 = document.getElementById("gsenao_td008");//取得成本
var senao_td009 = document.getElementById("gsenao_td009");//已攤提金額
var senao_td010 = document.getElementById("gsenao_td010");//殘值
var senao_td011 = document.getElementById("gsenao_td011");//保管部門id
var senao_td011_t1 = document.getElementById("gsenao_td011_t1");//保管部門名稱
var senao_td011_Oid = document.getElementById("gsenao_td011_Oid");//隱藏欄位 保管部門id
var senao_td012 = document.getElementById("gsenao_td012");//保管人
var senao_td012_t1 = document.getElementById("gsenao_td012_t1");//保管人姓名
var senao_td013 = document.getElementById("gsenao_td013");//Category
var senao_td099 = document.getElementById("gsenao_td099");//折合新台幣殘值  //20250920
var hdn_formnumber_title = document.getElementById("hdn_formnumber_title"); //20250920 formnumber title

var hdn_show_fa = document.getElementById("hdn_show_fa");//資產開窗回傳隱藏欄位
// '======================================================
// 	'依最新核決權限修改流程/Phoebe.20130205
// 	'50,000以下 	--> 部級主管
// 	'50,001-300,000 --> 總經理
// 	'300,001以上 	--> 執行長
// '======================================================
var level_sign = document.getElementById("level_sign");//判斷取得成本決定簽核層級 
//var systemDateTime = showCurrentDate(); //今天日期
var systemDateTime = ""; //今天日期
/***************************GRID********************** */
var Grid1 = document.getElementById("Grid1");
//單身grid1 元件欄位名稱
var GridBinding = [
  ["gsenao_td003","gsenao_td004","gsenao_td005","gsenao_td006","gsenao_td007","gsenao_td008","gsenao_td009","gsenao_td010","gsenao_td011","gsenao_td011_t1","gsenao_td012","gsenao_td012_t1","gsenao_td011_Oid","gsenao_td013"]
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
  colAPI: 'BPM_SENAO020_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO020_GRID1_LIST',
  gridDefPostData: {
  },
  search: true,
  refresh: true,
  xls: true,
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
  }
  //vivian 暫時定義 start
  /*activityId = "UserTask_3";
  type='SENAO020';//vivian 抓不到單號暫時定義
  formId='SENAO020';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  formCreate();
  formOpen();
  frmEvent();

});
function formCreate(){
  writer_id.value = userId;
  senao_tm004.value = mainOrgUnitIds;
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  systemDateTime = showCurrentDate(); //今天日期
  //每個關卡欄位控卡
  setActivityFieldControl();
  frmGeneralLoad(ProcessPackageId, systemDateTime);//設定公司、廠區、表單單號
  document.getElementById("btnPrint").style.display = "none"; //列印按鈕隱藏
  document.getElementById("btnExport").disabled = false;
  
  SetBaseCurrencyL(); //20250920  抓取公司本幣別
  //設定申請人*/
  $('#senao_tm003').val(userId);
  $('#senao_tm003_t1').val(user_Name);
  $('#senao_tm003').attr('disabled', 'true');
  $('#senao_tm003_t1').attr('disabled', 'true');
  //設定所屬部門*/
  $('#senao_tm004_Oid').val(Department);
  $('#senao_tm004_t1').val(Department_Name);
  $('#senao_tm004_Oid').attr('disabled', 'true');
  $('#senao_tm004_t1').attr('disabled', 'true');
  $('#senao_tm002').attr('disabled', 'true');//單號
  applicant = $('#senao_tm003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao_tm004_Oid').val();//發起流程時參數 申請人部門ID
  
  if(activityId == 'UserTask_3'){
		var tMsg_tmp = "";
		var ary_errMsg = [];
		tMsg_tmp = querySNSI009(formId, "001", locale, "", "", "");
		ary_errMsg = tMsg_tmp.split("$$");	////$$表示以$$分隔error code
        alert(ary_errMsg[0]);	//申請固定資產處分申請單為每年5,11月
  }  
  createFrmGrid(0);
  //setFieldControl();//grid欄位修改 不同權限欄位控制
  /*
  if (typeof (Grid1Obj) != "undefined") {
    var tGrid1 = document.getElementById("Grid1").value; //取出儲存在隱藏欄位中的Grid資料  
    //隱藏重新發起流程按鈕
    $$('img[title="重發新流程"]', window.parent.parent.document).hide();
    //-----------------複製表單 未完-------------------
    if(activityId == "UserTask_3"){  
      form_org.disabled = false;
      if(formInstOID == ""){ 
          if(tGrid1.length > 1){
              //AddMultiRows(); 
          }
      }
    }
    //-----------------複製表單 END--------------- 
    if (tGrid1.length > 1) {  //判斷Grid1是否有資料  
        Grid1Obj.reload(eval(tGrid1));  //若Grid1有資料則將存於隱藏中的值載入Grid中  
    }
  }  */
	return true;
}
function frmEvent() {
  $('#btnEdit').on('click', function () { //修改
    btnEdit_onClick();
  });
  $('#btnDel').on('click', function () { //刪除
    btnDel_onClick();
  });
  $('#btnExport').on('click', function () { //匯出Excel
    btnExport_onClick();
  });
  $('#senao_tm006').on('change', function () { //申請種類OnChange
    senao_tm006_onchange();
  });
  $('#senao_tm011').on('blur', function () { //出售金額OnBlur
    senao_tm011_onblur();
  });
  $('#gsenao_td007').on('blur', function () { //數量OnBlur
    gsenao_td007_onblur();
  });
  $('#gsenao_td008').on('blur', function () { //取得成本OnBlur
    gsenao_td008_onblur();
  });
  $('#gsenao_td009').on('blur', function () { //已攤提金額OnBlur
    gsenao_td009_onblur();
  });
  $('#gsenao_td010').on('blur', function () { //殘值OnBlur
    gsenao_td010_onblur();
  });
}
function formSave(){
	var errstr='';
	//var tGrid1Data = Grid1Obj.getData(); 
  var tGrid1Data = getGridData(0); 
	if (activityId == "UserTask_3"){       
    m_senao_tm006.value = senao_tm006.value; //Moblie申請種類
    if (senao_tm006.value == '2'){	//報廢
      if(senao_tm008.value.trim( ) == ''){
        errstr += "[" + $("#lbl_senao_tm008").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[處分原因]不可空白!
      }
    }else if (senao_tm006.value == '3'){	//出售
      if (senao_tm010.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm010").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[出售對象]不可空白!
      }
      if (senao_tm011.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm011").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[出售金額]不可空白!
      }else if (senao_tm011.value.trim() == '0'){
        errstr += "[" + $("#lbl_senao_tm011").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n"; //[出售金額]請填寫大於0的數值!
      }
      if (senao_tm016.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm016").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[發票抬頭]不可空白!
      }
      if (senao_tm017.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm017").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[統一編號或身分證字號]不可空白!
      }
    }else if (senao_tm006.value == '4'){	//贈與		
      if (senao_tm012.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm012").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[贈與對象]不可空白!
      }
      if (senao_tm013.value.trim() == ''){
        errstr += "[" + $("#lbl_senao_tm013").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[贈與原因]不可空白!
      }
    }
		if (tGrid1Data.length <= 0){  //判斷Grid是否有資料 
			errstr += querySNSI009(form_ou.value, "033", locale, "", "", "") + "\n"; //單身明細至少要有新增一筆資料
		}else{
			for (var i = 0; i < tGrid1Data.length; i++) {    
        if (tGrid1Data[i]['SENAO_TD005'].trim() == ""){//
          errstr += querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao_td005").html()) + "\n";//第i筆 [廠牌型式(號)]不可空白!
				}
        if (tGrid1Data[i]['SENAO_TD007'].trim() == ''){
					errstr += querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao_td007").html()) + "\n"; //第i筆 [數量]不可空白!
        }else if (tGrid1Data[i]['SENAO_TD007'] == '0'){
					errstr += querySNSI009(form_ou.value, "025", locale, (i+1), "", $("#lbl_gsenao_td007").html()) + "\n"; //第i筆 [數量]請填寫大於0的數值!
				}
        if (tGrid1Data[i]['SENAO_TD012'].trim() == ''){
					errstr += querySNSI009(form_ou.value, "015", locale, (i+1), "", $("#lbl_gsenao_td012").html()) + "\n"; //第i筆 [保管人]不可空白!
        }  
			}
		}
	}
  if (errstr == ''){
    for (var i = 0; i < tGrid1Data.length; i++) {                
      if (tGrid1Data[i]['SENAO_TD008'] * 1 <= 2000000 ){
        level_sign.value = "GM"; //總經理
      }
      if (tGrid1Data[i]['SENAO_TD008'] * 1 > 2000000){
        level_sign.value = "Chairman"; //董事長
        break;
      }                
    }
    if(form_ou === 'svn'){   //20250920 追加SVN的核決，該核決金額尚未訂出，先以senao*1000套用
      for (i = 0; i < tGrid1Data.length; i++) {                
        if (tGrid1Data[i]['SENAO_TD008'] * 1 <= 2000000000 ){
          level_sign.value = "GM"; //總經理
        }
        if (tGrid1Data[i]['SENAO_TD008'] * 1 > 2000000000){
          level_sign.value = "Chairman"; //董事長
          break;
        }                
      }
    }
    return true;
  }
	else{
		alert(errstr);
		return false;
	}
}
/*---------------------Form Load Function End--------------*/
/*---------------------公用Function Start--------------*/
function frmGeneralLoad(type, today) {
    //通用需要載入的資料
    //設定公司 OU ORG 
    setCompanyObject();
    //設定公司別
    setSelectDefalut("form_ou", apiInvoke + "BPM_COMPANY_INFO_LIST", {}, "");
    form_ou.disabled = true;//公司別鎖定下拉選項
    setCompanyValueByUser();
    //設定廠區
    setSelectDefalut(
        "form_org",
        apiInvoke + "BPM_getFactory",
        { COMPANY: $('#form_ou').val() },
        ""
    );
    senao_tm005.value = today; //填表日期
    //senao_tm005.readOnly = true;//填表日期不可修改
    //表單代號
    $('#senao_tm001').val(type);
    $('#senao_tm001').attr('disabled', 'true');

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
function setFieldControl(){//不同權限欄位控制
    if (activityId == 'UserTask_3'){
        senao_td008.readOnly = true;
        senao_td009.readOnly = true;
        senao_td010.readOnly = true;
        senao_td003.readOnly = true;
        senao_td004.readOnly = true;
        senao_td013.readOnly = true;
        senao_td011.readOnly = true;
        senao_td012.readOnly = false;
        senao_td011_t1.readOnly = true;
        senao_td012_t1.readOnly = true;
    }
    if (activityId == 'UserTask_14'){ //MIS處分人員
        senao_tm009.readOnly = false;   
        senao_tm009.style.backgroundColor = '#FBF1C0';
    }
    if (activityId == 'UserTask_20'){
        document.getElementById("btnEdit").disabled = false;
        senao_td008.readOnly = false;
        senao_td008.style.backgroundColor = '#FBF1C0';
        senao_td009.readOnly = false;
        senao_td009.style.backgroundColor = '#FBF1C0';
        senao_td010.readOnly = false;
        senao_td010.style.backgroundColor = '#FBF1C0';
        senao_td012.readOnly = false;
        senao_td012.style.backgroundColor = '#FBF1C0';
    }
    
}
/**
* 抓取ERP中設定之公司幣別
*/
function SetBaseCurrencyL(){
  //第一段SQL抓取公司本幣別
  var conversionRate = "1";//預設匯率為1
  var sqlId1= "BPM_ERP_SENAO020_BaseCurrency";
  var tParams = [];
  tParams.push(OU_ID);
  let result = ajaxGetData(invokeURL + sqlId1, {
      OU_ID: tParams[0]
  });
  if (result[0]) {
      BaseCurrency = result[0].CURRENCY_CODE;//如果有抓到幣別，就設定上去
      $('#BaseCurrency').val(BaseCurrency); // ← 同步更新 input
  }else{
  alert("在ERP系統中無法取得公司本幣資訊，請聯絡 ERP 團隊。\nUnable to retrieve the Base currency in the ERP system. Please contact the ERP team.");
  }
  //如果公司幣別是台幣直接給匯率為1
  if (BaseCurrency == "TWD") {
      TWDRate = conversionRate;
      $('#TWDRate').val(TWDRate); // ← 同步更新 input
      return;
  }
  //第二段SQL抓取公司本幣別對台幣的匯率
  var sqlId2 = "BPM_ERP_OracleConversionRate";
  var params = [];
  var data = [];
  if (BaseCurrency && systemDateTime) {
    params.push(BaseCurrency);
    params.push('TWD');
    params.push('Corporate');
    params.push(systemDateTime);
    data = ajaxGetData(invokeURL + sqlId2, {
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
  // 設定匯率
  TWDRate = conversionRate;
  $('#TWDRate').val(TWDRate); // ← 同步更新 input
}
function after_ShowFA(){ 
  hdn_show_fa.value = hdn_show_fa.value.replace(/'裝/g, '"');
  if(hdn_show_fa.value!=''){
    var faAryData = eval(hdn_show_fa.value);//轉陣列
    var cmdWhere = "";
    let tagNumbers = [];
    for (var i = 0; i < faAryData.length; i++) {
        tagNumbers.push(faAryData[i][1]);
    }
    let tagNumberStr = tagNumbers.join(","); // "'A','B','C'"
    var tParm = new Array();
    //alert(tDefaultAppendSQL);
		tParm.push(form_ou.value.toUpperCase());//push進SN_EFGP_SQL中指令下的:p，若:p有多個需分
    let pData = ajaxGetData(invokeURL + "BPM_ERP_SENAO020_01_OU", { tagNumberStr: tagNumberStr, tParm:tParm[0] });//"ERP_SNO_C", "SENAO020_01_OU"
    if (pData[0].result == undefined) {
      if (pData.length > 0) {                            
        for(var i=0; i<pData.length; i++){
          var strDEPRN_RESERVE = ""; //已攤提金額
          var strAsset_id=fixNull(pData[i].ASSET_ID);
          var tParm2 = new Array();                    
          //alert(tDefaultAppendSQL2);
          tParm2.push(strAsset_id); //push進SN_EFGP_SQL中指令下的:p，若:p有多個需分           
          let pData2 = ajaxGetData(invokeURL + "BPM_ERP_SENAO020_02",{  tParm2 :tParm2[0]});
          if (pData2[0].result == undefined) {
            if (pData2.length > 0) {                            
                strDEPRN_RESERVE = fixNull(pData2[0].DEPRN_RESERVE);
            }else{
                strDEPRN_RESERVE = "";
            }
          }
           
          //組Grid1資料
          var tmpGridAry = new Array(); 
          var addAry = new Array(); 
          tmpGridAry.push(addAry);
          tGrid1Data = getGridData(0); 
          tmpGridAry[0][0] = fixNull(pData[i].TAG_NUMBER); //財產編號
          tmpGridAry[0][1] = fixNull(pData[i].DESCRIPTION); //財產名稱
          tmpGridAry[0][2] = ""; //廠牌型式(號)
          tmpGridAry[0][3] = fixNull(pData[i].DATE_PLACED_IN_SERVICE); //取得時間
          tmpGridAry[0][4] = '1'; //數量--需求單654 -- 呂宗慶 改為1
          tmpGridAry[0][5] = fixNull(pData[i].COST); //取得成本
          tmpGridAry[0][6] = strDEPRN_RESERVE; //已攤提金額
          if(fixNull(pData[i].SEGMENT1=='E01')){
              tmpGridAry[0][7] = '0'; //殘值
              tmpGridAry[0][14] = '0'; //折合新台幣殘值  //20250920 add
          }else{
              tmpGridAry[0][7] = fixNull(pData[i].BV); //殘值
              tmpGridAry[0][14] = fixNull(pData[i].BV * TWDRate); //折合新台幣殘值  //20250920 add
          }
          tmpGridAry[0][8] = senao_tm004_Oid.value; //使用單位ID
          tmpGridAry[0][9] = senao_tm004_t1.value; //使用單位名稱
          tmpGridAry[0][10] = senao_tm003.value; //保管人id
          tmpGridAry[0][11] = senao_tm003_t1.value; //保管人姓名
          tmpGridAry[0][12] = fixNull(pData[i].LOCATION_ID); //Location id
          tmpGridAry[0][13] = fixNull(pData[i].SEGMENT1); //category

          let $grid = $("#" + frmGridList[0].gid);
          let rowid = $grid.getGridParam("records") + 1;
          let data = {};

          // 依照 Grid1ColumnIds[0] 對應欄位，把 tmpGridAry[0] 轉成物件
          let colIds = Grid1ColumnIds[0];
          for (let j = 0; j < colIds.length; j++) {
              data[colIds[j]] = (tmpGridAry[0][j] === 0 || tmpGridAry[0][j]) ? String(tmpGridAry[0][j]) : "";
              //tmpGridAry[0][j] || "";
          }

          // 新增到 grid
          $grid.jqGrid('addRowData', rowid, data, 'last');

        }
      }
    }  
  }
  hdn_show_fa.value=''; //清空
  return true;
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
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
        FORMSERIALNUMBER: $('#senao_tm002').val()//表單單號
      };
      $grid.createJqGrid(options);
      //setGridStyle(isUnitPriceUser);
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
 * 設定Grid欄位，其中單價欄位有權限者才可顯示
 * @param {boolean} isAllowedUser 是否可看到單價欄位
 */
function setGridStyle(isAllowedUser) {
  let $grid = $("#" + frmGridList[0].gid);
  if ($grid.length > 0) {
    if (isAllowedUser) {
      $grid.jqGrid('showCol', ["senao113d008"]); //顯示單價
    }
  }
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
 
function gridaddRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}*/
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
//檢查grid欄位
function chkGrid1Value(){
	var errstr="";
  if (senao_td005.value.trim()==''){
    errstr += "[" + $("#lbl_gsenao_td005").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[廠牌型式(號)]不可空白!	
  }
  if (isNaN(senao_td007.value)){
    errstr += "[" + $("#lbl_gsenao_td007").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[數量]必須為數值!
    senao_td007.value = '0';
  }else{
    if (senao_td007.value * 1 < 0){
      errstr += "[" + $("#lbl_gsenao_td007").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[數量]請填寫大於0的數值!
      senao_td007.value = '0';
    }
  }
  if (isNaN(senao_td008.value)){
    errstr += "[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[取得成本]必須為數值!
    senao_td008.value = '0';
  }else{
    if (senao_td008.value * 1 < 0){
      errstr += "[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[取得成本]請填寫大於0的數值!
      senao_td008.value = '0';
    }
  }
  if (isNaN(senao_td009.value)){
    errstr += "[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[已攤提金額]必須為數值!
    senao_td009.value = '0';
  }else{
    if (senao_td009.value * 1 < 0){
      errstr += "[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[已攤提金額]請填寫大於0的數值!
      senao_td009.value = '0';
    }
  }
  if (isNaN(senao_td010.value)){
    errstr += "[" + $("#lbl_gsenao_td010").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", "") + "\n";	//[殘值]必須為數值!
    senao_td010.value = '0';
  }else{
    if (senao_td010.value * 1 < 0){
      errstr += "[" + $("#lbl_gsenao_td010").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[殘值]請填寫大於0的數值!
      senao_td010.value = '0';
    }
  }
  if (senao_td012.value.trim() == ''){
    errstr += "[" + $("#lbl_gsenao_td012").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[保管人]不可空白!
  }

  if (activityId == 'UserTask_20'){ //會計處分人員
    if (senao_td013.value.substring(0,1)!='E'){
      if (senao_td008.value.trim() == ''){
        errstr += "[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[取得成本]不可空白!
      }else if (senao_td008.value == '0'){
        errstr += "[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[取得成本]請填寫大於0的數值!
      }
    }
    if (senao_td013.value.substring(0,3) != 'A01'){
      if (senao_td009.value.trim() == ''){
        errstr += "[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[已攤提金額]不可空白!
      }else if (senao_td009.value == '0'){
        errstr += "[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", "") + "\n";	//[已攤提金額]請填寫大於0的數值!
      }
    }
    if (senao_td010.value.trim() == ''){
      errstr += "[" + $("#lbl_gsenao_td010").html() + "]" + querySNSI009(form_ou.value, "004", locale, "", "", "") + "\n"; //[殘值]不可空白!
    }
  }
	return errstr;
}
/**
 * Grid輸入欄位初始化
 */
function initGridRow() {

}
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao_tm003_b1').on('click', function () { //填表人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao_tm003','senao_tm003_t1','senao_tm004_Oid','senao_tm004_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#ShowFA').on('click', function () { //選擇需處分的資產 開窗
  var strUserID = "S"+senao_tm003.value;
  if(strUserID=='S104564' || strUserID=='SK00015' || strUserID=='SS100524' || strUserID=='S102136'){    //20250920 modify
    //可以查全部資產
    let OU_ID = form_ou.value.toUpperCase();
    let tTitle = "處分資產";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('hdn_show_fa');//回傳元件參數
    let tReturnFunction = new Array("after_ShowFA()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO020_ShowFA";
    let tAPI = invokeURL + 'BPM_ERP_SENAO020_ShowFA';
    let tParameter = {OU_ID: OU_ID,TAG_NUMBER:'ALL',ASSET_NUMBER:'ALL',DESCRIPTION:'ALL',UNITS_ASSIGNED:'ALL',DATE_PLACED_IN_SERVICE:'ALL'};
    let tQBEField = {TAG_NUMBER:'TAG_NUMBER',ASSET_NUMBER:'ASSET_NUMBER',DESCRIPTION:'DESCRIPTION',UNITS_ASSIGNED:'UNITS_ASSIGNED',DATE_PLACED_IN_SERVICE:'DATE_PLACED_IN_SERVICE'}; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else{              
    //僅能查個人資產  
    let OU_ID = form_ou.value.toUpperCase();
    let tTitle = "處分資產";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('hdn_show_fa');//回傳元件參數
    let tReturnFunction = new Array("after_ShowFA()"); //回傳函數
    let tColAPi = "BPM_ERP_SENAO020_ShowFA_2";
    let tAPI = invokeURL + 'BPM_ERP_SENAO020_ShowFA_2';
    let tParameter = {UserID: strUserID,OU_ID: OU_ID,TAG_NUMBER:'ALL',ASSET_NUMBER:'ALL',DESCRIPTION:'ALL',UNITS_ASSIGNED:'ALL',DATE_PLACED_IN_SERVICE:'ALL'};
    let tQBEField = {TAG_NUMBER:'TAG_NUMBER',ASSET_NUMBER:'ASSET_NUMBER',DESCRIPTION:'DESCRIPTION',UNITS_ASSIGNED:'UNITS_ASSIGNED',DATE_PLACED_IN_SERVICE:'DATE_PLACED_IN_SERVICE'}; //查詢欄位 {參數欄位:table欄位};
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
  
});
$('#senao_td012_b1').on('click', function () { //保管人開窗
  // sessionStorage 存入數據
  let tTitle = "保管人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('gsenao_td012','gsenao_td012_t1','gsenao_td011','gsenao_td011_t1');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser";
  let tAPI = invokeURL + 'BPM_getUser';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
  let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * [Grid] 修改資料
 */
function btnEdit_onClick(){
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
      alert(querySNSI009(form_ou.value, "027", locale, "", "", ""));//請先選擇下方一筆資料再做編輯!
      return false;
  }
  var errorMsg="";
  errorMsg = chkGrid1Value();//檢查欄位是否有空
	if (errorMsg == ""){
    grideditRow(0);
    clearBinding(0); //新增後清除Binding欄位資料
    $("#" + frmGridList[0].gid).jqGrid("resetSelection");
	}else{
		alert(errorMsg);
	}
}
/**
 * [Grid] 刪除資料
 */
function btnDel_onClick() {
  var tGridIndex = getGridSelectRow(0); //可知道點選哪一筆
  if (tGridIndex === null || tGridIndex === undefined || tGridIndex === "") {
      alert(querySNSI009(form_ou.value, "028", locale, "", "", ""));//請先選擇下方一筆資料再做刪除!
      return false;
  }
  griddeleteRow(0); //將Grid某筆資料刪除
  clearBinding(0);
  initGridRow();
  /*if (getGridData(0).length > 0) {
      form_org.disabled = true;
  } else {
      form_org.disabled = false;
  }*/
  $("#" + frmGridList[0].gid).jqGrid("resetSelection");
}
/**
 * [Grid] 匯出資料 未啟用
 */
function btnExport_onClick(){

}
//申請種類OnChange
function senao_tm006_onchange(){
  if (senao_tm006.value == '2'){	//報廢
    senao_tm008.readOnly = false;//處分原因開啟輸入
    senao_tm008.style.backgroundColor = '#FBF1C0';
  }else{
    senao_tm008.value = '';
    senao_tm008.readOnly = true;//處分原因禁止輸入
    senao_tm008.style.backgroundColor = '#FFFFFF';
  }
  if (senao_tm006.value == '3'){	//出售
    senao_tm010.readOnly = false;//出售對象開啟輸入
    senao_tm010.style.backgroundColor = '#FBF1C0';

    senao_tm011.readOnly = false;//出售金額開啟輸入
    senao_tm011.style.backgroundColor = '#FBF1C0';

    senao_tm016.readOnly = false;//發票抬頭開啟輸入
    senao_tm016.style.backgroundColor = '#FBF1C0';

    senao_tm017.readOnly = false;//統一編號或身分證字號開啟輸入
    senao_tm017.style.backgroundColor = '#FBF1C0';
  }else{
    senao_tm010.value = '';
    senao_tm010.readOnly = true;//出售對象禁止輸入
    senao_tm010.style.backgroundColor = '#FFFFFF';

    senao_tm011.value = '0';
    senao_tm011.readOnly = true;//出售金額禁止輸入
    senao_tm011.style.backgroundColor = '#FFFFFF';

    senao_tm016.value = '';
    senao_tm016.readOnly = true;//發票抬頭禁止輸入
    senao_tm016.style.backgroundColor = '#FFFFFF';

    senao_tm017.value = '';
    senao_tm017.readOnly = true;//統一編號或身分證字號禁止輸入
    senao_tm017.style.backgroundColor = '#FFFFFF';
  }
  if (senao_tm006.value == '4'){	//贈與
    senao_tm012.readOnly = false;//贈與對象開啟輸入
    senao_tm012.style.backgroundColor = '#FBF1C0';

    senao_tm013.readOnly = false;//贈與原因開啟輸入
    senao_tm013.style.backgroundColor = '#FBF1C0';
  }else{
    senao_tm012.value = '';
    senao_tm012.readOnly = true;//贈與對象禁止輸入
    senao_tm012.style.backgroundColor = '#FFFFFF';

    senao_tm013.value = '';
    senao_tm013.readOnly = true;//贈與原因禁止輸入
    senao_tm013.style.backgroundColor = '#FFFFFF';
  }
}
// '********************************************************************* 
// '程序名稱: senao_tm011_onblur() 出售金額
// '程序說明: 當滑鼠離開時判斷數量是否為負值
// '*********************************************************************
function senao_tm011_onblur(){
  if (isNaN(senao_tm011.value)){
    alert("[" + $("#lbl_senao_tm011").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[出售金額]必須為數值!
    senao_tm011.value='0';
  }else{
    if (senao_tm011.value * 1 < 0){
      alert("[" + $("#lbl_senao_tm011").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[出售金額]請填寫大於0的數值!
      senao_tm011.value='0';
    }
  }    
}
// '********************************************************************* 
// '程序名稱: gsenao_td007_onblur() 數量
// '程序說明: 當滑鼠離開時判斷數量是否為負值
// '*********************************************************************
function gsenao_td007_onblur(){
  if (isNaN(senao_td007.value)){
    alert("[" + $("#lbl_gsenao_td007").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[數量]必須為數值!
    senao_td007.value = '0';
  }else{
    if (senao_td007.value * 1 < 0){
      alert("[" + $("#lbl_gsenao_td007").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[數量]請填寫大於0的數值!
      senao_td007.value = '0';
    }
  }
}
// '********************************************************************* 
// '程序名稱: senao_td008_onblur() 
// '程序說明: 當滑鼠離開時判斷取得成本是否為負值
// '*********************************************************************
function gsenao_td008_onblur(){
  if (isNaN(senao_td008.value)){
    alert("[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[取得成本]必須為數值!
    senao_td008.value = '0';
  }else{
    if(senao_td008.value * 1 < 0){
      alert("[" + $("#lbl_gsenao_td008").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[取得成本]請填寫大於0的數值!
      senao_td008.value = '0';
    }
  }
}
// '********************************************************************* 
// '程序名稱: senao_td009_onblur() 
// '程序說明: 當滑鼠離開時判斷已攤提金額是否為負值
// '*********************************************************************
function gsenao_td009_onblur(){
  if (isNaN(senao_td009.value)){
    alert("[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[已攤提金額]必須為數值!
    senao_td009.value = '0';
  }else{
    if (senao_td009.value * 1 < 0){
      alert("[" + $("#lbl_gsenao_td009").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[已攤提金額]請填寫大於0的數值!
      senao_td009.value = '0';
    }
  }
}
// '********************************************************************* 
// '程序名稱: senao_td010_onblur() 
// '程序說明: 當滑鼠離開時判斷未折減餘額是否為負值
// '*********************************************************************
function gsenao_td010_onblur(){
  if (isNaN(senao_td010.value)){
    alert("[" + $("#lbl_gsenao_td010").html() + "]" + querySNSI009(form_ou.value, "032", locale, "", "", ""));	//[殘值]必須為數值!
    senao_td010.value = '0';
  }else{
    if (senao_td010.value * 1 < 0){
      alert("[" + $("#lbl_gsenao_td010").html() + "]" + querySNSI009(form_ou.value, "020", locale, "", "", ""));	//[殘值]請填寫大於0的數值!
      senao_td010.value = '0';
    }
  }
}
/*---------------------欄位onChange、onClick Function Start--------------*/