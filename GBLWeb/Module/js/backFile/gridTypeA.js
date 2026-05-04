//jqgrid include
document.write("<script src='API/Guriddo_jqGrid_JS_5.4.0/js/jquery.jqGrid.min.js'></script>");
document.write("<script src='API/Guriddo_jqGrid_JS_5.4.0/js/i18n/grid.locale-en.js'></script>");
//document.write("<link rel='stylesheet' type='text/css'  href='API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid.css'/>");
document.write("<link rel='stylesheet' type='text/css' href='API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid-bootstrap4.css'></link>");
document.write("<link rel='stylesheet' type='text/css' media='screen' href='Module/css/jQgridUI.css' />");
document.write("<script type='text/ecmascript' src='js/jszip.min.js'></script>");
/*==================initGrid Start ======================e=====================*/

/*==================initGrid Start ======================e=====================
                   gid=jqGrid1
                   pid=jqGridPager1
                   urlstr=https://webapitest.senao.com/DBSWeb/cyclops_3_4_APSinSLine.html   
                  parameter={api: "CYCLOPS_4_4_SMTSFCDR", WORKDATE: "20101101"}
                  */
 
function initGrid(gid, pid, sid, caption, urlstr, parameter) {
    let api = parameter["api"];
    let jsonURL = urlstr + api; //設定json Url
    let data = ajaxGetData(jsonURL, parameter);
    console.log(data);

    let myGrid;
    if (Object.keys(data[0])[0] != "result") {
        myGrid = new jqgridTypeA(gid, pid);
        myGrid.setUrl(jsonURL,parameter);
        myGrid.InitGrid(caption, data);
      //  console.log(myGrid);
    }

    return myGrid;


}
/*==================initGrid end ======================e=====================

/*========================== searchByGrid Start======================================= 
               搜尋Grid內容
               sopt: null // ['bw','eq','ne','lt','le','gt','ge','ew','cn']
                  by default all options are allowed. The codes are as follow:
                 bw - begins with ( LIKE val% )
                 eq - equal ( = )
                 ne - not equal ( <> )
                 lt - little ( < )
                 le - little or equal ( <= )
                 gt - greater ( > )
                 ge - greater or equal ( >= )
                 ew - ends with (LIKE %val )
                 cn - contain (LIKE %val% )
 ==========================++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function searchByGrid(gname, colname, searchString) {

    let grid = $('#' + gname);
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

    grid[0].p.search = f.rules.length > 0;
    $.extend(grid[0].p.postData, {
        filters: JSON.stringify(f)
    });
    grid.trigger("reloadGrid", [{
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
/*========================== searchByGrid End======================================= 
 /*============================================= Class jqgridTypeA Start======================================*/
function jqgridTypeA(gid, pid) {
    this.gid = gid;
    this.pid = pid;
    this.cModel = [];
    this.rows = 10;
    this.urlStr = "";
    this.urlParaMeter = [];
    this.data = {};
}
jqgridTypeA.prototype.setUrl = function(url, Parameter) { //設定Url
    this.urlStr = url;
    this.urlParaMeter = Parameter;

}
jqgridTypeA.prototype.setColMode = function(cModel) { //設定Colmode
    this.cModel = cModel;
}
jqgridTypeA.prototype.setGridAttributes = function() { //設定Grid屬性

}
jqgridTypeA.prototype.reSizejqGridWidth = function() {
    const grid_selector = "#" + this.gid;
    const $grid = jQuery(grid_selector);
    //重新抓jqGrid容器的新width
    let newWidth = $grid.closest(".ui-jqgrid").parent().width();
    //是否縮齊column(相當於shrinkToFit)
    let shrinkToFit = false;

    $grid.jqGrid("setGridWidth", newWidth, shrinkToFit);
}

jqgridTypeA.prototype.InitGrid = function(title, JSONdata) { //初始化及建立Grid
    $.jgrid.defaults.iconSet = 'fontAwesome';
    /**找出欄位**/
    let listOfColumnModels = [];
    let iskey = false;
    let len = Object.keys(JSONdata[0]).length;
    let grid = jQuery("#" + this.gid);
    if (len <= 0) return;
    for (let i = 0; i < len; i++) {
        iskey = (i == 0);

        let value = {
            label: Object.keys(JSONdata[0])[i],
            name: Object.keys(JSONdata[0])[i],
            index: Object.keys(JSONdata[0])[i],
            align: "center",
            width: "150",
            key: iskey
                //width: 75
        };
        listOfColumnModels.push(value);

    }
    // console.log(listOfColumnModels);
    /*let data = {
        "page": "1",
        "total": JSONdata.length,
        "rows": JSONdata
    };*/
    //console.log(gdata);

    grid.jqGrid({
         url: 'local',
        //datatype: "json",
        datatype: 'jsonstring',
        datastr: JSONdata,
        /* jsonReader: {
             root: "rows",
             page: "page",
             total: "total"
         },*/
        jsonReader: {
           // id: "Id", //相當於設定主鍵
            //repeatitems: false,
            root: function(obj) { return obj; },
            page: function(obj) { return grid.jqGrid('getGridParam', 'page'); },
            total: function(obj) {
                return Math.ceil(obj.length /
                    grid.jqGrid('getGridParam', 'rowNum'));
            },
            records: function(obj) { return obj.length; }
        },
        colModel: listOfColumnModels,
        ignoreCase: true, //搜尋不分大小寫
        styleUI: 'Bootstrap4', //設定jqgrid的全域性樣式為bootstrap樣式
        sortname: listOfColumnModels[0],
        viewrecords: true, //顯示總筆數
        sortorder: "asc",
        sortable: true,
        multiselect: false,
        // width: $(window).width() - 80,
        //width: '800px',
        height: "auto",
        autowidth: true,
        shrinkToFit: false,
        forceFit: true,
        rownumbers: true, //行號
        rownumWidth: 30,
        altRows: true, //奇偶列使用不同的背景色
        loadonce: true,
        gridview: true,
        caption: title,
        pager: '#' + this.pid,
        pagerpos: "center",
        rowNum: this.rows,
        rowList: [10, 20, 30, 40, 50],
        recordpos: 'right',
        viewrecords: true,
        emptyrecords: "Nothing to display",

        /*beforeShowSearch: function($form) {
            var $searchDialog = $form.closest(".ui-jqdialog"),
                $gbox = $(this).closest(".ui-jqgrid");

            $searchDialog.insertBefore($gbox);
            $searchDialog.css({
                position: "relative",
                zIndex: "auto",
                padding: 0,
                float: "left",
                hight: "auto"
            });
            $searchDialog.children(".modal-dialog").css({
                marginTop: 0,
                marginBottom: 0
            });
            $searchDialog.find(".modal-content").css({
                boxShadow: "none"
            });
            $gbox.css({ clear: "left" });
        },*/
		gridComplete: function() {
			/*grid.setGridParam({
                 datatype: "json", // !!! reset datatype
                 loadonce: true,
                url:this.urlStr,                
                postData:JSON.stringify(this.urlParaMeter)

             });*/
            // grid.jqGrid('setGridParam',{datatype:'json',url:this.urlStr,mtype:'POST',postData:JSON.stringify(this.urlParaMeter),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }});	
		},
        loadComplete: function(data) {
            



            let resize = this.reSizejqGridWidth;

        }


    });

    grid.jqGrid('navGrid', '#' + this.pid, { edit: false, add: false, del: false }, {}, {}, {}, { multipleSearch: true, multipleGroup: true });
    grid.navButtonAdd('#' + this.pid,{
        caption:"",
        title: '匯出Excel',
        id : "btnXls", 
        buttonicon:"fas fa-file-download", 
        onClickButton: function(){
            grid.jqGrid("exportToExcel",{
                includeLabels : true,
                includeGroupHeader : true,
                includeFooter: true,
                fileName : grid.jqGrid('getGridParam').caption + ".xlsx",
                maxlength : 80 // maxlength for visible string data 
            });
        }, 
        position:"last",
        sepclass : "ui-separator", sepcontent: "&nbsp;&nbsp;"
    });
}

/*============================================= Class jqgridTypeA End======================================*/
/*$("#jqGrid").navGrid("#jqGridPager",
							{   edit: isEditable["Update"], add: isEditable["Insert"], del: isEditable["Delete"], view: false, search: true, refresh: true,
								beforeRefresh: function(){															  
									//$('#jqGrid').jqGrid('setGridParam',{datatype:'json',url:jqGridURL,mtype:'POST',postData:JSON.stringify({}),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }});													  
									$.jgrid.gridUnload("jqGrid");
									showgrid();
								}
							},
							{   url: jqGridURL.replace(new RegExp('List$'), 'Update'), focusField : 0, closeOnEscape:true, ajaxEditOptions: { contentType: "application/json" },
								width: '800',
								recreateForm: true,
								serializeEditData: function(postData) {
									listOfColumnNames.forEach(function(item, index, array){
										postData['old_'+item]=$('#jqGrid').jqGrid ('getCell', postData.id, item);
									});
									return JSON.stringify(postData);
								},
								savekey: [true, 13],
			               		afterSubmit: function(response, postdata){
									$('#jqGrid').jqGrid('setGridParam',{datatype:'json',url:jqGridURL,mtype:'POST',postData:JSON.stringify({}),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }});
									$('#jqGrid').jqGrid().trigger("reloadGrid", [{page:1}]);														
			               		},closeAfterEdit:true
			               	},
			               	{   url: jqGridURL.replace(new RegExp('List$'), 'Insert'), reloadAfterSubmit: true, closeAfterAdd: true, focusField : 0, closeOnEscape:true, ajaxEditOptions: { contentType: "application/json" },			               			   
								serializeEditData: function(postData) {
			                     	return JSON.stringify(postData);
			               		},
								savekey: [true, 13],
			               		afterSubmit: function (response, postdata)  {
									$('#jqGrid').jqGrid('setGridParam',{datatype:'json',url:jqGridURL,mtype:'POST',postData:JSON.stringify({page:1}),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }}).trigger('reloadGrid');
									$('#jqGrid').jqGrid().trigger("reloadGrid", [{page:1}]);
        	               		}
			               	},
			               	{  
								url: jqGridURL.replace(new RegExp('List$'), 'Delete'), reloadAfterSubmit: true, closeOnEscape:true, ajaxDelOptions: { contentType: "application/json" },
			               		savekey: [true, 13],			               				 
								closeAfterEdit:true,
								reloadAfterSubmit: true,
								serializeDelData: function(postData) {
									listOfColumnNames.forEach(function(item, index, array){
										postData['old_'+item]=$('#jqGrid').jqGrid ('getCell', postData.id, item);
									});
									return JSON.stringify(postData);
								},
								afterSubmit: function (response, postdata){												  	
									$('#jqGrid').jqGrid('setGridParam',{datatype:'json',url:jqGridURL,mtype:'POST',postData:JSON.stringify({page:1}),ajaxGridOptions: { contentType: 'application/json; charset=utf-8', dataType: 'json' }}).trigger('reloadGrid');
									$('#jqGrid').jqGrid().trigger("reloadGrid", [{page:1}]);													
									return [true];
								}												
			               	},
			               	{
								closeOnEscape: true, searchOnEnter: true,  sopt: ['eq', 'ne', 'cn', 'bw','ew','nu','nn'],
								multipleSearch: true,groupOps: [ { op: "AND", text: "AND" }, { op: "OR", text: "OR" } ], closeAfterSearch: true,
								defaultSearch: 'cn'												 
			               	}
						).navButtonAdd('#jqGridPager',{
							caption:"",
							title: '匯出Excel',
							id : "btnXls", 
							buttonicon:"glyphicon glyphicon-download-alt", 
							onClickButton: function(){exp2xls();}, 
							position:"last",
							sepclass : "ui-separator", sepcontent: "&nbsp;&nbsp;"
                        });*/
/*
                        function exp2xls(){
				$("#jqGrid").jqGrid("exportToExcel",{
					includeLabels : true,
					includeGroupHeader : true,
					includeFooter: true,
					fileName : $("#jqGrid").jqGrid('getGridParam').caption + ".xlsx",
					maxlength : 80 // maxlength for visible string data 
				});
			}

			$(window).on("resize", reSizejqGridWidth);						
		});  //end of document ready
                        */