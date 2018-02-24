console.log('hello world!');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
    if(message.clear){
        deleteStaff();

        if(message.links){
            replaceLinks();
        }

        if(message.tables){
            removeContent();
            removeInfoBox();
        }

        if(message.images){
            removeImgs();
        }

        if(message.navs){
            clearAll();
        }
    }
    else
        window.location.reload();
}


function deleteStaff(){
    removeLstn();
    removeNoprint();
    removeRefs();
    removeEdit();
    removeInfoMessages();
    trmoveCatLink();
    removeNavs();
    removeTransc();
}


// delete all element and leave only text
function clearAll(){
    var text = document.querySelectorAll('.mw-parser-output');
    document.body.innerHTML = text[0].innerHTML;
}

function removeNavs(){
    let navs = document.querySelectorAll('.navbox');
    for( n of navs){
        n.parentNode.removeChild(n);
    }
}

// change links to text
function replaceLinks(){
    let bodyContent = document.getElementById('mw-content-text');
    let links = bodyContent.querySelectorAll('a');
    for (l of links) {
        let p = document.createElement('span');
        p.innerText = l.innerText;
        l.parentNode.replaceChild(p, l);
    }
}


// remove content of the page
function removeContent(){
    let toc = document.getElementById('toc');  
    if(toc){
        toc.parentNode.removeChild(toc);    
    }
}


// remove [edit]
function removeEdit(){
    let edit = document.querySelectorAll('.mw-editsection');
    for (e of edit) {
        e.parentNode.removeChild(e);
    }
}


// remove reference [0][1]...
function removeRefs(){
    let ref = document.querySelectorAll('.reference');
    for (r of ref) {
        r.parentNode.removeChild(r);
    }
}


// remove images
function removeImgs(){
    let thumb = document.querySelectorAll('.thumb');
    for (t of thumb) {
        t.parentNode.removeChild(t);
    }
}


// remove infobox
function removeInfoBox(){
    let inf = document.querySelectorAll('.infobox');
    for (i of inf){
        i.parentNode.removeChild(i); 
    } 
}

function trmoveCatLink(){
    let catLinks = document.querySelectorAll('.catlinks');
    for(c of catLinks){
        c.parentNode.removeChild(c);
    }
}


// remove transcription
function removeTransc(){
    let trn = document.getElementsByClassName('IPA');
    if (trn.length > 0){
        trn[0].parentNode.removeChild(trn[0]);    
    }    
}


// remove listen
function removeLstn(){
    let lst = document.querySelector('.nowrap');
    if (lst){
        lst.parentNode.removeChild(lst);    
    }    
}

function removeNoprint(){
    let noprint = bodyContent.querySelectorAll('.noprint');
    for (np of noprint) {
        np.parentNode.removeChild(np);
    }
}

function removeInfoMessages() {
    let infoMessages = bodyContent.querySelectorAll('.plainlinks');
    for (im of infoMessages) {
        im.parentNode.removeChild(im);
    }
}


// // remove notice
// let ntc = document.getElementById('mw-fr-reviewnotice');
// ntc.parentNode.removeChild(ntc);