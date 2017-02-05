(function ( $ ) {
 
    $.fn.cambiarEstiloElementosUsuario = function( options ) {
 
        
        var settings = $.extend({
           
            color: "#FF0000",
            fontWeight: "bold",
            fontSize: 25 + "px",
            textDecoration: "none"
        }, options );
 
        
        return this.css({
            color: settings.color,
            fontWeight: settings.fontWeight,
            fontSize: settings.fontSize,
            textDecoration: settings.textDecoration
        });
 
    };
 
}( jQuery ));