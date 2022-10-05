import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import Home from './components/Home';
import Listar from './components/Listar';
import Editar from './components/Editar';
import Adicionar from './components/Adicionar';
import Excluir from './components/Excluir';

import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/Listar" component={Listar}/>
          <Route path="/Editar" component={Editar}/>
          <Route path="/Adicionar" component={Adicionar}/>
          <Route path="/Excluir" component={Excluir}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
