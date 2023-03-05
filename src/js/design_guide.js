document.onmouseover = function (e) {
    var target = (e.target) ? e.target : e.srcElement;
    if (target.tagName === "DIV" && !target.classList.contains("no-hover") || target.tagName === "P" && !target.classList.contains("no-hover") || target.tagName === "H2" && !target.classList.contains("no-hover")) {
        console.log("Oui");
        var btn = document.createElement("button");
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
            var code_section = document.createElement("div");
            code_section.id = "code_section"
            code_section.style.zIndex=10;
            code_section.style.position = "fixed";
            code_section.style.top = "25%";
            code_section.style.transfrom = "translateX(50%)";
            code_section.style.border="solid 1px black";
            code_section.style.width = "50%";
            code_section.style.left = "50%"; // Ajout de la propriété left
    code_section.style.transform = "translateX(-50%)";
            code_section.style.height = "50%";
            code_section.style.backgroundColor="white";
            document.body.appendChild(code_section);


            var cross_section = document.createElement("span");
            cross_section.innerHTML = "<img src='./src/images/cross_black.svg' onclick='close_section()'>";
            cross_section.style.display = "flex";
            cross_section.style.justifyContent = "flex-end";
            code_section.appendChild(cross_section);
            console.log(code_section);
            // document.body.appendChild(code_section);
        });

        code = document.getElementById("code_section");

        if(target != code) {
            target.style.position = "relative";
            target.appendChild(btn);

        }

        target.addEventListener("mouseout", function(event) {
            var isChild = target.contains(event.relatedTarget);
            if (!isChild) {
              var btn = target.querySelector("button");
              if (btn) {
                target.removeChild(btn);
              }
            }
          });
    }
}


close_section = function() {
    section = document.getElementById("code_section");
    document.body.removeChild(section);
}