using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class DoctorNameValidator : IValidate
    {
        public bool IsValid(Patient patient)
        {
            return !string.IsNullOrEmpty(patient?.PatientDoctor.Name);
        }
    }
}
