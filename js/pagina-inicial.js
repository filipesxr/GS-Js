// Olá
alert("Seja bem-vindo!")

// Resgatando os elementos e definindo cores
const bodyelement = document.querySelector("body"); // Body
bodyelement.style.backgroundColor = "#2F4F4F";

const formelement = document.querySelector(".form"); // Caixa do preenchimento do Formulário
formelement.style.backgroundColor = "#FFFFFF";

const loginelement = document.querySelector(".login"); // Caixa do preenchimento do LogIn
loginelement.style.backgroundColor = "#FFFFFF";

const titleelement = document.querySelector(".title"); // Título "Parcerias"
titleelement.style.backgroundColor = "#FFFFFF"

const enterelement = document.querySelector(".enter"); // Botão de Entrar
enterelement.style.backgroundColor = "#2F4F4F";
enterelement.style.color = "#FFFFFF";

const cleanelement1 = document.querySelector("#clean-btn1"); // Botão de Limpar 1

const submitelement = document.querySelector(".submit"); // Botão de Enviar
submitelement.style.backgroundColor = "#2F4F4F";
submitelement.style.color = "#FFFFFF";

const cleanelement2 = document.querySelector("#clean-btn2"); // Botão de Limpar 2

const buttondarkmode = document.querySelector(".darkmode"); // Botão de Dark Mode
buttondarkmode.style.backgroundColor = "#000000"
buttondarkmode.style.color = "#FFFFFF"

const buttonlightmode = document.querySelector(".lightmode"); // Botão de Light Mode

const buttonchangepage = document.querySelector(".changepage") // Botão de Mudar de Página

// Validação do LogIn - Resgatando elementos da validação de LogIn
const inputuser = document.querySelector("input[name='user']"); // Input do Usuário
const inputpassword = document.querySelector("input[name='password']"); // Input da Senha

// Adicionando um Evento ao botão de Entrar
enterelement.addEventListener("click", ()=>{
if(inputuser.value == "Admin" && inputpassword.value == "123456"){
    alert("Log In autenticado!");
    window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
}
else{
    alert("Log In inválido!");
}
});

// Validação de Formulário - Resgatando elementos do formulário
const inputname = document.querySelector("input[name='name']"); // Input do Nome
const inputemail = document.querySelector("input[name='email']"); // Input do Email
const inputnumber = document.querySelector("input[name='number']"); // Input do Número

// Adicionando um Evendo ao botão de Enviar
submitelement.addEventListener("click", ()=>{
    if(inputname.value.length == 0 || inputemail.value.length == 0 || inputnumber.value.length == 0){
        alert("Preencha todos os campos!");
    }
    if(inputname.value.length < 4){
        alert("O nome deve ter pelo menos 4 carácteres!");
    }
    if(inputemail.value.length < 4){
        alert("O email deve ter pelo menos 4 carácteres!");
    }
    if(inputnumber.value.length < 11){
        alert("O número de telefone deve ter pelo menos 11 carácteres!");
    }
    else{
        alert("Obrigado!");
    }
})

// Imagens e Carrossel
let count = 1; // Variável let para a função contadora

// Função contadora
function nextImagem(){
    count++;
    if(count > 3){
        count = 1;
    }

    document.querySelector("#radio"+count).checked = true;
}

// Set Interval para executar a função contadora a cada 2s
setInterval( function(){
    nextImagem();
},2000)

// Função Dark Mode e Light Mode
function darkMode(){
    formelement.style.backgroundColor = "#4F4F4F";
    formelement.style.color = "#FFFFFF";
    loginelement.style.backgroundColor = "#4F4F4F";
    loginelement.style.color = "#FFFFFF";
    inputname.style.backgroundColor = "#4F4F4F";
    inputname.style.color = "#FFFFFF";
    inputemail.style.backgroundColor = "#4F4F4F";
    inputemail.style.color = "#FFFFFF";
    inputnumber.style.backgroundColor = "#4F4F4F";
    inputnumber.style.color = "#FFFFFF";
    inputuser.style.backgroundColor = "#4F4F4F";
    inputuser.style.color = "#FFFFFF";
    inputpassword.style.backgroundColor = "#4F4F4F";
    inputpassword.style.color = "#FFFFFF";
    titleelement.style.backgroundColor = "#4F4F4F";
    titleelement.style.color = "#FFFFFF";
    cleanelement1.style.backgroundColor = "#000000";
    cleanelement1.style.color = "#FFFFFF";
    cleanelement2.style.backgroundColor = "#000000";
    cleanelement2.style.color = "#FFFFFF";
    buttonchangepage.style.color = "#FFFFFF";
    buttonchangepage.style.backgroundColor = "#4F4F4F";
    relogioelement.style.color = "#FFFFFF";
    relogioelement.style.backgroundColor = "#4F4F4F";
    boxdia.style.color = "#FFFFFF";
    boxdia.style.backgroundColor = "#4F4F4F";
    boxmes.style.color = "#FFFFFF";
    boxmes.style.backgroundColor = "#4F4F4F";
    boxano.style.color = "#FFFFFF";
    boxano.style.backgroundColor = "#4F4F4F";
    boxhora.style.color = "#FFFFFF";
    boxhora.style.backgroundColor = "#4F4F4F";
    boxminuto.style.color = "#FFFFFF";
    boxminuto.style.backgroundColor = "#4F4F4F";
    boxsegundo.style.color = "#FFFFFF";
    boxsegundo.style.backgroundColor = "#4F4F4F";
}

function lightMode(){
    formelement.style.backgroundColor = "#FFFFFF"
    formelement.style.color = "#000000";
    loginelement.style.backgroundColor = "#FFFFFF";
    loginelement.style.color = "#000000";
    inputname.style.backgroundColor = "#FFFFFF";
    inputname.style.color = "#000000";
    inputemail.style.backgroundColor = "#FFFFFF";
    inputemail.style.color = "#000000";
    inputnumber.style.backgroundColor = "#FFFFFF";
    inputnumber.style.color = "#000000";
    inputuser.style.backgroundColor = "#FFFFFF";
    inputuser.style.color = "#000000";
    inputpassword.style.backgroundColor = "#FFFFFF";
    inputpassword.style.color = "#000000";
    titleelement.style.backgroundColor = "#FFFFFF";
    titleelement.style.color = "#000000";
    cleanelement1.style.backgroundColor = "#FFFFFF";
    cleanelement1.style.color = "#000000";
    cleanelement2.style.backgroundColor = "#FFFFFF";
    cleanelement2.style.color = "#000000";
    buttonchangepage.style.color = "#000000";
    buttonchangepage.style.backgroundColor = "#FFFFFF";
    relogioelement.style.color = "#000000";
    relogioelement.style.backgroundColor = "#FFFFFF";
    boxdia.style.color = "#000000";
    boxdia.style.backgroundColor = "#FFFFFF";
    boxmes.style.color = "#000000";
    boxmes.style.backgroundColor = "#FFFFFF";
    boxano.style.color = "#000000";
    boxano.style.backgroundColor = "#FFFFFF";
    boxhora.style.color = "#000000";
    boxhora.style.backgroundColor = "#FFFFFF";
    boxminuto.style.color = "#000000";
    boxminuto.style.backgroundColor = "#FFFFFF";
    boxsegundo.style.color = "#000000";
    boxsegundo.style.backgroundColor = "#FFFFFF";
}

// Data e hora na página inicial - Resgatando elementos do relógio
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