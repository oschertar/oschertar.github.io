{
	let diaDeLaSemana = function(anno, mes, dia, horas, minutos, segundos){
		let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
		let fecha = new Date(anno, mes-1, dia, horas, minutos, segundos);
		return semana[fecha.getDay()];


		
		
	}	

	console.log("Día de la semana para 10 de Noviembre de 2016: " + diaDeLaSemana(2016, 11, 10, 12, 0, 0));

	
	
	



	

	
	
	
	  


	  
}