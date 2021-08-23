const btnMenu = document.querySelector(".nav-toggle");

btnMenu.addEventListener("click",  (event) => {
  event.preventDefault();
  const nav = document.querySelector('.nav-menu')
  nav.classList.toggle('active')
})
