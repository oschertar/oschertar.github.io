{
	let esFecha = function(argumento){
		
		let date = Date.parse(argumento);
		if(isNaN(date))
			return "La fecha que has introducido es inválida";
		else
			return "La fecha que has introducido es válida";


		
		
	}	

	console.log("Fecha: Not 10, 2016. " + esFecha("Not 10, 2016"));
	console.log("Fecha: Nov 10, 2016. " + esFecha("Nov 10, 2016"));
	console.log("Fecha: Thu Nov 10 2016 18:43:46 GMT+0100. " + esFecha("Thu Nov 10 2016 18:43:46 GMT+0100"));
	console.log("Fecha: Noviembre, 19 de 2015. " + esFecha("Noviembre, 19 de 2015"));



	

	
	
	
	  


	  
}