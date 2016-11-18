{
	let factura;
	let mostrarFactura = function (){
		factura = window.opener.getFactura();
		let nombre = document.getElementById("nombre");
		let apellidos = document.getElementById("apellidos");
		let dni = document.getElementById("dni");
		let email = document.getElementById("email");
		let direccion = document.getElementById("direccion");
		let codigoPostal = document.getElementById("codigoPostal");
		let localidad = document.getElementById("localidad");
		let provincia = document.getElementById("provincia");
		let telefono = document.getElementById("telefono");

		nombre.innerHTML = factura.cliente.nombre;
		apellidos.innerHTML = factura.cliente.apellidos;
		dni.innerHTML = factura.cliente.dni;
		email.innerHTML = factura.cliente.email;
		direccion.innerHTML = factura.cliente.direccion;
		codigoPostal.innerHTML = factura.cliente.codigoPostal;
		localidad.innerHTML = factura.cliente.localidad;
		provincia.innerHTML = factura.cliente.provincia;
		telefono.innerHTML = factura.cliente.telefono;


		let elementos = window.opener.getFactura().elementos;
		
		let tabla = document.getElementsByTagName('tbody');
		let nuevoProducto;
		let total=0;
		let producto = "";
		for (var i = 0; i < elementos.length; i++) {
			nuevoProducto =document.createElement('tr');
			producto = 
				"\t<td>"+elementos[i].cantidad+"</td>\n"+
				"\t<td>"+elementos[i].nombreProducto+"</td>\n"+
				"\t<td>"+elementos[i].precioUnitario+"€</td>\n"+
				"\t<td>"+elementos[i].totalPrecio+"€</td>\n";
			nuevoProducto.innerHTML = producto;
			total+=elementos[i].totalPrecio;
			tabla[0].appendChild(nuevoProducto);
			
		}

		let pantallaTotal = document.getElementById("total");
		pantallaTotal.innerHTML += Math.round(total*100)/100 +"€";
		
		
		
	}

	
		let init = function(){
			setTimeout(mostrarFactura, 100);
		}
	document.addEventListener("DOMContentLoaded", init);

	
	
	
	  


	  
}