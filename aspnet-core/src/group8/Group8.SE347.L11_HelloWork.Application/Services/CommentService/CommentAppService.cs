using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Castle.DynamicProxy.Contributors;
using Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork;
using SE347.L11_HelloWork.Authorization;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork.IRepositories.group8;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Group8.SE347.L11_HelloWork.Application.Services.CommentService
{
    public class CommentAppService : Group8AppServiceBase, ICommentAppService
    {
        private readonly ICommentRepository _commentRepo; 

        public CommentAppService(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo; 
        }


        [AbpAllowAnonymous]
        public async Task<dynamic> GetCommentAsync(int IDRecruiter, int IDJobSeeker, bool isRecruiterWrite)
        {
            var comment = new Comment() { IDJobSeeker = IDJobSeeker, IDRecruiter = IDRecruiter, IsRecruiterWrite = isRecruiterWrite };
            comment = await _commentRepo.GetCommentByCommentProperty(comment);
            if (comment == null)
                return null;
            dynamic result;
            if (comment.IsRecruiterWrite)
            {
                result = ObjectMapper.Map<RecruiterCommentDto>(comment);
            }
            else
            {
                result = ObjectMapper.Map<JobSeekerCommentDto>(comment);
            }
            return result;
        }

        [AbpAllowAnonymous]
        public async Task<dynamic> GetCommentsAsync(bool isRecruiterWrite, int ID)
        {
            var comments = await _commentRepo.GetComments(isRecruiterWrite, ID);
              
            dynamic CommentList;

            if (isRecruiterWrite)
            {
                CommentList = new ListResultDto<RecruiterCommentDto>(
                    comments.Select(cmt => ObjectMapper.Map<RecruiterCommentDto>(cmt))
                            .OrderByDescending(cmt => cmt.LastModificationTime)
                            .ToList());
            }
            else
            {
                CommentList = new ListResultDto<JobSeekerCommentDto>(
                    comments.Select(cmt => ObjectMapper.Map<JobSeekerCommentDto>(cmt))
                            .OrderByDescending(cmt => cmt.LastModificationTime)
                            .ToList());
            }
            return CommentList;
        }

        //[AbpAuthorize(PermissionNames.Pages_Group8_Comment_Create_Or_Update)]
        [AbpAllowAnonymous]
        public async Task<dynamic> CreateOrUpdateCommentAsync(CreateOrUpdateCommentDto input)
        {

            try
            {
                var comments = await _commentRepo.GetAllListAsync();

                var comment = comments.FirstOrDefault(cmt => cmt.IsRecruiterWrite == input.IsRecruiterWrite && cmt.IDJobSeeker == input.IDJobSeeker && cmt.IDRecruiter == input.IDRecruiter);

                if (comment == null)
                {
                    await _commentRepo.InsertAsync(ObjectMapper.Map<Comment>(input));
                }
                else
                {
                    ObjectMapper.Map(input, comment);
                    await _commentRepo.UpdateAsync(comment);
                } 
                
            }
            catch (Exception)
            {
                
            }
            finally{
            }
            return await  GetCommentsAsync(input.IsRecruiterWrite, input.IsRecruiterWrite?input.IDJobSeeker:input.IDRecruiter);

        }
           
        //[AbpAuthorize(PermissionNames.Pages_Group8_Comment_Delete)]
        [AbpAllowAnonymous]
        public async Task DeleteCommentAsync(DeleteCommentDto input)
        {   
            // this.AbpSession.UserId;
            var commentUpdateOrDeleteDto = new CreateOrUpdateCommentDto()
            {
                IDJobSeeker = input.IDJobSeeker,
                IDRecruiter = input.IDRecruiter,
                IsRecruiterWrite = input.isRecruiterWrite,
                Reason = "",
                Description = "",
                StarNumber = null
            };

            await CreateOrUpdateCommentAsync(commentUpdateOrDeleteDto);
        }
 


        public async Task<dynamic> GetAllComment()
        {
            var comments = await _commentRepo.GetAllListAsync();
            var CommentList = new ListResultDto<JobSeekerCommentDto>(
                    comments.Where(m=>m.IsRecruiterWrite == false)
                            .Select(cmt => ObjectMapper.Map<JobSeekerCommentDto>(cmt))
                            .OrderByDescending(cmt => cmt.LastModificationTime)
                            .ToList());
   

            return CommentList;
        }
    }
}
