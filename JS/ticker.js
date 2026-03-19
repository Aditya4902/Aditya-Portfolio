/* =====================================================
   Aditya Kumar Shah — Portfolio
   Author  : Aditya Kumar Shah | github.com/Aditya4902
   File    : js/ticker.js
   Desc    : Infinite scrolling ticker strip
   ===================================================== */

'use strict';

const TICKER_ITEMS = [
  'Data Analyst',
  'Full Stack Developer',
  'B.Tech CSE 2026',
  'AKGEC · Gorakhpur',
  'Python · Pandas · SQL',
  'Node.js · Express',
  'Power BI · Tableau',
  'Open to Hire',
];

function initTicker() {
  const track = document.getElementById('tk');
  if (!track) return;

  const html = TICKER_ITEMS
    .map(item => `<span class="ti">${item}</span><span class="ti-sep">◆</span>`)
    .join('');

  // Duplicate for seamless infinite scroll
  track.innerHTML = html + html;
}

initTicker();
