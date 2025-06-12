const params = new URLSearchParams(window.location.search);
const nome = params.get('nome') || 'Turma';
const ano = params.get('ano') || '';
document.getElementById('tituloTurma').textContent = `${nome} ${ano}`;
function mostrarSecao(secao) {
  const formAtividade = document.getElementById('formAtividadeContainer');
  const botaoCriar = document.getElementById('botaoCriarContainer');
  const listaAtividades = document.getElementById('atividadesLista');
  const remote = document.getElementById('secao-remote');

  if (secao === 'atividades') {
    // Mostrar botão de criar atividades
    botaoCriar.classList.remove('escondido');
    listaAtividades.classList.remove('escondido');
    formAtividade.classList.add('escondido');

    // Esconder remote
    remote.classList.add('escondido');
  } else if (secao === 'remote') {
    // Mostrar remote
    remote.classList.remove('escondido');

    // Esconder tudo das atividades
    formAtividade.classList.add('escondido');
    botaoCriar.classList.add('escondido');
    listaAtividades.classList.add('escondido');
  }
}

function abrirFormularioAtividade() {
  document.getElementById('formAtividadeContainer').classList.remove('escondido');
  document.getElementById('botaoCriarContainer').classList.add('escondido');
  document.getElementById('menuInferior').classList.add('escondido');
}

function criarAtividade() {
  const tipo = document.getElementById('tipoAtividade').value.trim();
  const nome = document.getElementById('nomeAtividade').value.trim();
  const data = document.getElementById('dataEntrega').value;
  const descricao = document.getElementById('descricao').value.trim();

  if (!tipo || !nome || !data) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const card = document.createElement('div');
  card.className = 'quadro';
  card.innerHTML = `
    <strong>${tipo}: ${nome}</strong><br>
    <em>Entrega:</em> ${data}<br>
    <p>${descricao}</p>
  `;
  document.getElementById('atividadesLista').appendChild(card);

  // Resetar campos
  document.getElementById('tipoAtividade').value = '';
  document.getElementById('nomeAtividade').value = '';
  document.getElementById('dataEntrega').value = '';
  document.getElementById('descricao').value = '';

  // Voltar para o botão principal
  document.getElementById('formAtividadeContainer').classList.add('escondido');
  document.getElementById('botaoCriarContainer').classList.remove('escondido');
  document.getElementById('menuInferior').classList.remove('escondido');
}

function enviarMensagem() {
  const mensagem = document.getElementById('mensagem').value.trim();
  if (!mensagem) return;

  const chat = document.getElementById('chatBox');
  const msg = document.createElement('div');
  msg.textContent = mensagem;
  chat.appendChild(msg);
  document.getElementById('mensagem').value = '';
  chat.scrollTop = chat.scrollHeight;
}
