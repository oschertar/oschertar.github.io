$(function(){
	var my_image = new Image();
	my_image.src = 'img/fondoAnimado.gif';


	$("#bajar").on("click", function(event){
		event.preventDefault();
		var alto = $(window).height();
            var ancho = $(window).width();
		$("body").css("background-image", "url(img/fondoAnimado.gif)");
		if(alto > ancho){
			if(ancho >= 200 && ancho < 780)
				$("body").animate({backgroundSize: "500%"}, 5000);
			else if(ancho >= 780)
				$("body").animate({backgroundSize: "225%"}, 5000);
		}else{
			$("body").animate({backgroundSize: "225%"}, 5000);
		}
		/*$("#numeroPlanta").animate({marginTop: "45%", fontSize: "350%", width: "30%"}, 5000);
		contador = 0;
		setInterval(function(){
			
			if(contador <= 20)
				contador++;
			$("#numeroPlanta").text(contador);
		}, 200);
		*/
		$("#ascensorBajando").get(0).play();
		$(this).fadeOut( "slow");
  		setTimeout( function(){
  			$("#ascensorBajando").get(0).pause();
  			window.location ="portfolio.html";
  		}, 7500);
	});
});
