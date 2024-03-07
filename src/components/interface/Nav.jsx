import React from 'react';
import imgReservas from '../../assets/reservas.svg';
import imgRestauracion from '../../assets/restauracion.svg';
import imgActividades from '../../assets/actividades.svg';
import imgLavanderia from '../../assets/lavanderia.svg';
import imgNosotros from '../../assets/nosotros.svg';
import imgContacto from '../../assets/contacto.svg';
import Logotipo from './logotipo'

function nav() {
  return (
    <div className=' ml-32 mr-32'>
      <div>
          <ul className='flex justify-between'>
            <li className='w-12 mt-12'>
              <img src={imgReservas} alt='reservas' />
            </li>
            <li className='w-12 mt-12'>
              <img src={imgRestauracion} alt='restauracion' />
            </li>
            <li className='w-12 mt-12'>
              <img src={imgActividades} alt='actividades' />
            </li>
            <li><Logotipo/></li>
            <li className='w-12 mt-12' >
              <img src={imgLavanderia} alt='lavanderia' />
            </li>
            <li className='w-12 mt-12'>
              <img src={imgNosotros} alt='sobre nosotros' />
            </li>
            <li className='w-12 mt-12'>
              <img src={imgContacto} alt='Contactanos' />
            </li>
          </ul>
      </div>
    </div>

  );
}

export default nav;
