// Scroll-reveal observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Mark elements for reveal
document.addEventListener('DOMContentLoaded', () => {
  // Feature cards
  const grid = document.querySelector('.features-grid');
  if (grid) {
    grid.classList.add('reveal-stagger');
    grid.querySelectorAll('.feature-card').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Highlights
  const hlGrid = document.querySelector('.highlights-grid');
  if (hlGrid) {
    hlGrid.classList.add('reveal-stagger');
    hlGrid.querySelectorAll('.highlight').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Download card
  const dl = document.querySelector('.download-card');
  if (dl) {
    dl.classList.add('reveal');
    observer.observe(dl);
  }
});
