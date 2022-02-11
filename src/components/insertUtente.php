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

$nome = $_GET['nome'];
$cognome = $_GET['cognome'];
$email = $_GET['email'];
$codiceMeccanografico = $_GET['codiceMecc'];
$password = $_GET['password'];
$classe = $_GET['classe'];
$sesso = $_GET['sesso'];
$dataNascita = $_GET['dataNascita'];
$immagineProfilo = $_GET['profilepic'];


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `Visitatore`(`Codice_Meccanografico_Fruitrice`, `Nome`, `Cognome`, `Email`, `Password`, `Classe`, `Sesso`, `Data_Nascita`, `immagine_profilo`, `Confermato`) VALUES (" . $codiceMeccanografico . "," . $nome . "," . $cognome . "," . $email . "," . $password . "," . $classe . "," . $sesso . ","  . $dataNascita . "," . $immagineProfilo . "," . 0 .");

if ($conn->query($sql) === TRUE) {
    echo "record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}





