// Função para carregar os dados da lista a partir do Local Storage
function carregarDadosDoLocalStorage() {
    const dadosLocalStorage = localStorage.getItem('listaJSON');
    if (dadosLocalStorage) {
      listaJSON = JSON.parse(dadosLocalStorage);
      atualizarListaRequisicoes();
    }
  }


// Removido variavel let listaJSON = []; ja tinha sido instanciado outras vezes

// Estas funcoes estao na pagina forEach,
// depois voce organiza o código da maneira que achar melhor
// removido   carregarDadosDoLocalStorage();
