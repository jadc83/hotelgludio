import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarioSalida({ GetCheckOut }) {
  const [fechaOut, setFechaOut] = useState(null);

  const handleDateSelect = (date) => {
    setFechaOut(date);
    GetCheckOut(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateSelect}value={fechaOut}/>
    </div>
  );
}

export default CalendarioSalida;
