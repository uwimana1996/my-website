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

  // Get form values
  const name = document.getElementById('name').value.trim();

  // Clear the form
  form.reset();

  // Create success message
  const successMessage = document.createElement('p');
  successMessage.textContent = `✅ Thank you, ${name}! Your message has been sent.`;
  successMessage.style.color = 'green';
  successMessage.style.marginTop = '10px';

  // Add the message to the form container
  form.parentNode.appendChild(successMessage);

  // Remove message after 5 seconds
  setTimeout(() => {
    successMessage.remove();
  }, 5000);
});
