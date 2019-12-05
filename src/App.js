import React from 'react';
import logo from './logo.svg';
import Header from './shared/header';
import Landing from './components/landing';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import todoApp from './components/todoApp/todoApp'; 


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route exact path="/todoApp" component={todoApp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;