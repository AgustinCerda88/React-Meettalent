import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import { useLocation } from "react-router-dom";
import { FilterModal } from "../FilterModal/FilterModal";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

export default function Searcher() {
  const location = useLocation();

  const { setSearchText } = useContext(SearchContext);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    setSearchText("");
  }, [location.pathname]);

  return (
    <>
      {(location.pathname === "/home" ||
        location.pathname === "/offers" ||
        location.pathname === "/candidates") && (
        <input
          className="dentro-buscador"
          type="text"
          id="buscar"
          placeholder="Buscar"
          onChange={(e) => setSearchText(e.target.value)}
        />
      )}
      <div>
        <TbAdjustmentsHorizontal onClick={openModal}/>
        <FilterModal isOpen={open} closeModal={closeModal} />
      </div>
    </>
  );
}
