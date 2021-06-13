import React,{FC} from 'react';
import * as style from './cardContentBorder.module.scss';

interface CountryBordersI {
    borders?: any;
}



const CardContentBorders = ({borders}:(CountryBordersI)) => {
    return(
        <div className={style.borderContainer}>
            <b>Borders: </b>
                <div className={style.borders}>
                    {borders.map((item:any, index:any)=>
                        <span key={index}>{item}</span>
                    )}
            </div>
        </div>
    )
}

export default CardContentBorders;