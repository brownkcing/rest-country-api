import React, {useState, useContext} from 'react';
import * as style from './filter.module.scss';
import { ContextApiCountry } from '../../../context/FetchData';


const tableData = [{id:0, label: 'Africa'}, {id:1, label: 'America'}, {id:2, label: 'Asia'}, {id:3, label: 'Europe'}, {id:4, label: 'Oceania'} ]

const FilterDrop = ({passFilterProps}:any) => {
    const {filterRegionData}:any = useContext(ContextApiCountry)
    const [initialFilterRegionData, setInitialFilterRegionData] = filterRegionData;
    const [filterData, setFilterData] = useState(passFilterProps)
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(tableData);
    const [placeholder, setPlaceholder] = useState("Select Regions");

    const handleSelect = (value:any) => {
        setPlaceholder(value);
        setInitialFilterRegionData(value);
        setOpen(false);
    }
    
    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    passFilterProps = (value:any) => {
        passFilterProps(
            setFilterData(value)
        );
    }

    return(
        <div className={style.dropdown}>
            <div className={style.dropdownHeader} onClick={toggleDropdown}>{placeholder}
                <div className={`${style.dropdownBody} ${isOpen && style.open}`}>
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