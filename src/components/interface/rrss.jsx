import React from 'react';
import imgFacebook from '../assets/facebook.svg';
import imgInstagram from '../assets/instagram.svg';

function Rrss() {
  return (
    <div className='flex'>
      <a href='https://www.facebook.com/?locale=es_ES'><img className='w-6' src={imgFacebook}alt='Logotipo Facebook' /></a>
   
      <a href='https://www.instagram.com/'><img className='w-6' src={imgInstagram}alt='Logotipo Instagram' /></a>

  </div>
  );
}

export default Rrss;