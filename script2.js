// Configuração inicial e constantes globais
const ENDPOINT_CHARADAS = 'http://127.0.0.1:5000/charadas'
const ENDPOINT_LISTA_TODAS = 'http://127.0.0.1:5000/charadas/lista'

// Ligando com os elementos HTML

// Ligando os formulários
let formularioCriacao = document.getElementById("create-form");
let inputPerguntaCriacao = document.getElementById("create-name");
let inputRespostaCriacao = document.getElementById("create-description");

// Formulário de edição
let formularioAtualizacao = document.getElementById("update-form");
let inputAtualizacaoId = document.getElementById("update-id");
let inputPerguntaAtualizacao = document.getElementById("update-name");
let inputrespostaAtualizacao = document.getElementById("update-description");

// Lista (elementos divs) onde as charadas serão exibidas
let listaCharadasElemento = document.getElementById("item-list");


// Funções para interagir com a API

// READ (listar as charadas no elemento lista)
async function buscarListarCharadas() {
    console.log("buscando charadas na API...");
    listaCharadasElemento.innnerHTML = '<p>Carregando charadas...</p>';

    try {
        const respostaHttp = await fetch(ENDPOINT_LISTA_TODAS);

        if (!respostaHttp) {
            throw new Error(`Erro na API: ${respostaHttp.statusText}`)
        };
        const charadas = await respostaHttp.json();

        console.log(`Charadas recebidas: ${charadas}`)

    }
    catch (error) {
        console.log(`Falha ap buscar charada: ${error}`)
        listaCharadasElemento.innerHTML = `<p style = "color: red;">Erro ao carregar charadas: ${error.message}</p>`
    }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded',function() {
    console.log("DOM completamente carregado. Iniciando busca de charadas")
    buscarListarCharadas()
})