

'use strict';

/* ── SCROLL REVEAL ───────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.rv, .rvl, .rvr').forEach((el) => {
  revealObserver.observe(el);
});

/* ── STAT COUNTERS ───────────────────────────────── */
function countUp(el, target) {
  let value = 0;
  const interval = setInterval(() => {
    value = Math.min(value + target / 55, target);
    el.textContent = Math.round(value);
    if (value >= target) clearInterval(interval);
  }, 22);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('[data-target]').forEach((el) => {
        countUp(el, parseInt(el.dataset.target));
      });
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

const heroSection = document.querySelector('.hero');
if (heroSection) counterObserver.observe(heroSection);

/* ── 3D CARD TILT ────────────────────────────────── */
document.querySelectorAll('.pj, .hero-photo-frame, .about-photo-wrap').forEach((el) => {

  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x    = ((e.clientX - rect.left) / rect.width  - 0.5) * 8;
    const y    = -((e.clientY - rect.top)  / rect.height - 0.5) * 8;
    el.style.transform  = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg)`;
    el.style.transition = 'transform .06s';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform  = '';
    el.style.transition = 'transform .55s ease';
  });

});
