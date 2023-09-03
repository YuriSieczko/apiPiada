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

  const botaoGerarImagemCachorro = document.getElementById("gerarImagemCachorro");
  const imagemCachorroElemento = document.getElementById("imagemCachorro");

  // Método para gerar uma imagem de cachorro
  function gerarImagemCachorro() {
    fetch("https://random.dog/woof.json")
      .then((response) => response.json())
      .then((data) => {
        if (
          data.url &&
          (data.url.endsWith(".jpg") ||
            data.url.endsWith(".jpeg") ||
            data.url.endsWith(".png"))
        ) {
          const imagemCachorroUrl = data.url;
          imagemCachorroElemento.innerHTML = `<img src="${imagemCachorroUrl}" alt="Imagem de Cachorro">`;
        } else {
          imagemCachorroElemento.innerHTML =
            "Não foi possível encontrar uma imagem de cachorro.";
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar a imagem de cachorro:", error);
        imagemCachorroElemento.innerHTML =
          "Ocorreu um erro ao buscar a imagem de cachorro. Tente novamente mais tarde.";
      });
  }

  // Adiciona ouvintes de eventos aos botões para chamar os métodos correspondentes
  botaoGerarPiada.addEventListener("click", gerarPiada);
  botaoGerarImagemCachorro.addEventListener("click", gerarImagemCachorro);
}

// Chama a função de inicialização quando a página HTML é completamente carregada
document.addEventListener("DOMContentLoaded", () => {
  inicializarGerador();
});
