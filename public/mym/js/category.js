// ��ҳ���DOM�ṹ�������֮�� ִ�лص������еĴ���
$(function(){

	// ��ʼ������������
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
	});

	// ��ȡһ����������
	$.ajax({
		url: '/category/queryTopCategory',
		type: 'get',
		success: function(response){

			// ��νģ������ ���þ������������ǽ����ݺ�htmlƴ�Ӻ� ��ƴ�ӺõĽ�� ���ظ�����

			// �����ݺ�html��ƴ��
			// 1) htmlģ��ID
			// 2) ����
			// 3) ����ģ������ htmlģ���������������ƴ��
			var html = template('category-first', {result: response.rows});

			$('#links').html(html);

			// ���һ�����������ݵĻ�
			if(response.rows.length){

				// ����һ��һ���������ѡ��״̬
				$('#links').find('a').eq(0).addClass('active')

				// ��ȡ��һ��һ�������ID
				var id = response.rows[0].id;

				// ����һ������ID��ȡ��������
				getSecondCategory(id);
			}

		}
	});

	/*
	 ���һ�������ȡ�������������

	 1.һ��������ӵ���¼�
	 2.���¼��������л�ȡ��һ�������ID
	 3.���ö�������Ľӿڻ�ȡ��Ӧ������
	 4.������չʾ����Ӧ��λ����
	 5.����ӿ���û������ Ҫ��ҳ������ʾ��������

	 */

	// 1.һ��������ӵ���¼�
	$('#links').on('click', 'a', function(){

		// 2.��ȡ��ǰ�����һ�������ID
		var id = $(this).attr('data-id');

		// ����ǰ�����һ���������ѡ��״̬
		$(this).addClass('active').siblings().removeClass('active');

		// 3.���ýӿ� ��ȡ����
		getSecondCategory(id);

	});


});

// ����һ������ID��ȡ��������
function getSecondCategory(id) {

	$.ajax({
		url: '/category/querySecondCategory',
		type: 'get',
		data: {
			id: id
		},
		success: function(response){

			var html = template('category-second', response);

			$('.brand-list').html(html);

		}
	});
}
