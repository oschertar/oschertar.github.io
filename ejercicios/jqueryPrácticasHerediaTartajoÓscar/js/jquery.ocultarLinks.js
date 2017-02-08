(function ( $ ) {
 
    $.fn.ocultarLinks = function() {
 
      $( "p" ).click(function() {
  		$( "a" ).fadeOut( "slow" );
	});
	
    };
 
}( jQuery ));