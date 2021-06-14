import React from 'react';
import './scss/App.scss'
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import CardCountryList from './components/cardCountryList/CardCountryList';
import CardCountryDetails from './components/cardCountryDetails/CardCountryDetails';
import { Switch, Route } from 'react-router';
import ContextApiProviderCountry from './context/FetchData';

function App() {
  return (
    <>
    <ContextApiProviderCountry>
      <Navbar />
      <div className='container'>
        <SearchBar />
      </div>
      <div className='container'>
      <Switch>
          <Route exact path='/' component={CardCountryList} />
          <Route path={`/:name`} children={<CardCountryDetails />} />
      </Switch>
      </div>
      </ContextApiProviderCountry>
    </>
  );
}

export default App;
