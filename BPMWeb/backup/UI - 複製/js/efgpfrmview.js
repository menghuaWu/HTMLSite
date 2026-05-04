/*---------------------公用變數 Start--------------*/
var loginuser;
var csm001;
var fname;
var lineData = new Array();
var gridRows = new Array();
var gridList = [
];
var dataSet = [
    ['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
    ['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
    ['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
    ['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
    ['Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700'],
    ['Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000'],
    ['Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500'],
    ['Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900'],
    ['Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500'],
    ['Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600']

];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/

$(document).ready(function () {

    initFrm();
    frmEvent();
});



function frmEvent() { //form event function 
    $('#SureBtn').on('click', function (e) { //確定

        $('#example').contents().find("tr").each(function (index, tr) {


            console.log(tr.childNodes[0].innerText);
            console.log($(tr.childNodes[6].childNodes[0]).val());
 
		});
        e.preventDefault();
 
        var data =  $('#example').contents().find('input, select').serialize();
     
        alert(
            'The following data would have been submitted to the server: \n\n' +
                data.substr(0, 120) +
                '...'
        );

	});


}





/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form


    if (checkedPermisson()) //登入檢查
    {

        //Load menu
        $.get("Top.html", function (data) {
            $("#menu").html(data);
        });
        //Load Bottom
        $.get("Bottom.html", function (data) {
            $("#bottom").html(data);
        });

        //var table = new DataTable('#example', {
        var table = $('#example').DataTable({
            fixedHeader: true,
            searching: true, // 預設為true 搜尋功能，若要開啟不用特別設定
            paging: false, // 預設為true 分頁功能，若要開啟不用特別設定
            ordering: false, // 預設為true 排序功能，若要開啟不用特別設定
            sPaginationType: 'full_numbers', // 分頁樣式 預設為full_numbers，若需其他樣式才需設定
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']], //顯示筆數設定 預設為[10, 25, 50, 100]
            pageLength: '50',// 預設為'10'，若需更改初始每頁顯示筆數，才需設定
            processing: true, // 預設為false 是否要顯示當前資料處理狀態資訊
            serverSide: false, // 預設為false 是否透過Server端處理分頁…等
            stateSave: true, // 預設為false 在頁面刷新時，是否要保存當前表格資料與狀態
            destroy: true, // 預設為false 是否銷毀當前暫存資料
            info: true, // 預設為true　是否要顯示目前有 x  筆資料
            autoWidth: true, // 預設為true　設置是否要自動調整表格寬度(false代表不要自適應)　,
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
            columns: [
                { title: 'Name' },
                { title: 'Position' },
                { title: 'Office' },
                { title: 'Extn.' },
                { title: 'Start date' },
                { title: 'Salary' },
                { title: 'Salary1' }
            ],
            data: dataSet,

            columnDefs: [
                {
                    data: null,
                    defaultContent: '<input type="text" class="form-control" id="opinions" name="opinions">',
                    targets: -1,
                    orderable: false,
                    className: 'text-center'
                }
            ]
        });

    }

   /* table.on('click', 'input', function (e) {
        let data = table.row(e.target.closest('tr')).data();
        let j=$('#example').closest('tr');
         alert(data[0] + "'s salary is: " + data[5]);
    });
    */


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