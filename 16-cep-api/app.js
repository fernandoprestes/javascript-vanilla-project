const inputCep = document.querySelector(".txtCep");
const btn = document.querySelector(".btnCep");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

async function buscaCep(cep) {
  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      resultado.innerHTML = `
        <p>CEP: ${data.cep}</p>
        <p>Localidade: ${data.localidade}-${data.uf}</p>
        <p>Bairro: ${data.bairro}</p>
        <p>Complemento: ${data.complemento}</p>
        <p>IBGE: ${data.ibge}</p>
      `;
    });
}
