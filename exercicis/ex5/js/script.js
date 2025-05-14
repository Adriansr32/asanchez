let forat1 = document.getElementById("0");
let forat2 = document.getElementById("1");
let forat3 = document.getElementById("2");
let forat4 = document.getElementById("3");
let forat5 = document.getElementById("4");
let forat6 = document.getElementById("5");
let forat7 = document.getElementById("6");
let forat8 = document.getElementById("7");
let forat9 = document.getElementById("8");
let inici = 30;
let puntuacio = 0;
let posicioTalp = 0;
let timesTalp = 0;
let joc = document.getElementById("joc"); 
let time = document.getElementById("time");
let timesTalp2 = document.getElementById("talpTimes");
let timeTalp = document.getElementById("talpTimesP");
let soCop = document.getElementById("soCop");

function mostrarTalp() {
    posicioTalp = Math.floor(Math.random() * 9);
    if (posicioTalp === 0) forat1.src = "../img/topoSi.png";
    if (posicioTalp === 1) forat2.src = "../img/topoSi.png";
    if (posicioTalp === 2) forat3.src = "../img/topoSi.png";
    if (posicioTalp === 3) forat4.src = "../img/topoSi.png";
    if (posicioTalp === 4) forat5.src = "../img/topoSi.png";
    if (posicioTalp === 5) forat6.src = "../img/topoSi.png";
    if (posicioTalp === 6) forat7.src = "../img/topoSi.png";
    if (posicioTalp === 7) forat8.src = "../img/topoSi.png";
    if (posicioTalp === 8) forat9.src = "../img/topoSi.png";
}   

function amagarTalp() {
    if(posicioTalp === 0) forat1.src = "../img/topoNo.png";
    if(posicioTalp === 1) forat2.src = "../img/topoNo.png";
    if(posicioTalp === 2) forat3.src = "../img/topoNo.png";
    if(posicioTalp === 3) forat4.src = "../img/topoNo.png";
    if(posicioTalp === 4) forat5.src = "../img/topoNo.png";
    if(posicioTalp === 5) forat6.src = "../img/topoNo.png";
    if(posicioTalp === 6) forat7.src = "../img/topoNo.png";
    if(posicioTalp === 7) forat8.src = "../img/topoNo.png";
    if(posicioTalp === 8) forat9.src = "../img/topoNo.png";
}

const intervalTalp  = setInterval(() => {
    amagarTalp();
    mostrarTalp();
    timesTalp++;
}, 500);

const intervalTimer = setInterval(myTimer, 1000);
 
function myTimer() {
  inici--;
  time.innerHTML = inici;
  if (inici === 0) {
    document.getElementById("timeP").style.display = "none";
    joc.style.display = "none";
    timesTalp2.style.display = "block";
    timeTalp.innerHTML = timesTalp;
    clearInterval(intervalTalp);
    clearInterval(intervalTimer);
  } 

}

function a(element){
    element.src = "../img/topoPam.png";
    setTimeout(() => {
        element.src = "../img/topoNo.png";
    }, 300);
    if(element.id == posicioTalp){
        puntuacio++;
        document.getElementById("puntuacio").innerHTML = puntuacio;
    }
    soCop.play();
}