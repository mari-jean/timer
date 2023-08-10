//declaration des variables globales
let intervalle;
let secondes = 10;

//fonction de decompte
function decompte(){
    secondes --; //decremente la variable secondes
    
    if (secondes !== 0){ 
        // affiche le nombre de secondes restnates dans la page HTML
        let countDownElement = document.getElementById("countDown");        
        countDownElement.textContent = "Temps restant : " + secondes;
    }else{
        stop();// appelle la fonction stop() si secondes vaut 0
    }
}

function start() {
    //initialisation de l intervalle
    intervalle = setInterval(decompte,1000); //appelle  la fonction decompte() toutes les secondes (10s)
    
    console.log("Demarrage du decompte...");
}

function stop(){
    clearInterval(intervalle); //arrete l intervalle
    let countDownElement = document.getElementById("countDown");
    countDownElement.textContent = "Stop !";
    console.log("Decompte termine.");
}
//selectionner l element button par son Id
let btn = document.getElementById("startButton");

//ajouter un ecouteur d evenement 
btn.addEventListener('click', start);
