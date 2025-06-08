const maisBtn = document.getElementById('mais-btn');
const menuMais = document.getElementById('menu-mais');
const perfil = document.getElementById('perfil');
const menuPerfil = document.getElementById('menu-perfil');

maisBtn.addEventListener('click', () => {
  menuMais.style.display = menuMais.style.display === 'block' ? 'none' : 'block';
});

perfil.addEventListener('click', () => {
  menuPerfil.style.display = menuPerfil.style.display === 'block' ? 'none' : 'block';
});

function criarTurma() {
  const modal = document.getElementById('modal-criar-turma');
  modal.style.display = 'flex';
  menuMais.style.display = 'none';
}

document.getElementById('btn-cancelar-criacao').addEventListener('click', () => {
  const modal = document.getElementById('modal-criar-turma');
  // Fecha o modal
  modal.style.display = 'none';

  // Limpa os campos
  document.getElementById('input-nome').value = '';
  document.getElementById('input-ano').value = '';
});

window.addEventListener('click', function (e) {
  if (!maisBtn.contains(e.target) && !menuMais.contains(e.target)) {
    menuMais.style.display = 'none';
  }
  if (!perfil.contains(e.target) && !menuPerfil.contains(e.target)) {
    menuPerfil.style.display = 'none';
  }
});

document.getElementById('btn-confirmar-criacao').addEventListener('click', () => {
  const nome = document.getElementById('input-nome').value.trim();
  const ano = document.getElementById('input-ano').value.trim();
  const modal = document.getElementById('modal-criar-turma');

  if (!nome || !ano) {
    alert("Preencha todos os campos!");
    return;
  }

  const turma = document.createElement('div');
  turma.className = 'turma';
  turma.textContent = `${nome} - ${ano}`;
  turma.onclick = () => alert(`Entrando na turma ${nome}...`);

  document.getElementById('turmas').appendChild(turma);

  // Fechar e limpar
  modal.style.display = 'none';
  document.getElementById('input-nome').value = '';
  document.getElementById('input-ano').value = '';
});

// Fecha modal se clicar fora
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-criar-turma');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



