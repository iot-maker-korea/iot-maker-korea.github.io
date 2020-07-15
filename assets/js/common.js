/**
 * site common js
 */

var anchor = location.hash;

$(function(){
	fn_img_resize();
	fn_achorAddTarget();
});

/**
 * markdown은 achor에 옵션이 없어서 추가
 * 링크 클릭시, 외부사이트는 새창으로
 * achor to target: _blank
 */
function fn_achorAddTarget(){
	// console.log(location.origin)
	$('a').each(function(idx, data){
		if(!$(data).attr('href').includes('mailto') && !$(data).attr('href').includes(location.origin) && $(data).attr('href') != '/'){
			// console.log($(data).attr('href'))
			$(data).attr('target', '_blank');
		}
	});
}

/**
 * img resize
 * post width: 100%
 * index width: 200;
 */
function fn_img_resize(){
	$("img").each(function(idx, data){
		if(!$(data).hasClass('bd-placeholder-img')){
			$(data).attr("width", "100%");
		} else {
			//width max: 200
			//height max: 250
			var ratio = (data.width > data.height ? data.width : data.height);

			if(data.width > 200)
				data.width = 200;
			if(data.height > 250)
				data.height = 250;

			if(data.height < 250)
				$(data).css('margin-top', (250 - data.height) / 2)
		}
	});
}
