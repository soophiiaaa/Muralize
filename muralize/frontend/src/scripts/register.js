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
  document.getElementById("role-selection").style.display = "block";
  document.getElementById("formulario").style.display = "none";
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
    };

    
