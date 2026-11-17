document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 90);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach((card) => {
    revealObserver.observe(card);

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -3.5;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3.5;

      card.style.transform = `translateY(-9px) perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});
