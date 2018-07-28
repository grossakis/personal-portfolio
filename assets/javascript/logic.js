// $(window).resize(function(){location.reload();});
var context;
var $window = $(window);
if ($window.width() <= 768) {
    context = 'small';
} else {
    context = 'large';
}
$(window).resize(function() {
    if(($window.width() <= 768) && (context != 'small')) {
        location.reload();
    } else if(context != 'large') {
        location.reload();
    }
});

var portfolioDiv = $('.web-portfolio');
var contactDiv = $('.contact-div');
var homePicDiv = $('.home-pic-div');
var backArrowDiv = $('.back-arrow-div');
var aboutMeDiv = $('.about-me-div');
var gitLink = $('.github-link');
var linkedinLink = $('.linkedin-link')

// browser check variables
var is_chrome = !!window.chrome && !is_opera;
var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !isEdge;
var is_firefox = typeof window.InstallTrigger !== 'undefined';
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

if($(window).width() <= 768){
    // mobile load
    $('.external-logo').addClass('hidden-element');
    $('header').animate({opacity: 1} , 800);
    homePicDiv.delay(300).animate({ opacity: 1 }, 800);
    portfolioDiv.delay(600).animate({marginLeft: '40px'} , 800);
    contactDiv.delay(900).animate({marginRight: '40px'}, 800);
    gitLink.delay(1200).animate({marginTop: '50px'} , 800);
    linkedinLink.delay(1500).animate({marginTop: '50px'} , 800);


    homePicDiv.on('click' , function(){
        portfolioDiv.animate({marginLeft: '-260px'}, 800);
        contactDiv.animate({marginRight: '-260px'}, 800);
        backArrowDiv.animate({left: '4%'});
        
        homePicDiv.animate({ opacity: 0 }, 1000).queue(function(next){
            $(this).addClass("hidden-element");
            aboutMeDiv.removeClass('hidden-element');
            next();
        });
        aboutMeDiv.delay(1000).animate({ opacity: 1 }, 1000);
        backArrowDiv.delay(1500).animate({ opacity: 1 }, 1000);
    
        backArrowDiv.on('click' , function(){
            backArrowDiv.off('click');
            aboutMeDiv.animate({ opacity: 0 }, 600).queue(function(next){
                $(this).addClass("hidden-element");
                homePicDiv.removeClass('hidden-element');
                next();
            });
            backArrowDiv.animate({opacity: 0}, 600);
            backArrowDiv.delay(600).animate({ left: '-4%' });
            portfolioDiv.delay(600).animate({marginLeft: '40px'}, 500);
            contactDiv.delay(600).animate({marginRight: '40px'}, 500);
            homePicDiv.delay(600).animate({ opacity: 1 }, 500);
    
            setTimeout(function(){aboutMeDiv.addClass('hidden-element')} , 800);
        });
    });

    portfolioDiv.on('click' , function(){

        function portfolioClick(){

            portfolioDiv.off('click');
            backArrowDiv.animate({left: '4%'});
            homePicDiv.animate({ opacity: 0}, 300);
            contactDiv.animate({marginRight: '-260%'}, 500);
            homePicDiv.animate({ marginTop: '-500px'}, 500);
            $('.portfolio-icon').animate({opacity: 0}, 500);
            if(is_safari){
                portfolioDiv.delay(300).animate({marginTop: '20%'})
            }
            portfolioDiv.animate({width: '70%' , height: '800px' , marginLeft: '15%'} , 800).queue(function(next){
                
                $('.portfolio-content').removeClass('hidden-element').animate({ opacity: 1 } , 800);
                portfolioDiv.css({height: '100%'});
                next();
            });
            homePicDiv.delay(300).animate({ top: '-100%' }, 1000);
            backArrowDiv.delay(1000).animate({ opacity: 1 }, 1000);

            backArrowDiv.on('click' , function(){
                backArrowDiv.off('click');
                portfolioDiv.on('click' , function(){
                    portfolioClick();
                });
                backArrowDiv.animate({opacity: 0}, 600);
                $('.portfolio-content').animate({opacity: 0}, 600);
                backArrowDiv.delay(600).animate({ left: '-4%' });
                portfolioDiv.animate({height:'100px'}).queue(function(next){

                    $('.portfolio-content').addClass("hidden-element");
                    portfolioDiv.animate({marginLeft: '40px' , width: '30%' , height: '15%' , marginTop: '0'})
                    homePicDiv.removeClass('hidden-element');
                    $('.display-label').removeClass('hidden-element');
                    next();
                });

                contactDiv.animate({marginRight: '40px'}, 800);
                homePicDiv.animate({marginTop: 0 ,  opacity: 1}, 800);
                $('.portfolio-icon').animate({opacity: 1}, 800)
            });
        }
        portfolioClick()
    })

    contactDiv.on('click' , function(){

        function contactClick(){

            contactDiv.off('click');
            backArrowDiv.animate({left: '4%'});
            homePicDiv.animate({ opacity: 0}, 300);
            portfolioDiv.animate({marginLeft: '-260%'}, 500);
            homePicDiv.animate({ marginTop: '-500px'}, 500);
            $('.contact-icon').animate({opacity: 0}, 500);
            if(is_safari){
                contactDiv.delay(300).animate({marginTop: '20%'})
            }
            contactDiv.animate({width: '70%' , height: '400px' , marginRight: '15%' } , 800).queue(function(next){
                
                $('.contact-content').removeClass('hidden-element').animate({ opacity: 1 } , 800);
                contactDiv.css({height: '100%'});
                next();
            });
            homePicDiv.delay(300).animate({ top: '-100%' }, 1000);
            backArrowDiv.delay(1000).animate({ opacity: 1 }, 1000);

            backArrowDiv.on('click' , function(){
                backArrowDiv.off('click');
                contactDiv.on('click' , function(){
                    contactClick();
                });
                backArrowDiv.animate({opacity: 0}, 600);
                $('.contact-content').animate({opacity: 0}, 600);
                backArrowDiv.delay(600).animate({ left: '-4%' });
                contactDiv.animate({height:'100px'}).queue(function(next){

                    $('.contact-content').addClass("hidden-element");
                    contactDiv.animate({marginRight: '40px' , width: '30%' , height: '15%' , marginTop: '0'})
                    homePicDiv.removeClass('hidden-element');
                    $('.display-label').removeClass('hidden-element');
                    next();
                });

                portfolioDiv.animate({marginLeft: '40px'}, 800);
                homePicDiv.animate({marginTop: 0 ,  opacity: 1}, 800);
                $('.contact-icon').animate({opacity: 1}, 800)
            });
        }
        contactClick()
    })

    



}else{
    $('header').delay(250).animate({opacity: 1} , 1000);
    homePicDiv.delay(1000).animate({ opacity: 1 }, 1000);
    portfolioDiv.delay(500).animate({left: '-18%'}, 1200);
    contactDiv.delay(750).animate({right: '-18%'}, 1200);
    gitLink.delay(1000).animate({bottom: '15%'}, 1200);
    linkedinLink.delay(1200).animate({bottom: '15%'}, 1200);


    // still to be sorted for responsiveness
    homePicDiv.on('click' , function(){

        backArrowDiv.animate({left: '4%'});
        homePicDiv.animate({ opacity: 0 }, 1000).queue(function(next){
            $(this).addClass("hidden-element");
            aboutMeDiv.removeClass('hidden-element');
            next();
        });

        portfolioDiv.animate({left: '-40%'}, 1000);
        contactDiv.animate({right: '-40%'}, 1000);
        gitLink.animate({bottom: '-30%'}, 1000);
        linkedinLink.animate({bottom: '-30%'}, 1000);
        aboutMeDiv.animate({ top: '0' });

        aboutMeDiv.delay(1000).animate({ opacity: 1 }, 1000);
        backArrowDiv.delay(1500).animate({ opacity: 1 }, 1000);
    
        backArrowDiv.on('click' , function(){
            backArrowDiv.off('click');
            aboutMeDiv.animate({ opacity: 0 }, 600).queue(function(next){
                $(this).addClass("hidden-element");
                homePicDiv.removeClass('hidden-element');
                next();
            });
            backArrowDiv.animate({opacity: 0}, 600);
            backArrowDiv.delay(600).animate({ left: '-4%' });
            portfolioDiv.delay(600).animate({left: '-18%'}, 500);
            contactDiv.delay(600).animate({right: '-18%'}, 500);
            homePicDiv.delay(600).animate({ opacity: 1 }, 500);
            gitLink.delay(600).animate({bottom: '15%'}, 500);
            linkedinLink.delay(600).animate({bottom: '15%'}, 500);
    
            setTimeout(function(){aboutMeDiv.addClass('hidden-element')} , 800);
        });
    });

    
    portfolioDiv.on('click' , function(){
        
        function portfolioClick(){

            portfolioDiv.off('click');
            $('.display-label').addClass('hidden-element');
            portfolioDiv.removeClass('item-hover');
            backArrowDiv.animate({left: '4%'});
            homePicDiv.animate({ opacity: 0 }, 1000);
            contactDiv.animate({right: '-40%'}, 1000);
            gitLink.animate({bottom: '-30%'}, 1000);
            linkedinLink.animate({bottom: '-30%'}, 1000);

            homePicDiv.delay(1000).animate({ top: '-100%' }, 1000);
            backArrowDiv.delay(1500).animate({ opacity: 1 }, 1000);
            
            portfolioDiv.animate({left: '15%'}, 600);

            portfolioDiv.animate({width: '70%' , height: '80%'} , 500).queue(function(next){
                portfolioDiv.css({overflow: 'scroll'});
                homePicDiv.addClass("hidden-element");
                $('.portfolio-content').removeClass('hidden-element').animate({ opacity: 1 } , 800);
                next();
            });

            backArrowDiv.on('click' , function(){
                backArrowDiv.off('click');
                portfolioDiv.on('click' , function(){
                    portfolioClick();
                });
                backArrowDiv.animate({opacity: 0}, 600);
                $('.portfolio-content').animate({opacity: 0}, 600);
                backArrowDiv.delay(600).animate({ left: '-4%' });

                portfolioDiv.animate({left: '-15%' , width: '30%' , height: '15%'} ,{duration: 400}).queue(function(next){
                    $(this).attr('style' , 'left: -15%')
                    $(this).addClass('item-hover');
                    portfolioDiv.css({overflow: 'visible'})
                    $('.portfolio-content').addClass("hidden-element");
                    homePicDiv.removeClass('hidden-element');
                    $('.display-label').removeClass('hidden-element');
                    next();
                });
                contactDiv.animate({right: '-15%'}, 500);
                homePicDiv.animate({ top: '5%' });
                homePicDiv.animate({ opacity: 1 }, 500);
                gitLink.delay(300).animate({bottom: '15%'}, 500);
                linkedinLink.delay(300).animate({bottom: '15%'}, 500);
            });
        }
        portfolioClick()

        var portActivate = function(i){
            $('#portfolio-item'+i).hover(
                function (){
                    $('#image-label-div'+i).stop()
                    $('#image-label-div'+i).animate({left: '100%'}, 500)
                    console.log("over"+i);
                } ,
                function (){
                    $('#image-label-div'+i).stop()
                    $('#image-label-div'+i).animate({left: '0'}, 500)
                    console.log("out"+i);
                }
            )
        }
        for(var i=1 ; i < 4 ; i++){
            portActivate(i)
        }
    })

    contactDiv.on('click' , function(){
        function contactClick(){
            contactDiv.off('click');
            $('.display-label').addClass('hidden-element');
            contactDiv.removeClass('item-hover');
            backArrowDiv.animate({left: '4%'});
            homePicDiv.animate({ opacity: 0 }, 1000);
            portfolioDiv.animate({left: '-40%'}, 1000);
            gitLink.animate({bottom: '-30%'}, 1000);
            linkedinLink.animate({bottom: '-30%'}, 1000);

            homePicDiv.delay(1000).animate({ top: '-100%' }, 1000);
            backArrowDiv.delay(1500).animate({ opacity: 1 }, 1000);
            contactDiv.animate({right: '15%'}, 600);

            contactDiv.animate({width: '70%' , height: '80%'} , 500).queue(function(next){
                contactDiv.css({overflow: 'scroll'});
                homePicDiv.addClass("hidden-element");
                $('.contact-content').removeClass('hidden-element').animate({ opacity: 1 } , 800);
                next();
            });

            backArrowDiv.on('click' , function(){
                backArrowDiv.off('click');
                contactDiv.on('click' , function(){
                    contactClick();
                });
                backArrowDiv.animate({opacity: 0}, 600);
                $('.contact-content').animate({opacity: 0}, 600);
                backArrowDiv.delay(600).animate({ left: '-4%' });
    
                contactDiv.animate({right: '-15%' , width: '30%' , height: '15%'} ,{duration: 400}).queue(function(next){
                    $(this).attr('style' , 'right: -15%')
                    $(this).addClass('item-hover');
                    contactDiv.css({overflow: 'visible'})
                    $('.contact-content').addClass("hidden-element");
                    homePicDiv.removeClass('hidden-element');
                    $('.display-label').removeClass('hidden-element');
                    next();
                });
                portfolioDiv.animate({left: '-15%'}, 500);
                homePicDiv.animate({ top: '5%' });
                homePicDiv.delay(600).animate({ opacity: 1 }, 500);
                gitLink.delay(300).animate({bottom: '15%'}, 500);
                linkedinLink.delay(300).animate({bottom: '15%'}, 500);
            });
        }
        contactClick()
    })
}



