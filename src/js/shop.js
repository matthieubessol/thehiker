function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

var shop = {
    elmts: {

    },

    bindUi: function() {
        this.elmts.grid = document.getElementsByClassName('grid')[0];
        this.elmts.filters = document.getElementsByClassName('js-filter');
        this.elmts.iso = new Isotope( '.grid', {
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            stagger: 30,
            hiddenStyle: {
                opacity: 0,
                // marginTop:0.1,
              },
              visibleStyle: {
                opacity: 1,
                // marginTop:0.1,
              },
            masonry: {
                columnWidth: 100,
                "gutter": 20,
                gutterWidth:20,
                gutter:20,

              }
        });
        this.elmts.pictures = document.getElementsByClassName("grid-item");
        this.elmts.pictureGrid = document.getElementsByClassName("js-picture-grid");
        this.elmts.itemContent = document.getElementsByClassName("grid-item__content");
    },

    bindEvents: function() {
        var self = this;
        for (var i = this.elmts.filters.length - 1; i >= 0; i--) {
            this.elmts.filters[i].addEventListener('click', function(e){
                self.filterGrid(self,e.currentTarget.dataset.filter);
            });
        }

        window.addEventListener('scroll', function() {
            self.handleScroll(self);
        });
    },

    init: function() {
        this.bindUi();
        this.bindEvents();
        this.filterGrid(this,"");
        var self = this;
        setTimeout(function() {
            self.getColors();
        },500);

    },

    filterGrid:function(ctx,filter) {
        ctx.elmts.iso.arrange({filter: filter });
        var time = 1000;
        if(filter!="") time = 300;
        setTimeout(function() {
            ctx.handleScroll(ctx);
        },time); // Wait end of appearance.
    },

    handleScroll:function(ctx) {
        var scrollLevel = window.pageYOffset;
        for (var i = ctx.elmts.pictures.length - 1; i >= 0; i--) {
            if( getOffset(ctx.elmts.pictures[i]).top < scrollLevel + window.innerHeight )
                ctx.elmts.pictures[i].classList.add('active');
        }
    },

    getColors:function() {
        var colorThief = new ColorThief();
        for (var i = this.elmts.pictureGrid.length - 1; i >= 0; i--) {
            var color = colorThief.getColor(this.elmts.pictureGrid[i]);
            this.elmts.itemContent[i].style.backgroundColor = "rgb("+color[0]+","+color[1]+","+color[2]+")";
            this.elmts.itemContent[i].getElementsByClassName('triangle')[0].style.borderWidth = this.elmts.itemContent[i].offsetWidth*0.2*0.95 +"px 0 0 "+this.elmts.itemContent[i].offsetWidth+"px";
            this.elmts.itemContent[i].getElementsByClassName('triangle')[0].style.borderColor = "transparent transparent transparent rgb("+color[0]+","+color[1]+","+color[2]+")";

            var value = 0,
                item  = this.elmts.itemContent[i],
                wrapperWidth  = this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0].offsetWidth,
                wrapperHeight = this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0].offsetHeight,
                vertical = false;
            if(this.elmts.itemContent[i].offsetWidth>this.elmts.itemContent[i].offsetHeight){
                this.elmts.itemContent[i].classList.add('horizontal');
                vertical = false;
            }
            else{
                this.elmts.itemContent[i].classList.add('vertical');
                vertical = true;
            }
            value = Math.min(
                ((this.elmts.itemContent[i].offsetWidth)/(wrapperWidth+40)),
                ((this.elmts.itemContent[i].offsetHeight)/(wrapperHeight+40))
            );

            var marginLeft = getOffset(this.elmts.itemContent[i]).left - getOffset(this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0]).left;
            var widthScale = this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0].offsetWidth*value;
            var oldValue = this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0].offsetWidth;

                this.elmts.itemContent[i].getElementsByClassName('grid-item__wrapper')[0].style.transform = "translate("+ 0 +"px,-50%) scale("+value*0.95+")";

        }
    },

    unbindEvents:function() {
        var self = this;
        for (var i = this.elmts.filters.length - 1; i >= 0; i--) {
            this.elmts.filters[i].removeEventListener('click', function(e){
                self.filterGrid(self,e.currentTarget.dataset.filter);
            });
        }
    }



}

module.exports = shop;
