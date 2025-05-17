// Smooth scrolling
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Slider logic
  const slides = document.querySelectorAll('.slide');
  let current = 0;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }
  
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }
  
  setInterval(nextSlide, 3000);
  
  // Contact form handler
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert(`Thank you, ${document.getElementById('name').value}! Your message has been sent.`);
    form.reset();
  });
  