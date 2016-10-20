{
	let generarSecuencia = function(){
		let numero = parseInt(prompt("Introduce un número para ver la secuencia."));

		let i;

		if(numero<1)
			console.log("No se puede generar la secuencia.");	
		else{
			for(i=1;i<=numero;i++){
				console.log(i);
			}
		}
	}

	generarSecuencia();

}

