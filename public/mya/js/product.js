/**
 * Created by Administrator on 2018/10/28.
 */
$(function(){
    $.ajax({
        url: '/product/queryProductDetailList',
        type: 'get',
        data: {
            page: 1,
            pageSize: 20
        },
        success: function(res){
            var html = template("productTpl", res);
            $('#productBox').html(html);
        }
    });

    $.ajax({
        url: '/category/querySecondCategoryPaging',
        type: 'get',
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res){
            var html = template("secondTpl", res);
            $('#secondBox').html(html);
        }
    });

    var imageArray = [];
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function(e, data){
            imageArray.push(data, result);
        }
    });

    $('#addProduct').on('click', function(){
        var proName = $("[name='proName']").val().trim();
        var oldPrice = $("[name='oldPrice']").val().trim();
        var price = $("[name='price']").val().trim();
        var proDesc = $("[name='proDesc']").val().trim();
        var size = $("[name='size']").val().trim();
        var num = $("[name='num']").val().trim();
        var brandId = $("[name='brandId']").val().trim();

        $.ajax({
            url: '/product/addProduct',
            type: 'post',
            data: {
                proName: proName,
                oldPrice: oldPrice,
                price: price,
                proDesc: proDesc,
                size: size,
                num: num,
                brandId: brandId,
                statu: 1,
                pic: imageArray
            },
            success: function(res){
                if(res.success){
                    location.reload();
                } else{
                    alert(res.message);
                }
            }
        });
    });
});