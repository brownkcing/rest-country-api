///<reference path='../../interface/interface.d.ts'/>
import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import {RootObject, Language} from 'Countries';
import * as style from './cardCountryList.module.scss';
import { ContextApiCountry } from '../../context/FetchData';


const CardCountryList = () => {
    const {valueApiUrl, filterRegionData}:any = useContext(ContextApiCountry);
    const [initialFilterRegionData, setInitialFilterRegionData] = filterRegionData;
    const [stateApiUrl, setStateApiUrl] = useState(valueApiUrl);



    useEffect(() => {
        const filteringRegion = valueApiUrl.filter((item: any) => item.region === initialFilterRegionData);
        initialFilterRegionData === 'All'? setStateApiUrl(valueApiUrl) : setStateApiUrl(filteringRegion);
    }, [initialFilterRegionData]);

    useEffect(() => {
        setStateApiUrl(valueApiUrl)
    }, [valueApiUrl]);

    return (

        <div className={style.gridContainer}>
                    {console.log(stateApiUrl)}
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