
'use strict';

const curDot  = document.getElementById('cur-dot');
const curRing = document.getElementById('cur-ring');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

/* Follow mouse instantly for dot */
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  curDot.style.left = mouseX + 'px';
  curDot.style.top  = mouseY + 'px';
});

/* Smooth lag for ring */
(function ringLoop() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  curRing.style.left = ringX + 'px';
  curRing.style.top  = ringY + 'px';
  requestAnimationFrame(ringLoop);
})();

/* Scale up on interactive elements */
document.addEventListener('mouseover', (e) => {
  if (!e.target.matches('a, button')) return;
  curDot.style.width        = '14px';
  curDot.style.height       = '14px';
  curRing.style.width       = '46px';
  curRing.style.height      = '46px';
  curRing.style.borderColor = 'rgba(80, 70, 228, .6)';
});

document.addEventListener('mouseout', (e) => {
  if (!e.target.matches('a, button')) return;
  curDot.style.width        = '8px';
  curDot.style.height       = '8px';
  curRing.style.width       = '34px';
  curRing.style.height      = '34px';
  curRing.style.borderColor = 'rgba(80, 70, 228, .35)';
});
