var nome = "Deise Soares";
var cargo = "estudante"

var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html")
var texto2 = document.getElementById("texto-2")

function colocarNomeNohtml(nome) {
    nomehtml.innerHTML = nome;
}

function colocarcargonohtml() {
    nomehtml.innerHTML = cargo;
}

function logarNome() {
    console.log(nome);

}

function clocknoprojeto() {
    console.log("clicou no botão projetos");

}
colocarNomeNohtml(nome);
colocarcargonohtml(cargo);