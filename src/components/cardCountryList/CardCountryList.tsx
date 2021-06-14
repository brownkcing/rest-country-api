///<reference path='../../interface/interface.d.ts'/>
import React, {useContext} from 'react';
import { useParams } from 'react-router';
import {RootObject, Language} from 'Countries';
import * as style from './cardCountryList.module.scss';
import { ContextApiCountry } from '../../context/FetchData';

interface RouteParams {
    field?: string
}



const CardCountryList = () => {
    const {valueApiUrl, filterRegionData}:any = useContext(ContextApiCountry)
    const [initialFilterRegionData, setInitialFilterRegionData] = filterRegionData;
    const [stateApiUrl, setStateApiUrl] = valueApiUrl;

    const {field} = useParams<RouteParams>();
    

    return (

        <div className={style.gridContainer}>
                    {console.log(initialFilterRegionData)}
            {stateApiUrl.map ( (countries:RootObject & Language, index:any) =>
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