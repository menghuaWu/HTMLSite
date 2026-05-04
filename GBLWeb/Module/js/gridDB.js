/*
    jqgrid 5.4
    web Site:https://www.guriddo.net/documentation/guriddo/javascript/
    wiki:http://www.trirand.com/jqgridwiki/doku.php?id=wiki:jqgriddocs
*/
//jqgrid include
document.write(
  "<script src='/GBLWeb/API/Guriddo_jqGrid_JS_5.4.0/js/jquery.jqGrid.min.js'></script>"
);
document.write(
  "<script src='/GBLWeb/API/Guriddo_jqGrid_JS_5.4.0/js/i18n/grid.locale-en.js'></script>"
);
document.write(
  "<link rel='stylesheet' type='text/css' href='/GBLWeb/API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid-bootstrap4.css'></link>"
);
//document.write("<link rel='stylesheet' type='text/css' media='screen' href='/GBLWeb/Module/css/jQgridUI.css' />");
//document.write("<link rel='stylesheet' type='text/css' href='/GBLWeb/API/Guriddo_jqGrid_JS_5.4.0/css/ui.jqgrid.css'></link>");
document.write(
  "<script src='/GBLWeb/API/Guriddo_jqGrid_JS_5.4.0/plugins/jquery.contextmenu.js'></script>"
);
/*jzip
web Site:https://stuk.github.io/jszip/
*/
document.write(
  "<script type='text/ecmascript' src='/GBLWeb/API/Stuk-jszip-v3.2.2-3/dist/jszip.min.js'></script>"
);

(function ($) {
  var invokeGridURL=invokeURL;
  var defaults = {
    gid: "",
    gridDefinitionUrl: "",
    gridDefColionUrl: "", //colmodel url
    gridDefPostData: "", //postData
    colAPI: "", //set colModel index
    fixedColFDb: false, //set db
    //datatype: 'json',
    styleUI: "Bootstrap4", //設定jqgrid的全域性樣式為bootstrap樣式
    iconSet: "fontAwesome", //設定icon
    responsive: false,
    datatype: "local",
    mtype: "POST",
    CursorName:"PCURSOR",
    rowNum: 10, //初始顯示筆數
    rowList: [
      "10:10",
      "20:20",
      "30:30",
      "40:40",
      "50:50",
      "100:100",
      "200:200",
      "300:300",
      "400:400",
      "500:500",
    ],
    height: "auto",
    autoHeight: true,
    ignoreCase: true, //搜尋不分大小寫
    viewrecords: true,
    recordpos: "right",
    rownumbers: true, //行號
    rownumWidth: 50,
    pagerpos: "center",
    altRows: false,
    autowidth: true,
    shrinkToFit: false,
    colMenu: true,
    emptyrecords: '<i class="text-danger">Nothing to display</i>',
    del: false,
    setClass: false, //設定Class
    setClassName: null, //class ServerCode
    invokeGridURL:"",
    delOption: {
      delurl: "",
      result: {
        name: "result",
        value: "ok",
      }, //pass的判斷依據(result:'ok')
    },
    add: false,
    addOption: {
      addurl: "",
      result: {
        name: "result",
        value: "ok",
      },
    },
    edit: false,
    editOption: {
      editurl: "",
      result: {
        name: "result",
        value: "ok",
      },
    },
    search: true,
    searchOption: {},
    refresh: true,
    view: false,
    viewOption: {},
    xls: false,
    loadonce: true, // this is just for the demo
    sortorder: "desc",
    //hoverrows: true, // true by default, can be switched to false if highlight on hover is not needed
    //viewsortcols: true,
    // multiselect: false,
    ajaxGridOptions: {
      contentType: "application/json; charset=utf-8",
    },
    serializeGridData: function (postData) {
      return JSON.stringify(postData);
    },
    jsonReader: {
      // id: "rn", //rn序列號欄位名，將序列設為key
      root: function (obj) {
        console.log("data", obj);
        obj = conversionData(obj);
        return obj;
      },
      page: function (obj) {
        obj = conversionData(obj);
        return 1;
      },
      total: function (obj) {
        obj = conversionData(obj);
        return 1;
      },
      records: function (obj) {
        obj = conversionData(obj);
        return obj.length;
      },
      repeatitems: false,
      //repeatitems: true
    },
    loadComplete: function (xhr) {
      let $self = $(this);
      let allRows = $self.jqGrid("getDataIDs");
      for (let i = 0; i < allRows.length; i++) {
        let rowId = allRows[i];
        let row = $self.jqGrid("getRowData", rowId);
        for (let key in row) {
          if (row[key] == "null" || row[key] == null) {
            // console.log(key + ' - ' + row[key]);
            // $self.jqGrid('setCell',rowId,key,null,{});
            $self.jqGrid("setCell", rowId, key, null);
          }
        }
      }
      /*
            $self.jqGrid('setLabel', 'rn', 'ID', {
                'text-align': 'center',
                'vertical-align': 'middle'
            }, '');*/
      //自動響應
      $self.jqGrid("setGridParam", {
        responsive: true,
      });

      /* setTimeout(function () {
            updatePagerIcons(this);
            enableTooltips(this);
        }, 0);*/
      // remove error div if exist
      $("#" + this.id + "_err").remove();
    },
    loadError: function (jqXHR, textStatus, errorThrown) {
      // remove error div if exist
      $("#" + this.id + "_err").remove();
      // insert div with the error description before the grid
      $(this)
        .closest("div.ui-jqgrid")
        .before(
          '<div id="' +
          this.id +
          '_err" style="max-width:' +
          this.style.width +
          ';"><div class="ui-state-error ui-corner-all" style="padding:0.7em;float:left;">' +
          decodeErrorMessage(jqXHR, textStatus, errorThrown) +
          '</div><div style="clear:left"/></div>'
        );
    },
    gridComplete: function () {
      let $self = $(this);
      let setClass = $self.getGridParam('setClass');
      let classApi = $self.getGridParam('setClassName');
      if (setClass)
        SetClass($self, classApi);
    }
  };
  /* 對Date的擴充套件，將 Date 轉化為指定格式的String
   * 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個佔位符，
   * 年(y)可以用 1-4 個佔位符，毫秒(S)只能用 1 個佔位符(是 1-3 位的數字)
   * 例子：
   * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   *(new Date()).Format("yyyy-M-d h:m:s.S")   ==> 2006-7-2 8:9:4.18
   */
  Date.prototype.format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ?
          o[k] :
          ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  };
  /**
   *初始化Jqgrid
   *
   * @param {*} options //初始化參數
   */
  $.fn.createJqGrid = function (options) {
    let gridOptions;
    /* if (options.gridDefinitionUrl == '' || options.gridDefinitionUrl == null) {
             gridOptions = options;
             gridOptions.gid = this.attr('id');

         } else {
             gridOptions = $.extend(false, defaults, options);
         }*/
    gridOptions = $.extend(false, defaults, options);
    gridOptions.gid = this.attr("id");
    /*jQuery.extend($.fn.fmatter, {
            password: function (cellvalue, options, rowdata) {
                return "************************";
            }
        });*/

    setGrid(gridOptions);
  };

  /**
   *
   * 由DB讀取固定的COlmodel
   * @param {*} colapi
   * @returns
   */
  function fixedColForDBcolapi(colapi) {
    //console.log("colapi", colapi);
    let colOption = {};
    let listOfColumnModels = [];
    let listOfColumnNames = [];
    let colSettings = {
      cols: GetColCfg(colapi),
    };

    if (colSettings.cols[0] != undefined) {
      colSettings.cols.forEach(function (e) {
        let label = "";
        let columnWidth = 80;
        let editAble = true;
        let editType = "";
        let editOptions = "";
        let editRules = "{}";
        let sortAble = false;
        let sortType = "text";
        let colHidden = false;
        let format = "";
        let fromatOption = {};
        let hAlign = "left";
        let cellAttr = "";
        label = e.LABEL == undefined ? e.NAME.toUpperCase() : e.LABEL;
        colHidden =
          e.HIDDEN == undefined ? colHidden : e.HIDDEN == 1 ? true : false;
        columnWidth = e.WIDTH == undefined ? columnWidth : e.WIDTH;
        sortAble = e.SORTABLE == undefined ? sortAble : e.SORTABLE;
        sortType = e.SORTTYPE == undefined ? sortType : e.SORTTYPE;
        editAble =
          e.EDITABLE == undefined ? editAble : e.EDITABLE == 1 ? true : false;
        editType = e.EDITTYPE == undefined ? editType : e.EDITTYPE;
        editOptions = e.EDITOPTIONS == undefined ? editOptions : e.EDITOPTIONS;
        editRules = e.EDITRULES == undefined ? editRules : e.EDITRULES;
        format = e.FORMATTER == undefined ? format : e.FORMATTER;
        hAlign = e.ALIGN == undefined ? hAlign : e.ALIGN;
        cellAttr = e.CELLATTR == undefined ? cellAttr : e.CELLATTR;
        listOfColumnNames.push(label);
        listOfColumnModels.push({
          name: e.NAME.toUpperCase(),
          index: e.NAME.toUpperCase(),
          label: label,
          width: columnWidth,
          sortable: sortAble,
          sorttype: sortType,
          editable: editAble,
          edittype: editType,
          editoptions: get_edit_options(editOptions, colapi),
          editrules: JSON.parse(editRules),
          hidden: colHidden,
          formatter: funEval(format),
          align: hAlign,
          cellattr: eval(cellAttr),
        });
      });
    }

    colOption.colNames = listOfColumnNames;
    colOption.colModel = listOfColumnModels;
    return colOption;
  }

  /**
   * 由DB讀取colmodel資料
   *
   * @param {*} data
   * @param {*} colapi
   * @returns
   */
  function getCOlSetup(data, colapi) {
    let colOption = {};
    let listOfColumnModels = [];
    let listOfColumnNames = [];
    let colSettings = {
      cols: GetColCfg(colapi),
    };
    // console.log(colSettings);
    for (let prop in data[0]) {
      if (data[0].hasOwnProperty(prop)) {
        let label = prop;
        let columnWidth = 80;
        let editAble = true;
        let editType = "";
        let editOptions = "";
        let editRules = "{}";
        let sortAble = false;
        let sortType = "text";
        let colHidden = false;
        let format = "";
        let fromatOption = {};
        let hAlign = "left";
        let cellAttr = "";
        if (colSettings.cols[0] != undefined) {
          colSettings.cols.forEach(function (e) {
            if (prop.toUpperCase() == e.NAME.toUpperCase()) {
              label = e.LABEL == undefined ? label : e.LABEL;
              colHidden =
                e.HIDDEN == undefined ?
                colHidden :
                e.HIDDEN == 1 ?
                true :
                false;
              columnWidth = e.WIDTH == undefined ? columnWidth : e.WIDTH;
              sortAble = e.SORTABLE == undefined ? sortAble : e.SORTABLE;
              sortType = e.SORTTYPE == undefined ? sortType : e.SORTTYPE;
              editAble =
                e.EDITABLE == undefined ?
                editAble :
                e.EDITABLE == 1 ?
                true :
                false;
              editType = e.EDITTYPE == undefined ? editType : e.EDITTYPE;
              editOptions =
                e.EDITOPTIONS == undefined ? editOptions : e.EDITOPTIONS;
              editRules = e.EDITRULES == undefined ? editRules : e.EDITRULES;
              format = e.FORMATTER == undefined ? format : e.FORMATTER;
              hAlign = e.ALIGN == undefined ? hAlign : e.ALIGN;
              cellAttr = e.CELLATTR == undefined ? cellAttr : e.CELLATTR;
              listOfColumnNames.push(label);
              listOfColumnModels.push({
                name: prop,
                index: prop,
                label: label,
                width: columnWidth,
                sortable: sortAble,
                sorttype: sortType,
                editable: editAble,
                edittype: editType,
                editoptions: get_edit_options(editOptions, colapi),
                editrules: JSON.parse(editRules),
                hidden: colHidden,
                formatter: funEval(format),
                align: hAlign,
                cellattr: eval(cellAttr),
              });
            }
          });
        }
      }
    }

    console.log("listOfColumnNames", listOfColumnNames);
    colOption.colNames = listOfColumnNames;
    colOption.colModel = listOfColumnModels;

    return colOption;
  }

  /**
   *
   *
   * @param {*} webapi
   * @returns
   */
  function GetColCfg(webapi) {
    var ret = {};
    // console.log('webapi',webapi);
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: invokeGridURL + "Service_GetColCfg",
      dataType: "json",
      data: JSON.stringify({
        p: webapi,
      }),
      async: false,
      success: function (JSONdata) {
        //console.log('JSONdata',JSONdata);
        if (JSONdata.length > 0) {
          if (JSONdata[0]["result"] == undefined) {
            ret = jsonKeysToCase(JSONdata,1);
          }
        }
      },
    });
    //console.log('ret', ret);
    return ret;
  }

  function funEval(fmt) {
    //eval(fmt);
    if (typeof window[fmt] === "function") {
      return eval(fmt);
    } else {
      return fmt;
    }
  }
  /**
   *
   *
   * @param {*} field
   * @param {*} webapi
   * @returns
   */
  var get_edit_options = function (field, webapi) {
    var ret = {};
    var optval = {};
    var invokeCode = "";
    if (field != "") {
      invokeCode = "Service_GetColEditVal"; //抓註冊在SERVICE_COL_EDITOPTIONS中該欄位的項目資料
      optval = getOptionValue(webapi, field, invokeCode);
      invokeCode = "Service_GetColEditValQuery"; //抓sql查詢項目資料
      var queryresult = getJSValue(webapi, field, invokeCode);
      if (queryresult.length > 0) {
        var querycode = queryresult[0]["VALUE"];
        var vars = queryresult[0]["TEXT"];
        var varsary = [];
        var varjson = {};
        var IS_JSON = true;
        try {
          if (typeof $.parseJSON(vars) == "object") {
            //參數JSON直接由table中的TEXT欄位取得
            varjson = vars;
          } else {
            IS_JSON = false;
          }
        } catch (err) {
          IS_JSON = false;
        }

        if (IS_JSON == false) {
          //參數JSON由上一層網頁中的元素名稱與元素值組成
          if (window.parent.length != 0) {
            varsary = vars.split(",");
            for (var i = 0; i < varsary.length; i++) {
              if (varsary[i].substr(0, 1) == "@") {
                var keyname = varsary[i].substr(1);
                var selRowId = $("#jqGrid").jqGrid("getGridParam", "selrow");
                var celValue = $("#jqGrid").jqGrid(
                  "getCell",
                  selRowId,
                  keyname
                );
                varjson[keyname] = celValue;
              } else {
                varjson[varsary[i]] = $(
                  "#" + varsary[i],
                  parent.document
                ).val();
              }
            }
          } else {
            varjson = getUrlVars();
          }
        }

        $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          url: invokeGridURL + querycode,
          dataType: "json",
          data: varjson,
          async: false,
          success: function (JSONdata) {
            if (JSONdata.length > 0) {
              if (JSONdata[0]["result"] == undefined) {
                JSONdata.forEach(function (data, index) {
                  optval[data["VALUE"]] = data["TEXT"];
                });
              }
            }
          },
        });
      }
      ret["value"] = optval; // editoptions: {...,value:{1:'One',2:'Two'}}

      // other option settings, eg.{readonly:'readonly'}, {defaultValue:'Web'}
      invokeCode = "Service_GetColEditOpt"; //抓指定執行的service code, service code回傳必須有value與text欄位
      //SQL: select OPTIONTYPE,VALUE from SERVICE_COL_EDITOPTIONS where SERVICE_CODE=:SERVICE_CODE and NAME =:NAME and OPTIONTYPE not in ('VALUE','QUERYVALUE')
      $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        cache: false,
        url: invokeGridURL + invokeCode,
        dataType: "json",
        data: JSON.stringify({
          SERVICE_CODE: webapi,
          NAME: field,
        }),
        async: false,
        success: function (JSONdata) {
          
          if (JSONdata.length > 0) {
            if (JSONdata[0]["result"] == undefined) {
              JSONdata=jsonKeysToCase(JSONdata,1);
              JSONdata.forEach(function (data, index) {
                if (data["OPTIONTYPE"] == "dataInit") {
                  // dataInit時執行value欄位的function
                  ret[data["OPTIONTYPE"]] = eval(data["VALUE"]);
                } else {
                  if (data["VALUE"].indexOf(":") == 0) {
                    // VALUE若為冒號(:)開頭的變數時

                    var nodeName = $(
                      "#" + data["VALUE"].substr(1),
                      parent.document
                    ).prop("nodeName"); //取得母頁面元素tagName
                    if (nodeName == "DIV" || nodeName == "SPAN") {
                      ret[data["OPTIONTYPE"]] = $(
                        "#" + data["VALUE"].substr(1),
                        parent.document
                      ).text();
                    } else {
                      ret[data["OPTIONTYPE"]] = $(
                        "#" + data["VALUE"].substr(1),
                        parent.document
                      ).val();
                    }
                  } else {
                    ret[data["OPTIONTYPE"]] = data["VALUE"]; //eg.{readonly:'readonly'}, {defaultValue:'Web'}
                  }
                }
              });
            }
          }
        },
      });
    }

    return ret;
    //return {value: {'':'請選擇',query: 'query', oltp: 'oltp'}};
  };

  /**
   *
   *
   * @param {*} webapi
   * @param {*} field
   * @param {*} invokeCode
   * @returns
   */
  function getOptionValue(webapi, field, invokeCode) {
    var optval = {};
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: invokeGridURL + invokeCode,
      dataType: "json",
      data: JSON.stringify({
        SERVICE_CODE: webapi,
        NAME: field,
      }),
      async: false,
      success: function (JSONdata) {
        
        if (JSONdata.length > 0) {
          if (JSONdata[0]["result"] == undefined) {
            JSONdata=jsonKeysToCase(JSONdata,1);
            JSONdata.forEach(function (data, index) {
              optval[data["VALUE"]] = data["TEXT"];
            });
          }
        }
      },
    });
    return optval;
  }

  /**
   *
   *
   * @param {*} webapi
   * @param {*} field
   * @param {*} invokeCode
   * @returns
   */
  function getJSValue(webapi, field, invokeCode) {
    var retVal = {};
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: invokeGridURL + invokeCode,
      dataType: "json",
      data: JSON.stringify({
        SERVICE_CODE: webapi,
        NAME: field,
      }),
      async: false,
      success: function (JSONdata) {
        if (JSONdata.length > 0) {
          if (JSONdata[0]["result"] == undefined) {
            retVal = jsonKeysToCase(JSONdata,1);;
          }
        }
      },
    });
    return retVal;
  }
  /**
   *
   *update Icon樣式
   * @param {*} table jqgrid reference
   */
  function updatePagerIcons(table) {
    var replacement = {
      "ui-icon-seek-first": "ace-icon fa fa-angle-double-left bigger-140",
      "ui-icon-seek-prev": "ace-icon fa fa-angle-left bigger-140",
      "ui-icon-seek-next": "ace-icon fa fa-angle-right bigger-140",
      "ui-icon-seek-end": "ace-icon fa fa-angle-double-right bigger-140",
    };
    $(
      ".ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon"
    ).each(function () {
      var icon = $(this);
      var $class = $.trim(icon.attr("class").replace("ui-icon", ""));

      if ($class in replacement)
        icon.attr("class", "ui-icon " + replacement[$class]);
    });
  }

  function enableTooltips(table) {
    $(".navtable .ui-pg-button").tooltip({
      container: "body",
    });
    $(table).find(".ui-pg-div").tooltip({
      container: "body",
    });
  }
  /**
   *錯誤顯示函數
   *
   * @param {*} jqXHR
   * @param {*} textStatus
   * @param {*} errorThrown
   * @returns
   */
  var decodeErrorMessage = function (jqXHR, textStatus, errorThrown) {
    var htmlBody,
      errorInfo,
      i,
      errorText = "",
      errorIconSpan =
      '<span class="ui-icon ui-icon-alert" style="float:left; display: inline-block; margin-right: .3em;"></span>';
    if (textStatus) {
      errorText = textStatus;
    }
    if (errorThrown) {
      if (errorText.length > 0) {
        errorText += "<hr/>";
      }
      errorText += errorThrown;
    }
    if (typeof jqXHR.responseText === "string") {
      if (jqXHR.responseText.charAt(0) === "[") {
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
    return '<div style="float:left">' + errorText + "</div>";
  };
  /**
   * 讀取json設定的ColModel
   *
   * @param {*} options
   * @param {*} data //select的資料
   * @returns
   */
  var getGridDefinitCol = function (options, data) {
    let colSettings;
    $.ajax({
      //ajax start
      type: "POST",
      url: options.gridDefColionUrl,
      async: false,
      dataType: "json",
      error: function (oResult, textStatus, errorThrown) {
        //console.log(oResult);
        colSettings = setColModel(data, [], options);
      },
      success: function (result) {
        //success start

        colSettings = setColModel(data, result.cols, options);
      }, //success end
    });
    return colSettings;
  };

  /**
   *設定Colmodel
   *
   * @param {*} jsonData
   * @param {*} cols
   * @param {*} options
   * @returns
   */
  var setColModel = function (jsonData, cols, options) {
    let colDefaults = {
      index: "",
      name: "",
      label: "",
      // width: 150,
      autoResizing: true,
      editable: true,
      edittype: "",
      editoptions: "",
      editrules: {
        required: true,
        edithidden: true,
      }, //編輯規則
      sorttype: "text",
      hidden: false,
      align: "left",
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
          if ("label" in e) {
            //檢查是否屬性
            colModel.label = e.label;
          }
          if (e.edittype == "custom") {
            //檢查是否屬性
            //e.editoptions.custom_element=eval(e.editoptions.custom_element);
            //e.editoptions.custom_value =eval(e.editoptions.custom_value);

            e.editoptions.custom_element =
              options.colFunction[e.editoptions.custom_element];
            e.editoptions.custom_value =
              options.colFunction[e.editoptions.custom_value];
            //console.log(e.editoptions.custom_element);
            if ("dataEvents" in e.editoptions) {
              e.editoptions.dataEvents.fn =
                options.colFunction[e.editoptions.dataEvents.fn];
            }
          }
          if ("editoptions" in e) {
            if ("dataUrl" in e.editoptions) {
              //檢查是否屬性
              if (!("postdata" in e.editoptions)) {
                e.editoptions.postdata = {};
              }
              colSelect = "";
              let data = getAjaxData(
                e.editoptions.dataUrl,
                e.editoptions.postdata
              );
              if (data.length > 0) {
                data.forEach(function (item) {
                  colSelect +=
                    Object.values(item) + ":" + Object.values(item)[0] + ";";
                });
                colModel.editoptions = {
                  value: colSelect.substr(0, colSelect.length - 1),
                };
                // console.log(colModel);
              }
            }
          }
          //console.log(colSelect);
        }
      });
      //colDefaults
      listOfColumnName.push(colModel.label);
      listOfColumnModels.push(colModel);
    }

    colOption.colNames = listOfColumnName;
    colOption.colModel = listOfColumnModels;
    return colOption;
  };

  /**
   *設定jqgrid
   *
   * @param {*} options
   */
  function setGrid(options) {
    $self = $("#" + options.gid);

    let colOption = {};
    if (options.invokeGridURL != null && options.invokeGridURL != "") { //如果有設定連結就指定
          invokeGridURL=options.invokeGridURL;
    }
    else{
      invokeGridURL=invokeURL;
    }
    if (options.gridDefinitionUrl != null && options.gridDefinitionUrl != "") {
      $.ajax({
        //ajax start
        type: "POST",
        url: options.gridDefinitionUrl,
        async: false,
        data: JSON.stringify(options.gridDefPostData),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        error: function (oResult, textStatus, errorThrown) {
          console.log(oResult);
        },
        success: function (result) {
          //success start
          //console.log(result);
          result = conversionData(result, options.CursorName);

          let err = false;
          if (result.length > 0) {
            if ("result" in result[0]) {
              if (result[0].result.indexOf("NG-java") != -1) {
                err = true;

                // let error=test[0].result.split(':');
                result[0]["result"] = "No information found";
              }
            }
          }

          if (options.fixedColFDb) {
            colOption = fixedColForDBcolapi(options.colAPI);

            options.colNames = colOption.colNames;
            options.colModel = colOption.colModel;
          } else {
            console.log(
              "colapi",
              options.colAPI != "" && options.colAPI != null
            );
            if (!err) {
              if (options.colAPI != "" && options.colAPI != null) {
                colOption = getCOlSetup(result, options.colAPI);
              } else {
                colOption = getGridDefinitCol(options, result);
              }

              options.colNames = colOption.colNames;
              options.colModel = colOption.colModel;
            }
          }

          $self.jqGrid(options);

          //set Pager
          if (options.pager != "" && options.pager != null && !err) {
            setPager(options);
          }

          if (!err) {
            if (result[0]["result"] == undefined) {
              //  console.log('result:', result);

              setDataToGrid(options.gid, result);
            } else {
              console.log("gid:", options.gid);
              console.log("err result:", result);
            }
          }
        }, //success end
      }); //ajax end
    } else {
      //set grid

      $self.jqGrid(options);
      //set Pager
    }

    $(".ui-jqgrid-pager").css("height", "55px");
    $self.resize();
  }
  /**
   *把PCURSOR往上提
   *
   * @param {*} obj ->資料
   * @param {*} CursorName ->Cursor名稱
   */
  function conversionData(obj,CursorName) {
    if (obj.length > 0) {
      /*if (obj[0].PCURSOR != undefined) {
        obj = obj[0].PCURSOR.slice();
      }else if(obj[0].P_CURSOR != undefined){
         obj = obj[0].P_CURSOR.slice();
      }*/
      if (obj[0][CursorName] != undefined) {
          obj = obj[0][CursorName].slice();
      }
    }
    return obj;
  }
  /**
   *把資料存入到Jqgrid
   *
   * @param {*} gid
   * @param {*} result
   */
  function setDataToGrid(gid, result) {
    // console.log('gid',gid);
    // console.log('result',result);
    let $self = $("#" + gid);
    $self.jqGrid("clearGridData");
    if (result[0].result == undefined) {
      // show loading message
      $self[0].grid.beginReq();
      // console.log('result:', result);

      $self.jqGrid("setGridParam", {
        data: result,
      });
      // $self[0].addJSONData(result);
      // hide the show message

      $self[0].grid.endReq();
      // refresh the grid
    }
    $self.trigger("reloadGrid");
  }

  /**
   *設定jqgrid Pager樣式
   *
   * @param {*} options
   */
  function setPager(options) {
    let prmView = {};
    let prmSearch = {
      //Seach option
      // { multipleSearch: true, multipleGroup: true,odata:[{oper:"eq",text:"=   "}] }
      multipleSearch: true,
      multipleGroup: true,
    };
    let prmDel = {
      //delete Options. save key parameter will keybind the Enter key to submit.
      deleteCaption: "delete Post",
      deletetext: "Delete Post",
      //url:options.delOption.delurl,
      url: "/",
      ajaxEditOptions: {
        contentType: "application/json; charset=utf-8",
        dataType: "json",
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
        let url = $(this).getGridParam("delOption").delurl;
        return DeletePost(response, postdata, url, this);
      },
    };
    let prmAdd = {
      //add Options. save key parameter will keybind the Enter key to submit.
      addCaption: "Add Post",
      addtext: "Add",
      closeOnEscape: true,
      closeAfterAdd: true,
      savekey: [true, 13],
      url: options.addOption.addurl,
      ajaxEditOptions: {
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      },
      serializeEditData: function (postData) {
        postData["station"] = chkGridEditable(
          getUrlParameters(options.addOption.addurl)["sCode"]
        );
        console.log("dbgridpostData:", postData);
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
      },
    };
    let prmEdit = {
      //Edit Options. save key parameter will keybind the Enter key to submit.
      url: options.editOption.editurl,
      ajaxEditOptions: {
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      },
      serializeEditData: function (postData) {
        let rowData = $(this).jqGrid("getRowData", postData.id);
        Object.keys(rowData).forEach(function (item) {
          postData["OLD_" + item] = rowData[item];
          postData["station"] = chkGridEditable(
            getUrlParameters(options.editOption.editurl)["sCode"]
          );
        });
        console.log(postData);
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
        console.log("response", postdata);
        return EditPost(response, postdata, this);
      },
    };

    let $self = $("#" + options.gid);

    /*  $self.jqGrid('setGridParam', {
            url: options.gridDefinitionUrl,
            postData: options.gridDefPostData,
            datatype: 'json',
            loadonce: true
        });*/
    prmEdit = $.extend(false, prmEdit, options.editOption);
    prmAdd = $.extend(false, prmAdd, options.addOption);
    prmDel = $.extend(false, prmDel, options.delOption);
    prmSearch = $.extend(false, prmSearch, options.seachOption);
    prmView = $.extend(false, prmView, options.viewOption);
    $self.jqGrid(
      "navGrid",
      options.pager, {
        edit: options.edit,
        add: options.add,
        del: options.del,
        search: options.search,
        refresh: options.refresh,
        view: options.view,
        position: "left",
        cloneToTop: false,
      },
      /*{ beforeShowForm: function(form) {
                // "editmodlist"
                //console.log(form);
                let dlgDiv = $("#editmod" + $self[0].id);
                let parentDiv = dlgDiv.parent();
                let dlgWidth = dlgDiv.width();
                let parentWidth = parentDiv.width();
                let dlgHeight = dlgDiv.height();
                let parentHeight = parentDiv.height();
                // TODO: change parentWidth and parentHeight in case of the grid
                //       is larger as the browser window
                dlgDiv[0].style.top = Math.round((parentHeight-dlgHeight)/2) ;//+ "px";
                dlgDiv[0].style.left = Math.round((parentWidth-dlgWidth)/2) ;//+ "px";
             }},*/
      prmEdit,
      prmAdd,
      prmDel,
      prmSearch,
      prmView
    );

    if (options.xls) {
      addXls($self, options.pager);
    }
  }

  function chkGridEditable(webapi) {
    let station = "";

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: invokeGridURL + "Service_ChkListEditStation",
      dataType: "json",
      data: JSON.stringify({
        p: webapi,
      }),
      async: false,
      success: function (result) {

        if (result[0]["result"] == undefined) {
          result=jsonKeysToCase(result,1);
          station = result[0]["STATION"];
        }
      },
    });
    return station;
  }

  function commonError(data) {
    // return "Error Occured during Operation. Please try again";
  }

  /**
   *預設的edit函數,只顯示訊息
   *
   * @param {*} response
   * @param {*} postdata
   * @param {*} table
   * @returns
   */
  function EditPost(response, postdata, table) {
    let Resp;
    let key, value;
    let option = $(table).jqGrid("getGridParam", "editOption");
    //$(table).refreshGrid();
    // console.log(option);
    Resp = jQuery.parseJSON(response.responseText);
    /*
         if (Resp[0].result == "ok") {
             return [true, "OK", "Edit a completed data!"];
         } else {
             return [false, Resp[0].result];
         }
         */
    if (option["result"] == undefined) {
      key = "result";
      value = "ok";
    } else {
      key = option["result"].name;
      value = option["result"].value;
    }
    if (Resp[0][key] == value) {
      $(table).refreshGrid();
      return [true, "OK", "Edit a completed data!"];
    } else {
      return [false, Resp[0][key]];
    }
  }

  /**
   *預設Add函數,只顯示訊息
   *
   * @param {*} response
   * @param {*} postdata
   * @param {*} table
   * @returns
   */
  function AddPost(response, postdata, table) {
    let Resp;
    let key, value;
    let option = $(table).jqGrid("getGridParam", "addOption");
    Resp = jQuery.parseJSON(response.responseText);
    console.log("Resp", Resp);
    if (option["result"] == undefined) {
      key = "result";
      value = "ok";
    } else {
      key = option["result"].name;
      value = option["result"].value;
    }

    if (Resp[0][key] == value) {
      $(table).refreshGrid();
      return [true, "OK", "Add a completed data!"];
    } else {
      if (Resp[0][key] == undefined) {
        return [false, Resp[0]["result"]];
      } else {
        return [false, Resp[0][key]];
      }
    }
  }

  /**
   *預設的Del函數，刪除是在此執行
   *
   * @param {*} response
   * @param {*} postdata
   * @param {*} url
   * @param {*} table
   * @returns
   */
  function DeletePost(response, postdata, url, table) {
    let Resp;
    let key, value;
    let option = $(table).jqGrid("getGridParam", "delOption");
    // console.log(option);
    let rowData = $(table).jqGrid("getRowData", postdata.id);
    Object.keys(rowData).forEach(function (item) {
      postdata["OLD_" + item] = rowData[item];
    });
    postdata["station"] = chkGridEditable(getUrlParameters(url)["sCode"]);
    console.log("DEL POST", postdata);
    Resp = getAjaxData(url, postdata);
    console.log("DEL result", Resp);
    /*
        $(table).refreshGrid();
        if (Resp[0].result == "ok") {
            return [true, "OK", "Delete a completed data!"];
        } else {
            return [false, Resp[0].result];
        }
        */
    if (option["result"] == undefined) {
      key = "result";
      value = "ok";
    } else {
      key = option["result"].name;
      value = option["result"].value;
    }

    if (Resp[0][key] == value) {
      $(table).refreshGrid();
      return [true, "OK", "Delete a completed data!"];
    } else {
      return [false, Resp[0][key]];
    }
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
        $(grid).jqGrid("exportToExcel", {
          includeLabels: true,
          includeGroupHeader: true,
          includeFooter: true,
          fileName: caption + new Date().format("yyyyMMddhhmmss") + ".xlsx",
          maxlength: 80, // maxlength for visible string data
        });
      },
      position: "last",
      sepclass: "ui-separator",
      sepcontent: "&nbsp;&nbsp;",
    });
  }
  $.fn.navAddXls = function (grid, pager) {
    addXls(grid, pager);

  };
  /**
   *在local搜尋 jggrid資料
   *
   * @param {*} colname
   * @param {*} searchString
   */
  $.fn.searchByGrid = function (colname, searchString) {
    //console.log('colname:'+colname);
    //console.log('searchString:'+searchString);
    let grid_selector = "#" + this[0].id;
    let $grid = $(grid_selector);
    //  Prepare to pass a new search filter to our jqGrid
    let f = {
      groupOp: "AND",
      rules: [],
    };

    /*f.rules.push({
      field: colname, //欄位名稱
      op: "eq", //=
      data: searchString,
    });*/
       f.rules.push({
      field: colname, //欄位名稱
      op: "cn", //=
      data: searchString,
    });
    $grid[0].p.search = f.rules.length > 0;
    $.extend($grid[0].p.postData, {
      filters: JSON.stringify(f),
      _search: true,
    });
    $grid.trigger("reloadGrid", [{
      page: 1,
    }, ]);
    //    另外一種寫法

    /*  let postdata = $grid.jqGrid('getGridParam', 'postData');
          jQuery.extend(postdata, {
              filters: '',
              searchField: colname,
              searchOper: 'eq',
              searchString: searchString
          });
          $grid.jqGrid('setGridParam', {
              search: true,
              postData: postdata
          });
         $grid.trigger("reloadGrid", [{
              page: 1
          }]);*/
  };
  /**
   *重新由DB讀取資料
   *
   */
  $.fn.refreshGrid = function () {
    let url = $(this).getGridParam("gridDefinitionUrl");
    let pData = $(this).getGridParam("gridDefPostData");
    let page = $(this).getGridParam("page");
    // console.log('url:', url);
    // console.log('pData:', pData);
    //  console.log('page:', page);
    let rowNum = $(this).getGridParam("rowNum");
    let result = getAjaxData(url, pData);
    //console.log('result:', result);

    setDataToGrid(this[0].id, result);
    $(this)
      .setGridParam({
        // datastr: result,
        // datatype: "jsonstring", // !!! reset datatype
        page: page,
        rowNum: rowNum,
      })
      .trigger("reloadGrid");
  };
  $.fn.searchByDBToGrid = function (url, postData) {
    console.log("this[0]", this[0]);
    let result = getAjaxData(url, postData);
    let err = false;
    let colmodel = $(this).jqGrid("getGridParam", "colModel");
    let options = $(this).jqGrid("getGridParam");
    let gridOptions = $.extend(false, defaults, options);
    gridOptions.gid = this[0].id;
    gridOptions.gridDefinitionUrl = url;
    gridOptions.gridDefPostData = postData;
    if (result.length > 0) {
      if ("result" in result[0]) {
        if (result[0].result.indexOf("NG-java") != -1) {
          err = true;
        }
      }
    }
    if (!err) {
      if (colmodel.length > 0) {
        if (colmodel[0].name == "rn") {
          if (colmodel.length > 1) {
            setDataToGrid(this[0].id, result);
          } else {
            $.jgrid.gridUnload(this[0].id);
            //$(gridOptions.pager).removeAttr('dir').removeAttr('class').removeAttr('style');
            $(this).createJqGrid(gridOptions);
            setPager(gridOptions);
          }
        } else {
          setDataToGrid(this[0].id, result);
        }
      }
    } else {
      $(this).jqGrid("clearGridData");
    }

    /*if (!showError('#' + this.id, result)) {
            console.log("1");
            $(this).setGridParam({
                    datastr: result,
                    datatype: "jsonstring" // !!! reset datatype
                })
                .trigger("reloadGrid");
        }*/
  };

  /**
   *右鍵功能表
   *
   */
  function contextMenu() {
    $(this).contextMenu("contextMenu", {
      menuStyle: {
        width: "150px",
      },
      bindings: {
        edit: function (t) {
          alert("Edit Row Command Selected");
        },
        add: function (t) {
          alert("Add Row Command Selected");
        },
        del: function (t) {
          alert("Delete Row Command Selected");
        },
      },
      onContextMenu: function (event, menu) {
        var rowId = $(event.target).parent("tr").attr("id");
        var grid = $("#jqGrid");
        grid.setSelection(rowId);

        return true;
      },
    });
  }

  /**
   *Ajax 函數
   *
   * @param {*} strUrl
   * @param {*} postData
   * @returns
   */
  function getAjaxData(strUrl, postData) {
    let data = [];
    $.ajax({
      //ajax start
      type: "POST",
      url: strUrl,
      async: false,
      data: JSON.stringify(postData),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
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
          errorThrown: errorThrown,
        };
      },
      success: function (result) {
        //success start
        data = result;
      }, //success end
    }); //ajax end
    //console.log(data);
    return data;
  }

  function showError(id, jqXHR, textStatus, errorThrown) {
    // remove error div if exist
    let $self = $("#" + id);
    $("#" + id + "_err").remove();
    // insert div with the error description before the grid
    $self
      .closest("div.ui-jqgrid")
      .before(
        '<div id="' +
        id +
        '_err" style="max-width:' +
        $self.style.width +
        ';"><div class="ui-state-error ui-corner-all" style="padding:0.7em;float:left;">' +
        decodeErrorMessage(jqXHR, textStatus, errorThrown) +
        '</div><div style="clear:left"/></div>'
      );
  }

  function SetClass(grid, api) { //設定 Col || Row Class
    console.log('Set Class API:' + api);
    let data = getAjaxData(invokeGridURL + "SERVICE_COL_CLASS_SELECT", {
      code: api
    });
    let ids = $(grid).jqGrid("getDataIDs");
    if (!data[0].result) {
      for (let i = 0; i < ids.length; i++) {
        let row = $(grid).jqGrid('getRowData', ids[i]);
        for (let j = 0; j < data.length; j++) {
          if (row.hasOwnProperty(data[j].COMPARE_FIELD)) {
            // console.log(data[j].COMPARE_FIELD,executeFunctionByName(data[j].PROCESSING,row[data[j].COMPARE_FIELD]));
            // console.log(row[data[j].COMPARE_FIELD]);
            let result;
            if (data[j].PROCESSING) {
              result = SetClassLogic(executeFunctionByName(data[j].PROCESSING, row[data[j].COMPARE_FIELD]), data[j].LOGIC, data[j].VALUE, data[j].CLASS);
            } else {
              result = SetClassLogic(row[data[j].COMPARE_FIELD], data[j].LOGIC, data[j].VALUE, data[j].CLASS);
            }
            if (result) {
              let sClass;
              if (isJSON_test(result)) {
                sClass = JSON.parse(result);
              } else {
                sClass = getClassBody(result);
              }
              console.log('sClass', sClass);
              if (data[j].COL) {
                $(grid).jqGrid('setCell', ids[i], data[j].COL, '', sClass);
              } else {
                $(grid).jqGrid('setRowData', ids[i], false, sClass);
              }
            }
          }
        }
      }
    } else {
      console.log('set Class err :' + data[0].result);
    }
  }

  function getClassBody(cid) {
    let returnVal;
    let classData={}
    let result = getAjaxData(invokeGridURL + "SERVICE_CLASS_SELECT", {
      id: cid
    });
    console.log('result', result);
    if (result[0].result == undefined) {
      let len=Object.keys(result[0]).length
      result.forEach(function (e) {
        // if (prop.toUpperCase() == e.NAME.toUpperCase()) {
        
        for (let i = 0; i < len; i++) {
          console.log(Object.keys(e)[i],e[Object.keys(e)[i]]);
            if(Object.keys(e)[i]!="CLASSID"){
              classData[Object.keys(e)[i].toLowerCase()]=e[Object.keys(e)[i]];
            }
        }
      });
      returnVal=classData;
    } else {
      returnVal = cid;
    }
    return returnVal
  }

  function SetClassLogic(value, LOGIC, mValue, ctype) { //SetClass 邏輯判斷
    let type = undefined;
    switch (LOGIC) {
      case ">":
        if (value > mValue) {
          type = ctype;
        }
        break;
      case "==":
        if (value == mValue) {
          type = ctype;
        }
        break;
      case "<":
        if (value < mValue) {
          type = ctype;
        }
        break;
      case "=>":
        if (value => mValue) {
          type = ctype;
        }
        break;
      case "<=":
        if (value <= mValue) {
          type = ctype;
        }
        break;
    }
    return type;
  }

  function isJSON_test(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        console.log('轉換成功:' + obj);
        return true;
      } catch (e) {
        console.log('error:' + str + '!!!' + e);
        return false;
      }
    }
    console.log('It is not a string!')
  }
  //example:executeFunctionByName("example2", "101%", "test3");
  function executeFunctionByName(functionName, context /*, args */ ) { //輸入 functionName:function name,context:{arg1,arg2}參數
    var args, namespaces, func;

    if (typeof functionName === 'undefined') {
      throw 'function name not specified';
    }

    if (typeof eval(functionName) !== 'function') {
      throw functionName + ' is not a function';
    }

    if (typeof context !== 'undefined') {
      if (typeof context === 'object' && context instanceof Array === false) {
        if (typeof context[functionName] !== 'function') {
          throw context + '.' + functionName + ' is not a function';
        }
        args = Array.prototype.slice.call(arguments, 2);

      } else {
        args = Array.prototype.slice.call(arguments, 1);
        context = window;
      }

    } else {
      context = window;
    }

    namespaces = functionName.split(".");
    func = namespaces.pop();

    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }

    return context[func].apply(context, args);
  }
  /**
     * @param {Object} json
     * @param {Object} type： 默認不傳 ==>全部小寫;傳1 ==>全部大寫;傳2 ==>首字母大寫
     * 將json的key值進行大小寫轉換
     * ---------------------------------------------------------------------------
     * -------------------------------START---------------------------------------
     * ---------------------------------------------------------------------------
     */

 function jsonKeysToCase(json, type) {
  if (typeof json == 'object') {
      let tempJson = JSON.parse(JSON.stringify(json));
      toCase(tempJson, type);
      return tempJson;
  } else {
      return json;
  }
}

function toCase(json, type) {
  if (typeof json == 'object') {
      if (Array.isArray(json)) {
          json.forEach(function (item) {
              toCase(item,type);
          })
      } else {
          for (let key in json) {
              var item = json[key];
              if (typeof item == 'object') {
                  toCase(item,type);
              }
              delete (json[key]);
              switch (type) {
                  case 1:
                      //key值全部大写
                      json[key.toLocaleUpperCase()] = item;
                      break;
                  case 2:
                      //key值首字母大写，其余小写
                      json[key.substring(0, 1).toLocaleUpperCase() + key.substring(1).toLocaleLowerCase()] = item;
                      break;
                  default:
                      //默认key值全部小写
                      json[key.toLocaleLowerCase()] = item;
                      break;
              }
          }
      }
  }
}
/**

   * ---------------------------------------------------------------------------
   * -------------------------------END---------------------------------------
   * ---------------------------------------------------------------------------
   */
})(jQuery);