// Fetch product details from the API and populate the UI
async function fetchProductDetails() {
  try {
    const response = await fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    );
    const product = await response.json();
    console.log(product);
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
}

// Add event listeners
function initEventListeners() {
  const addToCartButton = document.getElementById("add-to-cart");
  addToCartButton.addEventListener("click", addToCart);
}

// Handle adding product to the cart
function addToCart() {
  const sizeSelect = document.getElementById("size-select");
  const selectedSize = sizeSelect.value;
  const errorMessage = document.getElementById("error-message");

  if (!selectedSize) {
    errorMessage.textContent = "Please select a size.";
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  const cartItems = document.getElementById("cart-items");
  let itemExists = false;

  for (const li of cartItems.children) {
    if (li.dataset.size === selectedSize) {
      let quantity = parseInt(li.dataset.quantity) + 1;
      li.dataset.quantity = quantity;
      li.querySelector(".quantity").textContent = `Qty: ${quantity}`;
      itemExists = true;
      break;
    }
  }

  if (!itemExists) {
    const li = document.createElement("li");
    li.dataset.size = selectedSize;
    li.dataset.quantity = 1;
    li.innerHTML = `Classic Tee - Size: ${selectedSize} <span class="quantity">Qty: 1</span>`;
    cartItems.appendChild(li);
  }
}

// Initialize the app
function init() {
  fetchProductDetails();
  initEventListeners();
}

// Function to toggle the mini-cart visibility
function toggleCartVisibility() {
  const miniCart = document.getElementById("mini-cart");
  miniCart.classList.toggle("active");
}

//event listener for the cart icon
document
  .getElementById("cart-icon")
  .addEventListener("click", toggleCartVisibility);

document.addEventListener("DOMContentLoaded", init);
