namespace SE347.L11_HelloWork.Authorization.Roles
{
    public static class StaticRoleNames
    {
        public static class Host
        {
            public const string Admin = "Admin";
            public const string Jobseeker = "Jobseeker";
            public const string Recruiter = "Recruiter";
            public const string ManageAdmin = "ManageAdmin";
            public const string ManageRegulation = "ManageRegulation";
            public const string ManageService = "ManageService";
            public const string ManageUser = "ManageUser";
            public const string ManageStatistical = "ManageStatistical";
            public const string ManageRecruitment = "ManageRecruitment";

        }

        public static class Tenants
        {
            public const string Admin = "Admin";
        }
    }
}
