var Grid1 = document.getElementById("Grid1"); //Grid1
var isUnitPriceUser = false; //是否為可看到Grid中單價欄位的使用者

//GRID
//單身grid1 元件欄位名稱
var GridBinding = [
  ["", "gsenao113d019", "gsenao113d004", "gsenao113d005", "gsenao113d006", "gsenao113d008", "gsenao113d012", "gsenao113d018", "gsenao113d013", "gsenao113d011", "gsenao113d017", "gsenao113d015", "gsenao113d016", "gsenao113d020", "gsenao113d021", "gsenao113d022", "gsenao113d023", "gsenao113d024", "gsenao113d025", "gsenao113d010", "gsenao113d007", "gsenao113d009", "gsenao113d004_ORA", "gsenao113d026", "gsenao113d027", "gsenao113d019_val", "gsenao113d028", "gsenao113d029", "gsenao113d031", "gsenao113d030", "excelErrorMsg"]
];
var GridBinding1 = 
  ["","gsenao117d004","gsenao117d018","gsenao117d023","gsenao117d005","gsenao117d006","gsenao117d007","gsenao117d013","gsenao117d008","gsenao117d009","gsenao117d010","gsenao117d011","gsenao117d012","gsenao117d003",
  "gsenao117d015","gsenao117d016","gsenao117d017","gsenao117d019","gsenao117d020","gsenao117d021","gsenao117d022"];
//單身grid1 欄位顯示名稱=>creat grid產生
var Grid1Columns = [];
//單身grid1 欄位id名稱=>creat grid產生
var Grid1ColumnIds = [];
/*-----------------------Grid變數----------------------------*/
var frmGridList = [{
  caption: '',
  gid: 'Grid1',
  pager: '#Grid1_pager',
  shrinkToFit: false,
  fixedColFDb: true, //set db
  rownumbers: false,
  colAPI: 'BPM_SENAO113_GRID1_LIST', //set colModel index
  gridDefinitionUrl: invokeURL + 'BPM_SENAO113_GRID1_LIST',
  gridDefPostData: {
  },
  search: true,
  refresh: true,
  xls: true,
  onSelectRow: function (rowid, status, e) {  //行選取
    let row = $(this).jqGrid('getRowData', rowid);
    console.log('rowid', rowid);
    console.log('row', row);
    for (const [key, value] of Object.entries(row)) {
      let element = ('#g' + key).toLowerCase();
      console.log('element:', element);
      if ($(element).exists != undefined) {
        if (element == '#gsenao113d012') {
          if (IsDateValid(value)) {
            $(element).val(value.replace(/\//g, '-'));
          }
        } else {
          $(element).val(value);
        }



      }
      console.log(key, value);
    }
  },
  loadComplete: function (ids) {
  }
}];
/***************************GRID********************** */
/*--------------------------event-----------------------*/

/*---------------------UI event Function End--------------*/
/*---------------------JqGrid Function Start--------------*/
$(document).ready(function () {
      //Load menu
  loginCheck(); //登入檢查
  createFrmGrid(0);


});
function createFrmGrid(id) { //create jagrid
  let options = {};
  let $grid;
  let gridCol = {};
  $grid = $('#' + frmGridList[id].gid);
  //$.jgrid.gridUnload(frmGridList[id].gid);
  options = frmGridList[id];
  switch (id) {
    case 0:
      options.gridDefPostData = {
        FORMSERIALNUMBER: $('#senao113m002').val()
      };
      $grid.createJqGrid(options);
      setGridStyle(isUnitPriceUser);
      getGridColModel(id);
      break;
    case 1:
      break;
  }
}
function setGridStyle(isAllowedUser) {
  let $grid = $("#" + frmGridList[0].gid);
  if ($grid.length > 0) {
    if (isAllowedUser) {
      $grid.jqGrid('showCol', ["senao113d008"]); //顯示單價
    }
  }
}
/**
 * 取得Grid內的數據
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridData(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridData = [];
  if ($grid.length > 0) {
    gridData = $grid.getGridParam("data");
  }

  return gridData;
}
/**
 * 替換Grid內的數據
 * @param {*} id:編號 
 * @param {*} dataSrc:數據
 * @returns true
 */
function setGridData(id, dataSrc) {

  let $grid = $("#" + frmGridList[id].gid);
  if ($grid.length > 0) {
    $grid.jqGrid("clearGridData")
      .jqGrid("setGridParam", {
        data: dataSrc // 要替換的資料 dataSrc
      })
      .trigger("reloadGrid");  // reload顯示新資料
  }
  return true;
}
/**
 * 取得Grid內的數據colmodel
 * @param {*} id 
 * @returns jqgrid的數據
 */
function getGridColModel(id) {
  let $grid = $("#" + frmGridList[id].gid);
  let gridcolModel = [];
  let gridcolLabel = [];
  let gridcolName = [];
  if ($grid.length > 0 && $grid[0].grid) {
    gridcolModel = $grid.getGridParam("colModel")|| [];
    for (let i = 0; i < gridcolModel.length; i++) {
      gridcolLabel.push(gridcolModel[i].label);
      gridcolName.push(gridcolModel[i].name);
    }
  }

  return { colModel: gridcolModel, label: gridcolLabel, name: gridcolName };
}

/**
 * 設定Grid欄位，其中單價欄位有權限者才可顯示
 * @param {boolean} isAllowedUser 是否可看到單價欄位
 */
function setGridStyle(isAllowedUser) {
  let $grid = $("#" + frmGridList[0].gid);
  if ($grid.length > 0) {
    if (isAllowedUser) {
      $grid.jqGrid('showCol', ["senao113d008"]); //顯示單價
    }
  }
}
/**
 * [Grid] 取得單身GRID要新增資料
 */
function getRowData(id, rowid) {
  let data = {};
  let binding = GridBinding[id];
  let columnIds = Grid1ColumnIds[id];
  for (let i = 0; i < binding.length; i++) {
    let value = "";
    if (binding[i] != "") {
      value = $("*[name='" + binding[i] + "']").val();
      if (value == undefined) {
        value = "";
      }
      if (binding[i] == "gsenao113d012") {
        if (IsDateValid(value)) {

          value = value.replace(/\-/g, '/');
        }
      }
    } else { //項次
      value = rowid;
    }
    data[columnIds[i]] = value;
  }
  return data;
}
/**
 * [Grid] 新增單身GRID資料
 */
function gridaddRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = $grid.getGridParam("records") + 1;
  data = getRowData(id, rowid);
  $grid.jqGrid('addRowData', rowid, data, 'last');
}
/**
 * [Grid] 修改單身GRID資料
 */
function grideditRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  data = getRowData(id, rowid);
  $grid.jqGrid('setRowData', rowid, data);
}
/**
 * [Grid] 刪除單身GRID資料
 */
function griddeleteRow(id) {
  let data = {};
  let $grid = $("#" + frmGridList[id].gid);
  let rowid = getGridSelectRow(id);;
  if (confirm('確認刪除?')) {
    $grid.jqGrid('delRowData', rowid);
  }

}
/**
 * [Grid] 取的Grid的位置
 */
function getGridSelectRow(id) {

  let rowId = $("#" + frmGridList[id].gid).jqGrid('getGridParam', 'selrow');
  console.log(rowId);
  return rowId;
}
/**
 * [Grid] 重新計算單身Grid項次
 */
function refreshRowNo(id, key) {
  let data = getGridData(id);
  for (let i = 0; i < data.length; i++) {
    data[i][key] = i + 1;
  }
  setGridData(id, data);
}
/**
 * [Grid] 清除單身對應欄位資料
 */
function clearBinding(id) {
  let binding = GridBinding[id];
  for (let i = 0; i < binding.length; i++) {
    if (binding[i].length > 0) {
      $("*[name='" + binding[i] + "']").val('');
    }
  }
}
/*---------------------JqGrid Function End--------------*/