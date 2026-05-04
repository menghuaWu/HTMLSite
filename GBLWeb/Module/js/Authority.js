
/*=============================================Globa Variable=================================================*/
//取得URL的程式代號
var tPath = window.location.pathname; //當前URL路徑，不含協議、主機名稱、port、參數
var tProgramIdWithExtension = tPath.substring(tPath.lastIndexOf("/") + 1); //HTML檔名含.html
var tProgramId = tProgramIdWithExtension.split(".")[0];

/*=============================================Function Start=================================================*/
/**
 * Author：Ann Huang
 * Created：2024/06/03
 * Purpose：根據傳入的變數，確認該使用者有無權限進入該功能
 * 傳入參數：tCurrentUserId 當前使用者
 *           tCreatorId 資料建立者，若傳空值，則將tCurrentUserId視為tCreatorId
 *           tCompanyId 公司別，若傳空值將預設為senao
 * 回傳參數：tHasAuthority 有無權限使用此功能
 */
function Authority(tCurrentUserId, tCreatorId, tCompanyId){
	var tHasAuthority = "N"; //有無權限使用此功能
	
	if(tCreatorId == "" || tCreatorId == null){
		tCreatorId = tCurrentUserId;
	}
	if(tCompanyId == "" || tCompanyId == null){
		tCompanyId = "senao";
	}
	
	//確認該程式是否啟用權限管控
	var tR_AC = ajaxGetData(invokeURL + "ACCESS_CONTROL", {
		P_ID: tProgramId
	});
	//console.log("tR_AC:" + JSON.stringify(tR_AC));
	if(tR_AC[0].result == undefined){
		$.each(tR_AC, function (tI_AC, tV_AC){
			//console.log("tV_AC:" + JSON.stringify(tV_AC));
			if(tV_AC.ACCESS_CONTROL == "Y"){ //啟用權限管控
				//確認是否可使用此程式
				var tR_NA = ajaxGetData(invokeURL + "NAVBAR_AUTH", {
					P_NAVBAR_ID: tProgramId,
					P_COMPANY_ID: tCompanyId,
					P_USER_ID: tCurrentUserId
				});
				//console.log("tR_NA:" + JSON.stringify(tR_NA));
				if(tR_NA[0].result == undefined){
					tHasAuthority = "Y";
				}else{
					let cburl = "/" + siteName + "/ErrorPage.html";
					console.log(cburl)
					document.location.href = cburl;
				}
			}
		});
	}else{
		let cburl = "/" + siteName + "/ErrorPage.html";
		console.log(cburl)
		document.location.href = cburl;
	}
	
	
	/*var tR_PA_U = ajaxGetData(invokeURL + "PROGRAM_AUTH_U", {
		P_PROGRAM_ID: tProgramId,
		P_ORGANIZATION_ID: tORGANIZATION_ID,
		P_ID: tCreatorId
	});
	//console.log("tR_PA_U:" + JSON.stringify(tR_PA_U));
	if(tR_PA_U[0].result == undefined){
		//元件使用權限
		var tR_EA = ajaxGetData(invokeURL + "ELEMENT_AUTH", {
			P_PROGRAM_ID: tProgramId
		});
		//console.log("tR_EA:" + JSON.stringify(tR_EA));
		if(tR_EA[0].result == undefined){
			$.each(tR_EA, function (tI_EA, tV_EA){
				//console.log("tV_EA:" + JSON.stringify(tV_EA));
				if($("#"+tV_EA.ELEMENT_ID).length){ //元件存在
					
				}
			});
		}
	}else{
		var tR_PA_G = ajaxGetData(invokeURL + "PROGRAM_AUTH_G", {
			P_PROGRAM_ID: tProgramId,
			P_ORGANIZATION_ID: tORGANIZATION_ID,
			P_ID: tCreatorId
		});
		//console.log("tR_PA_G:" + JSON.stringify(tR_PA_G));
		if(tR_PA_G[0].result == undefined){
			//元件使用權限
			
		}else{
			var tR_PA_D = ajaxGetData(invokeURL + "PROGRAM_AUTH_D", {
				P_PROGRAM_ID: tProgramId,
				P_ORGANIZATION_ID: tORGANIZATION_ID,
				P_ID: tCreatorId
			});
			//console.log("tR_PA_D:" + JSON.stringify(tR_PA_D));
			if(tR_PA_D[0].result == undefined){
				//元件使用權限
				
			}else{
				let cburl = "/" + siteName + "/ErrorPage.html";
				console.log(cburl)
				document.location.href = cburl;
			}
		}
	}*/
	
	return tHasAuthority;
}

/**
 * Author：Ann Huang
 * Created：2024/06/03
 * Purpose：根據傳入的變數，確認該使用者有無權限使用Grid的新增、修改、刪除按鈕
 * 傳入參數：tCurrentUserId 當前使用者
 *           tCreatorId 資料建立者，若傳空值，則將tCurrentUserId視為tCreatorId
 *           tCompanyId 公司別，若傳空值將預設為senao
 * 回傳參數：無
 */
function Authority_Componenet(tCurrentUserId, tCreatorId, tCompanyId){
	if(tCreatorId == ""){
		tCreatorId = tCurrentUserId;
	}
	if(tCompanyId == ""){
		tCompanyId = "senao";
	}
	
	//檢查元件使用權限(先判斷元件是否存在 if($("#element_id").length) )
	/*
	$("#Active").hide(); //元件隱藏
	$("#Active").prop("disabled", true); //checkbox 唯讀
	$("#MACType").prop("readonly", true); //text 唯讀
	*/
}



