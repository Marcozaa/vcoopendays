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
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$trp = mysqli_query($conn, "SELECT * from Scuola");
$rows = array();
while ($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}

print json_encode($rows); //convert php data to json data
