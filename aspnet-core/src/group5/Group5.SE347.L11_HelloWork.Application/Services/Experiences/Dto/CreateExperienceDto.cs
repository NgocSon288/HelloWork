using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Experiences.Dto
{
    [AutoMapTo(typeof(Experience))]
    public class CreateExperienceDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public string Company { get; set; }
        [Required]
        public int StartYear { get; set; }
        [Required]
        public int EndYear { get; set; }
        [Required]
        public string Role { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public long? IDJobSeeker { get; set; }
    }
}
