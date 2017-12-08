$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });



  $("#lightgallery").lightGallery(); 




  	$(".hamburger").on("click", function(){
		if($(".hidden-nav").css("display") == "none") {
			$(".hidden-nav").slideDown();
		}
		else {
			$(".hidden-nav").slideUp();
		}

	});

  	console.log("hello");


  	
});

