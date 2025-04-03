let Nome;
let Email;
let Senha;

function Cadastrar(event) {
    event.preventDefault(); 

    let nome = document.getElementById("Nome");
    let email = document.getElementById("Email");
    let senha = document.getElementById("Senha");

    Nome = nome.value;
    Email = email.value;
    Senha = senha.value;

    let resposta = document.getElementById("resposta");
    resposta.innerHTML = "Conta cadastrada! Nome: " + Nome;
}

function Logar() {
    let email = document.getElementById("Email").value;
    let senha = document.getElementById("Senha").value;
    let resposta = document.getElementById("resposta");

    if (email == Email && senha == Senha) {
        resposta.innerHTML = "Bem-vindo de volta, " + Nome;
    } else {
        resposta.innerHTML = "Credenciais inválidas!";
    }
}



