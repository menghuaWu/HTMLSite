<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>

<!DOCTYPE html PUBLIC "-/W3C//DTD XHTML 1.0 Transtitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html:html xhtml="true">
	<head>	
		<html:base />		
		<title><bean:message key="securityLogin.title" /></title>
		<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="dwrDefault/engine.js" ></script>
 		<script type="text/javascript" src="dwrDefault/util.js"></script>
		<script type="text/javascript" src="dwrDefault/interface/ajax_CommonAccessor.js"></script>	
		<script type="text/javascript" src="api-1.0.js"></script>
		<%
			//取圖片路徑
			String tThemePath = session.getServletContext().getAttribute("nana_theme_path").toString();
		%>
		<script type="text/javascript" language="javascript">
			
			//20161123  waynechang 提示user建議使用IE9以上
			var IE = (function () {
				"use strict";
				var isTheBrowser, //是否為IE瀏覽器 回傳布林值
				actualVersion,  //版本資訊  回傳字串
				jscriptMap, jscriptVersion;
				isTheBrowser = false;
				jscriptMap = {"5.5": "5.5","5.6": "6","5.7": "7","5.8": "8","9": "9","10": "10","11": "11"};
				jscriptVersion = new Function("/*@cc_on return @_jscript_version; @*/")();
				if (jscriptVersion !== undefined) {
					isTheBrowser = true;
					actualVersion = jscriptMap[jscriptVersion];
				}
				return actualVersion;
			}());
			if(IE!=undefined && IE<=8){
				alert('<bean:message key="securityLogin.label.RecommendedBrowser" />');
			}

			//jQuery
			jQuery.noConflict();
			jQuery(function(){
				//alert('<%=tThemePath%>');
			});
			
			// 登入系統
			var tIsAlreadySubmit = 0; //Gaspard 2012.09.08 add在登入頁面若連點兩次登入，會重覆送request到後端，因此建立全域變數阻檔重覆丟request
			function login() {
				//檢查是否允許登入
				if(!reOpenBrowser()){
					return;
				}
			
				var tUserId = document.forms[0].txtUserId.value;
				var tPassword = document.forms[0].txtPassword.value;
				if (tUserId == '') {
					alert('<bean:message key="securityLogin.script.alert.invalidUserId"/>');
					document.forms[0].txtUserId.focus();
				}else if (tPassword == '') {
					alert('<bean:message key="securityLogin.script.alert.wrongPassword"/>');
					document.forms[0].txtPassword.focus();
				} else {
					if(tIsAlreadySubmit == 0){//Gaspard 2012.09.08 修改
				     if(!apiLogin(tUserId,tPassword,'')){
                              alert('<bean:message key="clientSide.warning.script.alert.invalidUserId"/>');
							 return;
					 }
						tIsAlreadySubmit++;
						document.forms[0].hdnMethod.value = 'login';
						document.forms[0].submit();
					}
				}
			}
			
			//防止按下 Enter 鍵時,在沒有填入條件值會送出網頁的內容
			function preventEnter(evt) {
			 evt = (evt) ? evt : ((window.event) ? window.event : "") //20110706 兼容IE和Firefox取得keyBoardEvent
			 var key = evt.keyCode?evt.keyCode:evt.which; //20110706 兼容IE和Firefox取得keyCode
				if (key == 13) {
					if (document.forms[0].txtUserId.value != '' && document.forms[0].txtPassword.value != '') {
						login();
					}
					else if (document.forms[0].txtUserId.value != '' && document.forms[0].txtPassword.value == '') {
						document.forms[0].txtPassword.focus();
					}
				}
				return true;
			}
    
			// 切換語系
			function switchLang(pLang) {
				document.forms[0].hdnMethod.value = 'switchLanguage';
				document.forms[0].ddlLanguage.value = pLang;
				document.forms[0].submit();
			}						
			// 清除欄位值
			function resetForm() {
				document.forms[0].txtUserId.value = '';
				document.forms[0].txtPassword.value = '';
			}
			
			//檢查登入頁是否開啟在系統的iframe中.
			//避免因session失效時，某個連結在系統iframe裡開啟登入頁，user登入後把整個GP系統開在原iframe下，造成畫面呈巢狀.
			function reOpenBrowser(){
				if(window.parent.document.ifmFucntionLocation!=null){
					alert('<bean:message key="securityLogin.script.alert.reOpenBrowser"/>');
					return false;
				}
				return true;
			}
			
			jQuery(document).ready(function() {
				keepLoginId();
			});
			//20160621 Shih-Yun 06394 避免發生JspException:Cannot find bean:"frmSecurityLogin"的問題
			//20160603 jerry Edit : 有些情境會沒有hdnkeepPassword這個保存密碼的元件 , IE8時沒有元件會報錯 , IE11則不會 , 所以寫try/catch防呆
			var tkeepPassword= "false";
			<logic:notEmpty name="frmSecurityLogin"  scope="request" >
			try{
				tkeepPassword= "<bean:write name='frmSecurityLogin' property='hdnkeepPassword' scope='request' />";
			}
			catch(err){
			}
			</logic:notEmpty>
			
			function keepLoginId(){
				var tHdnLdapId = document.getElementById("hdnLdapId").value;
				var tHdnSystemId = document.getElementById("hdnSystemId").value; 
				var tHdnLoginIdType = document.getElementById("hdnLoginIdType").value; 
			
				tHdnLoginIdType = document.forms[0].hdnLoginIdType.value;
				if(tHdnLoginIdType == "systemId"){
					if(tHdnSystemId != ""){
						document.forms[0].txtUserId.value = tHdnSystemId;
						document.forms[0].txtUserId.focus();
					}
				} else if(tHdnLoginIdType == "ldapId"){
					if(tHdnLdapId != ""){
						document.forms[0].txtUserId.value = tHdnLdapId;
						document.forms[0].txtUserId.focus();
					}
				}
				
	           
				//20150522 kahn 判斷是否有保存密碼的html物件，才執行以下程式碼，以防ie8報錯
				if(document.getElementById("hdnkeepPassword")){
				   				//20150305 waynechang 判斷是否將密碼存在cookie，並顯示
				    document.forms[0].hdnkeepPassword.value=tkeepPassword;
				    if(tkeepPassword=="true"){
					    document.getElementById("hdnkeepPassword").checked=true;
					    document.getElementById("hdnkeepPassword").value="true";
				    }else{
					    document.getElementById("hdnkeepPassword").checked=false;
					    document.getElementById("hdnkeepPassword").value="false";
				    }
				}
				
				

			}
			
			function keepPassword(){	//20150305 waynechang 判斷是否將密碼存在cookie
				if("false"==tkeepPassword){
					document.forms[0].hdnkeepPassword.value="true";
				}else{
					document.forms[0].hdnkeepPassword.value="false";
				}
			}
			
		</script>
		<link href="<%=tThemePath%>/css/common.css" rel="stylesheet" type="text/css" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8;">
	</head>
	
	<!--[if IE]> 
	<style> 
	#bookmark{left:645px}/*--20140505 add by George 解決我的最愛IE位置問題*/ 
	</style> 
	<![endif]-->
	<body class="login_background">
		<html:form action="/Authentication">
		    </br></br></br></br></br></br>	
		    <table width="690" height="450" border="0" align="center" valign="middle" cellpadding="0" cellspacing="0" >
				<tr>
					<td colspan="3">
						<!-- 上方區塊 -->
						<img src="<%=tThemePath%>/images/login_images/BPM_login_TC_01.jpg" width="690" height="178" alt="" />
                    </td>
				</tr>
				<tr>
					<td>
						<!-- 下左區塊 -->
						<img src="<%=tThemePath%>/images/login_images/BPM_login_TC_02.jpg" width="154" height="272" alt="" />
					</td>
					<td>
						<!-- 下中區塊 -->
						<img src='data:image/jpeg;base64,<bean:write name="loginImage" scope="application"/>' width="260" height="272" alt="" />	
					</td>
					<td align="left" valign="top" width="276" height="272" alt="">
						<!-- 下右區塊 -->
	                    <table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0" class="txt13" style="background-color:#ECEAEB">	                                 
	                        <tr>
								<td height="10" colspan="5" >												
								</td>
							</tr>
							<tr>
								<td align="center" height = "15" valign="middle" class="logoutMessage" colspan="5" style="font-size:12px;">
									<logic:equal name="wms_isLogOut" value="true" scope="request">
										<!-- 網頁作業逾時，請重新登入 -->
										<bean:message key="securityLogout.label.message.logoutMessage" />
									</logic:equal>
								</td>
							</tr>                                                               

							<tr>
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<td width="50" align="right" valign="middle" class="txt13" nowrap="nowrap">
									<bean:message key="securityLogin.label.language" />
								</td>
								<td width="5" height="30" align="right" valign="middle">												
								</td>
								<td width="170" align="left" valign="middle">
									<logic:notEmpty name="wms_login_vAllLanguage" scope="session">
										<html:select styleId="ddlLanguage" property="ddlLanguage" styleClass="text11" onchange="switchLang(document.getElementById('ddlLanguage').value);" style="width:95%; font-size:12px">
											<html:options collection="wms_login_vAllLanguage" property="country" labelProperty="displayName" />
										</html:select>
									</logic:notEmpty>												
								</td>														
								<td width="31" height="30" align="right" valign="middle">												
								</td>			
							</tr>
							<tr>
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<logic:empty name="isShowLoginIdType" scope="request">
								   <td width="50" align="right" valign="middle" class="txt13" nowrap="nowrap">
										<!--代號-->
										<bean:message key="securityLogin.label.user.id" />
										<html:hidden styleId="hdnLoginIdType" property="hdnLoginIdType" />
								   </td>
								</logic:empty>
								
								<!-- 顯示可選擇以何種帳號登入系統的下拉式選單 -->
								<logic:notEmpty name="isShowLoginIdType" scope="request">
									<td width="85" align="right" valign="middle" class="txt13" nowrap="nowrap">
										<html:select styleId="hdnLoginIdType" property="hdnLoginIdType" styleClass="text11" style="width:90%; font-size:12px" onchange="keepLoginId();">
											<html:option key="securityLogin.label.user.id" value="systemId" />
											<html:option key="securityLogin.label.user.ldapId" value="ldapId" />
										</html:select>
									 </td>
								</logic:notEmpty>
								<td width="5" height="30" align="right" valign="middle">
								</td>
								<td width="170" align="left" valign="middle">
									<html:text styleId="txtUserId" property="txtUserId" onkeypress="return preventEnter(event)" style="width:90%; font-size:12px" />
								</td>							
								<td width="31" height="30" align="right" valign="middle">												
								</td>
							</tr>	
							<tr>
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<td width="50" align="right" valign="middle" class="txt13" nowrap="nowrap">
									<!--密碼-->
									<bean:message key="securityLogin.label.user.password" />
								</td>											
								<td width="5" height="30" align="right" valign="middle">												
								</td>											
								<td width="170" align="left" valign="middle">
									<html:password  styleId="txtPassword" property="txtPassword" autocomplete="off" onkeypress="return preventEnter(event)" onfocus="this.select();" style="width:90%; font-size:12px" />											
								</td>											
								<td width="31" height="30" align="right" valign="middle">												
								</td>											
							</tr>
							
							<logic:equal name="nana_defaultLogin_keepUserId"  value="true" scope="application">
							<tr>
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<td width="50" align="right" valign="middle" class="txt13" nowrap="nowrap">
									<input type="checkbox" id="hdnkeepPassword" name="hdnkeepPassword" value="false"  onclick="keepPassword()" />
								</td>											
								<td width="5" height="30" align="right" valign="middle">												
								</td>											
								<td width="170" align="left" valign="middle">
									<!--記住密碼-->
									<bean:message key="securityLogin.label.iskeepPassword"/>
								</td>											
								<td width="31" height="30" align="right" valign="middle">												
								</td>											
							</tr>
							</logic:equal>
							
							<tr>
								<td height="20" colspan="5" >												
								</td>
							</tr>
							
							<tr style="background-color:white;" >
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<td width="50" align="right" valign="middle" class="txt13" nowrap="nowrap">
								  
								</td>											
								<td width="5" height="30" align="right" valign="middle">												
								</td>											
								<td width="170" align="left" valign="middle" style="padding:5px;">									
									<button type="button" width="100" onclick="login()" >
										<!--登錄-->
										<bean:message key="securityLogin.button.login" />
									</button> 
									&nbsp;&nbsp;&nbsp;&nbsp;

									<button type="button" onclick="resetForm()">
										<!--清除-->
										<bean:message key="securityLogin.button.reset" />
									</button>

								</td>											
								<td width="31" height="30" align="right" valign="middle">												
								</td>									    										
							</tr>
							<tr style="background-color:white">
								<td colspan="5">
									
								</td>	
							</tr>
							<tr>
								<td width="20" height="30" align="right" valign="middle">												
								</td>
								<td height="20" colspan="4" align="center">												
								 KPI系統連結>>><A href="http://kpi.senao.com/EF2KWeb/Default.asp" style="color:#324fe1" target="_blank">KPI 績效評核系統</A> 
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<logic:equal name="nana.multi.ap.server" value="true" scope="application">
			<table width="690"  border="0" align="center"  cellpadding="0" cellspacing="0" style="margin-top:10px;">
				<tr>
					<td align="center" class="txt11" style="font-size:16px;color:red">
						【<bean:write name="nana.localServer.Name" scope="application"/>】
					</td>
				</tr>
			</table>
			</logic:equal>
			<table width="690"  border="0" align="center"  cellpadding="0" cellspacing="0" >
				<tr>
					<td align="center"  class="txt11">
						<br/>
						<bean:message key="securityLogin.label.RecommendedBrowser" />
					</td>
				</tr> 
				<tr>
					<td align="center"  class="txt11">
						Copyright &copy; Data Systems All rights reserved. &copy;鼎新電腦 著作權所有，並保留一切權利
						 &nbsp; &nbsp;
						<a id="bookmarkLink" href=" " rel="sidebar" class="txt11" onclick="addBookmark()">
							<img src="<%=tThemePath%>/images/login_images/bookmark.gif" alt="" style="border-width: 0px;" height="18px" align="top"/>
							<bean:message key="securityLogin.label.MyFavorite" />
						</a>
					</td>
				</tr>
				<tr>
					<td align="center" valign="middle" class="txt11" colspan="2">
						<table>
							<tr>
								<td width="530" align="left">
									<!-- 當NaNaWeb.properties - nana.PersonalDataProtection.InfoSecurity=true時(個資保護宣言) -->
									<logic:equal name="InfoSecurity" value="true" scope="session">
										<bean:message bundle="constant" key="PersonalDataProtection.label.Login" />
									</logic:equal>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
			<html:hidden styleId="hdnMethod" property="hdnMethod" />
			<html:hidden styleId="ddlLanguage" property="ddlLanguage" />
			<html:hidden styleId="hdnClientTimeZone" property="hdnClientTimeZone" />
			<html:hidden styleId="hdnSystemId" property="hdnSystemId" />
			<html:hidden styleId="hdnLdapId" property="hdnLdapId" />
			<html:hidden styleId="hdnLogoutForMultiLogin" property="hdnLogoutForMultiLogin" /><!--判斷多重登入時，是否將原使用者登出 -->
		</html:form>
		
		<script language="javascript" type="text/javascript">
			//取得client TimeZone
			var localTime = new Date();  
			//this one will give you the GMT offset  
			var timezone = localTime.getTimezoneOffset()/60 * (-1);   
			var tClientTimeZone = document.getElementById("hdnClientTimeZone");  
			if (timezone>0){
				//ex：'GMT+8'
				tClientTimeZone.value='GMT'+'+'+timezone;
				
				//ex: 'GMT0' or 'GMT-5'
			}else if(timezone<=0){
				tClientTimeZone.value='GMT'+timezone;
			}
		</script>
		
	</body>	
</html:html>

<script type="text/javascript" language="javascript">
	document.forms[0].txtUserId.focus();
	tServerUrl="127.0.0.1:8086";
	//2012/03/29 Edit By Iron : 將透過Request取得serverName與serverPort，改為由ajax直接取得serverUrl，預設為127.0.0.1:8086
	
	function getServerUrl(){
		DWREngine.setAsync(false);//關閉Ajax同步
		ajax_CommonAccessor.getServerUrl(callback);
		//alert("tServerUrl="+tServerUrl);
		DWREngine.setAsync(true);//開啟Ajax同步
	}

	function callback(data){
		if(data != null && data != ""){
			tServerUrl=data;
		}
	}
	
	//加入書籤功能
	function addBookmark(){
		getServerUrl();
		//alert("addBookmark.tServerUrl="+tServerUrl);
		//var tUrl = 'http://' + tServerUrl + '/NaNaWeb';
		
		//2013.06.18 增加判斷當前使用的是http或https方式
		var tProtocol = location.protocol;
		var tUrl = '';
		if (tProtocol != ''){
			tUrl = tProtocol + '//' + tServerUrl + '/NaNaWeb';
		}
		document.getElementById("bookmarkLink").href=tUrl;
		var tTitle = 'BPM';
		//20140505 Safari/Chrome Modify By George 判斷是否為chrome  chrome不支援此功能
		if(navigator.userAgent.toLowerCase().indexOf("safari")!='-1'){
			if(navigator.userAgent.toLowerCase().indexOf("chrome")!='-1'){
				alert('chrome瀏覽器不支援此功能!\r\nDear BPM user, this browser does not support! ');
			}else{
				alert('Safari瀏覽器不支援此功能!\n請您按下CTRL+D將此網站加入書籤!\r\nDear BPM user, please press CTRL+D to Bookmark this page! ');
			}			
		}
		//Firefox
		else if (window.sidebar) {	//20141003 waynechang 修正firefox加入書籤功能
			 window.sidebar.addPanel(tTitle, tUrl,''); 		
		}
		//IE		
		else if(window.external) {
			window.external.AddFavorite(tUrl, tTitle);
		}
		//Opera
		else if(window.opera && window.print){
		    var elem = document.createElement('a');
		    elem.setAttribute('href',tUrl);
		    elem.setAttribute('title',tTitle);
		    elem.setAttribute('rel','sidebar');
		    elem.click();
		}
	}
	
	reOpenBrowser();
</script>

<logic:present name="org.apache.struts.action.ERROR" scope="request">
 <script type="text/javascript" language="javascript">
  <html:messages id="message" bundle="constant" property="wms_systemMessage" message="false">
   alert("<bean:write name="message" filter="false" />");
   document.forms[0].txtUserId.focus();
  </html:messages>

	
 </script>
 </logic:present>
 <script type="text/javascript" language="javascript">
 <logic:present name="wms_systemMessage_sessionMuiltLogin" scope="request" >
		if(confirm("<bean:message bundle="constant" key="clientSide.warning.script.alert.sessionMuiltLogin" />")){
			document.getElementById("hdnLogoutForMultiLogin").value=true;
			login();
		}
	</logic:present>	
  </script>
