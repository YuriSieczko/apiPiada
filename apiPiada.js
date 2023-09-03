function inicializarGerador() {
  const botaoGerarPiada = document.getElementById("gerarPiada");
  const piadaElemento = document.getElementById("piada");

  // Método para gerar uma piada
  function gerarPiada() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=pt")
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          piadaElemento.textContent = `Piada: ${data.joke}`;
        } else if (data.type === "twopart") {
          const piadaCompleta = `${data.setup} ${data.delivery}`;
          piadaElemento.textContent = `Piada: ${piadaCompleta}`;
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar a piada:", error);
        piadaElemento.textContent =
          "Ocorreu um erro ao buscar a piada. Tente novamente mais tarde.";
      });
  }
  botaoGerarPiada.addEventListener("click", gerarPiada);
}

// Chama a função de inicialização quando a página HTML é completamente carregada
document.addEventListener("DOMContentLoaded", () => {
  inicializarGerador();
});