  // Função para exibir o total de requisições
  function exibirTotal() {
    const totalValor = document.getElementById('totalValor');
    const totalRequisicoes = listaJSON.reduce((total, requisicao) => total + 1, 0);
    totalValor.textContent = totalRequisicoes;
    totalResultado.style.display = 'block'; // Exibe o resultado
}