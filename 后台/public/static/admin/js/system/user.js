define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.user/index',
        add_url: 'system.user/add',
        edit_url: 'system.user/edit',
        delete_url: 'system.user/delete',
        modify_url: 'system.user/modify',
        export_url:'system.user/export',
    };
	var laydate = layui.laydate;
    var Controller = {
        
        index: function () {
            var util = layui.util;
            ea.table.render({
                init: init,
                toolbar: ['refresh'],
                cols: [[
                    {type: "checkbox"},
                       {field: 'id', width: 80, title: 'ID', search: false},
                       {field: 'openid', width:150, title: 'openid', search: false},
                    {field: 'username', width: 150, title: '昵称', search: false},
                    {field: 'pt',width: 180, title: '所属平台', search: true},
                    {field: 'userimg', width: 80, title: '头像',templet: ea.table.image},
                     {field: 'viptime', width: 180, title: 'VIP到期时间',templet: function(d){console.log(d); return util.toDateString(d.viptime*1000)}},
                     
                    {field: 'addtime',width: 180, title: '上次使用时间', search: 'range', templet: function(d){console.log(d); return util.toDateString(d.logintime*1000)}},
                    {field: 'inte',width: 180, title: '积分', edit: 'text'},
                    {minwidth: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
        },
        
        edit: function () {
            laydate.render({
            elem: '#viptime',type: 'datetime'
        });
            ea.listen();
        }
    };
    return Controller;
});