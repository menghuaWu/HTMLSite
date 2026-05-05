/**
 * 查詢現在日期，GP使用格式 yyyy/mm/dd ex: 2018/05/05
 * @returns result
 */
function showCurrentDate() {
    var result = "";
    var d = new Date();
    result = d.getUTCFullYear() + '/' + pad(d.getUTCMonth() + 1) + '/' + pad(d.getUTCDate());
    //result = new Date().toISOString().slice(0, 10).replace(/-/g, "/"); //僅支援到IE 9
    return result;
}
function pad(number) {
    let r = String(number);
    if (r.length == 1) {
        r = "0" + r;
    }
    return r;
}