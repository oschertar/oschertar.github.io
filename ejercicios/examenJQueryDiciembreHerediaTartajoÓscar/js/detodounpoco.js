//Óscar Heredia Tartajo
$(function(){
	$("#informar").on("click",function(){
		mostrarMensajesDiaYHora();
	});
	$("#salir").on("click",function(){
		window.close();
	});
	$("#botonRaton").on("click",function(evento){
		$("#raton").text("Coordenadas ["+evento.clientX+"]["+evento.clientY+"]");
		setTimeout(limpiar, 2000);
	});

});


	let fechaActual, nuevoParrafo, mensaje;

	let getDiaActual = function(){
		let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		fechaActual = new Date();
		
		nuevoParrafo = window.document.createElement('p');
		mensaje = document.createTextNode("Hoy es " + diasSemana[fechaActual.getDay()]);
		nuevoParrafo.appendChild(mensaje);
		document.body.appendChild(nuevoParrafo);
	}


	let mostrarMensajeSegunHora = function(){
		let parrafoMensajeHora = window.document.createElement("p");
		let cadena = "";
		let horas = fechaActual.getHours();
		let minutos = fechaActual.getMinutes();
		let horaActual = horas + ":" + minutos;
		if(horas > 18 && horas <= 23)
			cadena= "Son las " + horaActual + ". Ya es hora de que dejes de trabajar. Hay que conciliar la vida "+
					"laboral con la familia";
		else if(horas > 8 && horas <=18)
			cadena= "Son las " + horaActual + ". Pronto llegan las vacaciones. Aguanta";
		else if(horas > 0 && horas <=8)
			cadena= "Son las " +horaActual + ". Ya es hora de que comiences a trabajar. Hay que levantar el país";
		
		parrafoMensajeHora.innerHTML = cadena;
		document.body.appendChild(parrafoMensajeHora);
	}
	


	
	
	

	let mostrarMensajesDiaYHora = function () {
		getDiaActual();
		mostrarMensajeSegunHora();
	}
	
	
	let limpiar = function () {
		$("#raton").html("");
	}

	

	