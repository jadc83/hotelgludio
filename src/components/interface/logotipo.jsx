import React from 'react';
import MiSVG from '../../assets/milogo.svg';


function Logotipo() {
  return (
        <figure className='flex justify-center'>
                <img className='w-[10em]' src={MiSVG} alt='Logotipo' aria-label='Logo Empresa' />
        </figure>
  );
}

export default Logotipo;