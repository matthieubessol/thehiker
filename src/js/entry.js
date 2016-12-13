// require("../styles/style.css");
require('whatwg-fetch');
var route = require('./route.js');
// var isotope = require('isotope-layout');

route.init();
// document.getElementsByClassName('content')[0].style.marginBottom = document.getElementsByClassName('footer')[0].offsetHeight + 'px';


// var scrollArea = document.getElementById('space');
// var scrollIndicator = document.getElementById('indicator');
// var scrollHeight = 0;
// var scrollOffset = 0;
// var scrollPercent = 0;
// var indicatorPosition = scrollPercent;

// resize();

// function loop() {
//   scrollOffset = window.pageYOffset || window.scrollTop;
//   scrollPercent = scrollOffset/scrollHeight || 0;
//   indicatorPosition += (scrollPercent-indicatorPosition)*0.05;
//   var transformString = 'translateY('+(indicatorPosition*300)+'px)';
//   indicator.style.mozTransform = transformString;
//   indicator.style.webkitTransform = transformString;
//   indicator.style.transform = transformString;

//   requestAnimationFrame(loop);
// }

// loop();

// function resize() {
//   scrollHeight = window.innerHeight*4;
//   scrollArea.style.height = (window.innerHeight*5)+'px';
// }

// window.addEventListener('resize', resize);
