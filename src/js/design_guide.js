var switchBtn = false;
document.onmouseover = function (e) {
    var target = (e.target) ? e.target : e.srcElement;
    if (target.tagName === "DIV" && !target.classList.contains("no-hover") || target.tagName === "P" && !target.classList.contains("no-hover") || target.tagName === "H2" && !target.classList.contains("no-hover")) {
        // console.log("Oui");
        var btn = document.createElement("button");
        btn.id = "button_code";
        btn.innerHTML = "Open Code";
        btn.style.backgroundColor = "#FFD700";
        btn.style.position = "absolute";
        btn.style.right = "0";
        btn.style.border = "none";
        btn.style.padding = "0.3rem";
        btn.style.transition = "0.3s";

        btn.addEventListener("mouseover", function () {
            btn.style.backgroundColor = "rgba(255,215,0,0.5)";
        });

        btn.addEventListener("click", function () {
            // console.log(target.outerHTML);

            //SECTION Où SERA PLACÉ LE CODE
            var code_section = document.createElement("div");
            code_section.id = "code_section";
            code_section.style.cssText = "z-index:10; position: fixed; top: 15%; right: 15%; border: solid 1px black; width:75%; height:75%; background-color:white; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: auto";
            document.body.appendChild(code_section);


            //CROIX POUR FERMER LE CODE SOURCE
            var cross_section = document.createElement("span");
            cross_section.innerHTML = "<img src='./src/images/cross_black.svg' onclick='close_section()'>";
            cross_section.style.display = "flex";
            cross_section.style.justifyContent = "flex-end";
            cross_section.style.cssText = "position: absolute; top: 0; right: 3rem; width: 2rem; height: 2rem; cursor: pointer";
            code_section.appendChild(cross_section);

            // Créer une nouvelle variable pour stocker l'élément de code
            var code = target.cloneNode(true);
            //BOUTON ET STYLE EN TROP, ON RETIRE
            code.removeAttribute("style");
            code.querySelector("button").remove();

            // TITRE DE LA SECTION
            var title_section = document.createElement("h2");
            title_section.style.cssText = "text-align: center; margin: 0; padding: 0";
            title_section.textContent = code.innerHTML;
            code_section.appendChild(title_section);


            //SECTION DE CODE
            var codebg = document.createElement("code");
            codebg.classList.add("no-hover");
            codebg.style.width = "75%";
            codebg.style.height = "min-content";
            codebg.style.display = "flex";
            codebg.style.justifyContent = "center";
            codebg.style.backgroundColor = "#272822";
            codebg.style.padding = "1rem";
            code_section.appendChild(codebg);


            //AJOUTE LE CODE DANS LA SECTION
            var displayCode = document.createElement("p");
            displayCode.style.cssText = "color: white; display: flex; justify-content: center";
            displayCode.className = "no-hover container-75";
            displayCode.textContent = code.outerHTML;
            code.classList.add("no-hover");
            codebg.appendChild(displayCode);
        });

        //AJOUTE LE BOUTON SI ON RENTRE DEDANS
        code = document.getElementById("code_section");
        if (target != code && target != btn) {
            target.style.position = "relative";
            if (switchBtn === false) {
                target.appendChild(btn);
                switchBtn = true;
            }
        }



        //RETIRE LE BOUTON SI ON SORT DE L'ELEMENT
        target.addEventListener("mouseout", function (event) {
            var isChild = target.contains(event.relatedTarget);
            if (!isChild) {
                var btn = target.querySelector("#button_code");
                if (btn) {
                    target.removeChild(btn);
                    switchBtn = false;
                }
            }
        });
    }
}


close_section = function () {
    section = document.getElementById("code_section");
    document.body.removeChild(section);
}