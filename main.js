// Get the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const targetSection = document.querySelector(href);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Add active class to the clicked link
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Add click event to the "Home" link
const homeLink = document.querySelector('nav ul li a[href="#home"]');
homeLink.addEventListener('click', e => {
  e.preventDefault();
  const homeSection = document.querySelector('#home');
  homeSection.scrollIntoView({ behavior: 'smooth' });
  navLinks.forEach(link => link.classList.remove('active'));
  homeLink.classList.add('active');
});

// Add click event to the "About" link
const aboutLink = document.querySelector('nav ul li a[href="#about"]');
aboutLink.addEventListener('click', e => {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
  navLinks.forEach(link => link.classList.remove('active'));
  aboutLink.classList.add('active');
});

// Add click event to the "Services" link
const servicesLink = document.querySelector('nav ul li a[href="#services"]');
servicesLink.addEventListener('click', e => {
  e.preventDefault();
  const servicesSection = document.querySelector('#services');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
  navLinks.forEach(link => link.classList.remove('active'));
  servicesLink.classList.add('active');
});

// Add click event to the "Contact" link
const contactLink = document.querySelector('nav ul li a[href="#contact"]');
contactLink.addEventListener('click', e => {
  e.preventDefault();
  const contactSection = document.querySelector('#contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
  navLinks.forEach(link => link.classList.remove('active'));
  contactLink.classList.add('active');
});

// Add validation to contact form
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let formIsValid = true;

  formInputs.forEach(input => {
    if (input.value.trim() === '') {
      formIsValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (formIsValid) {
    // Send form data to server or perform other actions
    console.log('Form submitted successfully!');
  }
});

