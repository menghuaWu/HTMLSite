//jqgrid include
document.write("<script src='/DBSWeb/API/Guriddo_jqGrid_JS_5.4.0/js/jquery.jqGrid.min.js'></script>");
document.write("<script src='/DBSWeb/API/Guriddo_jqGrid_JS_5.4.0/js/i18n/grid.locale-en.js'></script>");
//document.write("<link rel='stylesheet' type='text/css'  href='API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid.css'/>");

document.write("<link rel='stylesheet' type='text/css' href='/DBSWeb/API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid-bootstrap4.css'></link>");
document.write("<link rel='stylesheet' type='text/css' media='screen' href='/DBSWeb/Module/css/jQgridUI.css' />");
//jzip
document.write("<script type='text/ecmascript' src='/DBSWeb/js/jszip.min.js'></script>");

(function ($) {
    //$.jgrid.defaults.styleUI = 'Bootstrap4';
   // $.jgrid.defaults.iconSet = 'fontAwesome';
    //$.jgrid.defaults.responsive = true; //自動響應
    $.fn.createJqGrid = function (options) {
        let defaults = {
            gid: this.attr('id'),
            //datatype: 'json',
            datatype: 'local',
            mtype: 'POST',
            rowNum: 10,
            rowList: [10, 20, 30, 40, 50],
            height: "auto",
            autoHeight: true,
            ignoreCase: true, //搜尋不分大小寫
            viewrecords: true,
            recordpos: 'right',
            rownumbers: true, //行號
            rownumWidth: 50,
            pagerpos: "center",
            altRows: true,
            autowidth: true,
            shrinkToFit: false,
            colMenu: true,
            emptyrecords: 'Nothing to display',
            del: false,
            delOption: {},
            add: false,
            addOption: {},
            edit: false,
            editOption: {},
            search: true,
            searchOption: {},
            refresh: true,
            view: false,
            viewOption: {},
            xls: false,
            //loadonce: true, // this is just for the demo
            // sortorder: "desc",
            hoverrows: true, // true by default, can be switched to false if highlight on hover is not needed
            //viewsortcols: true,
            multiselect: false,
            ajaxGridOptions: {
                contentType: 'application/json; charset=utf-8'
            },
            serializeGridData: function (postData) {
                return JSON.stringify(postData);
            },
            jsonReader: {
                // id: "rn", //rn序列號欄位名，將序列設為key
                root: function (obj) {

                    return obj;
                },
                page: function (obj) {
                    return 1;
                },
                total: function (obj) {
                    return 1;
                },
                records: function (obj) {
                    return obj.length;
                },
                repeatitems: false

            },
            loadComplete: function (xhr) {
                let $self = $(this);
                $self.jqGrid('setLabel', 'rn', 'ID', {
                    'text-align': 'center',
                    'vertical-align': 'middle'
                }, '');
                // remove error div if exist
                $('#' + this.id + '_err').remove();

            },
            loadError: function (jqXHR, textStatus, errorThrown) {
                // remove error div if exist
                $('#' + this.id + '_err').remove();
                // insert div with the error description before the grid
                $(this).closest('div.ui-jqgrid').before(
                    '<div id="' + this.id + '_err" style="max-width:' + this.style.width +
                    ';"><div class="ui-state-error ui-corner-all" style="padding:0.7em;float:left;">' +
                    decodeErrorMessage(jqXHR, textStatus, errorThrown) +
                    '</div><div style="clear:left"/></div>'
                );
            }

        };
        $.extend($.jgrid.defaults, {
            styleUI: 'Bootstrap4',
            iconSet: "fontAwesome",
            responsive: true
        });
        let gridOptions = $.extend(false, defaults, options);

        /*jQuery.extend($.fn.fmatter, {
            password: function (cellvalue, options, rowdata) {
                return "************************";
            }
        });*/
        setGrid(gridOptions);
    };
    var decodeErrorMessage = function (jqXHR, textStatus, errorThrown) {
        var htmlBody, errorInfo, i, errorText = '',
            errorIconSpan = '<span class="ui-icon ui-icon-alert" style="float:left; display: inline-block; margin-right: .3em;"></span>';
        if (textStatus) {
            errorText = textStatus;
        }
        if (errorThrown) {
            if (errorText.length > 0) {
                errorText += '<hr/>';
            }
            errorText += errorThrown;
        }
        if (typeof (jqXHR.responseText) === "string") {
            if (jqXHR.responseText.charAt(0) === '[') {
                try {
                    errorInfo = $.parseJSON(jqXHR.responseText);
                    errorText = "";
                    for (i = 0; i < errorInfo.length; i += 1) {
                        if (errorText.length !== 0) {
                            errorText += "<hr/>";
                        }
                        errorText += errorInfo[i].Source + ": " + errorInfo[i].Message;
                    }
                } catch (e) {}
                errorText = errorIconSpan + errorText;
            } else {
                htmlBody = /<body.*?>([\s\S]*)<\/body>/i.exec(jqXHR.responseText);
                if (htmlBody !== null && htmlBody.length > 1) {
                    errorText = htmlBody[1];
                }
            }
        } else {
            errorText = errorIconSpan + errorText;
        }
        return '<div style="float:left">' + errorText + '</div>';
    };
    var getGridDefinitCol = function (options, data) {
        let colSettings;
        $.ajax({ //ajax start
            type: 'POST',
            url: options.gridDefColionUrl,
            async: false,
            dataType: 'json',
            error: function (oResult, textStatus, errorThrown) {
                colSettings = setColModel(data, [], options);
            },
            success: function (result) { //success start

                colSettings = setColModel(data, result.cols, options);
            } //success end

        });
        return colSettings;
    }

    var setColModel = function (jsonData, cols, options) {
        let colDefaults = {
            index: '',
            name: '',
            label: '',
            // width: 150,
            editable: true,
            edittype: '',
            editoptions: '',
            editrules: {
                required: true,
                edithidden: true
            }, //編輯規則
            sorttype: 'text',
            hidden: false,
            align: 'left'

        };
        let colOption = {};

        let len = Object.keys(jsonData[0]).length;
        let listOfColumnModels = [];
        let listOfColumnName = [];
        //console.log(listOfColumnModels.len);
        if (len <= 0) return;
        for (let i = 0; i < len; i++) {
            let prop = Object.keys(jsonData[0])[i];
            let colModel = {};
            let colSelect = "";
            colModel.name = prop;
            colModel.index = prop;
            colModel.label = prop;
            colModel = $.extend(false, colDefaults, colModel);
            cols.forEach(function (e) {
                if (prop.toUpperCase() == e.name.toUpperCase()) {
                    colModel = $.extend(false, colModel, e);
                    if (e.edittype == "custom") { //檢查是否屬性
                        //e.editoptions.custom_element=eval(e.editoptions.custom_element);
                        //e.editoptions.custom_value =eval(e.editoptions.custom_value);

                        e.editoptions.custom_element = options.colFunction[e.editoptions.custom_element];
                        e.editoptions.custom_value = options.colFunction[e.editoptions.custom_value];
                        //console.log(e.editoptions.custom_element);
                        if ("dataEvents" in e.editoptions) {
                            e.editoptions.dataEvents.fn = options.colFunction[e.editoptions.dataEvents.fn];
                        }
                    }
                    if ("editoptions" in e) {

                        if ("dataUrl" in e.editoptions) { //檢查是否屬性
                            if (!("postdata" in e.editoptions)) {
                                e.editoptions.postdata = {};
                            }
                            colSelect = "";
                            let data = getAjaxData(e.editoptions.dataUrl, e.editoptions.postdata);
                            if (data.length > 0) {
                                data.forEach(function (item) {

                                    colSelect += Object.values(item) + ":" + Object.values(item)[0] + ";";
                                });
                                colModel.editoptions = {
                                    "value": colSelect.substr(0, colSelect.length - 1)
                                };
                                // console.log(colModel);

                            }
                        }

                    }
                    //console.log(colSelect);              
                }

            });
            //colDefaults
            listOfColumnName.push(prop);
            listOfColumnModels.push(colModel);

        }


        colOption.colNames = listOfColumnName;
        colOption.colModel = listOfColumnModels;
        return colOption;
    }

    function setGrid(options) {
        $self = $('#' + options.gid);
        let colOption = {}
        if (options.gridDefinitionUrl != null && options.gridDefinitionUrl != '') {

            $.ajax({ //ajax start
                type: 'POST',
                url: options.gridDefinitionUrl,
                async: true,
                data: JSON.stringify(options.gridDefPostData),
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                error: function (oResult, textStatus, errorThrown) {
                    console.log(oResult);
                },
                success: function (result) { //success start
                    console.log(result);
                    colOption = getGridDefinitCol(options, result);
                    options.colNames = colOption.colNames;
                    options.colModel = colOption.colModel;
                    $self.jqGrid(options);
                    // show loading message
                    $self[0].grid.beginReq();
                    //$self[0].addJSONData(result);
                    $self.jqGrid('setGridParam', {
                        data: result
                    });
                    // hide the show message
                    $self[0].grid.endReq();
                    // refresh the grid
                    $self.trigger('reloadGrid');
                    //set Pager
                    setPager(options);
                } //success end


            }); //ajax end
        } else {
            //set grid
            $self.jqGrid(options);
            //set Pager
            setPager(options);
        }
    }

    function setPager(options) {
        let prmView = {};
        let prmSearch = { //Seach option
            // { multipleSearch: true, multipleGroup: true,odata:[{oper:"eq",text:"=   "}] }
            multipleSearch: true,
            multipleGroup: true
        };
        let prmDel = { //delete Options. save key parameter will keybind the Enter key to submit.
            deleteCaption: "delete Post",
            deletetext: "Delete Post",
            //url:options.delOption.delurl,
            url: '/',
            ajaxEditOptions: {
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            },
            /*  delData:{function (){
                  let d=$self.jqGrid('getGridParam', 'selrow');
                 
              }},*/
            /*serializeDelData: function (postdata) { 
                return {id: postdata.id, oper: postdata.oper, pub_Id:postdata.id}; // the body MUST be empty in DELETE HTTP requests 
},*/
            closeOnEscape: true,
            closeAfterEdit: true,
            savekey: [true, 13],
            //errorTextFormat: commonError, 
            width: "500",
            //reloadAfterSubmit: true,  
            top: "60",
            left: "5",
            right: "5",

            afterSubmit: function (response, postdata) {
                let url = $(this).getGridParam('delOption').delurl;
                return DeletePost(response, postdata, url, this);

            }
        };
        let prmAdd = { //add Options. save key parameter will keybind the Enter key to submit.
            addCaption: "Add Post",
            addtext: "Add",
            closeOnEscape: true,
            closeAfterAdd: true,
            savekey: [true, 13],
            url: options.addOption.addurl,
            ajaxEditOptions: {
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            },
            serializeEditData: function (postData) {
                return JSON.stringify(postData);
            },
            //errorTextFormat: commonError, 
            width: options.addOption.width,
            reloadAfterSubmit: true,
            //bottominfo: "Fields marked with (*) are required",
            top: "60",
            left: "5",
            right: "5",
            afterSubmit: function (response, postdata) {
                return AddPost(response, postdata, this);
            }
        };
        let prmEdit = { //Edit Options. save key parameter will keybind the Enter key to submit.      
            url: options.editOption.editurl,
            ajaxEditOptions: {
                contentType: 'application/json; charset=utf-8',
                dataType: 'json'
            },
            serializeEditData: function (postData) {
                let rowData = $(this).jqGrid('getRowData', postData.id);
                Object.keys(rowData).forEach(function (item) {
                    postData['OLD_' + item] = rowData[item];
                });

                return JSON.stringify(postData);
            },

            editCaption: "Edit Post",
            edittext: "Edit",
            closeOnEscape: true,
            closeAfterEdit: true,
            savekey: [true, 13],
            //errorTextFormat: commonError, 
            width: options.editOption.width,
            reloadAfterSubmit: true,
            top: "60",
            left: "5",
            right: "5",
            // beforeSubmit:checkBranch,
            afterSubmit: function (response, postdata) {

                return EditPost(response, postdata, this);
            }
        };

        let $self = $('#' + options.gid);
        $self.jqGrid('setGridParam', {
            url: options.gridDefinitionUrl,
            postData: options.gridDefPostData,
            datatype: 'json',
            loadonce: true
        });
        prmEdit = $.extend(false, prmEdit, options.editOption);
        prmAdd = $.extend(false, prmAdd, options.addOption);
        prmDel = $.extend(false, prmDel, options.delOption);
        prmSearch = $.extend(false, prmSearch, options.seachOption);
        prmView = $.extend(false, prmView, options.viewOption);
        $self.jqGrid('navGrid', options.pager, {
                edit: options.edit,
                add: options.add,
                del: options.del,
                search: options.search,
                refresh: options.refresh,
                view: options.view,
                position: "left",
                cloneToTop: false,
            },
            prmEdit, prmAdd, prmDel, prmSearch, prmView);

        if (options.xls) {
            addXls($self, options.pager)
        }





    }

    function commonError(data) {
        // return "Error Occured during Operation. Please try again";
    }

    function EditPost(response, postdata, table) {
        let Resp;
        $(table).refreshGrid();

        Resp = jQuery.parseJSON(response.responseText);
        if (Resp[0].result == "ok") {
            return [true, "OK", "Edit a completed data!"];
        } else {
            return [false, Resp[0].result];
        }

    }

    function AddPost(response, postdata, table) {
        let Resp;
        Resp = jQuery.parseJSON(response.responseText);
        if (Resp[0].result == "ok") {
            $(table).refreshGrid();
            return [true, "OK", "Add a completed data!"];
        } else {
            return [false, Resp[0].result];
        }
    }

    function DeletePost(response, postdata, url, table) {
        let Resp;
        let rowData = $(table).jqGrid('getRowData', postdata.id);
        Object.keys(rowData).forEach(function (item) {
            postdata["OLD_" + item] = rowData[item];
        });

        Resp = getAjaxData(url, postdata);
        $(table).refreshGrid();
        if (Resp[0].result == "ok") {
            return [true, "OK", "Delete a completed data!"];
        } else {
            return [false, Resp[0].result];
        }
    }

    function addXls(grid, pager) {
        $(grid).navButtonAdd(pager, {
            caption: "",
            title: '匯出Excel',
            id: "btnXls",
            buttonicon: "fas fa-file-download",
            onClickButton: function () {
                $(grid).jqGrid("exportToExcel", {
                    includeLabels: true,
                    includeGroupHeader: true,
                    includeFooter: true,
                    fileName: $(grid).jqGrid('getGridParam').caption + ".xlsx",
                    maxlength: 80 // maxlength for visible string data 
                });
            },
            position: "last",
            sepclass: "ui-separator",
            sepcontent: "&nbsp;&nbsp;"
        });
    }
    $.fn.searchByGrid = function (colname, searchString) {

        let grid_selector = "#" + this[0].id;
        let $grid = $(grid_selector);
        //  Prepare to pass a new search filter to our jqGrid
        let f = {
            groupOp: "AND",
            rules: []
        };

        f.rules.push({
            field: colname, //欄位名稱
            op: "eq", //=
            data: searchString
        });

        $grid[0].p.search = f.rules.length > 0;
        $.extend($grid[0].p.postData, {
            filters: JSON.stringify(f)
        });
        $grid.trigger("reloadGrid", [{
            page: 1
        }]);
        /*    另外一種寫法
              var grid = jQuery("#Grid2"); 
              var postdata = grid.jqGrid('getGridParam','postData');
              jQuery.extend (postdata,
                 {filters:'',
                  searchField: 'error_column',
                  searchOper: 'eq',
                  searchString: 'Test'});
                  grid.jqGrid('setGridParam', { search: true, postData: postdata });
                  grid.trigger("reloadGrid",[{page:1}]);
          */
    }
    $.fn.refreshGrid = function () {
        let url = $(this).getGridParam('url');
        let pData = $(this).getGridParam('postData');
        let result = getAjaxData(url, pData);
        $(this).setGridParam({
                datastr: result,
                datatype: "jsonstring" // !!! reset datatype
            })
            .trigger("reloadGrid");
    };
    $.fn.searchThisGrid = function (url, postData) {
        let result = getAjaxData(url, postData);
        if (!showError('#' + this.id, result)) {
            console.log("1");
            $(this).setGridParam({
                    datastr: result,
                    datatype: "jsonstring" // !!! reset datatype
                })
                .trigger("reloadGrid");
        }

    };

    function contextMenu() {
        $(this).contextMenu('contextMenu', {
            menuStyle: {
                width: "150px"
            },
            bindings: {
                'edit': function (t) {
                    alert("Edit Row Command Selected");
                },
                'add': function (t) {
                    alert("Add Row Command Selected");
                },
                'del': function (t) {
                    alert("Delete Row Command Selected");
                }
            },
            onContextMenu: function (event, menu) {
                var rowId = $(event.target).parent("tr").attr("id")
                var grid = $("#jqGrid");
                grid.setSelection(rowId);

                return true;
            }
        });
    }

    function getAjaxData(strUrl, postData) {
        let data = [];
        $.ajax({ //ajax start
            type: 'POST',
            url: strUrl,
            async: false,
            data: JSON.stringify(postData),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            error: function (oResult, textStatus, errorThrown) {
                if (oResult.status === 401) {
                    console.log("statusCode 401 called");
                } else if (oResult.status === 449) {
                    console.log("statusCode 449 called");
                } else {
                    console.log(oResult.status);
                }
                //data = jQuery.parseJSON(oResult.responseText);
                data = {
                    oResult: oResult,
                    textStatus: textStatus,
                    errorThrown: errorThrown
                };


            },
            success: function (result) { //success start	
                data = result;

            } //success end


        }); //ajax end
        //console.log(data);
        return data;
    }

    function showError(id, jqXHR, textStatus, errorThrown) {
        // remove error div if exist
        let $self = $('#' + id);
        $('#' + id + '_err').remove();
        // insert div with the error description before the grid
        $self.closest('div.ui-jqgrid').before(
            '<div id="' + id + '_err" style="max-width:' + $self.style.width +
            ';"><div class="ui-state-error ui-corner-all" style="padding:0.7em;float:left;">' +
            decodeErrorMessage(jqXHR, textStatus, errorThrown) +
            '</div><div style="clear:left"/></div>'
        );
    }

})(jQuery);