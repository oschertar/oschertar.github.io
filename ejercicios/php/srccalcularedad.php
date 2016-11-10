<?php

function calcularEdad($dia, $mes, $anno){
	$annoActual = date("Y");
	$mesActual = date("n");
	$diaActual = date("j");
		 
	if(($mes == $mesActual) && ($dia > $diaActual)) 
		$anno+=1;	 
	
	if($mes > $mesActual)
		$anno+=1;

	return $annoActual-$anno;
}
?>
    						