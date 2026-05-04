/*=================================Ajax Start=============================================*/
function ajaxGetData(urlStr, ParaMeter) {
    let data = [];
    $.ajax({ //ajax start
        type: 'POST',
        url: urlStr,
        async: false,
        //data: '',
        data: JSON.stringify(ParaMeter),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        beforeSend: function(xhr) {
            console.log("beforeSend called");
        },
        error: function(oResult, textStatus, errorThrown) {
            if (oResult.status === 401) {
                console.log("statusCode 401 called");
            } else if (oResult.status === 449) {
                console.log("statusCode 449 called");
            } else {
                console.log("error called");
            }
        },
        success: function(JSONdata) { //success start	
                data = JSONdata;

            } //success end


    }); //ajax end
    return data;
}
/*=================================Ajax End=============================================*/


String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

function getcooky(name) { //取得Cookie
    var x = document.cookie;
    var c_array = x.split(";");
    var retVal = "";
    for (var i = 0; i < c_array.length; i++) {
        if (c_array[i].trim().indexOf(name + "=") == 0) {
            retVal = c_array[i].substring(c_array[i].indexOf("=") + 1);
            break;
        }
    }
    return retVal;
}

function checkedPermisson() { //檢查登入帳號
    var bllogin = false;
    var autthToken = getcooky("token");
    if (autthToken != "") {
        $.ajaxSetup({
            headers: {
                'Authorization': 'Bearer ' + autthToken
            }
        });
        bllogin = true;
    }
    return bllogin;
}

function getUrlVars() { //取得URL參數
    var vars = {};
    var parts = document.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });

    return vars;
}

function getParameters(para) { //取得參數
    //example para=api=CYCLOPS_4_4_SMTERPDRWODetial&WORKDATE=20191030
    var vars = {};
    para.toString().replace(/([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function loginCheck() { //登入判斷處理
    if (!checkedPermisson()) { //檢查是否有登入                 
        let cburl = "login.html?cb=" + document.location.href.replace(document.location.origin + "/" +
            siteName +
            "/", "");

        document.location.href = cburl;
    }
}