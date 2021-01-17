using SE347.L11_HelloWork.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using Abp.AutoMapper;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;

namespace Group4.SE347.L11_HelloWork.Application.Services.EducationDetails.Dto
{
    [AutoMapFrom(typeof(EducationDetail))]
    class EducationDetailDto:EntityDto<int>
    {
        public string SchoolName { get; set; }
        public string Period { get; set; }
        public string Specialize { get; set; }

        //[ForeignKey("CVEmployeeInformation")]
        //public int CVEmployeeInformationID { get; set; }
        public CVEmployeeInformation CVEmployeeInformation { get; set; }
    }
}
