import React, { useState, useEffect } from 'react';
import Boton from '../components/boton';

function Reserva({ fechaIn, fechaOut, contenidoJson }) {
  const [diferenciaDias, setDiferenciaDias] = useState(0);
  const [CheckFechasNoDisponibles, setCheckFechasNoDisponibles] = useState(false);
  const [datosReserva, setDatosReserva] = useState([]);
  const [mostrarFechas, setMostrarFechas] = useState(false);

  const datos = 'http://localhost:8000/leerDatos.php';

  useEffect(() => {
    const calcularDiferenciaDias = () => {
      if (fechaIn && fechaOut) {
        const diferencia = fechaOut.getTime() - fechaIn.getTime();
        setDiferenciaDias(Math.ceil(diferencia / (1000 * 60 * 60 * 24)));
      }
    };

    calcularDiferenciaDias();
  }, [fechaIn, fechaOut]);

  useEffect(() => {
    const fechasReserva = obtenerFechasReserva();

    setCheckFechasNoDisponibles(
      fechasReserva.some((fecha) => {
        const fechaFormateada = formatearFecha(new Date(fecha));
        const disponibilidad = contenidoJson.find((item) => item.fecha === fechaFormateada)?.disponibilidad;
        return !disponibilidad;
      })
    );
  }, [mostrarFechas, contenidoJson]);

  useEffect(() => {
    const obtenerDatosReserva = async () => {
      try {
        const response = await fetch(datos);
        if (!response.ok) {
          throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }
        const data = await response.json();
        setDatosReserva(data.reservas);
      } catch (error) {
        console.error('Error al obtener los datos:', error.message);
      }
    };

    obtenerDatosReserva();
  }, []);

  const formatearFecha = (date) => {
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  };

  const obtenerFechasReserva = () => {
    const fechasReserva = [];
    const fechaInicio = new Date(fechaIn);
    const fechaFin = new Date(fechaOut);
    fechaFin.setDate(fechaFin.getDate() - 1);
    while (fechaInicio <= fechaFin) {
      fechasReserva.push(formatearFecha(fechaInicio));
      fechaInicio.setDate(fechaInicio.getDate() + 1);
    }
    return fechasReserva;
  };

  const reservar = async () => {
    try {
      const idActual = datosReserva.reduce((maxId, reserva) => Math.max(maxId, reserva.id), 0);
      const idNuevo = idActual + 1;

      const codigoAleatorio = () => {
        const caracteres = 'BCDFGHJKLMNPQRSTVWXZ013579';
        let longitudCodigo = 8;
        let codigoAleatorio = '';
        for (let i = 0; i < longitudCodigo; i++) {
          const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
          codigoAleatorio += caracteres.charAt(indiceAleatorio);
        }

        return codigoAleatorio;
      };

      const nuevaReserva = {
        id: idNuevo,
        fechaLlegada: fechaIn.toLocaleDateString('es-ES'),
        fechaSalida: fechaOut.toLocaleDateString('es-ES'),
        codigoReserva: codigoAleatorio(),
      };

      const response = await fetch('http://localhost:8000/escribirDatos.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaReserva),
      });

      if (!response.ok) {
        throw new Error(`No se pudo realizar la reserva: ${response.status}`);
      }

      const data = await response.json();
      setDatosReserva([...datosReserva, nuevaReserva]);
    } catch (error) {
      console.error('Error al reservar:', error.message);
    }
  };

  const eliminarReserva = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/eliminarReserva.php?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error al eliminar la reserva. Código de estado: ${response.status}`);
      }

      await response.json();
      setDatosReserva(datosReserva.filter(reserva => reserva.id !== id));
    } catch (error) {
      console.error('Error al eliminar la reserva:', error.message);
    }
  };

  return (
    <div className='bg-white flex flex-col text-center'>
      <h2 className='bg-black text-white text-xl'>Detalles de la Reserva</h2>

      {CheckFechasNoDisponibles ? (
        <>
          <p>Fechas de la reserva no disponibles.</p>
        </>

          ) : (

        <div className='bg-white flex flex-col text-center min-h-screen'>
          <div className='justify-center bg-black w-6/12 rounded-lg mx-auto my-auto mt-2 h-[10em]'>
            <p className='text-white text-lg'>Check-In {fechaIn.toLocaleDateString()}</p>
            <p className='text-white text-lg'>Check-Out {fechaOut.toLocaleDateString()}</p>
            <p className='text-white text-lg'>Precio Total: {parseInt(diferenciaDias) * parseInt(25)}€</p>
            <Boton etiqueta="Reservar" onClick={reservar} />
            <table className="border-collapse w-3/4">
              <thead>
                <tr>
                  <th className="border-2 bg-black text-white border-gray-700 p-1">Fecha de Llegada</th>
                  <th className="border-2 bg-black text-white border-gray-700 p-1">Fecha de Salida</th>
                  <th className="border-2 bg-black text-white border-gray-700 p-1">Identificador</th>
                </tr>
              </thead>
              <tbody>
                {datosReserva.map((reserva, index) => (
                  <tr key={reserva.id}>
                    <td className="border-2 p-1">{reserva.fechaLlegada}</td>
                    <td className="border-2 p-1">{reserva.fechaSalida}</td>
                    <td className="border-2 p-1">{reserva.codigoReserva}</td>
                    <td className="w-[3em] border-2 p-1">
                      <Boton etiqueta="Eliminar reserva" onClick={() => eliminarReserva(reserva.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      )}
    </div>
  );
}

export default Reserva;
