    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome') || 'Turma';
    const ano = params.get('ano') || '';
    document.getElementById('tituloTurma').textContent = `${nome} ${ano}`;

    function toggleDropdown() {
      const menu = document.getElementById('dropdownMenu');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    function adicionarQuadro(titulo) {
      const area = document.getElementById('areaQuadros');
      const quadro = document.createElement('div');
      quadro.className = 'quadro';
      quadro.innerHTML = `<h3>${titulo}</h3><p>Conteúdo da ${titulo}</p>`;
      area.appendChild(quadro);
      document.getElementById('dropdownMenu').style.display = 'none';
    }

    // Esconder menu se clicar fora
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('dropdownMenu');
      const botao = document.querySelector('.botao-mais');
      if (!menu.contains(e.target) && !botao.contains(e.target)) {
        menu.style.display = 'none';
      }
    });