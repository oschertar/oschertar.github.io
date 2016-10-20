{

	let deseaContinuar = function (){
		var continuar = prompt("¿Desea continuar?");
		if(continuar.toLowerCase()=='s')
			return true;
		else if(continuar.toLowerCase()=='n')
			return false;
		else{
			console.log("No has introducido una opción correcta. Intentelo de nuevo (s/n).");
			deseaContinuar();
		}

	}

	let numero;

	let aleatorio;
	do{
		aleatorio = Math.round(Math.random()*99)+1;
		do{
			numero = prompt("Introduce un número entre 1 y 100");
			numero = adivinarNumero(numero);
		}while(numero!=aleatorio || numero==null);
	}while(deseaContinuar());



	function adivinarNumero(numero){
		if(numero < 1 || numero > 100){
			console.log("No has introducido un número válido");
			return null;
		}
		
		else{
			if(numero < aleatorio)
				console.log("El número que has introducido("+numero+") es menor que el aleatorio.");
				
			else if(numero > aleatorio)
				console.log("El número que has introducido("+numero+") es mayor que el aleatorio.");
				
			else{
				console.log("Has acertado el número: "+ numero );
				return numero;
			}

		}
	}

	
	

}