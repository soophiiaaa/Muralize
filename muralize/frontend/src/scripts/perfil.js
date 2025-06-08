document.querySelector('#menu-perfil button:first-child').addEventListener('click', () => {
  abrirModalPerfil();
  document.getElementById("menu-perfil").style.display = "none";
});

function abrirModalPerfil() {
  document.getElementById("modal-perfil").style.display = "flex";
  document.getElementById("input-nome").value = localStorage.getItem("nomeUsuario") || "";
  document.getElementById("input-senha").value = "";
}

function fecharModalPerfil() {
  document.getElementById("modal-perfil").style.display = "none";
}

function salvarPerfil() {
  const novoNome = document.getElementById("input-nome").value;
  const novaSenha = document.getElementById("input-senha").value;
  const novaFoto = document.getElementById("input-foto").files[0];

  if (novoNome) {
    localStorage.setItem("nomeUsuario", novoNome);
  }

  if (novaSenha) {
    localStorage.setItem("senhaUsuario", novaSenha);
  }

  if (novaFoto) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64 = e.target.result;
      localStorage.setItem("fotoUsuario", base64);
      document.querySelector("#perfil img").src = base64;
    };
    reader.readAsDataURL(novaFoto);
  }

  alert("Perfil atualizado!");
  fecharModalPerfil();
}

window.addEventListener("load", () => {
  const fotoSalva = localStorage.getItem("fotoUsuario");
  if (fotoSalva) {
    document.querySelector("#perfil img").src = fotoSalva;
  }
});

document.getElementById("btn-sair").addEventListener("click", ()=>{
    window.location.href="../pages/home.html"
});