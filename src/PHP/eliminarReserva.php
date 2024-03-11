<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$reservasJson = './reservas.json';

$jsonString = file_get_contents($reservasJson);

$data = json_decode($jsonString, true);

if ($data === null) {
    http_response_code(500);
    die(json_encode(['error' => 'Error al decodificar el JSON.']));
}

$reservas = $data['reservas'];

$idReservaEliminar = $_GET['id'];

$reservasFiltradas = array_filter($reservas, function ($reserva) use ($idReservaEliminar) {
    return $reserva['id'] != $idReservaEliminar;
});

file_put_contents($reservasJson, json_encode(['reservas' => array_values($reservasFiltradas)]));

echo json_encode(['mensaje' => 'Reserva eliminada con éxito']);
?>
