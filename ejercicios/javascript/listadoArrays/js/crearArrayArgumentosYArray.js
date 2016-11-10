{
	let rellenarArray = function(valorRecibido){
		var valor = new String(valorRecibido);
		array = valor.split(",");
		
		for (var i = 0; i < array.length; i++) {
			if(Array.isArray(array[i])){
				console.log(array[i] + "es un array");
			}
		}
		console.log(array);
	}

	let obtenerValores = function(){

		var valor = document.getElementById("argumentos").value;
		rellenarArray(valor);
		
	} 
	let init = function(){
		var botonEnviar = document.getElementById("enviar");
		botonEnviar.addEventListener("click", obtenerValores);
	}


	document.addEventListener("DOMContentLoaded", init);


	

	
	
	
	  


	  
}