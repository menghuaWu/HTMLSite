
    /*=====================================Parameter Init Start=====================================*/     
    //var webapi="";
	var jsonParameter= "";
    var page = 1;
    var rows = 10;
    var jqGridURL;
    var listOfColumnModels = [];
    var listOfColumnNames = [];
    var savedGridConfig = "";
    var data = {};
    /*=====================================Parameter Init End==================================*/
    /*=====================================grid Function strat==================================*/
	function LoadGrid(gid,pid,npara){
			var api;
			setGridJsonParameter(npara);
			api = getParameters(jsonParameter)["api"];
			 
			 if (api == undefined || api == "") {
					//document.location.href = "index.html";
			} else {
				jqGridURL = invokeURL + api; //設定json Url
				
				showgrid(gid,pid); //設定jgrid
			}
		}
	function showgrid(gid, pid) { //設定COl屬性及ajax Json讀值
        var colSettings = {
            /*-------設定欄位屬性 Start--------------------*/
            cols: [{
                name: "SQL_SERVICE",
                width: 50,
                hidden: false,
                sortable: true,
                sorttype: "text",
                editable: true,
                edittype: "select",
                editoptions: {
                    value: {
                        '': '請選擇',
                        query: 'query',
                        oltp: 'oltp'
                    }
                },
                editrules: {
                    required: true,
                    edithidden: false
                },
                search: false
            }, {
                name: "SQL_CONTENT",
                width: 200,
                edittype: "textarea"
            }, {
                name: "BDFN002",
                edittype: "select",
                editoptions: {
                    value: {
                        SMT: 'SMT',
                        DIP: 'DIP'
                    }
                }
            }, {
                name: "Status",
                edittype: "select",
                editoptions: {
                    value: {
                        '': '請選擇',
                        Y: 'Y',
                        N: 'N'
                    }
                },
                editrules: {
                    required: true,
                    edithidden: false
                }
            }, {
                name: "Modify_User",
                hidden: true
            }, {
                name: "Modify_Date",
                hidden: true
            }, {
                name: "Create_User",
                hidden: true
            }, {
                name: "Create_Date",
                hidden: true
            }, {
                name: "YEAR",
                formatter: ""
            }]
        };
		console.log(jqGridURL);
		console.log(getParameters(jsonParameter));
        /*-------設定欄位屬性 End--------------------*/

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: jqGridURL,
            dataType: "json",
            data: JSON.stringify(getParameters(jsonParameter)),
            async: false,
            success: function(JSONdata) {
                    listOfColumnModels = [];
                    listOfColumnNames = [];
                    for (var prop in JSONdata[0]) {
                        if (JSONdata[0].hasOwnProperty(prop)) {
                            listOfColumnNames.push(prop);
                            var columnWidth = 40;
                            var editAble = true;
                            var editType = "";
                            var editOptions = "";
                            var editRules = JSON.stringify({
                                edithidden: true
                            });
                            var sortAble = true;
                            var sortType = "text";
                            var colHidden = false;
                            var format = "";
                            var curformat = currencyFmatter();
                            curformat = "";
                            var fromatOption = {};
                            var hAlign = "left";
                            colSettings.cols.forEach(function(e) {
                                if (prop.toUpperCase() == e.name.toUpperCase()) {
										columnWidth = (e.width == undefined ? columnWidth : e.width),
                                        sortAble = (e.sortable == undefined ? sortAble : e.sortable),
                                        sortType = (e.sorttype == undefined ? sortType : e.sorttype),
                                        editAble = (e.editable == undefined ? editAble : e.editable),
                                        editType = (e.edittype == undefined ? editType : e.edittype),
                                        editOptions = (e.editoptions == undefined ? editOptions : e
                                            .editoptions),
                                        editRules = (e.editrules == undefined ? editRules : e.editrules),
                                        colHidden = (e.hidden == undefined ? colHidden : e.hidden),
                                        format = (e.formatter == undefined ? curformat : e.formatter),
                                        hAlign = (e.halign == undefined ? hAlign : e.halign)
                                }
                            });
                            listOfColumnModels.push({
                                name: prop,
                                index: prop,
                                width: columnWidth,
                                sortable: true,
                                sorttype: sortType,
                                editable: editAble,
                                edittype: editType,
                                editoptions: editOptions,
                                editrules: editRules,
                                hidden: colHidden,
                                formatter: currencyFmatter,
                                align: hAlign,
                                cellattr: valueAttr
                            });
                        }
                    }
                    data = {
                        "page": "1",
                        "records": JSONdata.length,
                        "rows": JSONdata
                    };
                    //  Now we have our JSON data, and list of Column Headings and Models, we can create our jqGrid.
                    //CreateJQGrid(JSONdata, listOfColumnModels, listOfColumnNames);

                    CreateGrid(gid, pid);
					

                } // end of ajax post success
				
        });
		
    }
     
	function CreateGrid(gid, pid) { //建立及設定Grid
        var id = "#" + gid;
        $(id).jqGrid({
            //caption: jqGridURL.substring(jqGridURL.lastIndexOf("=")+1).toUpperCase(),                
            //url: jqGridURL,
            //mtype: "POST",
            //postData : JSON.stringify(gridPostData),
            //datatype: "json",
            //datatype: "local",
            datatype: 'jsonstring',
            datastr: data,
            //Used to read the data from json object and assign to JqGrid
            jsonReader: {
                root: "rows",
                page: "page",
                total: "total"
            },
            ignoreCase: true,
            styleUI: "Bootstrap",
            //iconSet: "glyph",
            // ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' },
            // ajaxEditOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' },
            colNames: listOfColumnNames,
            colModel: listOfColumnModels,
            viewrecords: true, // show the current page, data rang and total records on the toolbar
            //shrinkToFit: false,
            forceFit: true,
            rownumbers: true, //行號
            altRows: false, //奇偶列使用不同的背景色
            multiselect: false, // 顯示勾選框
            rowNum: rows,
            rowList: [],
            pager: pid,
            pagerpos: "left",
            //scroll:1, // no paging, 必須搭配height:300指定高度
            //sortname: "id",      //jqGrid預設排序欄位名稱
            sortorder: "asc", //jqGrid預設排序方式asc升冪，desc降冪
            //editurl: jqGridURL,
            loadonce: true,
            gridview: true,
            gridComplete: function() {
                //searchColumn = $('#jqGrid').jqGrid('getCol','name',true) //needed for live filtering search
            },
            loadComplete: function(data) {
                reSizejqGridWidth(gid); //Load完資料也要重新改變寬度才保險										
                //$('#jqGrid').jqGrid('setGridParam',{datatype:'local'});
                //$('#jqGrid').jqGrid('setGridParam',JSON.stringify(savedGridConfig));
            },
            height: "auto",
            onPaging: function(pgButton) {},
            onSortCol: function(index, columnIndex, sortOrder) {},
            beforeSaveRow: function(options, rowid) {},
			onSelectRow:function(rowid, status){ //點擊行
				gridRowClickActive(gid,rowid,status); //可自定義的function
			}
        });
        var isEditable = chkGridEditable();
        $(id).navGrid("#" + pid, {
            edit: isEditable["Update"],
            add: isEditable["Insert"],
            del: isEditable["Delete"],
            view: false,
            search: true,
            refresh: true,
            beforeRefresh: function() {
                //$('#jqGrid').jqGrid('setGridParam',{datatype:'json',url:jqGridURL,mtype:'POST',postData:JSON.stringify({}),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }});													  
                $.jgrid.gridUnload(gid);
                showgrid(gid, pid);
            }
        }, {
            url: jqGridURL.replace(new RegExp('List$'), 'Update'),
            focusField: 0,
            closeOnEscape: true,
            ajaxEditOptions: {
                contentType: "application/json"
            },
            width: '800',
            recreateForm: true,
            serializeEditData: function(postData) {
                listOfColumnNames.forEach(function(item, index, array) {
                    postData['old_' + item] = $(id).jqGrid('getCell',
                        postData.id, item);
                });
                return JSON.stringify(postData);
            },
            savekey: [true, 13],
            afterSubmit: function(response, postdata) {
                $(id).jqGrid('setGridParam', {
                    datatype: 'json',
                    url: jqGridURL,
                    mtype: 'POST',
                    postData: JSON.stringify({}),
                    ajaxGridOptions: {
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json'
                    }
                });
                $(id).jqGrid().trigger("reloadGrid", [{
                    page: 1
                }]);
            },
            closeAfterEdit: true
        }, {
            url: jqGridURL.replace(new RegExp('List$'), 'Insert'),
            reloadAfterSubmit: true,
            closeAfterAdd: true,
            focusField: 0,
            closeOnEscape: true,
            ajaxEditOptions: {
                contentType: "application/json"
            },
            serializeEditData: function(postData) {
                return JSON.stringify(postData);
            },
            savekey: [true, 13],
            afterSubmit: function(response, postdata) {
                $(id).jqGrid('setGridParam', {
                    datatype: 'json',
                    url: jqGridURL,
                    mtype: 'POST',
                    postData: JSON.stringify({
                        page: 1
                    }),
                    ajaxGridOptions: {
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json'
                    }
                }).trigger('reloadGrid');
                $(id).jqGrid().trigger("reloadGrid", [{
                    page: 1
                }]);
            }
        }, {
            url: jqGridURL.replace(new RegExp('List$'), 'Delete'),
            reloadAfterSubmit: true,
            closeOnEscape: true,
            ajaxDelOptions: {
                contentType: "application/json"
            },
            savekey: [true, 13],
            closeAfterEdit: true,
            reloadAfterSubmit: true,
            serializeDelData: function(postData) {
                listOfColumnNames.forEach(function(item, index, array) {
                    postData['old_' + item] = $(id).jqGrid('getCell',
                        postData.id, item);
                });
                return JSON.stringify(postData);
            },
            afterSubmit: function(response, postdata) {
                $(id).jqGrid('setGridParam', {
                    datatype: 'json',
                    url: jqGridURL,
                    mtype: 'POST',
                    postData: JSON.stringify({
                        page: 1
                    }),
                    ajaxGridOptions: {
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json'
                    }
                }).trigger('reloadGrid');
                $(id).jqGrid().trigger("reloadGrid", [{
                    page: 1
                }]);
                return [true];
            }
        }, {
            closeOnEscape: true,
            searchOnEnter: true,
            sopt: ['eq', 'ne', 'cn', 'bw', 'ew', 'nu', 'nn'],
            multipleSearch: true,
            groupOps: [{
                op: "AND",
                text: "AND"
            }, {
                op: "OR",
                text: "OR"
            }],
            closeAfterSearch: true,
            defaultSearch: 'cn'
        }).navButtonAdd("#" + pid, {
            caption: "",
            title: '匯出Excel',
            id: "btnXls",
            buttonicon: "glyphicon glyphicon-download-alt",
            onClickButton: function() {
                exp2xls(gid);
            },
            position: "last",
            sepclass: "ui-separator",
            sepcontent: "&nbsp;&nbsp;"
        });
    }
	
	function chkGridEditable() {
        var webapi="";
		var vars = {
            Insert: false,
            Update: false,
            Delete: false
        };
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: invokeURL + "ChkListEditable",
            dataType: "json",
            data: JSON.stringify({
                p: webapi
            }),
            async: false,
            success: function(JSONdata) {
                var listname = webapi.replace('List', '');
                JSONdata.forEach(function(item) {
                    if (item.SERVICE_CODE == listname + "Insert") {
                        vars["Insert"] = true;
                    } else if (item.SERVICE_CODE == listname + "Update") {
                        vars["Update"] = true;
                    } else if (item.SERVICE_CODE == listname + "Delete") {
                        vars["Delete"] = true;
                    }
                });
            }
        });
        return vars;
    }
	
	
	function currencyFmatter(cellvalue, options, rowObject) {
        var new_format_value = cellvalue;
        if (new_format_value == null) {
            new_format_value = "";
        }
        if ($.isNumeric(new_format_value)) {
            new_format_value = cellvalue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        return new_format_value;
    }
	
	function exp2xls(gid) { //設定下載
        var id = "#" + gid;
        $(id).jqGrid("exportToExcel", {
            includeLabels: true,
            includeGroupHeader: true,
            includeFooter: true,
            fileName: $(id).jqGrid('getGridParam').caption + ".xlsx",
            maxlength: 80 // maxlength for visible string data 
        });
    }
	
	function valueAttr(rowId, cellValue, rawObject, cm, rdata) {
        var re = new RegExp(",", "g");
        var oriValue = cellValue.replace(re, "");
        if ($.isNumeric(oriValue)) {
            if (oriValue < 0) {
                return " style='color: red;text-align: right;content:  ,'";
            } else {
                return " style='text-align: right'";
            }
        }
    }
	function reSizejqGridWidth(gid) {
        //重新抓jqGrid容器的新width
        let newWidth = $("#"+gid).closest(".ui-jqgrid").parent().width() - 5;
        //是否縮齊column(相當於shrinkToFit)
        let shrinkToFit = true;
        $("#"+gid).jqGrid("setGridWidth", newWidth, shrinkToFit);
    }

    function createField(name, op, data) {
        var field = '{\"field\":\"' + name + '\",\"op\":\"' + op + '\",\"data\":\"' + data + '\"}';
        return field;
    }

    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgba(" + r + "," + g + "," + b + ",0.7)";
    };
	function GridRefresh(gid, npara) //更新資料
    { // para="api=CYCLOPS_4_4_SMTERPDRWODetial&WORKDATE=20191030";
        jsonParameter = npara;
		console.log("gid:"+gid);
		console.log("jsonParameter:"+jsonParameter);
        var id = "#" + gid;
        $(id).jqGrid('clearGridData');
        $(id).jqGrid('setGridParam', {
            datatype: 'json',
            url: jqGridURL,
            mtype: 'POST',
            postData: JSON.stringify(getParameters(jsonParameter)),
            ajaxGridOptions: {
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            }
        });
        $(id).jqGrid().trigger("reloadGrid", [{
            page: 1
        }]);

    }
	/*=====================================grid Function End=====================================*/


    function setGridJsonParameter(para)
	{
		jsonParameter=para;
	}



