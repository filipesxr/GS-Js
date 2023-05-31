// Olá
alert("Seja bem-vindo!")

// Definindo cores
const bodyelement = document.querySelector("body");
bodyelement.style.backgroundColor = "#2F4F4F";

const formelement = document.querySelector(".form");
formelement.style.backgroundColor = "#FFFFFF";

const loginelement = document.querySelector(".login");
loginelement.style.backgroundColor = "#FFFFFF";

const enterelement = document.querySelector(".enter");
enterelement.style.backgroundColor = "#2F4F4F";
enterelement.style.color = "#FFFFFF";

const submitelement = document.querySelector(".submit");
submitelement.style.backgroundColor = "#2F4F4F";
submitelement.style.color = "#FFFFFF";


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
