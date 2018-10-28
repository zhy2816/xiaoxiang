/**
 * Created by Administrator on 2018/10/28.
 */
$(function(){
    $.ajax({
        url: '/user/queryUser',
        type: 'get',
        data: {
            page: 1,
            pageSize: 10
        },
        success: function(res){
            console.log(res);
            var html = template("userTpl", res);
            $('#user-box').html(html);
        }
    });
    
    $('#user-box').on('click', '.edit-btn', function(){
        var isDelete = parseInt($(this).data('isdelete'));
        var id = $(this).data('id');
        console.log(isDelete);
        $.ajax({
            url: '/user/updateUser',
            type: 'post',
            data: {
                id: id,
                isDelete: isDelete ? 0 : 1
            },
            success: function(res){
                if(res.success){
                    location.reload();
                }
            }
        });
    });
});