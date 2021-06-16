///<reference path='../interface/interface.d.ts'/>
import React, {FC, createContext, useState, useEffect} from 'react';
// import { RootObject } from 'Countries';
 
// type ContextI = {
//     originalUrl: any,
//     valueApiurl: any,
//     filterRegionData: any,
//     searchWithFilter: any
// }

export const ContextApiCountry = createContext({});

export const ContextApiProviderCountry = ({children}:any) => {
    const apiUrl = `https://restcountries.eu/rest/v2`;
    const [initialUrl, setInitialUrl] = useState<any>([]);
    const [initialFilterRegionData, setInitialFilterRegionData] = useState('');
    const [searchFilter, setSearchFilter] = useState('');

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2')
        .then(res => res.json())
        .then(data => {
            setInitialUrl(data);
        })
    },[setInitialUrl]);

    return (
        <ContextApiCountry.Provider
                value={{originalUrl: apiUrl,
                        valueApiUrl: initialUrl, 
                        filterRegionData: [initialFilterRegionData, setInitialFilterRegionData],
                        searchWithFilter: [searchFilter, setSearchFilter]
                }}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;