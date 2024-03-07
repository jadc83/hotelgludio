import React from 'react';
import Cookies from './Cookies';
import Privacidad from './Privacidad';
import Licencia from './Licencia';

function Footer() {
  return (
      <footer className='flex justify-between'>  
        <nav>
            <figure className='logo-privacidad p-4'>
            <Privacidad/>
            </figure>
        </nav>

            <figure className='imagen-licencia p-4'>
                <Licencia/>
            </figure>
            
        <nav>
            <figure className='imagen-cookies p-4'>
                <Cookies/>
            </figure>
        </nav>
    </footer>

  );
}

export default Footer;