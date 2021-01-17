using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto
{
    [AutoMapTo(typeof(Comment))]
    public class CreateOrUpdateCommentDto
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int IDRecruiter { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int IDJobSeeker { get; set; }

        [Required]
        public float? StarNumber { get; set; } 

        public string Reason { get; set; }

        [Required]
        public string Description { get; set; } 

        [Required]
        public bool IsRecruiterWrite{ get; set; }

    }
}
