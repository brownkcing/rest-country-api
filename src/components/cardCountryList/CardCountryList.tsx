///<reference path='../../interface/interface.d.ts'/>
import React, {useContext, useEffect, useState} from 'react';
import {RootObject} from 'Countries';
import * as style from './cardCountryList.module.scss';
import { ContextApiCountry } from '../../context/FetchData';


const CardCountryList = () => {
    const {valueApiUrl, filterRegionData, searchWithFilter, themeName} = useContext(ContextApiCountry);
    const [initialFilterRegionData, setInitialFilterRegionData] = filterRegionData;
    const [theme, setTheme] = themeName;
    const [searchFilter, setSearchFilter] = searchWithFilter;
    const [stateApiUrl, setStateApiUrl] = useState(valueApiUrl);

    useEffect(() => {
        //Filter
        const filteringRegion = valueApiUrl.filter((item:RootObject) => item.region === initialFilterRegionData);
        initialFilterRegionData === 'All'? setStateApiUrl(valueApiUrl) : setStateApiUrl(filteringRegion);
    }, [initialFilterRegionData]);
    
    useEffect(() => {
        //Search
        const searchForCountry = valueApiUrl.filter((item:RootObject) => item.name.toUpperCase().includes(searchFilter));
        setStateApiUrl(searchForCountry)
    }, [searchFilter]);

    useEffect(() => {
        setStateApiUrl(valueApiUrl)
    }, [valueApiUrl]);

    return (
        <div className={style.gridContainer}>
            {stateApiUrl.map ( (countries:RootObject, index:number) =>
                    <a href={`/${(countries.name)}`} key={index}>
                    <div className={`${style.contentWrapper} ${theme == 'dayMode' && style.dark}`} >
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