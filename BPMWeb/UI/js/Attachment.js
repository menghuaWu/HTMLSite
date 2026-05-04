/*---------------------公用變數 Start--------------*/
var fid = 0; //檔案數目
var ItemTitle = { filetype: '', filename: '', describe: '', filesize: 0, uploader: '', activityname: '',att_OID:'',PHYSICALNAME:'',ID:''}; //欄位
var filelist = [];
/*---------------------公用變數 End--------------*/
/*---------------------UI event Function Start--------------*/
$(document).ready(function () { //form load function
    window.addEventListener('message', reciveMessage); //建立子視窗監聽程序
    loginCheck(); //登入檢查
    initFrm();
    frmEvent();
});

function frmEvent() { //form event function

    $("#btnUploadDocument").on('click', function () { //Seach Btn

        for (let i = 0; i < 5; i++) {
            let fileUploader = document.querySelector('#fileDocument_' + i);
            if (fileUploader.files[0]) {
                fid++;
                fileUploader.files[0].DocumentDesc = $('#txaDocumentDesc_' + i).val();
                filelist.push({ file: fileUploader.files[0], desc: $('#txaDocumentDesc_' + i).val(), uploader: ItemTitle.uploader, activityname: ItemTitle.activityname });
                ItemTitle.filetype = fileUploader.files[0].type;
                ItemTitle.filename = fileUploader.files[0].name;
                ItemTitle.filesize = fileUploader.files[0].size;
                ItemTitle.describe = $('#txaDocumentDesc_' + i).val();
                //母表單傳入
                // ItemTitle.uploader=$('#txaDocumentDesc_'+i).val(); //上傳人員
                // ItemTitle.activityname=$('#txaDocumentDesc_'+i).val(); //上傳人員身分 
                addSelectedRow({ ItemTitle });
                $('#fileDocument_' + i).val('');
            }



        }
        $('#_cuzfileChooserData_selectedItemTable').removeClass('d-none');




    });
    $("#btnCloseDocument").on('click', function () { //close
        window.opener.postMessage(filelist, '*'); // 傳送給父視窗
        window.close(); // 關閉子視窗
    });

}

/*---------------------UI event Function Start--------------*/
/*---------------------Form Function Start--------------*/
function initFrm() { //init form

}

/*---------------------Form Function End--------------*/
/*---------------------JqGrid Function Start--------------*/





/*---------------------JqGrid Function End--------------*/
/*---------------------Chart Function Start--------------*/
/*---------------------Chart Function End--------------*/
/*---------------------Other Function Start--------------*/
function setAccessRight(id) {  //附件上傳者可設定權限控管顯示 
    var div = $('#' + id);
    if (div.is(":visible")) {
        div.addClass('d-none');
    } else {
        div.removeClass('d-none');
    }
}
function chooseTypes(id) { //權限設定

}
function addSelectedRow(row) { //新增

    let selectedItemRow = $("#_cuzfileChooser_selectedItems");
    let id = selectedItemRow.children("tr").length;
    id = id == undefined ? 1 : ++id;
    let color = id % 2 == 1 ? "#FCFFFF" : "#DEECF5";
    let tMunuHtml = '<tr> ';

    $.each(ItemTitle, function (key, value) {

        switch (key) {
            case 'filesize':
                value = formatBytes(value);
                break;
            case 'filetype':

                value = '<img src="' + fileTypeImg(value) + '"  align="middle" width="40" height="40">';
                break;
        }

        tMunuHtml += '<td style="background-color:' + color + '; class="text-center">'

            + value
            + '</td>';
    });
    tMunuHtml += '</tr>';
    selectedItemRow.append(tMunuHtml);

}

function reciveMessage(event) { //讀取主視窗訊息 
    if (event.origin !== document.location.origin) return;
    ItemTitle.uploader = event.data.uploader;; //上傳人員
    ItemTitle.activityname = event.data.activityname;; //上傳人員身分 
    console.log('reciveMessage ItemTitle', event.data.uploader);
    console.log('reciveMessage ItemTitle', event.data.activityname);
}
/*---------------------Other Function End--------------*/
