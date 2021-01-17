using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using Abp.Events.Bus.Entities;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
namespace Group5.SE347.L11_HelloWork.Application.Services.Orientations.Dto
{
    [AutoMapFrom(typeof(Orientation))]
    public class OrientationDto : Entity<int>
    {
        public string OrientationName { get; set; }
        public long? IDJobSeeker { get; set; }
    }
}
