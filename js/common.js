// JavaScript Document
(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/*banner 插件*/
$(function(){ 
    $('.bxslider').bxSlider({
			 auto: true
		}); 
});
/*banner 插件结束*/

/*畅销推荐部分tap start*/
$(function(){
		var iFontSize =0;
		setTimeout(function(){
				iFontSize = parseFloat($('html').css('font-size'));
			},1000);
		var iStartX = 0,iEndX = 0; 
		var iNow = 0;
		var iScroll = 0;
		var iScrollStart = 0;
		var iPosition = 0;
		var dis = 0;
		var oTap = $('.best_selling .info')[0];
		var oMovepanel = $('.best_selling .info .wrap_panel')[0];
		var oTap_selected = $('.best_selling .tap_selected');
		oTap.addEventListener('touchstart',function(ev){
				iStartX = iScrollStart = ev.changedTouches[0].pageX;
			},false);
		oTap.addEventListener('touchmove',function(ev){
				dis = ev.changedTouches[0].pageX - iScrollStart;
				if((iPosition+dis)<=0 && (iPosition+dis)>=-22.5*iFontSize){
						oMovepanel.style.transform = "translateX("+(iPosition+dis)+"px)";
						console.log(dis);
					}
				
			},false);
		oTap.addEventListener('touchend',function(ev){
				iPosition += dis;
				iEndX = ev.changedTouches[0].pageX;
				if((iEndX-iStartX) > 20){
						if(iNow>0){
								iNow--;
								move(iNow);
							}
						
					}else if((iEndX-iStartX)<-20){
						if(iNow<3){
								iNow++;
								move(iNow);
							}
							
						}
			},false);
			function move(iNow){
					oMovepanel.style.transition = "0.5s";
					oMovepanel.style.transform = "translateX("+(-iNow*7.5*iFontSize)+"px)";
					iPosition = -iNow*7.5*iFontSize;
					$('.tap_selected span').removeClass('active').eq(iNow).addClass('active')
				}
	});	
/*$(function(){
		
		var x_start, x_end, iLeft;
		var oTap = $('.best_selling .info')[0];
		var oMovepanel = $('.best_selling .info .wrap_panel');
		var oTap_selected = $('.best_selling .tap_selected');
		
		oTap.addEventListener('touchstart',function(ev){
				var touch = ev.changedTouches[0];
				x_start = touch.pageX;
				iLeft = parseInt(oMovepanel.css('left'));
				oTap.addEventListener('touchmove',function(ev){
						ev.preventDefault();
						var moveValu = ev.changedTouches[0].pageX - x_start;
						oMovepanel[0].style.left = iLeft + moveValu + "px";
					},false);
				
				//console.log(); 
			},false);	
		oTap.addEventListener('touchend',function(ev){
						var font_size = $('html').css('font-size');
						x_end = ev.changedTouches[0].pageX;
						var abs_val = Math.abs(x_end-x_start);
						if(abs_val > 50){
								if(x_end - x_start < 0){
										if(iLeft <= -22.5*parseInt(font_size)+30){
												oMovepanel.animate({left:0},500,function(){
													iLeft = parseInt(oMovepanel.css('left'));
												});
												
											}else{
													oMovepanel.animate({left: iLeft - 7.5*parseInt(font_size)},500,function(){
														iLeft = parseInt(oMovepanel.css('left'));
														
													});
												}
									}else{
											if(iLeft < 7.5*parseInt(font_size)){
													oMovepanel.animate({left: 0},500,function(){
														iLeft = parseInt(oMovepanel.css('left'));
													});
												}else{
														oMovepanel.animate({left: iLeft + 7.5*parseInt(font_size)},500,function(){
															iLeft = parseInt(oMovepanel.css('left'));
														});
													}
										}
										
							}else{
									oMovepanel.css("left",iLeft);
								}
					},false);
	});*/
/*畅销推荐部分tap end*/