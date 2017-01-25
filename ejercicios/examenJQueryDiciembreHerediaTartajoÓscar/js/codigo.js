//Óscar Heredia Tartajo
$(function(){
	$("#paginaEmpleado").on("click",function(){
 		window.open("empleado.html")
	});
 	$("#enlace").on("click", function(){ 
 		crearNuevaVentana()
 	});
});


	

	let crearNuevaVentana = function(){

		nuevaVentana = window.open("", "Óscar Heredia Tartajo");
		nuevaVentana.document.open();
		nuevaVentana.document.write("<html>"+
			"<head>"+
			"<title>Óscar Heredia Tartajo</title>" +
			"<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>" +
			"<script type='text/javascript' src='js/detodounpoco.js' defer></script>" +
		"</head>" + 
		"<body>" + 
			"<button id='informar'>Informa</button>" +
			"<button id='botonRaton'>Ratón</button>" +
			"<button id='salir'>Salir</button>" +
			"<div id='raton' style='height:100px'></div>" +
		"</body>" +
	"</html>");
		
		nuevaVentana.document.close();
		
	}

	

	
