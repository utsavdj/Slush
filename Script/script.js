// JavaScript Document
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 584) {
                $('.top-hidden-nav').fadeIn(500);
            } else {
                $('.top-hidden-nav').fadeOut(400);
            }
        });
		
		
		
	    $("a").click(function(event) {
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
		 });
		 
	    $(".top-visible-nav ul li a").click(function(event) {
	    event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
		 });
		 
	    $(".arrow a").click(function(event) {
	    event.preventDefault();
        $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 700);
		 }); 
		 
    });
	
})(jQuery);


function openNav() {
    document.getElementById("mobile-side-nav").style.width = "200px";
	document.getElementById("push").style.marginLeft = "200px"
}

function closeNav() {
    document.getElementById("mobile-side-nav").style.width = "0";
	document.getElementById("push").style.marginLeft = "0";
}


