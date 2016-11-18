	{
		//Declaramos e inicializamos un array
		let array = [1,2,3,4];
		
		let init = function(){
			Array.prototype.anadir = function(elemento) {
	  			this.push(elemento);
			}

			let pantallaArray = document.getElementById("pantalla");
			pantallaArray.innerHTML += "<p>Declaramos e inicializamos un array: let array = [1,2,3,4];</p>"+
			"<p>Obtenemos como resultado: " + array + "</p>";
			array.anadir(458);
			pantallaArray.innerHTML += "<p>A continuación usamos la nueva propiedad llamada 'anadir' array.anadir(458);"+
			" y obtenemos lo siguiente: "+ array+"</p>"+
			"<p>Array.prototype.anadir = function(elemento) {<br/>this.push(elemento);<br/>}</p>";


			Array.prototype.anadir = function(elemento, permisos) {
				if(!permisos){
					if(elemento in array)
						throw "No se permiten duplicados";
					this.push(elemento);
				}else{
					this.push(elemento);
				}
			}
		}	

		document.addEventListener("DOMContentLoaded", init);

		
		
		
		  


		  
	}