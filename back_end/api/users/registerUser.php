<?php
header('Content-Type: application/json');

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Max-Age: 86400'); // 24 hours

try {
    $connection = mysqli_connect("localhost", "root", "", "social_media", 9306);

    $requestData = json_decode(file_get_contents('php://input'), true);

    $newUsername = $requestData['username'];
    $newPassword = $requestData['password'];
    $newFullname = $requestData['fullname'];
    $newDate = date("Y-m-d H:i:s");

    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);

    $sql = "SELECT * 
            FROM users
            WHERE username = '$newUsername'";

    $user = mysqli_query($connection, $sql);

    $users = array();

    if ($user) {
        while ($row = mysqli_fetch_assoc($user)) {
            $users[] = $row;
        }
    }

    if (empty($users)) {

        $sql2 = "INSERT INTO users (username, fullname, password , date) VALUES ('$newUsername', '$newFullname', '$hashedPassword' , '$newDate')";
        $result = mysqli_query($connection, $sql2);

        $massage = null;

        if ($result) {
            $massage = 'Registered successfully !';
        } else {
            $massage = 'Registration failed !';
        }

        echo json_encode($massage);
    } else {
        echo json_encode("This username already been declaired");
    }
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
