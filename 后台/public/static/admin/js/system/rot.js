define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;


    
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.rot/index',
        add_url: 'system.rot/add',
        edit_url: 'system.rot/edit',
        delete_url: 'system.rot/delete',
        modify_url: 'system.rot/modify',
    };
    var xs = [0,0,0];
   
    var Controller = {

        index: function () {
           
            ea.table.render({
                init: init,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', width: 80, title: '排序', edit: 'text'},
                    {field: 'title', maxWidth: 100, title: '标题'},
                    {field: 'img', width: 80, title: '轮播图', templet: ea.table.image},
                    {field: 'type', minWidth: 120, title: '链接类型', search: 'select', selectList: {0: '本小程序switch（菜单页）', 1: '本小程序', 2: '跳转其他小程序', 3: 'H5/公众号链接',4: '跳转至客服', 5: '复制链接（提示复制至浏览器打开）', 6: '弹出图片/二维码'}},
                    {field: 'status', title: '是否显示', width: 90, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                   
                    {width: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
           
        },
        add: function () {
           
      
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