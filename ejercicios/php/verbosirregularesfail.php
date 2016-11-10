/*echo "<form action='$_SERVER[PHP_SELF]' method='post'>";
    foreach ($indices as $indice => $valor) {
        echo "</br>";
        for ($i=0; $i < NCOLUMNAS; $i++) {
            if (in_array($i, $valor)) {
                echo "<input type='text' name='entrada[$indice][$i]' />";
            }else{
                echo $verbos[$indice][$i];
            }
        }
    }


    
    echo "</br><input type='submit' name='enviar' value='Enviar' />";
    echo "</form>";
    if (isset($_POST['enviar'])) {
        $datos = $_POST['entrada'];
        $aciertos = 0;
        foreach ($datos as $key => $value) {
            foreach ($value as $key2 => $value2) {
                if($value2 == $verbos[$key][$key2]){
                    $aciertos++;
                    $color = "bgcolor='green'";
                }else{
                    $color = "bgcolor='red'";
                }
            }
        }
        echo "ACIERTOS: $aciertos";
    }  */