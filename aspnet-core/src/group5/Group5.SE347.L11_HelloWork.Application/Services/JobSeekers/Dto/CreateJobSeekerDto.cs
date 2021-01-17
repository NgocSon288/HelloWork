using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group5.SE347.L11_HelloWork.Application.Services.JobSeekers.Dto
{
    [AutoMapTo(typeof(JobSeeker))]
    public class CreateJobSeekerInputDto : PagedAndSortedResultRequestDto
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime Birthday { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string WorkLocation { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Expertise { get; set; }
        [Required]
        public string Facebook { get; set; }
        [Required]
        public string Github { get; set; }
        [Required]
        public string Twitter { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public string Field { get; set; }
        [Required]
        public string Sex { get; set; }
    }
}
