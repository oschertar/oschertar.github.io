(function ( $ ) {
 
    $.fn.animarElemento = function() {
 
      this.click(function() {
  		$( "#cuadro" ).animate({
    			opacity: 0.25,
    			height: "toggle"
  		}, 1000, function() {
    
 		 });


	});

	this.dblclick(function() {
  		$( "#cuadro" ).animate({
    			opacity: 1,
    			height: "toggle"
  		}, 1000, function() {
    
 		});


	});

    };
 
}( jQuery ));