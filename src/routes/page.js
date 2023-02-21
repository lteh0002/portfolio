export function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

export function scrollToTop() {
//   const section = document.querySelectorAll(id)
//   section.forEach(element => {
//     element.scrollIntoView({ top: 0, behavior: 'smooth' });
//   });
window.scrollTo({ top: 0, behavior: 'smooth' });
}

