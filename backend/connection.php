<?php

$con = mysqli_connect("localhost", "adminer", "CBC349bb", "Popa_Zanchin_GestioneEventi");

// Check connessione
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}
