
	$(document).ready(function(){

        //hamburger Toggle
        $('.humbarger').click(function(event){
        $('.menu-list').slideToggle(100);
        event.preventDefault();
        
        $('.menu-list li a').click(function(event) {
            if ($(window).width() < 768) {
              $('.menu-list').slideUp(100);
              event.preventDefault(); 
            }
          });
        });
        
        });