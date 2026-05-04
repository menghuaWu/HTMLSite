var siteInvoke = {
    "BPMWeb": "invoke"/*,
    "BPMWeb": "invoke2",
    "BPMWeb": "invoke3",
    "BPMWeb": "invoke4",
    "BPMWeb": "invoke5",
	"BPMWeb": "invoke6",
    "BPMWeb": "invoke7",
    "BPMWeb": "invoke8",
    "BPMWeb": "invoke9"
	*/
}
var browseURL = document.location.href;
var pathURL = browseURL.replace(document.location.origin, "").substring(1);
var siteName = pathURL.substring(0, pathURL.indexOf("/"));
var baseURL = document.location.origin + "/MES/";
console.log(siteName);

var invokeURL = baseURL + siteInvoke[siteName] + "?sCode=";
