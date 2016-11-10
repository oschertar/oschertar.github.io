<?php

function generarTabla(){
	for ($i = 0; $i <= 10; $i++) {
		echo "<strong>Tabla del $i</strong></br>";
		for($j = 0; $j <=10; $j++) {
			$resultado = $j * $i;
			echo "$i x $j = $resultado</br>"; 
		}
		echo "</br>";
   	}

	
}
?>
    						