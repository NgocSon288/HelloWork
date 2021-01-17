using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Educations.Dto
{
    [AutoMapTo(typeof(Education))]
    public class CreateEducationDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string School { get; set; }
        [Required]
        public DateTime StartYear { get; set; }
        [Required]
        public DateTime EndYear { get; set; }
        [Required]
        public string Majors { get; set; }
        [Required]
        public long? IDJobSeeker { get; set; }
    }
}
