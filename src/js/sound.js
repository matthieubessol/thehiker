var useful = require('./useful.js');

var checkScrollSpeed = (function(settings){
    settings = settings || {};

    var lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
})();


var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var sound = {
    elmts: {},
    toScale:0,
    sound:{},
    soundPlay:{},
    scrollValues:[],
    sectionActive:null,
    currentSounds:[],
    newSounds:[],

    bindUi: function() {
        this.sound.rain = new Howl({
            src: ['http://www.matthieubessol.com/thehiker/assets/sounds/rain.mp3'],
            autoplay: false,
            loop: true,
            volume: 0.5,
            isPlayed:false,
        });

        this.sound.fire = new Howl({
            src: ['http://www.matthieubessol.com/thehiker/assets/sounds/fire.mp3'],
            autoplay: false,
            loop: true,
            volume: 1,
            isPlayed:false,
        });

        this.sound.storm = new Howl({
            src: ['http://www.matthieubessol.com/thehiker/assets/sounds/storm.mp3'],
            autoplay: false,
            loop: true,
            volume: 1,
            isPlayed:false,
        });

        // this.soundPlay.rain = this.sound.rain.play();
        // this.soundPlay.fire = this.sound.fire.play();
        this.elmts.sections = document.getElementsByClassName('js-section');
    },

    bindEvents: function() {
        var self = this;

        if(!useful.isMobile()) {
            window.addEventListener('scroll', function() {
                self.handleScroll();
            },supportsPassive ? { passive: true } : false);
        }

        window.addEventListener('load', this.handleValue());

    },

    init: function() {
        this.bindUi();
        this.bindEvents();
    },

    handleValue:function() {
        var body = document.body,
            html = document.documentElement;

        this.windowHeight = window.innerHeight;
        this.height = Math.max( body.scrollHeight, body.offsetHeight,
                                html.clientHeight, html.scrollHeight, html.offsetHeight );

        this.scrollValues.push(0);
        for (var i = 0; i < this.elmts.sections.length; i++) {
            this.scrollValues.push(useful.getOffset(this.elmts.sections[i]).top);
        }
    },

    handleScroll() {
        var value=0,
            scrollLevel = window.pageYOffset + window.innerHeight;

        var scrollSpeed = checkScrollSpeed();
        // this.sound.fire.rate(scrollSpeed/600 + 1);
        // this.sound.storm.rate(scrollSpeed/600 + 1);
        // this.sound.rain.rate(scrollSpeed/600 + 1);

        for (var i = 0; i < this.scrollValues.length - 1; i++) {
            if(scrollLevel > this.scrollValues[i] && scrollLevel < this.scrollValues[i+1]) {
                if(this.sectionActive != i) {
                    var dataSound = this.elmts.sections[i].dataset.sound.split(/[ ,]+/);
                    this.sectionActive = i;
                    this.launchSounds(dataSound);
                }
            }
        }
    },

    unbindEvents:function() {
        var self = about;
        window.removeEventListener('scroll', function() {
            window.requestAnimationFrame(self.handleScroll.bind(self));
        });
    },

    launchSounds(values) {
        for (var i = values.length - 1; i >= 0; i--) {
            switch(values[i]){
                case "fire":
                    this.newSounds.push(this.sound.fire);
                    break;
                case "storm":
                    this.newSounds.push(this.sound.storm);
                    break;
                case "rain":
                    this.newSounds.push(this.sound.rain);
                    break;
                default:
                    break;
            }
        }

        console.log(this.newSounds);
        this.fadeFromTo(this.currentSounds, this.newSounds);
    },

    fadeFromTo(from,to) {
        var lengthFade = 1000;

        // fadeOut.
        for (var i = from.length - 1; i >= 0; i--) {
            if(from[i].isPlayed){
                from[i].fade(1, 0, lengthFade,from[i].stop());
                from[i].isPlayed = false;
            }
        }

        // fadeIn.
        for (var i = to.length - 1; i >= 0; i--) {
            if(!to[i].isPlayed){
                to[i].fade(0, 1, lengthFade, to[i].play());
                to[i].isPlayed = true;
            }
        }

        this.currentSounds = this.newSounds;
        this.newSounds = [];
    },
}

module.exports = sound;
