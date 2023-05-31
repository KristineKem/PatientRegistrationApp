using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Services;
using PatientRegistrationApp.Data;

namespace PatientRegistrationApp.Services
{
    public class PatientService : CommonService<Patient>, IPatientService
    {
        public PatientService(IPatientRegistrationAppDbContext context) : base(context)
        {
        }

        public Patient GetByCode(string code)
        {
            return _context.Patients.FirstOrDefault(p => p.Code == code);
        }

        public List<Patient> GetPatientsByDoctor(string doctor)
        {
            return _context.Patients.Where(p => p.Doctor.ToLower() == doctor.ToLower()).ToList();
        }

        public bool DoesPatientAlreadyExist(Patient patient)
        {
            return _context.Patients.Any(p => p.Name == patient.Name
                                              && p.Code == patient.Code
                                              && p.Town == patient.Town
                                              && p.Sex == patient.Sex
                                              && p.Doctor == patient.Doctor);
        }
    }
}
