using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;

namespace Group9.SE347.L11_HelloWork.Application.Services.Dto
{
    [AutoMap(typeof(Recruitment))]
    public class RecruitmentByUser : PagedAndSortedResultRequestDto
    {
        public long CreatorUserId { get; set; }
    }
}
