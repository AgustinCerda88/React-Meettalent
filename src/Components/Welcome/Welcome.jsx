import React, { useEffect, useState } from "react";
import group7 from "../../assets/group7.png";
import welcom1 from "../../assets/welcom1.png";
import welcom2 from "../../assets/welcom2.png";
import welcom3 from "../../assets/welcom3.png";
import whitelogo from "../../assets/whitelogo.png";
import logoT from "../../assets/logoT.png";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNextClick = () => {
    const page = currentPage === pages.length - 1 ? 0 : currentPage + 1;
    setCurrentPage(page);
  };
  const pages = [
    isLoading ? (
      <div className="welcome__container welcome__container--black">
        <img src={group7} alt="logo" />
      </div>
    ) : (
      <div className="welcome__container welcome__container--black">
        <div className="welcome_container-sub">
          <Link to={"/login"} className="saltar">
            saltar
          </Link>
          <div className="imghead">
            <div className="imglogo">
              <img className="imglogo-pic" src={logoT} alt="" />
            </div>
            <div className="welcome__text--1 welcome__text--bold">
              Nos encanta verte por
            </div>
          </div>
          <div className="imghead">
            <img
              className="img-welcome img-welcome-texto"
              src={whitelogo}
              alt=""
            />
            <div className="welcome__text--white">
              Atrae y enamora a los mejores candidatos
            </div>
          </div>
          <div className="slider__circles">
            <span className="slider__circle slider__circle-active"></span>
            <span className="slider__circle"></span>
            <span className="slider__circle"></span>
            <span className="slider__circle"></span>
          </div>
          <button onClick={handleNextClick} className="button-white">
            Comenzar
          </button>
        </div>
      </div>
    ),

    <div className="welcome__container">
      <div className="welcome_container-sub">
        <Link to={"/login"} className="saltar">
          saltar
        </Link>
        <div className="imghead">
          <img className="img-welcome" src={welcom1} alt="" />
        </div>
        <div className="imghead">
          <div className="welcome__text--1">
            Meettalent es una herramienta que te ayuda a conectar con el mejor
            talento
          </div>
        </div>
        <div className="slider__circles">
          <span className="slider__circle"></span>
          <span className="slider__circle slider__circle-active"></span>
          <span className="slider__circle"></span>
          <span className="slider__circle"></span>
        </div>
        <button onClick={handleNextClick} className="button-black">
          Continuar
        </button>
      </div>
    </div>,

    <div className="welcome__container">
      <div className="welcome_container-sub">
        <Link to={"/login"} className="saltar">
          saltar
        </Link>
        <div className="imghead">
          <img className="img-welcome2" src={welcom2} alt="" />
        </div>
        <div className="imghead">
          <div className="welcome__text--1">
            Crear eventos únicos para interactuar con los candidatos desde
            cualquier lugar
          </div>
        </div>
        <div className="slider__circles">
          <span className="slider__circle"></span>
          <span className="slider__circle"></span>
          <span className="slider__circle slider__circle-active"></span>
          <span className="slider__circle"></span>
        </div>
        <button onClick={handleNextClick} className="button-black">
          Continuar
        </button>
      </div>
    </div>,

    <div className="welcome__container ">
      <div className="welcome_container-sub">
        <div className="saltar"></div>
        <div className="imghead">
          <img className="img-welcome" src={welcom3} alt="" />
        </div>
        <div className="imghead">
          <div className="welcome__text--1">
            Agilizar tus procesos de selección de una manera sencilla, potente y
            rápida
          </div>
        </div>
        <div className="slider__circles">
          <span className="slider__circle"></span>
          <span className="slider__circle"></span>
          <span className="slider__circle"></span>
          <span className="slider__circle slider__circle-active"></span>
        </div>
        <button className="button-black">
          <Link to={"/login"} className="button-black">
            Unirme ahora
          </Link>
        </button>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="slider__container">
        <div className="slider">{pages[currentPage]}</div>
      </div>
    </div>
  );
}

export default Welcome;
