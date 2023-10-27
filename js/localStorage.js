// Função para carregar os dados da lista a partir do Local Storage
function carregarDadosDoLocalStorage() {
  const dadosLocalStorage = localStorage.getItem('listaJSON');
  if (dadosLocalStorage) {
    listaJSON = JSON.parse(dadosLocalStorage);
    atualizarListaRequisicoes();
  }
}

// Função para salvar os dados da lista no Local Storage
function salvarDadosNoLocalStorage() {
  localStorage.setItem('listaJSON', JSON.stringify(listaJSON));
}

// Lista JSON existente
let listaJSON = [];

// Carregar dados do Local Storage, se existirem
carregarDadosDoLocalStorage();

// Inicializa a lista de requisições na tabela da interface
atualizarListaRequisicoes();