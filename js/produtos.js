/* ENCANTO DE NATAL - Catálogo de 50 produtos (imagens em img/produtos/) */

const produtos = [
  {
    id: 1,
    nome: "Árvore Pinheiro Clássica 1.80m",
    categoria: "arvores",
    preco: 329.90,
    descricao: "Pinheiro verde de galhos volumosos e base de apoio reforçada, o clássico que não pode faltar na sala.",
    imagem: "img/produtos/1.jpg"
  },
  {
    id: 2,
    nome: "Árvore Pinheiro Alpino 2.10m",
    categoria: "arvores",
    preco: 449.90,
    descricao: "Galhos em tom verde-azulado com efeito natural, fácil de montar e de guardar.",
    imagem: "img/produtos/2.jpg"
  },
  {
    id: 3,
    nome: "Árvore Pinheiro Imperial Premium 2.40m",
    categoria: "arvores",
    preco: 799.90,
    descricao: "Modelo super cheio com folhagem realista em várias texturas, ideal para espaços amplos.",
    imagem: "img/produtos/3.jpg"
  },
  {
    id: 4,
    nome: "Mini Árvore de Mesa com Base Rústica 60cm",
    categoria: "arvores",
    preco: 69.90,
    descricao: "Pequena e charmosa, com base em juta. Perfeita para balcões, mesas e escritórios.",
    imagem: "img/produtos/4.jpg"
  },
  {
    id: 5,
    nome: "Árvore Cone Verde Brilhante 1.20m",
    categoria: "arvores",
    preco: 189.90,
    descricao: "Design moderno em formato cone com fios verdes brilhantes. Decoração diferente e elegante.",
    imagem: "img/produtos/5.jpg"
  },
  {
    id: 6,
    nome: "Árvore Pinheiro Tradicional Verde 1.80m",
    categoria: "arvores",
    preco: 359.90,
    descricao: "Folhagem verde-escura densa com suporte metálico dobrável. Excelente custo-benefício.",
    imagem: "img/produtos/6.jpg"
  },
  {
    id: 7,
    nome: "Árvore Pinheiro Azulado Slim 1.50m",
    categoria: "arvores",
    preco: 279.90,
    descricao: "Tom verde-azulado delicado e formato esbelto, ótima para cantinhos e apartamentos.",
    imagem: "img/produtos/7.jpg"
  },
  {
    id: 8,
    nome: "Árvore Pinheiro Verde Compacta 90cm",
    categoria: "arvores",
    preco: 149.90,
    descricao: "Formato cheio e arredondado em tamanho compacto, ideal para mesas e aparadores.",
    imagem: "img/produtos/8.jpg"
  },
  {
    id: 9,
    nome: "Árvore Pinheiro Nevado 1.50m",
    categoria: "arvores",
    preco: 399.90,
    descricao: "Galhos com efeito neve nas pontas e base preta resistente, para um Natal de inverno.",
    imagem: "img/produtos/9.jpg"
  },
  {
    id: 10,
    nome: "Árvore Branca Neve 1.80m",
    categoria: "arvores",
    preco: 459.90,
    descricao: "Totalmente branca, traz um visual moderno e sofisticado para a decoração natalina.",
    imagem: "img/produtos/10.jpg"
  },
  {
    id: 11,
    nome: "Trio Decorativo Papai Noel Led e Placa Feliz Natal",
    categoria: "decoracao",
    preco: 119.90,
    descricao: "Dois Noéis vazados com luz interna aconchegante e placa 'Feliz Natal' em estilo recortado.",
    imagem: "img/produtos/11.jpg"
  },
  {
    id: 12,
    nome: "Bola Natalina Ouriço Vermelha com Glitter",
    categoria: "enfeites",
    preco: 24.90,
    descricao: "Enfeite diferenciado com textura em espinhos e brilho intenso para dar destaque à árvore.",
    imagem: "img/produtos/12.jpg"
  },
  {
    id: 13,
    nome: "Caixa de Música Árvore de Natal",
    categoria: "decoracao",
    preco: 139.90,
    descricao: "Árvore de Natal em resina sobre base de tambor, com detalhes pintados à mão.",
    imagem: "img/produtos/13.jpg"
  },
  {
    id: 14,
    nome: "Rena Dourada Sentada com Guirlanda",
    categoria: "decoracao",
    preco: 129.90,
    descricao: "Escultura em acabamento dourado com laço natalino. Perfeita para mesa de ceia e aparadores.",
    imagem: "img/produtos/14.jpg"
  },
  {
    id: 15,
    nome: "Trio de Renas Decorativas Vermelha, Verde e Branca",
    categoria: "decoracao",
    preco: 89.90,
    descricao: "Renas lisas e modernas em três cores que combinam com qualquer ambiente natalino.",
    imagem: "img/produtos/15.jpg"
  },
  {
    id: 16,
    nome: "Tubo com 3 Bolas Vermelhas Fosca e Brilho 10cm",
    categoria: "enfeites",
    preco: 39.90,
    descricao: "Bolas grandes inquebráveis em acabamentos variados, vendidas em tubo prático.",
    imagem: "img/produtos/16.jpg"
  },
  {
    id: 17,
    nome: "Papai Noel Escalando Árvore em Cerâmica",
    categoria: "decoracao",
    preco: 169.90,
    descricao: "Peça decorativa em cerâmica pintada à mão com Papai Noel e árvore cheia de estrelas.",
    imagem: "img/produtos/17.jpg"
  },
  {
    id: 18,
    nome: "Dupla de Ursinhos Natalinos com Cachecol",
    categoria: "decoracao",
    preco: 79.90,
    descricao: "Par de ursinhos fofos em resina com gorros e cachecóis, cada um segurando um pinheirinho.",
    imagem: "img/produtos/18.jpg"
  },
  {
    id: 19,
    nome: "Par de Mini Árvores Vermelhas Decorativas",
    categoria: "decoracao",
    preco: 49.90,
    descricao: "Árvores de madeira vermelha com estrela dourada, charmosas para enfeitar mesas e estantes.",
    imagem: "img/produtos/19.jpg"
  },
  {
    id: 20,
    nome: "Lanterna Natalina com Boneco de Neve",
    categoria: "decoracao",
    preco: 99.90,
    descricao: "Lanterna estilo vintage com cenário de boneco de neve e pinheiro dentro do globo.",
    imagem: "img/produtos/20.jpg"
  },
  {
    id: 21,
    nome: "Boneco de Neve Gorro e Cachecol Xadrez",
    categoria: "pelucias",
    preco: 59.90,
    descricao: "Boneco de pelúcia com cachecol listrado, suéter de tricô e gorro, muito charmoso.",
    imagem: "img/produtos/21.jpg"
  },
  {
    id: 22,
    nome: "Família de Bonecos de Neve Azul",
    categoria: "pelucias",
    preco: 149.90,
    descricao: "Trio de bonecos de neve com gorros e cachecóis azuis. Um presente que encanta.",
    imagem: "img/produtos/22.jpg"
  },
  {
    id: 23,
    nome: "Boneco de Neve com Cartola e Bengala Doce",
    categoria: "pelucias",
    preco: 74.90,
    descricao: "Boneco fofinho com cartola, gravata borboleta e bengala listrada.",
    imagem: "img/produtos/23.jpg"
  },
  {
    id: 24,
    nome: "Trio Telescópico Papai Noel, Rena e Boneco de Neve",
    categoria: "pelucias",
    preco: 189.90,
    descricao: "Bonecos em pé com pernas ajustáveis, ótimos para prateleiras, balcões e aparadores.",
    imagem: "img/produtos/24.jpg"
  },
  {
    id: 25,
    nome: "Pelúcia Biscoito de Gengibre Gigante",
    categoria: "pelucias",
    preco: 89.90,
    descricao: "Pelúcia macia em formato do clássico biscoito de gengibre com laço vermelho.",
    imagem: "img/produtos/25.jpg"
  },
  {
    id: 26,
    nome: "Urso de Pelúcia com Gorro de Papai Noel",
    categoria: "pelucias",
    preco: 54.90,
    descricao: "Ursinho de pelúcia com gorro e cachecol vermelho. Pode ser pendurado na árvore.",
    imagem: "img/produtos/26.jpg"
  },
  {
    id: 27,
    nome: "Boneca Biscoito de Gengibre com Laço",
    categoria: "pelucias",
    preco: 64.90,
    descricao: "Boneca de tecido com vestido vermelho e laçarote. Doce e perfeita para presentear.",
    imagem: "img/produtos/27.jpg"
  },
  {
    id: 28,
    nome: "Boneco de Neve Gorro Vermelho Lucky",
    categoria: "pelucias",
    preco: 49.90,
    descricao: "Boneco de pelúcia sentadinho com gorro pontudo vermelho e cachecol.",
    imagem: "img/produtos/28.jpg"
  },
  {
    id: 29,
    nome: "Cervo Decorativo Realista 70cm",
    categoria: "decoracao",
    preco: 249.90,
    descricao: "Cervo com pelagem felpuda e chifres detalhados, perfeito para jardim e sala natalina.",
    imagem: "img/produtos/29.jpg"
  },
  {
    id: 30,
    nome: "Rena de Pelúcia Marrom com Cachecol",
    categoria: "pelucias",
    preco: 44.90,
    descricao: "Pelúcia de rena com estampa de floco de neve, macia e ideal para as crianças.",
    imagem: "img/produtos/30.jpg"
  },
  {
    id: 31,
    nome: "Corça de Pelúcia com Laço Xadrez",
    categoria: "pelucias",
    preco: 119.90,
    descricao: "Delicada corça de pelúcia bege com laço xadrez no pescoço.",
    imagem: "img/produtos/31.jpg"
  },
  {
    id: 32,
    nome: "Rena de Pelúcia com Nariz Vermelho",
    categoria: "pelucias",
    preco: 69.90,
    descricao: "Pelúcia grande e macia, com chifres e nariz vermelho muito característico.",
    imagem: "img/produtos/32.jpg"
  },
  {
    id: 33,
    nome: "Pisca-Pisca 200 LEDs Branco Quente",
    categoria: "iluminacao",
    preco: 79.90,
    descricao: "Fio transparente com luz amarelada e aconchegante, ideal para árvore, janela e cortinas.",
    imagem: "img/produtos/33.jpg"
  },
  {
    id: 34,
    nome: "Pisca-Pisca 300 LEDs Colorido Fio Verde",
    categoria: "iluminacao",
    preco: 89.90,
    descricao: "Luzes coloridas com cabo verde escuro, que desaparece entre os galhos da árvore.",
    imagem: "img/produtos/34.jpg"
  },
  {
    id: 35,
    nome: "Pisca-Pisca 500 LEDs Branco Frio",
    categoria: "iluminacao",
    preco: 129.90,
    descricao: "Fio de luz LED branco frio com grande quantidade de pontos luminosos, efeito cintilante.",
    imagem: "img/produtos/35.jpg"
  },
  {
    id: 36,
    nome: "Pisca-Pisca 400 LEDs Colorido Cabo Verde",
    categoria: "iluminacao",
    preco: 99.90,
    descricao: "Luzes coloridas vibrantes com cabo verde e plug de tomada de fácil instalação.",
    imagem: "img/produtos/36.jpg"
  },
  {
    id: 37,
    nome: "Pisca-Pisca 200 LEDs Colorido Fio Transparente",
    categoria: "iluminacao",
    preco: 74.90,
    descricao: "Luzes multicoloridas com fio transparente e controlador de efeitos de piscar.",
    imagem: "img/produtos/37.jpg"
  },
  {
    id: 38,
    nome: "Cordão de Luz com 10 Globos de Natal",
    categoria: "iluminacao",
    preco: 59.90,
    descricao: "Globos transparentes com enfeites dentro, que criam uma atmosfera mágica.",
    imagem: "img/produtos/38.jpg"
  },
  {
    id: 39,
    nome: "Cordão de Luzes Tradicional 100 Lâmpadas",
    categoria: "iluminacao",
    preco: 69.90,
    descricao: "Fio com lâmpadas coloridas no estilo clássico. Decorativo e retrô.",
    imagem: "img/produtos/39.jpg"
  },
  {
    id: 40,
    nome: "Pisca-Pisca 600 LEDs Multicolorido Cabo Preto",
    categoria: "iluminacao",
    preco: 149.90,
    descricao: "Grande rolo de luzes multicoloridas para decorar árvores grandes e fachadas.",
    imagem: "img/produtos/40.jpg"
  },
  {
    id: 41,
    nome: "Varal de Mini Casacos Natalinos com Cordão Vermelho",
    categoria: "decoracao",
    preco: 29.90,
    descricao: "Cordão decorativo com mini enfeites de tecido, para cortinas, quadros e paredes.",
    imagem: "img/produtos/41.jpg"
  },
  {
    id: 42,
    nome: "Kit Enfeites de Árvore Vermelho com Ponteira 44 Peças",
    categoria: "enfeites",
    preco: 189.90,
    descricao: "Kit completo com bolas, ponteira em estrela e fio de contas, tudo na cor vermelha.",
    imagem: "img/produtos/42.jpg"
  },
  {
    id: 43,
    nome: "Papai Noel no Trenó com Rena Iluminado",
    categoria: "decoracao",
    preco: 899.90,
    descricao: "Conjunto de Papai Noel no trenó dourado puxado por rena, com luzes. Destaque absoluto.",
    imagem: "img/produtos/43.jpg"
  },
  {
    id: 44,
    nome: "Árvore de Natal de Mesa Decorada 45cm",
    categoria: "arvores",
    preco: 89.90,
    descricao: "Pequena árvore já decorada com laços prateados, flores e pinhas. Pronta para usar.",
    imagem: "img/produtos/44.jpg"
  },
  {
    id: 45,
    nome: "Pingentes Papai Noel Porta-Retrato (Par)",
    categoria: "enfeites",
    preco: 34.90,
    descricao: "Enfeites de Papai Noel com moldura para foto, uma lembrança carinhosa na árvore.",
    imagem: "img/produtos/45.jpg"
  },
  {
    id: 46,
    nome: "Kit 5 Bolas Douradas Mistas",
    categoria: "enfeites",
    preco: 44.90,
    descricao: "Bolas douradas em acabamentos fosco, glitter e brilho para árvore elegante.",
    imagem: "img/produtos/46.jpg"
  },
  {
    id: 47,
    nome: "Enfeite de Porta Fita Vermelha com Ursinho",
    categoria: "decoracao",
    preco: 79.90,
    descricao: "Fita de cetim com laços natalinos e ursinho de pelúcia, deixa a entrada acolhedora.",
    imagem: "img/produtos/47.jpg"
  },
  {
    id: 48,
    nome: "Maçãs de Glitter Vermelhas (Par)",
    categoria: "enfeites",
    preco: 32.90,
    descricao: "Enfeites de maçã com glitter vermelho intenso, para pendurar na árvore.",
    imagem: "img/produtos/48.jpg"
  },
  {
    id: 49,
    nome: "Duende de Natal Sentado em Tecido 30cm",
    categoria: "pelucias",
    preco: 84.90,
    descricao: "Duende charmoso com gorro verde e vermelho, ótimo para estantes e aparadores.",
    imagem: "img/produtos/49.jpg"
  },
  {
    id: 50,
    nome: "Painel Feliz Natal Papai Noel, Biscoito e Rena",
    categoria: "decoracao",
    preco: 119.90,
    descricao: "Placa decorativa em EVA com Papai Noel, biscoito e rena. Perfeita para portas e paredes.",
    imagem: "img/produtos/50.jpg"
  }
];
