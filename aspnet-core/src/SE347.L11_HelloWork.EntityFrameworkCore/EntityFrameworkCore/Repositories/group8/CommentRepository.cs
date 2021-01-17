using Abp.EntityFrameworkCore;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using SE347.L11_HelloWork.Entities;
using SE347.L11_HelloWork.IRepositories.group8;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace SE347.L11_HelloWork.EntityFrameworkCore.Repositories.group8
{
    public class CommentRepository : L11_HelloWorkRepositoryBase<Comment>, ICommentRepository
    {
        public CommentRepository(IDbContextProvider<L11_HelloWorkDbContext> dbContextProvider) : base(dbContextProvider) { }

        public async Task<Comment> GetCommentByCommentProperty(Comment comment)
        {
            return GetAll()
                .Include(cmt => cmt.Recruiter)
                .Include(cmt => cmt.Recruiter.Company)
                .FirstOrDefault(cmt => cmt.IsRecruiterWrite == comment.IsRecruiterWrite && cmt.IDJobSeeker == comment.IDJobSeeker && cmt.IDRecruiter == comment.IDRecruiter);

        }

        public async Task<IEnumerable<Comment>> GetComments(bool isRecruiterWrite, int ID)
        {

            var query = GetAll()
                .Where(cmt => cmt.IsRecruiterWrite == isRecruiterWrite && cmt.StarNumber != null && cmt.StarNumber > 0); 

            if (isRecruiterWrite)
            {
                return query
                    .Where(cmt => cmt.IDJobSeeker == ID)
                    .Include(cmt => cmt.Recruiter)
                    .Include(cmt => cmt.Recruiter.Company);
            }
            else
            {
                return query
                    .Where(cmt => cmt.IDRecruiter == ID)
                    .Include(cmt => cmt.JobSeeker);
            }
        }
    }
}
