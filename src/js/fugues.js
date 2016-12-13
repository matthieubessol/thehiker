function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

var fugues = {
    elmts: {},
    options:{
        rotation:"none",
    },
    toScale:0,

    bindUi: function() {
        // this.elmts.myIcons = new SVGMorpheus('#icons');
        this.elmts.fuguesItem = document.getElementsByClassName('fugues__item');
        this.elmts.fuguesPage = document.getElementsByClassName('fugues-top')[0];

    },

    bindEvents: function() {
        for (var i = this.elmts.fuguesItem.length - 1; i >= 0; i--) {
            this.elmts.fuguesItem[i].addEventListener('mouseenter', this.changeSvg.bind(this));
        }
    },

    init: function() {
        this.bindUi();
        this.bindEvents();
        this.setParametersMorph();
        this.handleValue();
    },

    setParametersMorph() {
        // this.elmts.myIcons.registerEasing("ok", "elastic-in-out");
    },

    changeSvg(e) {
        // var targetSvg = e.target.dataset.svg;
        // this.elmts.myIcons.to(targetSvg);
    },

    handleValue() {console.log("hanfle")
        if(document.getElementsByClassName('fugues__header')[0]) {
            var previousHeight = document.getElementsByClassName('fugues__header')[0].offsetHeight,
                value = window.innerWidth / document.getElementsByClassName('placeholder')[0].offsetWidth;
            this.toScale = value;
            setTimeout(function() {
                document.getElementsByClassName('fugues__header')[0].classList.add("active");
                document.getElementsByClassName('fugues__header')[0].style.transform = "scale("+value+")";
            },1000);

            setTimeout(function() {
                var newHeight = previousHeight*value;
                diffHeight = newHeight - previousHeight - getOffset(document.getElementsByClassName('fugues__header')[0]).top;
                value = previousHeight*value - previousHeight;
                // document.getElementsByClassName('fugues__wrapper')[0].style.transform = "translate3d(0,"+ -(value/2 - 0.2*previousHeight) +"px,0)";
                // document.getElementsByClassName('fugues__wrapper')[0].style.marginBottom = value +"px";
            },1010);
        } else if(this.elmts.fuguesPage) {
            var previousHeight = this.elmts.fuguesPage.offsetHeight,
                value = window.innerWidth / document.getElementsByClassName('placeholder')[0].offsetWidth;
            this.toScale = value;
            this.elmts.fuguesPage.classList.add("active");
            this.elmts.fuguesPage.style.transform = "scale("+value+")";
        }

    }



}

module.exports = fugues;
