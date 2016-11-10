<?php

include 'srccalendario.php';
if(isset($_POST['submit'])){

	
		$mes = $_POST['mesElegido'];
		$anno = $_POST['annoElegido'];
		
		
}

include '../../menupracticas.php';
include '../../footer.php'
?>

	

							

							<?php

							menuPracticas("Calendario", "PHP");
							$meses = array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
							?>
							<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
							<select name='mesElegido'>";
							<?php
							for($i=0;$i<12; $i++){
								echo "<option value='$i'>$meses[$i]</option>";
							}
							echo "</select>";
							echo "<select name='annoElegido'>";
							for($j=1960;$j<=2030; $j++){
								echo "<option value='$j'>$j</option>";
							}
							echo "</select>
							<input type='submit' name='submit' value='Ver calendario' /></form></br>";
							
							if(isset($_POST['submit'])){
								echo "<h3>$meses[$mes] del $anno</h3>";
								crearCalendario($mes,$anno);
								
							}
							?>

    						<h3><a href='../../verCodigo.php?src=ejercicios/php/srccalendario.php'>Ver Código</a></h3>
    						</br>
							
							
						</div>
					</section>

				

			</div>

		<?php
		escribirFooter();
		?>


	</body>
</html>