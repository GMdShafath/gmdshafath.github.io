// Typing effect
const words = ['CSE (AI) Graduate', 'Python Developer', 'Web Developer'];
const typed = document.getElementById('typed');
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];
  typed.textContent = word.substring(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    deleting = !deleting;
    if (!deleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, deleting ? 1500 : 300);
  }
}
type();

// Navbar background + back-to-top button on scroll
const navbar = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  backToTop.classList.toggle('show', window.scrollY > 300);
});

// Close mobile menu after clicking a link
document.querySelectorAll('#navMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Reveal elements and animate progress bars when they come into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('.progress-bar').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form validation
const form = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }
  formAlert.classList.remove('d-none');
  form.reset();
  form.classList.remove('was-validated');
  setTimeout(() => formAlert.classList.add('d-none'), 4000);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
