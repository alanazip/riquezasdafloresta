// Mensagem de boas-vindas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao Riquezas da Floresta! Aproveite nossas ofertas.");
});

// Selecionando o elemento de produtos e adicionando um evento ao clicar
const produtosSection = document.getElementById("produtos");

produtosSection.addEventListener("click", () => {
    mostrarPromocao();
});
function toggleMenu() {
    const menu = document.querySelector('.nav-menu ul');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}