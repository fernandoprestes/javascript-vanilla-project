const result = document.querySelector(".resultado");
const btn = document.querySelector(".btn");

async function randomJoker() {
  await fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (result.innerHTML = data.value));
}

randomJoker();

btn.addEventListener("click", randomJoker);
