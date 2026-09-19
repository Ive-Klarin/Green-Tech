// Dohvati elemente
const subscribeBtn = document.querySelector('.btn-subscribe');
const popup = document.getElementById('subscribe-popup');
const closeBtn = document.getElementById('close-popup');

// Klik na Subscribe → otvori popup
subscribeBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});

// Klik na Zatvori → sakrij popup
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

const demoBtn = document.querySelector('#demo-btn');
const demoPopup = document.getElementById('demo-popup');
const closeDemo = document.getElementById('close-demo');

demoBtn.addEventListener('click', function(e) {
  e.preventDefault();
  demoPopup.style.display = 'block';
});

closeDemo.addEventListener('click', function() {
  demoPopup.style.display = 'none';
});