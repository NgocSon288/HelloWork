using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto
{
    public class JobSeekerCommentDto : EntityDto<int>
    {
        public string Reason { get; set; }
        public string Description { get; set; }
        public float? StarNumber { get; set; }

        public int IDJobSeeker { get; set; }
        public string JobSeekerName { get; set; } 
        public DateTime? LastModificationTime { get; set; }
        public string Image { get; set; }
    }
}
