import axios from "axios";
import "./Modal.css";
import React, { useEffect, useState } from "react";

function Modal(props) {
  const [dadosEdicao, setDadosEdicao] = useState({
    id: null,
    nome: null,
    telefone: null,
    email: null,
    idade: null,
  });
  useEffect(() => {
    setDadosEdicao(props.aluno);
  }, [props]);
  
  function editar() {
    axios.put("https://localhost:3000/Aluno/" + parseInt(dadosEdicao.id), {
      nome: dadosEdicao.nome,
      telefone: dadosEdicao.telefone,
      email: dadosEdicao.email,
      idade: dadosEdicao.idade,
    })
    .then((res) => {
      if (res.data) {
        window.location.reload();
      }
    })
    .catch((err) => {
      alert(err.message);
    });
  }
  
  return (
    <>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <p className="center">Formulário de Edição</p>
          <form id="formEditar">
            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <input
                placeholder="informe seu nome"
                type="text"
                id="nome"
                name="nome"
                className="txtNome"
                value={dadosEdicao.nome}
                onChange={(e) =>
                  setDadosEdicao({ ...dadosEdicao, nome: e.target.value })
                }
                required
              />
              <label className="active" htmlFor="nome">
                Nome
              </label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">phone</i>
              <input
                placeholder="informe seu telefone"
                type="tel"
                id="telefone"
                name="telefone"
                className="txtTelefone"
                value={dadosEdicao.telefone}
                onChange={(e) =>
                  setDadosEdicao({ ...dadosEdicao, telefone: e.target.value })
                }
                required
              />
              <label className="active" htmlFor="telefone">
                Telefone
              </label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">email</i>
              <input
                placeholder="informe seu email"
                type="email"
                id="email"
                name="email"
                className="txtEmail"
                value={dadosEdicao.email}
                onChange={(e) =>
                  setDadosEdicao({ ...dadosEdicao, email: e.target.value })
                }
                required
              />
              <label className="active" htmlFor="email">
                Email
              </label>
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">star</i>
              <input
                placeholder="informe sua idade"
                type="number"
                id="idade"
                name="idade"
                className="txtIdade"
                value={dadosEdicao.idade}
                min={0}
                onChange={(e) =>
                  setDadosEdicao({ ...dadosEdicao, idade: e.target.value })
                }
                required
              />
              <label className="active" htmlFor="idade">
                Idade
              </label>
            </div>
            <div className="col s12">
              <button
                type="button"
                className="btn blue"
                onClick={() => editar()}
              >
                salvar<i className="material-icons right">send</i>
              </button>
              <button type="reset" className="btn modal-close green">
                cancel<i className="material-icons right">cancel</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
