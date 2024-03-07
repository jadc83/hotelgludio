<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
$reservasJson = './reservas.json';
$inputJSON = file_get_contents('php://input');
$inputData = json_decode($inputJSON, true);

if ($inputData === null) {
    http_response_code(400);
    die(json_encode(['error' => 'Error al decodificar el JSON.']));
}

$nuevaReserva = [
    'id' => $inputData['id'],
    'fechaLlegada' => $inputData['fechaLlegada'],
    'fechaSalida' => $inputData['fechaSalida'],
];

$jsonString = file_get_contents($reservasJson);
$data = json_decode($jsonString, true);

if ($data === null) {
    http_response_code(500);
    die(json_encode(['error' => 'Error al decodificar el JSON existente.']));
}

$reservas = $data['reservas'];
$ultimoId = end($reservas)['id'];
$nuevaReserva['id'] = $ultimoId + 1;
$reservas[] = $nuevaReserva;
file_put_contents($reservasJson, json_encode(['reservas' => $reservas]));
echo json_encode($nuevaReserva);
exit;
?>
