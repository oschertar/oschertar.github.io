<?php

function comprobarEstacion(){
	$mesActual = date("n");
	$diaActual = date("j");
	$estacion;
	switch($mesActual){
		
		case 1:
		case 2:
			$estacion = "INVIERNO";
		break;

		case 4:
		case 5:
			$estacion = "PRIMAVERA";
		break;

		case 7:
		case 8:
			$estacion = "VERANO";
		break;

		case 10:
		case 11:
			$estacion = "OTOÑO";
		break;

		case 3:
			if($diaActual<21)
				$estacion= "INVIERNO";
			else
				$estacion = "PRIMAVERA";
		break;

		case 6:
			if($diaActual<21)
				$estacion= "PRIMAVERA";
			else
				$estacion = "VERANO";
		break;

		case 9:
			if($diaActual<23)
				$estacion= "VERANO";
			else
				$estacion = "OTOÑO";
		break;

		case 12:
			if($diaActual<21)
				$estacion= "OTOÑO";
			else
				$estacion = "INVIERNO";
		break;

	}

	return $estacion;
}

function cambiarImagenEstacion(){
	

	switch(comprobarEstacion()){
		case "VERANO":
			echo "<img src='../../images/verano.png'/>";
		break;
		case "OTOÑO":
			echo "<img src='../../images/otoño.png'/>";
		break;
		case "INVIERNO":
			echo "<img src='../../images/invierno.png'/>";
		break;
		case "PRIMAVERA":
			echo "<img src='../../images/primavera.png'/>";
		break;

	}
	
		
}
?>
    						