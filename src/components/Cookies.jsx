import React from 'react';
import imgCookies from '../assets/svg/cookies.svg';

function Cookies() {
  return (
    <div className='flex'>
        <img className='w-16' src={imgCookies} alt='Icono cookies' />
    </div>
  );
}

export default Cookies;