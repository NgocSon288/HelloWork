using System;
using System.Collections.Generic;
using System.Text;
using Abp.Application.Services.Dto;

namespace Group12.SE347.L11_HelloWork.Application.Services.SearchCandidate.Dto
{
    public class CandidateFilterDto
    {
        public int? MinAge {get; set;}
        public int? MaxAge {get; set;}
        public string Operation {get; set;}
        public string Expertise {get; set;}
        public string Province {get; set;}
        public List<string> Skills {get; set;}
        public float? Rating {get; set;}
    }
}
