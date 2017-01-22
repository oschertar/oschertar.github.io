$(function(){
    $( "input" ).change(function() {
        var $input = $( this );
        $( "#accediendoAlChecked" ).html(
        ".attr( \"checked\" ): <b>" + $input.attr( "checked" ) + "</b><br>" +
        ".prop( \"checked\" ): <b>" + $input.prop( "checked" ) + "</b><br>" +
        ".is( \":checked\" ): <b>" + $input.is( ":checked" ) +  "</b><br>" +
        ".val(): <b>" + $input.val() + "</b>" );
        }).change();
       
        $("select").change(function() {
            var str = "";
            $( "select option:selected" ).each(function() {
                str += $( this ).text() + " ";
            });
            $( "#asignaturasSeleccionadas" ).text( str );
      
        }).trigger( "change" );


        $( ".grupoCheckbox" ).change(function() {
            if (!this.checked) {
                $("input.grupoCheckbox").removeAttr("disabled");
            } else {
            $("input.grupoCheckbox").attr("disabled", true);
            }
        }).change();



        $( "#eventos" ).bind({
            click: function() {
                $("#eventos").html("Has hecho click encima mía :(");
            },
            dblclick: function() {
                $("#eventos").html("Has hecho doble-click encima mía :D");
            },
            mouseenter: function() {
                $("#eventos").html("Has entrado en mi zona");
            },
            mouseleave: function() {
                $("#eventos").html("No te vayas T_T");
            }
        });

        $("#interfazEvent").click(function (evento) {
            $("#interfazEvent").html(
                "Coordenada X: " + evento.pageX + "<br/>" +
                "Coordenada Y: " + evento.pageY + "<br/>" +
                "CurrentTarget: " + evento.currentTarget + "<br/>" +
                "TimeStamp: " + evento.timeStamp);
        });
});



