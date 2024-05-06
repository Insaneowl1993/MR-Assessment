// Toggle visibility of mini-cart
function toggleMiniCart() {
    const miniCart = document.getElementById('mini-cart');
    miniCart.style.display = (miniCart.style.display === 'block') ? 'none' : 'block';
}

// Load local product image
function loadLocalImage() {
    const productImage = document.getElementById('product-image');
    productImage.src = 'classic-tee.jpg'; // Path to the local image file
}

// Initialize product details
function initializeProductDetails() {
    loadLocalImage();
    // Assuming product data is not fetched from the API
    const productName = 'Classic V-Neck';
    const productPrice = 75.00;
    const availableSizes = ['S', 'M', 'L']; // List of available sizes

    // Set static product details
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = `$${productPrice.toFixed(2)}`;
    document.getElementById('product-description').textContent = `Elevate your casual wardrobe with this classic men's white V-neck t-shirt.
            Crafted from premium, breathable cotton, this tee offers exceptional comfort for everyday wear.
            Its versatile design pairs effortlessly with jeans or shorts for a laid-back, stylish look.
            The V-neckline adds a modern touch, making it perfect`;

    // Populate size buttons
    const sizeButtons = document.getElementById('shirt-size-buttons');
    availableSizes.forEach(size => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-dark';
        button.textContent = size;
        button.dataset.size = size;
        button.addEventListener('click', selectSize);
        sizeButtons.appendChild(button);
    });
}

// Select size
function selectSize(event) {
    const buttons = document.querySelectorAll('#shirt-size-buttons button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

// Add product to mini-cart
function addToMiniCart(productName, productImageSrc, size) {
    const miniCart = document.getElementById('cart-items');
    
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card', 'text-center', 'm-2');
    card.style.width = '300px'; // Set the width of the card

    // Card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.style.display = 'flex'; // Set display to flex
    cardBody.style.flexDirection = 'row'; // Set flex-direction to row
    
    // Product image
    const image = document.createElement('img');
    image.src = productImageSrc;
    image.alt = productName;
    image.classList.add('card-img-top');
    image.style.width = '100px'; // Set the width of the image
    
    // Product details
    const details = document.createElement('div');
    details.classList.add('card-text');
    details.innerHTML = `<p>${productName} - Size: ${size}</p>`;
    
    cardBody.appendChild(image);
    cardBody.appendChild(details);
    card.appendChild(cardBody);
    
    // Append card to mini-cart
    miniCart.appendChild(card);
}

// Add product to cart
function addToCart() {
    const selectedButton = document.querySelector('#shirt-size-buttons button.active');
    const errorMessage = document.getElementById('error-message');
    const cartItems = document.getElementById('cart-items');

    if (!selectedButton) {
        errorMessage.textContent = 'Please select a size.';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';
    const selectedSize = selectedButton.dataset.size;

    // Add selected product to mini-cart
    const productName = 'Classic V-Neck'; // Static product name
    const productImageSrc = 'classic-tee.jpg'; // Static product image path
    addToMiniCart(productName, productImageSrc, selectedSize);
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize product details
    initializeProductDetails();

    // Add event listeners
    document.getElementById('add-to-cart').addEventListener('click', addToCart);
    document.getElementById('cart-icon').addEventListener('click', toggleMiniCart);
});
