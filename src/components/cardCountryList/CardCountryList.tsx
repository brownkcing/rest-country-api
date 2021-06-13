///<reference path='../../interface/interface.d.ts'/>
import React, {useEffect, useState, useContext} from 'react';
import {RootObject, Language} from 'Countries';
import * as style from './cardCountryList.module.scss';
import { ContextApiCountry } from '../../context/FetchData';


const CardCountryList = () => {
    // const [state, setState] = useState([]);
    const initialUrl = useContext(ContextApiCountry);
  
    // useEffect(()=>{
    //     const apiUrl = `https://restcountries.eu/rest/v2/all`;
    //     fetch(apiUrl)
    //     .then(res => res.json())
    //     .then(data => {
    //         setState(data);
    //     })
    // },[setState]);
    
    return (
        <div className={style.gridContainer}>
            {initialUrl.map ( (countries:RootObject & Language, index) =>
       
                    <a href={`/${(countries.name)}`} key={index}>
                    <div  className={style.contentWrapper} >
                        <img src={countries.flag} alt="countries" />
                        <div className={style.contentData}>
                            <h3>{countries.name}</h3>
                            <p><b>Population: </b>{countries.population}</p>
                            <p><b>Region: </b>{countries.region}</p>
                            <p><b>Capital: </b>{countries.capital}</p>
                        </div>
                    </div>
                    </a>
                )}
        </div>
    );
};

export default CardCountryList;