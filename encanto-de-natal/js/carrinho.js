/* ==========================================================================
   ENCANTO DE NATAL - LOJA VIRTUAL
   Gerenciamento do Carrinho de Compras (localStorage & DOM)
   ========================================================================== */

let carrinho = [];
try {
  carrinho = JSON.parse(localStorage.getItem('encanto_carrinho')) || [];
} catch(e) {
  carrinho = [];
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarBadgeCarrinho();
  renderizarItensCarrinho();

  // Abrir e Fechar Modal do Carrinho
  const btnAbrir = document.getElementById('btn-abrir-carrinho');
  const btnFechar = document.getElementById('btn-fechar-carrinho');
  const modal = document.getElementById('modal-carrinho');
  const overlay = document.getElementById('carrinho-overlay');

  if (btnAbrir && modal && overlay) {
    btnAbrir.addEventListener('click', () => {
      modal.classList.add('aberto');
      overlay.classList.add('visivel');
    });
  }

  if (btnFechar && modal && overlay) {
    btnFechar.addEventListener('click', fecharCarrinho);
    overlay.addEventListener('click', fecharCarrinho);
  }
});

function fecharCarrinho() {
  const modal = document.getElementById('modal-carrinho');
  const overlay = document.getElementById('carrinho-overlay');
  if (modal && overlay) {
    modal.classList.remove('aberto');
    overlay.classList.remove('visivel');
  }
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(idProduto) {
  const produto = produtos.find(p => p.id === idProduto);
  if (!produto) return;

  const itemExistente = carrinho.find(item => item.id === idProduto);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem,
      quantidade: 1
    });
  }

  salvarEAtualizar();
  
  // Efeito sonoro rápido ao adicionar (se função existir)
  if (typeof tocarEfeitoSino === 'function') {
    tocarEfeitoSino();
  }

  // Abre carrinho para feedback visual imediato
  const modal = document.getElementById('modal-carrinho');
  const overlay = document.getElementById('carrinho-overlay');
  if (modal && overlay) {
    modal.classList.add('aberto');
    overlay.classList.add('visivel');
  }
}

// Alterar quantidade (+1 ou -1)
function alterarQuantidade(idProduto, delta) {
  const item = carrinho.find(i => i.id === idProduto);
  if (!item) return;

  item.quantidade += delta;

  if (item.quantidade <= 0) {
    removerDoCarrinho(idProduto);
  } else {
    salvarEAtualizar();
  }
}

// Remover item do carrinho
function removerDoCarrinho(idProduto) {
  carrinho = carrinho.filter(i => i.id !== idProduto);
  salvarEAtualizar();
}

// Salvar no localStorage e atualizar a tela
function salvarEAtualizar() {
  localStorage.setItem('encanto_carrinho', JSON.stringify(carrinho));
  atualizarBadgeCarrinho();
  renderizarItensCarrinho();
}

// Atualizar contador no header
function atualizarBadgeCarrinho() {
  const badge = document.getElementById('badge-carrinho-qtd');
  if (badge) {
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    badge.textContent = totalItens;
  }
}

// Renderizar HTML dos itens do carrinho
function renderizarItensCarrinho() {
  const container = document.getElementById('carrinho-itens-container');
  const elementoTotal = document.getElementById('carrinho-valor-total');
  if (!container) return;

  if (carrinho.length === 0) {
    container.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio.</p>`;
    if (elementoTotal) elementoTotal.textContent = 'R$ 0,00';
    return;
  }

  let html = '';
  let totalGeral = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    totalGeral += subtotal;

    html += `
      <div class="item-carrinho">
        <img src="${item.imagem}" alt="${item.nome}">
        <div class="item-info">
          <h4 class="item-titulo">${item.nome}</h4>
          <div class="item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
          <div class="item-qtd-controles">
            <button class="btn-qtd" onclick="alterarQuantidade(${item.id}, -1)">-</button>
            <span>${item.quantidade}</span>
            <button class="btn-qtd" onclick="alterarQuantidade(${item.id}, 1)">+</button>
            <button class="btn-remover-item" onclick="removerDoCarrinho(${item.id})" title="Remover item">remover</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (elementoTotal) {
    elementoTotal.textContent = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
  }
}
