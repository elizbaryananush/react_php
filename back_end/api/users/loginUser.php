<?php
ob_end_flush();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 24 hours


$data = json_decode(file_get_contents('php://input'), true);

try {
    $connection = mysqli_connect("localhost", "root", "", "social_media", 9306);

    $requestData = json_decode(file_get_contents('php://input'), true);

    $newUsername = $requestData['username'];
    $newPassword = $requestData['password'];

    $sql = "SELECT * 
            FROM users
            WHERE username = '$newUsername'";

    $user = mysqli_query($connection, $sql);

    if ($user) {
        if (mysqli_num_rows($user) > 0) {

            $userData = mysqli_fetch_assoc($user);

            if (password_verify($newPassword, $userData['password'])) {
                setcookie('odjkfs', 'sdlfkhksjf');
                echo json_encode("You're in");
            } else {
                echo json_encode("wrong password");
            }
        } else {
            echo json_encode("User not found.");
        }
    }
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
