$('document').ready(function() {
    // Image slides
    var slides = ['#slideOne', '#slideTwo', '#slideThree',
                  '#slideFour', '#slideFive', '#slideSix'];
    
    // Text slides
    var subText = ['#slideOne-subText', '#slideTwo-subText', '#slideThree-subText',
                  '#slideFour-subText', '#slideFive-subText', '#slideSix-subText'];
    
    for (var i=0; i < slides.length; i++) {
        // Hide the slide img on mouse enter and show text
        $(slides[i]).bind('mouseenter', function() {
            //
            $(this).css('border-bottom', '15px solid #503f50');
            
            //            
            var slide = $(this).attr('id');            
            slide = '#' + slide + '-subText';
            
            //
            for (var x=0; x < subText.length; x++) {
                //
                if (slide == subText[x]) {
                    //
                    $(slide).fadeIn('slowly');
                }
            }
            
            //
            $(this).slideUp('slow');
            
        });
        
        // Show the slide image on mouse leave and hide text
        $(subText[i]).bind('mouseleave', function() {
            //
            $(this).fadeOut('slowly');
            
            //
            var slide = $(this).attr('id');
            slide = '#' + slide;
            slide = slide.split('-');
            
            //
            $(slide[0]).slideDown('slow', function() {
                $(slide[0]).css('border-bottom', 'none');
            });            
        });
    }
});