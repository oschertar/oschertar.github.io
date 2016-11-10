<?php
include 'srcmesdias.php';



function crearCalendario($mes, $anno){
    $mes++;
    $semana = 1; 
    $numeroDiasMes = date("t", mktime(0, 0, 0, $mes, 1, $anno));
    for($i = 1; $i <= $numeroDiasMes; $i++) {
        $dia_semana = date('N', strtotime("$anno-$mes". '-' . $i));
        $calendario[$semana][$dia_semana] = $i;       
        if ($dia_semana == 7) 
            $semana++; 
    }

    echo "<table>
            <thead>
                <tr>
                    <td>L</td>
                    <td>M</td>  
                    <td>X</td> 
                    <td>J</td>  
                    <td>V</td>  
                    <td>S</td>  
                    <td>D</td> 
                </tr>
            </thead>
            <tbody>";
    foreach ($calendario as $dias){ 
        echo "<tr>";
            for ($i = 1; $i <= 7; $i++)
                if(isset($dias[$i]))
                    /*if($dias[$i] == date('d'))
                        echo "<td bgcolor=\"green\">$dias[$i]</td>";
                    else*/
                    echo "<td>$dias[$i]</td>";
                else
                    echo "<td></td>"; 
        echo "</tr>";
    }

    echo "</tbody>";
    echo "</table> ";

	
}
?>