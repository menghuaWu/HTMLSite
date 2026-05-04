/*---------------------公用變數 Start--------------*/
    //var webapi = getUrlVars()["api"];
    //var callback = getUrlVars()["cb"];
    var autthToken = "";
    var savedname = "";
    var cookdate=1; //cookie 記憶天數
    var bllogin = false;
    var callback = document.location.href.substring(document.location.href.indexOf("?cb=") + 4);
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ajaxStart(function () {
    //$.blockUI();
}).ajaxStop(function () {
    //$.unblockUI();
    //getData();
});
$(document).ready(function () { //form load function
     
 
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
   
    $.getJSON("login/login.json", function (data) {
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
    if (bllogin) {
        $('#loginModal').modal('hide');
       
         //記憶登入變數到cookie    
        setcooky("username",$('#username').val(),cookdate);
        setcooky("domain", $('#domain').val(), cookdate);
        setcooky("token", autthToken, cookdate);
        setcooky("loginuser",$('#username').val(),cookdate);
        setcooky("lang",$('#selLanguage').val(),cookdate);
        setcooky("UID",$('#username').val(),cookdate);
        if ($('#remember').is(":checked") == true) {
            setcooky("name", $('#username').val(), cookdate);
        } else {
            setcooky("name", "", -1);
        }
        if ($('#dataSource').is(":checked") == true) {
            setcooky("dataSource", "0", 1); //測試區
        } else {
            setcooky("dataSource", "1", 1); //正式區
        }
        if ($('#ledType').is(":checked") == true) {
            setcooky("ledType", "0", 10); //不亮燈
        } else {
            setcooky("ledType", "1", 10); //亮燈
        }
        setcooky("Printer", $('#Printer').val(), 1); //印表機
        if (callback == undefined || callback == "") {
            document.location.href = "index.html";
        } else {
            //document.location.href = "grid.html?api=" + webapi;
            document.location.href = callback;
        }
    }
}

      /*---------------------Other Function End--------------*/