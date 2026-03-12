/* Load cart data */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

/* Calculate total */

cart.forEach(item => {

let qty = item.qty || 1;
total += item.price * qty;

});

/* Show total on page */

document.getElementById("total-amount").innerText = total;


/* Razorpay payment function */

function payNow(){

if(total === 0){

alert("Cart is empty");
return;

}

var options = {

"key": "YOUR_RAZORPAY_KEY_ID", // replace with your key
"amount": total * 100, // Razorpay uses paise
"currency": "INR",

"name": "My Online Store",

"description": "Order Payment",

"handler": function (response){

alert("Payment Successful!");

console.log("Payment ID:", response.razorpay_payment_id);

/* clear cart after payment */

localStorage.removeItem("cart");

/* redirect after payment */

window.location.href = "success.html";

},

"theme": {
"color": "#3399cc"
}

};

var rzp = new Razorpay(options);

rzp.open();

}