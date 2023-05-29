using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Data
{
    public interface IPatientRegistrationAppDbContext
    {
        public DbSet<Patient> Patients { get; set; }

        DbSet<T> Set<T>() where T : class;

        EntityEntry<T> Entry<T>(T entity) where T : class;
        public int SaveChanges();
    }
}
