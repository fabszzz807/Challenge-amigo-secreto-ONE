//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;

    if (nome == ""){
        alert("Por favor, insira um nome válido.");
        nome = '';
    }   
    else{
        amigos.push(nome);
    }
    limparCampo();
    atualizaLista();
}

function limparCampo(){
    campo = document.querySelector('input');
    campo.value = '';
}

function atualizaLista(){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i in amigos){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length > 0){
        numeroAleatorio = Math.floor(Math.random() * amigos.length);

        sortear = document.getElementById('resultado');
        sortear.innerHTML = `<li>${amigos[numeroAleatorio]}</li?`;

    }
    else{
        alert("Lista de amigos vazia.");
    }
}