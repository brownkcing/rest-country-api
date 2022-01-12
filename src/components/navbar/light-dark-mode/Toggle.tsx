import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import * as style from './toggle.module.scss';
import { ContextApiCountry } from '../../../context/FetchData';

const ToggleMode = () => {
    const {themeName} = useContext(ContextApiCountry)
    const [theme, setTheme] = themeName;

    const toggleMode = () => {
        theme === 'darkMode' ? setTheme('dayMode') : setTheme('darkMode');
        {console.log("hello")}
    }
    return (
        <div className={style.togglewrapper}>
            <span>{ theme === 'dayMode' ? 
                        <FontAwesomeIcon className={style.sun} onClick={toggleMode} icon={faSun} />
                            :                         
                        <FontAwesomeIcon className={style.moon} onClick={toggleMode} icon={faMoon} /> }
            </span>
            <span>{theme === 'dayMode' ? 'Day Mode' : 'Dark Mode'}</span> 
        </div>
    )
}

export default ToggleMode;