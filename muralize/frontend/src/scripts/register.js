// Função para ler parâmetros da URL
function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function selecionar(tipo) {
  document.getElementById("role-selection").style.display = "none";
  document.getElementById("formulario").style.display = "block";

  document.getElementById("titulo-formulario").textContent =
    "Criar uma conta - " + (tipo === "aluno" ? "Aluno" : "Professor");
  document.getElementById("botao-formulario").textContent = "CADASTRAR";
  document.getElementById("campo-nome").style.display = "block";

  localStorage.setItem("tipoUsuario", tipo);
}

function mostrarLogin() {
  document.getElementById("role-selection").style.display = "none";
  document.getElementById("formulario").style.display = "block";

  document.getElementById("titulo-formulario").textContent = "Login";
  document.getElementById("botao-formulario").textContent = "ENTRAR";
  document.getElementById("campo-nome").style.display = "none";

  localStorage.setItem("tipoUsuario", "login");
}

function voltarSelecao() {
  window.location.href = 'home.html';
}

function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const tipoUsuario = localStorage.getItem("tipoUsuario");

  if (!tipoUsuario || tipoUsuario === "login") {
    alert("Por favor, selecione se você é aluno ou professor.");
    return;
  }

  const botao = document.getElementById("botao-formulario");
  if (botao.textContent === "CADASTRAR") {
    // Redireciona após cadastro
    if (tipoUsuario === "aluno") {
      window.location.href = "student.html";
    } else if (tipoUsuario === "professor") {
      window.location.href = "teacher.html";
    }
  } else {
    // Redireciona após login
    if (tipoUsuario === "aluno") {
      window.location.href = "student.html";
    } else if (tipoUsuario === "professor") {
      window.location.href = "teacher.html";
    }
  }
}

window.onload = function () {
  const tipo = getQueryParam("tipo"); // "login" ou "aluno"/"professor"
  const usuario = getQueryParam("usuario"); // "aluno" ou "professor"

  if (tipo === "login") {
    mostrarLogin();
    if (usuario) localStorage.setItem("tipoUsuario", usuario);
  } else if (tipo === "aluno" || tipo === "professor") {
    selecionar(tipo);
  } else {
    voltarSelecao();
  }

  // Adiciona o listener para envio do formulário
  const form = document.getElementById("formulario");
  if (form && form.tagName === "FORM") {
    form.addEventListener("submit", enviarFormulario);
  } else {
    // O formulário pode estar dentro da div "formulario"
    const realForm = document.querySelector("#formulario form");
    if (realForm) {
      realForm.addEventListener("submit", enviarFormulario);
    }
  }
};
