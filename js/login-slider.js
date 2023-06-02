// Olá
alert("Seja bem-vindo!")

// Definindo cores
const cleanelement1 = document.querySelector("#clean-btn1"); // Botão de Limpar 1

const cleanelement2 = document.querySelector("#clean-btn2"); // Botão de Limpar 2

const bodyelement = document.querySelector("body"); // Body
bodyelement.style.backgroundColor = "#2F4F4F";

const formelement = document.querySelector(".form"); // Caixa do preenchimento do Formulário
formelement.style.backgroundColor = "#FFFFFF";

const loginelement = document.querySelector(".login"); // Caixa do preenchimenot de LogIn
loginelement.style.backgroundColor = "#FFFFFF";

const enterelement = document.querySelector(".enter"); // Botão de Entrar
enterelement.style.backgroundColor = "#2F4F4F";
enterelement.style.color = "#FFFFFF";

const submitelement = document.querySelector(".submit"); // Botão de Enviar
submitelement.style.backgroundColor = "#2F4F4F";
submitelement.style.color = "#FFFFFF";

const titleelement = document.querySelector(".title"); // Título "Parcerias"
titleelement.style.backgroundColor = "#FFFFFF"

const buttondarkmode = document.querySelector(".darkmode"); // Botão de Dark Mode
buttondarkmode.style.backgroundColor = "#000000"
buttondarkmode.style.color = "#FFFFFF"

const buttonlightmode = document.querySelector(".lightmode"); // Botão de Light Mode

const buttonchangepage = document.querySelector(".changepage") // Botão de Mudar de Página


// Validação do LogIn
const inputuser = document.querySelector("input[name='user']");
const inputpassword = document.querySelector("input[name='password']");
const buttonenter = document.querySelector(".enter");

buttonenter.addEventListener("click", ()=>{
if(inputuser.value == "Admin" && inputpassword.value == "123456"){
    alert("Log In autenticado!");
    window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
}
else{
    alert("Log In inválido!");
}
});

// Validação de Formulário
const inputname = document.querySelector("input[name='name']");
const inputemail = document.querySelector("input[name='email']");
const inputnumber = document.querySelector("input[name='number']");
const buttonsubmit = document.querySelector(".submit");

buttonsubmit.addEventListener("click", ()=>{
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
let count = 1;

function nextImagem(){
    count++;
    if(count > 3){
        count = 1;
    }

    document.querySelector("#radio"+count).checked = true;
}

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
}