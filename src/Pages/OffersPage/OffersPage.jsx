import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./OffersPage.css";
import { IoIosArrowBack } from "react-icons/io";
import Searcher from "../../Components/Searcher/Searcher";
import { Fetch } from "../../Components/Fetch/Fetch";
import { BiSearch } from "react-icons/bi";



export const OffersPage = (openModal, closeModal) => {

  const [abierto, setAbierto] = useState(true);

  return (
    <div className="page user home">
      <h3 className="backheader">
        <Link to={"/home"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Ofertas
        <div></div>
      </h3>
      <div className="container-black">
        <div className="Buscador">
          <BiSearch className="lupa" />
          <Searcher
            openModal={openModal}
            closeModal={closeModal}>
          </Searcher>
        </div>
        <div className="botones-principales">
          <button onClick={()=>setAbierto(true)} className="botonera-message-1">Abiertas</button>
          <button onClick={()=>setAbierto(false)} className="botonera-message-1">Cerradas</button>
        </div>
        <div className="homeoffers">
            <Fetch abierto={abierto}></Fetch>
        </div>
      </div>
      <Nav />
    </div>
  );
};
