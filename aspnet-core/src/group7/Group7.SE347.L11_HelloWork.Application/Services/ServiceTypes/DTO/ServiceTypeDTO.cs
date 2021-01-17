using Abp.AutoMapper;
using SE347.L11_HelloWork.Entities;

namespace Group7.SE347.L11_HelloWork.Application.Services.ServiceTypes.DTO
{
    [AutoMapFrom(typeof(ServiceType))]
    public class ServiceTypeDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Unit { get; set; }
    }
}
