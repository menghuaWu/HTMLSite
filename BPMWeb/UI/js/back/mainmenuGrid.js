/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var fname;
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
        caption: "" +
            "<INPUT TYPE='button' NAME='btnLCreateWO1' ID='btnLCreateWO1' VALUE='核准' style='color:black;font-size:12px'>" +
            "<INPUT TYPE='button' NAME='btnLUpdSNMACY' ID='btnLUpdSNMACY1' VALUE='批退' style='color:black;font-size:12px'>" 
           ,
        gid: 'jqGrid1',
        pager: '#jqGrid1Pager',
        shrinkToFit: true,
       // colAPI: 'RMA_WOL7NotCreated', //set colModel index
        gridDefinitionUrl: apiurl + 'EFS_ONEFORM_LIST',
        gridSubinitionUrl: invokeURL + 'CYCLOPS_1_1_BACKLOG_OE_List',
        //gridDefColionUrl: 'json/unSchedule.json',
        gridDefPostData: {

        },
        subGridOptions : {
            // configure the icons from theme rolloer
            plusicon: "fa-arrow-alt-circle-right ",
            minusicon: "fa-arrow-alt-circle-down "
            //openicon: "ui-icon-arrowreturn-1-e"
        },
        multiselect: true,
        subGrid: true,
        subGridRowExpanded: showChildGrid1,   
      
        edit: false,
        search: true,
        refresh: true,
        xls: true


    }
];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () { //form load function

    apiLogin('102759', '#EricChen0764', '');
    fname=getencodeUrlVars()['fname'];
    initFrm();




});










/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

  
  
    createGrid(0);

}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid
    let options = {};


    let $grid;

    $grid = $('#' + gridList[id].gid);
    $.jgrid.gridUnload(gridList[id].gid);
    options = gridList[id];
    switch (id) {
        case 0:
            options.gridDefPostData = {
                UID: '104564',
                processinstancename: fname
            };
            $grid.createJqGrid(options);

            break;
       
    }









}

function showChildGrid1(parentRowID, parentRowKey) {

    let $grid;

    let row = $('#' + gridList[0].gid).jqGrid('getRowData', parentRowKey);

    let childGridID = parentRowID + "_table";
    let childGridPagerID = parentRowID + "_pager";
    let options = { //grid初始化參數
        caption: "待開立工單(整新)" +
            "<INPUT TYPE='button' NAME='" + parentRowID + "btnLCreateWO1' ID='" + parentRowID + "btnLCreateWO1' VALUE='開立工單' style='color:black;font-size:12px'>" +
            "<INPUT TYPE='button' NAME='" + parentRowID + "btnLUpdSNMACY' ID='" + parentRowID + "btnLUpdSNMACY1' VALUE='分配SN/MAC(Y)' style='color:black;font-size:12px'>" +
            "<INPUT TYPE='button' NAME='" + parentRowID + "btnLUpdSNMACN' ID='" + parentRowID + "btnLUpdSNMACN1' VALUE='分配SN/MAC(N)' style='color:black;font-size:12px'>",
        gid: childGridID,
        pager: '#' + childGridPagerID,
        shrinkToFit: true,
        colAPI: 'RMA_WOSingleNotCreated', //set colModel index
        fixedColFDb: true, //set db
        gridDefinitionUrl: invokeURL + 'RMA_WOSingleNotCreated',
        //gridDefColionUrl: 'json/unSchedule.json',
        gridDefPostData: {
            RMA001: row['RMA001'],
            RMA008: row['RMA008'],
            SKU001: row['SKU001'],
            SKU002: row['SKU002'],
            RMA013: row['RMA013'],
            RMA015: row['RMA015'],
            LOGINUSER: loginuser
        },
        multiselect: true,
        // multiboxonly:true,
        editOption: {
            editurl: invokeURL + "RMA_WONotCreatedSingleUpdate"

        },
        edit: true,
        search: true,
        refresh: true,
        xls: true,
        gridComplete: function () {
            // $('#jqgh_jqGrid1_cb').hide();
            $(this).contents().find(".ui-row-ltr").each(function (index, tr) {
                if (tr.childNodes[2].innerText != "Create WO") {
                    tr.childNodes[1].childNodes[0].disabled = true;
                    $(tr.childNodes[1].childNodes[0]).css("cursor", "not-allowed");


                }
            });
            $(this).contents().find(".ui-row-ltr").click(function () {
                if (this.childNodes[2].innerText != "Create WO") {
                    return false;
                }
            });

        }
    };
    $('#' + parentRowID).append('<table id=' + childGridID + '></table><div id=' + childGridPagerID + ' class=scroll></div>');
    $grid = $('#' + childGridID);
    console.log('row', row);
    $grid.createJqGrid(options);
    $('#' + parentRowID + 'btnLCreateWO1').off('click');
    $('#' + parentRowID + 'btnLUpdSNMACY').off('click');
    $('#' + parentRowID + 'btnLUpdSNMACN').off('click');

    $('#' + parentRowID + 'btnLCreateWO1').on('click', function () {
		if($('#FactoryID').val()=="" ||  $('#FactoryID').val()==null){
			alert("未選擇廠別!!!");
		}else{
			if (confirm("Are you sure?")) {
				CreateSingleWO(childGridID, 'Refurbish');
			}
		}

    });
    $('#' + parentRowID + 'btnLUpdSNMACY1').on('click', function () {

        if (confirm("Are you sure?")) {
            EditSingleSNMAC(childGridID, 'Y');
        }

    });
    $('#' + parentRowID + 'btnLUpdSNMACN1').on('click', function () {

        if (confirm("Are you sure?")) {
            EditSingleSNMAC(childGridID, 'N');
        }

    });




}


/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/

/*---------------------Other Function End--------------*/