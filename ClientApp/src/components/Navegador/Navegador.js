import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navegador = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div>
      <nav className="">
        <div className="nav-wrapper">
          <Link to="#" className="brand-logo">
            Logo
          </Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                Home<i className="material-icons left">home</i>
              </Link>
            </li>
            <li>
              <Link to="/cadastro">
                Cadastro<i className="material-icons left">edit</i>
              </Link>
            </li>
            <li>
              <Link to="/alunos">
                Alunos<i className="material-icons left">group</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">
            Home<i className="material-icons left">home</i>
          </Link>
        </li>
        <li>
          <Link to="/cadastro">
            Cadastro<i className="material-icons left">edit</i>
          </Link>
        </li>
        <li>
          <Link to="/alunos">
            Alunos<i className="material-icons left">group</i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navegador;
