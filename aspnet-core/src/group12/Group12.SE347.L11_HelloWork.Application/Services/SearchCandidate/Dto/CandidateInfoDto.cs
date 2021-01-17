using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate.Dto
{
    public class CandidateInfoDto: EntityDto<int>
    {
        public string Name { get; set; }
        public int? Age { get; set; }
        public string Operation {get; set;}
        public string Expertise {get; set;}
        public string Address { get; set; }
        public List<string> Skills {get; set;}
        public float? Rating {get; set;}
    }
}
