import './style.css'

function scrollToBooking() {
  const bookingSection = document.getElementById('booking');
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

window.scrollToBooking = scrollToBooking;

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
});
