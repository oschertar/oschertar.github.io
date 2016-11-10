{
	//Creación del array
	let array = [0,1,2,3,4,5,6,7,8,9,10, "a"];

		
	//Mostrar Array con ForEach
	let mostrarArray = function(valorElemento, indice, array){
		console.log("Array[" + indice + "] = " + valorElemento);
    }

    console.log("Uso del ForEach:\n");
	array.forEach(mostrarArray);

	//Uso del every
	console.log("Uso del every:\n");
	console.log(array.every(function(numero){return !isNaN(numero);}));

	//Uso del some
	console.log("Uso del some:\n");
	console.log(array.some(function(numero){return isNaN(numero);}));

	//Uso de Filter
	console.log("Uso del filter:\n");
	array = array.filter(function(numero){return numero >5;});
	console.log(array);
	
	
	
	  


	  
}