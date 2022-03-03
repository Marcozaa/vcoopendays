<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: POST, PUT, GET, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$host = "87.250.73.22";
$database   = "Popa_Zanchin_GestioneEventi";
$username   = "exAdminer";
$password     = "CBC349bb";
$port = 3306;
// Create connection
$conn = new mysqli($host, $username, $password, $database, $port);

$nomeWorkshop = $_GET['nomeWorkshop'];
$idUtente = $_GET['idUtente'];


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$trp = mysqli_query($conn,"DELETE FROM `Partecipazione` WHERE `ID_Visitatore` = '" . $idUtente . "' && `Nome_Workshop` = '" . $nomeWorkshop . "'");

