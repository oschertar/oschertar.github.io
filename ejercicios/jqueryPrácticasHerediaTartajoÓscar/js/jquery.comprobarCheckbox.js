(function ( $ ) {
 
    $.fn.comprobarCheckbox = function() {
 
      this.change(function() {
    		var $input = $( this );
    		$( "#estadoCheckbox" ).html( ".attr( 'checked' ): <b>" + $input.attr( "checked" ) + "</b><br>" +
      	".prop( 'checked' ): <b>" + $input.prop( "checked" ) + "</b><br>" +
      	".is( ':checked' ): <b>" + $input.is( ":checked" ) + "</b>" );
  	}).change();
    };
 
}( jQuery ));