const wins = document.querySelectorAll('.win');
let image1 = null;
let image2 = null;
let imgsrc1 = null;
let imgsrc2 = null;

wins.forEach(win => {
  win.addEventListener('click', () => {
    if (image1 === null) {
      win.classList.toggle('height');
      win.classList.add('rideau');

      setTimeout(() => {
        win.classList.remove('height');
      }, 1000);

      image1 = win;
      imgsrc1 = image1.querySelector('img').src;
    
    } else {
      win.classList.toggle('height');
      win.classList.add('rideau');

      setTimeout(() => {
        win.classList.remove('height');
      }, 1000);

        image2 = win;
        imgsrc2 = image2.querySelector('img').src;
        if (imgsrc1 !== imgsrc2) {
          image1.classList.remove('rideau');
          image2.classList.remove('rideau');
        }

      image1 = null;
      image2 = null;
    }
  });
});
