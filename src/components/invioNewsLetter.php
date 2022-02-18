<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$to = $_GET["mailLogin"];
$from = 'vcoopenLetter@vco.it';
$fromName = 'vcoLetters';

$subject = "HTML";  
$htmlContent = ' 
                <html> 
                <head> 
                    <title>Login</title> 
                </head> 
                <body> 
                    <h1>Sei stato invitato a iscriverti a un workshop - nome - </h1> 
                    <h1 id="nomeWorkshop"></h1>
                    <table cellspacing="0" style="border: 2px dashed #FB4314; width: 100%;">
                        <p>ciao</p>
                    </table> 
                    <script>
                
                    </script>
                </body> 
                </html>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= 'From: ' . $fromName . '<' . $from . '>' . "\r\n";

if (mail($to, $subject, $htmlContent, $headers)) {
} else {
    echo 'Email sending failed.';
}
