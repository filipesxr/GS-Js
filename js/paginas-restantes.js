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