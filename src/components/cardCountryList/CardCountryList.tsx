///<reference path='../../interface/interface.d.ts'/>
import React, {useContext} from 'react';
import {RootObject, Language} from 'Countries';
import * as style from './cardCountryList.module.scss';
import { ContextApiCountry } from '../../context/FetchData';


const CardCountryList = () => {
    const initialUrl = useContext(ContextApiCountry);
    
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