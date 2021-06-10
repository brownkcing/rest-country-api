///<reference path='../../interface/interface.d.ts'/>
import React, {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { RootObject, Currency } from 'Countries';
import * as style from './datacontent.module.scss';
import {CardContentListOne, CardContentBorder} from '../cardcontent/CardContentList';

interface RouteParams {
    name?: string
}

interface CountryDetailsI {
    borders:string,
    country: string,
    currency: string,
    index: number,
    data: any,
    dataArr:any
    name:any,
    language: any,
    length:any
}

const renderTextWithComma = (data: any, length: any, index: any) => (
    <span key={data.name}>
        {data.name} {index + 1 !== length && ','}
    </span>
)
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
                                <CardContentListOne 
                                    native={country.nativeName} 
                                    population={country.population} 
                                    region={country.region} 
                                    subregion={country.subregion} 
                                    capital={country.capital}/>
                            </div>
                            <div>
                                <p><b>Top Level Domain: </b>{country.topLevelDomain}</p>
                                <p><b>Currencies: </b>
                                {country.currencies.map((data:any, length:any, index:any) => {
                                   
                                    return  renderTextWithComma(data, length, index)
                                    })}
                                </p>
                                <p><b>Languages: </b>
                                {country.languages.map((data:any, length:any, index:any) => {
                          
                                        return renderTextWithComma(data, length, index)
                                    })}
                                </p>
                            </div>
                      </div>
                      borders: <CardContentBorder borders={country.borders}/>
                  </div>
              </div>
            )}
        </>

    )
}

export default DataContent;