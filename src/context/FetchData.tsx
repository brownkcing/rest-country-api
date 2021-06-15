///<reference path='../interface/interface.d.ts'/>
import React, {createContext, useState, useEffect} from 'react';
// import { RootObject } from 'Countries';
 


export const ContextApiCountry = createContext({});

export const ContextApiProviderCountry = ({children}:any) => {
    const apiUrl = `https://restcountries.eu/rest/v2`;
    const [initialUrl, setInitialUrl] = useState<any>([]);
    const [initialFilterRegionData, setInitialFilterRegionData] = useState('');

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
                }}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;