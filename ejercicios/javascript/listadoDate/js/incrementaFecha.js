{
	let incrementaDias = function(incrementaDias, anno, mes, dia, horas, minutos, segundos){
		let fecha = new Date(anno,mes-1,dia+incrementaDias,horas,minutos,segundos);
		return fecha;
				
	}	

	console.log("28 de febrero + 8 días: " +incrementaDias(8, 2016, 2, 28, 12, 0, 0));
	console.log("28 de febrero - 15 días: " +incrementaDias(-15, 2016, 2, 28, 12, 0, 0));
	



	

	
	
	
	  


	  
}