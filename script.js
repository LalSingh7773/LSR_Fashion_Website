// 1. Combined Product Array (All 12 items)
const products = [
    // Original 4 items
    { id: 1, name: "Minimalist Trench", price: "$240", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500" },
    { id: 3, name: "Tailored Trousers", price: "$180", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500" },
    { id: 4, name: "Cashmere Sweater", price: "$310", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500" },
    
    // New 8 items (IDs updated to 5-12 to prevent duplicates)
    { id: 5, name: "Ivory Wool Coat", price: "$320", category: "Women", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500" },
    { id: 6, name: "Midnight Leather Jacket", price: "$450", category: "Men", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500" },
    { id: 7, name: "Linen Summer Dress", price: "$150", category: "Women", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500" },
    { id: 9, name: "Oversized Knit Sweater", price: "$120", category: "Women", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500" },
    { id: 12, name: "Minimalist Sneakers", price: "$190", category: "Men", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500" }
];

// 2. DOM Elements and State
const productGrid = document.getElementById('product-list');
const cartCountElement = document.getElementById('cart-count');
let cartCount = 0;

// 3. Load Products Function
function displayProducts() {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" class="product-image">
            <div style="padding: 1rem;">
                <h3>${product.name}</h3>
                <p style="color: #666;">${product.price}</p>
            </div>
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        </div>
    `).join('');
}

// 4. Cart Function
function addToCart() {
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Simple feedback
    alert("Item added to cart!");
}

// 5. Initialize the display
displayProducts();
// This function gets the current domain name automatically
function getWebsiteDomain() {
    const domain = window.location.hostname;
    console.log("Current Domain:", domain);
    return domain;
}

// Example: Displaying the domain in the console or footer
document.addEventListener("DOMContentLoaded", () => {
    const myDomain = getWebsiteDomain();
    // You could use this to update a "Copyright" year or domain in the footer
});
function shareProduct(name, price) {
    if (navigator.share) {
        navigator.share({
            title: `Check out this ${name} at LSR!`,
            text: `I found this amazing ${name} for ${price}. What do you think?`,
            url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        alert("Web Share not supported on this browser. Copy the URL instead!");
    }
}
