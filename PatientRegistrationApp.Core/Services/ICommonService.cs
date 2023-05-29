using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Core.Services
{
    public interface ICommonService<T> where T : class
    {
        public void Add(T entity);

        public void Update(T entity);

        public void Delete(T entity);

        public List<T> GetAll();
    }
}
