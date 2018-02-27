/*jshint esversion: 6 */

console.log('hello world!');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
    if(message.clear){
        deleteStaff();

        if(message.links)
            replaceLinks();
        
        if(message.tables){
            removeElements('#toc');
            removeElements('.infobox');
        }

        if(message.images)
            removeElements('.thumb');
        
        if(message.navs)
            clearAll();     
    }
    else
        window.location.reload();
}


function deleteStaff(){
    removeElements('.nowrap');
    //removeElements('.noprint');
    removeNoprint();
    removeElements('.reference');
    removeElements('.mw-editsection');
    removeElements('.plainlinks');
    removeElements('.catlinks');
    removeElements('.navbox');
    removeElements('.IPA');
}

function removeElements(name){
    var elements = document.querySelectorAll(name);
    for (let e of elements)
        e.parentNode.removeChild(e);
}

function removeNoprint(){
    let noprint = bodyContent.querySelectorAll('.noprint');
    for (let np of noprint) {
        np.parentNode.removeChild(np);
    }
}

// delete all element and leave only text
function clearAll(){
    var text = document.querySelectorAll('.mw-parser-output');
    document.body.innerHTML = text[0].innerHTML;
}

// change links to text
function replaceLinks(){
    let bodyContent = document.getElementById('mw-content-text');
    let links = bodyContent.querySelectorAll('a');
    for (let l of links) {
        let p = document.createElement('span');
        p.innerText = l.innerText;
        l.parentNode.replaceChild(p, l);
    }
}
