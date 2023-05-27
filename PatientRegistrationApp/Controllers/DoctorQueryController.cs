using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Services;
using PatientRegistrationApp.Core.Validation;
using PatientRegistrationApp.Models;

namespace PatientRegistrationApp.Controllers
{
    [Route("admin-api")]
    [ApiController]
    [Authorize]
    public class DoctorQueryController : ControllerBase
    {
        private static readonly object lockObject = new object();
        private readonly IPatientService _patientService;
        private readonly IEnumerable<IValidate> _validators;
        private readonly IMapper _mapper;

        public DoctorQueryController(
            IPatientService patientService,
            IEnumerable<IValidate> validators,
            IMapper mapper)
        {
            _patientService = patientService;
            _validators = validators;
            _mapper = mapper;
        }

        [HttpPut]
        [Route("newPatient")]
        public IActionResult AddPatient(Patient patient)
        {
            lock (lockObject)
            {
                if (_patientService.DoesPatientAlreadyExist(patient))
                    return Conflict();


                if (!_validators.All(validator => validator.IsValid(patient)))
                    return BadRequest();

                _patientService.Add(patient);

                return Created("", patient);
            }
        }

        [HttpDelete]
        [Route("deletePatient/{code}")]
        public IActionResult DeletePatient(int code)
        {
            var findPatient = _patientService.GetByCode<Patient>(code);

            if (findPatient == null)
                return NotFound();

            _patientService.Delete(findPatient);

            return Ok();
        }

        [HttpGet]
        [Route("getPatientsByName/{name}")]
        public IActionResult GetPatientsByDoctorName(string name)
        {
            var patients = _patientService.GetByDoctorName(name);

            if(patients == null)
                return NotFound();

            var mappedPatients = _mapper.Map<PatientSearchForm[]>(patients);

            return Ok(mappedPatients);
        }

        [HttpGet]
        [Route("getPatientsByCode/{code}")]
        public IActionResult GetPatientsByDoctorCode(int code)
        {
            var patients = _patientService.GetByDoctorCode(code);

            if (patients == null)
                return NotFound();

            var mappedPatients = _mapper.Map<PatientSearchForm[]>(patients);

            return Ok(mappedPatients);
        }
    }
}
