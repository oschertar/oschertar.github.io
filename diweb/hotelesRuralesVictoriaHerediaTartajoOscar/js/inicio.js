{	
	let capaCarga;

	let bajarOpacidad = function(valor, duracion){
		setTimeout(function(){ capaCarga.style.opacity = valor;}, duracion);
		setTimeout(function(){ simboloCarga.style.opacity = valor;}, duracion);
		capaCarga.style.transition = "1s all";
		


	}

	let empezarCarga = function(){
		bajarOpacidad(0.95,1000);
		bajarOpacidad(0.85,1500);
		bajarOpacidad(0.75,2000);
		bajarOpacidad(0.65,2500);
		bajarOpacidad(0.55,3000);
		bajarOpacidad(0.45,3500);
		bajarOpacidad(0.35,4000);
		bajarOpacidad(0.30,4500);
		bajarOpacidad(0.25,5000);
		bajarOpacidad(0.2,5500);
		bajarOpacidad(0.15,6000);
		setTimeout(function(){ capaCarga.style.display = "none";}, 6400);
		setTimeout(function(){ simboloCarga.style.display = "none";}, 6400);
	}


	let init = function(){
		capaCarga = document.getElementById("capaCargando");
		simboloCarga = document.getElementsByClassName("sk-folding-cube");
		
		setTimeout(empezarCarga, 3000);
		
	}


	window.addEventListener("DOMContentLoaded", init);
}