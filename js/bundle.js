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

	__webpack_require__(1);
	__webpack_require__(5);
	var route = __webpack_require__(6);
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
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Cormorant|Montserrat);", ""]);

	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * Gridpak Beta SCSS\n *\n * Generator - http://gridpak.com/\n * Created by @simplygoodwork\n */\n/* Reusable column setup */\n.col {\n  border: 0px solid transparent;\n  float: left;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  -moz-background-clip: padding-box !important;\n  -webkit-background-clip: padding-box !important;\n  background-clip: padding-box !important; }\n  @media (max-width: 479px) {\n    .col {\n      float: none; } }\n\n    /* 1. 1 Column Grid 0px - 479px\n    -----------------------------------------------------------------------------\n\n    Span 1:    100%\n\n    ----------------------------------------------------------------------------- */\n@media screen and (min-width: 0px) and (max-width: 479px) {\n  .col {\n    margin-left: 0%;\n    padding: 0 0%; }\n\n  /* --- Gridpak variables ---*/\n  .row .col:first-child {\n    margin-left: 0; }\n\n        /*\n        Add your semantic classnames in alongside their corresponding spans here. e.g.\n\n        .span_3,\n        .my_semantic_class_name {\n            ...\n        }\n\n        */\n  .span_1 {\n    margin-left: 0;\n    width: 100%; } }\n    /* 2. 6 Column Grid 480px - 959px\n    -----------------------------------------------------------------------------\n\n    Span 1:    15.4166666667%\n    Span 2:    32.3333333333%\n    Span 3:    49.25%\n    Span 4:    66.1666666667%\n    Span 5:    83.0833333333%\n    Span 6:    100%\n\n    ----------------------------------------------------------------------------- */\n.row {\n  padding: 20px 0;\n  overflow: hidden; }\n  @media (max-width: 479px) {\n    .row {\n      overflow: visible; } }\n\n@media screen and (min-width: 480px) and (max-width: 959px) {\n  .col {\n    margin-left: 1.5%;\n    padding: 0 1.3%; }\n\n  /* --- Gridpak variables ---*/\n  .row .col:first-child {\n    margin-left: 0; }\n\n  .span_1 {\n    width: 15.41667%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_2 {\n    width: 32.33333%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_3 {\n    width: 49.25%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_4 {\n    width: 66.16667%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_5 {\n    width: 83.08333%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_6 {\n    margin-left: 0;\n    width: 100%; } }\n    /* 3. 12 Column Grid 960px - Infinity\n    -----------------------------------------------------------------------------\n\n    Span 1:    6.95833333333%\n    Span 2:    15.4166666667%\n    Span 3:    23.875%\n    Span 4:    32.3333333333%\n    Span 5:    40.7916666667%\n    Span 6:    49.25%\n    Span 7:    57.7083333333%\n    Span 8:    66.1666666667%\n    Span 9:    74.625%\n    Span 10:    83.0833333333%\n    Span 11:    91.5416666667%\n    Span 12:    100%\n\n    ----------------------------------------------------------------------------- */\n@media screen and (min-width: 960px) {\n  .col {\n    margin-left: 1.5%;\n    padding: 0 1.3%; } }\n  @media screen and (min-width: 960px) and (max-width: 479px) {\n    .col {\n      width: 100%; } }\n\n@media screen and (min-width: 960px) {\n  /* --- Gridpak variables ---*/\n  .row .col:first-child {\n    margin-left: 0; }\n\n  .span_1 {\n    width: 6.95833%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_2 {\n    width: 15.41667%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_3 {\n    width: 23.875%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_4 {\n    width: 32.33333%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_5 {\n    width: 40.79167%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_6 {\n    width: 49.25%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_7 {\n    width: 57.70833%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_8 {\n    width: 66.16667%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_9 {\n    width: 74.625%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_10 {\n    width: 83.08333%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_11 {\n    width: 91.54167%;\n    border-left-width: 0;\n    padding: 0 1.3%;\n    margin-left: 1.5%; }\n\n  .span_12 {\n    margin-left: 0;\n    width: 100%; } }\n.clear-margin {\n  margin: 0; }\n\n.left_1 {\n  margin-left: 6.95833333333% !important; }\n  @media (max-width: 479px) {\n    .left_1 {\n      margin-left: 0 !important; } }\n\n.left_2 {\n  margin-left: 15.4166666667% !important; }\n  @media (max-width: 479px) {\n    .left_2 {\n      margin-left: 0 !important; } }\n\n.left_3 {\n  margin-left: 23.875% !important; }\n  @media (max-width: 479px) {\n    .left_3 {\n      margin-left: 0 !important; } }\n\n.col--center {\n  margin: 0 auto; }\n\n.row + .row {\n  padding-top: 0px; }\n\n#app .no-bottom {\n  margin-bottom: 0; }\n\n.fugues-page .text section p, .fugues-page .text figcaption, .fugues-top__subtitle, .fugues-quote__quote, .product__text {\n  font-family: 'Cormorant', serif;\n  font-style: normal;\n  font-weight: normal; }\n\n.fugues__type, span.title-down, .fugues-top__title, .grid-item__title, .grid-item__price, .product__title, .product__subtitle, .product__price, .product__buy, .product__quantity {\n  font-family: 'Montserrat', sans-serif;\n  font-style: normal;\n  font-weight: normal; }\n\n.menu {\n  position: relative;\n  padding: 20px 0;\n  margin: 0 auto;\n  text-align: center;\n  transition: 0.5s;\n  z-index: 9999; }\n  .menu--absolute .menu__title, .menu--absolute .menu__item {\n    color: white; }\n  .menu__title {\n    font-family: 'Cormorant', serif;\n    font-size: 64px;\n    text-decoration: none;\n    color: black;\n    transition: 0.8s; }\n    @media (max-width: 479px) {\n      .menu__title {\n        font-size: 54px; } }\n  .menu__container {\n    width: 50%;\n    display: flex;\n    flex-direction: row;\n    margin: 0 auto;\n    margin-top: 30px; }\n    @media (max-width: 479px) {\n      .menu__container {\n        width: 100%;\n        padding: 0 10px;\n        box-sizing: border-box;\n        margin-top: 15px; } }\n  .menu__item {\n    flex: 1;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 24px;\n    text-transform: uppercase;\n    color: black;\n    text-decoration: none;\n    position: relative;\n    transition: 0.3s; }\n    @media (max-width: 479px) {\n      .menu__item {\n        font-size: 16px; } }\n    .menu__item:hover {\n      color: white; }\n    .menu__item:hover:after {\n      opacity: 1; }\n    .menu__item:after {\n      content: \"\";\n      display: block;\n      width: 100%;\n      max-width: 200px;\n      height: 30px;\n      background-image: url(\"/assets/images/background-link.png\");\n      position: absolute;\n      background-size: 100% 31px;\n      top: 50%;\n      z-index: -1;\n      opacity: 0;\n      transition: 0.3s;\n      transform-origin: left;\n      left: 50%;\n      transform: translate(-50%, -57%); }\n\n.menu--absolute + #app {\n  margin-top: -170px !important; }\n\n.menu--absolute + #app.no-background {\n  transform: none !important; }\n\n.main-article {\n  position: relative;\n  margin-bottom: 40px;\n  overflow: hidden; }\n  .main-article .cls-1, .main-article .cls-2 {\n    stroke: #000; }\n  @media (max-width: 479px) {\n    .main-article {\n      margin-bottom: 20px;\n      overflow: visible; } }\n  .main-article .main-article__image-container {\n    overflow: hidden; }\n  .main-article img {\n    width: 100%;\n    transition: 5s;\n    transform: scale(1);\n    display: block; }\n  .main-article:hover img {\n    transition: 8s;\n    transform: scale(1.2); }\n  .main-article__content {\n    position: absolute;\n    right: 0;\n    top: 20px;\n    border: 5px solid black;\n    padding: 40px;\n    right: 2.6%;\n    transform: scaleX(1);\n    transition: 0.5s;\n    transition-delay: 0.3s;\n    transform-origin: right; }\n    @media (max-width: 479px) {\n      .main-article__content {\n        position: static;\n        padding: 0;\n        border: 0px; } }\n    .main-article__content:after {\n      position: absolute;\n      content: \"\";\n      display: block;\n      background: black;\n      height: 100%;\n      width: 100%;\n      transition: 0.5s;\n      transform: scaleX(0);\n      top: 0;\n      left: 0;\n      transform-origin: left; }\n  .main-article__image-container {\n    position: relative; }\n    @media (max-width: 479px) {\n      .main-article__image-container {\n        margin-bottom: 10px; } }\n    .main-article__image-container .main-article__filter {\n      position: absolute;\n      content: \"\";\n      display: block;\n      background: white;\n      height: 100%;\n      width: 100%;\n      transition: 1s;\n      transform: scaleX(0);\n      top: 0;\n      left: 0;\n      transform-origin: left; }\n  .main-article__title {\n    font-size: 64px;\n    color: black;\n    font-family: 'Montserrat', sans-serif;\n    margin: 0;\n    text-decoration: none; }\n    @media (max-width: 479px) {\n      .main-article__title {\n        font-size: 24px; }\n        .main-article__title br {\n          display: none; } }\n  .main-article__quote {\n    font-family: 'Cormorant', serif;\n    font-size: 36px;\n    text-align: center;\n    opacity: 0.55;\n    margin-top: 25px;\n    color: black; }\n    @media (max-width: 479px) {\n      .main-article__quote {\n        font-size: 24px;\n        text-align: left;\n        margin-top: 10px; } }\n  .main-article__arrow {\n    position: absolute;\n    bottom: 0;\n    right: 1.3%;\n    transition: 0.5s;\n    transform: translateX(0); }\n    .main-article__arrow svg {\n      width: 150px; }\n  .main-article:hover .main-article__arrow {\n    transform: translateX(-20%); }\n  .main-article.animate .main-article__content {\n    transform-origin: right;\n    transform: scaleX(0); }\n  .main-article.animate .main-article__content:after {\n    transform: scaleX(1); }\n  .main-article.animate .main-article__filter {\n    transform: scaleX(1); }\n  .main-article.animate .main-article__arrow {\n    transform: translateX(200%); }\n\n.span_article {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  width: 42%;\n  padding: 0 1.3%; }\n  @media (max-width: 479px) {\n    .span_article {\n      position: static;\n      padding: 0 0px;\n      width: 100%; } }\n\n@media (max-width: 479px) {\n  .article {\n    display: flex;\n    margin-bottom: 15px; }\n    .article .placeholder {\n      flex: 3;\n      margin-bottom: 0; } }\n@media (max-width: 479px) {\n  .article__content {\n    flex: 7;\n    padding-left: 8px; } }\n.article__picture {\n  margin-bottom: 10px;\n  width: 100%; }\n.article__title {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 40px;\n  margin-top: 5px; }\n  @media (max-width: 479px) {\n    .article__title {\n      font-size: 20px;\n      margin-top: 0; } }\n.article__quote {\n  font-family: 'Cormorant', serif;\n  font-size: 30px;\n  opacity: 0.75;\n  margin-bottom: 5px;\n  margin-top: -3px; }\n  @media (max-width: 479px) {\n    .article__quote {\n      display: none;\n      font-size: 16px;\n      text-align: left;\n      margin-top: 10px; } }\n.article__date {\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.19); }\n  .article__date span {\n    color: black; }\n.article--small .article__picture {\n  margin-bottom: 5px; }\n.article--small .article__title {\n  font-size: 24px; }\n.article--small .article__date {\n  margin-top: 3px; }\n\n.full-guide {\n  width: 100%;\n  position: relative; }\n  @media (max-width: 479px) {\n    .full-guide {\n      width: calc(100% + 20px);\n      margin-left: -10px; } }\n  .full-guide__cover {\n    width: 100%; }\n    .full-guide__cover img {\n      width: 100%; }\n  .full-guide__content {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 55px; }\n    @media (max-width: 479px) {\n      .full-guide__content {\n        left: 20px;\n        width: calc(100% - 40px); } }\n  .full-guide__title {\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 144px;\n    text-transform: uppercase; }\n    @media (max-width: 479px) {\n      .full-guide__title {\n        font-size: 40px; } }\n  .full-guide__baseline {\n    font-family: 'Cormorant', serif;\n    font-size: 64px;\n    color: white; }\n    @media (max-width: 479px) {\n      .full-guide__baseline {\n        font-size: 16px; } }\n  .full-guide__arrow {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    text-align: right; }\n    .full-guide__arrow .cls-1, .full-guide__arrow .cls-2 {\n      stroke: #fff; }\n    .full-guide__arrow svg {\n      width: 50%; }\n      .full-guide__arrow svg polyline + path {\n        fill: #fff; }\n\n.filter {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: white;\n  opacity: 0.2; }\n\n.home-about {\n  border: 4px solid black;\n  box-sizing: border-box;\n  padding: 30px;\n  position: absolute;\n  margin-right: 1.3%; }\n  @media (max-width: 479px) {\n    .home-about {\n      margin-right: 0;\n      position: relative;\n      padding: 15px; } }\n  .home-about__title {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 36px;\n    margin-bottom: 20px; }\n  .home-about__arrow {\n    display: block;\n    position: static;\n    text-align: right;\n    width: 100%; }\n    .home-about__arrow svg {\n      width: 150px; }\n  .home-about__text {\n    font-family: 'Cormorant', serif;\n    font-size: 24px;\n    opacity: 0.62;\n    margin-bottom: 40px; }\n    @media (max-width: 479px) {\n      .home-about__text {\n        font-size: 16px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 6;\n        /* number of lines to show */\n        line-height: 16px;\n        /* fallback */\n        max-height: 96px; } }\n\n.footer {\n  width: 100%;\n  bottom: 0;\n  overflow: hidden; }\n  .footer__background {\n    width: 100%;\n    display: block; }\n  .footer__container {\n    position: relative; }\n  .footer__filter {\n    height: 100%;\n    background-image: linear-gradient(-180deg, rgba(98, 98, 98, 0) 0%, rgba(65, 65, 65, 0.98) 54%, #333333 79%);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n  .footer__newsletter {\n    position: absolute;\n    top: 20%;\n    left: 50%;\n    transform: translateX(-50%); }\n    @media (max-width: 479px) {\n      .footer__newsletter {\n        transform: translateX(-50%) scale(0.7);\n        top: 3%;\n        left: 50%; } }\n\n.newsletter__title {\n  /* Newsletter: */\n  font-family: 'Montserrat', sans-serif;\n  font-size: 72px;\n  color: #FFFFFF;\n  letter-spacing: 0px;\n  text-align: center;\n  margin-bottom: 10px; }\n.newsletter__container {\n  position: relative; }\n.newsletter__input {\n  font-family: 'Cormorant', serif;\n  font-size: 24px;\n  border: 0px;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  width: 100%;\n  padding: 15px 15px;\n  box-sizing: border-box; }\n.newsletter__submit {\n  position: absolute;\n  right: 0;\n  top: 52%;\n  transform: translateY(-50%);\n  right: 15px;\n  background: none;\n  border: none; }\n  .newsletter__submit svg {\n    width: 40px; }\n.newsletter__left {\n  flex: 1;\n  margin-top: 10px; }\n.newsletter__right {\n  flex: 1;\n  text-align: right; }\n.newsletter__content {\n  position: absolute;\n  bottom: 95px;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  margin: 0 auto;\n  left: 50%;\n  transform: translateX(-50%);\n  flex-direction: row;\n  display: flex; }\n  @media (max-width: 479px) {\n    .newsletter__content {\n      position: relative;\n      padding: 0 10px;\n      left: auto;\n      transform: translateX(0);\n      bottom: 0; } }\n  .newsletter__content__title {\n    font-family: 'Cormorant', serif;\n    font-size: 64px;\n    color: #FFFFFF;\n    letter-spacing: 0px; }\n    @media (max-width: 479px) {\n      .newsletter__content__title {\n        font-size: 40px; } }\n  .newsletter__content__baseline {\n    opacity: 0.5;\n    font-family: 'Cormorant', serif;\n    font-size: 24px;\n    color: #FFFFFF;\n    letter-spacing: 0px; }\n    @media (max-width: 479px) {\n      .newsletter__content__baseline {\n        font-size: 18px; } }\n\n.list {\n  position: relative;\n  right: 0;\n  display: inline-block;\n  font-family: 'Montserrat', sans-serif;\n  text-transform: uppercase; }\n  @media (max-width: 479px) {\n    .list {\n      right: 10px; } }\n  .list__container {\n    display: inline-block;\n    margin-right: 60px;\n    text-align: left; }\n    @media (max-width: 479px) {\n      .list__container {\n        margin-right: 10px;\n        font-size: 12px; } }\n  .list__item {\n    display: block;\n    /* CONTACT: */\n    font-size: 16px;\n    color: #C6C6C6;\n    letter-spacing: 0px;\n    margin-top: 15px; }\n    @media (max-width: 479px) {\n      .list__item {\n        font-size: 12px;\n        margin-bottom: 20px; } }\n\n.line {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -30px;\n  height: 2px;\n  background: #dcdcdc;\n  width: 70%;\n  left: 50%;\n  transform: translateX(-50%); }\n\n@media (max-width: 479px) {\n  #about .placeholder {\n    width: calc(100% + 20px);\n    margin-left: -10px; } }\n\n.about__header {\n  transform: scale(1);\n  transition: 1s; }\n.about__content {\n  transition: 0.5s;\n  transform: translate3d(0, 0, 0); }\n.about__text {\n  font-family: 'Cormorant', serif;\n  font-size: 24px; }\n  @media (max-width: 479px) {\n    .about__text {\n      font-size: 19px;\n      line-height: 1.5; } }\n  .about__text--big {\n    font-size: 36px !important;\n    line-height: 43px !important; }\n    @media (max-width: 479px) {\n      .about__text--big {\n        font-size: 26px !important;\n        line-height: 41px !important; } }\n  .about__text--center {\n    text-align: center;\n    line-height: 40px; }\n    @media (max-width: 479px) {\n      .about__text--center {\n        line-height: 33px; } }\n.about__symbiose {\n  text-align: center;\n  margin: 40px; }\n  @media (max-width: 479px) {\n    .about__symbiose {\n      margin: 20px; } }\n  .about__symbiose .about__text {\n    opacity: 0;\n    font-size: 72px !important;\n    line-height: 88px !important;\n    transition: 3s; }\n    @media (max-width: 479px) {\n      .about__symbiose .about__text {\n        font-size: 42px !important;\n        line-height: 50px !important; } }\n    .about__symbiose .about__text:first-child {\n      margin-left: -120px;\n      transform: translateX(-100px); }\n      @media (max-width: 479px) {\n        .about__symbiose .about__text:first-child {\n          margin-left: -90px; } }\n    .about__symbiose .about__text:last-child {\n      margin-left: 150px;\n      transform: translateX(100px); }\n      @media (max-width: 479px) {\n        .about__symbiose .about__text:last-child {\n          margin-left: 50px; } }\n  .about__symbiose.active .about__text {\n    opacity: 1;\n    transform: translateX(0); }\n.about__team {\n  font-size: 40px;\n  width: 60%;\n  margin: 0 auto;\n  margin-top: 80px; }\n  @media (max-width: 479px) {\n    .about__team {\n      font-size: 25px;\n      width: 85%; } }\n.about__list {\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 60px;\n  display: flex;\n  width: 70%;\n  margin-bottom: 20px; }\n  @media (max-width: 479px) {\n    .about__list {\n      margin-top: 40px;\n      width: 85%;\n      flex-direction: column;\n      margin-bottom: 0px; } }\n.about__item {\n  list-style: none;\n  display: inline-block;\n  flex: 1;\n  font-family: 'Cormorant', serif;\n  font-size: 40px;\n  color: rgba(0, 0, 0, 0.27); }\n  @media (max-width: 479px) {\n    .about__item {\n      font-size: 30px;\n      line-height: 40px; } }\n\n.block-1 {\n  margin-top: 50px; }\n  @media (max-width: 479px) {\n    .block-1 {\n      margin-top: 0; } }\n\n.block-2 {\n  margin-top: 60px;\n  position: relative; }\n  @media (max-width: 479px) {\n    .block-2 {\n      margin-top: 30px; }\n      .block-2:before {\n        content: \"\";\n        display: block;\n        position: absolute;\n        top: -30px;\n        height: 1px;\n        background: #dcdcdc;\n        width: 70%;\n        left: 50%;\n        transform: translateX(-50%); } }\n  .block-2 .about__text--center {\n    margin-top: 50px; }\n    @media (max-width: 479px) {\n      .block-2 .about__text--center {\n        margin: 20px; } }\n\n.block-6 {\n  margin-top: 50px; }\n  @media (max-width: 479px) {\n    .block-6 {\n      margin: 40px 0; } }\n  .block-6 .about__text {\n    line-height: 38px; }\n\n.block-7 {\n  margin: 100px 0;\n  position: relative; }\n  @media (max-width: 479px) {\n    .block-7 {\n      margin: 50px 0; } }\n  .block-7 .about__big-image__title {\n    position: absolute;\n    z-index: 1;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n    /* Avoir des idées c’es: */\n    font-family: 'Cormorant', serif;\n    font-size: 62px;\n    color: #FFFFFF;\n    letter-spacing: 0px;\n    width: 50%;\n    text-align: center; }\n    @media (max-width: 479px) {\n      .block-7 .about__big-image__title {\n        font-size: 25px;\n        width: 70%; } }\n\n.about--stick-left {\n  left: 0 !important;\n  right: auto !important;\n  margin-top: -150px; }\n  @media (max-width: 479px) {\n    .about--stick-left {\n      margin-top: 0; } }\n\n.about--stick-right {\n  right: 0 !important;\n  left: auto !important; }\n\n.about img {\n  display: block;\n  transform: translateZ(0); }\n\n.about .img-small.loaded {\n  display: none; }\n\n.about .row {\n  overflow: visible; }\n\n@media (max-width: 479px) {\n  margin-top: 0; }\n.fugues .placeholder {\n  margin-bottom: 0; }\n.fugues__type  {\n  font-size: 80px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  color: white;\n  text-transform: uppercase; }\n.fugues__wrapper {\n  height: 100vh;\n  position: relative; }\n@media (max-width: 479px) {\n  .fugues__list {\n    display: flex;\n    flex-direction: column; } }\n.fugues__item {\n  position: absolute;\n  transition: 0.5s; }\n  .fugues__item:after {\n    transition: 0.5s;\n    content: \"\";\n    display: block;\n    width: 90%;\n    height: 85%;\n    position: absolute;\n    top: 0;\n    border: 4px solid black;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n  @media (max-width: 479px) {\n    .fugues__item {\n      width: 100% !important;\n      left: 0 !important;\n      top: auto !important;\n      right: auto !important;\n      display: block;\n      height: 150px;\n      overflow: hidden;\n      position: relative !important;\n      flex: 1;\n      margin-bottom: 10px; }\n      .fugues__item .placeholder {\n        height: 150px; }\n        .fugues__item .placeholder img {\n          position: absolute;\n          top: 50%;\n          transform: translateY(-50%); }\n      .fugues__item:after {\n        height: 75%; } }\n.fugues__text {\n  font-family: 'Montserrat', sans-serif;\n  text-transform: uppercase;\n  margin: 0;\n  color: black;\n  position: absolute;\n  font-size: 24px; }\n.fugues .mountain {\n  width: 30%;\n  left: 10%;\n  top: 10%; }\n  .fugues .mountain .fugues__text {\n    bottom: 30px;\n    right: 40px; }\n  .fugues .mountain:hover:after {\n    transform: translate(calc(-50% + 40px), calc(-50% + 40px)); }\n.fugues .desert {\n  width: 25%;\n  right: 10%;\n  top: 5%; }\n  .fugues .desert .fugues__text {\n    bottom: 30px;\n    left: 30px; }\n  .fugues .desert:after {\n    height: 93%; }\n    @media (max-width: 479px) {\n      .fugues .desert:after {\n        height: 75%; } }\n  .fugues .desert:hover:after {\n    transform: translate(calc(-50% - 40px), calc(-50% + 40px)); }\n.fugues__header {\n  position: relative;\n  transition: 0.5s;\n  transform: scale(1); }\n  @media (max-width: 479px) {\n    .fugues__header {\n      height: 60vh; }\n      .fugues__header .placeholder {\n        height: 100%; }\n        .fugues__header .placeholder img {\n          height: 100%;\n          width: auto;\n          left: 50%;\n          transform: translateX(-50%); } }\n  .fugues__header:after {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background: rgba(40, 76, 36, 0.8);\n    left: 0;\n    top: 0;\n    z-index: 1; }\n\n.fugues__type {\n  font-size: 80px;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -75%);\n  z-index: 2;\n  color: white; }\n  @media (max-width: 479px) {\n    .fugues__type {\n      font-size: 40px; } }\n\n.fugues-page .text section p {\n  font-size: 1.1em; }\n\n.fugues-top {\n  height: 80vh;\n  position: relative; }\n  .fugues-top__content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 80%;\n    transform: translate(-50%, -50%);\n    text-align: center; }\n  .fugues-top__title {\n    font-size: 64px;\n    color: #FFFFFF;\n    letter-spacing: 0px;\n    padding: 0; }\n  .fugues-top__subtitle {\n    font-size: 36px;\n    color: #FFFFFF;\n    letter-spacing: 0px;\n    margin-top: 5px;\n    margin-bottom: 0; }\n  .fugues-top .placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 80vh; }\n    .fugues-top .placeholder img {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n\n.fugues-quote {\n  background: #284C24;\n  position: relative;\n  height: 120vh; }\n  .fugues-quote:before, .fugues-quote:after {\n    content: \"\";\n    display: block;\n    width: 20000px;\n    position: absolute;\n    height: 100%;\n    top: 0;\n    background: #284C24; }\n  .fugues-quote:before {\n    left: -19999px; }\n  .fugues-quote:after {\n    right: -19999px; }\n  .fugues-quote__quote {\n    position: absolute;\n    left: 50%;\n    width: 90%;\n    text-align: center;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 48px;\n    color: #FFFFFF;\n    letter-spacing: 0px; }\n  .fugues-quote svg {\n    position: absolute;\n    left: 50%;\n    bottom: 30%;\n    transform: translateX(-50%); }\n\n.load-fugue {\n  background: green;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n  .load-fugue .clip-me {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 200px;\n    height: 200px;\n    background: white;\n    -webkit-clip-path: polygon(108px 57px, 130px 28px, 179px 111px, 4px 114px, 68px 1px);\n    clip-path: url(\"#clipPolygon\"); }\n\nbody {\n  padding: 0;\n  margin: 0;\n  margin: 0 auto;\n  overflow-x: hidden; }\n\n.content {\n  min-height: 100vh;\n  max-width: 1200px;\n  margin: 0 auto;\n  z-index: 8000000000000;\n  position: relative;\n  background: white; }\n  .content--full .row {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 100%; }\n  .content:after {\n    content: \"\";\n    display: block;\n    width: 2000px;\n    background: white;\n    position: absolute;\n    top: 0;\n    right: -2000px;\n    height: 100%; }\n  .content:before {\n    content: \"\";\n    display: block;\n    width: 2000px;\n    background: white;\n    position: absolute;\n    top: 0;\n    left: -2000px;\n    height: 100%; }\n\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: white; }\n  .loader__background {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 50%;\n    top: 50%;\n    transform: translateX(-50%) translateY(-50%); }\n  .loader__title {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%) translateY(calc(-50% + 50px));\n    color: white;\n    font-size: 144px;\n    font-family: 'Cormorant', serif;\n    letter-spacing: 10px;\n    opacity: 0;\n    animation: fadeIn 0.8s forwards ease-out;\n    animation-delay: 0.5s; }\n\n#app {\n  position: relative;\n  z-index: 1000; }\n\n.foot {\n  position: absolute;\n  left: 50%;\n  z-index: 10;\n  top: calc(50% + 200px);\n  transform: translateX(-50%) translateY(calc(-50%));\n  animation: fadeIn 0.8s forwards ease-out;\n  animation-delay: 0.5s; }\n  .foot__left {\n    opacity: 0;\n    width: 20px;\n    animation: footLeft 5s infinite;\n    -webkit-filter: invert(100%); }\n  .foot__right {\n    opacity: 0;\n    width: 20px;\n    animation: footRight 5s infinite;\n    animation-delay: 0.8s;\n    -webkit-filter: invert(100%); }\n\n.content {\n  z-index: 100;\n  background: white;\n  z-index: 10000000000;\n  transform: translateY(100vh); }\n  .content.active {\n    transition: 1.5s;\n    transition-timing-function: ease-in-out;\n    transform: translateY(0vh); }\n\nh1 {\n  color: black;\n  margin: 0;\n  padding: 20px; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(calc(-50% + 50px)); }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(-50%); } }\n@keyframes footLeft {\n  0% {\n    opacity: 0;\n    transform: translateY(0px); }\n  5% {\n    opacity: 1;\n    transform: translateY(0px); }\n  15% {\n    opacity: 1;\n    transform: translateY(0px); }\n  20% {\n    opacity: 0;\n    transform: translateY(0px); }\n  30% {\n    opacity: 0;\n    transform: translateY(-100px); }\n  35% {\n    opacity: 1;\n    transform: translateY(-100px); }\n  45% {\n    opacity: 1;\n    transform: translateY(-100px); }\n  50% {\n    opacity: 0;\n    transform: translateY(-100px); }\n  60% {\n    opacity: 0;\n    transform: translateY(-50px); }\n  65% {\n    opacity: 1;\n    transform: translateY(-50px); }\n  75% {\n    opacity: 1;\n    transform: translateY(-50px); }\n  80% {\n    opacity: 0;\n    transform: translateY(-50px); } }\n@keyframes footRight {\n  0% {\n    opacity: 0;\n    transform: translateY(-50px); }\n  5% {\n    opacity: 1;\n    transform: translateY(-50px); }\n  15% {\n    opacity: 1;\n    transform: translateY(-50px); }\n  20% {\n    opacity: 0;\n    transform: translateY(-50px); }\n  30% {\n    opacity: 0;\n    transform: translateY(0px); }\n  35% {\n    opacity: 1;\n    transform: translateY(0px); }\n  45% {\n    opacity: 1;\n    transform: translateY(0px); }\n  50% {\n    opacity: 0;\n    transform: translateY(0px); }\n  60% {\n    opacity: 0;\n    transform: translateY(-100px); }\n  65% {\n    opacity: 1;\n    transform: translateY(-100px); }\n  75% {\n    opacity: 1;\n    transform: translateY(-100px); }\n  80% {\n    opacity: 0;\n    transform: translateY(-100px); } }\nheader {\n  margin: 0; }\n\n#app .cc {\n  transition: 0.5s;\n  opacity: 1;\n  transform: translateY(0px); }\n\n#app.no-background .cc {\n  transform: initial !important; }\n\n#app.fadeOut .cc {\n  transition: 0.5s;\n  opacity: 0;\n  transform: translateY(100px); }\n\n.placeholder {\n  background-color: #f6f6f6;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 10px;\n  background: white; }\n\n.placeholder img {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  transition: opacity 1s linear; }\n\n.placeholder img.loaded {\n  opacity: 1; }\n\n.img-small {\n  filter: blur(50px);\n  /* this is needed so Safari keeps sharp edges */\n  transform: scale(1); }\n\n.block-2  {\n  z-index: 2; }\n\n.block-3  {\n  z-index: 3; }\n\n.block-4  {\n  z-index: 4; }\n\n.block-5  {\n  z-index: 5; }\n\n.block-6  {\n  z-index: 6; }\n\n.block-7  {\n  z-index: 7; }\n\n.block-8  {\n  z-index: 8; }\n\n.block-9  {\n  z-index: 9; }\n\n.block-10  {\n  z-index: 10; }\n\n.block-11 {\n  z-index: 11; }\n\n.grid .grid-item-type:first-child.fifty-thirty .grid-item:last-child {\n  margin-top: 0%; }\n\n.no-background {\n  padding: 0 !important;\n  transform: none !important; }\n\n.grid-item {\n  width: 50%;\n  transform: scale(0.95);\n  overflow: hidden; }\n  .grid-item img {\n    width: 100%;\n    display: block; }\n  .grid-item:before {\n    content: \"\";\n    display: block;\n    background: black;\n    opacity: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    transition: 0.5s;\n    transition-timing-function: ease-in-out; }\n  .grid-item:hover:before {\n    opacity: 0.3; }\n  .grid-item__content {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    height: 40%;\n    padding: 20px;\n    box-sizing: border-box;\n    background: white;\n    transition: 0.5s;\n    transform: translateY(0%);\n    transition-timing-function: ease-in-out; }\n    .grid-item__content .triangle {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 100% 0 0 100%;\n      transform: translateY(-99%);\n      border-color: transparent transparent transparent #007bff; }\n  .grid-item:hover .grid-item__content {\n    transform: translateY(-100%); }\n  .grid-item:after {\n    position: absolute;\n    content: \"\";\n    display: block;\n    z-index: 1;\n    background: white;\n    height: 100%;\n    width: 100%;\n    transition: 1.5s;\n    transition-timing-function: ease-in-out;\n    transform: scaleX(0);\n    top: 0;\n    left: 0;\n    transform-origin: right; }\n  .grid-item__title {\n    opacity: 0.29;\n    font-size: 24px;\n    color: white;\n    display: inline-block; }\n  .grid-item__price {\n    opacity: 0.25;\n    font-size: 36px;\n    margin-top: 10px;\n    display: inline-block;\n    color: white; }\n    .grid-item__price span {\n      font-size: 24px; }\n  .grid-item__wrapper {\n    position: relative;\n    display: inline-block;\n    top: 50%;\n    transform-origin: left;\n    left: 0;\n    transform: translate(0%, -50%) scale(1); }\n  .grid-item__cart {\n    position: absolute;\n    right: 20px;\n    top: -40px;\n    width: 60px;\n    height: 60px;\n    border-radius: 30px;\n    background: #FFFFFF;\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);\n    transform: scale(0);\n    transition: 0.5s; }\n    .grid-item__cart svg {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%); }\n  .grid-item:hover .grid-item__cart {\n    transform: scale(1); }\n\n.grid-item--width2 {\n  width: 50%; }\n\n.grid {\n  padding-top: 10%;\n  box-sizing: border-box; }\n\n.thirty-fifty .grid-item:first-child {\n  width: 30%;\n  margin-right: 20%; }\n.thirty-fifty .grid-item:last-child {\n  width: 50%;\n  margin-top: 10%; }\n\n.big-left .grid-item {\n  width: 60%;\n  margin-top: 10%; }\n\n.big-right .grid-item {\n  width: 60%;\n  margin-left: 30%; }\n\n.fifty-thirty {\n  margin-top: 10%; }\n  .fifty-thirty .grid-item:first-child {\n    width: 40%;\n    margin-right: 10%;\n    margin-top: 10%; }\n  .fifty-thirty .grid-item:last-child {\n    width: 40%;\n    margin-left: 10%;\n    margin-top: 19.9%; }\n\n.product .placeholder {\n  width: calc(100% + 20px);\n  margin-left: -10px; }\n.product__wrapper {\n  padding: 20px 0; }\n  .product__wrapper .col:first-child {\n    margin-left: -1.3%; }\n  .product__wrapper .col:last-child {\n    margin-right: -1.3%; }\n.product__title {\n  font-size: 36px;\n  color: #57BDE1; }\n.product__subtitle {\n  font-size: 36px;\n  margin-bottom: 10px; }\n.product__text {\n  font-size: 22px;\n  color: #000000;\n  letter-spacing: 0px;\n  line-height: 34px; }\n.product__price {\n  font-size: 24px;\n  color: #000000;\n  margin-top: 20px; }\n.product__list-pictures {\n  display: flex;\n  width: 100%;\n  flex-direction: row; }\n  .product__list-pictures .placeholder {\n    width: 100%;\n    margin-left: 0px; }\n.product__list-item {\n  flex: 1;\n  margin-right: 10px;\n  position: relative; }\n  .product__list-item:first-child {\n    margin-left: -10px; }\n  .product__list-item:last-child {\n    margin-right: -10px; }\n  .product__list-item:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: white;\n    opacity: 0;\n    transition: 0.3s; }\n  .product__list-item:hover:after {\n    opacity: 0.3; }\n.product__buy {\n  text-transform: uppercase;\n  display: inline-block;\n  background: white;\n  border-radius: 0;\n  background: #57BDE1;\n  color: white;\n  border: 0;\n  position: relative;\n  padding: 20px 15px;\n  cursor: pointer;\n  font-size: 15px; }\n  .product__buy:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border: 4px solid #236D87;\n    transform: translate(0, 0);\n    transition: 0.3s;\n    box-sizing: border-box;\n    z-index: -1; }\n  .product__buy:hover:after {\n    transform: translate(10px, 10px); }\n.product__quantity {\n  margin-top: 35px;\n  margin-right: 30px;\n  text-transform: uppercase;\n  display: inline-block;\n  border: 1px solid #D4D4D4; }\n  .product__quantity span {\n    padding: 5px 20px;\n    border: 0px;\n    background: #FFFFFF; }\n.product__less, .product__more {\n  padding: 19px 10px;\n  background: #FFFFFF;\n  border: 0px; }\n.product__less {\n  border-right: 1px solid #D4D4D4; }\n.product__more {\n  border-left: 1px solid #D4D4D4; }\n\n.cc {\n  padding: 0 10px; }\n\n@media (max-width: 479px) {\n  .home .main-article .main-article__image-container {\n    width: calc(100% + 20px);\n    margin-left: -10px; } }\n\n.small-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: white;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: 1s;\n  height: 100vh;\n  z-index: 1100; }\n  .small-loader.active {\n    opacity: 1; }\n  .small-loader__icon {\n    width: 140px;\n    height: 87px;\n    background-image: url(\"/assets/images/svg/mountain.svg\");\n    position: absolute;\n    left: 50%;\n    top: 55%;\n    transform: translate(-50%, -50%); }\n  .small-loader__background  {\n    position: absolute;\n    left: 50%;\n    top: 50%; }\n\n/*# sourceMappingURL=style.css.map */\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var animation = __webpack_require__(7);
	var shop      = __webpack_require__(8);
	var about     = __webpack_require__(9);
	var fugues    = __webpack_require__(11);
	var sound     = __webpack_require__(12);

	// var BASE_URL = "http://localhost:8080";
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
	                setTimeout(function() {
	                    self.loadHighResPictures();
	                },500);
	            });

	            document.getElementsByClassName('content')[0].classList.remove('content--full');
	            document.getElementsByClassName('menu')[0].classList.remove('menu--absolute');

	            self.resetBeforeLaunch(self);
	            self.launchAbout();
	            self.launchShop();
	            self.launchFugues();
	            self.launchSound();

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

	        window.history.pushState({},"",target.getAttribute('data-url')); // Change URL.
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
	        imagesLoaded( document.querySelectorAll('#app'), function() {
	            document.getElementById('app').classList.remove('fadeOut');
	            document.getElementsByClassName("content")[0].classList.add('active');
	            ctx.loadHighResPictures();
	            setTimeout(function() {
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
	    },

	    launchAbout(self) {
	        if(document.getElementById('about')) {
	            document.getElementsByClassName('content')[0].classList.add('content--full');
	            document.getElementsByClassName('menu')[0].classList.add('menu--absolute');

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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var useful = __webpack_require__(10);

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


/***/ },
/* 10 */
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
/* 11 */
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
	            document.getElementsByClassName('fugues__header')[0].classList.add("active");
	            document.getElementsByClassName('fugues__header')[0].style.transform = "scale("+value+")";

	            setTimeout(function() {
	                var newHeight = previousHeight*value;
	                diffHeight = newHeight - previousHeight - getOffset(document.getElementsByClassName('fugues__header')[0]).top;
	                value = previousHeight*value - previousHeight;
	                document.getElementsByClassName('fugues__wrapper')[0].style.transform = "translate3d(0,"+ (value/2 - 0.2*previousHeight) +"px,0)";
	                document.getElementsByClassName('fugues__wrapper')[0].style.marginBottom = value +"px";
	            },0);
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var useful = __webpack_require__(10);

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