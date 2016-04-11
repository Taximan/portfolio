import starify from './starify';
import type from 'string-typer/loop'
import {selectElementText, clearSelection, RAF, scrollToY, detectmob} from './utils';
import nav from './nav';
import aboutSection from './about';

const header = document.getElementsByClassName('header')[0];
const headerBackground = document.getElementsByClassName('header__background')[0];
const callToActionBtn = document.getElementsByClassName('header__call-to-action')[0];

callToActionBtn.addEventListener('click', function (e) {
  e.preventDefault();
  scrollToY(aboutSection.top, 800); 
})

const videoCanvas = document.createElement('canvas');
const videoSource = document.getElementById('bgvid');
let W = window.innerWidth;
let H = 700;

videoCanvas.width  = W;
videoCanvas.height = H; 

headerBackground.appendChild(videoCanvas);

starify(headerBackground, W, H/2, 2, false);

const ctx = videoCanvas.getContext('2d');

if(!detectmob()) {
  
  videoSource.addEventListener('play', function (e) {
    RAF(drawVideo);
  }, false);
  
} else {
  
  var image = new Image()
  
  image.src = require('../media/bgmobile.jpg');
  
  image.onload = function () {
    drawImage(image);
  };
  
}

function drawImage(img) {
  ctx.drawImage(img, 0, 0, W, H);
}

function drawVideo () {
  RAF(drawVideo);
  ctx.drawImage(videoSource, 0, 0, W, H);
}

let words = [
  'amazing',
  'elegant',
  'fast',
  'great',
];

let typingTarget = document.getElementsByClassName('header__animated-word')[0];

let opts = {
  min: 100,
  max: 120
};

var stop = type(words, function (typed, done) {
  
  typingTarget.innerHTML = typed;
  
  if(typed === 'great' && !done) {
    stop (); 
  } else if (typed == 'great' && done) {
    adjustText(); 
  }
  
});


function adjustText () {
  selectElementText(typingTarget)
  
  setTimeout(() => {
    typingTarget.style.textAlign = 'center';
    setTimeout(() => clearSelection(), 100);
  }, 300);
  
}

export default {
  onWindowResize() {
    W = window.innerWidth;
    videoCanvas.width = window.innerWidth;
    if(detectmob()) {
      drawImage(image)
    }
},
  top: 0,
  bottom: header.offsetTop + header.offsetHeight,
  onEnter() {
    nav.setActive('top');
    videoSource.play();
  },
  onLeave() {
    videoSource.pause();
  }
}
