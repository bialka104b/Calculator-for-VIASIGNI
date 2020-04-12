<?php

$_POST['wynik'];
if (empty ($_POST)){
    
}
$ZAPISZ = $_POST['wynik'];
file_put_contents('wynik.txt', $ZAPISZ);

?>