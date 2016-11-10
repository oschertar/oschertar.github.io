{	
	let calcularMedia = function(){
		let numero;

		let sumatorio=0;
		let contador=0;

		do{

			numero = parseInt(prompt("Introduce un número."));
			if(numero<0)
				console.log("Introduce un número positivo por favor.");
			else{
				sumatorio+=numero;
				contador++;
			}
			
		}while(numero!=0);
		contador--;

		return sumatorio/contador;
	}	
	var media = calcularMedia();
	console.log("La media es: " + media);

}