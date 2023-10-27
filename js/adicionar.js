let btnAdicionar = document.querySelector("#adicionar-licao")

btnAdicionar.addEventListener("click", adicionarRequisicao)


// Função para adicionar uma nova requisição à lista
function adicionarRequisicao() {
    const disciplinaInput = document.getElementById('disciplina');
    const descricaoInput = document.getElementById('descricao');
    const dataInput = document.getElementById('dataDeConclusao');
    const feitoInput = false; // Defina o valor padrão como "Não feito"
    const progressoInput = ""; // Defina o valor padrão como vazio


    const novoItem = {
        "disciplina": disciplinaInput.value,
        "descricao": descricaoInput.value,
        "dataDeConclusao": dataInput.value,
        "feito": feitoInput,
        "progresso": progressoInput
    };

    //Adicionado a funcao de salvar no LOCALSTORAGE
     salvarDadosNoLocalStorage(novoItem);

    // Limpa os campos do formulário
    disciplinaInput.value = '';
    descricaoInput.value = '';
    dataInput.value = '';
    feitoInput.value = '';

    // Atualiza a lista de requisições na tabela da interface
    atualizarListaRequisicoes();

    console.table(buscarListaLocalStorage); // Exibe a lista JSON atualizada no console
}

//Este metodo esta salvando um item no localStorage
function salvarDadosNoLocalStorage(novoItem) {
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
    // inserimos o novo item dentro do array
    transformandoDeStringParaListagem.push(novoItem)

// Salve a lista atualizada de volta no localStorage,
// sendo assim sempre mantendo o localstorage atualizado para a busca
    localStorage.setItem('listaJSON', JSON.stringify(transformandoDeStringParaListagem));
    return novoItem
}
