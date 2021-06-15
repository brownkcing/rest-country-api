import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as style from "./search.module.scss"
import { ContextApiCountry } from '../../../context/FetchData';


const SearchComp = () => {
    const {searchWithFilter, valueApiUrl}:any = useContext(ContextApiCountry);
    const [searchFilter, setSearchFilter] = searchWithFilter;

    const inputChange = (e:any) => {
        e.preventDefault();
        setSearchFilter(e.target.value);
    }

    useEffect(() => {
        setSearchFilter(searchFilter)
    },[searchWithFilter])

    
    return(
        <form className={style.searchbar} onChange={inputChange}>
            <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type="text" placeholder="Search for a country"></input>
        </form>
    )
};

export default SearchComp;
