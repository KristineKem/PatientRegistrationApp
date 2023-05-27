using PatientRegistrationApp.Core.Models;

namespace PatientRegistrationApp.Core.Validation
{
    public interface IValidate
    {
        public bool IsValid(Patient patient);
    }
}
