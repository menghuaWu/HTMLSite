/*---------------------公用變數 Start--------------*/
//var uid = '101675';
var uid='';
var type = '';
//var invokeURLCustom= baseURL + "invoke5?sCode=";


var gridAttributes = [{
    caption: "[SN201_P02]Newegg SalesChannel Mapping",
    gid: "SN201_P02_grid",
    pager: "#jqGridPagerMain",
	colAPI: 'EFS_SN201_P02_Query', //set colModel index
    //fixedColFDb: true, //set db
    shrinkToFit: true,
    xls: true,
    autowidth: true,  
    gridDefinitionUrl: invokeURL + "EFS_SN201_P02_Query",
    gridDefPostData: {custName:''},    
    viewrecords: true,        
    //colMenu: true,
    add: true,   
    edit: true,
    del: true,     
    addOption: {
        addurl: invokeURL + "EFS_SN201_P02_INSERT",        
    },
    editOption: {
        editurl: invokeURL + "EFS_SN201_P02_UPDATE"
    },
    delOption: {
        delurl: invokeURL + "EFS_SN201_P02_DEL",   
        serializeDelData: function (postData) {            
            let rowData = $(this).jqGrid('getRowData', postData.id);
            postData['CUSTOMERNUMBER'] = rowData['CUSTOMERNUMBER'];
            return JSON.stringify(postData);
        }             
    },
},
{
    caption: "[SN204_P01]Reseller Permit Setting",
    gid: "SN204_P01_grid",
    pager: "#jqGridPagerMain",
	colAPI: 'EFS_SN204_P01_Query', //set colModel index
    //fixedColFDb: true, //set db
    shrinkToFit: true,
    xls: true,
    autowidth: true,  
    gridDefinitionUrl: invokeURL + "EFS_SN204_P01_Query",
    gridDefPostData: {custNum:''},    
    viewrecords: true,
    rowNum: 15, //初始顯示筆數            
    //colMenu: true,
    add: false,   
    edit: true,
    del: false,         
    editOption: {
        editurl: invokeURL + "EFS_SN204_P01_UPDATE"
    }
}


];
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
	type=getUrlVars()['type'];
    if (result.token != "") {
        setcooky("token", result.token, 1);
    }    
    checkedPermisson(); //登入檢查
    initFrm(type);	
	
});



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm(type) { //init form
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
    
   $('#custNum').val('');
   $('#custName').val('');    
   $('#custName2').val('');  
   frmEvent();

   switch(type){
    case 'SN201_P02':
        $('#caption_SN204_P01').hide();
        $('#SN204_P01').hide();
        break;
    case 'SN204_P01':
        $('#caption_SN201_P02').hide();
        $('#SN201_P02').hide();
        break;            
    default:
        console.log('Sorry, we are out of Type:'+ type +'.');
   }
    
}

function frmEvent() { //form event function

    $("#searchBtn_SN201_P02").on('click', function () { //Seach Btn
        $('#gbox').removeClass('d-none');		
        destroyJqGrid();		                
        gridAttributes[0].gridDefinitionUrl = invokeURL + 'EFS_SN201_P02_Query';		                
        createGrid(0);        
    });

    $("#searchBtn_SN204_P01").on('click', function () { //Seach Btn
        let result = ajaxGetData(invokeURL + "EFS_SN204_P01_Query_CustomerName", {
            custNum: $('#custNum').val(),
            OU_ID: 224
        });
        console.log('result:', result);
        if (result[0].result == undefined) {
            $('#custName2').val(result[0]['CUSTOMER_NAME']);            
        }else{            
            alert("Error: Customer Num is invalid!!!");
            $('#custNum').val('');
            $('#custName2').val('');
            destroyJqGrid();	
            return false;
        }
        $('#gbox').removeClass('d-none');		
        destroyJqGrid();		                
		gridAttributes[1].gridDefinitionUrl = invokeURL + 'EFS_SN204_P01_Query';		        
        createGrid(1);
    });   

}
/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/

function createGrid(id) { //create jagrid
    let $grid = $("#" + gridAttributes[id].gid);    
    console.log(gridAttributes[id].gid);
    if(gridAttributes[id].gid=="SN201_P02_grid"){
        gridAttributes[id].gridDefPostData.custName = $("#custName").val();		
    }else if(gridAttributes[id].gid=="SN204_P01_grid"){
        gridAttributes[id].gridDefPostData.custNum = $("#custNum").val();		
    }
    console.log(gridAttributes[id].gridDefPostData);
	$grid.createJqGrid(gridAttributes[id]);	
}


function destroyJqGrid() {
    for(var i=0;i< gridAttributes.length;i++){
        $.jgrid.gridUnload(gridAttributes[i].gid);
    }
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