document.querySelectorAll('.internal-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 118;

    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});