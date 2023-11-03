const winBefore = document.querySelector('.win::before');
const wins = document.querySelectorAll('.win');

wins.forEach(win=>{
  win.addEventListener('click', () => {
    win.classList.toggle('height');
    win.classList.add('rideau');
})


});
