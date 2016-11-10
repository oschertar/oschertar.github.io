{
	//Creación del array vacío
	let array = [];

		
	var t0 = performance.now();
	for (var i = 0; i < 10; i++) {
		array.push(i);
	}

	var t1= performance.now();
	  
	
	//Rendimiento de push
	console.log("Rendimiento del push: " + (t1-t0));
	//Lectura array
	console.log(array);
	
	//----------------------------------------------------------// 
	array = [];
	var t0 = performance.now();
	for (var i = 0; i < 10; i++) {
		array.unshift(i);
	}
	var t1= performance.now();
	  
	
	//Rendimiento de push
	console.log("Rendimiento del unshift: " + (t1-t0));
	//Lectura array
	console.log(array);

	//----------------------------------------------------------// 
	
	var t0 = performance.now();
	for (var i = 0; i < 10; i++) {
		array.pop(i);
	}
	var t1= performance.now();
	  
	
	//Rendimiento de push
	console.log("Rendimiento del pop: " + (t1-t0));
	//Lectura array
	console.log(array);

	//----------------------------------------------------------// 
	
	//Relleno el array para el shift
	for (var i = 0; i < 10; i++) {
		array.push(i);
	}
	console.log("Relleno el array para el shift:" + array);

	var t0 = performance.now();
	for (var i = 0; i < 10; i++) {
		array.shift(i);
	}
	var t1= performance.now();
	  
	
	//Rendimiento de push
	console.log("Rendimiento del shift: " + (t1-t0));
	//Lectura array
	console.log(array);
}