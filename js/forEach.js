// Lista JSON existente
let listaJSON = [
  { "disciplina": "matematica",
    "descricao": "Descrição da tarefa 1",
    "dataDeConclusao": "2023-09-10",
    "feito": "",
    "progresso": ""
  },
  {
    "disciplina": "português",
    "descricao": "Descrição da tarefa 1",
    "dataDeConclusao": "2023-09-10",
    "feito": "",
    "progresso": ""
  },
  {
    "disciplina": "quimica",
    "descricao": "Descrição da tarefa 1",
    "dataDeConclusao": "2023-09-10",
    "feito": "",
    "progresso": ""
  }
];

// Função para formatar a data no formato "dd/mm/aa"
function formatarData(data) {
  const dataObj = new Date(data);
  const dia = dataObj.getDate().toString().padStart(2, '0');
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0'); // Note que janeiro é 0, então adicionamos 1
  const ano = dataObj.getFullYear().toString().slice(-2); // Pegue os últimos dois dígitos do ano
  return `${dia}/${mes}/${ano}`;
}


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
    cell1.innerHTML = requisicao.disciplina;
    cell2.innerHTML = requisicao.descricao;
    cell3.innerHTML = formatarData(requisicao.dataDeConclusao); 
    //cell4.innerHTML = requisicao.feito;
    //cell5.innerHTML = requisicao.progresso;

    if (requisicao.feito) {
      cell4.innerHTML = '<input type="checkbox" id="checkbox">';
    } else {
      cell4.innerHTML = '<input type="checkbox" id="checkbox">';
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
    cell5.innerHTML = 'Finalizado';
  } 
  
  });
}


/* VOLTAR AQUI
const checkbox = document.querySelector("#checkbox")

  for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = atualizarListaRequisicoes; 
  }
*/





    // Inicializa a lista de requisições na tabela da interface
    atualizarListaRequisicoes();