(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cmd-progress/cmd-progress"],{

/***/ 182:
/*!****************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmd-progress.vue?vue&type=template&id=7dbf0984& */ 183);
/* harmony import */ var _cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmd-progress.vue?vue&type=script&lang=js& */ 185);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmd-progress.vue?vue&type=style&index=0&lang=css& */ 187);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);

var renderjs





/* normalize component */

var component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/cmd-progress/cmd-progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/*!***********************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=template&id=7dbf0984& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-progress.vue?vue&type=template&id=7dbf0984& */ 184);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_template_id_7dbf0984___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 184:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=template&id=7dbf0984& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 185:
/*!*****************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-progress.vue?vue&type=script&lang=js& */ 186);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**  
 * 进度条组件  
 * @description 显示一个操作完成的百分比时，为用户显示该操作的当前进度和状态。  
 * @tutorial https://ext.dcloud.net.cn/plugin?id=259  
 * @property {String} type 进度类型 - 线型：line、圆圈形：circle、仪表盘：dashboard，默认线型：line  
 * @property {Number} percent 进度百分比值 - 显示范围0-100 ，可能数比较大就需要自己转成百分比的值  
 * @property {Number} success-percent 进度已完成的百分几 - 仅支持进度线型：line  
 * @property {String} status 进度状态 - 涌动：active（仅支持线型：line）、正常：normal、完成：success、失败：exception，默认正常：normal  
 * @property {Boolean} show-info 进度状态信息 - 是否显示进度数值或状态图标，默认true  
 * @property {Number} stroke-width 进度线条的宽度 - 建议在条线的宽度范围：1-50，与进度条显示宽度有关，默认8  
 * @property {String} stroke-color 进度线条的颜色 - 渐变色仅支持线型：line  
 * @property {String} stroke-shape 进度线条两端的形状 - 圆：round、方块直角：square，默认圆：round  
 * @property {Number} width 进度画布宽度 - 仅支持圆圈形：circle、仪表盘：dashboard，默认80  
 * @property {String} gap-degree 进度圆形缺口角度 - 可取值 0 ~ 360,仅支持圆圈形：circle、仪表盘：dashboard  
 * @property {String} gap-position 进度圆形缺口位置 - 可取值'top', 'bottom', 'left', 'right',仅支持圆圈形：circle、仪表盘：dashboard  
 * @example <cmd-progress :percent="30"></cmd-progress>  
 */var _default =
{
  name: 'cmd-progress',

  props: {
    /**
            * 类型默认：line，可选 line circle dashboard
            */
    type: {
      validator: function validator(val) {
        return ['line', 'circle', 'dashboard'].includes(val);
      },
      default: 'line' },

    /**
                          * 百分比
                          */
    percent: {
      type: Number,
      default: 0 },

    /**
                     * 已完成的分段百分，仅支持类型line
                     */
    successPercent: {
      type: Number,
      default: 0 },

    /**
                     * 是否显示进度数值或状态图标
                     */
    showInfo: {
      type: Boolean,
      default: true },

    /**
                        * 进度状态，可选：normal success exception （active仅支持类型line
                        */
    status: {
      validator: function validator(val) {
        return ['normal', 'success', 'exception', 'active'].includes(val);
      },
      default: 'normal' },

    /**
                            * 条线的宽度1-50，与width有关
                            */
    strokeWidth: {
      type: Number,
      default: 6 },

    /**
                     * 条线的颜色，渐变色仅支持类型line
                     */
    strokeColor: {
      type: String,
      default: '' },

    /**
                      * 条线两端的形状 可选：'round', 'square'
                      */
    strokeShape: {
      validator: function validator(val) {
        return ['round', 'square'].includes(val);
      },
      default: 'round' },

    /**
                           * 圆形进度条画布宽度,支持类型circle dashboard
                           */
    width: {
      type: Number,
      default: 80 },

    /**
                      * 圆形进度条缺口角度，可取值 0 ~ 360,支持类型circle dashboard
                      */
    gapDegree: {
      type: Number,
      default: 0 },

    /**
                     * 圆形进度条缺口位置,可取值'top', 'bottom', 'left', 'right' ,支持类型circle dashboard
                     */
    gapPosition: {
      validator: function validator(val) {
        return ['top', 'bottom', 'left', 'right'].includes(val);
      },
      default: 'top' } },



  computed: {
    /**
               * 如果需要自定义格式就在这改
               */
    setFormat: function setFormat() {
      return "".concat(this.setProgress, "%");
    },
    /**
        * 设置显示进度值，禁止小于0和超过100
        */
    setProgress: function setProgress() {
      var percent = this.percent;
      if (!this.percent || this.percent < 0) {
        percent = 0;
      } else if (this.percent >= 100) {
        percent = 100;
      }
      return percent;
    },
    /**
        * 进度圈svg大小
        */
    setCircleStyle: function setCircleStyle() {
      return "width: ".concat(this.width, "px;\n\t\t\t\theight: ").concat(
      this.width, "px;\n\t\t\t\tfontSize: ").concat(
      this.width * 0.15 + 6, "px;");
    },
    /**
        * 圈底色
        */
    setCircleTrailStyle: function setCircleTrailStyle() {
      var radius = 50 - this.strokeWidth / 2;
      var len = Math.PI * 2 * radius;
      var gapDeg = this.gapDegree || this.type === 'dashboard' && 75;
      return "stroke-dasharray: ".concat(len - (gapDeg || 0), "px, ").concat(len, "px;\n\t\t\t\tstroke-dashoffset: -").concat(
      (gapDeg || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s;");

    },
    /**
        * 圈进度
        */
    setCirclePathStyle: function setCirclePathStyle() {
      var radius = 50 - this.strokeWidth / 2;
      var len = Math.PI * 2 * radius;
      var gapDeg = this.gapDegree || this.type === 'dashboard' && 75;
      return "stroke: ".concat(this.strokeColor, ";\n\t\t\t\tstroke-dasharray: ").concat(
      this.setProgress / 100 * (len - (gapDeg || 0)), "px, ").concat(len, "px;\n\t\t\t\tstroke-dashoffset: -").concat(
      (gapDeg || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s;");

    },
    /**
        * 绘制圈
        */
    setCirclePath: function setCirclePath() {
      var radius = 50 - this.strokeWidth / 2;
      var beginPositionX = 0;
      var beginPositionY = -radius;
      var endPositionX = 0;
      var endPositionY = -2 * radius;
      var gapPos = this.type === 'dashboard' && 'bottom' || this.gapPosition || 'top';
      switch (gapPos) {
        case 'left':
          beginPositionX = -radius;
          beginPositionY = 0;
          endPositionX = 2 * radius;
          endPositionY = 0;
          break;
        case 'right':
          beginPositionX = radius;
          beginPositionY = 0;
          endPositionX = -2 * radius;
          endPositionY = 0;
          break;
        case 'bottom':
          beginPositionY = radius;
          endPositionY = 2 * radius;
          break;
        default:
          break;}

      return "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, " a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, " a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
    },

    /**
        * 非H5端，绘制进度圈svg转base URL
        */
    setCircle: function setCircle() {
      var radius = 50 - this.strokeWidth / 2;
      var len = Math.PI * 2 * radius;
      var gapDeg = this.gapDegree || this.type === 'dashboard' && 75;
      var currentColor = '#108ee9';
      // 异常进度
      if (this.status == 'exception') {
        currentColor = '#f5222d';
      }
      // 完成进度
      if (this.status == 'success' || this.setProgress >= 100 || this.strokeColor) {
        currentColor = this.strokeColor || '#52c41a';
      }
      var svgToBase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' class='cmd-progress-circle'%3E%3Cpath d='".concat(
      this.setCirclePath, "' stroke='%23f3f3f3' stroke-linecap='").concat(this.strokeShape, "' stroke-width='").concat(this.strokeWidth, "' fill-opacity='0' class='cmd-progress-circle-trail' style='stroke-dasharray: ").concat(len - (gapDeg || 0), "px, ").concat(len, "px;stroke-dashoffset: -").concat((gapDeg || 0) / 2, "px;transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s;'%3E%3C/path%3E%3Cpath  d='").concat(this.setCirclePath, "' stroke-linecap='").concat(this.strokeShape, "' stroke-width='").concat(this.strokeWidth, "' fill-opacity='0' class='cmd-progress-circle-path' style='stroke: ").concat(escape(currentColor), ";stroke-dasharray: ").concat(this.setProgress / 100 * (len - (gapDeg || 0)), "px, ").concat(len, "px;stroke-dashoffset: -").concat((gapDeg || 0) / 2, "px;transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s;'%3E%3C/path%3E%3C/svg%3E");
      return "background-image: url(\"".concat(svgToBase, "\");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\t").concat(


      this.setCircleStyle);
    },
    /**
        * 设置进度圈状态图标
        */
    setCircleIcon: function setCircleIcon() {
      var currentColor = '#108ee9';
      var svgToBase = '';
      // 异常进度
      if (this.status == 'exception') {
        currentColor = '#f5222d';
        svgToBase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' data-icon='close' width='1em' height='1em' fill='".concat(
        escape(currentColor), "' aria-hidden='true'%3E %3Cpath d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z'%3E%3C/path%3E %3C/svg%3E");
      }
      // 完成进度
      if (this.status == 'success' || this.setProgress >= 100) {
        currentColor = this.strokeColor || '#52c41a';
        svgToBase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' data-icon='check' width='1em' height='1em' fill='".concat(
        escape(currentColor), "' aria-hidden='true'%3E %3Cpath d='M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z'%3E%3C/path%3E %3C/svg%3E");
      }
      return "background-image: url(\"".concat(svgToBase, "\");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;");




    },

    /**
        * 设置进度条样式
        */
    setLineStyle: function setLineStyle() {
      return "width: ".concat(this.setProgress, "%;\n\t\t\t\theight: ").concat(
      this.strokeWidth, "px;\n\t\t\t\tbackground: ").concat(
      this.strokeColor, ";\n\t\t\t\tborder-radius: ").concat(
      this.strokeShape === 'square' ? 0 : '100px', ";");
    },
    /**
        * 设置已完成分段进度
        */
    setLineSuccessStyle: function setLineSuccessStyle() {
      var successPercent = this.successPercent;
      if (!this.successPercent || this.successPercent < 0 || this.setProgress < this.successPercent) {
        successPercent = 0;
      } else if (this.successPercent >= 100) {
        successPercent = 100;
      }
      return "width: ".concat(successPercent, "%;\n\t\t\t\theight: ").concat(
      this.strokeWidth, "px;\n\t\t\t\tborder-radius: ").concat(
      this.strokeShape === 'square' ? 0 : '100px', ";");
    },

    /**
        * 设置进度条状态图标
        */
    setLineStatusIcon: function setLineStatusIcon() {
      var currentColor = '#108ee9';
      var svgToBase = '';
      // 异常进度
      if (this.status == 'exception') {
        currentColor = '#f5222d';
        svgToBase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' data-icon='close-circle' width='1em' height='1em' fill='".concat(
        escape(currentColor), "' aria-hidden='true'%3E %3Cpath d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z'%3E%3C/path%3E %3C/svg%3E");
      }
      // 完成进度
      if (this.status == 'success' || this.setProgress >= 100) {
        currentColor = this.strokeColor || '#52c41a';
        svgToBase = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='64 64 896 896' data-icon='check-circle' width='1em' height='1em' fill='".concat(
        escape(currentColor), "' aria-hidden='true'%3E %3Cpath d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z'%3E%3C/path%3E %3C/svg%3E");
      }
      return "background-image: url(\"".concat(svgToBase, "\");\n\t\t\t\tbackground-size: cover;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;");




    },

    /**
        * 状态样式
        */
    setStatusClass: function setStatusClass() {
      var statusClass = [];
      // 异常进度
      if (this.status == 'exception') {
        statusClass.push('cmd-progress-status-exception');
      }
      // 完成进度
      if (this.status == 'success' || this.setProgress >= 100) {
        statusClass.push('cmd-progress-status-success');
      }
      // 活动进度条
      if (this.status == 'active') {
        statusClass.push('cmd-progress-status-active');
      }
      // 是否显示信息
      if (this.showInfo) {
        statusClass.push('cmd-progress-show-info');
      }
      // 进度条类型
      if (this.type === 'line') {
        statusClass.push('cmd-progress-line');
      }
      // 进度圈、仪表盘类型
      if (this.type === 'circle' || this.type === 'dashboard') {
        statusClass.push('cmd-progress-circle');
      }
      statusClass.push('cmd-progress-status-normal');
      return statusClass;
    } } };exports.default = _default;

/***/ }),

/***/ 187:
/*!*************************************************************************************************!*\
  !*** F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-progress.vue?vue&type=style&index=0&lang=css& */ 188);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_progress_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/ai图片处理/老照片上色/components/cmd-progress/cmd-progress.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/NDcwNyIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/NTVhYSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/ZTA2YSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/NTVlYyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jbWQtcHJvZ3Jlc3MvY21kLXByb2dyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/ZmI5NSIsIndlYnBhY2s6Ly8vRjovYWnlm77niYflpITnkIYv6ICB54Wn54mH5LiK6ImyL2NvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy52dWU/NTJjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlIO0FBQ3pIO0FBQ2dFO0FBQ0w7QUFDYTs7O0FBR3hFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBaXJCLENBQWdCLHNzQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM0RXJzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQSxzQkFEQTs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEscUJBSkEsRUFKQTs7QUFVQTs7O0FBR0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBYkE7O0FBaUJBOzs7QUFHQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFwQkE7O0FBd0JBOzs7QUFHQTtBQUNBLG1CQURBO0FBRUEsbUJBRkEsRUEzQkE7O0FBK0JBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsdUJBSkEsRUFsQ0E7O0FBd0NBOzs7QUFHQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUEzQ0E7O0FBK0NBOzs7QUFHQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFsREE7O0FBc0RBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsc0JBSkEsRUF6REE7O0FBK0RBOzs7QUFHQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFsRUE7O0FBc0VBOzs7QUFHQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUF6RUE7O0FBNkVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsb0JBSkEsRUFoRkEsRUFIQTs7OztBQTJGQTtBQUNBOzs7QUFHQSxhQUpBLHVCQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0E7OztBQUdBLGVBVkEseUJBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWxCQTtBQW1CQTs7O0FBR0Esa0JBdEJBLDRCQXNCQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSwyQkFGQTtBQUdBLEtBMUJBO0FBMkJBOzs7QUFHQSx1QkE5QkEsaUNBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTs7QUFHQSxLQXJDQTtBQXNDQTs7O0FBR0Esc0JBekNBLGdDQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBREEsaUJBQ0EsR0FEQTtBQUVBLHVCQUZBOztBQUlBLEtBakRBO0FBa0RBOzs7QUFHQSxpQkFyREEsMkJBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBbEJBOztBQW9CQTtBQUNBLEtBakZBOztBQW1GQTs7O0FBR0EsYUF0RkEsdUJBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQSxrREFDQSxnQkFEQSw2QkFDQSxnQkFEQSwyRkFDQSxtQkFEQSxpQkFDQSxHQURBLG9DQUNBLGlCQURBLGtJQUNBLGtCQURBLCtCQUNBLGdCQURBLDZCQUNBLGdCQURBLGdGQUNBLG9CQURBLGdDQUNBLDhDQURBLGlCQUNBLEdBREEsb0NBQ0EsaUJBREE7QUFFQTs7O0FBR0EseUJBSEE7QUFJQSxLQXpHQTtBQTBHQTs7O0FBR0EsaUJBN0dBLDJCQTZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTs7Ozs7QUFLQSxLQWpJQTs7QUFtSUE7OztBQUdBLGdCQXRJQSwwQkFzSUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsc0JBRkE7QUFHQSxpREFIQTtBQUlBLEtBM0lBO0FBNElBOzs7QUFHQSx1QkEvSUEsaUNBK0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxpREFGQTtBQUdBLEtBekpBOztBQTJKQTs7O0FBR0EscUJBOUpBLCtCQThKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUE7QUFDQTs7Ozs7QUFLQSxLQWxMQTs7QUFvTEE7OztBQUdBLGtCQXZMQSw0QkF1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5OQSxFQTNGQSxFOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBaStCLENBQWdCLDI5QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXIvQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6ImNvbXBvbmVudHMvY21kLXByb2dyZXNzL2NtZC1wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY21kLXByb2dyZXNzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZGJmMDk4NCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NtZC1wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NtZC1wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY21kLXByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jbWQtcHJvZ3Jlc3MvY21kLXByb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTYtMCFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY21kLXByb2dyZXNzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZGJmMDk4NCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9jbWQtcHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9jbWQtcHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImNtZC1wcm9ncmVzcyBjbWQtcHJvZ3Jlc3MtZGVmYXVsdFwiIDpjbGFzcz1cInNldFN0YXR1c0NsYXNzXCI+XG4gICAgPGJsb2NrIHYtaWY9XCJ0eXBlID09ICdjaXJjbGUnIHx8IHR5cGUgPT0gJ2Rhc2hib2FyZCdcIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY21kLXByb2dyZXNzIGNtZC1wcm9ncmVzcy1kZWZhdWx0XCIgOmNsYXNzPVwic2V0U3RhdHVzQ2xhc3NcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJjbWQtcHJvZ3Jlc3MtaW5uZXJcIiA6c3R5bGU9XCJzZXRDaXJjbGVTdHlsZVwiPlxuICAgICAgICAgIDwhLS0g57uY5Yi25ZyIIHN0YXJ0IC0tPlxuICAgICAgICAgIDwhLS0gI2lmZGVmIEg1IC0tPlxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxMDAgMTAwXCIgY2xhc3M9XCJjbWQtcHJvZ3Jlc3MtY2lyY2xlXCI+XG4gICAgICAgICAgICA8cGF0aCA6ZD1cInNldENpcmNsZVBhdGhcIiBzdHJva2U9XCIjZjNmM2YzXCIgOnN0cm9rZS1saW5lY2FwPVwic3Ryb2tlU2hhcGVcIiA6c3Ryb2tlLXdpZHRoPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCIgY2xhc3M9XCJjbWQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsXCIgOnN0eWxlPVwic2V0Q2lyY2xlVHJhaWxTdHlsZVwiPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIDpkPVwic2V0Q2lyY2xlUGF0aFwiIDpzdHJva2UtbGluZWNhcD1cInN0cm9rZVNoYXBlXCIgOnN0cm9rZS13aWR0aD1cInN0cm9rZVdpZHRoXCIgZmlsbC1vcGFjaXR5PVwiMFwiIGNsYXNzPVwiY21kLXByb2dyZXNzLWNpcmNsZS1wYXRoXCJcbiAgICAgICAgICAgICAgOnN0eWxlPVwic2V0Q2lyY2xlUGF0aFN0eWxlXCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwhLS0gI2VuZGlmIC0tPlxuICAgICAgICAgIDwhLS0gI2lmbmRlZiBINSAtLT5cbiAgICAgICAgICA8dGV4dCA6c3R5bGU9XCJzZXRDaXJjbGVcIj48L3RleHQ+XG4gICAgICAgICAgPCEtLSAjZW5kaWYgLS0+XG4gICAgICAgICAgPCEtLSDnu5jliLblnIggZW5kIC0tPlxuICAgICAgICAgIDwhLS0g54q25oCB5paH5pysIHN0YXJ0IC0tPlxuICAgICAgICAgIDxibG9jayB2LWlmPVwic2hvd0luZm9cIj5cbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiY21kLXByb2dyZXNzLXRleHRcIiA6dGl0bGU9XCJzZXRGb3JtYXRcIj5cbiAgICAgICAgICAgICAgPGJsb2NrIHYtaWY9XCJzdGF0dXMgIT0gJ3N1Y2Nlc3MnICYmIHN0YXR1cyAhPSAnZXhjZXB0aW9uJyAmJiBzZXRQcm9ncmVzcyA8IDEwMFwiPnt7c2V0Rm9ybWF0fX08L2Jsb2NrPlxuICAgICAgICAgICAgICA8IS0tICNpZmRlZiBINSAtLT5cbiAgICAgICAgICAgICAgPHN2ZyB2LWlmPVwic3RhdHVzID09ICdleGNlcHRpb24nXCIgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBkYXRhLWljb249XCJjbG9zZVwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk01NjMuOCA1MTJsMjYyLjUtMzEyLjljNC40LTUuMi43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjlBNy45NSA3Ljk1IDAgMCAwIDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHN2ZyB2LWlmPVwic3RhdHVzID09ICdzdWNjZXNzJyB8fCBzZXRQcm9ncmVzcyA9PSAxMDBcIiB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiIGRhdGEtaWNvbj1cImNoZWNrXCIgd2lkdGg9XCIxZW1cIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIiA6c3R5bGU9XCJ7J2NvbG9yJzogc3Ryb2tlQ29sb3IgPyBzdHJva2VDb2xvciA6ICcnfVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTEyIDE5MGgtNjkuOWMtOS44IDAtMTkuMSA0LjUtMjUuMSAxMi4yTDQwNC43IDcyNC41IDIwNyA0NzRhMzIgMzIgMCAwIDAtMjUuMS0xMi4ySDExMmMtNi43IDAtMTAuNCA3LjctNi4zIDEyLjlsMjczLjkgMzQ3YzEyLjggMTYuMiAzNy40IDE2LjIgNTAuMyAwbDQ4OC40LTYxOC45YzQuMS01LjEuNC0xMi44LTYuMy0xMi44elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwhLS0gI2VuZGlmIC0tPlxuICAgICAgICAgICAgICA8IS0tICNpZm5kZWYgSDUgLS0+XG4gICAgICAgICAgICAgIDx0ZXh0IHYtaWY9XCJzdGF0dXMgPT0gJ2V4Y2VwdGlvbicgfHwgc3RhdHVzID09ICdzdWNjZXNzJyB8fCBzZXRQcm9ncmVzcyA9PSAxMDBcIiA6c3R5bGU9XCJzZXRDaXJjbGVJY29uXCI+PC90ZXh0PlxuICAgICAgICAgICAgICA8IS0tICNlbmRpZiAtLT5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICA8L2Jsb2NrPlxuICAgICAgICAgIDwhLS0g54q25oCB5paH5pysIGVuZCAtLT5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvYmxvY2s+XG5cbiAgICA8YmxvY2sgdi1pZj1cInR5cGUgPT0gJ2xpbmUnXCI+XG4gICAgICA8IS0tIOi/m+W6puadoSBzdGFydCAtLT5cbiAgICAgIDx2aWV3IGNsYXNzPVwiY21kLXByb2dyZXNzLW91dGVyXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY21kLXByb2dyZXNzLWlubmVyXCIgOnN0eWxlPVwieydib3JkZXItcmFkaXVzJzogc3Ryb2tlU2hhcGUgPT0gJ3NxdWFyZScgPyAwIDogJzEwMHB4J31cIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cImNtZC1wcm9ncmVzcy1iZ1wiIDpzdHlsZT1cInNldExpbmVTdHlsZVwiPjwvdmlldz5cbiAgICAgICAgICA8dmlldyB2LWlmPVwic3VjY2Vzc1BlcmNlbnRcIiBjbGFzcz1cImNtZC1wcm9ncmVzcy1zdWNjZXNzLWJnXCIgOnN0eWxlPVwic2V0TGluZVN1Y2Nlc3NTdHlsZVwiPjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgICAgPCEtLSDov5vluqbmnaEgZW5kIC0tPlxuICAgICAgPCEtLSDov5vluqbmnaHmmK/lkKbmmL7npLrkv6Hmga8gc3RhcnQgLS0+XG4gICAgICA8YmxvY2sgdi1pZj1cInNob3dJbmZvXCI+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY21kLXByb2dyZXNzLXRleHRcIiA6dGl0bGU9XCJzZXRGb3JtYXRcIj5cbiAgICAgICAgICA8YmxvY2sgdi1pZj1cInN0YXR1cyAhPSAnc3VjY2VzcycgJiYgc3RhdHVzICE9ICdleGNlcHRpb24nICYmIHNldFByb2dyZXNzIDwgMTAwXCI+e3tzZXRGb3JtYXR9fTwvYmxvY2s+XG4gICAgICAgICAgPCEtLSAjaWZkZWYgSDUgLS0+XG4gICAgICAgICAgPHN2ZyB2LWlmPVwic3RhdHVzID09ICdleGNlcHRpb24nXCIgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBkYXRhLWljb249XCJjbG9zZS1jaXJjbGVcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xNjUuNCA2MTguMmwtNjYtLjNMNTEyIDU2My40bC05OS4zIDExOC40LTY2LjEuM2MtNC40IDAtOC0zLjUtOC04IDAtMS45LjctMy43IDEuOS01LjJsMTMwLjEtMTU1TDM0MC41IDM1OWE4LjMyIDguMzIgMCAwIDEtMS45LTUuMmMwLTQuNCAzLjYtOCA4LThsNjYuMS4zTDUxMiA0NjQuNmw5OS4zLTExOC40IDY2LS4zYzQuNCAwIDggMy41IDggOCAwIDEuOS0uNyAzLjctMS45IDUuMkw1NTMuNSA1MTRsMTMwIDE1NWMxLjIgMS41IDEuOSAzLjMgMS45IDUuMiAwIDQuNC0zLjYgOC04IDh6XCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmcgdi1pZj1cInN0YXR1cyA9PSAnc3VjY2VzcycgfHwgc2V0UHJvZ3Jlc3MgPT0gMTAwXCIgdmlld0JveD1cIjY0IDY0IDg5NiA4OTZcIiBkYXRhLWljb249XCJjaGVjay1jaXJjbGVcIiB3aWR0aD1cIjFlbVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxZW1cIiBmaWxsPVwiY3VycmVudENvbG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgOnN0eWxlPVwieydjb2xvcic6IHN0cm9rZUNvbG9yID8gc3Ryb2tlQ29sb3IgOiAnJ31cIj5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTE5My41IDMwMS43bC0yMTAuNiAyOTJhMzEuOCAzMS44IDAgMCAxLTUxLjcgMEwzMTguNSA0ODQuOWMtMy44LTUuMyAwLTEyLjcgNi41LTEyLjdoNDYuOWMxMC4yIDAgMTkuOSA0LjkgMjUuOSAxMy4zbDcxLjIgOTguOCAxNTcuMi0yMThjNi04LjMgMTUuNi0xMy4zIDI1LjktMTMuM0g2OTljNi41IDAgMTAuMyA3LjQgNi41IDEyLjd6XCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwhLS0gI2VuZGlmIC0tPlxuICAgICAgICAgIDwhLS0gI2lmbmRlZiBINSAtLT5cbiAgICAgICAgICA8dGV4dCB2LWlmPVwic3RhdHVzID09ICdleGNlcHRpb24nIHx8IHN0YXR1cyA9PSAnc3VjY2VzcycgfHwgc2V0UHJvZ3Jlc3MgPT0gMTAwXCIgOnN0eWxlPVwic2V0TGluZVN0YXR1c0ljb25cIj48L3RleHQ+XG4gICAgICAgICAgPCEtLSAjZW5kaWYgLS0+XG4gICAgICAgIDwvdGV4dD5cbiAgICAgIDwvYmxvY2s+XG4gICAgICA8IS0tIOi/m+W6puadoeaYr+WQpuaYvuekuuS/oeaBryBlbmQgLS0+XG4gICAgPC9ibG9jaz5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgLyoqICBcbiAgICog6L+b5bqm5p2h57uE5Lu2ICBcbiAgICogQGRlc2NyaXB0aW9uIOaYvuekuuS4gOS4quaTjeS9nOWujOaIkOeahOeZvuWIhuavlOaXtu+8jOS4uueUqOaIt+aYvuekuuivpeaTjeS9nOeahOW9k+WJjei/m+W6puWSjOeKtuaAgeOAgiAgXG4gICAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD0yNTkgIFxuICAgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSDov5vluqbnsbvlnosgLSDnur/lnovvvJpsaW5l44CB5ZyG5ZyI5b2i77yaY2lyY2xl44CB5Luq6KGo55uY77yaZGFzaGJvYXJk77yM6buY6K6k57q/5Z6L77yabGluZSAgXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBwZXJjZW50IOi/m+W6pueZvuWIhuavlOWAvCAtIOaYvuekuuiMg+WbtDAtMTAwIO+8jOWPr+iDveaVsOavlOi+g+Wkp+WwsemcgOimgeiHquW3sei9rOaIkOeZvuWIhuavlOeahOWAvCAgXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzdWNjZXNzLXBlcmNlbnQg6L+b5bqm5bey5a6M5oiQ55qE55m+5YiG5YegIC0g5LuF5pSv5oyB6L+b5bqm57q/5Z6L77yabGluZSAgXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdGF0dXMg6L+b5bqm54q25oCBIC0g5raM5Yqo77yaYWN0aXZl77yI5LuF5pSv5oyB57q/5Z6L77yabGluZe+8ieOAgeato+W4uO+8mm5vcm1hbOOAgeWujOaIkO+8mnN1Y2Nlc3PjgIHlpLHotKXvvJpleGNlcHRpb27vvIzpu5jorqTmraPluLjvvJpub3JtYWwgIFxuICAgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3ctaW5mbyDov5vluqbnirbmgIHkv6Hmga8gLSDmmK/lkKbmmL7npLrov5vluqbmlbDlgLzmiJbnirbmgIHlm77moIfvvIzpu5jorqR0cnVlICBcbiAgICogQHByb3BlcnR5IHtOdW1iZXJ9IHN0cm9rZS13aWR0aCDov5vluqbnur/mnaHnmoTlrr3luqYgLSDlu7rorq7lnKjmnaHnur/nmoTlrr3luqbojIPlm7TvvJoxLTUw77yM5LiO6L+b5bqm5p2h5pi+56S65a695bqm5pyJ5YWz77yM6buY6K6kOCAgXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdHJva2UtY29sb3Ig6L+b5bqm57q/5p2h55qE6aKc6ImyIC0g5riQ5Y+Y6Imy5LuF5pSv5oyB57q/5Z6L77yabGluZSAgXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzdHJva2Utc2hhcGUg6L+b5bqm57q/5p2h5Lik56uv55qE5b2i54q2IC0g5ZyG77yacm91bmTjgIHmlrnlnZfnm7Top5LvvJpzcXVhcmXvvIzpu5jorqTlnIbvvJpyb3VuZCAgXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB3aWR0aCDov5vluqbnlLvluIPlrr3luqYgLSDku4XmlK/mjIHlnIblnIjlvaLvvJpjaXJjbGXjgIHku6rooajnm5jvvJpkYXNoYm9hcmTvvIzpu5jorqQ4MCAgXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBnYXAtZGVncmVlIOi/m+W6puWchuW9oue8uuWPo+inkuW6piAtIOWPr+WPluWAvCAwIH4gMzYwLOS7heaUr+aMgeWchuWciOW9ou+8mmNpcmNsZeOAgeS7quihqOebmO+8mmRhc2hib2FyZCAgXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBnYXAtcG9zaXRpb24g6L+b5bqm5ZyG5b2i57y65Y+j5L2N572uIC0g5Y+v5Y+W5YC8J3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcs5LuF5pSv5oyB5ZyG5ZyI5b2i77yaY2lyY2xl44CB5Luq6KGo55uY77yaZGFzaGJvYXJkICBcbiAgICogQGV4YW1wbGUgPGNtZC1wcm9ncmVzcyA6cGVyY2VudD1cIjMwXCI+PC9jbWQtcHJvZ3Jlc3M+ICBcbiAgICovXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnY21kLXByb2dyZXNzJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAvKipcbiAgICAgICAqIOexu+Wei+m7mOiupO+8mmxpbmXvvIzlj6/pgIkgbGluZSBjaXJjbGUgZGFzaGJvYXJkXG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdmFsaWRhdG9yOiB2YWwgPT4ge1xuICAgICAgICAgIHJldHVybiBbJ2xpbmUnLCAnY2lyY2xlJywgJ2Rhc2hib2FyZCddLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6ICdsaW5lJ1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog55m+5YiG5q+UXG4gICAgICAgKi9cbiAgICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDlt7LlrozmiJDnmoTliIbmrrXnmb7liIbvvIzku4XmlK/mjIHnsbvlnotsaW5lXG4gICAgICAgKi9cbiAgICAgIHN1Y2Nlc3NQZXJjZW50OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgZGVmYXVsdDogMFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog5piv5ZCm5pi+56S66L+b5bqm5pWw5YC85oiW54q25oCB5Zu+5qCHXG4gICAgICAgKi9cbiAgICAgIHNob3dJbmZvOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIOi/m+W6pueKtuaAge+8jOWPr+mAie+8mm5vcm1hbCBzdWNjZXNzIGV4Y2VwdGlvbiDvvIhhY3RpdmXku4XmlK/mjIHnsbvlnotsaW5lXG4gICAgICAgKi9cbiAgICAgIHN0YXR1czoge1xuICAgICAgICB2YWxpZGF0b3I6IHZhbCA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsnbm9ybWFsJywgJ3N1Y2Nlc3MnLCAnZXhjZXB0aW9uJywgJ2FjdGl2ZSddLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6ICdub3JtYWwnXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDmnaHnur/nmoTlrr3luqYxLTUw77yM5LiOd2lkdGjmnInlhbNcbiAgICAgICAqL1xuICAgICAgc3Ryb2tlV2lkdGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiA2XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDmnaHnur/nmoTpopzoibLvvIzmuJDlj5joibLku4XmlK/mjIHnsbvlnotsaW5lXG4gICAgICAgKi9cbiAgICAgIHN0cm9rZUNvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJydcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIOadoee6v+S4pOerr+eahOW9oueKtiDlj6/pgInvvJoncm91bmQnLCAnc3F1YXJlJ1xuICAgICAgICovXG4gICAgICBzdHJva2VTaGFwZToge1xuICAgICAgICB2YWxpZGF0b3I6IHZhbCA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsncm91bmQnLCAnc3F1YXJlJ10uaW5jbHVkZXModmFsKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDogJ3JvdW5kJ1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog5ZyG5b2i6L+b5bqm5p2h55S75biD5a695bqmLOaUr+aMgeexu+Wei2NpcmNsZSBkYXNoYm9hcmRcbiAgICAgICAqL1xuICAgICAgd2lkdGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiA4MFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog5ZyG5b2i6L+b5bqm5p2h57y65Y+j6KeS5bqm77yM5Y+v5Y+W5YC8IDAgfiAzNjAs5pSv5oyB57G75Z6LY2lyY2xlIGRhc2hib2FyZFxuICAgICAgICovXG4gICAgICBnYXBEZWdyZWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBkZWZhdWx0OiAwXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDlnIblvaLov5vluqbmnaHnvLrlj6PkvY3nva4s5Y+v5Y+W5YC8J3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgLOaUr+aMgeexu+Wei2NpcmNsZSBkYXNoYm9hcmRcbiAgICAgICAqL1xuICAgICAgZ2FwUG9zaXRpb246IHtcbiAgICAgICAgdmFsaWRhdG9yOiB2YWwgPT4ge1xuICAgICAgICAgIHJldHVybiBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddLmluY2x1ZGVzKHZhbCk7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6ICd0b3AnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAvKipcbiAgICAgICAqIOWmguaenOmcgOimgeiHquWumuS5ieagvOW8j+WwseWcqOi/meaUuVxuICAgICAgICovXG4gICAgICBzZXRGb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnNldFByb2dyZXNzfSVgO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog6K6+572u5pi+56S66L+b5bqm5YC877yM56aB5q2i5bCP5LqOMOWSjOi2hei/hzEwMFxuICAgICAgICovXG4gICAgICBzZXRQcm9ncmVzcygpIHtcbiAgICAgICAgbGV0IHBlcmNlbnQgPSB0aGlzLnBlcmNlbnQ7XG4gICAgICAgIGlmICghdGhpcy5wZXJjZW50IHx8IHRoaXMucGVyY2VudCA8IDApIHtcbiAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlcmNlbnQgPj0gMTAwKSB7XG4gICAgICAgICAgcGVyY2VudCA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGVyY2VudDtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIOi/m+W6puWciHN2Z+Wkp+Wwj1xuICAgICAgICovXG4gICAgICBzZXRDaXJjbGVTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIGB3aWR0aDogJHt0aGlzLndpZHRofXB4O1xuXHRcdFx0XHRoZWlnaHQ6ICR7dGhpcy53aWR0aH1weDtcblx0XHRcdFx0Zm9udFNpemU6ICR7dGhpcy53aWR0aCAqIDAuMTUgKyA2fXB4O2BcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIOWciOW6leiJslxuICAgICAgICovXG4gICAgICBzZXRDaXJjbGVUcmFpbFN0eWxlKCkge1xuICAgICAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICAgICAgY29uc3QgZ2FwRGVnID0gdGhpcy5nYXBEZWdyZWUgfHwgKHRoaXMudHlwZSA9PT0gJ2Rhc2hib2FyZCcgJiYgNzUpO1xuICAgICAgICByZXR1cm4gYHN0cm9rZS1kYXNoYXJyYXk6ICR7bGVuIC0gKGdhcERlZ3x8MCl9cHgsICR7bGVufXB4O1xuXHRcdFx0XHRzdHJva2UtZGFzaG9mZnNldDogLSR7KGdhcERlZ3x8MCkgLyAyfXB4O1xuXHRcdFx0XHR0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgMC4zcyBlYXNlIDBzLCBzdHJva2UgMC4zcztgXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDlnIjov5vluqZcbiAgICAgICAqL1xuICAgICAgc2V0Q2lyY2xlUGF0aFN0eWxlKCkge1xuICAgICAgICBjb25zdCByYWRpdXMgPSA1MCAtIHRoaXMuc3Ryb2tlV2lkdGggLyAyO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICAgICAgY29uc3QgZ2FwRGVnID0gdGhpcy5nYXBEZWdyZWUgfHwgKHRoaXMudHlwZSA9PT0gJ2Rhc2hib2FyZCcgJiYgNzUpO1xuICAgICAgICByZXR1cm4gYHN0cm9rZTogJHt0aGlzLnN0cm9rZUNvbG9yfTtcblx0XHRcdFx0c3Ryb2tlLWRhc2hhcnJheTogJHsodGhpcy5zZXRQcm9ncmVzcyAvIDEwMCkgKiAobGVuIC0gKGdhcERlZ3x8MCkpfXB4LCAke2xlbn1weDtcblx0XHRcdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IC0keyhnYXBEZWd8fDApIC8gMn1weDtcblx0XHRcdFx0dHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IDAuM3MgZWFzZSAwcywgc3Ryb2tlIDAuM3MsIHN0cm9rZS13aWR0aCAwLjA2cyBlYXNlIDAuM3M7YFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog57uY5Yi25ZyIXG4gICAgICAgKi9cbiAgICAgIHNldENpcmNsZVBhdGgoKSB7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XG4gICAgICAgIGxldCBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgICAgICBsZXQgZW5kUG9zaXRpb25ZID0gLTIgKiByYWRpdXM7XG4gICAgICAgIGNvbnN0IGdhcFBvcyA9ICh0aGlzLnR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdib3R0b20nKSB8fCB0aGlzLmdhcFBvc2l0aW9uIHx8ICd0b3AnO1xuICAgICAgICBzd2l0Y2ggKGdhcFBvcykge1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICAgICAgZW5kUG9zaXRpb25YID0gMiAqIHJhZGl1cztcbiAgICAgICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgICAgIGVuZFBvc2l0aW9uWCA9IC0yICogcmFkaXVzO1xuICAgICAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgICAgIGVuZFBvc2l0aW9uWSA9IDIgKiByYWRpdXM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX0gYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9IGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG4gICAgICB9LFxuICAgICAgLy8gI2lmbmRlZiBINVxuICAgICAgLyoqXG4gICAgICAgKiDpnZ5INeerr++8jOe7mOWItui/m+W6puWciHN2Z+i9rGJhc2UgVVJMXG4gICAgICAgKi9cbiAgICAgIHNldENpcmNsZSgpIHtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgICAgIGNvbnN0IGdhcERlZyA9IHRoaXMuZ2FwRGVncmVlIHx8ICh0aGlzLnR5cGUgPT09ICdkYXNoYm9hcmQnICYmIDc1KTtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xvciA9ICcjMTA4ZWU5J1xuICAgICAgICAvLyDlvILluLjov5vluqZcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09ICdleGNlcHRpb24nKSB7XG4gICAgICAgICAgY3VycmVudENvbG9yID0gJyNmNTIyMmQnXG4gICAgICAgIH1cbiAgICAgICAgLy8g5a6M5oiQ6L+b5bqmXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAnc3VjY2VzcycgfHwgdGhpcy5zZXRQcm9ncmVzcyA+PSAxMDAgfHwgdGhpcy5zdHJva2VDb2xvcikge1xuICAgICAgICAgIGN1cnJlbnRDb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3IgfHwgJyM1MmM0MWEnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN2Z1RvQmFzZSA9XG4gICAgICAgICAgYGRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTAwIDEwMCcgY2xhc3M9J2NtZC1wcm9ncmVzcy1jaXJjbGUnJTNFJTNDcGF0aCBkPScke3RoaXMuc2V0Q2lyY2xlUGF0aH0nIHN0cm9rZT0nJTIzZjNmM2YzJyBzdHJva2UtbGluZWNhcD0nJHt0aGlzLnN0cm9rZVNoYXBlfScgc3Ryb2tlLXdpZHRoPScke3RoaXMuc3Ryb2tlV2lkdGh9JyBmaWxsLW9wYWNpdHk9JzAnIGNsYXNzPSdjbWQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsJyBzdHlsZT0nc3Ryb2tlLWRhc2hhcnJheTogJHtsZW4gLSAoZ2FwRGVnfHwwKX1weCwgJHtsZW59cHg7c3Ryb2tlLWRhc2hvZmZzZXQ6IC0keyhnYXBEZWd8fDApIC8gMn1weDt0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgMC4zcyBlYXNlIDBzLCBzdHJva2UgMC4zczsnJTNFJTNDL3BhdGglM0UlM0NwYXRoICBkPScke3RoaXMuc2V0Q2lyY2xlUGF0aH0nIHN0cm9rZS1saW5lY2FwPScke3RoaXMuc3Ryb2tlU2hhcGV9JyBzdHJva2Utd2lkdGg9JyR7dGhpcy5zdHJva2VXaWR0aH0nIGZpbGwtb3BhY2l0eT0nMCcgY2xhc3M9J2NtZC1wcm9ncmVzcy1jaXJjbGUtcGF0aCcgc3R5bGU9J3N0cm9rZTogJHtlc2NhcGUoY3VycmVudENvbG9yKX07c3Ryb2tlLWRhc2hhcnJheTogJHsodGhpcy5zZXRQcm9ncmVzcyAvIDEwMCkgKiAobGVuIC0gKGdhcERlZ3x8MCkpfXB4LCAke2xlbn1weDtzdHJva2UtZGFzaG9mZnNldDogLSR7KGdhcERlZ3x8MCkgLyAyfXB4O3RyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAwLjNzIGVhc2UgMHMsIHN0cm9rZSAwLjNzLCBzdHJva2Utd2lkdGggMC4wNnMgZWFzZSAwLjNzOyclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VgXG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtzdmdUb0Jhc2V9XCIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdCR7dGhpcy5zZXRDaXJjbGVTdHlsZX1gO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog6K6+572u6L+b5bqm5ZyI54q25oCB5Zu+5qCHXG4gICAgICAgKi9cbiAgICAgIHNldENpcmNsZUljb24oKSB7XG4gICAgICAgIGxldCBjdXJyZW50Q29sb3IgPSAnIzEwOGVlOSdcbiAgICAgICAgbGV0IHN2Z1RvQmFzZSA9ICcnXG4gICAgICAgIC8vIOW8guW4uOi/m+W6plxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gJ2V4Y2VwdGlvbicpIHtcbiAgICAgICAgICBjdXJyZW50Q29sb3IgPSAnI2Y1MjIyZCdcbiAgICAgICAgICBzdmdUb0Jhc2UgPVxuICAgICAgICAgICAgYGRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSc2NCA2NCA4OTYgODk2JyBkYXRhLWljb249J2Nsb3NlJyB3aWR0aD0nMWVtJyBoZWlnaHQ9JzFlbScgZmlsbD0nJHtlc2NhcGUoY3VycmVudENvbG9yKX0nIGFyaWEtaGlkZGVuPSd0cnVlJyUzRSAlM0NwYXRoIGQ9J001NjMuOCA1MTJsMjYyLjUtMzEyLjljNC40LTUuMi43LTEzLjEtNi4xLTEzLjFoLTc5LjhjLTQuNyAwLTkuMiAyLjEtMTIuMyA1LjdMNTExLjYgNDQ5LjggMjk1LjEgMTkxLjdjLTMtMy42LTcuNS01LjctMTIuMy01LjdIMjAzYy02LjggMC0xMC41IDcuOS02LjEgMTMuMUw0NTkuNCA1MTIgMTk2LjkgODI0LjlBNy45NSA3Ljk1IDAgMCAwIDIwMyA4MzhoNzkuOGM0LjcgMCA5LjItMi4xIDEyLjMtNS43bDIxNi41LTI1OC4xIDIxNi41IDI1OC4xYzMgMy42IDcuNSA1LjcgMTIuMyA1LjdoNzkuOGM2LjggMCAxMC41LTcuOSA2LjEtMTMuMUw1NjMuOCA1MTJ6JyUzRSUzQy9wYXRoJTNFICUzQy9zdmclM0VgO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWujOaIkOi/m+W6plxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gJ3N1Y2Nlc3MnIHx8IHRoaXMuc2V0UHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgY3VycmVudENvbG9yID0gdGhpcy5zdHJva2VDb2xvciB8fCAnIzUyYzQxYSdcbiAgICAgICAgICBzdmdUb0Jhc2UgPVxuICAgICAgICAgICAgYGRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSc2NCA2NCA4OTYgODk2JyBkYXRhLWljb249J2NoZWNrJyB3aWR0aD0nMWVtJyBoZWlnaHQ9JzFlbScgZmlsbD0nJHtlc2NhcGUoY3VycmVudENvbG9yKX0nIGFyaWEtaGlkZGVuPSd0cnVlJyUzRSAlM0NwYXRoIGQ9J005MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6JyUzRSUzQy9wYXRoJTNFICUzQy9zdmclM0VgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiJHtzdmdUb0Jhc2V9XCIpO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxZW07XG5cdFx0XHRcdGhlaWdodDogMWVtO2A7XG4gICAgICB9LFxuICAgICAgLy8gI2VuZGlmXG4gICAgICAvKipcbiAgICAgICAqIOiuvue9rui/m+W6puadoeagt+W8j1xuICAgICAgICovXG4gICAgICBzZXRMaW5lU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBgd2lkdGg6ICR7dGhpcy5zZXRQcm9ncmVzc30lO1xuXHRcdFx0XHRoZWlnaHQ6ICR7dGhpcy5zdHJva2VXaWR0aH1weDtcblx0XHRcdFx0YmFja2dyb3VuZDogJHt0aGlzLnN0cm9rZUNvbG9yfTtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogJHt0aGlzLnN0cm9rZVNoYXBlID09PSAnc3F1YXJlJyA/IDAgOiAnMTAwcHgnfTtgO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog6K6+572u5bey5a6M5oiQ5YiG5q616L+b5bqmXG4gICAgICAgKi9cbiAgICAgIHNldExpbmVTdWNjZXNzU3R5bGUoKSB7XG4gICAgICAgIGxldCBzdWNjZXNzUGVyY2VudCA9IHRoaXMuc3VjY2Vzc1BlcmNlbnQ7XG4gICAgICAgIGlmICghdGhpcy5zdWNjZXNzUGVyY2VudCB8fCB0aGlzLnN1Y2Nlc3NQZXJjZW50IDwgMCB8fCB0aGlzLnNldFByb2dyZXNzIDwgdGhpcy5zdWNjZXNzUGVyY2VudCkge1xuICAgICAgICAgIHN1Y2Nlc3NQZXJjZW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN1Y2Nlc3NQZXJjZW50ID49IDEwMCkge1xuICAgICAgICAgIHN1Y2Nlc3NQZXJjZW50ID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgd2lkdGg6ICR7c3VjY2Vzc1BlcmNlbnR9JTtcblx0XHRcdFx0aGVpZ2h0OiAke3RoaXMuc3Ryb2tlV2lkdGh9cHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6ICR7dGhpcy5zdHJva2VTaGFwZSA9PT0gJ3NxdWFyZScgPyAwIDogJzEwMHB4J307YDtcbiAgICAgIH0sXG4gICAgICAvLyAjaWZuZGVmIEg1XG4gICAgICAvKipcbiAgICAgICAqIOiuvue9rui/m+W6puadoeeKtuaAgeWbvuagh1xuICAgICAgICovXG4gICAgICBzZXRMaW5lU3RhdHVzSWNvbigpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xvciA9ICcjMTA4ZWU5J1xuICAgICAgICBsZXQgc3ZnVG9CYXNlID0gJydcbiAgICAgICAgLy8g5byC5bi46L+b5bqmXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAnZXhjZXB0aW9uJykge1xuICAgICAgICAgIGN1cnJlbnRDb2xvciA9ICcjZjUyMjJkJ1xuICAgICAgICAgIHN2Z1RvQmFzZSA9XG4gICAgICAgICAgICBgZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzY0IDY0IDg5NiA4OTYnIGRhdGEtaWNvbj0nY2xvc2UtY2lyY2xlJyB3aWR0aD0nMWVtJyBoZWlnaHQ9JzFlbScgZmlsbD0nJHtlc2NhcGUoY3VycmVudENvbG9yKX0nIGFyaWEtaGlkZGVuPSd0cnVlJyUzRSAlM0NwYXRoIGQ9J001MTIgNjRDMjY0LjYgNjQgNjQgMjY0LjYgNjQgNTEyczIwMC42IDQ0OCA0NDggNDQ4IDQ0OC0yMDAuNiA0NDgtNDQ4Uzc1OS40IDY0IDUxMiA2NHptMTY1LjQgNjE4LjJsLTY2LS4zTDUxMiA1NjMuNGwtOTkuMyAxMTguNC02Ni4xLjNjLTQuNCAwLTgtMy41LTgtOCAwLTEuOS43LTMuNyAxLjktNS4ybDEzMC4xLTE1NUwzNDAuNSAzNTlhOC4zMiA4LjMyIDAgMCAxLTEuOS01LjJjMC00LjQgMy42LTggOC04bDY2LjEuM0w1MTIgNDY0LjZsOTkuMy0xMTguNCA2Ni0uM2M0LjQgMCA4IDMuNSA4IDggMCAxLjktLjcgMy43LTEuOSA1LjJMNTUzLjUgNTE0bDEzMCAxNTVjMS4yIDEuNSAxLjkgMy4zIDEuOSA1LjIgMCA0LjQtMy42IDgtOCA4eiclM0UlM0MvcGF0aCUzRSAlM0Mvc3ZnJTNFYDtcbiAgICAgICAgfVxuICAgICAgICAvLyDlrozmiJDov5vluqZcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09ICdzdWNjZXNzJyB8fCB0aGlzLnNldFByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgIGN1cnJlbnRDb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3IgfHwgJyM1MmM0MWEnXG4gICAgICAgICAgc3ZnVG9CYXNlID1cbiAgICAgICAgICAgIGBkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nNjQgNjQgODk2IDg5NicgZGF0YS1pY29uPSdjaGVjay1jaXJjbGUnIHdpZHRoPScxZW0nIGhlaWdodD0nMWVtJyBmaWxsPScke2VzY2FwZShjdXJyZW50Q29sb3IpfScgYXJpYS1oaWRkZW49J3RydWUnJTNFICUzQ3BhdGggZD0nTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0xOTMuNSAzMDEuN2wtMjEwLjYgMjkyYTMxLjggMzEuOCAwIDAgMS01MS43IDBMMzE4LjUgNDg0LjljLTMuOC01LjMgMC0xMi43IDYuNS0xMi43aDQ2LjljMTAuMiAwIDE5LjkgNC45IDI1LjkgMTMuM2w3MS4yIDk4LjggMTU3LjItMjE4YzYtOC4zIDE1LjYtMTMuMyAyNS45LTEzLjNINjk5YzYuNSAwIDEwLjMgNy40IDYuNSAxMi43eiclM0UlM0MvcGF0aCUzRSAlM0Mvc3ZnJTNFYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiR7c3ZnVG9CYXNlfVwiKTtcblx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogMWVtO1xuXHRcdFx0XHRoZWlnaHQ6IDFlbTtgO1xuICAgICAgfSxcbiAgICAgIC8vICNlbmRpZlxuICAgICAgLyoqXG4gICAgICAgKiDnirbmgIHmoLflvI9cbiAgICAgICAqL1xuICAgICAgc2V0U3RhdHVzQ2xhc3MoKSB7XG4gICAgICAgIGxldCBzdGF0dXNDbGFzcyA9IFtdO1xuICAgICAgICAvLyDlvILluLjov5vluqZcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09ICdleGNlcHRpb24nKSB7XG4gICAgICAgICAgc3RhdHVzQ2xhc3MucHVzaCgnY21kLXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24nKVxuICAgICAgICB9XG4gICAgICAgIC8vIOWujOaIkOi/m+W6plxuICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gJ3N1Y2Nlc3MnIHx8IHRoaXMuc2V0UHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgc3RhdHVzQ2xhc3MucHVzaCgnY21kLXByb2dyZXNzLXN0YXR1cy1zdWNjZXNzJylcbiAgICAgICAgfVxuICAgICAgICAvLyDmtLvliqjov5vluqbmnaFcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09ICdhY3RpdmUnKSB7XG4gICAgICAgICAgc3RhdHVzQ2xhc3MucHVzaCgnY21kLXByb2dyZXNzLXN0YXR1cy1hY3RpdmUnKVxuICAgICAgICB9XG4gICAgICAgIC8vIOaYr+WQpuaYvuekuuS/oeaBr1xuICAgICAgICBpZiAodGhpcy5zaG93SW5mbykge1xuICAgICAgICAgIHN0YXR1c0NsYXNzLnB1c2goJ2NtZC1wcm9ncmVzcy1zaG93LWluZm8nKVxuICAgICAgICB9XG4gICAgICAgIC8vIOi/m+W6puadoeexu+Wei1xuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgICBzdGF0dXNDbGFzcy5wdXNoKCdjbWQtcHJvZ3Jlc3MtbGluZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8g6L+b5bqm5ZyI44CB5Luq6KGo55uY57G75Z6LXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMudHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgICAgICBzdGF0dXNDbGFzcy5wdXNoKCdjbWQtcHJvZ3Jlc3MtY2lyY2xlJylcbiAgICAgICAgfVxuICAgICAgICBzdGF0dXNDbGFzcy5wdXNoKCdjbWQtcHJvZ3Jlc3Mtc3RhdHVzLW5vcm1hbCcpXG4gICAgICAgIHJldHVybiBzdGF0dXNDbGFzcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5jbWQtcHJvZ3Jlc3MgeyBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1saW5lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI4dXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtb3V0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc2hvdy1pbmZvIC5jbWQtcHJvZ3Jlc3Mtb3V0ZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLWlubmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItcmFkaXVzOiAyMDB1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLWNpcmNsZS10cmFpbCB7XG4gICAgc3Ryb2tlOiAjZjVmNWY1O1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1jaXJjbGUtcGF0aCB7XG4gICAgc3Ryb2tlOiAjMTg5MGZmO1xuICAgIGFuaW1hdGlvbjogYXBwZWFyIDAuM3M7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLXN1Y2Nlc3MtYmcsXG4gIC5jbWQtcHJvZ3Jlc3MtYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODIsIDAuMTcsIDEpIDBzO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3VjY2Vzcy1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLXRleHQge1xuICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICB3aWR0aDogNjB1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTZ1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3RhdHVzLWFjdGl2ZSAuY21kLXByb2dyZXNzLWJnOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHVweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY21kLXByb2dyZXNzLWFjdGl2ZSAyLjRzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IGNtZC1wcm9ncmVzcy1hY3RpdmUgMi40cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgaW5maW5pdGU7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24gLmNtZC1wcm9ncmVzcy1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MjIyZDtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3RhdHVzLWV4Y2VwdGlvbiAuY21kLXByb2dyZXNzLXRleHQge1xuICAgIGNvbG9yOiAjZjUyMjJkO1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1zdGF0dXMtZXhjZXB0aW9uIC5jbWQtcHJvZ3Jlc3MtY2lyY2xlLXBhdGgge1xuICAgIHN0cm9rZTogI2Y1MjIyZDtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmNtZC1wcm9ncmVzcy1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmNtZC1wcm9ncmVzcy10ZXh0IHtcbiAgICBjb2xvcjogIzUyYzQxYTtcbiAgfVxuXG4gIC5jbWQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmNtZC1wcm9ncmVzcy1jaXJjbGUtcGF0aCB7XG4gICAgc3Ryb2tlOiAjNTJjNDFhO1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1jaXJjbGUgLmNtZC1wcm9ncmVzcy1pbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1jaXJjbGUgLmNtZC1wcm9ncmVzcy10ZXh0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG5cbiAgLmNtZC1wcm9ncmVzcy1jaXJjbGUgLmNtZC1wcm9ncmVzcy1zdGF0dXMtZXhjZXB0aW9uIC5jbWQtcHJvZ3Jlc3MtdGV4dCB7XG4gICAgY29sb3I6ICNmNTIyMmQ7XG4gIH1cblxuICAuY21kLXByb2dyZXNzLWNpcmNsZSAuY21kLXByb2dyZXNzLXN0YXR1cy1zdWNjZXNzIC5jbWQtcHJvZ3Jlc3MtdGV4dCB7XG4gICAgY29sb3I6ICM1MmM0MWE7XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNtZC1wcm9ncmVzcy1hY3RpdmUge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIHdpZHRoOiAwO1xuICAgIH1cblxuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY21kLXByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vY21kLXByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY0NzM2OTc1Mzc4MFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cmd-progress/cmd-progress-create-component',
    {
        'components/cmd-progress/cmd-progress-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(182))
        })
    },
    [['components/cmd-progress/cmd-progress-create-component']]
]);
