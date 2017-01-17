{
	let init = function(){
		let capaCarga = document.getElementById("capaCargando");
		setTimeout(function(){ capaCarga.style.display = "none";}, 5300);
	}


	window.addEventListener("DOMContentLoaded", init);
}