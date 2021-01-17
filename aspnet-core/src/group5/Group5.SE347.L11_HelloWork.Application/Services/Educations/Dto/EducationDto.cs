using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Events.Bus.Entities;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Educations.Dto
{
    [AutoMapFrom(typeof(Education))]
    public class EducationDto : EntityDto<int>
    {
        public string Name { get; set; }
        public string School { get; set; }
        public DateTime StartYear { get; set; }
        public DateTime EndYear { get; set; }
        public string Majors { get; set; }
        public long? IDJobSeeker { get; set; }
    }
}
