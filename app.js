// Criando array para armazenar os nomes dos participantes.
participantesSorteio = [];

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
    participantesSorteio.push(amigoInserido);
  }

  // Limpando o input
  document.getElementById(`amigo`).innerHTML=``;
}

