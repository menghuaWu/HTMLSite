/*---------------------公用變數 Start--------------*/
//var uid = '102434';
var uid='';
var API = '';
var org = 'senao';
var gridAttributes = [{
		caption: "",
		gid: "jqGridMain",
		pager: "#jqGridPagerMain",
		colAPI: API, //set colModel index
		fixedColFDb: true, //set db
		shrinkToFit: false,
		xls: true,		
		checkOnUpdate : true,
		checkOnSubmit : true,
		closeAfterEdit: true,		
		gridDefPostData: {
			UID: '',
			USERID: '',
			USERNAME: '',
			ORGANIZATIONID:'',
			station:''
		}
	},
	{
		caption: "",
		gid: "jqGridMain",
		pager: "#jqGridPagerMain",
		colAPI: '', //set colModel index
		fixedColFDb: true, //set db
		shrinkToFit: false,
		xls: true,
		edit: true,	
		gridDefPostData: {
			UID: '',
			USERID: '',
			USERNAME: '',
			ORGANIZATIONID:'',
			station:''
		}
	}
]
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
window.onload = function() {
	let oBroswer = getBroswer();
	if (oBroswer.broswer == "IE"){
		alert("本查詢頁面不支援舊版本IE，請使用Edge/FireFox/Chrom");//這裡可以修改你要顯示的訊息 及 處理事情
		window.opener = null;
		window.close();
	} 
};
$(document).ready(function () {    
    let oBroswer = getBroswer();
	if (oBroswer.broswer == "IE"){
		alert("本查詢頁面不支援舊版本IE，請使用Edge/FireFox/Chrom");//這裡可以修改你要顯示的訊息 及 處理事情
		window.opener = null;
		window.close();
	} 
    
	
	self.moveTo(0,0);//這行是要讓頁面從螢幕的0,0處開視窗
	self.resizeTo(screen.availWidth,screen.availHeight);
	
    let result = ajaxGetData(baseURL + "auth", {
        "username": "EFSUSER",
        "password": "EFSUSER"
    });
	uid=getUrlVars()['uid'];	
	API=getUrlVars()['API'];
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
    	
    $("#searchBtn").on('click', function () { //Seach Btn
        $('#gbox').removeClass('d-none');
        destroyJqGrid();		
        createGrid();
    });
}
/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid() { //create jagrid
    let $grid = '';
	let USERID = '';
	let USERNAME = '';
	var id = 0;	
	
	switch (API) {
		case 'EFS_EXT_Query':
			id = 0;
			$grid = $("#" + gridAttributes[0].gid)
			USERID = $('#EmpNO').val() == '' ? 'ALL' : $('#EmpNO').val();
			USERNAME = $('#EmpName').val() == '' ? 'ALL' : $('#EmpName').val();
			
			gridAttributes[0].gridDefinitionUrl = invokeURL + API;	//
			gridAttributes[0].colAPI = API;
			gridAttributes[0].gridDefPostData.UID = uid;
			gridAttributes[0].gridDefPostData.USERID = USERID;
			gridAttributes[0].gridDefPostData.USERNAME = USERNAME;
			gridAttributes[0].gridDefPostData.ORGANIZATIONID = org;
			gridAttributes[0].gridDefPostData.station = '';
			console.log(gridAttributes[0].gridDefPostData);
			//$grid.createJqGrid(gridAttributes[0]);
			
			break;
		default:
		console.log('Sorry, API not Set.');
	}
	
	let options = {};
	let modifyOption = {		
		add: true,
		edit: true,	
		del: true,	
		reloadAfterSubmit: true,
		addOption: {
			addurl: invokeURL + "EFS_EXT_INSERT",
			serializeEditData: function (postData) {
                postData['EXT001'] = postData['USERID'];
				postData['EXT002'] = postData['EXTNUM'];					
				postData['EXT900'] = uid;
				postData['ORGANIZATIONID'] = org;
                return JSON.stringify(postData);
            },
			afterComplete : function (response, postdata, formid) {
				createGrid();
			}
		},
		editOption: {
			editurl: invokeURL + "EFS_EXT_UPDATE",
			afterComplete : function (response, postdata, formid) {
				createGrid();
			},
			serializeEditData: function (postData) {
                let rowData = $(this).jqGrid('getRowData', postData.id);
                Object.keys(rowData).forEach(function (item) {
					postData['EXT001'] = rowData['USERID'];
                    postData['EXT002'] = postData['EXTNUM'];					
                    postData['EXT902'] = uid;
					postData['ORGANIZATIONID'] = org;
                });
                // console.log(postData);
                return JSON.stringify(postData);				
            }
		},
		delOption: {
			delurl: invokeURL + "EFS_EXT_DELETE"
		}
	};
	
	$.jgrid.gridUnload(gridAttributes[id].gid);
	options = gridAttributes[id];
	options = $.extend(false, options, modifyOption);
	$grid.createJqGrid(options);
}

function destroyJqGrid() {
	switch (API) {
		case 'EFS_EXT_Query':
			$.jgrid.gridUnload(gridAttributes[0].gid);
			break;
		default:
		console.log('Sorry, API not Set.');
	}
    
}

function gridButton() {
	
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