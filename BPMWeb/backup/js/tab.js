   	
	/*-------------------Tab Setup------------------------------------*/
   
	function SetupTabFrame(title, url) { //Type A(include iframe)
        	 
		SetTabTitle(title);
        SetTabContentFrame(url);
		SetTab();
        
    }
	function SetupTabGrid(title) { //Type B(include grid)        
		 var len=title.length
		SetTabTitle(title);		
        SetTabContentGrid(len);
		SetTab();
        
    }
	//設定Tab狀態
	function SetTab() {
		$("#content").find("[id^='tab']").hide(); // Hide all content
        $("#tabs li:first").attr("id", "current"); // Activate the first tab
        $("#content #tab1").fadeIn(); // Show first tab's content
        $('#tabs a').click(function(e) {
            e.preventDefault();
            if ($(this).closest("li").attr("id") == "current") { //detection for current tab
                return;
            } else {
                $("#content").find("[id^='tab']").hide(); // Hide all content
                $("#tabs li").attr("id", ""); //Reset id's
                $(this).parent().attr("id", "current"); // Activate this
                $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
            }
        });
	}
    //Set the Tab Title
    function SetTabTitle(title) {

        // 取得外層容器 tabs
        var ul = document.getElementById("tabs");
        // 建立一個 DocumentFragment，可以把它看作一個「虛擬的容器」
        var fragment = document.createDocumentFragment();
		
        for (var i = 0; i < title.length; i++) {
            // 生成新的 li，加入文字後置入 fragment 中。
            //<li><a href="#" name="tab1">One</a></li>
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = "#";
            a.name = "tab" + (i + 1);
            a.appendChild(document.createTextNode(title[i]));
            li.appendChild(a);
            fragment.appendChild(li);
        }

        // 最後將組合完成的 fragment 放進 ul 容器
        ul.appendChild(fragment);
    }
    //set the tab Content Iframe
    function SetTabContentFrame(url) {

        // 取得外層容器 div
        var parent = document.getElementById("content");
        // 建立一個 DocumentFragment，可以把它看作一個「虛擬的容器」
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < url.length; i++) {
            // 生成新的 div，加入文字後置入 fragment 中。
            //<div id="tab1"><iframe></iframe></div>
            let div = document.createElement("div");
            div.id = "tab" + (i + 1);
            let iframe = document.createElement("iframe");
			iframe.id="tiframe"+ (i + 1);
            iframe.src = url[i];
            iframe.width = "100%";
            iframe.height = "500px";
            iframe.frameBorder = 0;
            div.appendChild(iframe);
            fragment.appendChild(div);
        }

        // 最後將組合完成的 fragment 放進 ul 容器
        parent.appendChild(fragment);
    }
	//set the tab Content Grid
    function SetTabContentGrid(len) {

        // 取得外層容器 div
        var parent = document.getElementById("content");
        // 建立一個 DocumentFragment，可以把它看作一個「虛擬的容器」
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < len; i++) {
            // 生成新的 div，加入文字後置入 fragment 中。
			//<div id="tab1"><table id="jqGrid"></table><div id="jqGridPager"></div></div>
            let div = document.createElement("div");
            div.id = "tab" + (i + 1);
			
			//<table id="jqGrid"></table> 
            let table = document.createElement("table");
            table.id = "tabjqGrid" + (i + 1);			
			//<div id="jqGridPager"></div>
            let divPager = document.createElement("div");
			divPager.id="tabjqGridPager"+ (i + 1);			
           			
			div.appendChild(table);
			div.appendChild(divPager);
		
            fragment.appendChild(div);
        }
        // 最後將組合完成的 fragment 放進 ul 容器		
        parent.appendChild(fragment);
		
    }
	//change iframe url
	function ChangeTabContentFrame(url){
		 for (var i = 0; i < url.length; i++) {
            let iframe = document.getElementById("tiframe"+ (i + 1));			
            iframe.src = url[i];
        }
	}
	//change iframe url
	function getTabGridId(len){
		 for (var i = 0; i < url.length; i++) {
            let iframe = document.getElementById("tiframe"+ (i + 1));			
            iframe.src = url[i];
        }
	}