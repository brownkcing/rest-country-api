import * as React from "react";
import * as style from "./filter.module.scss";
import { useState } from "react";
import {countryFunctionStore} from "../../container/store/countryFunctionStore";

interface Option {
  label: string;
  id: number;
}

interface FilterProps {
  optionData: Option[];
}

//TODO need to factor this
export const Filter: React.FC<FilterProps> = (props) => {
  const {optionData } = props;

  const [isOpen, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Select Regions")

  const handleSelect = (value: string) => {
    setPlaceholder(value);
    countryFunctionStore.setFilterByRegion(value);
  };

  return (
    <div className={style.dropdown}>
      <div className={style.dropdownHeader} onClick={() => setOpen(!isOpen)}>
        {placeholder}
        <span className={`${style.arrow} ${isOpen && style.open}`} />
        <div className={`${style.dropdownBody} ${isOpen && style.open}`}>
          {optionData.map((item: Option) => (
            <li key={item.id} onClick={() => handleSelect(item.label)}>
              {item.label}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
