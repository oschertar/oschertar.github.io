<?php

$nombre="";
$apellidos="";
$email="";
$sexo="";
$datos = array($nombre, $apellidos, $email, $sexo);




function mostrarCV(){
	if (!isset($_POST['submit'])) {
	echo "<form action = post method = 'post'>
  		<h4>Nombre: <input type='text' required/></h4>
  		<h4>Apellidos: <input type='text' required/></h4>
  		<h4>Email: <input type='email' required/></h4>
  		<h4>Sexo: <input type='radio' name='sexo'/>Hombre <input type='radio' name='sexo' required/>Mujer</h4>
  		<h4>Fecha de nacimiento: <input id='datepicker' type='text' name='nacimiento' step='1' min='1950-01-01' max='2012-12-31' required></h4>
		
  		</br>
  		<h4><input type='checkbox' required /> No soy un robot </h4>
  		<input type='submit'/>
	</form>



	";
	if(isset($_POST['submit'])){
		echo "<h3>$nombre</h3>";
		
								
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
    						