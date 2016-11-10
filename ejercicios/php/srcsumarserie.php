<?php



function iniciar(){
	if(isset($_POST['submit']) && empty($_POST['sumandos'])){
		header("Location:sumarSerie.php");
	}else{
		$sumandos=introducirDatos();
		sumar($sumandos);
	}
}
function introducirDatos(){
	$sumandos="";
	echo "<form method='post'";?> action="<?php echo $_SERVER['PHP_SELF']; ?>">
	<?php
	echo"<h4>Cantidad Sumandos: <input type='number' name='sumandos'/></h4>
	<input type='submit' name='submit'/>
	</form>";
	if(isset($_POST['sumandos']))
		$sumandos=$_POST['sumandos'];
	return $sumandos;
}


function sumar($sumandos){
	$n = array();
	echo "<form method='post'";?> action="<?php echo $_SERVER['PHP_SELF']; ?>">
	<?php
	for($i=1;$i<=$sumandos;$i++){
		echo "<h4>Sumando $i:<input type='number' name='$i'/></h4>";
		array_push($n, $i);
	}

	echo var_dump($n);
	

}
?>				