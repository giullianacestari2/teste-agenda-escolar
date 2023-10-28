let btnTotal = document.querySelector("#totalBotao")

btnTotal.addEventListener("click", exibirTotal)

// Função para exibir o total de requisições excluindo as com classe "finalizado"
function exibirTotal() {
  const totalValor = document.getElementById('totalValor');
  const totalResultado = document.getElementById('totalResultado');

  const totalRequisicoes = listaJSON.reduce((total, requisicao) => {
    if (!requisicao.feito) {
      return total + 1;
    }
    return total;
  }, 0);

  totalValor.textContent = totalRequisicoes;
  totalResultado.style.display = 'block'; // Exibe o resultado
}
