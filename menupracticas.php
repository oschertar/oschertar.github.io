<?php

function menuPracticas($title, $asignatura){
echo "
<!DOCTYPE HTML>

<html>
	<head>
		<title>$title</title>
		<meta charset='utf-8' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		
		<link rel='stylesheet' href='../../assets/css/main.css' />
		
	</head>
	<body>

		
			<div id='header'>

				<div class='top'>

					
						<div id='logo'>
							<span class='image avatar48'><img src='../../images/avatar.jpg' alt='' /></span>
							<h1 id='title'>Óscar Heredia</h1>
							<p>2º DAW</p>
						</div>

					
						<nav id='nav'>
							
							<ul>
								<li><a href='../../index.html' id='top-link' class='skel-layers-ignoreHref'><span class='icon fa-home'>Inicio</span></a></li>
								<li><a href='../../practicasphp.php' id='PHP-link' class='skel-layers-ignoreHref'><span class='icon fa-server'>Atrás</span></a></li>
								
							</ul>
						</nav>

				</div>

				

			</div>

		
			<div id='main'>

				
					<section id='top' class='one dark cover'>
						<div class='container'>

							<header>
								<h2 class='alt'>Prácticas de $asignatura</h2>
								
							</header>

							<footer>
							<h3>$title</h3>
							</footer>


						</div>
					</section>

				
					<section id='PHP' class='two'>
						<div class='container'>

							<header>
								<h2>PHP</h2>
							</header>

";

}


?>