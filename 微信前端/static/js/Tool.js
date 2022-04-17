var root = require("../../siteinfo.js");
var md5 = require("static/js/md5.js");
var base64 = require("static/js/base64.js");
var open = function() {

}
export default {
	ios() {
		var t = uni.getSystemInfoSync()
		return t.system.indexOf("iOS") > -1 ? true : false;
	},
	getcolor(i) {
		var colors = ['#e54d42', '#f37b1d', '#fbbd08', '#8dc63f', '#39b54a', '#1cbbb4', '#0081ff', '#6739b6', '#9c26b0',
			'#e03997', '#a5673f', '#8799a3', '#aaaaaa', '#333333', '#ffffff'
		];
		return colors[i];
	},
	getcolors(i) {
		if (i >= 5) {
			i %= 5;
		}
		var css = ['bg-gradual-red', 'bg-gradual-orange', 'bg-gradual-green', 'bg-gradual-purple', 'bg-gradual-pink',
			'bg-gradual-blue'
		];
		return css[i];
	},
	isregister(s,t = open) {
		var that = this;
		console.log(that)
		uni.showLoading({
			title: '请稍后',
			// #ifdef MP-WEIXIN
			mask: true
			// #endif
		})
		this.register(function(e) {
			uni.hideLoading()
			s.login = uni.getStorageSync('user');
			s.myinte = uni.getStorageSync('inte');
			t();
		}, function(e) {
			uni.hideLoading()
			t()
		})
	},
	getconfig(e, s = open) {
		this.ajax('config', function(r) {
			var res = r.data;
			// console.log(res)
			if (e.duration) {
				e.duration = res.duration
			}
			e.config = res;
			uni.setNavigationBarColor({
				frontColor: res.front_color, // 必写项
				backgroundColor: res.topbg1, // 必写项
			})
			s();
			if (e.loading) {
				e.loading = false
			}

		});
	},
	getdata(name, e, s = open) {
		this.ajax(name, function(r) {
			var res = r.data;
			console.log(res)
			e.wxapp1 = res.wxapp1;
			e.setData(res)
			s()
		});
	},
	getRect(selector) {
		return new Promise((resolve) => {
			let view = uni.createSelectorQuery().select(selector);
			view.fields({
				size: true,
				rect: true,
				scrollOffset: true
			}, (res) => {
				resolve(res);
			}).exec();
		})
	},
	getSign(t) {
		var n = "";
		for (var e in t) "sign" != e && (n += t[e]);
		console.log(this.sign)
		return console.log("getSign", n), md5.hex_md5(this.utf8(n + 'qushuiyin8777!@#'));
	},
	utf8(t) {
		for (var n = "", e = 0; e < t.length; e++) {
			var a = t.charCodeAt(e);
			a < 128 ? n += String.fromCharCode(a) : a < 2048 ? (n += String.fromCharCode(a >> 6 | 192),
				n += String.fromCharCode(63 & a | 128)) : a < 65536 ? (n += String.fromCharCode(a >> 12 | 224),
				n += String.fromCharCode(a >> 6 & 63 | 128), n += String.fromCharCode(63 & a | 128)) : (n += String
				.fromCharCode(a >> 18 | 240),
				n += String.fromCharCode(a >> 12 & 63 | 128), n += String.fromCharCode(a >> 6 & 63 | 128),
				n += String.fromCharCode(63 & a | 128));
		}
		return n;
	},
	getRpx(num) {
		var winWidth = uni.getSystemInfoSync().windowWidth;
		return num * (750 / winWidth);
	},
	getBarHeight(num = 0) {
		return this.getRpx(uni.getSystemInfoSync().statusBarHeight + num)
	},
	//获取胶囊高度.indexOf('iPhone X')
	getjiaonang(s) {
		var that = this;
		uni.getSystemInfo({
			success: function(res) {
				// console.log(res);
				var menurect = wx.getMenuButtonBoundingClientRect();
				menurect.right = res.screenWidth - menurect.right;
				menurect.rpx = that.getRpx();
				let totalTopHeight = 68
				if (res.model.indexOf('iPhone X') !== -1 || res.model.indexOf('iPhone12') !== -1) {
					totalTopHeight = 88
				} else if (res.model.indexOf('iPhone') !== -1) {
					totalTopHeight = 64
				}
				s(res.statusBarHeight + totalTopHeight)
			}
		})
	},
	gettime() {
		return Date.parse(new Date()) / 1000;
	},
	getjianh() {
		let m = uni.getSystemInfoSync().model;
		if (m.indexOf('iPhone X') !== -1 || m.indexOf('iPhone12') !== -1) {
			return 70;
		} else {
			return 30;
		}
	},
	back() {
		const pages = getCurrentPages();
		if (pages.length === 2) {
			uni.navigateBack({
				delta: 1
			});
		} else if (pages.length === 1) {
			uni.switchTab({
				url: '/pages/index/index',
			})
		} else {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	goindex() {
		uni.switchTab({
			url: '/pages/index/index'
		})
	},
	toast(a = '', b = 'none', c = 1500) {
		uni.showToast({
			title: a,
			icon: b,
			duration: c
		})
	},

	/**
		构造请求地址, 
		@params action 微擎系统中的controller, action, do，格式为 'wxapp/home/navs'
	*/
	url(action) {
		var url = root.siteroot;
		if (action) {
			var action = action.split('/');
			if (action[0]) {
				url += action[0];
			}
			if (action[1]) {
				url += '/' + action[1];
			}
			if (action[2]) {
				url += '/' + action[2];
			}
		}
		return url;
	},
	request(o) {
		var url = o.url;
		if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
			url = this.url(url);
		}
		if (!url) {
			return false;
		}
		// console.log(o)
		uni.request({
			'method': o.method || "get",
			'url': url,
			'data': o.data,
			'header': {
				'content-type': 'application/x-www-form-urlencoded'
			},
			'cachetime': 0,
			'showLoading': !1,
			'success': function(e) {
				o.success(e)
			},
			fail: function() {}
		});
	},
	ajax(name, s, data = {}, m = 'GET') {
		let that = this,
			url;
		if (uni.getStorageSync('token')) {
			data.token = uni.getStorageSync('token');
		}
		// #ifdef MP-WEIXIN
		url = "app/wxapp/" + name;
		// #endif
		// #ifdef MP-TOUTIAO
		url = "app/ttapp/" + name;
		// #endif

		that.request({
			method: m,
			url: url,
			data: data,
			success: (e) => {
				let t = e.data;
				// #ifdef MP-WEIXIN
				if (199 == t.code) {
					that.login(name, s, data)
				} else {
					s(t);
				}
				// #endif
				// #ifdef MP-TOUTIAO
				if (199 == t.code) {
					that.login(name, s, data)
				} else {
					s(t);
				}
				// #endif
			},
			fail: (res) => {
				console.log(res)
			}
		})
	},
	gotask(e) {
		var that = this;
		if (e.config.task == 1) {
			that.gopage('/pages/my/task')
		} else {
			if (e.config.pay != 1) {
				that.showimg(e.config.wxkefu_image);
			} else {
				if (e.isios && e.config.iospay != 1) {
					that.showimg(e.config.wxkefu_image);
				} else {
					that.gopage('/pages/my/pay')
				}
			}
		}
	},
	govip(e) {
		var that = this,
			url;
		console.log(e.login)
		if (e.config.pay != 1) {
			if (e.config.task == 1) {
				url = '/pages/my/task'
			} else {
				that.showimg(e.config.wxkefu_image);
			}
		} else {
			if (e.isios && e.config.iospay != 1) {
				if (e.config.task == 1) {
					url = '/pages/my/task'
				} else {
					that.showimg(e.config.wxkefu_image);
				}
			} else {
				url = '/pages/my/pay'
			}
		}
		e.gourl = url;
		if (!this.login) {
			e.$refs.login.show();
		} else {
			e.$Tool.gopage(e.gourl)
		}
	},
	isvip(self, s = open, d = open) {
		let that = this;
		this.ajax('getviptime', function(e) {
			var viptime = e.data;
			uni.setStorageSync("vip", viptime)
			console.log(viptime)
			if (viptime >= 4000000000) {
				self.myvip = '永久';
			} else {
				self.myvip = that.timetodate(viptime)
			}
			if (that.gettime() < viptime) {
				self.isvip = true;
				s();
			} else {
				self.isvip = false;
				d()
			}
		})
	},
	gettime() {
		return Date.parse(new Date()) / 1000;
	},
	showkefu(wx = 'code0223') {
		uni.showModal({
			// #ifdef MP-WEIXIN
			content: "未知错误，请联系作者微信:" + wx + "进行解决",
			// #endif
			// #ifdef MP-TOUTIAO
			content: "未知错误，请联系作者VX:" + wx + "进行解决",
			// #endif

			confirmText: "复制",
			success: function(a) {
				if (a.confirm) {
					uni.setClipboardData({
						//准备复制的数据
						data: wx,
						success: function(res) {
							uni.showToast({
								title: '微信号已复制',
							});
						}

					})
				}
			}
		})
	},
	jcvip(inte, s, f) {
		var that = this;
		that.isvip(function() {
			s(0);
		}, function() {
			that.showinte(inte, function(e) {
				s(inte);
			}, function() {
				f();
			})
		});
	},
	myinte(s) {
		this.ajax('myinte', function(e) {
			uni.setStorageSync('inte', e.data)
			s(e.data);
		});
	},

	intes(o, inte, self, s = open, a = open) {
		this.ajax('setinte', function(e) {
			console.log(e)
			if (e.code == 100) {
				uni.setStorageSync('inte', e.data)
				self.setData({
					myinte: e.data
				})
				s(e.data);
			} else {
				a(e.data);
			}
		}, {
			o: o,
			inte: inte,
		});
	},
	addvip(day, self, s = open, a = open) {
		var that = this;
		this.ajax('addvip', function(e) {
			console.log(e)
			if (e.code == 100) {
				if (e.data >= 4000000000) {
					self.myvip = '永久';
				} else {
					self.myvip = that.timetodate(e.data)
				}
				uni.setStorageSync('vip', e.data)
				if (that.gettime() < e.data) {
					self.isvip = true;
					s(e.data);
				} else {
					self.isvip = false;
					s(e.data);
				}
			} else {
				a(e.data);
			}
		}, {
			day: day,
		});
	},
	showinte(inte, s, a) {
		this.ajax('showinte', function(e) {
			// console.log(e)
			if (e.data.code == 1) {
				uni.setStorageSync('inte', e.data.msg)
				s(e.data.msg);
			} else {
				a(e.data.msg);
			}
		}, {
			inte: inte,
		});
	},
	// 判断用户是否注册
	register(s, k) {
		var that = this;
		that.ajax('isregister', function(res) {
			console.log(res)
			if (res.code == 100) {
				let user = res.data;
				let id1 = user.openid.substring(0, 5);
				let id2 = user.openid.substring(user.openid.length - 4, user.openid.length);
				user.openid = id1 + '****' + id2;
				let viptime = that.timetodate(user.viptime)
				console.log(viptime)
				uni.setStorageSync('user', user)
				uni.setStorageSync('inte', user.inte)
				uni.setStorageSync('vip', user.viptime)
				s()
			} else {
				k()
			}
		})
	},
	// 静默登录
	login(name, s, data) {
		let that = this;
		uni.login({
			success: function(l) {

				that.ajax('login', function(e) {
					// console.log(name,e)
					var f = e.data;
					uni.setStorageSync("token", f.token)
					uni.setStorageSync("uid", f.uid)
					uni.setStorageSync("viptime", f.viptime)
					uni.setStorageSync("inte", f.inte)
					// if (data) data.token = f.token;
					if (name) {
						that.ajax(name, s, data);
					}
				}, {
					code: l.code,
					// #ifdef MP-TOUTIAO
					anonymousCode: l.anonymousCode,
					// #endif
				})


			},
			fail: function(e) {
				console.log(e)
			}
		});
	},
	// 外链跳转
	gourl(e, t = 'wxapp') {
		console.log(e)
		switch (e.type) {
			case 0:
				uni.switchTab({
					url: '/' + e.url
				})
				break;
			case 1:
				uni.navigateTo({
					url: '/' + e.url
				})
				break;
			case 2:
				console.log(e)
				uni.navigateToMiniProgram({
					appId: e.appid,
					path: e.url,
					success(res) {
						// console.log('你正在打开'+ e.appid)
					}
				})
				break;
			case 3:
				// console.log(e)
				uni.navigateTo({
					url: '/pages/weblist/weblist?id=' + e.id + '&t=' + t
				})
				break;
			case 5:
				uni.setClipboardData({
					data: e.url,
					success: function() {
						uni.showToast({
							title: '链接复制成功，粘贴到浏览器打开~',
							icon: 'none'
						})
					}
				});
				break;
			case 6:
				// 预览图片
				uni.previewImage({
					current: e.outimg, // 当前显示图片的http链接
					urls: [e.outimg], // 需要预览的图片http链接列表
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
				break;
			default:
		}
	},
	// 跳转至普通页面
	gopage(url) {
		uni.navigateTo({
			url: url
		})
	},
	// 预览图片
	showimg(img) {
		uni.previewImage({
			urls: [img],
			current: 0
		})
	},
	// 验证是否新用户，用于邀请奖励
	invite(o, uid) {
		var that = this
		uni.login({
			success: function(l) {
				uni.request({
					method: "get",
					url: o + "app/wxapp/verify",
					data: {
						code: l.code,
					},
					success: function(e) {
						console.log(e.data.data)
						uni.request({
							method: "get",
							url: o + "app/wxapp/invite",
							data: {
								uid: uid,
								o: e.data.data,
							},
							success: function(r) {
								console.log(r)
								if (r.data.code == 100) {
									that.toast('好友已获得奖励', 'none', 1000);
								} else if (r.data.code == 110) {
									that.toast(r.data.data, 'none', 1000);
								}
							}
						})
					}
				});
			},
			fail: function() {}
		});



	},
	// 获取当前年月日格式 20220101
	getdate() {
		var d = new Date();
		return '' + d.getFullYear() + d.getMonth() + d.getDate()
	},
	// 按元素数分割数组为多个数组
	splitArr(data, senArrLen) {
		//处理成len个一组的数据
		let data_len = data.length;
		let arrOuter_len = data_len % senArrLen === 0 ? data_len / senArrLen : parseInt((data_len / senArrLen) + '') +
			1;
		let arrSec_len = data_len > senArrLen ? senArrLen : data_len; //内层数组的长度
		let arrOuter = new Array(arrOuter_len); //最外层数组
		let arrOuter_index = 0; //外层数组的子元素下标
		// console.log(data_len % len);
		for (let i = 0; i < data_len; i++) {
			if (i % senArrLen === 0) {
				arrOuter_index++;
				let len = arrSec_len * arrOuter_index;
				//将内层数组的长度最小取决于数据长度对len取余，平时最内层由下面赋值决定
				arrOuter[arrOuter_index - 1] = new Array(data_len % senArrLen);
				if (arrOuter_index === arrOuter_len) //最后一组
					data_len % senArrLen === 0 ?
					len = data_len % senArrLen + senArrLen * arrOuter_index :
					len = data_len % senArrLen + senArrLen * (arrOuter_index - 1);
				let arrSec_index = 0; //第二层数组的索引
				for (let k = i; k < len; k++) { //第一层数组的开始取决于第二层数组长度*当前第一层的索引
					arrOuter[arrOuter_index - 1][arrSec_index] = data[k];
					arrSec_index++;
				}
			}
		}
		console.log(arrOuter);
		return arrOuter;
	},
	timetodate(timestamp) {
		var date = new Date(timestamp * 1000);
		let Y = date.getFullYear() + '-';
		let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
		let D = date.getDate() + ' ';
		let h = date.getHours() + ':';
		let m = date.getMinutes() + ':';
		let s = date.getSeconds();
		return Y + M + D;
	},
	duration(r) {
		var t = 0,
			e = 0;
		(r = Math.ceil(r)) > 60 && (t = parseInt(r / 60), r = parseInt(r % 60), t > 60 && (e = parseInt(t / 60),
			t = parseInt(t % 60)));
		var n = "";
		return n += parseInt(r) + "秒", 0 != t && (n = parseInt(t) + "分" + n), e > 0 && (n = parseInt(e) + "小时" + n),
			n;
	},
	kb(r) {
		if (r / 1024 >= 1024) return (t = (r - r % 1024) / 1024 / 1024).toFixed(2) + "M";
		var t = (r - r % 1024) / 1024;
		return t.toFixed(2) + "KB";
	},
	gvip(day, s) {
		this.ajax('gvip', function(r) {
			console.log(r.data.msg)
			s(r.data.msg)
		}, {
			day: day
		});
	},
	saveimg(url, err = '', ts = 0, back = '') {
		let tpjc, auth;
		// #ifdef MP-WEIXIN
		tpjc = url.indexOf("wxfile");
		// #endif
		// #ifdef MP-TOUTIAO
		tpjc = url.indexOf("ttfile");
		// #endif
		if (tpjc != -1) {
			uni.getSetting({
				success(res) {
					uni.hideToast();
					// #ifdef MP-WEIXIN
					auth = res.authSetting['scope.writePhotosAlbum'];
					// #endif
					// #ifdef MP-TOUTIAO
					auth = res.authSetting['scope.album'];
					// #endif
					if (!auth) {
						uni.authorize({
							// #ifdef MP-WEIXIN
							scope: "scope.writePhotosAlbum",
							// #endif
							// #ifdef MP-TOUTIAO
							scope: "scope.album",
							// #endif
							success() {
								uni.saveImageToPhotosAlbum({
									filePath: url,
									success: function(data) {
										ts == 0 ? wx.showToast({
											title: '保存成功',
											icon: 'success',
											duration: 2000
										}) : '';
										if (back) {
											back();
										}
									}
								})
							},
							fail: function(err) {
								if (err.errmsg = 'authorize:fail auth deny') {
									uni.showModal({
										title: '提示',
										content: '您拒绝了授权保存图片，需要重新授权',
										confirmText: '这就去',
										cancelText: '知道了',
										success(res) {
											if (res.confirm) {
												uni.openSetting({
													success(res) {
														console.log(res.authSetting)

													}
												})
											} else if (res.cancel) {
												console.log('用户点击取消')
											}
										}
									})
								};
							}
						})
					} else { //图片保存到本地
						uni.saveImageToPhotosAlbum({
							filePath: url,
							success: function(data) {
								ts == 0 ? uni.showToast({
									title: '保存成功',
									icon: 'success',
									duration: 2000
								}) : '';
								if (back) {
									back();
								}
							}

						})
					}
				}
			})
		} else if (url.indexOf("http") != -1) {
			console.log(url)
			uni.authorize({
				// #ifdef MP-WEIXIN
				scope: "scope.writePhotosAlbum",
				// #endif
				// #ifdef MP-TOUTIAO
				scope: "scope.album",
				// #endif
				success: function() {
					uni.downloadFile({
						url: url,
						success: function(ress) {
							uni.hideToast();
							//图片保存到本地
							uni.saveImageToPhotosAlbum({
								filePath: ress.tempFilePath,
								success: function(data) {
									ts == 0 ? uni.showToast({
										title: '保存成功',
										icon: 'success',
										duration: 2000
									}) : '';
									if (back) {
										back();
									}
								}
							})
						},
						fail: function(err) {
							console.log(err.errMsg)
							err();
							uni.hideToast();
							uni.showToast({
								title: '下载失败',
							})
						}
					})
				},
				fail: function(e) {
					uni.showModal({
						title: '提示',
						content: '您拒绝了授权保存图片，需要重新授权',
						confirmText: '这就去',
						cancelText: '知道了',
						success(res) {
							if (res.confirm) {
								uni.openSetting({
									success(res) {
										console.log(res.authSetting)
									}
								})
							} else if (res.cancel) {
								console.log('用户点击取消')
							}
						}
					})
				},
			})
		} else {
			uni.saveImageToPhotosAlbum({
				filePath: url,
				success: function(data) {
					ts == 0 ? uni.showToast({
						title: '保存成功',
						icon: 'success',
						duration: 2000
					}) : '';
					if (back) {
						back();
					}
				}

			})
		}
	},
	savevideo(url, self, ts = 0, back = '') {
		let that = this;
		if (self.downvideo) {
			uni.showToast({
				icon: "loading",
				title: "正在保存,请稍后..."
			});
			return false;
		}
		console.log(url)
		self.percent = 0;
		uni.showLoading({
			title: "正在保存"
		});
		uni.authorize({
			// #ifdef MP-WEIXIN
			scope: "scope.writePhotosAlbum",
			// #endif
			// #ifdef MP-TOUTIAO
			scope: "scope.album",
			// #endif
			success: function() {
				self.downvideo = uni.downloadFile({
					url: url, //文件路径
					success: (res) => {
						console.log(res)
						const {
							statusCode,
							tempFilePath
						} = res
						self.percent = 100;
						self.downvideo = false;
						uni.saveVideoToPhotosAlbum({
							filePath: tempFilePath,
							success: function(errMsg) {
								console.log(errMsg)
								uni.showToast({
									icon: "success",
									title: "已保存"
								});
							},
							fail: (errMsg) => {
								console.log(errMsg)
								uni.showToast({
									icon: "success",
									title: "未保存"
								});
							},
							complete: (errMsg) => {
								console.log(errMsg)
							}
						});
					},
					fail: (errMsg) => {
						console.log(errMsg)
						uni.showModal({
							content: "保存失败，可复制链接到浏览器下载",
							confirmText: "复制",
							success: function(a) {
								if (a.confirm) {
									uni.setClipboardData({
										//准备复制的数据
										data: url,
										success: function(res) {
											uni.showToast({
												title: '链接已复制',
											});
										}
									})
								}
							}
						})
					},
				}).onProgressUpdate(function(o) {
					self.percent = o.progress, 100 == o.progress && uni.showToast({
						icon: "success",
						title: "文件已保存"
					});
				});
			},
			fail: function(e) {
				console.log(e)
				uni.hideLoading();
				uni.showModal({
					title: '提示',
					content: '您拒绝了授权相册功能，需要重新授权',
					confirmText: '这就去',
					cancelText: '知道了',
					success(res) {
						if (res.confirm) {
							uni.openSetting({
								success(res) {
									console.log(res.authSetting)
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			complete: function(e) {
				console.log(e)
			}
		})
	},
	imgcheck(value, success = 0, fail = 0) {
		uni.showLoading({
			title: '请稍后...',
		})
		var url;
		// #ifdef MP-WEIXIN
		url = this.url('app/wxapp/imgcheck');
		// #endif
		// #ifdef MP-TOUTIAO
		url = this.url('app/ttapp/imgcheck');
		// #endif

		console.log(value)
		uni.uploadFile({
			url: url, //仅为示例，非真实的接口地址
			filePath: value,
			name: 'file',
			formData: {
				'token': uni.getStorageSync('token')
			},
			success(res) {
				console.log(res);
				//#ifdef MP-TOUTIAO
				console.log(48641614616)
				console.log(res.data)
				var obj = res.data;
				if (obj.indexOf("true") != -1) {
					uni.showToast({
						title: '您上传的图片包含违法/违规内容，请重新上传',
						icon: 'none',
						duration: 1500
					})
					setTimeout(function(){
						fail();
					},1000)
					

				} else {
					console.log('内容监测通过');
					success();
				}
				//#endif
				// #ifdef MP-WEIXIN
				var obj = JSON.parse(JSON.parse(res.data).data);
				if (obj.errcode == 87014) {
					uni.showToast({
						title: '您上传的图片包含违法/违规内容，请重新上传',
						icon: 'none',
						duration: 1500
					})
					fail();
				
				} else {
					console.log('内容监测通过');
					success();
				
				}
				// #endif
				uni.hideLoading()
				
				
			},
			fail(e) {
				console.log(e)
			}
		})
	},
	imglog(imgpath, img2path, data, success = 0, fail = 0) {

		var url = this.url('app/wxapp/imglog');
		data.token = uni.getStorageSync('token');
		console.log(url)
		uni.uploadFile({
			url: url, //仅为示例，非真实的接口地址
			filePath: imgpath,
			name: 'img',
			formData: data,
			success(res) {
				var obj = JSON.parse(res.data);
				console.log(obj);
				if (obj.code == 100) {
					data.img = obj.data;
					uni.uploadFile({
						url: url, //仅为示例，非真实的接口地址
						filePath: img2path,
						name: 'img2',
						formData: data,
						success(res) {
							var obj = JSON.parse(res.data);
							console.log(obj);
							if (obj.code == 100) {
								success(obj.data);
							} else {
								fail()
							}
						},
						fail(e) {
							fail(e)
						}
					})
				}
			},
			fail(e) {
				fail(e)
			}
		})
	},
	chuliimg(imgpath, data, success, fail) {
		var url = this.url('app/wxapp/chuliimg');
		data.token = uni.getStorageSync('token');
		uni.uploadFile({
			url: url, //仅为示例，非真实的接口地址
			filePath: imgpath,
			name: 'img',
			formData: data,
			success(res) {
				console.log(res);
				console.log(res.data);
				var obj = JSON.parse(res.data);

				if (obj.code == 100) {
					success(obj.data);
				} else {
					fail(obj.data)
				}
			},
			fail(e) {
				fail(e)
			}
		})
	},
	getImgSize(str) {

		var strLength = str.length;
		var fileLength = parseInt(strLength - (strLength / 8) * 2);
		// 由字节转换为KB
		var size = "";
		size = (fileLength / 1024).toFixed(2);
		return parseInt(size);

	},
	pathToBase64(path, s, f) {
		base64.pathToBase64(path)
			.then(base => {
				// console.log(base)
				s(base)
			})
			.catch(error => {
				f(error)
			})
	},
	base64ToPath(base, s, f) {
		base64.base64ToPath(base)
			.then(path => {
				console.log(path)
				s(path)
			})
			.catch(error => {
				console.log(error)
				f(error)
			})
	}



}
