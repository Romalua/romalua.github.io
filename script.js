// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

  // -------------------------------------------------------------------
  // 🟩 MENU MOBILE
  // -------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    document.querySelectorAll('#main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // -------------------------------------------------------------------
  // 🟦 CARROSSEL DE DEPOIMENTOS (Com proteção contra remoção)
  // -------------------------------------------------------------------
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentTestimonial = 0;

  // Só ativa o carrossel se os elementos existirem
  if (testimonials.length > 0 && prevBtn && nextBtn && dotsContainer) {

    function showTestimonial(index) {
      testimonials.forEach(t => t.classList.remove('active'));
      testimonials[index].classList.add('active');

      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      const activeDot = document.querySelector(`.dot[data-index="${index}"]`);
      if (activeDot) activeDot.classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });

    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.dot');
      if (dot) {
        currentTestimonial = parseInt(dot.getAttribute('data-index'));
        showTestimonial(currentTestimonial);
      }
    });

    showTestimonial(currentTestimonial);
  }

  // -------------------------------------------------------------------
  // 🟨 FAQ (Acordeão funcional)
  // -------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  }

  // -------------------------------------------------------------------
  // 🟧 FORMULÁRIO DE CONTATO
  // -------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // simulação
      setTimeout(() => {
        alert('Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    });
  }

});
