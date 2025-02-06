// Criando o array para armazenar os nomes dos participantes.
amigosSorteio = [];

// Função para adicionar amigos a lista.
function adicionarAmigo() {
  // Verificando o input que contem o nome do amigo.
  let entradaUsuario = document.getElementById(`amigo`);
  let amigoInserido = entradaUsuario.value;
  // Verificando se o valor de entrada esta vazio.
  if (amigoInserido == ``) {
    alert(`Por favor, insira um nome.`);
  }
  else {
    amigosSorteio.push(amigoInserido);
  }
  // Atualizando a lista.
  atualizarAmigo();
  // Limpando o input.
  entradaUsuario.value = ``;
}

// Função para atualizar a lista.
function atualizarAmigo() {
  // Selecionando a lista.
  let ul = document.getElementById(`listaAmigos`);
  // Esvaziando a lista para evitar duplicatas.
  ul.innerHTML = ``;
  // Loop para criar os elementos "li" e inserir todos os nomes existentes no array na lista.
  for (let i = 0; i < amigosSorteio.length; i++) {
    let li = document.createElement(`li`);
    li.textContent = `${i+1}º ${amigosSorteio[i]}`;
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  // Selecionando a lista do resultado.
  let ul = document.getElementById(`resultado`);
  // Verificando se a lista de amigos esta vazia.
  if (amigosSorteio.length == 0) {
    // Esvaziando a lista para apagar o nome do sorteado, caso o botao seja clicado sem que haja alguem na lista.
    ul.innerHTML = ``;
    alert(`Por favor, adicione algum amigo na lista.`);
  }
  else {
    // Sorteando qual sera o amigo escolhido.
    let numeroAmigoSorteado = parseInt(Math.random() * amigosSorteio.length);
    // Esvaziando a lista para evitar duplicatas.
    ul.innerHTML = ``;
    // Criando o elemento "li" e inserindo o nome do amigo sorteado na lista de sorteados.
    let li = document.createElement(`li`);
    li.textContent = amigosSorteio[numeroAmigoSorteado];
    ul.appendChild(li);
    // Removendo amigo da lista.
    amigosSorteio.splice(numeroAmigoSorteado, 1);
    // Atualizando a antiga lista.
    atualizarAmigo();
  }
}