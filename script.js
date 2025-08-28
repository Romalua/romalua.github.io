// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

  // --- Lógica do Menu Mobile ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  // Adiciona um listener de clique para o botão de toggle
  mobileToggle.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    mainNav.classList.toggle('active');
  });

  // Fecha o menu mobile ao clicar em um link
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      // Remove a classe 'active' para esconder o menu
      mainNav.classList.remove('active');
    });
  });

  // --- Lógica do Carrossel de Depoimentos ---
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentTestimonial = 0;

  // Função para mostrar o depoimento atual e atualizar os dots
  function showTestimonial(index) {
    // Oculta todos os depoimentos
    testimonials.forEach(t => t.classList.remove('active'));
    // Mostra o depoimento no índice fornecido
    testimonials[index].classList.add('active');

    // Remove a classe 'active' de todos os dots
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    // Adiciona a classe 'active' ao dot correspondente
    document.querySelector(`.dot[data-index="${index}"]`).classList.add('active');
  }

  // Adiciona listeners para os botões de navegação
  prevBtn.addEventListener('click', () => {
    // Volta para o depoimento anterior, com loop
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener('click', () => {
    // Avança para o próximo depoimento, com loop
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  });

  // Adiciona listeners para os dots
  dotsContainer.addEventListener('click', (e) => {
    const dot = e.target.closest('.dot');
    if (dot) {
      // Obtém o índice do dot clicado
      const index = parseInt(dot.getAttribute('data-index'));
      // Atualiza o depoimento atual e o mostra
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
    }
  });

  // Inicia o carrossel mostrando o primeiro depoimento
  showTestimonial(currentTestimonial);

  // --- Lógica do FAQ (Acordeão) ---
  const faqItems = document.querySelectorAll('.faq-item');

  // Adiciona um listener de clique para cada item do FAQ
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Alterna a classe 'active' para abrir/fechar o item
      item.classList.toggle('active');
    });
  });

  // --- Lógica do Formulário de Contato ---
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', (e) => {
    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Lógica para envio do formulário, por exemplo, via Fetch API
    console.log('Formulário enviado!');
    
    // Simulação de envio com uma mensagem de sucesso
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      // Exibe uma mensagem de sucesso
      alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');
      
      // Reseta o formulário
      contactForm.reset();
      
      // Restaura o botão
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000); // Simula um delay de 2 segundos
  });

});
