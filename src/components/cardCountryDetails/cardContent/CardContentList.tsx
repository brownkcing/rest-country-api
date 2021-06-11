import React, {FC} from 'react';

interface CardContentListOneI {
    borders?:string,
    native?:string,
    population?: string,
    region?:string,
    subregion?:string, 
    capital?:string,
  
}
export const CardContentListOne:FC<CardContentListOneI> = ({native, population, region, subregion, capital}) => {
    return (
        <>
            <p><b>Native Name: </b>{native}</p>
            <p><b>Population: </b>{population}</p>
            <p><b>Region </b>{region}</p>
            <p><b>Sub Region: </b>{subregion}</p>
            <p><b>Capital: </b>{capital}</p>
        </>
    )
};