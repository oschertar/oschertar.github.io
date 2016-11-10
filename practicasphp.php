<?php
include 'menu.php';
include 'footer.php';
$title= "Directorio PHP";
escribirMenu($title);
?>


		<!-- Main -->
			<div id="main">

				<!-- Intro -->
					<section id="top" class="one dark cover">
						<div class="container">

							<header>
								<h2 class="alt">Prácticas de PHP</h2>
								
							</header>

							<footer>
							<div style="margin: 0 auto;" class="4u 12u$(mobile)">
							<article class="item">
										<a class="image fit"><img src="images/php.jpg" alt="" /></a>
										
									</article>	
									</div>
							</footer>


						</div>
					</section>

				<!-- PHP -->
					<section id="PHP" class="two">
						<div class="container">

							
							<h3>Ejercicios Básicos</h3>
							<ol>
								<li><a href="ejercicios/php/holamundo.php">Hola Mundo</a></li>
								<li><a href="ejercicios/php/mayor.php">Mayor de dos variables</a></li>
								<li><a href="ejercicios/php/mesdias.php">Calcular los dias de un mes</a></li>
								<li><a href="ejercicios/php/calcularedad.php">Calcular edad</a></li>
								<li><a href="ejercicios/php/estaciones.php">Estación del año</a></li>
								<li><a href="ejercicios/php/tipousuario.php">Perfil de usuario</a></li>
								<li><a href="ejercicios/php/numeros1al10.php">Números 1 al 10</a></li>
								<li><a href="ejercicios/php/sumapares.php">Suma de los 3 primeros números pares</a></li>
							</ol>
							<h3>Arrays</h3>
							<ol>
								<li><a href="ejercicios/php/tablademultiplicar.php">Tablas de multiplicar</a></li>
								<li><a href="ejercicios/php/paletadecolores.php">Paleta de colores</a></li>
								<li><a href="ejercicios/php/calendario.php">Calendario</a></li>
							</ol>
							
							<h3>Formularios</h3>
							<ol>
								<li><a href="ejercicios/php/cv.php">Curriculum Vitae</a></li>
								
							</ol>

							<h3>Funciones</h3>
							<ol>
								<li><a href="ejercicios/php/calcularDNI.php">Calcular Letra DNI</a></li>
								<li><a href="ejercicios/php/sumarRecursivo.php">Sumar Recursivo los Dígitos de un Número</a></li>
								
							</ol>


							<h3>Proyectos</h3>
							<ol>
								<li><a href="ejercicios/php/verbosirregulares.php">Verbos irregulares en inglés</a></li>
								
							</ol>
							<h3>Webs</h3>
							<ol>
								<li><a href="ejercicios/php/webModularizada/index.php?page=index">Web Modularizada</a></li>
								
							</ol>

							
							
						</div>
					</section>

				

			</div>

		<?php
		escribirFooter();
		?>

	</body>
</html>