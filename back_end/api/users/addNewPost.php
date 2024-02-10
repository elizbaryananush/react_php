<?php

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
    $newHashtags = $requestData['hashtags'];
    $newTags = $requestData['tags'];
    $newLocation = $requestData['location'];
    $newContext = $requestData['context'];
    $newUrl = $requestData['url'];
    $newDate = date("Y-m-d H:i:s");

    $sql = "SELECT id FROM users WHERE username = '$newUsername'";

    $result = mysqli_query($connection, $sql);

    $row = mysqli_fetch_assoc($result);

    if ($row) {
        $id = $row['id'];
        $sql2 = "INSERT INTO posts (user_id, hashtags, tags , location ,context ,  img_url , date) VALUES ('$id', '$newHashtags', '$newTags' , '$newLocation' , '$newContext' ,'$newUrl' , '$newDate')";

        $result = mysqli_query($connection, $sql2);

        if ($result) {
            echo json_encode("success");
        } else {
            echo json_encode("d,kn");
        }
    } else {
        echo json_encode('sljdfkj');
    }
} catch (Exception $e) {
    echo json_encode($e->getMessage());
}
