const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// permet d'obtenir le jour, le mois, l'année et l'heure d'aujourd'hui
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// Je range le nom des mois dans un tableau
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
    "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

const renderCalendar = () => {

    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // permet d'obtenir le dernier jour du mois actuel
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Permet d'obtenir le dernier jour du mois dernier
    let liTag = "";

    for (let i = 1; i <= lastDateofMonth; i++) { // création des li de tous les jours du mois
        // Permet d'ajouter les dates du mois actuel dans les li de mon ul days
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    console.log(lastDateofMonth, lastDateofLastMonth, liTag);

    currentDate.innerText = `${months[currMonth]} ${currYear}`; // permet de passer mon mois et mon année dans l'html 
    daysTag.innerHTML = liTag; //permet de passer mon mois et mon année dans l'html
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        // Permet de changer de mois un par un 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // Si le mois actuel est plus petit que 0 ou plus grand que 11
            // Création d'une nouvelle date avec la nouvelle année et mois et l'a passé comme valeur de date
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // Mise à jour de l'année actuelle avec la nouvelle année
            currMonth = date.getMonth(); // Mise à jour du mois actuel avec le nouveau mois
        } else {
            date = new Date(); // mettre la valeur de la date comme valeur actuel
        }
        renderCalendar(); // Appel à la fonction renderCalendar
    });
});

daysTag.addEventListener("click", (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "LI") {
        let selectedDate = e.target.innerText;
        document.querySelector('#date').innerText = selectedDate;
        console.log("waf");
    }
});