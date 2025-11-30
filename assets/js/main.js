AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation


});

const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.innerHTML = '<i class="las la-sun"></i>';
}

function updateThemeIcon() {
  if (body.classList.contains('light-mode')) {
    themeToggle.innerHTML = '<i class="las la-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.innerHTML = '<i class="las la-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  updateThemeIcon();
});

updateThemeIcon();
