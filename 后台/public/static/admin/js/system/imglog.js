define(["jquery", "easy-admin"], function ($, ea) {


    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.imglog/index',
         delete_url: 'system.imglog/delete',
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
                    {field: 'user.username', width: 150, title: '操作用户', search: false},
                    {field: 'user.id', width: 80, title: '用户ID', search: false},
                     {field: 'toolname', width: 250, title: '所用工具', search: false},
                      {field: 'img', width:250, title: '原图片', templet: ea.table.image},
                      {field: 'img2', width: 250, title: '处理后图片', templet: ea.table.image},
                    {field: 'date', minwidth: 150, title: '创建时间', search: 'range', templet: function(d){console.log(d); return util.toDateString(d.date*1000)}},
                  {width: 250, title: '操作', templet: ea.table.tool, operat: ['delete']}
                ]],
            });

            ea.listen();
        },
    };

    return Controller;
});