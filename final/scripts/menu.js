const menuBtn = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
   menu.classList.toggle("show");
});
