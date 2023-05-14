import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Importar useHistory
import { SearchContext } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import flechaRetrocederNegra from "../../assets/flechaRetrocederNegra.png";
import vectorX from "../../assets/vectorX.png";
import { IoIosArrowBack } from "react-icons/io";

export const CreateOffer = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const navigate = useNavigate();
  const [currentSheet, setCurrentSheet] = useState(0);
  const [jobTitle, setJobTitle] = useState("");
  const [jobCompany, setJobCompany] = useState("");
  const [offers, setOffers] = useState([]);
  const { setNewOffer } = useContext(SearchContext);

  const { register, handleSubmit, getValues } = useForm();

  const handleNextClick = () => {
    const sheet = currentSheet + 1;
    setCurrentSheet(sheet);
  };

  const onSubmit = (data) => {
    data.lock = true;
    const updatedData = { ...data };
    handleCreateOffer(updatedData);
    console.log(updatedData);
  };

  const handleCreateOffer = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8000/offers", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setNewOffer(data);
        navigate("/congrats2");
        const offersData = data.map((data) => ({ ...data, lock: true }));
        setOffers(offersData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleButton = (value) => {
    setJobTitle(value);
    setJobCompany(value);
  };

  const getOffers = () => {
    axios
      .get("http://localhost:8000/offers")
      .then((res) => {
        setOffers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div>
      <div>
        <div className="page user home">
          <h3 className="backheader">
            <Link to={"/create"}>
              <IoIosArrowBack></IoIosArrowBack>
            </Link>
            Volver al menu anterior
            <div></div>
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="createForm">
          {currentSheet === 0 && (
            <div className="container-black">
              <div className="createImputs">
                <h4 className="">Titulo de la nueva oferta</h4>
                <input
                  className="button-blue button98"
                  type="text"
                  id="title"
                  placeholder="Escribe el título"
                  {...register("position")}
                />
                <h4 className="">Compañia de la nueva oferta</h4>
                <input
                  className="button-blue button98"
                  type="text"
                  id="title"
                  placeholder="Escribe el nombre de la compañia"
                  {...register("company")}
                />

                <button
                  onClick={handleNextClick}
                  className="button-white button100 mt250"
                >
                  Comenzar
                </button>
              </div>
            </div>
          )}
          {currentSheet == 1 && (
            <div className="offerImputs">
              <div className="">
                <select
                  {...register("city")}
                  defaultValue=""
                  className="button-blue button100"
                >
                  <option value="" disabled>
                    Ciudad
                  </option>
                  {[
                    "A Coruña",
                    "Alicante",
                    "Almería",
                    "Badalona",
                    "Barcelona",
                    "Bilbao",
                    "Cartagena",
                    "Córdoba",
                    "Elche",
                    "Getafe",
                    "Gijón",
                    "Granada",
                    "Jerez de la Frontera",
                    "Málaga",
                    "Madrid",
                    "Murcia",
                    "Mostoles",
                    "Oviedo",
                    "Palma",
                    "Pamplona",
                    "Sevilla",
                    "Sabadell",
                    "Valencia",
                    "Valladolid",
                    "Vigo",
                    "Vitoria",
                    "Zaragoza",
                  ]
                    .sort()
                    .map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
              </div>

              <div className="">
                <select
                  {...register("location")}
                  defaultValue=""
                  className="button-blue  button100"
                >
                  <option value="" disabled>
                    Ubicacion
                  </option>

                  {[
                    "Alemania",
                    "Argentina",
                    "Armenia",
                    "Australia",
                    "Brasil",
                    "Canadá",
                    "China",
                    "Colombia",
                    "España",
                    "Estados Unidos",
                    "Francia",
                    "Italia",
                    "Japón",
                    "México",
                    "Portugal",
                    "Reino Unido",
                    "Rusia",
                    "Sudáfrica",
                    "Suecia",
                    "Suiza",
                    "Ucrania",
                    "Venezuela",
                  ]
                    .sort()
                    .map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                </select>
              </div>
              <div className="">
                <select
                  {...register("availability")}
                  defaultValue=""
                  className="button-blue  button100"
                >
                  <option value="" disabled>
                    Disponibilidad
                  </option>
                  <option value="Jornada Completa">Completa completo</option>
                  <option value="Media Jornada">Media jornada</option>
                  <option value="Fines de semana">Fines de semana</option>
                  <option value="Trabajo remoto">Trabajo remoto</option>
                  <option value="Trabajo por proyectos">
                    Trabajo por proyectos
                  </option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              <div>
                <h4 className=""> Condiciones </h4>
                <select
                  {...register("salary")}
                  defaultValue=""
                  className="button-blue  button100"
                >
                  <option value="" disabled>
                    Salario anual
                  </option>
                  <option value="15000-20000€">15000-20000€</option>
                  <option value="25000-30000€">25000-30000€</option>
                  <option value="35000-40000€">35000-40000€</option>
                  <option value="45000-50000€">45000-50000€</option>
                  <option value="55000-60000€">55000-60000€</option>
                </select>
              </div>

              <div className="">
                <select
                  {...register("scheduleType")}
                  defaultValue=""
                  className="button-blue  button100"
                >
                  <option value="" disabled>
                    Tipo de jornada
                  </option>
                  <option value="Mañanas">Mañanas</option>
                  <option value="Tardes">Tardes</option>
                  <option value="Nocturno">Nocturno</option>
                </select>
              </div>

              <div className="">
                <select
                  {...register("contractType")}
                  defaultValue=""
                  className="button-blue  button100"
                >
                  <option value="" disabled>
                    Tipo de contrato
                  </option>
                  <option value="Temporal">Temporal</option>
                  <option value="Permanente">Permanente</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Contrato por tiempo parcial">
                    Contrato por tiempo parcial
                  </option>
                  <option value="Contrato de formación">
                    Contrato de formación
                  </option>
                  <option value="Contrato en prácticas">
                    Contrato en prácticas
                  </option>
                </select>
              </div>
              <button
                onClick={handleNextClick}
                className="button-black button100 mt180"
              >
                Continuar
              </button>
              {/* <button type="submit"> siguiente</button> */}
            </div>
          )}

          {currentSheet === 2 && (
            <div className="offer2">
              <h4 className="">Descripcion de candidato</h4>

              <div className="">
                <p className="">Descripción</p>
                <textarea
                  {...register("description")}
                  type="text"
                  placeholder="Descripción..."
                  className="offerArea"
                />
              </div>
              <h4 className="">Requisitos de candidato</h4>
              <div className="">
                <p className="">Requisitos</p>
                <textarea
                  {...register("requirements")}
                  type="text"
                  placeholder="requisitos..."
                  className="offerArea"
                />
              </div>

              <h4 className="">Codificaciones internas</h4>
              <div className="">
                {/* <label htmlFor="keywords">Añadir palabras clave</label> */}
                <select
                  {...register("keywords")}
                  defaultValue=""
                  className="button-blue button100"
                >
                  <option value="" disabled>
                    Palabras clave
                  </option>
                  <option value="Developer">Developer</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Fullstack">Fullstack</option>
                  <option value="Mobile">Mobile</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Big Data">Big Data</option>
                  <option value="Inteligencia Artificial">
                    Inteligencia Artificial
                  </option>
                  <option value="Ciberseguridad">Ciberseguridad</option>
                  <option value="Cloud">Cloud</option>
                  <option value="Redes">Redes</option>
                  <option value="Base de datos">Base de datos</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Diseño">Diseño</option>
                  <option value="Gestión de proyectos">
                    Gestión de proyectos
                  </option>
                  <option value="Agilismo">Agilismo</option>
                </select>
              </div>
              <button type="submit" className="button-black button100 mt150">
                Crear oferta
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
