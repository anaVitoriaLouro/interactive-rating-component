const botao_submit = document.querySelector(".botao-submit");
const cartao_avaliacao = document.querySelector(".cartao-avaliacao");
const cartao_agradecimento = document.querySelector(".cartao-agradecimento");
const botao_nota = document.querySelectorAll(".botao-nota");
const resultado_escolhido = document.querySelector(".resultado-escolhido");
let resultado_final = 4; //valor inicial

botao_submit.addEventListener('click', onSubmit);
botao_nota.forEach(botao => {
    botao.addEventListener('click', cliqueBotaoDaNota);
});

function onSubmit() {
    cartao_avaliacao.classList.add("hide");
    resultado_escolhido.textContent = resultado_final;
    cartao_agradecimento.classList.remove("hide");
};

function cliqueBotaodaNota(event) {
    botao_nota.forEach(botao => {
        botao.classList.remove("ativo");
    })


if (event.target.classList.contains("botao-nota")) {
    event.target.classList.add("ativo");
} else {
    event.target.parentElement.classList.add("ativo");
}

resultado_final = event.target.textContent;

}