(function ( $ ) {

	$.fn.cambiarEstiloElementos = function() {
	    this.css( "color", "#FF0000" ).css("fontWeight", "bold").css("fontSize", 25 + "px").css("textDecoration", "none");

	    return this;
	};
}( jQuery ));