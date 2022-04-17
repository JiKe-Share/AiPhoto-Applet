define(["jquery", "easy-admin"], function ($, ea) {
console.log(ea);

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.tasklog/index',
         delete_url: 'system.tasklog/delete',
    };

    var Controller = {
        index: function () {
            var util = layui.util;
            ea.table.render({
                init: init,
                toolbar: ['refresh','delete'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID', search: false},
                    {field: 'user.username', width: 150, title: '用户', search: false},
                    {field: 'user.id', width: 80, title: '用户ID', search: false},
                    {field: 'task.title', width: 250, title: '任务', search: false},
                    {field: 'task.inte', width: 250, title: '获得积分', search: false},
                    {field: 'time', minwidth: 150, title: '操作时间', search: 'range', templet: function(d){console.log(d); return util.toDateString(d.time*1000)}},
                  {width: 250, title: '操作', templet: ea.table.tool, operat: ['delete']}
                ]],
            });
            
            ea.listen();
        },
    };

    return Controller;
});