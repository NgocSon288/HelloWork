﻿using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Group12.SE347.L11_HelloWork.Application.Services.Expertises
{
    public interface IExpertisesAppService: IApplicationService
    {
        Task<List<String>> GetAllAsync();
    }
}
