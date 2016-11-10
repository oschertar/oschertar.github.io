<?php
include "scripts.php";
include "menu.php";
include "footer.php";
include "contenido.php";



scripts();
?>
	<header>
		<h1>CoffeeCols</h1>
	</header>
	<nav>
	<?php
	menu();
	?>
	</nav>
	<?php
	$page = $_GET['page'];
	if($page == 'index'){
		escribirIndex();
	}else if($page == 'about'){
		escribirAbout();
	}	
	

footer();
?>
<!-- Free template created by http://freehtml5templates.com -->
</body>
</html>
