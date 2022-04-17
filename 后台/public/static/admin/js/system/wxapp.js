define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;


    
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.wxapp/index',
        add_url: 'system.wxapp/add',
        edit_url: 'system.wxapp/edit',
        delete_url: 'system.wxapp/delete',
        modify_url: 'system.wxapp/modify',
    };
    var xs = [0,0,0,0];
   
    var Controller = {

        index: function () {
           
            ea.table.render({
                init: init,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', width: 80, title: '排序', edit: 'text'},
                    {field: 'title', maxWidth: 100, title: '标题'},
                    {field: 'img', width: 80, title: '图标', templet: ea.table.image},
                    {field: 'type', minWidth: 120, title: '外链类型', search: 'select', selectList: {0: '本小程序switch（菜单页）', 1: '本小程序', 2: '跳转其他小程序', 3: 'H5/公众号链接',4: '跳转至客服', 5: '复制链接（提示复制至浏览器打开）', 6: '弹出图片/二维码'}},
                    {field: 'status', title: '是否显示', width: 90, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', search: 'range'},
                    {width: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
           
        },
        add: function () {
           
      form.on('checkbox(xs)', function(data){
          console.log(data)
                if(data.elem.checked){　　　　　　//判断当前多选框是选中还是取消选中
                    xs[data.value]=parseInt(data.value)+1;
                }
                else{
                    xs[data.value]=0;
                }
　　        $('#xss').val(xs);
        })
         form.on('radio(type)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	 if(data.value==2){
    	     $('#appid').show();
    	     $('#url').show();
    	     $('#outimg').hide();
    	 }
    	 else if(data.value==4){
    	      $('#appid').hide();
    	     $('#url').hide();
    	     $('#outimg').hide();
    	 }
    	 else if(data.value==6){
    	      $('#appid').hide();
    	     $('#url').hide();
    	     $('#outimg').show();
    	 }
    	 else{
    	     $('#appid').hide();
    	     $('#url').show();
    	     $('#outimg').hide();
    	 }
    });
 ea.listen();
        },
        edit: function () {
            xs = nxs.split(',');
            layui.each(xs, function (index, item) {
                if(item!=0){
                   $('#xs'+index).prop("checked", true);
                }
				// console.log(index,item);
			})
            form.on('checkbox(xs)', function(data){
                 console.log(data)
                 if(data.elem.checked){　　　　　　//判断当前多选框是选中还是取消选中
                    xs[data.value]=parseInt(data.value)+1;
                }
                else{
                    xs[data.value]=0;
                }
　　        $('#xss').val(xs);
        })
        form.on('radio(type)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	 if(data.value==2){
    	     $('#appid').show();
    	     $('#url').show();
    	     $('#outimg').hide();
    	 }
    	 else if(data.value==4){
    	      $('#appid').hide();
    	     $('#url').hide();
    	     $('#outimg').hide();
    	 }
    	 else if(data.value==6){
    	      $('#appid').hide();
    	     $('#url').hide();
    	     $('#outimg').show();
    	 }
    	 else{
    	     $('#appid').hide();
    	     $('#url').show();
    	     $('#outimg').hide();
    	    } });
    	  
            ea.listen();
        },
    };
    return Controller;
});