import React from 'react';
import { Link } from 'react-router-dom';

const Boton = (props) => {const { etiqueta, onClick, estilo, to } = props;
  if (to) {
    return (
      <Link to={to} className="p-4 m-4 bg-[#cfb53b] rounded-lg shadow-xl text-black" style={estilo}>
        {etiqueta}
      </Link>
    );
  }

  return (
    <button className="p-4 m-4 bg-[#cfb53b] rounded-lg shadow-xl text-black" onClick={onClick} style={estilo}>
      {etiqueta}
    </button>
  );
};

export default Boton;
