using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto
{
    [AutoMapTo(typeof(StateApplication))]
    public class CreateStateApplicationDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public int IDJobSeeker { get; set; }
        [Required]
        public int IDRecruitment { get; set; }
        [Required]
        public string State { get; set; }
    }
}
