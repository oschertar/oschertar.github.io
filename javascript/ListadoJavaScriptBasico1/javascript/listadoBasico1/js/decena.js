{
	let numero = prompt("Introduce un número entre 0 y 10");
	let cadena;

	let mostrarResultados = function(numero){
		if(numero<0 || numero>10){
			console.log("El número no está entre 0 y 10.");
		}
		else{
			console.log(numero);
			cadena = numero.toString().split('');
			console.log("El número tiene " + cadena.length+" digitos.");
			console.log("Del revés: " + cadena.reverse().join("")); 
		}
	}
	
	mostrarResultados(numero);
}