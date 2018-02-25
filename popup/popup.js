/*jshint esversion: 6 */

console.log('loaded');

let btnClear = document.getElementById('btnClear');
let btnBack = document.getElementById('btnBack');

function btnClearClick(){
    let params = {
        active: true,
        currentWindow: true
      };

    chrome.tabs.query(params, gotTabs);

    let message = {
        clear: true,
        links: document.getElementById('clearLinks').checked,
        images: document.getElementById('clearContent').checked,
        tables: document.getElementById('deleteEdit').checked,
        navs: document.getElementById('deleteNavs').checked
    };

    function gotTabs(tabs) {
        // send a message to the content script
        chrome.tabs.sendMessage(tabs[0].id, message);
    }

    console.log('button clear clicked');
}

function btnBackClick(){
    let params = {
        active: true,
        currentWindow: true
      };

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        // send a message to the content script
        chrome.tabs.sendMessage(tabs[0].id, 'back');
    }

    console.log('button back clicked');
}

btnClear.addEventListener('click', btnClearClick);
btnBack.addEventListener('click', btnBackClick);