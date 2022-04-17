(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!*******************************!*\
  !*** F:/ai图片处理/老照片上色/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createApp) {__webpack_require__(/*! uni-pages */ 5);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));
var _Tool = _interopRequireDefault(__webpack_require__(/*! @/static/js/Tool.js */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;var uniNavBar = function uniNavBar() {__webpack_require__.e(/*! require.ensure | components/uni-nav-bar/uni-nav-bar */ "components/uni-nav-bar/uni-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/uni-nav-bar/uni-nav-bar.vue */ 108));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var ttad = function ttad() {__webpack_require__.e(/*! require.ensure | components/wxad/ttad */ "components/wxad/ttad").then((function () {return resolve(__webpack_require__(/*! @/components/wxad/ttad.vue */ 115));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var inad = function inad() {__webpack_require__.e(/*! require.ensure | components/wxad/inad */ "components/wxad/inad").then((function () {return resolve(__webpack_require__(/*! @/components/wxad/inad.vue */ 120));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tjwxapp = function tjwxapp() {__webpack_require__.e(/*! require.ensure | components/wxapp/tjwxapp */ "components/wxapp/tjwxapp").then((function () {return resolve(__webpack_require__(/*! @/components/wxapp/tjwxapp.vue */ 125));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var lbwxapp = function lbwxapp() {__webpack_require__.e(/*! require.ensure | components/wxapp/lbwxapp */ "components/wxapp/lbwxapp").then((function () {return resolve(__webpack_require__(/*! @/components/wxapp/lbwxapp.vue */ 132));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var tjtool = function tjtool() {__webpack_require__.e(/*! require.ensure | components/wxapp/tjtool */ "components/wxapp/tjtool").then((function () {return resolve(__webpack_require__(/*! @/components/wxapp/tjtool.vue */ 139));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var wybPopup = function wybPopup() {__webpack_require__.e(/*! require.ensure | components/wyb-popup/wyb-popup */ "components/wyb-popup/wyb-popup").then((function () {return resolve(__webpack_require__(/*! @/components/wyb-popup/wyb-popup.vue */ 146));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uParse = function uParse() {Promise.all(/*! require.ensure | components/feng-parse/parse */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/feng-parse/parse")]).then((function () {return resolve(__webpack_require__(/*! @/components/feng-parse/parse.vue */ 153));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var ourLoading = function ourLoading() {__webpack_require__.e(/*! require.ensure | components/our-loading/our-loading */ "components/our-loading/our-loading").then((function () {return resolve(__webpack_require__(/*! @/components/our-loading/our-loading.vue */ 161));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var login = function login() {__webpack_require__.e(/*! require.ensure | components/login/login */ "components/login/login").then((function () {return resolve(__webpack_require__(/*! @/components/login/login.vue */ 168));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var getinte = function getinte() {__webpack_require__.e(/*! require.ensure | components/getinte/getinte */ "components/getinte/getinte").then((function () {return resolve(__webpack_require__(/*! @/components/getinte/getinte.vue */ 175));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var cmdProgress = function cmdProgress() {__webpack_require__.e(/*! require.ensure | components/cmd-progress/cmd-progress */ "components/cmd-progress/cmd-progress").then((function () {return resolve(__webpack_require__(/*! @/components/cmd-progress/cmd-progress.vue */ 182));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};






















_vue.default.prototype.$Tool = _Tool.default;
_vue.default.config.productionTip = false;
_vue.default.component('login', login);
_vue.default.component('getinte', getinte);
_vue.default.component('uniNavBar', uniNavBar);
_vue.default.component('uParse', uParse);




_vue.default.component('ttad', ttad);

_vue.default.component('inad', inad);
_vue.default.component('tjwxapp', tjwxapp);
_vue.default.component('lbwxapp', lbwxapp);
_vue.default.component('tjtool', tjtool);




_vue.default.component('wybPopup', wybPopup);
_vue.default.component('ourLoading', ourLoading);
_vue.default.component('cmdProgress', cmdProgress);
_App.default.mpType = 'app';
var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
_vue.default.mixin({
  methods: {
    setData: function setData(obj, callback) {
      var that = this;
      var handleData = function handleData(tepData, tepKey, afterKey) {
        tepKey = tepKey.split('.');
        tepKey.forEach(function (item) {
          if (tepData[item] === null || tepData[item] === undefined) {
            var reg = /^[0-9]+$/;
            tepData[item] = reg.test(afterKey) ? [] : {};
            tepData = tepData[item];
          } else {
            tepData = tepData[item];
          }
        });
        return tepData;
      };
      var isFn = function isFn(value) {
        return typeof value == 'function' || false;
      };
      Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        key = key.replace(/\]/g, '').replace(/\[/g, '.');
        var front, after;
        var index_after = key.lastIndexOf('.');
        if (index_after != -1) {
          after = key.slice(index_after + 1);
          front = handleData(that, key.slice(0, index_after), after);
        } else {
          after = key;
          front = that;
        }
        if (front.$data && front.$data[after] === undefined) {
          Object.defineProperty(front, after, {
            get: function get() {
              return front.$data[after];
            },
            set: function set(newValue) {
              front.$data[after] = newValue;
              that.$forceUpdate();
            },
            enumerable: true,
            configurable: true });

          front[after] = val;
        } else {
          that.$set(front, after, val);
        }
      });
      isFn(callback) && this.$nextTick(callback);
    },
    setTabBarIndex: function setTabBarIndex(index) {
      if (typeof this.$mp.page.getTabBar === 'function' &&
      this.$mp.page.getTabBar()) {
        this.$mp.page.getTabBar().setData({
          selected: index });

      }
    } } });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*******************************!*\
  !*** F:/ai图片处理/老照片上色/App.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 13);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!********************************************************!*\
  !*** F:/ai图片处理/老照片上色/App.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Tool = _interopRequireDefault(__webpack_require__(/*! static/js/Tool.js */ 9));
var _siteinfo = _interopRequireDefault(__webpack_require__(/*! siteinfo.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var updateManager = uni.getUpdateManager();var _default =
{
  globalData: {
    config: '',
    tool: _Tool.default,
    isBiggerScreen: !1,
    isFullScreen: !1,
    loadactive: false,
    siteInfo: _siteinfo.default },

  onLaunch: function onLaunch(e) {
    var that = this;
    that.globalData.loadactive = true;
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate);
    });
    updateManager.onUpdateReady(function (res) {
      uni.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        } });

    });
    updateManager.onUpdateFailed(function (res) {
      // 新的版本下载失败
    });
    wx.getSystemInfo({
      success: function success(a) {
        // console.log("system: ".concat(a.system)), console.log("platform: ".concat(a.platform)), console.log("version: ".concat(a.version)), console.log("SDKVersion: ".concat(a.SDKVersion));
      } });


    if (e.query.invite) {
      console.log(e.query.invite);
      console.log('userid = ' + e.query.invite);
      that.$Tool.invite(_siteinfo.default.siteroot, e.query.invite);
    }
  },
  onShow: function onShow(a) {
    var that = this;
    wx.getSystemInfo({
      success: function success(a) {
        var o = a.screenHeight,
        t = a.screenWidth,
        n = a.statusBarHeight,
        l = a.language;
        that.globalData.isFullScreen = parseInt(t / o * 100) < parseInt(9 / 17 * 100), that.globalData.isBiggerScreen = o > 667, that.globalData.statusBarHeight = n, that.globalData.navBarHeight = 44, that.globalData.navBarFontSize = 18.5, that.globalData.btnScopeSize = 40, that.globalData.btnSize = 32, that.globalData.screenHeight = o, that.globalData.screenWidth = t, that.globalData.language = l;
      } });

  },
  onHide: function onHide() {
    console.log('App Hide');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!****************************************************************!*\
  !*** F:/ai图片处理/老照片上色/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 14);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9GOi9haeWbvueJh+WkhOeQhi/ogIHnhafniYfkuIroibIvQXBwLnZ1ZT9kYmFjIiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9GOi9haeWbvueJh+WkhOeQhi/ogIHnhafniYfkuIroibIvQXBwLnZ1ZT9lZDkzIiwid2VicGFjazovLy9GOi9haeWbvueJh+WkhOeQhi/ogIHnhafniYfkuIroibIvQXBwLnZ1ZT84NGE2Il0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIlZ1ZSIsInByb3RvdHlwZSIsIiRUb29sIiwiVG9vbCIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJjb21wb25lbnQiLCJsb2dpbiIsImdldGludGUiLCJ1bmlOYXZCYXIiLCJ1UGFyc2UiLCJ0dGFkIiwiaW5hZCIsInRqd3hhcHAiLCJsYnd4YXBwIiwidGp0b29sIiwid3liUG9wdXAiLCJvdXJMb2FkaW5nIiwiY21kUHJvZ3Jlc3MiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiLCJtaXhpbiIsIm1ldGhvZHMiLCJzZXREYXRhIiwib2JqIiwiY2FsbGJhY2siLCJ0aGF0IiwiaGFuZGxlRGF0YSIsInRlcERhdGEiLCJ0ZXBLZXkiLCJhZnRlcktleSIsInNwbGl0IiwiZm9yRWFjaCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJyZWciLCJ0ZXN0IiwiaXNGbiIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInZhbCIsInJlcGxhY2UiLCJmcm9udCIsImFmdGVyIiwiaW5kZXhfYWZ0ZXIiLCJsYXN0SW5kZXhPZiIsInNsaWNlIiwiJGRhdGEiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld1ZhbHVlIiwiJGZvcmNlVXBkYXRlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIiRzZXQiLCIkbmV4dFRpY2siLCJzZXRUYWJCYXJJbmRleCIsImluZGV4IiwiJG1wIiwicGFnZSIsImdldFRhYkJhciIsInNlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7cURBQUEsd0NBQThFO0FBQzlFO0FBQ0Esc0Ysd25DQUZtQkEsRUFBRSxDQUFDQyxpQ0FBSCxHQUF1Q0MsbUJBQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJuQkMsYUFBSUMsU0FBSixDQUFjQyxLQUFkLEdBQXNCQyxhQUF0QjtBQUNBSCxhQUFJSSxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUwsYUFBSU0sU0FBSixDQUFjLE9BQWQsRUFBc0JDLEtBQXRCO0FBQ0FQLGFBQUlNLFNBQUosQ0FBYyxTQUFkLEVBQXdCRSxPQUF4QjtBQUNBUixhQUFJTSxTQUFKLENBQWMsV0FBZCxFQUEwQkcsU0FBMUI7QUFDQVQsYUFBSU0sU0FBSixDQUFjLFFBQWQsRUFBdUJJLE1BQXZCOzs7OztBQUtBVixhQUFJTSxTQUFKLENBQWMsTUFBZCxFQUFxQkssSUFBckI7O0FBRUFYLGFBQUlNLFNBQUosQ0FBYyxNQUFkLEVBQXFCTSxJQUFyQjtBQUNBWixhQUFJTSxTQUFKLENBQWMsU0FBZCxFQUF3Qk8sT0FBeEI7QUFDQWIsYUFBSU0sU0FBSixDQUFjLFNBQWQsRUFBd0JRLE9BQXhCO0FBQ0FkLGFBQUlNLFNBQUosQ0FBYyxRQUFkLEVBQXVCUyxNQUF2Qjs7Ozs7QUFLQWYsYUFBSU0sU0FBSixDQUFjLFVBQWQsRUFBeUJVLFFBQXpCO0FBQ0FoQixhQUFJTSxTQUFKLENBQWMsWUFBZCxFQUE0QlcsVUFBNUI7QUFDQWpCLGFBQUlNLFNBQUosQ0FBYyxhQUFkLEVBQTRCWSxXQUE1QjtBQUNBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJckIsWUFBSjtBQUNMbUIsWUFESyxFQUFaOztBQUdBLFVBQUFFLEdBQUcsRUFBQ0MsTUFBSjtBQUNBdEIsYUFBSXVCLEtBQUosQ0FBVTtBQUNOQyxTQUFPLEVBQUU7QUFD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QSx5QkFEQTtBQUVBLDZCQUZBO0FBR0Esc0JBSEE7QUFJQTtBQUNBLE9BUEE7O0FBU0EsR0F0REE7QUF1REE7QUFDQTtBQUNBLEdBekRBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUF3OUIsQ0FBZ0IsazlCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0E1K0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJzt3eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgVG9vbCBmcm9tICdAL3N0YXRpYy9qcy9Ub29sLmpzJztcclxuaW1wb3J0IHVuaU5hdkJhciBmcm9tICdAL2NvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXIudnVlJztcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCB0dGFkIGZyb20gXCJAL2NvbXBvbmVudHMvd3hhZC90dGFkLnZ1ZVwiO1xyXG5cclxuaW1wb3J0IGluYWQgZnJvbSBcIkAvY29tcG9uZW50cy93eGFkL2luYWQudnVlXCI7XHJcbmltcG9ydCB0and4YXBwIGZyb20gJ0AvY29tcG9uZW50cy93eGFwcC90and4YXBwLnZ1ZSc7XHJcbmltcG9ydCBsYnd4YXBwIGZyb20gJ0AvY29tcG9uZW50cy93eGFwcC9sYnd4YXBwLnZ1ZSc7XHJcbmltcG9ydCB0anRvb2wgZnJvbSAnQC9jb21wb25lbnRzL3d4YXBwL3RqdG9vbC52dWUnO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IHd5YlBvcHVwIGZyb20gJ0AvY29tcG9uZW50cy93eWItcG9wdXAvd3liLXBvcHVwLnZ1ZSc7XHJcbmltcG9ydCB1UGFyc2UgZnJvbSBcIkAvY29tcG9uZW50cy9mZW5nLXBhcnNlL3BhcnNlLnZ1ZVwiO1xyXG5pbXBvcnQgb3VyTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvb3VyLWxvYWRpbmcvb3VyLWxvYWRpbmcudnVlJ1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnQC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnZ1ZSdcclxuaW1wb3J0IGdldGludGUgZnJvbSAnQC9jb21wb25lbnRzL2dldGludGUvZ2V0aW50ZS52dWUnXHJcbmltcG9ydCBjbWRQcm9ncmVzcyBmcm9tIFwiQC9jb21wb25lbnRzL2NtZC1wcm9ncmVzcy9jbWQtcHJvZ3Jlc3MudnVlXCI7XHJcblxyXG5WdWUucHJvdG90eXBlLiRUb29sID0gVG9vbFxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxyXG5WdWUuY29tcG9uZW50KCdsb2dpbicsbG9naW4pXHJcblZ1ZS5jb21wb25lbnQoJ2dldGludGUnLGdldGludGUpXHJcblZ1ZS5jb21wb25lbnQoJ3VuaU5hdkJhcicsdW5pTmF2QmFyKVxyXG5WdWUuY29tcG9uZW50KCd1UGFyc2UnLHVQYXJzZSlcclxuXHJcblxyXG5cclxuXHJcblZ1ZS5jb21wb25lbnQoJ3R0YWQnLHR0YWQpXHJcblxyXG5WdWUuY29tcG9uZW50KCdpbmFkJyxpbmFkKVxyXG5WdWUuY29tcG9uZW50KCd0and4YXBwJyx0and4YXBwKSBcclxuVnVlLmNvbXBvbmVudCgnbGJ3eGFwcCcsbGJ3eGFwcCkgXHJcblZ1ZS5jb21wb25lbnQoJ3RqdG9vbCcsdGp0b29sKSBcclxuXHJcblxyXG5cclxuXHJcblZ1ZS5jb21wb25lbnQoJ3d5YlBvcHVwJyx3eWJQb3B1cClcclxuVnVlLmNvbXBvbmVudCgnb3VyTG9hZGluZycsIG91ckxvYWRpbmcpXHJcblZ1ZS5jb21wb25lbnQoJ2NtZFByb2dyZXNzJyxjbWRQcm9ncmVzcylcclxuQXBwLm1wVHlwZSA9ICdhcHAnXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKVxyXG5WdWUubWl4aW4oe1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldERhdGE6IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVEYXRhID0gKHRlcERhdGEsIHRlcEtleSwgYWZ0ZXJLZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRlcEtleSA9IHRlcEtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgdGVwS2V5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlcERhdGFbaXRlbV0gPT09IG51bGwgfHwgdGVwRGF0YVtpdGVtXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWcgPSAvXlswLTldKyQvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXBEYXRhW2l0ZW1dID0gcmVnLnRlc3QoYWZ0ZXJLZXkpID8gW10gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVwRGF0YSA9IHRlcERhdGFbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVwRGF0YSA9IHRlcERhdGFbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVwRGF0YTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaXNGbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXF0vZywgJycpLnJlcGxhY2UoL1xcWy9nLCAnLicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyb250LCBhZnRlcjtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleF9hZnRlciA9IGtleS5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4X2FmdGVyICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgPSBrZXkuc2xpY2UoaW5kZXhfYWZ0ZXIgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9udCA9IGhhbmRsZURhdGEodGhhdCwga2V5LnNsaWNlKDAsIGluZGV4X2FmdGVyKSwgYWZ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhZnRlciA9IGtleTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9udCA9IHRoYXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZnJvbnQuJGRhdGEgJiYgZnJvbnQuJGRhdGFbYWZ0ZXJdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnJvbnQsIGFmdGVyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9udC4kZGF0YVthZnRlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbnQuJGRhdGFbYWZ0ZXJdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBmcm9udFthZnRlcl0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHNldChmcm9udCwgYWZ0ZXIsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpc0ZuKGNhbGxiYWNrKSAmJiB0aGlzLiRuZXh0VGljayhjYWxsYmFjayk7XHJcbiAgICAgICAgfSxcclxuXHRcdHNldFRhYkJhckluZGV4KGluZGV4KSB7XHJcblx0XHQgICAgaWYgKHR5cGVvZiB0aGlzLiRtcC5wYWdlLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG5cdFx0ICAgIHRoaXMuJG1wLnBhZ2UuZ2V0VGFiQmFyKCkpIHtcclxuXHRcdCAgICAgICAgdGhpcy4kbXAucGFnZS5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuXHRcdCAgICAgICAgICAgIHNlbGVjdGVkOiBpbmRleFxyXG5cdFx0ICAgICAgICB9KVxyXG5cdFx0ICAgIH1cclxuXHRcdH1cclxuICAgIH1cclxufSk7IiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjxzY3JpcHQ+XHJcblx0XHJcblx0aW1wb3J0IHRvb2wgZnJvbSAnc3RhdGljL2pzL1Rvb2wuanMnO1xyXG5cdGltcG9ydCBzaXRlSW5mbyBmcm9tICdzaXRlaW5mby5qcyc7XHJcblx0Y29uc3QgdXBkYXRlTWFuYWdlciA9IHVuaS5nZXRVcGRhdGVNYW5hZ2VyKCk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Z2xvYmFsRGF0YToge1xyXG5cdFx0XHRjb25maWc6JycsXHJcblx0XHRcdHRvb2w6dG9vbCxcclxuXHRcdFx0aXNCaWdnZXJTY3JlZW46ICExLFxyXG5cdFx0XHRpc0Z1bGxTY3JlZW46ICExLFxyXG5cdFx0XHRsb2FkYWN0aXZlOmZhbHNlLFxyXG5cdFx0XHRzaXRlSW5mbzpzaXRlSW5mbyxcclxuXHRcdH0sXHJcblx0XHRvbkxhdW5jaDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuZ2xvYmFsRGF0YS5sb2FkYWN0aXZlPXRydWU7XHJcblx0XHRcdHVwZGF0ZU1hbmFnZXIub25DaGVja0ZvclVwZGF0ZShmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdCAgLy8g6K+35rGC5a6M5paw54mI5pys5L+h5oGv55qE5Zue6LCDXHJcblx0XHRcdCAgY29uc29sZS5sb2cocmVzLmhhc1VwZGF0ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlUmVhZHkoZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHQgIHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHQgICAgdGl0bGU6ICfmm7TmlrDmj5DnpLonLFxyXG5cdFx0XHQgICAgY29udGVudDogJ+aWsOeJiOacrOW3sue7j+WHhuWkh+Wlve+8jOaYr+WQpumHjeWQr+W6lOeUqO+8nycsXHJcblx0XHRcdCAgICBzdWNjZXNzKHJlcykge1xyXG5cdFx0XHQgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0ICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXHJcblx0XHRcdCAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xyXG5cdFx0XHQgICAgICB9XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdCAgfSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0ICAvLyDmlrDnmoTniYjmnKzkuIvovb3lpLHotKVcclxuXHRcdFx0fSk7XHJcblx0XHRcdHd4LmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHQgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChhKSB7XHJcblx0XHRcdCAgICAvLyBjb25zb2xlLmxvZyhcInN5c3RlbTogXCIuY29uY2F0KGEuc3lzdGVtKSksIGNvbnNvbGUubG9nKFwicGxhdGZvcm06IFwiLmNvbmNhdChhLnBsYXRmb3JtKSksIGNvbnNvbGUubG9nKFwidmVyc2lvbjogXCIuY29uY2F0KGEudmVyc2lvbikpLCBjb25zb2xlLmxvZyhcIlNES1ZlcnNpb246IFwiLmNvbmNhdChhLlNES1ZlcnNpb24pKTtcclxuXHRcdFx0ICB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHRcdGlmKGUucXVlcnkuaW52aXRlKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLnF1ZXJ5Lmludml0ZSlcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndXNlcmlkID0gJytlLnF1ZXJ5Lmludml0ZSk7XHJcblx0XHRcdFx0dGhhdC4kVG9vbC5pbnZpdGUoc2l0ZUluZm8uc2l0ZXJvb3QsZS5xdWVyeS5pbnZpdGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25TaG93OiBmdW5jdGlvbiAoYSkge1xyXG5cdFx0ICB2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHQgIHd4LmdldFN5c3RlbUluZm8oe1xyXG5cdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChhKSB7XHJcblx0XHQgICAgICB2YXIgbyA9IGEuc2NyZWVuSGVpZ2h0LFxyXG5cdFx0ICAgICAgICAgIHQgPSBhLnNjcmVlbldpZHRoLFxyXG5cdFx0ICAgICAgICAgIG4gPSBhLnN0YXR1c0JhckhlaWdodCxcclxuXHRcdCAgICAgICAgICBsID0gYS5sYW5ndWFnZTtcclxuXHRcdCAgICAgIHRoYXQuZ2xvYmFsRGF0YS5pc0Z1bGxTY3JlZW4gPSBwYXJzZUludCh0IC8gbyAqIDEwMCkgPCBwYXJzZUludCg5IC8gMTcgKiAxMDApLCB0aGF0Lmdsb2JhbERhdGEuaXNCaWdnZXJTY3JlZW4gPSBvID4gNjY3LCB0aGF0Lmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0ID0gbiwgdGhhdC5nbG9iYWxEYXRhLm5hdkJhckhlaWdodCA9IDQ0LCB0aGF0Lmdsb2JhbERhdGEubmF2QmFyRm9udFNpemUgPSAxOC41LCB0aGF0Lmdsb2JhbERhdGEuYnRuU2NvcGVTaXplID0gNDAsIHRoYXQuZ2xvYmFsRGF0YS5idG5TaXplID0gMzIsIHRoYXQuZ2xvYmFsRGF0YS5zY3JlZW5IZWlnaHQgPSBvLCB0aGF0Lmdsb2JhbERhdGEuc2NyZWVuV2lkdGggPSB0LCB0aGF0Lmdsb2JhbERhdGEubGFuZ3VhZ2UgPSBsO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgfSk7XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cdEBpbXBvcnQgXCJzdGF0aWMvY29sb3J1aS9tYWluLmNzc1wiO1xyXG5cdEBpbXBvcnQgXCJzdGF0aWMvY29sb3J1aS9pY29uLmNzc1wiO1xyXG5cdEBpbXBvcnQgJ2FwcC5jc3MnO1xyXG5cdFxyXG5cdC5jdUljb24tbGlua3tcclxuXHRcdGNvbG9yOiAjMDBhYWZmO1xyXG5cdFx0Zm9udC1zaXplOiAzNXJweDtcclxuXHR9XHJcblx0LmJye1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHRwYWdlIHtcclxuXHRcdCAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0XHQgICAgd2lkdGg6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcblx0XHR9XHJcblx0LnNsdHN7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRjb2xvcjogIzY2NjY2NjtcclxuXHR9XHJcblx0LmN1LWl0ZW17XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHQuY3UtaXRlbSBpbWFnZXtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcblx0fVxyXG5cdC5mb250LWJ0bntcclxuXHRcdHdpZHRoOiA5NiU7XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOiAxMHJweCAwcnB4O1xyXG5cdFx0LyogYmFja2dyb3VuZC1jb2xvcjogIzU1ZmZmZjsgKi9cclxuXHR9XHJcblx0LmZvbnQtYnRuIGJ1dHRvbi5jdS1idG57XHJcblx0XHR3aWR0aDogNDklO1xyXG5cdFx0aGVpZ2h0OiA5MHJweDtcclxuXHRcdGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjMpIDJycHggNHJweCA4cnB4IDJycHg7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblx0LmZvbnQtYnRuIGJ1dHRvbiBpbWFnZXtcclxuXHRcdHdpZHRoOiA1MHJweDtcclxuXHRcdGhlaWdodDogNTBycHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xyXG5cdH1cclxuXHQuYnRuLXNoYXJle1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHRcdGJveC1zaGFkb3c6IHJnYmEoMCwwLDAsLjMpIDJycHggNHJweCA4cnB4IDJycHg7XHJcblx0fVxyXG5cdC5mb250LWJ0bjJ7XHJcblx0XHR3aWR0aDogOTYlO1xyXG5cdFx0bWFyZ2luOjBycHggYXV0byAyMHJweDtcclxuXHR9XHJcblx0LmZvbnQtYnRuMiBidXR0b24uY3UtYnRue1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0Ym94LXNoYWRvdzogcmdiYSgwLDAsMCwuMykgMnJweCA0cnB4IDhycHggMnJweDtcclxuXHR9XHJcblx0XHJcblx0Lm5vZGF0YXtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHR3aWR0aDogOTUlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0XHRtYXJnaW46IDEwcnB4IGF1dG87XHJcblx0XHRcdHBhZGRpbmc6IDUwcnB4O1xyXG5cdFx0fVxyXG5cdC5ub2RhdGEgaW1hZ2V7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdG1hcmdpbjogMjBycHggYXV0bztcclxuXHRcdH1cclxuXHQubm9kYXRhIHZpZXd7XHJcblx0XHRcdFx0bWFyZ2luOiAyMHJweCBhdXRvO1xyXG5cdFx0XHRcdGNvbG9yOiAjYjliOWI5O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdFx0fVxyXG5cdFxyXG5cdC5jdS1kaWFsb2cgLnRidG57XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0cGFkZGluZzogMHJweCAxMHJweCAwcnB4O1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHQuY3UtZGlhbG9nIC50YnRuIGJ1dHRvbntcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC50YnRuIC50ZXh0LWdyYXl7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6MjVycHg7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdH1cclxuXHQucG9we1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQucG9wYnRue1xyXG5cdFx0bWFyZ2luOjIwcnB4IGF1dG87XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdGhlaWdodDo4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHRcdHdpZHRoOiA4MCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHRcdFxyXG5cdH1cclxuXHQucWlhbmRhb3tcclxuXHRcdHdpZHRoOiAyMDBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogMHJweDtcclxuXHRcdGJvdHRvbTogNDAwcnB4O1xyXG5cdH1cclxuXHQucWlhbmRhbyBpbWFnZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQueHhoaWRle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdFx0Ym90dG9tOiAtNjBycHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDczNjk3NTQ3ODhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=