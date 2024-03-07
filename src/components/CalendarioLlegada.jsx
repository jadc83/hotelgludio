import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarioLlegada({ GetCheckIN }) {
  const [fechaIn, setFechaIn] = useState(null);

  const handleDateSelect = (date) => {
    setFechaIn(date);
    GetCheckIN(date);
  };

  return (
    <div>
      <Calendar onChange={handleDateSelect} value={fechaIn}/>
    </div>
  );
}

export default CalendarioLlegada;
