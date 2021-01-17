using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto
{
    public class RecruiterCommentDto : EntityDto<int>
    {
        public string Reason { get; set; }
        public string Description { get; set; }
        public float? StarNumber { get; set; }

        public int IDRecruiter { get; set; }
        public string RecruiterName { get; set; }
        public string RecruiterCompanyName { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public string Image { get; set; }
    }
}
