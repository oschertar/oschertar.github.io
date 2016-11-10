{
	

	let animales = ["perro", "gato", "ardilla", "tortuga"];
		console.log("Índice 0 existe en animales: " + (0 in animales));    
		console.log("Índice 3 existe en animales: " + (3 in animales));      
		console.log("Índice 6 existe en animales: " + (6 in animales));      
		console.log("Propiedad length existe en animales: " + ("length" in animales)); 
	 
	
	let movil = {marca: "Xiaomi", modelo: "Note 3 Pro", camara: "Samsung", añoFabricacion: 2016};
		console.log("La propiedad 'marca' existe en el array movil: " + ("marca" in movil));    
		console.log("La propiedad 'modelo' existe en el array movil: " + ("modelo" in movil));      
		console.log("La propiedad 'tecnologia' existe en el array movil: " + ("tecnologia" in movil));      
	  
}