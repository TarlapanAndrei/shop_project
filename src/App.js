import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const HatsPage = ()=>(
  <div>
    hats
  </div>
)

const App = ()=>(
  <div>
   <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/hats' component={HatsPage} />
   </Switch>
  </div>
)
export default App;
