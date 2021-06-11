import React from 'react';
import './scss/App.scss'
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import CardCountryList from './components/cardCountryList/CardCountryList';
import CardCountryDetails from './components/cardCountryDetails/CardCountryDetails';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <SearchBar />
      </div>
      <Switch>
        <div className='container'>
          <Route exact path='/' component={CardCountryList} />
          <Route path="/:name" children={<CardCountryDetails />} />
        </div>
      </Switch>
    </>
  );
}

export default App;
