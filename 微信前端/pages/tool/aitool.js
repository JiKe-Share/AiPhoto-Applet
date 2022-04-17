(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tool/aitool"],{

/***/ 52:
/*!****************************************************************!*\
  !*** F:/ai图片处理/老照片上色/main.js?{"page":"pages%2Ftool%2Faitool"} ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _aitool = _interopRequireDefault(__webpack_require__(/*! ./pages/tool/aitool.vue */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_aitool.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

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
      return __webpack_require__.e(/*! import() | components/cmd-progress/cmd-progress */ "components/cmd-progress/cmd-progress").then(__webpack_require__.bind(null, /*! @/components/cmd-progress/cmd-progress.vue */ 189))
    },
    wxad: function() {
      return __webpack_require__.e(/*! import() | components/wxad/wxad */ "components/wxad/wxad").then(__webpack_require__.bind(null, /*! @/components/wxad/wxad.vue */ 115))
    },
    wybPopup: function() {
      return __webpack_require__.e(/*! import() | components/wyb-popup/wyb-popup */ "components/wyb-popup/wyb-popup").then(__webpack_require__.bind(null, /*! @/components/wyb-popup/wyb-popup.vue */ 153))
    },
    login: function() {
      return __webpack_require__.e(/*! import() | components/login/login */ "components/login/login").then(__webpack_require__.bind(null, /*! @/components/login/login.vue */ 175))
    },
    getinte: function() {
      return __webpack_require__.e(/*! import() | components/getinte/getinte */ "components/getinte/getinte").then(__webpack_require__.bind(null, /*! @/components/getinte/getinte.vue */ 182))
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
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _methods;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    wx.showShareMenu({
      withShareTicket: false,
      menus: ['shareAppMessage', 'shareTimeline'] });


  },
  onShareAppMessage: function onShareAppMessage(e) {
    var that = this;
    return {
      title: that.tool.desc,
      imageUrl: that.tool.img,
      path: '/pages/tool/aitool?id=' + that.tool.id };

  },
  // 微信分享盆友圈|收藏

  onShareTimeline: function onShareTimeline() {
    var that = this;
    return {
      title: that.tool.desc,
      imageUrl: that.tool.img,
      query: 'id=' + that.tool.id };


  },
  onAddToFavorites: function onAddToFavorites() {
    var that = this;
    return {
      title: that.tool.desc,
      imageUrl: that.tool.img,
      query: 'id=' + that.tool.id };

  },

  onHide: function onHide() {},
  methods: (_methods = {
    getconfig: function getconfig(id) {
      var that = this;
      that.$Tool.getconfig(that, function () {











      });
      that.$Tool.ajax('gettool', function (r) {
        var res = r.data;







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

      that.$Tool.showimg(that.config.wxkefu_image);




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











































          that.slsimg(e);

          break;
        default:











































          that.slsimg(e);

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

        desc: '用于用户服务',

        success: function success(res) {
          console.log(res);
          if (res.errMsg == 'getUserProfile:ok' || res.errMsg == 'getUserInfo:ok') {
            var update = res.userInfo;



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

    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd && that.adlist.wxad_wxreward != false) {
      console.log(48641616161);
      that.videoAd = wx.createRewardedVideoAd({
        adUnitId: that.adlist.wxad_wxreward });

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

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
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tool/aitool.js.map