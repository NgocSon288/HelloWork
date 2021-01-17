using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using SE347.L11_HelloWork.Authorization.Roles;
using SE347.L11_HelloWork.Authorization.Users;
using SE347.L11_HelloWork.MultiTenancy;
using SE347.L11_HelloWork.Entities;

namespace SE347.L11_HelloWork.EntityFrameworkCore
{

    public class L11_HelloWorkDbContext : AbpZeroDbContext<Tenant, Role, User, L11_HelloWorkDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        // public DbSet<JobType> JobTypes { get; set; }
        public DbSet<CVEmployeeInformation> CVEmployeeInformations { get; set; }
        public DbSet<ExperienceDetail> ExperienceDetails { get; set; }
        public DbSet<AchievementDetail> AchievementDetails { get; set; }
        public DbSet<EducationDetail> EducationDetails { get; set; }
        public DbSet<SkillDetail> SkillDetails { get; set; }
       
        public DbSet<AccountClient> AccountClients { get; set; }
    
        
        
     

        public DbSet<Recruiter> Recruiters { get; set; }
        public DbSet<Company> Companies { get; set; }

       
        
        public DbSet<JobSeeker> JobSeekers { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Orientation> Orientations { get; set; }
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<Recruitment> Recruitments { get; set; }
        public DbSet<Expertise> Expertises { get; set; }
        public DbSet<ExpertiseRecruitment> ExpertiseRecruitments { get; set; }
        public DbSet<SavedRecruitment> SavedRecruitments { get; set; }
        public DbSet<Interview> Interviews { get; set; }
        public DbSet<StateApplication> StateApplications { get; set; }
        public DbSet<StateApplicant> StateApplicants { get; set; }
        public DbSet<InterviewRequest> InterviewRequests { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<RegisterService> RegisterServices { get; set; }
        public DbSet<ServiceType> ServiceTypes { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ExpertiseRecruitment>()
                .HasKey(er => new { er.RecruitmentId, er.ExpertiseId });
            modelBuilder.Entity<ExpertiseRecruitment>()
                .HasOne(r => r.Recruitment)
                .WithMany(er => er.ExpertiseRecruitments)
                .HasForeignKey(r => r.RecruitmentId);
            modelBuilder.Entity<ExpertiseRecruitment>()
                .HasOne(e => e.Expertise)
                .WithMany(er => er.ExpertiseRecruitments)
                .HasForeignKey(e => e.ExpertiseId);

            // Recruiter-Comment-JobSeeker
            // Configuare many-to-many relationship between JobSeeker and Recruiter (through Comment)
            modelBuilder.Entity<Comment>()
                .HasKey(sc => new { sc.IDJobSeeker, sc.IDRecruiter, sc.IsRecruiterWrite });
            modelBuilder.Entity<Comment>()
                .HasOne(sc => sc.JobSeeker)
                .WithMany(c => c.Comments)
                .HasForeignKey(sc => sc.IDJobSeeker);
            modelBuilder.Entity<Comment>()
                .HasOne(sc => sc.Recruiter)
                .WithMany(s => s.Comments)
                .HasForeignKey(sc => sc.IDRecruiter);


        }
        public L11_HelloWorkDbContext(DbContextOptions<L11_HelloWorkDbContext> options)
            : base(options)
        {

        }

       
    }
}
