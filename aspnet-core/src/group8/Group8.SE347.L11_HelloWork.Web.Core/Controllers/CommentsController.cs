using Abp.Application.Services.Dto;
using Abp.AspNetCore.Mvc.Controllers;
using Group8.SE347.L11_HelloWork.Application.Services.CommentService;
using Group8.SE347.L11_HelloWork.Application.Services.CommentService.Dto; 
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Group8.SE347.L11_HelloWork.Web.Core.Controllers
{
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class CommentsController : AbpController
    {
        private readonly ICommentAppService _commentServiceAppService;

        public CommentsController(ICommentAppService commentServiceAppService)
        {
            _commentServiceAppService = commentServiceAppService;
        }


        [Route("api/Comments/Gets/{isRecruiterWrite}/{ID}")]
        [HttpGet]
        public async Task<dynamic> Gets(bool isRecruiterWrite, int ID)
        {
            return await _commentServiceAppService.GetCommentsAsync(isRecruiterWrite, ID);
        }
        
        [Route("api/Comments/Get/{IDRecruiter}/{IDJobSeeker}/{isRecruiterWrite}")]
        [HttpGet]
        public async Task<dynamic> Get(int IDRecruiter, int IDJobSeeker, bool isRecruiterWrite)
        {
            return await _commentServiceAppService.GetCommentAsync(IDRecruiter, IDJobSeeker, isRecruiterWrite);
            //return a;
        }
        [Route("api/Comments/CreateOrUpdate")]
        [HttpPost]
        public async Task<dynamic> CreateOrUpdate(CreateOrUpdateCommentDto input)
        {
            // Tạo comment trả về comment
            //var newComment = await _commentServiceAppService.CreateCommentAsync(input); 
            //return CreatedAtAction("Gets", new { id = newComment.Id }, newComment)


            // Tạo comment trả về một danh sách các comment
            return await _commentServiceAppService.CreateOrUpdateCommentAsync(input);
            //return CreatedAtAction("Gets", new { id = newComment.Id }, (await _commentServiceAppService.GetCommentsAsync(input.IsRecruiterWrite, newComment)));  
        }

        [Route("api/Comments/Delete/{IDRecruiter}/{IDJobSeeker}/{isRecruiterWrite}")]
        [HttpDelete]
        public async Task<IActionResult> Delete(int IDRecruiter, int IDJobSeeker, bool isRecruiterWrite)
        {
            DeleteCommentDto input = new DeleteCommentDto()
            {
                IDRecruiter = IDRecruiter,
                IDJobSeeker = IDJobSeeker,
                isRecruiterWrite = isRecruiterWrite
            };
            await _commentServiceAppService.DeleteCommentAsync(input);
            return NoContent();
        } 
    }
}
