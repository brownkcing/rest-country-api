import React, { useContext, useState } from 'react';
import * as style from './toggle.module.scss';
import { ContextApiCountry } from '../../../context/FetchData';

const ToggleMode = () => {
    const {themeName} = useContext(ContextApiCountry)
    const [theme, setTheme] = themeName;

    const toggleMode = () => {
        theme == 'darkMode' ? setTheme('dayMode') : setTheme('darkMode');
        {console.log("hello")}
    }
    return (
        <div className={style.togglewrapper}>
           <button onClick={toggleMode}>Dark Mode</button> 
        </div>
    )
}

export default ToggleMode;