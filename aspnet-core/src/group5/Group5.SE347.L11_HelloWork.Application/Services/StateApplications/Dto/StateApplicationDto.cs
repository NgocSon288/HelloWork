using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.StateApplications.Dto
{
    [AutoMapFrom(typeof(StateApplication))]
    public class StateApplicationDto : EntityDto<int>
    {
        public int IDJobSeeker { get; set; }
        public int IDRecruitment { get; set; }
        public string State { get; set; }
    }
}
