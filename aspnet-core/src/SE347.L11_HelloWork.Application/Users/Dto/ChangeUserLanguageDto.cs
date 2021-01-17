using System.ComponentModel.DataAnnotations;

namespace SE347.L11_HelloWork.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}