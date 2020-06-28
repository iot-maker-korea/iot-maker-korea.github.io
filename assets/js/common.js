/**
 * site common js
 */

var anchor = location.hash;

$(function(){
	fn_img_resize();
	fn_scrollto();
});

/**
 * scrollto
 */
function fn_scrollto(){
	if(anchor != ''){
		// console.log(anchor)
		var top = document.querySelector('[name="' + anchor + '"]').offsetTop;
		window.scrollTo({top:top, behavior:'smooth'});
	}
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