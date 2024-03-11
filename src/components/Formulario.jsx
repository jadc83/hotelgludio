// Formulario.js

import React from 'react';
import Boton from './boton';

const Formulario = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-yellow-700">
      <form id="formulario-contacto" className="text-white p-8 rounded-md max-w-md mx-auto" action="#" method="get">
        <fieldset>
          <select className="selector-tema w-full p-2 mb-4 border rounded-md text-black" name="selector">
            <option value="0">¿En qué podemos ayudarte?</option>
            <option value="1">Atención al cliente</option>
            <option value="2">Problemas con el pago</option>
            <option value="3">Modificación de reserva</option>
            <option value="4">Sugerencias</option>
          </select>
          <label className="block mb-2">Nombre</label>
          <input type="text" title="Ingresa tu nombre completo" className="w-full p-2 mb-4 border rounded-md" autoFocus/>
          <label className="block mb-2" htmlFor="Email">Email</label>
          <input type="email" title="Ingresa tu correo electrónico" className="w-full p-2 mb-4 border rounded-md"/>
          <label className="block mb-2">Teléfono</label>
          <input type="tel" title="Ingresa tu número de teléfono" className="w-full p-2 mb-4 border rounded-md"/>
          <label className="block mb-2">Reserva</label>
          <input type="text" title="Ingresa el número de tu reserva" className="w-full p-2 mb-4 border rounded-md"/>
          <textarea id="campo-sugerencias" rows="4" cols="21" className="w-full p-2 mb-4 border rounded-md"></textarea>
          <Boton etiqueta="Enviar" estilo={{ width: '22em' }} />
        </fieldset>
      </form>
    </div>
  );
};

export default Formulario;
