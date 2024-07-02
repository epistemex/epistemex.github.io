/*
 🅢🅞🅤🅡🅒🅔 🅒🅞🅓🅔 🅢🅞🅤🅡🅒🅔 🅒🅞🅓🅔 🅢🅞🅤🅡🅒🅔 🅒🅞🅓🅔 🅢🅞🅤🅡🅒🅔 🅒🅞🅓🅔


          ◆ ◆ ◆ chrisdoesthings ◆ ◆ ◆

          Chris Does Work

          main.js (2024-07-01)

          Copyright (c) 2024 Chris Nilsen



 ░░░▒▒▓█ ║▌║║║▌║▌│║║▌█║▌║█▌║█▌║█║▌║█▌║║║│║│║▌║▌█║║█▌║█▌║█║▌│║▌│║▌║▌█ ║ █▓▒▒░░░
*/

'use strict';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelector('.scroll').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

const video = document.querySelector('#birds');
video.playbackRate = 0.5;
video.addEventListener('ended', e => {
  const delay = (Math.random() * 8 + 3) * 1000;
  setTimeout(() => {
    video.style.transform = Math.random() < 0.4 ? 'scale(-1,1)' : 'scale(1,1)';
    const pp = video.play();
    if ( pp ) {
      pp.then(() => {}).catch(() => {});
    }
  }, delay);
});
