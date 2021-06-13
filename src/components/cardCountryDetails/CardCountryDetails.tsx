///<reference path='../../interface/interface.d.ts'/>
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import * as style from './cardCountryDetails.module.scss';
import {CardContentListOne} from './cardContent/CardContentList';
import CardContentBorders from './cardContentBorder/CardContentBorders';

interface RouteParams {
    name?: string
}

// interface CountryDetailsI {
//     borders:any[],
//     country: string,
//     currency: string,
//     index: number,
//     data: any,
//     dataArr:any
//     name:any,
//     language: any,
// }

const renderTextWithComma = (data: any, dataArr: any, index: any) => (
    <span key={data.name}>
        {index + 1 < dataArr ? `${data.name}, ` : data.name}
    </span>
);
const CardCountryDetails = () => {
    const {name} = useParams<RouteParams>();
    const [countryData, setCountryData] = useState([]);
    const countryCall = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;

    useEffect(()=>{
        const cUrl = countryCall;
        fetch(cUrl)
        .then(res => res.json())
        .then(data => {
            setCountryData(data);
        })
    });

    return (
        <>
            {countryData.map((country:(any), index,)=>
                  <div className={style.dataContent} key={index}>
                  <div className={style.imageDetails} key={index+1}>
                      <img src={country.flag} alt='pic' />
                  </div>
                  <div className={style.dataDetails} key={index+2}>
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
                                {country.currencies.map((data:any, index:any, dataArr:any) => {
                                        return renderTextWithComma(data, index, dataArr)
                                    })}
                                </p>
                                <p><b>Languages: </b>
                                {country.languages.map((data:any, index:any, dataArr:any) => {
                                        return renderTextWithComma(data, dataArr.length, index)
                                    })}
                                </p>
                            </div>
                      </div>
                        <CardContentBorders borders={country.borders} />
                  </div>
              </div>
            )}
        </>

    );
};

export default CardCountryDetails ;