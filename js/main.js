$('document').ready(function() {    
    // Image slides
    var slides = ['#slideOne', '#slideTwo', '#slideThree',
                  '#slideFour', '#slideFive', '#slideSix'];
    
    // Slide text
    var subText = ['#slideOne-subText', '#slideTwo-subText', '#slideThree-subText',
                  '#slideFour-subText', '#slideFive-subText', '#slideSix-subText'];        
    
    for (var i=0; i < slides.length; i++) {        
        // Show the slide text on mouse enter
        $(slides[i]).bind('mouseenter', function() {
            $(this).slideUp('slow', function() {
                //
                var slide = $(this).attr('id');
                slide += '-subText';
                slide = '#' + slide;
                
                //
                for (var x=0; x < subText.length; x++) {
                    if (slide == subText[x]) {
                        $(slide).css('display', 'block');
                    }
                }
            });
        });
        
        // Show the slide image on mouse leave
        $(subText[i]).bind('mouseleave', function() {
            $(this).css('display', 'none');
            //
            var slide = $(this).attr('id');
            slide = '#' + slide;
            slide = slide.split('-');
            
            //
            $(slide[0]).fadeIn('slow');
        });
    }    
});