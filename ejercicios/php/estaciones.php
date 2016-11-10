<?php
include 'srcestaciones.php';
include '../../menupracticas.php';
include '../../footer.php'
?>

	

							

							<?php

							menuPracticas("Estación del año", "PHP");
							cambiarImagenEstacion();
							$estacion =comprobarEstacion();
							echo "<p>$estacion</p>";
							
							?>

    						<h3><a href='../../verCodigo.php?src=ejercicios/php/srcestaciones.php''>Ver Código</a></h3>
    						
							
							
						</div>
					</section>

				

			</div>

		<?php
		escribirFooter();
		?>


	</body>
</html>