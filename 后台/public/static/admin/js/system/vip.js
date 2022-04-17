define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;


    
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.vip/index',
        add_url: 'system.vip/add',
        edit_url: 'system.vip/edit',
        delete_url: 'system.vip/delete',
        modify_url: 'system.vip/modify',
    };
   
    var Controller = {

        index: function () {
           
            ea.table.render({
                init: init,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', maxWidth: 80, title: '排序', edit: 'text'},
                    {field: 'title', maxWidth: 80, title: '标题'},
                    {field: 'day', maxWidth: 80, title: '天数', edit: 'text'},
                    {field: 'sday', maxWidth: 80, title: '赠送天数', edit: 'text'},
                    {field: 'rmb', maxWidth: 80, title: '所需金额', edit: 'text'},
                   
                    {width: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
           
        },
        add: function () {
     
 ea.listen();
        },
        edit: function () {
          
    	  
            ea.listen();
        },
    };
    return Controller;
});