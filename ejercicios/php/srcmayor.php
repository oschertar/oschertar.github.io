<?php

function calculaMayor($primerNum, $segundoNum){
	echo "Los dos números elegidos son $primerNum y $segundoNum</br>";
	if ($primerNum>$segundoNum)
		return $primerNum;
	elseif ($primerNum<$segundoNum) 
		return $segundoNum;
	else
		return $primerNum;
		 	 
}

?>
    						