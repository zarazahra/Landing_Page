$(document).ready(()=>{

    //FUNCTION FOR COUNTING NUMBERS
    let nCount = selector => {
        $(selector).each(function () {
          $(this)
            .animate({
              Counter: $(this).text()
            }, {
              duration: 4000,
              easing: "swing",
              step: function (value) {
                $(this).text(Math.ceil(value));
              }
            });
        });
      };
    
    let count = 0;

    $(window).scroll(function() {

        //ADD CLASS NAVBAR ON SCROLL
        var nav = $('.navbar');
        var top = 100;
        if ($(window).scrollTop() >= top) {
            nav.addClass('navbar__scroll');
        } else {
            nav.removeClass('navbar__scroll');
        }

        //COUNTING ACHIEVEMENT NUMBERS
        let oTop = $(".achiev__number").offset().top - window.innerHeight;
        if (count == 0 && $(window).scrollTop() >= oTop) {
            count++;
            nCount(".achiev__number");
        }
    });
})
