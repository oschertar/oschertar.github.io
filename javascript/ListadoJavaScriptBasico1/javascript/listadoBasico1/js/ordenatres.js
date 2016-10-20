{
	let ordenarListar = function(){
		let numeros = new Array(3);

		let i;

		for(i=0; i<numeros.length; i++){
			numeros[i] = prompt("Introduce el número " + (i+1));
		}

		numeros.sort();
		console.log("Lista ordenada:");
		for(i=0; i<numeros.length; i++){
			console.log(numeros[i]);
		}

	}

	ordenarListar();
}
