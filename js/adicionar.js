let btnAdicionar = document.querySelector("#adicionar-licao")

btnAdicionar.addEventListener("click", adicionarRequisicao)


// Função para adicionar uma nova requisição à lista
function adicionarRequisicao() {
  const disciplinaInput = document.getElementById('disciplina');
  const descricaoInput = document.getElementById('descricao');
  const dataInput = document.getElementById('dataDeConclusao');
  const feitoInput = false; // Defina o valor padrão como "Não feito"
  const progressoInput = "olá"; // Defina o valor padrão como vazio


  const novoItem = {
    "disciplina": disciplinaInput.value,
    "descricao": descricaoInput.value,
    "dataDeConclusao": dataInput.value,
    "feito": feitoInput,
    "progresso": progressoInput
  };

  listaJSON.push(novoItem);

  // Limpa os campos do formulário
  disciplinaInput.value = '';
  descricaoInput.value = '';
  dataInput.value = '';
  feitoInput.value = '';


  // Atualiza a lista de requisições na tabela da interface
  atualizarListaRequisicoes();



  }