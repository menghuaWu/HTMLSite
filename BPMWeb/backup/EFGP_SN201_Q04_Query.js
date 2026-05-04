/*---------------------公用變數 Start--------------*/
//var uid = '101675';
var uid='';
var type = '';
//var invokeURLCustom= baseURL + "invoke5?sCode=";


var gridAttributes = [{
    caption: "",
    gid: "jqGridMain",
    pager: "#jqGridPagerMain",
	colAPI: 'EFS_SN201_Q04_Query', //set colModel index
    //fixedColFDb: true, //set db
    //shrinkToFit: true,
    xls: true,
    autowidth: true,        
    gridDefPostData: {
        sheetNO: '',
		custPO: '',
        dn:'',        
        d1: '',
        d2: ''
    },
	ondblClickRow: ondblClickRow_onclick
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
	
	self.moveTo(0,0);//這行是要讓頁面從螢幕的0,0處開視窗
	self.resizeTo(screen.availWidth,screen.availHeight);
	
    let result = ajaxGetData(baseURL + "auth", {
        "username": "EFSUSER",
        "password": "EFSUSER"
    });
	uid=getUrlVars()['uid'];
	//type=getUrlVars()['type'];
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

    //初始化..
    //let apiList = ajaxGetData(invokeURL + 'EFS_SN201_Q03_Query_init', {});   
    
    //set select 
    /*
    let apiList = ajaxGetData(invokeURL + 'EFS_SN201_Q03_Query_init', {
        
    });
    $.map(apiList, function (item) {
		let value = item[Object.keys(item)[0]];       
        let station =  item[Object.keys(item)[1]];
        let txt = item[Object.keys(item)[0]];
        $('#fType').append($("<option></option>").attr({"value":value, "station":station}).text(txt));
    });
	*/
	
	
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
  
	
	let sd1 = moment().add(-7, 'days').format('YYYY/MM/DD');
	let ed1 = moment().format('YYYY/MM/DD');
	$("#sDate1").attr('value', sd1);
	$("#eDate1").attr('value', ed1);
	
    $("#searchBtn").on('click', function () { //Seach Btn
        $('#gbox').removeClass('d-none');		
        destroyJqGrid(0);		                
		gridAttributes[0].gridDefinitionUrl = invokeURL + 'EFS_SN201_Q04_Query';		        
        createGrid(0);
    });
}
/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/

function createGrid(id) { //create jagrid
    let $grid = $("#" + gridAttributes[id].gid);
    let d1,d2;
    //d1=$("#sDate1").val()==''?'all':$("#sDate1").val();
    //d2=$("#eDate1").val()==''?'all':$("#eDate1").val();
	if ($("#sDate1").val() != '' && $("#eDate1").val() != '' ){
		
        //gridAttributes[id].gridDefPostData.UID = uid;
        gridAttributes[id].gridDefPostData.sheetNO = $("#sheetNO").val();		
		gridAttributes[id].gridDefPostData.d1 = $("#sDate1").val();
        gridAttributes[id].gridDefPostData.d2 = $("#eDate1").val();		
        gridAttributes[id].gridDefPostData.custPO = $("#custPO").val();		
        gridAttributes[id].gridDefPostData.dn = $("#dn").val();		
		
      //  $.jgrid.gridUnload(gridAttributes[id].gid);
        console.log(gridAttributes[id].gridDefPostData);
		$grid.createJqGrid(gridAttributes[id]);
	}
	
}


function ondblClickRow_onclick(rowid, iRow, iCol, e){
	let row_data = $("#" + gridAttributes[0].gid).getRowData(rowid);
	//alert(row_data['PROCESSSERIALNUMBER']);
	let apiList = ajaxGetData(invokeURL + 'EFS_Query_ProcessInstanceOID_TEST', {SERIALNUMBER: row_data['PROCESSSERIALNUMBER'], UID1: uid, UID2: uid, UID3: uid});
	//alert(apiList.length);
	let ProcessinstanceOID = "";
	let FormID = "";
	let URL = "https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?";
	let Params = "hdnMethod=searchFormDetail&hdnCurrentUserId=" + uid;
	
	$.map(apiList, function (item) {
		ProcessinstanceOID = item[Object.keys(item)[0]];
		FormID = item[Object.keys(item)[1]];
        //alert(value);
    });
	if (apiList[0]['result'] == undefined){	//表示沒有資料
		if (ProcessinstanceOID !== ''){
			Params += "&hdnFormDefId=" + FormID + "&hdnProcessInstOID=" + ProcessinstanceOID
			window.open(URL + Params);
		}	
	}
	else{
		alert('Permission denied...');
		return false;
	}
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