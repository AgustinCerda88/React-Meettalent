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
  const [editMode, setEditMode] = useState(false);
  const [editedOffer, setEditedOffer] = useState({});

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
      alert(
        "No se ha encontrado la oferta a eliminar. Tal vez ya haya sido eliminada."
      );
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedOffer({ ...offer });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8000/offers/${offer._id}`, editedOffer);
      setOffer(editedOffer);
      setEditMode(false);
      console.log("Oferta actualizada con éxito");
    } catch (error) {
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
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.description}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        description: e.target.value,
                      
                      })
                    }
                  />
                ) : (
                  <p>{offer.description}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Requisitos:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.requirements}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        requirements: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.requirements}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Palabras Clave:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.keywords}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        keywords: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.keywords}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Salario:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.salary}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        salary: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.salary}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Ubicación:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.location}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        location: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.location}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Tipo de Jornada:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.scheduleType}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        scheduleType: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.scheduleType}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Tipo de Contrato:</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.contractType}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        contractType: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.contractType}</p>
                )}
              </div>

              <div>
                <p>
                  <strong>Disponibilidad</strong>
                </p>
                {editMode ? (
                  <input
                    type="text"
                    value={editedOffer.availability}
                    onChange={(e) =>
                      setEditedOffer({
                        ...editedOffer,
                        availability: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p>{offer.availability}</p>
                )}
              </div>

              {!editMode && (
                <button
                  style={{
                    height: "20px",
                    width: "100px",
                    backgroundColor: "red",
                  }}
                  onClick={() => deleteOffer(offer._id)}
                >
                  Eliminar oferta
                </button>
              )}

              {editMode && (
                <button
                  style={{
                    height: "20px",
                    width: "100px",
                    backgroundColor: "green",
                  }}
                  onClick={handleSave}
                >
                  Guardar
                </button>
              )}

              {!editMode && (
                <button
                  style={{
                    height: "20px",
                    width: "100px",
                    backgroundColor: "blue",
                  }}
                  onClick={handleEdit}
                >
                  Editar
                </button>
              )}
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
