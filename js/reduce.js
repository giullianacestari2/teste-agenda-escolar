let btnTotal = document.querySelector("#totalBotao")

btnTotal.addEventListener("click", exibirTotal)


// Função para exibir o total de requisições usando o método reduce
function exibirTotal() {
  const totalValor = document.getElementById('totalValor');
  const totalResultado = document.getElementById('totalResultado');
  const totalRequisicoes = listaJSON.reduce((total, requisicao) => total + 1, 0);
  totalValor.textContent = totalRequisicoes;
  totalResultado.style.display = 'block'; // Exibe o resultado
}