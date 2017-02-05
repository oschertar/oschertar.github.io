(function ( $ ) {
 
    $.fn.cuentaParrafos = function() {
 
        $numeroDeParrafos = $('p').length;
        mostrarNumeroDeParrafos = $('<div/>');
        mostrarNumeroDeParrafos.html("Número de Párrafos: " +$numeroDeParrafos);
        $('body').append(mostrarNumeroDeParrafos);
        
    };
 
}( jQuery ));