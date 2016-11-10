<?php
include 'srcverbosirregulares.php';
include '../../menupracticas.php';
include '../../footer.php'
?>

	

							

							<?php
							echo "<link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">";
							menuPracticas("Verbos Irregulares", "PHP");
							
							generarVerbosIrregulares();
							
							?>

    						<h3><a href='../../verCodigo.php?src=ejercicios/php/srcverbosirregulares.php''>Ver Código</a></h3>
    						
							
							
						</div>
					</section>

				

			</div>

		<?php
		escribirFooter();

		?>


	</body>
	
</html>