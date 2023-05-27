using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Validation;

namespace PatientRegistrationApp.Services.Validators
{
    public class PatientValidator : IValidate
    {
        public bool IsValid(Patient? patient)
        {
            return patient != null;
        }
    }
}
