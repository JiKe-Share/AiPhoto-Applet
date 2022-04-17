define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.tool/index',
        add_url: 'system.tool/add',
        edit_url: 'system.tool/edit',
        delete_url: 'system.tool/delete',
        modify_url: 'system.tool/modify',
    };
    var xs = [0,0,0];
   
    var Controller = {

        index: function () {
           
            ea.table.render({
                init: init,
                // toolbar: ['refresh',[ 
                       
                //     ]],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', maxWidth: 80, title: 'ID'},
                    {field: 'sort', maxWidth: 80, title: '排序', edit: 'text'},
                    {field: 'name', maxWidth: 100, title: '工具名称', edit: 'text'},
                    {field: 'title', maxWidth: 100, title: '显示标题'},
                    {field: 'img', maxWidth: 80, title: '封面', templet: ea.table.image},
                    {field: 'isvip', title: 'VIP免费/专属', maxWidth:120, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                    {field: 'zj', title: '字节端', maxWidth:120, search: 'select', selectList: {0: '隐藏', 1: '显示'}, templet: ea.table.switch},
                     {field: 'adgo', title: '广告快捷使用', maxWidth:120, search: 'select', selectList: {0: '关闭', 1: '开启'}, templet: ea.table.switch},
                   {field: 'inte', maxWidth: 40, title: '需要积分'},
                    {field: 'status', title: '是否显示', maxWidth: 90, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                   
                    {width: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
           
        },
     add: function () {
         form.on('radio(type)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	});
 ea.listen();
        },
        edit: function () {
           
           
        form.on('radio(type)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	});
    	  
            ea.listen();
        },
    };
    return Controller;
});