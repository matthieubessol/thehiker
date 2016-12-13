// import 'babel-polyfill'
var CanvasMap = require ('./canvas-map.js');

var animap = {

    init:function() {
        let map=CanvasMap({
          textContainer:document.querySelector('.text'),
          mapSrc:'img/map.svg',
          trailVisitedColor:'#47DBB4',
          fontPresentColor:'#5D5C56',
        }).appendTo('.container')
    }
}

module.exports = fugues;
