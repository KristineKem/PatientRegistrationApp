using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Core.Services
{
    public interface IPatientService : ICommonService<Patient>
    {
        Patient GetByCode(string code);
        List<Patient> GetPatientsByDoctor(string doctor);
        bool DoesPatientAlreadyExist(Patient patient);
    }
}
