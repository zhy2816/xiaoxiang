/**
 * Created by Administrator on 2018/10/23.
 */
$(function(){
    $('#search-btn').on('click', function(){
        // 用户输入的搜索关键字
        var keyword = $(this).siblings('input').val();
        // 用户输入了关键字
        if(keyword){
            // 将用户输入的关键字存到数组中
            keyArr.unshift(keyword);
            // 将关键字数组存储在本地
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            location.href = "search-result.html?keyword=" + keyword;
        }else{
            // 用户没有输入关键字
            alert('请输入要搜索的商品关键字');
        }
    });
    var keyArr = [];
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('historyTpl', { result: keyArr })
        $('#history-box').html(html);
    }
    /*实现清空历史
     1.给元素添加点击事件
     2.清空页面中的数据 清空本地存储中的数据*/
    $('#clearBtn').on('click',function(){
        $('#history-box').html("");
        localStorage.removeItem("keyArr");
    });
})


//$(function(){
//    $('#searchBtn').on('click',function(){
//        var keyword = $('#keyword').val();
//        if(!keyword){
//            alert('请输入关键字');
//            return;
//        }
//        if(localStorage.getItem('keywords')){
//            var keywords = JSON.parse(localStorage.getItem('keywords'));
//            keywords.push(keyword);
//            localStorage.setItem('keywords',JSON.stringify(keywords));
//        }else{
//            localStorage.setItem('keywords',JSON.stringify([keyword]));
//        }
//        location.href = "search-list.html?key="+keyword;
//    });
//    if(localStorage.getItem('keywords')){
//        var keywords = JSON.parse(localStorage.getItem('keywords'));
//        $('#historySearch').html(template('historySearchTpl',{data:keywords}));
//    }
//    $('#clearHistory').on('tap',function(){
//        localStorage.removeItem('keywords');
//        $('#historySearch').html('');
//    })
//});