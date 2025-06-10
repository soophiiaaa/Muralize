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
  window.location.href = 'home.html'
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

function enviarCadastro(nome, email, senha, tipoUsuario) {
  let url = '';
  if (tipoUsuario === 'aluno') {
    url = 'http://localhost:3000/alunos';
  } else if (tipoUsuario === 'professor') {
    url = 'http://localhost:3000/professores';
  } else {
    alert('Tipo de usuário inválido.');
    return;
  }

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, senha })
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => { throw new Error(data.error || 'Erro ao cadastrar usuário'); });
      }
      return response.json();
    })
    .then(data => {
      alert('Cadastro realizado com sucesso!');
      if (tipoUsuario === 'aluno') {
        window.location.href = 'student.html';
      } else {
        window.location.href = 'teacher.html';
      }
    })
    .catch(error => {
      alert(error.message);
    });
}

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
    if (!senhaInput.value.trim() || senhaInput.value.length < 6) {
      alert("Por favor, preencha a senha com pelo menos 6 caracteres.");
      senhaInput.focus();
      return;
    }

    // Chama a função de cadastro
    enviarCadastro(nomeInput.value.trim(), emailInput.value.trim(), senhaInput.value, tipoUsuario);
    return;
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
