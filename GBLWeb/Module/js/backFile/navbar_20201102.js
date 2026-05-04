

function SetNavbar(tag, json,navbarColor) {
    /*
     <!-- <nav class="navbar navbar-expand-md navbar-dark bg-dark  fixed-top mainmenu">-->
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top  mainmenu">
          <a class="navbar-brand " href="#">Senao</a>
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </a>
          <button class="navbar-toggler collapsed " type="button" data-toggle="collapse" data-target="#navbarHover" aria-controls="navbarDD" aria-expanded="false " aria-label="Navigation">
                  <span class="navbar-toggler-icon "></span>
              </button>
          <div class="navbar-collapse collapse " id="navbarHover">

          </div>

      </nav>
    */
    let parent = document.getElementById(tag);
    if (parent == 0) {
        parent = document.getElementByName(tag);
    }

    let fragment = document.createDocumentFragment();
    let nav = document.createElement("nav");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let span = document.createElement("span");
    let spanBtn = document.createElement("span");
    let btn = document.createElement("button");
    let div = document.createElement("div");
    let divId = "navbarSupportedContent";
	
	/*document.documentElement.style.setProperty('--bgColor', '#000000'); //改變CSS變數
	var styles = getComputedStyle(document.documentElement);
	var value = String(styles.getPropertyValue('--bgColor')).trim(); //讀取CSS變數
	console.log(value);
	*/
	navbarColor['txtColor']=navbarColor['txtColor']==undefined ? 'navbar-dark': navbarColor['txtColor'];
	navbarColor['bgColor']=navbarColor['bgColor']==undefined ? 'bg-dark': navbarColor['bgColor'];
    if (parent) {
        /*-- .navbar-expand-{sm|md|lg|xl}決定在哪個斷點以上就出現漢堡式選單 -->
                navbar-dark 文字顏色 .bg-dark 背景顏色 
        */
        
        $('head').append('<link rel="stylesheet" type="text/css" href="/DBSWeb/Module/css/navbar.css">');
        //nav.className = "navbar navbar-expand-md navbar-light bg-white border-bottom  border-success navbar-hover";
        // nav.className = "navbar navbar-expand-md navbar-dark bg-dark fixed-top  mainmenu";
       // nav.className = "navbar navbar-expand-md navbar-dark bg-dark  mainmenu "; CLickNav insert class navbar-hover
       // nav.className = "navbar navbar-expand-md navbar-dark bg-dark  mainmenu navbar-hover";
	    nav.className = "navbar navbar-expand-md mainmenu navbar-hover "+navbarColor.txtColor+" "+navbarColor.bgColor;
        /*<!-- .navbar-brand 左上LOGO位置 -->*/
        a.className = "navbar-brand";
        a.href = "#";
        /*img.src = "images/H-logo.svg";
        img.width = "30";
        img.height = "30";
        img.className = "d-inline-block align-top";
        a.appendChild(img);
        */
        span.className = "h3 mx-1";
        span.innerText = "";

        a.appendChild(span);
        /*
        <!-- .navbar-toggler 漢堡式選單按鈕 -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <!-- .navbar-toggler-icon 漢堡式選單Icon -->
          <span class="navbar-toggler-icon"></span>
        </button>
        */
        spanBtn.className = "navbar-toggler-icon";
        btn.className = "navbar-toggler";
        btn.setAttribute("type", "button");
        btn.setAttribute("data-toggle", "collapse");
        btn.setAttribute("data-target", "#" + divId);
        btn.setAttribute("aria-controls", "" + divId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Toggle navigation");

        btn.appendChild(spanBtn);
        /* <!-- .collapse.navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
        <!-- 選單項目&漢堡式折疊選單 --> 
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        */
        div.className = "navbar-collapse collapse";
        div.setAttribute("id", divId);

        nav.appendChild(a);
        nav.appendChild(btn);
        nav.appendChild(div);
        fragment.appendChild(nav);
        parent.appendChild(fragment);
        SetNavbarContent(divId, json);

    }

}

function SetNavbarContent(tag, json) {
    //mr-auto(left) mx-auto(center) ml-auto(right) 
    //position-0 left 1- 2-right
    let parent = document.getElementById(tag);
    //let inParent = parent;
    let fragmentMl = document.createDocumentFragment();
    let fragmentMx = document.createDocumentFragment();
    let fragmentMr = document.createDocumentFragment();
    let nav = document.createElement("nav");
    let ulMr = document.createElement("ul");
    let ulMx = document.createElement("ul");
    let ulMl = document.createElement("ul");
    ulMl.className = "nav navbar-nav mr-auto ";
    ulMx.className = "nav navbar-nav mx-auto";
    ulMr.className = "nav navbar-nav ml-auto";
    $.each(json, function(index, element) {

        let li = document.createElement("li");
        let a = document.createElement("a");
        let ulSon = document.createElement("ul");
        let inParent = "";
        switch (element.position) {
            case "0":
                inParent = fragmentMl;
                break;
            case "1":
                inParent = fragmentMx;
                break;
            case "2":
                inParent = fragmentMr;

                break;
            default:
                inParent = fragmentMl;

        }

        if (element.url != "") {
            a.href = element.url;
        }
        if (element.target != "") {
            a.target = element.target;
        }
		if (element.id != "") {
            a.id = 'a_'+element.id;
        }
        a.innerHTML = element.html;
        if (element.parents == "" && element.child == "") { //第一層
            li.className = "nav-item";
            a.className = "nav-link";
			
            li.appendChild(a);
        } else if (element.parents == "" && element.child == "Y") {
            li.className = "nav-item dropdown";
            a.className = "nav-link dropdown-toggle";
            a.setAttribute('data-toggle', 'dropdown');
            a.setAttribute('aria-haspopup', 'true');
            a.setAttribute('aria-expanded', 'false');
            li.appendChild(a);
            ulSon.className = "dropdown-menu";
            ulSon.id = element.id;
            li.appendChild(ulSon);

        } else if (element.parents != "" && element.child == "Y") {
            if (inParent.getElementById(element.parents)) {
                inParent = inParent.getElementById(element.parents);
                a.className = "dropdown-item dropdown-toggle"
                li.appendChild(a);
                ulSon.className = "dropdown-menu";
                ulSon.id = element.id;
                li.appendChild(ulSon);

            }

        } else {

            if (inParent.getElementById(element.parents)) {
                inParent = inParent.getElementById(element.parents);
                a.className = "dropdown-item";
                li.appendChild(a);

            }
        }
        inParent.appendChild(li);

    });

    ulMl.appendChild(fragmentMl);
    ulMx.appendChild(fragmentMx);
    ulMr.appendChild(fragmentMr);
    parent.appendChild(ulMl);
    parent.appendChild(ulMx);
    parent.appendChild(ulMr);


}

function NavbarClick() {

    $('.dropdown-menu .dropdown-toggle').on('click', function() {
        
        var $el = $(this);
        var $parent = $el.offsetParent(".dropdown-menu");

        if (!$el.next().hasClass("show")) {
            $el.parents('.dropdown-menu').first().find(".show").removeClass("show");
        }
        $el.next(".dropdown-menu").toggleClass("show").parent("li").toggleClass("show");

        $el.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function() {
            $(".dropdown-menu .show").removeClass("show");
        });

        if (!$parent.parent().hasClass("navbar-nav")) {
            $el.next().css({
                "top": $el[0].offsetTop,
                "left": $parent.outerWidth()
            });
        }

        return false;
    });
}