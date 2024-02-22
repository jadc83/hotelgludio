import React from 'react';
import imgReservas from '../assets/reservas.svg';
import imgRestauracion from '../assets/restauracion.svg';
import imgActividades from '../assets/actividades.svg';

function navizq() {
  return (
    <div className='mt-10'>
        <ul className="flex">
          <li className='w-12'>
            <img class="w-28" src={imgReservas} alt="reservas" />
          </li>
          <li className='w-12'>
            <img className="w-60"src={imgRestauracion} alt="restauracion" />
          </li>
          <li className='w-12'>
            <img src={imgActividades} alt="actividades" />
          </li>
        </ul>
  </div>
  );
}

export default navizq;