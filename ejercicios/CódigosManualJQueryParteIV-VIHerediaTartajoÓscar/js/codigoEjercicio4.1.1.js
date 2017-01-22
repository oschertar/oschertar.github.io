$(function(){
	
	$("a").each(function(i){
		var titulo = $(this).prop("title");
		alert("Atributo title del enlace " + i + ": " + titulo);
	});
	
});