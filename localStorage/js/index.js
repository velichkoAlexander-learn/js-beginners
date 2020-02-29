const productContainer = document.querySelector(".products");
const cartList = document.querySelector('.cart__list');
const eventStateUpdate = new Event('update state');
let state = [];

function buyProduct(e) {
    e.preventDefault();
    if (e.target.matches('.product__buy-btn')) {
        const target = e.target;
        const product = target.closest('.product');
        const name = product.querySelector('.product__title').textContent;
        const price = product.querySelector('.product__price').textContent;
        const count = product.querySelector('.product__input').value;

        state.push({
            name,
            price,
            count,
            orderId: Date.now()
        });
        cartList.dispatchEvent(eventStateUpdate);
    }
}

function setStateToLocalStorage() {
    const lsState = JSON.stringify(state);
    localStorage.setItem('state', lsState);
}


function showState() {
    const html = state.map(function (item) {
        return `
        <li class="cart__item">
            <span class="cart__number">${item.count}</span>
            <span class="cart__name">${item.name}</span>
            <span class="cart__price">${item.price}</span>
            <button class="cart__btn" data-orderid="${item.orderId}">X</button>
        </li>
        `;
    });

    cartList.innerHTML = html.join(' ');
}

function getStateFromLocalStorage() {
    const lsState = JSON.parse(localStorage.getItem('state'));
    if (lsState) {
        state.push(...lsState);
    }
    cartList.dispatchEvent(eventStateUpdate);
}

const removeItem = (e) => {
    e.preventDefault();
    if (e.target.matches('.cart__btn')) {
        const target = e.target;
        const orderId = parseInt(target.dataset.orderid);
        state = state.filter(function (item) {
            return item.orderId !== orderId;
        });
        cartList.dispatchEvent(eventStateUpdate);
    }
};

productContainer.addEventListener('click', buyProduct);
cartList.addEventListener('update state', showState);
cartList.addEventListener('update state', setStateToLocalStorage);
cartList.addEventListener('click', removeItem);


getStateFromLocalStorage();