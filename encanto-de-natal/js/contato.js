/* ==========================================================================
   ENCANTO DE NATAL - LOJA VIRTUAL
   Validação do Formulário de Contato
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const formContato = document.getElementById('form-contato');
  if (!formContato) return;

  formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    let valido = true;

    // Campos
    const nome = document.getElementById('input-nome');
    const email = document.getElementById('input-email');
    const assunto = document.getElementById('input-assunto');
    const mensagem = document.getElementById('input-mensagem');
    const feedback = document.getElementById('feedback-envio');

    // Validação Nome
    if (!nome.value.trim() || nome.value.trim().length < 3) {
      exibirErro('erro-nome', 'Por favor, informe seu nome completo.');
      valido = false;
    } else {
      ocultarErro('erro-nome');
    }

    // Validação E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      exibirErro('erro-email', 'Informe um endereço de e-mail válido.');
      valido = false;
    } else {
      ocultarErro('erro-email');
    }

    // Validação Assunto
    if (!assunto.value.trim()) {
      exibirErro('erro-assunto', 'Por favor, selecione ou digite o assunto.');
      valido = false;
    } else {
      ocultarErro('erro-assunto');
    }

    // Validação Mensagem
    if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
      exibirErro('erro-mensagem', 'Sua mensagem deve ter pelo menos 10 caracteres.');
      valido = false;
    } else {
      ocultarErro('erro-mensagem');
    }

    // Se estiver válido
    if (valido) {
      feedback.className = 'mensagem-feedback sucesso';
      feedback.textContent = `Mensagem enviada com sucesso! Obrigado pelo contato, ${nome.value.trim()}. Nossa equipe responderá em breve.`;
      formContato.reset();
    }
  });
});

function exibirErro(idElemento, mensagem) {
  const el = document.getElementById(idElemento);
  if (el) {
    el.textContent = mensagem;
    el.style.display = 'block';
  }
}

function ocultarErro(idElemento) {
  const el = document.getElementById(idElemento);
  if (el) {
    el.style.display = 'none';
  }
}
