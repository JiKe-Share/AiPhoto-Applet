define(["jquery", "easy-admin"], function ($, ea) {


    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.paylog/index',
         delete_url: 'system.paylog/delete',
    };

    var Controller = {
        index: function () {
            var util = layui.util;
            ea.table.render({
                init: init,
                toolbar: ['refresh','delete'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', minwidth: 50, title: 'ID', search: false},
                    {field: 'user.username', minwidth: 80, title: '用户', search: false,templet: function(d){console.log(d); return d.user.username+'（ID：'+d.user.id+')'}},
                    {field: 'order', minwidth: 150, title: '订单号', search: false},
                    {field: 'type', minwidth: 80, title: '类型', search: false},
                     {field: 'rmb', minwidth: 80, title: '金额', search: false},
                      {field: 'inte', minwidth:80, title: '奖励', search: false},
                      {field: 'status', minwidth: 80, title: '状态', search: false},
                    {field: 'time', minwidth: 150, title: '创建时间', search: 'range', templet: function(d){console.log(d); return util.toDateString(d.time*1000)}},
                  {width: 250, title: '操作', templet: ea.table.tool, operat: ['delete']}
                ]],
            });

            ea.listen();
        },
    };

    return Controller;
});