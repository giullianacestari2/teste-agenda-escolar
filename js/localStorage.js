
function carregarDadosDoLocalStorage() {
    const dadosLocalStorage = localStorage.getItem('listaJSON');
    if (dadosLocalStorage) {
      listaJSON = JSON.parse(dadosLocalStorage);
      atualizarListaRequisicoes();
    }
  }

  // Função para salvar os dados da lista no Local Storage

// Removido variavel let listaJSON = []; ja tinha sido instanciado outras vezes

// Estas funcoes estao na pagina forEach,
// depois voce organiza o código da maneira que achar melhor
// removido   carregarDadosDoLocalStorage();
