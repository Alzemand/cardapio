(function () {
  "use strict";

  var grupos = window.CARDAPIO;
  var cardapio = document.getElementById("cardapio");
  var nav = document.getElementById("grupos");
  var detalhe = document.getElementById("detalhe");
  var detalheFoto = document.getElementById("detalhe-foto");
  var detalheGaleria = document.getElementById("detalhe-galeria");

  function criar(tag, classe, texto) {
    var el = document.createElement(tag);
    if (classe) el.className = classe;
    if (texto) el.textContent = texto;
    return el;
  }

  function caminho(foto, pequena) {
    return "fotos/" + foto + (pequena ? "-p" : "") + ".jpg";
  }

  function criarPrato(prato, grupo) {
    var item = criar("li");
    var botao = criar("button", "prato");
    botao.type = "button";

    var moldura = criar("span", "prato-foto");
    var img = criar("img");
    img.src = caminho(prato.fotos[0], true);
    img.alt = prato.nome;
    img.loading = "lazy";
    img.decoding = "async";
    img.width = 600;
    img.height = 600;
    img.style.objectPosition = "50% " + prato.foco + "%";
    moldura.appendChild(img);

    var texto = criar("span");
    texto.appendChild(criar("h3", "", prato.nome));
    texto.appendChild(criar("p", "", prato.desc));
    if (prato.fotos.length > 1) {
      texto.appendChild(criar("small", "", prato.fotos.length + " fotos"));
    }

    botao.appendChild(moldura);
    botao.appendChild(texto);
    botao.addEventListener("click", function () { abrir(prato, grupo); });
    item.appendChild(botao);
    return item;
  }

  var trocaAtual = 0;

  function mostrarFoto(prato, indice) {
    var foto = prato.fotos[indice];
    var token = ++trocaAtual;
    // Mostra já a miniatura (em cache) e troca pela grande quando carregar,
    // para nunca aparecer a foto do prato anterior.
    detalheFoto.src = caminho(foto, true);
    detalheFoto.alt = prato.nome;
    var grande = new Image();
    grande.onload = function () {
      if (token === trocaAtual) detalheFoto.src = grande.src;
    };
    grande.src = caminho(foto, false);
    Array.prototype.forEach.call(detalheGaleria.children, function (botao, i) {
      botao.setAttribute("aria-current", i === indice ? "true" : "false");
    });
  }

  function abrir(prato, grupo) {
    document.getElementById("detalhe-grupo").textContent = grupo.nome;
    document.getElementById("detalhe-nome").textContent = prato.nome;
    document.getElementById("detalhe-desc").textContent = prato.desc;

    detalheGaleria.textContent = "";
    if (prato.fotos.length > 1) {
      prato.fotos.forEach(function (foto, i) {
        var botao = criar("button");
        botao.type = "button";
        botao.setAttribute("aria-label", "Foto " + (i + 1) + " de " + prato.fotos.length);
        var mini = criar("img");
        mini.src = caminho(foto, true);
        mini.alt = "";
        botao.appendChild(mini);
        botao.addEventListener("click", function () { mostrarFoto(prato, i); });
        detalheGaleria.appendChild(botao);
      });
    }

    mostrarFoto(prato, 0);
    detalhe.showModal();
    detalhe.scrollTop = 0;
  }

  grupos.forEach(function (grupo) {
    var link = criar("a", "", grupo.nome);
    link.href = "#" + grupo.id;
    nav.appendChild(link);

    var secao = criar("section", "grupo");
    secao.id = grupo.id;
    var topo = criar("div", "grupo-topo");
    topo.appendChild(criar("h2", "", grupo.nome));
    topo.appendChild(criar("p", "", grupo.chamada));
    secao.appendChild(topo);

    var lista = criar("ul", "pratos");
    grupo.pratos.forEach(function (prato) {
      lista.appendChild(criarPrato(prato, grupo));
    });
    secao.appendChild(lista);
    cardapio.appendChild(secao);
  });

  document.getElementById("fechar").addEventListener("click", function () {
    detalhe.close();
  });

  // Um clique fora do conteúdo acerta o próprio <dialog>, ou seja, o fundo.
  detalhe.addEventListener("click", function (evento) {
    if (evento.target === detalhe) detalhe.close();
  });

  function marcarGrupo(id) {
    Array.prototype.forEach.call(nav.children, function (link) {
      var ativo = link.getAttribute("href") === "#" + id;
      link.setAttribute("aria-current", ativo ? "true" : "false");
      if (ativo) {
        nav.scrollTo({
          left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2,
          behavior: "auto"
        });
      }
    });
  }

  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) marcarGrupo(entrada.target.id);
      });
    }, { rootMargin: "-20% 0px -75% 0px" });

    Array.prototype.forEach.call(cardapio.querySelectorAll(".grupo"), function (secao) {
      observador.observe(secao);
    });
  }
  marcarGrupo(grupos[0].id);
})();
