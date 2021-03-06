import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as style from "./search.module.scss"
import { ContextApiCountry } from '../../../context/FetchData';


const SearchComp = () => {
    const {searchWithFilter, themeName}:any = useContext(ContextApiCountry);
    const [searchFilter, setSearchFilter] = searchWithFilter;
    const [theme, setTheme] = themeName;

    const inputChange = (e:any) => {
        e.preventDefault();
        const toUpper =(e.target.value).toUpperCase();
        setSearchFilter(toUpper);
    }

    useEffect(() => {
        setSearchFilter(searchFilter)
    },[searchWithFilter])

    
    return(
        <form className={`${style.searchbar} ${theme === 'dayMode' && style.dark}`} onChange={inputChange}>
            <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input type="text" placeholder="Search for a country"></input>
        </form>
    )
};

export default SearchComp;
