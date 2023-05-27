using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class DoctorProfileValidator : IValidate
    {
        public bool IsValid(Patient patient)
        {
            return !string.IsNullOrEmpty(patient?.PatientDoctor.Profile);
        }
    }
}
