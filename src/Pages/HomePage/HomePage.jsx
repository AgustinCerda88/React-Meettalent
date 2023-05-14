import React, { useContext, useState } from "react";
import "./HomePage.css";
import { BiChat } from "react-icons/bi";
import Nav from "../../Components/Nav/Nav";
import image from "../../assets/Meettalent.png";
import { Fetch } from "../../Components/Fetch/Fetch";
import profile from "../../assets/avatar1.jpg";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Searcher from "../../Components/Searcher/Searcher";
import { AbiertoContext } from "../../Components/Fetch/AbiertoContext";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import AuthButton from "../../shared/components/AuthButton/AuthButton";

const HomePage = () => {
  const [abierto, setAbierto] = useState({});


  return (
    <div className="homecontainer">
    <AuthButton />

      <div className="homehead">
        <img src={image} className="hometitle" alt="" />
        <div className="homenav">
          <Link to={"/profile"}>
            <img className="homeimg" src={profile} alt="" />
          </Link>
          <div className="buscadorhome">
            <BiSearch className="lupa"/>
            <Searcher></Searcher>
          </div>
          <Link to={"/messages"}>
            <BiChat className="chat"></BiChat>
          </Link>
        </div>
      </div>
      <div className="offers">
        <h2>Ofertas abiertas
        (
          {/* {cantidadOfertas} */}
          )
        </h2>
        <div className="homeoffers">
          <AbiertoContext.Provider value={{ abierto, setAbierto }}>
            <Fetch></Fetch>
          </AbiertoContext.Provider>
        </div>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default HomePage;
