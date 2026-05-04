<%@ page contentType="text/html;charset=UTF-8" language="java" errorPage="../../ErrorPage.jsp" %>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/struts-nested.tld" prefix="nested" %>
<html:html xhtml="true">
 <head>
  <html:base />
   <script src="../../js/jquery-1.11.3.min.js" type="text/javascript"></script>
   <script type='text/javascript' src='../../js/bootstrap/bootstrap-4.6.2.min.js'></script>
   <link href='../../css/bootstrap/bootstrap-4.6.2.min.css' rel='stylesheet' type='text/css' />
   <link href='../../Copyright.css' rel='stylesheet' type='text/css' />
    
  <script src="../../js/Dialog.js" type="text/javascript"></script>
  <script src="../../js/ModalDialog.js" type="text/javascript"></script>
  <script type="text/javascript" language="javascript">
  
	<%
	//取圖片路徑
	String tThemePath = session.getServletContext().getAttribute("nana_theme_path").toString();
	%>
	
	// 追蹤此流程的明細
	function detailProcessInstance() {
     document.forms[0].hdnMethod.value = 'traceProcessForSearchForm';
     try {
       window.parent.showDialog(window.parent.gDialog);
     } catch (e) {}
     document.forms[0].submit();
   }

   // 檢視流程所用到的表單資料
   function viewAllFormData() {
     document.forms[0].hdnMethod.value = 'searchFormDetail';
     try {
       window.parent.showDialog(window.parent.gDialog);
     } catch (e) {}
     document.forms[0].submit();
   }
   //20160203  06394 Shih-Yun 表單過寬，橫向scrollBar
   function doResizeWidth(pWidth){
 		var tIframe=document.getElementById("ifmAppLocation"); 
		tIframe.width=pWidth;
		if(document.getElementById('ifmAppLocation').contentWindow.doResizeWidth){
			document.getElementById('ifmAppLocation').contentWindow.doResizeWidth(pWidth);
		}
   }
 //20150513 06394 Shih-Yun 固定工具列修復 
   // 動態調整主視窗內所有的 iframe 的大小
   function doResize() {
	   if(document.getElementById('ifmAppLocation').contentWindow.doResize){ //如果子window有doResize() 才執行，避免瀏覽器報錯
			document.getElementById('ifmAppLocation').contentWindow.doResize();
		}
		//06394計算iframe高度
		var tIframe=document.getElementById("ifmAppLocation"); //iframe id
		if (document.getElementById){   
		if (tIframe && !window.opera) {  
   			if (tIframe.contentDocument && tIframe.contentDocument.body.offsetHeight) {  //firefox
   				tIframe.height=0; //for chrome
					tIframe.height = tIframe.contentDocument.body.offsetHeight;
				}else if(tIframe.Document && tIframe.Document.body.scrollHeight) {   //ie
					tIframe.height = tIframe.Document.body.scrollHeight; 
				}
			}
		}
		//for 外部連結
		if(window.top.document.getElementById('ifmFucntionLocation') == null){ 
 			window.top.document.body.style.overflow = 'hidden';
   			window.onresize=function(){ //隨視窗大小改變呼叫doResize()
 	       		window.top.doResize();
 	       	};
 		}
     /*var tAppLocation = document.getElementById("ifmAppLocation");
     if (tAppLocation != null) {
       var Nav4 = ((navigator.appName == "Netscape") && (parseInt(navigator.appVersion) >= 4))
       if (Nav4) {
         tAppLocation.height = tAppLocation.document.body.scrollHeight;
       } else {
         tAppLocation.height = tAppLocation.document.body.offsetHeight * 0.87;
       }
     }*/
   }
   window.onresize=function(){ //隨視窗大小改變呼叫doResize()
 		doResize();
 	};
  </script>
  <title>
   <bean:message key="traceProcessForForm.title" />
  </title>
  <link href="<%=tThemePath%>/css/common.css" rel="stylesheet" type="text/css">
 </head>
 <body>
  <script language="javascript">
   try {
     window.parent.showDialog(window.parent.gDialog);
   } catch (e) {}
  </script>
  <html:form action="/TraceProcessForSearchForm">
   <html:hidden styleId="hdnMethod" property="hdnMethod" />
   <html:hidden styleId="hdnTracerRoleType" property="hdnTracerRoleType" />
   <html:hidden styleId="hdnProcessInstOID" property="hdnProcessInstOID" />
   <html:hidden styleId="hdnAccessCondition" property="hdnAccessCondition" />
   <html:hidden styleId="hdnFormDefId" property="hdnFormDefId" />
   <html:hidden styleId="hdnCurrentUserId" property="hdnCurrentUserId" /> <!--20131111 KEVIN_FENG: add for 查詢表單資料會顯示 "您已登入其他使用者" 的Bug-->
	<style>
		.nav a {
		  cursor: pointer;
		}
	  
		.dropdown-item {
		  padding: 0rem 1.5rem;
		}
	  
		.nav li:hover {
		  background-color: #6c757d;
		  color: #000000;
		}
	</style>
	<!---Menu Start--->
	<div id='menu'></div>
	<div id="Navbar">
		<nav class="navbar navbar-expand-md mainmenu navbar-hover navbar-dark bg-dark"><a class="navbar-brand"
				href="#"><span class="h3 mx-1"></span></a><button class="navbar-toggler" type="button"
				data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
				aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
			<div class="navbar-collapse collapse" id="navbarSupportedContent">
				<ul class="nav navbar-nav mr-auto ">
					<li class="nav-item"><a href="https://flowportal.senao.com/BPMWeb/index.html" id="a_home" class="nav-link"><i class="fas fa-home"></i>
							Home</a></li>
				</ul>
				<ul class="nav navbar-nav mx-auto"></ul>
				
			</div>
		</nav>
	</div>
	</div>

	</div>
	<!---Menu End--->

   <table width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
     <td>
       <table border="0" cellspacing="0" cellpadding="0">
       <tr>
        <td>
         <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
           <logic:equal name="frmTraceProcessForSearchForm" property="hdnAccessCondition" value="0" scope="request">
            <td class="docform" nowrap>
             <a href="javaScript:detailProcessInstance()">
               <bean:message key="traceProcessForForm.link.detailProcessInstance" />
             </a>
            </td>
           </logic:equal>
           <logic:notEqual name="frmTraceProcessForSearchForm" property="hdnAccessCondition" value="0" scope="request">
            <td class="docother" nowrap>
             <a href="javaScript:detailProcessInstance()">
               <bean:message key="traceProcessForForm.link.detailProcessInstance" />
             </a>
            </td>
           </logic:notEqual>
           <logic:equal name="frmTraceProcessForSearchForm" property="hdnAccessCondition" value="1" scope="request">
            <td class="docform" nowrap>
             <a href="javaScript:viewAllFormData()">
               <bean:message key="traceProcessForForm.link.viewAllFormData" />
             </a>
            </td>
           </logic:equal>
           <logic:notEqual name="frmTraceProcessForSearchForm" property="hdnAccessCondition" value="1" scope="request">
            <td class="docother" nowrap>
             <a href="javaScript:viewAllFormData()">
               <bean:message key="traceProcessForForm.link.viewAllFormData" />
             </a>
            </td>
           </logic:notEqual>
          </tr>
         </table>
         </td>
       </tr>
      </table>
     </td>
    </tr>
      
    <tr>
     <td class="splitLine"></td>
    </tr>
   </table>
<!--2013/05/13  06394 Shih-Yun 固定工具列修復 _設定scroll-->
 <div id="divForScrollbarHeight" style="overflow:auto; width:100%;-webkit-overflow-scrolling:touch; ">
 <!-- 刪除20150513 06394 Shih-Yun 固定工具列修復  _ 刪除 align="center"(因為ie8出現下移問題) -->
   <table border="0" cellSpacing="0" cellPadding="0" width="100%" >
    <tr>
     <td style="padding-top: 3px;">
     <!-- 20150513 06394 Shih-Yun 固定工具列修復  新增onload="doResize();"，設scrolling="no" 刪除 align="center" (ie8出現下移問題) -->
      <iframe id="ifmAppLocation" src="<bean:write name='ApplicationLocation' scope='request'/>"  width="100%" height="480pt" scrolling="no" frameborder="0" allowTransparency="true" onload="doResize();"></iframe>
     </td>
    </tr>
   </table>
   </div><!--2013/05/13  06394 Shih-Yun 固定工具列修復 _設定scroll-->
		<!--Bottom Start-->

		<div id="bottom">

			<div class="bg-dark SenaoCopyright">
				<div class="text-center  ">
					<p>Copyright &copy; 2019 Senao Networks | Designed by <a href="http://www.senao.com" target="_parent">Senao Networks</a>
					  <span  style="float:left;" id='LOGINDT'>
							   
					   </span>
						<a href="#">
							<span class="round-anchor fa-stack fa-1x " style="float:right;">
								<i class="far far fa-circle  fa-stack-2x"></i>
								<i class="far fas fa-angle-double-up fa-stack-1x"></i> 
							</span>
						</a>
						
					</p>
		
				</div>
			</div>

		</div>
		<!--Bottom End-->
  </html:form>
  <script language="javascript" type="text/javascript">
   try {
     window.parent.hideDialog(window.parent.gDialog);
   } catch (e) {}
  </script>
 </body>
</html:html>
