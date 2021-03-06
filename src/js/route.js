// require("babel-polyfill");
var animation = require('./animation.js');
var shop      = require('./shop.js');
var about     = require('./about.js');
var fugues    = require('./fugues.js');
var sound     = require('./sound.js');

// var BASE_URL = "http://localhost:8888/thehiker/";
var BASE_URL = "http://localhost:8888/thehiker";
//var BASE_URL = "http://www.matthieubessol.com/thehiker";

var route = {
    elmts: {},
    script:false,

    scrollTo(element, to, duration) {
        if (duration <= 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) return;
            scrollTo(element, to, duration - 10);
        }, 10);
    },

    bindUi() {
        this.elmts.links = document.getElementsByClassName('js-links');
        this.elmts.smallLoader = document.getElementsByClassName('small-loader')[0];
    },

    bindEvents() {
        for (var i = this.elmts.links.length - 1; i >= 0; i--) {
            this.elmts.links[i].addEventListener('click', this.getRoute.bind(this));
        }
    },

    init() {
        this.bindUi();
        this.bindEvents();
        this.getFirstPage();
    },

    getFirstPage() {
        var pathFile = "./home.html";
        var url = window.location.href;
        document.getElementById('app').classList.remove('no-background');
        document.getElementsByClassName('content')[0].classList.remove('no-background');
        console.log(url);
        switch (url) {
            case BASE_URL+"/shop/":
                pathFile = "/thehiker/shop/index.html";
                break;
            case BASE_URL+"/about.html":
                pathFile = "/thehiker/about.html";
                break;
            case BASE_URL + "/guide.html":
                pathFile = "/thehiker/guide.html";
                break;
            case BASE_URL+"/fugues/":
                pathFile = "/thehiker/fugues/index.html";
                break;
            case BASE_URL+"/fugues/iceland/":
                this.loadJs();
                pathFile = "/thehiker/fugues/iceland/index.html";
                break;
            case BASE_URL+"/fugues/amazonie/":
                this.loadJs();
                pathFile = "/thehiker/fugues/amazonie/index.html";
                break;
            case BASE_URL+"/fugues/nepal/":
                this.loadJs();
                pathFile = "/thehiker/fugues/nepal/index.html";
                break;
            case BASE_URL+"/fugues/mountains/":
                pathFile = "/thehiker/fugues/mountains/index.html";
                break;
            case BASE_URL+"/fugues/deserts/":
                pathFile = "/thehiker/fugues/deserts/index.html";
                break;
            case BASE_URL+"/fugues/eau/":
                pathFile = "/thehiker/fugues/eau/index.html";
                break;
            case BASE_URL+"/fugues/forets/":
                pathFile = "/thehiker/fugues/forets/index.html";
                break;
            case BASE_URL+"/shop/products/shoe.html":
                pathFile = "/thehiker/shop/products/shoe.html";
                break;
            default:
                break;
        }

        var self = this;
        this.loadPage(pathFile).then(function(responseText) {
            var wrapper = document.createElement('div');
                wrapper.innerHTML = responseText;

            var newContent = wrapper.querySelector('.cc');
            document.getElementById("app").innerHTML = "";
            document.getElementById("app").appendChild(newContent);
            self.bindUi();
            self.bindEvents();
            animation.init();

            imagesLoaded( document.querySelectorAll('#app'), function() {
                document.getElementsByClassName("content")[0].classList.add('active');
            });

            document.getElementsByClassName('content')[0].classList.remove('content--full');
            document.getElementsByClassName('menu')[0].classList.remove('menu--absolute');
            document.getElementsByClassName('menu')[0].classList.remove('menu--absolute--black');

            self.resetBeforeLaunch(self);
            self.launchAbout();
            self.launchShop();
            self.launchFugues();
            self.launchSound();
            self.launchGuide();

            if(document.getElementsByClassName('js-section')){
                imagesLoaded( document.getElementById('app'), function() {
                    document.getElementsByClassName('content')[0].classList.add('no-background');
                    document.getElementById('app').classList.add('no-background');
                });
            }
            // });
            // document.getElementsByClassName("js-loader")[0].style.display = 'none';
        });
    },

    getRoute(e) {
        about.unbindEvents();
        e.preventDefault();
        this.scrollTo(document.body, 0, 100);
        var self = this;
        // Get the right route.
        var target = e.target;
        while(!target.classList.contains("js-links")) {
            target = target.parentNode;
        }

        window.history.pushState({},"",'/thehiker/'+target.getAttribute('data-url')); // Change URL.
        var time = target.dataset.time || 0;
        this.loadPage(BASE_URL+target.dataset.href).then(function(responseText) {
            var wrapper = document.createElement('div');
                wrapper.innerHTML = responseText;

            document.getElementById('app').classList.remove('no-background');
            document.getElementsByClassName('content')[0].classList.remove('no-background');

            var newContent = wrapper.querySelector('.cc');
            animation.init();
            setTimeout(function() {
                document.getElementById('app').classList.add('fadeOut');
                self.elmts.smallLoader.classList.add('active');
            },time)
            setTimeout(function() {
                // We replace the HTML by the new one.
                document.getElementById("app").innerHTML = "";
                document.getElementById("app").appendChild(newContent);
                if(target.getAttribute('data-loadjs')) {
                    document.getElementsByClassName('content')[0].classList.add('no-background');
                    document.getElementById('app').classList.add('no-background');
                    self.loadJs();
                }

                self.resetBeforeLaunch(self);
                self.launchAbout(self);
                self.launchShop(self);
                self.launchFugues(self);
                self.launchSound(self);
                self.launchGuide(self);
            },2000);
        });
    },

    loadPage(pathFile) {
      return fetch(pathFile, {
        method: 'GET'
      }).then(function(response) {
        return response.text();
      });
    },

    loadJs() {
        if(this.script && document.getElementsByClassName('fugues-page')[0]) {
            document.getElementsByClassName('scriptWrapper')[0].innerHTML="";
        }

        this.script = true;
        script = document.createElement('script');
        script.src = BASE_URL+"/js/app.js";
        document.getElementsByClassName('scriptWrapper')[0].appendChild(script);
        script.onload = function () {
            //console.log("load js");
        };
        // document.getElementById('app').appendChild(script);
    },

    loadHighResPictures() {
        var placeholder = document.getElementsByClassName('placeholder'),
            small = document.getElementsByClassName('img-small');

            var arrayImg = new Array();

            for (var i = placeholder.length - 1; i >= 0; i--) {
                // 1: load small image and show it
                var img = new Image();
                img.src = small[i].src;
                img.crossOrigin = "Anonymous";
                img.number = i;
                img.onload = function () {
                 small[this.number].classList.add('loaded');
                };

                // 2: load large image
                arrayImg[i] = new Image();
                arrayImg[i].src = placeholder[i].dataset.large;
                arrayImg[i].crossOrigin = "Anonymous";
                arrayImg[i].number = i;
                arrayImg[i].onload = function () {
                    small[this.number].classList.add('hide');
                  arrayImg[this.number].classList.add('loaded');
                  placeholder[this.number].appendChild(arrayImg[this.number]);
                };
            }
    },

    resetBeforeLaunch(ctx) {
        for (var i = ctx.elmts.links.length - 1; i >= 0; i--) {
            var elClone = ctx.elmts.links[i].cloneNode(true);
            ctx.elmts.links[i].parentNode.replaceChild(elClone, ctx.elmts.links[i]);
        }
        document.getElementsByClassName('content')[0].classList.remove('content--full');
        document.getElementsByClassName('menu')[0].classList.remove('menu--absolute');
        document.getElementsByClassName('menu')[0].classList.remove('menu--absolute--black');
        imagesLoaded( document.querySelectorAll('#app'), function() {
            document.getElementById('app').classList.remove('fadeOut');
            document.getElementsByClassName("content")[0].classList.add('active');
            ctx.loadHighResPictures();
            setTimeout(function() {
                // ctx.loadHighResPictures();
                document.getElementsByClassName('js-loader')[0].style.display = "none";
            },1500);
        });

        animation.init();
        ctx.bindUi();
        ctx.bindEvents();
    },

    replacePicture() {

    },

    launchShop(self) {
        if(shop.elmts.filters)shop.unbindEvents();
        if(document.getElementsByClassName('grid')[0]) {
            var grid = document.querySelectorAll('.grid');
            imagesLoaded( grid, function() {
                shop.init();
                self.elmts.smallLoader.classList.remove('active');
            });
        }

        if(document.getElementsByClassName("product__header")[0])
            document.getElementsByClassName('menu')[0].classList.add('menu--absolute');
    },

    launchGuide(self) {
        if(document.getElementsByClassName('guide')[0]) {
            document.getElementsByClassName('menu')[0].classList.add('menu--absolute');
            imagesLoaded( document.getElementsByClassName('guide')[0], function() {
                self.elmts.smallLoader.classList.remove('active');
            });
        }
    },

    launchAbout(self) {
        if(document.getElementById('about')) {
            document.getElementsByClassName('content')[0].classList.add('content--full');
            document.getElementsByClassName('menu')[0].classList.add('menu--absolute');
            document.getElementsByClassName('menu')[0].classList.add('menu--absolute--black');

            var aboutEl = document.querySelectorAll('.about');
            imagesLoaded( aboutEl, function() {
                setTimeout(function() {
                    about.init();
                    self.elmts.smallLoader.classList.remove('active');
                },500);
            });
        }
    },

    launchSound(self) {
        var self = this;
        if(document.getElementsByClassName('main')) {
            var soundEl = document.querySelectorAll('.main');
            imagesLoaded( soundEl, function() {
                setTimeout(function() {
                    sound.init();
                    self.elmts.smallLoader.classList.remove('active');
                },500);
            });
        }
    },

    launchFugues(self) {
        if(document.getElementsByClassName('fugues')[0] || document.getElementsByClassName('fugues-page')[0] ) {
            if(document.getElementsByClassName('fugues__header')[0] || document.getElementsByClassName('fugues-page')[0] ){
                document.getElementsByClassName('content')[0].classList.add('content--full');
                document.getElementsByClassName('menu')[0].classList.add('menu--absolute');
            }
            var fuguesImages = document.querySelectorAll('.fugues');
            imagesLoaded( fuguesImages, function() {
                fugues.init();
                setTimeout(function() {
                    // console.log("loaded fugues")
                    self.elmts.smallLoader.classList.remove('active');
                },1000);
            });
        }
    },

    removeLoader() {
        this.elmts.smallLoader.classList.remove('active');
    }
}

module.exports = route;
