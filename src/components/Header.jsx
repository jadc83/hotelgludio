import React from 'react';
import NavIzq from './navizq'
import NavDer from './navder'
import Logotipo from './logotipo'
import Rrss from './rrss'
import Separador from './separador'
import Banderas from './banderas'

function Header() {
  return (
    <cabecera className="flex ml-28 mt-12">
        <div className='flex-column'>
            <Rrss />
            <NavIzq />
            <div className='mr-24 mt-4'>
            <Separador />
            </div>
        </div>
        <div className='ml-32'>
            <Logotipo />
        </div>
        <div className='flex-column'>
            <Banderas />
            <NavDer />
            <div className='mr-24 mt-4'>
            <Separador />
        </div>
  </div>
    </cabecera>

  );
}

export default Header;