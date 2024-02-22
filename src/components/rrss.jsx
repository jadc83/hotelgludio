import React from 'react';
import imgFacebook from '../assets/facebook.svg';
import imgInstagram from '../assets/instagram.svg';

function Rrss() {
  return (
    <div className="flex">
    <img className="w-6" src={imgFacebook}alt="Logotipo Facebook" />
    <img className="w-6" src={imgInstagram}alt="Logotipo Instagram" />
  </div>
  );
}

export default Rrss;