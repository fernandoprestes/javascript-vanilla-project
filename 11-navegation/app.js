const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    // remove active from other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    //add active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});