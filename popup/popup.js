/*jshint esversion: 6 */

let activeTabParams = {
    active: true, 
    currentWindow: true 
};

let btnClear = document.getElementById('btnClear');
let btnBack = document.getElementById('btnBack');

function btnClearClick(){

    let message = {
        clear: true,
        links: document.getElementById('clearLinks').checked,
        images: document.getElementById('clearContent').checked,
        tables: document.getElementById('deleteEdit').checked,
        navs: document.getElementById('deleteNavs').checked
    };

    chrome.tabs.query(activeTabParams, function gotTabs(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}

function btnBackClick(){

    chrome.tabs.query(activeTabParams, function gotTabs(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'back');
    });

}

btnClear.addEventListener('click', btnClearClick);
btnBack.addEventListener('click', btnBackClick);