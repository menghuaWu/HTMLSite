/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var fname;
var lineData = new Array();
var gridRows = new Array();
var gridList = [
];

/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () {

	loginCheck(); //登入檢查
	//Load menu
	$.get("Top.html", function (data) {
		$("#menu").html(data);
	});
	//Load Bottom
	$.get("Bottom.html", function (data) {
		$("#bottom").html(data);
	});




	initFrm();
	let data = "<FORM188>\n  <form188019_t1 id=\"form188019_t1\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188019_t1>\n  <form188019 id=\"form188019\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188019>\n  <form_org id=\"form_org\"/>\n  <form_ou id=\"form_ou\"/>\n  <form188002 id=\"form188002\"/>\n  <form188001 id=\"form188001\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188001>\n  <form188004_t1 id=\"form188004_t1\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188004_t1>\n  <form188003_t1 id=\"form188003_t1\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188003_t1>\n  <form188003 id=\"form188003\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188003>\n  <form188004 id=\"form188004\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188004>\n  <form188005 id=\"form188005\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188005>\n  <form188006 id=\"form188006\"/>\n  <form188007 id=\"form188007\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188007>\n  <form188008_1 id=\"form188008_1\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188008_1>\n  <form188008_2 id=\"form188008_2\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188008_2>\n  <form188008_3 id=\"form188008_3\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188008_3>\n  <form188008_4 id=\"form188008_4\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188008_4>\n  <form188009 id=\"form188009\"/>\n  <form188010 id=\"form188010\"/>\n  <form188011 id=\"form188011\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188011>\n  <form188012 id=\"form188012\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188012>\n  <form188013 id=\"form188013\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188013>\n  <form188016 id=\"form188016\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188016>\n  <form188017 id=\"form188017\"/>\n  <form188018 id=\"form188018\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188018>\n  <form188021 id=\"form188021\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188021>\n  <form188022 id=\"form188022\"/>\n  <form188020 id=\"form188020\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188020>\n  <form188014 id=\"form188014\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188014>\n  <form188015 id=\"form188015\" dataType=\"java.lang.String\" perDataProId=\"\">defaultValue</form188015>\n </FORM188>";
	let json = {
		form188002: "SENAO188-202502-0006",
		form188001: "SENAO188",
		form188004_t1: "運籌系統二課"
	};
	let rs = getexcelFrm(data, json);
	console.log(rs);
	$("#excel-file").val("");
	$("#qryModal").modal('show');
	
});



function initUserModel() {
	let seachdata = {
		ID: 'ALL', LDAP: 'ALL', NAME: 'ALL', DEP: 'ALL', COMPAY: 'ALL', DEPNAME: 'ALL'
	}
	//搜尋設定
	let result = ajaxGetData(invokeURL + 'BPM_COMPANY_LIST', {
	});
	if (result[0].result == undefined) {
		$.map(result, function (item) {

			$('#userModalCompany').append($("<option></option>").attr("value", item.COMPANY_ID)
				.text(item.COMPANY_NAME));

		});

	}
	UserModelGrid(seachdata);
	$('#userModalQtyBtn').on('click', function () { //查詢
		let seach = {
			ID: 'ALL', LDAP: 'ALL', NAME: 'ALL', DEP: 'ALL', COMPAY: 'ALL', DEPNAME: 'ALL'
		}
		let qty = $('#userModalQtyTxt').val();
		if (qty == undefined || qty == '') {
			qty = 'ALL';
		}
		seach.COMPAY = $('#userModalCompany').val();
		switch ($('#userModalType').val()) {
			case 'userName':
				seach.NAME = qty;
				break;
			case 'userId':
				seach.ID = qty;
				break;
			case 'orgUnitName':
				seach.DEPNAME = qty;
				break;
			case 'orgUnitId':
				seach.DEP = qty;
				break;
			case 'ldapid':
				seach.LDAP = qty;
				break;
		}
		UserModelGrid(seach);


	});
	$('#userModalOKBtn').on('click', function () { //轉派
		let $grid = $('#jqGridUser');
		let id = $grid.jqGrid('getGridParam', 'selrow');
		if (id > 0) {
			let row = $grid.jqGrid('getRowData', id);

			let data = {
				pRequesterOID: userOid,
				pAcceptorOID: row.USER_OID,
				pWorkItemOID: ITEMOID,
				pReassignComment: ""
			};
			let result = assigneeReassignWorkItem(data);
			if(result.status=='OK'){
				alert('轉派成功');
				$("#userModal").modal('hide');
			
			}else{
				alert('轉派失敗');
			}
		}else{
			alert('沒有選擇轉派人員');
		}
	
		
	});
	$('#userModalQtyTxt').on('keypress', function (event) {
        let key = window.event ? event.keyCode : event.which;
        if (key == 13) {
			$('#userModalQtyBtn').trigger("click");
        }
    });
}

function UserModelGrid(seachdata) {
	//grid 設定
	let gid = 'jqGridUser';
	let gridParam = { //grid初始化參數
		//caption: 'RMA MODEL SUM',
		gid: gid,
		pager: '#jqGridUserPager',
		shrinkToFit: true,
		colAPI: 'BPM_USER_QUERY', //set colModel index
		fixedColFDb: false, //set db
		gridDefinitionUrl: invokeURL + 'BPM_USER_QUERY',
		//gridDefColionUrl: 'json/unSchedule.json',
		gridDefPostData: {
			ID: seachdata.ID, //工號
			LDAP: seachdata.LDAP, //LDAP ID
			NAME: seachdata.NAME, //員工姓名
			DEP: seachdata.DEP, //部門
			COMPAY: seachdata.COMPAY, //公司
			DEPNAME: seachdata.DEPNAME
		},
		search: false,
		refresh: false,
		xls: false

	};
	let $grid = $('#' + gid);
	$.jgrid.gridUnload(gid);
	options = gridParam;
	$grid.createJqGrid(options);
}




/*---------------------UI event Function Start--------------*/
function frmEvent() { //form event function 
	var fullHeight = function () {

		$('#excelUp').on('click', function () {
			if ($("#excel-file").val() == "") {
				if ($("#filelist").text() == "") {
					alert("Please choose to upload the attachment file!");
				}
			} else {

				var files = $('#excel-file')[0].files;
				$("#qryModal").modal('hide');
				//$('#jqGrid2').loading();
				/*$('#jqGrid2').loading({
					message: 'Working...',
					theme: 'dark'
				  });*/
				//var files = e.target.files;
				var fileReader = new FileReader();
				fileReader.onload = function (ev) {
					try {
						var data = ev.target.result
						var workbook = XLSX.read(data, {
							type: 'binary'
						}) // 以二進位制流方式讀取得到整份excel表格物件
						var persons = []; // 儲存獲取到的資料

					} catch (e) {
						alert('File type is incorrect');
						return;
					}
					// 表格的表格範圍，可用於判斷表頭是否數量是否正確
					var fromTo = '';
					// 遍歷每張表讀取
					for (var sheet in workbook.Sheets) {
						if (workbook.Sheets.hasOwnProperty(sheet)) {
							fromTo = workbook.Sheets[sheet]['!ref'];
							console.log('fromTo', fromTo);
							persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[
								sheet],{blankRows: false, defval: null,range: 2})); //range:開始行數
							break; // 如果只取第一張表，就取消註釋這行
						}
					}
					//在控制檯打印出來表格中的資料
					console.log(persons);

					return;
					$('body').loading({
						message: 'Working...',
						theme: 'dark'
					});
					setTimeout(function () {

						let pSubject = $('#subject').val();
						//Frm檢查
						//FrmSave
						//發起流程
						for (let i = 0; i < persons.length; i++) {


							let oid = findFormOIDsOfProcess(frmType);
							if (oid.status == 'OK') {
								let template = getFormFieldTemplate(oid.data);
								if (template.status == 'OK') {

									let Process = invokeProcessExcel(frmType, userid, Department, oid.data, pSubject, template.data, persons[i]);
									if (Process.status == 'OK') {
										alert('已產生' + Process.data + '單號');

									} else {
										alert(template.msg);
									}
								} else {
									alert(template.msg);
								}

							} else {
								alert(oid.msg);
							}
						}
						$('body').loading('stop');
					}, 500);
					// upFile(persons);


				};
				// 以二進位制方式開啟檔案
				fileReader.readAsBinaryString(files[0]);
				//$('#jqGrid2').loading('stop');
			}

		});

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	$('#forwardBtn').on('click', function () {
		$("#userModal").modal('show');
		initUserModel();
	});
	$("#initiateBtn").on('click', function (e) { //發起
		$('body').loading({
			message: 'Working...',
			theme: 'dark'
		});
		setTimeout(function () {


			let pSubject = $('#subject').val();
			//Frm檢查
			//FrmSave
			//發起流程
			let oid = findFormOIDsOfProcess(frmType);
			if (oid.status == 'OK') {
				let template = getFormFieldTemplate(oid.data);
				if (template.status == 'OK') {

					let Process = invokeProcess(frmType, userid, Department, oid.data, pSubject, template.data);
					if (Process.status == 'OK') {
						alert('已產生' + Process.data + '單號');

					} else {
						alert(template.msg);
					}
				} else {
					alert(template.msg);
				}

			} else {
				alert(oid.msg);
			}
			$("body").loading("stop") // 停止
			window.location.href = 'index.html';
		}, 100);

	});
	$("#agreeBtn").on('click', function (e) { //繼續派送
		let msg = '簽核失敗';
		$('body').loading({
			message: 'Working...',
			theme: 'dark'
		});
		setTimeout(function () {
			let result = ajaxGetData(invokeURL + 'BPM_FLOW_STATUS', { UID: userid, ITEMOID: ITEMOID });
			if (result[0].result == undefined) {
				if (result[0].WORKITEM_CURRENTSTATE == 0) {
					result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
						acceptWorkItem: {
							pWorkItemOID: ITEMOID,
							pUserId: userid
						}
					});
					if (result[0].result == undefined) {
						result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
							completeWorkItem: {
								pWorkItemOID: ITEMOID,
								pUserId: userid,
								pComment: $('#subject').val()
							}
						});
						if (result[0].result == undefined) {
							msg = "簽核完成";
						} else { //completeWorkItem簽核失敗
							msg = "completeWorkItem:簽核失敗";
						}

					} else { //acceptWorkItem接收失敗
						msg = "acceptWorkItem:簽核失敗";
					}
				} else {
					result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
						completeWorkItem: {
							pWorkItemOID: ITEMOID,
							pUserId: userid,
							pComment: $('#subject').val()
						}
					});
					if (result[0].result == undefined) { //completeWorkItem簽核完成
						msg = "簽核完成";
						alert(msg);
						window.location.href = 'index.html';
					} else { //completeWorkItem簽核失敗
						msg = "completeWorkItem:簽核失敗";
					}
				}
			} else {  //completeWorkItem
				msg = "completeWorkItem:簽核失敗";
			}
			alert(msg);
			$("body").loading("stop") // 停止
			window.location.href = 'index.html';
		}, 100);
	});
	$("#returnBtn").on('click', function (e) { //退回重瓣
		let msg = '簽核失敗';
		$('body').loading({
			message: 'Working...',
			theme: 'dark'
		});
		setTimeout(function () {
			let result = ajaxGetData(invokeURL + 'BPM_FORM_RETURN_DATA', { formserialnumber: FORMSERIALNUMBER, uid: userid });
			if (result[0].result == undefined) {
				result = ajaxGetData(invokeURL + 'BPM_XMLWebServices', {
					reexecuteActivity: {
						pProcessSerialNo: result[0].PPROCESSSERIALNO,
						pAskReexecuteUserId: result[0].PASKREEXECUTEUSERID,
						pReexecuteActivityId: result[0].PREEXECUTEACTIVITYID,
						pReexecuteComment: $('#subject').val()
					}
				});
				if (result[0].result == undefined) { //reexecuteActivity簽核完成
					msg = "簽核完成";
					alert(msg);
					window.location.href = 'index.html';
				} else { //reexecuteActivity簽核失敗
					msg = "reexecuteActivity:簽核失敗";
				}
				alert(msg);

			} else {
				msg = '簽核失敗';
				alert(msg);
			}
			$("body").loading("stop") // 停止
			window.location.href = 'index.html';
		}, 100);
	});
	$("#backBtn").on('click', function (e) { //回工作清單
		//history.go(-1);
		window.location.href = 'index.html';
	});


}
/*---------------------Form Function Start--------------*/
function initFrm() { //init form



	initSubFrm();
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

/*---------------------Other Function End--------------*/