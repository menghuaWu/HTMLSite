var pWidth = 720;
var pHeight = 430;
/*---------------------公用變數 Start--------------*/
var OU_ID; //Operating Unit(OU) SENAO:82 ENR:263
var ORG_ID; //Operating Unit(OU) SENAO:82 ENR:263

var DEFAULT_BGCOLOR = "#FFFFFF";  //class=T1
var EDIT_BGCOLOR = "#FBF1C0"; //class=T0
var form_ou = document.getElementById("form_ou");//公司別
var form_org = document.getElementById("form_org");//廠區
var senao008002 = document.getElementById("senao008002"); //表單單號
var senao008003 = document.getElementById("senao008003"); //申請人代號 
var senao008003_t1 = document.getElementById("senao008003_t1"); //申請人名稱
var senao008065 = document.getElementById("senao008065"); //申請單位代號
var senao008066 = document.getElementById("senao008066"); //申請單位名稱
var statement = document.getElementById("statement"); //訓練切結書聲明 Label
var senao008005 = document.getElementById("senao008005"); //本年度已派訓次數
var senao008006 = document.getElementById("senao008006"); //本年度已使用費用
var senao008007 = document.getElementById("senao008007"); //課程名稱
var senao008008 = document.getElementById("senao008008"); //接受海外訓練 (Checkbox) 0
var senao008008_0 = document.getElementById("senao008008_0"); //接受海外訓練 (Checkbox) 0
var senao008009 = document.getElementById("senao008009"); //上課地點
var senao008010 = document.getElementById("senao008010"); //費用
var senao008015 = document.getElementById("senao008015"); //合計時數
var senao008016 = document.getElementById("senao008016"); //舉辦單位
var senao008068 = document.getElementById("senao008068"); //課程簡介網址
var senao008020 = document.getElementById("senao008020"); //申請目的
var senao008048 = document.getElementById("senao008048"); //廠商代號
var senao008048_b1 = document.getElementById("senao008048_b1"); //廠商開窗
var senao008048_t1 = document.getElementById("senao008048_t1"); //廠商名稱
var senao008050 = document.getElementById("senao008050"); //付款方式
var senao008050_0 = document.getElementById("senao008050_0"); //付款方式 - 支票 0
var senao008050_1 = document.getElementById("senao008050_1"); //付款方式 - 電匯 1
var senao008051_btn = document.getElementById("senao008051_btn"); //預定付款日日期開窗 補充:2014年後就沒有填過此欄位
var senao008051_txt = document.getElementById("senao008051_txt"); //預定付款日日期
var senao008052 = document.getElementById("senao008052"); //批次名稱
var senao008053 = document.getElementById("senao008053"); //應付憑單
var senao008053_t1 = document.getElementById("senao008053_t1"); //隱藏欄位，
var senao008053_t2 = document.getElementById("senao008053_t2"); //隱藏欄位，應付憑單
var senao008054 = document.getElementById("senao008054"); //會計科目代號
var senao008054_t1 = document.getElementById("senao008054_t1"); //會計科目名稱
var senao008058 = document.getElementById("senao008058"); //支出歸屬部門
var senao008058_b1 = document.getElementById("senao008058_b1"); //支出歸屬部門
var senao008055 = document.getElementById("senao008055"); //訓練金額
var senao008056 = document.getElementById("senao008056"); //營業稅
var senao008057 = document.getElementById("senao008057"); //合計訓練金額
var senao008021 = document.getElementById("senao008021"); //本人同意上述聲明 (Checkbox) 
var senao008021_0 = document.getElementById("senao008021_0"); //本人同意上述聲明 (Checkbox) 0

var senao008027 = document.getElementById("senao008027"); //行動計劃書 (Checkbox) 0
var senao008027_0 = document.getElementById("senao008027_0"); //行動計劃書 (Checkbox) 0
var senao008028 = document.getElementById("senao008028"); //取得法定證照 (Checkbox) 0
var senao008028_0 = document.getElementById("senao008028_0"); //取得法定證照 (Checkbox) 0
var senao008031 = document.getElementById("senao008031"); //心得報告 (Checkbox) 
var senao008031_0 = document.getElementById("senao008031_0"); //心得報告 (Checkbox) 0
var senao008032 = document.getElementById("senao008032"); //心得報告繳交期限
var senao008033 = document.getElementById("senao008033"); //預計轉訓 (Checkbox) 
var senao008033_0 = document.getElementById("senao008033_0"); //預計轉訓 (Checkbox) 0
var senao008069 = document.getElementById("senao008069"); //預計轉訓期限
var senao008036 = document.getElementById("senao008036"); //預計轉訓時數
var senao008037 = document.getElementById("senao008037"); //預計轉訓場合 (Radio) 
var senao008037_0 = document.getElementById("senao008037_0"); //預計轉訓場合 (Radio) - 全公司 0
var senao008037_1 = document.getElementById("senao008037_1"); //預計轉訓場合 (Radio) - 部門內 1
var senao008038 = document.getElementById("senao008038"); //其他 (Checkbox) - 0
var senao008038_0 = document.getElementById("senao008038_0"); //其他 (Checkbox) - 0
var senao008039 = document.getElementById("senao008039"); //其他指標說明

var senao008040 = document.getElementById("senao008040"); //訓練部門意見 (Radio)
var senao008040_0 = document.getElementById("senao008040_0"); //訓練部門意見 (Radio) 準時參加 0
var senao008040_1 = document.getElementById("senao008040_1"); //訓練部門意見 (Radio) 暫緩參加 1
var senao008040_t1 = document.getElementById("senao008040_t1"); //準時參加說明
var senao008041 = document.getElementById("senao008041"); //暫緩原因 (Checkbox)
var senao008041_0 = document.getElementById("senao008041_0"); //暫緩原因 (Checkbox) 報告人數已滿 0
var senao008042 = document.getElementById("senao008042"); //暫緩原因 (Checkbox)
var senao008042_0 = document.getElementById("senao008042_0"); //暫緩原因 (Checkbox) 心得未繳交 0
var senao008043 = document.getElementById("senao008043"); //暫緩原因 (Checkbox)
var senao008043_0 = document.getElementById("senao008043_0"); //暫緩原因 (Checkbox) 費用未沖帳 0
var senao008044 = document.getElementById("senao008044"); //暫緩原因 (Checkbox)
var senao008044_0 = document.getElementById("senao008044_0"); //暫緩原因 (Checkbox) 轉訓未實施 0
var senao008045 = document.getElementById("senao008045"); //暫緩原因 (Checkbox)
var senao008045_0 = document.getElementById("senao008045_0"); //暫緩原因 (Checkbox) 年度重覆參加同一課程 0
var senao008046 = document.getElementById("senao008046"); //暫緩原因 (Checkbox)
var senao008046_0 = document.getElementById("senao008046_0"); //暫緩原因 (Checkbox) 其他 0
var senao008047 = document.getElementById("senao008047"); //暫緩原因 其他說明

var senao008062 = document.getElementById("senao008062"); //隱藏欄位，VENDOR_ID
var senao008063 = document.getElementById("senao008063"); //隱藏欄位，VENDOR_SITE_ID
var senao008059 = document.getElementById("senao008059"); //隱藏欄位，心得報告進度追蹤 1:未完成 2:已完成
var senao008060 = document.getElementById("senao008060"); //隱藏欄位，轉訓進度追蹤 1:未完成

var twd_convert = document.getElementById("twd_convert"); //20251103 Dex Add 新增董事長需求增加台幣欄位
var twd_conversion = document.getElementById("twd_conversion"); //20251103 Dex Add 新增董事長需求增加台幣欄位
var local_currency = "TWD"; //20251103 Dex Add 預設本幣為台幣
var conversion_type = "1001"; //20251103 Dex Add預設台灣神準匯率
var set_of_book_id = "01";//20251103 Dex Add預設台灣神準book_id

//以下供流程設計師使用
var applicantManagerId = document.getElementById("applicantManagerId"); //隱藏欄位
var hdn_senao008010 = document.getElementById("hdn_senao008010"); //隱藏欄位

//行動簽核
var senao008008_m = document.getElementById("senao008008_m"); //隱藏欄位，接受海外訓練
var senao008011_m = document.getElementById("senao008011_m"); //隱藏欄位，起始日期時間
var senao008012_m = document.getElementById("senao008012_m"); //隱藏欄位，起始日期時間
var senao008050_m = document.getElementById("senao008050_m"); //隱藏欄位，起始日期時間
var evalution_m = document.getElementById("evalution_m"); //隱藏欄位，評估指標
var opinion_m = document.getElementById("opinion_m"); //隱藏欄位，意見

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
  /*
  activityId = "UserTask_3";
  ProcessPackageId='SENAO008';//vivian 抓不到單號暫時定義
  formId='SENAO008';//vivian 抓不到單號暫時定義*/
  //vivian 暫時定義 end
  systemDateTime = showCurrentDate(); //今天日期
  //frmEvent();
  formOpen();
  formCreate();
  frmEvent();
});
function formCreate(){
  return true;
}
function formOpen() { //建立表單
  apiInvoke = invokeURL;
  //每個關卡欄位控卡
  setActivityFieldControl();
  //設定申請人*/
  $('#senao008003').val(userId);
  $('#senao008003_t1').val(user_Name);
  //設定所屬部門*/
  $('#senao008065').val(Department);
  $('#senao008066').val(Department_Name);
  applicant = $('#senao008003').val();//發起流程時參數 申請人ID
  applicantDept = $('#senao008065').val();//發起流程時參數 申請人部門ID
  displayStatement(senao008003_t1.value, senao008007.value);
  if (activityId === "UserTask_3") {
		
		//---以下為測試碼-----------------------
    if (userId === "102451x") {
      document.getElementById("senao008003_b1").disabled = false;
      senao008007.value = "鐵史特";
      senao008007_onblur();
      senao008009.value = "台北";
      senao008010.value = "3000"; //費用
      senao008011.value = "2019/07/01";
      senao008012.value = "2019/07/02";
      senao008013.value = "00:00";
      senao008014.value = "00:00";
      senao008015.value = "10"; //時數
      senao008016.value = "資策會";
      senao008068.value = "http://google.com";
      senao008020.value = "測試";
      senao008010_onchange();
      senao008021_0.checked = true;
    }
		//---以上為測試碼-----------------------
		//設定公司、廠區、表單單號
    frmGeneralLoad(ProcessPackageId, systemDateTime);
   
		form_org.style.backgroundColor = '#f7d9e4';
		form_ou.disabled=true;
		form_ou.style.backgroundColor = '#f7d9e4';
		if(form_ou.value==''){
			// alert("取得公司對應有問題，請重新開單一次!!");
			alert(querySNSI009(form_ou.value, "019", locale,"","",""));
			window.history.go(-1);
		}
    //複製表單時
		if (formInstOID === "") {
      //訓練部門意見 RESET
      senao008040_0.checked = true;
      senao008040_t1.value = "";
      senao008040_1.checked = false;
      senao008041_0.checked = false;
      senao008042_0.checked = false;
      senao008043_0.checked = false;
      senao008044_0.checked = false;
      senao008045_0.checked = false;
      senao008046_0.checked = false;
      senao008047.value = "";
			
			if (IsInvaildDept(senao008065.value)){	//判斷是否為失效部門
				senao008065.value = "";	//清空部門
				senao008066.value = "";	//清空部門
				senao008003_onchange();
			}
    }
    //修正儲存草稿區，費用欄位可編輯
    if (senao008007.value !== "")senao008007_onblur();
  
    //計算年度已受訓次數及費用
    if (senao008005.value === "" || senao008006.value === "") {
      var currentYear = new Date().getFullYear();
      var lastYear = currentYear - 1;
      var nextYear = currentYear + 1;
      var today = new Date();
      var startDate = "";
      var endDate = "";
      if (today < parseDate(currentYear + "/12/26")) {
        startDate = lastYear + "/12/26";
        endDate = currentYear + "/12/25";
      } else {
        startDate = currentYear + "/12/26";
        endDate = nextYear + "/12/25";
      }
      var trainingInfo = queryTrainingInfo(senao008003.value, startDate, endDate);
      senao008005.value = trainingInfo.annualCnt;
      senao008006.value = trainingInfo.annualTotalFee;
    }

	//依受訓金額核決關卡
	} else if (activityId.search("DecisionRule_23") !== -1) {
    senao008027.disabled = true;
    senao008028.disabled = true;
    senao008031.disabled = true;
    senao008033.disabled = true;
    senao008038.disabled = true;
	//HR負責外訓人員關卡 原0110-0010
	} else if (activityId === "UserTask_11") {
    senao008040_0.checked = true;
    senao008040_onclick();
  }

  return true;
}
function frmEvent() { 
  $('#senao008003').on('change', function () { //申請人OnChange
    senao008003_onchange();
  });
  $('#senao008007').on('blur', function () { //課程名稱Onblur
    senao008007_onblur();
  });
  $('#senao008010').on('change', function () { //費用OnChange
    senao008010_onchange();
  });
  $('input[name="senao008040"]').on('click', function () { //意見onclick
    senao008040_onclick();
  });
  $('#senao008011').on('change', function () { //起始日期時間OnChange
    senao008011_onchange();
  });
  $('#senao008012').on('change', function () { //結束日期時間OnChange
    senao008012_onchange();
  });
  $('input[name="senao008031"]').on('click', function () { //心得報告onclick
    senao008031_onclick();
  });
  $('input[name="senao008033"]').on('click', function () { //預計轉訓onclick
    senao008033_onclick();
  });
  $('#senao008009').on('blur', function () { //上課地點Onblur
    senao008009_onblur();
  }); 
  $('#senao008016').on('blur', function () { //舉辦單位Onblur
    senao008016_onblur();
  });
  $('#senao008020').on('blur', function () { //申請目的
    senao008020_onblur();
  });
  $('input[name="senao008038"]').on('click', function () { //評估指標 (可複選)-其他
    senao008038_onclick();
  });
  $('input[name="senao008046"]').on('click', function () { //意見-其他
    senao008046_onclick();
  });
  $('#senao008048').on('change', function () { //廠商
    senao008048_onchange();
  });
  $('#senao008051').on('change', function () { //預定付款日
    senao008051_onchange();
  });
  $('#senao008055').on('change', function () { //金額
    senao008055_onchange();
  });
  $('#senao008015').on('blur', function () { //合計上課時數Onblur
    senao008015_onblur();
  });
}
function formSave(){
	var errMsg='';
  /*FRM_COL_CHECK senao008003 申請人、senao008007 課程名稱、senao008015 合計上課時數、 senao008016 舉辦單位、senao008068 課程簡介網址*/
  if (activityId === "UserTask_3") {   //第一關填單人	
		if (senao008010.value.trim() === "") {
			//errMsg += "「費用」請勿空白!! \n";
			errMsg += "[" + $("#lbl_senao008010").html() + "] " + querySNSI009("senao","004",locale,"","","") + "\n";
		} else if (isNaN(senao008010.value)) {
            //errMsg += "「費用」必須為數值!! \n";
			errMsg += "[" + $("#lbl_senao008010").html() + "] " + querySNSI009("senao","021",locale,"","","") + "\n";
    } 
    if (senao008011.value.trim() === "") {
			//errMsg += "「上課起始日期」請勿空白!! \n";
			errMsg += "[" + $("#lbl_senao008011").html() + "-日期] " + querySNSI009("senao","004",locale,"","","") + "\n";
		}
		if (senao008013.value.trim() === "") {
			//errMsg += "「上課起始時間」請勿空白!! \n";
			errMsg += "[" + $("#lbl_senao008011").html() + "-時間] " + querySNSI009("senao","004",locale,"","","") + "\n";
		}
		if (senao008012.value.trim() === "") {
			//errMsg += "「上課結束日期」請勿空白!! \n";
			errMsg += "[" + $("#lbl_senao008012").html() + "-日期] " + querySNSI009("senao","004",locale,"","","") + "\n";
		}
		if (senao008014.value.trim() === "") {
			//errMsg += "「上課結束時間」請勿空白!! \n";
			errMsg += "[" + $("#lbl_senao008012").html() + "-時間] " + querySNSI009("senao","004",locale,"","","") + "\n";
		}
    if (!$("input[name='senao008021']:checked").val()) {
      //errMsg += "請勾選訓練切結書「本人同意上述聲明」!! \n";
      errMsg += querySNSI009(formId,"001",locale,"","","").replace("@@1",$("#Label50").html()).replace("@@2", $('label[for="senao008021_0"]').text().trim() ) + "\n";
    } 
		
		errMsg += checkAssessment();
		
		if (errMsg === "") {
            //alert("請同仁注意!!\n不論課程結束與否，請款單及發票需事先申請，避免發票申報過期無法請款!");
			alert(querySNSI009(formId,"002",locale,"","",""));
      if (workItemSource === 0){
				genSubject();
      }
			prepareForFlow();			
			showVarForFlow(true);
		}

  //簽核關卡
  } else {
  
    //直屬主管關卡 原0010-0010
    if (activityId === "UserTask_26") {	
      errMsg += checkAssessment();
      if (errMsg === "") {
          senao008059.value = senao008031_0.checked ? "1" : ""; //心得報告 1:未達成
          senao008060.value = senao008033_0.checked ? "1" : ""; //轉訓 1:未達成
      }
    } else if (activityId === "UserTask_11") {	
      prepareForMobile();
      showVarForFlow(true);
    }
	}	
	if(errMsg == ""){
		return true;
	}else{
		alert(errMsg);
		return false;
	}
}
function formClose() {
	return true;
}
function formDispatch(){
	if(activityId == "UserTask_2"){
		if(workItemSource != '1' && workItemSource != '2'){
      genSubject();
      /*
			if(window.parent.document.forms[0].txtSubject){
				window.parent.document.forms[0].txtSubject.value = senao_g003_t1.value + "-" + $$("#Label1").html() + "(" + senao_g019.value + ")" + window.parent.document.forms[0].txtSubject.value;
			}*/
		}
	}
	
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
  form_ou.disabled = true;//公司別鎖定下拉選項
  setCompanyValueByUser();
  //設定廠區
  setSelectDefalut(
    "form_org",
    apiInvoke + "BPM_getFactory",
    { COMPANY: $('#form_ou').val() },
    ""
  );
  
  //表單代號
  $('#senao008001').val(type);

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

/**
 * 產生表單主旨
 */
function genSubject() {
  try {
    // 取得標題與申請人
    const prefixSubject = senao008003_t1.value + "_課程名稱:" + senao008007.value;

    // 父視窗安全檢查
    const pdoc = window.parent?.document;
    if (!pdoc) return;

    // 嘗試取得父頁主旨欄位
    const selectors = [
      '#subject',
      'form[name="form1"] input[name="Subject"]',
      'form[name="form1"] input[name="txtSubject"]'
    ];

    let applySubject = '';
    for (const sel of selectors) {
      try {
        const val = window.parent.$(sel).val?.() || pdoc.querySelector(sel)?.value;
        if (val) { applySubject = val.toString(); break; }
      } catch (e) { /* ignore */ }
    }

    // 組合新主旨
    let finalSubject = '';
    if (applySubject) {
      finalSubject = applySubject.includes(prefixSubject)
        ? applySubject
        : `${prefixSubject}(${applySubject})`;
    } else {
      finalSubject = prefixSubject;
    }

    // 設定回父頁（依照可用選擇器）
    for (const sel of selectors) {
      try {
        const el = pdoc.querySelector(sel);
        if (el) { el.value = finalSubject; return; }
        if (window.parent.$(sel).length) { window.parent.$(sel).val(finalSubject); return; }
      } catch (e) { /* ignore */ }
    }
  } catch (err) {
    console.warn('genSubject error:', err);
  }
}

/**
 * 準備流程所需變數
 */
function prepareForFlow() {
  applicantManagerId.value = queryManagerByEmpId(senao008003.value);
	hdn_senao008010.value = senao008010.value;
}
/**
 * 顯示訓練切結書內容
 * @param {string} pName 
 * @param {string} pCourse 
 */
function displayStatement(pName, pCourse) {
  var name = "";
  var course = "";
  if (pName) {
      name = pName; 
  } else {
      name = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  if (pCourse) {
      course = pCourse; 
  } else {
      course = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
  }
  //statement.innerHTML = "本人&nbsp;&nbsp;<b>" + name + "</b>&nbsp;&nbsp;自願接受公司培訓，參加&nbsp;&nbsp;<b>" + course + "</b>&nbsp;&nbsp;訓練課程，" + 
  //"同意於訓練期間遵守之相關規定，並於結訓後兩週內將課程講義等相關資料送訓練部門存檔；否則不得申請全額訓練費用，不得提出異議。<br>" + 
  //"若本人未填寫外派訓練表單或僅口頭告知主管而未補外訓課程申請而自行至外部訓練上課者，其對外訓機構單位承諾該課程由公司付款，則公司不予補助，並該課程之費用應由本人自行付費。";
	statement.innerHTML = querySNSI009_Show(formId,"003",locale).replace("@@1","<b>" + name + "</b>&nbsp;&nbsp;").replace("@@2","&nbsp;&nbsp;<b>" + course + "</b>&nbsp;&nbsp;").replace("@@3","<br>");
}
/**
 * 準備行動簽核變數(radio、checkbox、dropdown)
 */
function prepareForMobile() {
    if ($("#senao008008_0").is(":checked")) {
        senao008008_m.value = "是";
    } else {
        senao008008_m.value = "否";
    }
    senao008011_m.value = senao008011.value + "  " + senao008013.value;
    senao008012_m.value = senao008012.value + "  " + senao008014.value;
    if ($("#senao008050").val() === "0") {
        senao008050_m.value = senao008050.options[senao008050.selectedIndex].text;
    } 
    var evalution = [];
    if ($("#senao008027_0").is(":checked")) {
        evalution.push(senao008027_0.text);
    } 
    if ($("#senao008028_0").is(":checked")) {
        evalution.push(senao008028_0.text);    
    } 
    if ($("#senao008031_0").is(":checked")) {
        evalution.push(senao008031_0.text);    
    } 
    if ($("#senao008033_0").is(":checked")) {
        evalution.push(senao008033_0.text);    
    } 
    if ($("#senao008038_0").is(":checked")) {
        if (senao008039.value !== "") {
            evalution.push(senao008038_0.text + "(" + senao008039.value + ")");    
        } else {
            evalution.push(senao008038_0.text);
        }
    }
    evalution_m.value = evalution.join("、");
    if ($("#senao008040_0").is(":checked")) {
        if (senao008040_t1.value !== "") {
            opinion_m.value = senao008040_0.text + "(" + senao008040_t1.value + ")";
        } else {
            opinion_m.value = senao008040_0.text;
        }
    } else if ($("#senao008040_1").is(":checked")) {
        opinion_m.value = senao008040_1.text;
    }
}
/**
 * 計算字串的字元數
 * @param {string} input 
 * @return {number} charQty
 */
function countCharacter(input) {
	var charQty = 0;
	if (input !== "") {
		for (i = 0 ; i < input.length ; i++) {
			char = input.substr(i, 1);
			if (!isNaN(char) || isLetter(char)) {
				charQty += 1;
			} else {
				charQty += 3;
			}
		}
	}
	return charQty;
}
/**
 * 字串轉換為日期 2018/05/05 -> Tue Jun 05 2018 00:00:00 GMT+0800 (台北標準時間)
 * @param {string} str 
 * @returns {object}
 */
function parseDate(str) {
	var mdy = str.split('-');
	return new Date(mdy[0], mdy[1]-1, mdy[2]);
}
/**
 * 課後評估指標欄位檢核，供申請人、直屬主管關卡呼叫
 * @returns {string} err
 */
function checkAssessment() {
  var err = "";
  if (!$("input[name='senao008027']:checked").val() && !$("input[name='senao008028']:checked").val() && 
        !$("input[name='senao008031']:checked").val() && !$("input[name='senao008033']:checked").val() &&
        !$("input[name='senao008038']:checked").val()) {
      //err += "請勾選「評估指標」!! \n";
    err += querySNSI009(formId,"004",locale,"","","") + "\n";
  } else {
    //勾選「心得報告」
    if ($("input[name='senao008031']:checked").val()) {
      if (senao008032.value === "") {
          //err += "心得報告完成日期請勿空白!! \n";
          err += querySNSI009(formId,"005",locale,"","","") + "\n";
      } else {
        //心得報告完成日期 需在課程結束內14天內的區間裡
        if (datediff(parseDate(senao008012.value), parseDate(senao008032.value)) > 14) {
          //err += "心得報告完成日期必須在[" + getYYYYMMDD(parseDate(senao008012_txt.value).addDays(14)) + "](含)內!! \n";
          err += querySNSI009(formId,"006",locale,"","","").replace("@@1",getYYYYMMDD(parseDate(senao008012.value).addDays(14))) + "\n";
        } else if (datediff(parseDate(senao008012.value), parseDate(senao008032.value)) < 1) {
          //err += "心得報告完成日期[" + senao008032.value + "]必須在上課結束日期[" + senao008012_txt.value + "](不含)之後!! \n";
          err += querySNSI009(formId,"007",locale,"","","").replace("@@1",senao008032.value).replace("@@2",senao008012.value) + "\n";
        }
      }
    }

    //勾選「預計轉訓」
    if ($("input[name='senao008033']:checked").val()) {
      if (senao008036.value.trim() === "") {
        //err += "轉訓時數請勿空白!! \n";
        err += querySNSI009(formId,"008",locale,"","","") + "\n";
      } else if (isNaN(senao008036.value)) {
        //err += "轉訓時數請輸入數字!! \n";
        err += querySNSI009(formId,"009",locale,"","","") + "\n";
      }
      if (!$("input[name='senao008037']:checked").val()) {
        //err += "請選擇轉訓場合!! \n";
        err += querySNSI009(formId,"015",locale,"","","") + "\n";
      }
    }    

    //勾選「其他」
    if ($("input[name='senao008038']:checked").val()) {
      if (senao008039.value.trim() === "") {
        //err += "其他說明請勿空白!! \n";
        err += querySNSI009(formId,"010",locale,"","","") + "\n";
      }
    }
  }
  return err;
}
/**
 * 於瀏覽器console顯示流程所需變數值
 * @param {boolean} isDebugMode 
 */
function showVarForFlow(isDebugMode) {
	var totalVar = [];
	if (isDebugMode) {
		totalVar.push("applicantManagerId.value = " + applicantManagerId.value);		
		totalVar.push("evalution_m.value = " + evalution_m.value);		
		totalVar.push("opinion_m.value = " + opinion_m.value);	
		if (window.console) {
      console.log("---- Variable Log ---- Start");
      console.log(totalVar.join("\n"));
      console.log("---- Variable Log ---- End");
    }
	}
}
/**
 * 日期轉字串 YYYYMMDD格式 ex:2019/5/10
 * @param {object} date 
 * @returns {string} formatDate
 */
function getYYYYMMDD(date) {
    var formatDate = "";
    if (date) {
        formatDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
    }
    return formatDate;
}
/**
 * convert characters to ascii
 * @param {sting} char 
 * @returns isLetter
 */
function isLetter(char) {
	var isLetter = false;
	var asciiCode = "";
	if (char !== "") {
		asciiCode = char.charCodeAt(0);
		if (asciiCode >= 32 && asciiCode <= 126) {
			isLetter = true;
		}
	}
	return isLetter;
}
/**
 * 兩個日期相差天數
 * @param {object} first 
 * @param {object} second 
 * @returns {number}
 */
function datediff(first, second) {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second-first)/(1000*60*60*24));
}
/*---------------------公用Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
/*---------------------JqGrid Function End--------------*/
/*---------------------API Function Start--------------*/
$('#senao008003_b1').on('click', function () { //申請人開窗
  // sessionStorage 存入數據
  let tTitle = "申請人";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao008003','senao008003_t1','senao008065','senao008066');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_getUser_Org";
  let tAPI = invokeURL + 'BPM_getUser_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', USERNAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', ID_1: 'ALL' };
  let tQBEField = { ID: 'ID', USERNAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', ID_1: 'ID_1' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao008048_b1').on('click', function () { //廠商
  // sessionStorage 存入數據
  let tTitle = "廠商名單";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('senao008048','senao008048_t1','senao008062','senao008063');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_ERP_SENAO008_Vendor";
  let tAPI = invokeURL + 'BPM_ERP_SENAO008_Vendor';
  let tParameter = {SEGMENT1: null, VENDOR_NAME: null };
  let tQBEField = { SEGMENT1: 'SEGMENT1', VENDOR_NAME: 'VENDOR_NAME' }; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
$('#senao008058_b1').on('click', function () { //支出歸屬部門
  // sessionStorage 存入數據
  let tTitle = "支出歸屬部門";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','senao008058');//回傳元件參數
  let tReturnFunction = new Array(); //回傳函數
  let tColAPi = "BPM_SYS_LW_DEPT_Org";
  let tAPI = invokeURL + 'BPM_SYS_LW_DEPT_Org';
  let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: null, ORGANIZATIONUNITNAME: null};
  let tQBEField = { ID: 'ID', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME'}; //查詢欄位 {參數欄位:table欄位};	
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
/**
 * 查詢該年度已受訓次數及費用
 * @param {string} applyId
 * @param {string} startDate
 * @param {string} endDate
 * @returns {object} trainingInfo
 */
function queryTrainingInfo(applyId, startDate, endDate) {
	var trainingInfo = {};
	var sqlId = "BPM_SENAO008_04";
	var params = [];
    var data = [];    
    if (applyId && startDate && endDate) {
      params.push(applyId);
      params.push(startDate);
      params.push(endDate);
      data = ajaxGetData(invokeURL + sqlId, {
          applyId:params[0],
          startDate:params[1],
          endDate:params[2]
      })
      trainingInfo.annualCnt = data[0].CNT; //Cnt
      trainingInfo.annualTotalFee = data[0].TOTALFEE; //TotalFee
    }
	return trainingInfo;
}
/**
 * 查詢廠商相關資訊
 * @param {string} vendorId 
 * @returns {object} vendorInfo
 */
function queryVendorInfo(vendorId) {
  var vendorInfo;
  var sqlId = "BPM_ERP_SENAO008_Vendor_1"; 
	var params = [];
	var data = [];
	if (vendorId) {
		params.push(vendorId);
    data = ajaxGetData(invokeURL + sqlId, {
        p:params[0]
    })
    if(data[0].result == undefined){
      if (data.length > 0) {
        vendorInfo = {};
        vendorInfo.vendorNo = data[0].SEGMENT1; //SEGMENT1
        vendorInfo.vendorName = data[0].VENDOR_NAME; //VENDOR_NAME
        vendorInfo.vendorId = data[0].VENDOR_ID; //VENDOR_ID
        vendorInfo.vendorSiteId = data[0].VENDOR_SITE_ID; //VENDOR_SITE_ID
      }
    } else {
      vendorInfo = "";
    }
	}
  return vendorInfo;
}
/**
 * 查詢目前當日最大序號+1，若無，則回傳1
 * 此SQL使用SQL註冊器無法正常，因此SQL寫在JS
 * @param {string} applyDate 
 * @returns {string} newSN
 */
function genNewSN(applyDate) {
    var newSN = "1"; //預設為1
    var sqlId = "BPM_SENAO008_genNewSN"; 
    var data = [];
    data = ajaxGetData(invokeURL + sqlId, {
      applyDate:applyDate
    })
    if (data.length > 0) {
      newSN = data[0].MAXNUMBER;
    }
    return newSN;
}
/**
 * 搜尋設定檔是否在某值當中
 * @param {string} value 
 * @param {string} snsiId
 * @returns result "Y" or "N"
 */
function isSNSI003InValue(value, snsiId) {
	var result = "N";
	if (value !== "" && snsiId !== "") {
		if (value.search(querySNSI003(snsiId)) > -1) {
			result = "Y";
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
	var result = "N";
	if (value !== "" && snsiId !== "") {
		if (querySNSI003(snsiId).search(value) > -1) {
			result = "Y";
		}
	}
	return result;
}
/**
 * 儲存最新流水號
 * @param {string} todayDate
 * @param {string} newSN
 * @returns {boolean} isSuccess
 */
function saveNewSN(todayDate, newSN) {
	var isSuccess = false;
	var sqlId = "BPM_SENAO008_03";
	var params = [];
  var data = [];    
  if (todayDate && newSN) {
    params.push(todayDate);
    params.push(newSN);
    data = ajaxGetData(invokeURL + sqlId, {
      todayDate:params[0],
      newSN:params[1]
    })
		isSuccess = true;
  }
	return isSuccess;
}
/** 20251103 Dex Add
 * 查詢Org基本定義
 * @returns data
 */
function getORG_Def(){
	var defData = [];
	var sqlId = "BPM_ERP_getORG_Def";
	var tParams = [];
	if(ORG_ID != ""){
		tParams.push(ORG_ID);
	}else{
		tParams.push('86');
	}
  pData = ajaxGetData(invokeURL + sqlId, {
    OU_ID:tParams[0]
  })
  if (pData.length > 0) {
      defData = pData; 
  }
	return defData;
}
/*---------------------API Function End--------------*/
/*---------------------欄位onChange、onClick Function Start--------------*/
/**
 * 申請人代號欄位
 */
function senao008003_onchange() {
  var userInfo = {};
  if (senao008003.value !== "") {    
    userInfo = queryUserByEmpId(senao008003.value);
    if (typeof userInfo.userId !== "undefined") {
      senao008003.value = userInfo.userId; //申請人ID
      senao008003_t1.value = userInfo.userName; //申請人名稱
      senao008065.value = userInfo.unitId; //申請單位ID
      senao008066.value = userInfo.unitName; //申請單位名稱
    } else {
			//alert("輸入的申請人代號:" + senao008003.value + " 查無資料，請重新輸入!! \n");
			alert("[" + $("#lbl_senao008003").html() + "-" + senao008003.value + "] " +querySNSI009("senao","031",locale,"","",""));
			senao008003.value = ""; 
			senao008003_t1.value = "";
			senao008065.value = ""; 
			senao008066.value = "";
		}
	} else {
		senao008003.value = ""; 
    senao008003_t1.value = "";
    senao008065.value = ""; 
		senao008066.value = ""; 
	}
    return true;
}
/**
 * 課程名稱欄位，不可超過100個字元
 * 若填寫，費用欄位啟用，反之。
 */
function senao008007_onblur() {
  var charQty = countCharacter(senao008007.value);
  if (charQty > 100) {
    //alert("「課程名稱」共 " + charQty + " 字元, 不可超過100字元(中文字為3字元)!!");
    alert("[" + $("#lbl_senao008007").html() + "] " + querySNSI009(formId,"013",locale,"","","").replace("@@1",charQty));
    $("#senao008007").val("");
    $("#senao008007").focus();
  } else {
    if (senao008007.value !== "") {
        $("#senao008010").prop("disabled", false);  
        senao008010.style.backgroundColor = EDIT_BGCOLOR;
    } else {
        $("#senao008010").prop("disabled", true);
        senao008010.style.backgroundColor = DEFAULT_BGCOLOR;
        senao008010.value = "";
    }
    //更新訓練切結書內容
    displayStatement(senao008003_t1.value, senao008007.value);
    senao008010_onchange();
  }
}
/**
 * 費用欄位，檢查數字格式、複製費用、計算合計金額
 */
function senao008010_onchange() {
  if (senao008010.value === "") {
    senao008055.value = "";
    senao008056.value = "";
    senao008057.value = "";
    twd_convert.value = ""; //20251103 Dex Add 金額合計為空，金額合計(台幣)也會為空
  } else if (isNaN(senao008010.value) || Number(senao008010.value) < 0) {
    //alert("「費用」必須為大於0數值!!");
    alert("[" + $$("#lbl_senao008010").html() + "] " + querySNSI009("senao","020",locale,"","",""));
    senao008010.value = "";
    senao008055.value = "";
    senao008056.value = "";
    senao008057.value = "";
    twd_convert.value = ""; //20251103 Dex Add 金額合計為空，金額合計(台幣)也會為空
  } else {
    senao008055.value = senao008010.value;
    senao008056.value = "0";
    senao008057.value = Number(senao008055.value) + Number(senao008056.value);
    //20251103 Dex Add 新增董事長需求，計算總計台幣、匯率(s)
    if(local_currency == "TWD"){ //如果本幣為台幣，直接給匯率1
      twd_conversion.value = "1";
    }else{ //本幣不是台幣，再去查換算台幣匯率(因表單目前只會有台幣，未來如果有其他OU再調整參數2，這裡僅強制換算董事長需求的TWD)
      var sqlid = "BPM_ERP_SENAO091_07";
      var tParams = new Array();
      tParams.push(senao008057.value);
      tParams.push("TWD");
      tParams.push(conversion_type);
      tParams.push(systemDateTime);
      var convert_to_twd = [];    
      convert_to_twd = ajaxGetData(invokeURL + sqlid, {
        senao008057:tParams[0],
        D:tParams[1],
        conversion_type:tParams[2],
        TIME:tParams[3]
      })
      if(convert_to_twd[0].result == undefined){
        if(convert_to_twd.length > 0 ){
          twd_conversion.value = fixNull(convert_to_twd[0].CONVERSION_RATE);
        }else{
          twd_conversion.value = "1";
        }
      }
    }
    twd_convert.value = senao008057.value * twd_conversion.value;
    //20251103 Dex Add 新增董事長需求，計算總計台幣、匯率(e)
  }    
}
/**
 * 訓練部門意見 Radio
 */
function senao008040_onclick() {
  if ($("#senao008040_0").is(":checked")) { //請準時到場參加
    $("#senao008040_t1").prop("disabled", false);  //準時參加說明，可編輯狀態
    senao008040_t1.style.backgroundColor = EDIT_BGCOLOR; //準時參加說明，底色Highlight
    senao008041_0.checked = false; //報告人數已滿
    senao008041_0.disabled = true;
    senao008042_0.checked = false; //心得未繳交
    senao008042_0.disabled = true;
    senao008043_0.checked = false; //費用未沖帳
    senao008043_0.disabled = true;
    senao008044_0.checked = false; //轉訓未實施
    senao008044_0.disabled = true;
    senao008045_0.checked = false; //年度重覆參加同一課程
    senao008045_0.disabled = true;
    senao008046_0.checked = false; //其他
    senao008046_0.disabled = true;
    $("#senao008047").prop("disabled", true); //其他說明
    senao008047.style.backgroundColor = DEFAULT_BGCOLOR;
    senao008047.value = "";

    $("#senao008048").prop("disabled", false);//廠商代號
    senao008048.style.backgroundColor = EDIT_BGCOLOR;
    senao008048_b1.disabled = false; //廠商開窗
    senao008051.disabled = false; //預定付款日日期開窗
    senao008051.style.backgroundColor = EDIT_BGCOLOR;
    senao008054_t1.style.backgroundColor = EDIT_BGCOLOR; //會計科目名稱
    $("#senao008050").val("");  // 清空選項(回到"請選擇")
    $("#senao008050").prop("disabled", false);  // 啟用下拉選單
    $("#senao008058").prop("disabled", true);//支出歸屬部門
    senao008058.style.backgroundColor = EDIT_BGCOLOR;
    senao008058_b1.disabled = false;
  } else if ($("#senao008040_1").is(":checked")) { //建議暫緩參加
    $("#senao008040_t1").prop("disabled", true);
    senao008040_t1.style.backgroundColor = DEFAULT_BGCOLOR; //準時參加說明，無底色
    senao008040_t1.value = "";
    senao008041_0.checked = false; //報告人數已滿
    senao008041_0.disabled = false;
    senao008042_0.checked = false; //心得未繳交
    senao008042_0.disabled = false;
    senao008043_0.checked = false; //費用未沖帳
    senao008043_0.disabled = false;
    senao008044_0.checked = false; //轉訓未實施
    senao008044_0.disabled = false;
    senao008045_0.checked = false; //年度重覆參加同一課程
    senao008045_0.disabled = false;
    senao008046_0.checked = false; //其他
    senao008046_0.disabled = false;
    $("#senao008047").prop("disabled", true); //其他說明
    senao008047.style.backgroundColor = DEFAULT_BGCOLOR;

    $("#senao008048").prop("disabled", true); //廠商代號
    senao008048.style.backgroundColor = DEFAULT_BGCOLOR;
    senao008048.value = "";
    senao008048_b1.disabled = true; //廠商開窗
    senao008048_t1.value = ""; //廠商名稱
    senao008051.disabled = true; //預定付款日日期開窗
    senao008051.value = ""; //預定付款日日期
    senao008051.style.backgroundColor = DEFAULT_BGCOLOR;
    senao008054_t1.style.backgroundColor = DEFAULT_BGCOLOR; //會計科目名稱
    senao008052.value = ""; //批次名稱
    senao008053.value = ""; //應付憑單
    $("#senao008050").val("").prop("disabled", true);      
    $("#senao008058").prop("disabled", true); //支出歸屬部門
    senao008058.value = "";
    senao008058.style.backgroundColor = EDIT_BGCOLOR;
    senao008058_b1.disabled = false;
  }
}
/**
 * 起始日期欄位
 */
function senao008011_onchange() {
  if (senao008011.value && senao008012.value) {
    if (senao008011.value > senao008012.value) {
      //alert("上課起始日期必須小於上課結束日期!!");
      alert(querySNSI009(formId,"011",locale,"","",""));
      senao008011.value = "";
    }
  }
}
/**
 * 結束日期欄位
 */
function senao008012_onchange() {
  if (senao008011.value && senao008012.value) {
    if (senao008012.value < senao008011.value) {
      //alert("上課結束日期必須大於上課起始日期!!");
      alert(querySNSI009(formId,"012",locale,"","",""));
      senao008012.value = "";
    } 
  } 

  //若已勾選心得報告或預計轉訓選項，則同步調整期限
  senao008031_onclick();
  senao008033_onclick();
}
/**
 * 評估指標:心得報告 checkbox
 */ 
function senao008031_onclick() {
  $("#senao008039").prop("disabled", true);  
  if ($("input[name='senao008031']:checked").val()) {
    if (senao008012.value !== "") {
      //心得報告繳交期限=>上課結束日期加14天
      senao008032.value = getYYYYMMDD(parseDate(senao008012.value).addDays(14));
    } else {
      //alert("請先填寫上課結束日期!!");
      alert("[" + $("#lbl_senao008012").html() + "] " + querySNSI009("senao","004",locale,"","",""));
      senao008031_0.checked = false;
    }
  } else {
    senao008032.value = "";
  }
}
/**
 * 評估指標:預計轉訓 checkbox
 */
function senao008033_onclick() {
  $("#senao008069").prop("disabled", true);  
  if ($("input[name='senao008033']:checked").val()) {
    if (senao008012.value !== "") {
      //轉訓期限=>上課結束日期加30天
      senao008069.value = getYYYYMMDD(parseDate(senao008012.value).addDays(30));
      senao008036.style.backgroundColor = EDIT_BGCOLOR;
      $("#senao008036").prop("disabled", false); 
      $("#senao008037").prop("disabled", false);
    } else {
      //alert("請先填寫上課結束日期!!");
      alert("[" + $("#lbl_senao008012").html() + "] " + querySNSI009("senao","004",locale,"","",""));
      senao008033_0.checked = false;
    }
  } else {
    senao008069.value = "";
    senao008036.style.backgroundColor = DEFAULT_BGCOLOR;
    $("#senao008036").prop("disabled", true);  
    $("#senao008037").val("").prop("disabled", true);
  }

}
/**
 * 上課地點欄位，不可超過100個字元
 */
function senao008009_onblur() {
  var charQty = countCharacter(senao008009.value);
  if (charQty > 100) {
    //alert("「上課地點」共 " + charQty + " 字元, 不可超過100字元(中文字為3字元)!!");
    alert("[" + $("#lbl_senao008009").html() + "] " + querySNSI009(formId,"013",locale,"","","").replace("@@1",charQty));
    $("#senao008009").val("");
    $("#senao008009").focus();
  }
}
/**
 * 舉辦單位欄位，不可超過100個字元
 */
function senao008016_onblur() {
  var charQty = countCharacter(senao008016.value);
  if (charQty > 100) {
    //alert("「舉辦單位」共 " + charQty + " 字元, 不可超過100字元(中文字為3字元)!!");
    alert("[" + $("#lbl_senao008016").html() + "] " + querySNSI009(formId,"013",locale,"","","").replace("@@1",charQty));
    $("#senao008016").val("");
    $("#senao008016").focus();
  }
}
/**
 * 申請目的欄位，不可超過255個字元
 */
function senao008020_onblur() {
  var charQty = countCharacter(senao008020.value);
  if (charQty > 255) {
    //alert("「申請目的」共 " + charQty + " 字元, 不可超過255字元(中文字為3字元)!!");
    alert("[" + $("#lbl_senao008020").html() + "] " + querySNSI009(formId,"013",locale,"","","").replace("@@1",charQty));
    $("#senao008020").val("");
    $("#senao008020").focus();
  }
}
/**
 * 評估指標:其他 checkbox
 */ 
function senao008038_onclick() {
  if ($("input[name='senao008038']:checked").val()) {
    senao008039.style.backgroundColor = EDIT_BGCOLOR;
    $("#senao008039").prop("disabled", false);  
  } else {
    senao008039.style.backgroundColor = DEFAULT_BGCOLOR;
    $("#senao008039").prop("disabled", true);  
    senao008039.value = "";
  }
}
/**
 * 暫緩原因 - 其他說明欄位
 */ 
function senao008046_onclick() {
  if ($("input[name='senao008046']:checked").val()) {
    senao008047.style.backgroundColor = EDIT_BGCOLOR;
    $("#senao008047").prop("disabled", false);  
  } else {
    senao008047.style.backgroundColor = DEFAULT_BGCOLOR;
    $("#senao008047").prop("disabled", true); 
    senao008047.value = "";
  }
}
/**
 * 廠商代號欄位，查詢廠商名稱
 */
function senao008048_onchange() {	
  var vendorInfo;
	if (senao008048.value) {
    vendorInfo = queryVendorInfo(senao008048.value);
    if (vendorInfo) {
        senao008048.value = vendorInfo.vendorNo;
        senao008048_t1.value = vendorInfo.vendorName;
        senao008062.value = vendorInfo.vendorId;
        senao008063.value = vendorInfo.vendorSiteId;
    } else {
			//alert("您輸入的廠商代號查無資料，請查明後重新輸入!!");
			alert("[" + $("#lbl_senao008048").html() + "-" + senao008048.value + "] " + querySNSI009("senao","031",locale,"","",""));
			senao008048.value = "";
			senao008048_t1.value = "";
		}
	} else {
		//alert("請先輸入廠商代號!!");
		alert("[" + $("#lbl_senao008048").html() + "] " + querySNSI009("senao","004",locale,"","",""));
	}
}
/**
 * 預定付款日日期開窗
 * (1)產生批次名稱 ex:EIN-20190515-S1024511
 * (2)產生應付憑單 ex:Z1080515002
 *    (2.1)產生最新流水號
 *    (2.2)儲存最新流水號
 */
function senao008051_onchange() {
  var todayDate = new Date().yyyymmdd();
  senao008052.value = "EIN-" + todayDate + "-S" + senao008003.value + "1";

  var newSN = genNewSN(todayDate) + "";
  var DEFAULT_LEN = 3; 
  newSN = new Array(DEFAULT_LEN - newSN.length + 1).join("0") + newSN; //向左補0 ex:001
  senao008053.value = "Z" + todayDate + newSN;

  var isSaveSuccess = saveNewSN(todayDate, newSN);

}
/**
 * 
 */
function senao008055_onchange() {
    //待確認，是否要開發
}
/**
 * 合計時數欄位
 */
function senao008015_onblur() {
  if (senao008015.value) {
    if (senao008015.value.length > 4) {
      //alert("「合計時數」不可超過四位數!!");
      alert("[" + $("#lbl_senao008015").html() + "] " + querySNSI009(formId,"014",locale,"","",""));
      $("#senao008015").val("");
      senao008015.focus();
    }
  }
}
/*---------------------欄位onChange、onClick Function Start--------------*/