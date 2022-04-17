define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;


    
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.inte/index',
        add_url: 'system.inte/add',
        edit_url: 'system.inte/edit',
        delete_url: 'system.inte/delete',
        modify_url: 'system.inte/modify',
    };
   
    var Controller = {

        index: function () {
           
            ea.table.render({
                init: init,
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID'},
                    {field: 'sort', maxWidth: 80, title: '排序', edit: 'text'},
                    {field: 'inte', maxWidth: 80, title: '获得积分', edit: 'text'},
                    {field: 'sinte', maxWidth: 80, title: '赠送积分', edit: 'text'},
                    {field: 'rmb', maxWidth: 80, title: '充值金额', edit: 'text'},
                   
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