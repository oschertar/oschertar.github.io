$(function(){
    $("#nombre").val(Cookies.get('nombre'));
    $("#apellidos").val(Cookies.get('apellidos'));
    $("#email").val(Cookies.get('email'));
    $("#telefono").val(Cookies.get('telefono'));
    $("#fechaEntrada").val(Cookies.get('fechaEntrada'));
    $("#fechaSalida").val(Cookies.get('fechaSalida'));
    $("#numeroPersonas").val(Cookies.get('numeroPersonas'));
    $("#condiciones").prop("checked",Cookies.get('condiciones'));
    $.validate({
        modules : 'toggleDisabled',
        disabledFormFilter : 'form#formularioReserva'

    });
    $(".reservar").on('click',function (e) {
        Cookies.set('nombre', $("#nombre").val(), { expires: 365 });
        Cookies.set('apellidos', $("#apellidos").val(), { expires: 365 });
        Cookies.set('email', $("#email").val(), { expires: 365 });
        Cookies.set('telefono', $("#telefono").val(), { expires: 365 });
        Cookies.set('fechaEntrada', $("#fechaEntrada").val(), { expires: 365 });
        Cookies.set('fechaSalida', $("#fechaSalida").val(), { expires: 365 });
        Cookies.set('numeroPersonas', $("#numeroPersonas").val(), { expires: 365 });
        Cookies.set('condiciones', $("#condiciones").prop("checked"), { expires: 365 });
    });
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $("#fechaEntrada").datepicker({
        onClose: function (selectedDate) {
            $("#fechaSalida").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#fechaSalida").datepicker({
        onClose: function (selectedDate) {
            $("#fechaEntrada").datepicker("option", "maxDate", selectedDate);
        }
    });
});




  $( function() {
        var dateFormat = "dd/mm/yy",
         from = $( "#fechaEntrada" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 3
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate(this));
        }),
      to = $( "#fechaSalida" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate(this));
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );