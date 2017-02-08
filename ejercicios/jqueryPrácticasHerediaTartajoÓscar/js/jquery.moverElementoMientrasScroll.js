(function ( $ ) {
 
    $.fn.moverElementoMientrasScroll = function() {
 	$(window).on("scroll", function(){
		posicionY = window.pageYOffset;
        	console.log(posicionY);
        	$("#elemento").css("marginTop", posicionY * 1 +'px');
 	});
        
        
    };
 
}( jQuery ));