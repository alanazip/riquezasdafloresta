// Mensagem de boas-vindas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao Riquezas da Floresta! Aproveite nossas ofertas.");
});

// Função para mostrar um alerta promocional ao clicar em um botão
function mostrarPromocao() {
    alert("Confira nossos produtos exclusivos da Amazônia com 10% de desconto!");
}

// Selecionando o elemento de produtos e adicionando um evento ao clicar
const produtosSection = document.getElementById("produtos");

produtosSection.addEventListener("click", () => {
    mostrarPromocao();
});