/**
 * Created by Administrator on 2018/10/26.
 */
var userInfo = null;
$.ajax({
    url: '/user/queryUserMessage',
    type: 'get',
    async: false,
    success: function(res){
        console.log(res);
        if(res.error && res.error == 400){
            location.href = "login.html";
        }
        userInfo = res;
    }
});

$(function(){
    $('#logout').on('click', function(){
        $.ajax({
            url: '/user/logout',
            type: 'get',
            success: function(res){
                if(res.success){
                    mui.toast("ÍË³öµÇÂ¼³É¹¦");
                    setTimeout(function(){
                        location.href = "index.html";
                    }, 2000);
                }
            }
        });
    });

    var html = template('userTpl', userInfo);
    $('#userInfoBox').html(html);
});