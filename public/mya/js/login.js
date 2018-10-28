/**
 * Created by Administrator on 2018/10/28.
 */
$.ajax({
    url: '/employee/checkRootLogin',
    type: 'get',
    async: false,
    success: function(res){
        if(res.success){
            location.href = "user.html";
        }
    }
});

$(function(){
    $('#login-button').on('click', function(){
         var username = $("[name='username']").val().trim();
         var password = $("[name='password']").val().trim();

        if(!username){
            alert("请输入用户名");
            return;
        }
        if(!password){
            alert("请输入密码");
            return;
        }

        $.ajax({
            url: '/employee/employeeLogin',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            success: function(res){
                if(res.success){
                    location.href = "user.html";
                } else{
                    alert(res.message);
                }
            }
        });
    });
});