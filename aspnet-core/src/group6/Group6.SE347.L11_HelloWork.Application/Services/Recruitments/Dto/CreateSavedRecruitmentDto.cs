using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Group6.SE347.L11_HelloWork.Application.Services.Expertises.Dto;

namespace Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto
{
    [AutoMapTo(typeof(SavedRecruitment))]
    public class CreateSavedRecruitmentDto
    {
        [Required]
        public long RecruitmentId { get; set; }

        [Required]
        public long CreatorUserId { get; set; }
    }
}
