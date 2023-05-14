import React from 'react'
import './Perfil.css';
import imagen from "../../assets/avatar1.jpg";
import {FcNext} from 'react-icons/fc';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Perfil() {
  return (
    <div className='Container-perfil'>
    
    <h3 className='texto-perfil'><Link to={'/home'}><IoIosArrowBack></IoIosArrowBack></Link>Perfil</h3>
      <div className="img-div-perfil">
        <img className="img-perfil" src={imagen} alt="congratulations" />
        <h3 className='name-perfil'>Silvia Fernández</h3>
      </div>
      <div className="button-perfil">
        <button className="botonera-perfil">Tu cuenta<FcNext></FcNext></button>
        <button className="botonera-perfil">Administradores<FcNext></FcNext></button>
        <button className="botonera-perfil">Suscripción y facturación<FcNext></FcNext></button>
       
        <button className="botonera-perfil">Ayuda<FcNext></FcNext></button>
      
      </div>
    </div>

  

  )
}

export default Perfil