/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// require("../styles/style.css");
	__webpack_require__(1);
	var route = __webpack_require__(2);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var animation = __webpack_require__(3);
	var shop      = __webpack_require__(4);
	var about     = __webpack_require__(5);
	var fugues    = __webpack_require__(7);
	var sound     = __webpack_require__(8);

	// var BASE_URL = "http://localhost:8888/thehiker/";
	// var BASE_URL = "http://localhost:8888/thehiker/";
	var BASE_URL = "http://www.matthieubessol.com/thehiker/";

	var route = {
	    elmts: {},
	    script:false,

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
	        switch (url) {
	            case BASE_URL+"/shop/":
	                pathFile = "/shop/index.html";
	                break;
	            case BASE_URL+"/about.html":
	                pathFile = "/about.html";
	                break;
	            case BASE_URL+"/fugues/":
	                pathFile = "/fugues/index.html";
	                break;
	            case BASE_URL+"/fugues/iceland/":
	                this.loadJs();
	                pathFile = "/fugues/iceland/index.html";
	                break;
	            case BASE_URL+"/fugues/mountains/":
	                pathFile = "/fugues/mountains/index.html";
	                break;
	            case BASE_URL+"/shop/products/shoe.html":
	                pathFile = "/shop/products/shoe.html";
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
	        if(this.script) return;
	        this.script = true;
	        script = document.createElement('script');
	        script.src = BASE_URL+"/js/app.js";
	        script.onload = function () {
	            //console.log("load js");
	        };
	        document.getElementById('app').appendChild(script);
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


/***/ },
/* 3 */
/***/ function(module, exports) {

	var animation = {
	    elmts: {},

	    bindUi: function() {
	        this.elmts.mainArticle = document.getElementsByClassName('main-article')[0];
	    },

	    bindEvents: function() {
	        var self = this;
	        if(this.elmts.mainArticle){
	            this.elmts.mainArticle.addEventListener('click', function() {
	                self.animMainArticle(self)
	            });
	        }
	    },

	    init: function() {
	        this.bindUi();
	        this.bindEvents();
	    },

	    animMainArticle: function(ctx) {
	        ctx.elmts.mainArticle.classList.add('animate');
	        ctx.unbindEvents(ctx);
	    },

	    unbindEvents:function(ctx) {
	        ctx.elmts.mainArticle.addEventListener('click', function() {
	            ctx.animMainArticle(ctx)
	        });
	    }
	}

	module.exports = animation;


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var useful = __webpack_require__(6);

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
	        // this.elmts.scaleBlock.style.margin = (previousHeightScale*value - previousHeightScale)/1.5 +"px 0 "+(previousHeightScale*value - previousHeightScale)/3+"px 0";
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


/***/ },
/* 6 */
/***/ function(module, exports) {

	var useful = {
	    isMobile:function() {
	        if(window.innerWidth <= 479)
	            return true;
	        else
	            return false;
	    },

	    getOffset:function(el) {
	        el = el.getBoundingClientRect();
	        return {
	          left: el.left + window.scrollX,
	          top: el.top + window.scrollY
	        }
	    }
	}

	module.exports = useful;


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var useful = __webpack_require__(6);

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


/***/ }
/******/ ]);