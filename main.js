// Mobile hamburger menu toggle
(function () {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('nav-overlay');

  function toggleMenu() {
    const isOpen = navLinks.classList.contains('open');
    navLinks.classList.toggle('open');
    overlay.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked (anchor links)
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
})();

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
