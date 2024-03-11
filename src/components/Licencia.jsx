import React from 'react';
import imgLicencia from '../assets/svg/creative.svg';


function Licencia() {
  return (
    <figure>
           <img className='w-28' src={imgLicencia} alt='Licencia' />
    </figure>
  );
}

export default Licencia;