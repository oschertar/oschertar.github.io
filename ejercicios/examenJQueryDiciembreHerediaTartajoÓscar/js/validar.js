$(function(){
	//http://www.formvalidator.net/index.html
	$.formUtils.addValidator({
  	name : 'letraDNI',
  	validatorFunction : function(value, $el, config, language, $form) {
  		letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  		if(value.length != 10){
  			return false;
  		}else{
	  		if (value.indexOf("-") >= 0){
	  			let dni = value.split(/[- ]/);
	  			if(dni[1] != undefined)
	  				return letras[dni[0]%23] === dni[1].toUpperCase();
	  			else
	  				return false;
	  		}
	  		else{
	  			return false;
	  		}
	  	}
  		    			
  	},
  	errorMessage : 'Formato Inválido.',
  	errorMessageKey: 'FormatoInvalido'
	});

	 $.validate({
	    	modules : 'date, toggleDisabled',
	    	disabledFormFilter : 'form#registration-form'
  		
	   
	  });

	 
	 $("#validar").on("click", function(){
	 	let empleado = new Empleado($("#campoNombre").val(),$("#campoFechaNacimiento").val(),$("#campoDNI").val());

			empleado.crearNuevaVentana();
	 });
});


	
		