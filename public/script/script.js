$(document).ready(function() {
  //carousel options

  $('#quote-carousel').carousel({
    pause: true, interval: 500,            // testimonials? 
  });


    //  calculator alien code 
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

    // alien code end



            
   
    

    
    $('.hidden-nav li').on('click', function(){
        $(this).parent().parent().slideUp();
    });


});



