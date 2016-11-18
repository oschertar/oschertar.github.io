{
	let productos = ["Producto 1", "Producto 2", "Producto 3", "Producto 4", "Producto 5", "Producto 6"];
	let precios = ["2.99","0.99","9.99","14.99","29.99", "4.99", "19.99"];
	var factura;

		var getFactura = function(){
			return factura;
		}

		let annadirProducto = function(){
			
					
  		 	let nuevoProducto = document.createElement('div');
  		 	let pantallaAnnadir = document.getElementById("pantallaAnnadir");
  		 	let annadirProducto = "";
		    annadirProducto="<h4><select>";
		    for(i = 0; i < productos.length; i++) {
		        annadirProducto += "<option value='" + productos[i] + "'>" + productos[i] + "</option>";
		    }
		    annadirProducto += "</select>" +
		    "&nbsp;&nbsp;&nbsp;Cantidad: "+
					"<input type='number' name='cantidad' min='0' max='100' step='1' value='1'>"+
  				"</h4>";
		    nuevoProducto.innerHTML = annadirProducto;
		    
		    pantallaAnnadir.appendChild(nuevoProducto);
		}

		let borrarProducto = function(){
			let listaProductos = document.getElementById("pantallaAnnadir");
			listaProductos.removeChild(listaProductos.lastChild);
		}

		let Factura = function(cliente, elementos){
			Factura.prototype.contador = 1;
			this.idFactura = getIdFactura();
			this.cliente = cliente;
			this.elementos = elementos;
		}

		Factura.prototype.getIdFactura = function(){
			return Factura.contador++;
		}

		

		let Cliente = function(nombre, apellidos, dni, email, direccion, codigoPostal, localidad, provincia, telefono){
			this.nombre = nombre;
			this.apellidos = apellidos;
			this.dni = dni;
			this.email = email;
			this.direccion = direccion;
			this.codigoPostal = codigoPostal;
			this.localidad = localidad;
			this.provincia = provincia;
			this.telefono = telefono;
		}

		let Elemento = function(nombreProducto, cantidad, precioUnitario, iva){
			this.iva = iva;
			this.nombreProducto = nombreProducto;
			this.cantidad = cantidad;
			this.precioUnitario = precioUnitario;
			this.totalPrecio = this.calcularTotal;

		}

		Elemento.prototype.calcularTotal = function(){
			return Math.round(this.cantidad * this.precioUnitario * 100) / 100;
		}

		let crearFactura = function(){
			
			let nombre = document.getElementById("nombre").value;
			let apellidos = document.getElementById("apellidos").value;
			let dni = document.getElementById("dni").value;
			let email = document.getElementById("email").value;
			let direccion = document.getElementById("direccion").value;
			let codigoPostal = document.getElementById("codigoPostal").value;
			let localidad = document.getElementById("localidad").value;
			let provincia = document.getElementById("provincia").value;
			let telefono = document.getElementById("telefono").value;
			
			let cliente = new Cliente(nombre, apellidos, dni, email, direccion, codigoPostal, localidad, provincia, telefono);
			let elementos = [];
			let listaProductos = document.getElementsByTagName('select');
			let cantidades = document.getElementById('elementos').getElementsByTagName('input');
			for (var i = 0; i < listaProductos.length; i++) {
				elementos[i] = new Elemento(listaProductos[i].value, cantidades[i+2].value, precios[productos.indexOf(listaProductos[i].value)]);
			}

			factura = new Factura(cliente, elementos);
			window.open("resumenFactura.html");



			
		}
	
		let init = function(){
			let annadir = document.getElementById("annadir");

			annadir.addEventListener("click", annadirProducto);
			let borrar = document.getElementById("borrar");
			borrar.addEventListener("click", borrarProducto);
			let botonEnviar = document.getElementById("enviar");
			botonEnviar.addEventListener("click", crearFactura);




		}
	document.addEventListener("DOMContentLoaded", init);

	
	
	
	  


	  
}