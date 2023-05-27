using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class PatientCodeValidator : IValidate
    {
        public bool IsValid(Patient patient)
        {
            return patient?.Code != null;
        }
    }
}
