/*
  Dados do cardápio. Para mudar o site, edite só este arquivo.

  nome   título do prato
  desc   descrição curta
  fotos  nomes dos arquivos em fotos/, sem ".jpg". A primeira aparece na lista.
  foco   altura do corte da foto na lista: 0 = topo, 50 = meio, 100 = base
*/
window.CARDAPIO = [
  {
    id: "sopas",
    nome: "Sopas",
    chamada: "Para começar devagar, de colher na mão.",
    pratos: [
      { nome: "Caldo Verde", desc: "Caldo cremoso com tiras de couve e rodelas de calabresa, servido com torradas de ervas.", fotos: ["caldo-verde"], foco: 50 },
      { nome: "Creme de Abóbora com Carne-Seca", desc: "Creme liso de abóbora, finalizado com carne-seca desfiada e salsinha.", fotos: ["creme-abobora"], foco: 50 }
    ]
  },
  {
    id: "massas",
    nome: "Massas",
    chamada: "Do ragu de domingo ao molho cremoso de jantar a dois.",
    pratos: [
      { nome: "Fusilli à Bolonhesa", desc: "Parafuso com molho de tomate e carne moída, queijo ralado e manjericão fresco.", fotos: ["fusilli-bolonhesa"], foco: 70 },
      { nome: "Conchiglioni Recheados ao Ragu", desc: "Conchas grandes com recheio cremoso sobre ragu de carne, com queijo ralado e salsinha.", fotos: ["conchiglioni"], foco: 50 },
      { nome: "Lasanha à Bolonhesa", desc: "Camadas de massa e molho de carne, com queijo gratinado e folhas de manjericão.", fotos: ["lasanha"], foco: 50 },
      { nome: "Nhoque ao Ragu", desc: "Nhoque macio coberto por molho de tomate com carne moída e manjericão.", fotos: ["nhoque-ragu"], foco: 50 },
      { nome: "Nhoque Rústico com Tomate e Parmesão", desc: "Nhoque dourado com ragu de carne, pedaços de tomate e bastante queijo ralado.", fotos: ["nhoque-rustico"], foco: 78 },
      { nome: "Nhoque Cremoso com Camarão", desc: "Nhoque em molho branco com camarões, finalizado com queijo ralado e salsinha.", fotos: ["nhoque-camarao-1", "nhoque-camarao-2"], foco: 50 },
      { nome: "Fettuccine ao Alho e Ervas", desc: "Fettuccine salteado no alho com ervas frescas e pimenta-do-reino.", fotos: ["fettuccine-alho"], foco: 64 },
      { nome: "Fettuccine ao Pesto com Tomates Assados", desc: "Fettuccine envolvido em pesto, com tomates assados e folhas de manjericão.", fotos: ["fettuccine-pesto"], foco: 43 },
      { nome: "Fettuccine Cremoso de Frutos do Mar", desc: "Fettuccine em molho branco com camarões, lulas e mexilhões, salpicado de ervas.", fotos: ["fettuccine-frutos-do-mar"], foco: 100 },
      { nome: "Pappardelle ao Sugo com Camarão", desc: "Fitas largas de massa com molho de tomate e camarões, queijo ralado e manjericão.", fotos: ["pappardelle-camarao"], foco: 45 }
    ]
  },
  {
    id: "risotos",
    nome: "Risotos e Arrozes",
    chamada: "Arroz cremoso e o sabor do mar.",
    pratos: [
      { nome: "Arroz Cremoso de Frutos do Mar", desc: "Arroz amarelo e cremoso com camarões, lulas e mexilhões, salpicado de ervas.", fotos: ["arroz-frutos-do-mar"], foco: 100 },
      { nome: "Risoto de Frutos do Mar com Limão", desc: "Risoto com camarões, lulas e mexilhões, finalizado com pesto, limão-siciliano e manjericão.", fotos: ["risoto-frutos-do-mar"], foco: 40 },
      { nome: "Risoto de Camarão", desc: "Risoto cremoso com muitos camarões, ervas picadas e folhas de coentro.", fotos: ["risoto-camarao"], foco: 80 }
    ]
  },
  {
    id: "carnes",
    nome: "Carnes",
    chamada: "Filé no ponto, molho bem feito e acompanhamento caprichado.",
    pratos: [
      { nome: "Filé com Champignon e Risoto de Limão", desc: "Filé ao molho escuro com champignons sobre risoto branco, com raspas de limão.", fotos: ["file-champignon-4", "file-champignon-1", "file-champignon-2", "file-champignon-3"], foco: 100 },
      { nome: "Filé com Champignon, Arroz Cremoso e Batatas Rústicas", desc: "Filé alto ao molho de champignon sobre arroz cremoso, com batatas assadas em gomos.", fotos: ["file-batatas"], foco: 70 },
      { nome: "Filé ao Molho sobre Espaguete ao Pesto", desc: "Filé com molho escuro sobre espaguete com pesto, finalizado com manjericão.", fotos: ["file-espaguete-1", "file-espaguete-2"], foco: 50 },
      { nome: "Medalhões com Purê Aveludado e Aspargos", desc: "Medalhões de filé com champignons e alecrim, purê bem liso e aspargos com alho crocante.", fotos: ["medalhoes"], foco: 55 },
      { nome: "Filé com Purê, Vagens e Tomates Assados", desc: "Filé com alho assado e alecrim sobre purê de batata, com vagens e tomates assados.", fotos: ["file-pure-vagens"], foco: 55 },
      { nome: "Bisteca Suína com Purê de Maçã e Batatas", desc: "Bisteca assada com alecrim, purê de maçã e batatas cozidas com ervas.", fotos: ["bisteca"], foco: 55 }
    ]
  },
  {
    id: "peixes",
    nome: "Peixes",
    chamada: "Salmão dourado na frente, e peixes leves logo atrás.",
    pratos: [
      { nome: "Salmão com Purê de Abóbora e Legumes", desc: "Salmão dourado com purê de abóbora, cenouras e brócolis no vapor.", fotos: ["salmao-abobora-1", "salmao-abobora-2"], foco: 70 },
      { nome: "Salmão com Risoto ao Maracujá", desc: "Salmão dourado sobre risoto cremoso, com molho de maracujá e coentro.", fotos: ["salmao-maracuja"], foco: 55 },
      { nome: "Salmão com Risoto e Redução Balsâmica", desc: "Salmão glaceado sobre risoto, com redução balsâmica, cebolinha e raspas de limão.", fotos: ["salmao-balsamico"], foco: 100 },
      { nome: "Salmão Hasselback com Risoto de Champignon", desc: "Salmão em fatias recheadas com ervas sobre risoto de champignon, com azeite de ervas.", fotos: ["salmao-hasselback"], foco: 32 },
      { nome: "Salmão com Fettuccine ao Pesto", desc: "Salmão dourado sobre fettuccine ao pesto, com tomates assados e coentro.", fotos: ["salmao-pesto"], foco: 75 },
      { nome: "Salmão com Espaguete e Alcaparras", desc: "Salmão dourado ao lado de espaguete com alcaparras e coentro fresco.", fotos: ["salmao-alcaparras"], foco: 50 },
      { nome: "Filé de Peixe com Azeitonas e Arroz Cremoso", desc: "Filé assado com ervas e azeitonas verdes sobre arroz cremoso com champignons e azeite.", fotos: ["peixe-azeitonas"], foco: 55 },
      { nome: "Peixe Grelhado com Camarões, Arroz Dourado e Abacate", desc: "Filé grelhado com camarões inteiros, arroz amarelo e salada de abacate com tomatinhos.", fotos: ["peixe-camaroes"], foco: 43 },
      { nome: "Peixe Grelhado com Champignon e Purê de Abóbora", desc: "Filé dourado com champignons, purê de abóbora, cenouras e brócolis.", fotos: ["peixe-champignon"], foco: 55 },
      { nome: "Empanado Crocante com Purê de Abóbora", desc: "Filé empanado e dourado com purê de abóbora, cenouras e brócolis.", fotos: ["empanado-abobora"], foco: 50 },
      { nome: "Empanado de Sementes com Purê e Beterraba", desc: "Filés com crosta de sementes, purê de abóbora, beterraba ralada e cenouras.", fotos: ["empanado-sementes"], foco: 55 },
      { nome: "Empanado com Batata-Doce e Molho Agridoce", desc: "Filé empanado com fios de molho agridoce sobre batata-doce assada e ervas.", fotos: ["empanado-batata-doce"], foco: 75 }
    ]
  },
  {
    id: "wok",
    nome: "Do Wok",
    chamada: "Fogo alto, legumes coloridos e molho brilhante.",
    pratos: [
      { nome: "Yakisoba de Frango", desc: "Macarrão salteado com cubos de frango, brócolis, cenoura e repolho roxo.", fotos: ["yakisoba-frango"], foco: 64 },
      { nome: "Macarrão Salteado com Carne e Legumes", desc: "Macarrão ondulado salteado com carne em cubos, brócolis, cenoura e repolho roxo.", fotos: ["macarrao-carne"], foco: 57 }
    ]
  },
  {
    id: "dividir",
    nome: "Para Dividir",
    chamada: "Tudo na mesa, cada um monta o seu.",
    pratos: [
      { nome: "Noite Mexicana com Tortilhas e Nachos", desc: "Chili de carne com feijão, guacamole, tortilhas, nachos, salada e vinagrete.", fotos: ["noite-mexicana"], foco: 37 },
      { nome: "Tacos com Chili e Guacamole", desc: "Tacos crocantes para montar com chili de carne e feijão, guacamole e alface.", fotos: ["tacos-1", "tacos-2"], foco: 43 },
      { nome: "Fondue no Pão", desc: "Queijo cremoso servido dentro do pão italiano, com cubos de carne, molho escuro e uvas.", fotos: ["fondue"], foco: 50 }
    ]
  },
  {
    id: "lanches",
    nome: "Lanches e Manhãs",
    chamada: "Para quando a fome chega sem hora marcada.",
    pratos: [
      { nome: "Cheeseburger Clássico", desc: "Hambúrguer com queijo, tomate e alface no pão tostado na chapa.", fotos: ["cheeseburger"], foco: 50 },
      { nome: "Hambúrguer de Frango", desc: "Hambúrguer de frango com alface e molho de queijo no pão com gergelim.", fotos: ["hamburguer-frango"], foco: 25 },
      { nome: "Toast de Abacate com Ovo", desc: "Pão tostado com abacate amassado, tomate e ovo frito com orégano.", fotos: ["toast-abacate"], foco: 37 },
      { nome: "Omelete de Tomate e Manjericão", desc: "Omelete dourada recheada com tomate, finalizada com manjericão e orégano.", fotos: ["omelete"], foco: 37 }
    ]
  },
  {
    id: "sobremesa",
    nome: "Sobremesa",
    chamada: "O final feliz.",
    pratos: [
      { nome: "Maçã Assada com Sorvete, Mel e Canela", desc: "Maçã assada com sorvete de creme, mel, canela e crocante dourado.", fotos: ["maca-assada-1", "maca-assada-2"], foco: 50 }
    ]
  }
];
