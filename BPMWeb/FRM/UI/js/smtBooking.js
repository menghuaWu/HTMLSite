
$(document).ready(function () {
  loginCheck(); //登入檢查
  //判斷是管理
   let result = ajaxGetData(invokeURL + 'BPM_SMT_BOOKING_LIST', {
        SNSI003002: 'SN137_P01_1', 
        VALUE: getcooky("username") 

    });
    if (result[0].JUDGMENT='T' ) {
        $('#smt001').text('-管理者模式').css('color', 'red');
    }else{
        $('#smt001').text('-一般模式').css('color', 'blue');
    }
    result = ajaxGetData(invokeURL + 'BPM_SMT_BOOKING_LIST', {
        SNSI003002: 'SN137_P01_2', 
        VALUE: getcooky("username") 

    });
    if (result[0].JUDGMENT='T' ) {
        $('#smt001').text('-生管者模式').css('color', 'red');
    }
    //測試用
      $('#smt001').text('-一般模式').css('color', 'blue');
     $('#smt002').val(getcooky("username") );
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
  $('#smt002').text(user_Name + '(' + userId + ')');
  crateFullCalendar('calendar');
});
/////////////function start///////////////////
//create  FullCalendar
var calendar;
var crateFullCalendar = function () {
  let calendarEl = document.getElementById("calendar");
  calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source', //宣告要執行GPL 
    plugins: [ //View
      "interaction",
      "dayGrid",
      "timeGrid",
      "list",
    ],
    defaultView: 'dayGridMonth',
    header: {
      left: "prev",
      center: "title",
      right: "next"
    },
    /* dayRender: function(info) {
      let button = document.createElement("input");
      button.type = "button";
      button.value = "新增";
      button.id = "btn_" + info.date.getTime(); // 避免重複 ID
      button.style.display = "block";   // 獨立一行
      button.style.marginTop = "20px";  // 往下移 20px（可自行調整）
      button.style.position = "relative";
      button.style.zIndex = "9999";
          
      button.addEventListener("click", function() {
        alert("你點選的日期是：" + info.date.toISOString().slice(0, 10));
      });
      info.el.appendChild(button);
    },*/
    events: function (fetchInfo, successCallback, failureCallback) {
      var start = fetchInfo.startStr; // 開始日期字串 (例如: 2025-11-01)
      var end = fetchInfo.endStr;     // 結束日期字串 (例如: 2025-11-30)
      var eventsData = [];
      var totalCount=0;
      var totalCount_canceled=0;
      var totalCount_0=0;
      var totalCount_1=0;
      var totalCount_2=0;
      var blackcolor="#FFCC00";
      var showCanceled  = $('#senao_smt003_0').is(':checked');
      let result = ajaxGetData(invokeURL + 'BPM_SMT_BOOKING_LIST', {
        SDATE: start, //開始日期
        EDATE: end //結束日期

      });
      if (result[0].result == undefined) {
        totalCount=result.length;
        $.map(result, function (item) {
           switch (item.SENAO137D4802) {
            case "-1"://已取消
                   totalCount_canceled = totalCount_canceled + 1;
                   blackcolor="#C0C0C0";
                   break;
            case "0"://申請中
                   totalCount_0 = totalCount_0 + 1;
                   blackcolor="#F5A9F2";
                   break;
            case "1"://已預約
                   totalCount_1 = totalCount_1 + 1;
                   blackcolor="#CCFFFF";
                   break;
            case "2"://已安排上線
                   totalCount_2 = totalCount_2 + 1;
                   blackcolor="#FFCC00";
                   break;
          }
          if (item.SENAO137D4802 === "-1" && !showCanceled ) {
            return;
          }
          let date = {
            title: '(' + item.SENAO137D4017 + ')[' + item.SENAO137D4011 + "]" + item.SENAO137D4015 + item.SENAO137D4002 + "*" + item.SENAO137D4010 + item.SENAO137D4005,
            start: item.YY + '-' + String(item.MM).padStart(2, '0') + '-' + String(item.DD).padStart(2, '0'),
            backgroundColor: blackcolor,
            borderColor: blackcolor,
            textColor: "#000000",
            id: item.INDEXNUM
          }
         
          eventsData.push(date)
        });
        //$('#smt004').val(totalCount_canceled);
        $('#smt004').text(totalCount_canceled);
        $('#smt005').text(totalCount_0);
        $('#smt006').text(totalCount_1);
        $('#smt007').text(totalCount_2);
        $('#smt008').text(totalCount);
        successCallback(eventsData);
      }

    },
    eventClick: function (info) {
      editEvent(info);
    },
    dateClick: function (info) {
      newEvent(info);
    },
    eventRender: function (info) {
      // info.event.extendedProps.subtitle 就是我們要的第二行文字
      if (info.event.extendedProps.subtitle) {
        var el = info.el.querySelector('.fc-title');
        if (el) {
          el.innerHTML += `<br>
              <small style="
                color: #000000ff;           /* 統一文字顏色 */
                background-color: #FFFF00; /* 統一背景顏色 */
                text-align: right;
                white-space: normal;
              ">
                ${info.event.extendedProps.subtitle}
              </small>`;
        }
      }
    }
    //navLinks: true, 
  });
  calendar.render();
  return calendar;
};
var buttons = document.querySelectorAll(".dayButton");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    alert("clicked button on " + this.dataset.date);
  });
});
/*------------新增Event-------------*/
var newEvent = function (info) { //新增Event
  var modal = document.getElementById('BookingModal');//取得元素
  intitModal(modal);//初始化視窗
  var date = info.dateStr;
  // 篩選該日期的事件
  /*
  var eventsOnDate = calendar.getEvents().filter(event => {
    var eventDate = event.start;
    var targetDate = new Date(info.dateStr);
    // 比對年月日
    return eventDate.getFullYear() === targetDate.getFullYear() &&
      eventDate.getMonth() === targetDate.getMonth() &&
      eventDate.getDate() === targetDate.getDate();
  });*/
  let eventsOnDate = getEventsCountByDate(date); //取得當天預約筆數
  var label21 = document.getElementById('Label21');
  if (eventsOnDate >= 2) {
    if (confirm("請確認是否新增?(若新增系統會觸發SENAO159-試作/試產增加預約申請單)")) {
      // 使用者按「是」才繼續後續流程
      label21.classList.remove('d-none');
    } else {
      // 使用者按「否」就直接 return，不做後續動作
      return;
    }
  }
  else {
    label21.classList.add('d-none');
  }
  // 清空所有欄位
  modal.querySelectorAll('input').forEach(function (input) { input.value = ''; });
  modal.querySelectorAll('textarea').forEach(function (textarea) { textarea.value = ''; });
  modal.querySelectorAll('select').forEach(function (select) { select.selectedIndex = 0; });

  //設定預設值
  document.getElementById('senao_smt004').value = info.dateStr; // 預設日期
  document.getElementById('senao_smt005').value = info.dateStr; // 預設日期
  document.getElementById('senao_smt006').value = userId; // 預設申請人ID
  document.getElementById('senao_smt007').value = user_Name; // 預設申請人姓名

  modal.style.display = 'block';//顯示視窗


};
/*------------編輯Event-------------*/
var editEvent = function (info) {
  var currentColor = info.event.backgroundColor;
  var title = info.event ? info.event.title : ''; // 標題
  //可檢視權限
  if( $('#smt001').text()=="-生管者模式" && currentColor =="#CCFFFF" || 
      $('#smt001').text()=="-管理者模式" && currentColor !="#C0C0C0" ||
      $('#smt001').text()=="-一般模式" && title.includes(user_Name) ||
      $('#smt001').text()=="-一般模式" && currentColor =="#CCFFFF"){   
    var date = info.event ? info.event.start : null; // 開始日期
    var yy = date ? date.getFullYear() : '';
    var mm = date ? String(date.getMonth() + 1).padStart(2, '0') : '';
    var dd = date ? String(date.getDate()).padStart(2, '0') : '';
    var dateStr = yy + '-' + mm + '-' + dd;
    var indexNum = info.event ? info.event.id : '';

    //alert("預約事件:" + title + "\n預約時間:" + dateStr);
    var sqlid = "BPM_SMT_ShowBooking";
    var data = [];
    data = ajaxGetData(invokeURL + sqlid, {
      YY: yy,      // 上線年
      MM: mm,      // 上線月
      DD: dd,      // 上線日
      INDEXNUM: indexNum,//預約序號
    });
    if (data[0].result == undefined) {
      if (data.length > 0) {
        // 顯示視窗
        var modal = document.getElementById('BookingModal');
        modal.style.display = 'block';
        // 隱藏「確定」按鈕
        modal.querySelectorAll('button#btnAdd').forEach(function(btn){
          btn.classList.add('d-none');
        });
        // 鎖定所有欄位及按鈕
        modal.querySelectorAll('input, textarea, select').forEach(function(el){
          el.setAttribute('readonly', true);
          el.setAttribute('disabled', true);
        });
        modal.querySelectorAll('#senao_smt008_b1, #senao_smt014_b1').forEach(function(btn){
          btn.setAttribute('disabled', true);
        });

        
        //判斷是否為管理者模式
        if($('#smt001').text()=="-管理者模式" && currentColor =="#CCFFFF"){
          // 顯示管理者功能區塊 
          $('#lbl_senao_smt020').closest('.row').removeClass('d-none');
        }else{
          // 隱藏管理者功能區塊 
          $('#lbl_senao_smt020').closest('.row').addClass('d-none');
        } 

        //可刪除的權限
        if( $('#smt001').text()=="-管理者模式" && currentColor =="#CCFFFF" ||
            $('#smt001').text()=="-管理者模式" && currentColor =="#FFCC00" ||
            $('#smt001').text()=="-一般模式" && title.includes(user_Name) && currentColor =="#CCFFFF" ){
          // 開啟「刪除」按鈕
          modal.querySelectorAll('button#btnDelete').forEach(function(btn){
            btn.classList.remove('d-none');
          });
        }else {
          // 隱藏「刪除」按鈕
          modal.querySelectorAll('button#btnDelete').forEach(function(btn){
            btn.classList.add('d-none');
          });
        }

        //判斷是否顯示交換密碼
        if( $('#smt001').text()=="-一般模式" && title.includes(user_Name)){
          // 顯示交換密碼功能區塊 
          $('#lbl_senao_smt021').closest('.row').removeClass('d-none');
          // 顯示[預約]交換區塊 
          $('#lbl_senao_smt022').closest('.row').removeClass('d-none');
        }else {
          // 隱藏交換密碼功能區塊 
          $('#lbl_senao_smt021').closest('.row').addClass('d-none');
          // 隱藏[預約]交換區塊 
          $('#lbl_senao_smt022').closest('.row').addClass('d-none');
        }
        // 解鎖特定欄位及按鈕
        const unlockIds = [
          'senao_smt021',      // 交換密碼 input
          'senao_smt022',      // [預約]交換 input
          'senao_smt030',      // 交換密碼 input
        ];

        unlockIds.forEach(function(id){
          const el = modal.querySelector('#' + id);
          if(el){
            el.removeAttribute('readonly');
            el.removeAttribute('disabled');
          }
        });

        //帶入資料
        document.getElementById('senao_smt004').value = data[0].SENAO137D4001.split("T")[0];; //預約日期
        document.getElementById('senao_smt005').value  = dateStr; //上線日期
        senao_smt006.value = data[0].SENAO137D4004; //預約人ID
        senao_smt007.value = data[0].SENAO137D4005; //預約人姓名
        document.getElementById('indexNum').value= data[0].INDEXNUM; //預約序號
        senao_smt008.value = data[0].SENAO137D4002; //試作單號
        senao_smt009.value = data[0].SENAO137D4007; //階層料號
        senao_smt010.value = data[0].SENAO137D4009; //Model Name
        senao_smt011.value = data[0].SENAO137D4008; //品名規格
        senao_smt012.value = data[0].SENAO137D4011; //試作階段
        senao_smt013.value = data[0].SENAO137D4010; //試作數量
        senao_smt014.value = data[0].SENAO137D4003; //工單
        senao_smt015.value = data[0].SENAO137D4006; //階層料號
        senao_smt016.value = data[0].SENAO137D4015; //料號品名
        document.getElementById('senao_smt017').value = data[0].SENAO137D4012.replace(/\//g, '-'); //預計集結日
        senao_smt018.value = data[0].SENAO137D4013; //工單狀態
        senao_smt019.value = data[0].SENAO137D4014; //備註
        senao_smt021.value = ''; //交換密碼
        senao_smt023.value = data[0].SENAO137D4017; //SENAO137D4017 客戶別
        senao_smt024.value = data[0].SENAO137D4018; //SENAO137D4018 客戶名稱
        senao_smt025.value = data[0].SENAO137D4003_ID; //WIP_ID
        //新增上線
        if($('#smt001').text()=="-管理者模式" && currentColor =="#F5A9F2"){
          // 顯示確定安排上線功能區塊 
          $('#lbl_senao_smt020').closest('.row').removeClass('d-none');
        }
      }else {
        alert("查無此預約資料");
      }
    }   
  }else{//不可檢視
    var title = info.event ? info.event.title : ''; // 標題
    var date = info.event ? info.event.start : null; // 開始日期
    var yy = date ? date.getFullYear() : '';
    var mm = date ? String(date.getMonth() + 1).padStart(2, '0') : '';
    var dd = date ? String(date.getDate()).padStart(2, '0') : '';
    var dateStr = yy + '-' + mm + '-' + dd;

    alert("預約事件:" + title + "\n預約時間:" + dateStr);
  }
};
/*------------視窗初始化-------------*/
function intitModal(modal) {
  // 顯示「確定」按鈕
  modal.querySelectorAll('button#btnAdd').forEach(function(btn){
    btn.classList.remove('d-none');
  });
  // 隱藏「刪除」按鈕
  modal.querySelectorAll('button#btnDelete').forEach(function(btn){
    btn.classList.add('d-none');
  });
  // 解鎖所有欄位
  modal.querySelectorAll('input, textarea, select').forEach(function(el){
    el.removeAttribute('readonly');
    el.removeAttribute('disabled');
  });
  // 讓開窗按鈕能按
  modal.querySelectorAll('#senao_smt008_b1, #senao_smt014_b1').forEach(function(btn){
    btn.removeAttribute('disabled');
  });
  // 隱藏管理者功能區塊 
  $('#lbl_senao_smt020').closest('.row').addClass('d-none');
  // 隱藏交換密碼功能區塊 
  $('#lbl_senao_smt021').closest('.row').addClass('d-none');
  // 隱藏[預約]交換區塊 
  $('#lbl_senao_smt022').closest('.row').addClass('d-none');
}
//切換顯示已取消預約
function toggleCanceledEvents() {
  // 使用 FullCalendar v4 的 API
  if (calendar) {
    calendar.refetchEvents();
  } else {
    console.error('Calendar 實例不存在');
  }
}
function fillFieldsFromTestInfo() {
  var values = testInfo.value.split('@@');
  // 檢查是否有足夠的值
  if (values.length < 8) {
    alert("資料格式不正確");
    return;
  }
  $('#senao_smt023').val(values[6] || '');//SENAO137D4017
  $('#senao_smt024').val(values[7] || '');//SENAO137D4018
}
function fillFieldsFromWIP_Info(){
  var values = WIP_Info.value.split('@@');
  // 檢查是否有足夠的值
  if (values.length < 0) {
    alert("資料格式不正確");
    return;
  }
  // 預計集結日: 2022/11/01 轉成 2022-11-01
  var dateValue = (values[2] || '').replace(/\//g, '-');
  $('#senao_smt017').val(dateValue);
  $('#senao_smt025').val(values[4] || '');//WIP_ID
}
//欄位檢查
function chkvalue(){
  var errorMsg ="";
  if (senao_smt005.value =="" ){
    errorMsg +="上線日期不可為空!\n";
  }
  if (senao_smt004.value =="" ){
    errorMsg +="預約日期不可為空!\n";
  }
  if (senao_smt006.value =="" ){
    errorMsg +="預約人ID不可為空!\n";
  }
  if (senao_smt007.value =="" ){
    errorMsg +="預約人姓名不可為空!\n";
  }
  if (senao_smt008.value =="" ){
    errorMsg +="試作單號不可為空!\n";
  }
  if (senao_smt008.value =="" ){
    errorMsg +="試作單號不可為空!\n";
  }
  if (senao_smt014.value =="" ){
    errorMsg +="工單不可為空!\n";
  }
  if (senao_smt015.value =="" ){
    errorMsg +="階層料號不可為空!\n";
  }
  if (senao_smt009.value =="" ){
    errorMsg +="階層料號不可為空!\n";
  }
  if (senao_smt011.value =="" ){
    errorMsg +="品名規格不可為空!\n";
  }
  if (senao_smt013.value =="" ){
    errorMsg +="試作數量不可為空!\n";
  }
  if (senao_smt016.value =="" ){
    errorMsg +="料號品名不可為空!\n";
  }
  if (senao_smt017.value =="" ){
    errorMsg +="預計集結日不可為空!\n";
  }
  return errorMsg;
}
//顯示預約交換隱藏欄位
function showExchangePasswordInput() {
  document.querySelector('#senao_smt030').closest('.input-group').classList.remove('d-none');
}
//新增預約
function createEvent_onClick() {
  errorMsg =chkvalue();
  if (errorMsg == ""){
    var dateValue = document.getElementById('senao_smt004').value;
    var userIdValue = '(' + senao_smt023.value + ')[' + senao_smt012.value + "]" + senao_smt016.value + senao_smt008.value + "*" + senao_smt013.value + senao_smt007.value;
      
    var subtitleText = `(申請單 # ${userIdValue})`;//申請單單號先暫時帶入useid
    if (!calendar) {
      alert("Calendar 尚未初始化！");
      return;
    }
    if (!dateValue || !userIdValue) {
      alert("預約日期及ID不得為空!");
      return;
    }
    // 先判斷 InsertBooking 是否成功
    if (!InsertBooking()) {
      alert("新增預約失敗，請檢查資料或稍後再試！");
      // 不關閉小視窗
      return;
    }
    /*
    // 篩選該日期的事件
    var eventsOnDate = calendar.getEvents().filter(event => {
      var eventDate = event.start;
      var targetDate = new Date(dateValue);
      // 比對年月日
      return eventDate.getFullYear() === targetDate.getFullYear() && eventDate.getMonth() === targetDate.getMonth() && eventDate.getDate() === targetDate.getDate();
    });

    //新增預約
    //當天預約超過兩套顏色顯示為申請中
    if (eventsOnDate.length >= '2') {
      calendar.addEvent({
        title: userIdValue,
        start: dateValue,
        end: dateValue,
        extendedProps: {
          subtitle: subtitleText   // 額外的資料放這裡
        },
        backgroundColor: "#F5A9F2",
        borderColor: "#F5A9F2",
        textColor: "#000000"
      });
    } else {
      calendar.addEvent({
        title: userIdValue,
        start: dateValue,
        end: dateValue,
        backgroundColor: "#CCFFFF",
        borderColor: "#CCFFFF",
        textColor: "#000000"
      });
    }*/
    
    document.getElementById('BookingModal').style.display = 'none';
    alert("已新增預約：" + userIdValue + " 日期：" + dateValue);
    toggleCanceledEvents(); //重新整理事件
	}else{
		alert(errorMsg);
	}
}
//刪除預約
function deleteEvent_onClick() {
  if (confirm("是否刪除?")) {
    let indexNum = document.getElementById('indexNum').value;
    let senao_smt005 = document.getElementById('senao_smt005').value;
    let status = "-1"; //刪除
    if (updateStatus(indexNum, senao_smt005, status)) {
      alert("刪除成功!!!");
      document.getElementById('BookingModal').style.display = 'none';
      toggleCanceledEvents(); //重新整理事件
      return;
    } else{
      alert("刪除失敗!!!");
    }
  } else {
    // 使用者按「否」就直接 return，不做後續動作
    return;
  }
}
//確定安排上線按鈕
function CheckOKEvent_onClick(){
  if (confirm("請確認是否安排上線?")) {
    let indexNum = document.getElementById('indexNum').value;
    let senao_smt005 = document.getElementById('senao_smt005').value;
    let status = "2"; //已安排上線
    if (updateStatus(indexNum, senao_smt005, status)) {
      alert("新增上線成功!!!");
      document.getElementById('BookingModal').style.display = 'none';
      toggleCanceledEvents(); //重新整理事件
      return;
    } else{
      alert("新增上線失敗!!!");
    }
  } else {
    // 使用者按「否」就直接 return，不做後續動作
    return;
  }
}
//交換密碼 設定按鈕
function senao_smt021_b1_onClick(){
  let senao_smt005 = document.getElementById('senao_smt005').value;
  if(senao_smt021.value ==""){
    alert("交換密碼不可為空!");
    return;
  }
  var sqlid = "BPM_SMT_ChangePasswordBooking";//尚未設定api
	var data = [];
  let [yy, mm, dd] = senao_smt005.split('-');
  data = ajaxGetData(invokeURL + sqlid, {
    YY: yy,      // 上線年
    MM: mm,      // 上線月
    DD: dd,      // 上線日
    INDEXNUM: indexNum.value,//預約序號
    EXCHANGEPASSWORD: senao_smt021.value //交換密碼
  });
  if (data[0].result == 'ok') {
		alert("密碼設定成功");
    document.getElementById('BookingModal').style.display = 'none';//關閉視窗
    toggleCanceledEvents(); //重新整理事件
	}else{
    alert("密碼設定失敗" + data[0].result);
  }
}
//交換預約按鈕
function btn_ExChange_onclick(){
  const bookingPWD = $('#senao_smt030').val(); // 交換密碼輸入框
  
  if (bookingPWD === "") {
    alert('請輸入對方的"交換密碼"!!!');
    return;
  }
  //要交換的預約日期
  const exchangeInfo = $('#hdn_senao_smt022').val().split('@@');
  const exYY = exchangeInfo[0];
  const exMM = String(exchangeInfo[1]).padStart(2, '0');
  const exDD = String(exchangeInfo[2]).padStart(2, '0');
  const exIndexNum = exchangeInfo[3];
  // 我的上線日期
  let [myYY, myMM, myDD] = senao_smt005.value.split('-');
  const myIndexNum = $('#indexNum').val();              // 我的預約序號
  // Step1 驗證密碼是否正確
  var sqlid = "BPM_SMT_ValidateExchangePassword";
	var data = [];
  data = ajaxGetData(invokeURL + sqlid, {
    EX_YY: exYY,      // 上線年
    EX_MM: exMM,      // 上線月
    EX_DD: exDD,      // 上線日
    EX_INDEXNUM: exIndexNum,//預約序號
    BOOKING_PWD: bookingPWD, //交換密碼
    MYBOOKING:myYY + '-' + myMM + '-' + myDD + '-' + myIndexNum
  });
  if (data[0].result === undefined) {
    if (data.length > 0) {
      // 檢查密碼
      if (data[0].PASSWORD_VALID === 'N') {
        alert("密碼錯誤!!!");
        return;
      }
      // 密碼正確,執行交換
      if (confirm("確定要交換預約嗎?")) {
        executeExchange(myYY, myMM, myDD, myIndexNum, exYY, exMM, exDD, exIndexNum);
      }
    } else {
      alert("查無可交換之預約資料..");
    }
  } else {
    alert("查詢失敗:" + result[0].result);
  }
}
$(document).on('click', '#senao_smt008_b1', function () { //試作單號開窗
  if($('#smt001').text()=="-生管者模式" || $('#smt001').text()=="-管理者模式"){
    // sessionStorage 存入數據
    let tTitle = "試作單號";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('senao_smt008','senao_smt009','senao_smt011','senao_smt010','senao_smt012','senao_smt013','testInfo');//回傳元件參數
    let tReturnFunction = new Array("fillFieldsFromTestInfo()"); //回傳函數
    let tColAPi = "BPM_SMT_getPrototypeOrder_1";
    let tAPI = invokeURL + 'BPM_SMT_getPrototypeOrder_1';
    let tParameter = { bookingDate: senao_smt004.value.replace(/-/g, "/") ,SENAO137010: 'ALL',SENAO137004: 'ALL',SENAO137005: 'ALL',SENAO137009: 'ALL',SENAO137011: 'ALL',SENAO137013: 'ALL'};
    let tQBEField = {SENAO137010: 'SENAO137010',SENAO137004: 'SENAO137004',SENAO137005: 'SENAO137005',SENAO137009: 'SENAO137009',SENAO137011: 'SENAO137011',SENAO137013: 'SENAO137013' }; //查詢欄位 {參數欄位:table欄位};	
    var pWidth = 1000;
    var pHeight = 430;
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else{
    // sessionStorage 存入數據
    let tTitle = "試作單號";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('senao_smt008','senao_smt009','senao_smt011','senao_smt010','senao_smt012','senao_smt013','testInfo');//回傳元件參數
    let tReturnFunction = new Array("fillFieldsFromTestInfo()"); //回傳函數
    let tColAPi = "BPM_SMT_getPrototypeOrder_2";
    let tAPI = invokeURL + 'BPM_SMT_getPrototypeOrder_2';
    let tParameter = {bookingDate: senao_smt004 .value.replace(/-/g, "/") ,SENAO137010: 'ALL',SENAO137004: 'ALL',SENAO137005: 'ALL',SENAO137009: 'ALL',SENAO137011: 'ALL',SENAO137013: 'ALL' };
    let tQBEField = {SENAO137010: 'SENAO137010',SENAO137004: 'SENAO137004',SENAO137005: 'SENAO137005',SENAO137009: 'SENAO137009',SENAO137011: 'SENAO137011',SENAO137013: 'SENAO137013'}; //查詢欄位 {參數欄位:table欄位};
    var pWidth = 1000;
    var pHeight = 430;	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$(document).on('click', '#senao_smt014_b1', function () { //試作工單開窗
  if($('#smt001').text()=="-生管者模式" || $('#smt001').text()=="-管理者模式"){
    // sessionStorage 存入數據
    let tTitle = "工單";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array('senao_smt014','senao_smt015','senao_smt016','','','','','','senao_smt018','','','','WIP_Info');//回傳元件參數
    let tReturnFunction = new Array("fillFieldsFromWIP_Info()"); //回傳函數
    let tColAPi = "BPM_SMT_getsenao_smt014_1";
    let tAPI = invokeURL + 'BPM_SMT_getsenao_smt014_1';
    let tParameter = { TSheetNo:senao_smt008.value, bookingDate: senao_smt004.value.replace(/-/g, "/"),SENAO137D2005:null, SENAO137D2012:null,SENAO137D2013:null,SENAO137D2007:null,SENAO137D2015:null  };
    let tQBEField = {SENAO137D2005:'SENAO137D2005', SENAO137D2012:'SENAO137D2012',SENAO137D2013:'SENAO137D2013',SENAO137D2007:'SENAO137D2007',SENAO137D2015:'SENAO137D2015'}; //查詢欄位 {參數欄位:table欄位};	
    var pWidth = 1000;
    var pHeight = 430;
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }else{
    // sessionStorage 存入數據
    let tTitle = "工單";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin 
    let tReturnId = new Array('senao_smt014','senao_smt015','senao_smt016','','','','','','senao_smt018','','','','WIP_Info');//回傳元件參數 工單 階層料號 料號品名 預計集結日 工單狀態
    let tReturnFunction = new Array("fillFieldsFromWIP_Info()"); //回傳函數
    let tColAPi = "BPM_SMT_getsenao_smt014_2";
    let tAPI = invokeURL + 'BPM_SMT_getsenao_smt014_2';
    let tParameter = {TSheetNo:senao_smt008.value, bookingDate: senao_smt004.value.replace(/-/g, "/"),SENAO137D2005:'ALL', SENAO137D2012:'ALL',SENAO137D2013:'ALL',SENAO137D2007:'ALL',SENAO137D2015:'ALL' };
    let tQBEField = {SENAO137D2005:'SENAO137D2005', SENAO137D2012:'SENAO137D2012',SENAO137D2013:'SENAO137D2013',SENAO137D2007:'SENAO137D2007',SENAO137D2015:'SENAO137D2015'}; //查詢欄位 {參數欄位:table欄位};
    var pWidth = 1000;
    var pHeight = 430;	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  }
});
$(document).on('click', '#senao_smt022_b1', function () { //[預約]交換 按鈕
  // 交換條件判斷
  // 1.對方有設密碼
  // 2.對方的集結日比自己的預約日小
  // 3.自己的集結日比對方的預約日小
  // sessionStorage 存入數據
  let tTitle = "預約交換";  //子視窗抬頭
  let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
  let tReturnId = new Array('','senao_smt022','hdn_senao_smt022');//回傳元件參數
  let tReturnFunction = new Array("showExchangePasswordInput()"); //回傳函數
  let tColAPi = "BPM_SMT_senao_smt022_b1";
  let tAPI = invokeURL + 'BPM_SMT_senao_smt022_b1';
  let tParameter = { myBookingDate : senao_smt004.value.replace(/-/g, "/") , myPreparedDate : senao_smt017.value.replace(/-/g, "/")};
  let tQBEField = { }; //查詢欄位 {參數欄位:table欄位};	
  var pWidth = 800;
  var pHeight = 430;
  CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
});
//INSERT預約API
function InsertBooking(){
	var sqlid = "BPM_SMT_InsertBooking";//尚未設定api
	var data = [];
  let [yy, mm, dd] = senao_smt005.value.split('-');
  let senao_smt017 = $('#senao_smt017').val().replace(/-/g, "/");
  let senao_smt004 = $('#senao_smt004').val().replace(/-/g, "/");
  // 計算當天已存在的事件數量
  /*let dateValue = senao_smt005.value; // yyyy-MM-dd
  let eventsOnDate = calendar.getEvents().filter(event => {
    let eventDate = event.start;
    let targetDate = new Date(dateValue);
    return eventDate.getFullYear() === targetDate.getFullYear() &&
      eventDate.getMonth() === targetDate.getMonth() &&
      eventDate.getDate() === targetDate.getDate();
  });*/
  let eventsOnDate = getEventsCountByDate(senao_smt005.value); //取得當天預約筆數
  let indexNum = getEventsIndex(senao_smt005.value) + 1; // 新增INDEX
  if(eventsOnDate < 2){//當日預約低於2套時可直接預約不需申請
    data = ajaxGetData(invokeURL + sqlid, {
      YY: yy,      // 上線年
      MM: mm,      // 上線月
      DD: dd,      // 上線日
      INDEXNUM: indexNum,//預約序號
      SENAO137D4001 : senao_smt004,//預約時間
      SENAO137D4002 : senao_smt008.value,//試作單號
      SENAO137D4003 : senao_smt014.value,//工單
      SENAO137D4003_ID : senao_smt025.value,//WIP_ID 由工單去查 Oracle WIP 表取得
      SENAO137D4004 : senao_smt006.value,//預約人ID
      SENAO137D4005 : senao_smt007.value,//姓名
      SENAO137D4006 : senao_smt015.value,//階層料號(工單)
      SENAO137D4007 : senao_smt009.value,//階層料號(試作單號)
      SENAO137D4008 : senao_smt011.value,//品名規格
      SENAO137D4009 : senao_smt010.value,//Model Name
      SENAO137D4010 : senao_smt013.value,//試作數量
      SENAO137D4011 : senao_smt012.value,//試作階段
      SENAO137D4012 : senao_smt017,//預計集結日
      SENAO137D4013 : senao_smt018.value,//工作狀態
      SENAO137D4014 : senao_smt019.value,//備註 畫面中的備註
      SENAO137D4015 : senao_smt016.value,//料號品名
      SENAO137D4016 : "",//PCB到廠日
      SENAO137D4801 : "",//增加預約單
      SENAO137D4802 : "1",//狀態  -1刪除 / 0申請中 / 1已預約 / 2已排上線
      SENAO137D4803 : "",//線別 來自 CreateNewSenao159 / 排程人員輸入
      //SENAO137D4804 暫時無用
      SENAO137D4805 : senao_smt021.value,//交換密碼 senao_smt021
      //SENAO137D4901 資料建立(新增)的系統時間
      SENAO137D4017 : senao_smt023.value,//客戶代號
      SENAO137D4018 : senao_smt024.value//客戶名稱
    });
  }else{
    data = ajaxGetData(invokeURL + sqlid, {
      YY: yy,      // 上線年
      MM: mm,      // 上線月
      DD: dd,      // 上線日
      INDEXNUM: indexNum,//預約序號
      SENAO137D4001 : senao_smt004,//預約時間
      SENAO137D4002 : senao_smt008.value,//試作單號
      SENAO137D4003 : senao_smt014.value,//工單
      SENAO137D4003_ID : "",//WIP_ID 由工單去查 Oracle WIP 表取得
      SENAO137D4004 : senao_smt006.value,//預約人ID
      SENAO137D4005 : senao_smt007.value,//姓名
      SENAO137D4006 : senao_smt015.value,//階層料號(工單)
      SENAO137D4007 : senao_smt009.value,//階層料號(試作單號)
      SENAO137D4008 : senao_smt011.value,//品名規格
      SENAO137D4009 : senao_smt010.value,//Model Name
      SENAO137D4010 : senao_smt013.value,//試作數量
      SENAO137D4011 : senao_smt012.value,//試作階段
      SENAO137D4012 : senao_smt017,//預計集結日
      SENAO137D4013 : senao_smt018.value,//工作狀態
      SENAO137D4014 : senao_smt019.value,//備註 畫面中的備註
      SENAO137D4015 : senao_smt016.value,//料號品名
      SENAO137D4016 : "",//PCB到廠日
      SENAO137D4801 : "",//增加預約單
      SENAO137D4802 : "0",//狀態  -1刪除 / 0申請中 / 1已預約 / 2已排上線
      SENAO137D4803 : "",//線別 來自 CreateNewSenao159 / 排程人員輸入
      //SENAO137D4804 暫時無用
      SENAO137D4805 : senao_smt021.value,//交換密碼 senao_smt021
      //SENAO137D4901 資料建立(新增)的系統時間
      SENAO137D4017 : senao_smt023.value,//客戶代號
      SENAO137D4018 : senao_smt024.value//客戶名稱
    });
  }
	if (data[0].result == 'ok') {
    return true;
  }else {
    return false;
  }
}
//更新預約狀態API
function updateStatus(indexNum, senao_smt005, status){
  //更新狀態 SENAO137D4802
  var sqlid = "BPM_SMT_UpdateBooking";//尚未設定api
	var data = [];
  let [yy, mm, dd] = senao_smt005.split('-');
  data = ajaxGetData(invokeURL + sqlid, {
    YY: yy,      // 上線年
    MM: mm,      // 上線月
    DD: dd,      // 上線日
    INDEXNUM: indexNum,//預約序號
    STATUS: status//狀態
  });
  if (data[0].result == 'ok') {
    return true;
	}
  else {
    return false;
  }
}
//取得當天預約筆數API
function getEventsCountByDate(dateStr) {
  var sqlid = "BPM_SMT_getEventsCountByDate";
	var data = [];
  let [yy, mm, dd] = dateStr.split('-');
  data = ajaxGetData(invokeURL + sqlid, {
    YY: yy,      // 上線年
    MM: mm,      // 上線月
    DD: dd       // 上線日
  });
  if(data[0].result == undefined){
    return data[0].COUNT;
  }
}
//取得INDEX API
function getEventsIndex(dateStr) {
  var sqlid = "BPM_SMT_getEventsIndex";
	var data = [];
  let [yy, mm, dd] = dateStr.split('-');
  data = ajaxGetData(invokeURL + sqlid, {
    YY: yy,      // 上線年
    MM: mm,      // 上線月
    DD: dd       // 上線日
  });
  if(data[0].result == undefined){
    return data[0].COUNT;
  }
}
//交換預約API
function executeExchange(myYY, myMM, myDD, myIndexNum, exYY, exMM, exDD, exIndexNum) {
  // 計算暫時的序號 (99 - 原序號)
  const tempIndexNum = 99 - parseInt(exIndexNum);
  
  // 準備交換的註解
  const comment1 = "[交換]原為 " + exYY + "/" + exMM + "/" + exDD + "-" + exIndexNum + "之預約";
  const comment2 = "[交換]原為 " + myYY + "/" + myMM + "/" + myDD + "-" + myIndexNum + "之預約";
  // 執行交換 API
  const sqlid = "BPM_SMT_ExchangeBooking";
  let result = ajaxGetData(invokeURL + sqlid, {
    // 我的預約資訊
    MY_YY: myYY,
    MY_MM: myMM,
    MY_DD: myDD,
    MY_INDEXNUM: myIndexNum,
    TEMP_INDEXNUM: tempIndexNum,
    
    // 對方的預約資訊
    EX_YY: exYY,
    EX_MM: exMM,
    EX_DD: exDD,
    EX_INDEXNUM: exIndexNum,
    
    // 註解
    COMMENT1: comment1,
    COMMENT2: comment2
  });
  
  if (result.length > 0 && result[0].result == 'ok') {
    alert("交換完成.");
    // 重新載入頁面或關閉視窗
    window.location.reload();
    // 或 document.getElementById('BookingModal').style.display = 'none';
  } else {
    alert("交換失敗:" + result[0].result);
  }
}
/////////////function end///////////////////

