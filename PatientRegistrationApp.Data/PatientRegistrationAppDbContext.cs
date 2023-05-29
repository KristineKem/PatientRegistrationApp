using Microsoft.EntityFrameworkCore;
using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Data
{
    public class PatientRegistrationAppDbContext : DbContext, IPatientRegistrationAppDbContext
    {
        public PatientRegistrationAppDbContext(DbContextOptions options) : base(options) { }
        public DbSet<Patient> Patients { get; set; }
    }
}
