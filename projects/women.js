let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartDisplay = document.getElementById("cart-count");
  if (cartDisplay) cartDisplay.textContent = cart.length;
}

updateCartCount();

const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.parentElement.querySelector("h3").textContent;
    const price = Number(button.getAttribute("data-price") || 0); // set price using data-price or 0

    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
  });
});