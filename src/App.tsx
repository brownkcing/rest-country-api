import React from 'react';
import './scss/App.scss'
import Navbar from './components/navbar/Navbar';
import SearchFilter from './components/searchbar/SearchFilter';
import CardCountryList from './components/cardCountryList/CardCountryList';
import CardCountryDetails from './components/cardCountryDetails/CardCountryDetails';
import { Switch, Route } from 'react-router';
import ContextApiProviderCountry from './context/FetchData';

function App() {
  return (
    <>
    <ContextApiProviderCountry>
      <Navbar />
      <div className='wrapper'>
        <div className='container'>
        <SearchFilter />
      </div>
      <div className='container'>
      <Switch>
          <Route exact path='/' component={CardCountryList} />
          <Route path={`/:name`} children={<CardCountryDetails />} />
      </Switch>
      </div>
      </div>
      </ContextApiProviderCountry>
    </>
  );
}

export default App;
