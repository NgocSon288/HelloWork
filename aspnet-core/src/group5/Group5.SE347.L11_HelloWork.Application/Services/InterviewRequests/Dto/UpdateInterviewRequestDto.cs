using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests.Dto
{
    [AutoMapTo(typeof(InterviewRequest))]
    public class UpdateInterviewRequestDto
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int Id { get; set; }
        [Required]
        public int IDInterview { get; set; }
        [Required]
        public DateTime InterviewTime { get; set; }
    }
}
