// script.js - rozszerzenie

// Inicjalizacja po załadowaniu strony
window.addEventListener('load', () => {
  animateCounter('counter1', 1200);
  animateCounter('counter2', 3400);
  animateCounter('counter3', 15);
  
  // Inicjalizacja przycisków dołączania
  initJoinButtons();
});

// Funkcja dla przycisków dołączania
function initJoinButtons() {
  document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      let message = '';
      
      switch(type) {
        case 'volunteer':
          message = "Dziękujemy za chęć zostania wolontariuszem! Skontaktujemy się z Tobą w ciągu 48 godzin.";
          break;
        case 'ambassador':
          message = "Cieszymy się, że chcesz zostać ambasadorem kampanii! Odezwiemy się do Ciebie z dalszymi informacjami.";
          break;
        case 'cooperation':
          message = "Dziękujemy za zainteresowanie współpracą! Przekierujemy Cię do formularza współpracy.";
          break;
      }
      
      alert(message);
    });
  });
}

// Pozostałe funkcje pozostają bez zmian
function animateCounter(id, target) {
  const counter = document.getElementById(id);
  let count = 0;
  const speed = Math.ceil(target / 100);
  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    counter.textContent = count;
  }, 30);
}

document.querySelectorAll('.quote-box').forEach(box => {
  box.addEventListener('click', () => {
    const reaction = box.querySelector('.reaction');
    reaction.style.display = reaction.style.display === 'block' ? 'none' : 'block';
  });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formResponse').textContent = "❤️ Dziękujemy! Twoja wiadomość została wysłana.";
  e.target.reset();
});

document.querySelector('.scroll-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 50;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
});

const introSection = document.querySelector('.intro');
window.addEventListener('scroll', () => {
  const rect = introSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    introSection.classList.add('visible');
  }
});