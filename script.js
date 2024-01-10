let clima= document.getElementById('clima');
let wheat = document.getElementById('wheat');
// let left= document.getElementById('left');
// let right = document.getElementById('right');
let scrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let value = window.scrollY;
 if (value <= scrollHeight) {
    clima.style.marginTop = value * 3.6 + 'px';
    wheat.style.marginTop = value * .5+ 'px';
    // left.style.left = value * -1.5 + 'px';
    // right.style.left = value * 1.5 + 'px';
  }

});