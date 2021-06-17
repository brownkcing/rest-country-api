import { makeAutoObservable } from "mobx";
import { RootObject } from "Countries";

class CountryFunctionStore {
  constructor() {
    makeAutoObservable(this);
  }

  countryData: any = [];
  countryFilterData: any = [];

  filterData = [
    { id: 0, label: "All" },
    { id: 1, label: "Africa" },
    { id: 2, label: "Americas" },
    { id: 3, label: "Asia" },
    { id: 4, label: "Europe" },
    { id: 5, label: "Oceania" },
  ];

  setCountryData = (data: RootObject) => {
    this.countryData = data;
  };

  setCountryFilterData = (data: RootObject) => {
    this.countryFilterData = data;
  };

  setFilterByRegion = (region: string) => {
    const filteringRegion = this.countryData.filter(
      (item: RootObject) => item.region === region
    );
    region === "All"
      ? this.setCountryFilterData(this.countryData)
      : this.setCountryFilterData(filteringRegion);
  };

  setSearchData = (search: string) => {
    const searchForCountry = this.countryData.filter((item: RootObject) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    this.setCountryFilterData(searchForCountry);
  };

  callCountryApi = () => {
    fetch("https://restcountries.eu/rest/v2")
      .then((res) => res.json())
      .then((data) => {
        this.setCountryData(data);
        this.setCountryFilterData(data);
      });
  };
}

export const countryFunctionStore = new CountryFunctionStore();
