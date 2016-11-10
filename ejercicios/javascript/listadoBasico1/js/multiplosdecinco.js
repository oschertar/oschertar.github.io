{
	let pedirDatos = function(numeros){
		

		for(var i=0; i< numeros.length; i++){
			numeros[i]= prompt("Introduce el número "+(i+1) +".");
		}
		return numeros;
	}

	let mostrarResultados = function(numeros){
		for(var i=0; i< numeros.length; i++){
			if(numeros[i] % 5 == 0)
				console.log(numeros[i] + " es múltiplo de 5.");
		}
	}
	let numeros = new Array(5);
	numeros = pedirDatos(numeros);
	mostrarResultados(numeros);
}
