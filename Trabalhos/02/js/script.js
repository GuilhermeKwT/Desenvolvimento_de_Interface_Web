// Dark Mode
let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnTheme = document.getElementById('theme-toggle');

(darkMode) ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');

btnTheme.addEventListener('click', () => {
  darkMode = !darkMode
  if (darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});


// Formulário
const btn = document.getElementById('cadastrar');
const emailInput = document.getElementById('email');
const nomeInput = document.getElementById('nome');

btn.disabled = true;

emailInput.addEventListener('input', checkInputs);
nomeInput.addEventListener('input', checkInputs);

const mensagem = document.getElementById('mensagem');

function showError(msg) {
  mensagem.classList.add("show")
  mensagem.textContent = msg;
}

function hideError() {
  mensagem.classList.remove("show");
  mensagem.textContent = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkInputs() {
  let valid = true
  hideError();

  if (emailInput.value.trim() === '') {
    showError('O campo email é obrigatório');
    valid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError('O email informado é inválido');
    valid = false;
  }
  if (nomeInput.value.trim() === '') {
    showError('O campo nome é obrigatório');
    valid = false;
  }

  btn.disabled = !valid;
}


// Carousel
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  const bulletsContainer = document.createElement('div');
  bulletsContainer.className = 'carousel-dots';

  let currentIndex = 0;

  items.forEach((_, i) => {
    const bullet = document.createElement('span');
    bullet.className = 'carousel-bullet' + (i === 0 ? ' active' : '');
    bullet.addEventListener('click', () => goToSlide(i));
    bulletsContainer.appendChild(bullet);
  });
  document.querySelector('.carousel').appendChild(bulletsContainer);

  function updateDisplay() {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === currentIndex);
    });
    const bullets = bulletsContainer.querySelectorAll('.carousel-bullet');
    bullets.forEach((b, i) => b.classList.toggle('active', i === currentIndex));
  }

  function goToSlide(index) {
    currentIndex = (index + items.length) % items.length;
    updateDisplay();
  }

  const prevBtn = document.createElement('button');
  const nextBtn = document.createElement('button');
  prevBtn.textContent = '<'; nextBtn.textContent = '>';
  prevBtn.className = 'carousel-prev';
  nextBtn.className = 'carousel-next';
  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  document.querySelector('.carousel').append(prevBtn, nextBtn);

  // Autoplay
  setInterval(() => goToSlide(currentIndex + 1), 5000);
});