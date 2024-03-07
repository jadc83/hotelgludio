import React from 'react';

function BotonesReserva({ CheckFechasNoDisponibles, contenidoJson, mostrarFechas, obtenerFechasReserva, formatDate }) {
  return (
    <>
      {mostrarFechas && CheckFechasNoDisponibles && (
        <ul>
          {obtenerFechasReserva().map((fecha, index) => {
            const fechaFormateada = formatDate(new Date(fecha));
            const disponibilidad = contenidoJson.find((item) => item.fecha === fechaFormateada)?.disponibilidad;
            if (!disponibilidad) {
              return (<li key={index}>{fechaFormateada} No disponible</li>);
            }
            return null;
          })}
        </ul>
      )}
    </>
  );
}

export default BotonesReserva;
