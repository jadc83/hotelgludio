import React from 'react';
import imgLavanderia from '../assets/lavanderia.svg';
import imgNosotros from '../assets/nosotros.svg';
import imgContacto from '../assets/contacto.svg';

function navder() {
  return (
    <div className='mt-4'>
        <ul className="flex">
          <li className='w-12' >
            <img src={imgLavanderia} alt="lavanderia" />
          </li>
          <li className='w-12'>
            <img src={imgNosotros} alt="sobre nosotros" />
          </li>
          <li className='mr-24 w-12'>
            <img src={imgContacto} alt="Contactanos" />
          </li>
        </ul>
  </div>
  );
}

export default navder;