import React from "react";
import "./createpage.css";
import Nav from "../../Components/Nav/Nav";
import image from "../../assets/Meettalent.png";
import { Link } from "react-router-dom";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";

function CreatePage() {
  return (
    <div className="createpage">
      <img className="createtitle" src={image} alt="" />
      <div className="container-black">
        <div className="container-buttons">
          <div className="crear">
            <div className="circle">
              <AiOutlineFileText className="logo" />
            </div>
            <Link to={"/createoffer"} className="createlink">
              <button className="button-white">Crear oferta</button>
            </Link>
          </div>
          <div className="line"></div>
          <div className="crear">
            <div className="circle">
              <AiOutlineVideoCamera className="logo" />
            </div>
            <button className="button-white">Crear prueba</button>
          </div>
        </div>
      </div>
      <Nav></Nav>
    </div>
  );
}

export default CreatePage;
