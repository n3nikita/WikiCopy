/*jshint esversion: 6 */
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if(message.clear){
        deleteStaff();

        if(message.links)
            replaceLinks();
        
        if(message.tables)
            removeElements('#toc', '.infobox');
        

        if(message.images)
            removeElements('.thumb', 'img');
        
        
        if(message.navs)
            clearAll();     
    }
    else
        window.location.reload();
}


function deleteStaff(){
    removeElements('.nowrap', '.reference', '.mw-editsection', 
    '.plainlinks', '.catlinks', '.navbox', '.vertical-navbox', '.IPA');
    removeNoprint();
    changeHStyle();
}

function changeHStyle(){
    document.getElementsByTagName('h1')[0].style["border-bottom"] = "0px";

    let elements = document.getElementsByTagName('h2');
    for(let h of elements){
        h.style["border-bottom"] = "0px";
    }
}

function removeElements(...names){
    for(let name of names){
        let elements = document.querySelectorAll(name);
        for (let e of elements)
            e.parentNode.removeChild(e);
    }
}

function removeNoprint(){
    let noprint = bodyContent.querySelectorAll('.noprint');
    for (let np of noprint) {
        np.parentNode.removeChild(np);
    }
}

// delete all element and leave only text
function clearAll(){
    let text = document.querySelectorAll('.mw-parser-output');
    document.body.innerHTML = text[0].innerHTML;
    let styles = {
        background: "white",
        padding: "20px 50px"
    };
    Object.assign(document.body.style, styles);
}

// change links to text
function replaceLinks(){
    let bodyContent = document.getElementById('mw-content-text');
    let links = bodyContent.querySelectorAll('a:not(.image)');
    for (let l of links) {
        let p = document.createElement('span');
        p.innerText = l.innerText;
        l.parentNode.replaceChild(p, l);
    }
}
