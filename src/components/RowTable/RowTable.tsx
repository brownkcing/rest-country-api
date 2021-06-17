import * as React from 'react';
import * as style from './rowTable.module.scss';
import {Tag} from "../Tag/Tag";

interface RowTableProps {
  image?: string;
  country?: string;
  population?: number | string;
  region?: string;
  capital?: string;
  header?: boolean
  currency?: any;

}

export const RowTable: React.FC<RowTableProps> = (props) => {
  const {image, population = 0, region, capital, country, header, currency} = props;
  return (
   <div className={`${style.row} row ${header && style.header} ${!header && style.hoverEffect}`}>
    <div className={`col-2`}>
      {image && <img className={style.flagCircle} src={image} alt=""/>}
    </div>
     <div className={`col-2 ${header ? style.fontLarge : style.fontMedium}`}>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
     <div className={`col-2 ${header ? style.fontLarge : style.fontMedium}`}>{country}</div>
     <div className={`col-2 ${header ? style.fontLarge : style.fontMedium}`}>{region}</div>
     <div className={`col-2 ${header ? style.fontLarge : style.fontMedium}`}>{capital}</div>
     <div className={`col-2 ${header ? style.fontLarge : style.fontMedium} d-flex`}>{Array.isArray(currency) ? currency.map((item: any) => <Tag symbol={item.symbol} code={item.code}/>) : currency}</div>
   </div>
  );
};
