const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarMenu = document.querySelector(".lista-navigacija");
const aktivnaStranica = window.location.pathname;
const aktivniJezicak = document.querySelectorAll(".lista-navigacija li a");

for (const jezicak of aktivniJezicak) {
  if (jezicak.href.includes(`${aktivnaStranica}`)) {
    jezicak.classList.add("active");
  }
}

hamburgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("responsive");
  hamburgerMenu.classList.toggle("active");
});
