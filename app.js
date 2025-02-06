// Criando array para armazenar os nomes dos participantes.
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
    li.textContent = amigosSorteio[i];
    ul.appendChild(li);
  }
}