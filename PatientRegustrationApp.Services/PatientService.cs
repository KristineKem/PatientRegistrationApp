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

        public List<Patient> GetByDoctorName(string doctorName)
        {
            return _context.Patients.Where(p => p.PatientDoctor.Name == doctorName).ToList();
        }

        public List<Patient> GetByDoctorCode(int doctorCode)
        {
            return _context.Patients.Where(p => p.PatientDoctor.Code == doctorCode).ToList();
        }

        public bool DoesPatientAlreadyExist(Patient patient)
        {
            return _context.Patients.Any(p => p.Name == patient.Name
                                              && p.Code == patient.Code
                                              && p.Town == patient.Town
                                              && p.Sex == patient.Sex
                                              && p.PatientDoctor.Name == patient.PatientDoctor.Name
                                              && p.PatientDoctor.Town == patient.PatientDoctor.Town
                                              && p.PatientDoctor.Code == patient.PatientDoctor.Code
                                              && p.PatientDoctor.Profile == patient.PatientDoctor.Profile);
        }
    }
}
