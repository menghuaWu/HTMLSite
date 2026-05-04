/*-- jQuery --
web site:https://jquery.com/
*/
//document.write("<script type='text/javascript' src='/GBLWeb/API/jquery-3.4.1/js/jquery-3.4.1.min.js'></script>");
document.write("<script type='text/javascript' src='/GBLWeb/API/jquery-3.7.1.min.js'></script>");

/*-- bootstrap 
web site:https://getbootstrap.com/
中文:https://bootstrap.hexschool.com/
     https://www.bootcss.com/
--*/
//document.write("<script type='text/javascript' src='/GBLWeb/API/bootstrap-4.3.1/js/bootstrap.bundle.min.js'></script>");
//document.write("<link href='/GBLWeb/API/bootstrap-4.3.1/css/bootstrap.min.css' rel='stylesheet' type='text/css' />");
document.write("<script type='text/javascript' src='/GBLWeb/API/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js'></script>");
document.write("<link href='/GBLWeb/API/bootstrap-4.6.2-dist/css/bootstrap.min.css' rel='stylesheet' type='text/css' />");
/*  bootstrap 4 use this icon
    web site:https://fontawesome.com/
*/
document.write("<link href='/GBLWeb/API/fontawesome-free-5.11.2/css/all.min.css' rel='stylesheet' type='text/css' />");
//document.write("<link href='/GBLWeb/Module/css/global.css' rel='stylesheet' type='text/css' />");
/*-- Tab Class --*/
//document.write("<link href='/GBLWeb/Module/css/projectTabs.css' rel='stylesheet' type='text/css' />");

/*=============================================Globa Variable=================================================*/
var siteInvoke = {
    "BPMWeb": "invoke"/*,
    "BPMWeb": "invoke2",
    "BPMWeb": "invoke3",
    "BPMWeb": "invoke4",
    "BPMWeb": "invoke5",
	"BPMWeb": "invoke6",
    "BPMWeb": "invoke7",
    "BPMWeb": "invoke8",
    "BPMWeb": "invoke9"
	*/
}
var browseURL = document.location.href;
var pathURL = browseURL.replace(document.location.origin, "").substring(1);
var siteName = pathURL.substring(0, pathURL.indexOf("/"));
var baseURL = document.location.origin + "/MES/";
console.log(siteName);

var invokeURL = baseURL + siteInvoke[siteName] + "?sCode=";
/*if (siteName == "SFCWeb") {
    //  var invokeSFISURL = "https://apiportal.senao.com/MES/invoke6?sCode=";
    invokeURL = baseURL + "invoke6?sCode=";
}
*/
/*=================================Ajax Start=============================================*/
function ajaxGetData(urlStr, ParaMeter) {
    // console.log(ParaMeter);

    let data = [];
    let err = {};
    $.ajax({ //ajax start
        type: 'POST',
        url: urlStr,
        async: false,
        //data: '',
        data: JSON.stringify(ParaMeter),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        beforeSend: function (xhr) {
            //console.log("beforeSend called");
        },
        error: function (oResult, textStatus, errorThrown) {
            let result = { result: 'NG', ErrorCode: oResult.status, MSG: '' };

            if (oResult.status === 401) {
                console.log("statusCode 401 called");

                //data = jQuery.parseJSON(oResult.statusText);
                //result.MSG="statusCode "+oResult.status+" ErrMSG is "+oResult.statusText;
                //data.push(result);
                let cburl = "/GBLWeb/login.html?cb=" + "/" + siteName + "/" + document.location.href.replace(document.location.origin + "/" +
                    siteName +
                    "/", "");
                console.log('ajaxGetData:',cburl);
                document.location.href = cburl;
            } else if (oResult.status === 449) {
                console.log("statusCode 449 called");
                //data = jQuery.parseJSON(oResult.statusText);
                //result.MSG="statusCode "+oResult.status+" ErrMSG is "+oResult.statusText;
                //data.push(result);
            } else if (oResult.status === 500) {
                console.log("statusCode 500 called");
                //data = jQuery.parseJSON(oResult.statusText);
                //result.MSG="statusCode "+oResult.status+" ErrMSG is "+oResult.statusText;
                //data.push(result);
            } /*else if (oResult.status != 200) {
				console.log("statusCode "+oResult.status+" called");
                data = jQuery.parseJSON(oResult.responseText);
			}*/
            else {

                //data = jQuery.parseJSON(oResult.statusText);
                console.log("statusCode " + oResult.status + " called");
                //result.MSG="statusCode "+oResult.status+" ErrMSG is "+oResult.statusText;
                //data.push(result);
                console.log(oResult);
            }
            result.MSG = oResult.statusText;
            //data.push(result;);
            data = result;


        },
        success: function (JSONdata) { //success start	
            // console.log(JSONdata);
            data = JSONdata;

        } //success end


    }); //ajax end
    //console.log('data');
    //console.log(data);
    return data;
}

/*=================================Ajax End=============================================*/


String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

function listCookies() { //列出Cookie
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i - 1] + "\n";
    }
    return aString;
}

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
        console.log('Bearer ' + autthToken);
        console.log(invokeURL + "ChkHaveSQLVar");
        bllogin = true;

        $.ajax({ //ajax start
            type: 'POST',
            url: invokeURL + "ChkHaveSQLVar",
            async: false,
            //data: '',
            data: JSON.stringify({}),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr) {
                //console.log("beforeSend called");
            },
            error: function (oResult, textStatus, errorThrown) {
                let result = { result: 'NG', ErrorCode: oResult.status, MSG: '' };
                result.MSG = oResult.statusText;
                data = result;
                if (oResult.status === 401) {
                    console.log("statusCode 401 called");
                    bllogin = false;
                } else if (oResult.status === 403) {
                    console.log("statusCode 403 called");
                    bllogin = false;
                } else if (oResult.status === 449) {
                    console.log("statusCode 449 called");
                    bllogin = false;
                } else if (oResult.status != 200) {
                    console.log(jQuery.parseJSON(oResult.responseText));
                    bllogin = false;
                } else if (oResult.status == 200) { //有權限登入成功
                    bllogin = true;

                } else {
                    console.log(oResult);
                    bllogin = false;
                }


            },
            success: function (JSONdata) { //success start	
                console.log(JSONdata);
                bllogin = true;


            } //success end


        }); //ajax end

    }
    //bllogin = true;
    return bllogin;
}


function getUrlVars() { //取得URL參數
    var vars = {};
    var parts = document.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });

    return vars;
}

function getencodeUrlVars() { //取得編碼URL參數
    var vars = {};
    var parts = decodeURI(document.location.href).replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });

    return vars;
}

function getParameters(para) { //取得參數
    //example para=api=CYCLOPS_4_4_SMTERPDRWODetial&WORKDATE=20191030
    var vars = {};
    //para.toString().replace(/([^=&]+)=([^&]*)/gi, function(m, key, value) {
    para.toString().replace(/([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParameters(para) { //取得參數
    //example para=api=CYCLOPS_4_4_SMTERPDRWODetial&WORKDATE=20191030
    var vars = {};
    //para.toString().replace(/([^=&]+)=([^&]*)/gi, function(m, key, value) {
    para.toString().replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function setcooky(name, val, expire_days) { //設定Cooky
    //var expire_days = 1; // 過期日期(天)
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + val + "; " + expires;
}
function setpathcooky(name, val, expire_days, path) { //設定Cooky
    let callback = document.location.href.substring(document.location.href.indexOf("?cb=") + 4);
    //var expire_days = 1; // 過期日期(天)
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    var cpath = "path=/" + path;
    // document.cookie = name + "=" + val + "; " + expires;
    document.cookie = name + "=" + val + "; " + expires + ";" + cpath;


}
function loginCheck() { //登入判斷處理

    doGetAuth();
    if (!checkedPermisson()) { //檢查是否有登入  
        let cburl = "/GBLWeb/login.html?cb=" + "/" + siteName + "/" + document.location.href.replace(document.location.origin + "/" +
            siteName +
            "/", "");
        /* let cburl = "/" + siteName + "/login.html?cb=" + document.location.href.replace(document.location.origin + "/" +
             siteName +
             "/", "");
             */

        console.log(cburl)
        document.location.href = cburl;
    }
}
function doGetAuth() { //由GET取得ID+PW登入
    var username = getUrlVars("username")["username"];
    var password = getUrlVars("password")["password"];
    var token = getUrlVars("token")["token"];
    console.log("username", username);
    console.log("password", password);
    console.log("token", token);
    if (token != "" &&
        token != undefined) {
        setcooky("token", token, 1);
        setcooky("username", username, 1);
        return true;
    }
    if (
        username != "" &&
        username != undefined &&
        password != "" &&
        password != undefined
    ) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: baseURL + "auth",
            dataType: "json",
            data: JSON.stringify({
                username: getUrlVars("username")["username"],
                password: getUrlVars("password")["password"],
            }),
            async: false,
            success: function (response) {
                if (response.token !== undefined) {
                    if (response.token != "") {
                        autthToken = response.token;
                        bllogin = true;
                        setcooky("token", autthToken, 1);
                        return true;
                    }
                }
            },
            error: function (response) {

                alert(
                    "Message:" +
                    response.responseJSON.status +
                    " - " +
                    response.responseJSON.message
                );
            },
        });
    }

}
function logout() { //登出

    setcooky('token', '', -1);
    location.href = 'index.html';
}

function createTab(pTab, pDiv, items) { //Create Tabes
    //set Tabs
    let i = 1;
    let tabfragment = document.createDocumentFragment();
    let tabPanelfragment = document.createDocumentFragment();
    console.log(items);
    for (let i = 0; i < items.length; i++) {

        let a = document.createElement("a");

        a.setAttribute('data-toggle', 'tab');
        a.setAttribute('aria-controls', 'nav-' + items[i]);
        a.setAttribute('aria-selected', 'true');
        a.setAttribute('role', 'tab');
        a.innerText = items[i];
        a.id = 'nav-' + items[i] + '-tab';
        a.href = '#nav-' + items[i];

        let div = document.createElement("div");

        div.id = 'nav-' + items[i];
        div.setAttribute('role', 'tabpanel');
        div.setAttribute('aria-labelledby', 'nav-' + items[i] + '-tab');
        if (i == 1) {
            a.className = "nav-item nav-link active";
            div.className = "tab-pane fade show active";
            //tabAction = item;
        } else {
            a.className = "nav-item nav-link  ";
            div.className = "tab-pane fade ";
        }
        let divsub = document.createElement("div");
        divsub.id = 'calendar' + i;
        div.appendChild(divsub);
        tabfragment.appendChild(a);
        tabPanelfragment.appendChild(div);


    };
    $('#' + pTab).append(tabfragment);
    $('#' + pDiv).append(tabPanelfragment);
}

/**
 *檢查是否為日期格式
 * 格式:YYYYMMMDD || YYYY/MM/DD || YYYY-MM-DD
 * @param {*} date 來源字串
 * @returns true || false
 */
function isValidDate(date) {
    let regDate =
        /^(((19|([2-9][0-9]))\d{2})(\/?)(((0[13578]|1[02])(\/?)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(\/?)(0[1-9]|[12][0-9]|30))|(02(\/?)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(\/?)02(\/?)29)|(((((19|20)\d{2})-(0?(1|[3-9])|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29)))$/;
    return regDate.test(date);
    //return date instanceof Date && !isNaN(date.getTime())
}

function checkStatus(id, status) {
    if (status) {
        $('#' + id).removeClass('is-invalid');
        $('#' + id).addClass('is-valid');
    } else {
        $('#' + id).removeClass('is-valid');
        $('#' + id).addClass('is-invalid');
    }

}

function sleep(time) {
    /* 用法
sleep(500).then(() => {
    // 这里写sleep之后需要去做的事情
})*/
    return new Promise((resolve) => setTimeout(resolve, time));
}

function clearJsonRepeat(items, type) { //去除json陣列重複值

    let listArray = [];
    if (items.length == 1) {
        listArray = items;
    } else {
        let origin = items.map(e => {
            return e[type];
        });

        let result = items.filter(function (element, index, arr) {
            return origin.indexOf(element[type]) === index;
        });
        listArray = result;


    }
    return listArray;
}
function checkRate(input) { //檢查是否為數字
    let re = /^[0-9]*[1-9][0-9]*$/; //判斷字串是否為數字//判斷正整數/[1−9] [0−9]∗]∗/ 
    return re.test(input);
}
// check devices
function browserRedirect() { //檢查裝置
    var deviceType;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        deviceType = 'phone';
    } else {
        deviceType = 'pc';
    }
    return deviceType;
}
function PrefixInteger(num, length) { //數字補零
    return (Array(length).join('0') + num).slice(-length);
}
/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
        noop = function () { },
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function (sdp) {
        sdp.sdp.split('\n').forEach(function (line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });

        pc.setLocalDescription(sdp, noop, noop);
    }, noop);

    //listen for candidate events
    pc.onicecandidate = function (ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };

}
function upperJSONKey(jsonObj) { //JSON KEY轉大寫
    for (let key in jsonObj) {
        jsonObj["\"" + key.toUpperCase() + "\""] = jsonObj[key];
        delete (jsonObj[key]);
    }
    return jsonObj;
} 