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
$codiceScuola = $_GET['codiceScuola'];
$idUtente = $_GET['idUtente'];



$entityBody = file_get_contents('php://input');
echo $entityBody;
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `Partecipazione`(`Nome_Workshop`, `Codice_Meccanografico_Workshop`, `ID_Visitatore`) VALUES (" . $nomeWorkshop . "," . $codiceScuola . "," . $idUtente . ")";


$sql2 = "UPDATE `Workshop` SET `Posti` = `Posti` - 1";

if ($conn->query($sql) === TRUE) {
    echo "New created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}





if ($conn->query($sql2) === TRUE) {
    echo "Updated successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}