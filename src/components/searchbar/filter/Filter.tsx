import React, {useState} from 'react';
import * as style from './filter.module.scss';


const tableData = [{id:0, label: 'Africa'}, {id:1, label: 'America'}, {id:2, label: 'Asia'}, {id:3, label: 'Europe'}, {id:4, label: 'Oceania'} ]

const FilterDrop = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(tableData);
    const [placeholder, setPlaceholder] = useState("Select Regions");

    const handleSelect = (value:any) => {
        setPlaceholder(value)
        setOpen(false);
    }
    
    const toggleDropdown = () => {
        setOpen(!isOpen);
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