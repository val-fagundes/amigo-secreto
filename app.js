// Array para armazenar os nomes dos amigos
let amigos = [];

/**
 * Adiciona um amigo à lista se o nome for válido e não estiver duplicado.
 */
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Obtém o campo de entrada
    const nome = input.value.trim(); // Remove espaços extras do início e do fim

    // Verifica se o nome é válido
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Verifica se o nome já foi adicionado à lista
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);
    
    // Atualiza a lista exibida na tela
    atualizarLista();

    // Limpa o campo de entrada e foca nele para uma nova adição
    input.value = "";
    input.focus();
}

/**
 * Atualiza a exibição da lista de amigos na página.
 */
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array de amigos e cria um item de lista para cada um
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/**
 * Realiza o sorteio de um amigo aleatório na lista.
 */
function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio!");
        return;
    }

    // Gera um índice aleatório dentro do tamanho do array
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    // Exibe o resultado do sorteio
    exibirResultado(sorteado);
}

/**
 * Exibe o resultado do sorteio na página.
 */
function exibirResultado(sorteado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpa resultados anteriores

    // Cria um item de lista para exibir o nome sorteado
    const li = document.createElement("li");
    li.textContent = `Sorteado: ${sorteado}`;
    listaResultado.appendChild(li);
}
