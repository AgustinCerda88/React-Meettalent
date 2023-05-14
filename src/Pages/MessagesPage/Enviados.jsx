import React from 'react';
import './Message.css';
import { IoIosArrowBack } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import imagen1 from '../../assets/avatar1.jpg';

import './Enviados.css';


export default function Enviados() {
  return (
    <div className='fondo-message'>
      <div className='mensaje'>
        <IoIosArrowBack /> Mensajes
      </div>
    
      <div className='container-black'>
        <div className='Buscador'>
          <BiSearch className='lupa' />
          <label htmlFor='buscar'>Buscar</label>
          <input className='dentro-buscador' type='text' id='buscar' />
          <TbAdjustmentsHorizontal />
        </div>
                
        <div className='botones-principales'>
          <button className='botonera-message-1'>(1)Recibidos</button>
          <button className='botonera-message-1'>Enviados</button>
          <button className='botonera-message-1'>Destacados</button>
        </div>

        <div className='button-message'>
          <div className='botonera-message-2' id='nilton1'>
            <div className='botonera-message-2-img'><img src={imagen1} alt="avatar" /></div>
            <div className='botonera-message-2-info'>
              <p>NILTON</p>
              <p>Sería un placer poder ampliar la información sobre mi formación, experiencia y habilidades...</p>
            </div>
          </div>
          <div className='botonera-message-2' id='harrut'>
            <div className='botonera-message-2-img'><img src={imagen1} alt="avatar" /></div>
            <div className='botonera-message-2-info'>
              <p>Harrut</p>
              <p>aqui te facilito mi contacto para cualquier otra duda que pueda surgirte...</p>
            </div>
          </div>
          <div className='botonera-message-2' id='jose'>
            <div className='botonera-message-2-img'><img src={imagen1} alt="avatar" /></div>
            <div className='botonera-message-2-info'>
              <p>JOSE</p>
              <p>tú: Te informamos que existen otros candidatos cuyos perfiles se ajustan más a nuestras...</p>
            </div>
          </div>
        
        <div className='botonera-message-2' id='jose'>
            <div className='botonera-message-2-img'><img classname='imagen-mensajes'src={imagen1} alt="avatar" /></div>
            <div className='botonera-message-2-info'>
              <p>Lara</p>
              <p>Muchas gracias por la información. Una pena no haber encajado en el perfil...</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};
