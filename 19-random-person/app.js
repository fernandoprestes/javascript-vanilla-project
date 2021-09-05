const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const urlApi = "https://randomuser.me/api";

function formatDate(birthday) {
  let date = new Date(birthday);
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
}

function formatName(name) {
  return `${name.title} ${name.first} ${name.last}`;
}

async function randomPerson() {
  await fetch(urlApi)
    .then((response) => response.json())
    .then(
      (data) =>
        (result.innerHTML = `
      <header>
        <img class="avatar" src="${data.results[0].picture.large}">
      </header>
        <h1 class="title">${formatName(data.results[0].name)}</h1>
        <div class="card">
          <ol class="lista">
            <li class="item">City: ${data.results[0].location.city}</li>
            <li class="item">State: ${data.results[0].location.state}</li>
            <li class="item">Country: ${data.results[0].location.country}</li>
            <li class="item">Postcode: ${data.results[0].location.postcode}</li>
            <li class="item">Birthday:  ${formatDate(
              data.results[0].dob.date
            )}</li>
            <li class="item">Age:  ${data.results[0].dob.age}</li>
            <li class="item">Natural:  ${data.results[0].nat}</li>
            <li class="item">Email:  ${data.results[0].email}</li>
          </ol>
        </div>
      `)
    );
}

randomPerson();

btn.addEventListener("click", randomPerson);
