/**
 * Created by Administrator on 2018/10/26.
 */
$(function(){
    $('#modify-btn').on('click', function(){
        var originPass = $.trim($("[name='originPass']").val());
        var newPass = $("[name='newPass']").val().trim();
        var confirmNewPass = $("[name='confirmNewPass']").val().trim();
        var vCode = $("[name='vCode']").val().trim();

        if(!originPass){
            mui.toast('请输入原密码');
            return;
        }
        if(newPass != confirmNewPass){
            mui.toast('两次输入的密码不一致');
            return;
        }

        $.ajax({
            url: '/user/updatePassword',
            type: 'post',
            data: {
                oldPassword: originPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function(res){
                if(res.success){
                    mui.toast("修改密码成功");
                    setTimeout(function(){
                        location.href = "login.html";
                    }, 2000);
                }
            }
        });
    });

    $('#getCode').on('tap', function(){

        $.ajax({
            url: '/user/vCodeForUpdatePassword',
            type: 'get',
            success: function(res){
                // 将认证码显示在控制台中
                console.log(res.vCode);
            }
        })

    });
});