let btnOrdenar = document.querySelector("#ordenarBotao")

btnOrdenar.addEventListener("click", ordenarPorData)


// Função para ordenar a lista por data

// Nao esta funcionando porque a funcao buscarListaLocalStorage()
// esta buscando todos os dados novamente e nao a lista que foi ordenada
// algo se pensar em melhorar
function ordenarPorData() {
  listaJSON.sort((a, b) => new Date(a.dataDeConclusao) - new Date(b.dataDeConclusao));
  atualizarListaRequisicoes();
}
