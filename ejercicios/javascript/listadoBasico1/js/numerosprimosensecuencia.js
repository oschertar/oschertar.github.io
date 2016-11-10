{
	let numero = prompt("Introduce un número para calcular cuántos números primos existen entre el 1 y dicho número");
	let contador = 0;
	let i=1;
	let contadorPrimos=0;

	do{
	for(var j=1; j<i; j++){
		if(i % j ==0)
			contador++;
		
	}

	if(contador==1)
		contadorPrimos++;
	i++;
	contador=0;
	}while(i<numero);

	console.log("Hay " + contadorPrimos + " números primos entre 1 y "+ numero);
}
