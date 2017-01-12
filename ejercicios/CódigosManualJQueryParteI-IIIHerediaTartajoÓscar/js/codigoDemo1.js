$(function(){
	$('#botonA').click(function(){
		$('#capa').html("Has hecho clic en el botón A");
	});

	$('#botonB').click(function(){
		$('#capa').html("Recibido un clic en el botón B");
	});
});