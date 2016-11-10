<?php

function comprobarUsuario($tipoUsuario){
	if($tipoUsuario=="usuario"){
		echo "<li><a href=\"#\">Inicio</a></li>";
		echo "<li><a href=\"#\">Ver Perfil</a></li>";
		echo "<li><a href=\"#\">Ver Tareas</a></li>";
		echo "<li><a href=\"#\">Calendario</a></li>";
		echo "<li><a href=\"#\">Matricularse...</a></li>";
		echo "<li><a href=\"#\">Desconectarse</a></li>";
	}else if($tipoUsuario=="administrador"){
		echo "<li><a href=\"#\">Inicio</a></li>";
		echo "<li><a href=\"#\">Asignar Tareas</a></li>";
		echo "<li><a href=\"#\">Gestionar Grupos</a></li>";
		echo "<li><a href=\"#\">Modificar usuarios</a></li>";
		echo "<li><a href=\"#\">Asignar roles</a></li>";
		echo "<li><a href=\"#\">Ver perfil</a></li>";
		echo "<li><a href=\"#\">Desconectarse</a></li>";


	}else if($tipoUsuario=="invitado"){
		echo "<li><a href=\"#\">Inicio</a></li>";
		echo "<li><a href=\"#\">Login</a></li>";
		echo "<li><a href=\"#\">Registro</a></li>";

	}
	
}


?>
    						