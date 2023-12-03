window.addEventListener("load",main);

function main() {
    checkQuantityCart();
    const finalizeButton = document.getElementById("finalize-purchase");
    finalizeButton.addEventListener("click",sendItems);
};

function checkQuantityCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];;
    let divShoppingCart = document.querySelector(".cart-shopping");

    if (cart.length > 0) {
        addItemToCart();
    } else {
        const h3 = document.createElement("h3");
        h3.classList.add("message-null");
        h3.textContent = "O carrinho está vazio!"
        divShoppingCart.appendChild(h3);
    }
    checkFinalizeButton();
};

function addItemToCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let divShoppingCart = document.querySelector(".cart-shopping");

    for (let x = 0; x < cart.length; x++) {
        const produto = cart[x];            
            const purchase = document.createElement("div");
            purchase.classList.add("purchase");
            purchase.id = produto.id;

            const purchaseDescription = document.createElement("div");
            purchaseDescription.classList.add("purchase-description");
            const img = document.createElement("img");
            img.src = produto.img;
            const titlePurchase = document.createElement("span");
            titlePurchase.classList.add("title-purchase");
            titlePurchase.textContent = "Título:";
            const titleSpan = document.createElement("span");
            titleSpan.textContent = produto.titulo;
            purchaseDescription.appendChild(img);
            purchaseDescription.appendChild(titlePurchase);
            purchaseDescription.appendChild(titleSpan);

            const purchaseValue = document.createElement("div");
            purchaseValue.classList.add("purchase-value", "box-purchase");
            
            let qtd = document.createElement("input");
            qtd.id = `quantidade-${produto.id}`;
            qtd.value = produto.quantidade;
            let buttonDecrement = document.createElement("button");
            buttonDecrement.classList.add("decrement-button")
            buttonDecrement.textContent = "-";

            let buttonIncrement = document.createElement("button");
            buttonIncrement.classList.add("increment-button")
            buttonIncrement.textContent = "+";

            purchaseValue.appendChild(buttonDecrement);
            purchaseValue.appendChild(qtd);
            purchaseValue.appendChild(buttonIncrement);

            const purchasePrice = document.createElement("div");
            purchasePrice.classList.add("purchase-price", "box-purchase");
            const templateNotationPrice = document.createElement("span");
            templateNotationPrice.textContent = 'R$ ';
            const priceSpan = document.createElement("span");
            priceSpan.textContent = `${produto.preco}`;
            purchasePrice.appendChild(templateNotationPrice);
            purchasePrice.appendChild(priceSpan);

            const purchaseSubtotal = document.createElement("div");
            purchaseSubtotal.classList.add("purchase-subtotal", "box-purchase");
            const templateNotationSubTotal = document.createElement("span");
            templateNotationSubTotal.textContent = 'R$ ';
            const subTotal = document.createElement("span");
            subTotal.id = `value-${produto.id}`
            const subtotalValue = parseFloat(qtd.value) * parseFloat(priceSpan.textContent.replace(",", "."));
            subTotal.textContent = subtotalValue.toFixed(2).replace(".", ",");
            purchaseSubtotal.appendChild(templateNotationSubTotal);
            purchaseSubtotal.appendChild(subTotal);

            const purchaseRemove = document.createElement("div");
            purchaseRemove.classList.add("purchase-remove");
            const removeButton = document.createElement("button");
            removeButton.textContent = "X";
            purchaseRemove.appendChild(removeButton);
            
            purchase.appendChild(purchaseDescription);
            purchase.appendChild(purchaseValue);
            purchase.appendChild(purchasePrice);
            purchase.appendChild(purchaseSubtotal);
            purchase.appendChild(purchaseRemove);
            
            divShoppingCart.appendChild(purchase);
            removeButton.addEventListener("click", (e) => {
                const cartShopping = document.querySelector("section.cart-shopping");
                const item = e.target.parentNode.parentNode;
                const productId = item.id;
                const index = cart.findIndex((item) => item.id == productId);
                
                if (index !== -1) {
                    cartShopping.removeChild(item);
                    cart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updatePriceTotal();
                    checkFinalizeButton();
                }
            });
        }
    updatePriceTotal();
    checkFinalizeButton();
    let decrementButtons = document.querySelectorAll(".decrement-button");
    decrementButtons.forEach(button => {
        button.addEventListener("click", decrementQuantity);
    });

    let incrementButtons = document.querySelectorAll(".increment-button");
    incrementButtons.forEach(button => {
        button.addEventListener("click",incrementQuantity);
    });
};

function incrementQuantity(e) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const produtoId = e.target.parentNode.parentNode.id;
    const qtd = document.getElementById(`quantidade-${produtoId}`);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == produtoId) {
            cart[i].quantidade++;
            qtd.value = cart[i].quantidade;
            checkQuantity(cart[i],[i]);
        }
    }
};

function decrementQuantity(e) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const produtoId = e.target.parentNode.parentNode.id;
    const qtd = document.getElementById(`quantidade-${produtoId}`);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == produtoId) {
            cart[i].quantidade--;
            qtd.value = cart[i].quantidade;
            checkQuantity(cart[i],[i]);
        }
    }
    checkFinalizeButton(); 
}

function checkQuantity(produto,index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const divShoppingCart = document.querySelector(".cart-shopping");
    const uniquePurchase = document.querySelector(`.purchase[id="${produto.id}"]`);

    if (produto.quantidade === 0) {
        cart.splice(index, 1);
        if (uniquePurchase) {
            divShoppingCart.removeChild(uniquePurchase);
        }
    }  else {
        cart[index].quantidade = produto.quantidade;
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    let isIn = false;
    for (let x = 0; x < cart.length; x++) {
        if (cart[x].id == produto.id) {
            isIn = true;
        }
    }
    if (isIn) {
        let subTotal = document.querySelector(`#value-${produto.id}`);
        const subtotalValue = parseFloat(produto.quantidade) * parseFloat(produto.preco.replace(",", "."));
        subTotal.textContent = `${subtotalValue.toFixed(2).replace(".", ",")}`;
    }
    updatePriceTotal();     
};

function updatePriceTotal() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let priceTotal = document.getElementById("text-value-final");
    let total = 0;
    for (let x = 0; x < cart.length; x++) {
        total += cart[x].preco.replace(",",".") * cart[x].quantidade;
    }
    priceTotal.textContent = total.toFixed(2).replace(".",",");
};

function checkFinalizeButton() {
    const button = document.getElementById("finalize-purchase");
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.length !== 0 ? button.disabled = false : button.disabled = true;
};

async function sendItems() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    try {
        const resul = await fetch ('http://localhost:5000/shopping', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cart)
        });
    } catch (error) {
        console.error('Erro ao enviar dados', error);
    }
};