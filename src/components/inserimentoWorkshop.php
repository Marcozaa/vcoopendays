<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$host = "87.250.73.22";
$database   = "Popa_Zanchin_GestioneEventi";
$username   = "exAdminer";
$password     = "CBC349bb";
$port = 3306;
// Create connection
$conn = new mysqli($host, $username, $password, $database, $port);
$codice_meccano = $_GET['codice'];
$nome = $_GET['nome'];
$descrizione = $_GET['descrizione'];
$posti = $_GET['posti'];
$padiglione = $_GET['id'];
$immagine = $_GET['linkImmagine'];
// Check connection

echo ($codice_meccano . "-" . $nome . "-" .$descrizione . "-" .$posti . "-");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO `Workshop` (`Nome`, `Descrizione`, `Codice_Meccanografico`, `Posti`, `padiglioneUtilizzato`, `Tempo_Inizio`, `Tempo_termine`, `immagine_cover`) 
VALUES ('". $nome . "', '" . $descrizione . "', '" . $codice_meccano . "', '". $posti ."', '". $padiglione ."', '', '','" . $immagine . "')";


if ($conn->query($sql) === TRUE) {
    echo "New created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
