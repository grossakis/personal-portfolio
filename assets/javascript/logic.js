var portfolioDiv = $('.web-portfolio');
var contactDiv = $('.contact-div');
var homePicDiv = $('.home-pic-div');
var backArrowDiv = $('.back-arrow-div');
var aboutMeDiv = $('.about-me-div');

$('header').delay(250).animate({opacity: 1} , 1000);

portfolioDiv.delay(500).animate({left: '-18%'}, 1200);
contactDiv.delay(750).animate({right: '-18%'}, 1200);
homePicDiv.delay(1500).animate({ opacity: 1 }, 1000);


homePicDiv.on('click' , function(){
    aboutMeDiv.removeClass('hidden-element');
    backArrowDiv.animate({left: '4%'});
    homePicDiv.animate({ opacity: 0 }, 1000);
    portfolioDiv.animate({left: '-40%'}, 1000);
    contactDiv.animate({right: '-40%'}, 1000);
    homePicDiv.delay(1000).animate({ top: '-100%' }, 1000);
    aboutMeDiv.animate({ top: '5%' });
    aboutMeDiv.delay(1000).animate({ opacity: 1 }, 1000);
    backArrowDiv.delay(1500).animate({ opacity: 1 }, 1000);

    backArrowDiv.on('click' , function(){
        backArrowDiv.off('click');
        aboutMeDiv.animate({ opacity: 0 }, 600);
        aboutMeDiv.delay(600).animate({ top: '100%' });
        backArrowDiv.animate({opacity: 0}, 600);
        backArrowDiv.delay(600).animate({ left: '-4%' });
        portfolioDiv.delay(600).animate({left: '-18%'}, 500);
        contactDiv.delay(600).animate({right: '-15%'}, 500);
        homePicDiv.animate({ top: '5%' });
        homePicDiv.delay(600).animate({ opacity: 1 }, 500);

        setTimeout(function(){aboutMeDiv.addClass('hidden-element')} , 800);
    });
});

