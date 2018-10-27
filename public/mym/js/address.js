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
        mui.confirm("ȷ��Ҫɾ����?",function(message){
            // ȷ��ɾ��
            if(message.index == 1) {
                $.ajax({
                    url: '/address/deleteAddress',
                    type: 'post',
                    data: {
                        id: id
                    },
                    success: function(res){
                        // ɾ���ɹ�
                        if(res.success){
                            // ���¼��ص�ǰҳ��
                            location.reload();
                        }
                    }
                })
            }else{
                // ȡ��ɾ��
                // �ر��б���Ч��
                mui.swipeoutClose(li);
            }
        });
    });

    $('#address-box').on('tap', '.edit-btn', function(){
        var id = this.getAttribute('data-id');
        for(var i=0;i<address.length;i++) {
            if(address[i].id == id) {
                localStorage.setItem('editAddress',JSON.stringify(address[i]));
                // ��ֹѭ��
                break;
            }
        }
        // ��ת���༭ҳ��
        location.href = "addAddress.html?isEdit=1";
    });
});