let Nome;
let Email;
let Senha;
let Telefone;
let CPF;

function Cadastrar(event) {
    event.preventDefault(); // Evita o recarregamento
    let nome = document.getElementById("Nome");
    let email = document.getElementById("Email");
    let senha = document.getElementById("Senha");
    let telefone = document.getElementById("Telefone");
    let cpf = document.getElementById("CPF");
    
    Nome = nome.value;
    Email = email.value;
    Senha = senha.value;
    Telefone = telefone.value;
    CPF = cpf.value;

    let resposta = document.getElementById("resposta");
    resposta.innerHTML = "Conta cadastrada! Nome: " + Nome + "<br> Email:" + Email  + "<br> " + "TEL:" + Telefone;
    console.log("INSERT INTO cadastros (Nome, Email, Senha, Telefone, CPF) values ("+ Nome + "," + Email + "," + Senha +"," +Telefone + "," + CPF + " );");
}


//  NAO VAI SER UTILIZADO!!!
// function Logar() {

//     let email = document.getElementById("Email").value;
//     let senha = document.getElementById("Senha").value;
//     let resposta = document.getElementById("resposta");

//     if (email == Email && senha == Senha) {
//         resposta.innerHTML = "Bem-vindo de volta, " + Nome;
//     } else {
//         resposta.innerHTML = "Credenciais inválidas!";
//     }
// }



