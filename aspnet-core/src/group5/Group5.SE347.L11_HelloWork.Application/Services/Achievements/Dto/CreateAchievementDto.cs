using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Achievements.Dto
{
    [AutoMapTo(typeof(Achievement))]
    public class CreateAchievementDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public string AchievementName { get; set; }
        [Required]
        public long IDJobSeeker { get; set; }
        [Required]
        public int Year { get; set; }
        [Required]
        public string Organization { get; set; }
        [Required]
        public string Note { get; set; }
    }
}
