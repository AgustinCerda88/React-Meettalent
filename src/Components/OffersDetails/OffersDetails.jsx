import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import { useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./OffersDetails.css";
import { SearchContext } from "../../App";

export const OffersDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedOffer, setEditedOffer] = useState({});
  const { newOffer, setNewOffer } = useContext(SearchContext);
  const [offer, setOffer] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };

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
        <button onClick={previousPage}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        Detalle de la oferta
        <div></div>
      </h3>
      <div className="container-black">
        <div className="offerdetail">
          {offer ? (
            <div className="job-offer">
              <div className="job-title">
                <h3>{offer.position}</h3>
                <h4>{offer.company}</h4>
              </div>
              <div className="description">
                <strong>Descripción:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.description}</div>
                )}
              </div>
              <div className="description">
                <strong>Requisitos:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.requirements}</div>
                )}
              </div>
              {/* <div className="description">
                <strong>Palabras Clave:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.keywords}</div>
                )}
              </div> */}
              <div className="description">
                <strong>Salario:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.salary}</div>
                )}
              </div>
              <div className="description">
                <strong>Ubicación:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.location}</div>
                )}
              </div>
              <div className="description">
                <strong>Tipo de Jornada:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.scheduleType}</div>
                )}
              </div>
              <div className="description">
                <strong>Tipo de Contrato:</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.contractType}</div>
                )}
              </div>

              <div className="description">
                <strong>Disponibilidad</strong>
                {editMode ? (
                  <input
                    className="editor"
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
                  <div>{offer.availability}</div>
                )}
              </div>
              <div className="buttons">
                {!editMode && (
                  <button
                    className="button"
                    onClick={() => deleteOffer(offer._id)}
                  >
                    Eliminar oferta
                  </button>
                )}

                {editMode && (
                  <button className="button" onClick={handleSave}>
                    Guardar
                  </button>
                )}

                {!editMode && (
                  <button className="button" onClick={handleEdit}>
                    Editar
                  </button>
                )}
              </div>
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
