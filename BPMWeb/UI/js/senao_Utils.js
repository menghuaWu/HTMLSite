/*==============================================================================
[檔案名稱]senao_Utils_JC.js
[撰 寫 人]未紀錄
[修改紀錄]
[MMo]2023/06/06 By Senao-Michael 調整程式架構與說明
[MMo]2025/03/06 By Senao-Michael _ORG 增加sna: 431
[MMo]2025/03/06 By Senao-Michael _OU  增加sna: 411
[MMo]2025/05/08 By Senao-JC           增加setSelectDefalut(設定select element Lisst)
==============================================================================*/
/*------------------------------------------------------------------------------
[Variable Name]apiInvoke
[Variable Descript]api連線的Invoke
[Modify Log]
[Mo]Modify.....:20250508 By JC 新增說明
[Mo]Modify.....:20250508 By JC 增加範例說明
[Example]
[Ex] 供ajax連線參數使用 
[Show Codes=Y]
------------------------------------------------------------------------------*/
var apiInvoke = "";
/*------------------------------------------------------------------------------
[Variable Name]DbCfgId_EFGP
[Variable Descript]EFGP DataSoruce
[Modify Log]
[Mo]Modify.....:20230606 By Michael 新增說明
[Mo]Modify.....:20230619 By Calvin 增加範例說明
[Example]
[Ex] 供ajax_DatabaseAccessor參數使用 ajax_DatabaseAccessor.executeQuery(DbCfgId_EFGP, strSQL, null, null, function(data)...
[Show Codes=Y]
------------------------------------------------------------------------------*/
var DbCfgId_EFGP = "EFGP";

/*------------------------------------------------------------------------------
[Variable Name]_ORG
[Variable Descript]ORG代碼
[Modify Log]
[Mo]Modify.....:20230606 By Michael 新增說明
[Mo]Modify.....:20230619 By Calvin 增加範例說明
[Example]
[Ex] 取得廠區別ID,ORG_ID = _ORG[$$("#form_ou").val()];
[Ex] _ORG["senao"],return 86
[Show Codes=Y]
------------------------------------------------------------------------------*/
var _ORG = {};

/*------------------------------------------------------------------------------
[Variable Name]_OU
[Variable Descript]OU代碼
[Modify Log]
[Mo]Modify.....:20230606 By Michael 新增說明
[Mo]Modify.....:20230619 By Calvin 增加範例說明
[Example]
[Ex] 取得公司別ID,OU_ID = _OU[$$("#form_ou").val()];
[Ex] _OU["senao"],return 82
[Show Codes=Y]
------------------------------------------------------------------------------*/
var _OU = {};

/*------------------------------------------------------------------------------
[Variable Name]efspURL
[Variable Descript]efspURL網址
[Modify Log]
[Mo]Modify.....:20230606 By Michael 新增說明
[Mo]Modify.....:20230619 By Calvin 增加範例說明
[Example]
[Ex] 舊版列印ireport報表用:var tURL = efspURL + "/EFGPToSP7/ReDirectory_GP.asp?"+...，新版已改用/zReportUtil/report/sreport.jsp呼叫
[Show Codes=Y]
------------------------------------------------------------------------------*/
var efspURL = "http://ezflow.senao.com";

/*------------------------------------------------------------------------------
[Variable Name]formLabelBGColor
[Variable Descript]表單顯示Label顏色變數
[Modify Log]
[Mo]Modify.....:20180529 By Chandler Add
[Mo]Modify.....:20230606 By Michael 新增說明
[Mo]Modify.....:20230620 By Calvin 增加範例說明
[Example]
[Ex] 表單的text標背景色，$$("[name^='lbl_'],[name^='Label27'],[name^='Label29'],[name^='Label61'],[name^='Label68'],[name^='Label65']:not([name$='_hdn'],[name*='Grid'],[name$='001'],[name$='002'])[class='formButtonClass']").css("background-color", formLabelBGColor);
[Show Codes=Y]
------------------------------------------------------------------------------*/
var formLabelBGColor = "#c2d5dd";

/*------------------------------------------------------------------------------
[Function Name]trim
[Function Descript]直接定義String加上此.trim，去除字串前後的空白
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20170608 By TinYu 新增
[Mo]Modify.....:20230606 By Michael 新增說明
[Example]
[Ex] const greeting = '   Hello world!   ';
[Ex] console.log(greeting);         
[Ex] // Expected output: "   Hello world!   ";
[Ex] console.log(greeting.trim());  
[Ex] // Expected output: "Hello world!";
[Show Codes=Y]
------------------------------------------------------------------------------*/
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

/*------------------------------------------------------------------------------
[Function Name]endsWith
[Function Descript]直接定義String加上此.endsWith，比對字串末尾，是否跟要比對(字串)一致?
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230620 By Calvin 檢查js尚未有表單使用
[Example]
[Ex] const str1 = 'Cats are the best!';
[Ex] console.log(str1.endsWith('best!'));
[Ex] // Expected output: true
[Ex] console.log(str1.endsWith('best', 17));
[Ex] // Expected output: true
[Ex] const str2 = 'Is this a question?';
[Ex] console.log(str2.endsWith('question'));
[Ex] // Expected output: false
[Show Codes=Y] 
------------------------------------------------------------------------------*/
String.prototype.endsWith = function (suffix) {
    return this.match(suffix + "$") == suffix;
};


/*------------------------------------------------------------------------------
[Function Name]startsWith
[Function Descript]直接定義String加上此.startsWith，比對字串開頭，是否跟要比對(字串)一致?
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230620 By Calvin 檢查js尚未有表單使用
[Example]
[Ex] const str1 = 'Saturday night plans';
[Ex] console.log(str1.startsWith('Sat'));
[Ex] //Expected output: true
[Ex] console.log(str1.startsWith('Sat', 3));
[Ex] // Expected output: false
[Show Codes=Y] 
------------------------------------------------------------------------------*/
String.prototype.startsWith = function (suffix) {
    return this.indexOf(suffix) === 0;
};


/*------------------------------------------------------------------------------
[Function Name]toFixed
[Function Descript]直接定義Number加上此.toFixed，將有小數的轉成到幾位的四拾五入
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Ex] Number1=123.456
[Ex] console.log(Number1.toFixed(2));
[Ex] // Expected output: "123.46"
[Ex] Number1=0.004
[Ex] console.log(Number1.toFixed(2));
[Ex] // Expected output: "0.00"
[Ex] Number1='1.23e+5'
[Ex] console.log(Number1.toFixed(2));
[Ex] // Expected output: "123000.00"
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Number.prototype.toFixed = function (precision) {
    var value = this.toString(),
        power = Math.pow(10, precision || 0);

    return (Math.round(value * power) / power);
};

/*------------------------------------------------------------------------------
[Function Name]indexOf
[Function Descript]IE8以下不支援所以要加這個, 將Array加上indexOf用來判斷, 是否有相同的值在陣列裡，直接定義Array加上此indexOf()方法返回可以在數組中找到給定元素的第一個索引，如果不存在則返回 -1。
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Ex] const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
[Ex] console.log(beasts.indexOf('bison'));
[Ex] // Expected output: 1
[Ex] // Start from index 2
[Ex] console.log(beasts.indexOf('bison', 2));
[Ex] // Expected output: 4
[Ex] console.log(beasts.indexOf('giraffe'));
[Ex] // Expected output: -1
[Show Codes=Y] 
------------------------------------------------------------------------------*/
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (needle) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === needle) {
                return i;
            }
        }

        return -1;
    };
}

/*------------------------------------------------------------------------------
[Function Name]isLeapYear
[Function Descript]直接定義Date加上此.isLeapYear，判斷是否為閏年?
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.isLeapYear = function () {
    return (((this.getFullYear() % 4 === 0) && (this.getFullYear() % 100 !== 0)) || (this.getFullYear() % 400 === 0));
};

/*------------------------------------------------------------------------------
[Function Name]getDaysInMonth
[Function Descript]直接定義Date加上此.getDaysInMonth，取得這個日期的月份有幾天
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.getDaysInMonth = function () {
    return [31, (this.isLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()];
};

/*------------------------------------------------------------------------------
[Function Name]getWeekOfYear
[Function Descript]直接定義Date加上此.getWeekOfYear，取得一年有幾週by 星期一為起始
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.getWeekOfYear = function () {
    var checkDate = new Date(this.getTime());
    // Find Thursday of this week starting on Monday
    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    var time = checkDate.getTime();
    checkDate.setMonth(0); // Compare with Jan 1
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
};

/*------------------------------------------------------------------------------
[Function Name]addMonths
[Function Descript]直接定義Date加上此.addMonths，將日期加一個月
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

/*------------------------------------------------------------------------------
[Function Name]addDays
[Function Descript]直接定義Date加上此.addDays，日期增加天數，回傳增加天數的日期
[Parameter] @param   增加天數 days 增加天數
[Returns] @returns 回傳增加天數的日期
[Modify Log]
[Mo]Modify.....:20190510 By Senao-Jeff
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]var datelast_date = new Date("2023/06/26");
[Ex]var dateEffective_Released_Date = datelast_date.addDays(1);
[Ex]dateEffective_Released_Date : 2023/06/27
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};

/*------------------------------------------------------------------------------
[Function Name]yyyymmdd
[Function Descript]直接定義Date加上此.yyyymmdd，回傳指定格式yyyymmdd
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20190516 Jeff
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]日期轉字串 YYYYMMDD格式 ex:2019/5/10->20290510
[Show Codes=Y] 
------------------------------------------------------------------------------*/
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('');
};
/*------------------------------------------------------------------------------
[Function Name]changeOptionMethod
[Function Descript]select option用text的值指定
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250508 By JC 新增說明
[Mo]Modify.....:20250508 By JC 新增說明
[Example]
[Ex]changeOptionMethod('form_ou','恩睿科技'); 
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function changeOptionMethod(eid, val) {
    let selected = ""
    $("select[name=" + eid + "] option").each(function () {
        if ($(this).text() == val) {
            selected = $(this).val();
            return false; //跳出
        }
    });
    $("select[name=" + eid + "]").val(selected);
    if (selected == "") {
        return false;
    } else {
        return true;
    }
}
/*------------------------------------------------------------------------------
[Function Name]setCompanyObject
[Function Descript]設定_OU _ORG資料 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250508 By Senao-JC 
[Example]
[Show Codes=Y] 
[Parameter]  
------------------------------------------------------------------------------*/
function setCompanyObject() {
    //通用需要載入的資料
    //設定公司別

    let result = ajaxGetData(apiInvoke + "BPM_COMPANY_OU_LIST", {});
    if (result[0].result == undefined) {
        if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                _OU[result[i].COMPANY] = result[i].ORACLE_OU;
            }

        }
    }
    //設定廠區

    result = ajaxGetData(apiInvoke + "BPM_COMPANY_ORG_LIST", { BAS_COMPANY: null });
    if (result[0].result == undefined) {
        if (result.length > 0) {
            for (let i = 0; i < result.length; i++) {
                _ORG[result[i].FACTORY] = result[i].ORACLE_ORG;
            }
        }
    }
    return true;
}

/*------------------------------------------------------------------------------
[Function Name]setSelectDefalut
[Function Descript]設定select element Lisst 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
[Parameter] id:元件名稱,api:Web APi name,pData:api參數,defaultValue:預設值
------------------------------------------------------------------------------*/
function setSelectDefalut(id, api, pData, defaultValue) {
    let status = false;
    let result = ajaxGetData(api, pData);
    $("#" + id + "  option").remove();
    $("#" + id).append($("<option></option>").attr("value", "").text(""));
    if (result[0].result == undefined) {
        let colName = Object.keys(result[0]);
        $.map(result, function (item) {
            if (item[0] == defaultValue) {
                $("#" + id).append(
                    $("<option selected></option>")
                        .attr("value", item[colName[0]])
                        .text(item[colName[1]])
                );
            } else {
                $($("#" + id)).append(
                    $("<option></option>")
                        .attr("value", item[colName[0]])
                        .text(item[colName[1]])
                );
            }
        });
        status = true;
    } else {
       /* alert(
            "setSelectDefalut function to" +
            $("#lbl_" + id).html() +
            " Error Msg:" +
            result[0].result
        );
        */
    }
    return status;
}
/*------------------------------------------------------------------------------
[Function Name]CustomDataChooser
[Function Descript]開啟資料搜尋視窗
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex] let tTitle = "加簽人員";  //子視窗抬頭
    let tFileName = "PluralityOpenWin"; //單選:SingleOpenWin 多選:PluralityOpenWin
    let tReturnFunction = new Array("senao113m029_process()"); //回傳函數
    let tColAPi = "BPM_getUser";
    let tAPI = invokeURL + 'BPM_getUser';
    let tParameter = { form_ou: 'senao', mainOrgId: 'senao', ID: 'ALL', NAME: 'ALL', ORGANIZATIONUNITNAME: 'ALL', OUID: 'ALL' };
    let tQBEField = { ID: 'ID', NAME: 'USERNAME', ORGANIZATIONUNITNAME: 'ORGANIZATIONUNITNAME', OUID: 'OUID' }; //查詢欄位 {參數欄位:table欄位};	
    let tReturnId = new Array("senao113m039","senao113m040");
    CustomDataChooser(tTitle,tFileName,tReturnId,tReturnFunction,tAPI,tColAPi,tParameter,tQBEField,pWidth,pHeight)
[Show Codes=Y] 
[Parameter] tTitle:子視窗抬頭,tFileName:單選:SingleOpenWin 多選:PluralityOpenWin,
tReturnId:回傳元件的位置,tReturnFunction:回傳執行的函數,tAPI:資料搜尋的API,tColAPi:資料欄位的API,
tParameter:API的參數,tQBEField:查詢欄位 {參數欄位:table欄位},pWidth:視窗寬庫,pHeight:視窗高度
------------------------------------------------------------------------------*/
function CustomDataChooser(tTitle, tFileName, tReturnId, tReturnFunction, tAPI, tColAPi, tParameter, tQBEField, pWidth, pHeight) {
    sessionStorage.setItem("tTitle", tTitle);
    sessionStorage.setItem("tFileName", tFileName);
    sessionStorage.setItem("tReturnId", tReturnId);
    sessionStorage.setItem("tReturnFunction", tReturnFunction); //子視窗回傳處理函數
    sessionStorage.setItem("tColAPi", tColAPi); //子視窗 col api
    sessionStorage.setItem("tAPI", tAPI); //子視窗 api
    sessionStorage.setItem("tParameter", JSON.stringify(tParameter)); //子視窗 api 參數
    sessionStorage.setItem("tQBEField", JSON.stringify(tQBEField)); //查詢欄位
    window.open("/BPMWeb/FRM/DataChooser.html", "", "width=" + pWidth + ",height=" + pHeight + ",resizable=1");
}
/*------------------------------------------------------------------------------
[Function Name]CustomDataChooserClose
[Function Descript]資料搜尋視窗迴船要執行的函數
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex] 
[Show Codes=Y] 
[Parameter] 函數名稱senao113m003_process()、senao113m004_process()*/
function CustomDataChooserClose(funlist) { //子視窗回傳參數
    for (let i = 0; i < funlist.length; i++) {
        eval(funlist[i]);
    }

}
/*------------------------------------------------------------------------------
[Function Name]toFixedNumber
[Function Descript]將有小數的轉成到幾位的四拾五入
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]toFixedNumber(151.875,2),return 151.88
[Ex]toFixedNumber(A.375,2),return 0
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function toFixedNumber(number, pos) {
    if (isNaN(pos)) {
        pos = 2;
    }

    if (!isNaN(number)) {
        return parseInt(number, 10) == (number * 1) ? number : (number * 1).toFixed(pos);
    } else {
        return 0;
    }
}

/*------------------------------------------------------------------------------
[Function Name]isNumeric
[Function Descript]jQuery 的 isNumeric 實現，判斷是不是數字
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]isNumeric(12.5),return true
[Ex]isNumeric(A.5),return false
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function isNumeric(obj) {
    return !isNaN(obj - parseFloat(obj));
}

/*------------------------------------------------------------------------------
[Function Name]getGroupUserID
[Function Descript]用群組代號帶出使用者ID
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明，因多公司別已統一改用getGroupUserID_byOrg，請勿使用此function
[Example]
[Ex]getGroupUserID("EFGP","SN071_01", function (pData) {...,retun 群組人員的工號與姓名資料依function內的程式傳到指定欄位或其他處理
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getGroupUserID(groupid) {
    let data = [];
    result = ajaxGetData(apiInvoke + "BPM_getGroupUserID", { id: groupid });
    if (result[0].result == undefined) {
        if (result.length > 0) {
            data = result;
        }
    }
    return data;
}

/*------------------------------------------------------------------------------
[Function Name]getGroupUserID_byOrg
[Function Descript]用群組代號帶出使用者ID
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]getGroupUserID("EFGP","SN071_01","senao", function (pData) {...,retun 群組人員的工號與姓名資料依function內的程式傳到指定欄位或其他處理
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getGroupUserID_byOrg(dbId, groupid, Org_ID, func) {
    var sql = "select b.id as groupid,b.GROUPNAME,c.id as userid,c.USERNAME,c.LEAVEDATE from GROUP_USER a,groups b,users c, ORGANIZATION o where a.GROUPOID=b.oid and a.USEROID=c.oid and b.Organizationoid = o.OID and c.LEAVEDATE is null and b.id='" + groupid + "' and o.ID='" + Org_ID + "' order by b.id";
    ajax_DatabaseAccessor.executeQuery(dbId, sql, null, null, func);
}

/*------------------------------------------------------------------------------
[Function Name]getGroupUserManagerID
[Function Descript]用群組代號帶出使用者ID及直屬主管ID
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Ex]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getGroupUserManagerID(dbId, groupid, func) {
    var sql = "select b.id as groupid,b.GROUPNAME,c.id as userid,c.USERNAME,c.LEAVEDATE,  m.id as managerid, m.USERNAME managername from GROUP_USER a,groups b,users c where a.GROUPOID=b.oid and a.USEROID=c.oid and c.LEAVEDATE is null AND f.OCCUPANTOID = c.oid AND m.oid = f.SPECIFIEDMANAGEROID AND f.ismain = 1 and b.id='" + groupid + "' order by b.id";
    ajax_DatabaseAccessor.executeQuery(dbId, sql, null, null, func);
}


/*------------------------------------------------------------------------------
[Function Name]setDeptByUserId
[Function Descript]用工號帶出部門
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Ex]setDeptByUserId("EFGP", "103858", function(pData){...,return 部門ID與名稱依function內的程式傳到指定欄位或其他處理
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setDeptByUserId(dbId, userId, func) {
    var sql = "SELECT ut.id, ut.organizationunitname name FROM users u, functions f, organizationunit ut WHERE u.LEAVEDATE IS NULL AND u.ID = '" + userId + "' AND f.OCCUPANTOID = u.oid AND f.ismain = 1 AND ut.oid = f.ORGANIZATIONUNITOID";

    ajax_DatabaseAccessor.executeQuery(dbId, sql, null, null, func);
}

/*------------------------------------------------------------------------------
[Function Name]setManagerByUserId
[Function Descript]用工號帶出主管
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setManagerByUserId(dbId, userId, func) {
    var sql = "SELECT u2.id, u2.username FROM users u1, users u2, functions f WHERE u1.id = '" + userId + "' AND f.OCCUPANTOID = u1.oid AND u2.oid = f.SPECIFIEDMANAGEROID AND f.ismain = 1";

    ajax_DatabaseAccessor.executeQuery(dbId, sql, null, null, func);
}

/*------------------------------------------------------------------------------
[Function Name]setManagerByDeptId
[Function Descript]用部門id帶出主管
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]setManagerByDeptId("EFGP","10532",function(pData){...,return 工號與姓名依function內的程式傳到指定欄位或其他處理
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setManagerByDeptId(dbId, deptId, func) {
    var sql = "select u.id, u.username FROM organizationunit o join users u on o.MANAGEROID = u.oid WHERE o.id = '" + deptId + "' and o.VALIDTYPE = 1";

    ajax_DatabaseAccessor.executeQuery(dbId, sql, null, null, func);
}

/*------------------------------------------------------------------------------
[Function Name]setThousandth
[Function Descript]設定千分位
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setThousandth(terms) {
    var re = /(-?\d+)(\d{3})/

    while (re.test(terms)) {
        terms = terms.toString().replace(re, '$1,$2');
    }

    return terms;
}

/*------------------------------------------------------------------------------
[Function Name]removeThousandth
[Function Descript]移除千分位
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]removeThousandth(1,000),return 1000
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function removeThousandth(terms) {
    return terms.replace(/[,]+/g, '');
}

/*------------------------------------------------------------------------------
[Function Name]removeSelectOptions
[Function Descript]移除Select的所有item
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function removeSelectOptions(obj, valueAry) {
    for (var i = obj.options.length - 1; i >= 0; i--) {
        if (typeof (valueAry) === 'undefined' || valueAry.indexOf(obj.options[i].value) == -1) {
            obj.remove(i);
        }
    }
}

/*------------------------------------------------------------------------------
[Function Name]getConvert2RowData
[Function Descript]將目前填寫的欄位(要塞到Grid的)轉成物件形態 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getConvert2RowData(gridBidingAry) {
    var rowData = new Object();

    for (var i = 0; i < gridBidingAry.length; i++) {
        if (gridBidingAry[i] != '') {
            var elements = document.getElementsByName(gridBidingAry[i]);

            if (elements.length == 0) {
                continue;
            }

            //for單選, 如果有多選要修正這個方法
            if (elements[0].tagName == 'radio' || elements[0].tagName == 'checkbox') {
                for (var j = 0; j < elements.length; j++) {
                    if (elements[j].checked) {
                        rowData[gridBidingAry[i]] = elements[j].value;
                    }
                }
            } else {
                rowData[gridBidingAry[i]] = elements[0].value;
            }
        }
    }

    return rowData;
}


/*------------------------------------------------------------------------------
[Function Name]restoreRowData
[Function Descript]將之前取得的rowData復原回去對應欄位
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function restoreRowData(gridBidingAry, rowData, callbackFunc) {
    for (var i = 0; i < gridBidingAry.length; i++) {
        if (gridBidingAry[i] != '') {
            var elements = document.getElementsByName(gridBidingAry[i]);

            if (elements.length == 0) {
                continue;
            }

            //for單選, 如果有多選要修正這個方法
            if (elements[0].tagName == 'radio' || elements[0].tagName == 'checkbox') {
                for (var j = 0; j < elements.length; j++) {
                    if (elements[j].value == rowData[gridBidingAry[i]]) {
                        elements[j].checked = true;

                        if (typeof elements[j].onclick == "function") {
                            elements[j].onclick.apply(elements[j]);
                        }
                    } else {
                        elements[j].checked = false;
                    }
                }
            } else {
                elements[0].value = rowData[gridBidingAry[i]];
            }
        }
    }

    if (callbackFunc) {
        callbackFunc();
    }
}



/*------------------------------------------------------------------------------
[Function Name]getArrayConvert2RowData
[Function Descript]將某一列的Grid Data轉成物件形態
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getArrayConvert2RowData(gridBidingAry, gridRowAry) {
    var rowData = new Object();

    for (var i = 0; i < gridBidingAry.length; i++) {
        if (gridBidingAry[i] != '') {
            eval('rowData.' + gridBidingAry[i] + ' = gridRowAry[i];');
        }
    }

    return rowData;
}

/*------------------------------------------------------------------------------
[Function Name]getAllArrayConvert2RowData
[Function Descript]將Grid Data轉成物件形態
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getAllArrayConvert2RowData(gridBidingAry, gridDataAry) {
    var rows = new Array();

    for (var i = 0; i < gridDataAry.length; i++) {
        rows[i] = getArrayConvert2RowData(gridBidingAry, gridDataAry[i]);
    }

    return rows;
}

/*------------------------------------------------------------------------------
[Function Name]getCheckboxIsChecked
[Function Descript]傳回此Value有沒有被勾選在checkbox裡有沒有被選擇
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getCheckboxIsChecked(tagName, val) {
    var checkboxAry = document.getElementsByName(tagName);
    var isChecked = false;

    for (var i = 0; i < checkboxAry.length; i++) {
        if (checkboxAry[i].type == "checkbox" && checkboxAry[i].checked) {
            if (val.toString().indexOf(checkboxAry[i].value) != -1) {
                isChecked = true;
            }
        }
    }

    return isChecked;
}

/*------------------------------------------------------------------------------
[Function Name]getCheckboxsHasChecked
[Function Descript]傳回TagName 的 Check Box or Radio有沒有至少一個被勾選
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getCheckboxsHasChecked(tagName) {
    var checkboxAry = document.getElementsByName(tagName);
    var isHasChecked = false;

    for (var i = 0; i < checkboxAry.length; i++) {
        if ((checkboxAry[i].type == "checkbox" || checkboxAry[i].type == "radio") && checkboxAry[i].checked) {
            isHasChecked = true;
        }
    }

    return isHasChecked;
}

/*------------------------------------------------------------------------------
[Function Name]outputLog
[Function Descript]輸出訊息到瀏灠器的Console
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明，一般應用於隱藏欄位、取資料庫的值,判斷是否成功取得
[Example]
[Ex]outputLog(pData.recordValues[i][2]);此案例為從資料庫取回值,顯出來判斷是否有成功執行程式並取到資料的資料
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function outputLog(obj) {
    if (window.console) {
        window.console.log(obj);
    }
}

/*------------------------------------------------------------------------------
[Function Name]openWindowOnCenter
[Function Descript]開新視窗
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function openWindowOnCenter(url, title, w, h) {
    var left = (window.screen.width - w) / 2;
    var top = (window.screen.height - h) / 2;
    var width = 520;
    var height = 250;

    if (w != null) {
        width = parseInt(w, 10);
    }

    if (h != null) {
        height = parseInt(h, 10);
    }

    var config = 'left=' + left + ', top=' + top + ', width=' + width + ', height=' + height + ', menubar=no, resizable=yes, scrollbars=yes, status=yes, titlebar=no, toolbar=no, location=no';

    var win = window.open(url, title, config);

    return win;
}

/*------------------------------------------------------------------------------
[Function Name]openWindowWithPost
[Function Descript]開啟視窗並且Post
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function openWindowWithPost(url, id, w, h, params) {
    var win = openWindowOnCenter('', id, w, h);

    form = document.createElement("form");
    form.setAttribute('target', id);
    form.setAttribute('id', 'postWindowForm');
    form.setAttribute('action', url);
    form.setAttribute('method', 'post');

    form.innerHTML = '';

    if (params) {
        for (var key in params) {
            var input = document.createElement("input");
            input.setAttribute('type', "hidden");
            input.setAttribute('name', key);
            input.setAttribute('value', params[key]);
            form.appendChild(input);
        }
    }

    document.body.appendChild(form);

    form.submit();

    document.body.removeChild(form);

    return win;
}

/*------------------------------------------------------------------------------
[Function Name]customValidator
[Function Descript]簡單的表單檢查function
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function customValidator(vali, isTotalShow) {
    if (typeof (isTotalShow) === 'undefined') {
        isTotalShow = true;
    }

    var totalMsg = '';

    for (var i = 0; i < vali.length; i++) {
        if (!vali[i].actId || (Array.isArray(vali[i].actId) && vali[i].actId.indexOf(activityId) != -1) || vali[i].actId == activityId) {
            if ((vali[i].expression && eval(vali[i].expression)) || !vali[i].expression) {
                if (vali[i].required && document.getElementById(vali[i].id).value.trim() == '') {
                    if (isTotalShow) {
                        totalMsg = totalMsg + vali[i].message.required + '\n';
                    } else {
                        alert(vali[i].message.required);
                        return false;
                    }
                }

                if (vali[i].mustNumber && isNaN(document.getElementById(vali[i].id).value) && document.getElementById(vali[i].id).value.trim() != '') {
                    if (isTotalShow) {
                        totalMsg += vali[i].message.mustNumber + '\n';
                    } else {
                        alert(vali[i].message.mustNumber);
                        return false;
                    }
                }

                if (!isNaN(vali[i].minNumber) && vali[i].minNumber > parseInt(document.getElementById(vali[i].id).value, 10)) {
                    if (isTotalShow) {
                        totalMsg += vali[i].message.minNumber + '\n';
                    } else {
                        alert(vali[i].message.minNumber);
                        return false;
                    }
                }

                if (!isNaN(vali[i].maxNumber) && parseInt(document.getElementById(vali[i].id).value, 10) > vali[i].maxNumber) {
                    if (isTotalShow) {
                        totalMsg += vali[i].message.maxNumber + '\n';
                    } else {
                        alert(vali[i].message.maxNumber);
                        return false;
                    }
                }

                if (typeof (vali[i].custom) === 'function' && vali[i].custom() && vali[i].message.custom) {
                    if (isTotalShow) {
                        totalMsg += vali[i].message.custom + '\n';
                    } else {
                        alert(vali[i].message.custom);
                        return false;
                    }
                }
            }
        }
    }

    if (totalMsg != '') {
        alert(totalMsg);
        return false;
    }

    return true;
}

/*------------------------------------------------------------------------------
[Function Name]fixNull
[Function Descript]將Excel匯入、取得資料庫資料、選項...等的值為NULL時預設給空字串，避免後續使用到該值時程式錯誤
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]fixNull(dataArray3[i][20]); //CHG_MODE
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function fixNull(val) {
    if (val === undefined || val === null) {
        return "";
    }
    return val;
}

/*------------------------------------------------------------------------------
[Function Name]fixNullArray
[Function Descript]判斷列內的欄位值若為NULL則預設為空字串,避免後續使用到該值時程式錯誤
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]fixNullArray(tResultArray)
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function fixNullArray(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            arr[i][j] = fixNull(arr[i][j]);
        }
    }
}

/*------------------------------------------------------------------------------
[Function Name]left
[Function Descript]從字串左邊往右取到第N個字
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]left("Hello,Left String:001",4),return Hello
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function left(str, num) {
    return str.substring(0, num);
}

/*------------------------------------------------------------------------------
[Function Name]right
[Function Descript]從字串右邊往左取到第N個字
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]right("Hello,Right String:001",6),return Right String:001
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function right(str, num) {
    return str.substring(str.length - num, str.length);
}

/*------------------------------------------------------------------------------
[Function Name]getRadioText
[Function Descript]取得表單元件Radio選中的選項顯示值
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]Radio選項(顯示值/實際值):新增/0、新增帳戶名稱/3、修改/1、終止/2，選中修改時
[Ex]getRadioText("senao071010"),return 修改
[Show Codes=Y] 
-------------------------------------------------------------*/
/*
共用表單元件Radio Function  
*/
function getRadioText(radioName) {
    var tRadioButton = document.getElementsByName(radioName);
    var tSelectedValue = "";
    for (var i = 0; i < tRadioButton.length; i++) {
        if (tRadioButton[i].checked) {
            tSelectedValue = tSelectedValue + tRadioButton[i].getAttribute("text") + "";
        }
    }
    return tSelectedValue;
}

/*------------------------------------------------------------------------------
[Function Name]getRadioValue
[Function Descript]取得表單元件Radio選中的選項實際值
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]Radio選項(顯示值/實際值):新增/0、新增帳戶名稱/3、修改/1、終止/2，選中修改時
[Ex]getRadioText("senao071010"),return 1
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getRadioValue(radioName) {
    var tRadioButton = document.getElementsByName(radioName);
    var tSelectedValue = "";
    for (var i = 0; i < tRadioButton.length; i++) {
        if (tRadioButton[i].checked) {
            tSelectedValue = tSelectedValue + tRadioButton[i].value + "";
        }
    }
    return tSelectedValue;
}

/*------------------------------------------------------------------------------
[Function Name]SNSI003
[Function Descript]取得設定檔SNSI003對應的資料,導入多公司後改用SNSI003_ORG，請勿使用此function
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20180207 By Senao-Chandler共用SNSI003 系統參數
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]form_org為senao時會科對應的部門別:Account_Dept = SNSI003("SN148_S04"),return 10B00
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function SNSI003(strID) {
    var strParam = "";
    //var processorg = getProcessOrgID();
    var strSQL = "select SNSI003003 from SNSI003 where SNSI003002='" + strID + "' and SNSI003005='senao' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, null, null, function (data) {
        strParam = data.recordValues;
    });
    DWREngine.setAsync(true);
    return strParam;
}

/*------------------------------------------------------------------------------
[Function Name]SNSI003_ORG
[Function Descript]取得設定檔SNSI003對應的資料
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20180207 By Senao-Chandler共用SNSI003 系統參數
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]研發部人員發單需加簽:SNSI003_ORG("SN106_S07", form_ou.value),return 16000
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function SNSI003_ORG(strID, strORG) {
    var strParam = "";
    //var processorg = getProcessOrgID();
    var strSQL = "select SNSI003003 from SNSI003 where SNSI003002='" + strID + "' and SNSI003005='" + strORG + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, null, null, function (data) {
        strParam = data.recordValues;
    });
    DWREngine.setAsync(true);
    return strParam;
}


/*------------------------------------------------------------------------------
[Function Name]querySNSI003
[Function Descript]查詢SNSI003參數設定，導入多公司改用querySNSI003_Org，請勿使用此function
[Parameter]{string} param 
[Returns]{string} result 
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明，透過SQL註冊器固定撈取SNSI003003的資料
[Example]
[Ex]ENGENIUS MAC GROUP POOL:querySNSI003("SN155_S02")return 1044
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI003(param) {//2025.11.18 vivian 修改
    var result = "";
    var sqlId = "BPM_SENAO_SNSI003";
    var tParams = [];
    var data = [];
    if (param !== "") {
        tParams.push(param);
        data = ajaxGetData(apiInvoke +sqlId, {
            param: tParams[0]
        });
        if (data.length > 0) {
            result = data[0].SNSI003003; //SNSI003003
        }
    }
    return result;
}

/*------------------------------------------------------------------------------
[Function Name]querySNSI003_Org
[Function Descript]查詢SNSI003參數設定 by Org
[Parameter]{string} param 
[Returns]{string} result 
[Modify Log]
[Mo]Modify.....:20190709 By Senao-TinYu
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]總經理工號:querySNSI003_Org("SN014_S08"),return 10100
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI003_Org(param) {
    var result = "";
    var sqlId = "BPM_SENAO_SNSI003_Org";
    var tParams = [];
    var data = [];
    var orgId = "";
    //alert("form_ou length :"+$$('#form_ou').length);
    if ($('#form_ou').length > 0) {
        orgId = $('#form_ou').val();
    } else {
        orgId = "senao";
    }
    if (param !== "") {
        tParams.push(param);
        tParams.push(orgId);
        data = ajaxGetData(apiInvoke + sqlId, {
            SNSI003002: tParams[0],
            SNSI003005: tParams[1],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                result = data[0].SNSI003003; //SNSI003003
            }
        }
    }
    return result;
}

/*------------------------------------------------------------------------------
[Function Name]querySNSI009
[Function Descript]查詢SNSI009參數設定 by OU
[Parameter]
[Pa] * para1:必要，程式代碼，EX:共用為SENAO
[Pa] * para2:必要，程式代碼，EX提示訊息號碼，EX:001
[Pa] * para3:必要，使用者登入語系EX:zh_TW/en_US
[Pa] * grid 提示，不需要請傳空值
[Pa] * para4:grid的第幾筆，將@@替換為para4
[Pa] * para5:grid的提示參考文字，將@@替換為para5可放多筆需拆解陣列(以||區隔)，或放空值不顯示參考文字
[Pa] * para6:grid的提示欄位，將@@替換為para6
[Pa] * EX:無para5，第@@筆「@@」欄位未輸入，請填寫!->第1筆「工單單號」欄位未輸入，請填寫!
[Pa] * EX:有para5，第@@筆 @@ + " ，「@@」未輸入，請填寫!->第1筆 料號：7104A1165000，「材料成本率」未輸入，請填寫!
[Returns]{string} result 
[Modify Log]
[Mo]Modify.....:20221221 By Senao-Calvin 
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]取得公司對應有問題，請重新開單一次!:querySNSI009(form_ou.value, "019", locale,"","","")
[Ex][表單明細]:第 @@ 筆 與第 @@ 筆資料重覆:querySNSI009(formId, "009", locale, tGrid1Data[i][0], tGrid1Data[j][0], "")
[Ex]第i筆 憑證明細[憑證(發票)號碼]不可空白!:querySNSI009(form_ou.value, "015", locale, i+1, $$("#Label145").html(), $$("#lbl_gsenao_nd3004").html())
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI009(para1, para2, para3, para4, para5, para6) {


    var message = "";
    var result = "";
    var sqlId = apiInvoke + "BPM_SENAO_SNSI009_QUERY";
    var tParams = [];
    var data = [];
    var messageCode = "(" + para1.toUpperCase() + para2 + ")";
    //alert("para1:"+para1+"\npara2:"+para2+"\npara3:"+para3+"\n para4:"+para4+"\npara5:"+para5+"\npara6:"+para6);
    if (para1 !== "" && para2 !== "") {
        if (_OU[para1] != undefined) {
            tParams.push("SENAO");//共用提示
        }
        else {
            tParams.push(para1.toUpperCase());//表單提示
        }
        tParams.push(para2);
        data = ajaxGetData(sqlId,
            { PROGRAM_ID: tParams[0], MESSAGE_ID: tParams[1] } //PROGRAM_ID:SENAO,MESSAGE_ID:002
        );
        if (data[0].result == undefined) {
            if (data.length > 0) {
                message = data[0].MESSAGE;
                var json = $.parseJSON(message);
                $.each(json, function (key, value) {
                    if (key == para3) {
                        result = value;
                    }
                    else//語系為設定時取預設中文的提示訊息
                    {
                        result = json.zh_TW;
                    }
                });
            }
        }
    }
    //gird提示
    if (para4 != "") {
        result = result.replace("@@", para4);//替換第幾筆
        if (para5 != "") {
            var fieldsArray = para5.split("||");
            if (fieldsArray.length > 0) {
                var showMsg = "";
                for (var i = 0; i < fieldsArray.length; i++) {
                    showMsg += fieldsArray[i] + " ";
                }
                showMsg = showMsg.substring(0, showMsg.length - 1) + "，";
                result = result.replace("@@", showMsg);//替換參考文字
                result = result.replace("@@", para6);//替換欄位名稱				
            }
        }
        else {
            result = result.replace("@@", "");//替換參考文字
            result = result.replace("@@", para6);//替換欄位名稱
        }
    }
    return result + messageCode;
}

/*------------------------------------------------------------------------------
[Function Name]querySNSI009_Show
[Function Descript]固定文字、選項用，沒有message_code
[Parameter]
[Pa] para1
[Pa] para2
[Pa] para3
[Returns]
[Modify Log]
[Mo]Modify.....:20221221 By Senao-Calvin 
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]若本人未填寫外派訓練表單或僅口頭告知主管而未補外訓課程申請而自行至外部訓練上課者，其對外訓機構單位承諾該課程由公司付款，則公司不予補助，並該課程之費用應由本人自行付費。:querySNSI009_Show(formId,"003",locale).replace("@@1","<b>" + name + "</b>&nbsp;&nbsp;").replace("@@2","&nbsp;&nbsp;<b>" + course + "</b>&nbsp;&nbsp;").replace("@@3","<br>");
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI009_Show(para1, para2, para3) {
    var message = "";
    var result = "";
    var sqlId = "BPM_SENAO_SNSI009";
    var tParams = [];
    var data = [];
    if (para1 !== "" && para2 !== "") {
        if (_OU[para1] != undefined) {
            tParams.push("SENAO");//共用
        }
        else {
            tParams.push(para1.toUpperCase());//表單
        }
        tParams.push(para2);
        data = ajaxGetData(apiInvoke + sqlId, {
            ID: tParams[0],
            para2: tParams[1]
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                message = data[0].MESSAGE;
                var json = $.parseJSON(message);
                $.each(json, function (key, value) {
                    if (key == para3) {
                        result = value;
                    }
                    else//語系為設定時取預設中文的提示訊息
                    {
                        result = json.zh_TW;
                    }
                });
            }
        }
    }
    return result;
}

/*------------------------------------------------------------------------------
[Function Name]queryUserByEmpId
[Function Descript]以員工ID查詢員工相關資料
[Parameter]{string} empId 
[Returns]{object} userInfo 員工相關資料
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]queryUserByEmpId("103858"),return 該員工ID、名稱、單位ID、單位名稱、Email資料
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUserByEmpId(empId) {
    var userInfo = {};
    var sqlId = "BPM_getUser2";
    var tParams = [];
    var data = [];
    if (empId !== "") {
        tParams.push(empId);
        data = ajaxGetData(apiInvoke + sqlId, {
            ID: tParams[0],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                userInfo.userId = data[0].ID; //申請人ID
                userInfo.userName = data[0].USERNAME; //申請人名稱
                userInfo.unitId = data[0].DEPTID; //申請單位ID
                userInfo.unitName = data[0].ORGANIZATIONUNITNAME; //申請單位名稱
                userInfo.mailAddress = data[0].MAILADDRESS; //EMAIL
            }
        }
    }
    return userInfo;
}

/*------------------------------------------------------------------------------
[Function Name]queryUnitManagerByUnitId
[Function Descript]以部門代號查詢部門主管
[Parameter]{string} unitId 
[Returns]{string} managerId
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUnitManagerByUnitId(unitId) {
    var managerInfo = {};
    var sqlId = "FindUnitManager";
    var tParams = [];
    var data = [];
    if (unitId !== "") {
        tParams.push(unitId);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            managerInfo.managerId = data[0][0];
            managerInfo.managerName = data[0][1];
            managerInfo.level = data[0][4];
        }
    }
    return managerInfo;
}

/*------------------------------------------------------------------------------
[Function Name]queryUnitManagerByOuAndUnitId
[Function Descript]以公司別ID、部門代號查詢部門主管
[Parameter]{string} ouId,unitId 
[Returns]{string} managerId
[Modify Log]
[Mo]Modify.....:20230111 By Senao-Calvin 多公司適用
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUnitManagerByOuAndUnitId(ouId, unitId) {
    var managerInfo = {};
    var sqlId = "FindUnitManager_Org";
    var tParams = [];
    var data = [];
    if (unitId !== "") {
        tParams.push(unitId);
        tParams.push(ouId);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            managerInfo.managerId = data[0][0];
            managerInfo.managerName = data[0][1];
            managerInfo.level = data[0][4];
        }
    }
    return managerInfo;
}

/*------------------------------------------------------------------------------
[Function Name]queryManagerByEmpId
[Function Descript]以工號查詢所屬主管
[Parameter]{string} empId 
[Returns]{string} managerId
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryManagerByEmpId(empId) {//2025.11.18 vivian 修改
    var managerId = "";
/*
    var strSQL = "";
    var tParams = [];
    var tParamsType = [];
    strSQL += "SELECT u2.id, u2.username ";
    strSQL += "FROM users u1, users u2, functions f ";
    strSQL += "WHERE u1.id = '" + empId + "' AND f.OCCUPANTOID = u1.oid AND u2.oid = f.SPECIFIEDMANAGEROID AND f.ismain = 1 ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery(DbCfgId_EFGP, strSQL, null, null, function (data) {
        if (data.recordValues.length > 0) {
            managerId = data.recordValues[0][0];
        }
    });
    DWREngine.setAsync(true);
    return managerId;*/

    var sqlId = "BPM_findManager";
    var tParams = [];
    var data = [];
    if (empId !== "") {
        tParams.push(empId);
        data = ajaxGetData(apiInvoke + sqlId, {
            empId: tParams[0]
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                managerId = data[0].ID; //主管ID
            }
        }
    }
    return managerId;
}

/*------------------------------------------------------------------------------
[Function Name]queryUnitByUnitId
[Function Descript]以部門ID查部門名稱
[Parameter]{string} unitId 
[Returns]{object} unitInfo 部門相關資料
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUnitByUnitId(unitId) {
    var unitInfo = {};
    var sqlId = "BPM_findUnit";
    var tParams = [];
    var data = [];
    if (unitId !== "") {
        tParams.push(unitId);
        let data = ajaxGetData(apiInvoke + sqlId, {
            unitId: tParams[0]
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                unitInfo.unitId = data[0].ID; //部門ID
                unitInfo.unitName = data[0].ORGANIZATIONUNITNAME; //部門名稱
            }
        }
    }
    return unitInfo;
}

/*------------------------------------------------------------------------------
[Function Name]queryUnitByOuIdUnitId
[Function Descript]以組織代號、部門ID查部門名稱
[Parameter]{string} unitId , {string} orgId 
[Returns]{object} unitInfo 部門相關資料
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryUnitByOuIdUnitId(unitId, orgId) {
    var unitInfo = {};
    var sqlId = "findUnit_Org";
    var tParams = [];
    var data = [];
    if (unitId !== "") {
        tParams.push(unitId);
        tParams.push(orgId);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            unitInfo.unitId = data[0][0]; //部門ID
            unitInfo.unitName = data[0][1]; //部門名稱
        }
    }
    return unitInfo;
}

/*------------------------------------------------------------------------------
[Function Name]queryCustomerNameById
[Function Descript]以客戶代號查詢客戶名稱
[Parameter]{string} customerId 客戶代號
[Returns]{string} customerName 客戶名稱
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryCustomerNameById(customerId) {
    var customerName = "";
    var sqlId = "BPM_ERP_OracleCustomer";
    var tParams = [];
    if (customerId !== "") {
        tParams.push(customerId);
        let pData = ajaxGetData(apiInvoke + sqlId, {
            CUSTOMER_NUMBER: tParams[0]
        });
        if (pData[0].result == undefined) {
            if (pData.length > 0) {
                customerName = pData[0].CUSTOMER_NUMBE; //customer_name
            }
        }

    }
    return customerName;
}


/*------------------------------------------------------------------------------
[Function Name]queryProcessOIDByFormSheetNO
[Function Descript]使用FormID與SheetNO查詢Process的OID，通常使用於提供表待的開窗連結顯示表單內容
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Ex]href: "/NaNaWeb/GP/WMS/TraceProcess/TraceProcessForSearchForm?hdnMethod=searchFormDetail&hdnFormDefId=SENAO013&hdnProcessInstOID="+ processOID +"&hdnCurrentUserId="+userId
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryProcessOIDByFormSheetNO(fromID, sheetNO) {
    var strParam = "";
    var strSQL = "select p.oid from PROCESSINSTANCE p where P.SERIALNUMBER= (select processserialnumber from " + fromID;
    strSQL += " where formserialnumber = '" + sheetNO + "')";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, null, null, function (data) {
        strParam = data.recordValues;
    });
    DWREngine.setAsync(true);
    return strParam;
}


/*------------------------------------------------------------------------------
[Function Name]queryProcessSubjectByFormSheetNO
[Function Descript]使用FormID與SheetNO查詢Process的Subject
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function queryProcessSubjectByFormSheetNO(fromID, sheetNO) {
    var strParam = "";
    var strSQL = "select p.subject from PROCESSINSTANCE p where P.SERIALNUMBER= (select processserialnumber from " + fromID;
    strSQL += " where formserialnumber = '" + sheetNO + "')";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, null, null, function (data) {
        strParam = data.recordValues;
    });
    DWREngine.setAsync(true);
    return strParam;
}

/*------------------------------------------------------------------------------
[Function Name]ajax_EFGPSQLQuery
[Function Descript]eturns the sql query result data array via sql id and parameter defined at EFGP SQL註冊器
[Parameter]{string} sqlid ,{array} tParams 
[Returns]{array} 
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function ajax_EFGPSQLQuery(sqlid, tParams) {
    var tTypes = new Array();
    for (var i = 0; i < tParams.length; i++) {
        tTypes.push(12);
    }
    var returnArray = new Array();
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.query(sqlid, tParams, tTypes, function (data) {
        if (data.recordValues.length > 0) {
            returnArray = data.recordValues;
        }
    });
    DWREngine.setAsync(true);
    return returnArray;
}

/*------------------------------------------------------------------------------
[Function Name]ajax_ERPSQLQuery
[Function Descript]Returns the sql query result data array via sql id and parameter defined at ERP SQL註冊器.
[Parameter]{string} sqlid ,{array} tParams ,{string} tDefaultAppendSQL ,{string} tOrgID ,
[Returns]{array} 
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function ajax_ERPSQLQuery(sqlid, tParams, tDefaultAppendSQL, tOrgID) {
    var tTypes = new Array();
    for (var i = 0; i < tParams.length; i++) {
        tTypes.push(12);
    }
    if (tParams.length == 0) {
        tParams.push("NO_WHERE");
    }
    var returnArray = new Array();
    DWREngine.setAsync(false);
    ajax_GetOracleData.CallProc("ERP_SNO_C", sqlid, tParams, tDefaultAppendSQL, tOrgID, function (data) {
        if (data.length > 0) {
            returnArray = data;
        }
    });
    DWREngine.setAsync(true);
    return returnArray;
}

/*------------------------------------------------------------------------------
[Function Name]showBackGroundColor
[Function Descript]使用此Function, 表單中需要include Jquery library 自動將可填寫欄位設定底色. 
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function showBackGroundColor() {
   /* $jj = jQuery.noConflict();

    $jj(":text:disabled").each(function () {
        //$jj(this).css("background-color","");        
    });

    $jj(":text:enabled").each(function () {
        if ($jj(this).prop('readOnly')) {
            $jj(this).css("background-color", "");
        } else {
            $jj(this).css("background-color", "#FBF1C0");
        }
    });*/
    jQuery(":text:disabled").each(function () {
        // jQuery(this).css("background-color","");        
    });

    jQuery(":text:enabled").each(function () {
        if (jQuery(this).prop('readOnly')) {
            jQuery(this).css("background-color", "");
        } else {
            jQuery(this).css("background-color", "#FBF1C0");
        }
    });
}

/*------------------------------------------------------------------------------
[Function Name]FloatAdd
[Function Descript]浮點數相加
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20181101 By Senao-TinYu 浮點數相加
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function FloatAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length; } catch (e) { r1 = 0; }
    try { r2 = arg2.toString().split(".")[1].length; } catch (e) { r2 = 0; }
    m = Math.pow(10, Math.max(r1, r2));
    return (FloatMul(arg1, m) + FloatMul(arg2, m)) / m;
}

/*------------------------------------------------------------------------------
[Function Name]FloatSubtraction
[Function Descript]浮點數相減
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20181101 By Senao-TinYu 浮點數相減
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function FloatSubtraction(arg1, arg2) {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/*------------------------------------------------------------------------------
[Function Name]FloatMul
[Function Descript]浮點數相乘
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20181101 By Senao-TinYu 浮點數相乘
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function FloatMul(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try { m += s1.split(".")[1].length; } catch (e) { }
    try { m += s2.split(".")[1].length; } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

/*------------------------------------------------------------------------------
[Function Name]FloatDiv
[Function Descript]浮點數相除
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20181101 By Senao-TinYu 浮點數相除
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function FloatDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""))
        r2 = Number(arg2.toString().replace(".", ""))
        return (r1 / r2) * pow(10, t2 - t1);
    }
}



/*------------------------------------------------------------------------------
[Function Name]getFacInfo
[Function Descript]取得工廠Org資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getFacInfo(Com) {
    var form_org = document.getElementsByName("form_org");
    var sqlid = "BPM_getFactory";
    var tParams = new Array();
    var tTypes = new Array();
    tParams.push(Com);
    var data = ajaxGetData(invokeURL + sqlid, {
        COMPANY:tParams[0]
    }) 
    if(data[0].result == undefined){
        if (data.length > 0){
            for (i = 0; i < data.length; i++) {
                var FacNo = data[i].FACTORY;
                var FacName = data[i].FACTORY_NAME;
                $("#form_org").append($("<option>", {
                    value: FacNo,
                    text: FacName
                }));
            }
        }
    }
    return true;
}

/*------------------------------------------------------------------------------
[Function Name]getProcessOrgID
[Function Descript]取得執行中的OrgID
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getProcessOrgID() {
    var OrgID = '';
    var sqlid = "getCompany";
    var tParams = [];
    var data = [];
    data = ajax_EFGPSQLQuery(sqlid, tParams);
    if (data.length > 0) {
        for (i = 0; i < data.length; i++) {
            var compno = data[i][0];
            regex = new RegExp(compno, 'i');
            if (regex.test(processId)) {
                OrgID = compno;
            }
        }
    }
    return OrgID;
}

/*------------------------------------------------------------------------------
[Function Name]setCompanyValue
[Function Descript]設定公司OU數值
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setCompanyValue() {
    var form_ou = document.getElementsByName("form_ou");
    $$('#form_ou option').each(function (i, item) {
        regex = new RegExp($$(this).val(), 'i');
        if (regex.test(processId)) {
            $$(this).attr('selected', true);
        }
    });
    return true;
}

/*------------------------------------------------------------------------------
[Function Name]setCompanyValueByUser
[Function Descript]設定公司OU數值
[Parameter]pUserId、pDeptId
[Returns]
[Modify Log]
[Mo]Modify.....:20250418 By Senao-JC 轉換
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setCompanyValueByUser(pUserId, pDeptId) {
    //取得人員隸屬的組織id
    let defCompanyVal = "";
    if (pUserId == undefined) pUserId = userId; //沒有pUserId用登入人員id:userId
    if (pDeptId == undefined) pDeptId = Department; ////沒有pDeptId用主部門id:mainOrgUnitIds
    let result = ajaxGetData(apiInvoke + "BPM_getCompanyDefValByUser", {
        UUID: pUserId,
        OUID: pDeptId,
    });
    let tDropdown = document.getElementById("form_ou");
    if (result[0].result == undefined) {
        defCompanyVal = result[0].ID;
    } else {
        defCompanyVal = "senao"; //取不到預設預設senao
    }
    tDropdown.value = defCompanyVal;
    return true;
}

/*------------------------------------------------------------------------------
[Function Name]getOUnORGId
[Function Descript]取得公司別id或廠區別id
[Parameter]pType、pOrg
[Returns]
[Modify Log]
[Mo]Modify.....:20230805 By Calvin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getOUnORGId(pOu, pOrg) {
    //取得id
    var returnInfo = {};
    var sqlId = "getOUnORGId";
    var data = [];
    var tParams = [pOu];
    data = ajax_EFGPSQLQuery(sqlId, tParams);
    if (data.length > 0) {
        returnInfo.OU_ID = data[0][0];
        for (i = 0; i < data.length; i++) {
            if (pOrg == "") returnInfo.ORG_ID = "";
            if (pOrg == data[i][1]) returnInfo.ORG_ID = data[i][1];
        }
    }
    return returnInfo;
}



/*------------------------------------------------------------------------------
[Function Name]OrgAccessor_findUserById_no1
[Function Descript]撈取預設部門代號跟名稱，因為子公司與神準共用同張表單，但子公司人員目前沒有設定主部門
[Parameter]{string} orgid,strempid
[Returns]{object} deptInfo {deptId,deptName}
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 檢查js尚未有表單使用
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
var deptInfo = {};
function OrgAccessor_findUserById_no1(strorgid, strempid) {  //取得USER資訊
    var orgId = strorgid;
    var empId = strempid; //測試用簡文彬有+N 
    DWREngine.setAsync(false);
    ajax_OrgAccessor.findUserById(orgId, empId, loadUserById);
    DWREngine.setAsync(true);
    return deptInfo;
}
function loadUserById(data) {
    var strDeptId = "";
    var strDeptName = "";
    for (var i = 0; i < data.occupiedFuncs.length - 1; i++) {
        if (data.occupiedFuncs[i].main) {
            strDeptId = data.occupiedFuncs[i].orgUnitId;
            strDeptName = data.occupiedFuncs[i].orgUnitName;
            //alert(data.occupiedFuncs[i].main); //main屬性為是否為主部門
            OrgAccessor_findOrgUnitByOID_no1(data.occupiedFuncs[i].orgUnitOID);
            if (org_match) {
                deptInfo.deptId = strDeptId;
                deptInfo.deptName = strDeptName;
                break;
            } else {
                strDeptId = "";
                strDeptName = "";
                deptInfo = {};
            }
        }
    }
    if (strDeptId == '' || strDeptName == '') {
        for (var j = 0; j < data.occupiedFuncs.length - 1; j++) {
            if (!data.occupiedFuncs[j].main) {
                deptInfo.deptId = data.occupiedFuncs[j].orgUnitId;
                deptInfo.deptName = data.occupiedFuncs[j].orgUnitName;
                //alert(data.occupiedFuncs[i].main); //main屬性為是否為主部門
                break;
            }
        }
    }
}
var org_match = false;
function OrgAccessor_findOrgUnitByOID_no1(strUnitOID) {
    var orgUnitOID = strUnitOID;
    ajax_OrgAccessor.findOrgUnitByOID(orgUnitOID, loadOrgUnitByOID);
}
function loadOrgUnitByOID(data) {
    //alert(data);
    if (data.orgId == org) {
        org_match = true;
    } else {
        org_match = false;
    }
}

/*------------------------------------------------------------------------------
[Function Name]getSubject
[Function Descript]取得流程主旨
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20200330 By Senao-Milla 取得表單主旨
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]getSubject("SENAO10100003944"),return 張佳芳－資訊服務申請單(LI1-233037101  OP值請變更為40--組立)
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getSubject(processserialnumber) {
    var Subject = "";
    var sqlid = "getSubject";
    var tParams = [];
    tParams.push(processserialnumber);
    var data = [];
    data = ajax_EFGPSQLQuery(sqlid, tParams);
    if (data.length > 0) {
        Subject = data[0][0];
    }
    return Subject;
}


/*------------------------------------------------------------------------------
[Function Name]IsInvaildDept
[Function Descript]判斷是否為失效部門
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Example]
[Ex]IsInvaildDept("11307") return true 失效
[Ex]IsInvaildDept("10532") return false 未失效
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function IsInvaildDept(DeptNo) {
    var IsInvaild = false;
    var sqlId = "BPM_InvaildDept";
    var tParams = [];
    var data = [];
    var orgId = "senao";
    if ($('#form_ou').length > 0) {
        orgId = $('#form_ou').val();
    } else {
        orgId = "senao";
    }
    if (DeptNo != "") {
        tParams.push(DeptNo);
        tParams.push(orgId);
        data = ajaxGetData(apiInvoke + sqlId, {
            DEPT: tParams[0],
            ORG: tParams[1],
        });
        if (data[0].result == undefined) {
            if (data.length > 0) {
                IsInvaild = true;
            }
        }
    }
    return IsInvaild;
}

/*------------------------------------------------------------------------------
[Function Name]IsRdDept_Utils
[Function Descript]判斷是否為RD部門
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Mo]Modify.....:20230626 By Calvin 增加範例說明
[Mo]Modify.....:20230805 By Neil 15B61單位要求排除
[Example]
[Ex]IsRdDept_Utils("15"),return true 
[Ex]IsRdDept_Utils(senao068m008.value)),return true 
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function IsRdDept_Utils(DeptNo) {
    var IsRd = false;
    var orgId = "senao";
    if ($('#form_ou').length > 0) {
        orgId = $('#form_ou').val();
    } else {
        orgId = "senao";
    }
    if (orgId == "senao") {
        if ("15,16,17,18".indexOf(left(DeptNo, 2)) > -1) {
            //IsRd = true; //20230805 Neil
            if ("15B61".indexOf(DeptNo) > -1) {
                IsRd = false;
            } else {
                IsRd = true;
            }
        }
    }
    return IsRd;
}


/*------------------------------------------------------------------------------
[Function Name]setCompanyValueByUserId
[Function Descript]設定公司OU數值
[Parameter]pUserId、pDeptId
[Returns]
[Modify Log]
[Mo]Modify.....:20240923 By Eason 新增查詢
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setCompanyValueByUserId(userId) {
    //取得人員隸屬的組織id
    var sqlId = "getCompanyDefValByUserId";
    var tParams = [];
    tParams.push(userId);
    var data = ajax_EFGPSQLQuery(sqlId, tParams);
    return data
}

/*------------------------------------------------------------------------------
[Function Name]ddlAllPrsinsLevel
[Function Descript]表單的重要性onChange
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20240410 By Neil 增加
[Example]
[Ex]
[Show Codes=Y]
------------------------------------------------------------------------------*/

// if (window.parent.document.forms[0] !== undefined) {
//     var selectElement = window.parent.document.forms[0].ddlAllPrsinsLevel;
//     if (selectElement !== undefined) {

//         function handleChangeEvent() {
//             var lbl_urgentExplanation = document.getElementById('lbl_urgentExplanation'); // 急件說明填寫欄位
//             var urgentExplanation = document.getElementById('urgentExplanation'); // 急件說明

//             if (this.value == "DEFAULT_INS_LEVEL0000000LEVEL001") { // 緊急
//                 if (lbl_urgentExplanation !== null) {
//                     lbl_urgentExplanation.style.display = ''; // 顯示急件說明欄位
//                     lbl_urgentExplanation.style.backgroundColor = '#FF99FF';
//                 }
//                 if (urgentExplanation !== null) {
//                     urgentExplanation.style.display = ''; // 顯示急件說明欄位
//                     urgentExplanation.disabled = false;
//                     urgentExplanation.readOnly = false;
//                 }
//             } else { // 一般、低
//                 if (lbl_urgentExplanation !== null) {
//                     lbl_urgentExplanation.style.display = 'none'; // 隱藏急件說明欄位
//                 }
//                 if (urgentExplanation !== null) {
//                     urgentExplanation.style.display = 'none'; // 隱藏急件說明欄位
//                     urgentExplanation.disabled = true;
//                     urgentExplanation.value = "";
//                 }
//             }
//         }

//         if (selectElement.addEventListener) {
//             selectElement.addEventListener('change', handleChangeEvent, false);
//         } else if (selectElement.attachEvent) {
//             selectElement.attachEvent('onchange', handleChangeEvent);
//         }
//     }
// }

/*------------------------------------------------------------------------------
[Function Name]jsonKeysToCase
[Function Descript]將json的key值進行大小寫轉換
[param] {Object} json
[param] {Object} type： 默認不傳 ==>全部小寫;傳1 ==>全部大寫;傳2 ==>首字母大寫
[Returns]
[Modify Log]
[Mo]20250520 By JC 增加
[Example]
[Ex]
[Show Codes=Y]
------------------------------------------------------------------------------*/
function jsonKeysToCase(json, type) {
    if (typeof json == 'object') {
        var tempJson = JSON.parse(JSON.stringify(json));
        toCase(tempJson);
        return tempJson;
    } else {
        return json;
    }

    function toCase(json) {
        if (typeof json == 'object') {
            if (Array.isArray(json)) {
                json.forEach(function (item) {
                    toCase(item);
                })
            } else {
                for (var key in json) {
                    var item = json[key];
                    if (typeof item == 'object') {
                        toCase(item);
                    }
                    delete (json[key]);
                    switch (type) {
                        case 1:
                            //key值全部大寫
                            json[key.toLocaleUpperCase()] = item;
                            break;
                        case 2:
                            //key值首字母大寫，其餘小寫
                            json[key.substring(0, 1).toLocaleUpperCase() + key.substring(1).toLocaleLowerCase()] = item;
                            break;
                        default:
                            //默認key值全部小寫
                            json[key.toLocaleLowerCase()] = item;
                            break;
                    }
                }
            }
        }
    }
}

