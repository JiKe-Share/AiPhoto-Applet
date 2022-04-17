Component({
 data: {
  
 },
 attached() {
	var that = this;
	console.log(46841)
	var app = getApp().globalData;
	app.tool.ajax('tabbar',function(r){
		console.log(r);
			// let res = r.data.info;
			that.setData(r.data)
	});
 },
 
 methods: {
   switchTab(s) {
     const e = s.currentTarget.dataset
	 const app = getApp().globalData
	 const url = '/'+e.url;
	 console.log(e)
	 switch(e.type){
	 	case 0:
	 		wx.switchTab({url})
	 		this.setData({
	 		  selected: e.index
	 		})
	 		break;
	 	default:
			app.tool.gourl(e,'tabbar')
			break;
	 }
   
   },
   

 }
})