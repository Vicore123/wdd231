import apiFetch from "./apiFetch.mjs";

const products = await apiFetch('all');
const currentItemId = new URLSearchParams(window.location.search).get("item");

export default function waitForElement(selector, callback) {
   const check = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
         clearInterval(check);
         callback(element);
      }
   }, 100);
}

const cartContainer = document.getElementById('cart');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartContentElement = document.getElementById('cart-content');
const modal = document.getElementById('cart-success-modal')

waitForElement('#add-to-cart', (addToCartBtn) => {
   addToCartBtn.addEventListener('click', () => addItemToCart());
});

openCartBtn.addEventListener('click', () => {
   cartContainer.classList.add('open');
   renderCartItems();
});

closeCartBtn.addEventListener('click', () => {
   cartContainer.classList.remove('open');
});

let cart = { items: [] };

if (localStorage.getItem("cart")) {
   try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart && Array.isArray(storedCart.items)) {
         cart = storedCart;
      }
   } catch (e) {
      cart = { items: [] };
   }
}

function renderCartItems() {
   cartContentElement.innerHTML = '';

   cart.items.forEach(productId => {
      const product = products.find(p => String(p.id) === String(productId))
      
      if (!product) return;

      cartContentElement.innerHTML += `
         <div class="cart-item">
            <img src="${product.image}" alt="${product.title}">
            ${product.title}
            <button class="remove-from-cart" value="${productId}">Remove</button>
         </div>
      `
   });

   document.querySelectorAll('.remove-from-cart').forEach(button => {
      button.addEventListener('click', (event) => {
         removeItemFromCart(event.target.value);
      });
   });
}

function addItemToCart() {
   if (!cart.items.includes(currentItemId)) {
      cart.items.push(currentItemId);
      localStorage.setItem("cart", JSON.stringify(cart));
      showSuccessModal();
   }
   renderCartItems();
}


function removeItemFromCart(idToRemove) {
   cart.items = cart.items.filter(productId => productId !== idToRemove);
   localStorage.setItem("cart", JSON.stringify(cart));
   renderCartItems();
}

function showSuccessModal() {
   modal.classList.add('show')
   setTimeout(() => {
      modal.classList.remove('show')
   }, 2000)
}

// localStorage.clear();
