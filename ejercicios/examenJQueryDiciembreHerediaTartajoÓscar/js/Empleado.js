

	Empleado = function(nombre, fechaNacimiento, dni){
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
		this.dni = dni;
	}

	Empleado.prototype.crearNuevaVentana = function(){
		
		let diasRestantes = new Date(2017,11,31) - new Date();
		diasRestantes = Math.floor(diasRestantes/1000/60/60/24)+1;
		let nuevaVentana = window.open("","","width=600,height=600");
		nuevaVentana.document.open();
		nuevaVentana.document.write("<html>"+
											"<head>"+
												"<title>Óscar Heredia Tartajo</title>" +
											"</head>" + 
											"<body>" + 
												"<h1>Óscar Heredia Tartajo</h1>" +
												"<p>Nombre: " + this.nombre + "</p>" +
												"<p>Fecha Nacimiento: " + this.fechaNacimiento + "</p>" +
												"<p>DNI: " + this.dni + "</p>" +
												"<p>Tiempo restantes hasta fin de año: " + diasRestantes + "</p>" +
											"</body>" +
									"</html>");
		nuevaVentana.document.close();
		};



