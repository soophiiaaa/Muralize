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
<<<<<<< HEAD
  document.getElementById("role-selection").style.display = "block";
  document.getElementById("formulario").style.display = "none";
=======
  window.location.href='home.html'
>>>>>>> b0ab4a305d68255935965e44c22cdb70d63f22fc
}

window.onload = function () {
  const tipo = getQueryParam("tipo"); // "login" ou "aluno"/"professor"
  const usuario = getQueryParam("usuario"); // "aluno" ou "professor"

<<<<<<< HEAD
      if (tipo === "login") {
        mostrarLogin();
        if (usuario) localStorage.setItem("tipoUsuario", usuario);
      } else if (tipo === "aluno" || tipo === "professor") {
        selecionar(tipo);
      } else {
        voltarSelecao();
      }
    };

    
=======
  if (tipo === "login") {
    mostrarLogin();
    if (usuario) localStorage.setItem("tipoUsuario", usuario);
  } else if (tipo === "aluno" || tipo === "professor") {
    selecionar(tipo);
  } else {
    voltarSelecao();
  }
};

function enviarFormulario(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const tipoUsuario = localStorage.getItem("tipoUsuario");

  if (!tipoUsuario) {
    alert("Por favor, selecione se você é aluno ou professor.");
    return;
  }

  const botaoTexto = document.getElementById("botao-formulario").textContent;
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  // Validação email simples
  const emailValido = emailInput.value.trim().match(/^\S+@\S+\.\S+$/);

  if (botaoTexto === "CADASTRAR") {
    // Cadastro: nome, email e senha obrigatórios
    if (!nomeInput.value.trim()) {
      alert("Por favor, preencha o nome completo.");
      nomeInput.focus();
      return;
    }
    if (!emailInput.value.trim() || !emailValido) {
      alert("Por favor, insira um e-mail válido.");
      emailInput.focus();
      return;
    }
    if (!senhaInput.value.trim()) {
      alert("Por favor, preencha a senha.");
      senhaInput.focus();
      return;
    }

    // Se passou nas validações, redireciona
    if (tipoUsuario === "aluno") {
      window.location.href = "student.html";
    } else if (tipoUsuario === "professor") {
      window.location.href = "teacher.html";
    }
  } else {
    // Login: email e senha obrigatórios
    if (!emailInput.value.trim() || !emailValido) {
      alert("Por favor, insira um e-mail válido.");
      emailInput.focus();
      return;
    }
    if (!senhaInput.value.trim()) {
      alert("Por favor, preencha a senha.");
      senhaInput.focus();
      return;
    }

    // Redireciona após login
    if (tipoUsuario === "aluno") {
      window.location.href = "student.html";
    } else if (tipoUsuario === "professor") {
      window.location.href = "teacher.html";
    }
  }
}
>>>>>>> b0ab4a305d68255935965e44c22cdb70d63f22fc
