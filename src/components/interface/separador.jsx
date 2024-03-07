import React from 'react';

function Separador() {
  return (
    <div className='bg-black'>
        <svg className='separador' role='separator' aria-label='Separador' width='5%' height='2'>
          <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="2" />
        </svg>
  </div>
  );
}

export default Separador;