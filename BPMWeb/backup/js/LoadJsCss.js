function loadJs(file) {
    var scriptTag = document.getElementById('loadScript');
    var head = document.getElementsByTagName('head').item(0);
    if (scriptTag) head.removeChild(scriptTag);
    script = document.createElement('script');
    script.src = "js/" + file;
    script.type = 'text/javascript';
    script.id = 'loadScript';
    head.appendChild(script);
}

function loadCss(file) {
    var cssTag = document.getElementById('loadCss');
    var head = document.getElementsByTagName('head').item(0);
    if (cssTag) head.removeChild(cssTag);
    css = document.createElement('link');
    css.href = "css/" + file;
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.id = 'loadCss';
    head.appendChild(css);
}

function loadJsCss(jStyle) {
    /*jStyle [{plugin:UI,enable:true},{plugin:jqgrid,enable:true}]*/

    for (let i = 0; i < jStyle.length; i++) {
        if (jStyle[i].enable) {
            switch (jStyle[i].plugin) {
                case "ui":
                    loadJs("jquery-ui.min.1.12.1.js");
                    loadCss("jquery-ui.min.1.12.1.css");
                    break;
                case "jqgrid":
                    break;
                case "'Bootstrap":
                    break;
            }
        }
    }

}