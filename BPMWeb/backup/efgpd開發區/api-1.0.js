/*-- jQuery --*/
//document.write("<script type='text/javascript' src='/GBLWeb/API/jquery-3.7.1.min.js'></script>");
/*-- 公用 --*/
//var apiauth='https://apiportal02.senao.com/MES/auth'; //測試
//var apiurl='https://apiportal02.senao.com/MES/invoke5?sCode='; //測試
//var apiauth='https://apiportal.senao.com/MES/auth'; //正式
//var apiurl='https://apiportal.senao.com/MES/invoke8?sCode='; //正式
var baseapiurl="https://flowportal-d.senao.com";
var apiauth=baseapiurl+'/MES/auth'; 
var apiurl=baseapiurl+'/MES/invoke?sCode='; //正式
/*=================================COOKIE Start=============================================*/
function setcooky(name, val, expire_days) { //設定Cooky
    //var expire_days = 1; // 過期日期(天)
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + val + "; " + expires;
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
function getUrlVars() { //取得URL參數
    var vars = {};
    var parts = document.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });

    return vars;
}
/*=================================COOKIE END=============================================*/

/*=================================Ajax Start=============================================*/
function ajaxGetData(urlStr, ParaMeter) {
    //console.log(ParaMeter);
	//console.log(urlStr);
    let data = [];
	let ajax={result:'NG',status:'200',MSG:''};
	//console.log("開始 AJAX 請求");
    jQuery.ajax({ //ajax start
        type: 'POST',
        url: urlStr,
        async: false,
        //data: '',
        data: JSON.stringify(ParaMeter),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        beforeSend: function (xhr) {
			//xhr.withCredentials = false;
            //console.log("beforeSend called");
        },
        error: function (oResult, textStatus, errorThrown) {
			let result={ajaxresult:'NG',ajaxstatusCode:oResult.status,MSG:''};
			ajax.result='NG';
			ajax.status=oResult.status;
			ajax.MSG=oResult.statusText;
			//console.log("statusCode "+oResult.status+" called");
            //console.log(oResult);
        },
        success: function (JSONdata) { //success start	
            //console.log("AJAX 請求成功");
			//console.log(JSONdata);
			if(jQuery.isArray(JSONdata)){ //是陣列
				if(JSONdata[0].result==undefined){
					data = JSONdata;
					ajax={result:'OK',status:'200',MSG:""};
				}else {
					if(JSONdata[0].result.toUpperCase()!='OK' && JSONdata[0].result.toUpperCase()!='NG'){ //API ERROR
						data = JSONdata;
						ajax={result:'NG',status:'200',MSG:JSONdata[0].result};
					}else{
						data = JSONdata;
						ajax={result:'NG',status:'200',MSG:""};
					}
				}
			}else{//不是陣列
				if(JSONdata.result==undefined){
					data = JSONdata;
					ajax={result:'OK',status:'200',MSG:""};
				}else {
					if(JSONdata.result.toUpperCase()!='OK' && JSONdata.result.toUpperCase()!='NG'){ //API ERROR
						data = JSONdata;
						ajax={result:'NG',status:'200',MSG:JSONdata.result};
					}else{
						data = JSONdata;
						ajax={result:'NG',status:'200',MSG:""};
					}
				}
			}
        } //success end
    }); //ajax end
	
	//console.log("AJAX 請求結束");
    return {result:data,status:ajax};
}
/*=================================Ajax END=============================================*/

/*=================================API START=============================================*/
function checkedPermisson() { //檢查登入帳號
    var bllogin = false;
	var token = getUrlVars("token")["token"];
	if(token != "" &&
	  token != undefined){
		setcooky("token", token, 1);
	}
	var autthToken = getcooky("token");
    if (autthToken != "") {
        jQuery.ajaxSetup({
            headers: {
                'Authorization': 'Bearer ' + autthToken
            }
        });
        console.log('Bearer ' + autthToken);
		bllogin = true;
		
       
    }
	
    return bllogin;
}
function  apiLogin(username,password,company){
	let status=false;
	let autthToken='';
	let response=ajaxGetData(apiauth,{username:username,password:password,company:company, authType:'ldap'});
		autthToken=response.result.token;
	if (autthToken!= "" && autthToken!=undefined) {
		setcooky("token", autthToken, 1);
		setcooky("username", username, 1);
		jQuery.ajaxSetup({ 
			headers: {
				'Authorization': 'Bearer ' + autthToken,
				'Access-Control-Allow-Origin':'*'
            }
		});
		
		status=true;
	 }
	 
	 return status;
}

function execAPI(apiname,postData){	
	let response={};
	let nPostData={};
	
	if(apiLogin()){ //認證
		switch(apiname){
			case "3GL_CREATE_ORDER":
			case "EFS_3PL_CREATEORDER":
				response=ajaxGetData(apiurl+apiname,postData);
				
				if(response.status.result=='NG'){
					ajaxGetData(apiurl+'EFS_3PL_ERR_MSG',{FID:postData.FID,MSG:response.status.MSG}); 
				}
				
				break;
			default:
				response=ajaxGetData(apiurl+apiname,postData);
		}
	}else{
		response={status:{result:'NG',status:'',MSG:'取得Token失敗'}};
	}
			
	return response;
}
function execAPIOther(apiname,postData){	
	let response={};
	let nPostData={};
	
	if(checkedPermisson()){ //認證
		 response=ajaxGetData(apiurl+apiname,postData);
	}else{
		response={status:{result:'NG',status:'',MSG:'取得Token失敗'}};
	}
			
	return response;
}
function batchsign(){	
	window.open(baseapiurl+"/BPMWeb/index.html?token="+getcooky("token")+"&username="+getcooky("username"),"_blank");
}
 /*=================================API END=============================================*/
 
