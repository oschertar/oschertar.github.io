{
	let numero;

	let contador=0;

do{

	numero = parseInt(prompt("Introduce un cero(0) o un uno(1)."));
	if(numero!=0 && numero !=1 && numero!=2)
		console.log("Introduce un número válido.");
	else{
		if(numero==0)
			contador++;
	}
	
}while(numero!=2);


console.log("Has introducido " + contador + " ceros.");

}