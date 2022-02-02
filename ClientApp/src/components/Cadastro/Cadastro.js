import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import M from "materialize-css";
import axios from 'axios' 

const Cadastro = () => {
  const history = useHistory();
  const [dados, setDados] = useState({
    data:"01/20/2022",
    nome: null,
    telefone: null,
    email: null,
    idade: null,
  });

  useEffect(() => {
    M.AutoInit();
  }, []);
  const salvar = ()=>{
    var aluno ={
        data:dados.data,
        nome:dados.nome,
        telefone:dados.telefone,
        email:dados.email,
        idade:dados.idade
     }

    axios.post('https://localhost:3000/Aluno',aluno)
    .then(data => {
      if(data.data){
        history.push("/alunos")

      }
    })
    .catch(err => alert(err.message))
      


  }
  return (
    <div className="row">
      <div className="col s12 l6 push-l3">
        <p className="center">Cadastro de Aluno</p>
        <form action="" method="post">
          <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input
              placeholder="informe seu nome"
              type="text"
              id="nome"
              name="nome"
              className="txtNome"
              value={dados.nome}
              onChange={(e) => setDados({ ...dados, nome : e.target.value })}
              required
            />
            <label class="active" for="nome">
              Nome
            </label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">phone</i>
            <input
              placeholder="informe seu telefone"
              type="tel"
              id="telefone"
              name="telefone"
              class="txtTelefone"
              value={dados.telefone}
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
              required
            />
            <label class="active" for="telefone">
              Telefone
            </label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">email</i>
            <input
              placeholder="informe seu email"
              type="email"
              id="email"
              name="email"
              class="txtEmail"
              value={dados.email}
              onChange={(e) => setDados({ ...dados,  email: e.target.value })}
              required
            />
            <label class="active" for="email">
              Email
            </label>
          </div>

          <div class="input-field col s12">
            <i class="material-icons prefix">star</i>
            <input
              placeholder="informe sua idade"
              type="number"
              id="idade"
              name="idade"
              class="txtIdade"
              value={dados.idade}
              onChange={(e) => setDados({ ...dados,  idade: e.target.value })}
              required
            />
            <label class="active" for="idade">
              Idade
            </label>
          </div>
          <div className="col s12">
              <button type="button" className="btn right" onClick={() => salvar()}>
                  salvar<i className="material-icons right">send</i>
              </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Cadastro;
