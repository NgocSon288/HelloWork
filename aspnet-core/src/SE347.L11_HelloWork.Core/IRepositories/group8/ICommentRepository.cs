using Abp.Domain.Repositories;
using SE347.L11_HelloWork.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SE347.L11_HelloWork.IRepositories.group8
{
    public interface ICommentRepository : IRepository<Comment>
    {
        Task<IEnumerable<Comment>> GetComments(bool isRecruiterWrite, int ID);

        Task<Comment> GetCommentByCommentProperty(Comment comment);
    }
}
