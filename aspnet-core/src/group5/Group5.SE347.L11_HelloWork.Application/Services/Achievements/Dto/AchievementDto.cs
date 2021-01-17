using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Events.Bus.Entities;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Achievements.Dto
{
    [AutoMapFrom(typeof(Achievement))]
    public class AchievementDto : EntityDto<int>
    {
        public string AchievementName { get; set; }
        public long? IDJobSeeker { get; set; }
        public int Year { get; set; }
        public string Organization { get; set; }
        public string Note { get; set; }
    }
}
