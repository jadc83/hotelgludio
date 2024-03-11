import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

function Contacto() {
  return (
    <>
      <Nav/>
      <div className='ml-18'>
        <Formulario/>
      </div>
      <Footer/>
    </>

  );
}

export default Contacto;