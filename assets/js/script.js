/* Caroussel Phase 1 - Florian */

let img_list;
img_list = document.getElementsByClassName("img-avatar");
document.getElementsByClassName("img-avatar")[0].classList.add("show") ;
console.log(document.getElementsByClassName("img-avatar")[0]);
for (i = 0; i<(img_list.length);i += 1){
    if (i != 0){
        document.getElementsByClassName("img-avatar")[i].classList.add("hidden");
    }
}


let compteur = 0;
let imgAfter = function(){
    if (compteur == ((img_list.length)-1)){
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("show");
        setTimeout(document.getElementsByClassName("img-avatar")[compteur].classList.add("hidden"), 300);
        compteur = 0;
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("hidden");
        document.getElementsByClassName("img-avatar")[compteur].classList.add("show");
    }
    else{
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("show");
        setTimeout(document.getElementsByClassName("img-avatar")[compteur].classList.add("hidden"), 300);
        compteur += 1;
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("hidden");
        document.getElementsByClassName("img-avatar")[compteur].classList.add("show");
    }

    /* Selection Avatar Joeur Phase 1 (flèche de droite) - Florian */
    let user_avatar = document.querySelector("#player");
    user_avatar.src = `assets/img/avatar${compteur+1}.jpg`;
    
}
let imgBefore = function(){
    if (compteur == 0){
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("show");
        setTimeout(document.getElementsByClassName("img-avatar")[compteur].classList.add("hidden"), 300);
        compteur = ((img_list.length)-1);
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("hidden");
        document.getElementsByClassName("img-avatar")[compteur].classList.add("show");
    }
    else{
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("show");
        setTimeout(document.getElementsByClassName("img-avatar")[compteur].classList.add("hidden"), 300);
        compteur -= 1;
        document.getElementsByClassName("img-avatar")[compteur].classList.remove("hidden");
        document.getElementsByClassName("img-avatar")[compteur].classList.add("add");
    }

    /* Selection Avatar Joeur Phase 1 (flèche de gauche) - Florian */
    let user_avatar = document.querySelector("#player");
    user_avatar.src = `assets/img/avatar${compteur+1}.jpg`;
}

/* Flèches Caroussel Phase - Florian */

let next;
next = document.querySelector("#next");
next.addEventListener("click",imgAfter);
let before;
before = document.querySelector("#prev");
before.addEventListener("click",imgBefore);

/* Fin Flèches Caroussel Phase - Florian */

/* Fin Caroussel Phase 1 - Florian */



/* Récupération Avatar + Pseudo Phase + Changement de Phase - Florian */

let pseudo;
let finalPlayer = document.querySelector("#finalPlayer");
let user_pseudo = document.getElementById("nickname");
let finalNickname = document.getElementById("finalNickname");
let ordi;
let ordi_pseudo = document.getElementById("ordiName");
let finalOrdiName = document.getElementById("finalOrdiName");
let btn_play = document.getElementById("play");

btn_play.addEventListener("click" , () => {
    finalPlayer.src = `assets/img/avatar${compteur+1}.jpg`;
    pseudo = document.getElementById("pseudo").value;
    user_pseudo.innerHTML = pseudo;
    finalNickname.innerHTML = pseudo;
    document.querySelector("#phase1").style.display = "none";
    document.querySelector("#phase2").style.display = "block";
    document.querySelector("#phase3").style.display = "none";
})

/* Fin Récupération Avatar + Pseudo + Changement de Phase Phase - Florian */

/* Règles - Nicolas */ 

let bouton = document.querySelector("#regleButton");
bouton.addEventListener("click", function(){
    document.getElementById("modal").style.display = "block";
    document.getElementById("phases").style.display = "none";
});
document.getElementById('modal-close').addEventListener('click', function() {
    document.querySelector("#modal").style.display = "none";
    document.getElementById("phases").style.display = "block";
  })

/* Fin Règles - Nicolas */ 

/* Jeu - Nicolas */
let manche = 1;
let choicePc;
let userVictory = 0;
let pcVictory = 0;
let pierre;
let ciseaux;
let papier;
let userChoice;
let choices;
let round;
let retryButton;
let score;
let ordiName = [
    "Jade",
    "Louise",
    "Ambre",
    "Alba",
    "Emma",
    "Rose",
    "Alice",
    "Romy",
    "Anna",
    "Lina",
    "Gabriel",
    "Léo",
    "Raphaël",
    "Maël",
    "Louis",
    "Noah",
    "Jules",
    "Arthur",
    "Adam",
    "Lucas",
    "Victor",
    "Victoria",
    "Zoé",
    "Élizabeth",
    "Sofia",
    "Émile",
    "Simone",
    "Livia",
    "Alexis",
    "Flavie",
    "Olivier",
    "Mila",
    "Romy",
    "Camila",
    "Lillian",
    "Jeanne",
    "Milan",
    "Zack",
    "Laurence",
    "Maéva",
    "Aubrey",
    "Lily",
    "Jade",
    "Nicolas",
    "Hannah",
    "Raphaelle",
    "Théo",
    "Loic",
    "Éléonore",
    "David",
    "Julia",
    "Ryan",
    "Arnaud",
    "Jaxon",
];

let finalSentence;
finalSentence = document.getElementById("finalSentence");
let aléa = Math.floor(Math.random() * ordiName.length);//Nom aléatoire pour l'ordi
ordi = document.getElementById("ordiName").textContent = ordiName[aléa];//Nom aléatoire pour l'ordi;
ordi_pseudo.innerHTML = ordi;
finalOrdiName.innerHTML = ordi;
document.getElementById("computerRock").style.display = "none";//On cache les cartes de l'ordi
document.getElementById("computerPaper").style.display = "none";//On cache les cartes de l'ordi
document.getElementById("computerScissors").style.display = "none";//On cache les cartes de l'ordi
score = document.querySelector("#score");// On relie au score afficher
retryButton = document.querySelector("#retry"); // On relie au bouton pour rejouer
pierre = document.querySelector("#rock"); // On relie à l'image pierre
ciseaux = document.getElementById("scissors"); // On relie à l'image ciseaux
papier = document.querySelector("#paper"); // On relie à l'image papier
round = document.querySelector("#round"); // On relie au score afficher
choices = document.getElementsByClassName("choices"); // On récupères toutes les images
round.textContent = `Manche ${manche}`; // On affiche le numéro de la manche
let choice = function(){
    endGame();
    if (this == pierre){
        choicePc = Math.floor(Math.random() * 3);
        document.getElementById("divScissors").style.display = "none"; // On cache les ciseaux
        document.getElementById("divPaper").style.display = "none"; // On cache le papier
        stoneChoice();
        setTimeout(choiceOrdi,1500);
        score.textContent = `${userVictory} - ${pcVictory}`;
        setTimeout(view, 3000);//On affiche toute les cartes
    }
    if (this == ciseaux){
        choicePc = Math.floor(Math.random() * 3);
        document.getElementById("divPaper").style.display = "none"; // On cache le papier
        document.getElementById("divRock").style.display = "none"; // On cache la pierre
        cisorsChoice();
        setTimeout(choiceOrdi2,1500);
        score.textContent = `${userVictory} - ${pcVictory}`;
        setTimeout(view, 3000);//On affiche toute les cartes
    }
    if (this == papier){
        choicePc = Math.floor(Math.random() * 3);
        document.getElementById("divScissors").style.display = "none"; // On cache les ciseaux
        document.getElementById("divRock").style.display = "none"; // On cache la pierre
        paperChoice();
        setTimeout(choiceOrdi3,1500);
        //score.textContent = `${userVictory} - ${pcVictory}`;
        setTimeout(view, 3000);//On affiche toute les cartes
    }
}
let stoneChoice = function(){
    userChoice = 0;
}
let paperChoice = function(){
    userChoice = 1;
}
let cisorsChoice = function(){
    userChoice = 2;
}
document.querySelectorAll(".choices").forEach(element => element.addEventListener("click", choice));
let view = function(){
    document.getElementById("divScissors").style.display = "block";
    document.getElementById("divPaper").style.display = "block"; 
    document.getElementById("divRock").style.display = "block";
    manche += 1;
    round.textContent = `Manche ${manche}`; // On affiche le numéro de la manche
}
let hidden = function(){
    document.getElementById("computerRock").style.display = "none";
    document.getElementById("computerPaper").style.display = "none";
    document.getElementById("computerScissors").style.display = "none";
}
let choiceOrdi = function(){
    if (choicePc == 0){ // Le pc choisis la pierre
        document.getElementById("computerRock").style.display = "block";
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
    else if (choicePc == 1){ // Le pc choisis le ciseaux
        document.getElementById("computerScissors").style.display = "block";
        userVictory += 1;
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
    else if (choicePc == 2){ // Le pc choisis le papier
        document.getElementById("computerPaper").style.display = "block";
        pcVictory += 1;
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
}
let choiceOrdi2 = function(){
    if (choicePc == 0){ // Le pc choisis la pierre
        document.getElementById("computerRock").style.display = "block";
        pcVictory += 1;
        setTimeout(hidden, 1500);
        //manche += 1;
    }
    else if (choicePc == 1){ // Le pc choisis le ciseaux
        document.getElementById("computerScissors").style.display = "block";
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
    else if (choicePc == 2){ // Le pc choisis le papier
        document.getElementById("computerPaper").style.display = "block";
        userVictory += 1;
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
}
let choiceOrdi3 = function(){
    if (choicePc == 0){ // Le pc choisis la pierre
        document.getElementById("computerRock").style.display = "block";
        userVictory += 1;
        score.textContent = `${userVictory} - ${pcVictory}`;
        setTimeout(hidden, 1500);
        //manche += 1;
    }
    else if (choicePc == 1){ // Le pc choisis le ciseaux
        document.getElementById("computerScissors").style.display = "block";
        pcVictory += 1;
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
    else if (choicePc == 2){ // Le pc choisis le papier
        document.getElementById("computerPaper").style.display = "block";
        score.textContent = `${userVictory} - ${pcVictory}`;
        //manche += 1;
        setTimeout(hidden, 1500);
    }
}
let endGame = function(){
    if (manche==11){
        document.getElementById("finalScore").innerHTML = score.textContent;
        document.getElementById("phase2").style.display = "none";
        document.getElementById("phase3").style.display = "block";
        if (userVictory>pcVictory) {
            finalSentence.innerHTML = "Félicitation ! <br> Vous avez gagné !"
        }
        else if (userVictory==pcVictory) {
            finalSentence.innerHTML = "Egalité ! <br> Vous avez fait match nul !"
        }
        else if (userVictory<pcVictory) {
            finalSentence.innerHTML = "Dommage ! <br> Vous avez perdu !"
        }
    }
}
/* Fin Jeu - Nicolas */

/* Phase 3 - Tiago */
let btn_retry = document.getElementById("retry");

btn_retry.addEventListener("click" , () => {
    document.querySelector("#phase1").style.display = "none";
    document.querySelector("#phase2").style.display = "block";
    document.querySelector("#phase3").style.display = "none";
    manche = 1;
    round.textContent = `Manche ${manche}`;
    userVictory = 0;
    pcVictory = 0;
    score.textContent = `${userVictory} - ${pcVictory}`;
})

/* Fin Phase 3 - Tiago */
