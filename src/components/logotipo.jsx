import React from 'react';
import MiSVG from '../assets/milogo.svg';


function Logotipo() {
  return (
        <figure className='flex justify-items-center object-top'>
                <img className="w-[12em] ml-48 mb-0" src={MiSVG} alt="Logotipo" aria-label="Logo Empresa" />
        </figure>
  );
}

export default Logotipo;