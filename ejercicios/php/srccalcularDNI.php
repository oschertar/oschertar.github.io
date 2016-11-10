<?php


function crearFormulario(){
    ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <h4></h4><input type="text" name="dni" maxlength="8">
        <input type="submit" name="enviar" value="Calcular Letra">
    </form>


    <?php
        if(isset($_POST['enviar'])) {
            if(!is_numeric($_POST['dni'])) {
                echo ("<p>Introduce un número.</p>");
            } else if (strlen($_POST['dni'])!=8){
                echo ("<p>La longitud del DNI debe de ser 8.</p>");
            } else {
                $letra=calcularLetraDNI($_POST['dni']);
                echo "<p>La letra del DNI " .$_POST['dni']. " es $letra.</p>";
            }
    }
}


function calcularLetraDNI($numero){
    $letras = array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
    return $letras[$numero%23];
}

?>

