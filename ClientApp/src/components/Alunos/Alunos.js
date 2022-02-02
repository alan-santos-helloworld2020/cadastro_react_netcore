import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Modal from "../Modal/Modal";
import M from 'materialize-css';

const Alunos = () => {
  const history = useHistory();
  var [dadosEditar,setDadosEditar] = useState({})
  const [dados, setDados] = useState([
    {
      id: null,
      nome: null,
      telefone: null,
      email: null,
      idade: null,
    },
  ]);
  useEffect(() => {
    M.AutoInit();
    axios("https://localhost:3000/Aluno").then((json) => {
      setDados(json.data);
    });
  }, []);

  function deletar(id) {
    if (window.confirm("Deseja realmente remover")) {
      axios
        .delete(`https://localhost:3000/Aluno/${parseInt(id)}`)
        .then((data) => alert(JSON.stringify(data.data)))
        .catch((err) => alert(err.message));
      history.push("/cadastro");
    } else {
      return;
    }
  }
  function editar(ds) {
    setDadosEditar({
      id: ds.id,
      nome: ds.nome,
      telefone: ds.telefone,
      email: ds.email,
      idade: ds.idade,
    })

  }
  return (
    <div className="row">
      <div className="col s12 l8 push-l2">
        <p className="center">Tabela de Alunos</p>
        <table className="responsive-table centered">
          <thead>
            <tr>
              <th>id</th>
              <th>nome</th>
              <th>telefone</th>
              <th>email</th>
              <th>idade</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((ds, index) => (
              <tr key={index}>
                <td>{ds.id}</td>
                <td>{ds.nome}</td>
                <td>{ds.telefone}</td>
                <td>{ds.email}</td>
                <td>{ds.idade}</td>
                <td>
                  <a
                    className="waves-effect waves-light modal-trigger btn-floating btn-small blue"
                    href="#modal1"
                    onClick={() => editar(ds)}
                  >
                    <i className="material-icons">edit</i>
                  </a>
                </td>
                <td>
                  <button
                    className="waves-effect waves-light btn-floating btn-small red"
                    onClick={() => deletar(ds.id)}
                  >
                    <i className="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal aluno={dadosEditar}/>
      </div>
    </div>
  );
};

export default Alunos;
