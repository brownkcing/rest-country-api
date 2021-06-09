///<reference path='../../interface/interface.d.ts'/>
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { RootObject, Currency } from 'Countries';
import * as style from './datacontent.module.scss';

interface RouteParams {
    name: string
}



const DataContent = () => {
    const {name} = useParams<RouteParams>();
    const [countryData, setCountryData] = useState([])
    const countryCall = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`

    useEffect(()=>{
        const cUrl = countryCall;
        fetch(cUrl)
        .then(res => res.json())
        .then(data => {
            setCountryData(data);
        })
    },[setCountryData]);

    return (
        <>
            {countryData.map( (country:(any))=>
                  <div className={style.dataContent}>
                  <div className={style.imageDetails}>
                      <img src={country.flag} alt='pic' />
                  </div>
                  <div className={style.dataDetails}>
                      <h3>{name}</h3>
                      <div className={style.countryDetail}>
                            <div> 
                                <p><b>Native Name: </b>{country.nativeName}</p>
                                <p><b>Population: </b>{country.population}</p>
                                <p><b>Region: </b>{country.region}</p>
                                <p><b>Sub Region: </b>{country.subregion}</p>
                                <p><b>Capital: </b>{country.capital}</p>
                            </div>
                            <div>
                                <p><b>Top Level Domain: </b>{country.topLevelDomain}</p>
                                <p><b>Currencies: </b>
                                {country.currencies.map((currency:any, index:any) => {
                                    return (
                                        <span key={currency.name}>
                                            {index + 1 !== country.currencies.length
                                            ? `${currency.name}, `
                                            : currency.name}
                                        </span>
                                        );
                                    })}
                                </p>
                                <p><b>Languages: </b>
                                {country.languages.map((language:any, index:any) => {
                                    return (
                                        <span key={language.name}>
                                            {index + 1 !== country.languages.length
                                            ? `${language.name}, `
                                            : language.name}
                                        </span>
                                        );
                                    })}
                                </p>
                            </div>
                      </div>
                      <div>border countries</div>
                  </div>
              </div>
            )}
        </>

    )
}

export default DataContent;