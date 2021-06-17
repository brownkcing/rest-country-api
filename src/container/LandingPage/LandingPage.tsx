import * as React from "react";
import * as style from "./landingPage.module.scss";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Toggle } from "../../components/Toggle/Toggle";
import { RowTable } from "../../components/RowTable/RowTable";
import { RootObject } from "Countries";
import { countryFunctionStore } from "../store/countryFunctionStore";
import { observer } from "mobx-react";
import { Filter } from "../../components/Filter/Filter";
import {SearchInput} from "../../components/SearchInput/SearchInput";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = observer((props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    countryFunctionStore.callCountryApi();
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={`d-flex justify-content-between align-items-center`}>
          <SearchInput onChange={(e) => countryFunctionStore.setSearchData(e.target.value)}/>
        <div className={`d-flex align-items-center`}>
          <Filter
            optionData={countryFunctionStore.filterData}
          />
          <div className={`d-flex justify-content-end align-items-center my-2`}>
            <div className={`pr-3 ${style.fontSize}`}>Table</div>
            <Toggle checked={toggle} onChange={() => setToggle(!toggle)} />
            <div className={`pl-3  ${style.fontSize}`}>Card</div>
          </div>
        </div>
      </div>

      <div>
        {toggle ? (
          <div className={`w-100`}>
            <RowTable
              header={true}
              country={"Country"}
              capital={"Capital"}
              population={"Population"}
              region={"Region"}
              currency={"Currency"}
            />
            {countryFunctionStore.countryFilterData.map((item: RootObject) => (
              <RowTable
                country={item.name}
                image={item.flag}
                capital={item.capital}
                population={item.population}
                region={item.region}
                currency={item.currencies}
              />
            ))}
          </div>
        ) : (
          <div className={style.cardContainer}>
            {countryFunctionStore.countryFilterData.map((item: RootObject) => (
              <Card
                country={item.name}
                image={item.flag}
                capital={item.capital}
                population={item.population}
                region={item.region}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
