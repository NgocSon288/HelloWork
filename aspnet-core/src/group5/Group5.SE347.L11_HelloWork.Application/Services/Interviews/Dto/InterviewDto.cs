using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.Interviews.Dto
{
    [AutoMapFrom(typeof(Interview))]
    public class InterviewDto : EntityDto<int>
    {
        public int IDJobSeeker { get; set; }
        public int IDRecruitment { get; set; }
        public string Location { get; set; }
        public DateTime InterviewTime { get; set; }
        public string Description { get; set; }
    }
}
