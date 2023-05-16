import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../App";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./createpage.css";

export const CreateOffer = () => {
  const navigate = useNavigate();
  const [currentSheet, setCurrentSheet] = useState(0);
  const { setNewOffer } = useContext(SearchContext);

  const { register, handleSubmit } = useForm();

  const handleNextClick = () => {
    const sheet = currentSheet + 1;
    setCurrentSheet(sheet);
  };

  const onSubmit = (data) => {
    const currentDate = new Date();
  data.date = {
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear()
  };
    console.log(Date);
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="allpage">
      <div className="backheader">
        <Link to={"/create"}>
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        Volver al menu anterior
        <div></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentSheet === 0 && (
          <div className="container-black">
            <div className="form-page">
              <div className="block">
                <div className="separador">
                  <div className="titulos-input">
                    <h4>Titulo de la nueva oferta</h4>
                    <input
                      className="button-blue"
                      type="text"
                      id="title"
                      placeholder="Escribe el título"
                      {...register("position")}
                    />
                  </div>
                  <div className="titulos-input">
                    <h4>Nombre de la empresa</h4>
                    <input
                      className="button-blue"
                      type="text"
                      id="title"
                      placeholder="Escribe la empresa"
                      {...register("company")}
                    />
                  </div>
                </div>
                <button onClick={handleNextClick} className="button-white">
                  Comenzar
                </button>
              </div>
            </div>
          </div>
        )}
        {currentSheet === 1 && (
          <div className="container-white">
            <div className="form-page">
              <div className="block">
                <div className="separador">
                  <h4> Detalles </h4>
                  <div className="createInputs">
                    <select
                      {...register("location")}
                      defaultValue=""
                      className="button-blue"
                    >
                      <option value="" disabled>
                        Pais
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
                    <select
                      {...register("city")}
                      defaultValue=""
                      className="button-blue"
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
                    <select
                      {...register("availability")}
                      defaultValue=""
                      className="button-blue"
                    >
                      <option value="" disabled>
                        Disponibilidad
                      </option>
                      <option value="Jornada Completa">
                        Completa completo
                      </option>
                      <option value="Media Jornada">Media jornada</option>
                      <option value="Fines de semana">Fines de semana</option>
                      <option value="Trabajo remoto">Trabajo remoto</option>
                      <option value="Trabajo por proyectos">
                        Trabajo por proyectos
                      </option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  <h4> Condiciones </h4>
                  <div className="createInputs">
                    <select
                      {...register("salary")}
                      defaultValue=""
                      className="button-blue"
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
                    <select
                      {...register("scheduleType")}
                      defaultValue=""
                      className="button-blue"
                    >
                      <option value="" disabled>
                        Tipo de jornada
                      </option>
                      <option value="Mañanas">Mañanas</option>
                      <option value="Tardes">Tardes</option>
                      <option value="Nocturno">Nocturno</option>
                    </select>
                    <select
                      {...register("contractType")}
                      defaultValue=""
                      className="button-blue"
                    >
                      <option value="" disabled>
                        Tipo de contrato
                      </option>
                      <option value="Temporal">Temporal</option>
                      <option value="Permanente">Permanente</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Tiempo parcial">
                        Contrato por tiempo parcial
                      </option>
                      <option value="Formación">
                        Contrato de formación
                      </option>
                      <option value="Prácticas">
                        Contrato en prácticas
                      </option>
                    </select>
                  </div>
                </div>
                <button onClick={handleNextClick} className="button-black">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}

        {currentSheet === 2 && (
          <div className="container-white">
            <div className="form-page">
              <div className="block">
                <div className="separador">
                  <div className="form-page">
                    <h4>Descripcion de candidato</h4>
                    <div className="inputext">
                      <textarea
                        {...register("description")}
                        type="text"
                        placeholder="Descripción..."
                        className="offerArea"
                      />
                    </div>
                  </div>
                  <div className="form-page">
                    <h4>Requisitos de candidato</h4>
                    <div className="inputext">
                      <textarea
                        {...register("requirements")}
                        type="text"
                        placeholder="Describa los requisitos..."
                        className="offerArea"
                      />
                    </div>
                  </div>
                  <div className="form-page">
                    <h4>Codificaciones internas</h4>
                    <select
                      {...register("keywords")}
                      defaultValue=""
                      className="button-blue"
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
                </div>
                <button type="submit" className="button-black">
                  Crear oferta
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
