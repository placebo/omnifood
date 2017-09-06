$(document).ready(function() {
       
    /*================================*/
    /*==== For Sticky Navigation ====*/
    /*===============================*/
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
});                                     
    
    
    /*==========================*/
    /*==== Scroll on Button ====*/
    /*==========================*/
    
    $('.js--scroll-to-plans').click(function(){ /* Selecting this class in the HTML code */
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); /* This is what happens to the HTML code, the 'animation of the page' */ 
        
    });
    
    
    $('.js--scroll-to-start').click(function(){ /* Selecting this class in the HTML code */
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); /* This is what happens to the HTML code */ 
        
    });
    
    $('.js--scroll-to-delivery').click(function(){ /* Selecting this class in the HTML code */
       $('html, body').animate({scrollTop: $('.js--section-delivery').offset().top}, 1000); /* This is what happens to the HTML code */ 
        
    });
    
    $('.js--scroll-to-works').click(function(){ /* Selecting this class in the HTML code */
       $('html, body').animate({scrollTop: $('.js--section-works').offset().top}, 1000); /* This is what happens to the HTML code */ 
        
    });
    
    $('.js--scroll-to-cities').click(function(){ /* Selecting this class in the HTML code */
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000); /* This is what happens to the HTML code */ 
        
    });
    
    $('.js--scroll-to-signup').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top}, 1000);
        
    });
    
    
    /*===============================*/
    /* ==== Animations on Scroll ====*/
    /*===============================*/
    
    $('.js--wp-1').waypoint(function(direction){ /* Fade In */
        $('.js--wp-1').addClass('animated fadeIn');  
    }, {
        offset: '50%'
    });
    
     $('.js--wp-2').waypoint(function(direction){  /* Bounce up - Phone */
        $('.js--wp-2').addClass('animated fadeInUp');  
    }, {
        offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(direction){ /* Fade In - Cities */
        $('.js--wp-3').addClass('animated fadeIn');  
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){ /* Pulse - Plan #1 */
        $('.js--wp-4').addClass('animated pulse');  
    }, {
        offset: '50%'
    });
    
    
    
    /*============================*/
    /*==== Mobile Navigation ====*/
    /*===========================*/
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
    
    
    

    
    
    
    
    /*
    
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
    
    */
                               
});