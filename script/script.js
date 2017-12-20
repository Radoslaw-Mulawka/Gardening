


$(document).ready(function() {
  //carousel options

  $('#quote-carousel').carousel({
    pause: true, interval: 10000,            // testimonials? 
  });



  $("#lightgallery").lightGallery();         // gallery plugin 




  	$(".hamburger").on("click", function(){                 // nav event
  		if($(".hidden-nav").css("display") == "none") {
  			$(".hidden-nav").slideDown();
  		}
  		else {
  			$(".hidden-nav").slideUp();
  		}
	 });



    $(".incr-btn").on("click", function (e) {
                var $button = $(this);
                var oldValue = $button.parent().find('.quantity').val();
                $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
                if ($button.data('action') == "increase") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below 1
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } 
                    else {
                        newVal = 1;
                        $button.addClass('inactive');
                    }
                }
                $button.parent().find('.quantity').val(newVal);
                e.preventDefault();
      });


            let glebo = parseInt($(".quantity").first().val());
            let koszenie = parseInt($(".quantity").eq(2).val());
            let wertykulacja = parseInt($(".quantity").eq(3).val());
            let zrywanieDarni = parseInt($(".quantity").eq(4).val());
            let sadzenieRoslin = parseInt($(".quantity").eq(5).val());
            let Podcinanie = parseInt($(".quantity").last().val());
            let total = 0;

            $(".service-1 .incr-btn").on('click', function(){
                glebo = parseInt($(".quantity").first().val()) * 0.15;
                total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;

                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
           // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });

            $(".service-2 .incr-btn").on('click', function(){
                koszenie = parseInt($(".quantity").eq(1).val());
                total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;
                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
                  // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });

            $(".service-3 .incr-btn").on('click', function(){
                wertykulacja = parseInt($(".quantity").eq(2).val());
                total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;
                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
                            // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });
        
            $(".service-4 .incr-btn").on('click', function(){
                zrywanieDarni = parseInt($(".quantity").eq(3).val()); 
                total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;
                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
                         // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });


            $(".service-5 .incr-btn").on('click', function(){
               sadzenieRoslin = parseInt($(".quantity").eq(4).val());
               total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;
                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
                        // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });


            $(".service-6 .incr-btn").on('click', function(){
               Podcinanie = parseInt($(".quantity").last().val());
               total = glebo + koszenie + wertykulacja + zrywanieDarni + sadzenieRoslin + Podcinanie;
                $(".services-calc-wrap h2 span").text(total.toFixed(2));
                 // $(".form-price").attr("placeholder", );
                 $(".form-price").attr("value", "Cena: " + total.toFixed(2) +" zł");
                         // $(".quantity").first().val() * CENA;  
                // $(".services-calc-wrap h2 span").text(total);
            });
  	
});



