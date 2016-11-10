{
	let rellenarArray = function(valor){
		array = [valor];
		for (var i = 0; i < valor; i++) {
			array[i] = i;
		}
		console.log(array);
	}

	let obtenerValor = function(){

		var valor = document.getElementById("tamano").value;
		if(isNaN(valor)){
			console.log("No has introducido un número");
		}else{
		rellenarArray(valor);
		}
	} 
	let init = function(){
		var botonEnviar = document.getElementById("enviar");
		botonEnviar.addEventListener("click", obtenerValor);
	}
	
	//window.onload = init;
	document.addEventListener("DOMContentLoaded", init);


	

	
	
	
	  


	  
}