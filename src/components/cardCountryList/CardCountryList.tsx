///<reference path='../../interface/interface.d.ts'/>
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {RootObject, Language} from 'Countries';
import * as style from './cardCountryList.module.scss';



const CardCountryList = ()=> {
    const [state, setState] = useState([]);
    useEffect(()=>{
        const apiUrl = `https://restcountries.eu/rest/v2/all`;
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setState(data);
        })
    },[setState]);
    
    return (
        <div className={style.gridContainer}>
            {state.map ( (countries:RootObject & Language) =>
                    <Link to={{pathname:`/${countries.name}`}} className={style.contentWrapper} >
                        <img src={countries.flag} alt="countries" />
                        <div className={style.contentData}>
                            <h3>{countries.name}</h3>
                            <p><b>Population: </b>{countries.population}</p>
                            <p><b>Region: </b>{countries.region}</p>
                            <p><b>Capital: </b>{countries.capital}</p>
                        </div>
                    </Link>
                )}
        </div>
    )
}

export default CardCountryList;