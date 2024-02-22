import React from 'react';
import NavIzq from './navizq'
import NavDer from './navder'
import Logotipo from './logotipo'
import Rrss from './rrss'
import Separador from './separador'
import Banderas from './banderas'

function Header() {
  return (
    <cabecera className="flex">
        <div className='flex-column'>
            <Rrss />
            <NavIzq />
            <Separador />
        </div>

            <Logotipo />

        <div className='flex-column space-x-9'>
            <Banderas />
            <NavDer />
            <Separador />

        </div>
    </cabecera>

  );
}

export default Header;