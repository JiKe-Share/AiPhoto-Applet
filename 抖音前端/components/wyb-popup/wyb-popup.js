(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wyb-popup/wyb-popup"],{

/***/ 146:
/*!**********************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wyb-popup.vue?vue&type=template&id=bdfa6778& */ 147);
/* harmony import */ var _wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wyb-popup.vue?vue&type=script&lang=js& */ 149);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wyb-popup.vue?vue&type=style&index=0&lang=css& */ 151);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/wyb-popup/wyb-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 147:
/*!*****************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=template&id=bdfa6778& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wyb-popup.vue?vue&type=template&id=bdfa6778& */ 148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_template_id_bdfa6778___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 148:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=template&id=bdfa6778& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 149:
/*!***********************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wyb-popup.vue?vue&type=script&lang=js& */ 150);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 150:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var wxad = function wxad() {__webpack_require__.e(/*! require.ensure | components/wxad/wxad */ "components/wxad/wxad").then((function () {return resolve(__webpack_require__(/*! @/components/wxad/wxad.vue */ 189));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =


































































{
  components: {
    wxad: wxad },

  data: function data() {
    return {
      w: uni.getSystemInfoSync().screenWidth,
      h: uni.getSystemInfoSync().screenHeight,
      isShow: false,
      winReBottom: '',
      winReTop: '',
      sizeChange: false,
      contentOpacity: null,
      contentTransform: null,
      maskOpacity: 0 };

  },
  computed: {
    autoCenterTop: function autoCenterTop() {
      var statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      var windowHeight = uni.getSystemInfoSync().windowHeight;
      var popupHeight = this.rpxToPx(this.height);
      var navHeight = 44;
      var result = "".concat((windowHeight - popupHeight - 104) / 2 - this.negativeTop, "px");
      return result;
    },
    autoTransform: function autoTransform() {
      var result = '';
      switch (this.type) {
        case 'center':
          if (this.centerAnim === 'zoom-lessen') {
            result = "scale(".concat(this.zoomLessenMulti, ")");
          } else if (this.centerAnim === 'slide-up') {
            result = "translateY(".concat(100 * this.slideMulti, "%)");
          } else if (this.centerAnim === 'slide-down') {
            result = "translateY(".concat(-100 * this.slideMulti, "%)");
          } else if (this.centerAnim === 'fade') {
            result = 'auto';
          }
          break;
        case 'bottom':
          result = 'translateY(100%)';
          break;
        case 'top':
          result = 'translateY(-100%)';
          break;
        case 'left':
          result = 'translateX(-100%)';
          break;
        case 'right':
          result = 'translateX(100%)';
          break;}

      return result;
    },
    autoWidth: function autoWidth() {
      if (this.type === 'center') {
        return "".concat(this.width, "rpx");
      } else {
        if (this.mode === 'size-fixed') {
          if (this.type === 'top' || this.type === 'bottom') {
            return '100%';
          } else {
            return "".concat(this.width, "rpx");
          }
        } else {
          if (this.type === 'top' || this.type === 'bottom') {
            return '100%';
          } else {
            return 'auto';
          }
        }
      }
    },
    autoHeight: function autoHeight() {
      if (this.type === 'center') {
        return "".concat(this.height, "rpx");
      } else {
        if (this.mode === 'size-fixed') {
          if (this.type === 'left' || this.type === 'right') {
            return '100%';
          } else {
            return "".concat(this.height, "rpx");
          }
        } else {
          if (this.type === 'left' || this.type === 'right') {
            return '100%';
          } else {
            return 'auto';
          }
        }
      }
    },
    autoTop: function autoTop() {
      if (this.type === 'center') {
        return this.autoCenterTop;
      } else if (this.type === 'bottom') {
        return 'auto';
      } else {
        return 0;
      }
    },
    autoBottom: function autoBottom() {
      if (this.type === 'center' || this.type === 'top') {
        return 'auto';
      } else {
        return 0;
      }
    },
    autoLeft: function autoLeft() {
      if (this.type === 'center') {
        return "".concat((this.w - this.rpxToPx(this.width)) / 2, "px");
      } else if (this.type === 'right') {
        return 'auto';
      } else {
        return 0;
      }
    },
    autoRight: function autoRight() {
      if (this.type === 'center' || this.type === 'left') {
        return 'auto';
      } else {
        return 0;
      }
    } },

  props: {
    type: {
      type: String,
      default: 'bottom' },

    mode: {
      type: String,
      default: 'size-auto' },

    height: {
      type: [String, Number],
      default: 400 },

    width: {
      type: [String, Number],
      default: 500 },

    radius: {
      type: [String, Number],
      default: 0 },

    closemargin: {
      type: [String, Number],
      default: 0 },

    zIndex: {
      type: [String, Number],
      default: 10076 },

    maskClickClose: {
      type: Boolean,
      default: true },

    maskAlpha: {
      type: Number,
      default: 0.5 },

    duration: {
      type: Number,
      default: 400 },

    showCloseIcon: {
      type: Boolean,
      default: false },

    scrollY: {
      type: Boolean,
      default: false },

    scrollX: {
      type: Boolean,
      default: false },

    closeIconPos: {
      type: String,
      default: 'top-right' },

    closeIcon: {
      type: String,
      default: '' },

    closeIconSize: {
      type: [String, Number],
      default: '20' },

    vertOffset: {
      type: [String, Number],
      default: '22' },

    horiOffset: {
      type: [String, Number],
      default: '22' },

    centerAnim: {
      type: String,
      default: 'zoom-lessen' },

    bgColor: {
      type: String,
      default: '#ffffff' },

    zoomLessenMulti: {
      type: Number,
      default: 1.15 },

    slideMulti: {
      type: Number,
      default: 1 },

    negativeTop: {
      type: Number,
      default: 0 },


    pos: {
      type: Number,
      default: 0 } },


  mounted: function mounted() {











  },
  methods: {
    close: function close() {
      this.maskClickClose && this.hide();
    },
    show: function show() {var _this = this;
      this.isShow = true;

      this.$nextTick(function () {
        _this.maskIn();
        _this.contentIn();
        _this.wait(_this.duration + 1).then(function () {
          _this.$emit('show', {
            pageScroll: false,
            overflow: 'hidden' });

        });
      });













    },
    hide: function hide() {var _this2 = this;
      this.contentOut();
      this.maskOut();
      this.wait(this.duration + 1).then(function () {
        _this2.isShow = false;
        _this2.$emit('hide', {
          pageScroll: true,
          overflow: 'scroll' });

      });
    },
    contentIn: function contentIn() {
      switch (this.type) {
        case 'center':
          if (this.centerAnim === 'zoom-lessen') {
            this.contentOpacity = 1;
            this.contentTransform = 'scale(1)';
          } else if (this.centerAnim === 'slide-up' || this.centerAnim === 'slide-down') {
            this.contentOpacity = 1;
            this.contentTransform = 'translateY(0)';
          } else if (this.centerAnim === 'fade') {
            this.contentOpacity = 1;
          }
          break;
        case 'bottom':
        case 'top':
          this.contentTransform = 'translateY(0)';
          break;
        case 'left':
        case 'right':
          this.contentTransform = 'translateX(0)';
          break;}

    },
    contentOut: function contentOut() {
      this.contentOpacity = null;
      this.contentTransform = null;
    },
    maskIn: function maskIn() {
      this.maskOpacity = 1;
    },
    maskOut: function maskOut() {
      this.maskOpacity = 0;
    },
    rpxToPx: function rpxToPx(rpx) {
      return rpx / 750 * this.w;
    },
    wait: function wait(time) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, time);
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 151:
/*!*******************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wyb-popup.vue?vue&type=style&index=0&lang=css& */ 152);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wyb_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 152:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/wyb-popup/wyb-popup.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/MjJiZSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/ZjdkMCIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/OTUwZCIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/Y2YyNyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy93eWItcG9wdXAvd3liLXBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/NjVkYSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvd3liLXBvcHVwL3d5Yi1wb3B1cC52dWU/NDgyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYTs7O0FBR3JFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBOHFCLENBQWdCLG1zQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtRWxzQjtBQUNBO0FBQ0EsY0FEQSxFQURBOztBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLDRDQURBO0FBRUEsNkNBRkE7QUFHQSxtQkFIQTtBQUlBLHFCQUpBO0FBS0Esa0JBTEE7QUFNQSx1QkFOQTtBQU9BLDBCQVBBO0FBUUEsNEJBUkE7QUFTQSxvQkFUQTs7QUFXQSxHQWhCQTtBQWlCQTtBQUNBLGlCQURBLDJCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLGlCQVRBLDJCQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBdkJBOztBQXlCQTtBQUNBLEtBckNBO0FBc0NBLGFBdENBLHVCQXNDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4REE7QUF5REEsY0F6REEsd0JBeURBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNFQTtBQTRFQSxXQTVFQSxxQkE0RUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FwRkE7QUFxRkEsY0FyRkEsd0JBcUZBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTNGQTtBQTRGQSxZQTVGQSxzQkE0RkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FwR0E7QUFxR0EsYUFyR0EsdUJBcUdBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTNHQSxFQWpCQTs7QUE4SEE7QUFDQTtBQUNBLGtCQURBO0FBRUEsdUJBRkEsRUFEQTs7QUFLQTtBQUNBLGtCQURBO0FBRUEsMEJBRkEsRUFMQTs7QUFTQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUFUQTs7QUFhQTtBQUNBLDRCQURBO0FBRUEsa0JBRkEsRUFiQTs7QUFpQkE7QUFDQSw0QkFEQTtBQUVBLGdCQUZBLEVBakJBOztBQXFCQTtBQUNBLDRCQURBO0FBRUEsZ0JBRkEsRUFyQkE7O0FBeUJBO0FBQ0EsNEJBREE7QUFFQSxvQkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBN0JBOztBQWlDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBekNBOztBQTZDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkEsRUE3Q0E7O0FBaURBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQWpEQTs7QUFxREE7QUFDQSxrQkFEQTtBQUVBLDBCQUZBLEVBckRBOztBQXlEQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUF6REE7O0FBNkRBO0FBQ0EsNEJBREE7QUFFQSxtQkFGQSxFQTdEQTs7QUFpRUE7QUFDQSw0QkFEQTtBQUVBLG1CQUZBLEVBakVBOztBQXFFQTtBQUNBLDRCQURBO0FBRUEsbUJBRkEsRUFyRUE7O0FBeUVBO0FBQ0Esa0JBREE7QUFFQSw0QkFGQSxFQXpFQTs7QUE2RUE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBN0VBOztBQWlGQTtBQUNBLGtCQURBO0FBRUEsbUJBRkEsRUFqRkE7O0FBcUZBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQXJGQTs7QUF5RkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBekZBOzs7QUE4RkE7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBOUZBLEVBOUhBOzs7QUFpT0EsU0FqT0EscUJBaU9BOzs7Ozs7Ozs7Ozs7QUFZQSxHQTdPQTtBQThPQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxRQUpBLGtCQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsOEJBRkE7O0FBSUEsU0FMQTtBQU1BLE9BVEE7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLEtBOUJBO0FBK0JBLFFBL0JBLGtCQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDRCQUZBOztBQUlBLE9BTkE7QUFPQSxLQXpDQTtBQTBDQSxhQTFDQSx1QkEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBbkJBOztBQXFCQSxLQWhFQTtBQWlFQSxjQWpFQSx3QkFpRUE7QUFDQTtBQUNBO0FBQ0EsS0FwRUE7QUFxRUEsVUFyRUEsb0JBcUVBO0FBQ0E7QUFDQSxLQXZFQTtBQXdFQSxXQXhFQSxxQkF3RUE7QUFDQTtBQUNBLEtBMUVBO0FBMkVBLFdBM0VBLG1CQTJFQSxHQTNFQSxFQTJFQTtBQUNBO0FBQ0EsS0E3RUE7QUE4RUEsUUE5RUEsZ0JBOEVBLElBOUVBLEVBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxPQUpBO0FBS0EsS0FwRkEsRUE5T0EsRTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUE4OUIsQ0FBZ0IsdzlCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBbC9CO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoiY29tcG9uZW50cy93eWItcG9wdXAvd3liLXBvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93eWItcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJkZmE2Nzc4JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd3liLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vd3liLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi93eWItcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3d5Yi1wb3B1cC93eWItcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxccGFnZS1tZXRhLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi93eWItcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJkZmE2Nzc4JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3d5Yi1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3d5Yi1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cImlzU2hvd1wiPlxyXG5cdFx0PHZpZXcgXHJcblx0XHQgQHRhcC5zdG9wLnByZXZlbnRcclxuXHRcdCBAdG91Y2htb3ZlLnN0b3AucHJldmVudFxyXG5cdFx0IGNsYXNzPVwid3liLXBvcHVwLWJveFwiXHJcblx0XHQgOnN0eWxlPVwie1xyXG5cdFx0XHQgdHJhbnNpdGlvbkR1cmF0aW9uOiBkdXJhdGlvbiArICdtcycsXHJcblx0XHRcdCBvcGFjaXR5OiBjb250ZW50T3BhY2l0eSB8fCAodHlwZSA9PT0gJ2NlbnRlcicgPyAwIDogMSksXHJcblx0XHRcdCB0cmFuc2Zvcm06IGNvbnRlbnRUcmFuc2Zvcm0gfHwgYXV0b1RyYW5zZm9ybSxcclxuXHRcdFx0IHpJbmRleDogekluZGV4LFxyXG5cdFx0XHQgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHR5cGUgPT09ICdjZW50ZXInIHx8IHR5cGUgPT09ICdib3R0b20nIHx8IHR5cGUgPT09ICdsZWZ0JyA/IHJhZGl1cyArICdweCcgOiAwLFxyXG5cdFx0XHQgYm9yZGVyVG9wTGVmdFJhZGl1czogdHlwZSA9PT0gJ2NlbnRlcicgfHwgdHlwZSA9PT0gJ2JvdHRvbScgfHwgdHlwZSA9PT0gJ3JpZ2h0JyA/IHJhZGl1cyArICdweCcgOiAwLFxyXG5cdFx0XHQgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHR5cGUgPT09ICdjZW50ZXInIHx8IHR5cGUgPT09ICd0b3AnIHx8IHR5cGUgPT09ICdsZWZ0JyA/IHJhZGl1cyArICdweCcgOiAwLFxyXG5cdFx0XHQgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogdHlwZSA9PT0gJ2NlbnRlcicgfHwgdHlwZSA9PT0gJ3RvcCcgfHwgdHlwZSA9PT0gJ3JpZ2h0JyA/IHJhZGl1cyArICdweCcgOiAwLFxyXG5cdFx0XHQgd2lkdGg6IGF1dG9XaWR0aCxcclxuXHRcdFx0IGhlaWdodDogYXV0b0hlaWdodCxcclxuXHRcdFx0IG1pbldpZHRoOiB3aWR0aCArICdycHgnLFxyXG5cdFx0XHQgbWluSGVpZ2h0OiBoZWlnaHQgKyAncnB4JyxcclxuXHRcdFx0IHRvcDogc2l6ZUNoYW5nZSAmJiB0eXBlID09PSAnY2VudGVyJyA/IHdpblJlVG9wIDogYXV0b1RvcCxcclxuXHRcdFx0IGJvdHRvbTogYXV0b0JvdHRvbSxcclxuXHRcdFx0IGxlZnQ6IGF1dG9MZWZ0LFxyXG5cdFx0XHQgcmlnaHQ6IGF1dG9SaWdodCxcclxuXHRcdFx0IGJhY2tncm91bmRDb2xvcjogYmdDb2xvcn1cIj5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXdcclxuXHRcdFx0IGNsYXNzPVwid3liLXBvcHVwLWNvbnRhaW5lclwiXHJcblx0XHRcdCA6c3R5bGU9XCJ7XHJcblx0XHRcdFx0IHdpZHRoOiBhdXRvV2lkdGgsXHJcblx0XHRcdFx0IGhlaWdodDogYXV0b0hlaWdodH1cIlxyXG5cdFx0XHQgOmVuYWJsZS1mbGV4PVwidHJ1ZVwiXHJcblx0XHRcdCA6c2Nyb2xsLXk9XCJzY3JvbGxZXCJcclxuXHRcdFx0IDpzY3JvbGwteD1cInNjcm9sbFhcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInd5Yi1wb3B1cC1zbG90XCI+PHNsb3Q+PC9zbG90Pjwvdmlldz5cclxuXHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDx2aWV3XHJcblx0XHRcdCBjbGFzcz1cInd5Yi1wb3B1cC1jbG9zZVwiXHJcblx0XHRcdCB2LWlmPVwic2hvd0Nsb3NlSWNvblwiXHJcblx0XHRcdCA+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwid3liLXBvcHVwLWN1c3RvbS1jbG9zZVwiIHYtaWY9XCJzaG93Q2xvc2VJY29uJiZjbG9zZUljb25cIiA6c3JjPVwiY2xvc2VJY29uXCIgQHRhcD1cImhpZGVcIiA6c3R5bGU9XCJ7XHJcblx0XHRcdCBcdFx0XHQgd2lkdGg6IGNsb3NlSWNvblNpemUgKyAncnB4JyxcclxuXHRcdFx0IFx0XHRcdCBoZWlnaHQ6IGNsb3NlSWNvblNpemUgKyAncnB4J31cIiAvPlxyXG5cdFx0XHQgXHQ8dmlldyB2LWlmPVwic2hvd0Nsb3NlSWNvbiYmIWNsb3NlSWNvblwiIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1jbG9zZVwiIEB0YXA9XCJoaWRlXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0PHZpZXdcclxuXHRcdCBjbGFzcz1cInd5Yi1wb3B1cC1tYXNrXCJcclxuXHRcdCBAdGFwLnN0b3A9XCJjbG9zZVwiXHJcblx0XHQgQHRvdWNobW92ZS5zdG9wLnByZXZlbnRcclxuXHRcdCA6c3R5bGU9XCJ7XHJcblx0XHRcdCBvcGFjaXR5OiBtYXNrT3BhY2l0eSxcclxuXHRcdFx0IHRyYW5zaXRpb25EdXJhdGlvbjogZHVyYXRpb24gKyAnbXMnLFxyXG5cdFx0XHQgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAnICsgbWFza0FscGhhICsgJyknLFxyXG5cdFx0XHQgekluZGV4OiB6SW5kZXggLSAxfVwiIC8+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgd3hhZCBmcm9tIFwiQC9jb21wb25lbnRzL3d4YWQvd3hhZC52dWVcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0d3hhZFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dzogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuV2lkdGgsXHJcblx0XHRcdFx0aDogdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0LFxyXG5cdFx0XHRcdGlzU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0d2luUmVCb3R0b206ICcnLFxyXG5cdFx0XHRcdHdpblJlVG9wOiAnJyxcclxuXHRcdFx0XHRzaXplQ2hhbmdlOiBmYWxzZSxcclxuXHRcdFx0XHRjb250ZW50T3BhY2l0eTogbnVsbCxcclxuXHRcdFx0XHRjb250ZW50VHJhbnNmb3JtOiBudWxsLFxyXG5cdFx0XHRcdG1hc2tPcGFjaXR5OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRhdXRvQ2VudGVyVG9wKCkge1xyXG5cdFx0XHRcdGxldCBzdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcclxuXHRcdFx0XHRsZXQgd2luZG93SGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0XHJcblx0XHRcdFx0bGV0IHBvcHVwSGVpZ2h0ID0gdGhpcy5ycHhUb1B4KHRoaXMuaGVpZ2h0KVxyXG5cdFx0XHRcdGxldCBuYXZIZWlnaHQgPSA0NFxyXG5cdFx0XHRcdGxldCByZXN1bHQgPSBgJHsod2luZG93SGVpZ2h0IC0gcG9wdXBIZWlnaHQgLSAxMDQpIC8gMiAtIHRoaXMubmVnYXRpdmVUb3B9cHhgXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdXRvVHJhbnNmb3JtKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHQgPSAnJ1xyXG5cdFx0XHRcdHN3aXRjaCh0aGlzLnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ2NlbnRlcic6XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmNlbnRlckFuaW0gPT09ICd6b29tLWxlc3NlbicpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSBgc2NhbGUoJHt0aGlzLnpvb21MZXNzZW5NdWx0aX0pYFxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY2VudGVyQW5pbSA9PT0gJ3NsaWRlLXVwJykge1xyXG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IGB0cmFuc2xhdGVZKCR7MTAwICogdGhpcy5zbGlkZU11bHRpfSUpYFxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY2VudGVyQW5pbSA9PT0gJ3NsaWRlLWRvd24nKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gYHRyYW5zbGF0ZVkoJHstMTAwICogdGhpcy5zbGlkZU11bHRpfSUpYFxyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY2VudGVyQW5pbSA9PT0gJ2ZhZGUnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gJ2F1dG8nXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9ICd0cmFuc2xhdGVZKDEwMCUpJ1xyXG5cdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0Y2FzZSAndG9wJzpcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gJ3RyYW5zbGF0ZVkoLTEwMCUpJ1xyXG5cdFx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9ICd0cmFuc2xhdGVYKC0xMDAlKSdcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0cmVzdWx0ID0gJ3RyYW5zbGF0ZVgoMTAwJSknXHJcblx0XHRcdFx0XHRcdGJyZWFrXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiByZXN1bHRcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b1dpZHRoKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdjZW50ZXInKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYCR7dGhpcy53aWR0aH1ycHhgXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm1vZGUgPT09ICdzaXplLWZpeGVkJykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy50eXBlID09PSAndG9wJyB8fCB0aGlzLnR5cGUgPT09ICdib3R0b20nKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICcxMDAlJ1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBgJHt0aGlzLndpZHRofXJweGBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gJ3RvcCcgfHwgdGhpcy50eXBlID09PSAnYm90dG9tJykge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAnMTAwJSdcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ2F1dG8nXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG9IZWlnaHQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudHlwZSA9PT0gJ2NlbnRlcicpIHtcclxuXHRcdFx0XHRcdHJldHVybiBgJHt0aGlzLmhlaWdodH1ycHhgXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm1vZGUgPT09ICdzaXplLWZpeGVkJykge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy50eXBlID09PSAnbGVmdCcgfHwgdGhpcy50eXBlID09PSAncmlnaHQnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICcxMDAlJ1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBgJHt0aGlzLmhlaWdodH1ycHhgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdsZWZ0JyB8fCB0aGlzLnR5cGUgPT09ICdyaWdodCcpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJzEwMCUnXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdhdXRvJ1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdXRvVG9wKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdjZW50ZXInKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hdXRvQ2VudGVyVG9wXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdib3R0b20nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2F1dG8nXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdXRvQm90dG9tKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdjZW50ZXInIHx8IHRoaXMudHlwZSA9PT0gJ3RvcCcpIHtcclxuXHRcdFx0XHRcdHJldHVybiAnYXV0bydcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuIDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG9MZWZ0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdjZW50ZXInKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gIGAkeyh0aGlzLncgLSB0aGlzLnJweFRvUHgodGhpcy53aWR0aCkpIC8gMn1weGBcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3JpZ2h0Jykge1xyXG5cdFx0XHRcdFx0cmV0dXJuICdhdXRvJ1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b1JpZ2h0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdjZW50ZXInIHx8IHRoaXMudHlwZSA9PT0gJ2xlZnQnKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2F1dG8nXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dHlwZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnYm90dG9tJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdzaXplLWF1dG8nXHJcblx0XHRcdH0sXHJcblx0XHRcdGhlaWdodDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogNDAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZHRoOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiA1MDBcclxuXHRcdFx0fSxcclxuXHRcdFx0cmFkaXVzOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlbWFyZ2luOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHpJbmRleDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogMTAwNzZcclxuXHRcdFx0fSxcclxuXHRcdFx0bWFza0NsaWNrQ2xvc2U6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0bWFza0FscGhhOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDAuNVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiA0MDBcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0Nsb3NlSWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsWToge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2Nyb2xsWDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2VJY29uUG9zOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICd0b3AtcmlnaHQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlSWNvbjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZUljb25TaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAnMjAnXHJcblx0XHRcdH0sXHJcblx0XHRcdHZlcnRPZmZzZXQ6IHtcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcyMidcclxuXHRcdFx0fSxcclxuXHRcdFx0aG9yaU9mZnNldDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJzIyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjZW50ZXJBbmltOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICd6b29tLWxlc3NlbidcclxuXHRcdFx0fSxcclxuXHRcdFx0YmdDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmZmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0em9vbUxlc3Nlbk11bHRpOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDEuMTVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2xpZGVNdWx0aToge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdG5lZ2F0aXZlVG9wOiB7XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDBcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHBvczoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdGxldCB3aW5IZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHRcclxuXHRcdFx0dW5pLm9uV2luZG93UmVzaXplKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaXplQ2hhbmdlID0gdHJ1ZVxyXG5cdFx0XHRcdGlmICh0aGlzLnR5cGUgPT09ICdib3R0b20nKSB7XHJcblx0XHRcdFx0XHR0aGlzLndpblJlQm90dG9tID0gd2luSGVpZ2h0IC0gcmVzLnNpemUud2luZG93SGVpZ2h0ICsgJ3B4J1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnY2VudGVyJykge1xyXG5cdFx0XHRcdFx0dGhpcy53aW5SZVRvcCA9ICgocmVzLnNpemUud2luZG93SGVpZ2h0IC0gMTYwIC0gdGhpcy5ycHhUb1B4KHRoaXMuaGVpZ2h0KSkgLyAyIC0gdGhpcy5uZWdhdGl2ZVRvcCkgICsgJ3B4J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLm1hc2tDbGlja0Nsb3NlICYmIHRoaXMuaGlkZSgpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3coKSB7XHJcblx0XHRcdFx0dGhpcy5pc1Nob3cgPSB0cnVlXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBINVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubWFza0luKClcclxuXHRcdFx0XHRcdHRoaXMuY29udGVudEluKClcclxuXHRcdFx0XHRcdHRoaXMud2FpdCh0aGlzLmR1cmF0aW9uICsgMSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ3Nob3cnLCB7XHJcblx0XHRcdFx0XHRcdFx0cGFnZVNjcm9sbDogZmFsc2UsIFxyXG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZmRlZiBINVxyXG5cdFx0XHRcdHRoaXMud2FpdCgxMCkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm1hc2tJbigpXHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnRJbigpXHJcblx0XHRcdFx0XHR0aGlzLndhaXQodGhpcy5kdXJhdGlvbiArIDEpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLiRlbWl0KCdzaG93Jywge1xyXG5cdFx0XHRcdFx0XHRcdHBhZ2VTY3JvbGw6IGZhbHNlLCBcclxuXHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbidcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZSgpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRPdXQoKVxyXG5cdFx0XHRcdHRoaXMubWFza091dCgpXHJcblx0XHRcdFx0dGhpcy53YWl0KHRoaXMuZHVyYXRpb24gKyAxKS50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gZmFsc2VcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2hpZGUnLCB7XHJcblx0XHRcdFx0XHRcdHBhZ2VTY3JvbGw6IHRydWUsIFxyXG5cdFx0XHRcdFx0XHRvdmVyZmxvdzogJ3Njcm9sbCdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29udGVudEluKCkge1xyXG5cdFx0XHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdjZW50ZXInOlxyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5jZW50ZXJBbmltID09PSAnem9vbS1sZXNzZW4nKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50T3BhY2l0eSA9IDFcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRUcmFuc2Zvcm0gPSAnc2NhbGUoMSknXHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jZW50ZXJBbmltID09PSAnc2xpZGUtdXAnIHx8IHRoaXMuY2VudGVyQW5pbSA9PT0gJ3NsaWRlLWRvd24nKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jb250ZW50T3BhY2l0eSA9IDFcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSdcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNlbnRlckFuaW0gPT09ICdmYWRlJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY29udGVudE9wYWNpdHkgPSAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XHJcblx0XHRcdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSdcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnRlbnRUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwKSdcclxuXHRcdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbnRlbnRPdXQoKSB7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50T3BhY2l0eSA9IG51bGxcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnRUcmFuc2Zvcm0gPSBudWxsXHJcblx0XHRcdH0sXHJcblx0XHRcdG1hc2tJbigpIHtcclxuXHRcdFx0XHR0aGlzLm1hc2tPcGFjaXR5ID0gMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXNrT3V0KCkge1xyXG5cdFx0XHRcdHRoaXMubWFza09wYWNpdHkgPSAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHJweFRvUHgocnB4KSB7XHJcblx0XHRcdFx0cmV0dXJuIHJweCAvIDc1MCAqIHRoaXMud1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR3YWl0KHRpbWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHR9LCB0aW1lKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdEBpbXBvcnQgXCIuL2ljb25mb250LmNzc1wiO1xyXG5cdC53eWItcG9wdXAtYm94e1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcblx0XHR0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcblx0XHQvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdC53eWItcG9wdXAtY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHJweDtcclxuXHR9XHJcblx0XHJcblx0Lnd5Yi1wb3B1cC1zbG90IHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDMyLDU3LC45KTtcclxuXHR9XHJcblx0XHJcblx0Lnd5Yi1wb3B1cC1tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG5cdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoMTEwJSk7XHJcblx0fVxyXG5cdFxyXG5cdC53eWItcG9wdXAtY2xvc2Uge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQgICAgd2lkdGg6IDcwdXB4O1xyXG5cdFx0ICAgIGhlaWdodDogNzB1cHg7XHJcblx0XHQgICAgYm9yZGVyOiAydXB4IHNvbGlkICMwMGZmZTE7XHJcblx0XHRcdGxlZnQ6IDUwJTtcclxuXHRcdFx0Ym90dG9tOi0xMDAlO1xyXG5cdFx0ICAgIG1hcmdpbi1sZWZ0OiAtMzVycHg7XHJcblx0XHQgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0Y29sb3I6ICMwMGZmZTE7XHJcblx0XHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMEZGRTE7ICovXHJcblx0XHRcdHotaW5kZXg6IDk5OTk5O1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogNXVweDtcclxuXHR9XHJcblx0LmFke1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0ei1pbmRleDogOTk5OTk7XHJcblx0XHRcclxuXHR9XHJcblx0Lmljb24tY2xvc2V7XHJcblx0XHRmb250LXNpemU6IDUwdXB4O1xyXG5cdH1cclxuXHQud3liLXBvcHVwLWN1c3RvbS1jbG9zZSB7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3d5Yi1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL3d5Yi1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2NDczNjk3NTM4ODBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiRDovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wyb-popup/wyb-popup-create-component',
    {
        'components/wyb-popup/wyb-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(146))
        })
    },
    [['components/wyb-popup/wyb-popup-create-component']]
]);
