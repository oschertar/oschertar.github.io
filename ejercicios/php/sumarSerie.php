<?php
include 'srcsumarserie.php';
include '../../menupracticas.php';
include '../../footer.php'
?>

	

							

							<?php
							echo "<link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css\">";
							menuPracticas("Sumar Serie", "PHP");
							iniciar();
							
							
							?>

    						<h3><a href='../../verCodigo.php?src=ejercicios/php/srccv.php''>Ver Código</a></h3>
    						
							
							
						</div>
					</section>

				

			</div>

		<?php
		escribirFooter();

		?>


	</body>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  	<script>
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
  </script>
</html>