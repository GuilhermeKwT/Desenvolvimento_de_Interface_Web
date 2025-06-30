let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnTheme = document.getElementById('theme-toggle');


btnTheme.addEventListener('click', ()=>{
  darkMode = !darkMode
  
});