import React, {useContext} from "react";
import * as style from './wrapper.module.scss'
import { ContextApiCountry } from "../../context/FetchData";


const Wrapper = ({children}:any) => {
    const {themeName} = useContext(ContextApiCountry)
    const [theme, setTheme] = themeName;

    return(
        <>
            <div className={`${style.wrapper} ${theme == 'dayMode' && style.dark}`}>
                {children}
            </div>
        </>
    );
};

export default Wrapper;