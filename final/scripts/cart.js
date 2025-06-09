const cart = document.getElementById('cart');
const openBtn = document.getElementById('openCartBtn');
const closeBtn = document.getElementById('closeCartBtn');

openBtn.addEventListener('click', () => {
   cart.classList.add('open');
});

closeBtn.addEventListener('click', () => {
   cart.classList.remove('open');
});
