import * as React from 'react';
import * as style from './card.module.scss';

interface CardProps {
    image?: string;
    country?: string;
    population?: number;
    region?: string;
    capital?: string;
}

export const Card: React.FC<CardProps> = (props) => {
    const {image, population = 0, region, capital, country} = props;

    return (
        <div className={style.cardContainer}>
            <div className={style.imgContainer}>
                <img className={style.img} src={image} alt=""/>
            </div>
            <div className={style.detailsContainer}>
                <div className={style.header}>{country}</div>
                <div className={style.subContainer}><span className={style.subHeader}>Population:</span><span className={style.subDetails}>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></div>
                <div className={style.subContainer}><span className={style.subHeader}>Region:</span><span className={style.subDetails}>{region}</span></div>
                <div className={style.subContainer}><span className={style.subHeader}>Capital:</span><span className={style.subDetails}>{capital}</span></div>
            </div>
        </div>
    );
};
