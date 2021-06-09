import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as style from "./searchbar.module.scss";
import Filter from "./filter/Filter";

const SearchBar = () => {
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/" ? (
        <>
          <form className={style.searchbar}>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type="text" placeholder="Search for a country"></input>
          </form>
          <>
            <Filter />
          </>
        </>
      ) : (
        <button>
            back
        </button>
      )}
    </div>
  );
};

export default SearchBar;
