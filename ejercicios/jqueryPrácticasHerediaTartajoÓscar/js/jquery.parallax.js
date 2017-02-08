(function ( $ ) {
 
    $.fn.parallax = function() {
 	$(window).on("scroll", function(){
		posicionY = window.pageYOffset;
        	console.log(posicionY);
        	$("#elemento").css("marginLeft", posicionY * 0.5 +'px');
        	$("#elemento1").css("marginLeft", posicionY * 0.3 +'px');
        	$("#elemento2").css("marginLeft", 900-posicionY * 0.3 +'px');
        	$("#elemento3").css("marginBottom", posicionY * 0.3 +'px');
        	$("#elemento4").css("marginBottom", posicionY * 0.3 +'px');
		$("#elemento4").css("marginLeft", posicionY * 0.3 +'px');
 	});
        
        
    };
 
}( jQuery ));