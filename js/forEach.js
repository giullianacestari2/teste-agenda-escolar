// Removido listagem hardcode e adicionado listagem dinâmica
let listaJSON =[]

// Estamos buscando os dados dentro do LocalStorage
function buscarListaLocalStorage() {

  //buscamos a listagem que esta no formato de string
  let storedData = localStorage.getItem('listaJSON');
  // Iniciamos uma variavel onde iremos transforma a lista armazenada
  // em string em uma lista de objeto
  let transformandoDeStringParaListagem = [];

  //Verificamos se contem conteudo dentro do localstorage
  if (storedData) {
    // Se há dados no localStorage,
    // faça o parsing dos dados existentes transformando a string em um array de objeto
    transformandoDeStringParaListagem = JSON.parse(storedData);

    //verificamos se a o localstorage retornou 1 array ou somente 1 item
    if (!Array.isArray(transformandoDeStringParaListagem)) {
      // Se não for um array, criamos um array com o item do localstorage
      transformandoDeStringParaListagem = [transformandoDeStringParaListagem];
    }
  }
//Retornando a lista encontrada e transformada em objeto
  return transformandoDeStringParaListagem

}
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
  // SEMPRE que precisar atualizar a lista ele busca todos os dados novamente
  // Porem este cara esta dando problemas no momento da ordenacao é algo se pensar em melhorar
  // porque ele esta buscando novamente os dados e nao os dados ordenados.

  // Pode criar uma verificacao de quando for ordenacao

  listaJSON = buscarListaLocalStorage();

  const tabelaRequisicoes = document.getElementById('tabelaRequisicoes');
  tabelaRequisicoes.innerHTML = ''; // Limpa a tabela atual

  const dataAtual = new Date(); // Obter a data atual

//Inserimos o INDEX, basicamente é a posicao do item no array
  listaJSON.forEach((requisicao, index) => {
    const row = tabelaRequisicoes.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4); // Coluna "Feito"
    const cell6 = row.insertCell(5); // Coluna "Progresso"
    //INSERIDO MAIS UM CAMPO DE ACAO CASO VC QUEIRA COLOCAR O REMOVER
    const cell7 = row.insertCell(6); // Coluna "Ações"

    cell1.innerHTML = requisicao.disciplina;
    cell2.innerHTML = requisicao.descricao;
    cell3.innerHTML = requisicao.dataDeConclusao;

    // CRIANDO CHECKBOX utilizando o createElement
    // para criar um elemento input e dando o tipo checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
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

    // Adicionado botão "Remover" em cada linha da mesma maneira do checkbox
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    cell7.appendChild(removeButton);

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


function atualizarListaAlteradaNoLocalStorage(listagemAlterada){
  //Transformamos toda a lista de objeto em UMA STRING utilizando o stringify
  let listaTransformada=JSON.stringify(listagemAlterada)

  // salvando a string novamente no localstorage
  localStorage.setItem('listaJSON', listaTransformada);
}


//Insira os botoes das acoes checkbox e remocao para fixar conhecimento no filtro
// ou daria para pensar uma maneira melhor de fazer buscando pelo localstorage
// hehehe fica seu criterio

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
