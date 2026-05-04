//jqgrid include
document.write('<script src="js/jquery.jqGrid.min.js"></script>');
document.write('<script src="js/grid.locale-en.js"></script>');
document.write('<link rel="stylesheet" type="text/css"  href="css/ui.jqgrid.css"/>');
//bootstrap include
document.write('<script src="js/bootstrap.min.js"></script>');
document.write('<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"></link>');
document.write('<link rel="stylesheet" type="text/css" href="css/ui.jqgrid-bootstrap.css"></link>');
/*==================initGrid Start ======================e=====================*/
function reSizejqGridWidth(gid) {
    let grid_selector = "#" + gid;
    let $grid = jQuery(grid_selector);
    //重新抓jqGrid容器的新width
    let newWidth = $grid.closest(".ui-jqgrid").parent().width();
    //是否縮齊column(相當於shrinkToFit)
    let shrinkToFit = false;
    $grid.jqGrid("setGridWidth", newWidth, shrinkToFit);
}
/*==================initGrid Start ======================e=====================
                   gid=jqGrid1
                   pid=jqGridPager1
                   urlstr=https://webapitest.senao.com/DBSWeb/cyclops_3_4_APSinSLine.html   
                  parameter={api: "CYCLOPS_4_4_SMTSFCDR", WORKDATE: "20101101"}
                  */
function initGrid(gid, pid, urlstr, parameter) {
    let api = parameter["api"];
    let jsonURL = urlstr + api; //設定json Url
    let data = ajaxGetData(jsonURL, parameter);
    let myGrid = new jqgridTypeA(gid, pid);
    myGrid.InitGrid(data);
    reSizejqGridWidth(gid);


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

jqgridTypeA.prototype.InitGrid = function(JSONdata) { //初始化及建立Grid

    /**找出欄位**/
    let listOfColumnModels = [];
    let iskey = false;
    let len = Object.keys(JSONdata[0]).length;
    if (len <= 0) return;
    for (let i = 0; i < len; i++) {
        iskey = (i == 0);

        let value = {
            label: Object.keys(JSONdata[0])[i],
            name: Object.keys(JSONdata[0])[i],
			index: Object.keys(JSONdata[0])[i],
            align: "right",
            key: iskey
                //width: 75
        };
        listOfColumnModels.push(value);

    }
    // console.log(listOfColumnModels);
    let data = {
        "page": "1",
        "total": JSONdata.length,
        "rows": JSONdata
    };
    //console.log(gdata);

    jQuery("#" + this.gid).jqGrid({
        // url: ctx + '/JSONData',
        //datatype: "json",
        datatype: 'jsonstring',
        datastr: data,
        jsonReader: {
            root: "rows",
            page: "page",
            total: "total"
        },
        colModel: listOfColumnModels,
        ignoreCase: true, //搜尋不分大小寫
        // styleUI: 'Bootstrap', //設定jqgrid的全域性樣式為bootstrap樣式
        sortname: listOfColumnModels[0],
        viewrecords: true, //顯示總筆數
        sortorder: "asc",
        sortable: true,
        multiselect: false,
        // width: $(window).width() - 80,
        //width: '900px',
        height: "auto",
        autowidth: true,
        forceFit: true,
        rownumbers: true, //行號
        rownumWidth: true,
        altRows: true, //奇偶列使用不同的背景色
        loadonce: true,
        gridview: true,
        caption: "",
        pager: '#' + this.pid,
        pagerpos: "center",
        rowNum: this.rows,
        rowList: [10, 20, 30, 40, 50],
        recordpos: 'right',
        viewrecords: true,
        emptyrecords: "Nothing to display",
        loadComplete: function(data) {

        }


    });
    jQuery("#" + this.gid).jqGrid('navGrid', '#' + this.pid, {
        add: false,
        edit: false,
        del: false
    });

}

/*============================================= Class jqgridTypeA End======================================*/