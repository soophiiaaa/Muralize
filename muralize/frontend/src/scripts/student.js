const maisBtn = document.getElementById('mais-btn');
const menuMais = document.getElementById('menu-mais');
const perfil = document.getElementById('perfil');
const menuPerfil = document.getElementById('menu-perfil');

const btnInserirCodigo = document.getElementById('btn-inserir-codigo');
const modalInserirCodigo = document.getElementById('modal-inserir-codigo');
const btnConfirmarCodigo = document.getElementById('btn-confirmar-codigo');
const btnCancelarCodigo = document.getElementById('btn-cancelar-codigo');

maisBtn.addEventListener('click', () => {
  menuMais.style.display = menuMais.style.display === 'block' ? 'none' : 'block';
});

perfil.addEventListener('click', () => {
  menuPerfil.style.display = menuPerfil.style.display === 'block' ? 'none' : 'block';
});

btnInserirCodigo.addEventListener('click', () => {
  modalInserirCodigo.style.display = 'flex';
  menuMais.style.display = 'none';
});

btnCancelarCodigo.addEventListener('click', () => {
  modalInserirCodigo.style.display = 'none';
  document.getElementById('input-codigo').value = '';
});

btnConfirmarCodigo.addEventListener('click', () => {
  const codigo = document.getElementById('input-codigo').value.trim();

  if (!codigo) {
    alert('Por favor, digite o código da turma.');
    return;
  }

  alert('Integração com backend em desenvolvimento.\nCódigo inserido: ' + codigo);
  modalInserirCodigo.style.display = 'none';
  document.getElementById('input-codigo').value = '';
});

window.addEventListener('click', (e) => {
  if (!maisBtn.contains(e.target) && !menuMais.contains(e.target)) {
    menuMais.style.display = 'none';
  }
  if (!perfil.contains(e.target) && !menuPerfil.contains(e.target)) {
    menuPerfil.style.display = 'none';
  }

  // Fecha modal ao clicar fora da modal content
  if (e.target === modalInserirCodigo) {
    modalInserirCodigo.style.display = 'none';
    document.getElementById('input-codigo').value = '';
  }
});
