const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    const answer = parent.querySelector('.faq-answer');
    const icon = question.querySelector('img');

    // Verifica se está ativo
    const isActive = parent.classList.contains('active');

    if (isActive) {
      // Se já estiver aberto, fecha
      parent.classList.remove('active');
      answer.style.display = 'none';
      icon.src = 'assets/images/icon-plus.svg';
      icon.alt = 'Ícone mais';
    } else {
      // Se estiver fechado, abre
      parent.classList.add('active');
      answer.style.display = 'block';
      icon.src = 'assets/images/icon-minus.svg';
      icon.alt = 'Ícone menos';
    }
  });
});
