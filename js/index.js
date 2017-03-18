$(function() {
	var i = 0;
	var j = 0;
	var left = document.documentElement.clientWidth / 2;
	var top = document.documentElement.clientHeight / 2;
	var width = $('body>img')[0].offsetWidth;
	var height = $('body>img')[0].offsetHeight;

	$('body>img').css({
		'top': top,
		'left': left,
		'margin-top': -height / 2,
		'margin-left': -width / 2
	});
	var timer1 = setInterval(function() {
		$('body>img').eq(i).fadeOut(800);
		$('body>img').eq(++i).fadeIn(800);

		if(i == 4) {
			clearInterval(timer1);
			timer1 = setInterval(function() {
				j++;
				j = (j == 5) ? 1 : j;
				if(j == 1 || j == 3) {
					var topbianpao = Math.random() * (top * 2 - 200);
					var leftbianpao = Math.random() * (left * 2 - 800);
				}

				$('#chun #pic1').css({
					'top': topbianpao,
					'left': leftbianpao
				}).fadeToggle(2000);
			}, 2000);
		}
	}, 1000);

	var timer2 = setInterval(function() {
		for(var i = 0; i < 8; i++) {

			$('#pao' + i).css({
				'top': Math.random() * top * 2 + 'px',
				'left': Math.random() * left * 2 + 'px'
			}).fadeToggle(800);
		}

	}, 1000);

})