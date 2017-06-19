var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',/*自动生成小圆点*/
        paginationClickable: true,/*点击小圆点轮播*/
        spaceBetween: 0,/*图片之间的间距*/
        centeredSlides: true,/*图片居中*/
        autoplay: 3000,/*轮播时间*/
        loop: true,/*循环轮播*/
        autoplayDisableOnInteraction: false/*点击后继续下一张轮播*/
    });
/*底部的按钮*/
var flag = true;
$('.men-a').click(function () {
	flag = true;
	if ($(this).prev().css('display') == 'block') {
		$('.men-ul').slideUp();
	} else{
		$('.men-ul').slideUp();
		$(this).prev().slideDown();
	}
	//点击其它地方，让菜单隐藏
	if (flag) {
		flag = false;
		$('.content').one('click',addConTentClick);
	}
	return false;
})
function addConTentClick(){
	$('.men-ul').slideUp();
	return false;
}
$('.men-ul li').hover(function(){
		$(this).css({
			"background":"#C4C4C4",
			"cursor":"pointer",
			"border-radius":"5px"
		});
	},function(){
		$(this).css("background","none");
	})
//回到顶部
$(document).scroll(function(){
	if ($('body').scrollTop() >= 200) {
		$('.Totop').show();
	} else {
		$('.Totop').hide();
	}
});
document.querySelector('.Totop').onclick = function(){
	$('body').animate({
		scrollTop:0
	},500);
};