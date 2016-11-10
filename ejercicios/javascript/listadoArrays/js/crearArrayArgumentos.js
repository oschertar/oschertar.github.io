{
	let rellenarArray = function(valorRecibido){
		var valor = new String(valorRecibido);
		array = valor.split(" ");
		return array;
	}

	let obtenerValoresYMostrar = function(){

		var valor = document.getElementById("argumentos").value;
		array = rellenarArray(valor);
		console.log(array);
		
	} 
	let init = function(){
		var botonEnviar = document.getElementById("enviar");
		botonEnviar.addEventListener("click", obtenerValoresYMostrar);
	}


	document.addEventListener("DOMContentLoaded", init);


	

	
	
	
	  


	  
}