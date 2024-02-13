<?php
header('Content-Type: application/json');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 24 hours

$hostname = "localhost";
$username = "root";
$password = "";
$database = "social_media";

$requestData = json_decode(file_get_contents('php://input'), true);

$newUsername = $requestData['username'];

try {
    $connection = mysqli_connect($hostname, $username, $password, $database, 9306);

    $sql = "SELECT * 
            FROM users 
            WHERE username = '$newUsername'";

    $result = mysqli_query($connection, $sql);

    $results = array();

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            $results[] = $row;
        }
        echo json_encode($results);
    } else {
        echo json_encode('hello');
    }
} catch (Exception $e) {
    echo json_encode('Caught exception: ', $e->getMessage());
}
