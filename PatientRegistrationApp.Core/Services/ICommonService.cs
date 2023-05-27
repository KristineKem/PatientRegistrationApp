using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Core.Services
{
    public interface ICommonService<T> where T : class
    {
        public T? GetByCode<T>(int code) where T : Common;
        public void Add(T entity);

        public void Update(T entity);

        public void Delete(T entity);

        public List<T> GetAll();
    }
}
