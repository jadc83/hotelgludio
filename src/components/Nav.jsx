import React from 'react';
import { Link } from 'react-router-dom';
import imgReservas from '../assets/svg/reservas.svg';
import imgRestauracion from '../assets/svg/restauracion.svg';
import imgActividades from '../assets/svg/actividades.svg';
import imgLavanderia from '../assets/svg/lavanderia.svg';
import imgNosotros from '../assets/svg/nosotros.svg';
import imgContacto from '../assets/svg/contacto.svg';
import Logotipo from './logotipo';

function Nav() {
  return (
    <div className='ml-32 mr-32'>
      <div>
        <ul className='flex justify-between'>
          <li className='w-12 mt-12'>
              <img src={imgReservas} alt='reservas' />
          </li>
          <li className='w-12 mt-12'>
              <img src={imgRestauracion} alt='restauracion' />
          </li>
          <li className='w-12 mt-12'>
              <img src={imgActividades} alt='actividades' />
          </li>
          <li>
            <Link to="/">
              <Logotipo/>
            </Link>
          </li>
          <li className='w-12 mt-12'>
              <img src={imgLavanderia} alt='lavanderia' />
          </li>
          <li className='w-12 mt-12'>
            <Link to="/nosotros">
              <img src={imgNosotros} alt='sobre nosotros' />
              </Link>
          </li>
          <li className='w-12 mt-12'>
            <Link to="/contacto">
              <img src={imgContacto} alt='Contáctanos' />
            </Link>

          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
