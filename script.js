document.addEventListener("DOMContentLoaded", () => {
    const produtos = [
        {
            nome: "Óleo de Andiroba",
            descricao: "Produto natural da Amazônia, ideal para hidratação.",
            imagem: "https://www.oleoterapiabrasil.com/image/cache/catalog/2023/integrais/andiroba-30ml-oleo-vegetal-oleterapia-brasil-600x600.jpg",
            precoAtual: "R$ 29,99",
            precoAnterior: "R$ 33,99",
            desconto: "-10%",
        },
        {
            nome: "Creme de Cupuaçu",
            descricao: "Hidratante poderoso com essência natural.",
            imagem: "https://www.brasfrut.com.br/upload/creme-de-cupuacu_1723668023_14082024054023.png",
            precoAtual: "R$ 39,90",
            precoAnterior: "R$ 41,99",
            desconto: "-5%",
        },
        {
            nome: "Sabonete de Copaíba",
            descricao: "Produto sustentável, ótimo para cuidados com a pele.",
            imagem: "https://images.tcdn.com.br/img/img_prod/816460/sabonete_de_copaiba_90g_lianda_natural_991_1_057161e4a46fcf6c2b4de4b5b952a23b.png",
            precoAtual: "R$ 14,99",
            precoAnterior: "R$ 17,99",
            desconto: "-15%",
        },
        {
            nome: "Shampoo de Açaí",
            descricao: "Revitaliza o cabelo com nutrientes amazônicos.",
            imagem: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/product/MP247798/95ff8435-e9f8-4bb5-9140-feaf0c07a650-mp247798-shampoo-acai-care-300ml-oriente-life.png",
            precoAtual: "R$ 22,90",
            precoAnterior: "R$ 25,99",
            desconto: "-12%",
        },
        {
            nome: "Creme Hidratante de Castanha",
            descricao: "Hidratação intensa para a pele.",
            imagem: "https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dw4d7e93c9/NATBRA-69824_1.jpg",
            precoAtual: "R$ 39,99",
            precoAnterior: "R$ 45,99",
            desconto: "-13%",
        },
        {
            nome: "Esfoliante de Cupuaçu",
            descricao: "Remove impurezas com suavidade.",
            imagem: "https://idealcosmeticos.com.br/wp-content/uploads/2022/12/Cupuacu_melaleuca.png",
            precoAtual: "R$ 27,90",
            precoAnterior: "R$ 31,99",
            desconto: "-10%",
        },
    ];

    // Adiciona produtos no contêiner correto
    function renderizarProdutos(container) {
        // Certifique-se de que o contêiner está vazio antes de adicionar produtos
        container.innerHTML = ""; // Remove duplicações anteriores
        produtos.forEach((produto) => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <div class="product-discount">${produto.desconto}</div>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p><strong>${produto.nome}</strong></p>
                <p>${produto.descricao}</p>
                <p class="product-price">
                    <span class="price-anterior">${produto.precoAnterior}</span>
                    <span class="price-atual">${produto.precoAtual}</span>
                </p>
                <button class="add-to-cart">Adicionar ao carrinho</button>
            `;
            container.appendChild(productElement);
        });
    }

    // Verifica se está na página index (tem .products-container)
    const indexContainer = document.querySelector(".products-container");
    if (indexContainer) {
        renderizarProdutos(indexContainer);
    }

    // Verifica se está na página favoritos (tem #produtos)
    const favoritosContainer = document.getElementById("produtos");
    if (favoritosContainer) {
        renderizarProdutos(favoritosContainer);
    }

    // Evento de clique nos botões de adicionar ao carrinho
    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});