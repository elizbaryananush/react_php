<?php
header('Content-Type: application/json');

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 24 hours

$hostname = "localhost";
$username = *write your myphpadmin username*;
$password = *write your password*;
$database = *write your database name*;
$port = 9306

try {
    $connection = mysqli_connect($hostname, $username, $password, $database, $port);

    $sql = "SELECT * 
            FROM users
            ";

    $result = mysqli_query($connection, $sql);

    $results = array();

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $results[] = $row;
        }

        echo json_encode($results);
    }
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage();
}
