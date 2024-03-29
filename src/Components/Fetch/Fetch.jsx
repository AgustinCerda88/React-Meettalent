import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Fetch.css";
import { SearchContext } from "../../App";
import { BiLockAlt, BiMap } from "react-icons/bi";
import { BiLockOpenAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Fetch = ({ abierto, setCantidadOfertasLock }) => {
  const [offers, setOffers] = useState([]);
  const { searchText } = useContext(SearchContext);
  const location = useLocation();
  const [percents, setPercents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        const offersData = res.data.map((offer) => {
          return offer;
        });
        setOffers(offersData);

        setPercents(
          offersData.map((offer, index) => Math.floor(Math.random() * 100))
        );

        location.pathname === "/home" &&
          setCantidadOfertasLock(
            offersData.filter((offer) => offer.lock === true).length
          );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setCantidadOfertasLock, location]);

  console.log(offers);

  const handleUpdateLock = async (offerId, lockStatus) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/offers/${offerId}`,
        {
          lock: lockStatus,
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const toggleAbierto = async (offerId) => {
    const updatedOffers = [...offers];

    const updatedOffer = updatedOffers.find((offer) => offer._id === offerId);
    updatedOffer.lock = !updatedOffer.lock;

    const updateOfferData = await handleUpdateLock(offerId, updatedOffer.lock);

    if (updateOfferData) {
      setOffers(updatedOffers);
      location.pathname === "/home" &&
        setCantidadOfertasLock(
          updatedOffers.filter((offer) => offer.lock === true).length
        );
    }
  };

  return (
    <div className="offerdisplay">
      {offers.length === 0 ? (
        <div>NO HAY OFERTAS DISPONIBLES</div>
      ) : (
        offers
          .filter(
            (offer) =>
              (offer.position.toLowerCase().includes(searchText) ||
                offer.company.toLowerCase().includes(searchText) ||
                offer.description.toLowerCase().includes(searchText) ||
                offer.location.toLowerCase().includes(searchText) ||
                offer.city.toLowerCase().includes(searchText)) 
                && location.pathname === "/home" &&
              offer.lock && offer)
          .map((offer, index) => {
            const percent = percents[index];
            return (
              <div className="lockposition" key={offer._id}>
                <div
                  className="locklogo"
                  onClick={() => toggleAbierto(offer._id)}
                >
                  {offer.lock === true ? <BiLockOpenAlt /> : <BiLockAlt />}
                </div>
                <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                  <h3>{offer.position}</h3>
                  <div className="city">
                    <div>
                      <BiMap /> {offer.location}
                    </div>
                    <div>
                      1 <AiOutlineUser className="logouser" />
                    </div>
                    <div>
                      {/* <span> </span> */}
                      {offer.date && (
                        <div className="fechacreacion">
                          <AiOutlineEye />
                          {`${offer.date.day}/${offer.date.month}/${offer.date.year}`}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="process">
                    <div className="processperc">
                      <div>Proceso</div>
                      <div className="percent">{percent}%</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="footeroffer">
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Inscritos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Procesos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Finalistas</div>
                    </div>
                  </div>
                  <div></div>
                </Link>
              </div>
            );
          })
      )}

      {offers
      .filter(
        (offer) =>
          offer.position.toLowerCase().includes(searchText) ||
          offer.company.toLowerCase().includes(searchText) ||
          offer.description.toLowerCase().includes(searchText) ||
          offer.location.toLowerCase().includes(searchText) ||
          offer.city.toLowerCase().includes(searchText)
      ) && location.pathname === "/offers" &&
        offers.filter((offer) => offer.lock === abierto && offer)
          .map((offer, i) => {
            const percent = percents[i];
            return (
              <div className="lockposition" key={offer._id}>
                <div
                  className="locklogo"
                  onClick={() => toggleAbierto(offer._id)}
                >
                  {offer.lock === true ? <BiLockOpenAlt /> : <BiLockAlt />}
                </div>
                <Link className="job-offer-detail" to={`/offers/${offer._id}`}>
                  <h3>{offer.position}</h3>
                  <div className="city">
                    <div>
                      <BiMap /> {offer.location}
                    </div>
                    <div>
                      1 <AiOutlineUser className="logouser" />
                    </div>
                    <div>
                      {/* <span> </span> */}
                      <div className="fechacreacion">
                        {offer.date && (
                          <div className="fechacreacion">
                            <AiOutlineEye />
                            {`${offer.date.day}/${offer.date.month}/${offer.date.year}`}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="process">
                    <div className="processperc">
                      <div>Proceso</div>
                      <div className="percent">{percent}%</div>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="footeroffer">
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Inscritos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Procesos</div>
                    </div>
                    <div className="linevert"></div>
                    <div>
                      <div className="number">
                        {Math.floor(Math.random() * 50)}
                      </div>
                      <div>Finalistas</div>
                    </div>
                  </div>
                  <div></div>
                </Link>
              </div>
            );
          })}
    </div>
  );
};
