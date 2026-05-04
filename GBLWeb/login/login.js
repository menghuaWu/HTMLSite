/*---------------------公用變數 Start--------------*/
    //var webapi = getUrlVars()["api"];
    //var callback = getUrlVars()["cb"];
    var autthToken = "";
    var savedname = "";
    var cookdate=1; //cookie 記憶天數
    var bllogin = false;
    var callback = document.location.href.substring(document.location.href.indexOf("?cb=") + 4);
    var site;
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ajaxStart(function () {
    //$.blockUI();
}).ajaxStop(function () {
    //$.unblockUI();
    //getData();
});
$(document).ready(function () { //form load function
     
    site = callback;
    if (site.indexOf("/") >= 0) {
        if (site.indexOf("/") == 0) {
            site = site.substring(site.indexOf("/")+1, site.length);
            site = site.substring(0, site.indexOf("/"));
        }else{
            site = site.substring(0, site.indexOf("/"));
        }
        
    }
    if (bllogin == true) {

    } else {
        $('#loginModal').modal({
            backdrop: true
        });
        savedname = getcooky("name");
        if (savedname != "") {
            $('#username').val(savedname);
            $('#remember').prop('checked', true)
        }

    }
    initFrm() ;

});

function frmEvent() { //form event function
    $("#username").on("keyup", function (e) {
        if (e.which == 13) {
            doAuth();
            afterSuccessAuth();
        }
    });
    $("#pwd").on("keyup", function (e) {
        if (e.which == 13) {
            doAuth();
            afterSuccessAuth();
        }
    });
    $('#btn_login').on('click', function () {
        
        doAuth();
        afterSuccessAuth();
    });
  
}
function resize() {
}
/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
   
    $.getJSON("/"+site + "/login/login.json", function (data) {
		console.log(data);
        $.map(data.select, function (item) {
                let id=$('#'+item.name);
                if(item.display==0){
                    $('#'+item.name+'-row').addClass('d-none'); 
                }
                $.map(item.values, function (value) {
                    let Txt=Object.keys(value)[0];
                    let v=value[Txt];
                    if(item.seleect==Txt){
                        id.append($("<option selected></option>").attr("value", v)
                        .text(Txt));
                    }else{
                        id.append($("<option ></option>").attr("value", v)
                        .text(Txt));
                    }           
            
                });
        });
        $.map(data.check, function (item) {
            let id=$('#'+item.name);
            if(item.display==0){
                $('#'+item.name+'-row').addClass('d-none'); 
            }
           
    });
    
	});
    frmEvent();
}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid

}
/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function doAuth() {
    let msg="資訊部提醒:\n";
					msg+="1.請確認您有權線登入此系統。\n";
					msg+="2.您正在登入的系統有包含客戶的機密資料，請謹慎使用並勿外流。\n";
					msg+="3.系統會記錄你登出入以及操作程式的相關資訊。\n" ;
    let postData = {
        username: $('#username').val(),
        password: $('#pwd').val(),
        company: $('#company').val()
    };
    if($('#domain').val()==0){
        postData["authType"]="ldap";
    }
    //console.log('post',postData);
    console.log('url',baseURL + "auth");
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: baseURL + "auth",
        dataType: "json",
        data: JSON.stringify(postData),
        async: false,
        success: function (response) {
            if (response.token !== undefined) {
                if (response.token != "") {
                    autthToken = response.token;
                    bllogin = true;
                    alert(msg);	
                    return true;
                }
            }
            $('#loginModal').effect("shake");
        },
        error: function (response) {
            $('#loginModal').effect("shake");
            // alert("status:"+response.statusText);
            $('#message').html("<b>Message: </b><font color=red>" + response.responseJSON
                .status + " - " + response.responseJSON.message + "</font>");
        }
    });
}

function afterSuccessAuth() {
    let pathsite = "/";
    if (site != undefined && site != "") {
        pathsite = site;
    }
    if (bllogin) {
        $('#loginModal').modal('hide');

        //記憶登入變數到cookie    
        setpathcooky("username", $('#username').val(), cookdate, pathsite);
        setpathcooky("domain", $('#domain').val(), cookdate, pathsite);
        setpathcooky("token", autthToken, cookdate, pathsite);
        setpathcooky("loginuser", $('#username').val(), cookdate, pathsite);
        setpathcooky("lang", $('#selLanguage').val(), cookdate, pathsite);
        setpathcooky("UID", $('#username').val(), cookdate, pathsite);
        if ($('#remember').is(":checked") == true) {
            setpathcooky("name", $('#username').val(), cookdate, pathsite);
        } else {
            setpathcooky("name", "", -1, pathsite);
        }
        if ($('#dataSource').is(":checked") == true) {
            setpathcooky("dataSource", "0", cookdate, pathsite); //測試區
        } else {
            setpathcooky("dataSource", "1", cookdate, pathsite); //正式區
        }
        if ($('#ledType').is(":checked") == true) {
            setpathcooky("ledType", "0", cookdate, pathsite); //不亮燈
        } else {
            setpathcooky("ledType", "1", cookdate, pathsite); //亮燈
        }
        setpathcooky("Printer", $('#Printer').val(), 1); //印表機
        if (callback == undefined || callback == "") {
            document.location.href = "index.html";
        } else {
            //document.location.href = "grid.html?api=" + webapi;
            document.location.href = callback;
        }
    }
}
      /*---------------------Other Function End--------------*/