$(function(){
	anchoPantalla = $(window).width();
	alturaScroll =document.body.scrollHeight;
	alturaVentana = window.innerHeight;
	$(window).scroll(function(){
		valorScrollActual = window.pageYOffset;
	   	valorScroll = -(valorScrollActual / (alturaScroll-alturaVentana)) * 100;

		if(anchoPantalla < 720){
			$("#ascensor").css({ top: (window.pageYOffset)*1.31 + "px"});

			$("#sobreMi").css({ left: valorScroll*5 + "px"});
			$("#conocimientos").css({ left: valorScroll + "px"});
			$("#casasRurales").css({ left: (-50 + valorScroll) + "px"});
			$("#gestorTareas").css({ right: (-125 + valorScroll) + "px"});
			$("#proyectos").css({ right: (-150 + valorScroll) + "px"});
			$("#otros").css({ right: (-150 + valorScroll*2) + "px"});
			$("#nubeGenerica1").css({ right: valorScroll*10 + "px"});
		}else if(anchoPantalla => 720){
			$("#ascensor").css({ top: 45+(window.pageYOffset)*1.13 + "px"});

			$("#sobreMi").css({ left: valorScroll*6 + "px"});
			$("#conocimientos").css({ right: valorScroll*2 + "px"});
			$("#casasRurales").css({ left: (-50 + valorScroll) + "px"});
			$("#gestorTareas").css({ right: (-125 + valorScroll) + "px"});
			$("#proyectos").css({ right: (-150 + valorScroll) + "px"});
			$("#otros").css({ right: (-150 + valorScroll*2) + "px"});
			$("#nubeGenerica1").css({ right: valorScroll*10 + "px"});
		}
				
		
		
	});
	

	
	
	
	
	
	

	
});




