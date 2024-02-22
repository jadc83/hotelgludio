import React from 'react';
import NavIzq from './navizq'
import NavDer from './navder'
import Logotipo from './logotipo'
import Rrss from './rrss'
import Separador from './separador'
import Banderas from './banderas'

function Footer() {
  return (
    <cabecera className="flex ml-28 mt-12">
      <footer class="pie">  
        <nav class="nav-pie">
            <figure class="logo-privacidad">
                <img src="IMG/privacidad.svg" alt="Politica de privacidad"/>
            </figure>
        </nav>
        <figure class="imagen-licencia">
            <img src="IMG/creative.svg" alt="licencia creative commons"/>
        </figure>
        <nav>
            <figure class="imagen-cookies">
                <img src="IMG/cookies.svg" alt="Política de cookies"/>
            </figure>
        </nav>
    </footer>
    </cabecera>

  );
}

export default Footer;