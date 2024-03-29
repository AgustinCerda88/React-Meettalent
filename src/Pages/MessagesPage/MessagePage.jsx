import React from "react";
import "./Message.css";
// import Enviados from "./Enviados";
import { IoIosArrowBack } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import imagen1 from "../../assets/avatar1.jpg";
import imagen2 from "../../assets/avatar3.jpg";
import imagen3 from "../../assets/avatar4.jpg";
import imagen5 from "../../assets/avatar2.jpg";
import { Link } from "react-router-dom";

export const MessagePage = () => {
  return (
    <div className="fondo-message">
      <h3 className="backheader ">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Mensajes
        <div></div>
      </h3>
      <div className="container-black">
        <div className="container-black-inner">
          <div className="Buscador">
            <BiSearch className="lupa" />
            <input
              className="dentro-buscador"
              type="text"
              id="buscar"
              placeholder="Buscar"
            />
            <TbAdjustmentsHorizontal />
          </div>
          <div className="botones-principales">
            <button className="botonera-message-1">(1)Recibidos</button>
            <button className="botonera-message-1">Enviados</button>
            <button className="botonera-message-1">Destacados</button>
          </div>
          <div className="button-message">
            <div className="button-message-inner">
              <div className="botonera-message-2" id="nilton1">
                <div className="botonera-message-2-img">
                  <img src={imagen1} alt="avatar" />
                </div>
                <div className="botonera-message-2-info">
                  <p>NILTON</p>
                  <p>
                    Sería un placer poder ampliar la información sobre mi
                    formación, experiencia y habilidades...
                  </p>
                </div>
              </div>
              <div className="botonera-message-2" id="harrut">
                <div className="botonera-message-2-img">
                  <img src={imagen2} alt="avatar" />
                </div>
                <div className="botonera-message-2-info">
                  <p>Harrut</p>
                  <p>
                    aqui te facilito mi contacto para cualquier otra duda que
                    pueda surgirte...
                  </p>
                </div>
              </div>
              <div className="botonera-message-2" id="jose">
                <div className="botonera-message-2-img">
                  <img src={imagen3} alt="avatar" />
                </div>
                <div className="botonera-message-2-info">
                  <p>JOSE</p>
                  <p>
                    tú: Te informamos que existen otros candidatos cuyos
                    perfiles se ajustan más a nuestras...
                  </p>
                </div>
              </div>
              <div className="botonera-message-2" id="jose">
                <div className="botonera-message-2-img">
                  <img className="imagen-mensajes" src={imagen5} alt="avatar" />
                </div>
                <div className="botonera-message-2-info">
                  <p>Lara</p>
                  <p>
                    Muchas gracias por la información. Una pena no haber
                    encajado en el perfil...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
