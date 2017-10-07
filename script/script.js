$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.top-bar').addClass('fixed');
    } else {
        $('.top-bar').removeClass('fixed');
    }
});

$(".service-item").eq(0).on("click",function(){
	$(".hidden-service-block").eq(0).fadeIn(500);
});
$(".service-item").eq(1).on("click",function(){
	$(".hidden-service-block").eq(1).fadeIn(500);
});
$(".service-item").eq(2).on("click",function(){
	$(".hidden-service-block").eq(2).fadeIn(500);
});
$(".service-item").eq(3).on("click",function(){
	$(".hidden-service-block").eq(3).fadeIn(500);
});
$(".service-item").eq(4).on("click",function(){
	$(".hidden-service-block").eq(4).fadeIn(500);
});
$(".service-item").eq(5).on("click",function(){
	$(".hidden-service-block").eq(5).fadeIn(500);
});
$(".service-item").eq(6).on("click",function(){
	$(".hidden-service-block").eq(6).fadeIn(500);
});
$(".service-item").eq(7).on("click",function(){
	$(".hidden-service-block").eq(7).fadeIn(500);
});
$(".service-item").eq(8).on("click",function(){
	$(".hidden-service-block").eq(8).fadeIn(500);
});






$(".close-button").click(function(){
	$(this).parent().fadeOut(1000);
});