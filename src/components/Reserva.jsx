import React, { useState, useEffect } from 'react';
import DetallesReserva from './DetallesReserva';
import BotonesReserva from './BotonesReserva';

function Reserva({ fechaIn, fechaOut, contenidoJson}) {
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

  const formatDate = (date) => {
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    return `${año}-${mes}-${dia}`;
  };

  useEffect(() => {
    const fechasReserva = obtenerFechasReserva();

    setCheckFechasNoDisponibles(
      fechasReserva.some((fecha) => {
        const fechaFormateada = formatDate(new Date(fecha));
        const disponibilidad = contenidoJson.find((item) => item.fecha === fechaFormateada)?.disponibilidad;
        return !disponibilidad;
      })
    );
  }, [mostrarFechas, contenidoJson]);

{/*FETCH USADO PARA MOSTRAR LAS RESERVAS ACTUALES EN EL JSON */}

  useEffect(() => {
    fetch(datos)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setDatosReserva(data.reservas);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error.message);
      });
  }, []);

  const obtenerFechasReserva = () => {
    const fechasReserva = [];
    const fechaInicio = new Date(fechaIn);
    const fechaFin = new Date(fechaOut);
    fechaFin.setDate(fechaFin.getDate() - 1);

    while (fechaInicio <= fechaFin) {
      fechasReserva.push(formatDate(fechaInicio));
      fechaInicio.setDate(fechaInicio.getDate() + 1);
    }

    return fechasReserva;
  };

  const reservar = () => {
    const ultimoId = datosReserva.reduce((maxId, reserva) => Math.max(maxId, reserva.id), 0);
    const nuevoId = ultimoId + 1;
    const nuevaReserva = {
      id: nuevoId,
      fechaLlegada: fechaIn.toLocaleDateString('es-ES'),
      fechaSalida: fechaOut.toLocaleDateString('es-ES'),
    };
  
    fetch('http://localhost:8000/escribirDatos.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaReserva),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error al realizar la reserva. Código de estado: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setDatosReserva([...datosReserva, nuevaReserva]);
    })
    .catch(error => {
      console.error('Error al realizar la reserva:', error.message);
    });
  };

  return (
    <div className='bg-white h-auto text-center'>
      <h2 className='bg-black text-white text-xl'>Detalles de la Reserva</h2>
      <p>Precio Total: {parseInt(diferenciaDias) * parseInt(25)}</p>
      <DetallesReserva
        fechaIn={fechaIn}
        fechaOut={fechaOut}
        diferenciaDias={diferenciaDias}
        CheckFechasNoDisponibles={CheckFechasNoDisponibles}
        datosReserva={datosReserva}
        contenidoJson={contenidoJson}
        mostrarFechas={mostrarFechas}
        reservar={reservar}
        setMostrarFechas={setMostrarFechas}
        setDatosReserva={setDatosReserva}
      />
      <BotonesReserva 
        diferenciaDias={diferenciaDias} 
        CheckFechasNoDisponibles={CheckFechasNoDisponibles} 
        datosReserva={datosReserva} 
        contenidoJson={contenidoJson} 
        mostrarFechas={mostrarFechas} 
        obtenerFechasReserva={obtenerFechasReserva} 
        formatDate={formatDate} />
    </div>
  );
}

export default Reserva;
