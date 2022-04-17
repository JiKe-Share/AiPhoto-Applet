define(["jquery", "easy-admin", "vue"], function($, ea, Vue) {
	var form = layui.form;
	var colorpicker = layui.colorpicker;
	console.log(colorpicker)
	var Controller = {
		index: function() {
			var app = new Vue({
				el: '#app',
				data: {
					upload_type: upload_type
				}
			});
			form.on("radio(upload_type)", function(data) {
				app.upload_type = this.value;
			});
			colorpicker.render({
				elem: '#color1-form',
				color: topbg1 ? topbg1 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#color1-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#color2-form',
				color: topbg2 ? topbg2 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#color2-form-input').val(color);
				}
			});
				colorpicker.render({
				elem: '#mycolor1-form',
				color: mytopbg1 ? mytopbg1 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#mycolor1-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#mycolor2-form',
				color: mytopbg2 ? mytopbg2 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#mycolor2-form-input').val(color);
				}
			});
				colorpicker.render({
				elem: '#intecolor1-form',
				color: intebg1 ? intebg1 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#intecolor1-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#intecolor2-form',
				color: intebg2 ? intebg2 : '#000000',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#intecolor2-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tipbg-form',
				color: tipbg ? tipbg : '#ff9900',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#tipbg-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tipcolor-form',
				color: tipcolor ? tipcolor : '#ffffff',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#tipcolor-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tabbarbg-form',
				color: tabbarbg ? tabbarbg : '#ffffff',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#tabbarbg-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tabbarbo-form',
				color: tabbarbo ? tabbarbo : '#ffffff',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#tabbarbo-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tabbartext-form',
				color: tabbartext ? tabbartext : '#ffffff',
				predefine: true, // 开启预定义颜色
				done: function(color) {
					$('#tabbartext-form-input').val(color);
				}
			});
			colorpicker.render({
				elem: '#tabbarstext-form',
				color: tabbarstext ? tabbarstext : '#ffffff',
				predefine: true ,// 开启预定义颜色
				done: function(color) {
					$('#tabbarstext-form-input').val(color);
				}
			});
			ea.listen();
		},
		aiapi: function() {
			ea.listen();
		},
		ad: function() {
			ea.listen();
		},
		qd: function() {
			ea.listen();
		}
	};
	return Controller;
});
