import React from 'react';

const Boton = (props) => {
  const { etiqueta, onClick, estilo } = props;

  return (
    <button className="p-4 m-4 bg-[#cfb53b]" onClick={onClick} style={estilo}>
      {etiqueta}
    </button>
  );
};

export default Boton;
