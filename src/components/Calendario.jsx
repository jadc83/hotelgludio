import React, { useState } from 'react';

const Calendario = ({ datosJson, onClose }) => {
  const [mesActual, setMesActual] = useState(1);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mostrarInfoAnterior, setMostrarInfoAnterior] = useState(false);

  const cambiarMes = (direccion) => {
    if (direccion === 'adelante' && mesActual < 12) {
      setMesActual(mesActual + 1);
    } else if (direccion === 'atras' && mesActual > 1) {
      setMesActual(mesActual - 1);
    }
  };

  const manejarSeleccionFecha = (dia) => {
    const nuevaFecha = new Date(2024, mesActual - 1, dia + 1).toISOString().split('T')[0];
    setFechaSeleccionada(nuevaFecha);
    setMostrarInfoAnterior(true);
  };

  const obtenerDiasDelMes = () => {
    const primerDiaDelMes = new Date(2024, mesActual - 1, 1);
    const ultimoDiaDelMes = new Date(2024, mesActual, 0).getDate();
    const primerDiaSemana = primerDiaDelMes.getDay();

    const diasDelMes = [];
    let semana = [];

    // Rellenar los días de la semana previos al primer día del mes
    for (let i = 0; i < primerDiaSemana; i++) {
      semana.push(null);
    }

    // Rellenar los días del mes
    for (let dia = 1; dia <= ultimoDiaDelMes; dia++) {
      const fechaActual = new Date(2024, mesActual - 1, dia).toISOString().split('T')[0];
      const disponibilidadFecha = datosJson.find((item) => {
        return fechaActual === item.fecha.split('T')[0] && item.disponibilidad;
      });

      // Agregar el día con la disponibilidad como propiedad
      semana.push({
        dia: dia,
        disponibilidad: disponibilidadFecha ? true : false,
      });

      // Si llegamos al final de la semana, iniciamos una nueva semana
      if (semana.length === 7) {
        diasDelMes.push([...semana]);
        semana = [];
      }
    }

    // Aseguramos que la última semana se agregue incluso si no tiene 7 días completos
    if (semana.length > 0) {
      diasDelMes.push([...semana]);
    }

    return diasDelMes;
  };

  return (
    <div style={{ fontSize: '16px', padding: '20px' }}>
      <h2>Calendario Mensual - {obtenerNombreMes(mesActual)}</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className='p-3 text-center'>Lunes</th>
            <th className='p-3 text-center'>Mar</th>
            <th className='p-3 text-center'>Mié</th>
            <th className='p-3 text-center'>Jue</th>
            <th className='p-3 text-center'>Vie</th>
            <th className='p-3 text-center'>Sáb</th>
            <th className='p-3 text-center'>Dom</th>
          </tr>
        </thead>
        <tbody>
          {obtenerDiasDelMes().map((semana, index) => (
            <tr key={index}>
              {semana.map((dia, idx) => (
                <td
                  key={idx}
                  style={{
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: dia !== null && dia.disponibilidad ? 'green' : 'black',
                  }}
                >
                  <button className='w-full h-full text-white cursor-pointer'
                    onClick={() => manejarSeleccionFecha(dia.dia)}
                    style={{backgroundColor: dia !== null && dia.disponibilidad ? 'green' : 'black',
                    }}
                  >
                    {dia !== null ? dia.dia : ''}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {mostrarInfoAnterior && (
        <div style={{ marginTop: '20px' }}>
          <p>Fecha de salida: {fechaSeleccionada}</p>
          {/* Aquí puedes agregar cualquier información adicional */}
        </div>
      )}
      <div className="mt-12">
        <button className="p-4 bg-gray-700 text-white" onClick={() => cambiarMes('atras')}>Atrás</button>
        <button className="p-4 bg-gray-700 text-white" onClick={() => cambiarMes('adelante')}>Adelante</button>
      </div>
      <button onClick={onClose} style={{ marginTop: '20px' }}>Cerrar Calendario</button>
    </div>
  );
};

const obtenerNombreMes = (mes) => {
  const nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return nombresMeses[mes - 1];
};

export default Calendario;
