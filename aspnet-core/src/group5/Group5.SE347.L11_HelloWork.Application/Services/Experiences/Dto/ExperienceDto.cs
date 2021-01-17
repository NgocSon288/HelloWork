using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Experiences.Dto
{
    [AutoMapFrom(typeof(Experience))]
    public class ExperienceDto : EntityDto<int>
    {
        public string Company { get; set; }
        public int StartYear { get; set; }
        public int EndYear { get; set; }
        public string Role { get; set; }
        public string Description { get; set; }
        public long? IDJobSeeker { get; set; }
    }
}
