// Data e hora nas páginas restantes - Resgatando elementos do relógio
const relogioelement = document.querySelector(".relogio"); // Box do relógio completo
relogioelement.style.backgroundColor = "#FFFFFF";

const boxdia = document.querySelector("#box-dia"); // Box do dia
boxdia.style.color = "#000000";

const boxmes = document.querySelector("#box-mes"); // Box do mês
boxmes.style.color = "#000000";

const boxano = document.querySelector("#box-ano"); // Box do ano
boxano.style.color = "#000000";

const boxhora = document.querySelector("#box-hora"); // Box da hora
boxhora.style.color = "#000000";

const boxminuto = document.querySelector("#box-minuto"); // Box dos minutos
boxminuto.style.color = "#000000";

const boxsegundo = document.querySelector("#box-segundo"); // Box dos segundos
boxsegundo.style.color = "#000000";

// Função para resgatar a data, hora, substituir o texto e deixar mais agradável ao olhar
const relogio = setInterval(function time(){
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let s = data.getSeconds();
    let d = data.getDate();
    let m = data.getMonth() + 1; // Janeiro conta como 0, assim podemos deixar o mês da forma correta
    let a = data.getFullYear();

    if(hr < 10){
        hr = '0' + hr;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(s < 10){
        s = '0' + s;
    }

    if(d < 10){
        d = '0' + d;
    }

    if(m < 10){
        m = '0' + m;
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
});

// Resgatando os botões, o body, o título e definindo suas cores
const bodyelement = document.querySelector("body");

const titleelement = document.querySelector("h1");

const buttondarkMode = document.querySelector("#darkMode"); // Botão de Dark Mode
buttondarkMode.style.backgroundColor = "#000000";
buttondarkMode.style.color = "#FFFFFF";

const buttonlightMode = document.querySelector("#lightMode"); // Botão de Light Mode
buttonlightMode.style.backgroundColor = "#FFFFFF";

// Função Dark Mode e Light Mode
function darkMode(){
    bodyelement.style.backgroundColor = "#4F4F4F";
    titleelement.style.color = "#FFFFFF";
    relogioelement.style.backgroundColor = "#4F4F4F";
    relogioelement.style.color = "#FFFFFF";
    boxdia.style.backgroundColor = "#4F4F4F";
    boxdia.style.color = "#FFFFFF";
    boxmes.style.backgroundColor = "#4F4F4F";
    boxmes.style.color = "#FFFFFF";
    boxano.style.backgroundColor = "#4F4F4F";
    boxano.style.color = "#FFFFFF";
    boxhora.style.backgroundColor = "#4F4F4F";
    boxhora.style.color = "#FFFFFF";
    boxminuto.style.backgroundColor = "#4F4F4F";
    boxminuto.style.color = "#FFFFFF";
    boxsegundo.style.backgroundColor = "#4F4F4F";
    boxsegundo.style.color = "#FFFFFF";
}

function lightMode(){
    bodyelement.style.backgroundColor = "#FFFFFF";
    titleelement.style.color = "#000000";
    relogioelement.style.backgroundColor = "#FFFFFF";
    relogioelement.style.color = "#000000";
    boxdia.style.backgroundColor = "#FFFFFF";
    boxdia.style.color = "#000000";
    boxmes.style.backgroundColor = "#FFFFFF";
    boxmes.style.color = "#000000";
    boxano.style.backgroundColor = "#FFFFFF";
    boxano.style.color = "#000000";
    boxhora.style.backgroundColor = "#FFFFFF";
    boxhora.style.color = "#000000";
    boxminuto.style.backgroundColor = "#FFFFFF";
    boxminuto.style.color = "#000000";
    boxsegundo.style.backgroundColor = "#FFFFFF";
    boxsegundo.style.color = "#000000";
}