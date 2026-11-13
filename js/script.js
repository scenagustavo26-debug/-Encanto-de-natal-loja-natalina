/* Encanto de Natal — script principal */
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initMusica();
  initContagem();
  initCatalogo();
  initReveal();
});

/* Efeito cascata ao rolar: cada item aparece em sequência */
let observadorReveal = null;
const ITENS_REVEAL = [
  '.pagina-topo > *', '.secao-topo', '.contagem-in > *', '.relogio > div',
  '.cats img', '.cats h2', '.cats li', '.mosaico figure', '.compromissos > div',
  '.sobre img', '.sobre > div > *', '.pilares > div', '.equipe-bloco > *', '.equipe li', '.galeria figure',
  '.contato dl > div', '.form-grupo', '.filtros', '.card-produto', '.rodape-in > div'
].join(',');

function initReveal(raiz = document) {
  const itens = [...raiz.querySelectorAll(ITENS_REVEAL)]
    .filter(el => !el.classList.contains('rev') && !el.classList.contains('rev-img'));
  if (!('IntersectionObserver' in window)) return;
  if (!observadorReveal) {
    observadorReveal = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visivel');
          observadorReveal.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  itens.forEach(el => {
    const pos = [...el.parentElement.children].indexOf(el);
    el.style.setProperty('--atraso', (pos % 4) * 110 + 'ms');
    el.classList.add(el.tagName === 'IMG' ? 'rev-img' : 'rev');
    observadorReveal.observe(el);
  });
}

/* Menu no celular */
function initMenu() {
  const btn = document.getElementById('btn-hamburguer');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto);
  });
}

/* Música */
let musicaTocando = false, audioNatal = null, timerMelodia = null, audioCtx = null;

function initMusica() {
  const btn = document.getElementById('btn-musica-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    musicaTocando = !musicaTocando;
    if (musicaTocando) {
      iniciarMusica();
      btn.textContent = 'Pausar música';
      btn.classList.add('tocando');
    } else {
      pararMusica();
      btn.textContent = 'Ouvir música';
      btn.classList.remove('tocando');
    }
  });
}

function iniciarMusica() {
  try {
    if (!audioNatal) {
      audioNatal = new Audio('audio/natal.wav');
      audioNatal.loop = true;
      audioNatal.volume = 0.3;
    }
    const p = audioNatal.play();
    if (p !== undefined) p.catch(tocarMelodia);
  } catch (e) { tocarMelodia(); }
}

function tocarMelodia() {
  const notas = [
    [329.63,300],[329.63,300],[329.63,600],[329.63,300],[329.63,300],[329.63,600],
    [329.63,300],[392,300],[261.63,450],[293.66,150],[329.63,1000],
    [349.23,300],[349.23,300],[349.23,450],[349.23,300],[329.63,300],[329.63,300],
    [329.63,150],[329.63,150],[329.63,300],[293.66,300],[293.66,300],[329.63,300],
    [293.66,600],[392,600]
  ];
  let i = 0;
  (function proxima() {
    if (!musicaTocando) return;
    const [f, t] = notas[i++ % notas.length];
    nota(f, t / 1000);
    timerMelodia = setTimeout(proxima, t);
  })();
}

function nota(freq, dur) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.12, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur);
  } catch (e) {}
}

function pararMusica() {
  clearTimeout(timerMelodia);
  if (audioNatal) { audioNatal.pause(); audioNatal.currentTime = 0; }
  if (audioCtx && audioCtx.state === 'running') audioCtx.suspend();
}

/* Contagem regressiva */
function initContagem() {
  const d = document.getElementById('cnt-dias');
  if (!d) return;
  const h = document.getElementById('cnt-horas');
  const m = document.getElementById('cnt-minutos');
  const s = document.getElementById('cnt-segundos');
  const dois = n => String(n).padStart(2, '0');
  function tick() {
    const agora = new Date();
    let natal = new Date(agora.getFullYear(), 11, 25);
    if (agora > natal) natal = new Date(agora.getFullYear() + 1, 11, 25);
    const diff = natal - agora;
    d.textContent = dois(Math.floor(diff / 864e5));
    h.textContent = dois(Math.floor(diff / 36e5) % 24);
    m.textContent = dois(Math.floor(diff / 6e4) % 60);
    s.textContent = dois(Math.floor(diff / 1e3) % 60);
  }
  tick();
  setInterval(tick, 1000);
}

/* Catálogo */
const ROTULOS_CATEGORIA = { arvores: 'Árvores', enfeites: 'Enfeites e bolas', iluminacao: 'Iluminação', pelucias: 'Pelúcias e bonecos', decoracao: 'Decoração da casa' };

function criarCardHTML(p) {
  const preco = p.preco.toFixed(2).replace('.', ',');
  return `
    <article class="card-produto">
      <div class="card-imagem-wrapper">
        <img src="${p.imagem}" alt="${p.nome}" class="card-imagem" loading="lazy">
      </div>
      <span class="card-categoria">${ROTULOS_CATEGORIA[p.categoria] || p.categoria}</span>
      <h3 class="card-titulo">${p.nome}</h3>
      <p class="card-descricao">${p.descricao}</p>
      <div class="card-rodape">
        <span class="card-preco">R$ ${preco}</span>
        <button class="btn-add" onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
      </div>
    </article>`;
}

function initCatalogo() {
  if (typeof produtos === 'undefined') return;
  const home = document.getElementById('grid-produtos-home');
  const grid = document.getElementById('grid-produtos-catalogo');
  if (home) home.innerHTML = produtos.slice(0, 4).map(criarCardHTML).join('');
  if (!grid) return;

  const busca = document.getElementById('input-busca');
  const cat = document.getElementById('select-categoria');
  const ord = document.getElementById('select-ordenacao');
  const contador = document.getElementById('contador-produtos');

  const q = new URLSearchParams(location.search).get('categoria');
  if (q && cat && ROTULOS_CATEGORIA[q]) cat.value = q;

  function render() {
    let r = [...produtos];
    const termo = busca.value.toLowerCase().trim();
    if (termo) r = r.filter(p => p.nome.toLowerCase().includes(termo) || p.descricao.toLowerCase().includes(termo));
    if (cat.value !== 'todas') r = r.filter(p => p.categoria === cat.value);
    if (ord.value === 'menor-preco') r.sort((a, b) => a.preco - b.preco);
    else if (ord.value === 'maior-preco') r.sort((a, b) => b.preco - a.preco);
    else if (ord.value === 'nome') r.sort((a, b) => a.nome.localeCompare(b.nome));
    grid.innerHTML = r.length
      ? r.map(criarCardHTML).join('')
      : '<div class="vazio"><h3>Nenhum produto encontrado</h3><p>Tente outro termo ou mude os filtros.</p></div>';
    contador.textContent = `${r.length} de ${produtos.length} produtos`;
    initReveal(grid);
  }
  [busca, cat, ord].forEach(el => el.addEventListener('input', render));
  render();
}
