using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class DoctorCodeValidator : IValidate
    {
        public bool IsValid(Patient patient)
        {
            return patient?.PatientDoctor.Code != null;
        }
    }
}
