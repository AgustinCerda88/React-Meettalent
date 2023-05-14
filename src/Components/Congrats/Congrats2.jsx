import React, { useContext } from "react";
import imagen from "../../assets/conet.png";
import { Link} from "react-router-dom";
import { SearchContext } from "../../App";
import './Congrats.css'

export const Congrats2 = () => {
  const { newOffer } = useContext(SearchContext);

  return (
    <div className="congratsContainer">
      <div className="congratsImg">
        <img className="img-congrats" src={imagen} alt="congratulations" />
      </div>
      <div className="congratsText">
        <h1 className="congratsText1">¡ Enhorabuena !</h1>
        <p className="congratsText2">Acabas de publicar una oferta</p>
        <button className="button-white" ><Link to={`/offers/${newOffer._id}`}>Ver oferta publicada</Link></button>
      </div>
    </div>
  );
};

export default Congrats2