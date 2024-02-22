import React from 'react';
import imgLavanderia from '../assets/lavanderia.svg';
import imgNosotros from '../assets/nosotros.svg';
import imgContacto from '../assets/contacto.svg';

function navder() {
  return (
    <div className='mt-4'>
        <ul className="flex">
          <li className='w-12' >
            <a href="HTML/en_construccion.html" aria-label="Enlace a pagina LAVANDERIA" className="btn3"></a>
            <img src={imgLavanderia} alt="lavanderia" />
          </li>
          <li className='mr-24 w-12'>
            <a href="HTML/nosotros2.html" aria-label="Enlace a pagina NOSOTROS" className="btn3"></a>
            <img src={imgNosotros} alt="sobre nosotros" />
          </li>
          <li className='mr-24 w-12'>
            <a href="HTML/contacto2.html" aria-label="Enlace a pagina CONTACTO" className="w-12"></a>
            <img src={imgContacto} alt="Contactanos" />
          </li>
        </ul>
  </div>
  );
}

export default navder;