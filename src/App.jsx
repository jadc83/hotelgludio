import React, { useState, useEffect } from 'react';
import Reserva from './components/Reserva';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import Footer from './components/Footer';



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
        setContenidoJson(ContenidoJson);
      } catch (error) {
        console.error('Error leyendo fechas disponibles:',error.message, error);
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
          <button className="bg-gray-300 mr-8 p-4 rounded-lg" onClick={() => setShowDataView(false)}>Volver</button>
          <button className="bg-gray-300 p-4 rounded-lg" onClick={() => setShowCalendario((prev) => !prev)}>
            {showCalendario ? 'Cerrar Calendario' : 'Mostrar Calendario'}
          </button>
          {showCalendario && (
            <Calendario datosJson={ContenidoJson} onClose={() => setShowCalendario(false)} />
          )}
          <Footer/>
        </div>
      ) : (
        <div>
          <Header />

          <div className='bg-black justify-center'>
            <Formulario onSubmit={onSubmit} />
          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default App;