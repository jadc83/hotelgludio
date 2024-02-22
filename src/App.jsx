import React, { useState, useEffect } from 'react';
import Reserva from './components/Reserva';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';  // Asegúrate de ajustar la ruta correcta



function App() {
  const [formData, setFormData] = useState(null);
  const [showDataView, setShowDataView] = useState(false);
  const [ContenidoJson, setContenidoJson] = useState([]);
  const [mensajeEncontrado, setMensajeEncontrado] = useState('');
  const [showCalendario, setShowCalendario] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/datos.json');
        const ContenidoJson = await response.json();
        const jsonString = JSON.stringify(ContenidoJson, null, 2);
        setContenidoJson(ContenidoJson);
      } catch (error) {
        console.error('Error al recuperar las fechas disponibles:',error.message, error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = (data) => {
    setFormData(data);

    try {
      const fechaReservaFormulario = new Date(data.fechaReserva).toISOString().split('T')[0];
      const disponibilidadFecha = ContenidoJson.find((item) => {
        const fechaJSON = item.fecha.split('T')[0];
        return fechaReservaFormulario === fechaJSON;
      });

      if (disponibilidadFecha && disponibilidadFecha.disponibilidad) {
        setMensajeEncontrado('La habitación está disponible en la fecha seleccionada.');
      } else {
        setMensajeEncontrado('La habitación NO está disponible en la fecha seleccionada.');
      }

      setShowDataView(true);
    } catch (error) {
      console.error('Error al procesar el formulario:', error);
      setMensajeEncontrado('Ocurrió un error al procesar el formulario.');
    }
  };

    return (
    <div>
      {showDataView ? (
        <div>
          <Header />
          <Reserva formData={formData} />
          <p>{mensajeEncontrado}</p>
          <button onClick={() => setShowDataView(false)}>Volver</button>

          {/* Botón que muestra o cierra el calendario */}
          <button onClick={() => setShowCalendario((prev) => !prev)}>
            {showCalendario ? 'Cerrar Calendario' : 'Mostrar Calendario'}
          </button>

          {/* Muestra el calendario solo cuando showCalendario es true */}
          {showCalendario && (
            <Calendario datosJson={ContenidoJson} onClose={() => setShowCalendario(false)} />
          )}
        </div>
      ) : (
        <div>
          <Header />

          <div className='bg-black justify-center'>
            <Formulario onSubmit={onSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;