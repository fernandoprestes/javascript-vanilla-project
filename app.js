const projects = [
  {
    id: "#01",
    title: "Background colors pick",
    src: "./01-colors/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#02",
    title: "Counter",
    src: "./02-counter/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#03",
    title: "Reviews",
    src: "./03-reviews/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#04",
    title: "Navbar",
    src: "./04-navbar/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#05",
    title: "Sidebar",
    src: "./05-sidebar/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#06",
    title: "Modal",
    src: "./06-modal/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#07",
    title: "Question",
    src: "./07-question/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#08",
    title: "Modal",
    src: "./08-menu/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#09",
    title: "Video",
    src: "./09-video/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#10",
    title: "Navbar with scroll",
    src: "./10-navbar-scroll/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#11",
    title: "Navegation",
    src: "./11-navegation/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#12",
    title: "Countdown timer",
    src: "./12-countdown-timer/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#13",
    title: "Lorem ipsum Generate",
    src: "./13-lorem-ipsum-generate/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#14",
    title: "Grocery List",
    src: "./14-grocery-bud/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
  {
    id: "#15",
    title: "Slide",
    src: "./15-sliders/index.html",
    img: "./item-1.jpeg",
    alt: "image project",
  },
];

const section = document.querySelector(".section");

window.addEventListener("DOMContentLoaded", () => {
  articleItem(projects);
});

function articleItem(items) {
  let article = items.map((item) => {
    return `
    <article class="project-card">
      <h2 class="project-title">${item.title}</h2>
      <a href="${item.src}">
        <div class="project-img">
          <span>${item.id}</span>
          <img src="${item.img}" alt="${item.alt}"/>
        </div>
      </a>
    </article>`;
  });
  article = article.join("");
  section.innerHTML = article;
}
