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

  // Pega os valores dos campos do formulário
  const nome = document.getElementById("nome")?.value;
  const email = document.getElementById("email")?.value;
  const senha = document.getElementById("senha")?.value;

  const botao = document.getElementById("botao-formulario");

  if (botao.textContent === "ENTRAR") {
    // Lógica de login
    const dados = { email, senha };

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    })
      .then(response => {
        if (response.ok) return response.json();
        else throw new Error('Login inválido');
      })
      .then(data => {
        // Exemplo: { tipo: 'aluno', id: 123, nome: 'Fulano' }
        localStorage.setItem('userId', data.id);
        localStorage.setItem('userTipo', data.tipo);
        localStorage.setItem('userNome', data.nome);

        if (data.tipo === 'aluno') {
          window.location.href = 'student.html';
        } else {
          window.location.href = 'teacher.html';
        }
      })
      .catch(err => {
        console.error(err);
        alert('Falha no login: ' + err.message);
      });

    return; // Impede execução do bloco de cadastro
  }

  // Cadastro
  if (!tipoUsuario || tipoUsuario === "login") {
    alert("Por favor, selecione se você é aluno ou professor.");
    return;
  }

  const dados = { nome, email, senha };
  const url = (tipoUsuario === 'aluno' ? 'http://localhost:3000/alunos' : 'http://localhost:3000/professores');

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
    .then(response => {
      if (response.ok) {
        alert(tipoUsuario + ' cadastrado com sucesso!');
        if (tipoUsuario === "aluno") {
          window.location.href = "student.html";
        } else if (tipoUsuario === "professor") {
          window.location.href = "teacher.html";
        }
      } else {
        return response.json().then(err => {
          throw new Error(err.error || 'Erro ao cadastrar');
        });
      }
    })
    .catch(err => {
      console.error('Erro no cadastro:', err);
      alert("Erro no cadastro: " + err.message);
    });
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
    const realForm = document.querySelector("#formulario form");
    if (realForm) {
      realForm.addEventListener("submit", enviarFormulario);
    }
  }
};