{

Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el 
usuario. Cada gato tendrá un nombre, una fecha de nacimiento, una raza 
y un peso (1-15). Cada vez que crees un objeto gato aparecerá una ventana
 nueva con una imagen que cambiará en función de su estado (comiendo, 
 	durmiendo y jugando, que es su estado habitual). El usuario podrá 
 averiguar la edad del gato partiendo de un evento.

	let estado = ["Jugando", "Durmiendo", "Comiendo"];

	Gato = function(nombre,fechaNacimiento, raza, peso){
		this.animo = 10;
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
		this.raza = raza;
		this.peso = peso;
		this.estado = estado[0];
	}

	Gato.prototype.calcularEdad = function(){

	}

	Gato.prototype.setEstado = function(estado){
		this.estado = estado;
	}

	Gato.prototype.comer = function(){

	}

	Gato.prototype.jugar = function(){

	}

	Gato.prototype.dormir = function(){

	}

}