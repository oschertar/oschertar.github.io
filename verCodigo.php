<?php
	if (isset($_GET['src'])) 
        highlight_file($_GET['src']);    
    else 
        header("Location: http:\\localhost");
    
    //echo("<br/><br/><a href=\"$_GET[src]\">Volver</a>");
    echo("<br/><br/><a href=\"javascript:window.history.go(-2);\">Volver</a>");

?>