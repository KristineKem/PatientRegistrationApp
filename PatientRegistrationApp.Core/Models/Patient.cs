namespace PatientRegistrationApp.Core.Models
{
    public class Patient : Common
    {
        public string Sex { get; set; }
        public Doctor PatientDoctor { get; set; }
    }
}
