console.log('hello world!');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);
}


// change links to text
let bodyContent = document.getElementById('mw-content-text');
let links = bodyContent.querySelectorAll('a');
for (l of links) {
    let p = document.createElement('span');
    p.innerText = l.innerText;
    l.parentNode.replaceChild(p, l);
}

// remove content of the page
let toc = document.getElementById('toc');  
if(toc){
    toc.parentNode.removeChild(toc);    
}

// remove [edit]
let edit = document.querySelectorAll('.mw-editsection');
for (e of edit) {
    e.parentNode.removeChild(e);
}

// remove reference [0][1]...
let ref = document.querySelectorAll('.reference');
for (r of ref) {
    r.parentNode.removeChild(r);
}

// remove images
let thumb = document.getElementsByClassName('thumb');
for (t of thumb) {
    t.parentNode.removeChild(t);
}

// remove infobox
let inf = document.getElementsByClassName('infobox');
if (inf.length > 0){
    inf[0].parentNode.removeChild(inf[0]);    
}

// remove transcription
let trn = document.getElementsByClassName('IPA');
if (trn.length > 0){
    trn[0].parentNode.removeChild(trn[0]);    
}

// remove listen
let lst = document.querySelector('.nowrap');
if (lst){
    lst.parentNode.removeChild(lst);    
}

// // remove notice
// let ntc = document.getElementById('mw-fr-reviewnotice');
// ntc.parentNode.removeChild(ntc);

let noprint = bodyContent.getElementsByClassName('noprint');
for (np of noprint) {
    np.parentNode.removeChild(np);
}