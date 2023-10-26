// Lista JSON existente
let listaJSON = [
    {
      "titulo": "Tarefa 1",
      "descricao": "Descrição da tarefa 1",
      "dataDeConclusao": "2023-11-10",
      "disciplina": "matematica",
      "feito": false,
      "progresso": ""
    },
    {
      "titulo": "Tarefa 2",
      "descricao": "Descrição da tarefa 2",
      "dataDeConclusao": "2023-11-15",
      "disciplina": "portugues",
      "feito": true,
      "progresso": "Em andamento"
    },
    {
      "titulo": "Tarefa 3",
      "descricao": "Descrição da tarefa 3",
      "dataDeConclusao": "2023-11-20",
      "disciplina": "quimica",
      "feito": false,
      "progresso": ""
    }
  ];

  // Função para atualizar a lista de requisições na tabela da interface
  function atualizarListaRequisicoes() {
    const tabelaRequisicoes = document.getElementById('tabelaRequisicoes');
    tabelaRequisicoes.innerHTML = ''; // Limpa a tabela atual

    const dataAtual = new Date(); // Obter a data atual

    listaJSON.forEach(requisicao => {
      const row = tabelaRequisicoes.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4); // Coluna "Feito"
      const cell6 = row.insertCell(5); // Coluna "Progresso"
      cell1.innerHTML = requisicao.disciplina;
      cell2.innerHTML = requisicao.descricao;
      cell3.innerHTML = requisicao.dataDeConclusao;
      //cell4.innerHTML = requisicao.feito;
      //cell5.innerHTML = requisicao.progresso;

      if (requisicao.feito) {
        cell4.innerHTML = '<input type="checkbox">';
      } else {
        cell4.innerHTML = '<input type="checkbox">';
      }

      // Coluna "Progresso"
    if (!requisicao.feito) { // Verifica se não está marcado como "Feito"
      const prazoData = new Date(requisicao.dataDeConclusao);
      if (prazoData < dataAtual) {
        cell5.innerHTML = 'EM ATRASO!!!';
      } else {
        cell5.innerHTML = requisicao.progresso;
      }
    } else {
      cell5.innerHTML = requisicao.progresso;
    }
    });
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
      cell1.innerHTML = requisicao.disciplina;
      cell2.innerHTML = requisicao.descricao;
      cell3.innerHTML = requisicao.dataDeConclusao;
      cell4.innerHTML = '<input type="checkbox" >';
      cell5.innerHTML = requisicao.progresso;
    });
  }

      // Inicializa a lista de requisições na tabela da interface
      atualizarListaRequisicoes();