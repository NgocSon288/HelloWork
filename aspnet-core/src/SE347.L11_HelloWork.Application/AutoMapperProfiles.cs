using AutoMapper;
using Group6.SE347.L11_HelloWork.Application.Services.Recruitments.Dto;
using Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto;
using SE347.L11_HelloWork.Entities;

using System;
using System.Linq;


namespace SE347.L11_HelloWork
{
    public static class AutoMapperProfiles
    {
        public static void Config(IMapperConfigurationExpression config)
        {
            /**
             * Define custom automapper below 
             */
            // JobType
           

            //Recruitment
            config.CreateMap<Recruitment, CreateRecruitmentDto>()
                .ForMember(dto => dto.Expertises, rc =>
                    rc.MapFrom(rc => rc.ExpertiseRecruitments.Select(er => er.Expertise)));

            config.CreateMap<Recruitment, GetRecruitmentDto>()
                .ForMember(dto => dto.Expertises, rc =>
                    rc.MapFrom(rc => rc.ExpertiseRecruitments.Select(er => er.Expertise)));

            config.CreateMap<Recruitment, UpdateRecruitmentDto>()
                .ForMember(dto => dto.Expertises, rc =>
                    rc.MapFrom(rc => rc.ExpertiseRecruitments.Select(er => er.Expertise)));

            // Comment 
            config.CreateMap<Comment, RecruiterCommentDto>()
                .ForMember(src => src.RecruiterName, opt =>
                    opt.MapFrom(dest => dest.Recruiter.Name))
                .ForMember(src => src.RecruiterCompanyName, opt =>
                    opt.MapFrom(dest => dest.Recruiter.Company.Name))
                .ForMember(src => src.Image, opt =>
                    opt.MapFrom(dest => dest.Recruiter.Image));
            config.CreateMap<Comment, JobSeekerCommentDto>()
                .ForMember(src => src.JobSeekerName, opt =>
                    opt.MapFrom(dest => dest.JobSeeker.Name))
                .ForMember(src => src.Image, opt =>
                    opt.MapFrom(dest => dest.JobSeeker.Image));
            config.CreateMap<CreateOrUpdateCommentDto, Comment>()
                .ForMember(src => src.LastModificationTime, opt =>
                    opt.MapFrom(dest => DateTime.Now));
        }
    }
}
