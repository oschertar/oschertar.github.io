{
	let numero;

	let contador=0;
	let sumatorio=0;

do{

	numero = parseInt(prompt("Introduce números positivos para calcular la media de todos."));
	sumatorio+=numero;
	contador++;
	
	
}while(numero>=0);
sumatorio-=numero;
contador--;
let media = sumatorio/contador;
console.log("La media de los números es: " + media + ".");

}