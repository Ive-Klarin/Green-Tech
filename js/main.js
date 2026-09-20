// ===== SVE VARIJABLE NA VRHU =====
const subscribeBtn = document.querySelector('.btn-subscribe');
const popup = document.getElementById('subscribe-popup');
const closeBtn = document.getElementById('close-popup');
const demoBtn = document.querySelector('#demo-btn');
const demoPopup = document.getElementById('demo-popup');
const closeDemo = document.getElementById('close-demo');
const sections = document.querySelectorAll('section','section, footer');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll na vrh pri refreshu
history.scrollRestoration = 'manual';
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

// ===== SUBSCRIBE POPUP =====
subscribeBtn.addEventListener('click', function() {
  popup.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

// ===== DEMO POPUP =====
demoBtn.addEventListener('click', function(e) {
  e.preventDefault();
  demoPopup.style.display = 'block';
});
closeDemo.addEventListener('click', function() {
  demoPopup.style.display = 'none';
});

// ===== ANIMACIJE POJAVLJIVANJA =====
const animObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});
sections.forEach(section => animObserver.observe(section));

// ===== AKTIVNI NAV LINK =====
const navObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.5, rootMargin: "0px 0px -50px 0px" });
sections.forEach(section => navObserver.observe(section));

window.addEventListener('scroll', function() {
  const footer = document.getElementById('contact');
  const footerTop = footer.getBoundingClientRect().top;
  const kontaktLink = document.querySelector('.nav-link[href="#contact"]');
  
  if (footerTop < window.innerHeight) {
    navLinks.forEach(link => link.classList.remove('active'));
    kontaktLink.classList.add('active');
  }
});
