
const baseUrl = "http://127.0.0.1:5000/";
const aleatorio = "charadas";

const pergunta = document.getElementById("charada")
const resposta = document.getElementById("resposta-container")

let charadajson;

async function getCharada() {
    resposta.innerHTML = ''

    try {
        
        const charada = await fetch(baseUrl + aleatorio)
        console.log(charada)
        charadajson = await charada.json();
        console.log(charadajson)
        console.log(charadajson.charada);

        pergunta.innerHTML = `${charadajson.pergunta}`

    }

    catch (error) {
        console.log("Erro ao chamar a API:" + error)
    }
}

function conferir() {
    try {

        const respostaUsuario = document.getElementById('resposta').value;
        const respostaCerta = charadajson.resposta

        if (respostaUsuario.toLowerCase() === respostaCerta.toLowerCase()) {
            resposta.innerHTML = `Parabéns! A reposta era "${respostaUsuario}"`
        }

        else {
            resposta.innerHTML = `Não foi dessa vez. A resposta era "${respostaCerta}"`
        }


    }

    catch (error) {
        console.log("Erro ao chamar a API:" + error)
    }
}

getCharada()
