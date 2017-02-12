$(function() {
    $('#iconoMenu').click(function() {
            $('nav').slideToggle("slow");
    });
    $(".js-rotating").Morphext();
    
    $( ".villa" ).animate({
      color: "#0101DF"
    }, 4000);
    $( ".js-rotating" ).animate({
      color: "white"
    }, 4000);

    if (!navigator.cookieEnabled){
        $( "#dialog-message" ).css("display", "block");
        $( "#dialog-message" ).dialog({
            modal: true,
            buttons: {
                Aceptar: function() {
                    $( this ).dialog( "close" );
                }
            }
        });
    }

    $( ".datepicker" ).datepicker();

});