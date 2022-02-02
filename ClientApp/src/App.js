import React, { Component } from "react";
import { Route,Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import M from "materialize-css";
import Navegador from './components/Navegador/Navegador.js'
import "./custom.css";
import Alunos from "./components/Alunos/Alunos.js";
import Cadastro from "./components/Cadastro/Cadastro.js";

export default class App extends Component {
  static displayName = App.name;
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <>
        <Navegador />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/alunos" component={Alunos} />
        </Switch>
      </>
    );
  }
}
