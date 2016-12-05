var useful = require('./useful.js');

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}

var about = {
    elmts: {},
    toScale:0,

    bindUi: function() {
        this.elmts.blocks = document.getElementsByClassName('js-block');
        this.elmts.stickRight = document.getElementsByClassName('about--stick-right');
        this.elmts.stickLeft = document.getElementsByClassName('about--stick-left');
        this.elmts.scaleBlock = document.getElementsByClassName('js-scale')[0];
    },

    bindEvents: function() {
        var self = this;

        // To move.
        var previousHeight = document.getElementsByClassName('about__header')[0].offsetHeight,
            previousHeightScale = this.elmts.scaleBlock.offsetHeight,
            value = window.innerWidth / document.getElementsByClassName('about__header')[0].offsetWidth,
            total = 0;
        this.toScale = value;
        document.getElementsByClassName('about__header')[0].classList.add("active");
        document.getElementsByClassName('about__header')[0].style.transform = "scale("+value+")";
        document.getElementsByClassName('js-scale')[0].style.transform = "scale("+value+")";
        this.elmts.scaleBlock.style.margin = (previousHeightScale*value - previousHeightScale)/1.5 +"px 0 "+(previousHeightScale*value - previousHeightScale)/3+"px 0";
        total += (previousHeightScale*value - previousHeightScale)/3;
        value = previousHeight*value - previousHeight;
        total+=value/2;
        document.getElementsByClassName('about__content')[0].style.transform = "translate3d(0,"+value/2+"px,0)";
        document.getElementsByClassName('about__content')[0].style.marginBottom = total+"px";

        if(!useful.isMobile()) {
            document.getElementsByClassName('about__content')[0].style.height = document.getElementsByClassName('about__content')[0].offsetHeight;
            window.addEventListener('scroll', function() {
                self.handleScroll();
            },supportsPassive ? { passive: true } : false);
        }

        // self.handleScroll(self);
        // scrollIntervalID = setInterval(self.handleScroll.bind(self), 10);
        // window.requestAnimationFrame(self.handleScroll.bind(self));

    },

    init: function() {
        this.bindUi();
        this.bindEvents();

        this.handleValue();
        var self =this;
    },

    handleValue:function() {
        var body = document.body,
            html = document.documentElement;

        this.windowHeight = window.innerHeight;
        this.height = Math.max( body.scrollHeight, body.offsetHeight,
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        // document.getElementById('about').style.height = this.height +"px";
    },

    handleScroll() {
        var value=0,
            scrollLevel = window.pageYOffset;

        // Check for symbiose effect.
        if(scrollLevel+this.windowHeight - 150 > useful.getOffset(document.getElementsByClassName('about__symbiose')[0]).top)
            document.getElementsByClassName('about__symbiose')[0].classList.add("active");
        else
            document.getElementsByClassName('about__symbiose')[0].classList.remove("active");

            // img = this.elmts.scaleBlock.getElementsByTagName('img')[1] || this.elmts.scaleBlock.getElementsByTagName('img')[0];
        for (var i = this.elmts.blocks.length - 1; i >= 0; i--) {
            value = (20*this.elmts.blocks[i].dataset.speed*scrollLevel/this.height);
            // ctx.translateElement(current, value.toFixed(2));
            if(this.elmts.blocks[i].classList.contains("js-scale"))
                this.elmts.blocks[i].style.transform = "scale ("+this.toScale+") translate3d(0,"+ value +"px,0)";
            else
                this.elmts.blocks[i].style.transform = "translate3d(0,"+ value +"px,0)";
        }




        // var valueScale = ()/(scrollLevel - 0.25*window.innerHeight);
        // img.style.transform = "translate3d(0,"+ value.toFixed(2) +"px,0) scale("+ 1
        //  +")";
    },

    translateElement:function(el,value) {

    },

    unbindEvents:function() {
        var self = about;
        window.removeEventListener('scroll', function() {
            window.requestAnimationFrame(self.handleScroll.bind(self));
        });
    }
}

module.exports = about;
