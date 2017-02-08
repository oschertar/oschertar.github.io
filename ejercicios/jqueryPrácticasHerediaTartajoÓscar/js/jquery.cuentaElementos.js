(function ( $ ) {
 
    $.fn.cuentaElementos = function(elemento) {
 	
        $numeroElementos = this.length;
        mostrarNumeroDeElementos = $('<div/>');
        mostrarNumeroDeElementos.html("Número de "+ elemento +": " +$numeroElementos);
        $('body').append(mostrarNumeroDeElementos);
        
    };
 
}( jQuery ));