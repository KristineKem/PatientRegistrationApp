using Microsoft.EntityFrameworkCore;
using PatientRegistrationApp.Core.Services;
using PatientRegistrationApp.Data;
using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Services
{
    public class CommonService<T> : ICommonService<T> where T : class
    {
        protected readonly IPatientRegistrationAppDbContext _context;

        public CommonService(IPatientRegistrationAppDbContext context)
        {
            _context = context;
        }

        public T? GetByCode<T>(int code) where T : Common
        {
            return _context.Set<T>().SingleOrDefault(p => p.Code == code);
        }
        
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
            _context.SaveChanges();
        }

        public List<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }
    }
}
