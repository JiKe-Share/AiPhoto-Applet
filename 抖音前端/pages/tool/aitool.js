(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tool/aitool"],{

/***/ 52:
/*!****************************************************************!*\
  !*** F:/ai图片处理/老照片上色/main.js?{"page":"pages%2Ftool%2Faitool"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _aitool = _interopRequireDefault(__webpack_require__(/*! ./pages/tool/aitool.vue */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_aitool.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 53:
/*!*********************************************!*\
  !*** F:/ai图片处理/老照片上色/pages/tool/aitool.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aitool.vue?vue&type=template&id=0ee83aae&scoped=true& */ 54);
/* harmony import */ var _aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aitool.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aitool.vue?vue&type=style&index=0&id=0ee83aae&lang=scss&scoped=true& */ 58);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ee83aae",
  null,
  false,
  _aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tool/aitool.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/*!****************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=template&id=0ee83aae&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aitool.vue?vue&type=template&id=0ee83aae&scoped=true& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_template_id_0ee83aae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 55:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=template&id=0ee83aae&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function() {
      return __webpack_require__.e(/*! import() | components/uni-nav-bar/uni-nav-bar */ "components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/components/uni-nav-bar/uni-nav-bar.vue */ 108))
    },
    cmdProgress: function() {
      return __webpack_require__.e(/*! import() | components/cmd-progress/cmd-progress */ "components/cmd-progress/cmd-progress").then(__webpack_require__.bind(null, /*! @/components/cmd-progress/cmd-progress.vue */ 182))
    },
    wybPopup: function() {
      return __webpack_require__.e(/*! import() | components/wyb-popup/wyb-popup */ "components/wyb-popup/wyb-popup").then(__webpack_require__.bind(null, /*! @/components/wyb-popup/wyb-popup.vue */ 146))
    },
    login: function() {
      return __webpack_require__.e(/*! import() | components/login/login */ "components/login/login").then(__webpack_require__.bind(null, /*! @/components/login/login.vue */ 168))
    },
    getinte: function() {
      return __webpack_require__.e(/*! import() | components/getinte/getinte */ "components/getinte/getinte").then(__webpack_require__.bind(null, /*! @/components/getinte/getinte.vue */ 175))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 56:
/*!**********************************************************************!*\
  !*** F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aitool.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 57:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _methods;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp().globalData;
var res = uni.getSystemInfoSync();
var t = getApp(),
a = "",
e = "";
var oldXY = '';var _default =
{
  data: function data() {
    return {
      config: '',
      tool: '',
      adlist: '',
      isios: this.$Tool.ios(),
      modalName: '',
      curImg: '',
      toPic: '',
      imageWidth: res.safeArea.width,
      imageHeight: '',
      swidth: res.windowWidth / 2,
      initX: 15,
      goimage: '',
      goimagew: '',
      imagetype: '',
      openimage: '',
      corhei: uni.upx2px(700) + 'px',
      ntools: '',
      sexC: false,
      options: [
      {
        'id': 'cartoon',
        'name': '卡通画风格' },

      {
        'id': 'pencil',
        'name': '铅笔风格' },

      {
        'id': 'color_pencil',
        'name': '彩色铅笔画风格' },

      {
        'id': 'warm',
        'name': '彩色糖块油画风格' },

      {
        'id': 'wave',
        'name': '神奈川冲浪里油画风格' },

      {
        'id': 'lavender',
        'name': '薰衣草油画风格' },

      {
        'id': 'mononoke',
        'name': '奇异油画风格' },

      {
        'id': 'scream',
        'name': '呐喊油画风格' },

      {
        'id': 'gothic',
        'name': '哥特油画风格' }],


      gbfx: [
      {
        'id': '0',
        'name': '刘海' },

      {
        'id': '1',
        'name': '长发' },

      {
        'id': '2',
        'name': '刘海加长发' },

      {
        'id': '3',
        'name': '增发' }],



      bqbj: [
      {
        'id': '0',
        'name': '张嘴笑' },

      {
        'id': '1',
        'name': '嘟嘟嘴' },

      {
        'id': '2',
        'name': '不高兴' },

      {
        'id': '3',
        'name': '闭嘴笑' }],



      renliantx: [
      {
        'id': 'pixar',
        'name': '皮克斯' },

      {
        'id': '3d_cartoon',
        'name': '3D卡通风' },

      {
        'id': 'angel',
        'name': '天使' },

      {
        'id': 'demon',
        'name': '恶魔' },

      {
        'id': 'ukiyoe_cartoon',
        'name': '浮世绘' },

      {
        'id': 'bopu_cartoon',
        'name': '波普风' },

      {
        'id': 'amcartoon',
        'name': '美漫风' }],


      rxmhf: [
      {
        'id': 'jpcartoon_head',
        'name': '人像日漫风' },

      {
        'id': 'jpcartoon',
        'name': '全图日漫风' },

      {
        'id': 'hkcartoon',
        'name': '国潮风' },

      {
        'id': 'classic_cartoon',
        'name': '复古漫画风' },

      {
        'id': 'tccartoon',
        'name': '萌漫风' }],


      aikt: [

      {
        'id': 'general',
        'name': '通用抠图' },

      {
        'id': 'product',
        'name': '抠图商品' },

      {
        'id': 'human',
        'name': '抠图人物' }],


      renliantxindex: 0,
      gbfxindex: 0,
      mrfg: 0,
      option: '',
      age: 0,

      box_data: "",
      box_item: [],
      box_active_index: 1,

      myinte: 0,
      login: '',
      isvip: false,
      videoAd: '',
      percent: 0,
      downvideo: false };

  },
  onLoad: function onLoad(o) {
    console.log(this.imageWidth);
    var that = this;
    this.getconfig(o.id);
    this.$Tool.isvip(this, function () {
    }, function () {
      that.getad();
    });

  },
  onShow: function onShow() {
    var that = this;
    that.$Tool.isregister(that);
    that.initX = 15;
    var xggg = setInterval(function () {
      that.initX += 2;
      if (that.initX >= res.windowWidth / 2) {
        that.initX = res.windowWidth / 2 - 15;
        clearInterval(xggg);
      }
    }, 1);
    // 微信分享盆友圈






  },
  onShareAppMessage: function onShareAppMessage(e) {
    var that = this;
    return {
      title: that.tool.desc,
      imageUrl: that.tool.img,
      path: '/pages/tool/aitool?id=' + that.tool.id };

  },
  // 微信分享盆友圈|收藏



















  onHide: function onHide() {},
  methods: (_methods = {
    getconfig: function getconfig(id) {
      var that = this;
      that.$Tool.getconfig(that, function () {

        console.log(that.config);
        uni.setNavigationBarColor({
          frontColor: that.config.front_color,
          backgroundColor: that.config.topbg1,
          animation: {
            duration: 400,
            timingFunc: 'easeIn' } });



      });
      that.$Tool.ajax('gettool', function (r) {
        var res = r.data;

        console.log(res);
        uni.setNavigationBarTitle({
          title: res.title });



        that.tool = res;
        that.$Tool.ajax('getntool', function (r) {
          var ress = r.data;
          that.ntools = ress;
          if (that.ntools) {
            for (var i = 0; i < that.ntools.length; i++) {
              that.ntools[i]['bgcolor'] = that.$Tool.getcolor(i) + 99;
            }
          }
        }, { nid: res.id, type: res.type });
        var ytcc;
        if (res.bs == 'txfgzh') {
          that.toPic = res.x.split("|");
          that.mrfg = res.mrfg;
          that.option = that.options[res.mrfg].id;
        } else
        if (res.bs == 'rxtx' || res.bs == 'rxmhf' || res.bs == 'bqbj' || res.bs == 'aikt') {
          that.toPic = res.x.split("|");
          that.mrfg = res.mrfg;
        } else
        {
          that.toPic = res.x;
        }
        if (res.bs == 'aikt') {
          that.curImg = res.y.split("|");
          ytcc = that.curImg[that.mrfg];
        } else
        {
          that.curImg = res.y;
          ytcc = that.curImg;
        }
        if (res.bs == 'facebl') {
          that.age = 70;
        }
        if (res.bs == 'facebx') {
          that.age = 3;
        }
        wx.getImageInfo({
          src: ytcc,
          success: function success(t) {
            var e = that.imageWidth / t.width * t.height;
            that.imageHeight = e;
            console.log(that.imageHeight);
            //    setTimeout(function() {
            //     a.setData({
            //         isGoStatus: !0
            //     });
            // }, 1200);
          } });

      }, {
        id: id });

    },
    sexS: function sexS(e) {
      console.log(e.detail.value);
      this.sexC = e.detail.value;
    },
    sliderage: function sliderage(e) {
      this.age = e.detail.value;
      console.log(this.age);
    },
    init: function init(t) {
      console.log("初始化"), uni.showLoading({
        title: "加载中..." });

      var e = this;
      uni.getImageInfo({
        src: t,
        success: function success(t) {
          var i = {};
          if (e.goimagew) {
            i.scale = res.windowWidth / t.width;
            e.corhei = 'auto';
          } else
          {
            i.scale = uni.upx2px(700) / t.height;
          }
          i.w = parseFloat((t.width * i.scale).toFixed(0));
          i.h = parseFloat((t.height * i.scale).toFixed(0)), console.log(i), e.setData({
            box_data: i,
            box_item: [{
              w: 120,
              h: 60,
              x: (i.w - 120) / 2,
              y: (i.h - 60) / 2 }],

            box_active_index: 0 }),
          uni.hideLoading();
        } });

    },
    del: function del() {
      var t = this,
      a = t.box_item,
      e = t.box_active_index,
      o = [];
      for (var i = 0; i < a.length; i++) {
        i != e && o.push(a[i]);
      }
      t.setData({
        box_item: o,
        box_active_index: o.length > 0 ? o.length - 1 : null });

    },
    touchStart: function touchStart(t) {
      var a = this,
      e = a.box_item;
      "move" == t.target.dataset.type && a.setData({
        box_active_index: t.target.dataset.index });

      var o = a.box_active_index;
      console.log(e[o].x);
      oldXY = [t.touches[0].pageX, t.touches[0].pageY, e[o].w, e[o].h, e[o].x, e[o].y];
    },
    touchMove: function touchMove(t) {
      var a = this,
      e = a.box_item,
      o = a.box_active_index;
      // console.log(o)
      "move" == t.target.dataset.type ? (e[o].x = oldXY[4] + t.touches[0].pageX - oldXY[0],
      e[o].y = oldXY[5] + t.touches[0].pageY - oldXY[1], e[o].x = e[o].x > 1 ? e[o].x : 1,
      e[o].y = e[o].y > 1 ? e[o].y : 1, e[o].x = e[o].x + e[o].w < a.box_data.w ? e[o].x : a.box_data.
      w - e[o].w - 1,
      e[o].y = e[o].y + e[o].h < a.box_data.h ? e[o].y : a.box_data.h - e[o].h - 1) : (e[o].w =
      oldXY[2] + t.touches[0].pageX - oldXY[0],
      e[o].h = oldXY[3] + t.touches[0].pageY - oldXY[1], e[o].w = e[o].x + e[o].w < a.box_data.w ? e[
      o].w : a.box_data.w - e[o].x - 1,
      e[o].h = e[o].y + e[o].h < a.box_data.h ? e[o].h : a.box_data.h - e[o].y - 1),
      console.log(this.box_active_index);
      a.setData({
        box_item: e });

    },
    touchMoveDraw: function touchMoveDraw(t) {
      var e = this;
      "" == a ? (a = "add", e.addItem({
        w: 0,
        h: 0,
        x: t.touches[0].pageX - t.target.offsetLeft,
        y: t.touches[0].pageY - 100 }),
      e.touchStart(t)) : e.touchMove(t);
    },
    touchEndDraw: function touchEndDraw() {
      a = "";
    },
    addItem: function addItem(t) {
      var a = this;
      a.setData({
        box_item: a.box_item.concat(t),
        box_active_index: a.box_item.length });

    },
    wt: function wt(e) {
      var that = this;
      var i = that.box_active_index;
      console.log(that.box_data.h);
      switch (e) {
        case 'up':
          if (that.box_item[i].y <= 1) {
            that.box_item[i].y = 1;
            return false;
          }
          that.box_item[i].y--;
          break;
        case 'down':
          if (that.box_item[i].y + that.box_item[i].h >= that.box_data.h - 1) {
            that.box_item[i].y = that.box_data.h - that.box_item[i].h - 1;
            return false;
          }
          that.box_item[i].y++;
          break;
        case 'left':
          if (that.box_item[i].x <= 1) {
            that.box_item[i].x = 1;
            return false;
          }
          that.box_item[i].x--;
          break;
        case 'right':
          if (that.box_item[i].x + that.box_item[i].w >= that.box_data.w - 1) {
            that.box_item[i].x = that.box_data.w - that.box_item[i].w - 1;
            return false;
          }
          that.box_item[i].x++;
          break;
        case 'big':
          if (that.box_item[i].x + that.box_item[i].w >= that.box_data.w - 1 || that.box_item[i].y + that.box_item[i].h >= that.box_data.h - 1) {

            return false;
          }
          that.box_item[i].w++;
          that.box_item[i].h++;
          break;
        case 'small':
          if (that.box_item[i].w <= 1 || that.box_item[i].h <= 1) {
            return false;
          }
          that.box_item[i].w--;
          that.box_item[i].h--;
          break;}


    },
    RadioChange: function RadioChange(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.mrfg = val;
      that.option = that.options[val].id;
      that.hideModal();
    },
    Radiogbfxs: function Radiogbfxs(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.gbfxindex = val;
      that.hideModal();
    },
    Radiorenlian: function Radiorenlian(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.mrfg = val;
      that.hideModal();
    },
    Radiorxm: function Radiorxm(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.mrfg = val;
      that.hideModal();
    },
    Radiokoutu: function Radiokoutu(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.mrfg = val;
      that.hideModal();
    },
    Radiobqbjs: function Radiobqbjs(e) {
      var that = this,val = e.detail.value;
      console.log(val);
      that.mrfg = val;
      that.hideModal();
    },
    onChange: function onChange(e) {
      this.swidth = e.detail.x < -15 ? -15 : e.detail.x + 15;
    },
    showimg: function showimg() {
      this.$refs.popup.show();
    },
    showModal: function showModal(e) {
      var that = this;
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    savekf: function savekf() {
      var that = this;
      that.$Tool.saveimg(that.config.wxkefu_image);
    },
    showkf: function showkf() {
      var that = this;




      that.modalName = 'kfimage';

    },
    showkefuwx: function showkefuwx() {
      var that = this;
      that.$Tool.showkefu(that.config.wxkefu);
    },
    govip: function govip() {
      var that = this;
      if (that.config.pay != 1) {
        that.$Tool.showimg(that.config.wxkefu_image);
      } else
      {
        if (that.isios && that.config.iospay != 1) {
          that.$Tool.showimg(that.config.wxkefu_image);
        } else
        {
          that.$Tool.gopage('/pages/my/pay');
        }
      }
    },
    gotask: function gotask() {
      this.$Tool.gotask(this);
    },
    selectimg: function selectimg(e) {
      var that = this;
      switch (e) {
        case 'weixin':
          wx.chooseMessageFile({
            count: 1,
            type: 'image',
            success: function success(res) {
              var tempFilePath = res.tempFiles[0].path;
              var hz = tempFilePath.substring(tempFilePath.lastIndexOf('.') + 1);
              console.log(tempFilePath);
              // tempFilePath可以作为img标签的src属性显示图片
              that.$Tool.imgcheck(tempFilePath, function () {
                if (hz == 'jpg' || hz == 'png' || hz == 'bmp' || hz == 'jpeg') {
                  if (hz == 'jpg' || hz == 'jpeg')
                  {
                    that.imagetype = 'data:image/jpeg;base64,';
                  } else
                  {
                    that.imagetype = 'data:image/' + hz + ';base64,';
                  }
                  uni.getImageInfo({
                    src: tempFilePath,
                    success: function success(image) {
                      if (image.width > image.height) {
                        that.goimagew = true;
                      } else
                      {
                        that.goimagew = false;
                      }
                      that.goimage = tempFilePath;
                      if (that.tool.bs == 'txxf') {
                        that.init(tempFilePath);
                      }
                      that.$refs.popup.close();
                    } });

                } else
                {
                  that.$Tool.toast('格式有误，仅支持jpg/png/bmp格式', 'none');
                  that.goimage = '';
                  that.$refs.popup.close();
                }
              }, function () {
                that.goimage = '';
                that.$refs.popup.close();
              });
            } });

          break;
        case 'camera':

          tt.getSetting({
            success: function success(res) {
              console.log(res);
              if (!res.authSetting['scope.camera']) {
                uni.authorize({
                  scope: 'scope.camera',
                  success: function success() {
                    that.slsimg(e);
                  },
                  fail: function fail(err) {
                    if (err.errmsg = 'authorize:fail auth deny') {
                      uni.showModal({
                        title: '提示',
                        content: '您拒绝了授权相机权限，需要重新授权',
                        confirmText: '这就去',
                        cancelText: '知道了',
                        success: function success(res) {
                          if (res.confirm) {
                            uni.openSetting({
                              success: function success(res) {
                                console.log(res.authSetting);

                              } });

                          } else if (res.cancel) {
                            console.log('用户点击取消');
                          }
                        } });

                    };
                  } });

              } else {
                that.slsimg(e);
              };
            },
            fail: function fail(res) {
              console.log("getSetting \u8C03\u7528\u5931\u8D25");
            } });





          break;
        default:

          tt.getSetting({
            success: function success(res) {
              console.log(res);
              if (!res.authSetting['scope.album']) {
                uni.authorize({
                  scope: 'scope.album',
                  success: function success() {
                    that.slsimg(e);
                  },
                  fail: function fail(err) {
                    if (err.errmsg = 'authorize:fail auth deny') {
                      uni.showModal({
                        title: '提示',
                        content: '您拒绝了授权相册权限，需要重新授权',
                        confirmText: '这就去',
                        cancelText: '知道了',
                        success: function success(res) {
                          if (res.confirm) {
                            uni.openSetting({
                              success: function success(res) {
                                console.log(res.authSetting);

                              } });

                          } else if (res.cancel) {
                            console.log('用户点击取消');
                          }
                        } });

                    };
                  } });

              } else {
                that.slsimg(e);
              };
            },
            fail: function fail(res) {
              console.log("getSetting \u8C03\u7528\u5931\u8D25");
            } });





          break;}

    },
    slsimg: function slsimg(e) {
      var that = this;
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: [e],
        success: function success(res) {
          var tempFilePath = res.tempFilePaths[0];
          var hz = tempFilePath.substring(tempFilePath.lastIndexOf('.') + 1);
          console.log(tempFilePath);
          that.$Tool.imgcheck(tempFilePath, function () {
            console.log(hz);
            if (hz == 'jpg' || hz == 'png' || hz == 'bmp' || hz == 'jpeg') {
              if (hz == 'jpg' || hz == 'jpeg')
              {
                that.imagetype = 'data:image/jpeg;base64,';
              } else
              {
                that.imagetype = 'data:image/' + hz + ';base64,';
              }
              uni.getImageInfo({
                src: tempFilePath,
                success: function success(image) {
                  if (image.width > image.height) {
                    that.goimagew = true;
                  } else
                  {
                    that.goimagew = false;
                  }
                  if (that.tool.bs == 'txxf') {
                    that.init(tempFilePath);
                  }
                  that.goimage = tempFilePath;
                  console.log(that.goimage);
                  that.$refs.popup.close();
                } });


            } else
            {
              that.$Tool.toast('格式有误，仅支持jpg/png/bmp格式', 'none');
              that.goimage = '';
              that.$refs.popup.close();
            }
          }, function () {
            that.goimage = '';
            that.$refs.popup.close();
          });

        } });

    },
    register: function register() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var that = this;
      if (that.login.userimg) {
        return true;
      }
      uni.getUserProfile({



        success: function success(res) {
          console.log(res);
          if (res.errMsg == 'getUserProfile:ok' || res.errMsg == 'getUserInfo:ok') {
            var update = res.userInfo;

            update = res.rawData;

            console.log(update);
            that.$Tool.ajax('register', function (r) {
              console.log(r);
              that.$Tool.isregister(that);
              if (e) {
                that[e]();
              }
            }, { userinfo: update });
          }
        },
        fail: function fail(res) {
          console.log(res);
        } });


    },
    detectinte: function detectinte() {
      var that = this;
      if (that.goimage == '') {
        that.$Tool.toast('请先选择要处理的图片！');
        return false;
      }
      this.$Tool.isvip(this, function () {
        that.chuliimg();
      }, function () {
        if (that.tool.inte == 0) {
          if (that.tool.isvip == 1) {
            console.log('VIP专属');
            that.$refs.getinte.show('此为VIP专属服务，请开通VIP后重试');
          } else
          {
            // 免费
            that.chuliimg();
          }
        } else
        {
          console.log('不是VIP');
          that.$Tool.intes(0, that.tool.inte, that, function () {
            that.chuliimg();
          }, function () {
            that.$refs.getinte.show(that.config.intename + '不足，请先获取' + that.config.intename);
          });
        }

      });
    },
    chuliimg: function chuliimg() {
      var that = this;
      that.modalName = 'chuliload';
      var updata = { bs: that.tool.bs, toolname: that.tool.name };
      if (that.tool.bs == 'txxf') {
        var scale = that.box_data.scale;
        console.log(scale);
        var txxfs = [];
        for (var q = 0; q < that.box_item.length; q++) {
          var x = that.box_item[q].x / scale;
          var y = that.box_item[q].y / scale;
          var w = that.box_item[q].w / scale;
          var h = that.box_item[q].h / scale;
          var ns = {};
          ns.width = w.toFixed();
          ns.top = y.toFixed();
          ns.height = h.toFixed();
          ns.left = x.toFixed();
          txxfs.push(ns);
        }
        updata.rectangle = JSON.stringify(txxfs);
      }
      if (that.tool.bs == 'txfgzh') {
        updata.option = that.option;
      }
      if (that.tool.bs == 'fxbj') {
        updata.gbfx = that.gbfx[that.gbfxindex].id;
      }
      if (that.tool.bs == 'rxtx') {
        updata.type = that.renliantx[that.mrfg].id;
      }
      if (that.tool.bs == 'bqbj') {
        updata.type = that.bqbj[that.mrfg].id;
      }
      if (that.tool.bs == 'rxmhf') {
        updata.type = that.rxmhf[that.mrfg].id;
      }
      if (that.tool.bs == 'aikt') {
        updata.type = that.aikt[that.mrfg].id;
      }
      console.log(updata);
      if (that.tool.bs == 'facesex') {
        updata.target = that.sexC ? 0 : 1;
      }
      if (that.tool.bs == 'facebl' || that.tool.bs == 'facebx') {
        updata.age = that.age;
      }
      this.age;
      console.log(updata);
      that.$Tool.chuliimg(that.goimage, updata, function (res) {
        console.log(res);
        that.openimage = res.url;
        that.goimage = '';
        that.hideModal();
      }, function (e) {
        uni.showModal({
          title: '错误',
          content: e,
          success: function success() {

          } });

        that.hideModal();
      });

    } }, _defineProperty(_methods, "govip",
  function govip() {
    var that = this;
    console.log(86846);
    if (that.config.pay != 1) {
      that.$Tool.showimg(that.config.wxkefu_image);
    } else
    {
      if (that.isios && that.config.iospay != 1) {
        that.$Tool.showimg(that.config.wxkefu_image);
      } else
      {
        that.$Tool.gopage('/pages/my/pay');
      }

    }
  }), _defineProperty(_methods, "remake",
  function remake() {
    var that = this;
    that.openimage = '';
    that.goimage = '';
    that.hideModal();
  }), _defineProperty(_methods, "getad",
  function getad() {
    var that = this;
    that.$Tool.ajax('getAd', function (r) {
      that.adlist = r.data;
      that.CreateAd();

    });
  }), _defineProperty(_methods, "CreateAd",

  function CreateAd() {
    var that = this;















    if (tt.createRewardedVideoAd && that.adlist.ttad_reward != false) {
      that.videoAd = tt.createRewardedVideoAd({
        adUnitId: that.adlist.ttad_reward });

      that.videoAd.onLoad(function () {
      });
    } else
    {
      that.videoAd = '';
    }

  }), _defineProperty(_methods, "goad",
  function goad() {
    var that = this;
    console.log(that.adlist.ttad_reward);
    // that.$Tool.saveimg(that.openimage)
    that.$refs.getinte.close();
    console.log(that.videoAd);
    if (that.tool.adgo == 1 && that.videoAd) {
      that.videoAd.offClose();
      that.videoAd.offError();
      that.videoAd.onClose(function (res) {
        if (res && res.isEnded) {
          that.chuliimg();

        } else {
          uni.showToast({
            icon: 'none',
            title: "处理失败，中途关闭广告！" });

        }
      });
      that.videoAd.onError(function (err) {
        uni.showToast({
          icon: 'none',
          title: "暂时无广告，请稍后再试" });

      });
      that.videoAd.show().catch(function () {
        that.videoAd.load().
        then(function () {return that.videoAd.show();}).
        catch(function (err) {
          console.log('激励视频 广告显示失败');
          // that.qiandao();
          uni.showToast({
            icon: 'none',
            title: "暂时无广告,请稍后再试" });

        });
      });
    } else
    {
      that.chuliimg();
    }

  }), _defineProperty(_methods, "saveimg",

  function saveimg() {
    var that = this;
    // that.$Tool.saveimg(that.openimage)
    if (that.tool.adsave == 1 && that.videoAd) {
      that.videoAd.offClose();
      that.videoAd.offError();
      that.videoAd.onClose(function (res) {
        if (res && res.isEnded) {
          uni.showLoading({
            title: '正在保存...' });

          if (that.tool.bs == 'hzp') {
            that.$Tool.savevideo(that.openimage, that);
          } else
          {
            that.$Tool.saveimg(that.openimage);
          }

        } else {
          uni.showToast({
            icon: 'none',
            title: "保存失败，中途关闭广告！" });

        }
      });
      that.videoAd.onError(function (err) {
        uni.showToast({
          icon: 'none',
          title: "暂时无广告，请稍后再试" });

      });
      that.videoAd.show().catch(function () {
        that.videoAd.load().
        then(function () {return that.videoAd.show();}).
        catch(function (err) {
          console.log('激励视频 广告显示失败');
          // that.qiandao();
          uni.showToast({
            icon: 'none',
            title: "暂时无广告,已为您保存" });

          uni.showLoading({
            title: '正在保存...' });


          if (that.tool.bs == 'hzp') {
            that.$Tool.savevideo(that.openimage, that);
          } else
          {
            that.$Tool.saveimg(that.openimage);
          }
        });
      });
    } else
    {
      uni.showLoading({
        title: '正在保存...' });

      if (that.tool.bs == 'hzp') {

        that.$Tool.savevideo(that.openimage, that);
      } else
      {
        that.$Tool.saveimg(that.openimage);
      }
    }




  }), _defineProperty(_methods, "clearinput",
  function clearinput() {
    this.copyData = '';
  }), _defineProperty(_methods, "gourl",
  function gourl(e) {var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'wxapp';
    console.log(e);
    this.$Tool.gourl(e, b);
  }), _defineProperty(_methods, "back",
  function back() {
    this.$Tool.back();
  }), _defineProperty(_methods, "goindex",
  function goindex() {
    this.$Tool.goindex();
  }), _methods) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 58:
/*!*******************************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=style&index=0&id=0ee83aae&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./aitool.vue?vue&type=style&index=0&id=0ee83aae&lang=scss&scoped=true& */ 59);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_aitool_vue_vue_type_style_index_0_id_0ee83aae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 59:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/pages/tool/aitool.vue?vue&type=style&index=0&id=0ee83aae&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[52,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL3BhZ2VzL3Rvb2wvYWl0b29sLnZ1ZT9mMzAwIiwid2VicGFjazovLy9GOi9haeWbvueJh+WkhOeQhi/ogIHnhafniYfkuIroibIvcGFnZXMvdG9vbC9haXRvb2wudnVlPzFlYWQiLCJ3ZWJwYWNrOi8vL0Y6L2Fp5Zu+54mH5aSE55CGL+iAgeeFp+eJh+S4iuiJsi9wYWdlcy90b29sL2FpdG9vbC52dWU/OWM2ZSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL3BhZ2VzL3Rvb2wvYWl0b29sLnZ1ZT8yZmU4IiwidW5pLWFwcDovLy9wYWdlcy90b29sL2FpdG9vbC52dWUiLCJ3ZWJwYWNrOi8vL0Y6L2Fp5Zu+54mH5aSE55CGL+iAgeeFp+eJh+S4iuiJsi9wYWdlcy90b29sL2FpdG9vbC52dWU/YTU4YyIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL3BhZ2VzL3Rvb2wvYWl0b29sLnZ1ZT82OTFjIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O3NEQUFBO0FBQ0E7QUFDQSw2Riw2RkFGbUJBLEVBQUUsQ0FBQ0MsaUNBQUgsR0FBdUNDLG1CQUF2QztBQUduQkMsVUFBVSxDQUFDQyxlQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErSDtBQUMvSDtBQUMwRDtBQUNMO0FBQ3NDOzs7QUFHM0Y7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxzR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFD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Q0EsTztBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsR0E5eUJBO0FBK3lCQTtBQUNBO0FBQ0EsR0FqekJBO0FBa3pCQTtBQUNBO0FBQ0E7QUFDQSxHQXJ6QkE7QUFzekJBO0FBQ0E7QUFDQSxHQXh6QkE7QUF5ekJBO0FBQ0E7R0ExekJBLFlBaFBBLEU7Ozs7Ozs7Ozs7Ozs7QUN0WEE7QUFBQTtBQUFBO0FBQUE7QUFBMHlDLENBQWdCLHV3Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTl6QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3Rvb2wvYWl0b29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO3d4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvdG9vbC9haXRvb2wudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYWl0b29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWU4M2FhZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FpdG9vbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FpdG9vbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWl0b29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlZTgzYWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGVlODNhYWVcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdG9vbC9haXRvb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9haXRvb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlZTgzYWFlJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdW5pTmF2QmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhclwiICovIFwiQC9jb21wb25lbnRzL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICBjbWRQcm9ncmVzczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzc1wiICovIFwiQC9jb21wb25lbnRzL2NtZC1wcm9ncmVzcy9jbWQtcHJvZ3Jlc3MudnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIHd5YlBvcHVwOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy93eWItcG9wdXAvd3liLXBvcHVwXCIgKi8gXCJAL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWVcIlxuICAgICAgKVxuICAgIH0sXG4gICAgbG9naW46IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL2xvZ2luL2xvZ2luXCIgKi8gXCJAL2NvbXBvbmVudHMvbG9naW4vbG9naW4udnVlXCJcbiAgICAgIClcbiAgICB9LFxuICAgIGdldGludGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL2dldGludGUvZ2V0aW50ZVwiICovIFwiQC9jb21wb25lbnRzL2dldGludGUvZ2V0aW50ZS52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9haXRvb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9haXRvb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3ID5cclxuXHRcdDx1bmktbmF2LWJhciA6Y29sb3I9XCJjb25maWcuZnJvbnRfY29sb3JcIiA6dGl0bGU9XCJ0b29sLnRpdGxlXCIgOmJjb2xvcj1cImNvbmZpZy5iYWNrZ3JvdW5kQ29sb3JcIlxyXG5cdFx0XHQ6YmFja2dyb3VuZENvbG9yPVwiY29uZmlnLnRvcGJnMVwiIDpiYWNrZ3JvdW5kQ29sb3IxPVwiY29uZmlnLnRvcGJnMlwiIGJvcmRlcj1cImZhbHNlXCIgOnN0YXR1c0Jhcj1cInRydWVcIlxyXG5cdFx0XHRmaXhlZD1cInRydWVcIiBsZWZ0LWljb249XCJiYWNrXCIgQGNsaWNrTGVmdD1cImJhY2tcIj48L3VuaS1uYXYtYmFyPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlZmZlY3RcIiB2LWlmPVwiZ29pbWFnZVwiIHYtc2hvdz1cInRvb2wuYnMhPT0ndHh4ZidcIiA+XHJcblx0XHRcdFx0PGltYWdlIDptb2RlPVwiZ29pbWFnZXc/J3dpZHRoRml4JzonaGVpZ2h0Rml4J1wiIDpzcmM9XCJnb2ltYWdlXCIgOnN0eWxlPVwiZ29pbWFnZXc/J3dpZHRoOiAxMDAlOyc6J2hlaWdodDogNTAwcnB4OydcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInNlZmZlY3RcIiB2LWVsc2UtaWY9XCJvcGVuaW1hZ2VcIiA6c3R5bGU9XCJ0b29sLmJzID09ICdhaWt0J3x8dG9vbC5icyA9PSAna291dHUnPydiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTsnOicnXCI+XHJcblx0XHRcdFx0PHZpZGVvIHYtaWY9XCJ0b29sLmJzID09ICdoenAnXCIgYXV0b3BsYXk9XCJ0cnVlXCIgOnNyYz1cIm9wZW5pbWFnZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+PC92aWRlbz5cclxuXHRcdFx0XHQ8aW1hZ2Ugdi1lbHNlIDptb2RlPVwiZ29pbWFnZXc/J3dpZHRoRml4JzonaGVpZ2h0Rml4J1wiIDpzcmM9XCJvcGVuaW1hZ2VcIiA6c3R5bGU9XCJnb2ltYWdldz8nd2lkdGg6IDEwMCU7JzonaGVpZ2h0OiA1MDBycHg7J1wiID48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiZWZmZWN0XCIgdi1lbHNlID5cclxuXHRcdFx0PG1vdmFibGUtYXJlYSBjbGFzcz1cImVmZm1vdmVcIj5cclxuXHRcdFx0XHQgPGltYWdlIGNsYXNzPVwiZml4ZWRJbWdcIiBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwidG9vbC5icz09J2Fpa3QnP2N1ckltZ1ttcmZnXTpjdXJJbWdcIiA6c3R5bGU9XCInd2lkdGg6JytpbWFnZVdpZHRoKydweDtoZWlnaHQ6JytpbWFnZUhlaWdodCsncHg7J1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwiaW1nQm94IGFjdGl2ZVwiIDpzdHlsZT1cInt3aWR0aDpzd2lkdGgrJ3B4J31cIj5cclxuXHRcdFx0XHRcdFx0IDx2aWRlbyB2LWlmPVwidG9vbC5icz09J2h6cCdcIiA6c3JjPVwidG9QaWNcIiBhdXRvcGxheT1cInRydWVcIiBsb29wPVwidHJ1ZVwiIDpzdHlsZT1cIid3aWR0aDonK2ltYWdlV2lkdGgrJ3B4O2hlaWdodDonK2ltYWdlSGVpZ2h0KydweDsnXCI+PC92aWRlbz5cclxuXHRcdFx0XHQgICAgICAgIDxpbWFnZSB2LWVsc2UgbW9kZT1cIndpZHRoRml4XCIgOnNyYz1cInRvb2wuYnMgPT0gJ3R4Zmd6aCd8fHRvb2wuYnMgPT0gJ3J4dHgnfHx0b29sLmJzID09ICdyeG1oZid8fHRvb2wuYnMgPT0gJ2Fpa3QnfHx0b29sLmJzPT0nYnFiaic/dG9QaWNbbXJmZ106dG9QaWNcIiA6c3R5bGU9XCInd2lkdGg6JytpbWFnZVdpZHRoKydweDtoZWlnaHQ6JytpbWFnZUhlaWdodCsncHg7J1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0ICAgIDwvdmlldz5cclxuXHRcdFx0XHQ8bW92YWJsZS12aWV3IDp4PVwiaW5pdFhcIiBhbmltYXRpb249XCJmYWxzZVwiIHk9XCIwXCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiICBkYW1waW5nPVwiMTBcIiBvdXRPZkJvdW5kcz1cInRydWVcIiBAY2hhbmdlPVwib25DaGFuZ2VcIiBjbGFzcz1cImVmZmdvXCI+XHJcblx0XHRcdFx0XHQ8dmlldz48L3ZpZXc+XHJcblx0XHRcdFx0PC9tb3ZhYmxlLXZpZXc+XHJcblx0XHRcdDwvbW92YWJsZS1hcmVhPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PGNtZC1wcm9ncmVzcyB2LWlmPVwidG9vbC5icyA9PSAnaHpwJyYmb3BlbmltYWdlXCIgOnBlcmNlbnQ9XCJwZXJjZW50XCIgc3Ryb2tlLWNvbG9yPVwibGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWYzMmQ5LCAjODlmZmZkKVwiPjwvY21kLXByb2dyZXNzPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjcm9wcGVyLXdyYXBwZXJcIiB2LWlmPVwiZ29pbWFnZSYmdG9vbC5icz09J3R4eGYnXCIgOnN0eWxlPVwiJ2hlaWdodDonK2NvcmhlaSsnOydcIj5cclxuXHRcdDxpbWFnZSA6bW9kZT1cImdvaW1hZ2V3Pyd3aWR0aEZpeCc6J2hlaWdodEZpeCdcIiA6c3JjPVwiZ29pbWFnZVwiIDpzdHlsZT1cImdvaW1hZ2V3Pyd3aWR0aDogMTAwJTsnOidoZWlnaHQ6IDcwMHJweDsnXCI+PC9pbWFnZT5cclxuXHRcdFx0PHZpZXcgQHRvdWNoZW5kPVwidG91Y2hFbmREcmF3XCIgQHRvdWNobW92ZT1cInRvdWNoTW92ZURyYXdcIiBjbGFzcz1cImNyb3BwZXItd3JhcHBlclwiIGlkPVwiZHJhd1wiXHJcblx0XHRcdFx0OnN0eWxlPVwiJ3dpZHRoOicrYm94X2RhdGEudysncHg7aGVpZ2h0OicrYm94X2RhdGEuaCsncHg7J1wiPlxyXG5cdFx0XHRcdDx2aWV3IEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwidG91Y2hNb3ZlXCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hTdGFydFwiXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJpbmRleD09Ym94X2FjdGl2ZV9pbmRleD8nb24gZHJhdy1pdGVtJzonZHJhdy1pdGVtJ1wiIDpkYXRhLWluZGV4PVwiaW5kZXhcIiBkYXRhLXR5cGU9XCJtb3ZlXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cIid3aWR0aDonK2l0ZW0udysncHg7aGVpZ2h0OicraXRlbS5oKydweDt0b3A6JytpdGVtLnkrJ3B4O2xlZnQ6JytpdGVtLngrJ3B4J1wiXHJcblx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBib3hfaXRlbVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIEB0b3VjaHN0YXJ0LnN0b3AucHJldmVudD1cImRlbFwiIGNsYXNzPVwiYnRuLXhcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaWNvbi1idG4teC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PGltYWdlIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PVwidG91Y2hNb3ZlXCIgQHRvdWNoc3RhcnQuc3RvcC5wcmV2ZW50PVwidG91Y2hTdGFydFwiIGNsYXNzPVwiYnRuLWZkXCJcclxuXHRcdFx0XHRcdFx0ZGF0YS10eXBlPVwic2NhbGVcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaWNvbi1idG4tZmQucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtbW9kYWxcIiA6Y2xhc3M9XCJtb2RhbE5hbWU9PSdjaHVsaWxvYWQnPydzaG93JzonJ1wiID5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1kaWFsb2dcIj5cclxuXHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBtb2RlPVwid2lkdGhGaXhcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvbG9hZC5naWZcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkdGV4dFwiPuWbvueJh+WkhOeQhuS4re+8jOivt+eojeWQji4uLjwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJhZGxpc3Qud3hhZF93eHNob3dhZCE9MFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6MTAwJTsgbWFyZ2luOjIwcnB4IGF1dG87IHBhZGRpbmc6IDBycHggMHJweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx3eGFkIDphZGxpc3Q9XCJhZGxpc3RcIiA6cG9zPVwiYWRsaXN0Lnd4YWRfd3hzaG93YWRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdFx0PCEtLSAjaWZkZWYgTVAtVE9VVElBTyAtLT5cclxuXHRcdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJhZGxpc3QudHRhZF9zaG93YWQhPTBcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOjEwMCU7IG1hcmdpbjoyMHJweCBhdXRvOyBwYWRkaW5nOiAwcnB4IDBycHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHRhZCA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC50dGFkX3Nob3dhZFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwic2xpZEJveFwiICB2LWlmPVwiIWdvaW1hZ2UmJiFvcGVuaW1hZ2VcIj5cclxuXHRcdFx0PGljb24gY2xhc3M9XCJpY29uZm9udCBpY29uLXNsaWRpbmcxXCI+PC9pY29uPlxyXG5cdFx0XHQ8dGV4dD7miYvmjIflt6blj7Pmu5Hliqjmn6XnnIvmlYjmnpw8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tIDx2aWV3Pnt7dG9vbC5pbnRlfX08L3ZpZXc+IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJzbGlkQm94XCIgIHYtaWY9XCJ0b29sLmJzPT0na291dHUnJiYhZ29pbWFnZSYmIW9wZW5pbWFnZVwiPlxyXG5cdFx0XHQ8dGV4dD7ms6jvvJror7fkuIrkvKDmi6XmnInkurrlg4/nmoTlm77niYfvvIzlpITnkIblkI7lm77niYfkuLpQTkfpgI/mmI7og4zmma/moLzlvI88L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInNsaWRCb3hcIiAgdi1pZj1cIih0b29sLmJzPT0ncmxkbWgnfHx0b29sLmJzPT0nZnhiaid8fHRvb2wuYnM9PSdyeHR4J3x8dG9vbC5icz09J3J4bWhmJ3x8dG9vbC5icz09J2ZhY2VzZXgnfHx0b29sLmJzPT0nZmFjZWJ4J3x8dG9vbC5icz09J2ZhY2VibCcpJiYhZ29pbWFnZSYmIW9wZW5pbWFnZVwiPlxyXG5cdFx0XHQ8dGV4dD7ms6jvvJror7fkuIrkvKDmnInkurrohLjnmoTlm77niYfvvIzlkKbliJnlj6/og73pgKDmiJDlvILluLjmiqXplJk8L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtZm9ybS1ncm91cFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiICB2LWlmPVwidG9vbC5icz09J2ZhY2VzZXgnJiYhb3BlbmltYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibnZcIj7lj5jlpbM8L3ZpZXc+ICA8c3dpdGNoIGNsYXNzPSdzd2l0Y2gtc2V4JyBAY2hhbmdlPVwic2V4U1wiIDpjbGFzcz1cInNleEM/J2NoZWNrZWQnOicnXCIgOmNoZWNrZWQ9XCJzZXhDP3RydWU6ZmFsc2VcIj48L3N3aXRjaD4gPHZpZXcgIGNsYXNzPVwibmFuXCI+5Y+Y55S3PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtZm9ybS1ncm91cFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiICB2LWlmPVwidG9vbC5icz09J2ZhY2VibCcmJiFvcGVuaW1hZ2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktdGl0bGVcIj7pgInmi6nlubTpvoQ8L3ZpZXc+XHJcblx0XHRcdCAgICA8dmlldyBjbGFzcz1cImJsXCI+XHJcblx0XHRcdCAgICAgICAgIDxzbGlkZXIgYmxvY2stc2l6ZT1cIjE1XCIgOnZhbHVlPVwiYWdlXCIgQGNoYW5nZT1cInNsaWRlcmFnZVwiIG1pbj1cIjUwXCIgbWF4PVwiODVcIiBzaG93LXZhbHVlIC8+XHJcblx0XHRcdCAgICA8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQ+5bKBPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWZvcm0tZ3JvdXBcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiAgdi1pZj1cInRvb2wuYnM9PSdmYWNlYngnJiYhb3BlbmltYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXRpdGxlXCI+6YCJ5oup5bm06b6EPC92aWV3PlxyXG5cdFx0XHQgICAgPHZpZXcgY2xhc3M9XCJibFwiPlxyXG5cdFx0XHQgICAgICAgICA8c2xpZGVyIGJsb2NrLXNpemU9XCIxNVwiIDp2YWx1ZT1cImFnZVwiIEBjaGFuZ2U9XCJzbGlkZXJhZ2VcIiBtaW49XCIxXCIgbWF4PVwiMThcIiBzaG93LXZhbHVlIC8+XHJcblx0XHRcdCAgICA8L3ZpZXc+XHJcblx0XHRcdFx0PHRleHQ+5bKBPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSB0eGZnemhcIiAgOnN0eWxlPVwiZ29pbWFnZT8ncGFkZGluZy10b3A6IDIwcnB4Oyc6JydcIiB2LXNob3c9XCJ0b29sLmJzPT0ndHhmZ3poJyYmIW9wZW5pbWFnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXRpdGxlIHRleHQtb3JhbmdlIFwiPjwvdGV4dD4g5b2T5YmN77yae3tvcHRpb25zW21yZmddLm5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ncmVlbiBzaGFkb3dcIiBAdGFwPVwic2hvd01vZGFsXCIgZGF0YS10YXJnZXQ9XCJSYWRpb01vZGFsXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAyMHJweDtcIj7liIfmjaLpo47moLw8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgdHhmZ3poXCIgIDpzdHlsZT1cImdvaW1hZ2U/J3BhZGRpbmctdG9wOiAyMHJweDsnOicnXCIgdi1zaG93PVwidG9vbC5icz09J2JxYmonJiYhb3BlbmltYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1vcmFuZ2UgXCI+PC90ZXh0PiDlvZPliY3vvJp7e2JxYmpbbXJmZ10ubmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3UtYnRuIGJnLWdyZWVuIHNoYWRvd1wiIEB0YXA9XCJzaG93TW9kYWxcIiBkYXRhLXRhcmdldD1cIlJhZGlvYnFialwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMjBycHg7XCI+6YCJ5oup6KGo5oOFPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlIHR4Zmd6aFwiICA6c3R5bGU9XCJnb2ltYWdlPydwYWRkaW5nLXRvcDogMjBycHg7JzonJ1wiIHYtc2hvdz1cInRvb2wuYnM9PSdmeGJqJyYmIW9wZW5pbWFnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY3VJY29uLXRpdGxlIHRleHQtb3JhbmdlIFwiPjwvdGV4dD4g5b2T5YmN77yae3tnYmZ4W2diZnhpbmRleF0ubmFtZX19XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3UtYnRuIGJnLWdyZWVuIHNoYWRvd1wiIEB0YXA9XCJzaG93TW9kYWxcIiBkYXRhLXRhcmdldD1cIlJhZGlvR2JmeFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMjBycHg7XCI+6YCJ5oup5Y+R5Z6LPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1iYXIgYmctd2hpdGUgdHhmZ3poXCIgIDpzdHlsZT1cImdvaW1hZ2U/J3BhZGRpbmctdG9wOiAyMHJweDsnOicnXCIgdi1zaG93PVwidG9vbC5icz09J3J4dHgnJiYhb3BlbmltYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1vcmFuZ2UgXCI+PC90ZXh0PiDlvZPliY3vvJp7e3JlbmxpYW50eFttcmZnXS5uYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjdS1idG4gYmctZ3JlZW4gc2hhZG93XCIgQHRhcD1cInNob3dNb2RhbFwiIGRhdGEtdGFyZ2V0PVwiUmFkaW9yeHR4XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAyMHJweDtcIj7liIfmjaLnibnmlYg8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSB0eGZnemhcIiAgOnN0eWxlPVwiZ29pbWFnZT8ncGFkZGluZy10b3A6IDIwcnB4Oyc6JydcIiB2LXNob3c9XCJ0b29sLmJzPT0ncnhtaGYnJiYhb3BlbmltYWdlXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdUljb24tdGl0bGUgdGV4dC1vcmFuZ2UgXCI+PC90ZXh0PiDlvZPliY3vvJp7e3J4bWhmW21yZmddLm5hbWV9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ncmVlbiBzaGFkb3dcIiBAdGFwPVwic2hvd01vZGFsXCIgZGF0YS10YXJnZXQ9XCJSYWRpb3J4bWhmXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAyMHJweDtcIj7liIfmjaLpo47moLw8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LWJhciBiZy13aGl0ZSB0eGZnemhcIiAgOnN0eWxlPVwiZ29pbWFnZT8ncGFkZGluZy10b3A6IDIwcnB4Oyc6JydcIiB2LXNob3c9XCJ0b29sLmJzPT0nYWlrdCcmJiFvcGVuaW1hZ2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb25cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN1SWNvbi10aXRsZSB0ZXh0LW9yYW5nZSBcIj48L3RleHQ+IOW9k+WJje+8mnt7YWlrdFttcmZnXS5uYW1lfX1cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvblwiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjdS1idG4gYmctZ3JlZW4gc2hhZG93XCIgQHRhcD1cInNob3dNb2RhbFwiIGRhdGEtdGFyZ2V0PVwiUmFkaW9haWt0XCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAyMHJweDtcIj7liIfmjaLmqKHlvI88L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiICAgOmNsYXNzPVwibW9kYWxOYW1lPT0nUmFkaW9icWJqJz8nc2hvdyc6JydcIiBAdGFwPVwiaGlkZU1vZGFsXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtZGlhbG9nXCIgQHRhcC5zdG9wPVwiXCI+XHJcblx0XHRcdFx0PHJhZGlvLWdyb3VwIGNsYXNzPVwiYmxvY2tcIiBAY2hhbmdlPVwiUmFkaW9icWJqc1wiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUgdGV4dC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGJxYmpcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgZmxleC1zdWJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1zdWJcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHJhZGlvIGNsYXNzPVwicm91bmRcIiA6Y2xhc3M9XCJtcmZnPT1pbmRleD8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cIm1yZmc9PWluZGV4P3RydWU6ZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IDp2YWx1ZT1cImluZGV4XCI+PC9yYWRpbz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9yYWRpby1ncm91cD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiICAgOmNsYXNzPVwibW9kYWxOYW1lPT0nUmFkaW9haWt0Jz8nc2hvdyc6JydcIiBAdGFwPVwiaGlkZU1vZGFsXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtZGlhbG9nXCIgQHRhcC5zdG9wPVwiXCI+XHJcblx0XHRcdFx0PHJhZGlvLWdyb3VwIGNsYXNzPVwiYmxvY2tcIiBAY2hhbmdlPVwiUmFkaW9rb3V0dVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1saXN0IG1lbnUgdGV4dC1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtaXRlbVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGFpa3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgZmxleC1zdWJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1zdWJcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHJhZGlvIGNsYXNzPVwicm91bmRcIiA6Y2xhc3M9XCJtcmZnPT1pbmRleD8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cIm1yZmc9PWluZGV4P3RydWU6ZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IDp2YWx1ZT1cImluZGV4XCI+PC9yYWRpbz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9yYWRpby1ncm91cD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiICAgOmNsYXNzPVwibW9kYWxOYW1lPT0nUmFkaW9yeG1oZic/J3Nob3cnOicnXCIgQHRhcD1cImhpZGVNb2RhbFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWRpYWxvZ1wiIEB0YXAuc3RvcD1cIlwiPlxyXG5cdFx0XHRcdDxyYWRpby1ncm91cCBjbGFzcz1cImJsb2NrXCIgQGNoYW5nZT1cIlJhZGlvcnhtXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudSB0ZXh0LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcnhtaGZcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1jZW50ZXIgZmxleC1zdWJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC1zdWJcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHJhZGlvIGNsYXNzPVwicm91bmRcIiA6Y2xhc3M9XCJtcmZnPT1pbmRleD8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cIm1yZmc9PWluZGV4P3RydWU6ZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IDp2YWx1ZT1cImluZGV4XCI+PC9yYWRpbz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9yYWRpby1ncm91cD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiICAgOmNsYXNzPVwibW9kYWxOYW1lPT0nUmFkaW9yeHR4Jz8nc2hvdyc6JydcIiBAdGFwPVwiaGlkZU1vZGFsXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtZGlhbG9nXCIgQHRhcC5zdG9wPVwiXCI+XHJcblx0XHRcdFx0PHJhZGlvLWdyb3VwIGNsYXNzPVwiYmxvY2tcIiBAY2hhbmdlPVwiUmFkaW9yZW5saWFuXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWxpc3QgbWVudSB0ZXh0LWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdS1pdGVtXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcmVubGlhbnR4XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtc3ViXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxyYWRpbyBjbGFzcz1cInJvdW5kXCIgOmNsYXNzPVwibXJmZz09aW5kZXg/J2NoZWNrZWQnOicnXCIgOmNoZWNrZWQ9XCJtcmZnPT1pbmRleD90cnVlOmZhbHNlXCJcclxuXHRcdFx0XHRcdFx0XHRcdCA6dmFsdWU9XCJpbmRleFwiPjwvcmFkaW8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvcmFkaW8tZ3JvdXA+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY3UtbW9kYWxcIiAgIDpjbGFzcz1cIm1vZGFsTmFtZT09J1JhZGlvR2JmeCc/J3Nob3cnOicnXCIgQHRhcD1cImhpZGVNb2RhbFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWRpYWxvZ1wiIEB0YXAuc3RvcD1cIlwiPlxyXG5cdFx0XHRcdDxyYWRpby1ncm91cCBjbGFzcz1cImJsb2NrXCIgQGNoYW5nZT1cIlJhZGlvZ2JmeHNcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtbGlzdCBtZW51IHRleHQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBnYmZ4XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtc3ViXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxyYWRpbyBjbGFzcz1cInJvdW5kXCIgOmNsYXNzPVwiZ2JmeGluZGV4PT1pbmRleD8nY2hlY2tlZCc6JydcIiA6Y2hlY2tlZD1cImdiZnhpbmRleD09aW5kZXg/dHJ1ZTpmYWxzZVwiXHJcblx0XHRcdFx0XHRcdFx0XHQgOnZhbHVlPVwiaW5kZXhcIj48L3JhZGlvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3JhZGlvLWdyb3VwPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImN1LW1vZGFsXCIgICA6Y2xhc3M9XCJtb2RhbE5hbWU9PSdSYWRpb01vZGFsJz8nc2hvdyc6JydcIiBAdGFwPVwiaGlkZU1vZGFsXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtZGlhbG9nXCIgQHRhcC5zdG9wPVwiXCI+XHJcblx0XHRcdFx0PHJhZGlvLWdyb3VwIGNsYXNzPVwiYmxvY2tcIiBAY2hhbmdlPVwiUmFkaW9DaGFuZ2VcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtbGlzdCBtZW51IHRleHQtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImN1LWl0ZW1cIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBvcHRpb25zXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyIGZsZXgtc3ViXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtc3ViXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDxyYWRpbyBjbGFzcz1cInJvdW5kXCIgOmNsYXNzPVwibXJmZz09aW5kZXg/J2NoZWNrZWQnOicnXCIgOmNoZWNrZWQ9XCJtcmZnPT1pbmRleD90cnVlOmZhbHNlXCJcclxuXHRcdFx0XHRcdFx0XHRcdCA6dmFsdWU9XCJpbmRleFwiPjwvcmFkaW8+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvcmFkaW8tZ3JvdXA+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjdS1tb2RhbFwiIDpjbGFzcz1cIm1vZGFsTmFtZT09J2tmaW1hZ2UnPydzaG93JzonJ1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN1LWRpYWxvZ1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYmctaW1nXCI+XHJcblx0XHRcdFx0XHQ8aW1hZ2UgOnNyYz1cImNvbmZpZy53eGtlZnVfaW1hZ2VcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3UtYmFyIGJnLXdoaXRlXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvbiBtYXJnaW4tMCBmbGV4LXN1YlwiIEB0YXA9XCJoaWRlTW9kYWxcIj7lj5bmtog8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFjdGlvbiBtYXJnaW4tMCBmbGV4LXN1YiAgc29saWQtbGVmdFwiIEB0YXA9XCJzYXZla2ZcIj7kv53lrZjlm77niYc8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3ICB2LWlmPVwiIW9wZW5pbWFnZVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJidG5zXCIgdi1pZj1cIiFsb2dpbiYmY29uZmlnLnNpbG9naW49PTFcIiA6c3R5bGU9XCJnb2ltYWdlfHx0b29sLmJzPT0ndHhmZ3poJz8ncGFkZGluZy10b3A6IDI1cnB4Oyc6JydcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1yZWQgc2hhZG93LWJsdXJcIiBAdGFwPVwicmVnaXN0ZXIoJ3Nob3dpbWcnKVwiPjx0ZXh0IGNsYXNzPVwiaWNvbiBpY29uLXh1YW56ZXR1cGlhblwiPjwvdGV4dD7pgInmi6nlm77niYc8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ibHVlIHNoYWRvdy1ibHVyXCIgQHRhcD1cInJlZ2lzdGVyKClcIj48dGV4dCBjbGFzcz1cImljb24gaWNvbi1jaHVsaVwiPjwvdGV4dD7lpITnkIblm77niYc8L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYnRuc1wiIHYtZWxzZSA6c3R5bGU9XCJnb2ltYWdlfHx0b29sLmJzPT0ndHhmZ3poJz8ncGFkZGluZy10b3A6IDI1cnB4Oyc6JydcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1yZWQgc2hhZG93LWJsdXJcIiBAdGFwPVwic2hvd2ltZ1wiPjx0ZXh0IGNsYXNzPVwiaWNvbiBpY29uLXh1YW56ZXR1cGlhblwiPjwvdGV4dD7pgInmi6nlm77niYc8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ibHVlIHNoYWRvdy1ibHVyXCIgQHRhcD1cImRldGVjdGludGVcIj48dGV4dCBjbGFzcz1cImljb24gaWNvbi1jaHVsaVwiPjwvdGV4dD7lpITnkIblm77niYc8L2J1dHRvbj5cclxuXHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwid3RjbGFzc1wiIHYtaWY9XCJnb2ltYWdlJiZ0b29sLmJzPT0ndHh4ZicmJmJveF9pdGVtIT0nJ1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRvb2x0aXRsZVwiPumAieahhuW+ruiwgzwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkZXNjXCI+5aaC5p6c5omL5Yqo5LiN5aW96LCD5pW077yM5Y+v5Zyo5q2k5aSE5b6u6LCDPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInd0YnRuXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1jeWFuXCIgQHRhcD1cInd0KCd1cCcpXCI+5b6A5LiKPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biAgYmctY3lhblwiIEB0YXA9XCJ3dCgnZG93bicpXCI+5b6A5LiLPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biAgYmctY3lhblwiIEB0YXA9XCJ3dCgnbGVmdCcpXCI+5b6A5bemPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biAgYmctY3lhblwiIEB0YXA9XCJ3dCgncmlnaHQnKVwiPuW+gOWPszwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwid3RidG5cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY3UtYnRuIGJnLWN5YW5cIiBAdGFwPVwid3QoJ2JpZycpXCI+5Y+Y5aSnPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biAgYmctY3lhblwiIEB0YXA9XCJ3dCgnc21hbGwnKVwiPuWPmOWwjzwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJ0bnNcIiB2LWlmPVwib3BlbmltYWdlXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDogNDBycHg7XCI+XHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJjdS1idG4gYmctb3JhbmdlIHNoYWRvdy1ibHVyXCIgQHRhcD1cInJlbWFrZVwiPjx0ZXh0IGNsYXNzPVwiaWNvbiBpY29uLXJlbWFrZVwiPjwvdGV4dD7ph43mlrDliLbkvZw8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ncmVlbiBzaGFkb3ctYmx1clwiIEB0YXA9XCJzYXZlaW1nXCI+PHRleHQgY2xhc3M9XCJpY29uIGljb24tYmFvY3VudHVwaWFuXCIgdi1pZj1cInRvb2wuYWRzYXZlIT0xXCI+PC90ZXh0Pjx0ZXh0IGNsYXNzPVwiY3VJY29uIGN1SWNvbi12aWRlb1wiIHYtZWxzZT48L3RleHQ+5L+d5a2Ye3t0b29sLmJzID09ICdoenAnPyfop4bpopEnOiflm77niYcnfX08L2J1dHRvbj5cclxuXHRcdFxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJrZWZ1anhcIiB2LWlmPVwiY29uZmlnLmtmanhcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxNXJweDtcIj5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImN1LWJ0biBiZy1ncmFkdWFsLXB1cnBsZSBzaGFkb3ctYmx1clwiIEB0YXA9XCJzaG93a2ZcIj48dGV4dCBjbGFzcz1cImN1SWNvbi1zZWxlY3Rpb25maWxsIGxnIHRleHQtZ3JheVwiPjwvdGV4dD57e2NvbmZpZy5rZmp4fX08L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdFx0PGJsb2NrIHYtaWY9XCJhZGxpc3Qud3hhZF93eHRvb2wxYWQhPTBcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOjEwMCU7IG1hcmdpbjoyMHJweCBhdXRvOyBwYWRkaW5nOiAwcnB4IDBycHg7XCI+XHJcblx0XHRcdFx0XHQ8d3hhZCA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC53eGFkX3d4dG9vbDFhZFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1UT1VUSUFPIC0tPlxyXG5cdFx0XHQ8YmxvY2sgdi1pZj1cImFkbGlzdC50dGFkX3Rvb2wxYWQhPTBcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOjEwMCU7IG1hcmdpbjoyMHJweCBhdXRvOyBwYWRkaW5nOiAwcnB4IDBycHg7XCI+XHJcblx0XHRcdFx0XHQ8dHRhZCA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC50dGFkX3Rvb2wxYWRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHJcblx0XHQ8dGp0b29sIDp0b29scz1cIm50b29sc1wiPjwvdGp0b29sPlxyXG5cdFx0XHQ8d3liLXBvcHVwIHJlZj1cInBvcHVwXCIgdHlwZT1cImJvdHRvbVwiIGJnQ29sb3I9XCJyZ2JhKDAsMCwwLDApXCIgbWFza0FscGhhPVwiMC42XCIgIHdpZHRoPVwiMTAwJVwiIHJhZGl1cz1cIjBcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInhoaW50ZVwiIHYtaWY9XCIhaXN2aXAmJnRvb2wuaW50ZSE9MFwiPua2iOiAlzp7e3Rvb2wuaW50ZX19e3tjb25maWcuaW50ZW5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15aW50ZVwiIHYtaWY9XCIhaXN2aXAmJnRvb2wuaW50ZSE9MFwiPuWJqeS9mTp7e215aW50ZX19e3tjb25maWcuaW50ZW5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInhoaW50ZVwiIHYtaWY9XCJ0b29sLmludGU9PTAmJnRvb2wuaXN2aXA9PTFcIj5WSVDkuJPlsZ7lip/og708L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJteWludGVcIiB2LWlmPVwiIWlzdmlwJiYodG9vbC5pbnRlPT0wJiZ0b29sLmlzdmlwPT0xKVwiIEB0YXA9XCJnb3ZpcFwiPueri+WNs+iOt+WPllZJUDwvdmlldz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInhoaW50ZVwiIHYtaWY9XCJpc3ZpcCYmdG9vbC5pc3ZpcCE9MVwiPua2iOiAlzp7e3Rvb2wuaW50ZX19e3tjb25maWcuaW50ZW5hbWV9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm15aW50ZVwiIHYtaWY9XCJpc3ZpcCYmdG9vbC5pc3ZpcCE9MVwiPuWJqeS9mTp7e215aW50ZX19e3tjb25maWcuaW50ZW5hbWV9fTwvdmlldz5cclxuXHRcdFx0ICAgIDx2aWV3IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgIDx2aWV3IGNsYXNzPVwidXBidG5cIiBAdGFwPVwic2VsZWN0aW1nKCdjYW1lcmEnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQxXCI+5ouN54WnPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQyXCI+56uL5Y2z5ouN5pGE5omA6ZyA55qE54Wn54mHPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXByaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaWNvbi1jYXJtYS5wbmdcIiBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXBidG5cIiAgQHRhcD1cInNlbGVjdGltZygnYWxidW0nKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQxXCI+55u45YaMPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQyXCI+6YCJ5oup5omL5py655u45YaM5Lit55qE5Zu+5YOPPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXByaWdodFwiID5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlL2ljb24taW1nLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXBidG5cIiBAdGFwPVwic2VsZWN0aW1nKCd3ZWl4aW4nKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVwbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQxXCI+5a+85YWlPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibGVmdHRleHQyXCI+5LuO5b6u5L+h6IGK5aSp6K6w5b2V5Lit5a+85YWl54Wn54mHPC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXByaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2UvaWNvbi13ZWl4aW4ucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdCAgICA8L3ZpZXc+XHJcblx0XHRcdDwvd3liLXBvcHVwPlxyXG5cdFx0XHJcblx0XHQ8bG9naW4gcmVmPVwibG9naW5cIiBiYWNrPScvcGFnZXMvaW5kZXgvaW5kZXgnIDpnb3VybD1cIicvcGFnZXMvdG9vbC9haXRvb2w/aWQ9Jyt0b29sLmlkXCIgZ290eXBlPVwicmVMYXVuY2hcIiA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC53eGFkX3d4c2hvd2FkXCI+PC9sb2dpbj5cclxuXHRcdDxnZXRpbnRlIHJlZj1cImdldGludGVcIiA6Y29uZmlnPVwiY29uZmlnXCIgOnRvb2w9XCJ0b29sXCIgOmFkbGlzdD1cImFkbGlzdFwiIDpwb3M9XCJhZGxpc3Qud3hhZF93eHNob3dhZFwiIEBqbGdnID0gXCJnb2FkXCIgOnZpZGVvID1cInZpZGVvQWRcIj5cclxuXHRcdFx0XHJcblx0XHQ8L2dldGludGU+XHJcblx0XHQ8aW5hZC8+XHJcblx0XHRcclxuXHRcdDx0and4YXBwIDpjb25maWc9XCJjb25maWdcIiA6bG9naW49XCJsb2dpblwiLz5cclxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cclxuXHRcdFx0PGJsb2NrIHYtaWY9XCJhZGxpc3Qud3hhZF93eHRvb2wyYWQhPTBcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOjEwMCU7IG1hcmdpbjoyMHJweCBhdXRvOyBwYWRkaW5nOiAwcnB4IDBycHg7XCI+XHJcblx0XHRcdFx0XHQ8d3hhZCA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC53eGFkX3d4dG9vbDJhZFwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1UT1VUSUFPIC0tPlxyXG5cdFx0XHQ8YmxvY2sgdi1pZj1cImFkbGlzdC50dGFkX3Rvb2wyYWQhPTBcIj5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOjEwMCU7IG1hcmdpbjoyMHJweCBhdXRvOyBwYWRkaW5nOiAwcnB4IDBycHg7XCI+XHJcblx0XHRcdFx0XHQ8dHRhZCA6YWRsaXN0PVwiYWRsaXN0XCIgOnBvcz1cImFkbGlzdC50dGFkX3Rvb2wyYWRcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9ibG9jaz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHR2YXIgYXBwID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YTtcclxuXHRjb25zdCByZXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHR2YXIgdCA9IGdldEFwcCgpLFxyXG5cdFx0YSA9IFwiXCIsXHJcblx0XHRlID0gXCJcIjtcclxuXHR2YXIgb2xkWFkgPSAnJztcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNvbmZpZzogJycsXHJcblx0XHRcdFx0dG9vbDogJycsXHJcblx0XHRcdFx0YWRsaXN0OiAnJyxcclxuXHRcdFx0XHRpc2lvczogdGhpcy4kVG9vbC5pb3MoKSxcclxuXHRcdFx0XHRtb2RhbE5hbWU6ICcnLFxyXG5cdFx0XHRcdGN1ckltZzogJycsXHJcblx0XHRcdFx0dG9QaWM6ICcnLFxyXG5cdFx0XHRcdGltYWdlV2lkdGg6IHJlcy5zYWZlQXJlYS53aWR0aCxcclxuXHRcdFx0XHRpbWFnZUhlaWdodDogJycsXHJcblx0XHRcdFx0c3dpZHRoOnJlcy53aW5kb3dXaWR0aC8yLFxyXG5cdFx0XHRcdGluaXRYOjE1LFxyXG5cdFx0XHRcdGdvaW1hZ2U6JycsXHJcblx0XHRcdFx0Z29pbWFnZXc6JycsXHJcblx0XHRcdFx0aW1hZ2V0eXBlOicnLFxyXG5cdFx0XHRcdG9wZW5pbWFnZTonJyxcclxuXHRcdFx0XHRjb3JoZWk6dW5pLnVweDJweCg3MDApKydweCcsXHJcblx0XHRcdFx0bnRvb2xzOicnLFxyXG5cdFx0XHRcdHNleEM6ZmFsc2UsXHJcblx0XHRcdFx0b3B0aW9uczpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6J2NhcnRvb24nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WNoemAmueUu+mjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidwZW5jaWwnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+mTheeslOmjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidjb2xvcl9wZW5jaWwnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+W9qeiJsumTheeslOeUu+mjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOid3YXJtJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOiflvanoibLns5blnZfmsrnnlLvpo47moLwnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzond2F2ZScsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon56We5aWI5bed5Yay5rWq6YeM5rK555S76aOO5qC8JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6J2xhdmVuZGVyJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifolrDooaPojYnmsrnnlLvpo47moLwnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonbW9ub25va2UnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+Wlh+W8guayueeUu+mjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidzY3JlYW0nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WRkOWWiuayueeUu+mjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidnb3RoaWMnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WTpeeJueayueeUu+mjjuagvCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Z2JmeDpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6JzAnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WImOa1tycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOicxJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifplb/lj5EnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonMicsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon5YiY5rW35Yqg6ZW/5Y+RJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6JzMnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WinuWPkScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRicWJqOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonMCcsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon5byg5Zi056yRJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6JzEnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WYn+WYn+WYtCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOicyJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifkuI3pq5jlhbQnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonMycsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon6Zet5Zi056yRJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHJlbmxpYW50eDpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6J3BpeGFyJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifnmq7lhYvmlq8nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonM2RfY2FydG9vbicsXHJcblx0XHRcdFx0XHRcdCduYW1lJzonM0TljaHpgJrpo44nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonYW5nZWwnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WkqeS9vycsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidkZW1vbicsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon5oG26a2UJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6J3VraXlvZV9jYXJ0b29uJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifmta7kuJbnu5gnLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonYm9wdV9jYXJ0b29uJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifms6Lmma7po44nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonYW1jYXJ0b29uJyxcclxuXHRcdFx0XHRcdFx0J25hbWUnOifnvo7mvKvpo44nLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHJ4bWhmOltcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonanBjYXJ0b29uX2hlYWQnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+S6uuWDj+aXpea8q+mjjicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidqcGNhcnRvb24nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WFqOWbvuaXpea8q+mjjicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidoa2NhcnRvb24nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+Wbvea9rumjjicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidjbGFzc2ljX2NhcnRvb24nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+WkjeWPpOa8q+eUu+mjjicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOid0Y2NhcnRvb24nLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+iQjOa8q+mjjicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0YWlrdDpbXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0J2lkJzonZ2VuZXJhbCcsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon6YCa55So5oqg5Zu+JyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdCdpZCc6J3Byb2R1Y3QnLFxyXG5cdFx0XHRcdFx0XHQnbmFtZSc6J+aKoOWbvuWVhuWTgScsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQnaWQnOidodW1hbicsXHJcblx0XHRcdFx0XHRcdCduYW1lJzon5oqg5Zu+5Lq654mpJyxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRyZW5saWFudHhpbmRleDowLFxyXG5cdFx0XHRcdGdiZnhpbmRleDowLFxyXG5cdFx0XHRcdG1yZmc6MCxcclxuXHRcdFx0XHRvcHRpb246JycsXHJcblx0XHRcdFx0YWdlOjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ym94X2RhdGE6IFwiXCIsXHJcblx0XHRcdFx0Ym94X2l0ZW06IFtdLFxyXG5cdFx0XHRcdGJveF9hY3RpdmVfaW5kZXg6IDEsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bXlpbnRlOjAsXHJcblx0XHRcdFx0bG9naW46JycsXHJcblx0XHRcdFx0aXN2aXA6ZmFsc2UsXHJcblx0XHRcdFx0dmlkZW9BZDonJyxcclxuXHRcdFx0XHRwZXJjZW50OjAsXHJcblx0XHRcdFx0ZG93bnZpZGVvOmZhbHNlLFxyXG5cdFx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQ6IGZ1bmN0aW9uKG8pIHtcclxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5pbWFnZVdpZHRoKVxyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoaXMuZ2V0Y29uZmlnKG8uaWQpO1xyXG5cdFx0XHR0aGlzLiRUb29sLmlzdmlwKHRoaXMsZnVuY3Rpb24oKXtcdFxyXG5cdFx0XHR9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhhdC5nZXRhZCgpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0sXHJcblx0XHRvblNob3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuJFRvb2wuaXNyZWdpc3Rlcih0aGF0KTtcclxuXHRcdFx0dGhhdC5pbml0WD0xNTtcclxuXHRcdFx0bGV0IHhnZ2cgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoYXQuaW5pdFgrPTI7XHJcblx0XHRcdFx0aWYodGhhdC5pbml0WD49cmVzLndpbmRvd1dpZHRoLzIpe1xyXG5cdFx0XHRcdFx0dGhhdC5pbml0WD1yZXMud2luZG93V2lkdGgvMi0xNVxyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh4Z2dnKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwxKVxyXG5cdFx0XHQvLyDlvq7kv6HliIbkuqvnm4blj4vlnIhcclxuXHRcdFx0Ly8jaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdHd4LnNob3dTaGFyZU1lbnUoe1xyXG5cdFx0XHRcdHdpdGhTaGFyZVRpY2tldDogZmFsc2UsXHJcblx0XHRcdFx0bWVudXM6IFsnc2hhcmVBcHBNZXNzYWdlJywgJ3NoYXJlVGltZWxpbmUnXSxcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8jZW5kaWZcclxuXHRcdH0sXHJcblx0XHRvblNoYXJlQXBwTWVzc2FnZShlKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTogdGhhdC50b29sLmRlc2MsXHJcblx0XHRcdFx0aW1hZ2VVcmw6IHRoYXQudG9vbC5pbWcsXHJcblx0XHRcdFx0cGF0aDogJy9wYWdlcy90b29sL2FpdG9vbD9pZD0nK3RoYXQudG9vbC5pZFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly8g5b6u5L+h5YiG5Lqr55uG5Y+L5ZyIfOaUtuiXj1xyXG5cdFx0Ly8jaWZkZWYgTVAtV0VJWElOXHJcblx0XHRvblNoYXJlVGltZWxpbmUoKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTogdGhhdC50b29sLmRlc2MsXHJcblx0XHRcdFx0aW1hZ2VVcmw6IHRoYXQudG9vbC5pbWcsXHJcblx0XHRcdFx0cXVlcnk6J2lkPScrdGhhdC50b29sLmlkXHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0b25BZGRUb0Zhdm9yaXRlcygpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiB0aGF0LnRvb2wuZGVzYyxcclxuXHRcdFx0XHRpbWFnZVVybDogdGhhdC50b29sLmltZyxcclxuXHRcdFx0XHRxdWVyeTonaWQ9Jyt0aGF0LnRvb2wuaWRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vI2VuZGlmXHJcblx0XHRvbkhpZGUoKSB7fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0Y29uZmlnOiBmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LiRUb29sLmdldGNvbmZpZyh0aGF0LGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5jb25maWcpXHJcblx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhckNvbG9yKHtcclxuXHRcdFx0XHRcdCAgICBmcm9udENvbG9yOiB0aGF0LmNvbmZpZy5mcm9udF9jb2xvcixcclxuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoYXQuY29uZmlnLnRvcGJnMSxcclxuXHRcdFx0XHRcdCAgICBhbmltYXRpb246IHtcclxuXHRcdFx0XHRcdCAgICAgICAgZHVyYXRpb246IDQwMCxcclxuXHRcdFx0XHRcdCAgICAgICAgdGltaW5nRnVuYzogJ2Vhc2VJbidcclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhhdC4kVG9vbC5hamF4KCdnZXR0b29sJywgZnVuY3Rpb24ocikge1xyXG5cdFx0XHRcdFx0dmFyIHJlcyA9IHIuZGF0YTtcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IHJlcy50aXRsZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC50b29sID0gcmVzO1xyXG5cdFx0XHRcdFx0dGhhdC4kVG9vbC5hamF4KCdnZXRudG9vbCcsZnVuY3Rpb24ocil7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3MgPSByLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5udG9vbHMgPSByZXNzO1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoYXQubnRvb2xzKXtcclxuXHRcdFx0XHRcdFx0XHRcdGZvcihsZXQgaT0wO2k8dGhhdC5udG9vbHMubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubnRvb2xzW2ldWydiZ2NvbG9yJ10gPSB0aGF0LiRUb29sLmdldGNvbG9yKGkpKzk5XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LHtuaWQ6cmVzLmlkLHR5cGU6cmVzLnR5cGV9KTtcclxuXHRcdFx0XHRcdGxldCB5dGNjO1xyXG5cdFx0XHRcdFx0aWYocmVzLmJzID09ICd0eGZnemgnKXtcclxuXHRcdFx0XHRcdFx0dGhhdC50b1BpYyA9IHJlcy54LnNwbGl0KFwifFwiKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5tcmZnID0gcmVzLm1yZmc7XHJcblx0XHRcdFx0XHRcdHRoYXQub3B0aW9uID0gdGhhdC5vcHRpb25zW3Jlcy5tcmZnXS5pZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZihyZXMuYnMgPT0gJ3J4dHgnfHxyZXMuYnMgPT0gJ3J4bWhmJ3x8cmVzLmJzID09ICdicWJqJ3x8cmVzLmJzID09ICdhaWt0Jyl7XHJcblx0XHRcdFx0XHRcdHRoYXQudG9QaWMgPSByZXMueC5zcGxpdChcInxcIik7XHJcblx0XHRcdFx0XHRcdHRoYXQubXJmZyA9IHJlcy5tcmZnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC50b1BpYyA9IHJlcy54XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihyZXMuYnMgPT0gJ2Fpa3QnKXtcclxuXHRcdFx0XHRcdFx0dGhhdC5jdXJJbWcgPSByZXMueS5zcGxpdChcInxcIik7XHJcblx0XHRcdFx0XHRcdHl0Y2MgPSB0aGF0LmN1ckltZ1t0aGF0Lm1yZmddXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LmN1ckltZyA9IHJlcy55XHJcblx0XHRcdFx0XHRcdHl0Y2MgPSB0aGF0LmN1ckltZ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYocmVzLmJzID09ICdmYWNlYmwnKXtcclx0XHRcdFx0XHRcdHRoYXQuYWdlID0gNzBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHJlcy5icyA9PSAnZmFjZWJ4Jyl7XHJcblx0XHRcdFx0XHRcdHRoYXQuYWdlID0gM1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICB3eC5nZXRJbWFnZUluZm8oe1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgc3JjOiB5dGNjLFxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIHZhciBlID0gdGhhdC5pbWFnZVdpZHRoIC8gdC53aWR0aCAqIHQuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIHRoYXQuaW1hZ2VIZWlnaHQ9ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5pbWFnZUhlaWdodClcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAvLyAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIC8vICAgICBhLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXNHb1N0YXR1czogITBcclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAvLyAgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgLy8gfSwgMTIwMCk7XHJcblx0XHRcdFx0XHQgICAgICAgICAgICB9XHJcblx0XHRcdFx0XHQgICAgICAgIH0pO1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdGlkOiBpZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXhTOmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHRcdHRoaXMuc2V4QyA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNsaWRlcmFnZTpmdW5jdGlvbihlKXtcclxuXHRcdFx0XHR0aGlzLmFnZSA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5hZ2UpXHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXQ6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0ICAgICAgICBjb25zb2xlLmxvZyhcIuWIneWni+WMllwiKSwgdW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0ICAgICAgICAgICAgdGl0bGU6IFwi5Yqg6L295LitLi4uXCJcclxuXHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0ICAgICAgICB2YXIgZSA9IHRoaXM7XHJcblx0XHRcdCAgICAgICAgdW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdCAgICAgICAgICAgIHNyYzogdCxcclxuXHRcdFx0ICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGkgPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGUuZ29pbWFnZXcpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnNjYWxlID0gcmVzLndpbmRvd1dpZHRoL3Qud2lkdGg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGUuY29yaGVpID0gJ2F1dG8nXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnNjYWxlPSB1bmkudXB4MnB4KDcwMCkvdC5oZWlnaHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpLncgPSBwYXJzZUZsb2F0KCh0LndpZHRoICogaS5zY2FsZSkudG9GaXhlZCgwKSlcclxuXHRcdFx0XHRcdFx0XHRpLmggPSBwYXJzZUZsb2F0KCh0LmhlaWdodCAqIGkuc2NhbGUpLnRvRml4ZWQoMCkpLGNvbnNvbGUubG9nKGkpLCAgZS5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3hfZGF0YTogaSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3hfaXRlbTogW3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHc6IDEyMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGg6IDYwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eDogKGkudyAtIDEyMCkgLyAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTogKGkuaCAtIDYwKSAvIDJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3hfYWN0aXZlX2luZGV4OiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pLHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHQgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgfSk7XHJcblx0XHRcdCAgICB9LFxyXG5cdFx0XHRkZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciB0ID0gdGhpcyxcclxuXHRcdFx0XHRcdGEgPSB0LmJveF9pdGVtLFxyXG5cdFx0XHRcdFx0ZSA9IHQuYm94X2FjdGl2ZV9pbmRleCxcclxuXHRcdFx0XHRcdG8gPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGkgIT0gZSAmJiBvLnB1c2goYVtpXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHQuc2V0RGF0YSh7XHJcblx0XHRcdFx0XHRib3hfaXRlbTogbyxcclxuXHRcdFx0XHRcdGJveF9hY3RpdmVfaW5kZXg6IG8ubGVuZ3RoID4gMCA/IG8ubGVuZ3RoIC0gMSA6IG51bGxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hTdGFydDogZnVuY3Rpb24odCkge1xyXG5cdFx0XHRcdHZhciBhID0gdGhpcyxcclxuXHRcdFx0XHRcdGUgPSBhLmJveF9pdGVtO1xyXG5cdFx0XHRcdFwibW92ZVwiID09IHQudGFyZ2V0LmRhdGFzZXQudHlwZSAmJiBhLnNldERhdGEoe1xyXG5cdFx0XHRcdFx0Ym94X2FjdGl2ZV9pbmRleDogdC50YXJnZXQuZGF0YXNldC5pbmRleFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHZhciBvID0gYS5ib3hfYWN0aXZlX2luZGV4O1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVbb10ueClcclxuXHRcdFx0XHRvbGRYWSA9IFt0LnRvdWNoZXNbMF0ucGFnZVgsIHQudG91Y2hlc1swXS5wYWdlWSwgZVtvXS53LCBlW29dLmgsIGVbb10ueCwgZVtvXS55XTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hNb3ZlOiBmdW5jdGlvbih0KSB7XHJcblx0XHRcdFx0dmFyIGEgPSB0aGlzLFxyXG5cdFx0XHRcdFx0ZSA9IGEuYm94X2l0ZW0sXHJcblx0XHRcdFx0XHRvID0gYS5ib3hfYWN0aXZlX2luZGV4O1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKG8pXHJcblx0XHRcdFx0XCJtb3ZlXCIgPT0gdC50YXJnZXQuZGF0YXNldC50eXBlID8gKGVbb10ueCA9IG9sZFhZWzRdICsgdC50b3VjaGVzWzBdLnBhZ2VYIC0gb2xkWFlbMF0sXHJcblx0XHRcdFx0XHRcdGVbb10ueSA9IG9sZFhZWzVdICsgdC50b3VjaGVzWzBdLnBhZ2VZIC0gb2xkWFlbMV0sIGVbb10ueCA9IGVbb10ueCA+IDEgPyBlW29dLnggOiAxLFxyXG5cdFx0XHRcdFx0XHRlW29dLnkgPSBlW29dLnkgPiAxID8gZVtvXS55IDogMSwgZVtvXS54ID0gZVtvXS54ICsgZVtvXS53IDwgYS5ib3hfZGF0YS53ID8gZVtvXS54IDogYS5ib3hfZGF0YVxyXG5cdFx0XHRcdFx0XHQudyAtIGVbb10udyAtIDEsXHJcblx0XHRcdFx0XHRcdGVbb10ueSA9IGVbb10ueSArIGVbb10uaCA8IGEuYm94X2RhdGEuaCA/IGVbb10ueSA6IGEuYm94X2RhdGEuaCAtIGVbb10uaCAtIDEpIDogKGVbb10udyA9XHJcblx0XHRcdFx0XHRcdG9sZFhZWzJdICsgdC50b3VjaGVzWzBdLnBhZ2VYIC0gb2xkWFlbMF0sXHJcblx0XHRcdFx0XHRcdGVbb10uaCA9IG9sZFhZWzNdICsgdC50b3VjaGVzWzBdLnBhZ2VZIC0gb2xkWFlbMV0sIGVbb10udyA9IGVbb10ueCArIGVbb10udyA8IGEuYm94X2RhdGEudyA/IGVbXHJcblx0XHRcdFx0XHRcdFx0b10udyA6IGEuYm94X2RhdGEudyAtIGVbb10ueCAtIDEsXHJcblx0XHRcdFx0XHRcdGVbb10uaCA9IGVbb10ueSArIGVbb10uaCA8IGEuYm94X2RhdGEuaCA/IGVbb10uaCA6IGEuYm94X2RhdGEuaCAtIGVbb10ueSAtIDEpLFxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmJveF9hY3RpdmVfaW5kZXgpO1xyXG5cdFx0XHRcdFx0YS5zZXREYXRhKHtcclxuXHRcdFx0XHRcdFx0Ym94X2l0ZW06IGVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaE1vdmVEcmF3OiBmdW5jdGlvbih0KSB7XHJcblx0XHRcdFx0dmFyIGUgPSB0aGlzO1xyXG5cdFx0XHRcdFwiXCIgPT0gYSA/IChhID0gXCJhZGRcIiwgZS5hZGRJdGVtKHtcclxuXHRcdFx0XHRcdHc6IDAsXHJcblx0XHRcdFx0XHRoOiAwLFxyXG5cdFx0XHRcdFx0eDogdC50b3VjaGVzWzBdLnBhZ2VYIC0gdC50YXJnZXQub2Zmc2V0TGVmdCxcclxuXHRcdFx0XHRcdHk6IHQudG91Y2hlc1swXS5wYWdlWSAtIDEwMFxyXG5cdFx0XHRcdH0pLCBlLnRvdWNoU3RhcnQodCkpIDogZS50b3VjaE1vdmUodCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoRW5kRHJhdzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0YSA9IFwiXCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkZEl0ZW06IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0XHR2YXIgYSA9IHRoaXM7XHJcblx0XHRcdFx0YS5zZXREYXRhKHtcclxuXHRcdFx0XHRcdGJveF9pdGVtOiBhLmJveF9pdGVtLmNvbmNhdCh0KSxcclxuXHRcdFx0XHRcdGJveF9hY3RpdmVfaW5kZXg6IGEuYm94X2l0ZW0ubGVuZ3RoXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHd0OmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgaSA9IHRoYXQuYm94X2FjdGl2ZV9pbmRleDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LmJveF9kYXRhLmgpXHJcblx0XHRcdFx0c3dpdGNoKGUpe1xyXG5cdFx0XHRcdFx0Y2FzZSAndXAnOlxyXG5cdFx0XHRcdFx0XHRpZih0aGF0LmJveF9pdGVtW2ldLnk8PTEpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJveF9pdGVtW2ldLnk9MTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0ueS0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2Rvd24nOlxyXG5cdFx0XHRcdFx0XHRpZih0aGF0LmJveF9pdGVtW2ldLnkrdGhhdC5ib3hfaXRlbVtpXS5oPj10aGF0LmJveF9kYXRhLmgtMSl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5ib3hfaXRlbVtpXS55PXRoYXQuYm94X2RhdGEuaC10aGF0LmJveF9pdGVtW2ldLmgtMTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5ib3hfaXRlbVtpXS55Kys7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdGlmKHRoYXQuYm94X2l0ZW1baV0ueDw9MSl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5ib3hfaXRlbVtpXS54PTE7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0ueC0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0aWYodGhhdC5ib3hfaXRlbVtpXS54K3RoYXQuYm94X2l0ZW1baV0udz49dGhhdC5ib3hfZGF0YS53LTEpe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0ueD10aGF0LmJveF9kYXRhLnctdGhhdC5ib3hfaXRlbVtpXS53LTE7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0ueCsrO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2JpZyc6XHJcblx0XHRcdFx0XHRcdGlmKHRoYXQuYm94X2l0ZW1baV0ueCt0aGF0LmJveF9pdGVtW2ldLnc+PXRoYXQuYm94X2RhdGEudy0xfHx0aGF0LmJveF9pdGVtW2ldLnkrdGhhdC5ib3hfaXRlbVtpXS5oPj10aGF0LmJveF9kYXRhLmgtMSl7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0udysrO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmJveF9pdGVtW2ldLmgrKztcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzbWFsbCc6XHJcblx0XHRcdFx0XHRcdGlmKHRoYXQuYm94X2l0ZW1baV0udzw9MXx8dGhhdC5ib3hfaXRlbVtpXS5oPD0xKXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5ib3hfaXRlbVtpXS53LS07XHJcblx0XHRcdFx0XHRcdHRoYXQuYm94X2l0ZW1baV0uaC0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFJhZGlvQ2hhbmdlOmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcyx2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh2YWwpXHJcblx0XHRcdFx0dGhhdC5tcmZnID0gdmFsO1xyXG5cdFx0XHRcdHRoYXQub3B0aW9uID0gdGhhdC5vcHRpb25zW3ZhbF0uaWQ7XHJcblx0XHRcdFx0dGhhdC5oaWRlTW9kYWwoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYWRpb2diZnhzOmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcyx2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh2YWwpXHJcblx0XHRcdFx0dGhhdC5nYmZ4aW5kZXggPSB2YWw7XHJcblx0XHRcdFx0dGhhdC5oaWRlTW9kYWwoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYWRpb3JlbmxpYW46ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLHZhbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHZhbClcclxuXHRcdFx0XHR0aGF0Lm1yZmcgPSB2YWw7XHJcblx0XHRcdFx0dGhhdC5oaWRlTW9kYWwoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYWRpb3J4bTpmdW5jdGlvbihlKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsdmFsID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codmFsKVxyXG5cdFx0XHRcdHRoYXQubXJmZyA9IHZhbDtcclxuXHRcdFx0XHR0aGF0LmhpZGVNb2RhbCgpXHJcblx0XHRcdH0sXHJcblx0XHRcdFJhZGlva291dHU6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzLHZhbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHZhbClcclxuXHRcdFx0XHR0aGF0Lm1yZmcgPSB2YWw7XHJcblx0XHRcdFx0dGhhdC5oaWRlTW9kYWwoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRSYWRpb2JxYmpzOmZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcyx2YWwgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh2YWwpXHJcblx0XHRcdFx0dGhhdC5tcmZnID0gdmFsO1xyXG5cdFx0XHRcdHRoYXQuaGlkZU1vZGFsKClcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaGFuZ2U6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0dGhpcy5zd2lkdGggPSBlLmRldGFpbC54PC0xNSA/IC0xNSA6IGUuZGV0YWlsLngrMTVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd2ltZygpe1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucG9wdXAuc2hvdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dNb2RhbChlKSB7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMubW9kYWxOYW1lID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFyZ2V0O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaWRlTW9kYWwoZSkge1xyXG5cdFx0XHRcdHRoaXMubW9kYWxOYW1lID0gbnVsbFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzYXZla2Y6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC4kVG9vbC5zYXZlaW1nKHRoYXQuY29uZmlnLnd4a2VmdV9pbWFnZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3drZjpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0dGhhdC4kVG9vbC5zaG93aW1nKHRoYXQuY29uZmlnLnd4a2VmdV9pbWFnZSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdHRoYXQubW9kYWxOYW1lID0gJ2tmaW1hZ2UnXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3drZWZ1d3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LiRUb29sLnNob3drZWZ1KHRoYXQuY29uZmlnLnd4a2VmdSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdvdmlwOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYodGhhdC5jb25maWcucGF5IT0xKXtcclxuXHRcdFx0XHRcdHRoYXQuJFRvb2wuc2hvd2ltZyh0aGF0LmNvbmZpZy53eGtlZnVfaW1hZ2UpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRpZih0aGF0LmlzaW9zJiZ0aGF0LmNvbmZpZy5pb3NwYXkhPTEpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LiRUb29sLnNob3dpbWcodGhhdC5jb25maWcud3hrZWZ1X2ltYWdlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC4kVG9vbC5nb3BhZ2UoJy9wYWdlcy9teS9wYXknKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z290YXNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLiRUb29sLmdvdGFzayh0aGlzKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxlY3RpbWc6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHN3aXRjaChlKXtcclxuXHRcdFx0XHRcdGNhc2UgJ3dlaXhpbic6XHJcblx0XHRcdFx0XHR3eC5jaG9vc2VNZXNzYWdlRmlsZSh7XHJcblx0XHRcdFx0XHQgIGNvdW50OiAxLFxyXG5cdFx0XHRcdFx0ICB0eXBlOiAnaW1hZ2UnLFxyXG5cdFx0XHRcdFx0ICBzdWNjZXNzIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0ICB2YXIgdGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlc1swXS5wYXRoO1xyXG5cdFx0XHRcdFx0XHR2YXIgaHogPSB0ZW1wRmlsZVBhdGguc3Vic3RyaW5nKHRlbXBGaWxlUGF0aC5sYXN0SW5kZXhPZignLicpICsgMSlcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2codGVtcEZpbGVQYXRoKVxyXG5cdFx0XHRcdFx0ICAgIC8vIHRlbXBGaWxlUGF0aOWPr+S7peS9nOS4umltZ+agh+etvueahHNyY+WxnuaAp+aYvuekuuWbvueJh1xyXG5cdFx0XHRcdFx0ICAgIHRoYXQuJFRvb2wuaW1nY2hlY2sodGVtcEZpbGVQYXRoLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0aWYoaHo9PSdqcGcnfHxoej09J3BuZyd8fGh6PT0nYm1wJ3x8aHo9PSdqcGVnJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihoej09J2pwZyd8fGh6PT0nanBlZycpXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaW1hZ2V0eXBlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaW1hZ2V0eXBlID0gJ2RhdGE6aW1hZ2UvJytoeisnO2Jhc2U2NCwnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBzcmM6IHRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpbWFnZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpbWFnZS53aWR0aD5pbWFnZS5oZWlnaHQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ29pbWFnZXcgPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdvaW1hZ2V3ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdvaW1hZ2UgPSB0ZW1wRmlsZVBhdGhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0ndHh4Zicpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaW5pdCh0ZW1wRmlsZVBhdGgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuJHJlZnMucG9wdXAuY2xvc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuJFRvb2wudG9hc3QoJ+agvOW8j+acieivr++8jOS7heaUr+aMgWpwZy9wbmcvYm1w5qC85byPJywnbm9uZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5nb2ltYWdlID0nJztcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuJHJlZnMucG9wdXAuY2xvc2UoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAgICB9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHQgICAgXHR0aGF0LmdvaW1hZ2UgPScnO1xyXG5cdFx0XHRcdFx0ICAgIFx0dGhhdC4kcmVmcy5wb3B1cC5jbG9zZSgpXHJcblx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnY2FtZXJhJzpcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBNUC1UT1VUSUFPXHJcblx0XHRcdFx0XHR0dC5nZXRTZXR0aW5nKHtcclxuXHRcdFx0XHRcdCAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0ICBjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHQgICAgaWYoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUuY2FtZXJhJ10pe1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5hdXRob3JpemUoe1xyXG5cdFx0XHRcdFx0XHRcdCAgc2NvcGU6ICdzY29wZS5jYW1lcmEnLFxyXG5cdFx0XHRcdFx0XHRcdCAgc3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgdGhhdC5zbHNpbWcoZSk7XHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdFx0XHRcdCAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdCAgICBpZiAoZXJyLmVycm1zZyA9ICdhdXRob3JpemU6ZmFpbCBhdXRoIGRlbnknKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgdW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb250ZW50OiAn5oKo5ouS57ud5LqG5o6I5p2D55u45py65p2D6ZmQ77yM6ZyA6KaB6YeN5paw5o6I5p2DJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbmZpcm1UZXh0OiAn6L+Z5bCx5Y67JyxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNhbmNlbFRleHQ6ICfnn6XpgZPkuoYnLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgdW5pLm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZylcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdFx0XHQgICAgfTtcclxuXHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNsc2ltZyhlKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgZmFpbChyZXMpIHtcclxuXHRcdFx0XHRcdCAgICBjb25zb2xlLmxvZyhgZ2V0U2V0dGluZyDosIPnlKjlpLHotKVgKTtcclxuXHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHR0aGF0LnNsc2ltZyhlKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHRcdHR0LmdldFNldHRpbmcoe1xyXG5cdFx0XHRcdFx0ICBzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdCAgICBpZighcmVzLmF1dGhTZXR0aW5nWydzY29wZS5hbGJ1bSddKXtcclxuXHRcdFx0XHRcdFx0XHR1bmkuYXV0aG9yaXplKHtcclxuXHRcdFx0XHRcdFx0XHQgIHNjb3BlOiAnc2NvcGUuYWxidW0nLFxyXG5cdFx0XHRcdFx0XHRcdCAgc3VjY2VzcygpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgdGhhdC5zbHNpbWcoZSk7XHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdFx0XHRcdCAgZmFpbDogZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdCAgICBpZiAoZXJyLmVycm1zZyA9ICdhdXRob3JpemU6ZmFpbCBhdXRoIGRlbnknKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgdW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICBjb250ZW50OiAn5oKo5ouS57ud5LqG5o6I5p2D55u45YaM5p2D6ZmQ77yM6ZyA6KaB6YeN5paw5o6I5p2DJyxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNvbmZpcm1UZXh0OiAn6L+Z5bCx5Y67JyxcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIGNhbmNlbFRleHQ6ICfnn6XpgZPkuoYnLFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgdW5pLm9wZW5TZXR0aW5nKHtcclxuXHRcdFx0XHRcdFx0XHQgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5hdXRoU2V0dGluZylcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIH0pXHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgfSlcclxuXHRcdFx0XHRcdFx0XHQgICAgfTtcclxuXHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNsc2ltZyhlKTtcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgZmFpbChyZXMpIHtcclxuXHRcdFx0XHRcdCAgICBjb25zb2xlLmxvZyhgZ2V0U2V0dGluZyDosIPnlKjlpLHotKVgKTtcclxuXHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHR0aGF0LnNsc2ltZyhlKTtcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbHNpbWc6ZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0ICAgIGNvdW50OjEsIC8v6buY6K6kOVxyXG5cdFx0XHRcdCAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8v5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcblx0XHRcdFx0ICAgIHNvdXJjZVR5cGU6IFtlXSwgXHJcblx0XHRcdFx0ICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHRlbXBGaWxlUGF0aCA9cmVzLnRlbXBGaWxlUGF0aHNbMF07XHJcblx0XHRcdFx0XHRcdHZhciBoeiA9IHRlbXBGaWxlUGF0aC5zdWJzdHJpbmcodGVtcEZpbGVQYXRoLmxhc3RJbmRleE9mKCcuJykgKyAxKVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0ZW1wRmlsZVBhdGgpXHJcblx0XHRcdFx0XHRcdHRoYXQuJFRvb2wuaW1nY2hlY2sodGVtcEZpbGVQYXRoLGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coaHopXHJcblx0XHRcdFx0XHRcdFx0aWYoaHo9PSdqcGcnfHxoej09J3BuZyd8fGh6PT0nYm1wJ3x8aHo9PSdqcGVnJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihoej09J2pwZyd8fGh6PT0nanBlZycpXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaW1hZ2V0eXBlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuaW1hZ2V0eXBlID0gJ2RhdGE6aW1hZ2UvJytoeisnO2Jhc2U2NCwnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmdldEltYWdlSW5mbyh7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgICAgICAgICBzcmM6IHRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChpbWFnZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpbWFnZS53aWR0aD5pbWFnZS5oZWlnaHQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ29pbWFnZXcgPSB0cnVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdvaW1hZ2V3ID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGF0LnRvb2wuYnM9PSd0eHhmJyl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5pbml0KHRlbXBGaWxlUGF0aCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nb2ltYWdlID0gdGVtcEZpbGVQYXRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoYXQuZ29pbWFnZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuJHJlZnMucG9wdXAuY2xvc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICAgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgICB9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC4kVG9vbC50b2FzdCgn5qC85byP5pyJ6K+v77yM5LuF5pSv5oyBanBnL3BuZy9ibXDmoLzlvI8nLCdub25lJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmdvaW1hZ2UgPScnO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC4kcmVmcy5wb3B1cC5jbG9zZSgpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9LGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5nb2ltYWdlID0nJztcclxuXHRcdFx0XHRcdFx0XHR0aGF0LiRyZWZzLnBvcHVwLmNsb3NlKClcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlZ2lzdGVyOmZ1bmN0aW9uKGU9Jycpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZih0aGF0LmxvZ2luLnVzZXJpbWcpe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5nZXRVc2VyUHJvZmlsZSh7XHJcblx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtV0VJWElOXHJcblx0XHRcdFx0XHRkZXNjOifnlKjkuo7nlKjmiLfmnI3liqEnLFxyXG5cdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0aWYocmVzLmVyck1zZz09J2dldFVzZXJQcm9maWxlOm9rJ3x8cmVzLmVyck1zZz09J2dldFVzZXJJbmZvOm9rJyl7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVwZGF0ZSA9IHJlcy51c2VySW5mbztcclxuXHRcdFx0XHRcdFx0XHQvLyAjaWZkZWYgTVAtVE9VVElBT1xyXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZSA9IHJlcy5yYXdEYXRhXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2codXBkYXRlKVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuJFRvb2wuYWpheCgncmVnaXN0ZXInLGZ1bmN0aW9uKHIpe1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocilcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuJFRvb2wuaXNyZWdpc3Rlcih0aGF0KTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0W2VdKClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LHt1c2VyaW5mbzp1cGRhdGV9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXRlY3RpbnRlOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmKHRoYXQuZ29pbWFnZT09Jycpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LiRUb29sLnRvYXN0KCfor7flhYjpgInmi6nopoHlpITnkIbnmoTlm77niYfvvIEnKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRUb29sLmlzdmlwKHRoaXMsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHRoYXQuY2h1bGlpbWcoKVxyXG5cdFx0XHRcdH0sZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGlmKHRoYXQudG9vbC5pbnRlPT0wKXtcclxuXHRcdFx0XHRcdFx0aWYodGhhdC50b29sLmlzdmlwPT0xKXtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnVklQ5LiT5bGeJylcclxuXHRcdFx0XHRcdFx0XHR0aGF0LiRyZWZzLmdldGludGUuc2hvdygn5q2k5Li6VklQ5LiT5bGe5pyN5Yqh77yM6K+35byA6YCaVklQ5ZCO6YeN6K+VJylcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdC8vIOWFjei0uVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2h1bGlpbWcoKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5LiN5pivVklQJylcclxuXHRcdFx0XHRcdFx0dGhhdC4kVG9vbC5pbnRlcygwLHRoYXQudG9vbC5pbnRlLHRoYXQsZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmNodWxpaW1nKClcclxuXHRcdFx0XHRcdFx0fSxmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuJHJlZnMuZ2V0aW50ZS5zaG93KHRoYXQuY29uZmlnLmludGVuYW1lKyfkuI3otrPvvIzor7flhYjojrflj5YnK3RoYXQuY29uZmlnLmludGVuYW1lKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNodWxpaW1nOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQubW9kYWxOYW1lID0gJ2NodWxpbG9hZCc7XHJcblx0XHRcdFx0XHR2YXIgdXBkYXRhID0ge2JzOnRoYXQudG9vbC5icyx0b29sbmFtZTp0aGF0LnRvb2wubmFtZX07XHJcblx0XHRcdFx0XHRpZih0aGF0LnRvb2wuYnM9PSd0eHhmJyl7XHJcblx0XHRcdFx0XHRcdHZhciBzY2FsZSA9IHRoYXQuYm94X2RhdGEuc2NhbGU7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHNjYWxlKVxyXG5cdFx0XHRcdFx0XHR2YXIgdHh4ZnMgPSBbXTtcclxuXHRcdFx0XHRcdFx0Zm9yKHZhciBxPTA7cTx0aGF0LmJveF9pdGVtLmxlbmd0aDtxKyspe1xyXG5cdFx0XHRcdFx0XHRcdGxldCB4ID0gdGhhdC5ib3hfaXRlbVtxXS54L3NjYWxlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCB5ID0gdGhhdC5ib3hfaXRlbVtxXS55L3NjYWxlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCB3ID0gdGhhdC5ib3hfaXRlbVtxXS53L3NjYWxlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBoID0gdGhhdC5ib3hfaXRlbVtxXS5oL3NjYWxlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBucyA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdG5zLndpZHRoID0gdy50b0ZpeGVkKCk7XHJcblx0XHRcdFx0XHRcdFx0bnMudG9wID0geS50b0ZpeGVkKCk7XHJcblx0XHRcdFx0XHRcdFx0bnMuaGVpZ2h0ID0gaC50b0ZpeGVkKCk7XHJcblx0XHRcdFx0XHRcdFx0bnMubGVmdCA9IHgudG9GaXhlZCgpO1xyXG5cdFx0XHRcdFx0XHRcdHR4eGZzLnB1c2gobnMpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXBkYXRhLnJlY3RhbmdsZSA9IEpTT04uc3RyaW5naWZ5KHR4eGZzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHRoYXQudG9vbC5icz09J3R4Zmd6aCcpe1xyXG5cdFx0XHRcdFx0XHR1cGRhdGEub3B0aW9uPXRoYXQub3B0aW9uXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGF0LnRvb2wuYnM9PSdmeGJqJyl7XHJcblx0XHRcdFx0XHRcdHVwZGF0YS5nYmZ4PXRoYXQuZ2JmeFt0aGF0LmdiZnhpbmRleF0uaWRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKHRoYXQudG9vbC5icz09J3J4dHgnKXtcclxuXHRcdFx0XHRcdFx0dXBkYXRhLnR5cGU9dGhhdC5yZW5saWFudHhbdGhhdC5tcmZnXS5pZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0nYnFiaicpe1xyXG5cdFx0XHRcdFx0XHR1cGRhdGEudHlwZT10aGF0LmJxYmpbdGhhdC5tcmZnXS5pZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0ncnhtaGYnKXtcclxuXHRcdFx0XHRcdFx0dXBkYXRhLnR5cGU9dGhhdC5yeG1oZlt0aGF0Lm1yZmddLmlkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGF0LnRvb2wuYnM9PSdhaWt0Jyl7XHJcblx0XHRcdFx0XHRcdHVwZGF0YS50eXBlPXRoYXQuYWlrdFt0aGF0Lm1yZmddLmlkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cGRhdGEpXHJcblx0XHRcdFx0XHRpZih0aGF0LnRvb2wuYnM9PSdmYWNlc2V4Jyl7XHJcblx0XHRcdFx0XHRcdHVwZGF0YS50YXJnZXQ9dGhhdC5zZXhDPzA6MVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0nZmFjZWJsJ3x8dGhhdC50b29sLmJzPT0nZmFjZWJ4Jyl7XHJcblx0XHRcdFx0XHRcdHVwZGF0YS5hZ2U9dGhhdC5hZ2VcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuYWdlXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh1cGRhdGEpXHJcblx0XHRcdFx0XHR0aGF0LiRUb29sLmNodWxpaW1nKHRoYXQuZ29pbWFnZSx1cGRhdGEsZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR0aGF0Lm9wZW5pbWFnZSA9IHJlcy51cmw7XHJcblx0XHRcdFx0XHRcdHRoYXQuZ29pbWFnZSA9ICcnXHJcblx0XHRcdFx0XHRcdHRoYXQuaGlkZU1vZGFsKClcclxuXHRcdFx0XHRcdH0sZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOifplJnor68nLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ZSxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGF0LmhpZGVNb2RhbCgpXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnb3ZpcDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyg4Njg0NilcclxuXHRcdFx0XHRpZih0aGF0LmNvbmZpZy5wYXkhPTEpe1xyXG5cdFx0XHRcdFx0dGhhdC4kVG9vbC5zaG93aW1nKHRoYXQuY29uZmlnLnd4a2VmdV9pbWFnZSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGlmKHRoYXQuaXNpb3MmJnRoYXQuY29uZmlnLmlvc3BheSE9MSl7XHJcblx0XHRcdFx0XHRcdHRoYXQuJFRvb2wuc2hvd2ltZyh0aGF0LmNvbmZpZy53eGtlZnVfaW1hZ2UpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHR0aGF0LiRUb29sLmdvcGFnZSgnL3BhZ2VzL215L3BheScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlbWFrZTpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lm9wZW5pbWFnZSA9ICcnO1xyXG5cdFx0XHRcdHRoYXQuZ29pbWFnZSA9ICcnXHJcblx0XHRcdFx0dGhhdC5oaWRlTW9kYWwoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRhZDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LiRUb29sLmFqYXgoJ2dldEFkJyxmdW5jdGlvbihyKXtcclxuXHRcdFx0XHRcdHRoYXQuYWRsaXN0ID0gci5kYXRhO1xyXG5cdFx0XHRcdFx0XHR0aGF0LkNyZWF0ZUFkKCk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WIneWni+WMlua/gOWKseinhumikeW5v+WRiue7hOS7tlxyXG5cdFx0XHRDcmVhdGVBZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdC8vICNpZmRlZiBNUC1XRUlYSU5cclxuXHRcdFx0XHRcdC8vIOWcqOmhtemdom9uTG9hZOWbnuiwg+S6i+S7tuS4reWIm+W7uua/gOWKseinhumikeW5v+WRiuWunuS+i1xyXG5cdFx0XHRcdFx0aWYgKHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCYmdGhhdC5hZGxpc3Qud3hhZF93eHJld2FyZCE9ZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coNDg2NDE2MTYxNjEpXHJcblx0XHRcdFx0XHRcdHRoYXQudmlkZW9BZCA9IHd4LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcblx0XHRcdFx0XHRcdFx0YWRVbml0SWQ6IHRoYXQuYWRsaXN0Lnd4YWRfd3hyZXdhcmRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhhdC52aWRlb0FkLm9uTG9hZCgoKSA9PiB7XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRcdHRoYXQudmlkZW9BZCA9ICcnXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVRPVVRJQU9cclxuXHRcdFx0XHRcdGlmICh0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQmJnRoYXQuYWRsaXN0LnR0YWRfcmV3YXJkIT1mYWxzZSkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnZpZGVvQWQgPSB0dC5jcmVhdGVSZXdhcmRlZFZpZGVvQWQoe1xyXG5cdFx0XHRcdFx0XHRcdGFkVW5pdElkOiB0aGF0LmFkbGlzdC50dGFkX3Jld2FyZFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGF0LnZpZGVvQWQub25Mb2FkKCgpID0+IHtcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC52aWRlb0FkID0gJydcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29hZDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGF0LmFkbGlzdC50dGFkX3Jld2FyZClcclxuXHRcdFx0XHQvLyB0aGF0LiRUb29sLnNhdmVpbWcodGhhdC5vcGVuaW1hZ2UpXHJcblx0XHRcdFx0dGhhdC4kcmVmcy5nZXRpbnRlLmNsb3NlKCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC52aWRlb0FkKVxyXG5cdFx0XHRcdGlmKHRoYXQudG9vbC5hZGdvPT0xJiZ0aGF0LnZpZGVvQWQpe1xyXG5cdFx0XHRcdFx0dGhhdC52aWRlb0FkLm9mZkNsb3NlKCk7XHJcblx0XHRcdFx0XHR0aGF0LnZpZGVvQWQub2ZmRXJyb3IoKTtcclxuXHRcdFx0XHRcdHRoYXQudmlkZW9BZC5vbkNsb3NlKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcyAmJiByZXMuaXNFbmRlZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuY2h1bGlpbWcoKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5aSE55CG5aSx6LSl77yM5Lit6YCU5YWz6Zet5bm/5ZGK77yBXCJcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhhdC52aWRlb0FkLm9uRXJyb3IoKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5pqC5pe25peg5bm/5ZGK77yM6K+356iN5ZCO5YaN6K+VXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGF0LnZpZGVvQWQuc2hvdygpLmNhdGNoKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhhdC52aWRlb0FkLmxvYWQoKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKCgpID0+IHRoYXQudmlkZW9BZC5zaG93KCkpXHJcblx0XHRcdFx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5r+A5Yqx6KeG6aKRIOW5v+WRiuaYvuekuuWksei0pScpXHJcblx0XHRcdFx0XHRcdFx0XHQvLyB0aGF0LnFpYW5kYW8oKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaaguaXtuaXoOW5v+WRiizor7fnqI3lkI7lho3or5VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdHRoYXQuY2h1bGlpbWcoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHNhdmVpbWc6ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Ly8gdGhhdC4kVG9vbC5zYXZlaW1nKHRoYXQub3BlbmltYWdlKVxyXG5cdFx0XHRcdGlmKHRoYXQudG9vbC5hZHNhdmU9PTEmJnRoYXQudmlkZW9BZCl7XHJcblx0XHRcdFx0XHR0aGF0LnZpZGVvQWQub2ZmQ2xvc2UoKTtcclxuXHRcdFx0XHRcdHRoYXQudmlkZW9BZC5vZmZFcnJvcigpO1xyXG5cdFx0XHRcdFx0dGhhdC52aWRlb0FkLm9uQ2xvc2UoKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzICYmIHJlcy5pc0VuZGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOifmraPlnKjkv53lrZguLi4nLFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0naHpwJyl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LiRUb29sLnNhdmV2aWRlbyh0aGF0Lm9wZW5pbWFnZSx0aGF0KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC4kVG9vbC5zYXZlaW1nKHRoYXQub3BlbmltYWdlKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuS/neWtmOWksei0pe+8jOS4remAlOWFs+mXreW5v+WRiu+8gVwiXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoYXQudmlkZW9BZC5vbkVycm9yKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaaguaXtuaXoOW5v+WRiu+8jOivt+eojeWQjuWGjeivlVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhhdC52aWRlb0FkLnNob3coKS5jYXRjaCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoYXQudmlkZW9BZC5sb2FkKClcclxuXHRcdFx0XHRcdFx0XHQudGhlbigoKSA9PiB0aGF0LnZpZGVvQWQuc2hvdygpKVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+a/gOWKseinhumikSDlub/lkYrmmL7npLrlpLHotKUnKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhhdC5xaWFuZGFvKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCLmmoLml7bml6Dlub/lkYos5bey5Li65oKo5L+d5a2YXCJcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTon5q2j5Zyo5L+d5a2YLi4uJyxcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmKHRoYXQudG9vbC5icz09J2h6cCcpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LiRUb29sLnNhdmV2aWRlbyh0aGF0Lm9wZW5pbWFnZSx0aGF0KVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC4kVG9vbC5zYXZlaW1nKHRoYXQub3BlbmltYWdlKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6J+ato+WcqOS/neWtmC4uLicsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0aWYodGhhdC50b29sLmJzPT0naHpwJyl7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0aGF0LiRUb29sLnNhdmV2aWRlbyh0aGF0Lm9wZW5pbWFnZSx0aGF0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhhdC4kVG9vbC5zYXZlaW1nKHRoYXQub3BlbmltYWdlKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xlYXJpbnB1dDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5jb3B5RGF0YSA9ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGdvdXJsOiBmdW5jdGlvbihlLCBiID0gJ3d4YXBwJykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0dGhpcy4kVG9vbC5nb3VybChlLCBiKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrOmZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhpcy4kVG9vbC5iYWNrKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Z29pbmRleDpmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoaXMuJFRvb2wuZ29pbmRleCgpXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSAgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0XHJcblx0QGltcG9ydCBcImFpdG9vbC5zY3NzXCI7XHJcblx0XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcc2Fzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTQhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2FpdG9vbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wZWU4M2FhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tOC1vbmVPZi0xLTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFxzYXNzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vYWl0b29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBlZTgzYWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDczNjk3NTUyNjRcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=