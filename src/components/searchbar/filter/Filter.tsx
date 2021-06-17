import React, {useState, useContext} from 'react';
import * as style from './filter.module.scss';
import { ContextApiCountry } from '../../../context/FetchData';



const tableData = [{id:0, label:'All'}, {id:1, label: 'Africa'}, {id:2, label: 'Americas'}, {id:3, label: 'Asia'}, {id:4, label: 'Europe'}, {id:5, label: 'Oceania'} ]

const FilterDrop = () => {
    const {filterRegionData, themeName} = useContext(ContextApiCountry)
    const [initialFilterRegionData, setInitialFilterRegionData] = filterRegionData;
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(tableData);
    const [theme, setTheme] = themeName;
    const [placeholder, setPlaceholder] = useState("Select Regions")

    const handleSelect = (value:any) => {
        setPlaceholder(value);
        setInitialFilterRegionData(value);
        setOpen(false);
    }
    
    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    return(
        <div className={style.dropdown}>
            <div className={`${style.dropdownHeader} ${theme == 'dayMode' && style.dark}`} onClick={toggleDropdown}>{placeholder}
                <span className={`${style.arrow} ${isOpen && style.open}`} />
                <div className={`${style.dropdownBody} ${isOpen && style.open} ${theme == 'dayMode' && style.dark}`}>
                    {items.map((item:any)=>(
                        <li key={item.id} onClick={() => handleSelect(item.label)}>
                            <a href="#">{item.label}</a>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterDrop;