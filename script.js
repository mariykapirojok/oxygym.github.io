function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    const button = document.querySelector('.popup button');
    button.textContent = 'Отправляем...';
    setTimeout(() => {
      alert(`Спасибо за заявку, ${name}! Мы свяжемся с вами.`);
      closePopup();
      button.textContent = 'Отправить';
    }, 1000);
    closePopup();
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
}

// Mobile navigation toggle
document.querySelector('.nav-icon').addEventListener('click', function() {
  const nav = document.querySelector('.header-navigation ul');
  nav.classList.toggle('active'); this.classList.toggle('active');
});

// Leaflet map initialization
const map = L.map('mapid').setView([47.2357, 39.7015], 15); // Coordinates for Rostov-on-Don
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([47.2357, 39.7015]).addTo(map)
  .bindPopup('OxyGYM<br>г. Ростов-на-Дону, ул. Большая Садовая 190/45')
  .openPopup();

// Check if images are loaded
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    console.log('Ошибка загрузки изображения: ' + img.src);
  });
});