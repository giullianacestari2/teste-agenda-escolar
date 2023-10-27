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

  // Função para atualizar a lista de requisições na tabela da interface após o filtro
  function atualizarListaRequisicoesFiltrada(listaFiltrada) {
    const tabelaRequisicoes = document.getElementById('tabelaRequisicoes');
    tabelaRequisicoes.innerHTML = ''; // Limpa a tabela atual

    listaFiltrada.forEach(requisicao => {
      const row = tabelaRequisicoes.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4); // Coluna "Feito"
      cell1.innerHTML = requisicao.disciplina;
      cell2.innerHTML = requisicao.descricao;
      cell3.innerHTML = formatarData(requisicao.dataDeConclusao); 
      //cell4.innerHTML = requisicao.feito;
      //cell5.innerHTML = requisicao.progresso;
    });
  }

  