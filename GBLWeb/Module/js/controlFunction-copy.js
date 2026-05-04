class ControlFunction {
  constructor() {
    this.clickTarget;
    this.pageMappingFunction = [
      {
        pathName: "index-copy.html",
        page: "home",
        templateUrl: "./home.html",
        type: "landding",
        caption: "",
        params: { serviceType: "", groupField: "" },
        handler: "",
      },
      {
        pathName: "CmdSql.html",
        page: "CmdSql",
        templateUrl: "./jqgridWithSelectorPage.html",
        type: "jqgrid",
        caption: "SQL Group",
        params: { serviceType: "SQL", groupField: "SERVICE_CODE" },
        handler: this.pageWithSelector,
      },
      {
        pathName: "CmdCondition.html",
        page: "CmdCondition",
        templateUrl: "./jqgridWithSelectorPage.html",
        type: "jqgrid",
        caption: "Condition",
        params: { serviceType: "CONDITION", groupField: "STATION" },
        handler: this.pageWithSelector,
      },
      {
        pathName: "ColumnConfig.html",
        page: "ColumnConfig",
        templateUrl: "./jqgridWithSelectorPage.html",
        type: "jqgrid",
        caption: "Column Config",
        params: { serviceType: "COLUMN_CONFIG", groupField: "SERVICE_CODE" },
        handler: this.pageWithSelector,
      },
      {
        pathName: "ColumnEditOptions.html",
        page: "ColumnEditOptions",
        templateUrl: "./jqgridWithSelectorPage.html",
        type: "jqgrid",
        caption: "Column Edit Options",
        params: {
          serviceType: "COLUMN_EDIT_OPTIONS",
          groupField: "SERVICE_CODE",
        },
        handler: this.pageWithSelector,
      },
      {
        pathName: "accountManagement.html",
        page: "AccountManagement",
        templateUrl: "./jqgridWithoutSelectorPage.html",
        type: "jqgrid",
        caption: "Account Management",
        params: { serviceType: "", groupField: "" },
        handler: this.pageWithoutSelector,
      },
    ];
    this.invokeUrl_accountManagement = "https://10.0.204.89/MES/invoke?sCode=";
    this.navbarContainer = document.getElementById("navbarContent");
    this.aLinks = this.navbarContainer.getElementsByClassName("nav-link");
    this.container = document.getElementById("container");
    this.addEnevtToNavbar(this.aLinks);
  }

  landdingPage() {
    let lastPathName = document.location.pathname
      .split("/")
      .filter((e) => e !== "")
      .filter((e) => e !== siteName)
      .pop();

    if (
      lastPathName.length === 0 ||
      lastPathName === this.pageMappingFunction[0].pathName
    ) {
      this.clickTarget = this.pageMappingFunction.find(
        (x) => x.pathName === lastPathName
      );
      this.pageTrigger(this.aLinks);
      return;
    }

    this.clickTarget = this.pageMappingFunction.find(
      (x) => x.pathName === lastPathName
    );
    this.pageTrigger(this.aLinks);
  }

  jqgridSetting(strList) {
    return {
      caption: strList.caption,
      pager: "#grid-pager1",
      shrinkToFit: false,
      gridDefColionUrl: `./Module/json/${strList.page}.json`, //gridColumnConfig
      edit: true,
      grouping: true,
      groupingView: {
        //gridGroupSetting
        groupField: [`${strList.params.groupField}`],
      },
      colFunction: {},
      sortname: "",
    };
  }
  jqgridSetting_For_AccountManagement() {
    return _.merge(jqgridSetting(this.clickTarget), {
      shrinkToFit: true,
      sortname: "LASTPASSWORDRESETDATE",
      edit: false,
      addOption: {
        addurl: "/",
        afterSubmit: addAccount,
      },
      delOption: {
        delurl: "/",
        afterSubmit: delAccount,
      },
      colFunction: {
        myelem: myelem,
        myval: myvalue,
        nameElem: nameElem,
        nameVal: nameVal,
      },
      gridDefColionUrl: "./Module/json/accountManagement.json",
      gridDefinitionUrl: invokeUrl + "SYSUSER_SELECT",
      gridDefPostData: {},
      grouping: false,
    });
  }

  addEnevtToNavbar(navbarLinks) {
    for (let aLink of navbarLinks) {
      aLink.addEventListener("click", (e) => {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].classList.toggle("active");
        }
        e.target.classList.toggle("active");

        let aLinkAttributeValue = e.target.attributes.page.value;
        this.clickTarget = this.pageMappingFunction.find(
          (x) => x.page === aLinkAttributeValue
        );

        $.get(this.clickTarget.templateUrl, function (tags) {
          this.container.innerHTML = tags;
          loginCheck(); //登入檢查
          if (this.clickTarget.type === "jqgrid") this.clickTarget.handler();
        });
      });
    }
  }
  pageTrigger(aLinks) {
    Array.from(aLinks)
      .find((x) => x.attributes.page.value === this.clickTarget.page)
      .click();
  }

  reloadDataToGrid(e) {
    let invokeCode = e.target.value;

    $.jgrid.gridUnload("#grid-table1");

    setConfig_gridJs(
      $("#grid-table1"),
      invoke_URL_gridJs(invokeCode),
      this.clickTarget.params.serviceType,
      jqgridSetting(this.clickTarget)
    );
  }

  pageWithSelector() {
    let systemSelector = document.getElementById("systemSelector");
    systemSelector.addEventListener("change", reloadDataToGrid);
    createSelectorOptions_gridJs(systemSelector);

    setConfig_gridJs(
      $("#grid-table1"),
      invoke_URL_gridJs(invokeCode),
      this.clickTarget.params.serviceType,
      jqgridSetting(this.clickTarget)
    );
  }

  pageWithoutSelector() {
    setConfig_gridJs(
      $("#grid-table1"),
      invoke_URL_gridJs(""),
      this.clickTarget.params.serviceType,
      jqgridSetting_For_AccountManagement()
    );

    setDialog();
  }
}

var addAccount = function (response, postdata) {
  let url = baseURL + "auth/register";
  let post = {
    username: postdata.USERNAME,
    password: postdata.PASSWORD,
    email: postdata.EMAIL,
    roles: postdata.ROLEGROUP.split(";"),
  };

  let result = ajaxGetData(url, post);
  $("#jqGrid1").refreshGrid();
  if ("id" in result) {
    return [true, "OK", "Edit a completed data!"];
  } else {
    return [false, result];
  }
};
var delAccount = function (response, postdata) {
  let url = invokeUrl_accountManagement + "Account_Management_DEL";
  let result = ajaxGetData(url, {
    USERNAME: postdata.id,
  });
  if (Array.isArray(result)) {
    if (result[0].result == "ok") {
      $("#jqGrid1").refreshGrid();
      return [true, "OK", "Edit a completed data!"];
    } else {
      return [false, result];
    }
  }
};

function nameElem(value, options) {
  let el = document.createElement("input");
  el.className = "form-control";
  el.type = "text";
  el.value = value;
  $(el).attr("disabled", false);
  if (options.rowId != "_empty") {
    $(el).attr("disabled", true);
  }
  return el;
}

function nameVal(elem, operation, value) {
  if (operation === "get") {
    return $(elem).val();
  } else if (operation === "set") {
    $("input", elem).val(value);
  }
}

function myelem(value, options) {
  let div = document.createElement("div");
  let divSub = document.createElement("div");
  let el = document.createElement("input");
  let btn = document.createElement("button");

  div.className = "input-group";
  el.type = "text";
  el.value = value;
  el.className = "form-control";
  $(el).attr("disabled", true);
  divSub.className = "input-group-append";
  btn.className = "btn btn-outline-secondary";
  btn.type = "button";
  $(btn).html("Choose...");
  divSub.append(btn);
  div.append(el);
  div.append(divSub);
  $(btn).on("click", function () {
    pickupdata(value, options);
  });

  return div;
}

function myvalue(elem, operation, value) {
  if (operation === "get") {
    return $("#ROLEGROUP input").val();
  } else if (operation === "set") {
    //$('#ROLEGROUP input').val(value);
  }
}

function setDialog() {
  /*!-- Modal  start--*/
  let dialog =
    "<form>" +
    '<div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModalTitle"' +
    'aria-hidden="true">' +
    '<div class="modal-dialog modal-dialog-centered" role="document">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<h5 class="modal-title" id="eventModalLongTitle">' +
    "</h5>" +
    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    "</button>" +
    "</div>" +
    '<div class="modal-body ">' +
    '<div class="input-group mb-2">' +
    '<span class="input-group-prepend input-group-addon ">' +
    '<div class="input-group-text ">' +
    "<i>ROLE:</i>" +
    "</div>" +
    "</span>" +
    '<select id="roleId" class="form-control">' +
    '<option value="ROLE_ADMIN">ROLE ADMIN</option>' +
    '<option value="ROLE_USER">ROLE USER</option>' +
    "</select>" +
    "</div>" +
    '<div class="input-group mb-2" id="roleGRoupDiv">' +
    '<span class="input-group-prepend input-group-addon ">' +
    '<div class="input-group-text" >' +
    "<i>USER GROUP:</i>" +
    "</div>" +
    "</span>" +
    '<select class="selectpicker" id="rGRoup" data-actions-box="true" data-width="73%" multiple >';
  $.map(
    ajaxGetData(invokeUrl_accountManagement + "SYSUSERROLES_SELECT", {}),
    function (items, index) {
      dialog += "<option>" + items.ROLENAME + "</option>";
    }
  );
  dialog +=
    "</select>" +
    "</div>" +
    '<div class="modal-footer modalBtnContainer-addEvent">' +
    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
    '<button type="button" class="btn btn-primary" id="modify-event">Modify</button>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</form>";
  /*-- Modal  end--*/
  $("body").append(dialog);
  $.fn.selectpicker.Constructor.BootstrapVersion = "4";
  $("select").selectpicker();
  $("#roleId").on("change", function () {
    if ($("#roleId").val() == "ROLE_USER") {
      $("#roleGRoupDiv").show();
    } else {
      $("#roleGRoupDiv").hide();
    }
  });

  $("#modify-event").on("click", function () {
    let value = "";
    let tmp = [];
    if (!$("#roleGRoupDiv").is(":hidden")) {
      tmp = $("#rGRoup").val();
    }
    tmp.unshift($("#roleId").val());
    value = tmp.join(";");
    $("#ROLEGROUP input").val(value);
    $("#eventModal").modal("hide");
  });
}

function pickupdata(value, options) {
  let rGroup = value.split(";");
  let group = [];
  //model 初始化
  $("#roleGRoupDiv").hide();
  $("#roleId").val("ROLE_ADMIN");
  $("#roleId").change();
  //檢查值
  $.map(rGroup, function (item, index) {
    if (item == "ROLE_USER" || item == "ROLE_ADMIN") {
      $("#roleId").val(item);
      $("#roleId").change();
    } else {
      group.push(item);
    }
  });
  if (group.length > 0) {
    $("#rGRoup").selectpicker("val", group);
  }

  $("#eventModal").modal("show");
}

export { ControlFunction };
