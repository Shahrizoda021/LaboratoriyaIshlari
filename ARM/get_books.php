<?php
// PHP skripti: get_books.php

// 1. HTTP Sarlavhalari (Headers)
// Javobning JSON formatida ekanligini belgilash
header('Content-Type: application/json');
// CORS ruxsati (faqat test uchun, real loyihada xavfsizroq qilish kerak)
header('Access-Control-Allow-Origin: *'); 

// 2. Ma'lumotlar bazasi sozlamalari (O'zingiznikini kiriting!)
$servername = "localhost";
$username = "sizning_db_username"; 
$password = "sizning_db_password"; 
$dbname = "onlinekutubxona";

// Ulanishni yaratish
$conn = new mysqli($servername, $username, $password, $dbname);

// Ulanishni tekshirish
if ($conn->connect_error) {
    // Ulanishda xato bo'lsa JSON formatida xabar chiqarish
    http_response_code(500); // Server Error statusini belgilash
    echo json_encode(["status" => "error", "message" => "DB ulanishda xato: " . $conn->connect_error]);
    exit();
}

// 3. SQL So'rovi va Ma'lumotlarni Olish
$sql = "SELECT id, title, author, year, description FROM kitoblar ORDER BY id DESC";
$result = $conn->query($sql);

$books_array = array();

if ($result && $result->num_rows > 0) {
    // Ma'lumotlarni massivga joylash (Serialization uchun tayyorlash)
    while($row = $result->fetch_assoc()) {
        $books_array[] = $row;
    }
    
    // Muqammal JSON javobini yaratish
    $response = [
        "status" => "success",
        "total" => count($books_array),
        "books" => $books_array
    ];
} else {
    // Ma'lumotlar topilmasa
    $response = [
        "status" => "success",
        "total" => 0,
        "message" => "Kutubxonada kitoblar topilmadi."
    ];
}

$conn->close();

// 4. JSON javobni chiqarish
// JSON_PRETTY_PRINT chiroyli formatlash uchun, ishlatish majburiy emas
echo json_encode($response, JSON_PRETTY_PRINT);
?>