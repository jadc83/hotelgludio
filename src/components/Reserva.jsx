import React from 'react';

const Reserva = ({ formData }) => {
  return (
    <div>
      <h2>Datos del formulario:</h2>
      <p>Fecha seleccionada: {new Date(formData.fechaReserva).toLocaleDateString()}</p>
    </div>
  );
};

export default Reserva;
