<?php
function escribirMenu($title){

	echo'
<!DOCTYPE HTML>

<html>
	<head>
		<title>'.$title.'</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body>

		<!-- Header -->
			<div id="header">

				<div class="top">

					<!-- Logo -->
						<div id="logo">
							<span class="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
							<h1 id="title">Óscar Heredia</h1>
							<p>2º DAW</p>
						</div>

					<!-- Nav -->
						<nav id="nav">
							
							<ul>
								<li><a href="index.html" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Inicio</span></a></li>
								<li><a href="practicasphp.php" id="PHP-link" class="skel-layers-ignoreHref"><span class="icon fa-server">PHP</span></a></li>
								<li><a href="practicasandroid.php" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-android">Android</span></a></li>
								<li><a href="practicasjavascript.php" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-jsfiddle">JavaScript</span></a></li>
								
								<li><a href="practicasdiweb.php" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-html5">DIWEB</span></a></li>
								
							</ul>
						</nav>

				</div>
				<!--
				<div class="bottom">

					 Social Icons 
						<ul class="icons">
							<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
							<li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
							<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
							<li><a href="#" class="icon fa-envelope"><span class="label">Email</span></a></li>
						</ul>

				</div>
				-->
			</div>


';




}









?>





