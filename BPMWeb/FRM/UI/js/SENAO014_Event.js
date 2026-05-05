$('#senao_nm003_b1').on('click', function () { //申請人開窗

    // sessionStorage 存入數據
    let tTitle = "申請人";  //子視窗抬頭
    let tFileName = "SingleOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnId = new Array("senao_nm003", "senao_nm003_t1", "senao_nm035", "senao_nm035_t1");//回傳元件參數
    let tReturnFunction = new Array("senao_nm003_onchange()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: form_ou.value, mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
    CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight);
  });

function senao_nm009_onchange(){

}

function senao_nm003_onchange() {

}