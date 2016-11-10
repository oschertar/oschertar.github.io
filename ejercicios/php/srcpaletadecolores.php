<?php

function generarPaletaColores2(){
	$r = array("10","00","22","44","66","88","AA","CC","FF");
    $g = array("10","00","22","44","66","88","AA","CC","FF");
    $b = array("10","00","22","44","66","88","AA","CC","FF");
    $color = "";
    echo "<table>";
    for ($i=0; $i < count($r); $i++) { 
        for ($j=0; $j < count($g); $j++) { 
            echo "<tr>";
            for ($k=0; $k < count($b); $k++) { 
                $color = "#$r[$i]$g[$j]$b[$k]";
                echo "<td bgcolor=\"$color\">$color</td>";
            }
            echo "</tr>";
        }
    }
    echo "</table>";

        

}

function generarPaletaColores(){
    
    $color = "";
    echo "<table>";
    for ($i=0; $i < 255; $i+=16) { 
        for ($j=0; $j < 255; $j+=32) { 
            
            echo "<tr>";

            for ($k=0; $k < 255; $k+=64) { 
                $color = "rgb($i,$j,$k)";
                echo "<td style=\"background-color:$color\">$color</td>";
            }
            echo "</tr>";
        }
    }
    
    echo "</table>";

        

}


?>
    						