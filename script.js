
    const faqButtons = document.querySelectorAll('.faq-question');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains('open');
    faqButtons.forEach(btn => {
      btn.parentElement.classList.remove('open');
      btn.setAttribute('a', 'false');
      btn.querySelector('.symbol').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('.symbol').textContent = '-';
    }
  });
  button.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      button.click();
    }
  });
});
