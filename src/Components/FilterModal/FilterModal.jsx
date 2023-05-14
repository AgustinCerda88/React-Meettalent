import React, { useContext } from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
import { SearchContext } from "../../App";
import "./FilterModal.css";

Modal.setAppElement("#root");

export const FilterModal = ({ isOpen, closeModal }) => {
  const { filtros, setFiltros } = useContext(SearchContext);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "keywords") {
      const palabrasClave = filtros.keywords.slice(); // make a copy of the array
      if (value) {
        palabrasClave.push(target.value);
      } else {
        const index = palabrasClave.indexOf(target.value);
        if (index !== -1) {
          palabrasClave.splice(index, 1);
        }
      }
      setFiltros({
        ...filtros,
        [name]: palabrasClave,
      });
    } else {
      setFiltros({
        ...filtros,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <ReactModal className="position" isOpen={isOpen}>
      <div className="modal">
        <div className="modal-header">
          <h4>FILTROS</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="select">
            <select
              name="location"
              value={filtros.location}
              onChange={handleInputChange}
              defaultValue=""
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
              name="city"
              value={filtros.city}
              onChange={handleInputChange}
              defaultValue=""
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
              name="availability"
              value={filtros.availability}
              onChange={handleInputChange}
              defaultValue=""
            >
              <option value="" disabled>
                Disponibilidad
              </option>
              <option value="full-time">Tiempo completo</option>
              <option value="part-time">Medio tiempo</option>
              <option value="week-end">Fines de semana</option>
              <option value="remote-time">Trabajo remoto</option>
              <option value="proyect-time">Trabajo por proyectos</option>
              <option value="flexible">Flexible</option>
            </select>

            <select
              name="salary"
              value={filtros.salary}
              onChange={handleInputChange}
              defaultValue=""
            >
              <option value="" disabled>
                Salario anual
              </option>
              <option value="" disabled>
                Salario anual
              </option>
              <option value="16000-20000">16000-20000€</option>
              <option value="20000-30000">20000-30000€</option>
              <option value="30000-40000">30000-40000€</option>
            </select>

            <select
              name="scheduleType"
              value={filtros.scheduleType}
              onChange={handleInputChange}
              defaultValue=""
            >
              <option value="" disabled>
                Tipo de jornada
              </option>
              <option value="" disabled>
                Tipo de jornada
              </option>
              <option value="morning">Mañana</option>
              <option value="afternoon">Tarde</option>
              <option value="evening">Noche</option>
            </select>
          </div>
          <div className="keyword-checkboxes">
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Developer"
                onChange={handleInputChange}
              />
              Developer
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="JavaScript"
                onChange={handleInputChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Frontend"
                onChange={handleInputChange}
              />
              Frontend
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Backend"
                onChange={handleInputChange}
              />
              Backend
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Fullstack"
                onChange={handleInputChange}
              />
              Fullstack
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Mobile"
                onChange={handleInputChange}
              />
              Mobile
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="DevOps"
                onChange={handleInputChange}
              />
              DevOps
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Big Data"
                onChange={handleInputChange}
              />
              Big Data
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Inteligencia Artificial"
                onChange={handleInputChange}
              />
              Inteligencia Artificial
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Ciberseguridad"
                onChange={handleInputChange}
              />
              Ciberseguridad
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Cloud"
                onChange={handleInputChange}
              />
              Cloud
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Redes"
                onChange={handleInputChange}
              />
              Redes
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Base de datos"
                onChange={handleInputChange}
              />
              Base de datos
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="UI/UX"
                onChange={handleInputChange}
              />
              UI/UX
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Diseño"
                onChange={handleInputChange}
              />
              Diseño
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Gestión de proyectos"
                onChange={handleInputChange}
              />
              Gestión de proyectos
            </label>
            <label>
              <input
                type="checkbox"
                name="keywords"
                value="Agilismo"
                onChange={handleInputChange}
              />
              Agilismo
            </label>
          </div>
          <button type="submit" className="button-blue">
            Filtrar
          </button>
        </form>
      </div>
    </ReactModal>
  );
};
