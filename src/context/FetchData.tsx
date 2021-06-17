///<reference path='../interface/interface.d.ts'/>
import React, {FC, createContext, useState, useEffect} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage';

// import { RootObject } from 'Countries';
 
type ContextI = {
    originalUrl: any,
    valueApiUrl: any,
    filterRegionData: any,
    searchWithFilter: any,
    themeName: any,
}

export const ContextApiCountry = createContext<ContextI>({} as ContextI);

export const ContextApiProviderCountry = ({children}:any) => {
    const apiUrl = `https://restcountries.eu/rest/v2`;
    const [initialUrl, setInitialUrl] = useState<any>([]);
    const [initialFilterRegionData, setInitialFilterRegionData] = useState('');
    const [searchFilter, setSearchFilter] = useState('');
    
    const [theme, setTheme] = useLocalStorage('options',[
        {title:'dark mode', name:'darkMode', enabled: false},
        {title:'dark mode', name:'dayMode', enabled: true}
    ])

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
                        searchWithFilter: [searchFilter, setSearchFilter],
                        themeName: [theme,setTheme]
                }}
        >
            {children}
        </ContextApiCountry.Provider>
    );
};

export default ContextApiProviderCountry;