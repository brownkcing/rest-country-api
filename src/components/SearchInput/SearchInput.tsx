import * as React from 'react';
import * as style from './searchInput.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

interface SearchInputProps {

    onChange: (e:any) => void;
}

//TODO need to factor this
export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const {onChange} = props
  return (
      <div className={style.searchbar} onChange={onChange}>
          <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="text" placeholder="Search for a country"/>
      </div>
  );
};