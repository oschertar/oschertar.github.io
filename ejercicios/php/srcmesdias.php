<?php

function calcularDiasMes($mes, $anno){
	$bisiesto= false;
	if (($anno%4 == 0 && $anno%100 != 0 )|| $anno%400 == 0)
		$bisiesto= true;
	
	
	switch($mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			return 31;
		break;

		case "Febrero":
		if($bisiesto)
			return 29;
		else
			return 28;
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			return 30;
		break;
		default:
			echo "Mes inválido";
	}
		 	 
}

?>
    						