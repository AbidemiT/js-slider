let images = document.querySelectorAll('.slide');
let mainSlide = document.getElementById('mainSlide');

let i = 0;
let src = [];
let timeout = 3000;

images.forEach((img, i) => {
  src.push(img.currentSrc);
});

function changeImg() {
  document.slider.src = src[i];

  i < src.length - 1 ? i++ : i = 0;

  setTimeout('changeImg()', timeout);
}

window.onload = changeImg;
