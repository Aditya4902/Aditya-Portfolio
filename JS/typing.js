/* =====================================================
   Aditya Kumar Shah — Portfolio
   Author  : Aditya Kumar Shah | github.com/Aditya4902
   File    : js/typing.js
   Desc    : Typewriter effect for hero "I am into" line
             Edit WORDS array to change what gets typed
   ===================================================== */

'use strict';

/* ── EDIT THESE TO CHANGE TYPED WORDS ── */
const WORDS = [
  'Data Analysis',
  'Full Stack Dev',
  'Python & SQL',
  'Node.js & Express',
  'Power BI & Tableau',
  'Building Products',
];

/* ── CONFIG ── */
const TYPE_SPEED   = 90;   // ms per character when typing
const DELETE_SPEED = 60;   // ms per character when deleting
const PAUSE_TIME   = 1800; // ms to wait before deleting
const START_DELAY  = 3200; // ms after page load before typing begins

/* ── STATE ── */
let wordIndex  = 0;
let charIndex  = 0;
let isDeleting = false;

const typedEl = document.getElementById('typed');

function typeLoop() {
  if (!typedEl) return;

  const currentWord = WORDS[wordIndex];

  if (!isDeleting) {
    // Typing forward
    typedEl.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      // Finished typing — pause then start deleting
      isDeleting = true;
      setTimeout(typeLoop, PAUSE_TIME);
      return;
    }
  } else {
    // Deleting
    typedEl.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // Finished deleting — move to next word
      isDeleting = false;
      wordIndex  = (wordIndex + 1) % WORDS.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? DELETE_SPEED : TYPE_SPEED);
}

// Start after loader finishes
setTimeout(typeLoop, START_DELAY);
