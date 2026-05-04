/*---------------------公用變數 Start--------------*/
//var uid = '100002';
var uid='';
var gridAttributes = [{
    caption: "",
    gid: "jqGridMain",
    pager: "#jqGridPagerMain",
    xls: true,
    //gridDefColionUrl: "../json/accountManagement.json",
    gridDefinitionUrl: '',
    gridDefPostData: {
        UID: '',
        TNAME:'',
        station:'',
        d1: '',
        d2: ''
    }
}]
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () {
    
    /*let oBroswer = getBroswer();
					if (oBroswer.broswer == "IE"){
						alert("本系統不支援舊版本IE，請使用Edge/FireFox/Chrom");//這裡可以修改你要顯示的訊息 及 處理事情
						window.opener = null;
						window.close();
                    } 
    */
    let result = ajaxGetData(baseURL + "auth", {
        "username": "EFSUSER",
        "password": "EFSUSER"
    });
	console.log(result);
    uid=getUrlVars()['uid'];
    if (result.token != "") {
        setcooky("token", result.token, 1);
    }
    checkedPermisson(); //登入檢查
    initFrm();


});
/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form
    //set div
    
    //set select 
    
    let apiList = ajaxGetData(invokeURL + 'EFS_FORMList', {
        UID: uid
    });
    $('#fType').append($("<option></option>").attr({"value":"EFS_AllList","tName":"","station":""}).text(
        'ALL'));
    $.map(apiList, function (item) {
        let value = 'EFS_' + item[Object.keys(item)[1]];
        let tName =  item[Object.keys(item)[2]];
        let station =  item[Object.keys(item)[3]];
        let txt = item[Object.keys(item)[0]];
        $('#fType').append($("<option></option>").attr({"value":value,"tName":tName,"station":station}).text(
            txt));
    });
    $("#sDate1").datepicker({ //setuo datepcker
        format: "yyyy/mm/dd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });
    $("#eDate1").datepicker({ //setuo datepcker
        format: "yyyy/mm/dd",
        autoclose: true,
        todayHighlight: true,
        setDate: new Date(),
        zIndexOffset: 9999
    });
    $("#searchBtn ").on('click', function () { //Seach Btn
        $('#gbox').removeClass('d-none');
        gridAttributes[0].gridDefinitionUrl = invokeURL + $('#fType').val();
        destroyJqGrid(0);
        createGrid(0);

    });
}
/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let $grid = $("#" + gridAttributes[id].gid);
    let d1,d2;
    d1=$("#sDate1").val()==''?'all':$("#sDate1").val();
    d2=$("#eDate1").val()==''?'all':$("#eDate1").val();

    gridAttributes[id].gridDefPostData.UID=uid;
    gridAttributes[id].gridDefPostData.d1 = d1;
    gridAttributes[id].gridDefPostData.d2 = d2;
    gridAttributes[id].gridDefPostData.TNAME= $('#fType').find("option:selected").attr('tName');
    gridAttributes[id].gridDefPostData.station= $('#fType').find("option:selected").attr('station');
    console.log(gridAttributes[id].gridDefPostData);
    $grid.createJqGrid(gridAttributes[id]);



}

function destroyJqGrid(id) {

    $.jgrid.gridUnload(gridAttributes[0].gid);
}
/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function setcooky(name, val, expire_days) {
    //var expire_days = 1; // 過期日期(天)
    var d = new Date();
    d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + val + "; " + expires;
}
function getBroswer(){
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? Sys.edge = s[1] :
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    
    if (Sys.edge) return { broswer : "Edge", version : Sys.edge };
    if (Sys.ie) return { broswer : "IE", version : Sys.ie };
    if (Sys.firefox) return { broswer : "Firefox", version : Sys.firefox };
    if (Sys.chrome) return { broswer : "Chrome", version : Sys.chrome };
    if (Sys.opera) return { broswer : "Opera", version : Sys.opera };
    if (Sys.safari) return { broswer : "Safari", version : Sys.safari };
    
    return { broswer : "", version : "0" };
    
}
/*---------------------Other Function End--------------*/