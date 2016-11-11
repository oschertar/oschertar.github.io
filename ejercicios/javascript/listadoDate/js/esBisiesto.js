{
	function comprobarFecha(cadena) {
    	let a = new Date(cadena);
		if(a == "Invalid Date") {
        	return "La Fecha no es Válida";
   		} else {
        	let anno = a.getFullYear();


        	if( ((anno % 4 == 0) && ((anno % 100 != 0) || (anno % 400 == 0)) )) {
           		return "Es un año bisiesto";
        	} else {
            	return "No es un año bisiesto";
       		}
    	}
	}

	console.log("Año bisiesto 2016: " + comprobarFecha("Nov 10, 2016"));

	
	  


	  
}