/* Load cart from localStorage */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Fix items without quantity */

cart.forEach(item => {
if (!item.qty) {
item.qty = 1;
}
});


/* Render cart items */

function renderCart() {

let cartItems = document.getElementById("cart-items");
cartItems.innerHTML = "";

let total = 0;
let count = 0;

cart.forEach((item, index) => {

let div = document.createElement("div");
div.className = "cart-item";

div.innerHTML = `

<div class="item-info">
<strong>${item.name}</strong><br>
₹${item.price}
</div>

<div class="qty-controls">

<button onclick="decreaseQty(${index})">-</button>

<span>${item.qty}</span>

<button onclick="increaseQty(${index})">+</button>

<button class="remove-btn" onclick="removeItem(${index})">
Remove
</button>

</div>

`;

cartItems.appendChild(div);

/* Calculate totals */

total += item.price * item.qty;
count += item.qty;

});


/* Update totals in HTML */

document.getElementById("cart-total").innerText = total;
document.getElementById("cart-count").innerText = count;


/* Save updated cart */

localStorage.setItem("cart", JSON.stringify(cart));

}


/* Increase quantity */

function increaseQty(index) {

cart[index].qty++;

renderCart();

}


/* Decrease quantity */

function decreaseQty(index) {

if (cart[index].qty > 1) {

cart[index].qty--;

} else {

removeItem(index);

}

renderCart();

}


/* Remove item */

function removeItem(index) {

cart.splice(index, 1);

renderCart();

}


/* Explore more button */

function exploreMore() {

window.location.href = "index.html";

}


/* Load cart on page start */

renderCart();