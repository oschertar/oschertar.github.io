{
	let borrarUndefined = function(array){
		
		for (var i = 0; i < array.length; i++) {
			if(typeof array[i] == 'undefined'){
				array.splice(array[i],1);
				i--;
			}
		}
	}

	let crearArray = function(){
		array = [];
		array.length = 5;
		array.push("Hola");
		array.push(4);
		array.push(true);
		return array;
	}

	let init = function(){
		array = crearArray();

		console.log("Array inicial:");
		console.log(array);

		borrarUndefined(array);
		console.log("Array final:");
		console.log(array);
		
	}

	document.addEventListener("DOMContentLoaded", init);


	

	
	
	
	  


	  
}