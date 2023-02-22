export function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}


