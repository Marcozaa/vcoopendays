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
$titoloDomanda = $_GET['titoloDomanda'];
$id = $_GET['idutente'];
$descrizione = $_GET['descrizione'];
// Check connection

$data = DateTime::createFromFormat('!Y-m-d', date('Y-m-d'));
$formatData =  $data->format('d/m/Y'); 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO `Domanda_Forum`(`Contenuto`, `Utente`, `descrizione`,  `data`) VALUES  ('" . $titoloDomanda . "', '" . $id . "', '" . $descrizione . "',  '". date("Y-m-d H:i:s") ."')";


if ($conn->query($sql) === TRUE) {
    echo "New created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
