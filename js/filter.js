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
      const cell5 = row.insertCell(4); 
      const cell6 = row.insertCell(5); // Coluna "Progresso"

      cell1.innerHTML = requisicao.disciplina;
      cell2.innerHTML = requisicao.descricao;
      cell3.innerHTML = formatarData(requisicao.dataDeConclusao); 
      
      // CRIANDO CHECKBOX utilizando o createElement
      // para criar um elemento input e dando o tipo checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      // Adicione a classe "estilo-checkbox" ao elemento checkbox
      checkbox.classList.add('estilo-checkbox');

      //usamos o appendChield para inserir um elemento dentro de uma celula da tabela
      cell4.appendChild(checkbox);

      // Definindo o estado do checkbox com base no valor "feito" true ou false que ja veio da lista
      checkbox.checked = requisicao.feito;

      // Criando um LISTENER, basicamento um ESCUTADOR
      // Sempre q uma pessoa clicar no botao CHECKBOX ele ativa automaticamente
      // e atualiza o campo FEITO
      checkbox.addEventListener('click', () => {
        // Utilizamos [index] Para encontrar o objeto na posicao do array
        listaJSON[index].feito = checkbox.checked;
        // Atualizamos os dados da lista novamente
        atualizarListaAlteradaNoLocalStorage(listaJSON);
        // buscando os dados da lista novamente para atualizar em "tempo real"
        atualizarListaRequisicoes();
      });

      // Adicionado botão "Remover" em cada linha da mesma maneira do checkbox
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remover';
      cell6.appendChild(removeButton);

      // Criado um LISTENER basicamento um ESCUTADOR IGUAL ao checkbox
      // Sempre q uma pessoa clicar no botao REMOVER ele ativa automaticamente
      // e remove a linha na posicao clicada
      removeButton.addEventListener('click', () => {

        // Remove a linha da tabela
        tabelaRequisicoes.deleteRow(index);

        // Utilizamos [index] Para encontrar o objeto na posicao q foi clicado
        listaJSON.splice(index, 1);

        // Salve o array listaJSON atualizado no localStorage
        atualizarListaAlteradaNoLocalStorage(listaJSON);
      });
    });
  }

  // Inicializa a lista de requisições na tabela da interface
atualizarListaRequisicoes();
  