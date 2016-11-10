<?php


function generarVerbosIrregulares(){
   $verbos = array(
    array("be","was/were", "been", "ser/estar"), 
    array("become","became", "become", "convertirse en,/hacerse"), 
    array("begin","began", "begun", "empezar, comenzar"), 
    array("bite", "bit", "bitten", "morder"), 
    array("blow", "blew", "blown", "soplar"), 
    array("break", "broke", "broken", "romper"),
    array("bring", "brought", "brought", "llevar,traer"),
    array("build", "built", "built", "construir"),
    array("buy","bought", "bought", "comprar"),
    array("can", "could", "been able", "poder"),
    array("catch", "caught", "caught", "coger,atrapar,tomar"),
    array("choose", "chose", "chosen", "elegir,escoger"),
    array("come", "came", "come", "venir"),
    array("cost", "cost", "cost", "costar"),
    array("cut", "cut", "cut", "cortar"),
    array("draw", "drew", "drawn", "dibujar"),
    array("drink", "drank", "drunk", "beber"),
    array("drive", "drove", "driven", "conducir"),
    array("eat", "ate", "eaten", "comer"),
    array("fall", "fell", "fallen", "caer"),
    array("feel" ,"felt", "felt", "sentir"),
    array("fight", "fought", "fought", "pelear,luchar"),
    array("find", "found", "found", "encontrar"),
    array("fly", "flew", "flown", "volar")
    );

    define('NHUECOS', 2);
    define('FILAS', 4);
    define('NCOLUMNAS', 4);
    
    $contador=0;
    $indices = array();
    do{

        $auxIndices = array();
    
        for($i=0;$i<NHUECOS;$i++){
            do $numeroAleatorio = rand(0,NCOLUMNAS-1);  while(in_array($numeroAleatorio, $auxIndices));
            array_push($auxIndices,$numeroAleatorio);
        }
    
        do{ 
            $numeroFilasAleatorias = rand(0,count($verbos)-1); 
            
        }while(array_key_exists($numeroFilasAleatorias, $indices));
       
        $indices[$numeroFilasAleatorias]=$auxIndices;
        $contador++;
        
        
   
    }while($contador<FILAS);

    $aciertos = 0;
    $estilo = $valorInput = "";  
    
  
    

   if (isset($_POST['enviar'])) {
        $indices = $_POST['entrada'];
    }

    
    echo "<p><strong>Verbos Irregulares:</strong></p>";
    echo "

    <table>
            <thead>
                <tr>
                    <td>Presente</td>
                    <td>Pasado simple</td>  
                    <td>Participio</td> 
                    <td>Traduccion</td>  
                </tr>
            </thead>
            <tbody>
                
            ";
    echo "<form id=\"verbos\" action=\"$_SERVER[PHP_SELF]\" method=\"post\">";
    
    foreach ($indices as $indice => $fila) {
        echo "<tr>\n";
        for ($j=0; $j<NCOLUMNAS; $j++) {
            
            if (isset($_POST['enviar'])) {
                    $condicion = array_key_exists($j, $fila); 
                if ($condicion) {
                    $valor = $fila[$j];
                    if ($valor == $verbos[$indice][$j]) {
                        $valorInput = $verbos[$indice][$j];
                        $aciertos++;
                        $estilo="background:lightgreen; color: black";
                    }else{
                        $valorInput = $indices[$indice][$j];
                        $estilo="background:lightpink; color: black";
                    }
                }
            }else{
                $condicion = in_array($j, $fila);
            }

            if ($condicion) {
                echo "<td>\n\t\t<input class='oculto' STYLE='$estilo' type='text' name='entrada[$indice][$j]' value='$valorInput' /></td>";
            }else{
                echo "<td>\n\t\t<span class='visible'>" . $verbos[$indice][$j] . "</span></td>";
            }
            
        }
        
    }
    echo "</tr>\n";
    echo "</tbody>";
    echo "</table> ";
    echo "<div id='botones'><input class='boton' type='submit' name='enviar' value='Enviar'>";
    echo "<input class='boton' type='submit' name='reiniciar' value='Reiniciar'></div>";
    echo "</form>";

    echo "<p><strong>Aciertos:</strong> $aciertos</p>";

    if (isset($_POST['reiniciar'])) {
        $valorInput = "";
        $indices = array();
        $estilo = "background:white; color: black";  
    }
}

?>

