import React from "react";
import { Switch, Route } from "react-router";
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/wrapper/Wrapper";
import SearchFilter from "./components/searchbar/SearchFilter";
import CardCountryList from "./components/cardCountryList/CardCountryList";
import CardCountryDetails from "./components/cardCountryDetails/CardCountryDetails";
import ContextApiProviderCountry from "./context/FetchData";
import "./scss/App.scss";

function App() {
  return (
    <>
      <ContextApiProviderCountry>
        <Navbar />
        <Wrapper>
          <div className="container">
            <SearchFilter />
          </div>
          <div className="container">
            <Switch>
              <Route exact path="/" component={CardCountryList} />
              <Route path={`/:name`} children={<CardCountryDetails />} />
            </Switch>
          </div>
        </Wrapper>
      </ContextApiProviderCountry>
    </>
  );
}

export default App;
