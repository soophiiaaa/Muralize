// MENU E PERFIL
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

window.addEventListener('click', function (e) {
  if (!maisBtn.contains(e.target) && !menuMais.contains(e.target)) {
    menuMais.style.display = 'none';
  }
  if (!perfil.contains(e.target) && !menuPerfil.contains(e.target)) {
    menuPerfil.style.display = 'none';
  }
});

// ABRIR MODAL DE CRIAÇÃO
function criarTurma() {
  const modal = document.getElementById('modal-criar-turma');
  modal.style.display = 'flex';
  menuMais.style.display = 'none';
}

// CANCELAR CRIAÇÃO
document.getElementById('btn-cancelar-criacao').addEventListener('click', () => {
  const modal = document.getElementById('modal-criar-turma');
  modal.style.display = 'none';
  document.getElementById('input-nome').value = '';
  document.getElementById('input-ano').value = '';
});

// CONFIRMAR CRIAÇÃO DE TURMA
document.getElementById('btn-confirmar-criacao').addEventListener('click', () => {
  const nome = document.getElementById('input-nome').value.trim();
  const ano = document.getElementById('input-ano').value.trim();
  const modal = document.getElementById('modal-criar-turma');

  if (!nome || !ano) {
    alert("Preencha todos os campos!");
    return;
  }

  const idProfessor = localStorage.getItem('userId');
  const dados = { nome, ano, professorId: idProfessor };

  fetch('http://localhost:3000/turmas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
    .then(res => {
      if (!res.ok) throw new Error("Erro ao criar turma");
      return res.json();
    })
    .then(turma => {
      const div = document.createElement('div');
      div.className = 'turma';
      div.textContent = `${turma.nome} - ${turma.ano}`;
      div.onclick = () => {
        const url = `turma.html?nome=${encodeURIComponent(turma.nome)}&ano=${encodeURIComponent(turma.ano)}`;
        window.location.href = url;
      };
      document.getElementById('turmas').appendChild(div);

      modal.style.display = 'none';
      document.getElementById('input-nome').value = '';
      document.getElementById('input-ano').value = '';
    })
    .catch(err => {
      console.error(err);
      alert("Erro ao criar turma: " + err.message);
    });
});

// FECHAR MODAL SE CLICAR FORA
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-criar-turma');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// CARREGAR TURMAS DO PROFESSOR
window.addEventListener('DOMContentLoaded', () => {
  const idProfessor = localStorage.getItem('userId');
  fetch(`http://localhost:3000/turmas?professorId=${idProfessor}`)
    .then(res => res.json())
    .then(turmas => {
      const container = document.getElementById('turmas');
      turmas.forEach(turma => {
        const div = document.createElement('div');
        div.className = 'turma';
        div.textContent = `${turma.nome} - ${turma.ano}`;
        div.onclick = () => {
          window.location.href = `turma.html?nome=${encodeURIComponent(turma.nome)}&ano=${encodeURIComponent(turma.ano)}`;
        };
        container.appendChild(div);
      });
    })
    .catch(err => console.error('Erro ao buscar turmas:', err));
});