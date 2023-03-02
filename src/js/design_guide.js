var test = document.onmouseover = function (e) {
    var target = (e.target) ? e.target: e.srcElement;
    console.log(target.outerHTML);// get element that is being hovered over right now
    if (target.tagName === "DIV" && !target.classList.contains("no-hover") || target.tagName === "P"  && !target.classList.contains("no-hover") || target.tagName === "H2"  && !target.classList.contains("no-hover")) {

        // Sauvegarde le contenu original de l'élément
        target.originalTextContent = target.textContent;

        // Remplace le contenu de l'élément par son HTML
        target.textContent = target.outerHTML;

    }
}

document.onmouseout = function(e) {
    var target = (e.target) ? e.target: e.srcElement;

    // Vérifie si l'élément a un contenu original sauvegardé
    if (target.originalTextContent) {
        // target.originalTextContent.remove("no-hover");

        // Rétablit le contenu original de l'élément
        target.textContent = target.originalTextContent;

        // Supprime la propriété originalTextContent de l'élément
        delete target.originalTextContent;
    }
}


var hr1 = document.getElementById("hr-menu-1");
var hrtext1 = document.getElementById("hr-text-1");
var hr2 = document.getElementById("hr-white");
var hrtext2 = document.getElementById("hr-text-2");
var hr3 = document.getElementById("hr-black");
var hrtext3 = document.getElementById("hr-text-3");
var hr4 = document.getElementById("hr-menu-2");
var hrtext4 = document.getElementById("hr-text-4");

hrtext1.textContent = hr1.outerHTML.replace("id=\"","").replace(hr1.id,"").replace("\"","");
hrtext2.textContent = hr2.outerHTML.replace("id=\"","").replace(hr2.id,"").replace("\"","");
hrtext3.textContent = hr3.outerHTML.replace("id=\"","").replace(hr3.id,"").replace("\"","");
hrtext4.textContent = hr4.outerHTML.replace("id=\"","").replace(hr4.id,"").replace("\"","");


var pos1 = document.getElementById("pos-1");
var postext1 = document.getElementById("position-text-1");
var pos2 = document.getElementById("pos-2");
var postext2 = document.getElementById("position-text-2");
var pos3 = document.getElementById("pos-3");
var postext3 = document.getElementById("position-text-3");
var pos4 = document.getElementById("pos-4");
var postext4 = document.getElementById("position-text-4");
var pos5 = document.getElementById("pos-5");
var postext5 = document.getElementById("position-text-5");
var pos6 = document.getElementById("pos-6");
var postext6 = document.getElementById("position-text-6");
var pos7 = document.getElementById("pos-7");
var postext7 = document.getElementById("position-text-7");
var pos8 = document.getElementById("pos-8");
var postext8 = document.getElementById("position-text-8");
var pos9 = document.getElementById("pos-9");
var postext9 = document.getElementById("position-text-9");
var pos10 = document.getElementById("pos-10");
var postext10 = document.getElementById("position-text-10");

postext1.textContent = pos1.outerHTML.replace("id=\"","").replace(pos1.id,"").replace("\"","");
postext2.textContent = pos2.outerHTML.replace("id=\"","").replace(pos2.id,"").replace("\"","");
postext3.textContent = pos3.outerHTML.replace("id=\"","").replace(pos3.id,"").replace("\"","");
postext4.textContent = pos4.outerHTML.replace("id=\"","").replace(pos4.id,"").replace("\"","");
postext5.textContent = pos5.outerHTML.replace("id=\"","").replace(pos5.id,"").replace("\"","");
postext6.textContent = pos6.outerHTML.replace("id=\"","").replace(pos6.id,"").replace("\"","");
postext7.textContent = pos7.outerHTML.replace("id=\"","").replace(pos7.id,"").replace("\"","");
postext8.textContent = pos8.outerHTML.replace("id=\"","").replace(pos8.id,"").replace("\"","");
postext9.textContent = pos9.outerHTML.replace("id=\"","").replace(pos9.id,"").replace("\"","");
postext10.textContent = pos10.outerHTML.replace("id=\"","").replace(pos10.id,"").replace("\"","");
