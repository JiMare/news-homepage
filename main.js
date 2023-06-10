const overlay = document.querySelector("#overlay");
const sidebar = document.querySelector("#sidebar");
const hamburger = document.querySelector("#hamburger");
const close = document.querySelector("#close");
const menu = document.querySelector("#sidelist");

const showSidebar = () => {
  sidebar.style.display = "block";
  overlay.style.display = "block";
};

const hideSidebar = () => {
  sidebar.style.display = "none";
  overlay.style.display = "none";
};

hamburger.addEventListener("click", showSidebar);
overlay.addEventListener("click", hideSidebar);
close.addEventListener("click", hideSidebar);
menu.addEventListener("click", hideSidebar);
