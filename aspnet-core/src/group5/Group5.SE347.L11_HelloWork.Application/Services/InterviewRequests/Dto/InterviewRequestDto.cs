using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Events.Bus.Entities;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.InterviewRequests.Dto
{
    [AutoMapFrom(typeof(InterviewRequest))]
    public class InterviewRequestDto : EntityDto<int>
    {
        public int IDInterview { get; set; }
        public DateTime InterviewTime { get; set; }
    }
}
