const title_lunch = ["Nos entrees", "Nos plats", "Nos desserts"];
const title_dinner = ["Nos entrees", "Nos plats", "Nos desserts"];
const title_breakfast = ["Nos boissons", "Nos plats sucres", "Nos plats sales"];

const menu_breakfast = ["Le jus de fruit du jour", "le café tonic", "le thé fruité de la saison", "notre moelleux au chocolat", "la salade de fruit de saison", "la tarte au citron", "notre foie gras végétal", "le déjeuner anglais", "le plateua de charcuterie"];
const menu_lunch = ["la soupe de légume", "la ratatouille du chef", "le sauté de légumes", "le burger du jour", "le tartare de saumon", "le lit de crevettes", "glace au coulis caramel", "le chou à la crème  de Mashle", "L'onctueuse crème brulée"];
const menu_dinner = ["Le potage", "La salade de crudité", "soupe de légumes", "le plat du soir", "le tartare de saumon", "la ribambelle de sushi", "l'ile flottante de Robinson", "le chou à la crème de Mashle", "l'onctueuse crème brulée"];

const image_breakfast = ["src/images/menu/wartermelon-juice.jpg", "src/images/menu/fruit-salade.jpg", "src/images/menu/lemon pie.jpg", "src/images/menu/ham.jpg"];
const image_lunch = ["src/images/menu/sauté légume.jpg", "src/images/menu/potage.jpg", "src/images/menu/shrimps.jpg", "src/images/menu/ice-cream.jpg"];
const image_dinner = ["src/images/menu/salade.jpg", "src/images/menu/tartare.jpg", "src/images/menu/sushi.jpg", "src/images/menu/creamy puff.jpg"];


function change_menu(params) {
    let title;
    let menu;
    let image;

    const link_matin = document.getElementById("link-matin");
    const link_midi = document.getElementById("link-midi");
    const link_soir = document.getElementById("link-soir");

    link_matin.className = "uppercase link link-yellow text-3xl";
    link_midi.className = "uppercase link link-yellow text-3xl";
    link_soir.className = "uppercase link link-yellow text-3xl";



    switch (params) {
        case "matin":
            title = title_breakfast;
            menu = menu_breakfast;
            image = image_breakfast;
            link_matin.className += " link-selected";

            break;
        case "midi":
            title = title_lunch;
            menu = menu_lunch;
            image = image_lunch;
            link_midi.className += " link-selected";
            break;
        case "soir":
            title = title_dinner;
            menu = menu_dinner;
            image = image_dinner;
            link_soir.className += " link-selected";
            break;
    }
    let hr

    // Change the title menus
    let title_menu_1 = document.getElementById("title-menu-1");
    title_menu_1.className = "title-menu  transparent";
    document.getElementById("title-menu-2").className = "title-menu transparent";
    document.getElementById("title-menu-3").className = "title-menu transparent";

    document.getElementById("image-menu-1").className = "image-absolute-menu-1 image-carré-menu transparent";
    document.getElementById("image-menu-2").className = "image-absolute-menu-2 image-rond-menu transparent";
    document.getElementById("image-menu-3").className = "image-absolute-menu-3 image-carré-menu transparent";
    document.getElementById("image-menu-4").className = "image-absolute-menu-4 image-rond-menu transparent";

    //change the menu
    document.getElementById("food-menu-1").className = " transparent";
    document.getElementById("food-menu-2").className = " transparent";
    document.getElementById("food-menu-3").className = " transparent";
    document.getElementById("food-menu-4").className = " transparent";
    document.getElementById("food-menu-5").className = " transparent";
    document.getElementById("food-menu-6").className = " transparent";
    document.getElementById("food-menu-7").className = " transparent";
    document.getElementById("food-menu-8").className = " transparent";
    document.getElementById("food-menu-9").className = " transparent";

    hr = document.getElementsByClassName("hr-menu")
    hr[0].className = "hr-menu transparent";
    hr[1].className = "hr-menu transparent";

    title_menu_1.addEventListener("transitionend", () => {

        // Change the title menu
        document.getElementById("title-menu-1").innerHTML = title[0];
        document.getElementById("title-menu-2").innerHTML = title[1];
        document.getElementById("title-menu-3").innerHTML = title[2];

        // Change the image menu
        document.getElementById("image-menu-1").src = image[0];
        document.getElementById("image-menu-2").src = image[1];
        document.getElementById("image-menu-3").src = image[2];
        document.getElementById("image-menu-4").src = image[3];

        //change the menu
        document.getElementById("food-menu-1").innerHTML = menu[0];
        document.getElementById("food-menu-2").innerHTML = menu[1];
        document.getElementById("food-menu-3").innerHTML = menu[2];
        document.getElementById("food-menu-4").innerHTML = menu[3];
        document.getElementById("food-menu-5").innerHTML = menu[4];
        document.getElementById("food-menu-6").innerHTML = menu[5];
        document.getElementById("food-menu-7").innerHTML = menu[6];
        document.getElementById("food-menu-8").innerHTML = menu[7];
        document.getElementById("food-menu-9").innerHTML = menu[8];

        title_menu_1.removeEventListener("transitionend", () => { });

        title_menu_1.className = "title-menu visible";
        document.getElementById("title-menu-2").className = "title-menu visible";
        document.getElementById("title-menu-3").className = "title-menu visible";

        document.getElementById("image-menu-1").className = "image-absolute-menu-1 image-carré-menu visible";
        document.getElementById("image-menu-2").className = "image-absolute-menu-2 image-rond-menu visible";
        document.getElementById("image-menu-3").className = "image-absolute-menu-3 image-carré-menu visible";
        document.getElementById("image-menu-4").className = "image-absolute-menu-4 image-rond-menu visible";


        document.getElementById("food-menu-1").className = "visible";
        document.getElementById("food-menu-2").className = "visible";
        document.getElementById("food-menu-3").className = "visible";
        document.getElementById("food-menu-4").className = "visible";
        document.getElementById("food-menu-5").className = "visible";
        document.getElementById("food-menu-6").className = "visible";
        document.getElementById("food-menu-7").className = "visible";
        document.getElementById("food-menu-8").className = "visible";
        document.getElementById("food-menu-9").className = "visible";
        hr[0].className = "hr-menu visible";
        hr[1].className = "hr-menu visible";


    })

}