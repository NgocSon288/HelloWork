using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
namespace Group5.SE347.L11_HelloWork.Application.Services.Interviews.Dto
{
    [AutoMapTo(typeof(Interview))]
    public class CreateInterviewDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public int IDJobSeeker { get; set; }
        [Required]
        public int IDRecruitment { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public DateTime InterviewTime { get; set; }
        [Required]
        public string Description { get; set; }
    }
}
