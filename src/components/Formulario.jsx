// src/components/Formulario.jsx
import React from 'react';
import { useForm } from 'react-hook-form';


const Formulario = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitHandler = (data) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className='bg-red-400 w-full h-[32rem] mb-4' style={{ backgroundImage: 'url("./src/assets/espacios/hall.jpg")', objectFit: 'cover', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
      <form className="flex w-full p-4 left-0 mb-4 rounded-lg object-center shadow-2xl bg-black opacity-80 text-xl" onSubmit={handleSubmit(onSubmitHandler)}>
        <input className="bg-white p-2 mr-2 w-2/12 ml-96 text-center" type="date" {...register('fechaReserva')} required />
        <input className="bg-white p-2 mr-2 w-2/12 ml-4 text-center" type="date" {...register('fechaSalida')} />
        <select className='mr-2 p-4 border-white ml-4' id="numHuespedes" name="numHuespedes">
          <option value="1" className='border-white'>1 huésped</option>
          <option value="2">2 huéspedes</option>
          <option value="3">3 huéspedes</option>
          <option value="4">4 huéspedes</option>
          <option value="5">5 huéspedes</option>
          <option value="6">6 huéspedes</option>
          <option value="7">7 huéspedes</option>
          <option value="8">8 huéspedes</option>
          <option value="9">9 huéspedes</option>
          <option value="10">10 huéspedes</option>
        </select>
        <button className="bg-orange-400 p-4 ml-2 rounded-lg text-black" type="submit">Enviar</button>
      </form>
    </div>

  );
};

export default Formulario;
