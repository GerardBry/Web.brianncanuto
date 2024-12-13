// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Fade-in effect on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));

// Toggle navigation for mobile view
const toggleNav = () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('open');
};

// Add event listener for a mobile menu toggle button (if implemented)
const mobileMenuButton = document.querySelector('.mobile-menu-button');
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', toggleNav);
}

// Add hover effect for social media icons
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
  });
  icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
  });
});

// Typing animation
const typingText = "Hello! I'm Briann Canuto";
const typingElement = document.getElementById('typing-text');

let charIndex = 0;

const type = () => {
    if (charIndex < typingText.length) {
        typingElement.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed
    }
};

if (typingElement) {
    type(); // Start typing animation
}

