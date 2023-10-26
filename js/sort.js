// Função para ordenar a lista por data
function ordenarPorData() {
  listaJSON.sort((a, b) => new Date(a.dataDeConclusao) - new Date(b.dataDeConclusao));
  atualizarListaRequisicoes();
}