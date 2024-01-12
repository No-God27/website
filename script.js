let clima= document.getElementById('clima');
let wheat = document.getElementById('wheat');
// let left= document.getElementById('left');
// let right = document.getElementById('right');
let scrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
 if (value <= scrollHeight) {
    clima.style.marginTop = value * 2.5 + 'px';
    wheat.style.marginTop = value * .25+ 'px';

  }

});