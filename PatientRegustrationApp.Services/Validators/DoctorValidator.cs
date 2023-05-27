using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class DoctorValidator : IValidate
    {
        public bool IsValid(Patient patient)
        {
            return patient?.PatientDoctor != null;
        }
    }
}
