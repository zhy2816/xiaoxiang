/**
 * Created by Administrator on 2018/10/27.
 */
$(function(){
    var address = null;
    $.ajax({
        url: '/address/queryAddress',
        type: 'get',
        success: function(res){
            address = res;
            var html = template("addressTpl", {result:res});
            $('#address-box').html(html);
        }
    });

    $('#address-box').on('tap','.delete-btn',function(){
        var id = this.getAttribute('data-id');
        var li = this.parentNode.parentNode;
        mui.confirm("确认要删除吗?",function(message){
            // 确认删除
            if(message.index == 1) {
                $.ajax({
                    url: '/address/deleteAddress',
                    type: 'post',
                    data: {
                        id: id
                    },
                    success: function(res){
                        // 删除成功
                        if(res.success){
                            // 重新加载当前页面
                            location.reload();
                        }
                    }
                })
            }else{
                // 取消删除
                // 关闭列表滑出效果
                mui.swipeoutClose(li);
            }
        });
    });

    $('#address-box').on('tap', '.edit-btn', function(){
        var id = this.getAttribute('data-id');
        for(var i=0;i<address.length;i++) {
            if(address[i].id == id) {
                localStorage.setItem('editAddress',JSON.stringify(address[i]));
                // 终止循环
                break;
            }
        }
        // 跳转到编辑页面
        location.href = "addAddress.html?isEdit=1";
    });
});