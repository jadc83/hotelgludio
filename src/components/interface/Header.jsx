import React from 'react';
import NavIzq from './navizq'
import NavDer from './navder'
import Logotipo from './logotipo'
import Rrss from './rrss'
import Banderas from './banderas'
import { BrowserRouter as Router } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between'>
        <div>
            <Rrss />
            <NavIzq />
        </div>
            <Logotipo />
        <div>
            <Banderas />
            <NavDer />
        </div>
    </div>

  );
}
export default Header;