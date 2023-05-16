import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import "./OffersDetails.css";
import { SearchContext } from "../../App";
import { useNavigate } from "react-router-dom"; 

export const OffersDetails = () => {
  // const newOffer = useContext(SearchContext);
  const { newOffer, setNewOffer } = useContext(SearchContext);
  const [offer, setOffer] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (newOffer && newOffer._id === id) {
      setOffer(newOffer);
    } else {
      axios
        .get(`http://localhost:8000/offers/${id}`)
        .then((res) => {
          setOffer(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id, newOffer]);

  const deleteOffer = async (id) => {
    try {
      
      await axios.delete(`http://localhost:8000/offers/${id}`);
      setNewOffer(null);
      console.log("Oferta eliminada con exito");
      navigate("/home");
    } catch (error) {
      alert("No se ha encontrado la oferta a eliminar. Tal vez ya haya sido eliminada.")
      console.error(error);
    }
  };


  return (
    <div className="page">
      <h3 className="backheader">
        <Link to={"/offers"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Detalle de la oferta
        <div></div>
      </h3>
      <div className="container-black">
        <div className="offers">
          {offer ? (
            <div className="job-offer">
              <div>
                <h3>{offer.position}</h3>
                <h4>{offer.company}</h4>
              </div>

              <div>
                <p>
                  <strong>Descripción:</strong>
                </p>
                <p> {offer.description}</p>
              </div>

              <div>
                <p>
                  <strong>Requisitos:</strong>
                </p>
                <p> {offer.requirements}</p>
              </div>

              <div>
                <p>
                  <strong>Palabras Clave:</strong>
                </p>
                <p> {offer.keywords}</p>
              </div>

              <div>
                <p>
                  <strong>Salario:</strong>
                </p>
                <p> {offer.salary}</p>
              </div>

              <div>
                <p>
                  <strong>Ubicación:</strong>
                </p>
                <p> {offer.location}</p>
              </div>

              <div>
                <p>
                  <strong>Tipo de Jornada:</strong>
                </p>
                <p> {offer.scheduleType}</p>
              </div>

              <div>
                <p>
                  <strong>Tipo de Contrato:</strong>
                </p>
                <p> {offer.contractType}</p>
              </div>

              <div>
                <p>
                  <strong>Disponibilidad</strong>
                </p>
                <p> {offer.availability}</p>
              </div>
              <button style={{height: "20px", width: "100px", backgroundcolor:"red"}} 
              onClick={() => deleteOffer(offer._id)}
              >Eliminar oferta</button>
            </div>
          ) : (
            <p>Cargando las ofertas...</p>
          )}
        </div>
      </div>
      <Nav />
    </div>
  );
};
