import React from 'react';
import Boton from './interface/boton';

function DetallesReserva({ fechaIn, fechaOut, diferenciaDias, CheckFechasNoDisponibles, datosReserva, contenidoJson, mostrarFechas, reservar, setMostrarFechas, setDatosReserva }) {

  const formatoFecha = (date) => {
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    return `${año}/${mes}/${dia}`;
  };

  const obtenerFechasReserva = () => {
    const fechasReserva = [];
    const fechaInicio = new Date(fechaIn);
    const fechaFin = new Date(fechaOut);
    fechaFin.setDate(fechaFin.getDate() - 1);

    while (fechaInicio <= fechaFin) {
      fechasReserva.push(formatoFecha(fechaInicio));
      fechaInicio.setDate(fechaInicio.getDate() + 1);
    }

    return fechasReserva;
  };

  const eliminarReserva = (id) => {
    fetch(`http://localhost:8000/eliminarReserva.php?id=${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al eliminar la reserva. Código de estado: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setDatosReserva(datosReserva.filter(reserva => reserva.id !== id));
      })
      .catch(error => {
        console.error('Error al eliminar la reserva:', error.message);
      });
  };

  return (
    <>
      {diferenciaDias > 0 && (
        <div>
          {CheckFechasNoDisponibles ? (
            <div>
              {mostrarFechas ? (
                <Boton etiqueta="Cerrar" onClick={() => setMostrarFechas(false)} />
              ) : (
                <div className='h-[30em]'>
                  <Boton etiqueta="Ver fechas ocupadas" onClick={() => setMostrarFechas(true)} />
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <Boton etiqueta="Completar la reserva" onClick={reservar} />
              {datosReserva.length > 0 && (
                <table className="border-collapse w-3/4">
                  <thead>
                    <tr>
                      <th className="border-2 bg-black text-white border-gray-700 p-1">Fecha de Llegada</th>
                      <th className="border-2 bg-black text-white border-gray-700 p-1">Fecha de Salida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datosReserva.map((reserva, index) => (
                      <tr key={reserva.id}>
                        <td className="border-2 p-1">{reserva.fechaLlegada}</td>
                        <td className="border-2 p-1">{reserva.fechaSalida}</td>
                        <td className="w-[3em] border-2 p-1">
                          <Boton etiqueta="Eliminar reserva" onClick={() => eliminarReserva(reserva.id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {mostrarFechas && CheckFechasNoDisponibles && (
            <div className='h-[24em]'>
              <ul>
                {obtenerFechasReserva().map((fecha, index) => {
                  const fechaFormateada = formatoFecha(new Date(fecha));
                  const disponibilidad = contenidoJson.find((item) => item.fecha === fechaFormateada)?.disponibilidad;
                  if (!disponibilidad) {
                    return (<li key={index}>{fechaFormateada} No disponible</li>);
                  }
                  return null;
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      {diferenciaDias < 1 && <p>La reserva debe ser de al menos 1 día.</p>}
    </>
  );
}

export default DetallesReserva;
