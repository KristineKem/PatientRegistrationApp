using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Core.Services
{
    public interface IPatientService : ICommonService<Patient>
    {
        public List<Patient> GetByDoctorName(string doctorName);
        public List<Patient> GetByDoctorCode(int doctorCode);
        bool DoesPatientAlreadyExist(Patient patient);
    }
}
