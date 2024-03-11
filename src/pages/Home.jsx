import React, { useState, useEffect } from 'react';
import Reserva from './Reserva';
import Nav from '../components/Nav';
import CalendarioLlegada from '../components/CalendarioLlegada';
import CalendarioSalida from '../components/CalendarioSalida';
import Footer from '../components/Footer';
import contenidoJson from '../assets/datos.json';
import Boton from '../components/boton';

function Home() {
  const [mostrarReservas, setmostrarReservas] = useState(false);
  const [fechaIn, setFechaIn] = useState(null);
  const [fechaOut, setFechaOut] = useState(null);
  
  const inputLlegada = (date) => {
    setFechaIn(date);
  };

  const inputSalida = (date) => {
    setFechaOut(date);
  };

  const mostrarDatos = () => {
    if (fechaIn && fechaOut) {
      setmostrarReservas(true);
    } else {
      alert("Por favor, selecciona ambas fechas de llegada y salida.");

    }
  };

  const handleEnviarLlegada = (date) => {
    inputLlegada(date);
  };

  const handleEnviarSalida = (date) => {
    const fechaSalidaIncrementada = new Date(date);
    fechaSalidaIncrementada.setDate(fechaSalidaIncrementada.getDate() + 1);
    inputSalida(fechaSalidaIncrementada);
  };

  return (
    <div>
      {mostrarReservas ? (
        <div>
          <Nav />
          <Reserva fechaIn={fechaIn} fechaOut={fechaOut} contenidoJson={contenidoJson} />
          <Footer />
        </div>
      ) : (
        <div>
          <Nav />
          <div className='flex justify-center bg-black items-center'>
            <div className='text-white'>
                {fechaIn && fechaOut ? (
                  `Fecha de llegada: ${fechaIn.toLocaleDateString()} - Fecha de salida: ${fechaOut.toLocaleDateString()}`
                ) : (
                  'Selecciona las fechas de llegada y salida'
                )}
            </div>
              <Boton etiqueta="Reservar" onClick={mostrarDatos}/>
          </div>
          <div className='flex w-full space-x-12 h-[32em] bg-[url("./assets/espacios/hall.jpg")] justify-center items-center'
               style={{ backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundSize: '75%' }}>
            <div className='shadow-lg'>
              <p className='bg-black p-1 text-white' >Check-In</p>
              <CalendarioLlegada GetCheckIN={inputLlegada} onEnviarClick={handleEnviarLlegada} />
            </div>
            <div className='shadow-lg'>
              <p className='bg-black p-1 text-white'>Check-Out</p>
              <CalendarioSalida GetCheckOut={inputSalida} onEnviarClick={handleEnviarSalida} />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;