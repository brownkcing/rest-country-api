///<reference path='../interface/interface.d.ts'/>
import React, {createContext, useState, useEffect} from 'react';
import {RootObject, Language} from 'Countries';

// interface ContextProps {
//     initialUrl: RootObject[];
//     setInitialUrl: Function;
// }


const apiUrl = 'https://restcountries.eu/rest/v2/all';

export const ContextApiCountry = createContext([]);

export const ContextApiProviderCountry = ({children}:any) => {
    const [initialUrl, setInitialUrl] = useState<any>([]);
    useEffect(()=>{
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setInitialUrl(data);
        })
    },[setInitialUrl]);

    return (
        <ContextApiCountry.Provider
            value={initialUrl}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;