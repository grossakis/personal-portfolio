$('header').delay(250).animate({opacity: 1} , 1000)

$('.web-portfolio').delay(500).animate({left: '-18%'}, 1200)
$('.contact-div').delay(750).animate({right: '-18%'}, 1200)
$(".home-pic-div").delay(1500).animate({ opacity: 1 }, 1000)


$('.home-pic-div').on('click' , function(){
    $('.back-arrow-div').animate({left: '4%'});
    $(".home-pic-div").animate({ opacity: 0 }, 1000)
    $('.web-portfolio').animate({left: '-40%'}, 1000)
    $('.contact-div').animate({right: '-40%'}, 1000)
    $(".home-pic-div").delay(1000).animate({ top: '-100%' }, 1000)
    $('.about-me-div').animate({ top: '5%' })
    $('.about-me-div').delay(1000).animate({ opacity: 1 }, 1000)
    $('.back-arrow-div').delay(1500).animate({ opacity: 1 }, 1000)
});

$('.back-arrow-div').on('click' , function(){
    $('.about-me-div').animate({ opacity: 0 }, 400);
    $('.about-me-div').delay(400).animate({ top: '100%' });
    $('.back-arrow-div').animate({opacity: 0}, 400);
    $('.back-arrow-div').delay(400).animate({ left: '-4%' });

    $('.web-portfolio').delay(400).animate({left: '-18%'}, 500)
    $('.contact-div').delay(400).animate({right: '-15%'}, 500)
    $(".home-pic-div").animate({ top: '5%' })
    $(".home-pic-div").delay(400).animate({ opacity: 1 }, 500)
})