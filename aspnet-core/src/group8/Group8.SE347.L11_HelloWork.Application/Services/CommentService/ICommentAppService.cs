using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group8.SE347.L11_HelloWork.Application.Services.CommentService
{
    public interface ICommentAppService : IApplicationService
    {

        Task<dynamic> GetCommentAsync(int IDRecruiter, int IDJobSeeker, bool isRecruiterWrite);   

        Task<dynamic> GetCommentsAsync(bool isRecruiterWrite, int ID);  
         
        Task<dynamic> CreateOrUpdateCommentAsync(CreateOrUpdateCommentDto input);  

        Task DeleteCommentAsync(DeleteCommentDto input);

        Task<dynamic> GetAllComment();
    }
}
