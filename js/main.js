$('document').ready(function() {
    // Image slides
    // If more slides are added to the page then add the id's to these arrays as well
    //
    
    // Sibbling Default
    // The images that are initially displayed on the page
    //
    var slides = ['#slideOne', '#slideTwo', '#slideThree',
                  '#slideFour', '#slideFive', '#slideSix'];
    
    // Sibbling Alternate
    // Extra information that is displayed on mouse-over
    //
    var subText = ['#slideOne-subText', '#slideTwo-subText', '#slideThree-subText',
                  '#slideFour-subText', '#slideFive-subText', '#slideSix-subText'];
    
    // Bind mouseenter / mouseleave event to the list of ids in slides
    // 
    for (var i=0; i < slides.length; i++) {
        // Hide the slide img on mouse enter and show text
        $(slides[i]).bind('mouseenter', function() {
            // Provide a border to the current slide for a '3d' effect
            //
            $(this).css('border-bottom', '15px solid #503f50');
            
            // Cache the associated slide by concactenating the id
            //
            var slide = $(this).attr('id');            
            slide = '#' + slide + '-subText';
            
            // Locate the sibling element and display it
            //
            for (var x=0; x < subText.length; x++) {
                if (slide == subText[x]) {
                    //
                    $(slide).fadeIn('slowly');
                }
            }
            
            // Slide the default sibbling from view
            //
            $(this).slideUp('slow');            
        });
        
        // Show the slide image on mouse leave and hide text
        $(subText[i]).bind('mouseleave', function() {
            // Animate the #subText container
            //
            $(this).fadeOut('slowly');
            
            // Cache the siblind element by concactenating the id
            // 
            var slide = $(this).attr('id');
            slide = '#' + slide;
            slide = slide.split('-');
            
            //
            $(slide[0]).slideDown('slow', function() {
                // Remove the border from the current slide
                //
                $(slide[0]).css('border-bottom', 'none');
            });            
        });
    }
});