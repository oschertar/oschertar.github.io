<?php
include 'srcmesdias.php';
include '../../menupracticas.php';
?>

	

							

							<?php

							menuPracticas("Calcular los dias de un mes", "PHP");
							$mes= "Febrero";
							$anno = 2016;
							$dias =calcularDiasMes($mes, $anno);
							echo "$mes del $anno tiene $dias días.";
							?>

    						<h3><a href='../../verCodigo.php?src=ejercicios/php/srcmesdias.php''>Ver Código</a></h3>
    						
							
							
						</div>
					</section>

				

			</div>

		<!-- Footer -->
			<div id="footer">

				<!-- Copyright -->
					<ul class="copyright">
						<li>&copy; Sitio de Óscar Heredia Tartajo.</li><li>Todos los derechos reservados</li>
					</ul>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.scrollzer.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>