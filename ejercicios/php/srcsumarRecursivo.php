<?php


function crearFormulario(){
    ?>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <h4></h4><input type="text" name="numero" >
        <input type="submit" name="enviar" value="Calcular Suma">
    </form>


    <?php
        if(isset($_POST['enviar'])) {
            if(!is_numeric($_POST['numero'])) {
                echo ("<p>Introduce un número.</p>");
            } else {
                $resultado=sumarRecursivo($_POST['numero']);
                echo "<p>Suma: $resultado</p>";
            }
    }
}


function sumarRecursivo($numero){
    if($numero==0)
        return 0;
    else
       return sumarRecursivo(variant_int($numero/10)) + $numero%10;
}

?>

