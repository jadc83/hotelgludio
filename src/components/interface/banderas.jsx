import React from 'react';
import BanderaFrancia from '../assets/francia.svg';
import BanderaEspana from '../assets/espana.svg';
import BanderaAlemania from '../assets/alemania.svg';

function Banderas() {
  return (
    <div className='traductor flex space-x-4 w-52 ml-72 p-4 items-center'>
        <img className='w-6 top-2' src={BanderaEspana} alt='espana' />
        <img className='w-6' src={BanderaFrancia} alt='francia' />
        <img className='w-6' src={BanderaAlemania} alt='alemania' />
  </div>
  );
}

export default Banderas;