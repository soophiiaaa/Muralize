const btnEntrar = document.getElementById('entrar');
const btnCadastrar = document.getElementById('cadastrar');
const overlay = document.getElementById('overlay');
let tipoAcao = ""; // login ou cadastro

btnEntrar.addEventListener('click', () => {
  tipoAcao = "login";
  overlay.style.display = "flex";
});

btnCadastrar.addEventListener('click', () => {
  tipoAcao = "cadastro";
  overlay.style.display = "flex";
});

document.getElementById('btn-voltar').addEventListener('click', () => {
  overlay.style.display = "none";
});

document.getElementById('select-aluno').addEventListener('click', () => {
  redirecionarComTipo("aluno");
});

document.getElementById('select-professor').addEventListener('click', () => {
  redirecionarComTipo("professor");
});

function redirecionarComTipo(tipoUsuario) {
  const url = tipoAcao === "login"
    ? `register.html?tipo=login&usuario=${tipoUsuario}`
    : `register.html?tipo=${tipoUsuario}`;
  window.location.href = url;
}

// Animação on scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);