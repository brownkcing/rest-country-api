import React from 'react';
import './scss/App.scss'
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchbar/SearchBar';
import Content from './components/content/Content';
import DataContent from './components/datacontent/DataContent';
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
          <Route exact path='/' component={Content} />
          <Route path="/:name" children={<DataContent />} />
        </div>
      </Switch>
    </>
  );
}

export default App;
