<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
$reservasJson = './reservas.json';
$jsonString = file_get_contents($reservasJson);
$data = json_decode($jsonString, true);

if ($data === null) {
    http_response_code(500);
    die(json_encode(['error' => 'Error al decodificar el JSON.']));
}

$reservas = $data['reservas'];
if (empty($reservas)) {
    http_response_code(404);
    die(json_encode(['error' => 'No se encontraron reservas.']));
}
echo json_encode(['reservas' => $reservas]);
?>
