import './style.css'

function scrollToBooking() {
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function scrollToCalEmbed() {
  const calEmbed = document.getElementById('cal-embed');
  if (calEmbed) {
    calEmbed.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

window.scrollToBooking = scrollToBooking;
window.scrollToCalEmbed = scrollToCalEmbed;

let lastScrollY = window.scrollY;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }

  lastScrollY = currentScrollY;
});

document.addEventListener('DOMContentLoaded', () => {
  const calEmbed = document.getElementById('cal-embed');
  if (calEmbed) {
    calEmbed.style.minHeight = '700px';
  }

  // Testimonial Carousel
  let currentTestimonial = 0;
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');

  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach((card, i) => {
      if (i === index) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease-in-out';
          card.style.opacity = '1';
        }, 10);
      } else {
        card.classList.add('hidden');
      }
    });

    // Update dots
    testimonialDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.remove('bg-gray-600');
        dot.classList.add('bg-blue-600');
      } else {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-gray-600');
      }
    });
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    });

    nextButton.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(currentTestimonial);
    });
  }

  // FAQ Toggle Function
  window.toggleFAQ = function(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('svg');
    
    if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    } else {
      answer.classList.add('hidden');
      icon.style.transform = 'rotate(0deg)';
    }
  };
});
