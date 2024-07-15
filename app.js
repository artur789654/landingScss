const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
  nav.classList.add('active'); // Add active class to show nav
  menuIcon.style.display = 'none'; // Hide hamburger
  closeIcon.style.display = 'block'; // Show close icon
});

closeIcon.addEventListener('click', () => {
  nav.classList.remove('active'); // Remove active class to hide nav
  menuIcon.style.display = 'block'; // Show hamburger
  closeIcon.style.display = 'none'; // Hide close icon
});
