///<reference path='../interface/interface.d.ts'/>
import React, {createContext, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {RootObject, Language} from 'Countries';
import { parse } from 'path';

// interface ContextProps {
//     initialUrl: RootObject[];
//     setInitialUrl: Function;
// }

interface RouteParams {
    field?: string
}





export const ContextApiCountry = createContext({});

export const ContextApiProviderCountry = ({children}:any) => {
    const [initialUrl, setInitialUrl] = useState<any>([]);
    const [initialFilterRegionData, setInitialFilterRegionData] = useState('');

    const parseUrl = `region/${initialFilterRegionData}`;
    const apiUrl = `https://restcountries.eu/rest/v2/`;
    
    useEffect(()=>{
        fetch(`${apiUrl}`)
        .then(res => res.json())
        .then(data => {
            setInitialUrl(data);
        })
    },[setInitialUrl]);



    // const changeValues = (property:any, value:[any]) => {
    //     setContextData({
    //         ...contextData,
    //         [property]: value
    //     })
    // }

    return (
        <ContextApiCountry.Provider
                value={{valueApiUrl: [initialUrl, setInitialUrl], 
                        filterRegionData: [initialFilterRegionData, setInitialFilterRegionData],
                }}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;