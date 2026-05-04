/*------------------------------------------------------------------------------
[Function Name]getCompanyInfo
[Function Descript]取得公司OU資訊
[Parameter]
[Returns]
[Modify Log]
[Mo]Modify.....:20230606 By Senao-Michael.Lin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function getCompanyInfo(){
	var form_ou = document.getElementsByName("form_ou");
	var sqlid = "getCompany";
	var tParams = new Array();
	var tTypes = new Array();
	
	var strSQL = "SELECT DISTINCT COMPANY, COMPANY_NAME FROM COMPANY  ";
	DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, null, null, function(data) {
		if (data.recordValues.length > 0) {			
			for (i = 0; i < data.recordValues.length; i++) {
				var compno = data.recordValues[i][0];
				var compname = data.recordValues[i][1];
				$$("#form_ou").append($$("<option>", {					
					value: compno,
					text: compname
				}));
			}		
		}
	});
	DWREngine.setAsync(true);
	return true;
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
function getFacInfo(Com){
	var form_org = document.getElementsByName("form_org");
	var sqlid = "getFactory";
	var tParams = new Array();
	var tTypes = new Array();
	tParams.push(Com); 
	tTypes.push(12);
	var strSQL = "SELECT DISTINCT FACTORY, FACTORY_NAME FROM COMPANY WHERE COMPANY = ? ";
	DWREngine.setAsync(false);
	ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, tParams, tTypes, function(data) {
        if (data.recordValues.length > 0) {
            for (i = 0; i < data.recordValues.length; i++) {
				var FacNo = data.recordValues[i][0];
                var FacName = data.recordValues[i][1];                
				$$("#form_org").append($$("<option>", {
					value: FacNo,
					text: FacName
                }));
            }			            
		}
	});
	DWREngine.setAsync(true);
	return true;
}
/*------------------------------------------------------------------------------
[Function Name]setCompanyValueByUser
[Function Descript]設定公司OU數值
[Parameter]pUserId、pDeptId
[Returns]
[Modify Log]
[Mo]Modify.....:20230805 By Calvin 新增說明
[Example]
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function setCompanyValueByUser(pUserId,pDeptId) {
	//取得人員隸屬的組織id
	var defCompanyVal = "";
	var sqlId = "getCompanyDefValByUser";
	var data = [];	
	var tParams = [];
    if (pUserId == undefined) pUserId = userId;//沒有pUserId用登入人員id:userId
	if(pDeptId == undefined) pDeptId = mainOrgUnitIds;////沒有pDeptId用主部門id:mainOrgUnitIds
	tParams.push(pUserId);
	tParams.push(pDeptId);
	data = ajax_EFGPSQLQuery(sqlId, tParams);
    if (data.length > 0) {
		defCompanyVal = data[0][0];
    }
	//依照隸屬的組織預設公司別
	if($$.trim(defCompanyVal)=="")defCompanyVal = "senao";//取不到預設預設senao
	var tDropdownHdn = document.getElementById("form_ou_hdn");   
	if (tDropdownHdn != null && tDropdownHdn.value != "") {       
		var tSelectedSQLDropdown = eval(tDropdownHdn.value, 1, 0);
		DWRUtil.setValue("form_ou", tSelectedSQLDropdown);
	}
	else
	{
		$$('#form_ou option').each(function(i, item){
			regex = new RegExp($$(this).val(), 'i');	
			if (regex.test(defCompanyVal)){
				 $$(this).attr('selected',true);
				 DWRUtil.setValue("form_ou", $$(this).val());
			}
		});
	}	
	//
	return true;
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
function getFacInfo(Com){
	var form_org = document.getElementsByName("form_org");
	var sqlid = "getFactory";
	var tParams = new Array();
	var tTypes = new Array();
	tParams.push(Com); 
	tTypes.push(12);
	var strSQL = "SELECT DISTINCT FACTORY, FACTORY_NAME FROM COMPANY WHERE COMPANY = ? ";
	DWREngine.setAsync(false);
	ajax_DatabaseAccessor.executeQuery("EFGP", strSQL, tParams, tTypes, function(data) {
        if (data.recordValues.length > 0) {
            for (i = 0; i < data.recordValues.length; i++) {
				var FacNo = data.recordValues[i][0];
                var FacName = data.recordValues[i][1];                
				$$("#form_org").append($$("<option>", {
					value: FacNo,
					text: FacName
                }));
            }			            
		}
	});
	DWREngine.setAsync(true);
	return true;
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
[Ex]第i筆 憑證明細[憑證(發票)號碼]不可空白!:querySNSI009(form_ou.value, "015", locale, i+1, $("#Label145").html(), $("#lbl_gsenao_nd3004").html())
[Show Codes=Y] 
------------------------------------------------------------------------------*/
function querySNSI009(para1,para2,para3,para4,para5,para6) {	
	var message = "";
    var result = "";
    var sqlId = "SENAO_SNSI009";
    var tParams = [];
    var data = [];
	var messageCode = "("+para1.toUpperCase()+para2+")";
	//alert("para1:"+para1+"\npara2:"+para2+"\npara3:"+para3+"\n para4:"+para4+"\npara5:"+para5+"\npara6:"+para6);
	if (para1 !== "" && para2 !== "") {
		if(_OU[para1] != undefined)
		{
			tParams.push("SENAO");//共用提示
		}
		else
		{
			tParams.push(para1.toUpperCase());//表單提示
		}		
        tParams.push(para2);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            message = data[0][0];
			var json = $.parseJSON(message);
			$.each(json, function(key, value){
				if(key == para3){
					result = value;
				}
				else//語系為設定時取預設中文的提示訊息
				{				
					result = json.zh_TW;
				}
			});
        }
    }
	//gird提示
	if(para4 != "")
	{
		result = result.replace("@@",para4);//替換第幾筆
		if(para5 != "")
		{
			var fieldsArray = para5.split("||");
			if(fieldsArray.length > 0)
			{				
				var showMsg = "";
				for(var i=0;i<fieldsArray.length;i++){
					showMsg += fieldsArray[i] + " ";
				}
				showMsg = showMsg.substring(0,showMsg.length-1)+"，";
				result = result.replace("@@",showMsg);//替換參考文字
				result = result.replace("@@",para6);//替換欄位名稱				
			}			
		}
		else
		{
			result = result.replace("@@","");//替換參考文字
			result = result.replace("@@",para6);//替換欄位名稱
		}		
	}	
    return result+messageCode;
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
function IsInvaildDept(DeptNo){
	var IsInvaild = false;
	var sqlId = "InvaildDept";
    var tParams = [];
    var data = [];
    var orgId = "senao"; 
    if($$('#form_ou').length > 0){
        orgId = $$('#form_ou').val();
    }else{
        orgId = "senao";
    }
    if (DeptNo != "") {
        tParams.push(DeptNo);
        tParams.push(orgId);
        data = ajax_EFGPSQLQuery(sqlId, tParams);
        if (data.length > 0) {
            IsInvaild = true;
        }
    }
	return IsInvaild;
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
function getSubject(processserialnumber){
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