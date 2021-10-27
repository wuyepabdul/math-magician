import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Quote from './pages/Quote';

const App = () => (
  <div className="container">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator">
        <CalculatorPage />
      </Route>
      <Route path="/quote">
        <Quote />
      </Route>

    </Switch>

  </div>
);

export default App;
