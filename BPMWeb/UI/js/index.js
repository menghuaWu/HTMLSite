/*---------------------公用變數 Start--------------*/
var gid = 0;
var dtable = null;
//var userId = '102584';
//var userId= '104564';
//var userId=getcooky("username");
var gridList = [{ //grid初始化參數
}];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () {

	initFrm();
	/*let str='1111';
	let status=!str?false: (str.trim().length>0);
	console.log('status',status);
	let json=JSON.parse('{"username": "lydiahallie"}');
	console.log(json);*/
});

function frmEvent() { //form event function 
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { //切換Tabs就resize jqgrid寬度

        let tid = $(e.target).attr('href');
		tid='presentation'+tid.substr(tid.length-1,1) ; 
        console.log(tid);
		for(let i=1;i<5;i++){
			$('#presentation'+i).removeClass('active');
		}
		$('#'+tid).addClass('active');
		/*if (Array.isArray(tid)) {
            gridResize(tid[1]);

        }*/
    })

	$("[name='menuntncollapse']").on('shown.bs.collapse', function () { //調整Grid顯示


		gid = $(this).attr('id').replace(/[^0-9]/ig, "");

		reSizejqGridWidth($('#jqGrid' + gid));
	});
	$("#ConfirmBtn").on('click', function (e) { //批退同意

		let data = [];
		let msg = '';
		let msgdata = [];
		let gid = '';
		let $grid;
		$('#BatchReturnTable').contents().find("tr").each(function (index, tr) {
			if (index > 0) {
				// console.log(tr.childNodes[0].innerText);
				// console.log($(tr.childNodes[3].childNodes[0]).val());
				let fid = tr.childNodes[0].innerText;
				let fOpinion = $(tr.childNodes[3].childNodes[0]).val();
				if (index == 1) {
					gid = tr.childNodes[3].childNodes[0].name.split('-')[0];
					$grid = $('#' + gid)
					console.log(gid);
				}

				if (fOpinion == '') {
					msg += '表單單號:' + fid + ' 意見未填寫\r';
					alert(msg);
					tr.childNodes[3].childNodes[0].focus();
					return false;
				}
				data.push({ formid: fid, opinion: fOpinion });
			}


		});

		$.each(data, function (index, value) {
			let result = ajaxGetData(invokeURL + 'BPM_FORM_RETURN_DATA', { formserialnumber: value.formid, uid: userId });
			if (result[0].result == undefined) {
				result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
					reexecuteActivity: {
						pProcessSerialNo: result[0].PPROCESSSERIALNO,
						pAskReexecuteUserId:result[0].PASKREEXECUTEUSERID,
						pReexecuteActivityId:  result[0].PREEXECUTEACTIVITYID,
						pReexecuteComment: '(B) ' + value.opinion
						//pReexecuteComment:  value.opinion
					}
				});
				if (result[0].result == undefined) { //reexecuteActivity簽核完成
					value.ACTION = "簽核完成";
				} else { //reexecuteActivity簽核失敗
					value.ACTION = "reexecuteActivity:簽核失敗";
				}
				
				msgdata.push(value);
			}
		});
		let ids = $grid.getGridParam("selarrrow");
		for (let i = 0; i < ids.length; i++) {
			let row = $grid.jqGrid('getRowData', ids[i]);
			let filteredNum = msgdata.filter(function (value) {
				return value.formid == row.FORMSERIALNUMBER;
			});
			$grid.jqGrid('setCell', ids[i], 'ACTION', filteredNum[0].ACTION);

		}
		$grid.contents().find(".ui-row-ltr").each(function (index, tr) {

			if (tr.childNodes[12].innerText == "簽核完成") {
				tr.childNodes[1].childNodes[0].disabled = true;
				$(tr.childNodes[1].childNodes[0]).css("cursor", "not-allowed");
			}
		});
		$grid.contents().find(".ui-row-ltr").click(function () {
			if (this.childNodes[12].innerText == "簽核完成") {
				return false;
			}
		});
		$("#returnModal").modal('hide');

	});


}
function gridButton() { //初始化同意、批退Event
	$("[name='btnLCreate']").off('click');
	$("[name='btnLCancel']").off('click');

	$("[name='btnLCreate']").on('click', function () { //同意
		let status = '';
		let id = $(this).attr('id').replace(/[^0-9]/ig, "");
		let $grid = $('#' + gridList[id].gid);
		let ids = $grid.getGridParam("selarrrow");
		$('body').loading({
			stoppable: true
		});

		for (let i = 0; i < ids.length; i++) {
			let row = $grid.jqGrid('getRowData', ids[i]);
			if (row.ACTION == "簽核完成") {
				alert(row.FORMSERIALNUMBER + ':未選擇單據簽核');
				continue;
			}
			let result = ajaxGetData(invokeURL + 'BPM_FLOW_STATUS', { UID: row.WORKER_USER_ID, ITEMOID: row.WORKITEMOID });

			if (result[0].result == undefined) {
				if (result[0].WORKITEM_CURRENTSTATE == 0) {
					result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
						acceptWorkItem: {
							pWorkItemOID: row.WORKITEMOID,
							pUserId: row.WORKER_USER_ID
						}
					});
					if (result[0].result == undefined) {
						result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
							completeWorkItem: {
								pWorkItemOID: row.WORKITEMOID,
								pUserId: row.WORKER_USER_ID,
								pComment: '(B)'
							}
						});
						if (result[0].result == undefined) {
							row.ACTION = "簽核完成";
						} else { //completeWorkItem簽核失敗
							row.ACTION = "completeWorkItem:簽核失敗";
						}

					} else { //acceptWorkItem接收失敗
						row.ACTION = "acceptWorkItem:簽核失敗";
					}
				} else {
					result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
						completeWorkItem: {
							pWorkItemOID: row.WORKITEMOID,
							pUserId: row.WORKER_USER_ID,
							pComment: '(B)'
						}
					});
					if (result[0].result == undefined) { //completeWorkItem簽核完成
						row.ACTION = "簽核完成";
					} else { //completeWorkItem簽核失敗
						row.ACTION = "completeWorkItem:簽核失敗";
					}
				}
			} else {  //completeWorkItem
				row.ACTION = "completeWorkItem:簽核失敗";
			}
			$grid.jqGrid('setRowData', ids[i], row);
			status = row.FORMSERIALNUMBER + ":" + row.ACTION + "\n";
		}
		//createOneGrid(id);
		$grid.contents().find(".ui-row-ltr").each(function (index, tr) {

			if (tr.childNodes[12].innerText == "簽核完成") {
				tr.childNodes[1].childNodes[0].disabled = true;
				$(tr.childNodes[1].childNodes[0]).css("cursor", "not-allowed");
			}
		});
		$grid.contents().find(".ui-row-ltr").click(function () {
			if (this.childNodes[12].innerText == "簽核完成") {
				return false;
			}
		});
		//簽核完成 disable
		$('body').loading('stop');

		if (status != '') {
			alert(status);
		}


	});
	$("[name='btnLCancel']").on('click', function () { //批退

		let data = [];
		let listcolumns = [];
		let coldata = ['FORMSERIALNUMBER', 'SUBJECT_TEXT', 'REQUEST_NAME'];
		let id = $(this).attr('id').replace(/[^0-9]/ig, "");
		let $grid = $('#' + gridList[id].gid);
		let ids = $grid.getGridParam("selarrrow");
		let colmodel = $grid.getGridParam('colModel');
		console.log(colmodel);
		colmodel.forEach(function (e) { //設定DataTAble COL
			if (e.label != undefined && !e.hidden) {
				if ($.inArray(e.name, coldata) >= 0) {
					listcolumns.push({ title: e.label });
				}
			}

		});
		for (let i = 0; i < ids.length; i++) {  //設定DataTable資料

			let nrow = [];
			let row = $grid.jqGrid('getRowData', ids[i]);
			if (row.ACTION == "簽核完成") {
				alert(row.FORMSERIALNUMBER + ':未選擇單據簽核');
				continue;
			}
			colmodel.forEach(function (e) {
				if (e.label != undefined && !e.hidden) {

					if ($.inArray(e.name, coldata) >= 0) {
						if (e.name == 'REQUEST_NAME') {
							nrow.push(row[e.name].split(' ')[1]);
						} else {
							nrow.push(row[e.name]);
						}

					}


				}

			});

			data.push(nrow);

		}
		console.log(data);
		if (ids.length > 0 && data.length > 0) {
			listcolumns.push({ title: '意見' });
			createDataTable(listcolumns, data, gridList[id].gid);
			$("#returnModal").modal('show');
		}

	});


}
/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

	loginCheck(); //登入檢查
	//Load menu
	$.get("Top.html", function (data) {
		$("#menu").html(data);
	});
	//Load Bottom
	$.get("Bottom.html", function (data) {
		$("#bottom").html(data);
	});
	addForm();
	frmEvent();
	


}
/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid() { //create jagrid

	for (let id = 0; id < gridList.length; id++) {
		let options = {};
		let $grid;

		$grid = $('#' + gridList[id].gid);
		$.jgrid.gridUnload(gridList[id].gid);
		options = gridList[id];
		$grid.createJqGrid(options);
	}
	gridButton();


}
function createOneGrid(id) { //create one jagrid
	let options = {};
	let $grid;
	$grid = $('#' + gridList[id].gid);
	$.jgrid.gridUnload(gridList[id].gid);
	options = gridList[id];
	$grid.createJqGrid(options);
	gridButton();

}

function addGrid(id, uid, fname) { //產生第2層grid(表單主檔)
	let gridhtml = "";

	let griddata = { //grid初始化參數
		caption: "" +
			"<INPUT TYPE='button' NAME='btnLCreate' ID='btnLCreate" + id + "'  VALUE='同意' style='color:black;font-size:12px'>" +
			"<INPUT TYPE='button' NAME='btnLCancel'  ID='btnLCAncel" + id + "'  VALUE='批退' style='color:black;font-size:12px'>"
		,
		gid: 'jqGrid' + id,
		pager: '#jqGridPager' + id,
		shrinkToFit: true,
		gridDefinitionUrl: invokeURL + 'BPM_ONEFORM_LIST', //取得表單主檔API
		fixedColFDb: false, //set db
		//gridDefColionUrl: 'json/unSchedule.json',
		gridDefPostData: {
			UID: uid,
			processinstancename: fname
		},

		colAPI: 'BPM_ONEFORM_LIST', //set colModel index //取得API顯示欄位
		//subGrid: true, // set the subGrid property to true to show expand buttons for each row
		subGrid: false, // set the subGrid property to true to show expand buttons for each row
		subGridRowExpanded: showChildGrid, // javascript function that will take care of showing the child grid
		subGridOptions: {
			// configure the icons from theme rolloer
			plusicon: "fa-arrow-alt-circle-right ",
			minusicon: "fa-arrow-alt-circle-down "
			//openicon: "ui-icon-arrowreturn-1-e"
		},
		multiselect: true,
		search: true,
		refresh: true,
		xls: true,
		loadComplete: function () {
			let allRows = $(this).jqGrid('getDataIDs');

			for (let i = 0; i < allRows.length; i++) {
				$(this).jqGrid('setCell', allRows[i], 'subgrid', '', 'align-middle');
				//新增URL
				let row = $(this).jqGrid('getRowData', allRows[i]);
				//let linkurl='efgpDetails.html?type=agree&frm='+row.HDNFORMDEFID+'&FORMSERIALNUMBER='+ row.FORMSERIALNUMBER+'&SERIALNUMBER='+ row.SERIALNUMBER +'&ITEMOID='+ row.WORKITEMOID ; 
				let linkurl='efgpDetails.html?frm='+row.HDNFORMDEFID+'&FORMSERIALNUMBER='+ row.FORMSERIALNUMBER ; 
				/*let frm_type = row.FORMSERIALNUMBER;
				let hdnFormDefId=frm_type.split("-")[0];
				let url="https://efgptest.senao.com/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnFormDefId="+hdnFormDefId+"&hdnProcessInstOID="+row.WORKITEMOID+"&hdnCurrentUserId="+row.WORKER_USER_ID;
				*/
				//let urltitletext = "<a href='" + row.URL + "'>" + row.SUBJECT_TEXT + "</a>";
				//let urlfidtext = "<a href='" + row.URL + "'>" + row.FORMSERIALNUMBER + "</a>";
				let urltitletext = "<a href='"+linkurl+"' >" + row.SUBJECT_TEXT + "</a>";
				let urlfidtext = "<a href='"+linkurl+"' >"  + row.FORMSERIALNUMBER + "</a>";


				//let urltitletext="<a href='https://efgpdev.senao.com/NaNaWeb/efgpfrmview.html?token="+getcooky("token")+"&fid="+row.FORMSERIALNUMBER+"&uid="+row.WORKITEMOID+"'>"+row.SUBJECT_TEXT+"</a>";
				//let urlfidtext="<a href='https://efgpdev.senao.com/NaNaWeb/efgpfrmview.html?token="+getcooky("token")+"&fid="+row.FORMSERIALNUMBER+"&uid="+row.WORKITEMOID+"'>"+row.FORMSERIALNUMBER+"</a>";
				$(this).jqGrid("setCell", allRows[i], "FORMSERIALNUMBER", urlfidtext);
				$(this).jqGrid("setCell", allRows[i], "SUBJECT_TEXT", urltitletext);

			}
			//$(this).jqGrid('setColProp', 'subgrid', { classes: 'align-middle' });              
		}

	};

	gridList.push(griddata);
	gridhtml += "<div class='row p-2'>";
	gridhtml += "<div class='col  content-widget  bg-white' style='text-align:center;font-size: 14px;'>";
	gridhtml += "<table id='jqGrid" + id + "' class='table table-bordered '></table>";
	gridhtml += "<div id='jqGridPager" + id + "'></div>";
	gridhtml += "</div>";
	gridhtml += "</div>";
	return gridhtml;
}
function showChildGrid(parentRowID, parentRowKey) { //產生第三層grid(表單明細)

	let $grid;


	let row = $('#' + gridList[gid].gid).jqGrid('getRowData', parentRowKey);
	let apipost = subApi(row.WORKER_USER_ID, row.PROCESSINSTANCENAME); //回傳表單明細取得資料的API
	let childGridID = parentRowID + "_table";
	let childGridPagerID = parentRowID + "_pager";
	let options = { //grid初始化參數
		caption: "",
		gid: childGridID,
		pager: '#' + childGridPagerID,
		shrinkToFit: true,
		//colAPI: 'RMA_WOSingleNotCreated', //set colModel index
		//fixedColFDb: true, //set db
		gridDefinitionUrl: invokeURL + 'BPM_SERIALNUMBER_LIST',
		//gridDefColionUrl: 'json/unSchedule.json',
		gridDefPostData: {
			//FORMSERIALNUMBER: row['FORMSERIALNUMBER']
			FORMSERIALNUMBER: row.FORMSERIALNUMBER
		}
	};
	$.extend(false, options, apipost);
	$('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
	$grid = $('#' + childGridID);
	console.log('row', row);
	$grid.createJqGrid(options);
}

/*---------------------JqGrid Function End--------------*/
function createDataTable(listcolumns, dataSet, gid) { //顯示第一層表單

	let table1 = $('#BatchReturnTable');
	//int_table1.destroy(); //#清除table結構返回新的table
	//int_table1.clear(); //#  清除放入的數據
	table1.empty(); //#  這個是用來清空datable的
	let int_table1 = table1.DataTable({
		fixedHeader: false,
		responsive: true,
		stripeClasses: ["odd", "even"],  //为奇偶行加上样式，兼容不支持CSS伪类的场合
		searching: true, // 預設為true 搜尋功能，若要開啟不用特別設定
		paging: false, // 預設為true 分頁功能，若要開啟不用特別設定
		ordering: false, // 預設為true 排序功能，若要開啟不用特別設定
		sPaginationType: 'full_numbers', // 分頁樣式 預設為full_numbers，若需其他樣式才需設定
		lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']], //顯示筆數設定 預設為[10, 25, 50, 100]
		pageLength: 'All',// 預設為'10'，若需更改初始每頁顯示筆數，才需設定
		processing: true, // 預設為false 是否要顯示當前資料處理狀態資訊
		serverSide: false, // 預設為false 是否透過Server端處理分頁…等
		stateSave: true, // 預設為false 在頁面刷新時，是否要保存當前表格資料與狀態
		destroy: true, // 預設為false 是否銷毀當前暫存資料
		info: true, // 預設為true　是否要顯示目前有 x  筆資料
		autoWidth: false, // 預設為true　設置是否要自動調整表格寬度(false代表不要自適應)　,
		scrollCollapse: false, // 預設為false 是否開始滾軸功能控制X、Y軸
		//scrollY: 200px, // 若有設置為Y軸(垂直)最大高度
		/*設置搜尋div、頁碼div...等基本位置/外觀..等，詳細可看官網
						設定資料來源區塊(data or ajax….等),
						設定資料欄位區塊(columns),
						設定語言區塊(language),
						設定欄位元素定義區塊(columnDefs),
						設定列元素區塊(rowCallback)…等　*/
		dom: 'lrtip',
		layout: {
			topStart: {
				buttons: [
					'copy', 'excel', 'pdf'
				]
			}
		},
		columns: listcolumns,
		data: dataSet,

		columnDefs: [
			{
				data: null,
				defaultContent: '<input type="text" class="form-control" id=' + gid + '"-opinions" name="' + gid + '-opinions">',
				targets: -1,
				//className: 'text-center',
				width: "40%" //寬度				

			}
		]
	});


}
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function addForm() { //顯示第一層表單
	//let uid = getcooky("username");
	//let uid = '104541';
	let menuhtml = "";
	let i = 1;
	let frmname = "";
	let formTotal = "";

	let result = ajaxGetData(invokeURL + "BPM_FORM_LIST", { //取的單據類型
		UID: userId
	});

	if (result[0].result == undefined) {
		$.map(result, function (item) {

			formTotal = item.COUNT; //數量
			frmname = item.PROCESSINSTANCENAME; //單據類型
			//建立單據選單HTML  
			menuhtml = menuhtml + "<div class='card'>";
			menuhtml = menuhtml + "<div class='card-header' id='menuheader" + i + "'>"
			menuhtml = menuhtml + "<h2 class='mb-0'>";
			menuhtml = menuhtml + "<button  name='menunbtn' class='btn btn-link btn-block text-left collapsed ' type='button' data-toggle='collapse' aria-expanded='false' id='menuntn" + i + "'   data-target='#menuntncollapse" + i + "' aria-controls='menuntncollapse" + i + "'>"
			menuhtml = menuhtml + frmname + " &nbsp;  &nbsp; <span class='badge badge-secondary mb-3'> " + formTotal + "</span>";
			menuhtml = menuhtml + "</button>";
			menuhtml = menuhtml + "</h2>";
			menuhtml = menuhtml + "</div>";
			menuhtml = menuhtml + " <div name='menuntncollapse' id='menuntncollapse" + i + "' class='collapse ' aria-labelledby='menuheader" + i + "' data-parent='#accordion'>";
			menuhtml = menuhtml + "<div class='card-body'>";
			menuhtml = menuhtml + addGrid(i, userId, frmname);
			//menuhtml = menuhtml +"Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.";
			menuhtml = menuhtml + "</div>";
			menuhtml = menuhtml + " </div>";
			menuhtml = menuhtml + "</div>";
			menuhtml = menuhtml + "<div class='card'>";

			i++;
		});
		document.getElementById("accordion").innerHTML = menuhtml;
		createGrid(); //產生表單主檔
	}
}
function reSizejqGridWidth($grid) { //調整grid顯示
	//重新抓jqGrid容器的新width
	let newWidth = $grid.closest(".ui-jqgrid").parent().width();
	//是否縮齊column(相當於shrinkToFit)
	let shrinkToFit = true;
	$grid.jqGrid("setGridWidth", newWidth, shrinkToFit);
}
function openList(fname) {
	document.location.href = 'mainmenuGrid.html?fname=' + fname;
}
function subApi(uid, fname) { //取得SubGrid API
	let post = {
		gridDefinitionUrl: '',
		gridDefPostData: {

		}
	};
	switch (fname) {
		case "SENAO061(系統權限申請單)":
			post.gridDefinitionUrl = invokeURL + 'BPM_SERIALNUMBER_LIST';
			post.gridDefPostData = {
				UID: uid,
				processinstancename: fname
			}

			break;
		default:
			post.gridDefinitionUrl = invokeURL + 'BPM_SERIALNUMBER_LIST';
			post.gridDefPostData = {
				UID: uid,
				processinstancename: fname
			}
	}
	return post;
}
/*---------------------Other Function End--------------*/