window.addEventListener("load", main);

async function main (){
   await loadCatalog();
};

async function requireProducts() {
    const date = await fetch('http://localhost:5000/products');
    const jsonDate = await date.json();
    return jsonDate;
};


async function loadCatalog() {
    const products = await requireProducts();
    const containerMenu = document.querySelector(".container-menu");
    for (let i = 0; i < products.length; i++) {
        const produto = `<article class="card-menu" data-product-id="${products[i].id}">
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
        const allButtonsAddToCart = document.querySelectorAll("#add-cart");
        allButtonsAddToCart.forEach((button) => {
            button.addEventListener("click",addItemToLocalStorage);
        })
    };
};

async function addItemToLocalStorage(e) {
    const products = await requireProducts(); 
    let idProduct = +e.target.closest(".card-menu").dataset.productId;
    let completeProduct;

    for (let i = 0; i < products.length; i++) {
        if (products[i].id === idProduct) {
            completeProduct = {...products[i], quantidade: 1};
        }
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let foundIndex = -1;

    for (let x = 0; x < cart.length; x++) {
        if (cart[x].id === idProduct) {
            foundIndex = x;
            break;
        }
    }    
    if (foundIndex !== -1) {
        cart[foundIndex].quantidade++;
    } else {
        cart.push(completeProduct)
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};
