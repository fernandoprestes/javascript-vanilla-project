const btnMenu = document.querySelector(".nav-toggle");
const nav = document.querySelector('.nav-menu')

btnMenu.addEventListener("click",  (event) => {
  event.preventDefault();
  nav.classList.toggle('active')
})
