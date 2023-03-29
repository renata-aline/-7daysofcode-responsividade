const btn = document.querySelector("#botao-flutuante");

const botoesFlutuantes = document.querySelector("#botoes-flutuantes");

btn.addEventListener("click", () => {
  botoesFlutuantes.classList.toggle("active");
});
