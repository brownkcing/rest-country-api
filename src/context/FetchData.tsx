///<reference path='../interface/interface.d.ts'/>
import React, {createContext, useState, useEffect} from 'react';
import { useParams } from 'react-router';

interface RouteParams {
    field?: string
}

export const ContextApiCountry = createContext({});

export const ContextApiProviderCountry = ({children}:any) => {
    const apiUrl = `https://restcountries.eu/rest/v2`;
    const [initialUrl, setInitialUrl] = useState<any>([]);
    const [initialFilterRegionData, setInitialFilterRegionData] = useState('');

    // const parseUrl = `region/${initialFilterRegionData}`;

    
    useEffect(()=>{
        fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(data => {
            setInitialUrl(data);
        })
    },[setInitialUrl]);

    return (
        <ContextApiCountry.Provider
                value={{originalUrl: apiUrl,
                        valueApiUrl: [initialUrl, setInitialUrl], 
                        filterRegionData: [initialFilterRegionData, setInitialFilterRegionData],
                }}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;