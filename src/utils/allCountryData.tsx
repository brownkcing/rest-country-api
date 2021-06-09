import React,{useState} from 'react';

export const getCountriesData = async (url:string) => {
    const [countryData, setCountryData] = useState([]);
    const res = await fetch(url);
    const data = await res.json();
    setCountryData(data);
};