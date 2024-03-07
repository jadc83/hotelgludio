<?php
// Configuración CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Manejo de solicitudes OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Resto del código PHP para manejar la solicitud DELETE
$reservasJson = './reservas.json';

// Leer el contenido del archivo JSON
$jsonString = file_get_contents($reservasJson);

// Decodificar el JSON a un arreglo asociativo
$data = json_decode($jsonString, true);

// Verificar si la decodificación fue exitosa
if ($data === null) {
    http_response_code(500); // Error interno del servidor
    die(json_encode(['error' => 'Error al decodificar el JSON.']));
}

// Acceder a la lista de reservas
$reservas = $data['reservas'];

// Obtener el ID de reserva a eliminar desde la solicitud DELETE
$idReservaEliminar = $_GET['id'];

// Filtrar el array de reservas para excluir la reserva a eliminar
$reservasFiltradas = array_filter($reservas, function ($reserva) use ($idReservaEliminar) {
    return $reserva['id'] != $idReservaEliminar;
});

// Actualizar el array en el archivo JSON
file_put_contents($reservasJson, json_encode(['reservas' => array_values($reservasFiltradas)]));

// Responder con un mensaje de éxito
echo json_encode(['mensaje' => 'Reserva eliminada con éxito']);
?>
