/**
 * Created by Administrator on 2018/10/23.
 */
$(function(){
    $('#search-btn').on('click', function(){
        // �û�����������ؼ���
        var keyword = $(this).siblings('input').val();
        // �û������˹ؼ���
        if(keyword){
            // ���û�����Ĺؼ��ִ浽������
            keyArr.unshift(keyword);
            // ���ؼ�������洢�ڱ���
            localStorage.setItem('keyArr', JSON.stringify(keyArr));
            location.href = "search-result.html?keyword=" + keyword;
        }else{
            // �û�û������ؼ���
            alert('������Ҫ��������Ʒ�ؼ���');
        }
    });
    var keyArr = [];
    if(localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('historyTpl', { result: keyArr })
        $('#history-box').html(html);
    }
    /*ʵ�������ʷ
     1.��Ԫ����ӵ���¼�
     2.���ҳ���е����� ��ձ��ش洢�е�����*/
    $('#clearBtn').on('click',function(){
        $('#history-box').html("");
        localStorage.removeItem("keyArr");
    });
})


//$(function(){
//    $('#searchBtn').on('click',function(){
//        var keyword = $('#keyword').val();
//        if(!keyword){
//            alert('������ؼ���');
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