// cart.js
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("cart-total");
  const countDisplay = document.getElementById("cart-count");

  if (!cartItemsContainer || !totalDisplay || !countDisplay) return;

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `${item.name} - $${item.price} 
      <button onclick="removeItem(${index})">Remove</button>`;
    cartItemsContainer.appendChild(div);

    total += Number(item.price);
  });

  totalDisplay.textContent = total;
  countDisplay.textContent = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.addEventListener("DOMContentLoaded", () => {
  displayCart();

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      const paymentMethod = document.getElementById("payment-method").value;
      alert(`You chose ${paymentMethod}. Total: $${cart.reduce((acc, item) => acc + Number(item.price), 0)}`);
    });
  }
});

// load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// create water droplets
for (let i = 0; i < 70; i++) {

let drop = document.createElement("div");
drop.className = "droplet";

drop.style.left = Math.random() * 100 + "vw";
drop.style.animationDuration = (Math.random() * 3 + 2) + "s";

document.body.appendChild(drop);

}


// render cart items
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
Remove ${item.name}
</button>

</div>
`;

cartItems.appendChild(div);

total += item.price * item.qty;
count += item.qty;

});

document.getElementById("cart-total").innerText = total;
document.getElementById("cart-count").innerText = count;

localStorage.setItem("cart", JSON.stringify(cart));

}


// increase quantity
function increaseQty(i) {

cart[i].qty++;

renderCart();

}


// decrease quantity
function decreaseQty(i) {

if (cart[i].qty > 1) {

cart[i].qty--;

} else {

removeItem(i);

}

renderCart();

}


// remove item
function removeItem(i) {

cart.splice(i, 1);

renderCart();

}


// explore more button
function exploreMore() {

window.location.href = "index.html";

}


// load cart
renderCart();