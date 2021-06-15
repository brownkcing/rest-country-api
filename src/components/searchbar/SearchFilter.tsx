import React from "react";
import { useLocation } from "react-router-dom";
import * as style from "./searchBar.module.scss";
import Filter from "./filter/Filter";
import SearchComp from "./searchComp/SearchComp";


const SearchBar = () => {
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/" ? (
        <>
          <SearchComp />
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
