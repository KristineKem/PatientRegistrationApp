namespace PatientRegistrationApp.Core.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string Town { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Sex { get; set; }
        public string Doctor { get; set; }
    }
}
