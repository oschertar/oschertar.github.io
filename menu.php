<?php

function inicio($titulo, $style) {
    print "<!DOCTYPE html>\n";
    print "<html lang=\"es\">\n";
    print "     <head>\n";
    print "         <meta charset=\"utf-8\"/>\n";
    print "         <title>$titulo</title>\n";
    print "         <link href=\"../css/$style\" rel=\"stylesheet\" type=\"text/css\"/>\n";
    print "     </head>\n";
    print "\n";
    print "<body>\n";
    print "\n";
    echo '
    <ul id="menuprincipal">
    
    <li id="inicio"><a href="index.php">Inicio</a></li>
    
    <li><a href="indexphp.php">PHP</a></li>
    <li><a href="indexandroid.php">Android</a></li>
    <li><a href="indexjs.php.php">JavaScript</a></li>
    <li><a href="indexdespliegue.php">Despliegue</a></li>
    <li id="ultimo"><a href="indexdiweb.php">DIWEB</a></li>
    
    <li id="modificado"><a href="sobremi.php">Sobre mi</a></li>
    
    
    
    
    </ul>
    
    
    ';

}

?>
