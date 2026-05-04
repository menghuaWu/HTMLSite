/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var lineData = new Array();
var gridRows = new Array();
var gridList = [{ //grid初始化參數
    caption: 'Data List',
    gid: 'jqGrid1',
    pager: '#jqGrid1Pager',
    shrinkToFit: false,
    // colAPI: 'RMA_CSMFormModelSUM', //set colModel index
    //fixedColFDb: false, //set db
    // gridDefinitionUrl: invokeURL + 'RMA_CSMFormModelSUM',
    //gridDefColionUrl: 'json/unSchedule.json',
    gridDefPostData: {

    },
    colNames: ['#N/A', '主旨', 'Company', 'Factory', 'Customer Number_id(B)', 'Sales Person_id', 'Order Type', 'Customer PO',
        'RMA Type', 'Price_List', 'Bill-To Information Attention', 'Bill-To Information Contact', 'Bill-To Information TEL'
        , 'Bill-To Information E-mail', 'Ship-To Information Attention', 'Ship-To Information E-mail(N)',
        'Ship-To Information TEL', 'FOB', 'Freight Term', 'Customer Shipping Account:', 'Freight Costs', 'Ship Via',
        'Reseller Permit No', 'Payment Term', 'Credit Card Type', 'Card Number', 'Expiration Date', 'Expiration Date(YYYY)',
        'Card Holder Name', 'Authorization Code', 'Note', '', '#N/A(D)', 'NO.', 'ITEM NO(R)', 'QTY(T)', 'U/P(W)', 'REQUEST_DATE',
        'SCHEDULE_SHIP_DATE(L)', 'NOTE', 'TAX CODE'


    ],
    colModel: [
        {
            name: 'FORMSERIALNUMBER',
            index: 'FORMSERIALNUMBER',
            align: "center"
        }, {
            name: 'SUBJECT',
            index: 'SUBJECT',
            align: "center"
        },
        {
            name: 'FORM_OU',
            index: 'FORM_OU',
            align: "center"
        }, {
            name: 'FORM_ORG',
            index: 'FORM_ORG',
            align: "center"
        },
        {
            name: 'SENAO204M008',
            index: 'SENAO204M008',
            align: "center"
        }, {
            name: 'SENAO204M003',
            index: 'SENAO204M003',
            align: "center"
        },
        {
            name: 'SENAO204M011',
            index: 'SENAO204M011',
            align: "center"
        }, {
            name: 'SENAO204M012',
            index: 'SENAO204M012',
            align: "center"
        },
        {
            name: 'SENAO204M049',
            index: 'SENAO204M049',
            align: "center"
        }, {
            name: 'PRICE_LIST',
            index: 'PRICE_LIST',
            align: "center"
        },
        {
            name: 'SENAO204M013',
            index: 'SENAO204M013',
            align: "center"
        }, {
            name: 'SENAO204M015',
            index: 'SENAO204M015',
            align: "center"
        },
        {
            name: 'SENAO204M050',
            index: 'SENAO204M050',
            align: "center"
        }, {
            name: 'SENAO204M039',
            index: 'SENAO204M039',
            align: "center"
        },
        {
            name: 'SENAO204M017',
            index: 'SENAO204M017',
            align: "center"
        }, {
            name: 'SENAO204M025',
            index: 'SENAO204M025',
            align: "center"
        }
        , {
            name: 'SENAO204M051',
            index: 'SENAO204M051',
            align: "center"
        },
        {
            name: 'SENAO204M026',
            index: 'SENAO204M026',
            align: "center"
        },
        {
            name: 'SENAO204M048',
            index: 'SENAO204M048',
            align: "center"
        },
        {
            name: 'SENAO204M030',
            index: 'SENAO204M030',
            align: "center"
        },
        {
            name: 'SENAO204M041',
            index: 'SENAO204M041',
            align: "center"
        },
        {
            name: 'SENAO204M028',
            index: 'SENAO204M028',
            align: "center"
        },
        {
            name: 'SENAO204M042',
            index: 'SENAO204M042',
            align: "center"
        },
        {
            name: 'SENAO204M027',
            index: 'SENAO204M027',
            align: "center"
        },
        {
            name: 'SENAO204M029',
            index: 'SENAO204M029',
            align: "center"
        },
        {
            name: 'SENAO204M031',
            index: 'SENAO204M031',
            align: "center"
        },
        {
            name: 'SENAO204M033',
            index: 'SENAO204M033',
            align: "center"
        },
        {
            name: 'SENAO204M034',
            index: 'SENAO204M034',
            align: "center"
        },
        {
            name: 'SENAO204M036',
            index: 'SENAO204M036',
            align: "center"
        },
        {
            name: 'SENAO204M038',
            index: 'SENAO204M038',
            align: "center"
        },
        {
            name: 'SENAO204M040',
            index: 'SENAO204M040',
            align: "center"
        }, {
            name: ' __EMPTY',
            index: '',
            align: "center"
        }, {
            name: 'FORMSERIALNUMBER_1',
            index: 'FORMSERIALNUMBER_1',
            align: "center"
        },
        {
            name: 'SENAO204D003',
            index: 'SENAO204D003',
            align: "center"
        }, {
            name: 'SENAO204D004',
            index: 'SENAO204D004',
            align: "center"
        }, {
            name: 'SENAO204D006',
            index: 'SENAO204D006',
            align: "center"
        }, {
            name: 'SENAO204D008',
            index: 'SENAO204D008',
            align: "center"
        }, {
            name: 'SENAO204D010',
            index: 'SENAO204D010',
            align: "center"
        }, {
            name: 'SENAO204D011',
            index: 'SENAO204D011',
            align: "center"
        }, {
            name: 'SENAO204D012',
            index: 'SENAO204D012',
            align: "center"
        }, {
            name: 'SENAO204D016',
            index: 'SENAO204D016',
            align: "center"
        }



    ],
    datatype: 'jsonstring',
    search: true,
    refresh: true,
    xls: true

}

];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () { //form load function

    loginCheck(); //登入檢查


    $("#menu").load("Top.html");
    $("#bottom").load("Bottom.html");

    initFrm();




});

function frmEvent() { //form event function


    $('#excelUp').on('click', function () {
        if ($("#excel-file").val() == "") {
            if ($("#filelist").text() == "") {
                alert("Please choose to upload the attachment file!");
            }
        } else {

            var files = $('#excel-file')[0].files;
            $("#qryModal").modal('hide');
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
                            sheet]));
                        break; // 如果只取第一張表，就取消註釋這行
                    }
                }
                //在控制檯打印出來表格中的資料
                console.log(persons);


                if (persons[0]["Amazon Order Id"] == undefined) {
                    alert('File content is incorrect');
                } else {
                    $('body').loading({
                        message: 'Working...',
                        theme: 'dark'
                    });
                    setTimeout(function () {

                        upFile(persons);
                        $('body').loading('stop');
                    }, 500);

                }

            };
            // 以二進位制方式開啟檔案
            fileReader.readAsBinaryString(files[0]);
            //$('#jqGrid2').loading('stop');
        }

    });

}



/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

    let result;
    loginuser = getcooky("loginuser");
    let rmano = getUrlVars("p1")["p1"];


    $("#excel-file").val("");
    $("#qryModal").modal('show');
    frmEvent();




}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
function createGrid(id) { //create jagrid



}
/**
  *pager輸出excel函數
  *
  * @param {*} grid
  * @param {*} pager
  */
function addXls(grid, pager) {
    $(grid).navButtonAdd(pager, {
        caption: "",
        title: "DownLoad Excel ",
        id: "btnXls",
        //buttonicon: "fas fa-file-download",
        buttonicon: "fas fa-download",
        onClickButton: function () {
            let caption = $(grid).jqGrid("getGridParam").caption;
            let index1 = caption.indexOf("<");
            let index2 = caption.indexOf("<");
            if (index1 > 0 && index2 > 0) {
                caption = caption.substr(0, index1);
                // console.log(caption);
            }
            // 使用安全的Excel匯出方式避免jQuery遞歸錯誤
            try {
                // 獲取表格資料和結構
                const colNames = $(grid).jqGrid("getGridParam", "colNames");
                const colModel = $(grid).jqGrid("getGridParam", "colModel");
                const data = [];

                // 建立表頭
                const headers = colModel
                    .filter((col) => !col.hidden && col.name !== "rn")
                    .map((col) => col.label || col.name);
                let title = [];
                for (let i = 0; i < headers.length; i++) {
                    title.push(null);
                }
                title[0] = '單頭';
                title[32] = '單身';
                data.push(title);
                // colNames.shift(); //移除第一個
                data.push(colNames.slice(1, colNames.length));
                data.push(headers);
                if (data[2][0] == "FORMSERIALNUMBER") { //修正欄位
                    data[2][0] = "FORMSERIALNUMBER_1";
                }

                // 獲取所有資料（包含分頁）
                const gridData = $(grid).jqGrid("getGridParam", "data");
                if (gridData && gridData.length > 0) {
                    // 使用原始資料源
                    gridData.forEach((rowData) => {
                        const row = colModel
                            .filter((col) => !col.hidden && col.name !== "rn")
                            .map((col) => rowData[col.name] == null ? "" : rowData[col.name]);
                        data.push(row);
                    });
                } else {
                    // 回退到當前頁面資料
                    const allRowIds = $(grid).jqGrid("getDataIDs");
                    allRowIds.forEach((rowId) => {
                        const rowData = $(grid).jqGrid("getRowData", rowId);
                        const row = colModel
                            .filter((col) => !col.hidden && col.name !== "rn")
                            .map((col) => rowData[col.name] == null ? "" : rowData[col.name]);
                        data.push(row);
                    });
                }

                // 使用XLSX建立工作簿
                const ws = XLSX.utils.aoa_to_sheet(data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                if (!ws['!merges']) ws['!merges'] = [];
                ws['!merges'].push({
                    s: { r: 0, c: 0 }, // 起點：A1
                    e: { r: 0, c: 30 }  // 終點：AE
                }, {
                    s: { r: 0, c: 31 }, // 起點：AF
                    e: { r: 0, c: 31 }  // 終點：AF
                }
                    , {
                        s: { r: 0, c: 32 }, // 起點：AG
                        e: { r: 0, c: 41 }  // 終點：AO
                    });

                // 匯出檔案
                const fileName =
                    caption + new Date().format("yyyyMMddhhmmss") + ".xlsx";
                XLSX.writeFile(wb, fileName);
            } catch (error) {
                console.error("Excel匯出錯誤:", error);
                alert("Excel匯出失敗，請稍後再試");
            }
        },
        position: "last",
        sepclass: "ui-separator",
        sepcontent: "&nbsp;&nbsp;",
    });
}


/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function upFile(data) {
    //標準
    let headitems = [];
    let headdata = [];   //單頭
    let griddata = []; //單身
    let SUBJECT = '';
    let customerNumber = '10950';
    let FOB='';
    let ORDER_TYPE_NAME = 'US-S-Sales';
    let rowid = 1;
    let msg = [];
    let headspace = {
        FORMSERIALNUMBER: '',
        SUBJECT: '',
        FORM_OU: '',
        FORM_ORG: '',
        SENAO204M008: '', //客戶別	
        SENAO204M003: '', //Sales Person_id
        SENAO204M011: '', //Order Type	
        SENAO204M012: '', //Customer PO	
        SENAO204M049: '', //RMA Type	
        PRICE_LIST: '', //Price_List 	
        SENAO204M013: '', //Bill-To Information Attention	
        SENAO204M015: '', //Bill-To Information Contact	
        SENAO204M050: '', //Bill-To Information TEL
        SENAO204M039: '', //Bill-To Information E-mail	
        SENAO204M017: '', //Ship-To Information Attention	 
        SENAO204M025: '', //Ship-To Information E-mail(N)
        SENAO204M051: '', //Ship-To Information TEL
        SENAO204M026: '', //FOB
        SENAO204M048: '', //Freight Term
        SENAO204M030: '', //Customer Shipping Account:
        SENAO204M041: '', //Freight Costs
        SENAO204M028: '', //Ship Via
        SENAO204M042: '', //Reseller Permit No	
        SENAO204M027: '', //Payment Term
        SENAO204M029: '', //Credit Card Type
        SENAO204M031: '', //Card Number
        SENAO204M033: '', //Expiration Date	
        SENAO204M034: '', //Expiration Date(YYYY)	
        SENAO204M036: '', //Card Holder Name
        SENAO204M038: '', //Authorization Code
        SENAO204M040: '', //Note
         __EMPTY: null //空白

    }
    let result = ajaxGetData(invokeURL + 'BPM_ERP_SENAO204_01A', {
        CN: customerNumber,
        OU_ID: '224' //SUS
    });
    if (result[0].result == undefined) {
       // ORDER_TYPE_NAME = result[0].ORDER_TYPE_NAME;
       FOB=result[0].FOB_POINT;
    }
    $.each(data, function (index, value) {
        //清空head
        let head = {};
        //1.取Order Id
        if ($.inArray(String(value['Amazon Order Id']), headitems) == -1) {
            //2.建立Head
            head = {
                FORMSERIALNUMBER: String(value['Amazon Order Id']),
                SUBJECT: SUBJECT,
                FORM_OU: 'EnGenius Technologies',
                FORM_ORG: 'US RBU',
                SENAO204M008: customerNumber, //客戶別	
                SENAO204M003: userId, //Sales Person_id
                SENAO204M011: ORDER_TYPE_NAME, //Order Type	
                SENAO204M012: String(value['Amazon Order Id']), //Customer PO	
                SENAO204M049: '', //RMA Type	
                PRICE_LIST: '', //Price_List 	
                SENAO204M013: '', //Bill-To Information Attention	
                SENAO204M015: '', //Bill-To Information Contact	
                SENAO204M050: '', //Bill-To Information TEL
                SENAO204M039: '', //Bill-To Information E-mail	
                SENAO204M017: '', //Ship-To Information Attention	 
                SENAO204M025: String(value['Buyer Email']), //Ship-To Information E-mail(N)
                SENAO204M051: '', //Ship-To Information TEL
                SENAO204M026: FOB, //FOB
                SENAO204M048: 'Charge', //Freight Term
                SENAO204M030: '', //Customer Shipping Account:
                SENAO204M041: '0', //Freight Costs
                SENAO204M028: String(value['Carrier']), //Ship Via
                SENAO204M042: '', //Reseller Permit No	
                SENAO204M027: '', //Payment Term
                SENAO204M029: '', //Credit Card Type
                SENAO204M031: '', //Card Number
                SENAO204M033: '', //Expiration Date	
                SENAO204M034: '', //Expiration Date(YYYY)	
                SENAO204M036: '', //Card Holder Name
                SENAO204M038: '', //Authorization Code
                SENAO204M040: '', //Note
                __EMPTY: null //空白

            };
            headitems.push(String(value['Amazon Order Id']));
            headdata.push(head);
            rowid = 1;
        } else {

        }
        let filtered = griddata.filter(function (key) {
            return key.FORMSERIALNUMBER_1 === String(value['Amazon Order Id']);
        });
        rowid = filtered.length + 1;
        let percentage = value['Item Price'] > 0 ? Math.round((value['Item Tax'] / value['Item Price']) * 100) : 0;
        result = ajaxGetData(invokeURL + 'BPM_CUST_PN_QUERY', {
            customer_number: customerNumber,
            cust_pn: String(value['Merchant SKU'])
        });
        let SENAO204D004='';
        if (result[0].result == undefined) {
            SENAO204D004 = result[0].ITEM;
        }
        
        //3.建立Grid  
        let row = {
            FORMSERIALNUMBER_1: String(value['Amazon Order Id']),
            SENAO204D003: rowid,	//NO.
            SENAO204D004: SENAO204D004,	//ITEM NO(R)
            SENAO204D006: String(value['Shipped Quantity']),	//QTY(T)
            SENAO204D008: value['Item Price'] / value['Shipped Quantity'],	//U/P(W)
            SENAO204D010: String(value['Purchase Date']),	//REQUEST_DATE
            SENAO204D011: String(value['Shipment Date']),	//SCHEDULE_SHIP_DATE(L)
            SENAO204D012: '',    //NOTE
            SENAO204D016: percentage + '%'     //TAX CODE

        };

        griddata.push(row);
        rowid++;

    });
    console.log(headdata);
    console.log(griddata);
    for (let i = 0; i < griddata.length; i++) {
        if (i < headdata.length) {
            msg.push($.extend({}, headdata[i], griddata[i]));
        } else {
            msg.push($.extend({}, headspace, griddata[i]));
        }
    }


    if (msg.length > 0) {


        let $grid = $('#' + gridList[0].gid);
        $.jgrid.gridUnload(gridList[0].gid);
        let options = gridList[0];
        options.datastr = msg;
        console.log(options.colNames);
        console.log(options.colModel);
        $grid.createJqGrid(options);
        $grid.jqGrid('navGrid', options.pager, {
            edit: false,
            add: false,
            del: false,
            search: false,
            refresh: false,
            view: false,
            position: "left",
            cloneToTop: false
        }, {}, {}, {}, {}, {});

        addXls('#jqGrid1', options.pager);
    }
    return;

}
/*---------------------Other Function End--------------*/