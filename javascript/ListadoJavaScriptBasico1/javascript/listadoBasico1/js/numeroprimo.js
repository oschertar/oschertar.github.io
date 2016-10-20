{
	let calcularNumeroPrimo = function(){
	let numero = prompt("Introduce un número para comprobar si es primo o no");
	let contador = 0;

	for(var i=1; i<numero; i++){
		if(numero % i ==0)
			contador++;
	}

	if(contador==1)
		console.log("El número "+ numero + " es primo.");
	else
		console.log("El número "+ numero + " no es primo.");
	}

	calcularNumeroPrimo();	
}		