import { products } from "./products.js";
window.addEventListener("load", main);

function main (){
    const containerMenu = document.querySelector(".container-menu");
    for (let i = 0; i < products.length; i++) {
        const produto = `<article class="card-menu">
            <div class="header-card">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="container-card">
                <img src="${products[i].img}" >
                <h6>${products[i].titulo}</h6>
                <p>${products[i].preco}</p>
                <button id="add-cart">Adicionar ao carrinho</button>
            </div>
        </article>`;
        containerMenu.insertAdjacentHTML("beforeend", produto);
    };
};