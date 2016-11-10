<?php

function comprobarDatos(){
	/*$valorNombre = $valorEmail = $nombreErr = $emailErr = "";*/
	$valorNombre="";
	$valorEmail="";
	$nombreErr="";
	$emailErr="";
	if (isset($_POST["submit"])) {
		if (empty($_POST["nombre"])) {
	    	$nombreErr = "Nombre es obligatorio";
		} else {
	   	 $valorNombre = test_input($_POST["nombre"]);
		}

		if (empty($_POST["email"])) {
		    $emailErr = "Email es obligatorio";
		} else {
			$valorEmail = test_input($_POST["email"]);
			}

	}
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<style> 
	.error{
		color: #FF0000;
	}
	</style>
	<meta charset="UTF-8">
	<title>Test</title>
</head>
<body>
	

	<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
		
	<h4>Nombre: <input type="text" name="nombre" value="<?php echo $valorNombre;?>">
  <span class="error">* <?php echo $nombreErr;?></span></h4>
	<h4>Email: <input type="text" name="email" value="<?php echo $valorEmail;?>">
  <span class="error">* <?php echo $emailErr;?></span></h4>
	<input type="submit" name="submit" value="Enviar">

	</form>

	<?php
	echo "<p>$valorNombre</p>";
	echo "<p>$valorEmail</p>";
	?>
</body>
</html>


<?php




?>