$('header').delay(250).animate({opacity: 1} , 1000)
$(".main-content").delay(500).animate({ opacity: 1 }, 1000)
$('.web-portfolio').delay(750).animate({left: '-15%'}, 1300)
$('.contact-div').delay(1000).animate({right: '-15%'}, 1400)


$('#my-pic-div').on('click' , function(){
    $(".main-content").animate({ opacity: 0 }, 1000)
    $('.web-portfolio').animate({left: '-30%'}, 1000)
    $('.contact-div').animate({right: '-30%'}, 1000)
    setTimeout(function(){ $(".main-content").empty() }, 1000)
    setTimeout(function(){$('.about-me-div').animate({ opacity: 1 }, 1000)}, 1000)
});