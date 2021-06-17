import React from 'react';
import './scss/App.scss'
import CardCountryDetails from './components/cardCountryDetails/CardCountryDetails';
import { Switch, Route } from 'react-router';
import {LandingPage} from "./container/LandingPage/LandingPage";

function App() {
  return (
    <>
        <div className='container'>
              <Switch>
                  <Route exact path='/' component={LandingPage} />
                  <Route path={`/:name`} children={<CardCountryDetails />} />
              </Switch>
        </div>
    </>
  );
}

export default App;
