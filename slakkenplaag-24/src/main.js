import { startCounter, startSlakkenChartAnimation } from './charts/dashboard';

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleSection = entry.target;

        const animatableElements = visibleSection.querySelectorAll('.dashboard-item, .question, .slakkenPopulatieChart, .counter');
        animatableElements.forEach(item => {
          item.classList.add('visible');
        });

        if (visibleSection.querySelector('#slakkenPopulatieChart')) {
          startSlakkenChartAnimation();
        }

        if (visibleSection.querySelector('#counter')) {
          startCounter();
        }

        observer.unobserve(visibleSection);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
