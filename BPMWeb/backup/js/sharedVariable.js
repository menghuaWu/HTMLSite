    var siteInvoke = {
        "DBSWeb": "invoke",
        "DPSWeb": "invoke2",
        "SFCWeb": "invoke3",
        "RMAWeb": "invoke4",
        "WMSWeb": "invoke5"
    }
    var browseURL = document.location.href;
    var pathURL = browseURL.replace(document.location.origin, "").substring(1);
    var siteName = pathURL.substring(0, pathURL.indexOf("/"));
    var baseURL = document.location.origin + "/MES/";
    var invokeURL = baseURL + siteInvoke[siteName] + "?sCode=";  