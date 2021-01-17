using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group5.SE347.L11_HelloWork.Application.Services.Reviews.Dto
{
    [AutoMapFrom(typeof(Review))]
    public class ReviewDto : EntityDto<int>
    {
        public float RatingStar { get; set; }
        public long NumberOfReview { get; set; }
        public long? IDJobSeeker { get; set; }
    }
}
