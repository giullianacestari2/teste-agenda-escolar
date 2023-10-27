let btnFiltrar = document.querySelector("#filtroBotao")

btnFiltrar.addEventListener("click", toggleFiltroMenu)

// Função para alternar a exibição do menu suspenso de filtro
function toggleFiltroMenu() {
    const filtroMenu = document.getElementById('filtroMenu');
    if (filtroMenu.style.display === 'none' || filtroMenu.style.display === '') {
      filtroMenu.style.display = 'block';
    } else {
      filtroMenu.style.display = 'none';
    }
  }

  // Função para filtrar a lista de requisições com base na disciplina selecionada
  function filtrarRequisicoes() {
    const filtroSelecionado = document.getElementById('filtroMenu').value;
    if (filtroSelecionado === 'todas') {
      atualizarListaRequisicoes();
    } else {
      const listaFiltrada = listaJSON.filter(requisicao => requisicao.disciplina === filtroSelecionado);
      atualizarListaRequisicoesFiltrada(listaFiltrada);
    }
  }

  