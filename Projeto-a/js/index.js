var nome = "Deise Soares Morais";
var cargo = "CTO-Growdev";

var nomeHtml = document.getElementById("nome-no-html");
var CargonoHtml = document.getElementById("cargo-no-html");
var texto2 = document.getElementById("texto-1");
var texto1 = document.getElementById("texto-2")

function
colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    nomeHtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);
}

function clickNoProjetos() {
    console.log("clicou no botão projetos");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

function clickNoSobre() {
    console.log("clicou no botão sobre");
    texto2.style.display = "block";
    texto1.style.display = "none";
}
colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);