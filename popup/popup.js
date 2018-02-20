console.log('loaded');

let check = document.getElementById('check');

function clicked(){
    let params = {
        active: true,
        currentWindow: true
      };

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        console.log("got tabs");
        console.log(tabs);
        // send a message to the content script

        chrome.tabs.sendMessage(tabs[0].id, 'clickedf');
    }

    console.log('clicked');
}






check.addEventListener('click', clicked);