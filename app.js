function pesquisar() {
    // Função principal que realiza a pesquisa e exibe os resultados
  
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      // Se o campo estiver vazio, exibe uma mensagem de erro
      section.innerHTML = "<p>Não encontrou resultados. Digite o nome da Grupo ou tipo de música</p>";
      return; // Encerra a função
    }
  
    // Converte o termo de pesquisa para minúsculas para facilitar a comparação
    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Converte os campos do dado para minúsculas para facilitar a comparação
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa está contido no título, descrição ou tags
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar um resultado, cria uma nova div para o resultado
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.wikipedia} target="_blank">Wikipedia</a>
            <a href=${dado.siteOficial} target="_blank">Site Oficial</a>
            <a href=${dado.video} target="_blank">Vídeo</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      // Se não encontrou resultados, exibe uma mensagem
      resultados = "<p>Nada foi encontrado</p>";
    }
  
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }