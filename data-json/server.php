<?php
header("Content-Type: application/json");

// Mengecek apakah data komentar diterima dengan metode POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
// Mengambil data komentar dari formulir
$nama = $_POST["nama"];
$komentar = $_POST["komentar"];

// Melakukan pengolahan data (misalnya, menyimpan komentar ke database atau file)

// Mengembalikan data komentar yang baru ditambahkan sebagai respons JSON
echo json_encode(array("nama" => $nama, "komentar" => $komentar));
} else {
echo json_encode(array("error" => "Metode tidak valid"));
}
?>

