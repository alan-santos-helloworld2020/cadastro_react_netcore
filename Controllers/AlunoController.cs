using Microsoft.AspNetCore.Mvc;
using react_core.Context;
using react_core.Models;

namespace react_core
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController
    {
        private readonly AppDBContext DBAction;
        public AlunoController(AppDBContext dbcontext)
        {
            DBAction = dbcontext;
        }

        [HttpGet]
        public List<Aluno> Index()
        {
            var alunos = DBAction.aluno.ToList();
            return alunos;
        }

        [HttpGet("{id}")]
        public Aluno Pesquisar(int id)
        {
            var aluno = DBAction.aluno.Find(Convert.ToInt32(id));
            return aluno;
        }
        [HttpPost]
        public Aluno Salvar(Aluno aluno){
            DBAction.aluno.Add(aluno);
            int i = DBAction.SaveChanges();
            return aluno;

        }
        [HttpPut("{id}")]
        public Aluno Alterar(int id,Aluno aluno){
            var al = DBAction.aluno.Find(Convert.ToInt32(id));
            al.Nome = aluno.Nome;
            al.Telefone = aluno.Telefone;
            al.Email = aluno.Email;
            al.Idade = aluno.Idade;
            int i = DBAction.SaveChanges();
            return al;

        }
        [HttpDelete("{id}")]
        public Aluno Deletar(int id)
        {
            var aluno = DBAction.aluno.Find(Convert.ToInt32(id));
            DBAction.aluno.Remove(aluno);
            DBAction.SaveChanges();
            return aluno;
        }

    }

}