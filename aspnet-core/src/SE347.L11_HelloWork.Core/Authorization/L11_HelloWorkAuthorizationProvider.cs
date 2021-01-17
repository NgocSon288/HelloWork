using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group0;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group1;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group10;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group11;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group12;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group13;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group14;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group2;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group3;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group4;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group5;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group6;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group7;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group8;
using SE347.L11_HelloWork.Core.Authorization.Groups.Group9;

namespace SE347.L11_HelloWork.Authorization
{
    public class L11_HelloWorkAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);

            // config permissions for all groups
            context
                .ConfigGroup0()
                .ConfigGroup1()
                .ConfigGroup2()
                .ConfigGroup3()
                .ConfigGroup4()
                .ConfigGroup5()
                .ConfigGroup6()
                .ConfigGroup7()
                .ConfigGroup8()
                .ConfigGroup9()
                .ConfigGroup10()
                .ConfigGroup11()
                .ConfigGroup12()
                .ConfigGroup13()
                .ConfigGroup14();

            // JobType
            var jobType = context.CreatePermission(PermissionNames.Pages_JobType, L("JobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Create, L("CreateJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Update, L("UpdateJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Get, L("GetJobType"));
            jobType.CreateChildPermission(PermissionNames.Pages_JobType_Delete, L("DeleteJobType"));

            // RecruitmentPost
            var recruitmentPost = context.CreatePermission(PermissionNames.Pages_RecruitmentPost, L("RecruitmentPost"));
            recruitmentPost.CreateChildPermission(PermissionNames.Pages_RecruitmentPost_Create, L("CreateRecruitmentPost"));
            recruitmentPost.CreateChildPermission(PermissionNames.Pages_RecruitmentPost_Update, L("UpdateRecruitmentPost"));
            recruitmentPost.CreateChildPermission(PermissionNames.Pages_RecruitmentPost_Get, L("GetRecruitmentPost"));
            recruitmentPost.CreateChildPermission(PermissionNames.Pages_RecruitmentPost_Delete, L("DeleteRecruitmentPost"));

            // Comment
            var comment = context.CreatePermission(PermissionNames.Pages_Group8_Comment, L("Comment"));
            comment.CreateChildPermission(PermissionNames.Pages_Group8_Comment_Create_Or_Update, L("CreateOrUpdateComment")); 
            comment.CreateChildPermission(PermissionNames.Pages_Group8_Comment_Delete, L("DeleteComment"));

            #region Group 5
            //JobSeeker
            var jobseeker = context.CreatePermission(PermissionNames.Pages_Group5_JobSeeker, L("JobSeeker"));
            jobseeker.CreateChildPermission(PermissionNames.Pages_Group5_JobSeeker_Create, L("CreateJobSeeker"));
            jobseeker.CreateChildPermission(PermissionNames.Pages_Group5_JobSeeker_Update, L("UpdateJobSeeker"));
            jobseeker.CreateChildPermission(PermissionNames.Pages_Group5_JobSeeker_Delete, L("DeleteJobSeeker"));

            //Achievement
            var achievement = context.CreatePermission(PermissionNames.Pages_Group5_Achievement, L("Achievement"));
            achievement.CreateChildPermission(PermissionNames.Pages_Group5_Achievement_Create, L("CreateAchievement"));
            achievement.CreateChildPermission(PermissionNames.Pages_Group5_Achievement_Update, L("UpdateAchievement"));
            achievement.CreateChildPermission(PermissionNames.Pages_Group5_Achievement_Delete, L("DeleteAchievement"));

            //Education
            var education = context.CreatePermission(PermissionNames.Pages_Group5_Education, L("Education"));
            education.CreateChildPermission(PermissionNames.Pages_Group5_Education_Create, L("CreateEducation"));
            education.CreateChildPermission(PermissionNames.Pages_Group5_Education_Update, L("UpdateEducation"));
            education.CreateChildPermission(PermissionNames.Pages_Group5_Education_Delete, L("DeleteEducation"));

            //Experience
            var experience = context.CreatePermission(PermissionNames.Pages_Group5_Experience, L("Experience"));
            experience.CreateChildPermission(PermissionNames.Pages_Group5_Experience_Create, L("CreateEducation"));
            experience.CreateChildPermission(PermissionNames.Pages_Group5_Experience_Update, L("UpdateEducation"));
            experience.CreateChildPermission(PermissionNames.Pages_Group5_Experience_Delete, L("DeleteEducation"));

            //Orientation
            var orientation = context.CreatePermission(PermissionNames.Pages_Group5_Orientation, L("Orientation"));
            orientation.CreateChildPermission(PermissionNames.Pages_Group5_Orientation_Create, L("CreateOrientation"));
            orientation.CreateChildPermission(PermissionNames.Pages_Group5_Orientation_Update, L("UpdateOrientation"));
            orientation.CreateChildPermission(PermissionNames.Pages_Group5_Orientation_Delete, L("DeleteOrientation"));

            //Review
            var review = context.CreatePermission(PermissionNames.Pages_Group5_Review, L("Review"));
            review.CreateChildPermission(PermissionNames.Pages_Group5_Review_Create, L("CreateReview"));
            review.CreateChildPermission(PermissionNames.Pages_Group5_Review_Update, L("UpdateReview"));
            review.CreateChildPermission(PermissionNames.Pages_Group5_Review_Delete, L("DeleteReview"));

            //Skill
            var skill = context.CreatePermission(PermissionNames.Pages_Group5_Skill, L("Skill"));
            skill.CreateChildPermission(PermissionNames.Pages_Group5_Skill_Create, L("CreateSkill"));
            skill.CreateChildPermission(PermissionNames.Pages_Group5_Skill_Update, L("UpdateSkill"));
            skill.CreateChildPermission(PermissionNames.Pages_Group5_Skill_Delete, L("DeleteSkill"));

            #endregion

            //  Recruitment
            var recruitment = context.CreatePermission(PermissionNames.Pages_Group6_Recruitment, L("Recruitment"));
            recruitment.CreateChildPermission(PermissionNames.Pages_Group6_Recruitment_Create, L("CreateRecruitment"));
            recruitment.CreateChildPermission(PermissionNames.Pages_Group6_Recruitment_Update, L("UpdateRecruitment"));

            //  Expertise
            var expertise = context.CreatePermission(PermissionNames.Pages_Group6_Expertise, L("Expertise"));
            expertise.CreateChildPermission(PermissionNames.Pages_Group6_Expertise_Create, L("CreateExpertise"));
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, L11_HelloWorkConsts.LocalizationSourceName);
        }
    }
}
