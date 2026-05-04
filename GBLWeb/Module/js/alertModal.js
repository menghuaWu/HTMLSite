
// 顯示 Error 訊息框 
// @param {number} id - 元件 id  
// @param {number} msg - 要顯示的訊息內容
// @param {number} EmptyEnable - 顯示前是否清除先前訊息 1:清除 0:不清除
function showErrorModal(id, msg, EmptyEnable) {  
    // 將訊息轉換成適合在 HTML 中顯示的格式（替換換行符為 <br>）
    const messageContent = msg.replaceAll('\n', '<br>');

    // 創建警告框的 HTML 內容
    const alertHTML = `
        <div class="col-12 alert alert-danger alert-dismissible fade show" role="alert">           
            <h4 class="alert-heading"><i class="fas fa-exclamation-triangle"></i> ERROR!!</h4>
            <div class="p-2">${messageContent}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

    // 將警告框 HTML 插入到指定的容器中（這裡使用 id 來找到對應的容器）
    const container = document.getElementById(id);

    if(EmptyEnable == 1 ){
        // 清空目标元素的内容
        container.innerHTML = "";
    }

    if (container) {
        container.insertAdjacentHTML('beforeend', alertHTML);
    } else {
        console.error(`Container with id "${id}" not found.`);
    }

}

// 顯示 Success 訊息框
// @param {number} id - 元件 id 
// @param {number} msg - 要顯示的訊息內容
// @param {number} EmptyEnable - 顯示前是否清除先前訊息 1:清除 0:不清除
function showSuccessModal(id, msg, EmptyEnable) {
    // 將訊息轉換成適合在 HTML 中顯示的格式（替換換行符為 <br>）
    const messageContent = msg.replaceAll('\n', '<br>');

    // 創建警告框的 HTML 內容
    const alertHTML = `
        <div class="col-12 alert alert-success alert-dismissible fade show" role="alert">
            <h4 class="alert-heading"><i class="fas fa-check-circle"></i> Success!!</h4>
            <div class="p-2">${messageContent}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

    // 將警告框 HTML 插入到指定的容器中（這裡使用 id 來找到對應的容器）
    const container = document.getElementById(id);
    
    if(EmptyEnable == 1 ){
        // 清空目标元素的内容
        container.innerHTML = "";
    }

    if (container) {
        
        container.insertAdjacentHTML('beforeend', alertHTML);
    } else {
        console.error(`Container with id "${id}" not found.`);
    }
}

// 顯示 Warning 訊息框
// @param {number} id - 元件 id 
// @param {number} msg - 要顯示的訊息內容
// @param {number} EmptyEnable - 顯示前是否清除先前訊息 1:清除 0:不清除
function showWarningModal(id, msg, EmptyEnable) {
    // 將訊息轉換成適合在 HTML 中顯示的格式（替換換行符為 <br>）
    const messageContent = msg.replaceAll('\n', '<br>');

    // 創建警告框的 HTML 內容
    const alertHTML = `
        <div class="col-12 alert alert-warning alert-dismissible fade show" role="alert">
            <h4 class="alert-heading"><i class="fas fa-exclamation-circle"></i> Warning!!</h4>
            <div class="p-2">${messageContent}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

    // 將警告框 HTML 插入到指定的容器中（這裡使用 id 來找到對應的容器）
    const container = document.getElementById(id);
    
    if(EmptyEnable == 1 ){
        // 清空目标元素的内容
        container.innerHTML = "";
    }

    if (container) {
        container.insertAdjacentHTML('beforeend', alertHTML);
    } else {
        console.error(`Container with id "${id}" not found.`);
    }
}

// 顯示 Info 訊息框
// @param {number} id - 元件 id 
// @param {number} msg - 要顯示的訊息內容
// @param {number} EmptyEnable - 顯示前是否清除先前訊息 1:清除 0:不清除
function showInfoModal(id, msg, EmptyEnable) {
    // 將訊息轉換成適合在 HTML 中顯示的格式（替換換行符為 <br>）
    const messageContent = msg.replaceAll('\n', '<br>');

    // 創建警告框的 HTML 內容
    const alertHTML = `
        <div class="col-12 alert alert-info alert-dismissible fade show" role="alert">
            <h4 class="alert-heading"><i class="fas fa-info-circle"></i> Info!!</h4>
            <div class="p-2">${messageContent}</div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;

    // 將警告框 HTML 插入到指定的容器中（這裡使用 id 來找到對應的容器）
    const container = document.getElementById(id);
    
    if(EmptyEnable == 1 ){
        // 清空目标元素的内容
        container.innerHTML = "";
    }

    if (container) {
        container.insertAdjacentHTML('beforeend', alertHTML);
    } else {
        console.error(`Container with id "${id}" not found.`);
    }
}