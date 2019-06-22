import React from 'react';
import './App.css';
import Index from './componentes/IndexPage/LoginAndRegister'
import World from './componentes/World/containerWorld'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact={true} component={Index} />
        <Route path="/World*" component={World} />
        <Route component={() => (<div>404 Not found </div>)} />
      </Switch>
    </ BrowserRouter>
  );
}

export default App;
