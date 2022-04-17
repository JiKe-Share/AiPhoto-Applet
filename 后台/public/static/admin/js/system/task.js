define(["jquery", "easy-admin",  "autocomplete"], function ($, ea) {

    var iconPickerFa = layui.iconPickerFa,
        autocomplete = layui.autocomplete;
        form = layui.form;
        tableSelect = layui.tableSelect;
        element = layui.element;


    
    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.task/index',
        add_url: 'system.task/add',
        edit_url: 'system.task/edit',
        delete_url: 'system.task/delete',
        modify_url: 'system.task/modify',
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
                    {field: 'type', minWidth: 120, title: '任务类型', search: 'select', selectList: {1: '观看激励广告',2: '试玩小程序', 3: '访问h5/公众号文章',4: '邀请好友', 5: '分享给好友圈', 6: '分享到朋友'}},
                    {field: 'status', title: '是否显示', width: 90, search: 'select', selectList: {0: '禁用', 1: '启用'}, templet: ea.table.switch},
                    {width: 250, title: '操作', templet: ea.table.tool, operat: ['edit', 'delete']}
                ]],
            });

            ea.listen();
           
        },
        add: function () {
              form.on('radio(pt)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	    if(data.value == 1){
	    		     $('#dybs').show();
	    		  }
	    		else if(data.value ==2){
				    $('#dybs').hide();
				}
            });
      
         form.on('radio(type)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	    if(data.value == 2){
	    		     $('#appid').show();
	    		     $('#url').show();
	    			$('#time').show();
					$('#num').show();
					$('#inte').show();
	    		  }
	    		else if(data.value == 3){
					$('#appid').hide();
					$('#url').show();
					$('#time').show();
					$('#num').show();
					$('#inte').show();
				}
	    		else if(data.value == 4){
					$('#appid').hide();
					$('#url').hide();
					$('#time').hide();
					$('#num').hide();
					$('#inte').hide();
				}
	    		else{
	    			$('#appid').hide();
	    			$('#url').hide();
					$('#time').hide();
					$('#num').show();
					$('#inte').show();
	    		}
    });
 ea.listen();
        },
        edit: function () {
           form.on('radio(pt)', function(data){
    	 console.log(data.value); //得到radio原始DOM对象
    	    if(data.value == 1){
	    		     $('#dybs').show();
	    		  }
	    		else if(data.value ==2){
				    $('#dybs').hide();
				}
            });
        form.on('radio(type)', function(data){
    	 if(data.value == 2){
	    		     $('#appid').show();
	    		     $('#url').show();
	    			$('#time').show();
					$('#num').show();
	    		  }
	    		else if(data.value == 3){
					$('#appid').hide();
					$('#url').show();
					$('#time').show();
					$('#num').show();
				}
	    		else if(data.value == 4){
					$('#appid').hide();
					$('#url').hide();
					$('#time').hide();
					$('#num').hide();
				}
	    		else{
	    			$('#appid').hide();
	    			$('#url').hide();
					$('#time').hide();
					$('#num').show();
	    		} });
    	  
            ea.listen();
        },
    };
    return Controller;
});