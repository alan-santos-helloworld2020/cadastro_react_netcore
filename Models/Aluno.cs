using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace react_core.Models
{
    [Table("Alunos")]
    public class Aluno
    {

        public int Id {get; set;}
        [Required]
        public string? Nome {get; set;}
        [Required]
        public string? Telefone {get; set;}
        [Required]
        [EmailAddress]
        public string? Email {get; set;}
        [Required]
        public int? Idade {get; set;}


    }
}