const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(event.target.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});